---
title: Game Theory (Econometrics)
subject: econometrics
aliases: []
related: ["dictator-game", "ultimatum-game", "public-goods-game", "randomised-experiment", "causal-inference", "linear-probability-model"]
source_folder: econometrics
ai_drafted: true
---

In the econometrics course, **game theory** appears not as a theoretical framework for strategic interaction (that is covered in the micro course — see the micro entry for Game Theory) but as the source of **experimental designs** for measuring economic preferences. Games such as the [[Dictator Game]], [[Ultimatum Game]], and [[Public Goods Game]] give researchers controlled environments in which real players face structured payoff matrices, making it possible to observe choices under clearly specified incentives and to estimate how preferences (altruism, fairness, reciprocity) respond to treatment variation.

The key econometric feature of these experiments is that they generate clean **treatment variation**: by randomising price ratios (Dictator Game) or stake levels (Ultimatum Game), the researcher can estimate causal effects on allocation behaviour without confounding from unobservable preferences. The structured payoff space also makes the outcome variable interpretable — tokens kept, acceptance probability — and the theoretical benchmark (Nash prediction) provides a concrete null hypothesis to test against. See [[Introduction & Treatment Effects]] (Lecture 01) and [[Linear Probability Model (LPM)]] (Lecture 02).

## When to use

Invoke this framing when a behavioural experiment using a game (dictator, ultimatum, public goods, trust) is the data-generating process. The identification strategy is typically experimental randomisation of a treatment dimension; the outcome is observed choice within the game. The econometric toolbox — OLS with dummy regressors, LPM for binary outcomes, panel-data corrections for repeated observations of the same subject — applies directly once the game generates the data.
