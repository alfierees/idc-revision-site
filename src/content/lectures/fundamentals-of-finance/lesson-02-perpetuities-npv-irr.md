---
title: "Perpetuities, NPV & IRR"
week: 2
semester: 2
year: 1
academic_year: "2024-25"
course: Financial Management & Finance
lecture: "Lesson 2 — Perpetuities, NPV & IRR"
date: 2026-06-05
tags:
  - financial-management
  - perpetuity
  - npv
  - irr
  - project-evaluation
aliases:
  - FM Lesson 2
  - Perpetuities
  - NPV vs IRR
  - Net Present Value
subject: fundamentals-of-finance
in_scope: true
---

# Perpetuities, NPV & IRR

> Part of: [[Financial Management]]
> **Lesson 2** — Financial Management & Finance
> Key concepts: [[Perpetuity]], [[Growing Perpetuity]], [[Net Present Value]], [[Internal Rate of Return]], [[Discount Rate]]

> [!info] Class workbooks (downloads)
> - [2024.04.04 Second class (PEC-I).xlsx](/papers/fundamentals-of-finance/class-2024-04-04-second-class-pec-i.xlsx) (project evaluation criteria I)
> - [2024.04.24 Third class (PEC-II).xlsx](/papers/fundamentals-of-finance/class-2024-04-24-third-class-pec-ii.xlsx) (the same NPV and IRR sheets, plus EAC and PI, see [[Lesson_03-Rate Conversion, Effective Rates & EAC]])
> - The perpetuity sheets are in the TVM II workbook of [[Lesson_01-Time Value of Money#The class workbooks, sheet by sheet|Lesson 1]].
>
> What each sheet does: [[#The class workbooks, sheet by sheet|see below]].

---

## Perpetuities — annuities that never end

A ==perpetuity== pays a level $C$ every period **forever**. Taking the annuity formula and letting $n\to\infty$, the term $(1+r)^{-n}\to 0$, leaving a strikingly simple result:

$$\boxed{PV_{\text{perpetuity}} = \frac{C}{r}}$$ ^perpetuity

> [!example] Check
> $C = 100$, $r = 10\%$ → $PV = 100/0.10 = \$1{,}000$. Summing 50 years of discounted \$100 already gives $\approx \$991$; the remaining infinite tail adds only $\approx\$9$ — almost all the value of a perpetuity sits in the early payments.

### Growing perpetuity (the Gordon formula)

If payments grow forever at rate $g < r$:

$$\boxed{PV_{\text{growing perp}} = \frac{C}{r-g}}\qquad (r > g)$$ ^growing-perpetuity

> [!warning] The convergence condition $r > g$
> If $g \ge r$ the sum **diverges** — an infinite stream growing at least as fast as it is discounted is worth infinity. The formula is only valid when the discount rate strictly exceeds the growth rate. $C$ here is the **first** payment (at $t = 1$), not the time-0 amount.

> [!example] Check
> $C = 100$, $r = 10\%$, $g = 3\%$ → $PV = 100/(0.10-0.03) = \$1{,}428.57$.

---

## Net Present Value — the master decision rule

==NPV== is the value created by a project: the PV of all future cash flows minus the initial investment.

$$\boxed{NPV = \sum_{t=0}^{T} \frac{CF_t}{(1+r)^t} = -CF_0 + \sum_{t=1}^{T}\frac{CF_t}{(1+r)^t}}$$ ^npv-formula

> [!success] The rule
> **Accept if $NPV > 0$.** A positive NPV means the project returns more than the cost of capital $r$ — it adds wealth today, measured in dollars.

> [!example] Lecture project
> $CF = (-1000, 100, 200, 300, 300, 300)$ at $r = 6\%$ gives $NPV \approx -\$13.97$ → **reject** at 6%. But the NPV *profile* below shows it would be accepted at any rate below the IRR (≈5.55%).

> [!warning] Excel's `NPV` quirk — off-by-one
> `NPV(rate, values)` assumes the **first** value is at $t = 1$, *not* $t = 0$. So for a project with a time-0 outlay you must write `=NPV(r, CF1:CFn) + CF0`, adding the un-discounted initial flow separately. Writing `=NPV(r, CF0:CFn)` discounts the outlay by one period too many.

![[L2_npv_profile.png]]

---

## Internal Rate of Return

The ==IRR== is the discount rate that makes $NPV = 0$ — the project's own break-even return.

$$0 = \sum_{t=0}^{T}\frac{CF_t}{(1+\text{IRR})^t}$$ ^irr-def

> [!success] The rule
> **Accept if $\text{IRR} > r$** (the hurdle/cost of capital). Graphically, the IRR is where the NPV profile crosses zero. Excel: `IRR(values, [guess])`.

---

## Why IRR can mislead — three traps

> [!warning] 1. IRR measures profit*ability*, NPV measures profit
> A project returning 300% on \$1 (IRR = 3.0) creates \$3 of value; a project returning 30% on $100{,}000 creates $30{,}000. IRR ranks the first higher, but NPV — and your bank balance — prefer the second. **For mutually exclusive projects, rank by NPV, not IRR.**

> [!warning] 2. Multiple IRRs
> When cash flows change sign more than once (e.g. outflow → inflow → outflow), the polynomial $NPV(r) = 0$ can have several roots. The cash flow $(-9450, 19500, -10000)$ has **two** IRRs (≈ −4.8% and ≈ 11.1%). Excel returns whichever is nearest your `guess`, so the answer is ambiguous — fall back to NPV.

![[L2_multiple_irr.png]]

> [!warning] 3. The reinvestment assumption
> IRR implicitly assumes every interim cash flow is reinvested at the IRR itself. For a high-IRR project that is unrealistic — you rarely have other projects yielding the same high rate. NPV assumes reinvestment at the cost of capital $r$, which is the economically correct benchmark.

---

## NPV vs IRR — when do they agree?

| Situation | NPV | IRR | Use |
|---|---|---|---|
| Single project, conventional CFs | accept if $>0$ | accept if $> r$ | agree |
| Mutually exclusive projects | rank by $\$$ created | can mis-rank (scale/timing) | **NPV** |
| Non-conventional CFs (sign changes) | one clear answer | multiple/none | **NPV** |
| Comparing very different scales | correct | biased to small projects | **NPV** |

> [!tip] One-line verdict
> When NPV and IRR disagree, **trust NPV.** IRR is a useful communication tool (a percentage return) but NPV is the decision rule because it measures dollars of value added and uses the right reinvestment rate.

---

## The class workbooks, sheet by sheet

The NPV and IRR sheets appear in both the PEC-I (4 April) and PEC-II (24 April) workbooks; they are identical.

- **`NPV`:** a project costing 1,000 with inflows 100, 200, 300, 300, 300 (years 1 to 5) at $r = 6\%$. PV of the inflows 986.03, so `=SUM(B8:B9)` gives **NPV = −13.97**. The same answer comes from `=NPV(B3,C5:G5)+B5`. Note the pattern: Excel's `NPV` starts discounting at year 1, so the $t=0$ flow is added outside it. A table then recomputes the NPV for $r$ from 0% upwards (200 at 0%, 17.66 at 5%, …): plotting it gives the NPV profile.
- **`IRR`:** the same project's `=IRR(B5:G5)` = **5.55%**, just below the 6% cost of capital, which is why the NPV was slightly negative.
- **`NPV vs IRR`:** the three traps from this lesson, each with numbers.
  1. *IRR measures profitability, NPV measures profit.* A: −1 then +4 (IRR 300%). B: −100,000 then +130,000 (IRR 30%). A has the higher IRR but B creates far more value.
  2. *Multiple IRRs.* Cash flows −9,450, +19,500, −10,000 change sign twice. `=IRR(B11:D11,30%)` = 11.11% and `=IRR(B11:D11,-30%)` = −4.76%: the guess decides which root Excel finds. The NPV table over $r$ from −10% upwards shows the profile crossing zero twice.
  3. *Reinvestment assumption.* At $r = 10\%$: A is −100, +150, 0 (NPV 36.36, IRR 50%); B is −100, 0, +180 (NPV 48.76, IRR 34.16%). IRR ranks A first, NPV ranks B first. Row A′ reinvests A's 150 at its own 50% (`=C47*(1+G47)` = 225 at year 2) and still shows a 50% IRR: IRR silently assumes that reinvestment. Row A″ reinvests at the 10% cost of capital (165 at year 2), and its NPV is unchanged at 36.36: NPV assumes reinvestment at $r$, which is the realistic assumption.

---

## Summary

> [!success] Key takeaways
> - Perpetuity $= C/r$; growing perpetuity $= C/(r-g)$, valid only when $r > g$. ^summary
> - NPV discounts every cash flow to today; **accept if NPV > 0**. Mind Excel's `NPV` off-by-one — add $CF_0$ separately.
> - IRR is the rate where NPV = 0; **accept if IRR > r**.
> - IRR's three traps: profitability ≠ profit, multiple IRRs with sign changes, and an unrealistic reinvestment assumption.
> - When the two rules conflict, **NPV wins**.

---

## Related Notes

- [[Lesson_01-Time Value of Money]] — annuities (the finite version of perpetuities) and the PV machinery
- [[Lesson_03-Rate Conversion, Effective Rates & EAC]] — profitability index & EAC for ranking under constraints
- [[Lesson_06-Capital Budgeting & Free Cash Flow]] — getting the $CF_t$ that go *into* NPV right
- [[HW_02-NPV, IRR & Project Choice]] — problem set on NPV vs IRR ranking
- [[Financial Management]] — subject hub
