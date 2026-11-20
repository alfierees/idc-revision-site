---
title: Convolution
subject: intro-data-science
aliases: []
related: ["Filter", "Feature Map", "Pixel", "Convolutional Neural Network"]
source_folder: intro-data-science
ai_drafted: true
---

The slide, multiply, sum operation: lay a small filter over the pixels beneath it, multiply each filter value by the pixel under it, and add them up to get one output value. Repeating this across the image gives a [[Feature Map]].

## When to use

It is how an image is turned into features, using a [[Filter]] such as an edge detector. The lecture's worked example gives 665 at one position for the edge filter; the slides describe it in words only, and strictly the operation is cross-correlation (the kernel is not flipped).

See [[Lecture 7 - NLP and Image Analysis|Lec 7]].
