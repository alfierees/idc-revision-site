---
title: Financial Management Concepts
description: Single glossary of every concept used across the Financial Management & Finance notes. All [[wiki-links]] in lessons, homeworks and past papers resolve to a heading here.
tags:
  - meta
  - glossary
  - index
  - financial-management
aliases:
  - Financial Management Glossary
subject: fundamentals-of-finance
in_scope: true
---

# Financial Management Concepts

> One-stop glossary for Financial Management & Finance (Year 1, Semester 2). Each entry: a one-line definition + the note where it is taught. Tracker of which links exist: [[_Wiki-Link Registry]]. Subject hub: [[Financial Management]].

## Time value of money

### Time Value of Money
A dollar today is worth more than a dollar tomorrow, because today's dollar can earn the rate $r$. → [[Lesson_01-Time Value of Money|Lesson 01]]

### Future Value
$FV = C(1+r)^t$: compounding money forward to a later date. Excel `FV`. Also in [[HW_01-Time Value of Money|HW 01]]. → [[Lesson_01-Time Value of Money|Lesson 01]]

### Present Value
$PV = CF/(1+r)^t$: discounting a future cash flow back to today. Excel `PV`. Seen in: [[Macro-Economics]]. Also in [[HW_01-Time Value of Money|HW 01]]. → [[Lesson_01-Time Value of Money|Lesson 01]]

### Discount Rate
$r$, the exchange rate between money at different dates; the required return used to discount cash flows. → [[Lesson_01-Time Value of Money|Lesson 01]]

### Annuity
Finite stream of equal payments; $PV=\frac{C}{r}\left(1-(1+r)^{-n}\right)$. Excel `PV`, `PMT`. → [[Lesson_01-Time Value of Money|Lesson 01]]

### Growing Annuity
Finite stream whose payments grow at $g$; $PV=\frac{C}{r-g}\left(1-\left(\frac{1+g}{1+r}\right)^n\right)$. Also in [[PP_02-Franchise FCF NPV, NPV vs IRR, Loan Effective Rate, Amortisation & Growing Cash Flows (2025 Moed B)|PP 02]]. → [[Lesson_01-Time Value of Money|Lesson 01]]

## Perpetuities and project appraisal

### Perpetuity
Level payment forever; $PV=C/r$. → [[Lesson_02-Perpetuities, NPV & IRR|Lesson 02]]

### Growing Perpetuity
Gordon formula $PV=C/(r-g)$, valid only if $r>g$. Also in [[HW_01-Time Value of Money|HW 01]]. → [[Lesson_02-Perpetuities, NPV & IRR|Lesson 02]]

### Net Present Value
PV of all project cash flows net of the outlay; accept if NPV > 0. Excel `NPV` discounts the first value one period, so add the t=0 flow outside it. Seen in: [[Accounting]]. Also in [[HW_02-NPV, IRR & Project Choice|HW 02]], [[PP_01-Machine FCF & NPV, CAPM, Bond Repricing, Loan Effective Rate, NPV vs IRR & EAC (2020 Moed A)|PP 01]], [[PP_02-Franchise FCF NPV, NPV vs IRR, Loan Effective Rate, Amortisation & Growing Cash Flows (2025 Moed B)|PP 02]]. → [[Lesson_02-Perpetuities, NPV & IRR|Lesson 02]]

### Internal Rate of Return
The rate that makes NPV = 0; accept if IRR > $r$. Can mislead with scale differences, multiple sign changes or reinvestment assumptions. Excel `IRR`. Also in [[HW_02-NPV, IRR & Project Choice|HW 02]]. → [[Lesson_02-Perpetuities, NPV & IRR|Lesson 02]]

### NPV Profile
Plot of NPV against the discount rate; it crosses zero at the IRR and shows where projects' rankings cross over. Also in [[HW_02-NPV, IRR & Project Choice|HW 02]]. → [[Lesson_02-Perpetuities, NPV & IRR|Lesson 02]]

### Modified Internal Rate of Return
MIRR: the growth rate between the FV of all inflows and the PV of all outflows, which avoids the multiple-IRR problem. Excel `MIRR`. → [[Read_01-Finance Cheat Sheet|Cheat sheet]]

## Effective rates and equivalent annual cost

### Effective Interest Rate
True annual cost or return after compounding (EAR): $(1+r_{stated}/m)^m-1$. Includes fees when computed from the actual cash flows. Also in [[HW_04-Effective Interest Rates|HW 04]]. → [[Lesson_03-Rate Conversion, Effective Rates & EAC|Lesson 03]]

