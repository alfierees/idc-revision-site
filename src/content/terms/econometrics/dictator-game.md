---
title: Dictator Game
subject: econometrics
aliases: []
related: ["ultimatum-game", "public-goods-game", "randomised-experiment", "causal-inference"]
source_folder: econometrics
ai_drafted: true
---

The **Dictator Game** is a two-player behavioural experiment in which a "dictator" is given an endowment of tokens and decides unilaterally how many to keep vs. pass to an anonymous partner; the partner has no power to reject the offer. Because the partner cannot refuse, a purely self-interested dictator should keep everything — yet lab experiments consistently show substantial giving, providing evidence of other-regarding preferences (altruism, fairness norms, social image concerns).

Andreoni & Miller (2002) ran the dictator game with three price-ratio treatments — tokens worth equal points to both players, twice as many to the dictator, or twice as many to the recipient — with 176 subjects each playing all three rounds. This experimental design turns the dictator game into a **revealed-preference test**: by varying the relative cost of giving, the researchers can estimate social-preference utility functions from the allocation data. The strong bimodal distribution (≈ 41% keep everything; ≈ 34% split equally) motivates modelling the *response to price* rather than just averaging tokens. See [[Introduction & Treatment Effects]] (Lecture 01) for the regression analysis.

## When to use

The dictator game appears in the econometrics course as a worked example for treatment-effect estimation with panel data (each subject plays multiple rounds) and for the choice between continuous and dummy regressors. When the treatment variable takes only a few discrete values (price ratios 0.5, 1, 2), dummies are preferred to a linear slope because they impose no functional-form assumption.
