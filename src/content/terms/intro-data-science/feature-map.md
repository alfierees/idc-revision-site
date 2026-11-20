---
title: Feature Map
subject: intro-data-science
aliases: []
related: ["Filter", "Convolution", "Convolutional Neural Network", "Document-Term Matrix"]
source_folder: intro-data-science
ai_drafted: true
---

The output grid produced by applying one filter across an image. Real systems apply dozens or hundreds of filters, and the stack of feature maps is a numeric description of the image.

## When to use

It plays the same role for images as the [[Document-Term Matrix]] does for text. A 3 by 3 filter slid across the image with no padding gives a map smaller than the image (the lecture's code example gives a $6 \times 6$ map).

See [[Lecture 7 - NLP and Image Analysis|Lec 7]].
