---
title: "Lec 06: Firms in Competitive Markets"
semester: 1
year: 1
course: "Principles of Micro"
lecture: 6
instructor: Dr. Yael Hadass
tags:
  - principles-of-micro
  - competitive-market
  - price-taker
  - total-revenue
  - marginal-revenue
  - profit-maximisation
  - economic-profit
  - marginal-cost
  - shutdown-point
  - short-run-supply
  - long-run-supply
  - entry-and-exit
  - sunk-cost
subject: principles-of-micro
in_scope: true
---

# Lec 06: Firms in Competitive Markets

> Part of: [[Principles of Micro]]
> Key concepts: [[Competitive Market]], [[Price Taker]], [[Total Revenue]], [[Marginal Revenue]], [[Economic Profit]], [[Profit Maximisation]], [[Marginal Cost]], [[Shutdown Point]], [[Short-Run Supply Curve]], [[Long-Run Supply Curve]], [[Sunk Cost]]

> [!info] What this note covers
> Source: Presentation #6 + #7 (47 slides, based on Mankiw, *Principles of Microeconomics*, 8th ed.). It answers one question: **given a market price, how many units should a competitive firm produce, and should it produce at all?** It builds the firm's supply curve from its cost curves (see [[Lec_14-Production Costs Worksheet]] for the cost definitions), then adds up firms to get market supply in the short and long run.

## 1. What is a competitive market?

A [[Competitive Market]] has:

- many buyers and many sellers
- identical (homogeneous) products
- no single buyer or seller able to affect the price
- easy entry and exit for firms
- full information

Buyers and sellers here are **price takers**. The slides use the market for eggs and pose two questions: what happens if a seller prices below, or above, the market price?

> [!note] Reconstructed from the slides
> The slides only ask these questions. The standard answer: a seller below the market price gives away revenue it could have had, since it can already sell all it wants at the market price. A seller above the market price sells nothing, because buyers can get an identical good elsewhere at the market price. So no firm has a reason to deviate.

### The firm sees a horizontal demand curve

The market (all producers together, all consumers together) settles at a price of **3 per bushel** and a quantity of 15 billion bushels. One farm is tiny (about 15,000 bushels), so it cannot move that price. At the market price it can sell as much as it wishes, so **the demand curve it faces is horizontal at the market price.**

![[Lec06_price_taker.png]]

> [!tip] Market curves slope, the firm's does not
> The market demand curve slopes down because buyers respond to price. The single firm's demand curve is flat because the firm is so small relative to the market. The firm's only decision is the **quantity** to produce, not the price.

## 2. Revenue for a price taker

