---
title: "Session 7 — Business Combination"
session: 7
semester: 2
year: 2
course: Accounting & Financial Essentials for Entrepreneurs
tags:
  - accounting
  - business-combination
  - acquisitions
  - mergers
  - equity-method
  - goodwill
  - consolidation
  - ppa
  - non-controlling-interest
aliases:
  - Business Combination
  - Acquisitions & Mergers
  - Consolidation Session
subject: accounting
in_scope: true
---

# Session 7 — Business Combination

> Part of: [[Accounting]]
> Understanding how companies combine, how to account for different levels of ownership, and how to build consolidated financial statements
> Key concepts: [[Business Combination]], [[Equity Method]], [[Goodwill]], [[Purchase Price Allocation]], [[Non-Controlling Interest]], [[Consolidation]], [[Acquisition Method]], [[Financial Asset]], [[Associated Company]]

---

## 1. Why Do Companies Combine?

Companies pursue business combinations for strategic, financial, and operational reasons. The eight most common motivations are:

| # | Reason | What it Means |
|---|--------|---------------|
| 1 | **Expand operations** | Grow market share without building from scratch |
| 2 | **Enter new markets** | Gain instant access to new geographies or customer segments |
| 3 | **Cost savings** | Eliminate duplicate processes; absorb better technology |
| 4 | **Intellectual property** | Acquire patents, trademarks, proprietary technology |
| 5 | **Human capital** | Hire teams with rare expertise ("acqui-hire") |
| 6 | **Block competition** | Remove a competitor or prevent them from growing |
| 7 | **Take-over avoidance** | Acquire a partner to become too large/complex to be targeted |
| 8 | **Tax advantages** | Absorb tax losses, benefit from favourable tax structures |

> [!tip] The Strategic Logic
> In a competitive market, buying an existing business is often faster and cheaper than organic growth. The real question isn't *whether* to combine — it's *at what price* — which is exactly what this session's accounting covers.

---

## 2. Types of Business Integration

Business combinations come in many structural forms. The structure drives both the legal outcome and the accounting treatment.

### 2.1 Acquisitions

In an ==acquisition==, one company purchases another. The target continues to exist as a separate legal entity but becomes controlled by the acquiror.

| Type                     | Description                                                                                                    |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| **Vertical Acquisition** | Buying a supplier or customer (e.g., acquiring your raw-material supplier)                                     |
| **Reverse Acquisition**  | The legally acquired entity is treated as the acquiror for accounting purposes (common in shell-company deals) |
| **Assets Acquisition**   | Purchasing specific assets of another business — no liabilities transfer unless explicitly assumed             |

### 2.2 Mergers

In a ==merger==, two companies combine into a single surviving legal entity.

| Type                             | Description                                                                                            |
| -------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Vertical / Horizontal Merger** | Vertical = combining supply chain stages; Horizontal = combining competitors                           |
| **Reverse Triangular Merger**    | A subsidiary of the acquiror merges into the target — keeps the target's contracts and licences intact |
| **Merger into a Shell**          | Target merges into an existing shell company to gain a stock exchange listing without a full IPO       |
| **Merger of Equals**             | Two firms of similar size combine; identifying the "acquiror" can be contested                         |

> [!info] Acquisition vs Merger — Why It Matters
> Regardless of legal form, **accounting standards look at who obtained control**. The legal wrapper (share purchase, asset purchase, merger) is secondary to the economic substance.

---

## 3. How Financial Statements Look After an Acquisition

The accounting treatment depends entirely on the **level of influence or control** the acquiror gains. There are three tiers:

```
Level of Ownership / Influence
────────────────────────────────────────────────────────────────
< 20%       │ No significant influence  →  Financial Asset
20% – 50%   │ Significant influence     →  Equity Method (Associate)
> 50%       │ Control                   →  Business Combination (Consolidation)
────────────────────────────────────────────────────────────────
```

> [!warning] Thresholds are a guide, not an absolute rule
> Ownership percentage is a **starting point**. The actual classification depends on the economic reality — you can control a company with < 50% (see Section 5.1) or fail to influence one despite owning 30%.

---

## 4. Financial Asset Treatment (< 20%)

> [!info] Definition: Financial Asset
> When an acquisition gives the acquiror **no significant influence** (typically < 20% ownership), the investment is classified as a ==Financial Asset==.

