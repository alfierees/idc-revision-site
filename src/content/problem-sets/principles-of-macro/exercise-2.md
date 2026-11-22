---
title: "EX-2"
subject: principles-of-macro
source_doc: /papers/principles-of-macro/exercise-2.pdf
tags:
  - macro-economics-intro
  - gdp
  - value-added-approach
  - net-domestic-product
  - savings-identity
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Questions 1 to 3.** In a small open economy, the government collected 730 in taxes, paid 400 in public wages and spent 200 on goods and services. Households consumed 900. Exports were 300 and imports 370.

      | Firm | Revenue | Wages | To other firms | Interest | Taxes | Dividends |
      |---|---:|---:|---:|---:|---:|---:|
      | A | 1,600 | 800 | 400 | 30 | 100 | 60 |
      | B | 1,100 | 600 | 300 | 20 | 80 | 40 |

      What is the level of **investment** in the economy?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      Y = (1{,}600 - 400) + (1{,}100 - 300) + 400 = 2{,}400
      $$

      $$
      I = Y - C - G - NX = 2{,}400 - 900 - 600 + 70 = 970
      $$
    options:
      - label: "A"
        text: "900"
        correct: false
        why: "That is consumption."
      - label: "B"
        text: "970"
        correct: true
        why: "$2{,}400 = 900 + I + 600 - 70$."
      - label: "C"
        text: "-70"
        correct: false
        why: "That is net exports."
      - label: "D"
        text: "600"
        correct: false
        why: "That is government spending."
      - label: "E"
        text: "1070"
        correct: false
        why: "This adds net exports instead of subtracting the deficit."
    related_terms:
      - investment
      - expenditure-approach
  - id: "2"
    text: |
      What is the level of **GDP**?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      VA_A = 1{,}200,\quad VA_B = 800,\quad VA_G = 400,\quad GDP = 2{,}400
      $$
    options:
      - label: "A"
        text: "1,850"
        correct: false
        why: "That is the NDP given later."
      - label: "B"
        text: "2,470"
        correct: false
        why: "This subtracts net exports the wrong way."
      - label: "C"
        text: "2,400"
        correct: true
        why: "Sum of value added."
      - label: "D"
        text: "3,140"
        correct: false
        why: "This counts sales without removing purchases properly."
      - label: "E"
        text: "2,200"
        correct: false
        why: "This leaves out part of government value added."
    related_terms:
      - gross-domestic-product
      - value-added-approach
  - id: "3"
    text: |
      NDP was estimated at 1,850. All depreciation is due to public sector capital. What is **depreciation**?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      \text{Depreciation} = GDP - NDP = 2{,}400 - 1{,}850 = 550
      $$
    options:
      - label: "A"
        text: "550"
        correct: true
        why: "$2{,}400 - 1{,}850$."
      - label: "B"
        text: "500"
        correct: false
        why: "Arithmetic slip."
      - label: "C"
        text: "970"
        correct: false
        why: "That is investment."
      - label: "D"
        text: "1,430"
        correct: false
        why: "Not derived from GDP and NDP."
      - label: "E"
        text: "880"
        correct: false
        why: "Not derived from GDP and NDP."
    related_terms:
      - depreciation
      - net-domestic-product
  - id: "4"
    text: |
      Two firms and a government operate in the economy (NIS, 2000).

      | | Firm A | Firm B |
      |---|---:|---:|
      | Sales (incl. overseas) | 100 | 200 |
      | Raw materials (incl. from abroad) | 30 | 70 |
      | Wages | 20 | 50 |
      | Interest, rent, dividends | 40 | 55 |
      | Depreciation | 10 | 25 |
      | Undistributed profit | 0 | 0 |

      Exports are 15 and imports 25. Gross fixed investment is 20 (A) and 30 (B), with no inventory investment. Government: income tax 180, salaries 50, purchases from companies 90, transfers 10. Which is correct?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      GDP = (100 - 30) + (200 - 70) + 50 = 250
      $$

      With no net foreign factor income, $GNP = GDP = 250$.
    options:
      - label: "A"
        text: "GDP is 340"
        correct: false
        why: "GDP is 250."
      - label: "B"
        text: "Net national income is 130"
        correct: false
        why: "It is $250 - 35 = 215$."
      - label: "C"
        text: "GNP is 250"
        correct: true
        why: "No foreign factor income is given, so GNP equals GDP."
      - label: "D"
        text: "GNP is 340"
        correct: false
        why: "GNP is 250."
      - label: "E"
        text: "GDP is 300"
        correct: false
        why: "GDP is 250."
    related_terms:
      - gross-national-product
      - gross-domestic-product
  - id: "5"
    text: |
      Further to Question 4, which is correct?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      250 = C + 50 + 140 - 10 \Rightarrow C = 70
      $$

      $$
      \text{Net investment} = 50 - (10 + 25) = 15,\qquad s_G = (180 - 10) - 140 = 30
      $$
    options:
      - label: "A"
        text: "Private consumption 70, net investment 15"
        correct: true
        why: "Both match."
      - label: "B"
        text: "Private consumption 70, government savings -20"
        correct: false
        why: "Government savings is +30."
      - label: "C"
        text: "Private consumption 70, government savings -10"
        correct: false
        why: "Government savings is +30."
      - label: "D"
        text: "Private consumption 50, government savings 20"
        correct: false
        why: "Both are wrong."
      - label: "E"
        text: "Private consumption 70, government savings 20"
        correct: false
        why: "Government savings is +30."
    related_terms:
      - private-consumption
      - government-savings
      - net-investment
---

> [!warning] AI-written answers
> Moodle has no official solution for this home exercise. Every answer here is AI-written.
