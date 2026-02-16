"""Download and extract the RADIATE face stimulus set (JPEG images only).

Downloads two ZIP archives from the ABCD Study site containing ~1,721
photographs of 109 racially diverse models posing ~16 facial expressions.
Skips downloads if files already exist.
"""

import os
import re
import zipfile
from collections import Counter
from pathlib import Path

import requests
from tqdm import tqdm

# RADIATE JPEG ZIP URLs (skip BMP — JPEGs are sufficient for AU detection)
URLS = [
    "https://abcdstudy.org/newsletter/fMRI_files/RADIATE_JPEGS1.zip",
    "https://abcdstudy.org/newsletter/fMRI_files/RADIATE_JPEGS2.zip",
]

DATA_DIR = Path(__file__).parent / "data"
RAW_DIR = DATA_DIR / "raw"
ZIP_DIR = DATA_DIR / "zips"


def download_file(url: str, dest: Path) -> None:
    """Download a file with a tqdm progress bar. Skips if dest exists."""
    if dest.exists():
        print(f"  Already downloaded: {dest.name}")
        return

    response = requests.get(url, stream=True, timeout=60)
    response.raise_for_status()
    total = int(response.headers.get("content-length", 0))

    with open(dest, "wb") as f, tqdm(
        total=total, unit="B", unit_scale=True, desc=dest.name
    ) as pbar:
        for chunk in response.iter_content(chunk_size=8192):
            f.write(chunk)
            pbar.update(len(chunk))


def extract_jpegs(zip_path: Path, dest_dir: Path) -> tuple[list[str], list[str]]:
    """Extract JPEG files from a ZIP into dest_dir. Returns (extracted, skipped)."""
    extracted = []
    skipped = []

    with zipfile.ZipFile(zip_path, "r") as zf:
        for member in zf.namelist():
            # Skip directories and macOS resource forks
            if member.endswith("/") or "__MACOSX" in member:
                continue

            lower = member.lower()
            if lower.endswith((".jpg", ".jpeg")):
                # Flatten: extract to dest_dir using just the filename
                filename = os.path.basename(member)
                if not filename:
                    continue
                target = dest_dir / filename
                if not target.exists():
                    with zf.open(member) as src, open(target, "wb") as dst:
                        dst.write(src.read())
                extracted.append(filename)
            else:
                skipped.append(os.path.basename(member))

    return extracted, skipped


def detect_filename_pattern(filenames: list[str]) -> None:
    """Inspect filenames and report the naming convention."""
    print("\n--- Filename Pattern Analysis ---")

    # Show a sample
    sample = sorted(filenames)[:10]
    print(f"Sample filenames ({len(sample)} of {len(filenames)}):")
    for name in sample:
        print(f"  {name}")

    # Try to detect segments by splitting on common delimiters
    delimiters = ["_", "-", " "]
    for delim in delimiters:
        segment_counts = Counter()
        for name in filenames:
            stem = Path(name).stem
            n_segments = len(stem.split(delim))
            segment_counts[n_segments] += 1

        if len(segment_counts) <= 3:  # consistent pattern
            most_common = segment_counts.most_common(1)[0]
            if most_common[1] > len(filenames) * 0.5:
                print(f"\nMost filenames split by '{delim}' into {most_common[0]} segments "
                      f"({most_common[1]}/{len(filenames)} files)")
                # Show segment values for first file
                example = Path(sorted(filenames)[0]).stem
                segments = example.split(delim)
                print(f"  Example: {example}")
                for i, seg in enumerate(segments):
                    print(f"    segment[{i}]: {seg}")

    # Collect unique values per segment position for the dominant delimiter
    print("\nUnique values per segment (using '_' delimiter):")
    segments_by_pos: dict[int, set[str]] = {}
    for name in filenames:
        parts = Path(name).stem.split("_")
        for i, part in enumerate(parts):
            segments_by_pos.setdefault(i, set()).add(part)

    for pos in sorted(segments_by_pos):
        vals = sorted(segments_by_pos[pos])
        if len(vals) <= 20:
            print(f"  position {pos} ({len(vals)} unique): {vals}")
        else:
            print(f"  position {pos} ({len(vals)} unique): {vals[:10]} ...")

    # Check for common race/gender/emotion keywords
    all_text = " ".join(Path(f).stem.lower() for f in filenames)
    keywords = {
        "race": ["asian", "black", "caucasian", "hispanic", "white", "latino", "latina"],
        "gender": ["male", "female", "man", "woman", "m", "f"],
        "emotion": ["happy", "sad", "angry", "anger", "fear", "surprise", "disgust",
                     "neutral", "calm", "contempt", "embarrass", "pride", "pain"],
    }
    print("\nKeyword detection in filenames:")
    for category, words in keywords.items():
        found = [w for w in words if w in all_text]
        if found:
            print(f"  {category}: {found}")


def main() -> None:
    # Create directories
    RAW_DIR.mkdir(parents=True, exist_ok=True)
    ZIP_DIR.mkdir(parents=True, exist_ok=True)

    # Download ZIPs
    print("=== Downloading RADIATE JPEG archives ===\n")
    zip_paths = []
    for url in URLS:
        filename = url.split("/")[-1]
        dest = ZIP_DIR / filename
        download_file(url, dest)
        zip_paths.append(dest)

    # Extract JPEGs
    print("\n=== Extracting JPEG images ===\n")
    all_extracted = []
    all_skipped = []
    for zp in zip_paths:
        print(f"Extracting {zp.name} ...")
        extracted, skipped = extract_jpegs(zp, RAW_DIR)
        all_extracted.extend(extracted)
        all_skipped.extend(skipped)
        print(f"  {len(extracted)} images extracted, {len(skipped)} non-image files skipped")

    # Summary
    jpeg_files = sorted(f.name for f in RAW_DIR.iterdir()
                        if f.suffix.lower() in (".jpg", ".jpeg"))
    print(f"\n=== Summary ===")
    print(f"Total JPEG images in data/raw/: {len(jpeg_files)}")

    if all_skipped:
        unique_skipped = sorted(set(all_skipped))
        print(f"\nNon-image files found in archives ({len(unique_skipped)}):")
        for s in unique_skipped:
            if s:  # skip empty strings
                print(f"  {s}")

    # Detect filename pattern
    if jpeg_files:
        detect_filename_pattern(jpeg_files)


if __name__ == "__main__":
    main()
