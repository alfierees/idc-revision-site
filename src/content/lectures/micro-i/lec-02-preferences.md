---
title: "Lec 02: Preferences"
semester: 2
year: 1
course: "Micro-Economics I"
lecture: 2
tags:
  - micro-i
  - lecture
  - preferences
  - indifference-curve
  - marginal-rate-of-substitution
  - perfect-substitutes
  - perfect-complements
  - convexity
subject: micro-i
in_scope: true
---

# Lec 02: Preferences

> Part of: [[Micro-Economics I]]
> Key concepts: [[Preferences]], [[Indifference Curve]], [[Marginal Rate of Substitution]], [[Perfect Substitutes]], [[Perfect Complements]], [[Economic Bad]], [[Well-Behaved Preferences]]

> [!info] Source
> Based on the Varian chapter 3 slide deck on preferences (39 slides). Written as teaching notes in my own words.

## 1. Why model preferences?

The starting point of consumer theory is a **behavioural postulate**: a decision-maker picks the most preferred option from the set of options available to them. Choice therefore has two ingredients: what is *available* (the [[Budget Constraint]], from [[Lec_01-Budget Constraint]]) and what is *preferred* (this lecture). To predict choice we need a model of [[Preferences]] over **bundles** of goods $(x_1, x_2)$.

## 2. Preference relations

Three symbols compare two bundles $x$ and $y$:

| Symbol | Name | Reads as |
|---|---|---|
| $x \succ y$ | strict preference | $x$ is strictly better than $y$ |
| $x \sim y$ | indifference | the consumer likes them equally |
| $x \succsim y$ | weak preference | $x$ is at least as good as $y$ |

They are linked: $x \succsim y$ holds exactly when either $x \succ y$ or $x \sim y$.

### Two basic assumptions

- **Completeness**: any two bundles can be compared. Either $x \succsim y$ or $y \succsim x$ (or both, in which case $x \sim y$). The consumer is never unable to decide.
- **Transitivity**: if $x \succsim y$ and $y \succsim z$ then $x \succsim z$. Rankings do not go in circles.

> [!tip] Why transitivity matters
> Without it a consumer could cycle forever ($x$ beats $y$ beats $z$ beats $x$), and there would be no "most preferred" bundle to choose. The no-crossing result below is a direct use of it.

(The deck also uses a third, implicit assumption: a bundle is as good as itself, i.e. reflexivity.)

## 3. Indifference curves

Pick a reference bundle $x'$. The set of all bundles $y$ with $y \sim x'$ is the [[Indifference Curve]] through $x'$. Since it is not always a curve (it can be a thick band or a line segment), "indifference set" would be a more accurate name.

For a reference bundle $x$ the deck defines two regions:

- $WP(x)$, the **weakly preferred set**: all bundles at least as good as $x$. It *includes* the indifference curve $I(x)$.
- $SP(x)$, the **strictly preferred set**: all bundles strictly better than $x$. It *excludes* $I(x)$.

![[Lec02_indifference_curves_ordered.png]]

Every bundle on a higher curve is strictly preferred to every bundle on a lower curve, so the curves form a "contour map" of satisfaction.

### Indifference curves cannot cross

> [!note] Reconstructed from the slides
> Suppose curves $I_1$ and $I_2$ crossed at $x$. Take $y$ on $I_1$ and $z$ on $I_2$. Since $y \sim x$ and $x \sim z$, transitivity gives $y \sim z$. But the picture shows $z$ lying above $I_1$, so $z \succ y$. Both cannot hold: contradiction. Hence distinct curves never intersect.

![[Lec02_indifference_crossing.png]]

## 4. The slope of an indifference curve: goods and bads

The slope depends on how the consumer feels about the commodities.

- A commodity is a **good** if more of it is always preferred. With two goods, giving up some of one must be offset by more of the other, so the curve **slopes down**.
- A commodity is a [[Economic Bad]] if less of it is always preferred (pollution, noise). With one good and one bad, getting more of the bad must be compensated by more of the good, so the curve **slopes up**.

![[Lec02_good_vs_bad.png]]

| Case | Curve slope | Direction of "better" |
|---|---|---|
| Two goods | negative | up and to the right |
| Good 2, bad 1 | positive | up and to the left (more good, less bad) |

## 5. Extreme cases

### Perfect substitutes

If the consumer treats a unit of good 1 and a unit of good 2 as equivalent, only the **total** number of units matters. Curves are straight lines with constant slope $-1$. In the deck's example, bundles totalling 15 units beat every bundle totalling 8. See [[Perfect Substitutes]].

