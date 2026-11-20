---
title: Dummy Variable
subject: intro-econometrics
aliases: ["Dummy Variables"]
related: ["Base Category", "Dummy Variable Trap", "Interaction Term", "F-test", "t-test"]
source_folder: intro-econometrics
ai_drafted: true
---

A 0/1 regressor marking membership of a category. In $y_i = \beta_0 + \beta_1 x_i + \beta_2\,is.A_i + u_i$ the dummy keeps the slope the same and shifts the intercept by $\beta_2$, so $\beta_2$ is the A-versus-not-A difference holding $x$ fixed.

## When to use

A variable with $K$ categories needs $K-1$ dummies, with one left out as the [[Base Category]]. Test the whole categorical variable with an [[F-test]] on all its dummies, and a single binary category with a [[t-test]].

See [[Lec_10-Dummy Variables|Lecture 10]].
