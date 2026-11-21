---
title: "Capital Budgeting & Free Cash Flow"
week: 6
semester: 2
year: 1
academic_year: "2024-25"
course: Financial Management & Finance
lecture: "Lesson 6 — Cashflows & Capital Budgeting"
date: 2026-06-05
tags:
  - financial-management
  - free-cash-flow
  - capital-budgeting
  - depreciation
  - working-capital
aliases:
  - FM Lesson 6
  - Free Cash Flow
  - Capital Budgeting
  - FCF
subject: fundamentals-of-finance
in_scope: true
---

# Capital Budgeting & Free Cash Flow

> Part of: [[Financial Management]]
> **Lesson 6** — Financial Management & Finance
> Key concepts: [[Free Cash Flow]], [[Capital Budgeting]], [[Depreciation]], [[Working Capital]], [[Opportunity Cost]]

---

## The goal: get the right $CF_t$ into the NPV

[[Lesson_02-Perpetuities, NPV & IRR|NPV]] is only as good as the cash flows you feed it. This lesson is the discipline of building project ==Free Cash Flow== correctly. The headline mantra: **Cash is King** — we discount *cash*, not accounting profit.

---

## The FCF build (top to bottom)

> [!info] From sales to free cash flow
> ```
>   Sales
> − Cost of goods sold, SG&A, Marketing, R&D
> ± Synergies / Cannibalization
> = EBITDA
> − Depreciation & Amortization
> = EBIT (operating profit)
> − Tax (on EBIT)
> = NOPAT
> + Add back Depreciation        (non-cash)
> − CAPEX
> − Increase in Working Capital
> + Salvage proceeds (after capital-gains tax)
> = Free Cash Flow
> ```

$$\boxed{FCF_t = \underbrace{(EBIT_t)(1-\tau)}_{NOPAT} + Dep_t - CAPEX_t - \Delta WC_t}$$ ^fcf-formula

![[L6_fcf_profile.png]]

---

## The five principles

### 1. Cash is King

Discount cash, not profit. Accounting items that aren't cash (like depreciation) must be handled carefully — see principle 4.

### 2. Only marginal effects

$$\text{Value} = (\text{Company with project}) - (\text{Company without project})$$

> [!warning] What "marginal" rules in and out
> - **Ignore sunk costs** — money already spent and unrecoverable is irrelevant to the decision. (R&D spent before the go/no-go is sunk.)
> - **Inspect overhead allocations** — only include extra overhead the project actually *causes* (new hires, overtime, electricity), not an arbitrary share of head-office cost.
> - **Do NOT ignore synergies / cannibalization** — a new conditioner may *boost* shampoo sales (synergy, +) but *eat into* other conditioners (cannibalization, −). Both are real marginal effects.

### 3. Opportunity cost

> [!info] Using a resource you already own isn't free
> The cost of deploying a resource = its **best alternative use**. Building on land you own still "costs" the rent or sale price you forgo. Always charge the project the opportunity cost.

### 4. Separate financing from investment

> [!warning] Ignore interest on loans
> Evaluate the project **as if fully equity-financed** — exclude interest and loan repayments from the cash flows. The cost of debt is already captured in the discount rate $r$ (the cost of capital). Mixing financing into the cash flows double-counts it.

### 5. Depreciation is not cash — but don't ignore it

Depreciation is a non-cash expense, yet it matters because it is **tax-deductible**. The trick is the *depreciation tax shield*: you subtract depreciation to compute taxable EBIT, then **add it back** after tax because no cash actually left.

$$\text{Straight-line depreciation} = \frac{CAPEX - \text{Salvage}}{\text{useful life}}$$ ^depreciation

> [!example] Tax shield in action
> CAPEX $120k, salvage 0, 10-yr life → depreciation $= 12{,}000$/yr. With EBITDA $= 50{,}000$ and 25% tax:
> EBIT $= 50{,}000 - 12{,}000 = 38{,}000$; tax $= 9{,}500$; NOPAT $= 28{,}500$; add back $12{,}000$ depreciation → **FCF $= 40{,}500$**/yr. The depreciation saved $0.25\times 12{,}000 = \$3{,}000$ of tax even though it isn't a cash cost.

---

## Tax with losses, working capital & terminal value

> [!tip] Tax when profit is negative
> In this course we assume **symmetric** tax: positive profit is taxed; a loss generates an immediate tax *saving* (negative tax). So a year with EBIT $= -22{,}000$ at 25% gives $+5{,}500$ of tax benefit.

> [!info] Working capital
> An increase in net working capital (inventory, receivables) **ties up cash** → a negative cash flow when it rises, recovered (positive) when the project winds down. Always model $\Delta WC$, and recover the cumulative WC at the end.

> [!info] Terminal / salvage value
> When the project ends and assets are sold, add the sale proceeds, **less capital-gains tax** (20% in the course) on any gain above book value.

---

## Summary

> [!success] Key takeaways
> - $FCF = EBIT(1-\tau) + \text{Depreciation} - CAPEX - \Delta WC$ (+ after-tax salvage at the end). ^summary
> - **Cash is king** — discount cash, never accounting profit.
> - Count only **marginal** effects: ignore sunk costs, include synergies/cannibalization and opportunity cost.
> - **Separate financing from investment** — value as if all-equity; the discount rate carries the cost of debt.
> - Depreciation isn't cash but its **tax shield** is — subtract it for tax, add it back after.
> - Model working-capital changes and after-tax terminal value.

---

## Related Notes

- [[Lesson_02-Perpetuities, NPV & IRR]] — the NPV these cash flows feed into
- [[Lesson_05-The Four Loan Types]] — why we strip financing out (it lives in $r$)
- [[HW_07-Free Cash Flow & Project NPV]] — full FCF problem set with WC, opportunity cost & tax shields
- [[Financial Management]] — subject hub
