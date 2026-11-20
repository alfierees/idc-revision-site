---
title: Production at Full Employment — Cobb-Douglas, Marginal Products & Returns to Scale
week: 5
semester: 2
year: 1
academic_year: "2024-25"
course: Introduction to Macroeconomics
lecture: "Recitation 05 — Chapter 2: Production at Full Employment"
instructor: Yosi Ganel
date: 2026-07-19
tags:
  - macro-economics-intro
  - production-function
  - cobb-douglas
  - marginal-product
  - returns-to-scale
  - classical-model
  - output-elasticity
aliases:
  - Intro Macro Recitation 5
  - Cobb-Douglas Production Function
  - Marginal Product of Labor and Capital
  - Returns to Scale
  - Problem Set 4 Solutions
subject: principles-of-macro
in_scope: true
---

# Production at Full Employment — Cobb-Douglas, Marginal Products & Returns to Scale

> Part of: [[Macro-Economics (Intro)]] | Key concepts: [[Production Function]], [[Cobb-Douglas Production Function]], [[Marginal Product of Labor]], [[Marginal Product of Capital]], [[Returns to Scale]], [[Output Elasticity]], [[Classical Model]]

---

## 📚 What This Recitation Covers

> [!info] The big picture
> Recitations 1–3 measured output *after the fact* — how much GDP was produced and how it splits into income and saving. This recitation opens the ==classical model== and asks the prior question: **what determines how much output the economy can produce in the first place?** The answer is the ==production function==, which maps the economy's stock of ==capital== ($K$) and ==labor== ($L$) into output ($Y$). At **full employment** all factors are fully utilised, so output is pinned down entirely by the *quantities* of inputs and the *technology* linking them. The workhorse is the ==Cobb-Douglas== function, and everything else — marginal products, output elasticities, returns to scale — falls out of differentiating it.

The two organising formulas of the whole recitation:

$$\boxed{Y = A\,K^{\alpha}L^{1-\alpha}} \qquad \boxed{MPL = \frac{\partial Y}{\partial L},\quad MPK = \frac{\partial Y}{\partial K}}$$

Every problem is a variation on: write down the production function, differentiate to get a marginal product, scale all inputs by a common factor $t$ to read off returns to scale, or scale a *single* input by $(1+g)$ to find the percentage change in output.

---

## 🏭 The Production Function & Cobb-Douglas Form

### From general function to Cobb-Douglas

The most general statement is that output depends on capital and labor,

$$Y = F(K, L),$$

but to compute anything we need a functional form. The course uses the ==Cobb-Douglas production function==:

$$\boxed{Y = A\,K^{\alpha}L^{1-\alpha}}, \qquad 0 < \alpha < 1$$

Two features are doing all the work here:

- $A$ is ==total factor productivity== — the *general productivity of the economy*. It is a pure multiplier: with the same $K$ and $L$, a higher $A$ (better technology, organisation, institutions) produces more output. ^tfp
- The exponents **sum to one** ($\alpha + (1-\alpha) = 1$). This is exactly what makes the function ==constant returns to scale (CRS)== — doubling both inputs doubles output (proved below). ^crs-exponents

