---
title: "Session 6 — Financial Planning & Analysis (FP&A)"
session: 6
semester: 2
year: 2
course: Accounting & Financial Essentials for Entrepreneurs
tags:
  - accounting
  - fpa
  - budgeting
  - variance-analysis
  - standard-costing
  - responsibility-centers
  - transfer-pricing
subject: accounting
in_scope: true
---

# Session 6 — Financial Planning & Analysis (FP&A)

> Part of: [[Accounting]]
> Building budgets, monitoring performance through variance analysis, and managing decentralised organisations
> Key concepts: [[Budget]], [[Standard Costing]], [[Variance Analysis]], [[Price Variance]], [[Quantity Variance]], [[Responsibility Centers]], [[Cost Center]], [[Profit Center]], [[Transfer Pricing]]

---

## 📚 1. What is a Budget?

> [!info] Definition: Budget
> A ==budget== is a **quantitative plan** for a specific period, set by management, that expresses its expectations regarding:
> - **Outputs** — income / revenue
> - **Inputs** — costs
> - **Resources** — equity and debt needed to support operations

Think of the budget as the organisation's GPS for the year. Without it, you might know roughly where you want to go, but you have no route and no way to tell if you've gone off course.

---

## 📚 2. Budget Objectives

A budget isn't just a spreadsheet — it serves five distinct management purposes:

| # | Objective | What it means in practice |
|---|-----------|--------------------------|
| 1 | **Planning** | Organises all aspects of the firm into a structured framework of goals for the upcoming period |
| 2 | **Coordination** | Commits every department to a single agreed plan — prevents silos working towards conflicting goals |
| 3 | **Setting Goals** | Gives every manager and employee clear, measurable targets that ladder up to org-wide goals |
| 4 | **Motivation** | Well-designed targets (often tied to compensation) drive employees to hit goals; also shapes managerial decision-making |
| 5 | **Assessing Performance** | Acts as the benchmark against which actual results are measured at period end |

> [!tip] Why all five matter
> A budget that only plans but doesn't motivate is ignored. A budget that motivates but doesn't coordinate causes internal conflict. All five objectives must work together.

---

## 📚 3. What Makes a Budget Effective?

> [!success] Characteristics of an Effective Budget
> An effective budget satisfies **all three** of the following:
> 1. The probability of reaching targets is **perceived to be high** — if targets feel impossible, the budget loses credibility and motivation collapses
> 2. Following the budget moves the organisation **closer to its long-term strategic goals**
> 3. Managers and employees **support it** and do not feel threatened — buy-in is essential for execution

> [!warning] The Credibility Trap
> Setting targets too aggressively destroys credibility — employees stop trying when the goal feels unattainable. Set them too loose and motivation drains away. The sweet spot is *challenging but achievable*.

---

## 📚 4. Budget Periods

Organisations budget over different time horizons depending on their needs:

| Type | Period | Characteristics |
|------|--------|-----------------|
| **Annual Budget** | 1 fiscal year | Most common; very detailed; widely used across all firm sizes |
| **Rolling Budget** | Typically 12 months, always forward-looking | Each month that passes, a new month is added at the far end — keeps the horizon constant; great for fast-moving businesses |
| **Multi-Year Budget** | 2–5+ years | Less detailed; used mainly by large capital-intensive firms with significant debt obligations |

> [!tip] Rolling vs Annual
> A rolling budget is like a treadmill — you always have a 12-month view ahead. An annual budget is a fixed snapshot. Rolling budgets demand more management time but provide better forward visibility.

---

## 📚 5. Building a Budget

Budgets are complex because they must cover **every element** of the organisation that has a financial impact. This includes non-monetary inputs that must be translated into dollar amounts (number of employees → salaries; location → rent; equipment type → CapEx and depreciation).

### 5.1 The Sub-Budget Hierarchy

A master budget is built from **five interlocking sub-budgets**, which must be consistent with each other:

