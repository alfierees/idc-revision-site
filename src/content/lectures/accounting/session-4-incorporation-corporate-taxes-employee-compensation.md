---
title: "Session 4 — Incorporation, Corporate Taxes & Employee Compensation"
session: 4
semester: 2
year: 2
course: Accounting & Financial Essentials for Entrepreneurs
tags:
  - accounting
  - incorporation
  - corporate-tax
  - transfer-pricing
  - stock-options
  - employee-compensation
  - payroll
  - IPO
  - equity-structure
  - GILTI
  - FDII
subject: accounting
in_scope: true
---

# Session 4 — Incorporation, Corporate Taxes & Employee Compensation

> Part of: [[Accounting]]
> Incorporation, Tax Structures, Employee Pay & Stock Options
> Key concepts: [[Capital Offering]], [[Liquidation Preference]], [[Anti-Dilution]], [[IPO]], [[Corporate Tax]], [[Transfer Pricing]], [[GILTI]], [[FDII]], [[Payroll]], [[Stock Options]], [[RSU]], [[Black-Scholes Model]], [[Vesting]], [[Section 102]]

---

## 📚 1. Incorporation — It's More Complicated Than You Think

Starting a company isn't just choosing a name. The decisions you make at incorporation lock in legal, tax, and investor outcomes for years. The key variables are:

| Decision                    | Why it matters                                                     |
| --------------------------- | ------------------------------------------------------------------ |
| **Where to incorporate**    | Determines which tax law applies (e.g., US, Israel, Cayman)        |
| **Which legal entity type** | Affects how profits are taxed and distributed (see §3)             |
| **Location of IP**          | Determines which country taxes your most valuable asset            |
| **Intercompany structure**  | How the parent company charges subsidiaries for services/IP        |
| **Investor identity**       | Some investors trigger regulatory issues (foreign ownership rules) |
| **Exit planning (LRD)**     | Later liquidation rights depend on structure chosen now            |

> [!tip] Think of incorporation like writing a constitution
> Whatever you decide now — entity type, IP location, corporate structure — is expensive to undo later. The more thought you put in now, the fewer surprises at a future financing round or exit.

### 1.1 Common Corporate Structures

There are two frequently seen structures for Israeli tech companies:

**Pre-Reform Common Structure** (historically popular):
```
Israel Co (Parent)
    ├── US Subsidiary (100%)
    └── Non-US Subsidiary (100%)
         IP owned here (low-tax jurisdiction)
```

**U.S. Structure** (increasingly common post-US tax reform):
```
US Co (Parent)
    ├── Israel Subsidiary (100%)
    └── Non-US Subsidiary (100%)
         IP owned in US (to benefit from FDII incentives)
```

> [!info] Why does IP location matter so much?
> Intellectual Property (patents, software, algorithms) generates royalty income. Wherever the IP sits, that country taxes those royalties. Moving IP into a high-tax country can be very costly, so companies think carefully about this at the start.

---

## 📚 2. Raising Capital — From the Start to IPO

### 2.1 Capital Offering — The Basics

A **capital offering** is when a company sells securities to investors in exchange for cash. The securities can take many forms:

| Security | Description |
|---|---|
| **Ordinary shares** | Basic ownership stake |
| **Preferred shares** | Equity with extra rights (liquidation preference, anti-dilution, etc.) |
| **Options** | Right to buy shares at a fixed price in the future |
| **Warrants** | Like options but typically longer-dated and used as sweeteners in debt deals |

**Private offerings** use a **Share Purchase Agreement (SPA)** — a private contract between the company and investor. Each new round typically creates a new class of shares ("Series A", "Series B", etc.) with slightly better rights than the last.

**Public offerings** use a **Prospectus** — a detailed public document containing:
- Business description
- Risk factors (operational, technological, liquidity, geographical…)
- Management profiles
- Financial statements and special agreements

> [!warning] The prospectus carries legal weight
> In most jurisdictions, inaccuracies in a prospectus expose the company and its directors to criminal liability. This is why IPO prospectuses are famously long and cautiously worded.

### 2.2 Liquidation Preferences — Who Gets Paid First?

When a company is sold, dissolved, or undergoes a "change in control" event, **preferred shareholders are paid before common shareholders**. This is the **liquidation preference**.