> [!tip] Why economists like Cobb-Douglas
> It is the simplest form that simultaneously delivers positive but *diminishing* marginal products, constant factor shares ($\alpha$ is capital's share of income), and clean constant returns to scale — all the "textbook" properties of the classical production side in one line of algebra.

> [!example] Plugging in numbers (slide example)
> Let $A = 2$, $\alpha = \tfrac12$, $L = 400$, $K = 100$:
> $$Y = A\,K^{1/2}L^{1/2} = 2 \cdot \sqrt{100}\,\sqrt{400} = 2 \cdot 10 \cdot 20 = 400$$
> Now raise productivity to $A = 3$ with the *same* $K, L$:
> $$Y = 3 \cdot 10 \cdot 20 = 600$$
> A 50 % rise in $A$ raises output by 50 % — because $A$ enters multiplicatively, output is proportional to it.

---

## 📐 The Meaning of α — Output Elasticity of Capital

$\alpha$ is not just an exponent; it is the ==output elasticity of capital== — the **percentage change in output caused by a 1 % change in capital**, holding labor fixed:

$$\varepsilon_{Y,K} = \frac{\partial Y}{\partial K}\frac{K}{Y} = \alpha$$

> [!example] Verifying the elasticity numerically
> Keep $A=2,\ \alpha=\tfrac12,\ L=400$ but raise $K$ by 1 %, from 100 to 101:
> $$Y = 2\cdot\sqrt{101}\,\sqrt{400} \approx 2\cdot 10.05 \cdot 20 \approx 402$$
> $$\frac{402}{400} = 1.005 \;\Rightarrow\; \text{output rose } \tfrac12\% = \alpha \times 1\%.$$
> A 1 % rise in capital lifts output by $\alpha = \tfrac12$ %, exactly as the elasticity predicts.

> [!info] The two elasticities always sum to 1 under CRS
> Symmetrically, $1-\alpha$ is the output elasticity of labor. Because $\alpha + (1-\alpha) = 1$, a *simultaneous* 1 % rise in **both** inputs raises output by 1 % — the CRS property, seen through the elasticity lens. ^elasticity-sum

---

## ⚙️ Marginal Products — Derivation

The ==marginal product== of an input is the extra output from one more unit of that input, i.e. the partial derivative of $F$. For Cobb-Douglas both come out in a memorable ratio form.

### Marginal product of labor (MPL)

$$Y = A K^{\alpha} L^{1-\alpha} \;\Rightarrow\; \frac{\partial Y}{\partial L} = (1-\alpha)A K^{\alpha} L^{-\alpha}$$

$$\boxed{MPL = (1-\alpha)\,A\left(\frac{K}{L}\right)^{\alpha}}$$

### Marginal product of capital (MPK)

$$Y = A K^{\alpha} L^{1-\alpha} \;\Rightarrow\; \frac{\partial Y}{\partial K} = \alpha A K^{\alpha-1} L^{1-\alpha}$$

$$\boxed{MPK = \alpha\,A\left(\frac{L}{K}\right)^{1-\alpha}}$$

> [!tip] Read the ratios, not the raw powers
> Both marginal products depend only on the **capital-per-worker ratio** $K/L$, never on the scale of the economy. This is the key to the comparative-statics questions below: change $L$ and you change $K/L$, which moves *both* marginal products in opposite directions.

> [!info] Diminishing marginal product & the cross-effect
> - $MPL = (1-\alpha)A(K/L)^{\alpha}$ **falls** as $L$ rises (more workers on a fixed capital stock ⇒ each adds less). ==Diminishing marginal product of labor.==
> - But raising $L$ **raises** $MPK = \alpha A(L/K)^{1-\alpha}$ (more workers make each machine more productive).
>
> So in Cobb-Douglas, capital and labor are **complements**: adding one input raises the marginal product of the other. This single fact answers most of the multiple-choice traps. ^complements

---

## 🧮 PS4 Q1 — Nominal vs Real GDP per Capita (Israel 2000–2024)

> [!example] The task
> Using Bank of Israel / CBS annual series for 2000–2024, compute **GDP per capita** in current (nominal) and constant (real) prices, find annual growth rates, plot both, and interpret.

The empirical half of the problem set links back to Recitations 1–2. Two conclusions matter for the exam:

- **The base year is 2015.** By construction, in the base year nominal and real GDP per capita are *equal* (the deflator is 1). Before 2015 nominal $<$ real; after 2015 nominal $>$ real.
- **The widening nominal–real gap reflects inflation.** Because prices generally rose, the nominal series drifts *above* the real series after the base year. The real (constant-price) series is the one that measures genuine improvements in living standards, having stripped out price changes. ^nominal-real-gap

> [!info] Reading the two downturns
> The long-run trend of real GDP per capita is **upward** (growth), but two dips stand out: **2009** (global financial crisis) and a sharper one in **2020** (COVID-19). Note that in 2009 *nominal* GDP per capita still edged up even as *real* fell — inflation masked the real contraction. This is precisely why macro tracks real, not nominal, output. ^crisis-dips

> [!tip] Connects to Rec 1
> The nominal-vs-real distinction, the GDP deflator, and per-capita normalisation are all from [[Rec_01-Nominal & Real GDP, Price Indices & GNP]]. Q1 is that machinery applied to real Israeli data.

> [!tip] 🗣️ In plain English
> Real GDP per capita strips out **inflation**, so it is the true measure of living standards. Nominal and real are equal in the **base year 2015**, then nominal drifts above real as prices rise, and the **2009 and 2020 dips** show real output actually shrinking.

---

## 🧮 PS4 Q2 — Four Production Functions: MP, Returns to Scale, Complements

For each function: (1) derive every marginal product, (2) classify **returns to scale** by scaling *all* inputs by $t$, (3) decide whether inputs are **substitutes, complements, or neutral** by checking the *cross-partial* — does raising one input change another's marginal product?

> [!info] The returns-to-scale test
> Replace every input by $t\times$ input and factor out the power of $t$:
>
> $$
> F(tK, tL) = t^{k}\,F(K,L) \;\Rightarrow\; \begin{cases} k > 1 & \text{increasing RS (IRS)}\\ k = 1 & \text{constant RS (CRS)}\\ k < 1 & \text{decreasing RS (DRS)}\end{cases}
> $$
>
> For a Cobb-Douglas product, $k$ is simply the **sum of the exponents**. ^rts-test

### (a) $Y = 5K^{0.2}L^{0.4}$

$$MPK = 5(0.2)K^{-0.8}L^{0.4} = \frac{L^{0.4}}{K^{0.8}}, \qquad MPL = 5(0.4)K^{0.2}L^{-0.6} = \frac{2K^{0.2}}{L^{0.6}}$$

- **Complements:** $MPK$ rises with $L$ and $MPL$ rises with $K$.
- **Returns to scale:** $F(tK,tL) = 5t^{0.2}K^{0.2}t^{0.4}L^{0.4} = t^{0.6}F(K,L)$. Since $0.6 < 1$ ⟹ **DRS**.

> [!tip] 🗣️ In plain English
> Capital and labor boost each other's productivity, so they are **complements**. The exponents add up to 0.6, so doubling everything gives **less than double output** (**DRS**).

### (b) $Y = 4\left(K^{0.5} + L^{0.5}\right)$

$$MPK = 4\cdot\tfrac12 K^{-0.5} = \frac{2}{K^{0.5}}, \qquad MPL = 4\cdot\tfrac12 L^{-0.5} = \frac{2}{L^{0.5}}$$

- **Neutral:** $MPK$ depends only on $K$, $MPL$ only on $L$ — changing one input leaves the other's marginal product untouched. (This is an *additively separable* function, not a product.)
- **Returns to scale:** $F(tK,tL) = 4\left(t^{0.5}K^{0.5} + t^{0.5}L^{0.5}\right) = t^{0.5}F(K,L)$ ⟹ **DRS**.

> [!tip] 🗣️ In plain English
> Because the two inputs are just **added** together, changing one does nothing to the other's marginal product, so they are **neutral**. The exponents add to 0.5, so doubling everything gives less than double output (**DRS**).

### (c) $Y = 2K^{0.3}L^{0.6}H^{0.3}$  (three inputs: $H$ = human capital / land)

$$MPK = \frac{0.6\,L^{0.6}H^{0.3}}{K^{0.7}}, \quad MPL = \frac{1.2\,K^{0.3}H^{0.3}}{L^{0.4}}, \quad MPH = \frac{0.6\,K^{0.3}L^{0.6}}{H^{0.7}}$$

- **Complements:** raising any one input raises the marginal product of the other two.
- **Returns to scale:** exponents sum to $0.3+0.6+0.3 = 1.2$, so $F(tK,tL,tH) = t^{1.2}F$ ⟹ **IRS**.

> [!tip] 🗣️ In plain English
> Each input makes the other two more productive, so they are all **complements**. The exponents add to 1.2, so doubling everything gives **more than double output** (**IRS**).

### (d) $Y = 2K^{0.5}(L + H)$

$$MPK = \frac{L+H}{K^{0.5}}, \qquad MPL = 2K^{0.5}, \qquad MPH = 2K^{0.5}$$

- $L$ and $H$ are each **complementary to capital** ($MPK$ rises with $L$ or $H$; $MPL, MPH$ rise with $K$).
- $L$ and $H$ are **neutral to each other** — $MPL$ doesn't depend on $H$ and vice-versa (they enter as a simple sum).
- **Returns to scale:** $F(tK,tL,tH) = 2t^{0.5}K^{0.5}\cdot t(L+H) = t^{1.5}F$ ⟹ **IRS**.

> [!tip] 🗣️ In plain English
> Capital works well with both labor and the other factor, but those two do not affect each other since they are **added**, so they are **neutral** to each other. The exponents add to 1.5, so doubling everything gives **more than double output** (**IRS**).

| Function | Form | Returns to scale ($\sum$ exp.) | Input relationship |
|----------|------|------------|--------------------|
| (a) $5K^{0.2}L^{0.4}$ | product | DRS ($0.6$) | complements |
| (b) $4(K^{0.5}+L^{0.5})$ | sum | DRS ($0.5$) | neutral |
| (c) $2K^{0.3}L^{0.6}H^{0.3}$ | product | IRS ($1.2$) | complements |
| (d) $2K^{0.5}(L+H)$ | mixed | IRS ($1.5$) | $K$–$L$, $K$–$H$ complements; $L$–$H$ neutral |

> [!warning] Sum vs product decides "complement vs neutral"
> Inputs that enter as a **product** (or a Cobb-Douglas term) are complements; inputs that enter as an **additive sum** are neutral to each other. Don't confuse this with returns to scale — a function can be DRS *and* have complementary inputs (case a), or IRS *and* have a neutral pair (case d). The two questions are independent. ^sum-vs-product

> [!warning] Slide algebra is sloppy — trust the exponent sum
> The lecture's returns-to-scale lines contain stray typos (e.g. "$t^{0.65}$", "$t^{1.22}$"), but the boxed *conclusions* are right because $k$ is just the sum of exponents. When in doubt, add the exponents rather than copying the intermediate line. ^slide-typo

---

## 🧮 PS4 Q3 — Immigration Raises Labor by 5% ($Y = 6K^{0.5}L^{0.5}$)

> [!example] Which statement is correct after $L \uparrow 5\%$?
> a) $MPK$ unchanged · b) $MPL$ rises 5 % · c) output rises < 5 % · d) if $K$ also $\uparrow 5\%$, GDP rises exactly 5 % · e) none.

