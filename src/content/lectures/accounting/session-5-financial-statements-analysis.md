---
title: "Session 5 — Financial Statements Analysis"
session: 5
semester: 2
year: 2
course: Accounting & Financial Essentials for Entrepreneurs
tags:
  - accounting
  - financial-analysis
  - ratios
  - liquidity
  - profitability
  - return-ratios
  - SaaS-metrics
  - financial-modeling
  - DCF
  - investor-metrics
subject: accounting
in_scope: true
---

# Session 5 — Financial Statements Analysis

> Part of: [[Accounting]]
> Analysing company health using ratios, financial modelling, and investor metrics
> Key concepts: [[Horizontal Analysis]], [[Vertical Analysis]], [[Ratio Analysis]], [[Current Ratio]], [[Quick Ratio]], [[Working Capital]], [[Gross Profit Margin]], [[EBITDA]], [[ROA]], [[ROE]], [[ROCE]], [[Rule of 40]], [[MRR]], [[NRR]], [[Churn Rate]], [[CAC]], [[LTV]], [[DCF Model]]

---

## 📚 1. Why Analyse Financial Statements?

The whole point of building and publishing financial statements is to make **better decisions**. Analysis cuts through the raw numbers and answers three questions:

| Question | What It Reveals |
|---|---|
| Is the company **profitable**? | Is it earning enough on what it sells? |
| Is it **operationally efficient**? | Is it using its assets and people well? |
| Is it **financially sound**? | Can it pay its debts? Is it over-leveraged? |

Taken together, the answers let you assess the **future position and profitability** of the business — which is what investors, lenders, and management all need.

---

## 📚 2. Three Types of Analysis

| Type | Purpose | Compared Against |
|---|---|---|
| **Horizontal Analysis** | Track how a company changes over time | The same company in prior periods (year-on-year) |
| **Vertical Analysis** | Express each line as a % of a base figure (e.g., revenue) | Other companies of different sizes |
| **Ratio Analysis** | Compute standardised ratios for efficiency and health | Industry peers; the company's own historical ratios |

> [!info] Why ratios, not just raw numbers?
> A company with $1M revenue and a $200K profit looks very different from one with $100M revenue and $200K profit — same profit, wildly different efficiency. Ratios standardize the numbers so you can compare apples to apples.

> [!example] Horizontal vs. Vertical — Quick Illustration
>
> Suppose Company A's revenue and cost of goods sold (COGS) are:
>
> | | Year 1 | Year 2 | Horizontal change |
> |---|---|---|---|
> | Revenue | $1,000 | $1,200 | +20% |
> | COGS | $600 | $800 | +33% |
> | Gross Profit | $400 | $400 | 0% |
>
> **Horizontal analysis** shows revenue grew 20% but COGS grew 33% — margins are being squeezed even though gross profit is flat.
>
> **Vertical analysis** (as % of revenue):
>
> | | Year 1 | Year 2 |
> |---|---|---|
> | Revenue | 100% | 100% |
> | COGS | 60% | 67% |
> | Gross Profit | 40% | 33% |
>
> The vertical view makes the margin compression obvious: gross margin fell from 40% to 33%.

---

## 📚 3. Liquidity Ratios

**Liquidity** = the ability to pay short-term obligations. These ratios ask: *"If bills came due tomorrow, could the company pay them?"*

### 3.1 Current Ratio

$$\boxed{\text{Current Ratio} = \frac{\text{Current Assets}}{\text{Current Liabilities}}}$$

- **Current Assets**: Cash, accounts receivable, inventory, prepayments — anything convertible to cash within 12 months.
- **Current Liabilities**: Bills due within 12 months (payables, short-term debt, accrued expenses).

| Ratio   | Interpretation                                                                 |
| ------- | ------------------------------------------------------------------------------ |
| > 3.0   | Strong liquidity — company has ample buffer                                    |
| 1.5–3.0 | Acceptable — can cover obligations but little cushion                          |
| < 1.0   | Danger — current liabilities exceed current assets; potential liquidity crisis |

> [!warning] Current ratio alone can be misleading
> If a company's current assets are mostly slow-moving inventory, the ratio looks healthy but the cash isn't actually there. This is why we also use the Quick Ratio (§3.3).

