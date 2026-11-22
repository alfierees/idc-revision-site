---
title: Law of Total Probability
subject: statistics-a
aliases: []
related: ["Conditional Probability", "Tree Diagram", "Bayes' Theorem", "Multiplication Formula"]
source_folder: statistics-a
ai_drafted: true
---

$P(B)=\sum_i P(B|A_i)\,P(A_i)$ over a partition $A_1,\dots,A_k$ of the sample space: add up every path in the tree that ends in $B$.

## When to use

Use it to get the overall probability of $B$ from conditional probabilities, and as the denominator in [[Bayes' Theorem]]. If one input is unknown, set up the equation and solve (Moed B 2023, Question 4: $0.3X+0.5(1-X)=0.4$).

See [[Lec_03-Conditional Probability, Bayes and Independence|Lec 03]].
