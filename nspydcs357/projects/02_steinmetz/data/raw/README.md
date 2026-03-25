# Raw Data: Steinmetz

The full session data is in `steinmetz_session11.npz` (NumPy archive).

Load with:
```python
data = np.load('steinmetz_session11.npz', allow_pickle=True)
spks = data['spks']  # neurons x time_bins x trials
```

Keys: spks, contrast_left, contrast_right, response, feedback_type, brain_area, etc.
