---
title: "Sample Final C — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Sample Final Exam C (mock)"
course: "Accounting & Financial Essentials for Entrepreneurs"
instructor: "Mock paper — built from course content"
semester: 2
year: 2026
tags:
  - accounting
  - past-paper
  - worked-solution
  - inventory
  - cost-of-goods-sold
  - dividends
  - dcf
  - equity-method
  - ratio-analysis
aliases:
  - Sample Final C
  - Accounting Mock Exam C
  - Accounting Sample Exam C
subject: accounting
in_scope: true
questions:
  - id: q1
    title: "Q1 — Full cycle: a goods retailer with inventory, COGS & a dividend (40 pts)"
    text: |
      **Northwind Traders** (a goods retailer) is incorporated on **1 January 2025**. During its first year:

      1. **1 Jan** — Founders contribute **$300,000** cash for **300,000** common shares (**$0.10 par**).
      2. **1 Jan** — Draw a **$120,000** bank loan at **10% p.a.**, repaid in **3 equal annual principal instalments of $40,000** starting **1 Jan 2026**; interest is paid each 1 January for the prior year.
      3. **1 Jan** — Buy store equipment for **$40,000**; **5-year** life, straight-line, no salvage.
      4. **1 Jul** — Pay **$24,000** for **12 months** of rent (Jul 2025 – Jun 2026).
      5. During the year — Buy **$180,000** of inventory for cash. Goods that **cost $150,000** are sold for **$260,000** (invoiced Net 30); **$220,000** is collected by year-end. Ending inventory is therefore **$30,000**.
      6. Salaries are **$60,000** for the year; December's **$5,000** is unpaid at year-end (accrued).
      7. **20 Dec** — Declare and pay a **$10,000** cash dividend.
      8. Corporate tax rate is **23%**, paid the following year.

      Required: **(a)** the headline journal entries (tag each B/S or I/S), **(b)** the Income Statement, **(c)** the Balance Sheet at 31 Dec 2025, and **(d)** gross margin, current ratio, quick ratio, inventory turnover, net margin and ROE.
    solution: |
      > New ground vs Samples A & B: **inventory → cost of goods sold** (so there's a real gross-profit line and gross margin), a **dividend** (a distribution, *not* an expense), and an **amortising loan** (part of which is now a current liability). Theory: [[Session 2 - Accounting Fundamentals]] and [[Session 5 - Financial Statements Analysis]].

      ### (a) Headline journal entries

      Tag each line **B/S** (asset/liability/equity → balance sheet) or **I/S** (revenue/expense → income statement).

      | Date | Account | Dr ($) | Cr ($) | → |
      |------|---------|------:|------:|:--:|
      | 1 Jan | Cash | 300,000 | | B/S |
      | | &emsp;Common Stock (300,000 × $0.10) | | 30,000 | B/S |
      | | &emsp;APIC — Common | | 270,000 | B/S |
      | 1 Jan | Cash | 120,000 | | B/S |
      | | &emsp;Loan Payable | | 120,000 | B/S |
      | 1 Jan | Equipment | 40,000 | | B/S |
      | | &emsp;Cash | | 40,000 | B/S |
      | 1 Jul | Prepaid Rent | 24,000 | | B/S |
      | | &emsp;Cash | | 24,000 | B/S |
      | year | Inventory | 180,000 | | B/S |
      | | &emsp;Cash | | 180,000 | B/S |
      | on sale | Accounts Receivable / Cash | 260,000 | | B/S |
      | | &emsp;Sales Revenue | | 260,000 | **I/S** |
      | on sale | Cost of Goods Sold | 150,000 | | **I/S** |
      | | &emsp;Inventory | | 150,000 | B/S |
      | 20 Dec | Dividends (equity) | 10,000 | | B/S |
      | | &emsp;Cash | | 10,000 | B/S |

      **Year-end adjusting entries:**

      | Adjustment | Debit (→) | Credit (→) | Calculation |
      |---|---|---|---|
      | Depreciation | Depreciation Exp $8,000 · **I/S** | Accum. Dep $8,000 · **B/S** | $40,000 ÷ 5 |
      | Rent used | Rent Exp $12,000 · **I/S** | Prepaid Rent $12,000 · **B/S** | $24,000 × 6/12 (Jul–Dec) |
      | Accrue Dec salary | Salary Exp $5,000 · **I/S** | Accrued Salary $5,000 · **B/S** | paid Jan 2026 |
      | Accrue interest | Interest Exp $12,000 · **I/S** | Interest Payable $12,000 · **B/S** | $120,000 × 10% |
      | Accrue tax | Tax Exp $4,140 · **I/S** | Tax Payable $4,140 · **B/S** | $18,000 × 23% |

      > [!warning] A dividend is not an expense
      > The $10,000 dividend never touches the income statement. It's a **distribution of profit** to owners, so it reduces **equity** (retained earnings) directly. That's why it's tagged **B/S**, not I/S.

      ### (b) Income Statement — year ended 31 Dec 2025

      > [!example] NORTHWIND TRADERS — Income Statement 2025
      > | | Amount | Basis |
      > |---|---:|---|
      > | Sales Revenue | 260,000 | goods delivered |
      > | Cost of Goods Sold | (150,000) | cost of the goods sold |
      > | **Gross Profit** | **110,000** | |
      > | Salaries | (60,000) | incl. $5,000 accrued |
      > | Rent | (12,000) | 6 months used |
      > | Depreciation | (8,000) | $40,000 ÷ 5 |
      > | **Operating Income** | **30,000** | |
      > | Interest Expense | (12,000) | $120,000 × 10% |
      > | **Pre-tax Income** | **18,000** | |
      > | Tax @ 23% | (4,140) | |
      > | **NET INCOME** | **13,860** | |

      > [!tip] Two profit lines, not one
      > **Gross profit** (sales − COGS) shows how much you make on the goods themselves. **Net income** is after *all* the other costs. Only COGS sits between revenue and gross profit — salaries, rent and depreciation come *below* it.

      ### (c) Balance Sheet at 31 Dec 2025

      **Cash** = 300,000 + 120,000 + 220,000 (in) − 40,000 − 24,000 − 180,000 − 55,000 − 10,000 (out) = **$331,000**. (11 months' salary paid = $55,000; interest and tax paid in 2026.)

      > [!example] NORTHWIND TRADERS — Balance Sheet, 31 Dec 2025
      > | | Amount |
      > |---|---:|
      > | **Current Assets** | |
      > | &emsp;Cash | 331,000 |
      > | &emsp;Accounts Receivable | 40,000 |
      > | &emsp;Inventory | 30,000 |
      > | &emsp;Prepaid Rent | 12,000 |
      > | **Non-Current Assets** | |
      > | &emsp;Equipment, at cost | 40,000 |
      > | &emsp;Less: accumulated depreciation | (8,000) |
      > | &emsp;Equipment, net book value | 32,000 |
      > | **TOTAL ASSETS** | **445,000** |
      > | **Current Liabilities** | |
      > | &emsp;Accrued Salary Payable | 5,000 |
      > | &emsp;Interest Payable | 12,000 |
      > | &emsp;Tax Payable | 4,140 |
      > | &emsp;Loan Payable — current portion | 40,000 |
      > | **Non-Current Liabilities** | |
      > | &emsp;Loan Payable — non-current | 80,000 |
      > | **TOTAL LIABILITIES** | **141,140** |
      > | **Shareholders' Equity** | |
      > | &emsp;Common Stock (par) | 30,000 |
      > | &emsp;APIC — Common | 270,000 |
      > | &emsp;Retained Earnings (13,860 − 10,000 div) | 3,860 |
      > | **TOTAL EQUITY** | **303,860** |
      > | **TOTAL LIAB. + EQUITY** | **445,000** ✓ |

      > [!warning] Split the loan: current vs non-current
      > $40,000 of the loan is repaid **1 Jan 2026** — within 12 months — so it's a **current** liability; the remaining $80,000 is **non-current**. The exam rewards splitting it. Retained earnings is net income **minus the dividend** ($13,860 − $10,000 = $3,860).

      ### (d) Ratios

      | Ratio | Working | Value |
      |---|---|---:|
      | [[Gross Profit Margin\|Gross margin]] | 110,000 ÷ 260,000 | **42.3%** |
      | [[Current Ratio\|Current ratio]] | 413,000 ÷ 61,140 | **6.75** |
      | [[Quick Ratio\|Quick ratio]] | (413,000 − 30,000 inv − 12,000 prepaid) ÷ 61,140 | **6.07** |
      | Inventory turnover | 150,000 ÷ 30,000 | **5.0×** |
      | Net profit margin | 13,860 ÷ 260,000 | **5.3%** |
      | [[ROE]] | 13,860 ÷ 303,860 | **4.6%** |

      *Current liabilities = 5,000 + 12,000 + 4,140 + 40,000 (current loan) = $61,140. The quick ratio strips out inventory **and** prepaid rent — the two current assets you can't quickly turn into cash.*

      > [!tip] What the ratios say
      > Northwind is **liquid** (6.75×) and turns its inventory a healthy **5 times** a year, but margins are **thin** — a 42% gross margin is eaten down to a 5% net margin by salaries, rent and interest. A goods business lives or dies on volume × margin, so watch that gross margin.
    related_terms:
      - double-entry-bookkeeping
      - income-statement
      - balance-sheet
      - gross-profit-margin
      - current-ratio
      - quick-ratio
      - roe
  - id: q2
    title: "Q2 — DCF valuation (15 pts)"
    text: |
      **Northwind** is valuing a small brand it may acquire, **BrightBox**. The forecast **free cash flows** ($000s) are:

      | Year | 1 | 2 | 3 | 4 | 5 |
      |---|---:|---:|---:|---:|---:|
      | Free cash flow | 20 | 30 | 40 | 50 | 60 |

      Use a **WACC of 10%** and a **long-run growth rate of 2%** beyond year 5.

      Required: compute the **terminal value**, the **present value** of the cash flows and the terminal value, and the **enterprise value**. Comment on what drives the answer.
    solution: |
      > A [[DCF Model|discounted cash flow]] values a business as the present value of the cash it will generate. Theory: [[Session 5 - Financial Statements Analysis]]; same engine as Assignment 3 Q2.

      **Step 1 — discount each year's cash flow at 10%** (discount factor = $1/1.10^t$):

      | Year | FCF | Factor @10% | PV |
      |---|---:|---:|---:|
      | 1 | 20 | 0.909 | 18.18 |
      | 2 | 30 | 0.826 | 24.79 |
      | 3 | 40 | 0.751 | 30.05 |
      | 4 | 50 | 0.683 | 34.15 |
      | 5 | 60 | 0.621 | 37.26 |
      | | | **Σ PV of explicit FCF** | **144.43** |

      **Step 2 — terminal value** at the end of year 5 (Gordon growth):

      $$\text{TV}_5 = \frac{\text{FCF}_5 \times (1+g)}{\text{WACC} - g} = \frac{60 \times 1.02}{0.10 - 0.02} = \frac{61.2}{0.08} = 765$$

      Discount it back 5 years: $765 \times 0.621 = \textbf{475.0}$.

      **Step 3 — enterprise value:**

      $$\text{EV} = 144.43 + 475.0 \approx \boxed{619 \; (\$619{,}000)}$$

      > [!warning] The terminal value dominates
      > The terminal value is **$475k of the $619k** — about **77%** of the whole valuation. That's normal for a DCF, and it's the headline caveat: the answer is **highly sensitive** to the WACC and the growth rate. Nudge WACC to 9% or growth to 3% and the value jumps; the five explicit years barely move it.

      > [!tip] 🗣️ In plain English
      > You add up the discounted cash for the next five years (worth ~$144k today), then bolt on a big lump for *everything after year 5* — the terminal value — discounted back to today (~$475k). Together that's what BrightBox is worth now: about **$619k**. Most of it is the "and it keeps going forever" piece, so your growth and discount-rate assumptions matter enormously.
    related_terms:
      - dcf-model
      - terminal-value
      - wacc
      - free-cash-flow
      - net-present-value
  - id: q3
    title: "Q3 — Equity method (associate) (15 pts)"
    text: |
      On **1 January 2025**, **Northwind** buys **30%** of **Kettle Ltd** for **$600,000**, giving it *significant influence* (but not control). During 2025 Kettle reports a **net profit of $400,000** and pays **total dividends of $100,000**.

      Required: state which accounting method applies and why, give the journal entries, compute the **carrying value** of the investment at 31 Dec 2025, and state what appears in Northwind's income statement.
    solution: |
      > A **30%** stake sits in the 20–50% band → *significant influence* → the [[Equity Method]] (Kettle is an **associate**). Theory: [[Session 7 - Business Combination]]; same mechanism as [[Session 9 - Recap]] Ex. 7.

      Under the equity method the investment starts at cost and then **moves with the associate's performance**: it goes **up** by your share of profit and **down** by dividends received.

      | Event | Debit | Credit | → |
      |---|---|---|:--:|
      | Buy 30% | Investment in Kettle $600,000 | Cash $600,000 | B/S |
      | Share of profit (30% × 400,000) | Investment in Kettle $120,000 | Share of Profit of Associate (P&L) $120,000 | I/S |
      | Dividend received (30% × 100,000) | Cash $30,000 | Investment in Kettle $30,000 | B/S |

      > [!example] Carrying value of the investment at 31 Dec 2025
      > | | Amount |
      > |---|---:|
      > | Cost | 600,000 |
      > | + Share of Kettle's profit (30%) | 120,000 |
      > | − Dividend received (30%) | (30,000) |
      > | **Carrying value** | **690,000** |

      **In the income statement:** only the **$120,000 share of the associate's profit**. 

      > [!warning] The dividend is NOT income
      > This is the classic trap. Under the equity method a dividend is a **return of capital** — it **reduces the investment**, it does *not* go through the P&L. Your income is your **share of the associate's profit** ($120,000), recognised whether or not Kettle pays anything out. (If the stake were **under 20%** — a passive [[Financial Asset]] — then the dividend *would* be income. Know which regime you're in.)
    related_terms:
      - equity-method
      - associated-company
      - business-combination
      - financial-asset
  - id: q4
    title: "Q4 — True/False with explanation (30 pts)"
    text: |
      For each statement, indicate **True** or **False** and give a one-line justification. (3 points each.)

      1. Cost of goods sold is recognised when the goods are sold, not when they are purchased.
      2. A dividend paid to shareholders is recorded as an expense on the income statement.
      3. Gross profit is sales revenue minus all operating expenses.
      4. Under the equity method, the investor increases the carrying value of its investment by its share of the associate's profit.
      5. Inventory is reported on the balance sheet as an asset until it is sold.
      6. In a discounted cash flow valuation, the terminal value is often the largest single component of the total value.
      7. The portion of a long-term loan due within the next 12 months is classified as a current liability.
      8. Retained earnings equals cumulative net income less any dividends declared.
      9. A higher inventory turnover ratio necessarily means the company is performing worse.
      10. The quick ratio excludes inventory from current assets.
    solution: |
      1. **TRUE.** COGS follows the **goods**, not the cash. Until you sell, the cost sits in [[Balance Sheet|inventory]] (an asset); on sale you move it to COGS. This is the [[Matching Principle|matching principle]].

      2. **FALSE.** A dividend is a **distribution of profit** to owners — it reduces **retained earnings (equity)**, never the income statement. It is not an expense.

      3. **FALSE.** Gross profit = sales − **cost of goods sold only**. Operating expenses (salaries, rent, depreciation) are deducted *below* gross profit to reach operating and net income.

      4. **TRUE.** Under the [[Equity Method]] the investment rises by the investor's share of the associate's profit and falls by dividends received.

      5. **TRUE.** Inventory is an **asset** (a future benefit) until sold; only on sale does its cost become an expense (COGS).

      6. **TRUE.** Because it captures *all* cash beyond the forecast, the [[Terminal Value|terminal value]] is usually the majority of a [[DCF Model|DCF]] — which is why the result is so sensitive to WACC and growth.

      7. **TRUE.** Liabilities are split by timing: the slice of a loan repayable **within 12 months** is **current**; the rest is non-current.

      8. **TRUE.** [[ROE|Retained earnings]] = accumulated profits **minus** all dividends declared — it's the running total of profit kept in the business.

      9. **FALSE.** A **higher** inventory turnover generally means inventory sells **faster** (more efficient), not worse — though extremes can signal stockouts. Higher is usually better, not worse.

      10. **TRUE.** The [[Quick Ratio|quick ratio]] strips out inventory (and prepaid expenses) — the current assets you can't quickly convert to cash.

      > [!tip] How this is marked
      > The **reason** carries the marks. "False — a dividend reduces retained earnings, it isn't an expense" scores; a bare "False" does not.
    related_terms:
      - matching-principle
      - equity-method
      - terminal-value
      - dcf-model
      - quick-ratio
      - roe
---

> [!info] About this mock
> A third full **3-hour** practice paper in the exam format — **Q1 (40)**, **Q2 & Q3 (15 each)**, **Q4 (30)** — testing the parts Samples A & B didn't: a **goods business** (inventory, COGS, gross margin), a **dividend**, an **amortising loan**, a **DCF valuation**, and the **equity method**. Built to be worked **by hand**. Reveal each answer with **Show solution**.

<!--questions-->

## How the marks map to the syllabus

| Question | Topic | Sessions |
|---|---|---|
| Q1 | Inventory/COGS, dividends, amortising loan, statements & ratios | [[Session 2 - Accounting Fundamentals]], [[Session 5 - Financial Statements Analysis]] |
| Q2 | DCF valuation | [[Session 5 - Financial Statements Analysis]] |
| Q3 | Equity method (associate) | [[Session 7 - Business Combination]] |
| Q4 | Concepts across the whole course | all sessions |

## Related Notes

- [[Accounting]] — subject hub
- [[Session 9 - Recap]] — 13 worked exam-style exercises
- [[Sample Final A]] · [[Sample Final B]] · [[Sample Final D]] — the companion mocks