```
Master Budget
├── 1. Operating Income Budget       ← starting point (revenue forecast)
├── 2. Cost of Sales Budget          ← driven by revenue; must maintain safety margins
├── 3. Operating Expenses Budget
│   ├── R&D                          ← future products + enhancements to current
│   ├── S&M                          ← support current sales + new markets/products
│   └── G&A                          ← overhead; match carefully to forecasted operation level
├── 4. Cash Budget                   ← ending cash balance + cash-flow forecast
└── 5. Financing Budget              ← credit levels, loans, equity injections, repayments, dividends
```

> [!example] Why the order matters
> You can't build a Cost of Sales Budget before knowing your revenue plan. You can't build your Cash Budget without knowing your costs. Each sub-budget feeds the next — they must be constructed in sequence and then reconciled as a whole.

| Sub-Budget | Key Drivers |
|------------|-------------|
| Operating Income | Market size, pricing, sales volume assumptions |
| Cost of Sales | COGS %, gross margin target, production capacity |
| R&D | Product roadmap, headcount, contractor costs |
| S&M | Customer acquisition cost (CAC), channel mix |
| G&A | Headcount, office, legal, finance overhead |
| Cash | Payment terms (receivables & payables), CapEx timing |
| Financing | Debt schedule, equity raises, dividend policy |

---

## 📚 6. Standard Costing

### 6.1 Setting Standards

==Standard costing== is a system where management sets **predetermined cost targets** before the period begins. These standards serve two roles:

1. **Operational tool** — helps management plan and monitor operations independently of the accounting process
2. **Financial accounting tool** — enables rapid generation of interim reports using standard (not actual) costs

> [!info] The Two Standard Components
> Cost Accounting defines standards along two dimensions for **direct costs**:
> - **Price Standard** — the expected cost per unit of material or per hour of labour
> - **Quantity Standard** — the expected quantity of material or number of labour hours per unit of output

> [!warning] The Learning Curve Effect
> Standards set at the beginning of a period may become "too loose" over time as workers become faster and more efficient. But constantly raising the bar can backfire — employees burn out or lose motivation. Standards should be reviewed periodically, not just ratcheted up automatically.

---

## 📚 7. Variance Analysis

### 7.1 What are Variances?

==Variances== are the differences between standard (planned) costs and actual costs. Since every forecast deviates from reality, variances are **inevitable** — what matters is *why* they arose and what to do about them.

> [!tip] Why Variance Analysis Matters
> Variance analysis is a ==diagnostic tool==. A significant variance signals either a problem in operations (correctable) or a problem with the standard itself (the forecast was wrong). Both are actionable insights that improve the next planning cycle.

### 7.2 Direct Cost Variances

Every direct cost variance decomposes into exactly two parts:

$$
\text{Total Variance} = \underbrace{Q_A \times (P_A - P_S)}_{\text{Price Variance}} + \underbrace{P_S \times (Q_S - Q_A)}_{\text{Quantity Variance}}
$$

Where:
- $Q_A$ = Actual quantity used
- $Q_S$ = Standard quantity (what *should* have been used for the actual level of output)
- $P_A$ = Actual price paid
- $P_S$ = Standard (expected) price

| Variance | Formula | What it tells you |
|----------|---------|-------------------|
| ==Price Variance== | $Q_A \times (P_A - P_S)$ | Did we pay more or less per unit than expected? |
| ==Quantity Variance== | $P_S \times (Q_S - Q_A)$ | Did we use more or less material/labour than expected? |

> [!info] Sign Convention
> - **Favourable (F)** → actual cost < standard cost → good news
> - **Unfavourable (U)** → actual cost > standard cost → needs investigation

