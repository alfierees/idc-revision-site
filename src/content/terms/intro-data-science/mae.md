---
title: MAE
subject: intro-data-science
aliases: ["Mean Absolute Error"]
related: ["RMSE", "R-Squared", "Outliers", "Linear Regression"]
source_folder: intro-data-science
ai_drafted: true
---

Mean absolute error, $\text{MAE} = \frac{1}{n} \sum_i |y_i - \hat{y}_i|$: the average size of the prediction errors, in the same units as the target.

## When to use

Choose it over [[RMSE]] when [[Outliers]] exist or interpretability is key, since it is less sensitive to large errors; RMSE penalises big errors more heavily. Used in PS 02 to compare regression models.

See [[Lecture 4 - Regression|Lec 4]].
