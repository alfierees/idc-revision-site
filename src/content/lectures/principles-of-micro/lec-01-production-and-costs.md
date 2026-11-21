---
title: "Lec 01: Production and Costs"
semester: 1
year: 1
course: "Principles of Micro"
lecture: 1
tags:
  - principles-of-micro
  - marginal-product-of-labour
  - diminishing-marginal-product
  - fixed-costs
  - variable-costs
  - total-cost
  - average-fixed-cost
  - average-variable-cost
  - average-total-cost
  - marginal-cost
subject: principles-of-micro
in_scope: true
---

# Lec 01: Production and Costs

> Part of: Principles of Micro
> Key concepts: [[Marginal Product of Labour]], [[Diminishing Marginal Product]], [[Fixed Costs]], [[Variable Costs]], [[Total Cost]], [[Average Fixed Cost]], [[Average Variable Cost]], [[Average Total Cost]], [[Marginal Cost]]

> [!info] What this note covers
> One class exercise, the workbook `Production Costs1 16.12.2024.xlsx` (single sheet, dated 16.12.2024). It has two parts. **Part 1** computes the [[Marginal Product of Labour]] for a factory with 0 to 5 workers. **Part 2** builds the cost table for a bagel producer (0 to 10 bagels) and asks two questions: the average total cost of a bagel, and the cost of an additional bagel. The worksheet is mostly numbers and short definitions, so the explanations below are marked as reconstructed where they go beyond it.

## 1. Part 1: workers, output and marginal product

The worksheet asks: *calculate the marginal product of labour*. The factory costs **45** whatever happens, and each worker costs **USD 10**.

| Number of workers | Output | Marginal product of labour | Cost of factory | Cost of workers | Total cost of inputs |
| ----------------- | ------ | -------------------------- | --------------- | --------------- | -------------------- |
| 0                 | 0      | (blank)                    | 45              | 0               | 45                   |
| 1                 | 50     | 50                         | 45              | 10              | 55                   |
| 2                 | 90     | 40                         | 45              | 20              | 65                   |
| 3                 | 120    | 30                         | 45              | 30              | 75                   |
| 4                 | 140    | 20                         | 45              | 40              | 85                   |
| 5                 | 150    | 10                         | 45              | 50              | 95                   |

The formulas behind the columns:

- **Marginal product of labour**: the extra output from one more worker, `=(D5-D4)/(C5-C4)` in the first filled row, then copied down. With the labour change equal to 1 each time, it is just the change in output.
- **Total cost of inputs**: `=F4+G4`, the factory cost plus the worker cost.

$$
MPL = \frac{\Delta \text{Output}}{\Delta \text{Workers}}
$$

Worked row: going from 1 to 2 workers raises output from 50 to 90, so $MPL = (90-50)/(2-1) = 40$.

> [!tip] Where the two cost types appear already
> The factory cost (45) does not change with the number of workers: it is a [[Fixed Costs]] item. The worker cost (10 per worker) rises with workers: it is a [[Variable Costs]] item. [[Total Cost]] is their sum. The worksheet defines both in the cells next to the table:
> - **Fixed costs**: costs that do not vary with the quantity produced.
> - **Variable costs**: costs that do vary with the quantity produced.

> [!note] Reconstructed from the worksheet
> **Diminishing marginal product.** The worksheet only asks for the numbers, but they show the pattern: each extra worker adds less output than the one before (50, 40, 30, 20, 10), even though every worker costs the same USD 10. Output still rises (0 to 150), but at a falling rate. This is [[Diminishing Marginal Product]].
>
> A consequence the numbers support: the cost of one more unit of output through an extra worker is the worker cost divided by that worker's marginal product, so 10/50 = 0.2, 10/40 = 0.25, 10/30 = 0.33, 10/20 = 0.5, 10/10 = 1. Diminishing product therefore means a rising cost per extra unit. Note this is a separate exercise from the bagel table below (different scale), so these figures are not comparable to its marginal costs.

![[Lec01_marginal_product_of_labour.png]]
*Theory diagram: marginal product of labour for 1 to 5 workers, using the worksheet's values (50, 40, 30, 20, 10).*

