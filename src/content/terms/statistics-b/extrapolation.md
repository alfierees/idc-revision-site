---
title: Extrapolation
subject: statistics-b
aliases: []
related: ["Linear Regression", "Prediction"]
source_folder: statistics-b
ai_drafted: true
---

Extrapolation is predicting far outside the range of sampled $X$ values. The risk grows with the distance from the data.

## When to use

Flag it when a regression line is used far beyond the data, for example predicting at 120,000 when the sampled $X$ values run from about 10,920 to 11,245. A tiny slope error times a huge $X$ becomes a huge error in $\hat Y$.

See [[PS_11-Correlation, Regression and Simulation|PS 11]].
