---
title: "Sample Final B — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Sample Final Exam B (mock)"
course: "Accounting & Financial Essentials for Entrepreneurs"
instructor: "Mock paper — built from course content"
semester: 2
year: 2026
tags:
  - accounting
  - past-paper
  - worked-solution
  - journal-entries
  - deferred-revenue
  - depreciation
  - stock-options
  - black-scholes
  - revenue-recognition
  - asc-606
aliases:
  - Sample Final B
  - Accounting Mock Exam B
  - Accounting Sample Exam B
subject: accounting
in_scope: true
questions:
  - id: q1
    title: "Q1 — Full accounting cycle with deferred revenue & a disposal (40 pts)"
    text: |
      **Brightwave Ltd** is incorporated on **1 January 2025**. During its first year:

      1. **1 Jan** — Founders contribute **$150,000** cash for **150,000** common shares (**$0.10 par**).
      2. **1 Jan** — Buy office equipment for **$24,000** cash; **4-year** life, straight-line, no salvage.
      3. **1 Jan** — Buy a delivery van for **$8,000** cash; **4-year** life, straight-line, no salvage.
      4. **1 Apr** — A customer pays **$60,000 in advance** for a **12-month** service contract (Apr 2025 – Mar 2026).
      5. **1 Oct** — Sell the van for **$6,000** cash.
      6. **1 Jan** — Draw an **$80,000** bank loan at **5% p.a.**; interest paid each **1 January** for the prior year, principal a **bullet**.
      7. Rent is **$3,000/month**, paid on the 1st. Payroll is **$8,000/month**, accrued at month-end and paid the 5th of the next month.
      8. Other services delivered (invoiced Net 30) total **$70,000**; **$50,000** is collected by year-end.

      Required: **(a)** the key journal entries (including the van disposal), **(b)** the Income Statement, **(c)** the Balance Sheet at 31 Dec 2025, and **(d)** the current ratio, quick ratio, debt-to-equity and net profit margin.
    solution: |
      > Same cycle as Sample A, but adds **[[Deferred Revenue|deferred revenue]]** (a prepayment received) and an **asset disposal** at a loss. Theory: [[Session 2 - Accounting Fundamentals]] and [[Session 8 - Revenue Recognition]].

      ### (a) Key journal entries

      | Date | Account | Dr ($) | Cr ($) |
      |------|---------|------:|------:|
      | 1 Jan | Cash | 150,000 | |
      | | &emsp;Common Stock (150,000 × $0.10) | | 15,000 |
      | | &emsp;APIC — Common | | 135,000 |
      | 1 Jan | Equipment | 24,000 | |
      | | Vehicle | 8,000 | |
      | | &emsp;Cash | | 32,000 |
      | 1 Jan | Cash | 80,000 | |
      | | &emsp;Loan Payable | | 80,000 |
      | 1 Apr | Cash | 60,000 | |
      | | &emsp;Deferred Revenue | | 60,000 |
      | | *Paid in advance → a liability until earned* | | |
      | 1 Oct | Cash | 6,000 | |
      | | Accumulated Depreciation — Vehicle | 1,500 | |
      | | Loss on Disposal | 500 | |
      | | &emsp;Vehicle | | 8,000 |
      | | *Derecognise the van; NBV 6,500 − proceeds 6,000 = 500 loss* | | |

      **Year-end adjusting entries:**

      | Adjustment | Debit | Credit | Calculation |
      |---|---|---|---|
      | Depreciation — equipment | Depreciation Exp $6,000 | Accum. Dep $6,000 | $24,000 ÷ 4, full year |
      | Depreciation — van (to disposal) | Depreciation Exp $1,500 | Accum. Dep $1,500 | $8,000 ÷ 4 × 9/12 |
      | Earn deferred revenue | Deferred Revenue $45,000 | Service Revenue $45,000 | $60,000 × 9/12 (Apr–Dec) |
      | Recognise delivered services | Accounts Receivable $70,000 | Service Revenue $70,000 | on delivery, Net 30 |
      | Accrue interest | Interest Exp $4,000 | Interest Payable $4,000 | $80,000 × 5%, full year |
      | Accrue Dec payroll | Payroll Exp $8,000 | Accrued Payroll $8,000 | paid 5 Jan 2026 |

      > [!tip] The disposal, unpacked
      > The van was depreciated **9 months** (Jan–Sep): $8,000 ÷ 4 × 9/12 = **$1,500**, so its **net book value is $6,500**. Sold for $6,000 → a **$500 loss**. To remove it you credit the asset at full cost ($8,000) and clear its accumulated depreciation ($1,500).

      ### (b) Income Statement — year ended 31 Dec 2025

      > [!example] BRIGHTWAVE LTD — Income Statement 2025
      > | | Amount | Basis |
      > |---|---:|---|
      > | Service Revenue | 115,000 | $45,000 earned + $70,000 delivered |
      > | Payroll Expense | (96,000) | $8,000 × 12 |
      > | Rent Expense | (36,000) | $3,000 × 12 |
      > | Depreciation Expense | (7,500) | $6,000 + $1,500 |
      > | **Operating Loss** | **(24,500)** | |
      > | Loss on Disposal | (500) | van |
      > | Interest Expense | (4,000) | full-year accrual |
      > | **NET LOSS** | **(29,000)** | → Accumulated Deficit |

      *A loss year means no current tax (and no deferred-tax asset is assumed).*

      ### (c) Balance Sheet at 31 Dec 2025

      **Cash** = 150,000 + 60,000 + 80,000 + 6,000 + 50,000 (in) − 24,000 − 8,000 − 36,000 − 88,000 (out) = **$190,000**. (11 payroll runs paid; interest paid in 2026; the van is gone.)

      > [!example] BRIGHTWAVE LTD — Balance Sheet, 31 Dec 2025
      > | | Amount |
      > |---|---:|
      > | **Current Assets** | |
      > | &emsp;Cash | 190,000 |
      > | &emsp;Accounts Receivable | 20,000 |
      > | **Non-Current Assets** | |
      > | &emsp;Equipment, at cost | 24,000 |
      > | &emsp;Less: accumulated depreciation | (6,000) |
      > | &emsp;Equipment, net book value | 18,000 |
      > | **TOTAL ASSETS** | **228,000** |
      > | **Current Liabilities** | |
      > | &emsp;Deferred Revenue | 15,000 |
      > | &emsp;Accrued Payroll Payable | 8,000 |
      > | &emsp;Interest Payable | 4,000 |
      > | **Non-Current Liabilities** | |
      > | &emsp;Loan Payable | 80,000 |
      > | **TOTAL LIABILITIES** | **107,000** |
      > | **Shareholders' Equity** | |
      > | &emsp;Common Stock (par) | 15,000 |
      > | &emsp;APIC — Common | 135,000 |
      > | &emsp;Accumulated Deficit | (29,000) |
      > | **TOTAL EQUITY** | **121,000** |
      > | **TOTAL LIAB. + EQUITY** | **228,000** ✓ |

      ### (d) Ratios

      | Ratio | Working | Value |
      |---|---|---:|
      | [[Current Ratio\|Current ratio]] | 210,000 ÷ 27,000 | **7.78** |
      | [[Quick Ratio\|Quick ratio]] | 210,000 ÷ 27,000 | **7.78** |
      | Debt-to-equity | 80,000 ÷ 121,000 | **0.66** |
      | Net profit margin | (29,000) ÷ 115,000 | **−25.2%** |

      *Current liabilities = deferred revenue 15,000 + accrued payroll 8,000 + interest payable 4,000 = $27,000; the loan is non-current. With no inventory or prepaids, the quick and current ratios coincide here.*

      > [!warning] The $15,000 deferred revenue is a liability, not revenue
      > Only **9 of the 12 months** of the advance contract have been earned by year-end, so **$45,000** is revenue and the remaining **$15,000** sits as a liability — the company still owes three months of service. Recognising the full $60,000 would overstate revenue.
    related_terms:
      - double-entry-bookkeeping
      - income-statement
      - balance-sheet
      - deferred-revenue
      - depreciation
      - current-ratio
      - quick-ratio
  - id: q2
    title: "Q2 — Employee stock options: valuation & expense (15 pts)"
    text: |
      On **1 January 2025**, **Brightwave Ltd** grants an employee **20,000 stock options**, exercisable at **$15** (the current share price, i.e. at-the-money), vesting straight-line over **4 years**. Assume a risk-free rate of **4%**, volatility of **50%**, no dividends, and an expected term of **4 years**.

      Required: value one option under **Black-Scholes**, state the total grant-date fair value, explain what is recorded **at grant**, and compute the **2025 compensation expense** with its journal entry.
    solution: |
      > Governed by ASC 718 / IFRS 2. Theory: [[Session 4 - Incorporation, Corporate Taxes & Employee Compensation]]; same pattern as [[Session 9 - Recap]] Ex. 6 and Assignment 2.

      **Black-Scholes inputs:** $S = K = 15$, $r = 0.04$, $\sigma = 0.50$, $q = 0$, $T = 4$.

      $$d_1 = \frac{\ln(S/K) + (r + \sigma^2/2)T}{\sigma\sqrt{T}} = \frac{0 + (0.04 + 0.125)(4)}{0.50\sqrt{4}} = \frac{0.66}{1.00} = 0.66$$

      $$d_2 = d_1 - \sigma\sqrt{T} = 0.66 - 1.00 = -0.34$$

      From the standard-normal table, $N(0.66) = 0.7454$ and $N(-0.34) = 0.3669$:

      $$C = S\,N(d_1) - K e^{-rT} N(d_2) = 15(0.7454) - 15\,e^{-0.16}(0.3669) \approx 11.18 - 4.69 = \boxed{\$6.49 \text{ per option}}$$

      → Total grant-date fair value = 20,000 × $6.49 = **≈ $129,800**.

      > [!warning] Nothing is recorded on the grant date
      > The grant date is only the **measurement date** — it fixes the $6.49 fair value. **No journal entry** is made. The cost is recognised as the employee earns it over the [[Vesting|vesting]] period.

      **2025 compensation expense** — straight-line over 4 years; 2025 is a full year from the 1 Jan grant:

      $$\frac{\$129{,}800}{4} = \boxed{\$32{,}450 \text{ for 2025}}$$

      | Entry (each period over vesting) | Dr | Cr |
      |---|---:|---:|
      | Stock-Based Compensation Expense | 32,450 | |
      | &emsp;APIC — Stock Options (equity) | | 32,450 |

      > [!tip] The credit is equity, not a liability
      > Because Brightwave will settle by delivering **shares**, the offset goes to **APIC — Stock Options**, not a payable. Equity-settled awards never create a liability.

      > [!tip] 🗣️ In plain English
      > The options are worth about **$6.49 each on the day they're granted** — but the company doesn't book anything yet. It spreads that ~$129,800 cost evenly across the four years the employee has to stick around to earn them, so **2025 takes a quarter of it**.
    related_terms:
      - stock-options
      - black-scholes-model
      - vesting
  - id: q3
    title: "Q3 — Revenue recognition: allocating a bundled contract (15 pts)"
    text: |
      On **1 October 2025**, **SoftCo** signs a **$120,000** contract that bundles two things: a **perpetual software licence** (standalone selling price **$100,000**) and **12 months of hosting & support** (standalone selling price **$50,000**). The licence is delivered (downloaded) immediately; hosting runs Oct 2025 – Sep 2026.

      Required: work through the **five-step ASC 606 / IFRS 15 model**, **allocate** the transaction price, and state **how much revenue** SoftCo recognises in **2025** and how much is deferred.
    solution: |
      > The five-step model, applied to a bundle with a point-in-time and an over-time obligation. Theory: [[Session 8 - Revenue Recognition]].

      | Step | Applied to SoftCo |
      |---|---|
      | **1. Identify the contract** | A single $120,000 contract with enforceable rights. |
      | **2. Identify performance obligations** | **Two** distinct obligations: the licence and the hosting/support. The licence is usable on its own, so it is [[Performance Obligation\|distinct]]. |
      | **3. Determine the transaction price** | **$120,000** (fixed; no variable consideration). |
      | **4. Allocate by relative [[Standalone Selling Price\|SSP]]** | Total SSP = $150,000. Licence = 120,000 × (100/150) = **$80,000**; Hosting = 120,000 × (50/150) = **$40,000**. |
      | **5. Recognise as control transfers** | Licence **at a point in time** (on download); hosting **over time**, ratably across 12 months. |

      **Revenue in 2025:**

      | Obligation | Amount | Timing | 2025 revenue |
      |---|---:|---|---:|
      | Licence | 80,000 | point in time (Oct) | **80,000** |
      | Hosting & support | 40,000 | over 12 months | 40,000 × 3/12 = **10,000** |
      | **Total recognised in 2025** | | | **90,000** |
      | **Deferred to 2026** | | | **30,000** |

      $$\text{2025 revenue} = \$80{,}000 + \$40{,}000 \times \tfrac{3}{12} = \$90{,}000; \quad \text{deferred} = \$30{,}000$$

      > [!warning] Don't recognise the whole $120,000 up front
      > Even though all the cash is billed at signing, only the **licence ($80,000)** and **three months of hosting ($10,000)** are earned in 2025. The other **$30,000** is a [[Deferred Revenue|contract liability]] until the hosting is delivered.

      > [!tip] The pivotal judgement
      > If the licence **could not function without** the mandatory hosting (highly integrated), the two would collapse into a **single** obligation recognised **over time**. Here the licence is a downloadable perpetual product the customer can use on its own, so it is **distinct** and recognised at a point in time.
    related_terms:
      - revenue-recognition
      - performance-obligation
      - standalone-selling-price
      - transfer-of-control
      - deferred-revenue
  - id: q4
    title: "Q4 — True/False with explanation (30 pts)"
    text: |
      For each of the following 10 statements, indicate whether it is **True** or **False** and give a one-line justification. (3 points each.)

      1. Deferred (unearned) revenue is a liability, not revenue, until the good or service is delivered.
      2. A favourable price variance always means the purchasing department performed well.
      3. EBITDA is a reliable proxy for cash flow because it always equals cash generated from operations.
      4. Under the matching principle, expenses are recognised in the same period as the revenues they help generate.
      5. Non-controlling interest (NCI) is reported within equity on the consolidated balance sheet.
      6. Prepaid insurance is recorded as an expense in full at the time of payment.
      7. A liquidation preference gives preferred shareholders the right to receive their capital back before common shareholders in an exit.
      8. The Rule of 40 says a healthy software company's revenue growth rate plus its profit margin should be at least 40%.
      9. Transfer pricing refers to the price charged on transactions between two independent, unrelated companies.
      10. In a bullet loan, the entire principal is repaid at maturity rather than in periodic instalments.
    solution: |
      > A second spread of concepts, weighted toward [[Session 6-Financial Planning and Analysis|FP&A]] (variance, transfer pricing) and statement analysis.

      1. **TRUE.** Cash received before delivery is a **contract liability** ([[Deferred Revenue|deferred revenue]]); it becomes revenue only as the good/service is delivered.

      2. **FALSE.** A favourable [[Price Variance|price variance]] can reflect lower-quality inputs, bulk-buying that inflates inventory, or a timing quirk — read it **alongside the quantity/usage variance** before judging performance.

      3. **FALSE.** [[EBITDA]] ignores changes in working capital, capex, interest and tax, so it can differ sharply from operating cash flow — a profitable-looking EBITDA can sit on **negative** cash generation.

      4. **TRUE.** The [[Matching Principle|matching principle]] pairs expenses with the revenues they produce in the **same period**, regardless of when cash moves.

      5. **TRUE.** [[Non-Controlling Interest|NCI]] represents the minority owners' share of a subsidiary and is presented **within consolidated equity**, separate from the parent's equity.

      6. **FALSE.** [[Prepaid Expenses|Prepaid insurance]] is an **asset** at payment; it is expensed over the coverage period as the benefit is consumed.

      7. **TRUE.** A [[Liquidation Preference|liquidation preference]] is the defining right of [[Preferred Stock|preferred stock]] — capital back **ahead of** common in a sale or wind-up.

      8. **TRUE.** The [[Rule of 40]] holds that **growth % + profit (or EBITDA) margin % ≥ 40%** marks a healthy SaaS business, balancing growth against profitability.

      9. **FALSE.** [[Transfer Pricing|Transfer pricing]] is the price on transactions **between related entities** within the same group (e.g. two divisions or subsidiaries), not between independent firms.

      10. **TRUE.** A **bullet** loan repays **all principal at maturity**; only interest is paid in the interim (contrast with an amortising loan's periodic principal instalments).

      > [!tip] How this question is marked
      > As in Sample A, the **justification carries the marks**. State the reason, not just the verdict — e.g. "False — transfer pricing is between *related* entities, not independent ones."
    related_terms:
      - deferred-revenue
      - variance-analysis
      - price-variance
      - ebitda
      - matching-principle
      - non-controlling-interest
      - prepaid-expenses
      - liquidation-preference
      - rule-of-40
      - transfer-pricing
---

> [!info] About this mock
> A second full **3-hour** practice paper in the exam format — **Q1 (40)**, **Q2 & Q3 (15 each)**, **Q4 (30)** — with **different scenarios** from [[Sample Final A]] so the two together cover the syllabus. Q1 adds **deferred revenue** and an **asset disposal**; Q2 values stock options; Q3 walks the five-step revenue model. Designed to be worked **by hand**. Reveal each answer with **Show solution**.

<!--questions-->

## How the marks map to the syllabus

| Question | Topic | Sessions |
|---|---|---|
| Q1 | Accounting cycle, deferred revenue, disposal, ratios | [[Session 2 - Accounting Fundamentals]], [[Session 8 - Revenue Recognition]] |
| Q2 | Stock-option valuation & expensing | [[Session 4 - Incorporation, Corporate Taxes & Employee Compensation]] |
| Q3 | Revenue recognition (ASC 606 five-step) | [[Session 8 - Revenue Recognition]] |
| Q4 | Concepts across the whole course (FP&A-weighted) | all sessions |

## Related Notes

- [[Accounting]] — subject hub
- [[Session 9 - Recap]] — 13 worked exam-style exercises
- [[Sample Final A]] — the companion mock exam
