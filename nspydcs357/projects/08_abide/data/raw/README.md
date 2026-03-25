# Raw Data: ABIDE

Preprocessed resting-state fMRI (NIfTI) for 50 subjects from Pittsburgh.
Phenotypic CSV with diagnosis, age, sex, IQ.

Load with nilearn:
```python
from nilearn import datasets
abide = datasets.fetch_abide_pcp(data_dir='./', n_subjects=50,
    pipeline='cpac', band_pass_filtering=True, global_signal_regression=True)
```

Full dataset (1,100+ subjects): http://fcon_1000.projects.nitrc.org/indi/abide/
