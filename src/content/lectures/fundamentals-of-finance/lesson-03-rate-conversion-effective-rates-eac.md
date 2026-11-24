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
