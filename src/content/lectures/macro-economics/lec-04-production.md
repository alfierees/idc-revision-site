---
title: Production
week: 4
semester: 2
year: 2
course: Macro-Economics
tags:
  - macroeconomics
  - production-function
  - cobb-douglas
  - tfp
  - marginal-products
  - development-accounting
  - growth-accounting
aliases:
  - Production Model
  - Production Function
  - Cobb-Douglas
subject: macro-economics
in_scope: true
---

# Production

> Part of: [[Macro-Economics]]
> **Lecture 04** — Macro-Economics
> Key concepts: [[Production Function]], [[Total Factor Productivity]], [[Cobb-Douglas]], [[Marginal Product of Labor]], [[Marginal Product of Capital]], [[Development Accounting]], [[Solow Residual]]

---

## 🗺️ Where This Fits in the Big Picture

The course is building toward a full model of the economy. The national accounts identity tells us:

$$\underbrace{Y}_{\text{output}} = C + I + G$$

- We already have a theory of **consumption** ($C$) from Lec 02.
- This lecture gives us the **supply side**: a model of how $Y$ is produced.
- The production model will later be used to derive:
  - Demand for **investment** (Lec 05)
  - Demand for **labor** (Lec 07)
  - The foundation for **growth models** (later in course)

---

## ⚙️ The Production Function

### Basic Setup

To model production we ask: what are the inputs, and how do they combine to make output?

We focus on two inputs:
- ==**Capital ($K$)**== — machines, buildings, equipment
- ==**Labor ($N$)**== — total hours of work

We also include a third "input" that is not a physical thing: ==**Total Factor Productivity ($A$)**==, which captures how efficiently $K$ and $N$ are used. $A$ reflects technology, management quality, efficient resource allocation, human capital, and institutions.

The production function is:

$$\boxed{Y_t = A_t F(K_t, N_t)}$$

- $Y_t$ = aggregate real output (GDP) in period $t$
- $K_t$ = capital stock in period $t$
- $N_t$ = labor input (total hours) in period $t$
- $A_t$ = Total Factor Productivity in period $t$
- $F(\cdot, \cdot)$ = a time-invariant function (the inputs change, not the function itself)

> [!tip] Why only K and N?
> In reality, economies use energy, land, raw materials, and more. We focus on $K$ and $N$ because they account for most income (wages + capital returns ≈ entire GDP under competitive markets) and because data is available to measure them.

---

## 📐 Marginal Products

The ==**marginal product**== of an input is the extra output you get from adding one more unit of that input, holding everything else constant.

$$\text{MPN} = \frac{\partial Y}{\partial N} = A \frac{\partial F(K,N)}{\partial N} \equiv AF_N$$

$$\text{MPK} = \frac{\partial Y}{\partial K} = A \frac{\partial F(K,N)}{\partial K} \equiv AF_K$$

In data these can be approximated as:
$$\text{MPN} \approx \frac{\Delta Y}{\Delta N}, \qquad \text{MPK} \approx \frac{\Delta Y}{\Delta K}$$

> [!info] Why marginal products matter
> Marginal products determine factor prices in competitive markets. The wage a firm pays equals MPN; the rental rate for capital equals MPK. This is the central pricing result we'll use throughout the course.

---

## 📋 Four Key Properties of the Production Function

These four assumptions hold throughout the entire course. They are what makes the production function economically sensible.

### Property 1 — Positive Marginal Products

$$\text{MPN} > 0, \qquad \text{MPK} > 0$$

More input → more output. Adding workers or machines always produces *something* extra (though perhaps less and less).

### Property 2 — Diminishing Marginal Products

$$\frac{\partial \text{MPN}}{\partial N} = AF_{NN} < 0, \qquad \frac{\partial \text{MPK}}{\partial K} = AF_{KK} < 0$$

The **last** unit of an input contributes *less* than the one before it. Intuitively: if you keep adding workers to a factory with a fixed number of machines, eventually they start getting in each other's way.

