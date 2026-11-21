---
title: "HW5"
subject: fundamentals-of-finance
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
      **Retirement planning in real terms.** You want to withdraw $30,000 per year (in real terms) for 20 years, starting at age 65. The nominal interest rate is 12% and inflation is 8%.

      How much must you save each year, in real terms, over the 30 years up to age 65? The note's worked solution discounts the withdrawal annuity back to age 55 and solves for the saving from there.
    solution: |
      > [!info] Always work the plan in **real** terms, then convert
      > Real rate $= \frac{1.12}{1.08} - 1 = 3.704\%$.

      1. PV at age 65 of the 20-year real withdrawal annuity $= \$418{,}619$.
      2. Discount back to age 55 (10 years at the real rate) $= \$290{,}989$.
      3. Real annual saving needed (deposits over the saving period to reach that) $= \texttt{PMT}(3.704\%, 31, 0, -290{,}989)$:

      $$
      \boxed{\$5{,}162.54 \text{ per year (real)}}
      $$

      > [!tip] Why real, not nominal?
      > Keeping every figure in today's purchasing power lets you use one constant real rate. A nominal schedule would need each payment grown by inflation. The two are reconciled in the workbook (real deposits = nominal deposits deflated).
    related_terms: ["fisher-equation", "real-interest-rate", "annuity", "present-value", "inflation", "nominal-rate"]
  - id: "3"
    text: |
      **Tuition and pension funding.** The nominal rate is 8% and inflation is 1.88%. Fund real tuition payments of $25,000 (year 4) and $27,000 (year 5), and a real pension of $50,000 per year for years 40 to 59.

      Find the real annual deposit over 40 years that funds these liabilities, and the first deposit if deposits are fixed in nominal dollars.
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

      In **nominal** terms (deposits fixed in dollars) the first deposit is $-\texttt{PMT}(8\%, 40, 98{,}881) = \$8{,}292.17$.

      > [!tip] Real vs nominal
      > A real annuity has constant purchasing power. Its nominal equivalent grows each year with inflation.
    related_terms: ["fisher-equation", "real-interest-rate", "annuity", "present-value", "inflation", "nominal-rate"]
---

*Related: [[Lesson_04-Inflation, Real Rates & Expected Inflation]]*

> [!success] Takeaways
> - Convert all rates to a common effective basis; real rate via exact Fisher.
> - Solve retirement and funding problems **entirely in real terms** with the real rate, then convert to nominal at the end.
