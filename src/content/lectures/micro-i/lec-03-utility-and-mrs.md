---
title: "Lec 03: Utility and MRS"
semester: 2
year: 1
course: "Micro-Economics I"
lecture: 3
tags:
  - micro-i
  - utility-function
  - ordinal-utility
  - indifference-curve
  - marginal-rate-of-substitution
  - perfect-substitutes
  - perfect-complements
  - quasilinear-utility
  - cobb-douglas-utility
subject: micro-i
in_scope: true
---

# Lec_03: Utility and MRS

> Part of: [[Micro-Economics I]]
> Key concepts: [[Utility Function]], [[Ordinal Utility]], [[Indifference Curve]], [[Marginal Rate of Substitution]], [[Perfect Substitutes]], [[Perfect Complements]], [[Quasilinear Utility]], [[Cobb-Douglas Utility]], [[Economic Bad]]

This lecture turns the verbal idea of [[Preferences]] into numbers. A **utility function** is a scoring rule: it gives each bundle a number so that preferred bundles score higher. Once preferences are a function, we can use calculus to get the slope of an indifference curve (the MRS) from marginal utilities.

## 1. Where utility comes from

### 1.1 Preference axioms recap
The consumer compares bundles with three relations: strictly preferred ($\succ$), indifferent ($\sim$), and weakly preferred ($\succsim$, "at least as good as"). Three properties are assumed:

| Axiom | What it says |
|---|---|
| **Completeness** | Any two bundles can be compared: $x \succsim y$ or $y \succsim x$ (or both) |
| **Reflexivity** | Every bundle is at least as good as itself: $x \succsim x$ |
| **Transitivity** | $x \succsim y$ and $y \succsim z$ imply $x \succsim z$ |

### 1.2 When a utility function exists
If preferences are complete, reflexive, transitive **and continuous**, they can be represented by a continuous [[Utility Function]] $U$. Continuity means a small change in the bundle only causes a small change in how much it is liked (no sudden jumps in preference).

> [!info] Definition: what "represents" means
> $U$ represents $\succsim$ exactly when, for any two bundles,
>
> $$
> x' \succ x'' \iff U(x') > U(x''), \qquad x' \sim x'' \iff U(x') = U(x'')
> $$
>
> So utility only has to get the **ranking** right.

## 2. Utility is ordinal

[[Ordinal Utility]] means only the order matters, not the size of the gaps. If $U(x)=6$ and $U(y)=2$, then $x \succ y$, but it is **not** true that $x$ is liked three times as much.

> [!warning] Common mistake
> Do not read utility numbers as quantities of satisfaction. "Twice the utility" has no meaning in this framework; "higher utility" does.

### 2.1 From bundles to indifference curves
Take three bundles with $(2,3) \succ (4,1) \sim (2,2)$. Any numbers that respect this order are valid utility levels, for example $U(2,3)=6$ and $U(4,1)=U(2,2)=4$.

Because equally preferred bundles get equal utility, **every bundle on one [[Indifference Curve]] has the same utility level**, and curves further from the origin carry higher labels. Comparing more and more bundles fills in the whole indifference map, which is a complete picture of the preferences.

![[Lec03_utility_levels.png]]

### 2.2 Utility functions are not unique
Many functions give the same ranking. Start from $U(x_1,x_2)=x_1x_2$ and test the same three bundles:

| Function | $(2,3)$ | $(4,1)$ | $(2,2)$ | Same ranking? |
|---|---|---|---|---|
| $U = x_1x_2$ | 6 | 4 | 4 | baseline |
| $V = U^2$ | 36 | 16 | 16 | yes |
| $W = 2U + 10$ | 22 | 18 | 18 | yes |

> [!tip] Monotonic transformation
> If $U$ represents $\succsim$ and $f$ is **strictly increasing**, then $V=f(U)$ represents the same preferences. Squaring, doubling and adding a constant are all strictly increasing (for positive $U$ in the squaring case). The indifference curves are literally the same curves, just relabelled.

## 3. Goods, bads and neutrals

| Type | One extra unit of it... |
|---|---|
| **Good** | raises utility (a more preferred bundle) |
| **Bad** ([[Economic Bad]]) | lowers utility (a less preferred bundle) |
| **Neutral** | leaves utility unchanged |

The same item can switch role. The slides use water: up to some amount, more water is a good; beyond it, extra water is a bad; right at the turning point, a little extra is neutral.

## 4. Utility functions and their indifference curves

![[Lec03_utility_families.png]]

| Family | Form | Indifference curves | Key feature |
|---|---|---|---|
| [[Perfect Substitutes]] | $V = x_1 + x_2$ | straight, parallel lines (slope $-1$ here) | goods swap at a constant rate |
| [[Perfect Complements]] | $W=\min\{x_1,x_2\}$ | L-shapes with corners on the 45 degree line | goods only useful in fixed proportion; extra of one alone adds nothing |
| [[Quasilinear Utility]] | $U=f(x_1)+x_2$, e.g. $2\sqrt{x_1}+x_2$ | each curve is a vertical shift of the others | linear in $x_2$ only |
| [[Cobb-Douglas Utility]] | $U=x_1^a x_2^b$, $a,b>0$ | smooth hyperbola-like curves, never touching the axes | e.g. $a=b=\tfrac12$ or $a=1,b=3$ |

