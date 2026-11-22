---
title: "Lec 07: Substitution and Income Effects"
semester: 2
year: 1
course: "Micro-Economics I"
lecture: 7
tags:
  - micro-i
  - slutsky
  - income-effect
  - substitution-effect
  - normal-good
  - inferior-good
  - giffen-good
subject: micro-i
in_scope: true
---

# Lec 07: Substitution and Income Effects (the Slutsky Equation)

> Part of: [[Micro-Economics I]]
> Key concepts: [[Substitution Effect]], [[Income Effect]], [[Slutsky Compensation]], [[Real Income]], [[Normal Good]], [[Inferior Good]], [[Giffen Good]], [[Law of Downward-Sloping Demand]]

> [!info] Source and scope
> Based on the Varian Chapter 8 deck on the Slutsky equation (slides 1 to 44, all covered). The deck is diagram-led, so the figures below are my own redraws. The numbers in the worked example are my own illustration, not from the slides.

## 1. The question: why does demand move when a price moves?

When the price of good 1 falls, the [[Budget Line]] pivots outwards around the good-2 intercept. The consumer's choice changes, and the change has **two separate causes**:

| Effect | What changes | Intuition |
|---|---|---|
| [[Substitution Effect]] | Relative prices | Good 1 is now cheaper compared with good 2, so swap some good 2 for good 1 |
| [[Income Effect]] | Purchasing power | The same money now buys more, as if income had risen, so all normal demands shift |

Slutsky's insight: **every price-driven change in demand is exactly the sum of a pure substitution effect and an income effect.**

$$
\Delta x_1 = \Delta x_1^{s} + \Delta x_1^{n}
$$

Here $\Delta x_1$ is the total change in demand, $\Delta x_1^{s}$ the substitution effect and $\Delta x_1^{n}$ the income effect.

## 2. Real income: the yardstick

The pivot of the budget line makes the consumer better off, but money income $y$ has not changed. Slutsky measured the change in **[[Real Income]]** by asking about the original bundle:

- If, at the new prices, **less money** is needed to buy the original bundle, real income has **risen**.
- If **more money** is needed, real income has **fallen**.

On the diagram, a price fall means the original bundle sits strictly inside the new budget set. A price rise means it falls outside.

![[Lec07_real_income.png]]

