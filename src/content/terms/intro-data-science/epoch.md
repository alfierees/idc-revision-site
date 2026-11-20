---
title: Epoch
subject: intro-data-science
aliases: []
related: ["Gradient Descent", "Loss Function", "Forward Pass", "Early Stopping"]
source_folder: intro-data-science
ai_drafted: true
---

One complete pass through the entire training set (for Derech, all 3,000 records seen once).

## When to use

The training loop repeats forward pass, loss, weight update each epoch, and typical training is 10 to 100 epochs (slide example: loss 0.45 at epoch 1, 0.12 at epoch 10, 0.03 at epoch 50). Watch validation loss across epochs to decide when to stop.

See [[Lecture 8 - Intro to Deep Learning|Lec 8]].