### Perfect complements

If the consumer always uses the goods in a fixed proportion (for example one-to-one, like left and right shoes), only the number of complete **pairs** matters. Curves are L-shaped with the corner on the 45-degree line. $(5,5)$, $(5,9)$ and $(9,5)$ all contain only 5 pairs, so they rank below $(9,9)$ with 9 pairs. The surplus of one good adds nothing. See [[Perfect Complements]].

![[Lec02_perfect_substitutes_complements.png]]

> [!warning] Common mistake
> For perfect substitutes the curve is a *straight line* but for perfect complements it is an *L* with a kink. Do not mix them up: complements punish imbalance, substitutes do not care about it.

## 6. Satiation (bliss point)

A bundle that is strictly preferred to every other is a **satiation point** or **bliss point**. Indifference curves then become closed rings around it, and "better" means *closer to the bliss point*. Here more of a good can make the consumer worse off, so some commodities are bads beyond a certain amount.

![[Lec02_satiation.png]]

## 7. Well-behaved preferences

Preferences are called [[Well-Behaved Preferences]] when they are **monotonic** and **convex**.

- **Monotonicity**: more of any commodity is always preferred. There is no satiation and every commodity is a good. This is what makes curves downward sloping.
- **Convexity**: a mixture of two bundles is at least as good as the bundles themselves. For $x$ and $y$ on the same curve the 50-50 mix is
$$z = 0.5\,x + 0.5\,y$$

and more generally, for any weight $t$ between 0 and 1,

$$z = \big(t x_1 + (1-t) y_1,\; t x_2 + (1-t) y_2\big)$$

  The preferences are **strictly convex** when every such mixture is *strictly* preferred. (Straight-line curves, i.e. perfect substitutes, are convex but not strictly convex.)

![[Lec02_convex_vs_nonconvex.png]]

> [!tip] Intuition
> Convexity is the taste for **variety**. Averages are preferred to extremes: you would rather have a balanced basket than all of one good. Non-convex preferences prefer extremes, so the mixture is worse than the two ends.

## 8. Marginal rate of substitution

The slope of an indifference curve at a bundle is the [[Marginal Rate of Substitution]] (MRS):

$$\text{MRS} = \lim_{\Delta x_1 \to 0} \frac{\Delta x_2}{\Delta x_1} = \frac{dx_2}{dx_1}\bigg|_{\text{along the curve}}$$

Rearranged, $dx_2 = \text{MRS} \times dx_1$. So the MRS is the rate at which the consumer is **just willing to give up good 2 for a small extra amount of good 1**. It is measured in units of good 2 per unit of good 1.

![[Lec02_mrs_slope.png]]

### MRS and the shape of the curve

| Preferences | Sign of MRS | How MRS changes as $x_1$ rises |
|---|---|---|
| Two goods | negative | n/a |
| Good plus bad | positive | n/a |
| Strictly convex | negative | rises toward 0 (less negative): the consumer gives up less and less of good 2 per unit of good 1 |
| Non-convex | negative | falls (more negative) or is not always rising |

The deck's key statement: the MRS rises (becomes less negative) as $x_1$ increases **if and only if** preferences are strictly convex. This is the "diminishing MRS" property.

> [!example] Reading the numbers
> An MRS of $-5$ at a point means the consumer will swap 5 units of good 2 for one more unit of good 1. Later on the same curve an MRS of $-0.5$ means they will only swap half a unit. The more of good 1 they already hold, the less they value an extra unit.

## Summary

- Choice is modelled as picking the most preferred available bundle, so we model [[Preferences]] with $\succ$, $\sim$, $\succsim$.
- Rational preferences are **complete** and **transitive**; transitivity implies indifference curves never cross.
- Higher curves are strictly preferred. Goods give negative slopes, bads give positive slopes.
- [[Perfect Substitutes]] give straight lines; [[Perfect Complements]] give L-shapes; satiation gives rings around a bliss point.
- **Well-behaved** = monotonic + convex: downward sloping, bowed-in curves.
- The [[Marginal Rate of Substitution]] is the curve's slope; it rises toward zero exactly when preferences are strictly convex.

## Related notes

- [[Micro-Economics I]] (hub)
- [[Lec_01-Budget Constraint]]: the feasible set that preferences are matched against
- [[Lec_03-Utility and MRS]]: numerical representation of these rankings
- [[Lec_04-Optimal Bundle]]: choosing where an indifference curve touches the budget line
- [[PS_02-Preferences & Indifference Curves]]
