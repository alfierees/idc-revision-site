---
title: Forward Pass
subject: intro-data-science
aliases: []
related: ["Hidden Layer", "Multi-Layer Perceptron", "Activation Function", "Weight", "Loss Function"]
source_folder: intro-data-science
ai_drafted: true
---

The forward pass feeds an input through the network from left to right, layer by layer (weighted sums, then activation, then the next layer's inputs), to produce a prediction.

## When to use

Exam questions ask you to trace a forward pass by hand through a small network (for example 3 inputs, 2 hidden neurons, 1 output). It is the first step of the training loop: forward pass, compute [[Loss Function]], adjust weights.

See [[Lecture 8 - Intro to Deep Learning|Lec 8]].
