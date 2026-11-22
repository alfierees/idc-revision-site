---
title: Weight
subject: intro-data-science
aliases: ["weights"]
related: ["Perceptron", "Bias", "Neural Network", "Gradient Descent", "Backpropagation"]
source_folder: intro-data-science
ai_drafted: true
---

A number controlling how much one input matters to a neuron; it is learned in training. All weights start as random numbers.

## When to use

Used in the weighted sum $z = w_1 x_1 + w_2 x_2 + \dots + b$ in every forward-pass calculation (e.g. weights 0.5, 0.8 and 0.1 on hour, rain and events). Training adjusts each weight by [[Gradient Descent]], with [[Backpropagation]] tracing how much each contributed to the error.

See [[Lecture 8 - Intro to Deep Learning|DS Lec 8]].
