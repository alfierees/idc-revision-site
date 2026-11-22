---
title: Normal Distribution CDF
subject: statistics-b
aliases: []
related: [Normal Distribution, P-Value, Z Score, Z Test]
source_folder: statistics-b
ai_drafted: true
---

Has no closed form, so $P(X<t)=\Phi(Z(t))$ with $Z=(t-\mu)/\sigma$ read from the Z table.

## When to use

Standardise, then look up $\Phi$: for $X\sim N(1,3^2)$, $P(X<2)=\Phi(0.33)=0.6293$. In tests it gives the [[P-Value]], for example $P(Z\ge3)=1-\Phi(3)=0.0013$ in the coin example, with the negative half of the table used for lower-tail probabilities.

See [[Lec_01-Point Estimation and Sampling Distributions|Lec 01]]. Also in [[Lec_04-Hypothesis Testing and the Z Test|Lec 04]].
