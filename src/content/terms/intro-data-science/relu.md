---
title: ReLU
subject: intro-data-science
aliases: ["Rectified Linear Unit"]
related: ["Activation Function", "Sigmoid Function", "Perceptron", "Hidden Layer"]
source_folder: intro-data-science
ai_drafted: true
---

The Rectified Linear Unit activation, $\max(0, z)$: it passes positive values through unchanged and turns negatives into zero.

## When to use

Computed by hand in forward-pass questions, e.g. ReLU(1.1) is 1.1 and ReLU(-0.5) is 0. The lecture's standard recipe is ReLU in the [[Hidden Layer]]s (fast and simple) and [[Sigmoid Function]] in the output layer when you need a probability.

See [[Lecture 8 - Intro to Deep Learning|DS Lec 8]].
