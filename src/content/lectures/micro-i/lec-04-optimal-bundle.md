---
title: "Lec 04: Optimal Bundle"
semester: 2
year: 1
course: "Micro-Economics I"
lecture: 4
tags:
  - micro-i
  - utility
  - marginal-utility
  - utility-maximisation
  - optimal-choice
  - indifference-curve
  - marginal-rate-of-substitution
  - corner-solution
  - cobb-douglas
  - demand-function
subject: micro-i
in_scope: true
---

# Lec 04: Optimal Bundle (Utility Maximisation and Consumer Choice)

> Part of: [[Micro-Economics I]]
> Key concepts: [[Utility Function]], [[Marginal Utility]], [[Marginal Rate of Substitution]], [[Optimal Choice]], [[Corner Solution]], [[Demand Function]], [[Cobb-Douglas Utility]], [[Perfect Substitutes]], [[Perfect Complements]]
> Previous: [[Lec_03-Utility and MRS]] | Next: [[Lec_05-Demand]]

> [!info] What this lecture does
> The consumer has a [[Budget Constraint]] (what she can afford) and [[Preferences]] (what she likes). This lecture puts the two together and asks which affordable bundle she picks. It first tells the story in "utility per dollar" terms, then in the indifference-curve picture (tangency), then checks when tangency fails (corner solutions) and how the choice turns into a demand curve. Source deck: Case, Fair and Oster, Chapter 6 with its appendix, plus lecturer slides on worked utility families.

## 1. Utility, total and marginal

**Utility** is the satisfaction a good gives. Two quantities matter:

- **Total utility (TU)**: all the satisfaction from the amount consumed.
- **[[Marginal Utility]] (MU)**: the extra satisfaction from one more unit.

$$
MU = \frac{\Delta TU}{\Delta Q}
$$

**Law of diminishing marginal utility**: in a given period, each extra unit of the same good adds less satisfaction than the one before. Total utility keeps rising while MU is positive and stops rising when MU reaches zero.

| Trips to club per week | Total utility | Marginal utility |
|---|---|---|
| 1 | 12 | 12 |
| 2 | 22 | 10 |
| 3 | 28 | 6 |
| 4 | 32 | 4 |
| 5 | 34 | 2 |
| 6 | 34 | 0 |

![[Lec04_total_marginal_utility.png]]

> [!note] Cardinal numbers here
> The deck's table treats utility as a measurable number ("12 units of satisfaction"). That is the older **cardinal** view. The indifference-curve half of the lecture (and [[Ordinal Utility]]) needs only rankings. Both approaches give the same optimum rule, which is why the lecture can teach both.

## 2. Spending a fixed income: the utility-maximising rule

A consumer cannot just keep buying the good with the highest MU, because goods cost different amounts. The right question is **how much extra satisfaction each dollar buys**: $MU/P$.

> [!tip] Intuition: move money to where a dollar works hardest
> If a dollar on good X gives more extra satisfaction than a dollar on good Y, shift a dollar from Y to X. As you buy more X its MU falls (diminishing MU) and as you buy less Y its MU rises, so the gap closes. You stop shifting when the two ratios are equal.

$$
\boxed{\frac{MU_X}{P_X} = \frac{MU_Y}{P_Y}}
$$

with the whole budget spent. This is the **utility-maximising rule**: equalise marginal utility per dollar across all goods bought.

### Worked example (club trips vs basketball games)

The deck gives MU per week for trips ($3 each) and games ($6 each). Computing $MU/P$:

| Unit | Trip MU/P (P = $3) | Game MU/P (P = $6) |
|---|---|---|
| 1st | 4.0 | 3.5 |
| 2nd | 3.3 | 2.0 |
| 3rd | 2.0 | 1.5 |
| 4th | 1.3 | 1.0 |
| 5th | 0.7 | 0.5 |
| 6th | 0 | 0 |

> [!example] My own budget on these numbers (income of $30 per week, chosen by me)
> Buy units in order of highest $MU/P$ until the money runs out: trip 1 (4.0, spent $3), game 1 (3.5, $9), trip 2 (3.3, $12), trip 3 (2.0, $15), game 2 (2.0, $21), game 3 (1.5, $27), trip 4 (1.3, $30). Result: **4 trips and 3 games**, using exactly $30. The final ratios (1.3 and 1.5) are close but not equal because goods come in whole units; with perfectly divisible goods the rule holds exactly.

### Diamond/water paradox

