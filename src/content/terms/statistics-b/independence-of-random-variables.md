---
title: Independence of Random Variables
subject: statistics-b
aliases: []
related: [Joint Distribution, Marginal Distribution, Joint Probability, Covariance, Chi-Squared Test for Independence]
source_folder: statistics-b
ai_drafted: true
---

$X$ and $Y$ are independent when every cell of the [[Joint Distribution]] equals the product of its margins, $p(X=k,Y=l)=p(X=k)\,p(Y=l)$ for all $k,l$, so knowing one tells nothing about the other.

## When to use

Check a joint table cell by cell: a single failing cell (for example $p(X=1,Y=0)=0$ against a non-zero product) shows the variables are not independent. It is the H0 of the [[Chi-Squared Test for Independence]], and independence implies zero [[Covariance]] but not the other way round.

See [[Lec_11-Joint Distributions, Correlation and Linear Regression|Lec 11]]. Also in [[PS_11-Correlation, Regression and Simulation|PS 11]].
