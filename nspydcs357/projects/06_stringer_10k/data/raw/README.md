# Raw Data: Stringer 10,000 Neurons

One session file (~657 MB): `spont_M161025_MP030_2016-11-20.mat`

Load with:
```python
import scipy.io
data = scipy.io.loadmat('spont_...mat', squeeze_me=True, struct_as_record=False)
Fsp = data['Fsp']           # (10164, 15761) -- neurons x timepoints
run = data['beh'].runSpeed   # (15761,)
pupil = data['beh'].pupil.area  # (15761,)
```

Additional sessions available at:
https://figshare.com/articles/dataset/6163622
