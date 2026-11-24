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

> [!info] Class workbook (download)
> - [2025.06.05 Eighth class (Capital budgeting, CFs).xlsx](/papers/fundamentals-of-finance/class-2025-06-05-eighth-class-capital-budgeting-cfs.xlsx)
>
> What each part does: [[#The class workbook, rule by rule|see below]].

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
> CAPEX \$120k, salvage 0, 10-yr life → depreciation $= 12{,}000$/yr. With EBITDA $= 50{,}000$ and 25% tax:
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

## The class workbook, rule by rule

The 5 June 2025 workbook is one sheet that walks through the ten rules for building cash flows, with small numerical examples.

1. **Cash is king:** the template from sales down to EBITDA, EBIT, NOPAT, then the four adjustments (less CAPEX, add back depreciation, plus proceeds from selling fixed assets, less tax on capital gains) and the investment in working capital, ending in free cash flow.
2. **Only the marginal effect:** ignore sunk costs, inspect overhead allocations, include synergies and cannibalisation, and charge the opportunity cost of using a resource. Mini example: cancelling gives a loss of 2; continuing earns 0.5 but costs 2.1, a loss of only 1.6, so continue (the cost already incurred is irrelevant to the comparison).
3. **Separate financing from investment:** ignore interest; assume the project is fully equity-funded.
4. **Depreciation is not a cash flow, but it matters for tax.** CAPEX 120,000, no salvage, 10 years: `=(B42-B43)/B44` = 12,000 a year. With EBITDA 50,000: EBIT 38,000, tax at 25% 9,500, NOPAT 28,500, plus depreciation 12,000, so **FCF = 40,500** a year (and −120,000 at $t=0$). The depreciation's value is its tax shield, 25% × 12,000 = 3,000 a year.
5. **Don't forget the CAPEX.**
6. **Tax in this course:** a positive profit pays tax; a negative profit gets an immediate tax saving. With EBITDA of −10,000 and −20,000 in years 2 and 3, EBIT is −22,000 and −32,000, the "tax" is +5,500 and +8,000, and the FCF is −4,500 and −12,000.
7. **The end of the project:** sold after 6 years for 80,000. Book value `=120000-72000` = 48,000, capital gain 32,000, tax at 20% = 6,400. So the year-6 FCF includes +80,000 − 6,400.
8. **Working capital:** inventory + receivables − payables at each date (500, 1,000, 1,500, 1,000, 1,000, 1,000, 0). The cash flow is minus the **change**: −500, −500, −500, +500, 0, 0, **+1,000** (all recovered at the end). The full FCF row for the 6-year project: −120,500, 40,000, 40,000, 41,000, 40,500, 40,500, **115,100**.
9. **Be consistent:** real cash flows with real rates, nominal with nominal; the discount rate must match the project's risk.
10. **Then go back to the decision rules** of classes 2 and 3 (NPV, PI, EAC).

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