> [!example] Current Ratio Example
> Company Balance Sheet extract:
> - Current Assets: Cash $50K + Receivables $80K + Inventory $120K = **$250K**
> - Current Liabilities: Payables $70K + Accrued expenses $30K = **$100K**
>
> $$\text{Current Ratio} = \frac{\$250K}{\$100K} = 2.5$$
>
> Interpretation: For every $1 of short-term debt, there is $2.50 of current assets. Strong liquidity position.

### 3.2 Working Capital

$$\boxed{\text{Working Capital} = \text{Current Assets} - \text{Current Liabilities}}$$

Working capital is the **absolute dollar amount** of liquidity buffer (as opposed to the ratio). It answers: "How many dollars of liquid assets are available *above and beyond* what we owe in the short term?"

> [!example] Working Capital Example
> Using the same figures above:
> $$\text{Working Capital} = \$250K - \$100K = \$150K$$
>
> This $150K is what the company can deploy to fund operations, inventory purchases, or invest in growth — after covering all near-term obligations.

> [!tip] Working capital can be negative — and sometimes that's fine
> Amazon famously ran negative working capital for years: customers pay immediately, but Amazon pays suppliers 30–60 days later. It uses supplier credit as a free funding source. This only works if the business has strong, reliable cash flows.

### 3.3 Quick Ratio (Acid Test)

$$\boxed{\text{Quick Ratio} = \frac{\text{Cash + Short-term Investments + Receivables}}{\text{Current Liabilities}}}$$