### Stated Rate
APR: a rate quoted annually but applied $m$ times a year by simple division, $r_{stated}/m$ per period. → [[Lesson_03-Rate Conversion, Effective Rates & EAC|Lesson 03]]

### Rate Conversion
Moving a rate between compounding frequencies, always through the effective rate. Excel `EFFECT`, `NOMINAL`. Also in [[HW_05-Inflation & Real Annuities|HW 05]]. → [[Lesson_03-Rate Conversion, Effective Rates & EAC|Lesson 03]]

### Profitability Index
$NPV/I$: value created per dollar invested; used to rank projects under capital rationing. Also in [[HW_03-Profitability Index & EAC|HW 03]]. → [[Lesson_03-Rate Conversion, Effective Rates & EAC|Lesson 03]]

### Equivalent Annual Cost
EAC: project cost spread as an annuity, $NPV\div$ annuity factor, so projects with unequal lifespans can be compared. Equivalent annual value (EAV) is the same idea for benefits. Also in [[HW_03-Profitability Index & EAC|HW 03]], [[PP_01-Machine FCF & NPV, CAPM, Bond Repricing, Loan Effective Rate, NPV vs IRR & EAC (2020 Moed A)|PP 01]]. → [[Lesson_03-Rate Conversion, Effective Rates & EAC|Lesson 03]]

## Inflation and real rates

### Inflation
$\pi = CPI_{end}/CPI_{start}-1$: the rate at which the price level rises. Seen in: [[Macro-Economics]]. → [[Lesson_04-Inflation, Real Rates & Expected Inflation|Lesson 04]]

### CPI
Consumer Price Index: the price level of a fixed consumption basket. Seen in: [[Macro-Economics]]. → [[Lesson_04-Inflation, Real Rates & Expected Inflation|Lesson 04]]

### Nominal Rate
Return measured in money units, not adjusted for inflation. → [[Lesson_04-Inflation, Real Rates & Expected Inflation|Lesson 04]]

### Real Interest Rate
Return measured in purchasing power: the nominal rate stripped of inflation. Seen in: [[Macro-Economics]]. Also in [[HW_05-Inflation & Real Annuities|HW 05]]. → [[Lesson_04-Inflation, Real Rates & Expected Inflation|Lesson 04]]

### Fisher Equation
$1+r_{real}=\frac{1+r_{nom}}{1+\pi}$; discount nominal flows at nominal rates and real flows at real rates. Seen in: [[Macro-Economics]]. → [[Lesson_04-Inflation, Real Rates & Expected Inflation|Lesson 04]]

## Loans and amortization

### Loan
Debt repaid through interest plus principal; the four types are interest-only, equal-principal, equal-payment and bullet. → [[Lesson_05-The Four Loan Types|Lesson 05]]

### Amortization
The schedule splitting each payment into interest and principal and tracking the balance. Excel `PMT`, `IPMT`, `PPMT`. Also in [[HW_06-Loans & Amortization|HW 06]], [[PP_02-Franchise FCF NPV, NPV vs IRR, Loan Effective Rate, Amortisation & Growing Cash Flows (2025 Moed B)|PP 02]]. → [[Lesson_05-The Four Loan Types|Lesson 05]]

### Outstanding Balance
PV of the remaining payments at the contract rate; what must be repaid to close the loan early. → [[Lesson_05-The Four Loan Types|Lesson 05]]

### Mortgage
Equal-payment (annuity or Spitzer) loan: constant payment, interest share falling over time. Excel `PMT`. → [[Lesson_05-The Four Loan Types|Lesson 05]]

### Bullet Loan
Interest paid each period with the whole principal repaid at maturity; a balloon loan leaves a final lump sum. → [[Lesson_05-The Four Loan Types|Lesson 05]]

### Refinancing
Replacing a loan with a new one when market rates change; compare the fair value of the old loan with its balance. Also in [[HW_06-Loans & Amortization|HW 06]]. → [[Lesson_05-The Four Loan Types|Lesson 05]]

## Capital budgeting and free cash flow

### Free Cash Flow
$EBIT(1-\tau)+Dep-CAPEX-\Delta WC$: the marginal, after-tax cash a project generates, ignoring financing. Seen in: [[Accounting]]. Also in [[HW_07-Free Cash Flow & Project NPV|HW 07]], [[PP_01-Machine FCF & NPV, CAPM, Bond Repricing, Loan Effective Rate, NPV vs IRR & EAC (2020 Moed A)|PP 01]], [[PP_02-Franchise FCF NPV, NPV vs IRR, Loan Effective Rate, Amortisation & Growing Cash Flows (2025 Moed B)|PP 02]]. → [[Lesson_06-Capital Budgeting & Free Cash Flow|Lesson 06]]

