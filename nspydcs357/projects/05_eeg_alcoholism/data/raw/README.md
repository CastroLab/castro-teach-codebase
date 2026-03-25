# Raw Data: EEG Alcoholism

Nested gzipped trial files organized by subject. Subject IDs starting with
'co2a' = alcoholic, 'co2c' = control.

Each .gz file contains one trial: 64 channels x 256 timepoints.
Format per line: trial_num channel_name sample_num voltage

SMNI_CMI_TRAIN/ and SMNI_CMI_TEST/ contain the full train/test split.
smni_eeg_data/ contains a smaller 2-subject subset to get started.
