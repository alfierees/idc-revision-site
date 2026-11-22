---
title: "Lec 08: Elasticity"
semester: 1
year: 1
course: "Principles of Micro"
lecture: 8
instructor: Dr. Yael Hadass
tags:
  - principles-of-micro
  - elasticity
  - price-elasticity-of-demand
  - midpoint-method
  - total-revenue
  - income-elasticity-of-demand
  - cross-price-elasticity-of-demand
  - price-elasticity-of-supply
subject: principles-of-micro
in_scope: true
---

# Lec 08: Elasticity

> Part of: [[Principles of Micro]]
> Key concepts: [[Elasticity]], [[Price Elasticity of Demand]], [[Midpoint Method]], [[Total Revenue]], [[Income Elasticity of Demand]], [[Cross-Price Elasticity of Demand]], [[Price Elasticity of Supply]]

> [!info] What this lecture covers
> Supply and demand tell you the **direction** of a response (price up, quantity demanded down). Elasticity measures **how big** the response is. The lecture builds the price elasticity of demand, fixes its "which direction did I measure?" problem with the midpoint method, classifies demand curves, lists what makes demand more or less elastic, links elasticity to **total revenue**, adds income and cross-price elasticity, then repeats the whole picture for supply. Two class exercises (the websites demand curve) are folded in below. Slide content is partly adapted from Mankiw, *Principles of Economics*.

## 1. What is elasticity?

> [!info] Definition
> **[[Elasticity]]** is a numerical measure of the responsiveness of quantity demanded or quantity supplied to a change in one of its determinants (price, income, the price of other goods).

The lecture names three demand elasticities (price, income, cross-price) and then price elasticity of supply. Each one is a ratio of **percentage changes**, so it has no units and can be compared across goods.

## 2. Price elasticity of demand

$$
E_d = \frac{\%\Delta Q^d}{\%\Delta P}
$$

It captures the "price-sensitivity" of buyers: by how many percent does the quantity demanded move for a 1 percent change in the good's own price? Because the law of demand makes the ratio negative, we usually **drop the minus sign** and talk about its absolute value.

### 2.1 The problem with ordinary percentage changes

The class exercise gives a demand curve for websites with two points: **B** (price USD 250, quantity 8) and **A** (price USD 200, quantity 12). Percentage change is "end value minus start value, divided by the start value".

| Direction | % change in P | % change in Q | Elasticity |
|---|---|---|---|
| A to B (price rises) | (250 - 200) / 200 = +25% | (8 - 12) / 12 = -33% | -33 / 25 = **-1.33** |
| B to A (price falls) | (200 - 250) / 250 = -20% | (12 - 8) / 8 = +50% | +50 / -20 = **-2.50** |

> [!warning] The problem
> The same two points on the same curve give **two different elasticities** (1.33 vs 2.50) depending on which one you call the "start". The base of the percentage differs (a 4-unit change is 33% of 12 but 50% of 8). A measure of the curve should not depend on the direction you walk along it.

### 2.2 The midpoint method

Use the **average** of the start and end values as the base, so the answer is the same in both directions.

$$
\%\Delta Q^d = \frac{Q_2 - Q_1}{\frac{Q_1 + Q_2}{2}} \times 100\%
\qquad
\%\Delta P = \frac{P_2 - P_1}{\frac{P_1 + P_2}{2}} \times 100\%
$$

> [!tip] Why it works
> The midpoint (the number halfway between start and end) is the same whichever end you call the start, and the numerator only flips sign. So the ratio is identical either way: "you get the same answer either way".

**Worked example (Exercise 2).** Between B and A the midpoints are (250 + 200) / 2 = 225 for price and (8 + 12) / 2 = 10 for quantity.

- B to A: $\%\Delta P = \dfrac{200 - 250}{225} \times 100\% = -22.2\%$ and $\%\Delta Q = \dfrac{12 - 8}{10} \times 100\% = 40\%$, so $E_d = 40 / -22.2 \approx -1.8$.
- A to B: $\%\Delta P = +22.2\%$ and $\%\Delta Q = -40\%$, so $E_d = -40 / 22.2 \approx -1.8$.

Both directions give the same **-1.8** (absolute value 1.8, so demand is elastic here). That is how the problem from section 2.1 is resolved.

