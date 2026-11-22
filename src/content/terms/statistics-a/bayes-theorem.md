---
title: Bayes' Theorem
subject: statistics-a
aliases: ["Bayes' Rule"]
related: ["Conditional Probability", "Multiplication Formula", "Law of Total Probability", "Prosecutor's Fallacy"]
source_folder: statistics-a
ai_drafted: true
---

$P(A|B)=P(B|A)\,P(A)/P(B)$ reverses the direction of conditioning. It follows from writing $P(A \cap B)$ in two ways with the [[Multiplication Formula]] and dividing by $P(B)$.

## When to use

Use it when you know $P(B|A)$ but want $P(A|B)$, for example a test result given the disease versus the disease given a positive test. The denominator $P(B)$ usually comes from the [[Law of Total Probability]]; reading the two conditionals in the wrong direction is the classic exam trap, and ignoring the prior $P(A)$ is base-rate neglect.

See [[Lec_03-Conditional Probability, Bayes and Independence|Lec 03]].
