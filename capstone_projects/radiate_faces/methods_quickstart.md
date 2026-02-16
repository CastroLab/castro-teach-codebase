# RADIATE AU Pipeline — Quick Reference

**Goal**: Turn face photos into numbers we can compare across racial groups.

## The 3-step pipeline

1. **Download faces** (`download_radiate.py`) — Pulls ~1,700 JPEG photos from the ABCD Study site into `data/raw/`. Each filename tells you who's in it: `AF01_AC.jpg` = Asian Female model 01, Anger expression. Five racial groups (Asian, Black, Caucasian, Hispanic, White), eight emotions.

2. **Featurize** (`featurize.py`) — Feeds every photo through Py-Feat, a face analysis library. For each face it outputs a 20-dimensional Action Unit (AU) vector — 20 numbers that describe which facial muscles are active and how strongly (e.g., AU12 = lip corner puller, AU06 = cheek raiser). The result is one big CSV: `data/features/radiate_features.csv`.

3. **Analyze** (`explore_au.ipynb`) — Filters to Asian and Hispanic faces, then compares their AU vectors with heatmaps and distance histograms. Are the same muscles firing for the same emotions? How much variation is there within each group?

## What's in the CSV

Each row = one face photo. The key columns:

- `race`, `gender`, `emotion_label` — parsed from the filename
- `AU01` through `AU43` — the 20 AU intensity values (this is the feature vector)
- `image_path` — where the original JPEG lives

## Running it

```bash
pip install -r requirements.txt
python download_radiate.py
python featurize.py
# then open explore_au.ipynb
```