Water is vital yet cheap, diamonds are useless for survival yet expensive. Resolution: **price reflects marginal utility, not total utility**. Water is so plentiful that the last unit adds little; diamonds are scarce so the marginal unit is valuable.

## 3. Diminishing MU and the downward-sloping demand curve

Because each extra unit is worth less, a consumer buys more only if the price falls. The deck's Thai-meal example:

- At a very high price the first meal is not worth buying.
- At a lower price she eats a handful of times a month, stopping when the next meal is worth less than what the same money buys elsewhere.
- At a still lower price she buys more, and only at a price of zero does she buy until MU hits zero (satiation).

So the demand curve slopes down because MU does. See [[Lec_05-Demand]] for demand in full.

## 4. The indifference-curve approach (appendix)

### Assumptions

1. **More is better**: both goods have positive marginal utility.
2. **Diminishing MRS**: the rate at which she will swap X for Y falls as she has more X (curves are convex).
3. **Choice is possible**: she can compare bundles available to her.
4. **Rationality / consistency**: her choices are consistent.

### Indifference curves and the MRS

An [[Indifference Curve]] joins all bundles giving the same total utility. Higher curves mean more utility. The family of curves for one person is her **preference map**. Along one curve, moving from one bundle to another changes utility by zero:

$$
MU_X \,\Delta X + MU_Y \,\Delta Y = 0
$$

Rearranging gives the slope:

$$
\frac{\Delta Y}{\Delta X} = -\frac{MU_X}{MU_Y}
$$

The absolute value of this slope is the [[Marginal Rate of Substitution]]: how many units of Y she will give up for one more X, staying equally well off. It is negative-sloped because "more is better" forces a trade-off.

> [!note] Reconstructed from the slides
> The deck shows the two equations above as images; the first line is the total-differential argument I wrote out. It is the standard derivation, not a verbatim slide.

### Optimum: tangency

She moves along her [[Budget Line]] until she reaches the highest indifference curve that still touches it. At that point the budget line and the curve are **tangent**, so their slopes are equal:

$$
\frac{MU_X}{MU_Y} = \frac{P_X}{P_Y}
$$

![[Lec04_tangency_optimum.png]]

Multiply both sides by $MU_Y$ and divide by $P_X$ and you get back the rule from section 2:

$$
\frac{MU_X}{P_X} = \frac{MU_Y}{P_Y}
$$

> [!tip] Two ways to say the same thing
> **Inside the market** one more dollar buys $MU_X/P_X$ of X or $MU_Y/P_Y$ of Y. **Inside her head** she is willing to swap Y for X at rate MRS. **In the market** she can swap at rate $P_X/P_Y$. At the optimum, willingness to trade equals the market rate of trade. If MRS is above the price ratio she values X more than the market charges and should buy more X.

> [!warning] Tangency is necessary only in the nice case
> The tangency condition finds the optimum only when preferences are convex and the solution is interior (both goods positive). Sections 6 and 7 show what goes wrong otherwise.

## 5. From optimal choice to a demand curve

Lower the price of X and the budget line **pivots outward** around the Y-intercept. Each price gives a new tangency, hence a new chosen quantity of X. Plotting price against chosen quantity gives the [[Demand Function]] for X.

![[Lec04_demand_from_tangencies.png]]

> [!example] Price series in my picture
> I drew a Cobb-Douglas consumer with income 24 and $P_Y = 1$ (a Y-intercept of 24); prices of X of 4, 3, 2 give choices of 3, 4, 6 units of X (points A, B, C). These numbers are mine, not the deck's.

## 6. Worked utility families (lecturer slides)

### 6.1 Rescaling utility changes nothing

If $U(X,Y)$ is multiplied or divided by a positive constant $a$, the ranking of bundles is unchanged, so the optimum is unchanged. Only the **order** of utilities matters ([[Ordinal Utility]]).

### 6.2 Cobb-Douglas

$$
U(x_1, x_2) = x_1^{a} x_2^{b}
$$

The deck gives the demands:

$$
x_1^{*} = \frac{a}{a+b}\cdot\frac{y}{p_1}, \qquad x_2^{*} = \frac{b}{a+b}\cdot\frac{y}{p_2}
$$

where $y$ is income. Notice that **demand for each good does not depend on the other good's price**: $x_2^*$ does not vary with $p_1$ and $x_1^*$ does not vary with $p_2$. The consumer spends a fixed share of income, $\frac{a}{a+b}$ on good 1 and $\frac{b}{a+b}$ on good 2.

