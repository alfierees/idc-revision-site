---
title: Sigmoid Function
subject: intro-data-science
aliases: ["Sigmoid"]
related: ["Logistic Regression", "Activation Function", "ReLU", "Perceptron"]
source_folder: intro-data-science
ai_drafted: true
---

The function $\sigma(z) = 1/(1+e^{-z})$ that squashes any real number into the range from 0 to 1 so it can be read as a probability.

## When to use

It is what turns the linear score of [[Logistic Regression]] into a probability, classified as 1 if above 0.5 (the threshold is tunable). Key values: $\sigma(0) = 0.5$, $\sigma(2) \approx 0.88$, $\sigma(-2) \approx 0.12$. In Lecture 8 it is the output-layer activation of the network.

See [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]].
