---
title: "EX-1"
subject: principles-of-macro
source_doc: /papers/principles-of-macro/exercise-1.pdf
tags:
  - macro-economics-intro
  - gdp
  - expenditure-approach
  - value-added-approach
  - income-approach
ai_drafted: true
questions:
  - id: "1"
    text: |
      **MacroLand this year (millions of MacroCoins):** households spent 900 on consumption. Firms invested 280 in new machinery and infrastructure. Firms sold 1,250 of final consumption goods, using 300 of intermediate goods. Final goods firms cleared 150 from inventory, and 170 of new goods went unsold. The government spent 100 on wages, 50 on rent and 70 on purchases from firms. Intermediate producers sold 300 and bought nothing from other firms. Final goods firms paid 250 wages and 100 rent; intermediate firms paid 100 wages and 30 rent.

      Using the **expenditure approach**, calculate the output of MacroLand. Explain why output equals total spending.
    solution: |
      $$
      C = 900,\qquad I = 280 - 150 + 170 = 300,\qquad G = 100 + 50 + 70 = 220
      $$

      $$
      Y = C + I + G = 900 + 300 + 220 = 1{,}420
      $$

      All output is consumed, invested (including inventory changes) or bought by the government, so these spending categories add up to total output.
    related_terms:
      - gross-domestic-product
      - expenditure-approach
  - id: "2"
    text: |
      What change in output would explain a decrease in investment of 50M and a decrease of 30M in household consumption?
    solution: |
      $$
      \Delta Y = \Delta C + \Delta G + \Delta I = -30 + 0 - 50 = -80
      $$

      Output falls by **80M**.
    related_terms:
      - expenditure-approach
  - id: "3"
    text: |
      What change in output would allow the government to increase its expenditure by 100M while investments fall by 50M?
    solution: |
      $$
      \Delta Y = 0 + 100 - 50 = 50
      $$

      Output must rise by **50M**.
    related_terms:
      - expenditure-approach
  - id: "4"
    text: |
      Using the **value-added approach**, calculate output. What is the value added of the government? Explain why total value added equals total output.
    solution: |
      $$
      VA_{\text{intermediate}} = 300,\qquad VA_{\text{final}} = 1{,}250 - 300 + (170 - 150) = 970
      $$

      $$
      VA_G = 220 - 70 = 150,\qquad Y = 970 + 300 + 150 = 1{,}420
      $$

      Value added strips out purchases from other firms, so each unit of output is counted once.
    related_terms:
      - value-added-approach
  - id: "5"
    text: |
      Using the **income approach**, show that output equals the sum of wages, rent and profits. Explain why total household income equals total output.
    solution: |
      $$
      \text{Wages} = 250 + 100 + 100 = 450,\qquad \text{Rent} = 100 + 30 + 50 = 180
      $$

      $$
      \pi_{\text{final}} = 1{,}250 - 300 + 20 - 250 - 100 = 620,\qquad \pi_{\text{intermediate}} = 300 - 100 - 30 = 170
      $$

      $$
      Y = 450 + 180 + (620 + 170) = 1{,}420
      $$

      Everything produced is paid out to the factors of production, so household income equals output.
    related_terms:
      - income-approach
      - factor-payments
  - id: "6"
    text: |
      MacroLand opens to trade. With no change in domestic production, households import 20M, firms import 10M, firms cut domestic sales to households by 50M and export the surplus. Calculate output using the expenditure approach and explain how trade affects sources and uses.
    solution: |
      Imports are 30, so sources rise by 30. Consumption changes by $-50 + 20 = -30$.

      $$
      \Delta Y + IM = \Delta C + \Delta G + \Delta I + EX
      \;\Rightarrow\;
      0 + 30 = -30 + 0 + 0 + EX
      \;\Rightarrow\;
      EX = 60
      $$

      | Sources | | Uses | |
      |---|---:|---|---:|
      | $Y$ | 1,420 | $C$ | 870 |
      | $IM$ | 30 | $I$ | 300 |
      | | | $G$ | 220 |
      | | | $EX$ | 60 |
      | **Total** | **1,450** | **Total** | **1,450** |

      > [!warning] Official table differs
      > The official solution's table prints $C = 850$ and $G = 240$. Those do not follow from the question: $C = 900 - 30 = 870$ and $G$ is unchanged at 220. Both versions total 1,450. Please check with the course staff.
    related_terms:
      - net-exports
      - uses-and-resources
---

> [!info] Official solution
> Worked from the course's Problem Set 1 solution.
>
> The solution PDF has three small typos in its prose (investment "250", government wages "150" and purchases "50"). Its calculations use the question's numbers (280, 100 and 70), and so does this page.