> [!example] Exam habit
> State the formula, compute both midpoints, compute the two percentage changes, divide, then read off the sign and compare |E| with 1. The exam's formula sheet uses the same notation.

## 3. The variety of demand curves

> [!tip] Rule of thumb
> The **flatter** the demand curve, the **bigger** the elasticity; the **steeper**, the smaller. But watch out: along a straight line the slope is constant while the elasticity changes (section 4).

All five cases are drawn for a 10% price fall (so the "% change in Q" is read directly against 10%):

| Class | Elasticity (absolute value) | Curve shape | Response to a 10% fall in P | Buyers' price-sensitivity |
|---|---|---|---|---|
| Perfectly inelastic | 0 | vertical | Q changes by 0% | none |
| Inelastic | less than 1 | relatively steep | Q rises by less than 10% | relatively low |
| Unit elastic | exactly 1 | intermediate slope | Q rises by exactly 10% | intermediate |
| Elastic | greater than 1 | relatively flat | Q rises by more than 10% | relatively high |
| Perfectly elastic | infinity | horizontal | Q changes by any amount at a 0% price change | extreme |

![[Lec08_demand_elasticity_types.png]]

> [!note] Reconstructed from the slides
> The slides draw the unit elastic case as a curve of "intermediate slope". I drew it as a curve whose percentage changes in P and Q are always equal (a rectangular hyperbola), the standard textbook unit-elastic demand.

## 4. Elasticity along a linear demand curve

A straight-line demand curve has a **constant slope** but its **elasticity changes** from point to point, because the same unit change is a large percentage of a small base and a small percentage of a large base. The slide uses a line from price USD 30 (quantity 0) to quantity 60 (price 0) and computes midpoint elasticities for three segments:

| Segment | % change in Q | % change in P | Elasticity |
|---|---|---|---|
| Price 30 to 20 (Q 0 to 20) | 200% | 40% | **5.0** (elastic) |
| Price 20 to 10 (Q 20 to 40) | 67% | 67% | **1.0** (unit elastic) |
| Price 10 to 0 (Q 40 to 60) | 40% | 200% | **0.2** (inelastic) |

![[Lec08_linear_demand_elasticity.png]]

> [!tip] Intuition
> High on the curve, price is high and quantity is low, so a small quantity move is a big percentage while the price move is a small percentage: elastic. Low on the curve it is the other way round: inelastic. The elasticity is unit at the midpoint of the line.

## 5. What determines the price elasticity of demand?

| Determinant | More elastic when | More inelastic when | Lecture examples |
|---|---|---|---|
| Availability of close substitutes | many substitutes | none | breakfast cereals vs sunscreen; butter and margarine vs gasoline |
| Necessities vs luxuries | luxury | necessity | insulin vs a luxury boat trip |
| Definition of the market | narrowly defined | broadly defined | blue jeans vs clothing; apples vs food |
| Share of income or budget | large share | small share | salt vs a house |
| Time horizon | longer horizon | short horizon | gas today vs gas in 10 years |

> [!warning] Common mistake
> Elasticity belongs to a **specific market definition**. "Food" is very inelastic, "apples" are much more elastic because you can switch to pears. Say how the market is defined before claiming a number.

## 6. Price elasticity and total revenue

[[Total Revenue]] is price times quantity:

$$
TR = P \times Q
$$

When the price rises there are two opposing effects: each unit sells for **more**, but **fewer** units are sold (law of demand). Which effect wins depends on the price elasticity of demand.

### 6.1 Two worked cases (price falls from USD 250 to USD 200)

**Case 1** (quantity goes from 8 to 12): elasticity is -1.8 (section 2.2), so demand is **elastic**. Revenue at USD 250 is 250 x 8 = USD 2,000; at USD 200 it is 200 x 12 = USD 2,400. **Revenue rises** by 400. In the picture the lost strip (8 x 50 = 400) is smaller than the gained block (4 x 200 = 800).

**Case 2** (quantity goes from 10 to 12): midpoint 11 for quantity, so $\%\Delta Q = \dfrac{12 - 10}{11} \times 100\% = 18.18\%$ against $\%\Delta P = -22.2\%$. Elasticity is $18.18 / -22.2 \approx -0.82$, so demand is **inelastic**. Revenue at USD 250 is 250 x 10 = USD 2,500; at USD 200 it is USD 2,400. **Revenue falls** by 100. The lost strip (10 x 50 = 500) now exceeds the gained block (2 x 200 = 400).