> [!example] Worked Example — Online Servers
>
> **Standards per server:**
> - Materials: 4 boards @ $100 each → $400 per server
> - Labour: 20 hours @ $25/hr → $500 per server
>
> **Actuals for April (200 servers assembled):**
> - Boards used: 900 | Cost: $18,000
> - Labour hours: 4,500 | Cost: $117,000
>
> **Step 1 — Standard vs Actual comparison**
>
> | | Standard (200 servers) | Actual | Difference |
> |-|------------------------|--------|------------|
> | Boards | 200 × 4 = **800** | 900 | 100 extra |
> | Labour hours | 200 × 20 = **4,000 hrs** | 4,500 hrs | 500 extra |
> | Labour cost | 4,000 × $25 = **$100,000** | $117,000 | $17,000 over |
>
> **Step 2 — Materials Price Variance**
>
> $$P_A = \frac{\$18{,}000}{900} = \$20 \text{ per board}$$
>
> $$\text{Price Variance} = 900 \times (\$20 - \$100) = \boxed{-\$72{,}000 \text{ (Favourable)}}$$
>
> We paid far less per board than the $100 standard.
>
> **Step 3 — Materials Quantity Variance**
>
> $$\text{Quantity Variance} = \$100 \times (800 - 900) = \boxed{-\$10{,}000 \text{ (Unfavourable)}}$$
>
> We used 100 more boards than expected.
>
> **Step 4 — Labour Price Variance**
>
> $$P_A = \frac{\$117{,}000}{4{,}500} = \$26/\text{hr}$$
>
> $$\text{Price Variance} = 4{,}500 \times (\$26 - \$25) = \boxed{\$4{,}500 \text{ (Unfavourable)}}$$
>
> **Step 5 — Labour Quantity Variance**
>
> $$\text{Quantity Variance} = \$25 \times (4{,}000 - 4{,}500) = \boxed{-\$12{,}500 \text{ (Unfavourable)}}$$
>
> **Key insight:** The cheaper boards may have been lower quality — causing more waste (unfavourable quantity variance on materials) and slower assembly (unfavourable labour variances). Always consider whether variances are connected.

### 7.3 Indirect Cost Variances

Indirect costs are harder to trace to individual units. They fall into four categories:

| Type                       | Behaviour                           | Example                          |
| -------------------------- | ----------------------------------- | -------------------------------- |
| **Variable Indirect**      | Changes proportionally with output  | Factory utilities, packaging     |
| **Semi-Variable Indirect** | Fixed base + variable component     | Utilities with a standing charge |
| **Fixed Indirect**         | Unchanged regardless of output      | Rent, depreciation               |
| **Semi-Fixed Indirect**    | Fixed within a range, then steps up | Supervisory headcount            |

Overhead variances split into two types:

| Variance | Cause |
|----------|-------|
| ==Budget Variance== (Price) | Actual overhead prices differ from forecast, or the allocation basis doesn't reflect cost behaviour |
| ==Volume Variance== (Quantity) | Actual output quantities differ from the forecast |

---

## 📚 8. Responsibility Centers

### 8.1 What is a Responsibility Center?

A ==Responsibility Center== is an organisational structure used by large or diversified firms, where:
- The firm is split into **separate business units** (by geography, product line, or function)
- Local management has **defined accountability** over specific financial metrics
- Performance is **measured periodically** against those metrics

### 8.2 The Four Types

| Center Type | Manager Accountable For | Key Metric |
|-------------|------------------------|------------|
| **Revenue Center** | Revenue only | Actual vs target revenue |
| **Cost Center** | Costs only | Actual vs budgeted costs |
| **Profit Center** | Both revenue and costs | Operating profit |
| **Investment Center** | Investments + returns | Return on Assets ([[ROA]]) |

> [!tip] Match accountability to control
> A production department that cannot influence pricing should never be a profit center — it should be a [[Cost Center]]. Giving someone a P&L they can't fully control creates perverse incentives and unfair performance evaluations.

### 8.3 Why Structure as Profit Centers?

| Goal | How it helps |
|------|-------------|
| Better unit evaluation | Each unit's performance is clearly visible |
| Increased motivation | Managers behave like owners |
| Decision-making agility | Local decisions made faster without HQ sign-off |
| Efficient resource allocation | Resources flow to the most productive units |

### 8.4 The Pitfalls of Profit Centers

