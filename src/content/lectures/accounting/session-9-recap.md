---
title: "Session 9 — Course Recap (Worked Exercises)"
session: 9
semester: 2
year: 2
course: Accounting & Financial Essentials for Entrepreneurs
tags:
  - accounting
  - recap
  - exam-prep
  - accrual-accounting
  - raising-capital
  - stock-options
  - business-combination
  - revenue-recognition
aliases:
  - Recap Session
  - Accounting Recap
  - Exam Practice Exercises
subject: accounting
in_scope: true
---

# Session 9 — Course Recap (Worked Exercises)

> Part of: [[Accounting]]
> Thirteen exam-style exercises spanning the whole course, each fully worked
> Key concepts: [[Accrual Accounting]], [[Depreciation]], [[SAFE]], [[Stock Options]], [[Equity Method]], [[Business Combination]], [[Goodwill]], [[Revenue Recognition]]

> [!note] How to use this note
> The recap deck contains only the **questions**. Every solution below is worked from first principles and cross-referenced to the session where the concept is taught. Where the question leaves an input unstated, the assumption is flagged in a `[!warning]` callout — check it against the lecturer's intended figures. The deck's title slide reads "Session 11 — Recap"; this is the 9th note in the vault.

---

# Part A — Accrual Accounting

> Theory: [[Session 2 - Accounting Fundamentals]]. The recurring trick across these three is that ==an expense or income is recorded when the economic event happens, not when cash moves==.

## Exercise 1 — Computer Depreciation & Disposal

> A student buys a computer (expected 4-yr life) on **Dec 31 2024 for $2,000**. In **Jul 2025** it breaks and is sold on Yad2 for **$150**. Show entries & balances at 1/1/2025, 30/6/2025, 31/12/2025.

**Depreciation:** straight-line = $2,000 ÷ 4 yrs = **$500/yr = $41.67/month**.

#### The journal

Each row is one posting. By convention the **credited** account is indented, and in every entry total debits = total credits.

| Date        | Account                                                             | Dr ($) | Cr ($) |
| ----------- | ------------------------------------------------------------------- | -----: | -----: |
| 31 Dec 2024 | Equipment                                                           |  2,000 |        |
|             | &emsp;Cash                                                          |        |  2,000 |
|             | *Purchase computer, 4-yr useful life*                               |        |        |
| 30 Jun 2025 | Depreciation Expense                                                |    250 |        |
|             | &emsp;Accumulated Depreciation — Equipment                          |        |    250 |
|             | *6 months' depreciation: $41.67 × 6*                                |        |        |
| Jul 2025    | Cash                                                                |    150 |        |
|             | Accumulated Depreciation — Equipment                                |    250 |        |
|             | Loss on Disposal                                                    |  1,600 |        |
|             | &emsp;Equipment                                                     |        |  2,000 |
|             | *Sell computer; derecognise asset and its accumulated depreciation* |        |        |

> [!tip] How to read the disposal entry
> To **remove** an asset you reverse what's on the books: **credit Equipment** for its full cost ($2,000) and **debit Accumulated Depreciation** for the $250 built up against it. **Debit Cash** for the $150 actually received. Whatever is left to balance the entry is the **Loss on Disposal** ($1,600) — the cost you never recovered.

#### Disposal arithmetic

| Item                                |      Amount |
| ----------------------------------- | ----------: |
| Cost                                |       2,000 |
| Accumulated depreciation (6 months) |       (250) |
| **Net book value**                  | **(1,750)** |
| Sale proceeds                       |         150 |
| **Loss on disposal**                | **(1,600)** |

#### The balance sheet at year-end

A balance sheet is a **snapshot at one date**, so it's a single column. By 31 Dec 2025 the computer has been **sold**, so it has left the books entirely — the only thing left is the $150 of cash it fetched:

> [!warning] Assumption for a complete statement
> The exercise gives a single asset with no company context, so to show a full **Assets = Liabilities + Equity** statement we assume the $2,000 computer was funded by **$2,000 of owner's capital**.