**Accounting rules:**
- **Day 1:** Record at **cost** (purchase price paid)
- **Subsequent periods:** Revalue to ==fair value== at each reporting date; changes in FV flow through the **P&L as a gain or loss**
- **Dividends received:** Recorded as **financial income** in the P&L — not a reduction of the investment

> [!example] Worked Example — Harvest Inc. & Beans LLC
>
> **Setup:** On Jan 1, 2020, Harvest Inc. buys 240 shares of Beans LLC for **$1,200**.
> Beans LLC has **2,000 shares** outstanding → ownership = 240 ÷ 2,000 = **12%** → Financial Asset.
> Acquisition price: $1,200 ÷ 240 = **$5.00/share**
>
> ---
> **Event 1 — Dec 31, 2020: Share price rises to $7.50**
>
> | | Amount |
> |--|--|
> | Fair value of investment | 240 × $7.50 = **$1,800** |
> | Previous carrying value | **$1,200** |
> | Fair value **gain → P&L** | **$600** |
>
> Journal: DR Investment $600 / CR Gain on FV (P&L) $600
>
> ---
> **Event 2 — Jan 31, 2021: Beans declares a $2/share dividend**
>
> Dividend income = 240 × $2 = **$480** → financial income in Harvest's P&L
>
> Journal: DR Dividends Receivable $480 / CR Financial Income (P&L) $480
>
> **Key takeaway:** Under Financial Asset treatment, dividends are *income*, FV changes hit the P&L, and the investment is entirely passive.

---

## 5. The Equity Method — Associated Company (20%–50%)

> [!info] Definition: Equity Method
> When the acquiror can exercise **significant influence** — the ability to participate in financial and operating policy decisions, typically at 20%–50% ownership — the investee is an ==Associated Company== accounted for under the **Equity Method**.

**Accounting rules:**
- **Day 1:** Record at **cost** (purchase price paid)
- **Subsequent periods:** Record the proportionate **share of the associate's net income** in P&L, increasing the investment balance accordingly
- **Dividends received:** Treated as a **return of investment** — reduces the carrying value of the investment (it is *not* income)

> [!tip] The Logic Behind the Equity Method
> With significant influence, your share of the associate's profits *belongs* to you even before a dividend is paid. When a dividend is declared, it simply converts part of that embedded profit back into cash — hence it reduces the investment balance, not income.

> [!example] Worked Example — Harvest Inc. & Goodies Inc.
>
> **Setup:** On Jul 1, 2025, Harvest buys 20% of Goodies Inc. for **$25 million**.
> Goodies balance sheet (Jun 30, 2025): Assets $100M, Liabilities $20M, **Equity $80M**
> Book value of 20% = 20% × $80M = $16M → paid $25M → **$9M excess** reflects unrecognised goodwill/intangibles in Goodies
>
> ---
> **Step 1 — Record at cost (Jul 1, 2025)**
>
> DR Investment in Goodies $25M / CR Cash $25M
>
> ---
> **Step 2 — Record share of 2025 net income**
>
> Goodies NI for full year 2025 = **$10M** (equal quarterly distribution = $2.5M/quarter)
> Harvest acquired Jul 1 → only recognises H2 2025 (Q3 + Q4) = $5M
> Harvest's share = 20% × $5M = **$1M**
>
> DR Investment in Goodies $1M / CR Share of Profit — Associate (P&L) $1M
>
> ---
> **Step 3 — Record dividend (Mar 31, 2026)**
>
> Goodies pays $15M dividend → Harvest's share = 20% × $15M = **$3M**
>
> DR Cash $3M / CR Investment in Goodies $3M ← *reduces investment, not income*
>
> ---
> **Investment balance at Mar 31, 2026:**
>
> | Event | Movement |
> |-------|----------|
> | Initial cost (Jul 1, 2025) | +$25.0M |
> | Share of profit (H2 2025) | +$1.0M |
> | Dividend received (Mar 2026) | −$3.0M |
> | **Balance** | **$23.0M** |

---

## 6. Business Combination — Definition and Control (> 50%)

> [!info] Definition: Business Combination
> A ==Business Combination== is a transaction where one entity (the **acquiror**) obtains **control** over another (the **acquiree**). Once control is obtained, the acquiror must consolidate the acquiree's financial statements in full.
> 

### 6.1 Control Is Qualitative, Not Just Quantitative

Owning > 50% of shares usually implies control, but control can exist at much lower ownership through chains of companies.

