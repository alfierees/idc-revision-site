---
title: DataFrame
subject: intro-data-science
aliases: ["dataframes"]
related: ["Exploratory Data Analysis", "Groupby", "Summary Statistics", "Missing Values"]
source_folder: intro-data-science
ai_drafted: true
---

A pandas table of labelled rows and columns, the standard container for data in this course. The lecture calls it an Excel spreadsheet that follows instructions; it is essentially a list of dictionaries.

## When to use

Open any new dataset with `df.head()` and `df.info()`, then `df.describe()`, `df.shape` and `df.isnull().sum()`. Selecting, filtering (`df[df["col"] > x]`) and `groupby` all start from a DataFrame.

See [[Lecture 2 - EDA and Charts|DS Lec 2]].
