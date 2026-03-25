# Raw Data: Haxby fMRI

Full fMRI volumes (NIfTI format) plus anatomical image and masks.

Load with nilearn:
```python
from nilearn import datasets
haxby = datasets.fetch_haxby(data_dir='./', subjects=1)
```

Contains ~1,452 brain volumes at ~40,000 voxels each.