| Preference Type | How It Works | Example |
|---|---|---|
| **Non-participating** | Preferred gets their preference, then steps aside. Common shares the rest. | Investor gets 1× back, OR converts to common for upside — can't do both |
| **Participating ("double dipping")** | Preferred gets their preference *AND* participates with common in the remaining proceeds | Investor gets 1× back, then also shares the leftover equally with common |
| **Multiple preference** | Preferred gets 2×–5× their investment back before common sees a penny | High preference in distressed rounds |

> [!example] Liquidation Preference — Worked Example
> Company is sold for **$5M**. Preferred investor invested **$3M** with a **1× non-participating preference**. Common shareholders (founders + employees) hold the rest.
>
> **Scenario A: Sale price = $5M**
> - Preferred gets: $3M (1× preference)
> - Common gets: $5M − $3M = **$2M**
>
> **Scenario B: Sale price = $50M** (big exit)
> - Preferred may choose to *convert to common* and share the full $50M proportionally — this is better than taking a $3M preference on a $50M exit.
> - If preferred owns 40% of shares after conversion: $50M × 40% = **$20M** (much better than $3M).
>
> > This is why non-participating preferred will *convert to common* in a great exit, but take the preference in a bad one.

### 2.3 Anti-Dilution Protection

Anti-dilution clauses protect investors from "down rounds" — when the company raises money at a **lower valuation** than the previous round (the price per share falls). Without protection, early investors' percentage ownership would shrink.

| Type                 | How It Works                                                                              | Who Benefits More                                     |
| -------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **Full Ratchet**     | Convert the preferred shares as if they were purchased at the new (lower) price           | Investor heavily protected; very dilutive to founders |
| **Weighted Average** | Adjustment is proportional — depends on how many new shares are issued at the lower price | More balanced; most common in practice                |

> [!warning] Anti-dilution can devastate founders in a down round
> If the company raised at $10/share and then does a down round at $2/share with full ratchet anti-dilution, preferred investors are retroactively treated as if they paid $2. They get far more shares, massively diluting founders and employees. Always model this scenario before agreeing to full ratchet.

---

## 📚 3. IPO — Going Public

### 3.1 What Is an IPO?

An **Initial Public Offering (IPO)** is the first time a company sells shares to the general public via a stock exchange. The company files a prospectus and undergoes intense regulatory scrutiny.

### 3.2 IPO Pros vs. Cons

| Pros ✅ | Cons ❌ |
|---|---|
| Access to a large, diversified investor base | Must comply with ongoing reporting and regulations |
| Existing shareholders get liquidity (can sell their shares) | Legal exposure from public disclosures |
| Stronger capital structure (less reliance on debt) | Management must now court analysts, brokers, and media |
| Can use listed shares as "currency" for acquisitions | Profit is now shared with many outside shareholders |
| Easier to raise more capital in the future | Loss of strategic privacy (competitors see your financials) |

> [!info] CrossOver Funding
> In the late stages before an IPO, some funds (called "crossover funds") invest at late-stage private valuations, bridging the gap between private VC funding and a public IPO. They're comfortable investing in both private and public markets.

---

## 📚 4. Corporate Taxation

### 4.1 The Five Key Tax Questions for Any Startup

Every startup must answer these five questions, and the answers shape the entire tax strategy:

1. **Where is the company incorporated?** → Tax residence (where you pay corporate tax)
2. **What legal entity type?** → How profits are taxed (corporate-level vs. pass-through)
3. **Where is the business actually conducted?** → Permanent Establishment rules
4. **Where is the IP located?** → Transfer Pricing and royalty tax
5. **How is the company funded?** → Debt vs. equity tax treatment
6. **How are employees compensated?** → Stock-based compensation taxation

### 4.2 Tax Rates — Israel vs. US (2025)

| Jurisdiction | Corporate Tax Rate | State Tax | Effective Total |
|---|---|---|---|
| **US** | 21% | ~5% | **~26%** |
| US (Withholding Tax on dividends) | 12.5%–25% | — | 12.5%–25% |
| **Israel** | 6%–23% | — | **6%–23%** |
| Israel (Withholding Tax) | 4%–23% | — | 4%–23% |

> [!info] Why does Israel have such a wide corporate tax range (6%–23%)?
> Israel offers significant tax incentives for tech companies with approved "Preferred Enterprise" status — particularly those with large R&D operations in Israel. This can bring the rate down to as low as 6% (in certain development zones). This is a key reason why many companies keep their R&D function in Israel.

### 4.3 Types of Legal Entity — Which to Choose?

