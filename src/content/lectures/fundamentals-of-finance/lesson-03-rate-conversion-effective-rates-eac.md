---
title: "Rate Conversion, Effective Rates & EAC"
week: 3
semester: 2
year: 1
academic_year: "2024-25"
course: Financial Management & Finance
lecture: "Lesson 3 — EAC, Rate Conversion, Stated vs Effective IR"
date: 2026-06-05
tags:
  - financial-management
  - effective-interest-rate
  - rate-conversion
  - equivalent-annual-cost
  - profitability-index
aliases:
  - FM Lesson 3
  - Effective vs Stated Rate
  - APR vs EAR
  - Equivalent Annual Cost
subject: fundamentals-of-finance
in_scope: true
---

# Rate Conversion, Effective Rates & EAC

> Part of: [[Financial Management]]
> **Lesson 3** — Financial Management & Finance
> Key concepts: [[Effective Interest Rate]], [[Stated Rate]], [[Rate Conversion]], [[Profitability Index]], [[Equivalent Annual Cost]]

> [!info] Class workbooks (downloads)
> - [2025.05.08 Fourth class (Effective IR).xlsx](/papers/fundamentals-of-finance/class-2025-05-08-fourth-class-effective-ir.xlsx)
> - [2024.04.24 Third class (PEC-II).xlsx](/papers/fundamentals-of-finance/class-2024-04-24-third-class-pec-ii.xlsx) (sheets `EAC` and `PI`)
> - [2025.05.19 Recitation hour.xlsx](/papers/fundamentals-of-finance/class-2025-05-19-recitation-hour.xlsx) (`Sheet1`: an effective rate with a fee)
>
> What each sheet does: [[#The class workbooks, sheet by sheet|see below]].

---

## The core problem: rates only mean something with a frequency

"12% per year" is ambiguous until you know *how often it compounds*. 1% per month is **not** 12% per year, because the monthly interest itself earns interest. This lesson is about converting rates between frequencies correctly and using the right one in every formula.

> [!info] Two different conversions — don't confuse them
> 1. **Effective-to-effective** (true compounding): convert a real per-period rate to another period using $(1+r)$ powers. Used when you already have a *genuine* effective rate.
> 2. **Stated-to-effective** (APR → EAR): a [[Stated Rate]] (APR) is quoted annually but *applied* $m$ times a year by simple division. Convert with the $(1+\frac{r}{m})^m$ formula.

---

## 1. Effective-rate conversions

If $r$ is the true effective rate over a period, the equivalent rate over a fraction/multiple of that period uses the **geometric** relationship — money compounds, it doesn't add:

$$\boxed{(1+r_{\text{annual}}) = (1+r_{\text{period}})^{m}}\;\Longrightarrow\; r_{\text{period}} = (1+r_{\text{annual}})^{1/m}-1$$ ^eff-conversion

> [!example] 6% effective annual → shorter periods
> | Period | $m$ | $r = (1.06)^{1/m}-1$ |
> |---|---|---|
> | Semi-annual | 2 | 2.956% |
> | Quarterly | 4 | 1.467% |
> | Monthly | 12 | 0.4868% |
> | Daily | 365 | 0.01597% |
>
> Note these are **below** $6\%/m$ — because compounding the smaller rate $m$ times must land back at exactly 6%.

> [!warning] Common mistake
> Do **not** divide an effective annual rate by 12 to get a monthly rate. $6\%/12 = 0.5\%$ monthly compounds to $(1.005)^{12}-1 = 6.17\%$, *not* 6%. Division only applies to **stated** rates (next section).

---

## 2. Stated (APR) vs Effective (EAR)

A loan quoted at "6% annual, compounded monthly" means the bank charges $6\%/12 = 0.5\%$ **per month**. The true annual cost is:

$$\boxed{r_{\text{eff,annual}} = \left(1+\frac{r_{\text{stated}}}{m}\right)^{m}-1}$$ ^apr-to-ear

As compounding gets more frequent ($m\to\infty$) the EAR approaches the **continuous** limit:

$$r_{\text{eff}} = e^{r_{\text{stated}}}-1$$ ^continuous

> [!example] Stated 6% under different frequencies
> | Compounded | $m$ | EAR |
> |---|---|---|
> | Annually | 1 | 6.000% |
> | Semi-annually | 2 | 6.090% |
> | Quarterly | 4 | 6.136% |
> | Monthly | 12 | 6.168% |
> | Daily | 365 | 6.183% |
> | Continuously | ∞ | 6.184% |
>
> Excel: `EFFECT(stated, m)` gives the EAR; `NOMINAL(eff, m)` reverses it.

![[L3_effective_vs_frequency.png]]

> [!tip] Why the curve flattens
> Each extra compounding step adds interest-on-interest, but the marginal benefit shrinks — going annual→monthly adds 0.17%, but monthly→continuous adds only 0.016%. The effective rate is bounded above by the continuous case $e^{r}-1$.

---

## 3. Profitability Index & capital rationing

When you can't fund every positive-NPV project (a budget constraint), rank by **bang-for-buck**, not by raw NPV.

$$\boxed{PI = \frac{NPV}{\text{Initial Investment}}}\quad\text{(some texts use } \tfrac{PV}{I}\text{; here } PI=\tfrac{NPV}{I}\text{)}$$ ^profitability-index

> [!info] Decision procedure under a budget
> 1. Compute PI for every project.
> 2. Rank highest PI first.
> 3. "Spend down" the budget greedily; the last project may be funded **fractionally** if it's divisible.
>
> If projects were *mutually exclusive* instead, you'd simply pick the single highest-NPV project — PI is specifically for squeezing the most value out of a limited budget across *several* projects.

---

## 4. Equivalent Annual Cost / Annuity (EAC / EAV)

How do you compare projects (or machines) with **different lifespans**? Convert each one's NPV into the level annual cash flow it is equivalent to — then compare those annual figures on a like-for-like basis.

$$\boxed{EAC = \frac{NPV}{\text{Annuity factor}} = \frac{NPV}{\frac{1}{r}\big(1-(1+r)^{-n}\big)}}$$ ^eac

Equivalently, $EAC = -\texttt{PMT}(r, n, NPV)$ in Excel.

> [!example] Renewable projects of unequal length
> Project A: $(-50, 0, 110)$ over 2 years, NPV $= 40.91$ at $r=10\%$ → $EAC_A = -\texttt{PMT}(10\%,2,40.91) = \$23.57/\text{yr}$.
> Project B: $-100$ now, $+322.11$ in year 6, NPV $= 81.82$ → $EAC_B = -\texttt{PMT}(10\%,6,81.82) = \$18.79/\text{yr}$.
> Although B has the higher NPV, **A delivers more per year** ($23.57 > 18.79$) — for an indefinitely *repeatable* project, A is better. Comparing raw NPVs of different-length projects would be apples-to-oranges.

> [!tip] When to reach for EAC
> Use EAC whenever the alternatives **repeat** or have **different horizons** (machine replacement, lease vs buy, recurring projects). It annualises away the horizon difference.

---

## The class workbooks, sheet by sheet

### 8 May 2025, fourth class (Effective IR)

- **`Effective IR conversions`:** is 12% a year the same as 1% a month? No: 100 at 12% a year is 112, but at 1% a month `=100*(1+1%)^12` = 112.68. The equivalent monthly rate is `=(1+B14)^(1/B15)-1` = **0.9489%**.
  - *Class exercise 1:* 6% a year converted to semi-annual (2.956%), quarterly (1.467%), monthly (0.487%), weekly, daily, hourly and per minute, all with `=(1+6%)^(1/n)-1`.
  - *Class exercise 2:* 0.5% a month converted down (daily with $n=30$, weekly with $n=4$) using the root, and up (quarterly 1.508%, semi-annual 3.038%, annual **6.168%**, 2-year 12.72%, 3-year 19.67%) using the power `=(1+0.5%)^n-1`.
- **`Stated vs. Effective`:** "6% a year calculated monthly" does **not** mean paying 6%; it means 0.5% a month, so the effective annual rate is `=(1+0.5%)^12-1` = `=(1+6%/12)^12-1` = `=EFFECT(6%,12)` = **6.168%**. A table shows the effective rate rising with the compounding frequency (6% annual, 6.09% semi-annual, 6.136% quarterly, …, 6.1837% continuous with `=EXP(B10)-1`).
  - *Class discussion:* 8% stated, compounded quarterly, gives an effective annual rate of `=(1+8%/4)^4-1` = 8.243%. From that: effective monthly 0.662%, semi-annual 4.04%, and quarterly back to exactly 2%.
- **`Effective rate in transactions`:** the effective rate is the IRR of the actual cash flows.
  - *Example 1, \$100,000 for a year:* (a) 11% paid at year end, IRR **11%**; (b) 10% charged **up front**, so you receive only 90,000 and repay 100,000, IRR `=IRR(B17:C17)` = **11.11%**. Prepaid interest is dearer.
  - *Example 2, \$20,000, daily compounding:* (a) 12% stated is `=(1+12%/365)^365-1` = 12.75% effective; (b) 10% stated (10.52% effective) plus a \$250 fee paid up front, so you net 19,750 and repay 22,103.12: IRR **11.91%**. Option (b) is cheaper despite the fee.
  - *Example 3, supplier credit:* \$10,000 cash now, or \$1,000 a month for 12 months. The implied monthly rate is 2.92%, found three ways: `=RATE(12,1000,-10000)`, Goal Seek on the NPV difference, and `=IRR()` on the difference of the two cash-flow rows. Annualised `=(1+B67)^12-1` = **41.3%**.
  - *Example 4:* receive 29,200 now and pay 2,100 a month for 30 months: monthly IRR 5.91%, annual **99.1%**.

### 24 April 2024, third class (PEC-II): `Board`, `EAC` and `PI`

- **`Board`:** the decision map. *Mutually exclusive* projects: one-off → highest NPV; renewable with different cycle lengths → EAC. *Not mutually exclusive*: no budget constraint → every project with NPV > 0; with a budget constraint → rank by PI.
- **`EAC`:** renewable projects at 10%. A: −50 then +110 at year 2, NPV 40.91. B: −100 then +322.11 at year 6, NPV 81.82. B's NPV is twice A's, but A renews three times in six years. Equivalent annual cash flow `=PMT(B3,2,-J5)` = **23.57** for A vs `=PMT(B3,6,-J6)` = 18.79 for B, so A wins by 25.5%. The check below chains A three times over six years (A1, A2, A3): NPV **102.66**, which beats B's 81.82 by the same 25.5%.
- **`PI`:** six independent projects at 10% with a \$500 budget. NPV and `PI = NPV/investment` (e.g. D: NPV 40.16, PI 0.80; A 0.66; B 0.46; C 0.41; E 0.28; F negative). If they were mutually exclusive you would take **E** (highest NPV, 142.03). With the budget you fill in PI order: D (50), A (100), B (150), then two-thirds of C (200 of 300), total NPV **257.44**, much more than E alone.

### 19 May 2025, recitation hour (`Sheet1`)

A two-month loan of 50,000 at 12.68% a year effective, repaid as `=-C5*(1+12.68%)^(2/12)` = 51,004.81 after two months, with a 1,000 fee at the start. You net 49,000, so the monthly IRR is 2.03% and the effective annual rate `=(1+C9)^12-1` = **27.2%**: on a short loan a flat fee dominates the cost.

---

## Summary

| Tool | Formula | Use when |
|---|---|---|
| Effective conversion | $(1+r_a)^{1/m}-1$ | converting a *true* rate across periods |
| APR → EAR | $(1+\frac{r}{m})^m-1$ | a stated rate applied $m$×/year |
| Continuous limit | $e^{r}-1$ | compounding "all the time" |
| Profitability index | $NPV/I$ | budget constraint, divisible projects |
| Equivalent annual cost | $NPV \div$ annuity factor | different lifespans / repeating projects |

> [!success] The one trap to remember
> **Divide** stated rates by $m$; **compound** effective rates with powers. Mixing the two is the single most common error in this course.

---

## Related Notes

- [[Lesson_01-Time Value of Money]] — annuity factor used in EAC
- [[Lesson_02-Perpetuities, NPV & IRR]] — NPV that feeds PI and EAC
- [[Lesson_04-Inflation, Real Rates & Expected Inflation]] — another real/nominal rate conversion
- [[HW_03-Profitability Index & EAC]] and [[HW_04-Effective Interest Rates]] — problem sets
- [[Financial Management]] — subject hub
