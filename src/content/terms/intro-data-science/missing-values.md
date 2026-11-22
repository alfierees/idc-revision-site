---
title: Missing Values
subject: intro-data-science
aliases: ["data-preprocessing"]
related: ["Sentinel Value", "DataFrame", "Exploratory Data Analysis", "Outliers"]
source_folder: intro-data-science
ai_drafted: true
---

Empty (`NaN`) cells, meaning unknown rather than zero. They can be random, systematic or structural, and must be detected and then dropped or imputed with the mean, median or mode before modelling.

## When to use

Detect with `df.isnull().sum()`, then `dropna` or `fillna`. In PS 01, Age is filled with the median and Embarked with the mode, while Cabin (687 of 891 missing) is dropped. Dropping systematic missing rows can inflate an average. See also [[Sentinel Value]].

See [[Lecture 2 - EDA and Charts|DS Lec 2]].