The money needed to buy the old bundle $(x_1, x_2)$ at the new prices $(p_1', p_2)$ is $y' = p_1' x_1 + p_2 x_2$. The "extra" income from a price fall is therefore $y - y'$.

> [!tip] Why use the old bundle as the benchmark?
> It gives a clean definition of "no change in real income": a consumer who can only just afford their old bundle is no better or worse off in purchasing power, even though prices are different. This is the idea behind [[Slutsky Compensation]].

## 3. Isolating the pure substitution effect

To see the effect of relative prices alone, **strip out the real-income change**. Take away income until the consumer can only just buy the original bundle at the new prices. Geometrically:

1. Start from the original choice $A = (x_1', x_2')$ on the old budget line.
2. Draw a new budget line with the **new slope** (new relative price) that passes **through $A$**. This is the Slutsky budget line.
3. Find the best affordable bundle on that line: $B = (x_1'', x_2'')$.

The move $A \to B$ is the **pure substitution effect**. Because $B$ lies on a line through $A$ with a flatter slope, and preferences are well behaved, it always involves more of the now-cheaper good 1 and less of good 2.

> [!note] Reconstructed from the slides
> The deck builds this diagram frame by frame with little text. The explanation of why $B$ is always to the right of $A$ (revealed preference: $A$ was chosen when $B$ was affordable, so $B$ cannot lie inside the old budget set on the steeper side) is my reconstruction. Compare [[Revealed Preference]].

## 4. Then add the income effect

Now return the income that was taken away. The budget line shifts out, parallel to the Slutsky line, to the actual new budget line. The consumer moves from $B$ to the final choice $C = (x_1''', x_2''')$.

The move $B \to C$ is the **income effect**: same relative prices, higher real income.

**Total change = substitution ($A \to B$) + income ($B \to C$) = $A \to C$.**

> [!example] Worked example (my own numbers, Cobb-Douglas)
> Let $U = x_1 x_2$, $p_2 = 1$, income $y = 100$, and $p_1$ falls from 2 to 1. Cobb-Douglas demand spends half of income on each good: $x_1 = y/(2p_1)$, $x_2 = y/(2p_2)$.
>
> - **Original choice A:** $x_1 = 100/4 = 25$, $x_2 = 50$.
> - **Cost of A at new prices:** $1 \cdot 25 + 1 \cdot 50 = 75$. So the Slutsky income is $y' = 75$ and the consumer is "compensated" by taking away 25.
> - **Substitution step B** (prices 1 and 1, income 75): $x_1 = 75/2 = 37.5$, $x_2 = 37.5$. Substitution effect on good 1 is $37.5 - 25 = +12.5$.
> - **Final choice C** (prices 1 and 1, income 100): $x_1 = 50$, $x_2 = 50$. Income effect is $50 - 37.5 = +12.5$.
> - Total change $= +25$, and $12.5 + 12.5 = 25$.

![[Lec07_slutsky_decomposition_normal.png]]

> [!warning] Common mistake
> The grey Slutsky line is **not** a budget the consumer actually faces. It is a thought experiment. Do not label point $B$ as the consumer's choice after the price change: the actual new choice is $C$.

## 5. Normal goods: the two effects reinforce

A **[[Normal Good]]** is one whose demand rises when income rises. For a price fall:

- Substitution effect: demand for good 1 goes **up**.
- Income effect: real income rose, so demand for a normal good goes **up**.

Both push the same way, so quantity demanded definitely rises when own price falls. The deck concludes that the ordinary demand curve of a normal good always slopes down: the [[Law of Downward-Sloping Demand]] always holds for normal goods.

## 6. Inferior goods: the two effects oppose

An **[[Inferior Good]]** (the deck says "income-inferior") is one whose demand **falls** when income rises. For a price fall:

- Substitution effect: demand goes **up** (same as for any good).
- Income effect: real income rose, so demand for an inferior good goes **down**.

The effects pull in opposite directions. The net result depends on which is bigger. For an ordinary inferior good the substitution effect still wins, so the total is positive and demand still slopes down, just by less than it would otherwise.

## 7. Giffen goods: the income effect wins

In rare cases of **extreme** income-inferiority, the income effect is bigger in size than the substitution effect. Then a fall in $p_1$ makes quantity demanded **fall** (and a rise in the price makes it rise). Such a good is a **[[Giffen Good]]**.

This is exactly where the Law of Downward-Sloping Demand breaks, and the decomposition explains why: the law holds whenever the substitution effect dominates or the income effect reinforces it.

![[Lec07_effects_by_good_type.png]]

> [!note] Schematic only
> The middle and right panels are positional sketches I drew to show the sign pattern. They are not drawn from a specific utility function, and the slides draw the full indifference-curve versions.

## 8. Comparison table

All rows are for a **fall** in $p_1$ (reverse every sign for a rise).

| Type of good | Substitution effect on $x_1$ | Income effect on $x_1$ | Net effect on $x_1$ | Demand curve slopes down? |
|---|---|---|---|---|
| Normal | $+$ | $+$ | $+$ (reinforcing) | Always |
| Inferior (ordinary) | $+$ | $-$ | $+$ (substitution bigger) | Yes |
| Giffen | $+$ | $-$ | $-$ (income bigger) | No, slopes up |

> [!tip] Sign rule to memorise
> The substitution effect is **always** in the direction "buy more of the good that got cheaper". Only the income effect can change sign, and its sign is the same as the sign of the income response of the good (positive for normal, negative for inferior).

## Summary

- A price change moves demand through two channels: relative prices (substitution) and purchasing power (income). Slutsky showed total change = substitution + income.
- [[Real Income]] is judged by whether the **original bundle** is cheaper or dearer to buy at the new prices.
- Pure substitution: rotate the budget line about the old bundle to the new slope, then re-optimise. Income effect: shift that line out to the actual budget.
- Normal goods: effects reinforce, demand always slopes down. Inferior goods: effects oppose. Giffen goods: income effect so large that the demand curve slopes up.
- Worked example: Cobb-Douglas $U = x_1x_2$, $p_1$ from 2 to 1, gives substitution $+12.5$ and income $+12.5$ on good 1.

## Related notes

- [[Micro-Economics I]]
- [[Lec_06-Revealed Preference]] for the Slutsky compensation idea and revealed-preference logic
- [[Lec_05-Demand]] for ordinary demand curves and normal vs inferior goods
- [[Lec_04-Optimal Bundle]] for the tangency choice used at each of A, B and C
- [[Lec_08-Labor Supply]] for the same decomposition applied to wages
- [[PS_05-Revealed Preference, Compensation & Income and Substitution Effects]]
- Concept entries: [[Slutsky Compensation]], [[Hicks Compensation]], [[Income Effect]], [[Substitution Effect]]