> [!example] Real-World Example — Bezeq (Israeli Telecom)
>
> The Alovitch family effectively controlled Bezeq (a major Israeli telecom) with only ~10% economic ownership, through a holding chain:
>
> ```
> Eurocom Group (private)
>     └─ 65% of B Communications
>             └─ 26% of Bezeq
> ```
>
> By controlling Eurocom → which controls B Communications → which holds a dominant 26% block in Bezeq (enough to direct a dispersed shareholder base), the family directed all of Bezeq's major decisions.
>
> **The lesson:** Control is about the *ability to direct*, not the percentage on the share register.

---

## 7. The Acquisition Method

> [!success] The Acquisition Method is the only permitted approach under IFRS 3 for recording a Business Combination.

It has **four sequential steps:**

```
Step 1: Identify the Acquiror
Step 2: Set the Acquisition Date
Step 3: Recognise and Measure Identifiable Assets, Liabilities & NCI at Fair Value
Step 4: Recognise and Measure Goodwill
```

### 7.1 Step 1 — Identify the Acquiror

The ==acquiror== is the entity that obtains control. When it isn't obvious, look for:

| Indicator | The Acquiror is… |
|-----------|-----------------|
| Cash / assets transferred | The entity that pays |
| Equity instruments issued | The entity that issues the equity |
| Shareholders majority | Entity whose shareholders retain the larger stake |
| Board control | Entity whose shareholders can appoint/dismiss the board |
| Management dominance | Entity whose management leads the combined entity |
| Size / initiator | The larger entity, or the one that initiated the transaction |

> [!warning] Reverse Acquisitions
> In some deals (e.g. IPOs via shell companies), the **legal subsidiary** is the economic acquiror. Accounting follows economic substance — the smaller company that initiated the deal may be identified as the acquiror.

### 7.2 Step 2 — Set the Acquisition Date

The ==acquisition date== is:
- The date on which **control is obtained**, AND
- The date on which **all consideration is transferred** (the closing date)

All measurements — fair values, goodwill, and the opening consolidated balance sheet — are set as of this date.

### 7.3 Step 3 — Recognise Identifiable Assets, Liabilities & NCI

At the acquisition date, all identifiable assets and liabilities of the acquiree are recognised at **fair value**, including items not previously on the acquiree's own balance sheet:

| Item | Treatment |
|------|-----------|
| **Tangible assets** | Step up (or down) to current market value |
| **Intangible assets** (patents, brands, customer lists, software) | Recognised even if not previously recorded |
| **Contingent liabilities** | Recognised at fair value if measurable reliably |
| **Deferred tax** | Recognised to reflect the tax effect of fair value adjustments |

> [!tip] Why Fair Value?
> The acquiror is paying for the *current economic value* of what they're buying. Historical costs are irrelevant to the purchase price. Restating everything to FV ensures the opening consolidated balance sheet reflects what was actually acquired.

### 7.4 Step 4 — Recognise Goodwill

> [!info] Definition: Goodwill
> ==Goodwill== is the **residual** after subtracting the FV of all identifiable net assets from the total consideration paid (plus the FV of any non-controlling interest). It represents things you cannot separately identify and value — brand reputation, workforce quality, customer loyalty, expected synergies.

$$
\boxed{\text{Goodwill} = \underbrace{(\text{Consideration Paid} + \text{FV of NCI})}_{\text{A: Total Cost}} - \underbrace{(\text{FV of Identifiable Assets} - \text{FV of Liabilities})}_{\text{B: Net Identifiable Assets}}}
$$

> [!warning] Goodwill is NOT Amortised (IFRS)
> Unlike other intangibles, goodwill is **not amortised**. Instead, it is tested for **impairment annually**. If the recoverable amount of the cash-generating unit falls below the carrying amount, goodwill is written down permanently — this write-down cannot be reversed.

---

## 8. Purchase Price Allocation (PPA)

==Purchase Price Allocation (PPA)== is the process of assigning the purchase price to each identifiable asset and liability at fair value, with the residual becoming goodwill. It bridges Steps 3 and 4.

> [!tip] The Intuition
> Think of the purchase price as a lump sum receipt. PPA is the process of *itemising* it: "$3.5M for the patents, $5M for customer relationships, $14.75M for the building step-up…" Whatever can't be assigned to a specific identifiable item becomes goodwill.

