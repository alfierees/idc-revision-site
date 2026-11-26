---
title: "Exam Question Playbook"
subject: fundamentals-of-finance
type: reference
description: "A step-by-step routine for every question type on the final: the free-cash-flow project, savings and pension plans, effective rates with fees, inflation, loans and prepayment fees, bonds, project-choice rules, portfolio risk, the CML and the SML."
course: Fundamentals of Finance
instructor: Dr. Tal Mofkadi
semester: 2
year: 1
order: 4
tags:
  - fundamentals-of-finance
  - exam-prep
  - playbook
---

> Each play is the routine for one question type, with the past-paper question it comes from. Formulas are on the [[Finance Formula Sheet]]; where each type appears is on the [[Past Paper Topic Map]].

## Before anything: the timeline

Every question, MCQ or open, starts the same way:

1. **Draw the timeline** and put every cash flow on it, with its sign.
2. **Match the rate to the spacing** of the payments: monthly payments need a monthly rate, three-yearly receipts a three-year rate.
3. Know **where each formula lands**: annuity PV one period before the first payment, FV at the last payment.
4. In Excel, sanity-check with `PV`, `PMT`, `RATE`, `NPV` or `IRR`.

## A. The free-cash-flow project (open question, 25 points)

1. **Sort the information** into four piles: relevant cash flows; **sunk** (spent already: R&D, studies); **financing** (loans, interest, bond issues: never in the FCF); **allocations** that do not change with the project (existing managers, existing workers).
2. Add **opportunity costs** (space you could rent out, a machine you could sell) and **side effects** (lost sales of another product, extra wages).
3. **Depreciation:** $(I_0 - \text{salvage})/N$ over the **tax** life, which may be shorter than the use life.
4. Build the table, one column per year: revenue, costs, depreciation, EBIT, tax, NOPAT, $+$ depreciation, investment, sale of assets and the tax on the gain over book value, change in working capital.
5. A loss in one year gives a **tax saving** when the firm has other profits.
6. **Discount at the project's own rate** (its risk), not the deposit rate or a riskier project's rate.
7. NPV, then answer what is asked: accept, the most you would pay, the price to walk away.

From [[PP_04|2024 Moed A]] (business plan): R&D sunk, the loan is financing, the factory charge is an allocation; discount at 15%.

## B. Savings, pensions, trips and lump sums

1. Split into phases: deposits, waiting, withdrawals.
2. Value the withdrawals **at the start of the withdrawal phase**. "At the start of each month" is an annuity due: $\times(1 + r)$.
3. Bring every source of money to the same date (the departure day, the retirement day).
4. Solve for the unknown: the deposit, the lump sum, the rate.
5. Tax on interest only: tax $= t\,(FV - \text{deposit})$.

From [[PP_05|2024 Moed B]] Q7: withdrawals of 15,000 at the start of each month for 216 months, monthly 0.5%, need 1,988,360 at 67; monthly deposit 1,219.

## C. Payments every few years, against growing payments

1. Receipts every $k$ years: $r_k = (1 + r)^k - 1$, an annuity at $r_k$, valued one $k$-period before the first receipt; then discount to today.
2. Payments growing at $g$: a growing annuity.
3. NPV $=$ receipts $-$ payments.

From [[PP_03|2025 Moed A]] Q10: receipts at years 5, 8, 11, 14 ($r_3 = 33.1\%$, valued at year 2): 51,038. Payments 7,000 growing 2% for 14 years: 57,097. NPV $-6{,}060$.

## D. The true rate of a loan or a purchase on credit

1. Write what you **receive**: the loan minus fees paid now (or the price you would pay in cash).
2. Write what you **pay**: each instalment, with its fee, at its date.
3. Solve for the per-period rate (IRR); annualise: $(1 + r_{period})^{12} - 1$.
4. Comparing loans: put every one on the **same effective annual basis**, then pick the lowest.

From [[PP_05|2024 Moed B]] Q10: 700 now against two instalments of 355: 0.951% a month, 12.03% a year.

## E. Inflation questions

