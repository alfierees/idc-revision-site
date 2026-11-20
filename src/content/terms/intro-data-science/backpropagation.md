---
title: Backpropagation
subject: intro-data-science
aliases: []
related: ["Forward Pass", "Loss Function", "Gradient Descent", "Weight"]
source_folder: intro-data-science
ai_drafted: true
---

Tracing the error at the output backward through the network, adjusting each weight in proportion to how much it contributed to that error. The lecture explains it conceptually (the relay-team analogy) and gives no formulas.

## When to use

It is step 4 ("Backward") of the training loop: initialise, [[Forward Pass]], [[Loss Function]], backward, then update the weights with [[Gradient Descent]]. In an exam, name it as the credit-assignment step rather than deriving it.

See [[Lecture 8 - Intro to Deep Learning|Lec 8]].