> [!example] Worked Example — Summer Inc. acquires Break Inc.
>
> **Setup:** On Jan 1, 2026, Summer Inc. buys Break Inc. for **$30 million**.
> Break Inc. F/S (Dec 31, 2025): Assets $24M, Liabilities $16M → Book Equity = **$8M**
>
> ---
> **PPA Work: **
>
> | Asset / Liability | Book Value | Fair Value | Adjustment | Notes |
> |---|---|---|---|---|
> | Inventory | $3M | $3M | — | FV = BV; no change |
> | Patents & Trademarks | Not on books | $3.5M | +$3.5M | Indefinite life; no amortisation |
> | Customer Relations | Not on books | $5.0M | +$5.0M | Amortise over 5 years |
> | Office Space | $2.25M* | $17.0M | +$14.75M | *BV = $15M cost − 17 yrs × $0.75M/yr depreciation |
> | Legal Claim | Not on books | ($2.0M) | −$2.0M | Contingent liability |
>
> **FV of Net Identifiable Assets:**
>
> $$\text{FV Assets} = \$24\text{M} + \$3.5\text{M} + \$5\text{M} + \$14.75\text{M} = \$47.25\text{M}$$
>
> $$\text{FV Liabilities} = \$16\text{M} + \$2\text{M} = \$18\text{M}$$
>
> $$\text{Net FV Identifiable Assets} = \$47.25\text{M} - \$18\text{M} = \$29.25\text{M}$$
>
> **Goodwill:**
>
> $$\boxed{\text{Goodwill} = \$30\text{M} - \$29.25\text{M} = \$0.75\text{M}}$$
>
> > [!note] Slide Illustration Reference
> > The session slides show three reference figures — $8M (book equity), $24M (book assets), $30M (purchase price) — to visually anchor the concept: without PPA, an apparent $22M premium over book equity collapses almost entirely into identified assets, leaving a small residual goodwill.

---

## 9. Consolidation — Following Days

Once control is obtained, the acquiror (now the **parent**) prepares **consolidated financial statements** that combine the parent and subsidiary as a single economic entity.

### 9.1 Three Consolidation Rules

| Area | Treatment |
|------|-----------|
| **Assets & Liabilities** | 100% of the subsidiary's assets and liabilities (at FV from Day 1) are included. A separate ==Non-Controlling Interest (NCI)== line in equity represents the minority owners' stake. |
| **Revenue & Expenses** | 100% of the subsidiary's revenue and expenses are combined with the parent's. Net income is then **split** between the parent share and the NCI share. |
| **Dividends** | Dividends from subsidiary to parent are an **intragroup transaction** — eliminated in consolidation. Only dividends paid to **NCI** represent cash leaving the group and must be recorded. |

> [!tip] Why 100% if You Only Own 80%?
> Control means you direct *all* of the subsidiary's resources, not just your 80%. You include everything, then acknowledge the 20% belonging to minority shareholders via the NCI line. NCI tells readers: "20% of this subsidiary's value belongs to someone else."

### 9.2 PPA Amortisation in Consolidation

After Day 1, the FV step-ups from PPA must be **systematically amortised/depreciated** over the asset's remaining useful life — creating additional charges in the consolidated P&L not visible in the subsidiary's standalone statements.

| Step-Up Item | Useful Life | Annual Charge |
|---|---|---|
| Inventory step-up | Immediate (N/A) | Fully expensed in the period acquired |
| Customer list step-up | Finite (e.g. 5 yrs) | Step-up ÷ useful life per year |
| Software step-up | Finite (e.g. 4 yrs) | Step-up ÷ useful life per year |
| Patents/Trademarks | Indefinite | No amortisation (impairment-tested annually) |
| Property step-up | Remaining useful life | Step-up ÷ remaining life per year |

---