> [!example] Balance Sheet as at 31 December 2025
> | | $ |
> |---|---:|
> | **Assets** | |
> | &emsp;Cash | 150 |
> | &emsp;Equipment (sold — derecognised) | 0 |
> | **Total assets** | **150** |
> | **Liabilities** | 0 |
> | **Equity** | |
> | &emsp;Owner's capital | 2,000 |
> | &emsp;Retained earnings (accumulated loss) | (1,850) |
> | **Total equity** | **150** |
> | **Assets = Liabilities + Equity** | **150 ✓** |

The $1,850 accumulated loss = $250 depreciation + $1,600 disposal loss — both are income-statement items, so they sit **inside equity** (retained earnings), never as their own balance-sheet lines.

#### The earlier dates (while the computer is still owned)

The question also asks for the position at 1 Jan and 30 Jun, *before* the sale. A non-current asset is shown at **cost less accumulated depreciation** (never a single net number), so a reader can see how worn-down it is:

> [!example] While the computer is still owned
> | | 1 Jan 2025 | 30 Jun 2025 |
> |---|---:|---:|
> | Equipment, at cost | 2,000 | 2,000 |
> | Less: accumulated depreciation | (0) | (250) |
> | **Equipment, net book value** | **2,000** | **1,750** |
> | Cash | 0 | 0 |
> | **Total assets** | **2,000** | **1,750** |
> | Owner's capital | 2,000 | 2,000 |
> | Retained earnings | 0 | (250) |
> | **Total equity** | **2,000** | **1,750** |

At every date **Assets = Equity** (there are no liabilities). Once the computer is sold, both the cost and accumulated-depreciation lines vanish and only the $150 cash remains.

> [!tip] The lesson
> An early disposal crystallises the **unrecovered cost as a one-off loss**. The $1,850 total hit ($250 depreciation + $1,600 loss) equals cost $2,000 − proceeds $150. Depreciation only ever spreads cost; disposal trues it up to reality.

---

## Exercise 2 — Accrued Utility Expense

> Jan–Nov 2025 the company receives a **$750** electricity bill by the 10th of the following month. For **Dec 2025** it estimates **$1,000** (cold winter). Entries & balances at 1/1/2025, 30/6/2025, 31/12/2025.

The bill arrives next month, but the electricity is **consumed in the month itself** → accrue the expense each month-end, then settle it when the bill is paid. December has no bill yet, so you accrue an **estimate**.

#### The journal — one representative cycle + year-end

| Date | Account | Dr ($) | Cr ($) |
|------|---------|------:|------:|
| 31 May 2025 | Electricity Expense | 750 | |
| | &emsp;Accrued Expense Payable | | 750 |
| | *Accrue May electricity — used but not yet billed* | | |
| 10 Jun 2025 | Accrued Expense Payable | 750 | |
| | &emsp;Cash | | 750 |
| | *Pay the May bill when it arrives next month* | | |
| 31 Dec 2025 | Electricity Expense | 1,000 | |
| | &emsp;Accrued Expense Payable | | 1,000 |
| | *Accrue estimated December bill (cold winter)* | | |

> [!tip] The two-step accrual cycle
> **Step 1 (month-end):** record the **expense** and a matching **liability** — you've used the power but haven't paid. **Step 2 (next month):** when the bill is paid, debit the **liability** away and credit **Cash**. The payment records **no expense** — that was already booked in step 1. Recording expense again on payment would double-count.

#### How it lands on the financial statements

| Balance sheet extract | 1 Jan 2025 | 30 Jun 2025 | 31 Dec 2025 |
|---|---:|---:|---:|
| **Current liabilities** | | | |
| &emsp;Accrued Expense Payable | 750\* | 750 | 1,000 |

\*The December-2024 bill carried into 1 Jan, paid ~10 Jan; thereafter one month's bill always sits unpaid.

| Income statement | YTD 30 Jun | Full year |
|---|---:|---:|
| Electricity expense | 4,500 (6 × 750) | 9,250 (11 × 750 + 1,000) |

> [!warning] Estimates are still accruals
> December's bill hasn't arrived, but the expense **belongs to 2025** because the electricity was used in 2025. You accrue your **best estimate** ($1,000); when the real bill lands in January you adjust any small difference. Waiting for the invoice would wrongly push the cost into 2026.

---

## Exercise 3 — Accrued Interest Income

> On **Jan 1 2024** the company deposits **$100M** of IPO proceeds in a **3% interest-bearing account**; interest is **paid annually**. Entries & balances at 1/1/2025, 30/6/2025, 31/12/2025.

