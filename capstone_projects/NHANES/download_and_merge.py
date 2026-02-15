"""
NHANES 2013-2014: Olfactory + Cognitive Decline Merge Script
=============================================================
Downloads and merges three NHANES 2013-2014 datasets:
  - CSX_H.XPT : Taste & Smell Examination (olfactory test, ages 40+)
  - CFQ_H.XPT : Cognitive Functioning (CERAD, Animal Fluency, DSST, ages 60+)
  - DEMO_H.XPT: Demographics (all participants)

Merges on SEQN (respondent sequence number) and produces a combined
dataset of participants aged 60+ with both olfactory and cognitive measures.
"""

import os
import requests
import pandas as pd
import numpy as np

DATA_DIR = os.path.dirname(os.path.abspath(__file__))

# NHANES 2013-2014 public data files
DATASETS = {
    "CSX_H.XPT": "https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.XPT",
    "CFQ_H.XPT": "https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.XPT",
    "DEMO_H.XPT": "https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/DEMO_H.XPT",
}

# ── 8-item Pocket Smell Test variables ──────────────────────────────────────
# Each variable has 4 forced-choice options (1-4). The correct answer differs
# per odor. Answer key from the CSX_H codebook:
SMELL_ITEMS = {
    "CSXCHOOD": ("Chocolate",   2),  # 1=Lemon, 2=Chocolate*, 3=Smoke, 4=Black pepper
    "CSXSBOD":  ("Strawberry",  1),  # 1=Strawberry*, 2=Garlic, 3=Leather, 4=Gasoline
    "CSXSMKOD": ("Smoke",       3),  # 1=Garlic, 2=Grass, 3=Smoke*, 4=Peach
    "CSXLEAOD": ("Leather",     3),  # 1=Mint, 2=Flower, 3=Leather*, 4=Apple
    "CSXSOAOD": ("Soap",        1),  # 1=Soap*, 2=Black pepper, 3=Leather, 4=Peanut
    "CSXGRAOD": ("Grape",       2),  # 1=Gasoline, 2=Grape*, 3=Rose, 4=Peanut
    "CSXONOD":  ("Onion",       3),  # 1=Chocolate, 2=Strawberry, 3=Onion*, 4=Fruit punch
    "CSXNGSOD": ("Natural Gas", 4),  # 1=Orange, 2=Cinnamon, 3=Cola, 4=Natural gas*
}

# ── Cognitive functioning variables ─────────────────────────────────────────
COG_VARS = {
    # CERAD Word Learning
    "CFDCST1": "CERAD Trial 1 (0-10)",
    "CFDCST2": "CERAD Trial 2 (0-10)",
    "CFDCST3": "CERAD Trial 3 (0-10)",
    "CFDCSR":  "CERAD Delayed Recall (0-10)",
    "CFDCIT1": "CERAD Trial 1 Intrusions",
    "CFDCIT2": "CERAD Trial 2 Intrusions",
    "CFDCIT3": "CERAD Trial 3 Intrusions",
    "CFDCIR":  "CERAD Delayed Intrusions",
    # Animal Fluency
    "CFDAST":  "Animal Fluency Score",
    # Digit Symbol Substitution
    "CFDDS":   "Digit Symbol Score (0-105)",
}

# ── Key demographic variables ───────────────────────────────────────────────
DEMO_VARS = {
    "RIDAGEYR":  "Age in years",
    "RIAGENDR":  "Gender (1=M, 2=F)",
    "RIDRETH3":  "Race/Hispanic origin w/ NH Asian",
    "DMDEDUC2":  "Education level (adults 20+)",
    "INDFMPIR":  "Family income to poverty ratio",
    "WTMEC2YR":  "Examination weight (2yr)",
    "SDMVPSU":   "Masked variance pseudo-PSU",
    "SDMVSTRA":  "Masked variance pseudo-stratum",
}


def download_file(url, filepath):
    """Download a file if it doesn't already exist locally."""
    if os.path.exists(filepath):
        print(f"  Already exists: {os.path.basename(filepath)}")
        return
    print(f"  Downloading: {os.path.basename(filepath)} ...")
    resp = requests.get(url, timeout=60)
    resp.raise_for_status()
    with open(filepath, "wb") as f:
        f.write(resp.content)
    size_mb = len(resp.content) / 1_048_576
    print(f"  Done ({size_mb:.1f} MB)")


