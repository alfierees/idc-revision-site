---
title: "Session 3 — Raising Debt and Capital"
session: 3
semester: 2
course: Accounting & Financial Essentials for Entrepreneurs
tags:
  - accounting
  - capital-structure
  - raising-debt
  - raising-equity
  - leverage
  - common-stock
  - preferred-stock
  - SAFE
  - valuation
  - tax-shield
  - corporate-finance
subject: accounting
in_scope: true
---

# Session 3 — Raising Debt and Capital

> Part of: [[Accounting]]
> Capital Structure, Equity & Debt Financing, Valuation, Funding Lifecycle
> Key concepts: [[Capital Structure]], [[Leverage]], [[Common Stock]], [[Preferred Stock]], [[SAFE]], [[Pre-Money Valuation]], [[Post-Money Valuation]], [[Tax Shield]]

---

## 📚 1. Financial Identity — Recap from [[Session 2 - Accounting Fundamentals|Session 2]]

The [[Balance Sheet]] is the company's *financial identity*. It captures the company's position on a single day, and is built from three sections that always satisfy the fundamental equation:

$$\boxed{\text{ASSETS} = \text{LIABILITIES} + \text{EQUITY}}$$

| Side       | Sections                  | Economic Meaning                              |
| ---------- | ------------------------- | --------------------------------------------- |
| LEFT       | Assets                    | **Usages** — what the company *does* with money |
| RIGHT      | Liabilities + Equity      | **Resources** — where the money *came from*    |

The Balance Sheet shows **ending balances of cumulative accounts** since the company was incorporated — it is a "snapshot," not a "movie." Every dollar spent (Asset) had to come from somewhere (Liability or Equity). This session is about the right-hand side: how the company gets those resources.

> [!tip] Mental model
> Think of the balance sheet like a kitchen: the ingredients in the fridge (Assets) had to be paid for either by money you borrowed (Liabilities) or money out of your own pocket (Equity). The ingredients can never be more or less than the money you used to buy them.

---

## 📚 2. [[Capital Structure]]

The mix of **Liabilities** vs. **Equity** that funds the company is its **Capital Structure**. The choice has huge implications for risk, cost, and control.

### 2.1 Leverage

When a company funds itself with **more liabilities and less equity**, it is said to be highly **levered**.

> [!warning] Why leverage = risk
> Equity has no repayment date. Debt has a fixed schedule. A levered company has *contractual* future cash outflows (principal + interest). If the business hits a rough patch, it might be unable to make those payments — leading to default or bankruptcy.

### 2.2 Why is Debt Riskier *to the Borrower*?

