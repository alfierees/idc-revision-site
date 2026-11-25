---
title: "HW5"
subject: fundamentals-of-finance
official_solution: "/papers/fundamentals-of-finance/ps-5-official-solution.pdf"
tags:
  - financial-management
  - inflation
  - real-interest-rate
  - retirement-planning
  - solutions
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Rate conversion and the real rate.**

      (a) A nominal rate of 10% is quoted with quarterly compounding. Find the effective annual rate.

      (b) A rate of 2% per month. Find the effective annual rate.

      Then treat the rate from (a) as the nominal rate and the rate from (b) as the inflation rate, and find the real annual rate using the Fisher equation.
    solution: |
      (a) Quarterly 10% gives an effective annual rate of $(1.10)^4 - 1 = 46.41\%$.

      (b) Monthly 2% gives an effective annual rate of $(1.02)^{12} - 1 = 26.82\%$.

      Real annual rate (exact [[Fisher Equation|Fisher]]), using these as nominal and inflation:

      $$
      r_{\text{real}} = \frac{1.4641}{1.2682} - 1 = \boxed{15.44\%}
      $$

    related_terms: ["rate-conversion", "effective-interest-rate", "fisher-equation", "real-interest-rate", "nominal-rate", "inflation"]
  - id: "2"
    text: |
      **Retirement planning in real terms.** You are 25. You want to withdraw \$30,000 a year (in real terms) for 20 years from age 65. You save a fixed amount each year for 30 years, from age 25 to 55. The nominal interest rate is 12% and inflation is 8%.

      How much must you save each year, in real terms and in nominal terms?
    solution: |
      > [!info] Work the plan in **real** terms
      > Real rate $= \frac{1.12}{1.08} - 1 = 3.704\%$.

      1. PV at age 65 of the 20 real withdrawals of 30,000: $\sum_{t=1}^{20} \frac{30{,}000}{1.037^t} = \$418{,}619.06$.
      2. Discount to age 25 (40 years at the real rate): $\frac{418{,}619.06}{1.037^{40}} = \$97{,}734.59$.
      3. Spread that over 30 annual savings (age 25 to 55):

      $$
      97{,}734.59 = \sum_{t=1}^{30} \frac{pmt_{real}}{1.037^t} \Rightarrow \boxed{pmt_{real} = \$5{,}450.44}
      $$

      The official solution also gives a level **nominal** saving, discounting the same PV at the nominal 12%: $97{,}734.59 = \sum_{t=1}^{30} \frac{pmt}{1.12^t} \Rightarrow pmt_{nominal} = \$12{,}133.13$.

      > [!note] Corrected
      > An earlier version solved for 31 payments ending at age 55 (5,162.54 a year). The official solution uses 30 payments, giving 5,450.44.
    related_terms: ["fisher-equation", "real-interest-rate", "annuity", "present-value", "inflation", "nominal-rate"]
  - id: "3"
    text: |
      **Tuition and pension funding.** The nominal rate is 8% and inflation is 1.88%. Fund real tuition payments of \$25,000 (year 4) and \$27,000 (year 5), and a real pension of \$50,000 per year for years 40 to 59.

      Find the real annual deposit over 40 years that funds these liabilities, and the level deposit if deposits are instead fixed in nominal dollars.
    solution: |
      Real rate $= \frac{1.08}{1.0188} - 1 = 6.007\%$.

      > [!example] Building the total liability at $t=0$
      > - PV of the pension at year 39 (20-year real annuity) $= \frac{50{,}000}{r}\left(1 - (1+r)^{-20}\right) = \$573{,}167$, which discounted back to $t=0$ is $\$58{,}915$.
      > - PV of tuition $= \frac{25{,}000}{(1+r)^4} + \frac{27{,}000}{(1+r)^5} = \$39{,}966$.
      > - **Total PV of liabilities $= \$98{,}881$.**

      Real annual deposit over 40 years:

      $$
      -\texttt{PMT}(6.007\%, 40, 98{,}881) = \boxed{\$6{,}577.64 \text{ per year (real)}}
      $$

      In **nominal** terms (deposits fixed in dollars) each deposit is $-\texttt{PMT}(8\%, 40, 98{,}881) = \$8{,}292.17$.

      > [!tip] Real vs nominal
      > A real annuity has constant purchasing power. Its nominal equivalent grows each year with inflation.
    related_terms: ["fisher-equation", "real-interest-rate", "annuity", "present-value", "inflation", "nominal-rate"]
---

*Related: [[Lesson_04-Inflation, Real Rates & Expected Inflation]]*

> [!success] Takeaways
> - Convert all rates to a common effective basis; real rate via exact Fisher.
> - Solve retirement and funding problems **entirely in real terms** with the real rate, then convert to nominal at the end.
