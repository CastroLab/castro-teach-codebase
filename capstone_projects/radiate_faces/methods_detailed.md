# RADIATE AU Pipeline — Technical Methods

## 1. Data Acquisition (`download_radiate.py`)

The RADIATE stimulus set comprises ~1,721 JPEG photographs of 112 racially diverse models posing 8 facial expressions (Anger, Calm, Disgust, Fear, Happy, Neutral, Sad, Surprise). Images were downloaded from the ABCD Study site as two ZIP archives:

- `RADIATE_JPEGS1.zip`
- `RADIATE_JPEGS2.zip`

The script downloads both archives into `data/zips/`, then extracts all `.jpg`/`.jpeg` files flat into `data/raw/`, skipping macOS resource forks and directory entries. Downloads and extractions are idempotent (skip if files already exist).

### Filename convention

Each filename encodes model metadata:

```
{Race}{Gender}{Number}_{EmotionCode}.jpg
```

| Position | Values | Meaning |
|---|---|---|
| Race (1st char) | A, B, C, H, W, O | Asian, Black, Caucasian, Hispanic, White, Other |
| Gender (2nd char) | F, M | Female, Male |
| Number | 01–99 | Model ID within race × gender |
| Emotion code | AC, AO, CC, CO, DC, DO, ... SUR | First letter = emotion, second = mouth state (C=closed, O=open); SUR = Surprise |

Example: `AF01_AC.jpg` → Asian Female model 01, Anger Closed-mouth.

## 2. Featurization (`featurize.py`)

Each image is processed through [Py-Feat](https://py-feat.org/) (`feat.Detector`) on CPU with `output_size=512` and `batch_size=1`. For each image the detector returns:

| Feature group | Columns | Description |
|---|---|---|
| Action Units | 20 (`AU01`–`AU43`) | Continuous intensity estimates (float) for FACS action units |
| Emotion scores | 7 (`anger`, `disgust`, `fear`, `happiness`, `sadness`, `surprise`, `neutral`) | Softmax-like probability per basic emotion |
| Head pose | 3 (`Pitch`, `Roll`, `Yaw`) | Euler angles in degrees |
| Landmarks | 136 (`x_0`–`x_67`, `y_0`–`y_67`) | 68 facial landmark (x, y) coordinates |
| Face detection | 5 (`FaceRectX/Y/Width/Height`, `FaceScore`) | Bounding box and confidence |
| Identity embedding | 89 (`Identity`, `Identity_1`–`Identity_88`) | ArcFace-style identity vector |

Only the first detected face per image is retained. Detector failures are logged but excluded from the output.

The 20 AU columns extracted by Py-Feat are:

```
AU01  AU02  AU04  AU05  AU06  AU07  AU09  AU10
AU11  AU12  AU14  AU15  AU17  AU20  AU23  AU24
AU25  AU26  AU28  AU43
```

Parsed filename metadata is merged with detector output on `image_file`, yielding a single CSV at `data/features/radiate_features.csv` (1,756 rows × 692 columns).

## 3. Exploratory Analysis (`explore_au.ipynb`)

The notebook filters to Asian and Hispanic models and performs three analyses:

### a. Sample face grid
For each race × {Happy, Anger, Disgust, Neutral}, the first female model is selected. Displayed as a 2×4 image grid using `PIL.Image` + `matplotlib`.

### b. AU heatmaps
- **Individual heatmap**: 20-dim AU vectors for the 8 sample faces, columns sorted by mean intensity, annotated with `sns.heatmap`.
- **Group-mean heatmap**: AU vectors averaged over all models within each (race, emotion) group. This gives 16 rows (2 races × 8 emotions) and reveals systematic AU magnitude differences across groups.

### c. Pairwise distance distributions
For each of {Happy, Anger, Neutral}, within-race pairwise Euclidean distances are computed over the 20-dim AU space via `scipy.spatial.distance.pdist`. Overlaid density histograms compare the spread of Asian vs Hispanic AU vectors, with dashed lines at each distribution's mean.

## Project structure

```
radiate_faces/
├── download_radiate.py          # Step 1: download & extract images
├── featurize.py                 # Step 2: Py-Feat AU/emotion/landmark extraction
├── explore_au.ipynb             # Step 3: Asian vs Hispanic AU comparison
├── requirements.txt             # py-feat, pandas, numpy, requests, tqdm
├── data/
│   ├── zips/                    # Downloaded ZIP archives
│   ├── raw/                     # ~1,721 extracted JPEG images
│   └── features/
│       └── radiate_features.csv # 1,756 rows × 692 columns
```

## Reproducing

```bash
pip install -r requirements.txt
python download_radiate.py    # ~5 min (network dependent)
python featurize.py           # ~30–60 min on CPU
jupyter lab explore_au.ipynb
```
