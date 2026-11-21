---
title: The Labor & Capital Markets, Factor Payments & Growth Accounting
week: 6
semester: 2
year: 1
academic_year: "2024-25"
course: Introduction to Macroeconomics
lecture: "Recitation 06 — Chapter 2: Production at Full Employment & the Labor Market"
instructor: Yosi Ganel
date: 2026-07-21
tags:
  - macro-economics-intro
  - labor-market
  - capital-market
  - factor-payments
  - income-distribution
  - growth-accounting
  - cobb-douglas
  - classical-model
aliases:
  - Intro Macro Recitation 6
  - The Labor Market
  - The Capital Market
  - Factor Payments and Income Shares
  - Growth Accounting
  - Solow Decomposition
  - Problem Set 5 Solutions
subject: principles-of-macro
in_scope: true
---

# The Labor & Capital Markets, Factor Payments & Growth Accounting

> Part of: [[Macro-Economics (Intro)]] | Key concepts: [[Labor Market]], [[Capital Market]], [[Real Wage]], [[Real Rental Rate]], [[Factor Payments]], [[Factor Income Shares]], [[Growth Accounting]], [[Cobb-Douglas Production Function]]

---

## 📚 What This Recitation Covers

> [!info] The big picture
> [[Rec_05-Production at Full Employment — Cobb-Douglas, Marginal Products & Returns to Scale|Recitation 5]] built the *supply side* of the classical model — the production function and its marginal products. This recitation puts those marginal products to **work in markets**. In the ==classical model== of the [[Classical Model|long run]], the two factors of production, labor and capital, are traded in competitive markets. The central result is that ==in equilibrium each factor is paid its marginal product==, and — because the production function is Cobb-Douglas with constant returns to scale — this **exactly exhausts total output** and splits it into fixed income shares: labor gets $(1-\alpha)$ of GDP, capital gets $\alpha$. The recitation closes with ==growth accounting== (the [[Growth Accounting|Solow decomposition]]), which uses the same $\alpha$ weights to back out how much growth came from capital, labor, and technology.

The three results to carry into the exam:

$$\boxed{\frac{W}{P} = MPL} \qquad \boxed{\frac{R}{P} = MPK} \qquad \boxed{\underbrace{(1-\alpha)Y}_{\text{to labor}} + \underbrace{\alpha Y}_{\text{to capital}} = Y}$$

Every multiple-choice question in this recitation is a comparative-statics exercise: shock one factor's *quantity*, then trace the effect through its marginal product (→ its real price), through the *other* factor's marginal product (→ complementarity), and through total output (→ the income split).

---

## 🏭 Production-Function Recap

The classical production side (from Rec 5) in one line, plus the two marginal products that drive the factor markets:

$$Y = A\,K^{\alpha}L^{1-\alpha}, \qquad 0<\alpha<1$$

$$\boxed{MPL = (1-\alpha)\,A\left(\tfrac{K}{L}\right)^{\alpha}} \qquad \boxed{MPK = \alpha\,A\left(\tfrac{L}{K}\right)^{1-\alpha}}$$

> [!tip] The one behavioural fact behind every question
> Each marginal product **falls in its own factor** (diminishing returns) and **rises in the other factor** (capital and labor are ==complements==). So: more workers ⇒ $MPL\downarrow$ but $MPK\uparrow$; more capital ⇒ $MPK\downarrow$ but $MPL\uparrow$. Memorise the two ratio formulas and you can sign every effect by inspection. ^mp-signs

---

## 💵 Nominal vs Real Wage

Wages are quoted in money (==nominal==), but what a worker actually cares about is how many *goods* the wage buys (==real==). If a single good is produced — say wheat at $P = 20$ NIS/kg — and the monthly wage is $W = 4000$ NIS, then

$$\text{Real wage} = \frac{W}{P} = \frac{4000}{20} = 200 \text{ kg of wheat.}$$

$$\boxed{\text{Nominal wage} = W, \qquad \text{Real wage} = \frac{W}{P}}$$

> [!info] Why the model works in real terms
> Firms hire until the *real* cost of a worker equals the worker's *real* contribution to output ($MPL$, measured in units of the good). Prices $P$ cancel out of the hiring decision, so the whole classical factor-market analysis is done in real ($W/P$, $R/P$) terms. The same logic gives the ==real rental rate== $R/P$ for capital. ^real-terms

