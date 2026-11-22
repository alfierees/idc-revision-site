---
title: Chi-Squared Test for Independence
subject: statistics-b
aliases: ["Chi-Squared Test of Independence", "Test of Independence"]
related: ["Contingency Table", "Joint Probability", "Marginal Probability", "Chi-Squared Statistic", "Degrees of Freedom"]
source_folder: statistics-b
ai_drafted: true
---

The chi-squared test for independence tests whether two categorical variables are unrelated, using a [[Contingency Table]]. Its degrees of freedom are $(r-1)(c-1)$.

## When to use

Use it when both variables are categorical. Expected counts come from the margins, $E_{i,j}=p(X_i)\,p(Y_j)\,N$, and a $\chi^2$ above the critical value means the variables are not independent.

See [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence|Lec 09]].