| Asked | Move |
|---|---|
| Real return, given nominal and actual inflation | $\tfrac{1 + r_{nom}}{1 + \pi} - 1$ (negative if prices beat the rate) |
| Expected inflation from two bonds | yield of each, then $\tfrac{1 + r_{nom}}{1 + r_{real}} - 1$ |
| Inflation from a price index | $\tfrac{\text{end}}{\text{start}} - 1$ (can be negative) |
| A CPI-linked bond price | real rate from **expected** inflation; actual inflation is a distraction |
| A CPI-linked loan payment | real payment $\times$ cumulative index to that date |

## F. Loans

1. **Find the payment** first (or the principal part, for equal principal).
2. Balance after $k$ payments: PV of what is left, at the loan rate.
3. Principal in payment $k$: payment minus interest on the balance before it.
4. **Grace period:** grow the balance by the interest first.
5. **Prepayment after a rate fall:** fee $=$ remaining payments at the new rate $-$ at the loan rate. Monthly payments: use $r/12$ for both.

From [[PP_05|2024 Moed B]] Q5: 1,500,000, 30 years, 4.8% then 3.6% after 3 years. $PMT = 7{,}869.98$; 324 payments left; $1{,}629{,}410 - 1{,}427{,}747 = 201{,}662$.

## G. Bonds

1. **Coupon first:** $C = FV\cdot i/m$.
2. Find the **yield** from whatever is priced (another bond with the same risk, a one-year bond).
3. Price $=$ coupons as an annuity $+$ discounted face; irregular bonds, discount each flow.
4. Premium, par, discount: compare the coupon rate with the yield.
5. Holding-period return: price at sale (before the coupon: add $C$) over the price paid.

From [[PP_02|2025 Moed B]] open 2: bond A, one year, 10% coupon, 1,028: yield 7%; bond B at 4,590 for 5 years: coupon 250, rate 5%; a bond paying every two years: rate $1.07^2 - 1 = 14.5\%$.

## H. Choosing projects

1. Read the setting: **one** project, **exclusive**, **independent** with or without a budget, **renewable** with unequal lives.
2. Apply the matching rule: NPV $> 0$; highest NPV; all positive NPVs; rank by PI; highest EAV.
3. Statement questions: NPV falls as $r$ rises; IRR depends only on the cash flows; IRR and payback can rank wrongly.
4. Equal PIs under a budget: any combination that uses the budget gives the same NPV, so "cannot say".

```graph
type: finance-npv-profile
paper: b25
```

From [[PP_02|2025 Moed B]] MCQ 1: C has the lowest IRR (7.7%) but the highest NPV at 5%. The curves cross, so the ranking depends on the rate.

## I. Portfolio risk

1. Write the weights (they sum to 1; borrowing makes the risk-free weight negative).
2. $\sigma_p^2$ with the cross term $2x_Ax_B\rho\sigma_A\sigma_B$; the risk-free asset adds nothing.
3. "At most how much in the safer asset": the **minimum-variance** weight.

## J. The CML (efficient portfolios)

1. Efficient (a mix of $M$ and $r_f$, "invests optimally"): use the CML.
2. Two efficient portfolios: the slope from both, then $r_f$ from either.
3. $\sigma_p = x_m\sigma_m$ gives the weights; $x_{rf} = 1 - x_m$.
4. Several portfolios, one efficient: it is the one with the **highest Sharpe ratio**.

From [[PP_03|2025 Moed A]] Q11: funds A (10%, 2%) and B (16%, 5%) give slope 2 and $r_f = 6\%$; A is 25% risk-free, so $E(r_m) = 11.33\%$; B borrows 87.5%.

## K. The SML (shares, projects, inefficient portfolios)

1. $\beta = \rho\sigma_i/\sigma_m$ (or $Cov/\sigma_m^2$, or a weighted average).
2. Required return from the SML; use it as the **discount rate**.
3. Price: perpetuity $D/r$ or Gordon $D_1/(r - g)$.
4. Mispriced: expected return above the SML means the share is cheap (buy).
5. Systematic risk $\beta^2\sigma_m^2$; the rest is specific and not priced.