> [!warning] When Profit Centers Backfire
> Structuring as profit centers does **not guarantee** optimal overall profit. Common failure modes:
> - **Local vs global strategy tension** — a unit optimises its own P&L at the expense of other business units
> - **Uneconomical transfer pricing** — internal prices distort the true cost picture and lead to wrong decisions
> - **Negotiation overhead** — management time wasted on internal deals rather than serving customers
> - **Duplicate costs** — each unit builds its own sales, HR, and finance functions
> - **Reduced loyalty** — "my unit first" culture erodes cross-functional collaboration

---

## 📚 9. Transfer Pricing

> [!info] Definition: Transfer Price
> A ==Transfer Price (TP)== is the **internal price** charged when one business unit within an organisation buys from or sells to another. It determines how revenue and costs are split between the two units for the purpose of measuring their individual profitability.

The critical insight: **transfer prices don't change the consolidated P&L** — they only redistribute profit between units. However, setting the *wrong* TP can distort decision-making and harm the whole firm.

> [!example] Why It Matters
> If Unit A (manufacturer) charges Unit B (distributor) a transfer price that's too high:
> - Unit B looks unprofitable → management may incorrectly decide to shut it down
> - Unit A looks highly profitable → may receive excess capital allocation
> - The firm as a whole makes a worse decision than if both units were integrated
>
> Setting the wrong TP might also lead to **ineffective tax payments** in multi-country operations — profits shifted to lower-tax jurisdictions trigger regulatory scrutiny.

### 9.1 Methods for Setting Transfer Prices

| Method | Description | Best used when |
|--------|-------------|----------------|
| **Market Price** | Use the external market price as the internal price | An active external market exists for the product |
| **Cost-Based** | Full cost or marginal cost + markup | No external market; transfer at production cost |
| **Negotiated** | Units agree on a mutually acceptable internal price | Unique products; both units have real bargaining power |
| **Arm's-Length (Regulatory)** | Required by tax law for cross-border related-party transactions | Multinational organisations |

> [!tip] The Core Principle
> A good transfer price replicates the outcome a market transaction would produce — the selling unit shouldn't charge more than an external supplier would, and the buying unit shouldn't pay more than the market rate.

> [!warning] Transfer Pricing ≠ Neutral
> Even though TP is "internal," wrong prices lead to wrong build-vs-buy decisions, wrong capacity utilisation, and potential tax penalties. It deserves serious management attention — especially in multinational organisations (see also [[Session 4 - Incorporation, Corporate Taxes & Employee Compensation]] for GILTI/FDII context).

---

## 📚 10. Summary

| Topic | Core Idea |
|-------|-----------|
| **Budget** | A quantified plan covering income, costs, and resources for a defined period |
| **Budget Objectives** | Planning, coordination, goal-setting, motivation, performance assessment |
| **Effective Budget** | Achievable targets + strategic alignment + employee buy-in |
| **Budget Periods** | Annual (detailed), Rolling (continuous 12-month horizon), Multi-year (high-level) |
| **Sub-Budgets** | Operating income → COGS → OpEx (R&D, S&M, G&A) → Cash → Financing |
| **Standard Costing** | Pre-set cost targets (price standard × quantity standard) used to plan and measure |
| **Variance Analysis** | Split any cost variance into Price Variance + Quantity Variance to diagnose root cause |
| **Indirect Cost Variances** | Budget Variance (price) + Volume Variance (quantity) |
| **Responsibility Centers** | Revenue / Cost / Profit / Investment — match accountability to what the manager controls |
| **Transfer Pricing** | Internal prices between units affect unit profits but not consolidated results; wrong TP → bad decisions |

---

## Related notes

- [[Accounting]] — subject hub
- [[Session 2 - Accounting Fundamentals]] — financial statements and accounting mechanics that underpin the budget
- [[Session 3 - Raising Debt and Capital]] — the Financing Budget connects directly to capital structure decisions
- [[Session 4 - Incorporation, Corporate Taxes & Employee Compensation]] — transfer pricing in a tax/regulatory context (GILTI, FDII, arm's-length rules)
- [[Session 5 - Financial Statements Analysis]] — the ratios and metrics (ROA, EBITDA) used to assess responsibility center performance
- [[_Wiki-Link Registry]] — concept-link tracker
