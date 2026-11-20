---
title: F-test
subject: intro-econometrics
aliases: []
related: ["t-test", "R-squared", "Dummy Variable", "Chow Test", "Multicollinearity"]
source_folder: intro-econometrics
ai_drafted: true
---

A joint test of several restrictions at once, $F = \frac{(RSS_R - RSS_{UR})/q}{RSS_{UR}/(N-M)}$, where $q$ is the number of restrictions. A large $F$ means imposing the restriction hurt the fit a lot, so you reject.

## When to use

Use it for joint significance (for example all the dummies of one categorical variable), the overall model test, and the [[Chow Test]]. With one restriction $F_{1,N-M} = t^2$; in the exam read the printed table at numerator df $q$ and denominator df $N-M$.

See [[Lec_07-Multiple Hypothesis Tests|Lecture 7]] and [[Lec_08-Goodness of Fit & Multicollinearity|Lecture 8]] and [[Lec_13-Exam Review|Lecture 13]].