| Equity                                          | Debt                                             |
| ----------------------------------------------- | ------------------------------------------------ |
| No repayment date                               | Must be repaid by a fixed date                   |
| No interest                                     | Carries interest + fees                          |
| Dividends only if declared (and there's profit) | Interest is mandatory, even in loss-making years |
| Diluted ownership but no default risk           | Default risk if cash runs short                  |

### 2.3 Capital Structure Pyramid — Risk to the *Lender* / Provider of Capital

This is the single most important diagram of the session. It ranks every form of capital from safest (top) to riskiest (bottom) **for the person putting money in**:

```
                    ▲ Low Risk · High Default Priority · Low Cost (to company)
              ┌────────────────────┐
              │ Senior Secured     │  ← Bank loans, first-lien bonds
              │      Bonds         │
              ├────────────────────┤
              │ Senior Unsecured   │  ← Corporate bonds, credit lines
              │      Bonds         │
              ├────────────────────┤
              │ Convertible &      │  ← "Mezzanine" — sits between debt & equity
              │ Subordinated Debt  │
              ├────────────────────┤
              │ Preferred Stock    │  ← Equity, but with preference rights
              ├────────────────────┤
              │   Common Stock     │  ← Last in line; biggest upside
              └────────────────────┘
                    ▼ High Risk · Low Default Priority · High Cost (to company)
```

> [!info] Reading the pyramid two ways
> - **Risk:** As you go down the pyramid, the holder is paid LATER in a bankruptcy → higher risk → demands higher return.
> - **Cost to the company:** Higher risk capital is more expensive to raise. Senior secured debt might cost 5%, common stock might "cost" 15–20% (i.e. the return investors expect).

### 2.4 The Order of Payment in Bankruptcy ("Waterfall")

| Priority | Claimant                          | What they get if there's money left |
| -------- | --------------------------------- | ----------------------------------- |
| 1        | Senior Secured Bondholders        | Paid first from collateral          |
| 2        | Senior Unsecured Bondholders      | Paid from remaining assets          |
| 3        | Subordinated / Convertible Debt   | Paid only if 1 & 2 are made whole   |
| 4        | Preferred Shareholders            | Get a fixed amount before commons   |
| 5        | Common Shareholders               | Whatever is left (often nothing)    |

### 2.5 Detailed Risk Hierarchy (from the Slides)

| Tier | Examples |
|---|---|
| Super senior debt | Revolving credit facility |
| Super secured debt | Bank loans, first lien loans/bonds |
| Secured debt | Second lien, mezzanine loans |
| Senior unsecured debt | Corporate bonds, credit lines, bilateral loans |
| Subordinated debt | Subordinated bonds and loans |
| Hybrid / Quasi equity | Convertible bonds, contingent capital |
| Ordinary shares | Common equity |

---

## 📚 3. The Road of Funding — Start-up Lifecycle

Different sources of capital are appropriate at different stages. The "valley of death" is the early period when a start-up has costs but minimal revenue — surviving it is the central financial challenge.

| Stage                         | Typical Funding Sources                                                 | What's Happening                          |
| ----------------------------- | ----------------------------------------------------------------------- | ----------------------------------------- |
| Pre-revenue (Valley of Death) | Founders' savings, **FFF** (Family/Friends/Fools), Angels, Crowdfunding | No revenue; runway is everything          |
| Seed Capital                  | Angels, [[SAFE]], early-stage VCs                                       | First product; finding product–market fit |
| Early Stage (Series A / B)    | VCs, strategic partners                                                 | Scaling go-to-market                      |
| Later Stage (Series C+)       | Larger VCs, M&A, strategic alliances                                    | Expansion / international rollout         |
| Mezzanine                     | Private debt, [[Convertible Bonds]]                                     | Bridge to liquidity event                 |
| CrossOver Funding             | Late-stage public-style investors                                       | Pre-IPO transition                        |
| Public Market                 | IPO, Secondary Offerings                                                | Listed, regulated, retail investors       |

> [!tip] What does "FFF" stand for?
> **Family, Friends, and Fools** — the people willing to back you on belief alone, before the metrics exist to convince a professional investor.

---

## 📚 4. Raising Equity

Equity = giving up a slice of *ownership* in exchange for cash. The investor becomes a part-owner; the founder is diluted.

### 4.1 Shares Equity — Key Vocabulary

Every company has a **registered capital pool** defined in its Articles of Association. Within this pool, shares move between three states:

| Pool | Definition |
|---|---|
| **Authorized** | Maximum number of shares the company is allowed to issue (per the Articles) |
| **Issued** | Shares actually sold/given to shareholders |
| **Outstanding** | Issued shares that are still in shareholders' hands (i.e. not bought back) |

Every share has a **Par Value** — a nominal "face value" set at incorporation (often $0.01 or even $0). It plays no real economic role today, but historically served as a legal *cushion* protecting creditors. Par Value × number of issued shares = **Share Capital** on the balance sheet. Anything paid above par goes into **Additional Paid-in Capital (APIC)**.

> [!info] Identity worth memorising
> Cash received from a share issuance =
> Share Capital (par × shares) + Additional Paid-in Capital (premium × shares)

### 4.2 Worked Example — Issuing Shares to a New Investor

> [!example] Company ABC, Inc.
> - Registered capital: 1,000 shares, par value $0.01
> - Founders contributed $100,000 in exchange for 600 shares
> - An investor invests $1,000,000 for **20%** of the company
>
> **Q1: How many shares does the investor receive?**
>
> The investor will hold 20% post-issuance, so the founders' 600 shares = 80% of the total post-issuance.
>
> $$\text{Total shares post-issuance} = \frac{600}{80\%} = 750$$
>
> $$\boxed{\text{Investor receives } 750 - 600 = 150 \text{ shares}}$$
>
> **Q2: What is the issue price per share?**
>
> $$\text{Price per share} = \frac{\$1{,}000{,}000}{150} = \$6{,}666.67$$
>
> **Q3: How does the Statement of Shareholders' Equity look after issuance?**
>
> | Line item                         | Founders | Investor      | Total            |
> | --------------------------------- | -------- | ------------- | ---------------- |
> | Shares issued                     | 600      | 150           | 750              |
> | Share Capital (par × shares)      | $6.00    | $1.50         | $7.50            |
> | Additional Paid-in Capital (APIC) | $99,994  | $999,998.50   | $1,099,992.50    |
> | **Total Equity Contributed**      | **$100,000** | **$1,000,000** | **$1,100,000** |
>
> **Journal entry for the new investment:**
> - DEBIT Cash $1,000,000
> - CREDIT Share Capital $1.50 (150 × $0.01)
> - CREDIT Additional Paid-in Capital $999,998.50

### 4.3 Pre-Money vs Post-Money Valuation

This is the most-confused vocabulary in start-up finance. Memorise the relationship:

$$\boxed{\text{Post-Money Valuation} = \text{Pre-Money Valuation} + \text{New Investment}}$$

$$\boxed{\text{Investor's \% Ownership} = \frac{\text{Investment}}{\text{Post-Money Valuation}}}$$

| Term | Meaning | When it applies |
|---|---|---|
| [[Pre-Money Valuation]] | The agreed value of the company **BEFORE** new money goes in | Used to negotiate the round |
| [[Post-Money Valuation]] | Pre-money + the new investment cheque | Used to compute investor % |

> [!example] Pre/Post Worked Example (slide 9)
> Investor invests $250,000 at a $1,000,000 *pre-money* valuation.
>
> $$\text{Post-money} = \$1{,}000{,}000 + \$250{,}000 = \$1{,}250{,}000$$
>
> $$\text{Investor \%} = \frac{\$250{,}000}{\$1{,}250{,}000} = 20\%$$
>
> **Founders go from 100% → 80% (diluted by 20%).**

> [!warning] Common trap
> If a term sheet says "valuation $1M, investment $250K", always ask: **pre or post?** A $1M *post*-money valuation gives the investor 25% ($250K/$1M), not 20%. The difference can be life-changing.

### 4.4 [[Common Stock]] — Ordinary Shares

Common stock is the basic equity security. Holders get:

| Right | Description |
|---|---|
| Voting rights | Vote on directors, mergers, major decisions (typically 1 vote / share) |
| Dividend rights | Receive a proportional share of any dividend declared |
| Rights upon dissolution | Receive a proportional share of whatever is left after creditors and preferred shareholders are paid |

The very first ordinary shares issued are often called **"Founders Stock."** Modern IPOs (especially "unicorns") sometimes issue *multiple classes* of common stock with different voting rights — e.g. Founders' Class B with 10 votes/share vs. public Class A with 1 vote/share. This lets founders keep control even when they own a minority of shares.

### 4.5 [[Preferred Stock]] — Preferred Shares

Preferred stock sits *above* common stock in the capital structure. The "preference" is a bundle of contractual rights negotiated with each round:

| Preferred Right | What It Means | Example |
|---|---|---|
| Liquidation preference | Get $X back **before** common in a sale/dissolution | "1× preference" → get original investment back first |
| Conversion rights | Right to convert preferred → common at some ratio | Convert to common to share in upside |
| Dividend preference | Get fixed dividend before any common dividend | E.g. 8% cumulative dividend |
| Redemption rights | Force the company to buy back the shares after N years | Acts like a debt repayment |
| Anti-dilution rights | Adjust conversion ratio if company later issues at a lower price ("down round") | Protects against future dilution |
| Tag-along rights | If founders sell, preferred can join on the same terms | Prevents being left behind |
| Right of First Refusal (ROFR) | First dibs on any new shares the company issues | Maintains ownership % |
| Preferred voting rights | Block-vote on certain decisions (e.g. M&A, new debt) | Gives veto power on major events |

> [!info] The Mezzanine Twist
> When preferred stock includes features that look more like *debt* (mandatory redemption, fixed dividend, etc.), accountants reclassify it on the balance sheet **outside Equity**, in a section called **Mezzanine** (between Liabilities and Equity). This is purely a presentation rule — the security itself is unchanged.

### 4.6 [[SAFE]] — Simple Agreement for Future Equity

A SAFE is a contract used in early-stage rounds. The investor gives cash NOW in exchange for the right to receive equity LATER (usually at the next priced round). It is **not debt** — there's no maturity date and no interest.

| Benefits of SAFE | Risks |
|---|---|
| Less complex than priced equity round | No fixed maturity → investor capital can sit indefinitely |
| No need to determine a valuation today | If next round never happens, investor may get nothing |
| Lower dilution (uses a **valuation cap**) | Caps and discounts can stack badly across multiple SAFEs |
| Built-in **discount** rewards the investor for early risk | Founders may end up giving away more than they realise once SAFEs convert |

> [!tip] How SAFEs convert (intuition)
> When the next priced round happens, the SAFE converts at the **better of**:
> - the new round price discounted by, say, 20%
> - the price implied by the **valuation cap**
>
> The cap protects the SAFE investor if the company's valuation explodes between SAFE and next round.

> [!example] SAFE Conversion — Numerical Walk-through
> Investor signs a SAFE for **$100,000** with:
> - **20% discount**
> - **$5M valuation cap**
>
> Next round (Series A) prices the company at **$10M post-money** at **$10/share**.
>
> | Method | Calculation | Implied Price |
> |---|---|---|
> | Discount | $10 × (1 - 20%) | $8.00 / share |
> | Cap | $5M cap implies $5/share (vs. $10 actual) | **$5.00 / share** |
>
> Cap wins (lower → more shares for investor).
>
> Shares received = $100,000 / $5 = **20,000 shares**
> Without SAFE protections, investor would have got only 10,000 shares — the SAFE doubled their stake for the same money.

---

## 📚 5. Raising Debt

Debt = borrowing money you must repay, with interest, by a contractual date. Unlike equity, lenders get no ownership and no say in the business — they just want their money back on schedule.

### 5.1 Types of Debt — From Short-Term to Mezzanine

| Category | Instruments | Typical Use |
|---|---|---|
| **Short-term Bank Credit** | Overdraft, On-Call loans | Plug working-capital gaps |
| **Asset-Backed Loans** | Revolving credit line, short-term loans, Letters of Credit (LCs) | Inventory finance, trade finance |
| **Senior Secured Debt** | Long-term loans backed by collateral | Major capex, acquisitions |
| **Senior Unsecured Debt** | Corporate bonds, credit lines | General corporate financing |
| **Subordinated Debt ("Mezzanine")** | Subordinated bonds, [[Convertible Bonds]] | Bridge financing, pre-IPO |

> [!note] Secured vs. Unsecured
> **Secured** debt is backed by specific collateral (e.g. a building, inventory, receivables). If the company defaults, the lender seizes the collateral. **Unsecured** debt has no specific collateral — only a general claim on the company's assets behind secured creditors.

### 5.2 Why Raise Debt? — The [[Tax Shield]]

This is the single most important reason a profitable company prefers debt to equity:

> [!info] Tax Shield Identity
> Interest expense is **tax-deductible**. Dividends are **not**.
> $$\boxed{\text{Net cost of debt} = \text{Interest} \times (1 - \text{Tax Rate})}$$
>
> If you pay $100 of interest and the corporate tax rate is 25%, your *real* after-tax cost is only **$75** — the government effectively pays $25 of your interest bill by reducing your tax.

| Reason to choose Debt | Effect |
|---|---|
| Tax shield | After-tax cost is lower than the headline interest rate |
| No dilution | Existing shareholders keep 100% of upside |
| No voting rights to debt holders | Founders keep control of the business |
| Cheaper than equity | Lenders bear lower risk → demand lower return |

| Reason NOT to choose Debt |
|---|
| Mandatory repayment schedule (default risk) |
| Covenants restrict flexibility (e.g. minimum cash, max leverage ratio) |
| Interest must be paid even in loss-making years |
| Excessive debt scares away later equity investors |

### 5.3 Public Debt Offering — The Process

Issuing bonds to the public is far more involved than taking a bank loan. The high-level steps:

```
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ Advisor Selection │ → │  Credit Rating   │ → │   Debt Offering  │
└──────────────────┘    └──────────────────┘    └──────────────────┘
     ↓                       ↓                        ↓
 • Strategy &           • Rating agency          • Decide debt
   Preparation            presentation              terms (size,
 • Information          • Due diligence            maturity, etc.)
   gathering            • Rating decision        • Appoint
 • Rating agency        • Information              underwriter
   selection              gathering              • Prepare
                                                   prospectus
                                                 • Bid book
                                                 • Issue & list
```

Key terms to define before going to market:
- **Term** — how many years until maturity?
- **Fixed or floating interest** — locked-in rate vs. tied to LIBOR/SOFR
- **Indexing** — is the principal indexed to inflation? (common in Israel)
- **Convertible** — can it convert into equity?
- **Warrants attached** — does the bond come with extra equity options?
- **Trustee** — independent representative of bondholders

> [!warning] Note from slides
> The same process applies to both *public* and *private* debt placements. The biggest difference is whether the bonds are listed on a stock exchange and accessible to retail investors.

---

## 📚 6. Worked Exercise — Bank Loan Accounting

> [!example] The Slide-17 Exercise
> On 1 Jan 2022 a company takes a **$9,000K** loan from a bank. The loan is repaid in **3 equal annual installments** of $3,000K, starting **31 Dec 2022**. Interest is **7% p.a.**, paid on **1 Jan** of the following year for the preceding year. Tax rate **25%**.
>
> Operating Income: 2022 = $12,000K · 2023 = $9,500K · 2024 = $11,700K

#### Step 1 — Compute Interest Each Year

Interest is charged on the *outstanding* balance during the year. Since principal repays at year-end, the entire year is at the opening balance:

| Year | Opening Balance | Rate | **Interest Expense** |
|---|---|---|---|
| 2022 | $9,000K | 7% | **$630K** |
| 2023 | $6,000K | 7% | **$420K** |
| 2024 | $3,000K | 7% | **$210K** |

#### Step 2 — Build the Income Statement (in $K)

| Line item            | 2022       | 2023      | 2024       |
| -------------------- | ---------- | --------- | ---------- |
| Operating Income     | 12,000     | 9,500     | 11,700     |
| Interest Expense     | (630)      | (420)     | (210)      |
| Income before Tax    | 11,370     | 9,080     | 11,490     |
| Tax Expense (25%)    | (2,842.5)  | (2,270)   | (2,872.5)  |
| **Net Income**       | **8,527.5** | **6,810** | **8,617.5** |

#### Step 3 — Tax Shield Quantified

The interest expense saves tax of `Interest × 25%`:

| Year | Interest | Tax Shield (saved) | Net cost of debt |
|---|---|---|---|
| 2022 | $630K | $157.5K | $472.5K |
| 2023 | $420K | $105.0K | $315.0K |
| 2024 | $210K | $52.5K | $157.5K |

#### Step 4 — Balance Sheet (Loan-Related Lines, $K)

The trickiest part is the **[[Accrued Expenses|Accrued Interest Payable]]** (cut-off account from [[Session 2 - Accounting Fundamentals|Session 2]]) — interest is *incurred* in the year but *paid* on Jan 1 of the next year.

| Balance at Dec 31 → | 2022 | 2023 | 2024 |
|---|---|---|---|
| Loan Payable — Current portion (due in next 12 months) | 3,000 | 3,000 | 0 |
| Loan Payable — Long-term portion | 3,000 | 0 | 0 |
| **Total Loan Payable** | **6,000** | **3,000** | **0** |
| Accrued Interest Payable (Liability) | 630 | 420 | 210 |

> [!tip] Why split current vs long-term?
> Anything due **within 12 months** is shown as a **Current Liability**. Anything due later is **Long-Term**. Splitting matters for ratios (e.g. Current Ratio = Current Assets ÷ Current Liabilities) used by lenders to assess liquidity.

#### Step 5 — Spreadsheet Layout (for Excel practice)

This is exactly how you'd structure it in a workbook:

| Cell | Column A | Column B (2022) | Column C (2023) | Column D (2024) |
|---|---|---|---|---|
| 1 | **Loan schedule** | | | |
| 2 | Opening balance | 9,000 | 6,000 | 3,000 |
| 3 | Principal repaid (Dec 31) | (3,000) | (3,000) | (3,000) |
| 4 | Closing balance | =B2+B3 → 6,000 | 3,000 | 0 |
| 5 | Interest @ 7% | =B2*0.07 → 630 | 420 | 210 |
| 6 | | | | |
| 7 | **Income Statement** | | | |
| 8 | Operating Income | 12,000 | 9,500 | 11,700 |
| 9 | Interest Expense | =-B5 | =-C5 | =-D5 |
| 10 | EBT | =SUM(B8:B9) → 11,370 | 9,080 | 11,490 |
| 11 | Tax @ 25% | =-B10*0.25 | =-C10*0.25 | =-D10*0.25 |
| 12 | **Net Income** | **=SUM(B10:B11)** | | |

#### Step 6 — Journal Entries (for completeness)

> [!example] Key entries for 2022
> **Jan 1, 2022 — Loan received:**
> - DEBIT Cash $9,000K
> - CREDIT Loan Payable $9,000K
>
> **Dec 31, 2022 — Accrue interest (no cash yet):**
> - DEBIT Interest Expense $630K
> - CREDIT Accrued Interest Payable $630K
>
> **Dec 31, 2022 — Repay principal:**
> - DEBIT Loan Payable $3,000K
> - CREDIT Cash $3,000K
>
> **Jan 1, 2023 — Pay accrued interest:**
> - DEBIT Accrued Interest Payable $630K
> - CREDIT Cash $630K

---

## 📚 7. Financing at a Glance — The Master Comparison Table

This is *the* cheat-sheet. If you understand this table, you understand the session.

| Feature | [[SAFE]] | Equity Financing | [[Convertible Bonds\|Convertible Note]] | Loans |
|---|---|---|---|---|
| **Structure** | Equity warrant | Ownership in company | Debt that converts to equity | Pure debt |
| **Conversion to equity** | At next funding round | Immediate | Convert at certain events, usually with a discount | N/A |
| **Interest** | No | No | Yes — usually converts to equity | Yes |
| **Maturity date** | No | N/A | Yes | Yes |
| **Investor rights** | Limited | Equity rights (usually preferred) | Creditor rights until converted | Creditor only |
| **Valuation** | Deferred until conversion | Determined at investment | Determined upon conversion (often capped) | N/A |
| **Risk to investor** | High | High | Medium | Low |
| **Cost to company** | Low complexity, future dilution | High dilution | Medium | Tax-deductible interest |

---

## 📚 8. Israeli Tech Exit Landscape — Context

The slides closed with a snapshot of Israeli high-tech exits (M&As, Buyouts, IPOs) from 2015–2025. Two stand-out points:

| Year | Annual Exit Value ($M) | # of Exits | Notes |
|---|---|---|---|
| 2021 (boom) | ~25,000 | ~250 | COVID-era zero-rate liquidity boom |
| 2023 (trough) | ~10,000 | ~100 | Higher rates + war effects |
| 2024 (recovery) | ~17,000 | ~135 | Wiz ($32B → Google) and CyberArk ($25B → Palo Alto) excluded as outliers |

> [!info] Why this matters for an entrepreneur
> The exit environment determines the *valuations* late-stage investors are willing to pay, which feeds back to early-stage SAFE caps and Series A pricing. A "bad year" for exits (like 2023) means tighter terms for founders raising today.

---

## 📚 9. Summary — Key Takeaways

1. **Capital Structure** is the mix of debt and equity. More debt = more leverage = more risk to the company but cheaper after-tax cost.
2. **The Pyramid** ranks every form of capital from safe (top, low cost) to risky (bottom, high cost). Common stock holders are last in line in a bankruptcy.
3. **Pre-Money + Investment = Post-Money**. Always clarify which valuation a term sheet is quoting.
4. **Common stock** = voting + dividend + dissolution rights. **Preferred stock** = those plus negotiable extras (liquidation preference, anti-dilution, etc.).
5. **SAFE** is a fast, valuation-deferred way to take early money — but stacked SAFEs can dilute founders unexpectedly when they convert.
6. **The Tax Shield** is the headline benefit of debt: after-tax cost = interest × (1 − tax rate).
7. **Accrual accounting** (from [[Session 2 - Accounting Fundamentals|Session 2]]) is what produces the **Accrued Interest Payable** liability when interest is incurred in one year and paid in the next.
8. **Funding follows the lifecycle**: FFF / Crowdfunding → Seed → VCs → Mezzanine → IPO → Secondary. Match the instrument to the stage.

---

## 📚 10. Quick Reference — Vocabulary

| Term | Plain-English Definition |
|---|---|
| [[Capital Structure]] | The mix of debt and equity used to fund the company |
| [[Leverage]] | Capital structure with high debt relative to equity → riskier |
| Authorised shares | Maximum number of shares the company is permitted to issue |
| Issued shares | Shares actually given to shareholders |
| Outstanding shares | Issued shares still in shareholders' hands |
| Par Value | Nominal face value of a share, set in the Articles |
| APIC | Additional Paid-in Capital — the price paid above par |
| [[Pre-Money Valuation]] | Company's agreed value before a new investment |
| [[Post-Money Valuation]] | Company's value immediately after the investment |
| [[Common Stock]] | Basic equity with voting + dividend + dissolution rights |
| [[Preferred Stock]] | Equity with negotiated extra rights ranking above common |
| Founders Stock | First common shares issued, to the founders |
| Mezzanine | Hybrid debt/equity instruments classified between Liabilities and Equity |
| [[SAFE]] | Simple Agreement for Future Equity — converts to shares at next round |
| Valuation Cap | Maximum valuation at which a SAFE/Convertible converts |
| [[Convertible Bonds]] | Debt that can convert into equity at specified events |
| Senior Secured Debt | Debt backed by collateral, paid first in bankruptcy |
| Subordinated Debt | Debt paid after senior debt holders are made whole |
| [[Tax Shield]] | Tax saving from deductibility of interest expense |
| Trustee | Independent representative of bondholders in a public bond issue |
| FFF | Family, Friends, and Fools — earliest non-professional investors |

---

## Related notes

- [[Accounting]] — subject hub
- [[Session 2 - Accounting Fundamentals]] — financial statements, double-entry, accrual & cut-off accounts (foundation for everything in this session)
- [[_Wiki-Link Registry]] — concept-link tracker
