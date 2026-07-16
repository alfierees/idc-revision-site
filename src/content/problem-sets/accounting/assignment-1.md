---
title: "Assignment 1"
subject: accounting
source_doc: /papers/accounting/assignment-1.pdf
tags:
  - accounting
  - problem-set
  - journal-entries
  - double-entry
  - balance-sheet
  - income-statement
  - cap-table
  - safe
  - accrual-accounting
ai_drafted: true
questions:
  - id: "setup"
    text: |
      Record all 2025 events for ABC Inc. using double-entry, then prepare a Balance Sheet, an Income Statement and a cap table.
    solution: |
      > Part of: [[Accounting]] · Problem Set
      > A full year of double-entry bookkeeping for a startup, compiled into a Balance Sheet, Income Statement and Cap Table
      > Key concepts: [[Double Entry Bookkeeping]], [[Accrual Accounting]], [[Depreciation]], [[Prepaid Expenses]], [[SAFE]], [[Cap Table]], [[Balance Sheet]], [[Income Statement]]

      > [!info] The brief
      > Record all 2025 events for **ABC Inc.** using double-entry, then prepare (b) a Balance Sheet at 31 Dec 2025, (c) an Income Statement for the year, and (d) a cap table by shareholder group. Submitted in Excel — our completed workbook is `Assignment 1/Assignment1_Complete.xlsx`.
    related_terms: ["double-entry-bookkeeping", "accrual-accounting", "depreciation", "prepaid-expenses", "safe", "cap-table", "balance-sheet", "income-statement"]
  - id: "1"
    text: |
      The Foundations Being Tested
    solution: |
      Every entry rests on the [[Double Entry Bookkeeping|double-entry]] rule — **total debits = total credits** — and the accounting equation **Assets = Liabilities + Equity**.

      | Account type | Debit | Credit | Normal balance |
      |---|---|---|---|
      | **Assets** (Cash, AR, Equipment, Prepaid) | ▲ Increase | ▼ Decrease | Debit |
      | **Liabilities** (Loans, Accrued Payables, SAFE) | ▼ Decrease | ▲ Increase | Credit |
      | **Equity** (Common Stock, APIC, Retained Earnings) | ▼ Decrease | ▲ Increase | Credit |
      | **Revenue** (Service Revenue) | ▼ Decrease | ▲ Increase | Credit |
      | **Expenses** (Payroll, Rent, Depreciation, Interest) | ▲ Increase | ▼ Decrease | Debit |
    related_terms: ["double-entry-bookkeeping", "balance-sheet"]
  - id: "2"
    text: |
      The Headline Journal Entries
    solution: |
      The full year is 51 entries (many are repeating monthly rent, payroll accruals and payroll payments). The conceptually distinct ones:

      | Event | Debit | Credit | Why |
      |-------|-------|--------|-----|
      | **Founder capital** $100,000 | Cash $100,000 | Common Stock $1,000 + APIC $99,000 | 100,000 sh × $0.01 par = $1,000; rest is [[Additional Paid-in Capital\|APIC]] |
      | **Monthly rent** $5,000 | Rent Expense | Cash | Due on the 1st → paid immediately, no accrual |
      | **Accrue monthly payroll** $30,000 | Payroll Expense | Accrued Payroll Payable | Earned this month; paid the **9th of next month** |
      | **Pay prior payroll** $30,000 | Accrued Payroll Payable | Cash | Settles the liability — **no expense** (already booked) |
      | **SAFE — Investor A** $500,000 | Cash | SAFE Liability | A [[SAFE]] is **not yet equity** → a liability until conversion |
      | **Bullet loan** $1,000,000 | Cash | Notes Payable | Borrowing creates a liability, not revenue |
      | **Buy computers** $9,000 | Equipment | Cash | Useful life > 1 yr → **capitalise**, then depreciate |
      | **Insurance premium** $25,000 | Prepaid Insurance | Cash | Future benefit → asset, not expense yet |
      | **Service revenue** $50k/$80k/$120k | Accounts Receivable | Service Revenue | Recognised when **delivered** (Net 60 terms) |
      | **Collect receivable** | Cash | Accounts Receivable | Converts AR to cash; no new revenue |
      | **Semi-annual interest** $25,000 | Interest Expense | Cash | $1,000,000 × 5% × 6/12 |

      ### Year-end adjusting entries

      | Adjustment | Debit | Credit | Calculation |
      |---|---|---|---|
      | **Depreciation** $2,250 | Depreciation Expense | Accumulated Depreciation | $9,000 ÷ 3 yrs ÷ 12 × **9 months** (Apr–Dec) |
      | **Insurance used** $12,500 | Insurance Expense | Prepaid Insurance | $25,000 × 6/12 (Jul–Dec consumed) |
      | **Accrue interest** $12,500 | Interest Expense | Accrued Interest Payable | $1,000,000 × 5% × 3/12 (Oct–Dec) |

      > [!warning] The SAFE conversion (Entry 42)
      > When Investor B's round closes, Investor A's SAFE converts. Pre-money $8M **exceeds** the $5M cap, so the **cap applies**: conversion price = $5,000,000 ÷ 100,000 founder shares = **$50/share** → $500,000 ÷ $50 = **10,000 Preferred A shares**. Entry: DR SAFE Liability $500,000 / CR Preferred Stock A (APIC) $500,000.
    related_terms: ["double-entry-bookkeeping", "accrual-accounting", "depreciation", "prepaid-expenses", "accrued-expenses", "safe", "common-stock", "additional-paid-in-capital", "matching-principle"]
  - id: "3"
    text: |
      Part (b) — Balance Sheet at 31 Dec 2025
    solution: |
      > [!example] COMPANY ABC INC. — Balance Sheet, 31 Dec 2025
      > | | Amount | Note |
      > |---|---|---|
      > | **Current Assets** | | |
      > | Cash & equivalents | $4,281,000 | Sum of all cash flows |
      > | Accounts Receivable | $120,000 | Dec invoice, Net 60 |
      > | Prepaid Insurance | $12,500 | 6 months remaining |
      > | **Total Current Assets** | **$4,413,500** | |
      > | **Non-Current Assets** | | |
      > | Equipment — at cost | $9,000 | |
      > | Less: Accumulated Depreciation | $(2,250) | 9 months |
      > | **Total Non-Current Assets** | **$6,750** | |
      > | **TOTAL ASSETS** | **$4,420,250** | |
      > | **Current Liabilities** | | |
      > | Accrued Payroll Payable | $30,000 | Dec payroll, paid Jan 9 |
      > | Accrued Interest Payable | $12,500 | Oct–Dec interest |
      > | **Non-Current Liabilities** | | |
      > | Notes Payable (bullet loan, due Mar 2027) | $1,000,000 | |
      > | **TOTAL LIABILITIES** | **$1,042,500** | SAFE now $0 (converted) |
      > | **Shareholders' Equity** | | |
      > | Common Stock (par) | $1,000 | |
      > | APIC — Common | $99,000 | |
      > | Preferred Stock A — APIC | $3,500,000 | SAFE $500k + Investor B $3M |
      > | Accumulated Deficit | $(222,250) | Net loss from Part (c) |
      > | **TOTAL EQUITY** | **$3,377,750** | |
      > | **TOTAL LIAB. + EQUITY** | **$4,420,250** | ✓ balances |

      > [!tip] The cash figure, derived
      > Cash $4,281,000 = inflows $4,730,000 (founder $100k + SAFE $500k + loan $1M + Investor B $3M + collected revenue $130k) − outflows $449,000 (computers $9k + insurance $25k + interest $25k + rent $60k + 11 months payroll $330k). **December payroll and December revenue never touch 2025 cash** (paid/collected in 2026).
    related_terms: ["balance-sheet", "depreciation", "prepaid-expenses", "accrued-expenses", "safe", "common-stock", "additional-paid-in-capital"]
  - id: "4"
    text: |
      Part (c) — Income Statement (Year Ended 31 Dec 2025)
    solution: |
      > [!example] COMPANY ABC INC. — Income Statement 2025
      > | | Amount | Basis |
      > |---|---|---|
      > | Service Revenue | $250,000 | $50k + $80k + $120k, recognised on delivery |
      > | **Total Revenue** | **$250,000** | |
      > | Payroll Expense | $(360,000) | $30k × 12 |
      > | Rent Expense | $(60,000) | $5k × 12 |
      > | Depreciation Expense | $(2,250) | 9 months |
      > | Insurance Expense | $(12,500) | 6 months of policy |
      > | **Operating Loss** | **$(184,750)** | |
      > | Interest Expense | $(37,500) | $25k paid + $12.5k accrued |
      > | **NET LOSS** | **$(222,250)** | → Accumulated Deficit on BS |

      > [!warning] Payments ≠ expenses
      > Payroll **expense** is $360,000 (12 monthly accruals). The 11 payroll **payments** during the year don't add expense — they just settle the liability. Double-counting payments is the most common error here.
    related_terms: ["income-statement", "matching-principle", "accrual-accounting", "depreciation"]
  - id: "5"
    text: |
      Part (d) — Capitalization Table
    solution: |
      | Shareholder | Share class | Shares | Investment | Ownership |
      |-------------|-------------|--------|-----------|-----------|
      | **Founders** | Common | 100,000 | $100,000 | 67.80% |
      | **Investor A** | Preferred A (via SAFE) | 10,000 | $500,000 | 6.78% |
      | **Investor B** | Preferred A | 37,500 | $3,000,000 | 25.42% |
      | **Total** | | **147,500** | $3,600,000 | 100% |

      **Investor B price:** the round is priced on the shares outstanding **before the SAFE converts** (the founders' 100,000): $8,000,000 pre-money ÷ 100,000 = **$80.00/share** → $3,000,000 ÷ $80 = **37,500 shares**.

      > [!tip] Why Investor B lands at 25.4%, not 27.3%
      > The price is set on the **pre-SAFE** share count (100,000), so Investor B buys at **$80** and gets 37,500 shares. The SAFE's 10,000 shares then convert alongside and dilute everyone, so Investor B's final stake is **25.42%** — a little below the naive $3M ÷ $11M = 27.3%, because the converting SAFE dilutes the new investor too.
    related_terms: ["cap-table", "safe", "pre-money-valuation", "post-money-valuation", "common-stock"]
---

## Sources

- Our worked solution: `Problem Sets/Assignment 1/Assignment1_Complete.xlsx` (Excel submission), `Assignment1_Guidebook.docx` (entry-by-entry reasoning), `Assignment1_Statements_Guidebook.docx` (statements & cap table)

## Related Notes

- [[Accounting]] — subject hub
- [[Session 2 - Accounting Fundamentals]] — double-entry, accruals, depreciation, prepaid
- [[Session 3 - Raising Debt and Capital]] — SAFE, bullet loans, priced rounds
- [[Session 9 - Recap]] — Exercise 5 reuses this exact cap-table scenario
- [[Assignment 3 - CoreWeave Ratios & SababaSnacks DCF]] — builds a DCF on top of this same ABC Inc.
