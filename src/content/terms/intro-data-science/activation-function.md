---
title: Activation Function
subject: intro-data-science
aliases: ["activation functions"]
related: ["Perceptron", "ReLU", "Sigmoid Function", "Weight", "Bias", "Multi-Layer Perceptron"]
source_folder: intro-data-science
ai_drafted: true
---

A non-linear function applied to a neuron's weighted sum, which is what lets a network learn curves. Without it, stacking linear layers collapses into one linear layer, so a 100-layer network would be no better than a single layer.

## When to use

The standard recipe in Lecture 8 is [[ReLU]] for hidden layers and the [[Sigmoid Function]] for an output layer that must give a probability. Expect to be asked why a network cannot skip the activation, or to apply one to a weighted sum such as $z = 1.1$.

See [[Lecture 8 - Intro to Deep Learning|Lec 8]].
