---
title: Categorical Variables
subject: intro-econometrics
aliases: ["Categorical Variable"]
related: ["Dummy Variable", "Base Category", "Dummy Variable Trap", "F-test"]
source_folder: intro-econometrics
ai_drafted: true
---

A variable whose values are categories rather than numbers, such as family status (married, single, divorced). A categorical variable with $K$ categories enters the regression as $K-1$ [[Dummy Variable|dummy variables]], with the left-out group as the [[Base Category]]; each dummy coefficient is the gap between its category and the base.

## When to use

Whenever a regressor is a group label. Include $K-1$ dummies plus the intercept (all $K$ falls into the [[Dummy Variable Trap]]), and test whether the variable matters as a whole with a joint [[F-test]] on all its dummies, not separate t-tests.

See [[Lec_10-Dummy Variables|Lecture 10]].