> [!note] Reconstructed from the slides
> The slides state the result only. Derivation from the tangency rule: the MRS is $\frac{a\,x_2}{b\,x_1}$, so setting it equal to $\frac{p_1}{p_2}$ gives $p_2 x_2 = \frac{b}{a}\,p_1 x_1$. Substituting into $p_1 x_1 + p_2 x_2 = y$ gives $p_1 x_1\left(1+\frac{b}{a}\right) = y$, hence the formulas above.

### 6.3 Perfect substitutes: a corner solution

$$
U(x_1, x_2) = a x_1 + b x_2
$$

Indifference curves are straight lines. In the deck's pictures the MRS is constant and equal to 1 in absolute value (that is, $a = b$). Compare it to the price ratio:

| Price comparison | Slope of budget line vs curve | Optimal choice |
|---|---|---|
| $p_1 > p_2$ | budget line steeper | all income on good 2 (corner) |
| $p_1 < p_2$ | budget line flatter | all income on good 1 (corner) |
| $p_1 = p_2$ | same slope | **every** affordable bundle on the line ties |

![[Lec04_perfect_substitutes_corner.png]]

> [!tip] Rule for perfect substitutes
> Buy only the cheaper good per unit of satisfaction. In general, compare $\frac{a}{p_1}$ with $\frac{b}{p_2}$ and spend everything on the larger.

### 6.4 Non-convex preferences: tangency is the wrong answer

$$
U(X,Y) = X^{a} + Y^{b}, \quad a, b > 1
$$

Here indifference curves bow **away** from the origin (non-convex): the consumer likes extremes better than averages. The tangency point is then the **least** preferred affordable bundle on the budget line, because the curve through it lies *inside* the budget set on both sides. The best affordable bundle is at a corner.

![[Lec04_nonconvex_corner.png]]

> [!warning] Common mistake
> Do not assume "tangent = optimal". Check that the indifference curves are convex (diminishing MRS). My figure uses $U = x^2 + y^2$ with income 10 and equal prices as an example of this family.

### 6.5 Perfect complements: a kink, not a tangency

$$
U(x_1, x_2) = \min\{a x_1,\; x_2\}
$$

Indifference curves are L-shaped with the corner on the ray $x_2 = a x_1$. Along the vertical part MRS is infinite, along the horizontal part it is zero, and **at the kink it is undefined**, so there is nothing to set equal to the price ratio. Instead use two conditions:

1. Spend the whole budget: $p_1 x_1^* + p_2 x_2^* = m$.
2. Consume in the fixed ratio: $x_2^* = a x_1^*$.

![[Lec04_perfect_complements_kink.png]]

> [!note] Reconstructed from the slides
> The deck stops at the two conditions. Solving them: $p_1 x_1 + p_2 a x_1 = m$, so
> $$
> x_1^{*} = \frac{m}{p_1 + a\,p_2}, \qquad x_2^{*} = \frac{a\,m}{p_1 + a\,p_2}
> $$
> A good check is that extra units of one good beyond the fixed ratio are wasted, so she would never choose a point off the ray.

## 7. Which method when? (comparison)

| Preference type | Indifference curves | MRS | Optimum condition | Solution type |
|---|---|---|---|---|
| Typical convex (e.g. [[Cobb-Douglas Utility]]) | smooth, convex | falls along curve | MRS = price ratio, budget spent | interior |
| [[Perfect Substitutes]] | straight lines | constant | compare MRS to price ratio | corner (or a whole segment if equal) |
| [[Perfect Complements]] | L-shaped | 0 or infinite, undefined at kink | budget plus fixed-ratio line | at the kink |
| Non-convex | bow outward | rises along curve | check endpoints | [[Corner Solution]] |

## Summary

- **MU per dollar rule**: $\frac{MU_X}{P_X} = \frac{MU_Y}{P_Y}$ with the budget spent; each extra dollar should do equal work everywhere.
- **Same thing in curves**: MRS equals the price ratio at the tangency of the indifference curve and the budget line.
- Diminishing MU gives downward-sloping demand; price rather than total utility explains the diamond/water paradox.
- Cobb-Douglas demands are income shares divided by own price and ignore the other good's price.
- Tangency can fail: perfect substitutes and non-convex preferences give corners; perfect complements give a kink where the MRS is undefined.
- Rescaling utility by a positive constant never changes the optimum.

## Related notes

- [[Micro-Economics I]]
- [[Lec_03-Utility and MRS]]
- [[Lec_05-Demand]]
- [[PS_04-Optimal Choice]]
- [[PS_03-The Utility Function]]
- [[Optimal Choice]]
- [[Utility Maximisation]]
