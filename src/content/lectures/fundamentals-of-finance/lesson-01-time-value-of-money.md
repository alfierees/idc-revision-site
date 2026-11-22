---
title: Time Value of Money
week: 1
semester: 2
year: 1
academic_year: "2024-25"
course: Financial Management & Finance
lecture: "Lesson 1 — Time Value of Money"
date: 2026-06-05
tags:
  - financial-management
  - time-value-of-money
  - present-value
  - future-value
  - annuity
aliases:
  - TVM
  - FM Lesson 1
  - Present Value and Future Value
  - Annuities
subject: fundamentals-of-finance
in_scope: true
---

# Time Value of Money

> Part of: [[Financial Management]]
> **Lesson 1** — Financial Management & Finance
> Key concepts: [[Time Value of Money]], [[Future Value]], [[Present Value]], [[Discount Rate]], [[Annuity]], [[Growing Annuity]]

---

## Why a dollar today beats a dollar tomorrow

The whole of corporate finance rests on one idea: ==a dollar today is worth more than a dollar tomorrow== because today's dollar can be invested and earn a return. The [[Discount Rate]] $r$ is the exchange rate between money at different points in time. Everything else in this course — NPV, IRR, bond prices, loan schedules — is an application of moving cash flows along the time axis using $r$.

> [!info] The two operations
> - **Compounding** pushes money *forward* in time: multiply by $(1+r)$ per period → [[Future Value]].
> - **Discounting** pulls money *backward* in time: divide by $(1+r)$ per period → [[Present Value]].

---

## Future Value & the power of compounding

Invest $C$ today at rate $r$. After one period it grows to $C(1+r)$; after $t$ periods each year's balance itself earns interest (interest on interest), so:

$$\boxed{FV_t = C\,(1+r)^t}$$ ^fv-formula

> [!warning] Compound ≠ simple interest
> **Simple interest** pays $r$ only on the *original* principal: $FV = C(1+rt)$. **Compound interest** pays interest on accumulated interest too: $FV = C(1+r)^t$. Over short horizons the gap is tiny; over long horizons it explodes.

> [!example] The Manhattan story — why the exponent dominates
> Legend says Manhattan was bought in 1626 for $24. Compounded to 2025 ($t = 399$ years):
> - Simple interest at 10%: $24\,(1+0.10\times 399) = \$981.60$ — almost nothing.
> - Compound interest at 10%: $24\,(1.10)^{399} \approx \$7.9\times 10^{17}$ — astronomically more.
>
> The lesson: at long horizons the value is hyper-sensitive to $r$. Dropping the rate from 10% to 5% slashes the 2025 value by *eight orders of magnitude*.

![[L1_compound_vs_simple.png]]

![[L1_manhattan_sensitivity.png]]

---

## Present Value & discounting

Reverse the FV formula. A cash flow $CF$ arriving at time $t$ is worth, today:

$$\boxed{PV = \frac{CF}{(1+r)^t}}$$ ^pv-formula

> [!example] Single cash flow
> $20{,}000 received in 2 years at $r = 5\%$: $PV = \dfrac{20{,}000}{1.05^{2}} = \$18{,}140.59$.

The PV of a *stream* of cash flows is just the sum of each flow discounted to today — this additivity is the **value-additivity principle** and it is what makes NPV work:

$$PV = \sum_{t=1}^{T} \frac{CF_t}{(1+r)^t}$$

