---
title: Width vs Depth
subject: intro-data-science
aliases: []
related: ["Hidden Layer", "Multi-Layer Perceptron", "Overfitting", "Deep Learning"]
source_folder: intro-data-science
ai_drafted: true
---

Width is the number of neurons in one layer (more patterns at the same level of abstraction); depth is the number of hidden layers (higher-level abstractions built on lower ones). The deep in deep learning is depth.

## When to use

Deeper networks learn more abstract patterns but need more data and training time. The lecture warns that bigger is not always better: for most business problems a 2-layer MLP with a few hundred neurons is plenty, and an oversized model wastes compute and invites [[Overfitting]].

See [[Lecture 8 - Intro to Deep Learning|DS Lec 8]].