---

## 👷 The Labor Market

> [!info] Labor demand = the MPL curve
> A competitive firm hires an extra worker whenever that worker adds more to output than they cost in real terms. It keeps hiring until $W/P = MPL$. Because $MPL$ is **decreasing** in $L$, the labor-demand curve slopes **downward**: at a lower real wage, firms are willing to employ more workers.
> $$\boxed{L^{D}: \quad \frac{W}{P} = MPL(K,L)}$$

Labor **supply** slopes upward — a higher real wage draws more people into work. Equilibrium sits where the downward $L^D=MPL$ curve crosses the upward $L^S$ curve, pinning down employment $L_0$ and the real wage $(W/P)_0$.

> [!tip] Reading the labor-market diagram
> The total area under the demand ($MPL$) curve up to $L_0$ is **total output**. The rectangle $(W/P)_0 \times L_0$ is the **wage bill paid to labor**; the triangular area above the wage line but under the $MPL$ curve is what is **left over for capital owners**. This geometric split is the same fact as the algebraic income shares below. ^labor-diagram

---

## 🏗️ The Capital Market

Capital is rented at a nominal rate $R$; what matters is the ==real rental rate== $R/P$. By exactly the same logic as labor:

$$\boxed{K^{D}: \quad \frac{R}{P} = MPK(K,L)}$$

The demand curve for capital is the (downward-sloping) $MPK$ curve. The crucial difference is **supply**:

> [!info] Capital supply is inelastic in the short run
> The stock of capital (machines, buildings, a fixed number of fields) cannot change overnight. So capital **supply is vertical** — perfectly inelastic at the existing stock $K_0$. The real rental rate $(R/P)_0$ is then determined entirely by where the $MPK$ demand curve hits that vertical supply line.
> $$\text{Total capital income} = \left(\tfrac{R}{P}\right)_0 \times K_0.$$
> ^capital-inelastic

> [!warning] "Rent per unit" vs "total rent payments" are different things
> A shock can push the **rental rate $R/P$ up** while **total capital income $\alpha Y$ falls** (or vice-versa), because total income is *rate × quantity × prices* and depends on output. This distinction is the trap in Class Exercise Q2 below — don't equate a higher unit rent with higher total payments. ^rate-vs-total

---

## 🧮 Factor Payments & Income Shares — The Key Derivation

The single most important algebraic result of the chapter: **under Cobb-Douglas with CRS, each factor's total income is a fixed share of output.**

**Total payments to labor.** In equilibrium the real wage equals $MPL$, so the wage bill is employment times the real wage:

$$L \cdot \frac{W}{P} = L \cdot MPL = L \cdot (1-\alpha)A\left(\frac{K}{L}\right)^{\alpha} = (1-\alpha)\,A K^{\alpha}L^{1-\alpha} = (1-\alpha)\,Y$$

$$\boxed{\text{Labor income} = (1-\alpha)\,Y}$$ ^labor-share

**Total payments to capital.** Symmetrically, capital income is the stock times the real rental rate:

$$K \cdot \frac{R}{P} = K \cdot MPK = K \cdot \alpha A\left(\frac{L}{K}\right)^{1-\alpha} = \alpha\,A K^{\alpha}L^{1-\alpha} = \alpha\,Y$$

$$\boxed{\text{Capital income} = \alpha\,Y}$$ ^capital-share