**Graphically:** the $Y$ vs $N$ curve slopes upward (Property 1) but gets flatter as $N$ grows (Property 2). The slope of the curve *is* the marginal product.

![[l4_production_diminishing.png|620]]
*Left: holding $A,\bar K$ fixed, output rises in $N$ but the slope (MPN) flattens — diminishing returns. Right: the MPN curve itself slopes down; a higher $A$ or $\bar K$ shifts it up (Property 3, complementarity).*

### Property 3 — Complementarity

$$\frac{\partial \text{MPK}}{\partial N} = AF_{KN} > 0, \qquad \frac{\partial \text{MPN}}{\partial K} = AF_{NK} > 0$$

More workers make capital **more** productive, and more capital makes workers **more** productive. Intuition: a construction worker with a digger (capital) is far more productive than one with a spade.

> [!tip] Why complementarity matters
> Complementarity creates a force toward a balanced mix of capital and labor. It also means that in the long run, when firms accumulate more capital, labor demand rises — this is key for Lec 07's long-run analysis.

### Property 4 — Constant Returns to Scale (CRS)

If you multiply *both* inputs by the same factor $\lambda > 0$, output scales by exactly $\lambda$:

$$AF(\lambda K, \lambda N) = \lambda \cdot AF(K,N) = \lambda Y$$

Double the factory and the workforce → exactly double the output. Neither economies nor diseconomies of scale.

> [!info] Why CRS?
> Two pieces of empirical evidence:
> 1. **Balanced growth**: economies grow over long periods without either the labor force or capital perpetually exploding.
> 2. **Stable factor shares**: the share of GDP going to wages (vs. capital) has been remarkably stable over time across countries — this is exactly what CRS predicts (see below).

**Useful implication of CRS:** only the *ratio* $K/N$ matters, not the levels. Setting $\lambda = 1/N$:
$$A F(K/N,\, 1) = Y/N$$
So GDP per worker depends on capital per worker — the foundation of growth models.

### Checking the Properties — Quick Examples

| Function | Prop 1 (+MPs) | Prop 2 (Dim.) | Prop 3 (Comp.) | Prop 4 (CRS) |
|---|---|---|---|---|
| $F=3K+4N$ | ✅ | ❌ (constant MPs) | ❌ ($F_{KN}=0$) | ✅ |
| $F=K^{0.3}N^{0.7}$ | ✅ | ✅ | ✅ | ✅ ($0.3+0.7=1$) |
| $F=K^2+N^2$ | ✅ | ❌ (increasing MPs) | ❌ | ❌ |

---

## 🧮 The Cobb-Douglas Production Function

The most widely used functional form in macroeconomics:

$$\boxed{Y_t = A_t K_t^\alpha N_t^\beta, \qquad 0 < \alpha, \beta < 1}$$

For CRS we need $\alpha + \beta = 1$, so $\beta = 1-\alpha$.

> [!success] Cobb-Douglas satisfies all four properties
> You can verify: $F_N = \beta K^\alpha N^{\beta-1} > 0$; $F_{NN} = \beta(\beta-1)K^\alpha N^{\beta-2} < 0$ (since $\beta<1$); $F_{KN} > 0$; and with $\alpha+\beta=1$, doubling inputs doubles output.

### Income Shares

In a competitive market, factors are paid their marginal products. The **capital share of income** is:

$$\frac{\text{MPK} \times K}{Y} = \frac{\alpha Y/K \times K}{Y} = \alpha$$

Similarly, the **labor share** equals $\beta = 1-\alpha$.

> [!example] Deriving the capital share
> $$\text{MPK} = A \frac{\partial K^\alpha N^\beta}{\partial K} = \alpha A K^{\alpha-1} N^\beta = \frac{\alpha Y}{K}$$
> $$\text{Capital share} = \frac{\text{MPK} \times K}{Y} = \frac{\alpha Y/K \times K}{Y} = \alpha$$

This is powerful: we can **read the parameters directly from national accounts data**. For most countries, empirical estimates give:
$$\alpha \approx 0.3\text{–}0.35, \qquad \beta \approx 0.65\text{–}0.7$$

