---
title: "Lec 06: Revealed Preference"
semester: 2
year: 1
course: "Micro-Economics I"
lecture: 6
tags:
  - micro-i
  - revealed-preference
  - warp
  - consumer-choice
  - preferences
subject: micro-i
in_scope: true
---

# Lec_06: Revealed Preference

> Part of: [[Micro-Economics I]]
> Key concepts: [[Revealed Preference]], [[Preferences]], [[Budget Constraint]], [[Optimal Choice]], [[Directly Revealed Preferred]], [[Indirectly Revealed Preferred]], [[Weak Axiom of Revealed Preference]]

Everything so far went from preferences to choices: assume a utility function, then find the [[Optimal Choice]]. This lecture runs the logic backwards. We watch what a consumer actually buys at different budgets and ask what that says about their [[Preferences]], and whether the behaviour is even consistent with a rational chooser.

## 1. What revealed preference analysis does

Suppose we observe the bundles a consumer picks under several different budgets. That data lets us do two things:

- **Test** the hypothesis that the consumer always picks the most preferred bundle among those affordable.
- **Recover** (part of) the consumer's preference ranking, without ever seeing a utility function.

> [!tip] Why it is useful
> You cannot observe preferences or utility, only purchases. Revealed preference turns purchases into statements about preferences, so a theory built on unobservable things can be checked against observable behaviour.

## 2. Assumptions behind the method

| Assumption | Why it is needed |
|---|---|
| Preferences stay **fixed** while the data are collected | Otherwise two choices could differ just because tastes moved, not because the budget did |
| Preferences are **strictly convex** | Rules out flat or concave indifference curves that give several tied favourites |
| Preferences are **monotonic** (more is better) | The chosen bundle then lies on the budget line, not strictly inside it |

Together, convexity and monotonicity mean the most preferred affordable bundle is **unique**: one tangency point on the budget line. So each budget gives exactly one choice, and "the chosen bundle" is well defined.

## 3. Direct revelation

Say bundle $x^*$ is chosen when bundle $y$ was also affordable (and $y \neq x^*$). The consumer could have had $y$ but took $x^*$, so $x^*$ is **revealed directly preferred** to $y$. Notation:

$$
x^* \succ_D y
$$

The relation holds for every other bundle in the affordable set: the whole budget triangle sits below the chosen point in the ranking.

![[Lec06_direct_revelation.png]]

> [!warning] Affordable, not just cheaper
> "Affordable" is the key word. If $y$ costs more than the consumer's income, then choosing $x^*$ says nothing about $x^*$ versus $y$.

## 4. Indirect revelation (chaining with transitivity)

Some bundles cannot be compared directly because the chosen bundle never had them in reach. Preferences are assumed transitive, so we can chain direct comparisons:

$$
x \succ_D y \ \text{ and } \ y \succ_D z \ \Longrightarrow \ x \succ_I z
$$

$x$ is then **revealed indirectly preferred** to $z$.

Worked through (the lecture's picture):

1. At the first budget, $x^*$ is chosen and $z$ is **not affordable**, so no direct comparison of $x^*$ and $z$.
2. At the second budget, $y^*$ is chosen and $x^*$ is **not affordable**.
3. But $y^*$ was affordable at the first budget, so $x^* \succ_D y^*$.
4. And $z$ was affordable at the second budget, so $y^* \succ_D z$.
5. Chain them: $x^* \succ_I z$.

![[Lec06_indirect_revelation.png]]

> [!note] Reconstructed from the slides
> The slides build this diagram step by step with two budget lines. The numbered walk-through above is my own wording of that build-up, and the coordinates in the figure are illustrative, not the deck's.

> [!tip] Extending the chain
> Each extra budget with its own choice can add another link, so the set of bundles known to be worse than $x^*$ grows as the data set grows. That is how revealed preference gradually maps out the preference relation.

| Type | Symbol | Needs | Evidence |
|---|---|---|---|
| Direct | $x \succ_D y$ | $y$ affordable when $x$ chosen | A single observed choice |
| Indirect | $x \succ_I z$ | A chain of direct steps | Several choices plus transitivity |

## 5. Two axioms for rational choice

For the analysis to be valid, the data must satisfy two consistency requirements: the **Weak** and the **Strong** Axioms of Revealed Preference. This deck develops only the Weak Axiom.

> [!note] Strong Axiom
> The slides name the Strong Axiom but do not state it. Roughly, it asks the same no-contradiction condition to hold along whole chains ($\succ_I$) rather than single choices. Treat that as background and check your course notes or textbook for the formal wording.

## 6. The Weak Axiom of Revealed Preference (WARP)

> [!info] WARP
> If $x$ is revealed directly preferred to $y$, then $y$ is never revealed directly preferred to $x$.

$$
x \succ_D y \ \Longrightarrow \ \text{not}\,(y \succ_D x)
$$

- Data that **break** WARP are inconsistent with rational, preference-maximising behaviour.
- WARP is a **necessary** condition for explaining choices by rationality: passing it does not prove rationality on its own, but failing it disproves it.

### What a violation looks like

Take two budgets with different prices, so their budget lines cross. The consumer picks $x$ at the first budget and $y$ at the second, where each chosen bundle was affordable at the other budget:

1. $x$ is chosen while $y$ is affordable, so $x \succ_D y$.
2. $y$ is chosen while $x$ is affordable, so $y \succ_D x$.

Both cannot be true of one fixed preference ordering. The two statements contradict each other.

![[Lec06_warp_violation.png]]

> [!example] How to check WARP in a problem
> 1. For each observed choice, compute what every *other* observed bundle would have cost at those prices.
> 2. If another bundle costs no more than the income spent, the chosen bundle is revealed preferred to it.
> 3. WARP fails if two bundles are each revealed preferred to the other.
>
> Geometrically: each chosen bundle sits on its own budget line but **inside** the other's budget set.

> [!warning] Common mistakes
> - Chosen bundle on a budget line does not mean it beats bundles *outside* the budget set. Only affordable alternatives are ranked below it.
> - Two budget lines that cross are necessary for a violation, but crossing alone does not violate WARP: you need each choice to be affordable under the other budget.
> - A WARP violation says behaviour is inconsistent with fixed preferences. It does not say which assumption failed (tastes changed, or the consumer is not a maximiser).

## Summary

- Observed choices reveal preferences, given fixed, convex, monotonic tastes and a unique optimum per budget.
- $x \succ_D y$: $x$ chosen while $y$ was affordable. $x \succ_I z$: obtained by chaining direct comparisons through transitivity.
- WARP: no pair of bundles can be revealed directly preferred to each other. A violation means the data cannot come from a consistent, rational chooser.
- WARP is necessary for rationality, not sufficient. The Strong Axiom extends the idea to chains.

## Related notes

- [[Micro-Economics I]]
- [[Preferences]], [[Budget Constraint]], [[Optimal Choice]]
- [[Revealed Preference]]
- [[PS_05-Revealed Preference, Compensation & Income and Substitution Effects]]