### Capital Budgeting
Deciding which projects to fund by comparing their incremental cash flows. → [[Lesson_06-Capital Budgeting & Free Cash Flow|Lesson 06]]

### Depreciation
Non-cash expense that lowers taxable profit; tax shield $=\tau\times Dep$. Seen in: [[Accounting]]. → [[Lesson_06-Capital Budgeting & Free Cash Flow|Lesson 06]]

### Working Capital
Cash tied up in inventory and receivables net of payables; invested up front and recovered at the end. Seen in: [[Accounting]]. → [[Lesson_06-Capital Budgeting & Free Cash Flow|Lesson 06]]

### Opportunity Cost
Value of a resource's best alternative use; counts as a project cash flow even though no cash changes hands. Seen in: [[Microeconomics]]. → [[Lesson_06-Capital Budgeting & Free Cash Flow|Lesson 06]]

## Bonds

### Bond
A loan to the issuer: periodic coupons plus face value at maturity; price is the PV of those flows. Excel `PV`, `PRICE`. Seen in: [[Legal and Tax Aspects]]. Also in [[HW_08-Bond Pricing|HW 08]], [[PP_01-Machine FCF & NPV, CAPM, Bond Repricing, Loan Effective Rate, NPV vs IRR & EAC (2020 Moed A)|PP 01]]. → [[Lesson_07-Bond Pricing|Lesson 07]]

### Coupon
Periodic interest paid on the face value. → [[Lesson_07-Bond Pricing|Lesson 07]]

### Face Value
Principal returned at maturity (par). → [[Lesson_07-Bond Pricing|Lesson 07]]

### Yield to Maturity
The market discount rate that equates a bond's price to the PV of its cash flows; price and yield move in opposite directions. Excel `YIELD`, `RATE`. → [[Lesson_07-Bond Pricing|Lesson 07]]

### Zero-Coupon Bond
Bond with no coupons; price $=FV/(1+r)^n$. → [[Lesson_07-Bond Pricing|Lesson 07]]

## Portfolio risk and diversification

### Expected Return
Weighted average of the assets' expected returns, $w_1E[R_1]+w_2E[R_2]$. Also in [[HW_09-Risk, Return & Diversification|HW 09]]. → [[Lesson_08-Risk, Return & Diversification|Lesson 08]]

### Portfolio Risk
$\sigma_p^2=w_1^2\sigma_1^2+w_2^2\sigma_2^2+2w_1w_2\sigma_1\sigma_2\rho$. Also in [[HW_09-Risk, Return & Diversification|HW 09]]. → [[Lesson_08-Risk, Return & Diversification|Lesson 08]]

### Correlation
$\rho$: how closely two assets' returns move together, from -1 to 1. Also in [[HW_09-Risk, Return & Diversification|HW 09]]. → [[Lesson_08-Risk, Return & Diversification|Lesson 08]]

### Diversification
Combining imperfectly correlated assets removes idiosyncratic risk, down to a floor of $\sigma\sqrt{\rho}$ for equal-risk assets. Also in [[HW_09-Risk, Return & Diversification|HW 09]]. → [[Lesson_08-Risk, Return & Diversification|Lesson 08]]

### Minimum Variance Portfolio
MVP: the mix of two assets with the lowest portfolio variance, $x_A=\frac{\sigma_B^2-\sigma_A\sigma_B\rho}{\sigma_A^2+\sigma_B^2-2\sigma_A\sigma_B\rho}$. Also in [[HW_09-Risk, Return & Diversification|HW 09]] and the [[Read_01-Finance Cheat Sheet|cheat sheet]]. → [[Lesson_08-Risk, Return & Diversification|Lesson 08]]

### Standard Deviation
$\sigma=\sqrt{Var(r)}$, the dispersion of returns: the course's measure of total risk. Excel `STDEV.S`. → [[Lesson_08-Risk, Return & Diversification|Lesson 08]]

### Covariance
$Cov(r_A,r_B)$: the expected product of the two returns' deviations from their means; $\rho=Cov/(\sigma_A\sigma_B)$. Excel `COVARIANCE.S`. → [[Lesson_08-Risk, Return & Diversification|Lesson 08]]

