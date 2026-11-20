---
title: Formula Sheet — Solow, Growth Accounting & the Open Economy
semester: 2
year: 1
academic_year: "2024-25"
course: Introduction to Macroeconomics
reading: "Formula sheet 2025 (3 pages)"
instructor: Yosi Ganel
date: 2026-11-21
tags:
  - macro-economics-intro
  - principles-of-macro
  - reading
  - formula-sheet
  - solow-model
  - golden-rule
  - growth-accounting
  - cobb-douglas
  - open-economy
  - savings-identity
aliases:
  - Intro Macro Formula Sheet
  - Solow Model Formulas
  - Golden Rule Savings Rate
subject: principles-of-macro
in_scope: true
---

# Formula Sheet — Solow, Growth Accounting & the Open Economy

> Part of: [[Macro-Economics (Intro)]] | Companion recitations: [[Rec_01-Nominal & Real GDP, Price Indices & GNP|Rec_01]], [[Rec_02-The Three Approaches to Measuring GDP|Rec_02]], [[Rec_03-Capital Accumulation, the Savings Identity & GNP vs GDP|Rec_03]], [[Rec_05-Production at Full Employment — Cobb-Douglas, Marginal Products & Returns to Scale|Rec_05]], [[Rec_06-The Labor & Capital Markets, Factor Payments & Growth Accounting|Rec_06]]

This is the course's official **reference sheet** (3 pages), reorganised by topic. Every formula is re-typed in KaTeX from the rendered pages, with a one-line meaning for each symbol. It is a lookup page, not a lesson: for worked examples follow the links to the recitations.

> [!note] What is and is not covered elsewhere
> - **Measuring output, savings and the open-economy identity** (sections 1 and 2) are practised in [[Rec_01-Nominal & Real GDP, Price Indices & GNP|Rec_01]] to [[Rec_03-Capital Accumulation, the Savings Identity & GNP vs GDP|Rec_03]].
> - **Cobb-Douglas, marginal products, factor shares and growth accounting** (sections 3 and 4) are in [[Rec_05-Production at Full Employment — Cobb-Douglas, Marginal Products & Returns to Scale|Rec_05]] and [[Rec_06-The Labor & Capital Markets, Factor Payments & Growth Accounting|Rec_06]].
> - **The Solow model and the golden rule (section 5) have no recitation note.** There is no recitation source for them in this vault, so this page keeps strictly to what the sheet states. No derivations beyond the sheet's own are claimed.

## 📑 Contents

| # | Topic | Practised in |
|---|-------|--------------|
| 1 | Measuring output, income and prices | Rec_01, Rec_02 |
| 2 | Sources and uses, savings and capital accumulation | Rec_02, Rec_03 |
| 3 | The production function: Cobb-Douglas, marginal products, factor payments | Rec_05, Rec_06 |
| 4 | Growth accounting | Rec_06 |
| 5 | The Solow model and the golden rule | none |
| 6 | The open economy: current and capital account | Rec_03 |

---

## 1. Measuring output, income and prices

### Value added and the three aggregates

$$\text{Value added of a firm} = \text{sales} + \text{increase in inventory} - \text{purchases from firms}$$

- **sales**: the firm's revenue from selling output.
- **increase in inventory**: output produced but not sold this year, counted as if the firm had "bought" it.
- **purchases from firms**: intermediate inputs bought from other firms (subtracted so nothing is double-counted).

$$\text{Government value added} = \text{wage payments} + \text{rent payments by the government}$$

$$GDP = Y = \sum \text{value added of firms} + \text{value added of government}$$

- **GDP** (written $Y$): gross domestic product, output produced inside the country.

$$\text{Household income from the firms} = \text{wage payments} + \text{rents and profits paid by the firms}$$

$$\text{Household income from the government} = \text{wage} + \text{rent payments by the government}$$

$$GNP = \sum \text{household incomes from the firms and the government}$$

- **GNP**: gross national product, income earned by the country's households (the sheet defines it from the income side).

$$NDP = GDP - \text{depreciation} \qquad\qquad \text{Net investment} = \text{gross investment} - \text{depreciation}$$

- **NDP**: net domestic product.
- **depreciation**: capital that wears out during the year.

> [!info] Links
> The value-added and income routes to $Y$ are the subject of [[Rec_02-The Three Approaches to Measuring GDP|Rec_02]]; GDP versus GNP is in [[Rec_01-Nominal & Real GDP, Price Indices & GNP|Rec_01]] and [[Rec_03-Capital Accumulation, the Savings Identity & GNP vs GDP|Rec_03]] (the $GNP = GDP - NIFF$ bridge, see section 2).

### Disposable income and the three kinds of savings