def download_all():
    """Download all required XPT files."""
    print("=" * 60)
    print("Step 1: Downloading NHANES 2013-2014 data files")
    print("=" * 60)
    for filename, url in DATASETS.items():
        download_file(url, os.path.join(DATA_DIR, filename))
    print()


def load_datasets():
    """Load XPT files into DataFrames."""
    print("=" * 60)
    print("Step 2: Loading datasets")
    print("=" * 60)

    smell = pd.read_sas(os.path.join(DATA_DIR, "CSX_H.XPT"))
    cog = pd.read_sas(os.path.join(DATA_DIR, "CFQ_H.XPT"))
    demo = pd.read_sas(os.path.join(DATA_DIR, "DEMO_H.XPT"))

    # Ensure SEQN is integer
    for df, name in [(smell, "Smell"), (cog, "Cognitive"), (demo, "Demographics")]:
        df["SEQN"] = df["SEQN"].astype(int)
        print(f"  {name}: {len(df):,} rows, {len(df.columns)} columns")

    print()
    return smell, cog, demo


def derive_smell_score(smell):
    """
    Compute total smell score (0-8) from the 8 Pocket Smell Test items.
    Each item is a 4-choice forced response (values 1-4).
    The correct answer differs per odor (see SMELL_ITEMS answer key).
    """
    item_cols = list(SMELL_ITEMS.keys())
    for col in item_cols:
        _, correct_val = SMELL_ITEMS[col]
        smell[f"{col}_correct"] = (smell[col] == correct_val).astype(float)
        # Mark as NaN if the original value was NaN (didn't take test)
        smell.loc[smell[col].isna(), f"{col}_correct"] = np.nan

    correct_cols = [f"{c}_correct" for c in item_cols]
    smell["smell_total"] = smell[correct_cols].sum(axis=1)
    # If all items are NaN, total should be NaN too
    smell.loc[smell[correct_cols].isna().all(axis=1), "smell_total"] = np.nan

    # Olfactory dysfunction classification (common cutoffs from literature)
    smell["olfactory_status"] = pd.cut(
        smell["smell_total"],
        bins=[-1, 3, 5, 8],
        labels=["Anosmia (0-3)", "Hyposmia (4-5)", "Normosmia (6-8)"],
    )

    return smell


def derive_cog_scores(cog):
    """Compute derived cognitive scores."""
    # CERAD total learning score (sum of 3 trials, 0-30)
    trial_cols = ["CFDCST1", "CFDCST2", "CFDCST3"]
    cog["cerad_total_learning"] = cog[trial_cols].sum(axis=1)
    cog.loc[cog[trial_cols].isna().any(axis=1), "cerad_total_learning"] = np.nan

    # CERAD total intrusions
    intrusion_cols = ["CFDCIT1", "CFDCIT2", "CFDCIT3", "CFDCIR"]
    cog["cerad_total_intrusions"] = cog[intrusion_cols].sum(axis=1)
    cog.loc[cog[intrusion_cols].isna().any(axis=1), "cerad_total_intrusions"] = np.nan

    return cog


def merge_datasets(smell, cog, demo):
    """Merge datasets on SEQN, producing two outputs:
    - smell_demo: all 40+ participants with smell + demographics (no cognitive)
    - merged_60: 60+ participants with smell + cognitive + demographics
    """
    print("=" * 60)
    print("Step 3: Merging datasets")
    print("=" * 60)

    # Keep relevant columns from demographics
    demo_cols = ["SEQN"] + list(DEMO_VARS.keys())
    demo_subset = demo[demo_cols].copy()

    # Full smell dataset with demographics (ages 40+, no cognitive required)
    smell_demo = smell.merge(demo_subset, on="SEQN", how="left")
    print(f"  Smell + Demographics (40+):   {len(smell_demo):,} participants")

    # Inner join: only participants with BOTH smell AND cognitive data
    merged_60 = smell.merge(cog, on="SEQN", how="inner")
    merged_60 = merged_60.merge(demo_subset, on="SEQN", how="left")
    print(f"  Smell + Cognitive (60+):      {len(merged_60):,} participants")
    print()

    return smell_demo, merged_60


