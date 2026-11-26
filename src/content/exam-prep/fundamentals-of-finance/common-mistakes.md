---
title: "Common Mistakes"
subject: fundamentals-of-finance
type: reference
description: "The slips the wrong options are built on, topic by topic, each with the fix: annuity timing, stated vs effective rates, fees, real vs nominal, loan balances and prepayment fees, bond coupons, IRR rankings, financing and sunk costs in FCF, and CML vs SML."
course: Fundamentals of Finance
instructor: Dr. Tal Mofkadi
semester: 2
year: 1
order: 5
tags:
  - fundamentals-of-finance
  - exam-prep
  - mistakes
---

## Time value of money

| Mistake | Fix |
|---|---|
| The annuity PV lands on the first payment | It lands **one period before** it; discount the rest of the way |
| Payments at the start of each month treated as ordinary | Annuity due: multiply by $(1 + r)$ |
| An annual rate with monthly payments | Convert: effective $(1 + r)^{1/12} - 1$, stated $r/12$ |
| Three-yearly receipts discounted at the annual rate | Use $(1 + r)^3 - 1$ and count payments, not years |
| A falling salary as a plain annuity | Growing annuity with negative $g$ |
| Tax on the whole withdrawal | Tax on the **interest** only |

## Rates and fees

| Mistake | Fix |
|---|---|
| Dividing an effective annual rate by 12 | Divide only a **stated** rate; root an effective one |
| Adding the fee to the interest rate | Put fees on the timeline at their dates and solve for the IRR |
| Fees paid now added to the repayment | A fee now **lowers what you receive** |
| Stopping at the monthly rate | Annualise: $(1 + r_m)^{12} - 1$ |
| Comparing loans quoted on different periods | Convert every one to an effective annual rate |

## Inflation

| Mistake | Fix |
|---|---|
| $r_{real} = r_{nom} - \pi$ | Exact: $\tfrac{1 + r_{nom}}{1 + \pi} - 1$ (the subtraction is only an approximation) |
| Cumulative inflation as a sum | A product, or end index over start index |
| Pricing an indexed bond with actual inflation | Price on the issue day uses **expected** inflation |
| A non-linked rate treated as real | Non-linked rates are nominal |
| Deflation ignored | Prices falling makes $\pi < 0$ and the real rate **higher** |

## Loans

| Mistake | Fix |
|---|---|
| Balance $=$ original loan $-$ payments made | Balance $=$ PV of the **remaining** payments |
| Principal part $=$ payment $/ n$ | Only in an equal-principal loan; in a mortgage it grows each period |
| Ignoring interest during a grace period | The balance grows by $(1 + r)$ each deferred period |
| Charging a prepayment fee when rates rose | The fee exists only when rates **fell** |
| Fee from the original loan amount | From the **remaining** payments, at the new rate vs the loan rate |
| An indexed payment from the nominal schedule | Real payment $\times$ the index **to that date** |

## Bonds

| Mistake | Fix |
|---|---|
| Coupon from the yield | Coupon $= FV\times$ coupon rate $/m$; the yield discounts |
| Annual yield with semi-annual coupons | Per-period yield: $(1 + r)^{1/2} - 1$ |
| Coupons on the full face after a partial redemption | On the **outstanding** face |
| Forgetting the coupon when selling just before it | Add $C$ to the price |
| Higher yield, higher price | Price and yield move in **opposite** directions |

## Project choice

| Mistake | Fix |
|---|---|
| Ranking exclusive projects by IRR or payback | By **NPV** |
| "A higher discount rate raises the IRR" | The IRR depends only on the cash flows |
| Taking only the best independent project | Take **every** positive-NPV project when the budget allows |
| Comparing NPVs of projects with different lives | Renewable: compare **EAV** |
| Budget with partial projects, ranked by NPV | Rank by $PI = NPV/I_0$ |
| Excel `NPV` including $t = 0$ | `NPV` starts at $t = 1$; add $-I_0$ separately |

## Free cash flow

| Mistake | Fix |
|---|---|
| Including the loan or its interest | Financing is **never** in the FCF |
| Including R&D already spent | Sunk: ignore |
| Ignoring the space the project uses | Charge its opportunity cost (lost rent) |
| Charging existing managers' salaries | Only extra costs caused by the project |
| Depreciation over the use life | Over the **tax** life the question gives |
| Subtracting depreciation and not adding it back | Subtract for tax, then add back |
| Taxing the whole sale price of an asset | Tax only the gain over **book value** |
| Working capital as a cost every year | Only its **change**; it is released at the end |
| "One more shekel of depreciation adds a shekel of cash" | It adds $t_c$ (the tax shield) |

## Portfolios, CML and SML

| Mistake | Fix |
|---|---|
| Portfolio SD as a weighted average of SDs | Only if $\rho = 1$; otherwise use the variance formula |
| Adding the risk-free asset's variance | It has none and no covariance |
| CML for a single share | CML for **efficient** portfolios; SML for everything else |
| Pricing total risk | Only systematic risk $\beta^2\sigma_m^2$ is priced |
| "$\beta > 1$ cannot be efficient" | A levered efficient portfolio has $\beta = x_m > 1$ |
| Weights that do not sum to 1 | Borrowing gives $x_{rf} < 0$ |