| Entity Type | Key Feature | Tax Treatment |
|---|---|---|
| **C Corporation** | Standard corporation — separate legal and tax entity | Company pays corporate tax; shareholders pay tax again on dividends ("double taxation") |
| **S Corporation** | US-only; max 100 shareholders, all must be US persons | "Pass-through" — profits taxed at shareholder level only (no corporate tax) |
| **LLC (Limited Liability Company)** | Flexible; can choose how to be taxed ("check the box") | Default: pass-through. Can elect to be taxed as C Corp |
| **Limited Partnership (LP)** | Used frequently for VC funds | Pass-through to partners; GP manages, LPs invest passively |

> [!tip] "Check the Box" explained
> The US allows LLCs to "check a box" on a tax form to choose whether to be taxed as a corporation or a pass-through entity. This gives enormous flexibility — the legal form and the tax form can be different. For example, a foreign subsidiary set up as an LLC can elect to be ignored for US tax purposes ("disregarded entity"), simplifying the US parent's tax return.

### 4.4 Transfer Pricing — The Most Important Tax Issue for Tech Companies

When a parent company and a subsidiary transact with each other (e.g., the Israeli parent licenses IP to the US subsidiary), the IRS and Israeli Tax Authority want to make sure the price charged is **what two unrelated parties would agree to** — the **"arm's length standard"**.

If you charge too little, profits shift to the low-tax country. Tax authorities fight this aggressively.

**Common Transfer Pricing Methods:**

| Method | How it Works | Best Used When |
|---|---|---|
| **Cost Plus (Cost+)** | Charge a markup over actual cost | R&D services, manufacturing |
| **Return on Sales (ROS)** | Set intercompany price so entity earns market-level profit margin | Distribution subsidiaries |
| **Profit Split** | Total group profit is split between entities based on their contribution | Both parties make unique contributions |

> [!example] Transfer Pricing — Simple Example
> An Israeli parent company does R&D and owns the IP. The US subsidiary sells products in North America, paying a **royalty** to Israel for using the IP.
>
> **The question:** What's the right royalty rate?
>
> - If royalty = 5% of US sales → most profit stays in the US (taxed at ~26%)
> - If royalty = 30% of US sales → most profit shifts to Israel (taxed at 6%–23%)
>
> The IRS will challenge rates that look artificially high (shifting too much profit to Israel). An independent economic analysis (comparable royalty rates in the market) is required to defend the rate chosen.

**DEMPE Standard** — To determine who *deserves* the IP profit, tax authorities look at who performs: **Development, Enhancement, Maintenance, Protection, and Exploitation** of the IP. The profits should follow the functions, not just the legal ownership.

### 4.5 GILTI — Global Intangible Low-Taxed Income

GILTI was introduced in the 2017 US Tax Reform to prevent US companies from parking IP in low-tax countries to avoid US tax.

$$\boxed{\text{GILTI} = \text{CFC income} - 10\% \times \text{tangible assets of CFC}}$$

- **CFC** = Controlled Foreign Corporation (a foreign subsidiary controlled by a US parent)
- GILTI is taxed at a minimum effective rate of **10.5%** (half of 21%)
- GILTI applies if the foreign entity's effective tax rate is **below 13.125%**
- An **80% foreign tax credit** is allowed — so taxes paid in Israel reduce the US GILTI tax

> [!warning] GILTI essentially creates a global minimum tax
> If your Israeli subsidiary is paying only 6% tax, you'll likely owe additional US GILTI tax to bring the effective rate up towards the 13.125% threshold. This changes the economics of owning IP in low-tax jurisdictions significantly.

### 4.6 FDII — Foreign Derived Intangible Income

FDII is the *opposite incentive* — a carrot for keeping IP inside the US. It reduces the effective tax rate on **royalties and income derived from foreign customers** when the IP is held in the US.

> [!tip] GILTI vs. FDII — the two sides of the coin
> - **GILTI** = stick: punishes US companies that park IP offshore in low-tax countries
> - **FDII** = carrot: rewards US companies that keep IP in the US by giving them a lower effective rate on their international income from that IP

### 4.7 R&D Amortization

| Location of R&D | Tax Treatment |
|---|---|
| **US R&D** | Must be capitalized and amortized over **5 years** (since 2022 tax law change) |
| **Non-US R&D** | Must be capitalized and amortized over **15 years** |

> [!warning] This changed recently and hits cash flow hard
> Before 2022, US R&D was fully deductible in the year spent (100% immediate). Now it must be spread over 5 years, which increases taxable income in the near-term. This significantly increased the tax burden on US R&D-heavy companies.

---