The Quick Ratio is the **tougher version** of the current ratio — it strips out inventory and prepayments (assets that can't be quickly converted to cash) and keeps only the most liquid assets.

> [!example] Quick Ratio Example
> Same company as above. Inventory = $120K, which is excluded:
>
> $$\text{Quick Ratio} = \frac{\$50K + \$80K}{\$100K} = \frac{\$130K}{\$100K} = 1.3$$
>
> Without the inventory, the ratio drops from 2.5 to 1.3 — still above 1.0, but the picture is tighter. This shows that the company is somewhat dependent on selling its inventory to meet obligations.

| Ratio | What It Tells You |
|---|---|
| Current Ratio | Overall short-term coverage including inventory |
| Quick Ratio | Ability to pay obligations with only liquid assets |
| Working Capital | Absolute dollar buffer for day-to-day operations |

---

## 📚 4. Profitability Ratios

Profitability ratios measure how well the company converts revenue into profit at different stages of the income statement.

### 4.1 Margin Ratios — The Income Statement Cascade

Think of the income statement as a waterfall — revenue flows in, and various costs are deducted at each level:

```
Revenue (Net Sales)
  – Cost of Goods Sold (COGS)
  ────────────────────────────
  = GROSS PROFIT

  – Operating Expenses (SG&A, R&D, etc.)
  ────────────────────────────
  = OPERATING INCOME (EBIT)

  + Depreciation & Amortization (added back for EBITDA)
  ────────────────────────────
  = EBITDA

  – Interest Expense
  – Tax
  ────────────────────────────
  = NET INCOME
```

### 4.2 Gross Profit Margin

$$\boxed{\text{Gross Profit Margin} = \frac{\text{Revenue} - \text{COGS}}{\text{Revenue}} = \frac{\text{Gross Profit}}{\text{Revenue}}}$$

This ratio shows **how much money is left after paying to produce or deliver the product/service**, before any other overhead.

| Gross Margin | Interpretation |
|---|---|
| **High** (e.g., 70%+) | Core operations are efficient; plenty left to cover overheads and generate profit. Common in software. |
| **Low** (e.g., 20%–30%) | High COGS relative to revenue — possibly commoditized product, low pricing power, or supply issues. Common in retail. |

> [!example] Gross Profit Margin Example
>
> | | Company A (Software) | Company B (Supermarket) |
> |---|---|---|
> | Revenue | $10M | $100M |
> | COGS | $2M | $75M |
> | Gross Profit | $8M | $25M |
> | **Gross Margin** | **80%** | **25%** |
>
> Both companies might be equally profitable at the net level, but Company A has far more room to absorb R&D, marketing, and sales costs before running out of margin.

### 4.3 Cash Flow Margin

$$\boxed{\text{Cash Flow Margin} = \frac{\text{Operating Cash Flow}}{\text{Net Income}}}$$

This measures the ability to **convert revenue into actual cash**. A company can be profitable on paper (accrual accounting) but cash-poor if customers take forever to pay. This ratio catches that gap.

> [!tip] Profit ≠ Cash
> A company can report a healthy net income and still run out of cash if it's extending long credit terms to customers, or building up inventory. Cash flow margin links back to cash, not accounting profits.

### 4.4 EBITDA and EBITDA Margin

**EBITDA** = Earnings Before Interest, Taxes, Depreciation and Amortization

$$\boxed{\text{EBITDA} = \text{Operating Income} + \text{D\&A}}$$

$$\boxed{\text{EBITDA Margin} = \frac{\text{EBITDA}}{\text{Revenue}}}$$

**Why is EBITDA so widely used?**

| Reason | Explanation |
|---|---|
| Removes financing decisions | Interest expense depends on how much debt the company has — unrelated to operating performance |
| Removes tax jurisdiction | Different countries have different tax rates — EBITDA is comparable across borders |
| Removes accounting method differences | Depreciation policies differ between companies (useful life, method); EBITDA strips this out |
| Proxy for cash generation | A rough approximation of operating cash flow (ignoring working capital changes) |

> [!warning] EBITDA is not the same as cash flow
> EBITDA ignores capital expenditures (CapEx). A capital-intensive company that needs to spend $50M on new machinery every year will have much less real cash than its EBITDA suggests. Always look at Free Cash Flow (FCF = EBITDA − CapEx − Working Capital changes) for a fuller picture.

> [!example] EBITDA Example
>
> Company C's Income Statement (simplified):
>
> | | $M |
> |---|---|
> | Revenue | 100 |
> | COGS | (40) |
> | Gross Profit | 60 |
> | SG&A | (20) |
> | R&D | (10) |
> | **Operating Income (EBIT)** | **30** |
> | + Depreciation & Amortization | 8 |
> | **EBITDA** | **38** |
> | Interest Expense | (5) |
> | Tax (25%) | (6.25) |
> | **Net Income** | **18.75** |
>
> | Metric | Value |
> |---|---|
> | Gross Margin | 60% |
> | EBITDA Margin | 38% |
> | Net Margin | 18.75% |

### 4.5 Operating Income (EBIT)

$$\boxed{\text{EBIT} = \text{Revenue} - \text{COGS} - \text{Operating Expenses}}$$

Operating income captures the profitability of the *core business operations* — before the effects of financing (interest) and taxes. It answers: "How profitable is the business on its own, ignoring how it's funded?"

---

## 📚 5. Return Ratios

Return ratios measure **how efficiently the company uses its assets and capital** to generate profit. These are the ratios that most interest investors.

### 5.1 Total Asset Turnover

$$\boxed{\text{Asset Turnover} = \frac{\text{Net Sales}}{\text{Average Total Assets}}}$$

Measures how much revenue is generated for each dollar of assets held. A high ratio means the company is "sweating" its assets efficiently.

> [!example] Asset Turnover Example
>
> | | Company X (Retail) | Company Y (Tech) |
> |---|---|---|
> | Revenue | $500M | $100M |
> | Average Total Assets | $250M | $200M |
> | **Asset Turnover** | **2.0×** | **0.5×** |
>
> Company X generates $2 of revenue per dollar of assets — high turnover, typically associated with low margins (supermarkets, logistics). Company Y generates only $0.50 but likely has very high margins.

### 5.2 The Law of Competition — Margin vs. Turnover Trade-off

$$\boxed{\text{ROA} = \text{Profit Margin} \times \text{Asset Turnover}}$$

This is the **DuPont decomposition** of ROA. Competitive forces push companies to one of two strategic positions:

| Business Model | Asset Turnover | Profit Margin | Example |
|---|---|---|---|
| **High Turnover / Low Margin** | High (sell lots, rapidly) | Low (thin margins) | Supermarkets, airlines, fast fashion |
| **Low Turnover / High Margin** | Low (fewer transactions) | High (premium pricing) | Luxury goods, software, pharmaceuticals |

> [!info] Why can't a company have both high turnover AND high margin?
> Competition drives it out. If a company has high margins, competitors enter and drive prices down (reducing margin) or the company must invest more in assets to defend its position (reducing turnover). In equilibrium, ROA tends to converge across industries.

### 5.3 Return on Assets (ROA)

$$\boxed{\text{ROA} = \frac{\text{Net Income}}{\text{Average Total Assets}}}$$

ROA answers: "For every dollar of assets the company owns, how much net profit does it earn?"

- Low ROA = **asset-intensive** (factories, machinery, real estate needed)
- High ROA = **asset-light** (software, consulting, marketplace businesses)

> [!example] ROA Example
>
> Company Z:
> - Net Income: $20M
> - Average Total Assets: $200M
>
> $$\text{ROA} = \frac{\$20M}{\$200M} = 10\%$$
>
> For every $1 of assets, the company earns $0.10 of profit.
> Compare: a bank might have ROA of 1%; a software company might have ROA of 20%+.

### 5.4 Return on Equity (ROE)

$$\boxed{\text{ROE} = \frac{\text{Net Income}}{\text{Average Shareholders' Equity}}}$$

ROE answers: "For every dollar of *equity* investors have put in, how much net profit is earned?" This is the return on the owners' capital.

A high ROE is desirable — it means the company is generating strong returns for shareholders. Companies with high ROE can often fund their own growth internally and rely less on external financing.

> [!warning] Leverage artificially inflates ROE
> A company can boost ROE by taking on more debt (reducing equity in the denominator). This looks good on paper but increases financial risk. Always check the debt level alongside ROE.
>
> $$\text{DuPont Identity: } ROE = \underbrace{\frac{\text{Net Income}}{\text{Revenue}}}_{\text{Profit Margin}} \times \underbrace{\frac{\text{Revenue}}{\text{Assets}}}_{\text{Asset Turnover}} \times \underbrace{\frac{\text{Assets}}{\text{Equity}}}_{\text{Financial Leverage}}$$
>
> A high ROE is only impressive if it's driven by the first two factors (efficiency), not the third (borrowing).

> [!example] ROE Example
>
> | | Company A | Company B |
> |---|---|---|
> | Net Income | $10M | $10M |
> | Shareholders' Equity | $50M | $20M |
> | Total Debt | $0 | $80M |
> | **ROE** | **20%** | **50%** |
>
> Company B looks much better on ROE, but it has $80M of debt vs Company A's $0. Company B's high ROE is largely a result of financial leverage, not operational excellence.

### 5.5 Return on Capital Employed (ROCE)

$$\boxed{\text{ROCE} = \frac{\text{EBIT}}{\text{Capital Employed}}}$$

Where:

$$\text{Capital Employed} = \text{Shareholders' Equity} + \text{Long-Term Debt}$$

ROCE measures how efficiently a company uses **all** the capital available to it (not just equity), to generate operating profit. It's particularly useful for capital-intensive industries.

**Key rule:** ROCE should be **greater than the cost of capital (WACC)**. If not, the company is destroying value — it earns less on its investments than investors demand.

| ROCE vs. Cost of Capital | Implication |
|---|---|
| ROCE > WACC | Creating value for shareholders ✅ |
| ROCE = WACC | Breaking even — no value created or destroyed |
| ROCE < WACC | Destroying value ❌ — should not be investing at this level |

---

## 📚 6. The Big Picture — Financial Modelling

### 6.1 Why Individual Ratios Aren't Enough

Ratios give a snapshot, but they have a critical limitation: **no single ratio tells the whole story**. A company might look liquid (good current ratio) but unprofitable. It might have a high ROE due to dangerous leverage. None of the ratios above account for **future cash flows**.

### 6.2 DCF Model — The Gold Standard

The most comprehensive way to value a company is a **Discounted Cash Flow (DCF) model**, which projects future cash flows and discounts them back to today's value (Net Present Value).

A full DCF model typically includes:

| Component | Description |
|---|---|
| **3–5 years historical results** | Baseline to calibrate the model |
| **5-year cash flow forecast** | Revenue, margins, CapEx, working capital projections |
| **Terminal Value** | Value of all cash flows beyond the forecast period (often the biggest component) |
| **Discount Rate (WACC)** | The rate used to discount future cash flows to present value |
| **Net Present Value (NPV)** | Sum of all discounted cash flows — the implied value of the business today |

$$\boxed{\text{NPV} = \sum_{t=1}^{n} \frac{CF_t}{(1+r)^t} + \frac{\text{Terminal Value}}{(1+r)^n}}$$

> [!tip] Why discount future cash flows?
> A dollar today is worth more than a dollar in 5 years — you can invest the dollar today and earn a return. The discount rate reflects the opportunity cost and risk of the investment. The higher the risk, the higher the discount rate, and the less future cash flows are worth today.

---

## 📚 7. How Investors Look at You — Startup & SaaS Metrics

For technology and SaaS companies, traditional ratios may be less relevant (especially if the company isn't yet profitable). Investors use a set of bespoke metrics to evaluate health and trajectory.

### 7.1 Rule of 40

The **Rule of 40** is the standard health check for SaaS businesses. It combines growth and profitability:

$$\boxed{\text{Rule of 40 score} = \text{YoY Revenue Growth (\%)} + \text{EBITDA Margin (\%)}}$$

**The target: score ≥ 40**

| Scenario | Growth | EBITDA Margin | Score | Healthy? |
|---|---|---|---|---|
| Fast grower | 60% | −20% | 40 ✅ | Yes |
| Balanced | 20% | 20% | 40 ✅ | Yes |
| Profitable, slow | 5% | 35% | 40 ✅ | Yes |
| Struggling | 15% | 5% | 20 ❌ | No |
| Burning fast, growing slow | 10% | −30% | −20 ❌ | No |

> [!info] Why this metric?
> Early-stage SaaS companies often *choose* to lose money today by investing aggressively in growth — that's by design. The Rule of 40 ensures the growth justifies the losses. If you're growing 60%, losing 20% is fine. If you're growing 10% and losing 20%, something is broken.

### 7.2 MRR, NRR, and Churn

| Metric | Definition | Formula |
|---|---|---|
| **MRR** (Monthly Recurring Revenue) | Total predictable monthly subscription revenue | Sum of all active subscriptions × monthly fee |
| **NRR** (Net Revenue Retention) | How much revenue is retained and expanded from an existing cohort of customers | $\frac{\text{Current MRR from customers 1 yr ago}}{\text{MRR from same customers 1 yr ago}}$ |
| **Churn Rate** | Revenue lost from cancellations last month as a % of total MRR | $\frac{\text{Lost MRR last month}}{\text{Total MRR last month}}$ |

> [!example] MRR, NRR, and Churn Example
>
> Start of year: 100 customers each paying $1,000/month = **$100K MRR**
>
> End of year (same cohort of 100 customers):
> - 10 customers churned (lost $10K MRR)
> - 20 customers upgraded (added $20K MRR)
> - 70 customers stayed the same ($70K MRR)
> - Total from same cohort: $80K (retained) + $20K (expansion) = **$100K MRR**
>
> $$\text{NRR} = \frac{\$100K}{\$100K} = 100\%$$
>
> If NRR > 100%, the company is growing from its existing base alone — **this is the holy grail of SaaS**.
>
> **Churn rate** (monthly): If 2 customers cancel each month on a $100K MRR base, losing $2K:
> $$\text{Monthly Churn} = \frac{\$2K}{\$100K} = 2\%$$

| NRR | Interpretation |
|---|---|
| > 120% | Exceptional — existing customers are expanding faster than they churn |
| 100%–120% | Great — growth even before new customer acquisition |
| < 100% | Problem — you're losing more than you're growing from existing customers |

### 7.3 CAC and LTV

| Metric                              | Definition                                                          | Formula                                                                                |
| ----------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **CAC** (Customer Acquisition Cost) | What it costs to acquire one new customer                           | $\frac{\text{Total Sales \& Marketing Spend}}{\text{Number of New Customers}}$         |
| **LTV** (Lifetime Value)            | Total revenue expected from a customer over their lifetime with you | $\text{Avg Monthly Revenue per customer} \times \text{Avg customer lifetime (months)}$ |

> [!example] CAC and LTV Example
>
> A SaaS company spends $500K on sales and marketing in Q1 and acquires 100 new customers.
>
> $$\text{CAC} = \frac{\$500K}{100} = \$5{,}000 \text{ per customer}$$
>
> Average monthly subscription = $500. Average customer stays 3 years (36 months).
>
> $$\text{LTV} = \$500 \times 36 = \$18{,}000$$
>
> $$\text{LTV:CAC ratio} = \frac{\$18{,}000}{\$5{,}000} = 3.6×$$
>
> ✅ Above the 3× threshold — every dollar spent acquiring a customer returns $3.60 in lifetime revenue.

**The LTV:CAC ratio** — the key efficiency metric for growth:

| LTV:CAC | Interpretation |
|---|---|
| > 3× | Healthy — sustainable growth economics ✅ |
| 1×–3× | Marginal — monitor closely |
| < 1× | Broken — spending more to acquire customers than they're worth ❌ |

> [!warning] LTV can be misleading if churn is high
> LTV assumes customers stay for the modelled lifetime. If churn is high, actual lifetime is much shorter than the model. Always sanity-check LTV against your actual churn data.

### 7.4 Salesforce Productivity — The "Magic Number"

$$\boxed{\text{Magic Number} = \frac{\text{Revenue generated by sales team}}{\text{Total sales team costs (salaries + benefits + commission)}}}$$

| Score | Interpretation |
|---|---|
| > 5 | Magic number — exceptional salesforce productivity |
| 3–5 | Good |
| < 3 | Sales team is not paying for itself efficiently |

This metric ensures you're not over-investing in a sales team that isn't generating sufficient return. It's especially important as startups scale their go-to-market function.

---

## 📚 8. Summary — Putting It All Together

> [!tip] The analyst's mental hierarchy
> Start broad, then narrow:
> 1. **Horizontal analysis** — Is the company growing? Are margins expanding or contracting?
> 2. **Vertical analysis** — How does cost structure compare to peers?
> 3. **Liquidity ratios** — Can it survive short-term?
> 4. **Profitability ratios** — Is it making money at each level of the P&L?
> 5. **Return ratios** — Is it efficient with its capital?
> 6. **DCF model** — What is it worth, based on future cash flows?
> 7. **SaaS/growth metrics** (if applicable) — Is the growth engine healthy?

**Key principles to remember:**

1. **Ratios are most useful in context** — compare to the prior year (horizontal) or industry peers (vertical). A 15% gross margin is bad for software, great for grocery.
2. **EBITDA ≠ Cash Flow** — always check if CapEx is consuming the EBITDA.
3. **High ROE from leverage is a red flag** — use DuPont to decompose it.
4. **ROCE must beat WACC** — otherwise the company is destroying value.
5. **Rule of 40** is the SaaS health check — score must be ≥ 40.
6. **NRR > 100%** means the existing customer base grows on its own — the gold standard.
7. **LTV:CAC > 3×** is required for sustainable growth economics.
8. **A DCF model** is the only way to get the full picture — ratios alone miss the future.

---

## 📚 9. Master Ratio Reference Table

| Category | Ratio | Formula | What "Good" Looks Like |
|---|---|---|---|
| **Liquidity** | Current Ratio | Current Assets ÷ Current Liabilities | > 1.5× |
| **Liquidity** | Quick Ratio | (Cash + Receivables) ÷ Current Liabilities | > 1.0× |
| **Liquidity** | Working Capital | Current Assets − Current Liabilities | Positive, growing |
| **Profitability** | Gross Margin | Gross Profit ÷ Revenue | Depends on industry |
| **Profitability** | EBITDA Margin | EBITDA ÷ Revenue | Depends on industry; > 20% for mature businesses |
| **Profitability** | Cash Flow Margin | Operating CF ÷ Revenue | Positive; close to or above net margin |
| **Return** | Asset Turnover | Revenue ÷ Avg Total Assets | Higher = more efficient |
| **Return** | ROA | Net Income ÷ Avg Total Assets | Depends on industry; > 5% is solid |
| **Return** | ROE | Net Income ÷ Avg Equity | > 15% is typically considered good |
| **Return** | ROCE | EBIT ÷ Capital Employed | Must be > WACC |
| **SaaS** | Rule of 40 | Growth % + EBITDA Margin % | ≥ 40 |
| **SaaS** | NRR | Current MRR from old cohort ÷ Old MRR | > 100% |
| **SaaS** | LTV:CAC | LTV ÷ CAC | > 3× |
| **SaaS** | Magic Number | Sales Revenue ÷ Sales Team Cost | > 5 (ideal), > 3 (good) |

---

## Related notes

- [[Accounting]] — subject hub
- [[Session 2 - Accounting Fundamentals]] — the financial statements that these ratios are built from
- [[Session 3 - Raising Debt and Capital]] — capital structure (relevant to ROE leverage effect and ROCE)
- [[Session 4 - Incorporation, Corporate Taxes & Employee Compensation]] — EBITDA is used in the Rule of 40 and MRR metrics
- [[_Wiki-Link Registry]] — concept-link tracker
