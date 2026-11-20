---
title: Filter
subject: intro-data-science
aliases: ["filters"]
related: ["Convolution", "Feature Map", "Pixel", "Convolutional Neural Network"]
source_folder: intro-data-science
ai_drafted: true
---

A filter (kernel) is a small grid of numbers, usually 3 by 3, that slides across an image to detect a pattern such as an edge. [[Convolution]] is the slide, multiply, sum operation.

## When to use

In PS 06 an edge filter and a blur filter are applied to a noisy image; blurring first gives cleaner edges because it smooths the noise. A [[Convolutional Neural Network]] learns its own filters instead of using hand-designed ones.

See [[Lecture 7 - NLP and Image Analysis|Lec 7]].