Work through each with the ratio formulas. Here $\alpha = 0.5$.

**(a) MPK unchanged?** $MPK = \alpha A (L/K)^{1-\alpha} = 3\left(\tfrac{L}{K}\right)^{0.5}$. Raising $L$ **raises** $MPK$ — false. ✗

**(b) MPL rises 5 %?** $MPL = (1-\alpha)A(K/L)^{\alpha} = 3\left(\tfrac{K}{L}\right)^{0.5}$. Raising $L$ **lowers** $MPL$ (diminishing returns) — false. ✗

**(c) Output rises < 5 %?**
$$Y_1 = 6K^{0.5}(1.05L)^{0.5} = 6K^{0.5}L^{0.5}\cdot 1.05^{0.5} = Y\cdot 1.05^{0.5} \approx 1.0247\,Y$$
Output rises **≈ 2.5 %**, which *is* less than 5 %. ✓ **(answer c)**

**(d) $K$ and $L$ both $\uparrow 5\%$ ⟹ exactly 5 %?**
$$Y_1 = 6(1.05K)^{0.5}(1.05L)^{0.5} = Y\cdot 1.05^{0.5+0.5} = 1.05\,Y$$
Output rises exactly 5 % — this is *also* true (CRS), but the exam keys **c** as the intended single answer since it is the first correct statement; note both c and d are individually valid statements of the CRS property.

