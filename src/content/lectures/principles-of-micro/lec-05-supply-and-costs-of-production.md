---
title: "Lec 05: Supply and Costs of Production"
semester: 1
year: 1
course: "Principles of Micro"
lecture: 5
instructor: Dr. Yael Hadass
tags:
  - principles-of-micro
  - profit
  - explicit-costs
  - implicit-costs
  - economic-profit
  - accounting-profit
  - production-function
  - marginal-product
  - diminishing-marginal-product
  - fixed-costs
  - variable-costs
  - average-total-cost
  - marginal-cost
  - economies-of-scale
  - supply-curve
subject: principles-of-micro
in_scope: true
---

# Lec 05: Supply and Costs of Production

> Part of: [[Principles of Micro]]
> Key concepts: [[Profit]], [[Explicit Costs]], [[Implicit Costs]], [[Economic Profit]], [[Accounting Profit]], [[Production Function]], [[Marginal Product]], [[Diminishing Marginal Product]], [[Fixed Costs]], [[Variable Costs]], [[Total Cost]], [[Average Total Cost]], [[Marginal Cost]], [[Economies of Scale]], [[Supply Curve]]

> [!info] What this lecture does
> Lectures 3 and 4 treated supply as given. This lecture opens the firm up: a firm wants to maximise profit, so to know how much it will sell at each price we first need to know what its production costs. It builds from how economists count costs, to the production function, to the cost curves (AFC, AVC, ATC, MC), and ends with the firm's [[Supply Curve]] and scale effects. The class cost exercise is in [[Lec_14-Production Costs Worksheet]].

## 1. The firm's goal: maximise profit

> [!info] Definition: Profit
> [[Profit]] is **revenue** (income from sales) minus the **costs** of producing the product. A positive profit can be reinvested to develop the firm or paid to the shareholders (the owners) as dividends.

The lecture's starting question is how the management of a firm makes decisions: what to produce and how many units. Everything below serves that decision.

## 2. Two ways of measuring cost

Economists and accountants do not count costs the same way, because they ask different questions.

- **Accountants** measure costs, revenue and profit for **tax** purposes, so they only record money that actually changes hands.
- **Economists** want to understand the firm's **decisions**, so they count everything the firm gives up.

| | [[Explicit Costs]] | [[Implicit Costs]] |
|---|---|---|
| What | Money actually paid out (wages, raw materials, electricity, rent) | Income given up by using resources in this activity, i.e. the opportunity cost |
| Who counts it | Economists and accountants | Economists only |

$$
\text{Economic total cost} = \text{explicit costs} + \text{implicit costs}
$$

$$
\text{Accounting total cost} = \text{explicit costs}
$$

> [!example] Judy: guitar or cookies
> Judy can give guitar lessons or bake and sell cookies. If she bakes, she gives up the potential income from teaching. That forgone income is an implicit cost of baking. No money leaves her pocket, so an accountant ignores it.

![[Lec05_economist_vs_accountant.png]]
*Theory diagram: the lecture's Figure 1. Revenue splits into explicit costs, implicit costs and economic profit for the economist; the accountant sees only explicit costs and a larger "accounting profit".*

$$
\text{Economic profit} = \text{total revenue} - (\text{explicit} + \text{implicit costs})
$$

$$
\text{Accounting profit} = \text{total revenue} - \text{explicit costs}
$$

So [[Accounting Profit]] is always at least as big as [[Economic Profit]], and the gap is exactly the implicit costs.

### 2.1 Worked example: Caroline's cookie factory

Caroline needs USD 100,000 for raw materials, labour and rent. Savings in a bank pay 5% interest.

| Financing | Explicit cost | Implicit cost | Accounting total cost | Economic total cost |
|---|---|---|---|---|
| All from savings (USD 100,000) | USD 100,000 | 0.05 x 100,000 = USD 5,000 (lost interest) | USD 100,000 | USD 105,000 |
| USD 50,000 savings + USD 50,000 loan at 5% | USD 100,000 + USD 2,500 loan interest | USD 2,500 (lost interest on the savings used) | USD 102,500 | USD 105,000 |

> [!tip] The point of the example
> The economic total cost is **the same** (USD 105,000) however she finances the factory. Using her own money is not "free": it costs the interest she could have earned. The accountant's number changes with the financing, the economist's does not. The hint on the slide: ask what is actually paid with money. A bank loan's interest is paid in cash, so it is explicit.

> [!warning] Course convention
> In this course we always use **economic costs** (explicit plus implicit). Accounting costs are left to the accounting course next year.

## 3. Production and costs

The running example: Caroline has a cookie factory, with two assumptions.

- The **size of the factory is fixed**.
- Output changes **only** by hiring more workers.

