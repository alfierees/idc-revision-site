---
title: Early Stopping
subject: intro-data-science
aliases: []
related: ["Overfitting", "Epoch", "Loss Function", "Neural Network"]
source_folder: intro-data-science
ai_drafted: true
---

Stop training when the validation loss stops improving, to avoid overfitting. Training loss keeps falling, but validation loss eventually turns upward as the network starts memorising.

## When to use

In scikit-learn's `MLPClassifier` it is `early_stopping=True`, which holds out part of the training data (`validation_fraction`) and stops after `n_iter_no_change` iterations without improvement. The PS 07 contrast is a large (256, 128, 64) network that overfits 4,000 rows versus a smaller (64, 32) one with early stopping.

See [[Lecture 8 - Intro to Deep Learning|Lec 8]].