> [!tip] Why 5 % labor → only ~2.5 % output
> Under CRS with $\alpha=0.5$, labor's *output elasticity* is $1-\alpha = 0.5$. So $\%\Delta Y \approx (1-\alpha)\times\%\Delta L = 0.5\times5\% = 2.5\%$. Scaling **one** input by its share, not the whole economy, is why output rises by less than the input. ^single-input-scaling

> [!tip] 🗣️ In plain English
> Only labor goes up, and labor's share of the output is 0.5, so a **5% rise in $L$** lifts output by only about **2.5%**. Raising capital too would give the full 5% (**CRS**), but one input alone gets you less than that.

---

## 🧮 PS4 Q4 — Natural Disaster Cuts Capital by 10% ($Y = 5K^{0.4}L^{0.4}$)

> [!warning] Note this function is **DRS**, not CRS
> The exponents sum to $0.4+0.4 = 0.8 < 1$. This changes the "proportional" answers relative to Q3. Always check the exponent sum *before* answering the scaling parts.

> [!example] Which statement is correct after $K \downarrow 10\%$?
> A) $MPK$ decreases · B) output falls > 10 % · C) function is DRS · D) if $L$ also $\downarrow 10\%$, output falls exactly 10 % · E) output unchanged.

**A) MPK decreases?** $MPK = 5(0.4)\dfrac{L^{0.4}}{K^{0.6}} = \dfrac{2L^{0.4}}{K^{0.6}}$. As $K$ falls, $K^{0.6}$ falls, so $MPK$ **rises** — false. ✗

**B) Output falls > 10 %?**
$$Y_1 = 5(0.9K)^{0.4}L^{0.4} = Y\cdot 0.9^{0.4} \approx 0.959\,Y$$
Output falls **≈ 4.1 %** — *less* than 10 %, not more — false. ✗