| Workers | Output | [[Marginal Product]] of labour | Cost of factory | Cost of workers (USD 10 each) | Total cost of inputs |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 45 | 0 | 45 |
| 1 | 50 | 50 | 45 | 10 | 55 |
| 2 | 90 | 40 | 45 | 20 | 65 |
| 3 | 120 | 30 | 45 | 30 | 75 |
| 4 | 140 | 20 | 45 | 40 | 85 |
| 5 | 150 | 10 | 45 | 50 | 95 |

> [!info] Definitions from the slides
> - **[[Production Function]]**: the relationship between the quantity of inputs used and the quantity of output made.
> - **[[Marginal Product]]**: the increase in output from one additional unit of input.
> - **[[Diminishing Marginal Product]]**: the marginal product of an input falls as the quantity of that input rises.

$$
MP = \frac{\Delta \text{Output}}{\Delta \text{Input}}
$$

Here each worker adds 50, 40, 30, 20, 10: output keeps rising but at a falling rate, so the production function flattens. See [[Marginal Product of Labour]].

![[Lec05_production_and_total_cost.png]]
*Theory diagram: left, the production function (output against workers); right, total cost against output. The two are mirror images. Output flattens as workers are added, so each extra unit of output needs more workers, and total cost rises faster and faster. Values are the slide table.*

> [!note] Reconstructed from the slides
> The slides plot the production function (workers on the x axis) and the total cost function (output on the x axis) side by side. The link is that the total cost column is the factory cost plus 10 per worker, so the total-cost curve is the production function turned on its side: when each worker adds less output, getting the same extra output needs more workers and more cost, so the curve steepens. The curve starts at 45, not 0, because the factory is paid for even at zero output.

> [!note] Typical curves: marginal product can rise first
> In many real firms the second or third worker has a **higher** marginal product than the first, because a team can divide tasks. Marginal product then rises for a while before diminishing marginal product sets in. The slides draw no picture of this.

## 4. Types of cost

| | [[Fixed Costs]] | [[Variable Costs]] |
|---|---|---|
| Vary with output? | No | Yes |
| Examples | Rent, bookkeeping | Raw materials, workers' salaries |
| In the factory example | The factory, 45 | Workers, 10 each |

$$
TC = FC + VC
$$

The firm's decision in the bagel example (the slides' next running example) is how many bagels to produce and how many workers to hire. To answer, it needs two numbers: what does it cost to make a bagel, and what does it cost to make **one more**.

## 5. Average and marginal cost

$$
ATC = \frac{TC}{Q} = \frac{FC}{Q} + \frac{VC}{Q} = AFC + AVC
$$

$$
MC = \frac{\Delta TC}{\Delta Q}
$$

| Measure | Formula | Answers |
|---|---|---|
| [[Average Fixed Cost]] (AFC) | FC / Q | Fixed cost per unit |
| [[Average Variable Cost]] (AVC) | VC / Q | Variable cost per unit |
| [[Average Total Cost]] (ATC) | TC / Q = AFC + AVC | What does the typical unit cost? |
| [[Marginal Cost]] (MC) | change in TC / change in Q | What does one more unit add to total cost? |

> [!warning] ATC is not MC
> ATC divides total cost evenly over all units, so it says nothing about how total cost **changes** when output changes. That is MC's job. Slide example: Q = 2 has TC = USD 3.80 and Q = 3 has TC = USD 4.50, so $MC = 4.50 - 3.80 = 0.70$.

### 5.1 The bagel table

The slides say "see example in excel": the class workbook is the table below (full walkthrough in [[Lec_14-Production Costs Worksheet]]). Fixed cost is 3.

| Q | VC | TC | AFC | AVC | ATC | MC |
|---|---|---|---|---|---|---|
| 1 | 0.3 | 3.3 | 3 | 0.3 | 3.3 | 0.3 |
| 2 | 0.8 | 3.8 | 1.5 | 0.4 | 1.9 | 0.5 |
| 3 | 1.5 | 4.5 | 1 | 0.5 | 1.5 | 0.7 |
| 4 | 2.4 | 5.4 | 0.75 | 0.6 | 1.35 | 0.9 |
| 5 | 3.5 | 6.5 | 0.6 | 0.7 | 1.3 | 1.1 |
| 6 | 4.8 | 7.8 | 0.5 | 0.8 | 1.3 | 1.3 |
| 7 | 6.3 | 9.3 | 0.43 | 0.9 | 1.33 | 1.5 |
| 8 | 8 | 11 | 0.375 | 1 | 1.375 | 1.7 |
| 9 | 9.9 | 12.9 | 0.33 | 1.1 | 1.43 | 1.9 |
| 10 | 12 | 15 | 0.3 | 1.2 | 1.5 | 2.1 |

> [!warning] Differs slightly from the source
> The workbook types AFC at Q = 7 as 0.42 (and so ATC 1.32); 3/7 = 0.43 and 9.3/7 = 1.33, which is what is shown here. Q = 8 values are shown unrounded.