> [!warning] Assumption
> "Monthly 3% interest" is ambiguous; this solution reads it as **3% per annum**, accruing through the year and **paid each 1 January for the preceding year**. If the lecturer meant 3% *per month*, scale the figures up accordingly.

Annual interest = $100M × 3% = **$3M/yr** (= $250k/month accruing). Figures below in **$000s**.

#### The journal

| Date | Account | Dr ($000s) | Cr ($000s) |
|------|---------|------:|------:|
| Monthly, 2024 | Interest Receivable | 250 | |
| | &emsp;Interest Income | | 250 |
| | *Accrue one month's interest as it is earned* | | |
| 1 Jan 2025 | Cash | 3,000 | |
| | &emsp;Interest Receivable | | 3,000 |
| | *Collect the full 2024 interest in cash* | | |
| 30 Jun 2025 | Interest Receivable | 1,500 | |
| | &emsp;Interest Income | | 1,500 |
| | *Accrue Jan–Jun 2025 interest (6 × 250)* | | |
| 31 Dec 2025 | Interest Receivable | 1,500 | |
| | &emsp;Interest Income | | 1,500 |
| | *Accrue Jul–Dec 2025 interest; receivable now 3,000* | | |

> [!tip] The mirror image of an accrued expense
> Accrued **income** is the flip of Exercise 2: you book the income as it's **earned** (debit the asset **Interest Receivable**) even though cash lands later. When cash finally arrives you debit **Cash** and credit the receivable away — **no income** is recorded on collection, because it was already recognised as it accrued.

#### How it lands on the balance sheet

| Balance sheet extract ($000s) | 1 Jan 2025 | 30 Jun 2025 | 31 Dec 2025 |
|---|---:|---:|---:|
| **Current assets** | | | |
| &emsp;Cash | +3,000 received | — | — |
| &emsp;Interest Receivable | 0\* | 1,500 | 3,000 |
| Interest income (P&L, YTD 2025) | — | 1,500 | 3,000 |

\*The 2024 receivable is collected in cash on 1 Jan, netting to zero, then re-accrues through 2025.

---

# Part B — Raising Debt & Capital

> Theory: [[Session 3 - Raising Debt and Capital]] and [[Session 4 - Incorporation, Corporate Taxes & Employee Compensation]].

## Exercise 4 — Equity Raise, Bank Loan, 3 Years of Statements

> - 1 Jan 2023: raise **$5M** at **$20M pre-money** (→ $25M post-money; investor owns 20%).
> - 1 Jan 2024: **$8M** loan, repaid in **3 equal annual installments** starting 1 Jan 2025, **12%** interest paid each 1 Jan for the preceding year.
> - Tax **25%**. Operating income ($000s): **2023 = 1,200 · 2024 = 2,000 · 2025 = 950**.
> - Required: balance sheets, net income, and cash flows for 2023–2025.

> [!warning] Assumptions
> Operating income is treated as **cash**; **tax and interest are paid one year in arrears** (so they sit as payables at year-end). All figures $000s.

### The key journal entries

Operating income is shown as a single cash posting each year; the financing, interest and tax entries are the ones being tested.

| Date | Account | Dr ($000s) | Cr ($000s) |
|------|---------|------:|------:|
| 1 Jan 2023 | Cash | 5,000 | |
| | &emsp;Share Capital | | 5,000 |
| | *Equity raise — $5M at $20M pre-money (investor owns 20%)* | | |
| 31 Dec 2023 | Tax Expense | 300 | |
| | &emsp;Tax Payable | | 300 |
| | *Accrue 2023 tax (1,200 × 25%), paid next year* | | |
| 1 Jan 2024 | Cash | 8,000 | |
| | &emsp;Loan Payable | | 8,000 |
| | *Draw down the $8M bank loan* | | |
| 31 Dec 2024 | Interest Expense | 960 | |
| | &emsp;Interest Payable | | 960 |
| | *Accrue 2024 interest (8,000 × 12%), paid 1 Jan 2025* | | |
| 31 Dec 2024 | Tax Expense | 260 | |
| | &emsp;Tax Payable | | 260 |
| | *Accrue 2024 tax (1,040 × 25%)* | | |
| 1 Jan 2025 | Interest Payable | 960 | |
| | Tax Payable | 260 | |
| | Loan Payable | 2,667 | |
| | &emsp;Cash | | 3,887 |
| | *Pay 2024 interest + 2024 tax + first principal installment (8,000 ÷ 3)* | | |
| 31 Dec 2025 | Interest Expense | 640 | |
| | &emsp;Interest Payable | | 640 |
| | *Accrue 2025 interest on the reduced 5,333 balance × 12%* | | |
| 31 Dec 2025 | Tax Expense | 77.5 | |
| | &emsp;Tax Payable | | 77.5 |
| | *Accrue 2025 tax (310 × 25%)* | | |

