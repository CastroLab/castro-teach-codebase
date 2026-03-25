# Raw Data: Motor Imagery EEG

EDF files for 5 subjects (S001-S005), 14 runs each.

Runs: R01=eyes open, R02=eyes closed, R03/07/11=execute fists,
R04/08/12=imagine fists, R05/09/13=execute fists/feet, R06/10/14=imagine fists/feet

Load with MNE:
```python
import mne
raw = mne.io.read_raw_edf('S001/S001R03.edf', preload=True)
```

Full dataset (109 subjects): https://physionet.org/content/eegmmidb/1.0.0/