> [!info] Excel
> `PV(rate, nper, pmt, [fv], [type])` returns the PV of a level stream. Excel returns a **negative** number for a cash *inflow* (sign convention: money you receive is an outflow from the bank's view), so we often write `-PV(...)`.

---

## Annuities — a shortcut for level streams

An ==annuity== is a finite stream of **equal** payments $C$ for $n$ periods. Rather than discount each one, use the closed form (derived by summing a geometric series):

$$\boxed{PV_{\text{annuity}} = \frac{C}{r}\left[\,1 - \frac{1}{(1+r)^n}\,\right]}$$ ^annuity-pv

> [!example] Check
> $C = 1000$, $r = 5\%$, $n = 5$: $\dfrac{1000}{0.05}\big(1-1.05^{-5}\big) = \$4{,}329.48$ — identical to discounting all five payments individually. Excel: `-PV(5%,5,1000)`.

### Ordinary annuity vs annuity-due

> [!info] Timing matters
> - **Ordinary annuity** (annuity-immediate): payments at the *end* of each period ($t = 1,\dots,n$). This is the default of the formula above and of Excel's `PV`.
> - **Annuity-due**: payments at the *start* of each period ($t = 0,\dots,n-1$). Every payment is discounted one period less, so it is worth $(1+r)\times$ the ordinary annuity. Excel: `PV(rate,nper,pmt,,1)` (the trailing `1` sets `type = beginning`).

### Delayed (deferred) annuity

If the stream doesn't start until period $k$, value it as an ordinary annuity *as of one period before it starts*, then discount that lump back to today.

> [!example] Payments of $1000 in years 7–11, $r = 5\%$
> 1. Value at $t = 6$: $\dfrac{1000}{0.05}\big(1-1.05^{-5}\big) = \$4{,}329.48$.
> 2. Discount to $t = 0$: $\dfrac{4329.48}{1.05^{6}} = \$3{,}230.72$.

---

## Growing annuity

When payments grow at rate $g$ each period — $C, C(1+g), C(1+g)^2,\dots$ — the PV has its own closed form:

$$\boxed{PV_{\text{growing}} = \frac{C}{r-g}\left[\,1-\left(\frac{1+g}{1+r}\right)^{n}\,\right]}\qquad (r\neq g)$$ ^growing-annuity

> [!example] Check (lecture)
> $C = 100$ (first payment), $r = 10\%$, $g = 3\%$, $n = 20$: PV $\approx \$1{,}045.05$ — matches summing all twenty growing, discounted payments.

> [!tip] Intuition for $r-g$ in the denominator
> Growth partially offsets discounting. Only the *net* rate $r-g$ erodes value, so a faster-growing stream is worth more. If $g \ge r$ the finite formula still works, but a *perpetual* growing stream would diverge (see [[Lesson_02-Perpetuities, NPV & IRR]]).

---

## Comparison table — the four building blocks

| Stream | Cash-flow pattern | PV formula | Excel |
|---|---|---|---|
| Single flow | one $CF$ at time $t$ | $CF/(1+r)^t$ | `=CF/(1+r)^t` |
| Ordinary annuity | level $C$, $t=1..n$ | $\frac{C}{r}\big(1-(1+r)^{-n}\big)$ | `-PV(r,n,C)` |
| Annuity-due | level $C$, $t=0..n-1$ | annuity $\times(1+r)$ | `PV(r,n,C,,1)` |
| Growing annuity | $C(1+g)^{t-1}$ | $\frac{C}{r-g}\big(1-(\frac{1+g}{1+r})^{n}\big)$ | (no native fn) |

---

## Summary

> [!success] Key takeaways
> - Compounding multiplies by $(1+r)^t$; discounting divides by it. They are inverses. ^summary
> - PV is **additive** across cash flows — the foundation of NPV.
> - Annuities and growing annuities are geometric-series shortcuts; learn both the closed form and the Excel function.
> - At long horizons, value is dominated by the rate: small changes in $r$ produce huge changes in FV/PV.
> - Watch the **timing convention**: end-of-period (ordinary) vs start-of-period (due) differ by exactly one factor of $(1+r)$.

---

## Related Notes

- [[Lesson_02-Perpetuities, NPV & IRR]] — extends annuities to infinity (perpetuities) and applies PV to project decisions
- [[Lesson_03-Rate Conversion, Effective Rates & EAC]] — what $r$ to use when compounding isn't annual
- [[Lesson_04-Inflation, Real Rates & Expected Inflation]] — nominal vs real discount rates
- [[HW_01-Time Value of Money]] — problem set applying every formula here
- [[Financial Management]] — subject hub