## 📚 5. Employee Compensation

Employee compensation is one of the biggest cost lines for any startup. It comes in two broad categories:

| Category | Components |
|---|---|
| **Payroll** | Salary, Bonuses, Vacation/Sick days, Severance, Pension, Insurance |
| **Stock-Based Compensation (SBC)** | Options, RSUs, Performance-based options, Phantom options |

### 5.1 Payroll Components in Detail

#### Salary
- The base cash pay, recognized as an expense in the period it relates to (accrual accounting).
- **Employer cost = ~130% of gross salary** — the employer pays additional costs on top of the employee's gross salary (social security, health, pension contributions, etc.).
- **Gross up**: Sometimes contracts are "net salary" deals. You must gross up to the pre-tax amount to calculate employer cost.

> [!example] Gross-up Example
> Employee contract: **net salary $7,000/month** after 30% income tax.
>
> $$\text{Gross salary} = \frac{\$7,000}{1 - 0.30} = \$10,000$$
>
> $$\text{Employer cost} = \$10,000 \times 130\% = \$13,000/\text{month}$$
>
> The company pays $13,000 but the employee receives $7,000 net. The other $6,000 goes to the government and pension funds.

#### Bonuses and Commissions
- Recognized as an expense in the period earned (even if paid later — accrual principle).
- Must be accrued based on estimates (e.g., if the bonus period is Jan–Dec but it's paid in March, the full-year expense is accrued monthly).
- Common target metrics: **stock price** (for executives), **sales / collections** (for sales teams).

#### Vacation, Sick Days, Recreation ("Havra'a")
- Minimum days set by law.
- Companies must track accumulated vacation liability on the balance sheet — if an employee hasn't taken leave, it's an accrued liability.
- Many companies set caps on accumulation to limit this liability.

#### Severance, Pension and Insurance
- **Legally required deposits** into approved savings funds (pension fund, provident fund, insurance).
- In Israel, **Section 14** arrangements allow the employer to make defined contributions without additional severance liability upon termination — when properly structured, employer contributions to pension fully cover severance.
- **"Golden Parachute"**: large exit payments for executives upon change of control.
- **Notice period**: usually 1 month; during notice, the employee works (or is paid in lieu).

---

## 📚 6. Stock-Based Compensation (SBC)

### 6.1 What Is a Stock Option?

A **stock option** gives an employee the **right — but not the obligation** — to buy a share of the company at a **pre-agreed price (exercise price / strike price)** on or before a **specified date (term)**.

> [!info] Key vocabulary
> - **Exercise price (K)**: The fixed price at which the employee can buy. Usually set at the market price on the grant date (so the option starts "at the money").
> - **Term**: The deadline by which the option must be exercised (typically 7–10 years).
> - **Vesting**: Options usually can't be exercised immediately. They unlock ("vest") over a period, incentivising the employee to stay.

### 6.2 Vesting — The Retention Mechanism

**Vesting** means the employee earns the right to exercise options gradually over time, not all at once. A common structure:

```
Year 1: 1-year "cliff" — nothing vests until the 1-year anniversary
Then: 1/36 vests every month for 3 more years
Total vesting period: 4 years
```

> [!example] Vesting Walk-through
> Employee receives **1,200 options** with a 4-year vest, 1-year cliff:
>
> | Period | Options that vest | Cumulative |
> |---|---|---|
> | Month 1–11 | 0 (waiting for cliff) | 0 |
> | Month 12 (1-year anniversary) | 300 (25% cliff) | 300 |
> | Month 13 | 25 (1/36 of remaining 900) | 325 |
> | Month 24 | 25 | 600 |
> | Month 48 | 25 (final batch) | 1,200 |
>
> If the employee leaves at month 11, they get **0 options** — the cliff ensures they must stay at least 1 year.

### 6.3 Valuing Options — The Black-Scholes Model

Options can't just be recorded at $0 — they have real economic value. The most common valuation model is **Black-Scholes**:

$$\boxed{C = S \cdot N(d_1) - K \cdot e^{-rT} \cdot N(d_2)}$$


Where:
- $S$ = Current share price (underlying asset price)
- $K$ = Exercise price (strike price)
- $T$ = Time to expiry (in years)
- $r$ = Risk-free interest rate
- $\sigma$ = Volatility / standard deviation of the share price
- $N(d)$ = Cumulative normal distribution function

> [!tip] You don't need to calculate Black-Scholes by hand
> In practice, you use a calculator or software. The key insight is: **higher volatility → higher option value** (more chance the stock will shoot up above the exercise price). This is why options are valuable even when issued "at the money" — there's still time value.

The inputs and their directional effect on option value:

| Input | Higher value means… |
|---|---|
| Share price (S) | Option more valuable ↑ |
| Exercise price (K) | Option less valuable ↓ (harder to profit) |
| Time (T) | Option more valuable ↑ (more time = more chance of upside) |
| Risk-free rate (r) | Option slightly more valuable ↑ |
| Volatility (σ) | Option more valuable ↑ (higher chance of big move) |

### 6.4 Accounting for Options — How They Hit the Financial Statements

Options granted to employees follow these rules under IFRS 2 / ASC 718:

| Rule | Explanation |
|---|---|
| **Value is fixed at grant date** | You calculate fair value once (using Black-Scholes) on the day options are granted. You never recalculate this for plain vanilla options. |
| **Expense recognized over vesting period** | The total fair value is spread (amortized) as a compensation expense over the vesting period. |
| **Entry each period** | DEBIT: Compensation Expense → CREDIT: Additional Paid-in Capital (Equity). No cash changes hands. |
| **No reversal if options expire** | If options vest but are never exercised (e.g., share price stayed below exercise price), the expense already recorded stays — it is NOT reversed. |
| **Modification triggers re-measurement** | If you change the terms of outstanding options (e.g., lower the exercise price), you re-measure at the modification date and record any incremental fair value. |

> [!example] Full Options Accounting Example
>
> **Setup:** On 31 May 2023, Urogen Pharma Ltd. grants **1,000 options** to employees at the market price of **$15/share**. Vesting: 1-year cliff, then 1/36 per month (total ~4 years). Assume Black-Scholes gives a fair value of **$6 per option**.
>
> **Total compensation cost:** 1,000 × $6 = **$6,000**
>
> **Part A: What is recorded in the financial year ending 31 Dec 2024?**
>
> From 31 May 2023 → 31 Dec 2024 = 19 months of service out of 48 total months.
> *(Note: the 1-year cliff is crossed in May 2024, so vesting has indeed commenced.)*
>
> Expense for year ended Dec 2024 (12 months in 2024 out of 48):
>
> $$\text{2024 expense} = \frac{12}{48} \times \$6{,}000 = \$1{,}500$$
>
> Cumulative expense through 31 Dec 2024 (19 months):
>
> $$\text{Cumulative} = \frac{19}{48} \times \$6{,}000 = \$2{,}375$$
>
> **Journal entry (Dec 2024):**
> - DEBIT Compensation Expense $1,500
> - CREDIT Additional Paid-in Capital $1,500
>
> **Part B: Employee dismissed on 1 Apr 2025 (100 of their options not yet vested)**
>
> - For options that **were already vested** before dismissal: no reversal of expense already recorded.
> - For options that **will never vest** due to dismissal (unvested portion): reverse the portion of expense that relates to the service conditions that will not be met.
> - Record a **credit to Compensation Expense** (reducing future expense) for the unvested-forfeited options.

### 6.5 Advanced SBC Instruments

Once a company matures (especially after going public), it has access to more sophisticated compensation tools:

| Instrument | Key Features | Who Uses It |
|---|---|---|
| **RSU (Restricted Stock Unit)** | No exercise price — employee simply receives shares after vesting. Less dilutive per unit than options. | Public companies |
| **Performance-Based Options** | Vest only if certain targets are hit (revenue, stock price, clinical milestones). More control over cost. | Companies wanting pay-for-performance |
| **Phantom Options** | No real shares issued. Employee receives a cash payment equal to the stock price gain. Treated as a **liability** (re-measured every period at fair value). | Private companies wanting to avoid dilution or complex share registers |

> [!warning] Phantom options are a liability, not equity
> Unlike real options (which sit in APIC/equity and are never re-measured), phantom options must be re-measured to fair value every reporting period. If the share price rises, the liability (and expense) rises with it — creating earnings volatility.

### 6.6 Tax Treatment of Options — Israel vs. US

| Route | Employee Tax | Employer Deduction | Notes |
|---|---|---|---|
| **Section 102 — Capital Route (with Trustee)** | 25% capital gains tax (favorable) | **NOT deductible** for the company | Options held through a trustee for 2+ years. Best for employees. |
| **Section 102 — No Trustee** | Taxed as regular income (marginal rate — up to 50%+) | **Deductible** for company | Better for company (gets deduction), worse for employee |
| **Section 3(i)** | Taxed as regular income at exercise | Deductible | Used when 102 conditions not met |
| **Section 409A (US)** | Prevents punishing tax at grant for US employees | N/A | Options must be granted at fair market value; updated annually or at major events |

> [!tip] The classic trade-off
> Section 102 Capital Route is almost always better for the **employee** (25% vs. 50%+ marginal rate). But the company gives up its tax deduction. High-paid employees especially benefit from capital route, so most startups use it for senior employees.

---

## 📚 7. Summary — Key Takeaways

1. **Incorporation decisions are permanent** — entity type, IP location, and corporate structure are very expensive to change and affect taxes for the life of the company.
2. **Liquidation preferences** protect investors in bad exits. Non-participating preferred converts to common in great exits. Participating preferred "double dips."
3. **Anti-dilution** protects investors in down rounds. Full ratchet is harsh on founders; weighted average is more balanced.
4. **Corporate tax rates** vary widely — US ~26%, Israel 6%–23%. The difference explains the obsession with where to put IP.
5. **Transfer pricing** forces intercompany transactions to be at "arm's length." The DEMPE standard determines who deserves the profit based on who did the economic work.
6. **GILTI** punishes US companies for parking IP in low-tax foreign jurisdictions. **FDII** rewards US companies that keep IP in the US.
7. **Stock options** give employees the right (not obligation) to buy shares at a fixed price. Valued at grant using Black-Scholes, expensed over the vesting period.
8. **Vesting** (typically 4 years, 1-year cliff) retains employees. If they leave before vesting, they lose unvested options.
9. **Section 102 Capital Route** = 25% tax for Israeli employees (great for them, no deduction for company). Section 102 No Trustee = marginal income tax for employee but company gets deduction.
10. **RSUs, performance options, and phantom options** are alternatives to plain vanilla options — each with different dilution, accounting, and tax consequences.

---

## 📚 8. Quick Reference — Vocabulary

| Term | Plain-English Definition |
|---|---|
| [[Capital Offering]] | Process of issuing securities (shares, options) to investors in exchange for cash |
| [[Share Purchase Agreement (SPA)]] | Private contract governing a private capital raise |
| Prospectus | Public document disclosing all material information for a public offering |
| [[Liquidation Preference]] | Preferred shareholders' right to be paid before common in an exit event |
| Non-participating preferred | Investor takes preference OR converts to common — not both |
| Participating preferred | Investor takes preference AND participates in upside ("double dips") |
| [[Anti-Dilution]] | Protection adjusting preferred share conversion ratio in a down round |
| Full Ratchet | Extreme anti-dilution: acts as if investor paid the lowest price ever |
| Weighted Average | Moderate anti-dilution: adjustment proportional to how many shares issued at lower price |
| [[IPO]] | Initial Public Offering — first sale of shares to the general public |
| [[Corporate Tax]] | Tax paid by a corporation on its profits |
| [[Transfer Pricing]] | Rules governing prices charged between related entities |
| Arm's Length Standard | Price that two independent parties would agree to |
| DEMPE | Development, Enhancement, Maintenance, Protection, Exploitation — the functions that determine IP ownership for tax purposes |
| [[GILTI]] | US tax on low-taxed foreign income of US-owned multinationals |
| [[FDII]] | US tax incentive for companies that keep IP in the US and sell internationally |
| [[Payroll]] | All cash compensation components: salary, bonus, vacation, severance, pension |
| [[Stock Options]] | Right (not obligation) to buy company shares at a fixed exercise price |
| Exercise price | The fixed price at which an option can be exercised |
| [[Vesting]] | Gradual earning of the right to exercise options over time |
| Cliff | Minimum service period before any options vest at all |
| [[Black-Scholes Model]] | Mathematical model for valuing options (using price, strike, time, rate, volatility) |
| [[RSU]] | Restricted Stock Unit — shares granted after a vesting period, no exercise price |
| Phantom Options | Synthetic options paid in cash; treated as a liability |
| [[Section 102]] | Israeli tax law governing employee stock option taxation |
| Section 409A | US rule ensuring options are granted at fair market value to avoid punitive taxation |

---

## Related notes

- [[Accounting]] — subject hub
- [[Session 3 - Raising Debt and Capital]] — capital structure, preferred shares, SAFE, funding lifecycle (foundation for this session)
- [[Session 2 - Accounting Fundamentals]] — accrual accounting and financial statements (underpins SBC accounting)
- [[_Wiki-Link Registry]] — concept-link tracker
