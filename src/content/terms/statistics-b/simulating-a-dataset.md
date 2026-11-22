---
title: Simulating a Dataset
subject: statistics-b
aliases: []
related: ["Linear Regression", "Correlation Coefficient", "Normal Distribution", "Prediction", "Monte Carlo Simulation"]
source_folder: statistics-b
ai_drafted: true
---

In Excel, draw $X$ as NORM.INV(RAND(),0,1), then build $Y$ from the target line plus a small normal noise term, $Y=bX+a+\text{NORM.INV(RAND(),0,0.2)}$. The result is a dataset whose fitted [[Linear Regression]] line is approximately the one you chose.

## When to use

Exercise 11 question 4 asks for $n=300$ datasets with prediction lines such as $X+2$ or $-2X+2$, then fits the line to check the simulation. A constant $Y$ gives a slope near 0, and $Y=(2X)^2$ also gives a slope near 0, a reminder that the [[Correlation Coefficient]] measures only linear association.

See [[Lec_13-Exam Review Session 2|Lec 13]].