## 2. Part 2: the bagel cost table

The worksheet defines the cost measures in a block of cells:

| Measure | Abbreviation | Definition in the worksheet |
| ------- | ------------ | --------------------------- |
| Average total cost | ATC | Total cost / quantity; also AFC + AVC |
| Marginal cost | MC | The change in total cost / the change in quantity |
| Average fixed cost | AFC | (no definition given) |
| Average variable cost | labelled `AFC` (typo, should be AVC) | (no definition given) |

As formulas:

$$
ATC = \frac{TC}{Q} = AFC + AVC
$$

$$
MC = \frac{\Delta TC}{\Delta Q}
$$

The table below shows the worksheet's values **exactly as they appear in the sheet** (fixed cost is 3 at every quantity and total cost is fixed plus variable cost).

| Quantity of bagels | Fixed cost | Variable cost | Total cost | AFC  | AVC | ATC  | MC  |
| ------------------ | ---------- | ------------- | ---------- | ---- | --- | ---- | --- |
| 0                  | 3          | 0             | 3          |      |     |      |     |
| 1                  | 3          | 0.3           | 3.3        | 3    | 0.3 | 3.3  | 0.3 |
| 2                  | 3          | 0.8           | 3.8        | 1.5  | 0.4 | 1.9  | 0.5 |
| 3                  | 3          | 1.5           | 4.5        | 1    | 0.5 | 1.5  | 0.7 |
| 4                  | 3          | 2.4           | 5.4        | 0.75 | 0.6 | 1.35 | 0.9 |
| 5                  | 3          | 3.5           | 6.5        | 0.6  | 0.7 | 1.3  | 1.1 |
| 6                  | 3          | 4.8           | 7.8        | 0.5  | 0.8 | 1.3  | 1.3 |
| 7                  | 3          | 6.3           | 9.3        | 0.42 | 0.9 | 1.32 | 1.5 |
| 8                  | 3          | 8             | 11         | 0.38 | 1   | 1.38 | 1.7 |
| 9                  | 3          | 9.9           | 12.9       | 0.33 | 1.1 | 1.43 | 1.9 |
| 10                 | 3          | 12            | 15         | 0.3  | 1.2 | 1.5  | 2.1 |

How the columns are built, per the worksheet's formulas:

- **ATC**: `=G20+H20` (AFC plus AVC) on each row.
- **MC**: `=(F21-F20)/(C21-C20)`, the change in total cost between consecutive rows divided by the change in quantity (here always 1). The sheet stores floating-point noise such as 0.2999999 for what displays as 0.3.
- AFC is fixed cost divided by quantity (for example 3/4 = 0.75) and AVC is variable cost divided by quantity (for example 2.4/4 = 0.6). These two columns are typed values in the sheet, not formulas.

> [!warning] Known problems in the source worksheet
> - **AFC at Q = 7** is typed as 0.42, but 3/7 = 0.4286, which rounds to **0.43**.
> - **ATC at Q = 7** shows 1.32 because its formula adds the mistyped AFC (0.42 + 0.9). The true value is 9.3/7 = 1.3286, which rounds to **1.33** (and 0.43 + 0.9 = 1.33).
> - The Average Variable Cost row of the definitions block is labelled `AFC`; it should be `AVC`.
> - The definition cell says "Variable cots", a typo for "Variable costs".
> - **Currency:** only the worker cost in Part 1 is marked in dollars. The factory and bagel figures have no stated unit, so none is assumed here.

### 2.1 The two questions the worksheet asks

The worksheet poses two prompts, and **its answer cells are blank**.

> [!note] Reconstructed from the worksheet
> **1. What is the average total cost of producing a bagel?** The worksheet's table answers this per quantity: [[Average Total Cost]] is total cost divided by quantity, so it depends on how many bagels are made. For example, making 4 bagels costs 5.4 in total, so ATC = 5.4/4 = 1.35; making 10 costs 15, so ATC = 1.5. The lowest values in the table are 1.3 at 5 and 6 bagels.
>
> **2. What is the cost of producing an additional bagel?** This is [[Marginal Cost]]: the change in total cost from one more bagel. Going from 4 to 5 bagels raises total cost from 5.4 to 6.5, so MC = 1.1. In the table, MC rises with every bagel (0.3, 0.5, 0.7, ... 2.1), up by 0.2 each time.

