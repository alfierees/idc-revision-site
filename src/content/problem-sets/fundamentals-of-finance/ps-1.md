---
title: "HW1"
subject: fundamentals-of-finance
tags:
  - financial-management
  - time-value-of-money
  - present-value
  - growing-perpetuity
  - solutions
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Discounting dated cheques.** Four cheques fall due at different dates. The monthly interest rate is $r = 2\%$. Discount each cheque by the number of months since Jan 1 (cheques of \$1,750 at month 6, \$1,200 at month 3, \$2,900 at month 9 and \$3,600 at month 12).

      Find the present value of the four cheques, and the single equivalent cheque payable on Jun 30 (month 6).
    solution: |
      Discount each cheque by the number of months since Jan 1, at $r = 2\%$ per month:

      $$
      PV = \sum \frac{\text{Amount}}{(1.02)^{\text{months}}} = \frac{1750}{1.02^6}+\frac{1200}{1.02^3}+\frac{2900}{1.02^9}+\frac{3600}{1.02^{12}} = \$7{,}949.90
      $$

      > [!example] Equivalent single cheque on Jun 30 (month 6)
      > Solve $x/(1.02)^6 = 7949.90 \Rightarrow x = 7949.90\times 1.02^6 = \boxed{\$8{,}952.88}$. A later single payment must be *larger* to carry the same present value.
    related_terms: ["present-value", "time-value-of-money", "discount-rate", "future-value"]
  - id: "2"
    text: |
      **Which asset stream is worth most?** The discount rate is $r = 10\%$. Compare three assets by present value at $t=0$:

      | Asset | Cash flows |
      |---|---|
      | A | \$1000 per year, years 1 to 5 |
      | B | \$1700 per year, years 3 to 5 |
      | C | \$2000 per year, years 5 to 7 |
    solution: |
      | Asset | Cash flows | PV(t=0) |
      |---|---|---|
      | A | $1000/yr, years 1–5 | **$3,790.79** |
      | B | $1700/yr, years 3–5 | $3,493.92 |
      | C | $2000/yr, years 5–7 | $3,397.11 |

      > [!tip] Why A wins despite smaller payments
      > A's cash flows arrive **earlier**, so they're discounted less. Timing beats size here. A classic time-value lesson.
    related_terms: ["present-value", "annuity", "time-value-of-money", "discount-rate"]
  - id: "3"
    text: |
      **Deferred pay rise.** The discount rate is $5\%$. Compare two options.

      - Option A: \$1000 per year in years 1 to 3, then \$1200 per year in years 4 to 13.
      - Option B: a single payment of \$15,000 at year 5.

      Which option is worth more today?
    solution: |
      Option A: split into two annuities.

      - Yrs 1–3: $-\texttt{PV}(5\%,3,1000) = 2{,}723.25$
      - Yrs 4–13: $-\texttt{PV}(5\%,10,1200)/1.05^3 = 8{,}004.39$
      - Total $= \boxed{\$10{,}727.64}$

      Option B: a single \$15,000 at year 5:

      $$
      \frac{15{,}000}{1.05^5} = \$11{,}752.89
      $$

      **Option B wins.**
    related_terms: ["annuity", "present-value", "discount-rate", "time-value-of-money"]
  - id: "4"
    text: |
      **Growing perpetuity.** A cash flow of \$25,000 (first payment next year) grows at $g = 3\%$ forever. The discount rate is $r = 12\%$. Find its present value.
    solution: |
      $$
      PV = \frac{C_1}{r-g} = \frac{25{,}000}{0.12-0.03} = \boxed{\$277{,}777.78}
      $$

      The finite 30-year sum gives only $\approx \$255\text{k}$. The perpetual tail adds the rest.
    related_terms: ["growing-perpetuity", "perpetuity", "present-value", "discount-rate"]
  - id: "5"
    text: |
      **Two-stage growing perpetuity.** A cash flow of \$1000 grows at $g_1 = 10\%$ for 5 years, then at $g_2 = 7\%$ forever. The discount rate is $r = 12\%$. Find its present value.
    solution: |
      1. PV of years 1–5 (growing annuity) $\approx \$5{,}123.60$.
      2. Year-6 cash flow $= 1000(1.1)^5(1.07) = \$1{,}723.25$; perpetuity value at $t=5$ $= \frac{1723.25}{0.12-0.07}$, discounted back: $\$17{,}461.00$.
      3. Total $= \boxed{\$22{,}584.60}$.

      > [!warning] The stitch point
      > The Gordon formula values a growing perpetuity **one period before** its first payment. Here that's $t=5$, so divide by $(1.12)^6$ (six periods) only after using $C_6$ in the numerator. Getting the timing offset wrong is the usual error.

      > [!warning] Check before relying on this
      > Recomputing gives a different split: the 5-year growing annuity is about $4{,}307.67$, and discounting $\frac{1723.25}{0.05}$ from $t=5$ by $1.12^5$ gives about $19{,}556.32$ (the note's $17{,}461.00$ uses $1.12^6$). The vault's step figures are carried over as written; confirm against the original homework key.
    related_terms: ["growing-annuity", "growing-perpetuity", "present-value", "discount-rate"]
---

*Related: [[Lesson_01-Time Value of Money]], [[Lesson_02-Perpetuities, NPV & IRR]]*