> [!note] Slide detail
> For perfect substitutes the slides draw $x_1+x_2=5,9,13$. For perfect complements they draw the levels 3, 5 and 8. Same logic, just different labels.

## 5. Marginal utility

The **marginal utility** of good $i$ is the rate at which total utility changes as you consume more of it, holding the other good fixed:

$$
MU_i = \frac{\partial U}{\partial x_i}
$$

> [!example] Worked example from the lecture
> For $U(x_1,x_2)=x_1^{1/2}x_2^2$:
>
> $$
> MU_1 = \tfrac12 x_1^{-1/2}x_2^2, \qquad MU_2 = 2x_1^{1/2}x_2
> $$
>
> Treat the other variable as a constant each time.

## 6. From marginal utilities to the MRS

The [[Marginal Rate of Substitution]] is the slope of an indifference curve: how much $x_2$ you give up to gain one unit of $x_1$ and stay equally well off.

> [!note] Reconstructed from the slides
> The slides run this derivation over several steps; it is condensed here.

An indifference curve is the set where $U(x_1,x_2)=k$, a constant. Take the total differential (utility must not change along the curve):

$$
\frac{\partial U}{\partial x_1}\,dx_1 + \frac{\partial U}{\partial x_2}\,dx_2 = 0
$$

Solve for the slope $dx_2/dx_1$:

$$
\boxed{MRS = \frac{dx_2}{dx_1} = -\frac{\partial U/\partial x_1}{\partial U/\partial x_2} = -\frac{MU_1}{MU_2}}
$$

> [!tip] Intuition
> Giving up some $x_2$ costs $MU_2$ per unit; getting more $x_1$ earns $MU_1$ per unit. To stay on the same curve the two must cancel, so the exchange rate is $MU_1/MU_2$. It is negative because the curve slopes down.

### 6.1 Example: $U=x_1x_2$
$MU_1=x_2$ and $MU_2=x_1$, so

$$
MRS = -\frac{x_2}{x_1}
$$

At $(1,8)$: $MRS=-8$ (steep: the consumer will give up lots of $x_2$ for one more $x_1$). At $(6,6)$: $MRS=-1$. Moving right along a curve the slope flattens, which is the usual diminishing MRS. The two points sit on the curves $U=8$ and $U=36$.

![[Lec03_mrs_slopes.png]]

### 6.2 Quasilinear case
For $U=f(x_1)+x_2$: $MU_1=f'(x_1)$ and $MU_2=1$, so

$$
MRS = -f'(x_1)
$$

This does **not** depend on $x_2$. So along any vertical line (fixed $x_1$) all indifference curves have the same slope, which is why they are vertical copies of each other.

![[Lec03_quasilinear_mrs.png]]

## 7. The MRS survives monotonic transformations

Let $V=f(U)$ with $f$ strictly increasing. By the chain rule $\partial V/\partial x_i = f'(U)\,\partial U/\partial x_i$, so

$$
MRS_V = -\frac{f'(U)\,\partial U/\partial x_1}{f'(U)\,\partial U/\partial x_2} = -\frac{\partial U/\partial x_1}{\partial U/\partial x_2} = MRS_U
$$

The $f'(U)$ terms cancel. Check with the example: $V=U^2=x_1^2x_2^2$ gives $-\dfrac{2x_1x_2^2}{2x_1^2x_2}=-\dfrac{x_2}{x_1}$, the same as before.

> [!tip] Why this matters
> Marginal utilities depend on which utility function you picked, but their **ratio** does not. The MRS is a property of the preferences, not of the numbering, which is what makes it safe to use in [[Optimal Choice]].

## Summary

- Complete, reflexive, transitive, continuous preferences are represented by a [[Utility Function]]; only the ranking carries meaning ([[Ordinal Utility]]).
- All bundles on one [[Indifference Curve]] share a utility level; any strictly increasing transformation represents the same preferences.
- Goods raise utility, bads lower it, neutrals leave it unchanged.
- Four standard shapes: perfect substitutes (lines), perfect complements (L-shapes), quasilinear (vertical shifts), Cobb-Douglas (smooth hyperbolas).
- $MU_i=\partial U/\partial x_i$ and $MRS=-MU_1/MU_2$, the slope of the indifference curve.
- Quasilinear MRS depends only on $x_1$; MRS is unchanged by monotonic transformations.

## Related notes
- [[Micro-Economics I]]
- [[Lec_02-Preferences]]
- [[Lec_04-Optimal Bundle]]
- [[PS_03-The Utility Function]]
- [[_Micro I Concepts]]
