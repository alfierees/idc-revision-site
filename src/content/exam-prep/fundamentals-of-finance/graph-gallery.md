---
title: "Graph Gallery"
subject: fundamentals-of-finance
type: reference
description: "The pictures behind the formulas: NPV profiles and IRR (interactive, at past-paper numbers), compounding and effective rates, the Fisher equation, loan balances and the amortisation split, bond price against yield and the pull to par, the two-asset frontier, the CML and the SML."
course: Fundamentals of Finance
instructor: Dr. Tal Mofkadi
semester: 2
year: 1
order: 7
tags:
  - fundamentals-of-finance
  - exam-prep
  - graphs
---

> The interactive graph steps through with the arrows (or press play); use the last step to explore. The figures come from the lessons and the past-paper solutions, each with the one thing to read off it.

## 1. NPV profiles: NPV against IRR (Part A every year, the criteria questions)

Each project's NPV falls as the discount rate rises; it crosses zero at its IRR. When curves cross, the NPV ranking flips with the rate, which is why exclusive projects are ranked by NPV. Switch between [[PP_02|2025 Moed B]] MCQ 1 and [[PP_03|2025 Moed A]] Q12 at the top; on the last step move the cost of capital.

```graph
type: finance-npv-profile
paper: b25
```

A non-conventional project (signs change twice) can have **two** IRRs: trust NPV.

![[L2_multiple_irr.png]]

## 2. Compounding and effective rates

Compound against simple interest: the gap grows with time.

![[L1_compound_vs_simple.png]]

The same stated rate compounded more often gives a higher effective rate, but the gain flattens: annual to monthly adds far more than monthly to continuous.

![[L3_effective_vs_frequency.png]]

## 3. Real and nominal (Fisher)

The exact real rate $\tfrac{1 + r_{nom}}{1 + \pi} - 1$ against the shortcut $r_{nom} - \pi$: they drift apart as inflation rises.

![[L4_fisher_real_rate.png]]

## 4. Loans

The outstanding balance under each loan type (100,000 at 5% for 10 years): equal principal falls in a straight line, the mortgage slowly at first, the interest-only loan not at all until the end.

![[L5_loan_balances.png]]

An equal-payment loan: the interest slice shrinks and the principal slice grows, though the payment stays fixed.

![[L5_amortization_split.png]]

## 5. Bonds

Price against yield: convex, and above face value whenever the coupon beats the yield.

![[L7_price_yield.png]]

Pull to par: premium and discount bonds converge on face value as maturity nears.

![[L7_pull_to_par.png]]

## 6. Free cash flow over a project's life

The typical shape (Lesson 6 example: 120,000 invested, EBITDA 50,000, depreciation 12,000, tax 25%): one big outflow at the start, then level inflows of 40,500. Salvage or released working capital would add a bump in the last year.

![[L6_fcf_profile.png]]

## 7. Two assets and diversification

Every mix of two assets for different correlations: the lower $\rho$, the further the curve bends left (less risk for the same return). At $\rho = -1$ risk can reach zero.

![[L8_correlation_frontiers.png]]

![[Read01_two_asset_frontier.png]]

## 8. The CML and the SML

From $r_f$, the steepest line that still touches the frontier of risky assets is the best: it touches at the tangency portfolio, which has the highest Sharpe ratio. With the whole market, that line is the CML and the tangency point is $M$.

![[L9_optimal_cal.png]]

![[Read01_cml_frontier.png]]

The SML: required return against beta, from $r_f$ at $\beta = 0$ through the market at $\beta = 1$. A share above the line is underpriced.

![[L10_sml.png]]
