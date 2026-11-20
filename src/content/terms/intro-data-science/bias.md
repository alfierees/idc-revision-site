---
title: Bias
subject: intro-data-science
aliases: []
related: ["Perceptron", "Weight", "Activation Function"]
source_folder: intro-data-science
ai_drafted: true
---

A constant a neuron adds to its weighted sum before the activation; it shifts the decision boundary. In the lecture's rainy-evening example the bias is $-0.1$, giving $z = 0.4 + 0.8 + 0 - 0.1 = 1.1$.

## When to use

Here "bias" means the neuron's constant term, not the underfitting sense in the [[Bias-Variance Tradeoff]]; do not confuse them. When counting a network's parameters, each neuron after the input layer has one bias plus one [[Weight]] per incoming connection (the demo network has 8 + 3 = 11 parameters).

See [[Lecture 8 - Intro to Deep Learning|Lec 8]].
