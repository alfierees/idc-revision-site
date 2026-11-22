---
title: Outliers
subject: intro-data-science
aliases: []
related: ["Boxplots", "Summary Statistics", "Histograms", "Missing Values"]
source_folder: intro-data-science
ai_drafted: true
---

Values far from the bulk of the data, flagged by the IQR rule: $x < Q_1 - 1.5\,\text{IQR}$ or $x > Q_3 + 1.5\,\text{IQR}$, where $\text{IQR} = Q_3 - Q_1$. They can distort the mean and other summaries and models.

## When to use

Spot them with a boxplot, then investigate before removing: an 18,000 dollar order in a 100 to 3,000 dollar dataset may be an error or your biggest customer. The median and MAE are less sensitive to them; K-Means and PCA are sensitive.

See [[Lecture 2 - EDA and Charts|DS Lec 2]].