![[l4_labor_share.png|560]]
*Labor share of income across countries. Its rough stability around ~0.6–0.7 is the empirical basis for treating $\beta$ as a constant and for the CRS assumption.*

### Elasticities

The ==**elasticity**== of output with respect to an input is the percentage change in output for a 1% change in that input:

$$\varepsilon_{Y,K} = \frac{\partial Y}{\partial K}\frac{K}{Y} = \frac{\partial \ln Y}{\partial \ln K}$$

For Cobb-Douglas, take logs:
$$\ln Y_t = \ln A_t + \alpha \ln K_t + \beta \ln N_t$$

Therefore:
$$\frac{\partial \ln Y}{\partial \ln K} = \alpha, \qquad \frac{\partial \ln Y}{\partial \ln N} = \beta$$

So **$\alpha$ is both the capital income share and the capital elasticity of output** — one of the reasons Cobb-Douglas is so useful.

> [!tip] The log-linearization trick
> Taking logs of the Cobb-Douglas production function converts it into a *linear* equation in log-variables. This is the standard technique used throughout growth accounting, empirical macro, and this course. Get comfortable with it.

---

## 🏭 Competitive Markets and Firm Optimization

### Setup

Firms are **price takers**: they take output price $P=1$ (normalized), wage $w$, and rental rate of capital $R$ as given. They maximize profits:

$$\max_{K,N} \left\{ A F(K,N) - wN - RK \right\}$$

### First-Order Conditions

Taking derivatives and setting to zero:

$$\underbrace{AF_K}_{\text{MPK}} = R \qquad \text{and} \qquad \underbrace{AF_N}_{\text{MPN}} = w$$

$$\boxed{\text{MPK} = R, \qquad \text{MPN} = w}$$

**Factors are paid their marginal products.** This is a central result used throughout the rest of the course.

> [!info] Intuition for MPN = w
> If MPN > w, the firm earns more from the last worker than it pays → hire more. If MPN < w, the last worker costs more than it produces → fire them. Profit-maximisation drives you to MPN = w.

---

## 🌍 Development Accounting

### What is it?

Development accounting uses the production model to understand **why some countries are richer than others**. It asks: how much of the income gap between countries can be explained by differences in $K$ and $N$ vs. differences in $A$ (TFP)?

### Step 1 — Capital Only

Assume all countries have the same $A=1$. Given data on capital per worker $k = K/N$ and the Cobb-Douglas form:

$$y = \frac{Y}{N} = A\left(\frac{K}{N}\right)^\alpha = k^\alpha$$

With $\alpha = 1/3$, compare predicted $y = k^{1/3}$ to actual $y$:

| Country | Observed $k$ | Predicted $y=k^{1/3}$ | Actual $y$ |
|---|---|---|---|
| USA | 1.00 | 1.00 | 1.00 |
| Switzerland | 1.56 | 1.16 | 1.20 |
| Italy | 1.35 | 1.11 | 0.65 |
| Japan | 0.90 | 0.96 | 0.63 |
| Israel | 0.65 | 0.86 | 0.62 |
| India | 0.12 | 0.49 | 0.11 |
| Ethiopia | 0.027 | 0.30 | 0.044 |

**Conclusion:** Capital differences alone predict much *smaller* income gaps than we actually observe (e.g., Italy has almost as much capital as Switzerland, yet half the income). There must be another factor — TFP.

### Step 2 — Letting TFP Differ

Now back out the implied TFP for each country:
$$A = \frac{y}{k^\alpha}$$

| Country | Actual $y$ | Predicted $y=k^{1/3}$ | Implied $A$ |
|---|---|---|---|
| USA | 1.00 | 1.00 | 1.00 |
| Italy | 0.65 | 1.11 | 0.585 |
| India | 0.11 | 0.49 | 0.224 |
| Ethiopia | 0.044 | 0.30 | 0.147 |

TFP gaps are **large**. For US vs India:
$$\frac{y_{US}}{y_{India}} = 9.09 = \underbrace{4.46}_{\text{TFP ratio}} \times \underbrace{2.04}_{\text{capital ratio}}$$