def summarize(merged_60):
    """Print summary statistics of the merged dataset."""
    print("=" * 60)
    print("Step 4: Summary of merged dataset (ages 60+)")
    print("=" * 60)

    print(f"\n  Total participants: {len(merged_60):,}")
    print(f"  Age range: {merged_60['RIDAGEYR'].min():.0f} - {merged_60['RIDAGEYR'].max():.0f}")
    print(f"  Mean age:  {merged_60['RIDAGEYR'].mean():.1f}")

    # Gender
    gender = merged_60["RIAGENDR"].value_counts().sort_index()
    print(f"\n  Gender: Male={gender.get(1, 0):.0f}, Female={gender.get(2, 0):.0f}")

    # Smell score
    print(f"\n  Smell Score (0-8):")
    print(f"    Mean:   {merged_60['smell_total'].mean():.2f}")
    print(f"    Median: {merged_60['smell_total'].median():.1f}")
    print(f"    Std:    {merged_60['smell_total'].std():.2f}")
    print(f"    N with valid score: {merged_60['smell_total'].notna().sum():,}")

    if "olfactory_status" in merged_60.columns:
        print(f"\n  Olfactory Status:")
        for cat in merged_60["olfactory_status"].cat.categories:
            n = (merged_60["olfactory_status"] == cat).sum()
            pct = n / merged_60["olfactory_status"].notna().sum() * 100
            print(f"    {cat}: {n:,} ({pct:.1f}%)")

    # Cognitive scores
    print(f"\n  Cognitive Scores:")
    cog_summary = [
        ("CERAD Total Learning (0-30)", "cerad_total_learning"),
        ("CERAD Delayed Recall (0-10)", "CFDCSR"),
        ("Animal Fluency",             "CFDAST"),
        ("Digit Symbol (0-105)",       "CFDDS"),
    ]
    for label, col in cog_summary:
        if col in merged_60.columns:
            valid = merged_60[col].notna().sum()
            print(f"    {label}: mean={merged_60[col].mean():.1f}, "
                  f"std={merged_60[col].std():.1f}, n={valid:,}")

    # Missing data
    print(f"\n  Missing data:")
    print(f"    Smell total:  {merged_60['smell_total'].isna().sum():,}")
    print(f"    CERAD recall: {merged_60['CFDCSR'].isna().sum():,}")
    print(f"    Animal Fluency: {merged_60['CFDAST'].isna().sum():,}")
    print(f"    Digit Symbol: {merged_60['CFDDS'].isna().sum():,}")
    print()


def save_outputs(smell_demo, merged_60):
    """Save merged datasets to CSV."""
    print("=" * 60)
    print("Step 5: Saving output files")
    print("=" * 60)

    out_smell = os.path.join(DATA_DIR, "nhanes_2013_2014_smell_all_40plus.csv")
    out_60 = os.path.join(DATA_DIR, "nhanes_2013_2014_smell_cognition_60plus.csv")

    smell_demo.to_csv(out_smell, index=False)
    merged_60.to_csv(out_60, index=False)

    print(f"  Saved: {os.path.basename(out_smell)} ({len(smell_demo):,} rows, smell + demographics)")
    print(f"  Saved: {os.path.basename(out_60)} ({len(merged_60):,} rows, smell + cognition + demographics)")
    print()


def main():
    print()
    print("NHANES 2013-2014: Olfactory + Cognitive Decline Merge")
    print("=" * 60)
    print()

    download_all()
    smell, cog, demo = load_datasets()
    smell = derive_smell_score(smell)
    cog = derive_cog_scores(cog)
    smell_demo, merged_60 = merge_datasets(smell, cog, demo)
    summarize(merged_60)
    save_outputs(smell_demo, merged_60)

    print("Done!")
    print("  - 40+ CSV: smell data + demographics (all smell-tested participants)")
    print("  - 60+ CSV: smell + cognition + demographics (your analysis file)")
    print("  - Remember to use survey weights (WTMEC2YR) for population estimates.")
    print()
    return smell_demo, merged_60


if __name__ == "__main__":
    main()