$$Y^{d} = Y - T - S_b \qquad S_p = Y^{d} - C \qquad S_g = T - G \qquad S = S_p + S_g + S_b$$

- $Y^d$: disposable income of households.
- $T$: net taxes (taxes less transfer payments).
- $S_b$: business savings, "undivided" (retained) profits; **assumed zero unless the question says otherwise**.
- $S_p$: private (household) savings.
- $C$: private consumption.
- $S_g$: government (public) savings, i.e. the budget surplus; $G$ is public consumption.
- $S$: aggregate domestic savings.

> [!warning] Notation difference with Rec_03
> The sheet derives $S_p = Y^d - C$ with $Y^d = Y - T - S_b$. [[Rec_03-Capital Accumulation, the Savings Identity & GNP vs GDP|Rec_03]] describes private savings in words as "household net income minus household taxes minus consumption", and builds $S_b$ from a firm P&L table. Same idea, different route: when a question gives a table of household and firm accounts, follow Rec_03's route; when it gives $Y$, $T$, $C$ directly, use the sheet's.

### Real product, per capita, inflation

$$\text{Real product} = \frac{\text{nominal product (in current prices)}}{1 + \text{change in the price index of the base year}} = \text{current product at base-year prices}$$

$$\text{Product per capita} = \frac{\text{product}}{\text{population size}}$$

$$\pi = \frac{p_{t+s}}{p_t} - 1 \qquad\qquad \bar{\pi} = \left(\frac{p_{t+s}}{p_t}\right)^{\frac{1}{s}} - 1$$

- $\pi$: general price-level inflation (GDP inflator), the percentage change of the price index between two years.
- $\bar{\pi}$: average yearly inflation over the period.
- $p_t$: the price index in year $t$; $p_{t+s}$: the price index $s$ years later.
- $s$: **number of years** in the period. (Careful: in the Solow section $s$ is the savings rate.)

> [!warning] Notation difference with Rec_01
> [[Rec_01-Nominal & Real GDP, Price Indices & GNP|Rec_01]] writes inflation from the CPI as $\pi_t = \dfrac{CPI_t - CPI_{t-1}}{CPI_{t-1}} \times 100$ (a percentage, one-year gap) and Real GDP as $\sum_i p_i^{base} q_i^{t}$. The sheet's $\pi = p_{t+s}/p_t - 1$ is the same growth rate for any gap of $s$ years, written as a fraction (not times 100), and uses a general "price index" $p$ rather than a named CPI.

> [!tip] 🗣️ In plain English
> Real output is **nominal output with the price rise taken out**, so you only see changes in how much was produced. Inflation is just the **growth rate of the price index**, and $\bar\pi$ is that growth spread evenly across $s$ years.

---

## 2. Sources and uses, savings and capital accumulation

### Notation (as listed on the sheet)

| Symbol | Meaning |
|--------|---------|
| $Y$ | gross domestic product |
| $Y^d$ | disposable income |
| $T$ | net taxes (taxes less transfer payments) |
| $G$ | public consumption |
| $C$ | private consumption |
| $I$ | gross investment in the economy |
| $S$, $S_p$, $S_g$ | savings: total, private, public |
| $EX$, $IM$ | exports, imports |
| $NX$ | net exports, the export surplus $EX - IM$ |
| $NIFF$ | net payments to foreign factors |

> [!info] The sheet's list also says "$I + NX$ = gross (total) investment of the economy"
> Total investment is domestic investment plus net exports (the surplus lent abroad). This is what makes the identity below work.

### Output identities

$$Y = C + I + G + (EX - IM) \;\;\text{(open economy)} \qquad\qquad Y = C + I + G \;\;\text{(closed economy)}$$

- Open economy: output is consumed, invested, spent by government, or sold abroad net of imports.
- Closed economy: no trade, so $NX = 0$.

### Capital accumulation, balanced budget and the GDP-GNP bridge

$$S = I + (EX - IM)$$

$$\text{Balanced budget: } G = T \qquad\qquad GDP - NIFF = GNP$$

- $NIFF$: net payments to foreign factors. **If $NIFF > 0$, GNP is smaller than GDP** (more income flows out to foreigners than in).
- Balanced budget: $S_g = T - G = 0$, so all savings are private (plus business).

> [!note] Notation difference with Rec_03
> [[Rec_03-Capital Accumulation, the Savings Identity & GNP vs GDP|Rec_03]] writes the identity as $S_p + S_b + S_g = I + NX$ with $NX = EX - IM$. Identical to $S = I + (EX - IM)$ once $S = S_p + S_g + S_b$. Rec_03 also writes $GNP = GDP - NIFF$ (same as the sheet).

> [!tip] 🗣️ In plain English
> Whatever the country **saves** either gets **invested at home** or **lent abroad** (that is the export surplus). And $GDP$ vs $GNP$ only differ by **income flowing to or from foreigners**, not by trade.