> [!tip] Why interest falls in 2025
> The loan is a **reducing-balance** repayment: the first $2,667 installment is paid on 1 Jan 2025, so interest for 2025 is charged on the **remaining $5,333**, not the original $8,000. Each year the interest charge shrinks as the principal is paid down.

### Net income

| ($000s) | 2023 | 2024 | 2025 |
|---|---|---|---|
| Operating income | 1,200 | 2,000 | 950 |
| Interest expense | 0 | (960)¹ | (640)² |
| **Pre-tax income** | 1,200 | 1,040 | 310 |
| Tax @ 25% | (300) | (260) | (77.5) |
| **Net income** | **900** | **780** | **232.5** |

¹ 2024 interest = $8,000 × 12% = **960** (full year on the loan).
² 2025: first installment of $8,000 ÷ 3 = **2,667** is repaid 1 Jan 2025, leaving **5,333** outstanding → interest = 5,333 × 12% = **640**.

### Balance sheets (year-end)

| ($000s) | 2023 | 2024 | 2025 |
|---|---|---|---|
| **Cash** | 6,200 | 15,900 | 12,963 |
| **Total assets** | **6,200** | **15,900** | **12,963** |
| Loan payable | 0 | 8,000 | 5,333 |
| Interest payable | 0 | 960 | 640 |
| Tax payable | 300 | 260 | 77.5 |
| **Total liabilities** | **300** | **9,220** | **6,050.5** |
| Share capital | 5,000 | 5,000 | 5,000 |
| Retained earnings | 900 | 1,680 | 1,912.5 |
| **Total equity** | **5,900** | **6,680** | **6,912.5** |
| **Liab. + equity** | **6,200** | **15,900** | **12,963** |

✓ Each year **Assets = Liabilities + Equity**.

### Cash flows

| ($000s) | 2023 | 2024 | 2025 |
|---|---|---|---|
| Operating income (cash) | 1,200 | 2,000 | 950 |
| − Tax paid (prior year) | 0 | (300) | (260) |
| − Interest paid (prior year) | 0 | 0 | (960) |
| **CF from operations** | **1,200** | **1,700** | **(270)** |
| Equity raised | 5,000 | 0 | 0 |
| Loan drawn | 0 | 8,000 | 0 |
| Loan principal repaid | 0 | 0 | (2,667) |
| **CF from financing** | **5,000** | **8,000** | **(2,667)** |
| **Net change in cash** | **6,200** | **9,700** | **(2,937)** |
| **Closing cash** | **6,200** | **15,900** | **12,963** |

> [!tip] Why 2025 cash falls despite a profit
> 2025 makes a $232.5k profit, yet cash drops $2.94M. The killers are the **$2,667 principal repayment** (a financing outflow that never touches the income statement) plus paying **last year's** $960 interest and $260 tax. ==Profit ≠ cash== — the gap is timing and balance-sheet movements, the core lesson of [[Session 5 - Financial Statements Analysis]].

---

## Exercise 5 — Statement of Shareholders' Equity (SAFE + Priced Round)

> - 1 Jan 2025: Founders contribute **$100,000** → 100,000 common shares, **$0.01 par**.
> - 1 Feb 2025: SAFE with Investor A for **$500,000** (**30% discount** *or* **$5M cap**).
> - Nov 2025: Investor B round of **$3,000,000** for Preferred A at **$8M pre-money**.
> - Required: Statement of Shareholders' Equity at 31 Dec 2025.

*(This is the equity half of [[Assignment 1 - ABC Inc Full-Year Accounting|Assignment 1]] — same numbers.)*