## 3. Reading the cost table

> [!note] Reconstructed from the worksheet
> Each pattern below is read off the numbers in the table above.
>
> - **AFC falls throughout** (3, 1.5, 1, ... 0.3): fixed cost is a constant 3, so spreading it over more bagels lowers the per-bagel share.
> - **AVC rises throughout** (0.3, 0.4, ... 1.2). Variable cost grows faster than quantity, which is the cost-side mirror of [[Diminishing Marginal Product]]: each extra bagel needs more input than the last.
> - **ATC is U-shaped.** It starts high (3.3) because AFC dominates, falls while AFC drops quickly, bottoms out at 1.3 (Q = 5 and 6), then rises (1.32 up to 1.5) as rising AVC outweighs the shrinking AFC.
> - **MC crosses ATC at ATC's minimum.** At Q = 6, MC = 1.3 equals ATC = 1.3. Below that, MC is under ATC (for example Q = 5: MC 1.1 versus ATC 1.3) and pulls the average down; above it, MC is over ATC (Q = 7: MC 1.5 versus ATC 1.33) and pulls the average up. The general rule is that an average falls while the marginal value is below it and rises while the marginal value is above it.
> - **ATC = AFC + AVC at every row**, and the gap between ATC and AVC is exactly AFC, which shrinks as Q grows. That is why ATC and AVC get closer together on the right of the diagram.
> - **MC sits above AVC from Q = 2 onward** and equals it only at Q = 1 (0.3), because with variable cost starting from zero the first bagel's marginal cost is its whole variable cost.

![[Lec01_cost_curves.png]]
*Theory diagram: AFC, AVC, ATC and MC against bagels, plotted with the worksheet's values as shown (so ATC at Q = 7 is 1.32 and AFC is 0.42; the corrected values 1.33 and 0.43 differ by under 0.01 and are visually indistinguishable).*

## Comparison: the cost measures

| Measure | Formula | Behaviour in the worksheet |
| ------- | ------- | -------------------------- |
| [[Fixed Costs]] | constant (3 for bagels, 45 for the factory) | Does not change with quantity |
| [[Variable Costs]] | rises with quantity (0.3 to 12) | Grows faster than quantity |
| [[Total Cost]] | FC + VC | Rises from 3 to 15 |
| [[Average Fixed Cost]] | FC / Q | Falls from 3 to 0.3 |
| [[Average Variable Cost]] | VC / Q | Rises from 0.3 to 1.2 |
| [[Average Total Cost]] | TC / Q = AFC + AVC | U-shaped, minimum 1.3 |
| [[Marginal Cost]] | change in TC / change in Q | Rises from 0.3 to 2.1 |

## Summary

- [[Marginal Product of Labour]] is the extra output from one more worker; in the worksheet it falls from 50 to 10 over five workers, which is [[Diminishing Marginal Product]].
- [[Fixed Costs]] do not vary with output; [[Variable Costs]] do. [[Total Cost]] is their sum.
- Per-unit measures: [[Average Fixed Cost]] (falls), [[Average Variable Cost]] (rises), [[Average Total Cost]] (AFC + AVC, U-shaped).
- [[Marginal Cost]] is the cost of one more unit. It rises throughout in this table and passes through ATC at ATC's minimum (Q = 6).
- Check the source's rounding slips before copying numbers: AFC and ATC at Q = 7 should be 0.43 and 1.33.

## Related notes

- [[Principles of Micro]]
- [[Marginal Product of Labour]], [[Diminishing Marginal Product]], [[Fixed Costs]], [[Variable Costs]], [[Total Cost]], [[Average Fixed Cost]], [[Average Variable Cost]], [[Average Total Cost]], [[Marginal Cost]]