**C) Function is DRS?**
$$F(tK,tL) = 5(tK)^{0.4}(tL)^{0.4} = t^{0.8}F(K,L), \quad 0.8 < 1 \;\Rightarrow\; \textbf{DRS}. ✓$$
This is the correct answer. **(answer C)**

**D) $K$ and $L$ both $\downarrow 10\%$ ⟹ exactly 10 %?**
$$Y_1 = 5(0.9K)^{0.4}(0.9L)^{0.4} = Y\cdot 0.9^{0.8} \approx 0.919\,Y$$
Output falls **≈ 8 %**, not 10 % — false (exactly what DRS predicts: scaling everything down by 10 % cuts output by less than 10 %). ✗

**E) Output unchanged?** From (B), output falls ≈ 4.1 % — false. ✗

> [!tip] DRS vs CRS on proportional shocks
> With CRS, cutting *all* inputs by 10 % cuts output by exactly 10 %. With **DRS** ($k=0.8$), the same cut reduces output by only $\approx 10\%\times k$-ish → about 8 %. The whole-economy scaling factor is $0.9^{\,\sum\text{exp}}$; single-input scaling is $0.9^{\,\text{that input's exp}}$. ^scaling-recipe

> [!tip] 🗣️ In plain English
> Cutting only capital by 10% costs about **4.1%** of output, and cutting both inputs by 10% costs about **8%**, so with **DRS** the damage is always smaller than 10%. The function is **DRS** (exponents add to 0.8), and **MPK actually rises** because capital got scarcer, so the answer is **C**.

---

## 📐 The Standard Exam Recipe

> [!info] Production-function questions in four moves
> **1 — Marginal products.** Differentiate. For Cobb-Douglas memorise $MPL=(1-\alpha)A(K/L)^{\alpha}$ and $MPK=\alpha A(L/K)^{1-\alpha}$; each *rises* in the **other** input and *falls* in its own.
> **2 — Returns to scale.** Scale *all* inputs by $t$ and read the power of $t$ = **sum of exponents** ($>1$ IRS, $=1$ CRS, $<1$ DRS).
> **3 — Single-input shock.** Multiply that one input by $(1+g)$; output changes by the factor $(1+g)^{\text{that input's exponent}}$.
> **4 — Complement vs neutral.** Product/Cobb-Douglas terms ⟹ complements; additive terms ⟹ neutral. Independent of returns to scale. ^exam-recipe

---

## 🎯 Summary — Recitation 5 in Five Ideas

1. **Output comes from a production function.** At full employment, $Y = A\,K^{\alpha}L^{1-\alpha}$ — technology $A$ times a Cobb-Douglas combination of capital and labor.
2. **α is capital's output elasticity.** A 1 % rise in $K$ raises output by $\alpha$ %; $1-\alpha$ plays the same role for labor, and the two sum to one under CRS.
3. **Marginal products depend on $K/L$ and diminish.** $MPL$ falls as labor grows but *rises* as capital grows — capital and labor are complements in Cobb-Douglas.
4. **Returns to scale = sum of exponents.** Scale every input by $t$; the exponent on $t$ tells you IRS/CRS/DRS. Under DRS a proportional 10 % cut lowers output by *less* than 10 %.
5. **Single-input scaling ≠ whole-economy scaling.** Raising one input by $g$ changes output by $(1+g)$ raised to *that input's exponent*, so a 5 % labor rise with $\alpha=0.5$ lifts output only ≈ 2.5 %.

---

## 📎 Related Notes

- Previous: [[Rec_03-Capital Accumulation, the Savings Identity & GNP vs GDP]] — savings identity, NDP & depreciation, GNP vs GDP
- Earlier: [[Rec_02-The Three Approaches to Measuring GDP]] · [[Rec_01-Nominal & Real GDP, Price Indices & GNP]] (Q1 draws on real vs nominal GDP from here)
- Reference: [[Key Terms and Definitions]] (course glossary)
- Concepts introduced here: [[Production Function]], [[Cobb-Douglas Production Function]], [[Marginal Product of Labor]], [[Marginal Product of Capital]], [[Returns to Scale]], [[Output Elasticity]], [[Total Factor Productivity]], [[Classical Model]]
- Builds on: [[Gross Domestic Product]], [[Real GDP]] · Builds toward: [[Investment]], [[Aggregate Supply]], [[Economic Growth]]
