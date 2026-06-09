---
title: Public Goods Game
subject: econometrics
aliases: ["PGG"]
related: ["randomised-experiment"]
source_folder: econometrics
ai_drafted: true
---

The **Public Goods Game (PGG)** is a standard behavioural-economics experiment for measuring cooperation. Each of $N$ participants receives an endowment and chooses how much to keep vs. contribute to a common pool; the pool is multiplied by some factor ($>1$) and split equally among all $N$ players. The Nash prediction is to contribute zero (free-ride); the socially efficient outcome is full contribution. Observed behaviour in lab experiments typically lies *between* these — substantial but partial cooperation, with significant heterogeneity across individuals.

## When to use

PS_1 uses the PGG to study how alcohol consumption affects free-riding: 128 participants are randomly assigned to alcohol or placebo, then play the game. The outcome `free.ride = 1[contribution = 0]` is binary, motivating LPM / probit. The PGG appears widely in experimental economics — testing cooperation across cultures, after stress / mood manipulation, under repeated interaction, or in comparison to other social-preference games (Dictator, Ultimatum, Trust Game).
