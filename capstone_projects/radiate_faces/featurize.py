"""Batch-extract Py-Feat features (AUs, emotions, landmarks, pose) from RADIATE images.

Processes all JPEG images in data/raw/ through Py-Feat's Detector and saves
a combined feature matrix with parsed filename metadata to data/features/radiate_features.csv.
"""

import re
import sys
import time
from pathlib import Path

import pandas as pd
from feat import Detector
from tqdm import tqdm

DATA_DIR = Path(__file__).parent / "data"
RAW_DIR = DATA_DIR / "raw"
FEATURES_DIR = DATA_DIR / "features"
OUTPUT_CSV = FEATURES_DIR / "radiate_features.csv"


def parse_filename(filename: str) -> dict:
    """Parse race, gender, emotion, and model ID from a RADIATE filename.

    RADIATE filenames follow the pattern: {Race}{Gender}{Number}_{EmotionCode}.jpg
    Examples: AF01_AC.jpg, BM12_HO.jpg, CF03_SUR.jpg

    Where:
      - First char = race: A=Asian, B=Black, C=Caucasian, H=Hispanic
      - Second char = gender: F=Female, M=Male
      - Digits = model number
      - After underscore = emotion code:
        A=Anger, C=Calm, D=Disgust, F=Fear, H=Happy, N=Neutral, S=Sad, SUR/Sur=Surprise
        Second letter: C=Closed mouth, O=Open mouth, E=Eyes (variant)
    """
    stem = Path(filename).stem

    metadata = {
        "image_file": filename,
        "model_id": None,
        "race": None,
        "gender": None,
        "emotion_label": None,
    }

    # RADIATE standard: "AF01_AC" -> model=AF01, emotion=AC
    match = re.match(r"^([ABCHWO])([FM])(\d+)_([A-Za-z]+)$", stem)
    if match:
        race_code, gender_code, model_num, emotion_code = match.groups()
        race_map = {
            "A": "Asian", "B": "Black", "C": "Caucasian",
            "H": "Hispanic", "W": "White", "O": "Other",
        }
        gender_map = {"F": "Female", "M": "Male"}
        emotion_map = {
            "A": "Anger", "C": "Calm", "D": "Disgust", "F": "Fear",
            "H": "Happy", "N": "Neutral", "S": "Sad", "SUR": "Surprise",
        }
        metadata["race"] = race_map.get(race_code, race_code)
        metadata["gender"] = gender_map.get(gender_code, gender_code)
        metadata["model_id"] = f"{race_code}{gender_code}{model_num}"
        # Map emotion: first letter (or full code for SUR/Sur)
        emo_upper = emotion_code.upper()
        if emo_upper.startswith("SUR"):
            metadata["emotion_label"] = "Surprise"
        else:
            metadata["emotion_label"] = emotion_map.get(emo_upper[0], emo_upper)
        return metadata

    # Fallback: could not parse
    return metadata


def main() -> None:
    # Discover images
    image_extensions = {".jpg", ".jpeg"}
    image_paths = sorted(
        p for p in RAW_DIR.iterdir()
        if p.suffix.lower() in image_extensions
    )

    if not image_paths:
        print(f"No JPEG images found in {RAW_DIR}")
        print("Run download_radiate.py first.")
        sys.exit(1)

    print(f"Found {len(image_paths)} images in {RAW_DIR}")

    # Parse metadata from filenames
    print("Parsing filename metadata ...")
    metadata_rows = []
    parse_failures = 0
    for p in image_paths:
        meta = parse_filename(p.name)
        meta["image_path"] = str(p)
        if meta["race"] is None and meta["emotion_label"] is None:
            parse_failures += 1
        metadata_rows.append(meta)

    metadata_df = pd.DataFrame(metadata_rows)
    print(f"  Parsed: {len(metadata_rows) - parse_failures} OK, {parse_failures} could not extract metadata")

    if parse_failures > len(image_paths) * 0.5:
        print("\n  WARNING: More than half of filenames could not be parsed.")
        print("  Check the filename convention and update parse_filename().")
        print("  Sample filenames:")
        for p in image_paths[:5]:
            print(f"    {p.name}")
        print()

    # Initialize Py-Feat Detector
    print("\nInitializing Py-Feat Detector (CPU) ...")
    detector = Detector(device="cpu")
    print("  Detector ready.")

    # Process images one at a time for consistent AU extraction
    print(f"\nProcessing {len(image_paths)} images (batch_size=1) ...")
    print("  Estimated time: ~1-2 sec/image\n")

    all_results = []
    failures = []
    start_time = time.time()

    for i, img_path in enumerate(tqdm(image_paths, desc="Detecting faces")):
        try:
            result = detector.detect_image(
                [str(img_path)],
                batch_size=1,
                output_size=512,
            )
            if result is not None and len(result) > 0:
                # Take the first detected face (should be one face per RADIATE image)
                row = result.iloc[0:1].copy()
                row["image_file"] = img_path.name
                all_results.append(row)
            else:
                failures.append(img_path.name)
        except Exception as e:
            failures.append(img_path.name)
            if i < 5:  # Print first few errors for debugging
                print(f"  Error on {img_path.name}: {e}")

    elapsed = time.time() - start_time
    print(f"\nDetection complete in {elapsed / 60:.1f} minutes")
    print(f"  Successful: {len(all_results)}")
    print(f"  Failed: {len(failures)}")

    if not all_results:
        print("No faces detected. Check that images are valid.")
        sys.exit(1)

    # Combine all detection results
    features_df = pd.concat(all_results, ignore_index=True)

    # Merge with filename metadata
    merged = metadata_df.merge(features_df, on="image_file", how="inner")

    # Save
    FEATURES_DIR.mkdir(parents=True, exist_ok=True)
    merged.to_csv(OUTPUT_CSV, index=False)

    print(f"\n=== Summary ===")
    print(f"Feature matrix shape: {merged.shape}")
    print(f"Saved to: {OUTPUT_CSV}")

    # Show column groups
    au_cols = [c for c in merged.columns if c.startswith("AU") and c[2:].replace(".", "").isdigit()]
    emo_cols = [c for c in merged.columns if c in
                {"anger", "disgust", "fear", "happiness", "sadness", "surprise", "neutral"}]
    pose_cols = [c for c in merged.columns if c in {"Pitch", "Roll", "Yaw"}]
    landmark_cols = [c for c in merged.columns if c.startswith("x_") or c.startswith("y_")]

    print(f"\nFeature groups:")
    print(f"  Action Units: {len(au_cols)} columns")
    print(f"  Emotions: {len(emo_cols)} columns")
    print(f"  Head pose: {len(pose_cols)} columns")
    print(f"  Landmarks: {len(landmark_cols)} columns")
    print(f"  Metadata: image_file, image_path, model_id, race, gender, emotion_label")

    if failures:
        print(f"\nFailed images ({len(failures)}):")
        for f in failures[:10]:
            print(f"  {f}")
        if len(failures) > 10:
            print(f"  ... and {len(failures) - 10} more")


if __name__ == "__main__":
    main()