> [!example] Worked Example — Harvest Inc. acquires Dine-In Inc. (Full Consolidation)
>
> **Setup:** On Jan 1, 2025, Harvest Inc. buys **80%** of Dine-In Inc. for **$600 million**.
> Dine-In equity on acquisition date = **$400M**
>
> ---
> **PPA Work:**
>
> | Asset | Book Value | Fair Value | Step-Up | Useful Life |
> |---|---|---|---|---|
> | Inventory | $20M | $100M | **+$80M** | N/A |
> | Customers List | $140M | $240M | **+$100M** | 5 years |
> | Software | $60M | $100M | **+$40M** | 4 years |
> | **Total step-up** | | | **+$220M** | |
>
> FV of Net Identifiable Assets = $400M (equity) + $220M (step-ups) = **$620M**
>
> ---
> **Part 1 — Record the Acquisition (Jan 1, 2025)**
>
> NCI (20%) at fair value: ($600M ÷ 80%) × 20% = **$150M**
>
> $$\text{Goodwill} = (\$600\text{M} + \$150\text{M}) - \$620\text{M} = \boxed{\$130\text{M}}$$
>
> | Entry | Dr | Cr |
> |---|---|---|
> | All Dine-In assets at FV (incl. step-ups) | ✓ | |
> | Goodwill | $130M | |
> | All Dine-In liabilities at FV | | ✓ |
> | Cash (consideration) | | $600M |
> | Non-Controlling Interest (NCI) | | $150M |
>
> ---
> **Part 2 — 2025 Income from Dine-In**
>
> Dine-In standalone NI = $10M
>
> PPA amortisation charges in consolidated P&L:
>
> | Step-Up | Annual Charge |
> |---|---|
> | Inventory ($80M, N/A life) | −$80.0M (fully expensed in 2025) |
> | Customers List ($100M ÷ 5 yrs) | −$20.0M |
> | Software ($40M ÷ 4 yrs) | −$10.0M |
> | **Total additional charges** | **−$110.0M** |
>
> Dine-In adjusted income = $10M − $110M = **−$100M (consolidated loss)**
>
> | | Amount |
> |---|---|
> | Attributed to Harvest (80%) | **−$80M** |
> | Attributed to NCI (20%) | **−$20M** |
>
> > [!warning] The Inventory Step-Up Trap
> > The $80M inventory step-up is expensed entirely in Year 1 (inventory is sold within the period), turning a $10M reported profit into a $100M consolidated loss. This is a common "Day 2 surprise" for acquirors who don't model PPA impacts before signing.
>
> ---
> **Part 3 — Dividend**
>
> Dine-In declares $30M dividend (payable Jan 18, 2026)
>
> | Dividend Portion | Treatment |
> |---|---|
> | To Harvest (80% = $24M) | Intragroup — **eliminated** on consolidation |
> | To NCI (20% = $6M) | Cash **leaves the group** → DR NCI Equity / CR Dividends Payable |

---

## 10. Three-Method Comparison

| Feature | Financial Asset (<20%) | Equity Method (20–50%) | Business Combination (>50%) |
|---------|----------------------|----------------------|--------------------------|
| **Initial recording** | Cost | Cost | Cost → then PPA + Goodwill |
| **Subsequent measurement** | FV through P&L | Share of associate's profit added to investment | Full consolidation (100% assets/liabilities) |
| **Dividends** | Income (P&L) | Reduces investment (return of capital) | Intragroup → eliminated; NCI portion only |
| **Goodwill** | N/A | Not separately recognised | Recognised; impairment-tested annually |
| **Balance sheet** | Investment at FV | Investment at cost + profits − dividends | Full consolidation + NCI in equity |

---

## 📚 Summary

| Topic | Core Idea |
|-------|-----------|
| **Why combine** | Expand, enter markets, cost savings, IP, talent, block competition, tax |
| **< 20% ownership** | Financial Asset — cost, then FV through P&L; dividends = income |
| **20–50% ownership** | Equity Method — share of profits adds to investment; dividends reduce it |
| **> 50% ownership** | Business Combination — full consolidation; NCI = minority stake |
| **Control** | Qualitative, not purely quantitative — achievable via holding chains |
| **Step 1: Identify acquiror** | Follows economic substance, not legal form |
| **Step 2: Acquisition date** | Date control is obtained and consideration transferred |
| **Step 3: FV of net assets** | All identifiable assets/liabilities (incl. off-books intangibles) at fair value |
| **Step 4: Goodwill** | Total consideration + NCI FV − net FV identifiable assets |
| **PPA** | Allocate price to specific assets; residual = goodwill |
| **Consolidation** | 100% combined; income and equity split between parent and NCI |
| **Inventory step-up** | Expensed immediately on sale — causes large P&L hit in Year 1 |

---

## Related Notes

- [[Accounting]] — subject hub
- [[Session 5 - Financial Statements Analysis]] — how to read the consolidated statements produced
- [[Session 6-Financial Planning and Analysis]] — FP&A builds on the consolidated entity's numbers
- [[_Wiki-Link Registry]] — concept-link tracker
