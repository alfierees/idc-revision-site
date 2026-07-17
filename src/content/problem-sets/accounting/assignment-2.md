---
title: "Assignment 2"
subject: accounting
source_doc: /papers/accounting/assignment-2.pdf
official_solution: /papers/accounting/assignment-2-solution.xlsx
official_solution_note: "Lecturer's official Excel solution (Moodle) — includes his historical-volatility working for FVRR. His Black-Scholes inputs are S = K = $23.43 and σ = 71.33% (derived from real price data), giving $13.28/option and $132,800 total."
tags:
  - accounting
  - problem-set
  - financial-statement-analysis
  - gross-margin
  - cash-flow
  - preferred-stock
  - stock-options
  - black-scholes
  - asc-718
ai_drafted: true
questions:
  - id: "setup"
    text: |
      **HawkEye 360 Analysis & Fiverr Options.** Read a real S-1 filing for ratios and preferred-stock rights, then value and expense an employee option grant.
    solution: |
      > Part of: [[Accounting]] · Problem Set
      > Reading a real S-1 filing for ratios and preferred-stock rights, then valuing and expensing an employee option grant
      > Key concepts: [[Gross Profit Margin]], [[EBITDA]], [[Preferred Stock]], [[Liquidation Preference]], [[Anti-Dilution]], [[Stock Options]], [[Black-Scholes Model]], [[Vesting]]

      > [!info] The brief
      > **Q1:** From HawkEye 360's (HAWK) S-1/A, compute revenue growth, gross margin, operating cash flow, and analyse its preferred stock. **Q2:** Value Fiverr's (FVRR) 10,000-option grant under Black-Scholes and record the F/S impact at grant, year-end, and on the employee's departure. All HAWK figures in $000s.
    related_terms: []
  - id: "1"
    text: |
      Question 1 — HawkEye 360 (S-1/A Analysis)
    solution: |
      ## (a) Revenue Growth

      $$\frac{\$117{,}660 - \$67{,}559}{\$67{,}559} = \boxed{+74.2\%}$$

      Third-party revenue nearly doubled (+98%); related-party grew +7%. The driver is rapid commercial demand for RF geospatial intelligence.

      | Revenue stream | FY2024 | FY2025 |
      |---|---|---|
      | Third-party | $49,835 | $98,743 |
      | Related parties | $17,724 | $18,917 |
      | **Total** | **$67,559** | **$117,660** |

      ## (b) Gross Margin

      HAWK presents **no GAAP gross-profit line** — cost of sales is split into direct/indirect, both **excluding D&A**. So we compute an ex-D&A margin:

      | ($000s) | FY2024 | FY2025 |
      |---|---|---|
      | Total Revenue | 67,559 | 117,660 |
      | Direct COGS (ex-D&A) | (18,927) | (21,687) |
      | Indirect COGS (ex-D&A) | (1,421) | (2,092) |
      | **Gross Profit (ex-D&A)** | **47,211** | **93,881** |
      | **Gross Margin** | **69.9%** | **79.8%** |

      > [!tip] Why the margin jumped ~10 points
      > Revenue grew 74% while cost of sales rose only 17% — classic **operating leverage** for a satellite operator: once the constellation is in orbit, incremental revenue costs almost nothing. D&A ($23.6M in FY2025) is shown as a separate operating line, standard for capital-intensive space businesses to separate cash economics from accounting depreciation.

      ## (c) Operating Cash Flow

      | ($000s) | FY2024 | FY2025 |
      |---|---|---|
      | Net income (loss) | (28,997) | 2,673 |
      | + D&A | 25,185 | 23,568 |
      | + Stock-based comp | 2,885 | 4,290 |
      | Δ Contract A/R (third-party) | 131 | (18,686) |
      | Δ Contract A/R (related parties) | 27 | (20,903) |
      | Δ Prepaid & other assets | 1,814 | (37,805) |
      | Other working-capital / non-cash | 10,921 | 36,474 |
      | **Net CFO** | **+11,966** | **−17,339** |

      > [!warning] Profitable but cash-negative
      > HAWK turned a $2.7M **profit** yet **burned $17.3M** of operating cash — a ~$29M swing. The cause is a **$39.6M build-up in receivables** (slow-paying B2G contracts): under [[Accrual Accounting]] revenue is booked when earned, but the cash lags. This is the single clearest real-world illustration of ==profit ≠ cash==.

      ## (d) & (e) Redeemable Convertible Preferred Stock

      As of 31 Dec 2025, HAWK has **six series** (A, B, C, D, D-1, E) of [[Preferred Stock|Redeemable Convertible Preferred Stock]], carried at **$447,586K** with total liquidation preference **$480,421K**. Series E was new in FY2025 (+$80M proceeds).

      > [!info] Why "mezzanine" (temporary) equity?
      > Because the shares are **redeemable at the holders' option** (outside the company's control), ASC 480-10-S99 forbids classifying them as permanent equity. They sit **between liabilities ($148,857K) and stockholders' deficit (−$106,503K)** on the balance sheet.

      **The standard rights attached:**

      | Right | What it gives the holder |
      |-------|--------------------------|
      | **[[Liquidation Preference]]** | Capital back **before** common in any exit; senior, typically reverse-chronological (E > D-1 > D > C > B > A) |
      | **Conversion** | **Automatic** conversion to common on a qualified IPO (the point of the S-1); **optional** conversion anytime (1:1, adjustable) |
      | **[[Anti-Dilution]]** | Broad-based weighted-average protection if a later round prices lower (a down round) |
      | **Redemption** | Can force HAWK to repurchase at issue price (+ accrued dividends) if no IPO/liquidity event — this is what drives mezzanine classification |
      | **Dividends** | Paid before common ($2,224K preferred dividends in both FY2024–25) |
      | **Voting** | On an **as-converted** basis, plus protective class votes |
      | **ROFR & co-sale** | Right of first refusal on transfers; tag-along on founder sales |
    related_terms: ["revenue-growth", "gross-profit-margin", "ebitda", "cash-flow", "working-capital", "preferred-stock", "liquidation-preference", "anti-dilution", "accrual-accounting"]
  - id: "2"
    text: |
      Question 2 — Fiverr (FVRR) Employee Stock Options
    solution: |
      > Grant: **10,000 options**, **1 Jul 2024**, strike = market (at-the-money). Vesting: 1-yr cliff + 1/48 per month (48 months total). Governed by ASC 718 / IFRS 2.

      ## (a) Grant-Date Value & What Is Recorded

      **Black-Scholes inputs:** S = K = **$22.00** (FVRR close 1 Jul 2024, Yahoo Finance), r = 4.5%, σ = 60%, q = 0%, T = 4 yrs.

      $$d_1 = \frac{\ln(22/22) + (0.045 + 0.18)(4)}{0.60\sqrt{4}} = \frac{0.90}{1.20} = 0.75 \qquad d_2 = 0.75 - 1.20 = -0.45$$

      $$C = 22(0.7734) - 22\,e^{-0.18}(0.3264) = 17.015 - 5.997 = \boxed{\$11.02 \text{ per option}}$$

      → Total grant-date fair value = 10,000 × $11.02 = **$110,171**.

      > [!warning] Nothing is recorded on the grant date
      > The grant date is only the **measurement date** — it fixes the $11.02 fair value. **No journal entry** is made. Compensation expense is recognised **over the vesting period** as the employee earns the options.

      ## (b) F/S for Year Ended 31 Dec 2024

      Straight-line over 48 months: $110,171 ÷ 48 = **$2,295/month**. From grant (1 Jul) to 31 Dec = **6 months**:

      $$6 \times \$2{,}295 = \boxed{\$13{,}771 \text{ compensation expense (FY2024)}}$$

      | Entry | Debit | Credit |
      |-------|-------|--------|
      | Compensation Expense (P&L) | $13,771 | |
      | APIC — Stock Options (Equity) | | $13,771 |

      > [!tip] Equity, not a liability
      > The credit goes to **APIC**, not a payable, because Fiverr's obligation is to deliver **shares**, not cash. APIC accumulates the recognised expense until exercise or expiry.

      ## (c) Dismissal With 90-Day Notice (1 Feb 2026)

      The employee works the notice period (1 Feb – 2 May 2026 ≈ month 22 from grant). Vesting at departure:

      | | Calculation | Vested |
      |---|---|---|
      | Cliff tranche | 12/48 × 10,000 | 2,500 |
      | Post-cliff (months 13–22) | 10 × (1/48 × 10,000) | 2,083 |
      | **Total vested** | | **4,583** |
      | **Forfeited (unvested)** | 10,000 − 4,583 | **5,417** |

      Because the service condition is being met during the notice period, **expense keeps accruing at $2,295/month** until the last day of service (3 months × $2,295 = **$6,886** more). On departure, **no reversal** for the forfeited unvested options.

      > [!info] Why no reversal — the elegant equivalence
      > Under straight-line expensing with proportional vesting, cumulative expense naturally converges to the fair value of options that have actually **vested**:
      > - Cumulative S/L expense at month 22 = $2,295 × 22 = **$50,490**
      > - Fair value of vested options = 4,583 × $11.02 = **$50,505**
      >
      > These match, so no correction is needed. The 5,417 forfeited options simply generate **no further expense**.

      ### All entries summarised

      | Period | DR Comp. Expense | CR APIC |
      |--------|------------------|---------|
      | Grant (1 Jul 2024) | — | — |
      | FY2024 (6 months) | $13,771 | $13,771 |
      | FY2025 (12 months) | $27,540 | $27,540 |
      | Notice period Feb–Apr 2026 (3 months) | $6,886 | $6,886 |
      | Departure (2 May 2026) | — (no forfeiture entry) | — |
      | **Total recognised at departure** | **$50,490** | **$50,490** |
    related_terms: ["stock-options", "black-scholes-model", "vesting", "asc-718"]
---

## Sources

- Our worked solution: `Problem Sets/assignment 2/Assignment2_Complete.docx`
- HawkEye 360 S-1/A (consolidated financial statements); FVRR price from Yahoo Finance

## Related Notes

- [[Accounting]] — subject hub
- [[Session 4 - Incorporation, Corporate Taxes & Employee Compensation]] — Black-Scholes, vesting, option expensing
- [[Session 5 - Financial Statements Analysis]] — gross margin, EBITDA, cash-flow analysis
- [[Session 9 - Recap]] — Exercise 6 is the same option-valuation pattern