---

## 3. The production function: Cobb-Douglas, marginal products, factor payments

### Notation (as listed on the sheet)

| Symbol | Meaning |
|--------|---------|
| $A$ | productivity coefficient |
| $\alpha$ | elasticity of output with respect to capital |
| $L$, $K$ | labor, capital |
| $R$, $R/P$ | nominal rent, real rent |
| $W$, $W/P$ | nominal wage, real wage |
| $P$ | price of one unit of the final good |

### Cobb-Douglas with constant returns to scale

$$Y = A\,K^{\alpha}\,L^{1-\alpha}$$

### Marginal products and total payments

$$MPL = (1-\alpha)\,A\left(\frac{K}{L}\right)^{\alpha} \qquad\qquad MPL \cdot L = (1-\alpha)\,Y$$

$$MPK = \alpha\,A\left(\frac{L}{K}\right)^{1-\alpha} \qquad\qquad MPK \cdot K = \alpha\,Y$$

- $MPL$, $MPK$: extra output from one more unit of labor, or of capital.
- $MPL \cdot L$: total payments to labor, which is $(1-\alpha)$ of output.
- $MPK \cdot K$: total payments to capital, which is $\alpha$ of output.

### Competitive equilibrium and income exhaustion

$$\frac{W}{P} = MPL \qquad\qquad \frac{R}{P} = MPK$$

- In competitive equilibrium, the real wage equals the marginal product of labor and the real rent equals the marginal product of capital.
- **Under constant returns to scale and competition, payments to capital plus payments to labor equal output:** $\alpha Y + (1-\alpha)Y = Y$.