### Short Selling
Selling a borrowed share: a negative portfolio weight, equivalent to borrowing at the stock's return. → [[Lesson_08-Risk, Return & Diversification|Lesson 08]]

### Efficient Frontier
The upper half of the minimum variance frontier: for each return, the lowest-risk portfolio. → [[Lesson_09-Capital Market Line|Lesson 09]]

## Market risk, CML and SML

### Capital Market Line
Line of efficient portfolios mixing the risk-free asset with the market portfolio; return rises linearly with total risk. Also on the [[Read_01-Finance Cheat Sheet|cheat sheet]]. → [[Lesson_09-Capital Market Line|Lesson 09]]

### Security Market Line
Line giving any asset's required return from its beta: $r_f+\beta(r_M-r_f)$ (the CAPM). Taught in [[Lesson_10-Security Market Line & CAPM|Lesson 10]]. Also in [[PP_01-Machine FCF & NPV, CAPM, Bond Repricing, Loan Effective Rate, NPV vs IRR & EAC (2020 Moed A)|PP 01]]. → [[Read_01-Finance Cheat Sheet|Cheat sheet]]

### Beta
An asset's sensitivity to market returns, $Cov(A,M)/\sigma_M^2$; for an efficient portfolio $\beta_p=x_m$. Taught in [[Lesson_10-Security Market Line & CAPM|Lesson 10]]. Also in [[PP_01-Machine FCF & NPV, CAPM, Bond Repricing, Loan Effective Rate, NPV vs IRR & EAC (2020 Moed A)|PP 01]]. → [[Read_01-Finance Cheat Sheet|Cheat sheet]]

### Systematic Risk
The market-driven, undiversifiable part of total variance; this is what beta measures and what the market pays for. → [[Lesson_10-Security Market Line & CAPM|Lesson 10]]

### Idiosyncratic Risk
The asset-specific, diversifiable part of total variance (also called specific risk). → [[Lesson_10-Security Market Line & CAPM|Lesson 10]]

### Capital Allocation Line
CAL: every mix of one risky portfolio and the riskless asset, a straight line with slope equal to its Sharpe ratio. → [[Lesson_09-Capital Market Line|Lesson 09]]

### Sharpe Ratio
$\frac{E(r)-r_f}{\sigma}$: excess return per unit of total risk; efficient portfolios share the highest one, the CML slope. → [[Lesson_09-Capital Market Line|Lesson 09]]

### Tangency Portfolio
The mean-variance efficient (MVE) mix of risky assets, where the line from $r_f$ touches the frontier. → [[Lesson_09-Capital Market Line|Lesson 09]]

### Market Portfolio
The value-weighted portfolio of all risky assets, $x_i=V_i/V_M$; in equilibrium it is the tangency portfolio. → [[Lesson_09-Capital Market Line|Lesson 09]]

### Separation Theorem
Tobin: choose the risky portfolio first (same for everyone), then the split with the riskless asset (depends on risk aversion). → [[Lesson_09-Capital Market Line|Lesson 09]]

### Risk Premium
The extra return demanded for risk; market risk premium $E(r_m)-r_f$, an asset's CAPM premium $\beta_i[E(r_m)-r_f]$. → [[Lesson_10-Security Market Line & CAPM|Lesson 10]]

## Aliases & Shorthands

### NPV
See [[#Net Present Value]].

### IRR
See [[#Internal Rate of Return]].

### MIRR
See [[#Modified Internal Rate of Return]].

### EAR
See [[#Effective Interest Rate]].

### APR
See [[#Stated Rate]].

### EAC
See [[#Equivalent Annual Cost]].

### EAV
See [[#Equivalent Annual Cost]].

### PI
See [[#Profitability Index]].

### YTM
See [[#Yield to Maturity]].

### FCF
See [[#Free Cash Flow]].

### CAPM
See [[#Security Market Line]].

### CML
See [[#Capital Market Line]].

### SML
See [[#Security Market Line]].

### MVP
See [[#Minimum Variance Portfolio]].

### Par Value
See [[#Face Value]].

### Gordon Growth Formula
See [[#Growing Perpetuity]].

### Spitzer Loan
See [[#Mortgage]].

### Specific Risk
See [[#Idiosyncratic Risk]].

### Market Risk
See [[#Systematic Risk]].

### Real Rate
See [[#Real Interest Rate]].

### CAL
See [[#Capital Allocation Line]].

### MVE Portfolio
See [[#Tangency Portfolio]].

### Volatility
See [[#Standard Deviation]].

### Equity Premium
See [[#Risk Premium]].
