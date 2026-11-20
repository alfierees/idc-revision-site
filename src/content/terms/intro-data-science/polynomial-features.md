---
title: Polynomial Features
subject: intro-data-science
aliases: ["interaction terms", "polynomial regression"]
related: ["Linear Regression", "Overfitting", "Bias-Variance Tradeoff", "Scikit-Learn Pipeline"]
source_folder: intro-data-science
ai_drafted: true
---

Squared, higher-order and cross-product (interaction) columns added to the inputs so a linear model can fit curves and joint effects. The model is still linear in its coefficients, not in $x$.

## When to use

Reach for it when a straight line underfits curved data, using `PolynomialFeatures` in a pipeline with [[Linear Regression]]. The lecture says degree 2 to 3 is typical and degree 10 or more [[Overfitting]] badly. Lecture 8 notes that hand-guessing interactions explodes: 7 inputs give over 90 extra columns. Also in [[PS_02-Regression on Insurance Charges|PS 02]].

See [[Lecture 4 - Regression|DS Lec 4]].