> [!example] Where this is practised
> - Cobb-Douglas form, $MPL$, $MPK$ and their derivation: [[Rec_05-Production at Full Employment — Cobb-Douglas, Marginal Products & Returns to Scale|Rec_05]]. **Notation matches the sheet exactly** ($Y = AK^{\alpha}L^{1-\alpha}$, same $MPL$ and $MPK$ expressions).
> - $W/P = MPL$, $R/P = MPK$, labor income $(1-\alpha)Y$, capital income $\alpha Y$ and the "income exhaustion" (Euler) remark: [[Rec_06-The Labor & Capital Markets, Factor Payments & Growth Accounting|Rec_06]]. **Notation matches** ($\alpha$ for capital's share, $W/P$ and $R/P$ for real prices).
> - The sheet writes $L^{(1-\alpha)}$ and $\left(\frac{L}{K}\right)^{(1-\alpha)}$ with brackets in the exponent; that is the same as the unbracketed form used in the recitations.

> [!tip] 🗣️ In plain English
> Each factor earns **what its last unit adds to output**. With Cobb-Douglas, **capital gets a fixed slice $\alpha$ of output** and **labor gets $1-\alpha$**, and the two slices add up to all of output, so nothing is left over.

---

## 4. Growth accounting

$$\frac{\Delta Y}{Y} = \frac{\Delta A}{A} + S_K \cdot \frac{\Delta K}{K} + S_L \cdot \frac{\Delta L}{L}$$

- $\Delta Y / Y$: growth rate of output.
- $\Delta A / A$: growth rate of productivity (the part not explained by more inputs).
- $\Delta K / K$, $\Delta L / L$: growth rates of capital and labor.
- $S_K$, $S_L$: the shares of capital and labor in the product (their weights).

For Cobb-Douglas with constant returns to scale:

$$S_K = \alpha \qquad\qquad S_L = 1 - \alpha$$

> [!warning] Notation difference with Rec_06
> The sheet writes the decomposition with **shares $S_K$ and $S_L$**. [[Rec_06-The Labor & Capital Markets, Factor Payments & Growth Accounting|Rec_06]] writes the same equation directly with the exponents, $\dfrac{\Delta Y}{Y} = \dfrac{\Delta A}{A} + \alpha\dfrac{\Delta K}{K} + (1-\alpha)\dfrac{\Delta L}{L}$. They are identical once you substitute $S_K = \alpha$ and $S_L = 1 - \alpha$. Rec_06 calls the residual $\Delta A / A$ the Solow residual (total productivity term).
>
> Also beware: this $S_K$, $S_L$ is a **share**, unrelated to the savings $S_p$, $S_g$, $S_b$ in sections 1 and 2.

> [!tip] 🗣️ In plain English
> Output growth = **productivity growth** + **capital growth weighted by capital's share** + **labor growth weighted by labor's share**. Whatever input growth cannot explain is credited to **productivity**.

---

## 5. The Solow model and the golden rule

> [!note] No recitation note for this section
> The vault has no recitation on the Solow model, so the formulas below are exactly what the sheet states. The only addition is the short intuition flagged as reconstructed.

### Notation (as listed on the sheet)

| Symbol | Meaning |
|--------|---------|
| $s$ | savings rate |
| $k = K/L$ | capital per worker |
| $y = Y/L$ | product (output) per worker |
| $S/L$ | savings per worker |
| $\delta$ | capital depreciation rate |
| $n$ | labor (population) growth rate |
| $n + \delta$ | the effective depreciation rate |

### Law of motion and steady state

$$\Delta k = s\,A\,k^{\alpha} - (n+\delta)\,k$$

- $s A k^{\alpha}$: savings per worker, i.e. investment per worker in the model.
- $(n+\delta)k$: capital per worker that must be replaced or spread over new workers each period.

$$\text{Steady state: net investment per worker} = \Delta k = 0$$

> [!note] Reconstructed
> Not on the sheet verbatim: $\Delta k$ is "what is saved per worker" minus "what is lost per worker to depreciation and to a growing workforce". At the steady state the two are equal, so capital per worker stops changing.

### Steady state under Cobb-Douglas

$$k^{*} = \left(\frac{sA}{\delta + n}\right)^{\frac{1}{1-\alpha}} \qquad\qquad y^{*} = A\,k^{\alpha} = A\left(\frac{sA}{\delta + n}\right)^{\frac{\alpha}{1-\alpha}}$$

- $k^{*}$: steady-state capital per worker.
- $y^{*}$: steady-state output per worker.

The sheet also lists the Cobb-Douglas output per worker as a stand-alone line:

$$y = A\,k^{\alpha}$$

(the sheet writes it with a star, $y^{*} = Ak^{\alpha}$, evaluated at the steady state).

### Golden rule and consumption per worker

$$s^{GR} = \alpha \qquad\qquad c = (1 - s)\,y$$

- $s^{GR}$: the **golden-rule savings rate**, the one that gives **maximum consumption** for the Cobb-Douglas function, and it equals $\alpha$.
- $c$: consumption per worker, the share of output per worker that is not saved.

> [!tip] 🗣️ In plain English
> Capital per worker grows while **saving per worker** beats what **wears out and gets spread over new workers**, and settles where the two match. The **golden-rule savings rate** that makes people consume the most in the long run is **$s = \alpha$**, capital's share of output.

> [!question] Cross-check
> The notation uses $\alpha$ for the capital exponent here too, the same $\alpha$ as in sections 3 and 4 and in [[Rec_05-Production at Full Employment — Cobb-Douglas, Marginal Products & Returns to Scale|Rec_05]]. The sheet's per-worker output is therefore the Rec_05 production function divided by $L$ (with constant returns), $y = Ak^{\alpha}$.

---

## 6. The open economy: current and capital account

### Savings and investment identity

$$S = I + (EX - IM) \qquad\qquad I = S + (IM - EX)$$

- $S$: savings; $I$: investment.
- $NX = EX - IM$: **export surplus** (net exports).
- $-NX = IM - EX$: **import surplus**; a country with an import surplus invests more than it saves and finances the gap by borrowing from abroad.

### Balance-of-payments table (as on the sheet)

| Account | Item | Debit (outflow) | Credit (inflow) |
|---------|------|-----------------|-----------------|
| **Current account** | goods and services | import | export |
| **Current account** | unilateral transfers | transfers **to** foreign countries | transfers **from** foreign countries |
| **Capital account** | loans | loans **to** foreigners | loans **from** foreigners |
| **Capital account** | investments | investments **to** foreigners | investments **by** foreigners |
| | change in foreign currency | **increase** | **decrease** |

> [!note] Reading the table
> The sheet gives the table without further commentary; the rows are copied as stated. Money leaving the country (imports, transfers out, lending or investing abroad) is a debit; money coming in is a credit. The last row, the change in the foreign-currency holdings, has the opposite orientation: an increase is on the debit side, a decrease on the credit side.

> [!tip] 🗣️ In plain English
> If a country **saves more than it invests**, the extra goes abroad, so it **exports more than it imports**. If it invests more than it saves, it runs an **import surplus** and borrows from foreigners.

---

## ✅ Notation clashes to remember

| Symbol | Sheet meaning (section) | Careful |
|--------|--------------------------|---------|
| $s$ | years in $\bar\pi$ (1); savings rate in Solow (5) | two different things |
| $S_K$, $S_L$ | factor shares (4) | not the savings $S_p$, $S_g$, $S_b$ |
| $S$ | aggregate domestic savings (1, 2, 6) | $S/L$ in Solow is savings per worker |
| $y$, $k$ | per-worker quantities (5) | $Y$, $K$ are totals |
| $\pi$ | inflation (1) | not profits |
