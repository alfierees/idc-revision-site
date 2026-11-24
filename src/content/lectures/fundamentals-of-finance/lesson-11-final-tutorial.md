---
title: "Final Tutorial: CML, SML & Exam Practice"
week: 11
semester: 2
year: 1
academic_year: "2024-25"
course: Financial Management & Finance
lecture: "Lesson 11 — Last class (tutorial), 3 July 2025"
date: 2026-11-24
tags:
  - financial-management
  - capital-market-line
  - security-market-line
  - sharpe-ratio
  - beta
  - free-cash-flow
aliases:
  - FM Lesson 11
  - Last Class Tutorial
  - Final Tutorial
subject: fundamentals-of-finance
in_scope: true
---

# Final Tutorial: CML, SML & Exam Practice

> Part of: [[Financial Management]]
> **Lesson 11** — the last class of the course (3 July 2025), a tutorial
> Key concepts: [[Capital Market Line]], [[Security Market Line]], [[Sharpe Ratio]], [[Beta]], [[Free Cash Flow]]

> [!info] Sources and downloads
> - Class board notes: [Last class board (PDF)](/papers/fundamentals-of-finance/class-2025-07-03-last-class-tutorial.pdf): four CAPM questions solved by hand.
> - Class workbook: [2025.07.03 Last class (tutorial).xlsx](/papers/fundamentals-of-finance/class-2025-07-03-last-class-tutorial.xlsx): the Q2 Sharpe-ratio table, plus three exam questions from 2025 (see [[#The class workbook, sheet by sheet|below]]).
>
> The four board questions are the same as the CML assignment, so their **official** written solutions are in [[HW_10-CML, SML & CAPM]]. This note follows the lecturer's board working.

---

## Question 1: from the CML to a share's return

Portfolio P has $E(r_P) = 25\%$ and $\sigma_P = 4\%$ and combines the risk-free asset ($r_f = 5\%$) with the market portfolio ($E(r_m) = 20\%$).

**a. The market's SD.** P is a mix of $M$ and $r_f$, so it is on the CML:
$25\% = 5\% + \frac{20\% - 5\%}{\sigma_m} \times 4\% \Rightarrow \boxed{\sigma_m = 3\%}$.

**b. A share with $\sigma = 2\%$ and $\rho = 0.5$ with the market.** A single share is not efficient, so use the **SML**:
$\beta_i = \frac{\sigma_i}{\sigma_m}\rho_{im} = \frac{2\%}{3\%}(0.5) = \frac13$, so $E(r_i) = 5\% + \frac13(20\% - 5\%) = \boxed{10\%}$.

## Question 2: spotting the efficient portfolios

| | A | B | C | D |
|---|---|---|---|---|
| $E(r)$ | 7% | 8% | 12% | 15% |
| $\sigma$ | 3.75% | 7.25% | 10% | 14.5% |

$r_f = 4\%$, and at least one portfolio is efficient.

**a.** Efficient portfolios all lie on the CML, so they share its slope. Compute each **Sharpe ratio** $\frac{E(r_i) - r_f}{\sigma_i}$: A 0.80, B 0.55, C 0.80, D 0.76. The highest slope is the CML's, so **A and C are efficient**. (The board lists three approaches: use the CML; use $\sigma_i^2 = \beta_i^2\sigma_m^2 + \sigma_\varepsilon^2$ with $\sigma_\varepsilon = 0$ for efficient portfolios; or compare slopes.)

**b.** With $\sigma_m = 8.75\%$, use A on the CML: $7\% = 4\% + \frac{E(r_m) - 4\%}{8.75\%}(3.75\%) \Rightarrow \boxed{E(r_m) = 11\%}$.

## Question 3: a share as volatile as the market

A friend claims to have found a share, positively correlated with the market, whose SD equals the market's.

**a. Possible?** Yes. A share's variance is systematic plus specific risk, and nothing stops the total from happening to equal $\sigma_m^2$.

**b. Its beta vs the market's.** $\sigma_i^2 = \beta_i^2\sigma_m^2 + \sigma_\varepsilon^2$ with $\sigma_i = \sigma_m$ and $\sigma_\varepsilon > 0$ forces $\beta_i^2 < 1$. With positive correlation: $\boxed{0 < \beta_i < \beta_m = 1}$. Graphically the share sits at the same $\sigma$ as $M$ but **below** it, inside the frontier.

**c. If $\sigma_m = 2\sigma_\varepsilon$:** $\sigma_m^2 = \beta_i^2\sigma_m^2 + (0.5\sigma_m)^2 \Rightarrow 1 = \beta_i^2 + 0.25 \Rightarrow \boxed{\beta_i = 0.866}$ (the workbook cell `=SQRT(0.75)`).

> [!warning] The official written solution gets 3b backwards
> The assignment's written solution (see [[HW_10-CML, SML & CAPM]]) says "$\beta_i > 1$". Its own working ($\sigma_m^2 > \beta_i^2\sigma_m^2$) and its part c answer (0.866) both give $\beta_i < 1$, as does the lecturer's board.

## Question 4: Twiddle-dee and Twiddle-dam

Both brothers invest optimally. Twiddle-dee's portfolio has $E(r) = 6\%$; Twiddle-dam's has $\sigma = 12\%$. The market has $E(r_m) = 8\%$, $\sigma_m = 10\%$, and $r_f = 5\%$.

**a. CML:** $E(r_p) = 5\% + \frac{8\% - 5\%}{10\%}\sigma_p = \boxed{5\% + 0.3\,\sigma_p}$.

**b. Risk-free share.** Use the one-risky-plus-risk-free formulas with $M$ as the risky asset:
- Dee: $6\% = x_m(8\%) + (1 - x_m)(5\%) \Rightarrow x_m = 33.33\%$, so $\boxed{x_{rf} = 66.67\%}$ (a lender).
- Dam: $12\% = x_m(10\%) \Rightarrow x_m = 120\%$, so $\boxed{x_{rf} = -20\%}$ (a borrower).

**c. Ranking risk preference.** Dam is levered and holds the riskier portfolio, so he is **less risk averse** than Dee. Dee sits on the CML between $r_f$ and $M$; Dam sits beyond $M$.

**d. SML:** $E(r_i) = 5\% + \beta_i(8\% - 5\%) = \boxed{5\% + 3\%\,\beta_i}$.

**e. Betas.** $6\% = 5\% + 3\%\beta_A \Rightarrow \beta_{Dee} = \frac13$, and $\beta_{Dam} = 1.2$. The board's shortcut: for an efficient portfolio $\beta_p = x_m\beta_m + (1-x_m)\beta_{rf} = x_m(1) + (1-x_m)(0)$, so $\boxed{\beta_p = x_m}$.

---

## The class workbook, sheet by sheet

> [!info] Download: [2025.07.03 Last class (tutorial).xlsx](/papers/fundamentals-of-finance/class-2025-07-03-last-class-tutorial.xlsx)

### `Sheet1`

**Rows 2 to 5: the Question 2 table.** The four portfolios plus $r_f$ (with $\sigma = 0$), and row 5 computes each Sharpe ratio, e.g. `=(G3-$C$3)/G4` for D. A scatter chart plots the five points with the CML through $r_f$, A and C, showing B and D below the line.

**Cell E22:** `=SQRT(0.75)` = 0.866, the Question 3c beta.

**Rows 27 to 30: 2025 Moed A, question 1** (see [[PP_03-Savings Tax, Implied Rate, Mortgage Prepayment, Bonds & CAPM (2025 Moed A)|PP 03]]). A NIS 100,000 one-year deposit earning 0.6% a month for 8 months, 0.7% for 2 months and 1% for 2 months, with 25% tax on the interest:
- Principal plus interest: `=100000*(1+0.6%)^8*(1+0.7%)^2*(1+1%)^2` = 108,513.94
- Tax: `=-25%*(D28-100000)` = −2,128.49
- Net: **106,385.46**

**Rows 34 to 39: 2025 Moed A, question 2.** The developer's two payment plans (2,000,000 now + 700,000 in year 4, or 700,000 now + 2,300,000 in year 4). Row 37 takes the **difference** of the two cash-flow rows: +1,300,000 at $t=0$ and −1,600,000 at $t=4$. Paying less now is like borrowing 1.3M and repaying 1.6M, so the implied rate is `=IRR(C37:G37)` = **5.33%** a year.

### `Sheet2`: a franchise FCF question (2025 Moed B)

This sheet is the lecturer's worked free-cash-flow table for the franchise question of the 2025 Moed B exam (numbers in NIS thousands; $r = 7\%$, tax 20%). The structure is the standard build from [[Lesson_06-Capital Budgeting & Free Cash Flow]]:

| | $t=0$ | $t=1$ | $t=2$ | $t=3$ |
|---|---|---|---|---|
| Sales ($3 \times$ units sold) | | 27,000 | 21,000 | 42,000 |
| Cost of goods | | −18,000 | −14,000 | −20,000 |
| Maintenance cost | −1,350 | −1,050 | −2,100 | |
| Cannibalisation (lost screen profit) | | −2,250 | −1,750 | −3,500 |
| **EBITDA** | −1,350 | 5,700 | 3,150 | 18,500 |
| Depreciation (10,000 over 2 years) | | −5,000 | −5,000 | |
| **EBIT** | −1,350 | 700 | −1,850 | 18,500 |
| Tax (20%, symmetric) | +270 | −140 | +370 | −3,700 |
| **NOPAT** | −1,080 | 560 | −1,480 | 14,800 |
| Add back depreciation | | 5,000 | 5,000 | |
| CAPEX | −10,000 | | | |
| Investment in working capital | −15,100 | +6,466.67 | −8,633.33 | +17,266.67 |
| **FCF** | **−26,180** | **12,026.67** | **−5,113.33** | **32,066.67** |

- **NPV** `=NPV(B22,C20:E20)+B20` = **6,769.64**, positive, so buy the franchise. Note the correct pattern: `NPV` over years 1 to 3, then **add** the $t=0$ flow outside it.
- **Maintenance:** `=-150*C5/1000`, i.e. 0.15 per unit of the **next** year's expected sales, paid at the start of each year.
- **Cannibalisation:** `=(250-250%*500)*0.25*C5/1000`, i.e. 25% of device sales are lost screen sales, at a lost profit of $250\% \times 500 - 250 = 1{,}000$ per screen (scaled to thousands).
- **Working capital** (rows 36 to 43, at the start of each year): inventory $= \frac13 \times 2{,}000 \times$ units purchased, receivables $= 30\%$ of that year's sales, payables $= 10\% \times 2{,}000 \times$ units purchased (units purchased 15,000, 5,000, 10,000). The cash flow is minus the change in the balance; it is all recovered at $t=3$.

> [!warning] Not the official solution
> The official 2025 Moed B solution ([[PP_02-Franchise FCF NPV, NPV vs IRR, Loan Effective Rate, Amortisation & Growing Cash Flows (2025 Moed B)|PP 02]]) reaches an NPV of **2,756.51**: it expenses the cost of **purchases** (30,000, 10,000, 20,000), charges the holding cost on the 6,000 and 4,000 units in stock, and uses a 1,000 loss per discounted screen. This tutorial sheet is the lecturer's different worked version: cost of goods on units sold in years 1 and 2 (and on purchases in year 3), maintenance on next year's sales, NPV 6,769.64. Both say "buy"; for the exam, follow the official solution.

---

## Summary

> [!success] Exam checklist for CML/SML questions
> - **Efficient** portfolio (mix of $M$ and $r_f$, or "invests optimally") → CML, $\sigma_p = x_m\sigma_m$, $\beta_p = x_m$. ^summary
> - **Single share / project / inefficient portfolio** → SML with $\beta_i = \rho_{im}\sigma_i/\sigma_m$.
> - Several portfolios, one or more efficient → the efficient ones have the **highest Sharpe ratio**, which is the CML slope.
> - $\sigma_i^2 = \beta_i^2\sigma_m^2 + \sigma_\varepsilon^2$: specific risk can only push $\sigma_i$ up, never $\beta$.
> - $x_{rf} < 0$ means borrowing; more leverage means less risk aversion.

---

## Related Notes

- [[Lesson_09-Capital Market Line]] · [[Lesson_10-Security Market Line & CAPM]]
- [[HW_10-CML, SML & CAPM]] — the same four questions with the official written solution
- [[PP_03-Savings Tax, Implied Rate, Mortgage Prepayment, Bonds & CAPM (2025 Moed A)|PP 03 (2025 Moed A)]] · [[PP_02-Franchise FCF NPV, NPV vs IRR, Loan Effective Rate, Amortisation & Growing Cash Flows (2025 Moed B)|PP 02 (2025 Moed B)]]
- [[Financial Management]] — subject hub