Total, average and marginal revenue (price is 3 in the slides' table):

$$
TR = P \times Q, \qquad AR = \frac{TR}{Q}, \qquad MR = \frac{\Delta TR}{\Delta Q}
$$

| Quantity | Price (P) | [[Total Revenue]] (TR) | [[Average Revenue]] (AR) | [[Marginal Revenue]] (MR) |
|---|---|---|---|---|
| 1 | 3 | 3 | 3 | 3 |
| 2 | 3 | 6 | 3 | 3 |
| 3 | 3 | 9 | 3 | 3 |
| 4 | 3 | 12 | 3 | 3 |
| 5 | 3 | 15 | 3 | 3 |
| 6 | 3 | 18 | 3 | 3 |
| 7 | 3 | 21 | 3 | 3 |
| 8 | 3 | 24 | 3 | 3 |

> [!info] Key identity for a price taker
> $$
> \boxed{P = AR = MR}
> $$
> Each extra unit sells at the same price, so it adds exactly P to revenue.

## 3. Profit and how the firm chooses quantity

[[Economic Profit]] is total revenue minus **total** costs, where total costs include both [[Explicit Costs]] and [[Implicit Costs]] (the owner's opportunity cost):

$$
\text{Profit} = TR - TC
$$

> [!note] Implicit costs are always given
> The slides say not to worry about implicit costs: the information will always be provided in an exam question.

Assumptions: the firm cannot affect the product price or the input prices. The only way it affects profit is by **choosing the quantity**. So it checks profit at each quantity and picks the highest.

### Method 1: compare total profit at every quantity (P = 12)

| Q | TR (P = 12) | TC | Profit = TR - TC |
|---|---|---|---|
| 0 | 0 | 15 | -15 |
| 1 | 12 | 25 | -13 |
| 2 | 24 | 33 | -9 |
| 3 | 36 | 40 | -4 |
| 4 | 48 | 46 | 2 |
| 5 | 60 | 54 | 6 |
| 6 | 72 | 63 | 9 |
| 7 | 84 | 73 | 11 |
| **8** | **96** | **84.9** | **11.1** |
| 9 | 108 | 98 | 10 |
| 10 | 120 | 113 | 7 |
| 11 | 132 | 132 | 0 |

Profit peaks at **Q = 8** (11.1). Note the firm still loses 15 at Q = 0: that is the fixed cost.

### Method 2: compare marginal revenue and marginal cost

[[Marginal Revenue]] is the change in revenue from one more unit. [[Marginal Cost]] is the change in total cost from one more unit. Their difference is the extra profit from the last unit, the [[Marginal Profit]].

| Q | TR | TC | Profit | MR | MC | MR - MC (marginal profit) |
|---|---|---|---|---|---|---|
| 0 | 0 | 15 | -15 | | | |
| 1 | 12 | 25 | -13 | 12 | 10 | 2 |
| 2 | 24 | 33 | -9 | 12 | 8 | 4 |
| 3 | 36 | 40 | -4 | 12 | 7 | 5 |
| 4 | 48 | 46 | 2 | 12 | 6 | 6 |
| 5 | 60 | 54 | 6 | 12 | 8 | 4 |
| 6 | 72 | 63 | 9 | 12 | 9 | 3 |
| 7 | 84 | 73 | 11 | 12 | 10 | 2 |
| 8 | 96 | 84.9 | 11.1 | 12 | 11.9 | 0.1 |
| 9 | 108 | 98 | 10 | 12 | 13.1 | -1.1 |
| 10 | 120 | 113 | 7 | 12 | 15 | -3 |
| 11 | 132 | 132 | 0 | 12 | 19 | -7 |

Up to Q = 8, each extra unit adds a positive amount to profit (MR > MC, the green area on the slide). From Q = 9 each extra unit loses money (MR < MC, the red area). Total profit therefore rises until Q = 8 and falls after.

![[Lec06_mr_mc_profit.png]]

> [!example] Rules for profit maximisation
> - **MR > MC**: the firm should increase output.
> - **MR < MC**: the firm should decrease output.
> - **MR = MC**: profit-maximising output.
>
> For a price taker, MR = P, so the firm produces where **P = MC**.

> [!warning] Use the rising part of MC
> With P = 8 (second MR line on the slide) MC equals 8 at both Q = 2 and Q = 5. The firm produces at **Q = 5**, where MC is rising. At Q = 2, MC is falling and the next units would still add profit, so output should go on to Q = 5. This second-crossing point is reconstructed from the slide's graph, the slides do not state it.

> [!tip] Why MC is the supply curve
> If the price rises from P1 to P0, the firm moves up its MC curve and produces more. The MC curve tells you how many units the firm supplies at each price. Hence **the marginal-cost curve is the competitive firm's supply curve** (refined in section 5 by the shutdown rule).

## 4. The firm's cost curves and the price

The slides add fixed cost 15 and variable cost to the table so that ATC and AVC can be drawn with the price line (P = 12).

> [!warning] Column labels are scrambled on slide 24
> On the slide the columns headed ATC, AVC and MC are shifted by one: the numbers under "ATC" are actually MC, under "AVC" are ATC, and under "MC" are AVC. The correct columns, recomputed from FC = 15 and the VC and TC values given, are below. Slide 42's text ("ATC = 12, MC = 10.61") has the same slip, see section 6.

| Q | FC | VC | TC | **ATC** = TC/Q | **AVC** = VC/Q | **MC** |
|---|---|---|---|---|---|---|
| 1 | 15 | 10 | 25 | 25 | 10 | 10 |
| 2 | 15 | 18 | 33 | 16.5 | 9 | 8 |
| 3 | 15 | 25 | 40 | 13.33 | 8.33 | 7 |
| 4 | 15 | 31 | 46 | 11.5 | 7.75 | 6 |
| 5 | 15 | 39 | 54 | 10.8 | 7.8 | 8 |
| 6 | 15 | 48 | 63 | 10.5 | 8 | 9 |
| 7 | 15 | 58 | 73 | 10.43 | 8.29 | 10 |
| 8 | 15 | 69.9 | 84.9 | 10.61 | 8.74 | 11.9 |
| 9 | 15 | 83 | 98 | 10.89 | 9.22 | 13.1 |
| 10 | 15 | 98 | 113 | 11.3 | 9.8 | 15 |
| 11 | 15 | 117 | 132 | 12 | 10.64 | 19 |

![[Lec06_cost_curves.png]]

Identities to remember (from the slides):

$$
TC = VC + FC, \qquad ATC = \frac{TC}{Q}, \quad AVC = \frac{VC}{Q}, \quad AFC = \frac{FC}{Q}, \qquad ATC = AVC + AFC
$$

At P = 12, the firm produces where MC meets the price line: Q = 8 (MC = 11.9, just below 12; the next unit's MC of 13.1 is above 12).

## 5. Short-run decision: produce, shut down or exit?

Given the market price, the firm has three options:

1. **Produce** a positive quantity.
2. **Shut down** (produce 0) but stay in the market: it still pays fixed costs.
3. **Exit** the market altogether, eliminating fixed costs.

Whatever it does, profit maximisation says: if it produces, it produces where **P = MC**.

### Short run versus long run

| | Short run | Long run |
|---|---|---|
| Length | Up to about a year | A year or more |
| Contracts | Still binding (e.g. rent) | Mostly ended |
| Fixed costs | **Must still be paid** | Can be changed or eliminated |
| Decision | Produce or **shut down** | Stay or **exit** |

> [!info] Shutdown versus exit
> A **shutdown** is a short-run decision not to produce during a specific period. **Exit** is a long-run decision to leave the market. They differ only because fixed costs remain in the short run and vanish in the long run.

### The shutdown rule

In the short run the fixed costs are paid anyway, so the only question is whether revenue covers the **variable** costs:

$$
\text{Shut down if } TR < VC \;\Longleftrightarrow\; \frac{TR}{Q} < \frac{VC}{Q} \;\Longleftrightarrow\; P < AVC
$$

So a firm produces a positive quantity only if both conditions hold:

$$
\boxed{P = MC \quad \text{and} \quad P \ge \min(AVC)}
$$

The [[Shutdown Point]] is the minimum of AVC: below that price the firm stops producing.

![[Lec06_short_run_supply.png]]

> [!example] Reading the left panel (slide 30)
> At P1 (above AVC at the point where P = MC), revenue covers variable costs: produce. At P2, price is below AVC where P = MC, so sales do not cover variable costs: better to produce nothing and pay only the fixed costs.

### Operating at a loss in the short run (slide 31)

Suppose the price is between min AVC and ATC. The firm makes a loss, but producing is still better than shutting down.

- Loss from producing q1: $(ATC - P) \times q_1$ (the orange rectangle).
- Loss from shutting down: all the fixed cost, $AFC \times q_1 = (ATC - AVC) \times q_1$ (orange **plus** blue rectangle).
- The blue rectangle, $(P - AVC) \times q_1$, is what the firm earns above its variable costs. It goes towards paying fixed costs.

Since $ATC - AVC = AFC$, producing loses less than shutting down whenever $P > AVC$.

![[Lec06_loss_and_profit.png]]

> [!note] Lettering on slide 31
> The slide's rectangles are labelled with points A to F and a few of its formula lines use those letters loosely. The logic above matches its message: loss when not producing is the orange plus blue area, which exceeds the loss from producing.

### Sunk costs

A [[Sunk Cost]] is a cost already committed that cannot be recovered. Fixed costs in the short run are sunk, so they should not affect the shutdown decision. The slides' examples: restaurants and golf courses that close at some hours because revenue would not cover variable costs, even though the rent cannot be avoided. (The slide title also mentions "spilt milk", the proverbial sunk cost.)

### Short-run supply curve of one firm

> [!info] Short-run supply of a competitive firm
> $$
> \text{Supply} = MC \text{ at all prices } P \ge \min(AVC)
> $$
> The curve is the part of the MC curve **from its intersection with min AVC upwards**. Below that price the firm supplies zero.

In the right-hand panel of the figure above, at P0 (= min AVC) the firm is at the shutdown point, and at higher prices P1 and P2 it moves up the MC curve to larger quantities.

## 6. Long-run decision: enter or exit

In the long run all costs are variable, so the firm compares price with **average total cost**:

- **Exit** if TR < TC, i.e. TR/Q < TC/Q, i.e. **P < ATC**.
- An entrepreneur **enters** if **P > ATC**.
- Profit per unit is $P - ATC$, so total profit is $(P - ATC) \times Q$.

Hence in the long run the firm produces a positive quantity if $P \ge \min(ATC)$ and $P = MC$. The [[Long-Run Supply Curve]] of the single firm is MC from the point where MC = min(ATC).

### Positive profit at P = 12 (slides 41 and 42)

At P = 12, the firm produces q1 = 8 (q0 = 7 and q2 = 9 are shown on the slide for comparison, with MC of 10 and 13.10).

- MR = 12 and MC is about 12, so MR - MC is about 0: the last unit just pays for itself, the point of profit maximisation. Below q1, MR > MC.
- At q1 = 8, ATC = 10.61. Profit per unit = 12 - 10.61 = 1.39, total profit = 1.39 x 8, about 11.1 (the rectangle ABCD on the slide, height P - ATC and width q1). This matches the table (96 - 84.9 = 11.1).

> [!warning] Slide 42 text has a slip
> The slide says "ATC = 12, MC = 10.61". From the table (and the graph on the same slide, where 10.61 is the ATC level), at q = 8 we have **ATC = 10.61 and MC = 11.9**. The 1.39 per unit figure uses ATC = 10.61 and is correct.

### Why profit does not stay positive: entry and exit

- **Profitable industry**: firms enter, quantity supplied rises, the market price falls and profit shrinks.
- **Loss-making industry**: firms exit, quantity supplied falls, the price rises and profit recovers.
- Process stops when **P = ATC** and economic profit is zero.

So in the long run the **market supply curve is fully elastic (horizontal) at P = ATC** (to be made precise once elasticity is taught).

### Why would firms stay at zero profit?

[[Economic Profit]] subtracts all opportunity costs of the owner. [[Accounting Profit]] does not. So when economic profit is zero, accounting profit may still be positive: the owner earns what they could have earned elsewhere, which is enough to stay.

> [!example] Illustration (reconstructed)
> If an owner earns 100 of revenue less 70 of explicit costs, accounting profit is 30. If the owner could have earned 30 elsewhere (an implicit cost), economic profit is 0: no incentive to enter or leave. These numbers are mine, not the slides'.

## 7. From one firm to the market

### Short run: fixed number of firms

With, say, 1000 firms, **market supply at each price is the sum of the quantities supplied by all firms** at that price (horizontal sum of the individual supply curves).

### Long run: effect of higher demand

![[Lec06_entry_and_long_run_supply.png]]

- Demand rises (Demand0 to Demand1) and, along the short-run supply curve, the price goes up. Economic profit becomes positive.
- New firms enter, so supply shifts out (Short-Run Supply0 to Short-Run Supply1).
- The price falls back until profit is zero again. The price returns to the long-run level, and only quantity has risen.
- Joining the two equilibria gives a flat **long-run supply curve**.

> [!note] Figure is schematic
> The slide's graph has no numbers. The lines here are drawn to show the same sequence of points, not exact values.

### Why the long-run supply curve might slope upwards

The horizontal long-run curve is a benchmark. It can slope up because:

1. **Limited resources**: the supply cannot be increased without limit.
2. **Firms have different costs**: some firms have lower costs and make positive profit even in the long run.

## 8. Summary

> [!success] Key takeaways
> - In a competitive market the firm is a **price taker**: $P = AR = MR$, demand is horizontal.
> - Profit is $TR - TC$ with TC including implicit (opportunity) costs. Pick the quantity with the highest profit, equivalently **MR = MC**, i.e. **P = MC** (on the rising part of MC).
> - **Short run**: produce only if $P \ge \min(AVC)$. Supply curve = MC above min AVC. Fixed costs are sunk, so a loss-making firm with $P > AVC$ keeps producing.
> - **Long run**: produce only if $P \ge \min(ATC)$. Supply curve = MC above min ATC. Exit if $P < ATC$, enter if $P > ATC$.
> - Entry and exit push the market price to **P = min ATC** and economic profit to zero, so long-run market supply is horizontal (it may slope up if resources are limited or costs differ).
> - **Zero economic profit** still leaves positive accounting profit, which is why firms stay.

| Concept | Short run | Long run |
|---|---|---|
| Produce if | $P \ge \min(AVC)$ | $P \ge \min(ATC)$ |
| Firm supply curve | MC above min AVC | MC above min ATC |
| Fixed costs | Paid regardless (sunk) | Avoidable |
| Leave via | Shutdown | Exit |
| Number of firms | Fixed | Free entry and exit |
| Market supply | Sum of firms' supply | Horizontal at P = ATC (benchmark) |

## Related notes

- [[Principles of Micro]]
- [[Lec_14-Production Costs Worksheet]] (cost definitions and the cost table)
- [[Marginal Cost]], [[Average Total Cost]], [[Average Variable Cost]], [[Fixed Costs]], [[Variable Costs]]