**SAFE conversion (triggered by Investor B's round):** compare the two terms and give Investor A the **lower** price (more shares):

| Method | Price per share | Result |
|--------|----------------|--------|
| 30% discount on round | $8M ÷ 100,000 = $80 → ×70% = **$56.00** | worse for A |
| **$5M cap** | $5,000,000 ÷ 100,000 founder shares = **$50.00** | **cap wins** ✓ |

→ Investor A receives $500,000 ÷ $50 = **10,000 Preferred A shares**.

**Investor B price:** the round is priced on the shares outstanding **before the SAFE converts** (the founders' 100,000) = $8,000,000 ÷ 100,000 = **$80.00/share** → $3,000,000 ÷ $80 = **37,500 Preferred A shares**.

> [!tip] Why the price uses the pre-SAFE share count
> The new round is priced on the shares outstanding **before** the SAFE converts (100,000), giving **$80/share**. The SAFE's 10,000 shares then convert alongside and dilute everyone, so Investor B's final stake works out to **25.42%** — just below the $3M ÷ $11M ≈ 27% you might expect, because the converting SAFE dilutes the new investor too.

#### The journal

| Date | Account | Dr ($) | Cr ($) |
|------|---------|------:|------:|
| 1 Jan 2025 | Cash | 100,000 | |
| | &emsp;Common Stock (par: 100,000 × $0.01) | | 1,000 |
| | &emsp;APIC — Common | | 99,000 |
| | *Founders' contribution — par vs premium split* | | |
| 1 Feb 2025 | Cash | 500,000 | |
| | &emsp;SAFE Liability | | 500,000 |
| | *Investor A's SAFE — a liability until it converts* | | |
| Nov 2025 | SAFE Liability | 500,000 | |
| | &emsp;Preferred Stock A — APIC | | 500,000 |
| | *SAFE converts at the $5M cap → 10,000 Preferred A* | | |
| Nov 2025 | Cash | 3,000,000 | |
| | &emsp;Preferred Stock A — APIC | | 3,000,000 |
| | *Investor B priced round → 37,500 Preferred A* | | |

> [!tip] A SAFE is a liability, then equity
> When the cash comes in (1 Feb) the SAFE is a **liability** — you owe future shares but the round hasn't happened. At conversion you **debit the liability away** and **credit equity**; total assets don't move, the obligation simply turns into stock.

> [!example] Statement of Shareholders' Equity — 31 Dec 2025
> | Component | Shares | Amount |
> |---|---|---|
> | Common Stock (par $0.01 × 100,000) | 100,000 | $1,000 |
> | APIC — Common | — | $99,000 |
> | Preferred A — SAFE conversion (Investor A) | 10,000 | $500,000 |
> | Preferred A — Investor B | 37,500 | $3,000,000 |
> | **Total contributed capital** | **147,500** | **$3,600,000** |
>
> *(Retained earnings/deficit from the year's trading would be added below; this exercise covers only the capital events.)*

> [!example] Resulting ownership (cap table)
> | Shareholder | Shares | Interest |
> |---|---:|---:|
> | Founders — common | 100,000 | 67.80% |
> | Investor A — Preferred A (via SAFE) | 10,000 | 6.78% |
> | Investor B — Preferred A | 37,500 | 25.42% |
> | **Total** | **147,500** | **100%** |

> [!warning] Exam trap — the cap beats the discount here
> Students instinctively apply the discount. Always compute **both** and take whichever gives the investor the **lower conversion price**. The $5M cap ($50/sh) beats the 30% discount ($56/sh), so the cap governs.

---

# Part C — Employees' Stock Options

> Theory: [[Session 4 - Incorporation, Corporate Taxes & Employee Compensation]] (Black-Scholes, vesting).

## Exercise 6 — Option Valuation & Sensitivities

> 31 May 2024: grant **10,000 options**, **10-yr term**, exercise price **$10**, vesting **4 yrs** (1-yr cliff then 1/48 monthly). Risk-free **3.5%**, volatility **60%**, dividend yield **0%**.

### Sensitivities (how each input moves a call option's value)

| Change | Direction | Why |
|--------|-----------|-----|
| Exercise price $10 → **$15** | **▼ Decreases** | Higher strike = you pay more to exercise = less valuable call |
| Vesting period 4 → **3 yrs** | **≈ No change to fair value** | Vesting affects **expense timing**, not the per-option Black-Scholes value (unless it shortens the *expected term*) |
| Term 10 → **4.5 yrs** | **▼ Decreases** | Less time for the stock to climb above strike (time value falls) |
| Volatility 60% → **80%** | **▲ Increases** | More upside dispersion; downside is capped at zero → options love volatility |

> [!tip] One-line memory aid
> A call gets **more** valuable with higher **stock price, volatility, time, and rate**; **less** valuable with higher **strike and dividends**. (Vesting just paces the expense.)

### Grant-date value (Black-Scholes)

> [!warning] Assumptions
> The market price at grant is unstated; assume **at-the-money** (S = K = $10). Expected term assumed **6.5 yrs** (typical for a 10-yr option with a 4-yr vest). Both materially affect the number — confirm against the lecturer's figures.

$$d_1 = \frac{\ln(S/K) + (r + \sigma^2/2)T}{\sigma\sqrt{T}} = \frac{0 + (0.035 + 0.18)(6.5)}{0.60\sqrt{6.5}} \approx 0.91$$

$$d_2 = d_1 - \sigma\sqrt{T} \approx 0.91 - 1.53 = -0.62$$

$$C = S\,N(d_1) - K e^{-rT} N(d_2) \approx 10(0.82) - 10(0.797)(0.269) \approx \boxed{\$6.05 \text{ per option}}$$

→ Total grant-date fair value ≈ 10,000 × $6.05 = **≈ $60,500**, expensed straight-line over the 4-year vesting period (≈ $60,500 ÷ 48 = **$1,260/month**). **Nothing is recorded on the grant date itself** — it is only the measurement date (see [[Session 4 - Incorporation, Corporate Taxes & Employee Compensation]] and the fuller worked treatment in [[Assignment 2 - HAWK Analysis & Fiverr Options|Assignment 2]]).

#### The journal — recognising the expense

No entry at grant. Thereafter, each period:

| Date | Account | Dr | Cr |
|------|---------|------:|------:|
| Grant (31 May 2024) | *— no entry —* | | |
| Each period over vesting | Stock-Based Compensation Expense | 1,260/mo | |
| | &emsp;APIC — Stock Options | | 1,260/mo |
| | *Recognise the option cost as the employee earns it* | | |

> [!tip] The credit is equity, not a liability
> The offset goes to **APIC — Stock Options** (equity), because the company will settle by delivering **shares**, not cash. Equity-settled awards never create a payable.

---

# Part D — Business Combinations

> Theory: [[Session 7 - Business Combination]]. This is a **step acquisition**: Exercise 7 (25%, influence) → Exercise 8 (75%, control).

## Exercise 7 — First Tranche: 25% Stake

> 1 Jan 2025: Harvest buys **500,000 shares** of Beans LLC from an existing shareholder for **$2M**. Beans has **2,000,000 shares** outstanding. Beans price: 31 Dec 2024 = **$4**; 31 Jan 2025 Beans declares a **$2/share dividend**. How is this reflected in Harvest's FS at 30 Jun 2025?

**Ownership = 500,000 ÷ 2,000,000 = 25%** → 20–50% band → ==Equity Method== (associate). Cost = $2M ($4.00/share, matching market).

#### The journal ($000s)

| Date | Account | Dr | Cr |
|------|---------|------:|------:|
| 1 Jan 2025 | Investment in Beans | 2,000 | |
| | &emsp;Cash | | 2,000 |
| | *Acquire 25% — record at cost* | | |
| 31 Jan 2025 | Cash | 1,000 | |
| | &emsp;Investment in Beans | | 1,000 |
| | *$2/sh dividend on 500,000 sh — under the equity method this is a **return of capital**, not income, so it **reduces** the investment* | | |

> [!example] Investment carrying value at 30 Jun 2025
> | | Amount |
> |---|---|
> | Cost | $2.0M |
> | Less dividend received | $(1.0M) |
> | Plus share of Beans' H1 profit | *not given* |
> | **Carrying value** | **$1.0M** (before any profit share) |

> [!warning] Classification decision matters
> At **25%** this is the equity method, so the dividend **reduces the investment**. Had the stake been **< 20%** (a [[Financial Asset]]), the same dividend would instead be **income** in the P&L and the holding would be remeasured to fair value through profit or loss. Know which regime you're in before you book the dividend.

---

## Exercise 8 — Second Tranche: Crossing to Control (75%)

> 1 Jul 2025: Harvest buys **1,000,000 more shares** from the founder for **$5M**; Beans price that day = **$4.50**. Now owns **1,500,000 ÷ 2,000,000 = 75%** → **control**. Beans' 30 Jun 2025 balance sheet: Assets BV **2,000** / FV **5,000**; Liabilities BV **1,000** / FV **1,000** ($000s). Reflect in Harvest's FS at 31 Dec 2025.

Obtaining control triggers the ==Acquisition Method== (IFRS 3). Three things happen at once:

**1 — Remeasure the previously held 25% to fair value.**
Prior 500,000 shares × $4.50 = **$2,250** ($000s). Carrying value was ~$1,000 (Ex. 7) → **remeasurement gain to P&L ≈ $1,250**.

**2 — Compute goodwill** (full-goodwill basis):

| ($000s) | Amount |
|---|---|
| Consideration for new 50% | 5,000 |
| + Fair value of previously held 25% | 2,250 |
| + Fair value of NCI (25% × 2,000,000 × $4.50) | 2,250 |
| **A — Total** | **9,500** |
| FV of identifiable assets | 5,000 |
| − FV of liabilities | (1,000) |
| **B — Net identifiable assets at FV** | **4,000** |
| **Goodwill = A − B** | **5,500** |

$$\boxed{\text{Goodwill} = 9{,}500 - 4{,}000 = \$5{,}500\text{k}}$$

**3 — Consolidate** Beans 100% from 1 Jul 2025: all assets/liabilities at fair value, goodwill $5,500, NCI $2,250 in equity, and H2-2025 income split 75% Harvest / 25% NCI.

#### The journal ($000s)

First, remeasure the old stake; then post the acquisition (consolidation) entry.

| Date | Account | Dr | Cr |
|------|---------|------:|------:|
| 1 Jul 2025 | Investment in Beans | 1,250 | |
| | &emsp;Gain on Remeasurement (P&L) | | 1,250 |
| | *Step the old 25% up from carrying 1,000 to fair value 2,250* | | |
| 1 Jul 2025 | Identifiable Net Assets — at FV | 5,000 | |
| | Goodwill | 5,500 | |
| | &emsp;Liabilities — at FV | | 1,000 |
| | &emsp;Cash (new consideration) | | 5,000 |
| | &emsp;Investment in Beans (remeasured 25%) | | 2,250 |
| | &emsp;Non-Controlling Interest (25%) | | 2,250 |
| | *Recognise Beans' net assets at FV, derecognise the old investment, raise goodwill & NCI* | | |

*Check:* debits 5,000 + 5,500 = **10,500** = credits 1,000 + 5,000 + 2,250 + 2,250 = **10,500**. ✓

> [!example] What hits Harvest's 31 Dec 2025 consolidated statements
> - **Remeasurement gain** ≈ $1,250 (in P&L) on the old 25% stake.
> - **Goodwill** $5,500 recognised (impairment-tested, not amortised).
> - **NCI** $2,250 in equity.
> - Beans' assets (at the $3,000 stepped-up FV) and liabilities consolidated line-by-line; the asset **step-up of $3,000** would be depreciated/amortised over H2 2025 — *composition not given, so it's noted rather than quantified.*

> [!tip] The signature move of a step acquisition
> When you cross from influence to control you must **revalue your old stake to fair value and run the gain/loss through P&L**, as if you sold and rebought it. The acquisition-date fair value of that old interest then becomes part of the consideration used to compute goodwill.

---

# Part E — Revenue Recognition

> Theory: [[Session 8 - Revenue Recognition]] (the five-step ASC 606 / IFRS 15 model). Each answer states **whether**, **when**, and **how much**.

## Exercise 9 — Subscription With a History of Concessions

> $10,000 subscription, but the company habitually lets clients slide or grants 50% discounts mid-year.

> [!success] Answer
> **Yes, but not at $10,000.** Your customary practice creates an **implied price concession** → the $10,000 is **variable consideration** (Step 3). The transaction price is the amount you *expect to be entitled to*, so estimate it (expected value / most-likely amount) and apply the **constraint**. If you typically end up at ~50%, recognise **≈ $5,000**, **over the subscription period** as the service is delivered. Recognising the full $10,000 would over-state revenue and reverse later.

## Exercise 10 — Verbal Promise of a Free Future Module

> Standard 1-yr SaaS; nothing in writing about updates, but sales **verbally promised** a free Q3 reporting module.

> [!success] Answer
> A contract includes **implied promises** arising from statements that create a valid customer expectation. The verbal promise is therefore a **second performance obligation** (Step 2). Allocate the price across the subscription and the module by their **standalone selling prices** (Step 4); recognise the subscription **ratably over the year**, and **defer** the module's slice until **control of it transfers in Q3**.

## Exercise 11 — Strategic Account With Habitual "Loyalty Credits"

> $100,000 fixed enterprise contract, but management historically grants ~20% concessions mid-year to such accounts.

> [!success] Answer
> Same mechanism as Ex. 9: the habitual concession is **variable consideration / implied price concession**. Expected entitlement ≈ **$80,000** ($100k − 20%). Recognise revenue **at the constrained ~$80,000**, **over time** as performance occurs; exclude the $20,000 you expect to concede.

## Exercise 12 — Goods Plus a Deep-Discount Voucher

> Sells raw materials for $100,000 **plus** a voucher for **40% off** next quarter's purchases (deeper than normal).

> [!success] Answer
> Because 40% exceeds the customer's usual discount, the voucher confers a ==material right== → a **separate performance obligation** (Step 2). Allocate part of the $100,000 to the voucher by its SSP (estimated discount value × redemption probability) and **defer** that portion. Recognise the **materials revenue (net of the voucher allocation) at the point of transfer**; recognise the voucher's revenue **when it is redeemed or expires**.

## Exercise 13 — Perpetual Licence Bundled With Mandatory Hosting

> Perpetual **on-prem** licence downloaded to the client's servers, bundled with **12 months of mandatory cloud hosting + support**.

> [!success] Answer
> Test whether the licence is **distinct**. An on-prem perpetual licence the customer downloads and can use is normally **distinct** → recognise the licence **at a point in time** (when control/the download transfers) and the **hosting + support over the 12 months**, allocating the price by SSP. **However**, if the software **cannot function without** the mandatory hosting (highly integrated), the two are a **single combined performance obligation** recognised **over time** across the 12 months. The pivotal judgment is **functional dependence**.

> [!warning] The thread running through Ex. 9–13
> Three patterns recur: (1) **implied price concessions** make the stated price *variable* (9, 11); (2) **implied or bundled promises** create *extra performance obligations* to be allocated and deferred (10, 12, 13); (3) recognition always follows **transfer of control**, point-in-time vs over-time (13). Cash and the headline contract price rarely equal recognised revenue.

---

## 📚 Summary — What Each Exercise Tests

| # | Topic | Key takeaway |
|---|-------|--------------|
| 1 | Depreciation & disposal | Early disposal → loss = NBV − proceeds |
| 2 | Accrued expense | Estimate & accrue the cost in the period used |
| 3 | Accrued income | Income earned but not yet received = receivable asset |
| 4 | Debt, equity & 3-statement build | Profit ≠ cash; principal repayment bypasses the P&L |
| 5 | SAFE + priced round | Take the **lower** SAFE conversion price (cap vs discount) |
| 6 | Option valuation | ▲ vol/time/price; ▼ strike/dividends; vesting paces expense |
| 7 | 25% stake | Equity method — dividend **reduces** the investment |
| 8 | Step to control | Remeasure old stake to FV (gain to P&L), then goodwill |
| 9–13 | Revenue recognition | Variable consideration, implied obligations, control transfer |

---

## Related Notes

- [[Accounting]] — subject hub
- [[Session 2 - Accounting Fundamentals]] — Ex. 1–3 (accruals, depreciation)
- [[Session 3 - Raising Debt and Capital]] — Ex. 4–5 (debt, SAFE, priced rounds)
- [[Session 4 - Incorporation, Corporate Taxes & Employee Compensation]] — Ex. 6 (options)
- [[Session 7 - Business Combination]] — Ex. 7–8 (equity method, consolidation)
- [[Session 8 - Revenue Recognition]] — Ex. 9–13 (five-step model)
- [[_Wiki-Link Registry]] — concept-link tracker