![[Lec08_total_revenue_cases.png]]

> [!note] Slide discrepancy
> On the Case 2 question slide in the lecture deck the horizontal axis is labelled 8 and 12 (copied from Case 1), but the text of the exercise and its solutions use quantity **10** and 12. I used 10 and 12.

### 6.2 The rule

| | Demand elastic (abs E > 1) | Demand inelastic (abs E < 1) |
|---|---|---|
| % change in Q vs % change in P | % change in Q is bigger | % change in Q is smaller |
| Price falls | Q rises by more, so **TR rises** | Q rises by less, so **TR falls** |
| Price rises | Q falls by more, so **TR falls** | Q falls by less, so **TR rises** |

In words: with elastic demand, the revenue lost from the lower price is smaller than the revenue gained from the extra quantity. With inelastic demand it is the reverse. At unit elasticity (the middle case) revenue does not change; the slides do not state this case but it follows directly from the rule.

> [!tip] Memory aid
> Price and total revenue move in **opposite** directions when demand is elastic and in the **same** direction when it is inelastic.

## 7. Other demand elasticities

| Elasticity | Formula | Sign tells you |
|---|---|---|
| [[Price Elasticity of Demand]] | $\dfrac{\%\Delta Q^d}{\%\Delta P}$ | always negative; drop the sign and compare the absolute value with 0, 1 and infinity |
| [[Income Elasticity of Demand]] | $\dfrac{\%\Delta Q^d}{\%\Delta \text{Income}}$ | positive: **normal good**; negative: **inferior good** |
| [[Cross-Price Elasticity of Demand]] | $\dfrac{\%\Delta Q^d \text{ of good A}}{\%\Delta P \text{ of good B}}$ | positive: **substitutes**; negative: **complements**; zero: unrelated goods |

> [!tip] Intuition for the cross-price sign
> If good B gets dearer and you buy more of good A, A replaces B (substitutes). If you buy less of A, the two are used together (complements).

## 8. Price elasticity of supply

$$
E_s = \frac{\%\Delta Q^s}{\%\Delta P}
$$

Example from the lecture: price rises 8% and quantity supplied rises 16%, so $E_s = 16 / 8 = 2.0$. It is positive (supply slopes upward). The five classes mirror demand:

| Class | Elasticity | Curve shape | Sellers' price-sensitivity |
|---|---|---|---|
| Perfectly inelastic | 0 | vertical | none |
| Inelastic | less than 1 | relatively steep | relatively low |
| Unit elastic | 1 | intermediate slope | intermediate |
| Elastic | greater than 1 | relatively flat | relatively high |
| Perfectly elastic | infinity | horizontal | extreme |

![[Lec08_supply_elasticity_types.png]]

### 8.1 Determinants of supply elasticity

> [!info] Key idea
> The more easily sellers can change the quantity they produce, the greater the price elasticity of supply.

- **Beachfront property** is hard to expand, so its supply is less elastic than that of **new cars**.
- For many goods supply is **more elastic in the long run** than in the short run, because firms can build new factories and new firms can enter the market.

## Summary

- [[Elasticity]] = percentage change in quantity divided by percentage change in a determinant (price, income, other price).
- Ordinary percentage changes give different answers in each direction; the [[Midpoint Method]] (divide by the average) fixes this.
- Demand is **elastic** if |E| > 1, **inelastic** if |E| < 1, **unit elastic** at 1; flatter curves are more elastic, but a straight line has varying elasticity (here 5.0, 1.0, 0.2).
- Demand is more elastic with close substitutes, luxuries, narrow market definitions, big budget shares and longer time horizons.
- Elastic demand: price and [[Total Revenue]] move in opposite directions. Inelastic demand: they move together.
- Income elasticity: positive normal, negative inferior. Cross-price: positive substitutes, negative complements.
- Supply elasticity is greater when sellers can adjust output easily, and in the long run.

## Related notes

- [[Principles of Micro]] (subject hub)
- [[Comparative Statics]] (the previous class, which this lecture follows)
- [[Consumer Surplus]] and [[Producer Surplus]] (welfare, next lecture)
- [[Price Controls]] and [[Taxes]] (where elasticity decides who bears the effect)
