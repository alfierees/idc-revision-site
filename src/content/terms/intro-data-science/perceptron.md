---
title: Perceptron
subject: intro-data-science
aliases: ["neuron"]
related: ["Weight", "Bias", "Activation Function", "Multi-Layer Perceptron", "Sigmoid Function", "ReLU"]
source_folder: intro-data-science
ai_drafted: true
---

The basic unit of a neural network: a weighted sum of its inputs plus a [[Bias]], passed through an [[Activation Function]] to give one output.

## When to use

Exam questions ask you to compute one by hand: multiply each input by its [[Weight]], add the bias to get $z$, then apply ReLU or sigmoid. Alone it only learns a linear decision boundary (like [[Logistic Regression]]), so it cannot capture an interaction such as rain mattering more in the evening.

See [[Lecture 8 - Intro to Deep Learning|DS Lec 8]].
