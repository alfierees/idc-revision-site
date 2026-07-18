---
title: "Sample Final D — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Sample Final Exam D (mock)"
course: "Accounting & Financial Essentials for Entrepreneurs"
instructor: "Mock paper — built from course content"
semester: 2
year: 2026
tags:
  - accounting
  - past-paper
  - worked-solution
  - cash-flow-statement
  - accrued-income
  - variance-analysis
  - business-combination
  - goodwill
  - step-acquisition
aliases:
  - Sample Final D
  - Accounting Mock Exam D
  - Accounting Sample Exam D
subject: accounting
in_scope: true
questions:
  - id: q1
    title: "Q1 — Full cycle with interest income, accrued utilities & a cash flow statement (40 pts)"
    text: |
      **Summit Devices** is incorporated on **1 January 2025**. During its first year:

      1. **1 Jan** — Founders contribute **$500,000** cash for **500,000** common shares (**$0.01 par**). The company keeps its cash in a **4% p.a. interest-bearing account**; interest is paid each 1 January for the prior year.
      2. **1 Jan** — Buy equipment for **$60,000**; **5-year** life, straight-line, no salvage.
      3. **1 Jan** — Draw a **$200,000** bank loan at **6% p.a.** (bullet; interest paid each 1 January).
      4. Utilities: **$2,000/month** for **Jan–Nov** (each bill paid the following month); **December is estimated at $3,000** (accrued, paid Jan 2026).
      5. Salaries are **$84,000** for the year; December's **$7,000** is unpaid at year-end.
      6. Services delivered total **$180,000** (Net 30); **$150,000** is collected by year-end.
      7. Corporate tax rate is **23%**, paid the following year.

      Required: **(a)** the journal entries, **(b)** the Income Statement, **(c)** the Balance Sheet at 31 Dec 2025, and **(d)** a **Statement of Cash Flows** (indirect method) plus the current ratio and net margin.
    solution: |
      > New ground: **interest income** (the company *earns* interest, it doesn't just pay it), an **accrued utility estimate**, and a full **statement of cash flows**. Theory: [[Session 2 - Accounting Fundamentals]] and [[Session 5 - Financial Statements Analysis]].

      ### (a) Journal entries (tagged B/S / I/S)

      | Account | Dr ($) | Cr ($) | → |
      |---------|------:|------:|:--:|
      | Cash | 500,000 | | B/S |
      | &emsp;Common Stock (500,000 × $0.01) | | 5,000 | B/S |
      | &emsp;APIC — Common | | 495,000 | B/S |
      | Equipment | 60,000 | | B/S |
      | &emsp;Cash | | 60,000 | B/S |
      | Cash | 200,000 | | B/S |
      | &emsp;Loan Payable | | 200,000 | B/S |
      | Accounts Receivable / Cash | 180,000 | | B/S |
      | &emsp;Service Revenue | | 180,000 | **I/S** |

      **Year-end adjusting entries:**

      | Adjustment | Debit (→) | Credit (→) | Calculation |
      |---|---|---|---|
      | Depreciation | Depreciation Exp $12,000 · **I/S** | Accum. Dep $12,000 · **B/S** | $60,000 ÷ 5 |
      | Accrue salaries | Salary Exp $84,000 · **I/S** | Cash $77,000 · **B/S** + Accrued Salary $7,000 · **B/S** | Dec unpaid |
      | Accrue utilities | Utilities Exp $25,000 · **I/S** | Cash $22,000 · **B/S** + Accrued Utilities $3,000 · **B/S** | 11 × $2,000 + $3,000 est. |
      | Accrue interest income | Interest Receivable $16,000 · **B/S** | Interest Income $16,000 · **I/S** | $400,000 × 4%* |
      | Accrue interest expense | Interest Exp $12,000 · **I/S** | Interest Payable $12,000 · **B/S** | $200,000 × 6% |
      | Accrue tax | Tax Exp $14,490 · **I/S** | Tax Payable $14,490 · **B/S** | $63,000 × 23% |

      *\*Interest is earned on the deposit held through the year; here modelled on a $400,000 average balance. It is **earned but not yet received**, so it becomes an **asset** (Interest Receivable) — the mirror image of an accrued expense.*

      > [!tip] Interest income is the flip of interest expense
      > When you *earn* interest but haven't been paid, you debit an **asset** (Interest Receivable) and credit **Interest Income** (I/S). When the cash lands next January you debit Cash and clear the receivable — **no income** is recorded then, because it was already booked as it accrued.

      ### (b) Income Statement — year ended 31 Dec 2025

      > [!example] SUMMIT DEVICES — Income Statement 2025
      > | | Amount |
      > |---|---:|
      > | Service Revenue | 180,000 |
      > | Salaries | (84,000) |
      > | Utilities | (25,000) |
      > | Depreciation | (12,000) |
      > | **Operating Income** | **59,000** |
      > | Interest Income | 16,000 |
      > | Interest Expense | (12,000) |
      > | **Pre-tax Income** | **63,000** |
      > | Tax @ 23% | (14,490) |
      > | **NET INCOME** | **48,510** |

      ### (c) Balance Sheet at 31 Dec 2025

      **Cash** = 500,000 + 200,000 + 150,000 (in) − 60,000 − 77,000 − 22,000 (out) = **$691,000**. (Interest income, interest expense and tax are all settled in 2026.)

      > [!example] SUMMIT DEVICES — Balance Sheet, 31 Dec 2025
      > | | Amount |
      > |---|---:|
      > | **Current Assets** | |
      > | &emsp;Cash & cash equivalents | 691,000 |
      > | &emsp;Interest Receivable | 16,000 |
      > | &emsp;Accounts Receivable | 30,000 |
      > | **Non-Current Assets** | |
      > | &emsp;Equipment, at cost | 60,000 |
      > | &emsp;Less: accumulated depreciation | (12,000) |
      > | &emsp;Equipment, net book value | 48,000 |
      > | **TOTAL ASSETS** | **785,000** |
      > | **Current Liabilities** | |
      > | &emsp;Accrued Salary Payable | 7,000 |
      > | &emsp;Accrued Utilities Payable | 3,000 |
      > | &emsp;Interest Payable | 12,000 |
      > | &emsp;Tax Payable | 14,490 |
      > | **Non-Current Liabilities** | |
      > | &emsp;Loan Payable (bullet) | 200,000 |
      > | **TOTAL LIABILITIES** | **236,490** |
      > | **Shareholders' Equity** | |
      > | &emsp;Common Stock (par) | 5,000 |
      > | &emsp;APIC — Common | 495,000 |
      > | &emsp;Retained Earnings | 48,510 |
      > | **TOTAL EQUITY** | **548,510** |
      > | **TOTAL LIAB. + EQUITY** | **785,000** ✓ |

      ### (d) Statement of Cash Flows (indirect method)

      Start from net income, add back non-cash items (depreciation), then adjust for the year's change in each working-capital account:

      > [!example] SUMMIT DEVICES — Statement of Cash Flows 2025
      > | | Amount |
      > |---|---:|
      > | Net income | 48,510 |
      > | + Depreciation (non-cash) | 12,000 |
      > | − Increase in Interest Receivable | (16,000) |
      > | − Increase in Accounts Receivable | (30,000) |
      > | + Increase in Accrued Salary | 7,000 |
      > | + Increase in Accrued Utilities | 3,000 |
      > | + Increase in Interest Payable | 12,000 |
      > | + Increase in Tax Payable | 14,490 |
      > | **Cash flow from operations** | **51,000** |
      > | Purchase of equipment | (60,000) |
      > | **Cash flow from investing** | **(60,000)** |
      > | Equity raised | 500,000 |
      > | Loan drawn | 200,000 |
      > | **Cash flow from financing** | **700,000** |
      > | **Net change in cash** | **691,000** |
      > | **Closing cash** | **691,000** ✓ |

      > [!tip] Why start from profit and adjust?
      > Net income is on an **accrual** basis; the cash flow statement converts it back to **cash**. Add back **depreciation** (an expense that used no cash). Then, an **asset going up** (receivables) used cash → subtract it; a **liability going up** (accruals, payables) delayed a cash payment → add it. The three sections must sum to the actual change in cash — here **$691,000**, matching the balance sheet. Direct check: cash from customers $150,000 − salaries $77,000 − utilities $22,000 = **$51,000** operating, same as above.

      **Ratios:** current ratio = 737,000 ÷ 36,490 = **20.2** (very liquid — freshly funded); net margin = 48,510 ÷ 180,000 = **27.0%**.
    related_terms:
      - double-entry-bookkeeping
      - income-statement
      - balance-sheet
      - cash-flows-statement
      - accrual-accounting
      - current-ratio
  - id: q2
    title: "Q2 — Variance analysis (15 pts)"
    text: |
      **Summit** uses standard costing for its main material. The **standard** is **2 kg per unit at $5.00/kg**. In the month it made **10,000 units** and actually used **21,000 kg** at **$4.80/kg**.

      Required: compute the **material price variance** and the **material usage (quantity) variance**, state whether each is favourable or unfavourable, reconcile them to the total variance, and explain what the pattern might mean.
    solution: |
      > Standard costing splits the gap between budget and actual into a **price** effect and a **usage** effect. Theory: [[Session 6-Financial Planning and Analysis]] (FP&A).

      **Set up the benchmarks:**
      - Standard quantity for actual output = 2 kg × 10,000 units = **20,000 kg**; at $5.00 → **standard cost $100,000**.
      - Actual = 21,000 kg × $4.80 = **actual cost $100,800**.

      **Material price variance** — did we pay more or less *per kg* than standard, on what we actually bought?

      $$\text{MPV} = (\text{Std price} - \text{Act price}) \times \text{Act qty} = (5.00 - 4.80) \times 21{,}000 = \boxed{\$4{,}200 \text{ Favourable}}$$

      **Material usage variance** — did we use more or less *material* than standard allowed, priced at standard?

      $$\text{MUV} = (\text{Std qty} - \text{Act qty}) \times \text{Std price} = (20{,}000 - 21{,}000) \times 5.00 = \boxed{\$5{,}000 \text{ Unfavourable}}$$

      **Reconcile:**

      $$\$4{,}200\,\text{F} - \$5{,}000\,\text{U} = \$800\ \text{Unfavourable} = \underbrace{\$100{,}800}_{\text{actual}} - \underbrace{\$100{,}000}_{\text{standard}} \checkmark$$

      > [!tip] Read the two variances together — the classic trade-off
      > Price was **favourable** (paid $0.20/kg less) but usage was **unfavourable** (used 1,000 kg too much). A common story: the buyer sourced **cheaper, lower-quality material**, which then caused **more waste** in production. The $4,200 saved on price was more than lost to the $5,000 of extra usage — a **net $800 unfavourable**. This is exactly why you never judge a favourable price variance on its own.
    related_terms:
      - variance-analysis
      - price-variance
      - quantity-variance
      - standard-costing
  - id: q3
    title: "Q3 — Step acquisition: crossing to control (15 pts)"
    text: |
      On **1 January 2025**, **Summit** already owns **25%** of **Delta Ltd**, carried at **$500,000** under the equity method. On **1 July 2025** Summit buys a **further 50%** for **$1,200,000** cash, taking its stake to **75%** and gaining **control**. At that date: the fair value of the original 25% stake is **$600,000**, Delta's identifiable net assets have a fair value of **$1,800,000**, and the fair value of the 25% non-controlling interest is **$580,000**.

      Required: compute the **remeasurement gain** on the old stake and the **goodwill** (full method), give the journal entry, and explain the treatment.
    solution: |
      > A **step acquisition**: you cross from *influence* (equity method) to *control* (consolidation). The signature move is to **revalue your old stake to fair value** and run the gain through P&L, as if you sold and rebought it. Theory: [[Session 7 - Business Combination]]; same pattern as [[Session 9 - Recap]] Ex. 8.

      **Step 1 — remeasure the previously held 25% to fair value:**

      $$\text{Gain} = \underbrace{600{,}000}_{\text{fair value now}} - \underbrace{500{,}000}_{\text{carrying value}} = \boxed{\$100{,}000 \text{ gain to P\&L}}$$

      **Step 2 — goodwill (full method):** value the whole entity, including NCI, at fair value:

      | ($) | Amount |
      |---|---:|
      | Consideration for the new 50% | 1,200,000 |
      | + Fair value of the previously held 25% | 600,000 |
      | + Fair value of the 25% NCI | 580,000 |
      | **A — Total** | **2,380,000** |
      | − Net identifiable assets at fair value | (1,800,000) |
      | **Goodwill = A − B** | **580,000** |

      **Step 3 — journal entry** (remeasure first, then consolidate):

      | Account | Dr | Cr |
      |---|---:|---:|
      | Investment in Delta (step-up to FV) | 100,000 | |
      | &emsp;Gain on Remeasurement (P&L) | | 100,000 |
      | Identifiable net assets — at FV | 1,800,000 | |
      | Goodwill | 580,000 | |
      | &emsp;Cash (new consideration) | | 1,200,000 |
      | &emsp;Investment in Delta (old 25%, now at FV 600,000) | | 600,000 |
      | &emsp;Non-Controlling Interest (25%) | | 580,000 |

      *Check: debits 1,800,000 + 580,000 = **2,380,000** = credits 1,200,000 + 600,000 + 580,000.* ✓

      > [!tip] The three things that happen at once
      > **(1)** The old 25% is remeasured to fair value → **$100,000 gain** hits the P&L. **(2)** That fair value ($600,000) becomes part of the consideration used to compute **goodwill** ($580,000). **(3)** The 25% you *don't* own is recognised as **NCI** ($580,000) in equity. Goodwill is then **impairment-tested, not amortised**, and Delta's post-acquisition profit is split 75% / 25%.
    related_terms:
      - business-combination
      - acquisition-method
      - goodwill
      - non-controlling-interest
      - equity-method
      - fair-value
  - id: q4
    title: "Q4 — True/False with explanation (30 pts)"
    text: |
      For each statement, indicate **True** or **False** and give a one-line justification. (3 points each.)

      1. In the indirect-method cash flow statement, depreciation is added back to net income because it is a non-cash expense.
      2. An unfavourable material usage variance means the company used more material than the standard allowed.
      3. Interest earned on a bank deposit but not yet received is recorded as interest income and an interest receivable.
      4. Purchasing equipment for cash is classified as an operating activity in the cash flow statement.
      5. In a step acquisition, the previously held stake is remeasured to fair value when control is obtained, with any gain or loss going to profit or loss.
      6. A favourable price variance combined with an unfavourable usage variance can arise from buying cheaper, lower-quality materials.
      7. Issuing shares to investors for cash is a financing activity.
      8. A statement of cash flows has three sections: operating, investing and financing.
      9. An increase in accounts receivable during the year increases operating cash flow.
      10. Retained earnings appears as a line on the income statement.
    solution: |
      1. **TRUE.** [[Depreciation]] reduced net income but used **no cash**, so the indirect [[Cash Flows Statement|cash flow statement]] adds it back to get to operating cash.

      2. **TRUE.** An **unfavourable** usage variance means **actual quantity > standard quantity** — more material consumed than the standard allowed for that output.

      3. **TRUE.** Under [[Accrual Accounting|accrual accounting]], interest **earned but not received** is income now, with a matching **interest receivable** asset. (The mirror image of an accrued expense.)

      4. **FALSE.** Buying equipment is an **investing** activity, not operating. Operating covers the day-to-day trading cash flows.

      5. **TRUE.** The signature move of a **step acquisition**: revalue the old stake to fair value at the date control is obtained and run the **gain or loss through P&L**.

      6. **TRUE.** Cheaper (favourable price) but poorer material often causes more **waste** (unfavourable usage) — the classic variance trade-off, so never read a favourable price variance alone.

      7. **TRUE.** Raising money from owners (or lenders) is a **financing** activity in the cash flow statement.

      8. **TRUE.** The three sections are **operating, investing and financing**, and together they explain the change in cash.

      9. **FALSE.** An increase in receivables means revenue was booked but **cash not yet collected**, so it **reduces** operating cash flow (a working-capital *use* of cash).

      10. **FALSE.** [[ROE|Retained earnings]] is an **equity** line on the **balance sheet**. The income statement ends at **net income**, which then flows *into* retained earnings.

      > [!tip] How this is marked
      > The **justification** earns the marks — e.g. "False — buying equipment is an investing activity," not just "False."
    related_terms:
      - depreciation
      - cash-flows-statement
      - accrual-accounting
      - variance-analysis
      - business-combination
      - roe
---

> [!info] About this mock
> A fourth full **3-hour** practice paper — **Q1 (40)**, **Q2 & Q3 (15 each)**, **Q4 (30)** — testing what the earlier mocks left out: **interest income**, **accrued utilities**, a full **statement of cash flows**, **variance analysis** (FP&A), and a **step acquisition**. Built to be worked **by hand**. Reveal each answer with **Show solution**.

<!--questions-->

## How the marks map to the syllabus

| Question | Topic | Sessions |
|---|---|---|
| Q1 | Interest income, accruals, statements + cash flow statement | [[Session 2 - Accounting Fundamentals]], [[Session 5 - Financial Statements Analysis]] |
| Q2 | Variance analysis | [[Session 6-Financial Planning and Analysis]] |
| Q3 | Step acquisition (business combination) | [[Session 7 - Business Combination]] |
| Q4 | Concepts across the whole course | all sessions |

## Related Notes

- [[Accounting]] — subject hub
- [[Session 9 - Recap]] — 13 worked exam-style exercises
- [[Sample Final A]] · [[Sample Final B]] · [[Sample Final C]] — the companion mocks
