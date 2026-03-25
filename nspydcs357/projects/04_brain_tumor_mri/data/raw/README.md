# Raw Data: Brain Tumor MRI

~7,200 JPEG images organized as:
```
Training/
  glioma/
  meningioma/
  notumor/
  pituitary/
Testing/
  (same structure)
```

Load with PIL/Pillow:
```python
from PIL import Image
img = Image.open('Training/glioma/Tr-gl_0001.jpg')
```
