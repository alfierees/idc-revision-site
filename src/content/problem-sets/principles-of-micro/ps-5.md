---
title: "PS5"
subject: principles-of-micro
source_doc: /papers/principles-of-micro/ps-5.pdf
tags:
  - principles-of-micro
  - problem-set
  - explicit-costs
  - implicit-costs
  - accounting-profit
  - economic-profit
  - marginal-product
  - cost-curves
  - atc-mc
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Joe's boat factory.** Joe runs a small boat factory. He can make 10 boats per year and sell them for EUR 25,000 each. Raw materials (fibreglass, wood, paint and so on) for the ten boats cost EUR 150,000.

      *Initial investment.* Joe started the business in 2022. The initial investment (not including yearly raw materials) was EUR 400,000 (rent and machines).

      *Financial costs.* Joe financed it as follows:
      - EUR 200,000 borrowed at 10 percent interest.
      - EUR 200,000 from his own savings. Assume Joe could have earned 10% per year on those savings had he not taken them out of the bank.

      In 2023, after finishing preparing the factory, Joe produced and sold 10 boats. Joe could instead work at a competing boat factory for EUR 70,000 per year.

      Glossary given with the booklet:
      - **Revenue**: total income from sales over the period.
      - **Total opportunity costs** = implicit costs + explicit costs.
      - **Accounting profit** = Revenue - Explicit costs.
      - **Economic profit** = Revenue - (Explicit + Implicit costs).
    solution: |
      Costs are about **opportunity cost**: what the firm gives up, whether or not it writes a cheque. Parts a to g below split Joe's costs into explicit and implicit and compare accounting and economic profit.
    related_terms: ["explicit-costs", "implicit-costs", "opportunity-cost", "accounting-profit", "economic-profit"]
    source_doc_page: 1
  - id: "1a"
    text: |
      What is the total revenue Joe can earn in a year?
    solution: |
      $$
      TR = 10 \text{ boats} \times 25{,}000 = 250{,}000
      $$

      > [!success] Answer
      > EUR 250,000
    related_terms: ["total-revenue"]
    source_doc_page: 1
  - id: "1b"
    text: |
      What are the explicit costs Joe incurs while producing ten boats in 2023?
    solution: |
      [[Explicit Costs]] are actual payments to outsiders in the year:

      | Item | EUR |
      |---|---|
      | Raw materials | 150,000 |
      | Interest on the bank loan (10% of 200,000) | 20,000 |
      | **Explicit costs** | **170,000** |

      > [!warning] Trap
      > The EUR 400,000 investment is **not** in the 2023 explicit costs. It was spent in 2022 and is an explicit cost "for many years to come", so it goes on a balance sheet (an accounting topic), not in the 2023 profit calculation (see the instructions in 1e).

      > [!success] Answer
      > EUR 170,000
    related_terms: ["explicit-costs"]
    source_doc_page: 1
  - id: "1c"
    text: |
      What are the implicit costs Joe incurs while producing ten boats in 2023?
    solution: |
      [[Implicit Costs]] are the value of resources Joe uses that he owns, so no cash leaves his pocket but he gives up their best alternative use:

      | Item | EUR |
      |---|---|
      | Interest he could have earned on his own EUR 200,000 savings (10%) | 20,000 |
      | Wage he could earn at the competing factory | 70,000 |
      | **Implicit costs** | **90,000** |

      > [!tip] Intuition
      > The loan interest and the forgone savings interest are the same 10% on the same EUR 200,000, but one is paid out (explicit) and the other is given up (implicit). Both are real costs of the EUR 400,000 of capital.

      > [!success] Answer
      > EUR 90,000
    related_terms: ["implicit-costs", "opportunity-cost"]
    source_doc_page: 1
  - id: "1d"
    text: |
      What is the total opportunity costs at 2023? (Hint: total opportunity costs = implicit costs and explicit costs.)
    solution: |
      $$
      170{,}000 + 90{,}000 = 260{,}000
      $$

      > [!success] Answer
      > EUR 260,000
    related_terms: ["explicit-costs", "implicit-costs", "opportunity-cost"]
    source_doc_page: 1
  - id: "1e"
    text: |
      Calculate the value of Joe's accounting profit in 2023 using the instructions: (I) the EUR 400,000 investment is not counted in the yearly profit calculation even though it is an explicit cost; (II) include only costs incurred in 2023; (III) accounting profit includes only explicit costs.
    solution: |
      $$
      \text{Accounting profit} = 250{,}000 - 170{,}000 = 80{,}000
      $$

      > [!success] Answer
      > EUR 80,000
    related_terms: ["accounting-profit", "explicit-costs"]
    source_doc_page: 1
  - id: "1f"
    text: |
      What is the value of Joe's economic profit?
    solution: |
      $$
      \text{Economic profit} = 250{,}000 - 260{,}000 = -10{,}000
      $$

      The gap between the two profits is exactly the implicit costs: 80,000 - 90,000 = -10,000.

      > [!success] Answer
      > -EUR 10,000 (a loss of EUR 10,000)
    related_terms: ["economic-profit", "accounting-profit", "implicit-costs"]
    source_doc_page: 1
  - id: "1g"
    text: |
      Based on what you found so far, is it profitable for Joe to operate his boat factory? Explain.
    solution: |
      > [!success] Answer
      > No. Operating loses EUR 10,000 a year in economic terms. Joe is better off working as an employee of the competing factory: he would earn EUR 70,000 in wages plus EUR 20,000 of interest on his savings, EUR 90,000 in total, which beats an economic loss of EUR 10,000.

      > [!tip] Intuition
      > A positive accounting profit (EUR 80,000) can hide an economic loss. Economic profit asks whether the firm beats Joe's next best option, and here it does not: running the factory pays him 80,000 against 90,000 elsewhere.
    related_terms: ["economic-profit", "opportunity-cost"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Hamburger stand.** Complete the following table. It describes the production and cost of hamburgers at a stand. All figures are measured per hour.

      The columns provided are workers, output, cost of factory and cost of workers. The blank columns are marginal product of labour and total cost.
    solution: |
      > [!example] Completed table (solution)

      | Workers | Output | Marginal product of labour | Cost of factory | Cost of workers | Total cost |
      |---|---|---|---|---|---|
      | 0 | 0 | | 25 | 0 | 25 |
      | 1 | 6 | 6 | 25 | 5 | 30 |
      | 2 | 11 | 5 | 25 | 10 | 35 |
      | 3 | 15 | 4 | 25 | 15 | 40 |
      | 4 | 18 | 3 | 25 | 20 | 45 |
      | 5 | 20 | 2 | 25 | 25 | 50 |

      The steps:
      - $MPL$ = change in output from one more worker: 6 - 0 = 6, 11 - 6 = 5, 15 - 11 = 4, 18 - 15 = 3, 20 - 18 = 2.
      - Total cost = cost of factory (fixed at 25) + cost of workers (5 per worker).
    related_terms: ["marginal-product-of-labour", "total-cost", "fixed-costs", "variable-costs"]
    source_doc_page: 2
  - id: "2a"
    text: |
      Plot the production function.
    solution: |
      ![](/images/principles-of-micro/ps05-q2-production-function.png)

      The production function plots output against workers. It rises throughout but **flattens**: the points from the table are (0, 0), (1, 6), (2, 11), (3, 15), (4, 18), (5, 20).
    related_terms: ["production-function", "marginal-product-of-labour"]
    source_doc_page: 2
  - id: "2b"
    text: |
      What happens to the marginal product of labour, and why?
    solution: |
      > [!success] Answer
      > The marginal product of labour falls as workers are added. This is **decreasing marginal productivity**: when more workers join they start to interfere with each other, so each worker adds less than the previous one.

      The slope of the production function at each step *is* the marginal product of labour. Because MPL falls (6, 5, 4, 3, 2), the production function gets flatter as workers increase: it is concave. See [[Marginal Product of Labour]] and [[Diminishing Marginal Product]].
    related_terms: ["marginal-product-of-labour", "diminishing-marginal-product", "production-function"]
    source_doc_page: 2
  - id: "2c"
    text: |
      Plot the total-cost curve.
    solution: |
      ![](/images/principles-of-micro/ps05-q2-total-cost-curve.png)

      Total cost on the vertical axis, output on the horizontal axis: (0, 25), (6, 30), (11, 35), (15, 40), (18, 45), (20, 50). Note the curve starts at 25, the fixed cost of the factory, even at zero output.
    related_terms: ["total-cost", "fixed-costs"]
    source_doc_page: 2
  - id: "2d"
    text: |
      Explain the shape of the total-cost curve.
    solution: |
      > [!success] Answer
      > Total costs are increasing and the marginal cost is increasing. This is due to diminishing marginal productivity.

      > [!tip] Intuition
      > Each extra worker costs the same 5 but adds fewer and fewer hamburgers (6, 5, 4, 3, 2). So each extra hamburger needs more worker cost than the last, and the total-cost curve gets steeper. The curve is the production function turned on its side with the cost scale applied (my addition: per hamburger, the extra cost of the first worker is 5/6 and of the fifth is 5/2).
    related_terms: ["total-cost", "marginal-cost", "diminishing-marginal-product"]
    source_doc_page: 2
  - id: "3"
    text: |
      **Bob's blue jeans plant.** The information below is for Bob's blue jeans manufacturing plant. All data is per hour. Complete the table. Abbreviations: FC (fixed cost), VC (variable cost), TC (total cost), AVC (average variable cost), ATC (average total cost), MC (marginal cost). The question gives FC = 16 at every quantity and the VC column.
    solution: |
      Parts a to d build the full set of cost curves and show why MC cuts ATC at its minimum.
    related_terms: ["fixed-costs", "variable-costs", "total-cost", "average-variable-cost", "average-total-cost", "marginal-cost"]
    source_doc_page: 2
  - id: "3a"
    text: |
      Complete the table.
    solution: |
      > [!example] Completed table (solution)

      | Quantity | FC | VC | TC | AVC | ATC | MC |
      |---|---|---|---|---|---|---|
      | 0 | 16 | 0 | 16 | | | |
      | 1 | 16 | 18 | 34 | 18 | 34 | 18 |
      | 2 | 16 | 31 | 47 | 15.5 | 23.5 | 13 |
      | 3 | 16 | 41 | 57 | 13.67 | 19 | 10 |
      | 4 | 16 | 49 | 65 | 12.25 | 16.25 | 8 |
      | 5 | 16 | 59 | 75 | 11.8 | 15 | 10 |
      | 6 | 16 | 72 | 88 | 12 | 14.67 | 13 |
      | 7 | 16 | 90 | 106 | 12.86 | 15.14 | 18 |
      | 8 | 16 | 114 | 130 | 14.25 | 16.25 | 24 |
      | 9 | 16 | 145 | 161 | 16.11 | 17.89 | 31 |
      | 10 | 16 | 184 | 200 | 18.4 | 20 | 39 |

      The formulas used:

      $$
      TC = FC + VC, \qquad AVC = \frac{VC}{Q}, \qquad ATC = \frac{TC}{Q}, \qquad MC = \frac{\Delta TC}{\Delta Q}
      $$

      For example at $Q = 4$: $TC = 16 + 49 = 65$, $AVC = 49/4 = 12.25$, $ATC = 65/4 = 16.25$, $MC = 65 - 57 = 8$.

      > [!note] AFC is not in the table
      > The table has no AFC column, but part (b) asks for AFC on the plot. [[Average Fixed Cost]] is $AFC = FC/Q = 16/Q$ (16, 8, 5.33, 4, 3.2, 2.67, 2.29, 2, 1.78, 1.6 for Q = 1 to 10). This is my calculation from the given FC; the solution's chart shows only AVC, ATC and MC, so the AFC line in the figure in part (b) is mine.
    related_terms: ["total-cost", "average-variable-cost", "average-total-cost", "marginal-cost", "average-fixed-cost", "fixed-costs", "variable-costs"]
    source_doc_page: 2
  - id: "3b"
    text: |
      Plot AFC, AVC, ATC and MC.
    solution: |
      ![](/images/principles-of-micro/ps05-q3-cost-curves.png)

      The solution's own chart shows AVC, ATC and MC against quantity 1 to 10. The figure above adds AFC. All values come from the table.
    related_terms: ["average-fixed-cost", "average-variable-cost", "average-total-cost", "marginal-cost"]
    source_doc_page: 2
  - id: "3c"
    text: |
      Explain the shape of each curve.
    solution: |
      > [!success] Answer (solution)
      > - **AFC** declines as quantity goes up because a fixed cost is spread across a greater number of units.
      > - **MC** declines for the first four units due to an *increasing* marginal product of the variable input. MC rises thereafter due to *decreasing* marginal product.
      > - **AVC** is U-shaped for the same reason as MC.
      > - **ATC** declines due to falling AFC and increasing marginal product. ATC rises at higher levels of production due to decreasing marginal product.

      > [!tip] Intuition
      > ATC = AFC + AVC. At low output, both parts fall, so ATC drops steeply. Later the AFC saving becomes tiny (16/9 to 16/10 is small) while AVC rises, so ATC turns up. That is why ATC bottoms out (at 6 units, 14.67) after AVC does (at 5 units, 11.8).
    related_terms: ["average-fixed-cost", "marginal-cost", "average-variable-cost", "average-total-cost", "diminishing-marginal-product"]
    source_doc_page: 2
  - id: "3d"
    text: |
      Explain the relationship between ATC and MC.
    solution: |
      > [!success] Answer
      > When MC is below ATC, ATC must be declining. When MC is above ATC, ATC must be rising. Therefore MC crosses ATC at the minimum of ATC.

      Check in the table (my addition): the 6th unit has $MC = 13$, below the previous ATC of 15, so ATC falls from 15 to 14.67. The 7th unit has $MC = 18$, above ATC of 14.67, so ATC rises to 15.14. The 7th unit is the first with MC above ATC, so MC crosses ATC, and ATC bottoms out, at about 6 units.

      > [!tip] Intuition
      > ATC is an average, and MC is the "next grade". A next grade below your average pulls the average down; above it, pushes the average up. The average is lowest where the next grade equals it.
    related_terms: ["marginal-cost", "average-total-cost"]
    source_doc_page: 2
  - id: "mcq1"
    text: |
      **Multiple choice 1.** Which of the following costs would be an implicit cost for a firm?

      A) the costs of worker wages and salaries for the firm
      B) the cost paid for leasing a building for the firm
      C) the cost paid for production supplies for the firm
      D) the cost of wages forgone by the owner of the firm
    solution: |
      > [!warning] Solution written for a slightly different wording
      > The multiple-choice wording in the solution file differs a little from the booklet: MCQ 1 reads "Which would be an implicit cost for a firm? The cost...", and MCQ 2 says revenues "just cover" all opportunity costs, with option A reading "normal profit is zero" instead of "Accounting profit is zero". The marked answers still apply to the booklet wording (checked option by option here).

      > [!success] Answer: D
      > A, B and C are payments to outsiders, so they are explicit. Forgone wages of the owner are an implicit cost, the same as Joe's EUR 70,000 in 1c.
    related_terms: ["implicit-costs", "explicit-costs"]
    source_doc_page: 3
  - id: "mcq2"
    text: |
      **Multiple choice 2.** If a firm's revenues is equal to all its opportunity costs, then:

      A) Accounting profit is zero.
      B) Economic profit is zero.
      C) total revenues equal its explicit costs.
      D) total revenues equal its implicit costs.
    solution: |
      > [!success] Answer: B
      > Economic profit = revenue - (explicit + implicit costs) = 0.
    related_terms: ["economic-profit", "accounting-profit", "opportunity-cost"]
    source_doc_page: 3
  - id: "mcq3"
    text: |
      **Multiple choice 3.** Suppose a firm sells its product at a price lower than the opportunity cost of the inputs used to produce it. Which is true?

      A) The firm will earn accounting and economic profits.
      B) The firm will face accounting and economic losses.
      C) The firm will face an accounting loss, but earn economic profits.
      D) The firm may earn accounting profits, but will face economic losses.
    solution: |
      > [!success] Answer: D
      > Revenue below total opportunity costs means an economic loss, but revenue can still exceed explicit costs alone, as with Joe (accounting profit 80,000, economic profit -10,000).
    related_terms: ["economic-profit", "accounting-profit", "opportunity-cost"]
    source_doc_page: 3
  - id: "mcq4"
    text: |
      **Multiple choice 4.** Suppose that a firm produces 200,000 units a year and sells them all for USD 10 each. Explicit costs are USD 1,500,000 and implicit costs are USD 300,000. The accounting profit is:

      A) USD 500,000 and an economic profit of USD 200,000.
      B) USD 400,000 and an economic profit of USD 200,000.
      C) USD 300,000 and an economic profit of USD 400,000.
      D) USD 200,000 and an economic profit of USD 500,000.
    solution: |
      > [!success] Answer: A
      > Revenue = 200,000 x 10 = 2,000,000. Accounting profit = 2,000,000 - 1,500,000 = 500,000. Economic profit = 500,000 - 300,000 = 200,000.
    related_terms: ["accounting-profit", "economic-profit", "explicit-costs", "implicit-costs"]
    source_doc_page: 3
  - id: "mcq5"
    text: |
      **Multiple choice 5.** The marginal product of labour curve shows the change in total product resulting from a:

      A) one-unit increase in the quantity of a particular resource used, letting other resources vary.
      B) one-unit increase in the quantity of a particular resource used, holding constant other resources.
      C) change in the cost of a variable resource.
      D) change in the cost of a fixed resource.
    solution: |
      > [!success] Answer: B
      > MPL is the extra output from one more worker with everything else held fixed (see Q2).
    related_terms: ["marginal-product-of-labour"]
    source_doc_page: 4
  - id: "mcq6"
    text: |
      **Multiple choice 6.** Which is not a fixed cost?

      A) monthly rent of USD 1,000 contractually specified in a one-year lease
      B) an insurance premium of USD 50 per year, paid last month
      C) an attorney's retainer of USD 50,000 per year
      D) a worker's wage of USD 15 per hour
    solution: |
      > [!success] Answer: D
      > A wage per hour rises with the hours worked, so it varies with output: a variable cost. The other three are owed regardless of output.
    related_terms: ["fixed-costs", "variable-costs"]
    source_doc_page: 4
---

*Related: [[Lec_05-Supply and Costs of Production]], [[Lec_14-Production Costs Worksheet]], [[Lec_06-Firms in Competitive Markets]]*

> [!abstract] Recap
> | Part | Tool | Answer |
> |---|---|---|
> | 1a | $TR = P \times Q$ | EUR 250,000 |
> | 1b | Explicit costs | EUR 170,000 (150,000 materials + 20,000 loan interest) |
> | 1c | Implicit costs | EUR 90,000 (20,000 forgone interest + 70,000 forgone wage) |
> | 1d | Total opportunity cost | EUR 260,000 |
> | 1e | Accounting profit | EUR 80,000 |
> | 1f | Economic profit | -EUR 10,000 |
> | 1g | Compare with next best option | Not worth it: 90,000 elsewhere vs a 10,000 loss |
> | 2 | MPL, TC = 25 + 5 x workers | MPL 6, 5, 4, 3, 2; TC 25 to 50 |
> | 3 | AVC, ATC, MC | ATC minimum 14.67 at Q = 6; MC minimum 8 at Q = 4 |
> | MCQ 1 to 6 | Concepts | D, B, D, A, B, D |
