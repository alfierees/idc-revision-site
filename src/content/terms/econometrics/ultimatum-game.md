---
title: Ultimatum Game
subject: econometrics
aliases: []
related: ["dictator-game", "public-goods-game", "randomised-experiment", "linear-probability-model"]
source_folder: econometrics
ai_drafted: true
---

The **Ultimatum Game** is a two-player experiment in which a Proposer receives a pot $S$ and offers a share $p \in [0,1]$ to a Responder; the Responder then either **accepts** (Proposer keeps $(1-p)S$, Responder gets $pS$) or **rejects** (both receive zero). The subgame-perfect Nash equilibrium predicts the Proposer offers the smallest positive share and the Responder accepts anything above zero — but real subjects routinely reject "unfair" offers, violating pure self-interest and providing evidence of negative-reciprocity preferences.

Andersen, Ertaç, Gneezy, Hoffman & List (2011) varied stakes from 20 Rs to 20,000 Rs (roughly a year's income) in rural India to test whether costly rejection persists when the stakes are large. The binary outcome (accept/reject) motivates the **[[Linear Probability Model]]**: regressing $accept_i$ on offer share and stakes dummies estimates the probability of acceptance as a function of offer generosity and stake size. See [[Linear Probability Model (LPM)]] (Lecture 02).

## When to use

The ultimatum game is the canonical motivating example for binary-outcome regression in the econometrics course. Whenever the outcome is $y \in \{0, 1\}$ (accept/reject, buy/don't buy), the LPM estimates $P(y=1 \mid x) = \beta_0 + \beta_1 x$ directly by OLS. The ultimatum game also illustrates why behavioural deviations from Nash predictions (subgame-perfect play) matter empirically — economic theory provides a benchmark, and experiments measure how far real agents depart from it.