![[l4_tfp_heterogeneity.png|560]]
*Large dispersion in implied TFP across countries (PWT). Since capital differences are far too small to explain observed income gaps, the residual — TFP — does most of the work.*

> [!success] Key finding
> TFP is responsible for *more* of the income gap than capital. This makes TFP simultaneously the most important variable in the model and the hardest to explain — it is sometimes called a "measure of our ignorance." Research tries to pin down TFP using R&D, education, governance, and institutions.

---

## 📈 Growth Accounting and the Solow Residual

### What is it?

Development accounting looks across countries at a point in time. ==**Growth accounting**== uses the same framework to decompose output growth *over time* within a single country into contributions from:
1. Capital growth ($\Delta K/K$)
2. Labor growth ($\Delta N/N$)
3. TFP growth ($\Delta A/A$) — the **Solow Residual**

### The Decomposition

Start from $Y = AF(K,N)$. Differentiating with respect to time and dividing by $Y$:

$$\boxed{\frac{\Delta Y}{Y} = \frac{\Delta A}{A} + \varepsilon_{Y,K}\frac{\Delta K}{K} + \varepsilon_{Y,N}\frac{\Delta N}{N}}$$

Rearranging for the Solow Residual:

$$g_A = g_Y - \varepsilon_{Y,K}\, g_K - \varepsilon_{Y,N}\, g_N$$

### Four-Step Procedure

1. **Collect data** on $g_Y$, $g_K$, $g_N$ (with quality adjustments if possible).
2. **Estimate elasticities** $\varepsilon_{Y,K}$ and $\varepsilon_{Y,N}$ — for Cobb-Douglas these equal the income shares $\alpha$ and $\beta$, which we can read from national accounts.
3. **Calculate capital and labor contributions** ($\alpha g_K$ and $\beta g_N$).
4. **Calculate TFP growth as a residual**: everything unexplained by inputs.

> [!example] Numerical example
> $g_Y = 0.10$, $g_K = 0.05$, $g_N = 0.02$, $\alpha = 1/3$, $\beta = 2/3$
>
> $$g_A = 0.10 - \frac{1}{3}(0.05) - \frac{2}{3}(0.02) = 0.10 - 0.0167 - 0.0133 = 0.07$$
>
> So 70% of growth is explained by TFP — capital and labor contributions are much smaller.

> [!note] The Real Business Cycle connection
> The fact that TFP fluctuates significantly over time (not just across countries) motivates the **Real Business Cycles** literature, which argues that "productivity shocks" ($\Delta A$) are a key driver of economic fluctuations — booms happen when $A$ is high, recessions when $A$ falls.

---

## 🎯 Summary

1. **Production function** $Y = AF(K,N)$ is the supply side of the macro model. $A$ (TFP) captures everything that makes an economy more productive beyond raw inputs.
2. **Four key properties**: positive MPs, diminishing MPs, complementarity, CRS. These are maintained throughout the course.
3. **Cobb-Douglas** $Y = AK^\alpha N^{1-\alpha}$ satisfies all four. Parameters $\alpha \approx 0.3$ and $\beta \approx 0.7$ can be read from income share data.
4. **Competitive firm optimization**: MPN = w and MPK = R — factors are paid their marginal products.
5. **Development accounting**: capital differences alone can't explain cross-country income gaps; TFP differences are equally or more important.
6. **Growth accounting / Solow Residual**: output growth = capital contribution + labor contribution + TFP growth. TFP is backed out as the residual.

---

## 📎 Related Notes

- Predecessor: [[Lec_02-Consumption and Saving]] — completed the demand side
- Next: [[Lec_05-Investment]] — uses MPK from this model to derive investment demand
- Future: [[Lec_07-Labor Market]] — uses MPN from this model to derive labor demand
- Future: [[Growth Models]] — Cobb-Douglas + CRS is the foundation of the Solow model
- Problem Sets: [[Problem Set 3]] — Cobb-Douglas properties, labor shares, TFP, growth accounting