![[Lec05_bagel_cost_curves.png]]
*Theory diagram: AFC, AVC, ATC and MC for the bagel table (the slide chart, redrawn from its values).*

### 5.2 Three rules the curves always obey

- When **MC < ATC**, ATC is falling.
- When **MC > ATC**, ATC is rising.
- **MC = ATC at the minimum of ATC.**

The slides say this is true for **all firms**, and explain it with a grade analogy.

> [!tip] The GPA analogy
> Your cumulative average is ATC and your next grade is MC. A next grade above your average pulls the average up, one below pulls it down. The average stops moving exactly when the new grade equals it: the minimum point.

In the bagel table: at Q = 5, MC 1.1 is below ATC 1.3 (ATC falls), at Q = 6, MC = ATC = 1.3 (the minimum), at Q = 7, MC 1.5 is above ATC 1.33 (ATC rises).

### 5.3 Features shared by all firms

- **MC eventually rises** with output.
- The **ATC curve is U-shaped**.
- **MC crosses ATC at the minimum of ATC.**

> [!note] Reconstructed from the slides
> Why U-shaped: at low output AFC falls quickly as fixed cost is spread thinner, pulling ATC down. At higher output, rising AVC (diminishing marginal product makes extra output costlier) outweighs the shrinking AFC and ATC turns up. The gap between ATC and AVC is AFC, so the two curves converge as Q grows.

The slides' "Big Bob's" figure (the bagel curves in euros per hour, quantity 0 to 14) shows exactly this: MC rising and cutting through ATC and AVC at their minima, AFC falling throughout.

## 6. From costs to the supply curve

The slides ask: when will the firm supply the product? Assumptions: the firm is **very small**, so its output does not affect the market price. It takes the market price as **given**.

> [!info] Definition: Supply curve
> The [[Supply Curve]] describes how many units the firm is willing to sell at each market price.

Reading the cost curves, the slide's argument is:

1. If the price is above the **minimum ATC**, then for any additional unit the **marginal cost exceeds the average total cost**, so the firm makes a profit on that unit (slide: "hence it is profitable").
2. As the firm produces more, MC rises, so a higher price is needed to justify more output.

> [!note] Reconstructed from the slides
> The slides pose the questions (at what price does profit begin, what must happen to price as output grows, and why) and give the answer only as the annotation on the figure. The logic: a price-taking firm earns the price on every unit, so it makes a profit when price exceeds ATC. ATC is lowest at its minimum, so no profit is possible below that price. Above it, the firm increases output while the price still exceeds the cost of the next unit, so the rising part of the MC curve above minimum ATC traces out the quantity supplied at each price. That is why supply slopes **upwards**: MC rises. The formal profit-maximising rule is developed in [[Lec_06-Firms in Competitive Markets]].

![[Lec05_firm_supply_from_mc.png]]
*Theory diagram (stylised, not the lecture's figure): the firm's supply curve as the MC curve above the minimum of ATC.*

> [!example] Class experiment: the apple farmer
> The slides end on a discussion: you grow apples. What are the costs of planting apples (seeds, land, labour, and the farmer's own time as an implicit cost)? If the price of apples rises, how do producers respond? Answer: they supply more, tracing an upward-sloping supply curve with price P on the vertical axis and quantity q on the horizontal axis (the final slide is an empty axis with a rising line).

## 7. Short run and long run

- **Short run**: fixed costs (for example the number of factories) are hard to change.
- **Long run**: everything can change, including the number of factories.

So the short-run and long-run cost curves differ.

| Scale effect | What happens to ATC as output rises |
|---|---|
| [[Economies of Scale]] | ATC **falls** |
| Diseconomies of scale | ATC **rises** |
| Constant returns to scale | ATC **unchanged** |

![[Lec05_economies_of_scale.png]]
*Theory diagram (stylised, not on the slides): long-run ATC with its three regions.*

## Summary

- Firms maximise [[Profit]]. Economists count [[Explicit Costs]] plus [[Implicit Costs]]; accountants count only explicit. [[Economic Profit]] is smaller than [[Accounting Profit]] by the implicit costs.
- The [[Production Function]] shows output from inputs. [[Diminishing Marginal Product]] means each extra worker adds less, so cost per extra unit rises.
- $TC = FC + VC$; $ATC = TC/Q = AFC + AVC$; $MC = \Delta TC / \Delta Q$.
- MC below ATC pulls ATC down; MC above ATC pushes it up; MC = ATC at minimum ATC. ATC is U-shaped and MC eventually rises.
- A price-taking firm profits when price exceeds ATC; its supply curve is the rising MC above minimum ATC.
- Long run: ATC can fall (economies of scale), stay flat, or rise (diseconomies).

## Related notes

- [[Principles of Micro]]
- [[Lec_14-Production Costs Worksheet]]
- [[Lec_04-Supply and Market Equilibrium]]
- [[Lec_06-Firms in Competitive Markets]]
