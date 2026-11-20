---
title: Pixel
subject: intro-data-science
aliases: []
related: ["Convolution", "Filter", "Feature Map", "Unstructured Data"]
source_folder: intro-data-science
ai_drafted: true
---

The smallest unit of an image, holding a numeric brightness or colour value. An image is a matrix of pixels: grayscale uses one number per pixel from 0 (black) to 255 (white), and RGB colour uses three.

## When to use

Used to size and reason about image data: a 1920 by 1080 colour image is $1080 \times 1920 \times 3$ numbers. Raw pixels make poor features (too many, no spatial awareness, not robust to shifts), which is why a [[Filter]] and [[Convolution]] are applied instead.

See [[Lecture 7 - NLP and Image Analysis|DS Lec 7]].
