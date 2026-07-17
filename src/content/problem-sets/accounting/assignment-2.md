---
title: "Assignment 2"
subject: accounting
source_doc: /papers/accounting/assignment-2.pdf
official_solution: /papers/accounting/assignment-2-solution.xlsx
official_solution_note: "Lecturer's official Excel solution (Moodle) — includes his historical-volatility working for FVRR (daily σ 4.49% annualised to 71.33%). The worked solution below follows his figures throughout."
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

      HAWK presents **no GAAP gross-profit line**, so gross profit is built from **Cost of revenue** (per the consolidated statement of operations, page F-5):

      | ($000s) | FY2024 | FY2025 |
      |---|---|---|
      | Total Revenue | 67,559 | 117,660 |
      | Cost of revenue | (18,927) | (21,687) |
      | **Gross Profit** | **48,632** | **95,973** |
      | **Gross Margin** | **71.98%** | **81.57%** |

      > [!tip] Why the margin jumped ~10 points
      > Revenue grew **74%** while cost of revenue rose only **~15%** — classic **operating leverage** for a satellite operator: once the constellation is in orbit, incremental revenue costs almost nothing. D&A is shown as a separate operating line, standard for capital-intensive space businesses to separate cash economics from accounting depreciation.

      > [!warning] Take the "Cost of revenue" line only
      > It is tempting to also strip out HAWK's *indirect* cost lines, which drops the margin to ~69.9% / 79.8%. The official answer uses the **Cost of revenue** line alone. Gross margin is only ever as well-defined as the cost line the filing gives you — say which line you used.

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

      As of 31 Dec 2025, HAWK has **eight series** (A-1, A-2, A-3, B, C, D, D-1, E) of [[Preferred Stock|Redeemable Convertible Preferred Stock]], carried at **$447,586K** with total liquidation preference **$480,421K**. Series E was new in FY2025 (+$80M proceeds). *(Note 9 — Mezzanine Equity and Stockholders' Deficit, page F-37.)*

      > [!info] Why "mezzanine" (temporary) equity?
      > Because the shares are **redeemable at the holders' option** (outside the company's control), ASC 480-10-S99 forbids classifying them as permanent equity. They sit **between liabilities ($148,857K) and stockholders' deficit (−$106,503K)** on the balance sheet.

      **The six rights attached** *(pages F-40 to F-43)*:

      | Right | What it gives the holder |
      |-------|--------------------------|
      | **1. Voting** | Votes alongside common on an **as-converted** basis |
      | **2. Dividend** | Series **A-1** ranks in preference to common; **A-2, A-3, B** accrue **8%** annually when and if declared by the Board; **C** accrues **4%**; **D, D-1, E** accrue **8%** when and if declared |
      | **3. Conversion** | Convertible into common **at the holder's election** at any time, and on an **IPO or M&A** event |
      | **4. [[Liquidation Preference]]** | On any liquidation event, the preferred receive their listed amount **in preference to common**, in a set order of priority |
      | **5. Redemption** | Redeemable on a **"deemed liquidation event"** — outside the company's control, which is exactly what forces mezzanine classification |
      | **6. Protective rights** | General protective provisions for all preferred, plus holders of **Series B** may elect **one director** to the Board |

      > [!tip] The waterfall
      > In a liquidation the order is: **creditors and company liabilities first**, then the preferred series by their priority ranking, and **common stockholders last** — they only ever get the residual.
    related_terms: ["revenue-growth", "gross-profit-margin", "ebitda", "cash-flow", "working-capital", "preferred-stock", "liquidation-preference", "anti-dilution", "accrual-accounting"]
  - id: "2"
    text: |
      Question 2 — Fiverr (FVRR) Employee Stock Options
    solution: |
      > Grant: **10,000 options**, **1 Jul 2024**, strike = market (at-the-money). Vesting: 1-yr cliff + 1/48 per month (48 months total). Governed by ASC 718 / IFRS 2.

      ## (a) Grant-Date Value & What Is Recorded

      **Black-Scholes inputs:** S = K = **$23.43** (FVRR close on 28 Jun 2024, the last trading day before the grant), r = **4.5%**, σ = **71.33%**, q = 0%, T = **4 yrs**.

      > [!tip] Where the 71.33% volatility comes from
      > It is **computed, not assumed**. Take FVRR's daily closes for the year to the grant date, compute the daily log returns $\ln(P_t / P_{t-1})$, take their standard deviation (**4.49%** daily), then annualise: $\sigma = 4.49\% \times \sqrt{252} \approx \textbf{71.33\%}$. The `Historical Vol` sheet of the official workbook does exactly this.

      $$d_1 = \frac{\ln(S/K) + (r + \sigma^2/2)T}{\sigma\sqrt{T}} = \frac{0 + (0.045 + 0.2544)(4)}{0.7133\sqrt{4}} = \frac{1.1976}{1.4266} = 0.8395$$

      $$d_2 = d_1 - \sigma\sqrt{T} = 0.8395 - 1.4266 = -0.5871$$

      $$C = S\,N(d_1) - K e^{-rT} N(d_2) = 23.43(0.7994) - 23.43\,e^{-0.18}(0.2786) = \boxed{\$13.28 \text{ per option}}$$

      → Total grant-date fair value = 10,000 × $13.28 = **$132,800**.

      > [!warning] Nothing is recorded on the grant date
      > On 1 Jul 2024 Fiverr records **no journal entry**. The grant date is only the **measurement date** — it fixes the $13.28 fair value. Only the **notes to the financial statements** disclose that the company granted an employee 10,000 options with a fair value of $132,800. Compensation expense is then recognised **over the vesting period** as the employee earns the options.

      ## (b) F/S for Year Ended 31 Dec 2024

      Straight-line over 48 months: $132,800 ÷ 48 = **$2,766.67/month**. From grant (1 Jul) to 31 Dec = **6 months**:

      $$6 \times \$2{,}766.67 = \boxed{\$16{,}600 \text{ compensation expense (FY2024)}}$$

      | Entry | Debit | Credit |
      |-------|-------|--------|
      | Stock-Based Compensation Expense (P&L) | $16,600 | |
      | Stock-Based Compensation (Equity) | | $16,600 |

      > [!warning] Expense accrues even though nothing has vested yet
      > At 31 Dec 2024 the employee is still **inside the 1-year cliff**, so **zero options have vested** — yet six months of expense is still recorded. Straight-line expensing follows the **service** being rendered, not the vesting dates. The cliff delays *ownership*, not the *expense*.

      > [!tip] Equity, not a liability
      > The credit goes to **equity**, not a payable, because Fiverr's obligation is to deliver **shares**, not cash. It accumulates the recognised expense until exercise or expiry.

      ## (c) Dismissal With 90-Day Notice (notice 1 Feb 2026)

      With the 90-day notice served, the employee's **last day of work is 2 May 2026** — **month 22** from the grant. Vesting at departure:

      | | Calculation | Vested |
      |---|---|---|
      | Cliff tranche (month 12) | 12/48 × 10,000 | 2,500 |
      | Post-cliff (months 13–22) | 10 × (1/48 × 10,000) | 2,083 |
      | **Total vested** | 22/48 × 10,000 | **4,583** |
      | **Forfeited (unvested)** | 10,000 − 4,583 | **5,417** |

      The employee renders service through the whole notice period, so expense keeps accruing at **$2,766.67/month** until the last day. The **2026 expense** therefore covers **January to April** (4 months):

      $$4 \times \$2{,}766.67 = \boxed{\$11{,}066.67 \text{ compensation expense (2026)}}$$

      | Entry | Debit | Credit |
      |-------|-------|--------|
      | Stock-Based Compensation Expense (P&L) | $11,066.67 | |
      | Stock-Based Compensation (Equity) | | $11,066.67 |

      > [!warning] Count every month of service, not just the notice period
      > The employee worked **January** too — notice was served on 1 Feb, but service (and therefore expense) runs from 1 Jan to the 2 May leaving date. That's **4 months of 2026 expense**, not the 3 months of the notice period itself.

      > [!info] Why no reversal — the elegant equivalence
      > Because expense is recorded **straight-line**, the cumulative charge naturally lands exactly on the fair value of the options that actually **vested**:
      > - Cumulative expense at month 22 = 22 × $2,766.67 = **$60,866.67**
      > - Fair value of vested options = 4,583.33 × $13.28 = **$60,866.67**
      >
      > They match, so **no correction and no reversal** is needed. The 5,417 forfeited options simply generate **no further expense** — and nothing is reversed even if the vested options later expire **unexercised**.

      ### All entries summarised

      | Period | DR SBC Expense | CR SBC (Equity) |
      |--------|------------------|---------|
      | Grant (1 Jul 2024) | — (disclosure only) | — |
      | FY2024 (6 months, Jul–Dec) | $16,600 | $16,600 |
      | FY2025 (12 months) | $33,200 | $33,200 |
      | FY2026 (4 months, Jan–Apr) | $11,066.67 | $11,066.67 |
      | Departure (2 May 2026) | — (no forfeiture entry) | — |
      | **Total recognised at departure** | **$60,866.67** | **$60,866.67** |
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
