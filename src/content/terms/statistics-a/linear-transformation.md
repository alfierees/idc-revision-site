---
title: Linear Transformation
subject: statistics-a
aliases: []
related: ["Expected Value", "Variance", "Standard Deviation", "Standardization"]
source_folder: statistics-a
ai_drafted: true
---

$Y=a+bX$: multiply a random variable by a constant and add a constant. Then $E(Y)=a+bE(X)$ and $Var(Y)=b^2 Var(X)$, so only the multiplier changes the spread.

## When to use

Use it when a variable is a rescaled version of one with known mean and variance, for example a die roll $X$ turned into $Y=5X-20$. A linear transformation of a normal variable stays normal, which is what standardization relies on.

See [[Lec_05-Random Variables, Expected Value and Variance|Lec 05]].