> [!info] Income exhaustion (Euler's theorem)
> Adding the two: $(1-\alpha)Y + \alpha Y = Y$. Paying each factor its marginal product uses up **exactly** the whole product — no more, no less. This is ==Euler's theorem== for a CRS function, and it is why $\alpha$ is called capital's **income share** as well as its output elasticity. The shares are *constant*: they don't move when $K$, $L$, or $A$ change, only if $\alpha$ (the technology) changes. ^euler

> [!tip] The comparative-statics shortcut
> Because total factor incomes are just $\alpha Y$ and $(1-\alpha)Y$, **any shock that changes output by $x\%$ changes both factor incomes by the same $x\%$** — the shares stay fixed. So to sign a "total payments to labor/capital" question, you only need to sign the change in $Y$. This one line answers half the problems below. ^income-shortcut

---

## 🧩 Problem Set 5 — Solutions

### Q1 — Which statement about $Y = A K^{\alpha}L^{1-\alpha}$ is correct?

Test each claim with the two tools — returns to scale (sum of exponents) and the marginal-product ratio formulas.

| Claim | Verdict | Reason |
|-------|---------|--------|
| A. $\alpha>0.5 \Rightarrow$ increasing RS | ✗ | RS depends on $\alpha+(1-\alpha)=1$, independent of $\alpha$ ⇒ always CRS |
| B. $\alpha<0.5 \Rightarrow MPL$ rises with $L$ | ✗ | $MPL=(1-\alpha)A(K/L)^{\alpha}$ **falls** as $L$ rises |
| C. CRS for every $0<\alpha<1$ | ✓ | Exponents sum to 1 ⇒ scaling inputs by $t$ scales output by $t^1$ |
| D. $\alpha=0.2 \Rightarrow MPK$ falls as $L$ rises | ✗ | $MPK=\alpha A(L/K)^{1-\alpha}$ **rises** with $L$ |
| E. $\alpha=0.8 \Rightarrow MPK$ rises as $K$ rises | ✗ | $MPK$ **falls** as $K$ rises (diminishing returns) |

> [!example] Answer: **C** — the production function is CRS for every $0<\alpha<1$, because the exponents always sum to one.

> [!tip] 🗣️ In plain English
> The exponents add up to 1 whatever $\alpha$ is, so doubling all inputs always **doubles** output: **constant returns to scale**. The other options mix up returns to scale with how each **marginal product** reacts to its own factor and to the other factor.

### Q2 — Real wage with $Y = 4K^{0.5}L^{0.5}$, $K=100$, $L=25$

The real wage equals $MPL$ in a competitive labor market:

$$\frac{W}{P} = MPL = \frac{\partial Y}{\partial L} = 4\cdot 0.5\,K^{0.5}L^{-0.5} = 2\left(\frac{K}{L}\right)^{0.5} = 2\left(\frac{100}{25}\right)^{0.5} = 2\cdot 2 = 4$$

> [!example] Answer: **A** — the real wage is $4$.

> [!tip] 🗣️ In plain English
> A firm pays a worker what that worker adds to output, the **marginal product of labor**. With 100 machines and 25 workers each worker has plenty of capital to use, so the **real wage** works out to 4 units of output.

### Q3 — Capital share $=\tfrac12$; immigration raises $L$ by 4%

Here $\alpha = \tfrac12$ (capital's share), and only labor changes. Sign each effect:

- **Output:** $Y_1 = A K^{0.5}(1.04L)^{0.5} = 1.04^{0.5}Y \approx 1.02\,Y$ ⇒ GDP up **~2%** (so "grew 4%" is false).
- **$MPK = \alpha A(L/K)^{1-\alpha}$:** $L\uparrow \Rightarrow MPK\uparrow$ (claim "declined 2%" false).
- **$MPL = (1-\alpha)A(K/L)^{\alpha}$:** $L\uparrow \Rightarrow MPL\downarrow$ (claim "increased 2%" false).
- **Capital income $=\alpha Y$:** rises ~2% with output (claim "declined 2%" false).
- **Labor income $=(1-\alpha)Y$:** rises ~2% with output. ✓

> [!example] Answer: **E** — total payments to workers increased by about 2%.

> [!tip] 🗣️ In plain English
> More workers means more output, about 2% more here, and labor still gets its fixed **share** of it. So **total pay to workers** rises about 2%, even though each extra worker is a bit less productive.

### Q4 — Capital share $=\tfrac14$; emigration cuts $L$ by 8%

Now $\alpha=\tfrac14$, labor share $=\tfrac34$; labor falls.

- **$MPK$:** $L\downarrow \Rightarrow MPK\downarrow$ (claim "increased 6%" false).
- **$MPL$:** $L\downarrow \Rightarrow MPL\uparrow$ (claim "declined 2%" false).
- **Output:** $Y_1 = A K^{1/4}(0.92L)^{3/4} = 0.92^{0.75}Y \approx 0.94\,Y$ ⇒ GDP down **~6%** (so "declined 2%" false).
- **Capital income $=\alpha Y$:** down ~6% (claim "declined 2%" false).
- **Labor income $=(1-\alpha)Y$:** down ~6%. ✓

> [!example] Answer: **C** — total payments to workers declined by about 6%.

> [!tip] 🗣️ In plain English
> Fewer workers means less output, about 6% less here, and labor still gets its fixed **share** of it. So **total pay to workers** falls about 6%, even though each remaining worker is more productive.

### Q5 — What does the area under the capital-demand curve (left of $K^S$) represent?

The capital-demand curve **is** the $MPK$ curve. Integrating marginal product from $0$ to $K_0$ recovers **total output** produced with that capital (given labor) — geometrically, the whole area under the marginal-product curve up to the employed quantity is total product, which then splits into the factor rectangles.

> [!example] Answer: **A** — total GDP in the economy.

> [!tip] 🗣️ In plain English
> The **marginal product** curve shows what each extra unit of capital adds. Add up all those additions out to the capital actually used and you get the **total output** of the whole economy.

### Q6 — $\alpha=\tfrac13$; $L$, $K$, and $A$ each rise 3%

Scale everything by 3% simultaneously:

$$Y_1 = (1.03A)(1.03K)^{1/3}(1.03L)^{2/3} = 1.03\cdot 1.03^{1/3}\cdot 1.03^{2/3}\,Y = 1.03\cdot 1.03\,Y = 1.03^2 Y \approx 1.0609\,Y$$

So **GDP rises ≈ 6.1%**. Output *per worker* meanwhile rises exactly 3% (the technology gain), since $Y/L = 1.0609Y/1.03L = 1.03\,(Y/L)$.

> [!example] Answer (keyed): **D** — GDP increased by about 6%.

> [!warning] The slide's "A and B are not correct" is inconsistent
> Option A says "GDP **per worker** increased by ~3%", and the arithmetic gives *exactly* that (+3%). So A is literally true as well — both A and D are correct statements. The slide keys **D** as the single answer but its remark that "A is not correct" is a slip. On the exam, read whether the question asks about **GDP** (→ D, ~6%) or **GDP per worker** (→ ~3%): the two are different quantities. ^q6-slide-error

> [!tip] 🗣️ In plain English
> Raising all inputs by 3% gives 3% more from scale and another 3% from the better technology, so **GDP** rises about 6%. GDP **per worker** only gets the technology bit, 3%, so check which of the two the question asks about.

---

## 🧪 Class Exercises — Solutions

### CE-Q1 — An increase in the capital supply

Capital supply shifts right; trace both markets.

- **Capital market:** $K^S$ shifts out $\Rightarrow$ along the fixed $MPK$ demand curve, $R/P\downarrow$; output (area under curve) $\uparrow$.
- **Labor market:** more capital raises $MPL$ (complements) $\Rightarrow$ labor demand shifts out $\Rightarrow$ $W/P\uparrow$ and $L\uparrow$.

Algebraically: $MPK=\alpha A(L/K)^{1-\alpha}$ falls as $K\uparrow$, so $R/P\downarrow$; $MPL=(1-\alpha)A(K/L)^{\alpha}$ rises as $K\uparrow$, so $W/P\uparrow$; and $Y\uparrow$.

> [!example] Answer: **D** — wages rise, rent per unit of capital falls, and GDP rises.

> [!tip] 🗣️ In plain English
> More capital means each machine adds less, so the **rent per unit** of capital falls. But each worker now has more equipment to use, so **wages** rise and total output goes up.

### CE-Q2 — Earthquake destroys part of the capital stock ($\alpha=0.5$, unit-elastic $L^S$)

Capital falls (people unharmed). This is the classic "rate up, total down" trap.

- **B. Wages rise?** $K\downarrow \Rightarrow MPL\downarrow \Rightarrow$ labor demand shifts in $\Rightarrow W/P\downarrow$. ✗
- **C. Rents fall?** $K\downarrow \Rightarrow MPK\uparrow \Rightarrow R/P\uparrow$ (rent per unit **rises**). ✗
- **D. Labor income unchanged?** Both $K$ and $L$ fall $\Rightarrow Y\downarrow \Rightarrow (1-\alpha)Y\downarrow$. ✗
- **E. Capital's share rises above ½?** The share is fixed at $\alpha$ by the (unchanged) technology. ✗
- **A. Total rent payments fall?** Total capital income $=\alpha Y$, and $Y\downarrow$, so total rent payments **fall** — even though the *rate* $R/P$ rose. ✓

> [!example] Answer: **A** — total rent payments to capital declined (because output fell, even as the unit rental rate rose). ^ce2-trap

> [!tip] 🗣️ In plain English
> With fewer machines, each remaining one is worth more, so the **rent per unit** goes up. But total output falls, and capital gets a fixed share of a smaller pie, so **total rent payments** fall. A higher price does not mean higher total income.

### CE-Q3 — Immigration expands worker supply by 5% (CRS)

- **A. $MPK$ unchanged?** $L\uparrow \Rightarrow MPK\uparrow$. ✗
- **B. $MPL$ rises?** $L\uparrow \Rightarrow MPL\downarrow$. ✗
- **C. Labor income falls?** $Y\uparrow \Rightarrow (1-\alpha)Y\uparrow$. ✗
- **D. Capital income rises?** $\alpha Y\uparrow$ with output. ✓
- **E. If $K$ and $A$ also rise 5%, GDP rises exactly 5%?** All of $A,K,L$ up 5% $\Rightarrow Y_1 = 1.05\cdot 1.05^{\alpha}\cdot 1.05^{1-\alpha}Y = 1.05^2 Y \approx +10.25\%$ — **more** than 5%. ✗

> [!example] Answer: **D** — total payments to capital will increase.

> [!tip] 🗣️ In plain English
> More workers means more output, and capital owners always get a fixed **share** of output. So **total payments to capital** rise. Extra workers also make each machine more productive, which pushes up its rent.

### CE-Q4 — Capital share $=\tfrac13$; migration raises $L$ by 6% (CRS)

$\alpha=\tfrac13$, labor share $\tfrac23$; only labor rises.

$$Y_1 = A K^{1/3}(1.06L)^{2/3} = 1.06^{2/3}Y \approx 1.04\,Y \;\Rightarrow\; \text{GDP up about 4\%.}$$

- **A. GDP up ~4%?** ✓
- **B. $MPK$ declines?** $L\uparrow \Rightarrow MPK\uparrow$. ✗
- **C. $MPL$ up ~4%?** $L\uparrow \Rightarrow MPL\downarrow$. ✗
- **D / E. Factor incomes up ~2%?** Both $\alpha Y$ and $(1-\alpha)Y$ rise ~4% (with output), not 2%. ✗

> [!example] Answer: **A** — GDP increased by about 4%.

> [!tip] 🗣️ In plain English
> Only labor rises, and labor's exponent is $\tfrac{2}{3}$, so output grows by about two thirds of 6%, which is roughly **4%**. Both factor incomes are fixed shares, so they rise about 4% too, not 2%.

### CE-Q5 — Growth accounting for "Aspamia"

This introduces the ==growth-accounting== (Solow) decomposition. Differentiating $Y=A K^{\alpha}L^{1-\alpha}$ in growth rates:

$$\boxed{\frac{\Delta Y}{Y} = \frac{\Delta A}{A} + \alpha\,\frac{\Delta K}{K} + (1-\alpha)\,\frac{\Delta L}{L}}$$

Given labor share $(1-\alpha)=\tfrac23$ (so $\alpha=\tfrac13$), $\dfrac{\Delta L}{L}=3\%$, $\dfrac{\Delta K}{K}=6\%$, $\dfrac{\Delta Y}{Y}=2\%$, solve for the TFP (=total productivity) term:

$$0.02 = \frac{\Delta A}{A} + \tfrac13(0.06) + \tfrac23(0.03) = \frac{\Delta A}{A} + 0.02 + 0.02 = \frac{\Delta A}{A} + 0.04$$

$$\Rightarrow \frac{\Delta A}{A} = 0.02 - 0.04 = -0.02$$

> [!example] Answer: **D** — total productivity **decreased by 2%**. Output grew only 2% despite input growth of 3–6% because measured inputs "should" have delivered 4% growth; the missing 2% is a negative ==Solow residual==. ^solow-residual

> [!tip] 🗣️ In plain English
> Inputs alone should have delivered about 4% growth, but output only grew 2%. The missing 2% is the **productivity** (Solow residual) term, so technology and efficiency got worse by 2%.

---

## 🎯 The Standard Exam Recipe

> [!info] Factor-market questions in five moves
> **1 — Real prices = marginal products.** In competitive equilibrium $W/P = MPL$ and $R/P = MPK$. Firms hire/rent each factor until its real price equals its marginal product.
> **2 — Sign the shocked factor's own price.** A factor's marginal product **falls** in its own quantity, so more of a factor ⇒ lower real price for it.
> **3 — Sign the other factor via complementarity.** More of one factor **raises** the other's marginal product (and real price).
> **4 — Income shares are fixed.** Labor income $=(1-\alpha)Y$, capital income $=\alpha Y$; they always move with output, and the shares only change if $\alpha$ changes. Sign $Y$ to sign total factor payments.
> **5 — Growth accounting.** $\dfrac{\Delta Y}{Y}=\dfrac{\Delta A}{A}+\alpha\dfrac{\Delta K}{K}+(1-\alpha)\dfrac{\Delta L}{L}$ — solve for whichever term is unknown (usually the TFP residual). ^exam-recipe

> [!warning] The three classic traps
> (i) **Unit price up ≠ total income up** — total income is a *share of output*, so it tracks $Y$, not the rate (CE-Q2). (ii) **Single-input vs whole-economy scaling** — one input up $g\%$ raises output by only its exponent × $g\%$; all inputs up $g\%$ raises output by (sum of exponents) × $g\%$. (iii) **Per-worker vs total output** — a technology gain raises GDP per worker; scaling all inputs raises total GDP by more (Q6). ^traps

---

## 📝 Summary — Recitation 6 in Six Ideas

1. **Factors are paid their marginal products.** Competitive equilibrium gives $W/P = MPL$ and $R/P = MPK$; only *real* prices matter because $P$ cancels from the firm's decision.
2. **Labor demand is the MPL curve; labor supply slopes up.** Their crossing sets employment and the real wage.
3. **Capital demand is the MPK curve; capital supply is vertical (inelastic) in the short run.** The real rental rate is set where MPK meets the fixed stock.
4. **Income shares are constant.** Labor earns $(1-\alpha)Y$, capital earns $\alpha Y$, and the two exhaust output exactly (Euler's theorem). Total factor payments therefore move one-for-one with GDP.
5. **Capital and labor are complements.** Adding one factor lowers its own marginal product but raises the other's — the engine behind every comparative-statics answer.
6. **Growth accounting splits growth into A, K, L.** $\tfrac{\Delta Y}{Y}=\tfrac{\Delta A}{A}+\alpha\tfrac{\Delta K}{K}+(1-\alpha)\tfrac{\Delta L}{L}$; the TFP term is the residual left after inputs are accounted for.

---

## 📎 Related Notes

- Previous: [[Rec_05-Production at Full Employment — Cobb-Douglas, Marginal Products & Returns to Scale]] — production function, Cobb-Douglas, MPL/MPK, returns to scale (the supply-side machinery this recitation applies)
- Earlier: [[Rec_03-Capital Accumulation, the Savings Identity & GNP vs GDP]] · [[Rec_02-The Three Approaches to Measuring GDP]] · [[Rec_01-Nominal & Real GDP, Price Indices & GNP]]
- Reference: [[Key Terms and Definitions]] (course glossary)
- Concepts introduced here: [[Labor Market]], [[Labor Demand]], [[Labor Supply]], [[Capital Market]], [[Real Wage]], [[Nominal Wage]], [[Real Rental Rate]], [[Factor Payments]], [[Factor Income Shares]], [[Euler's Theorem]], [[Growth Accounting]], [[Solow Residual]]
- Builds on: [[Cobb-Douglas Production Function]], [[Marginal Product of Labor]], [[Marginal Product of Capital]], [[Output Elasticity]], [[Classical Model]] · Builds toward: [[Economic Growth]], [[Aggregate Supply]]
