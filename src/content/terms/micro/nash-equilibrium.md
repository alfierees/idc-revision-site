---
title: Nash Equilibrium
subject: micro
aliases: ["NE", "pure-strategy Nash equilibrium"]
related: ["best-response", "dominated-strategy", "mixed-strategy", "game-theory"]
source_folder: micro
ai_drafted: true
---

A strategy profile $(s_1^*, \ldots, s_n^*)$ is a Nash Equilibrium if no player can improve their payoff by unilaterally deviating, given the strategies of all others:
$$u_i(s_i^*, s_{-i}^*) \geq u_i(s_i, s_{-i}^*) \quad \forall \, s_i, \forall \, i.$$
Equivalently, every player is playing a [[Best Response]] to what the others are doing — no one regrets their choice once everyone else's choice is known.

## When to use

Use Nash Equilibrium whenever you want a *stable prediction* of behaviour in a strategic interaction. It is the workhorse equilibrium concept for [[Normal-Form Game|normal-form games]], oligopoly models ([[Cournot Competition]], [[Bertrand Competition]]), and complementary-pricing games. Find pure-strategy NE by the [[How to Find Nash Equilibria — Best Response Method|best-response underlining method]]; if none exists, look for a [[Mixed Strategy]] equilibrium.
