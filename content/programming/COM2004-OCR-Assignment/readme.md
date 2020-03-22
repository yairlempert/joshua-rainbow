---
title: "OCR in Python"
description: "An assignment @ The University of Sheffield to perform some Optical Character Recognition in Python."
github: "https://github.com/TheTeaCat/COM2004-OCR-Assignment"
date: "19/12/16"
---

# COM2004-OCR-Assignment

This was an assignment to perform OCR given several pages of text and their bounding boxes, one set of which was entirely clean, and the other of which was progressively noisier.

 - A description of the assignment can be found in [Provided_README.md](https://github.com/TheTeaCat/COM2004-OCR-Assignment/blob/master/Provided_README.md)

 - A description of my solution can be found in [report.md](https://github.com/TheTeaCat/COM2004-OCR-Assignment/blob/master/report.md)

Those reading and judging the code should bear in mind that this was a _programming experiment_.

---

**All files except this readme form the assignment.**

Those modified/created by me were:
 - [code/system.py](https://github.com/TheTeaCat/COM2004-OCR-Assignment/blob/master/code/system.py)
 - [code/data/model.json.gz](https://github.com/TheTeaCat/COM2004-OCR-Assignment/blob/master/code/data/model.json.gz)
 - [code/evaluate.py](https://github.com/TheTeaCat/COM2004-OCR-Assignment/blob/master/code/evaluate.py) (I modified this to show misclassifications)
 - [report.md](https://github.com/TheTeaCat/COM2004-OCR-Assignment/blob/master/report.md)
 - [Results.xlsx](https://github.com/TheTeaCat/COM2004-OCR-Assignment/blob/master/Results.xlsx) (although this was not part of the submission)

## Setup

See [Provided_README.md](https://github.com/TheTeaCat/COM2004-OCR-Assignment/blob/master/Provided_README.md)

If you're lazy (I am too):

```
python train.py
python evaluate.py dev
```

## Performance

Performance on the unseen test pages (not provided, used for marking) and the provided test pages 
were as follows:

| Page   | % Correct (unseen) | % Correct (provided) | % Correct (baseline*) |
| ------ | ------------------ | -------------------- | --------------------- |
| Page 1 | 96.3               | 97.6                 | 98                    |
| Page 2 | 96.6               | 98.7                 | 98                    |
| Page 3 | 94.1               | 96.5                 | 83                    |
| Page 4 | 82.9               | 86.8                 | 58                    |
| Page 5 | 72.1               | 74.0                 | 39                    |
| Page 6 | 59.5               | 63.8                 | 29                    |
| Avg.   | 83.6               | 86.2                 | 67.5                  |

**The baseline approach is detailed in [Provided_README.md](https://github.com/TheTeaCat/COM2004-OCR-Assignment/blob/master/Provided_README.md#overall-performance-10-marks) as "the approximate performance that you should expect using a basic nearest neighbour and PCA based approach".*



## Other Solutions

I've found one other solution to this assignment on GitHub from my class:

 - [@xuan525/OCR-System-Assignment](https://github.com/xuan525/OCR-System-Assignment)

## Provided Pages

| Page 1                                | Page 2                                | Page 3                                |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| ![Page 1](./img/page.1.png) | ![Page 2](./img/page.2.png) | ![Page 3](./img/page.3.png) |

| Page 4                                | Page 5                                | Page 6                                |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| ![Page 4](./img/page.4.png) | ![Page 5](./img/page.5.png) | ![Page 6](./img/page.6.png) |
