---
title: Productivity — Measurement, Heterogeneity & Sources
week: 11
semester: 2
year: 2
course: Macro-Economics
lecture: "Presentation 11 — Productivity"
tags:
  - macroeconomics
  - productivity
  - tfp
  - misallocation
  - human-capital
  - institutions
  - development-accounting
  - learning-by-doing
aliases:
  - Productivity
  - Productivity Differences
  - Misallocation
  - Sources of TFP Differences
subject: macro-economics
in_scope: true
---

# Productivity — Measurement, Heterogeneity & Sources

> Part of: [[Macro-Economics]]
> **Presentation 11** — Macro-Economics, "Productivity"
> Key concepts: [[Total Factor Productivity]], [[Average Productivity]], [[Misallocation]], [[Human Capital]], [[Institutions]], [[Learning by Doing]], [[Development Accounting]], [[Marginal Product of Labor]]
> Slides: [productivity.pdf](/papers/macro-economics/productivity.pdf)

---

## 🗺️ Where This Fits

[[Lec_04-Production]] showed that **TFP ($A$)** is the residual that accounts for most cross-country income gaps. This lecture asks the follow-up questions: **how do we measure productivity, how much does it vary, and where do the differences come from?** It is a "detour" of the course (see [[Lec_00-Introduction]]), and the efficient-allocation result ($MPN_1 = MPN_2$) shows up directly in exam multiple-choice questions.

> [!info] Why productivity matters
> Given a quantity of factors (say labor), **higher productivity means more output, so a richer economy**. That reasoning alone makes it one of the most researched topics in economics. The caveat: the discussion maximizes **GDP**. Jones and Klenow (2016) build a broader welfare measure (GDP, consumption, leisure, mortality, inequality) and find welfare is **highly correlated with GDP**, but with some **large deviations** from a one-to-one relation.

---

## 📏 Measuring Productivity

### Average productivity (one factor at a time)

$$\text{Labor productivity} = \frac{Y}{N}, \qquad \text{Capital productivity} = \frac{Y}{K}$$

- **Advantage:** easy to measure, clear what is measured.
- **Disadvantage:** the productivity of $N$ **depends on $K$** (and vice versa).

> [!example] Same technology, different "productivity"
> Both plants use $Y_i = 100\,K_i^{0.5}N_i^{0.5}$.
>
> | | Capital | Labor | Output | $Y/K$ | $Y/N$ |
> |---|---|---|---|---|---|
> | **Plant A** | 25 | 16 | 2,000 | 80 | 125 |
> | **Plant B** | 16 | 25 | 2,000 | 125 | 80 |
>
> A looks better by labor productivity, B looks better by capital productivity, yet the technology is identical.

### Total factor productivity (TFP)

TFP does **not depend on factor quantities**: plant X has higher TFP than Z if, given the same factors, X produces more. Most models define it as $Y = A\times F(K,N)$.

> [!example] TFP vs. average productivity
> $Y_i = A_i K_i^{0.5}N_i^{0.5}$
>
> | | TFP | Capital | Labor | Output | $Y/K$ | $Y/N$ |
> |---|---|---|---|---|---|---|
> | **Plant X** | 100 | 25 | 16 | 2,000 | 80 | 125 |
> | **Plant Z** | 110 | 9 | 36 | 1,980 | 220 | 76.15 |
>
> Z has higher TFP but **lower labor productivity**. (The deck says it will discuss later whether this is a reasonable scenario.)

### Measurement issues

- **Output** is usually measured as **revenue**: monopoly vs. competition changes prices, and prices may or may not reflect quality. Multi-product firms are a further problem even with quantity data.
- **Labor:** hours or employees? What about quality (more college graduates vs. more high-school dropouts)?
- All of this is harder still for capital, and for any other factor.
- **TFP** additionally needs an assumed **functional form and parameters**. [[Development Accounting]] sets $A = \dfrac{Y}{F(K,N)}$; for example if $Y = AK^{1/3}N^{2/3}$ then $A = \dfrac{Y}{K^{1/3}N^{2/3}}$. Cobb-Douglas is "not a terrible approximation", but estimating the elasticities is hard even then.

---

## 🌍 A Lot of Heterogeneity in Productivity

> [!quote] Syverson (2011, JEL), as quoted
> Large and persistent differences in productivity levels across businesses are ubiquitous. This has shaped research agendas in macroeconomics, industrial organization, labor and trade.

Productivity is measured at many levels (aggregate, sector, firm, units within a firm) and over time. The repeated finding, at almost every level of aggregation, is **substantial heterogeneity**.

### Across countries (PWT 10.0, 2019 data)

Predicted output uses $y = k^{1/3}$ (relative to the USA); implied TFP is the gap:

| Country | Observed $y$ | Predicted $y = k^{1/3}$ | Implied TFP ($A$) |
|---|---|---|---|
| USA | 1.00 | 1.00 | 1.00 |
| Switzerland | 1.20 | 1.16 | 1.034 |
| Italy | 0.65 | 1.11 | 0.585 |
| Japan | 0.63 | 0.96 | 0.656 |
| Israel | 0.62 | 0.86 | 0.721 |
| Argentina | 0.35 | 0.70 | 0.50 |
| China | 0.22 | 0.69 | 0.319 |
| India | 0.11 | 0.49 | 0.224 |
| Ethiopia | 0.044 | 0.30 | 0.147 |

Other slides show TFP over time for the USA and Canada (Abel, Bernanke and Croushore) and for various countries (PWT 10.0).

### Across plants within narrow industries

- **Syverson (2004):** within 4-digit US manufacturing industries, the 90–10 percentile range of plant TFP is about **0.65** (log points) on average, so a plant at the 90th percentile has TFP roughly $e^{0.65}\approx 1.9$ times that of a plant at the 10th percentile.
- **Hsieh and Klenow (2009):** the distribution of plant-level "TFPQ" (TFP from physical quantities, not revenue) in the US, India and China has **fat tails**. With no heterogeneity everyone would sit at 1.

---

## 🔍 Potential Sources of TFP Differences

Many reasons, across and within economies, very likely related to each other:

| Source | Idea |
|---|---|
| **Quality of factors** | Human capital and physical-capital quality |
| **Efficient allocation** | Are resources where they are most productive? |
| **Institutions** | Rules of the game |
| **Technology, R&D** | Innovation |
| **Competition** | Pressure to improve |
| **Learning by doing** | Getting better with accumulated production |
| **Learning from others** | Spillovers |
| **Management practices** | How plants are run |

---

## 🎓 Quality of Factors

> [!example] Human capital hidden in measured TFP
> Two economies share the "true" function $Y_i = K_i^{0.5}(h_iN_i)^{0.5}$, where $h_i$ is human capital per hour. Both have $K=36$, $N=100$; $h_X = 4$, $h_Z = 1$.
>
> | | Capital | Hours | $h$ | Output | $Y/N$ | $Y/(K^{0.5}N^{0.5})$ |
> |---|---|---|---|---|---|---|
> | **Economy X** | 36 | 100 | 4 | 120 | 1.2 | 2 |
> | **Economy Z** | 36 | 100 | 1 | 60 | 0.6 | 1 |
>
> If TFP is backed out from observed capital and hours **ignoring $h$**, X's TFP is twice Z's. Two equivalent readings: **mismeasured factor quality "biases" TFP**, or **quality is itself part of TFP**. The same logic works for capital quality or any other factor, and across firms.

**Evidence on quality:**

- Hsieh and Klenow (2010): human capital explains roughly **10–30%** of differences in GDP per worker; physical capital roughly **20%** (not exactly TFP; much remains to uncover on capital quality).
- Fox and Smeets (2011, Denmark): accounting for workers' characteristics explains about **20%** of within-sector firm TFP dispersion (it cuts the 90–10 ratio by 18%).
- Takeaway: **important, but far from the only explanation.** (Slides also show human capital against GDP, TFP and schooling in PWT 10.0.)

---

## ⚖️ Efficient Allocation of Resources

Firm TFP varies a lot within countries, so what does that imply for **aggregate TFP**? We want productive firms to have more resources, but **do we want them to have all of them?** Assume perfectly competitive markets; the goal is to maximize output.

### Case 1: one factor, constant returns

Two firm types, $A_1 > A_2$, $Y_i = A_iN_i$. Every worker produces more in firm 1, so **all workers go to firm 1** and type-2 firms should not operate. If some work in firm 2, aggregate TFP is the weighted average $\dfrac{A_1N_1 + A_2N_2}{N_1+N_2} < A_1$.

### Case 1a: two factors, constant returns

With $Y_i = A_iK_i^{\alpha}N_i^{1-\alpha}$ the planner maximizes $Y_1+Y_2$ subject to $K_1+K_2=\bar K$ and $N_1+N_2 = \bar N$. The first-order conditions require marginal products of the mobile factors to be **equal across firms**:

$$(1-\alpha)A_1K_1^{\alpha}N_1^{-\alpha} = (1-\alpha)A_2K_2^{\alpha}N_2^{-\alpha}, \qquad \alpha A_1K_1^{\alpha-1}N_1^{1-\alpha} = \alpha A_2K_2^{\alpha-1}N_2^{1-\alpha}$$

> [!warning] The contradiction
> Both conditions imply $K_1/N_1 = K_2/N_2$. But then, with $A_1\neq A_2$, the marginal products **cannot** be equal. So there is **no interior solution**: the efficient allocation is a **corner** where only the highest-TFP firms operate.

- Among surviving (equal-TFP) firms the **capital-labor ratio is the same**, but **levels can differ**: there can be large and small firms.
- If $\alpha_1\neq\alpha_2$, TFP differences need not imply that only one type survives.
- In a competitive equilibrium this comes from **entry/exit and prices**: low-productivity firms make negative profits and don't enter; all firms pay the same input prices, so marginal products of mobile inputs are equal.

### Case 2: decreasing returns

Frictions (e.g. immobile capital) make labor face **decreasing returns**. Take labor as the only factor, 100 workers, fully mobile, and two firms $Y_1 = 150N_1^{0.5}$, $Y_2 = 200N_2^{0.5}$.

| Allocation | $N_1$ | $N_2$ | Output |
|---|---|---|---|
| **X (efficient)** | 36 | 64 | $900 + 1{,}600 = 2{,}500$ |
| **Z (equal split)** | 50 | 50 | $1{,}061 + 1{,}414 = 2{,}475$ |
| **D (all to firm 2)** | 0 | 100 | $2{,}000$ |

Because of diminishing marginal product it is **not optimal to run only one firm**.

### The general principle

For $Y_i = A_iN_i^{\alpha}$ and a fixed labor supply, maximize $A_1N_1^{\alpha}+A_2N_2^{\alpha}$ s.t. $N_1+N_2=\bar N$. The condition is

$$\boxed{MPN_1 = MPN_2}$$

If $MPN_1 > MPN_2$, moving a worker from 2 to 1 gains more than it costs (and vice versa).

> [!example] The numbers in the example
> $0.5\times150\,N_1^{-0.5} = 0.5\times200\,N_2^{-0.5}$, so $\left(\dfrac{N_2}{N_1}\right)^{0.5} = \dfrac{200}{150}$, i.e. $\dfrac{N_2}{N_1} = \left(\dfrac{200}{150}\right)^2 = 1.7778$. With $N_1+N_2 = 100$: $N_1 = 36$, $N_2 = 64$. Equal split (50/50) leaves output gains from reallocation.

Takeaways:

- With diminishing returns it is **never optimal to put all labor in one firm**, but we should expect a **positive correlation between firm size and productivity**.
- The same principle holds for any reallocatable factor.
- Real firms won't have identical MPN, but there is **information in the dispersion** of MPN. Key questions: what causes misallocation, and what is the quantitative gain from fixing it? (see [[Misallocation]])

### Evidence on misallocation

- **France:** firms with **50+ employees** face strict regulation (forming a union and funding it, harder firing, more). Firms near the threshold may **stay below it** even where hiring more is optimal, distorting productivity and perhaps wages (Garicano, Lelarge and Van Reenen, 2016, micro data 1995–2007).
- **China and India (Hsieh and Klenow, 2009):** "TFPR" is directly related to MPN, and with no misallocation everyone would sit at 1. If China had the **US distribution**, potential TFP gain is about **30–50%**; for India about **40–60%**.

---

## 🏛️ Institutions

**Institutions** are man-made "rules of the game" that constrain behavior and affect incentives. Our models assume competitive markets, information and low transaction costs; for those to exist, political and economic institutions must exist: **property rights, rule of law and contract enforcement, equal opportunity, freedom of choice.** These plainly affect investment in capital and its quality, schooling and R&D.

| | **Inclusive** | **Extractive** |
|---|---|---|
| **Idea** | Broad access to resources across society | Concentrate resources and power for the **ruling elite** |
| **Economic** | Property rights, contract enforcement, equal opportunity | Expropriation, blackmail and corruption, constrained labor markets, non-competitive markets, limited access to education |
| **Political** | Wide participation, pluralism, checks and balances, rule of law | Exclusion of groups, no constraints on executive power, segregation, terror |

Political and economic institutions are tightly linked and overlap. Coordination usually brings **stability**; **shocks** (new technologies such as the industrial revolution, extreme events such as wars, popular movements such as the French revolution) can destabilize, and effects may only show in the long run.

**How institutions encourage growth:** lower uncertainty (investment under protected property rights; trade under contract enforcement); efficient allocation (opportunity, less corruption, working markets); good public services (education, health, infrastructure); creative freedom; the ability to replace leaders who do not function.

**Why aren't good institutions everywhere?** The starting point and status quo matter (changes shift the division of surplus), and leaders and societies have **commitment problems**.

**Empirics are mostly suggestive correlations; causality is very hard to establish.** Examples in the deck: property rights vs. GDP, corruption vs. GDP (Grundler and Potrafke, 2019), constraints on executive power vs. GDP (Ater, Raz and Shpitzer, 2024), and **democratization**, which raises GDP by about **20% after 20–25 years** (Acemoglu et al., 2019, who claim the effect is **causal**).

> [!warning] Correlation is not causation
> A positive cross-country correlation between institutional quality and GDP per capita is **consistent with** better institutions raising income, but does not prove it: income may also improve institutions, and other factors can drive both.

---

## 🥊 Competition

Schmitz (2005): US and Canadian iron-ore producers had no foreign competition for about a century. In the early 1980s Brazilian ore was offered in Chicago at much lower prices, a crisis for the industry. In response, productivity rose **dramatically**, mostly through **changes in work practices** (less over-staffing, so higher labor productivity; more time with equipment in operating mode, so higher materials and capital productivity).

---

## 🧑‍💼 Management Practices

Bloom, Eifert, Mahajan, McKenzie and Roberts (QJE, 2013): an experiment on cotton-fabric plants near Mumbai.

- All plants got advice on **38 specific practices** (operations, inventory, quality control).
- Some (randomized) also got **consulting through implementation** (5 months); the others only 1 month.
- Output and inputs were collected weekly for two years. Before/after photos show messy inventories and loose-paper record keeping replaced by organised, labelled inventory and standardized, computerised records.
- **Result:** treated plants' TFP rose relative to control plants.
- **Follow-up (2017):** both groups dropped some practices but **differences remain**; non-participating plants in the same firms as treated plants **adopted similar practices**.
- At the macro level the deck shows management scores against GDP per capita across countries.

---

## 📈 Learning

- **Learning by doing** (Benkard, 2000, aircraft production): we get better based on accumulated past production.
- **Learning by experimenting** (Handel and Spiegel, 2014): a steel mini-mill followed for 12 years had a large production increase with little labor turnover; some improvement came from an incentive-pay scheme and some from a capital investment, and the rest was unexplained. Managers' interviews suggested **trial-and-error**, not just accumulated output.
- **Learning from others** (Greenstone, Hornbeck and Moretti, 2010): compare incumbents in the county that **won** a "Million Dollar Plant" with those in the **runner-up** county. Importantly there is **no visible pre-trend** before the new plant opens, which helps isolate the spillover.

---

## 🎯 Summary

1. A lot of productivity variation **within and across countries**.
2. Average productivities mislead (they depend on the other factor); **TFP** doesn't depend on factor quantities, but needs an assumed function and has many measurement issues.
3. **Efficient allocation** equalizes marginal products of mobile factors across firms. With constant returns only the highest-TFP firms operate; with diminishing returns all firms operate, larger where TFP is higher.
4. Sources: **technology/R&D, factor quality, allocation, institutions, competition, learning by doing, learning from others, management practices.** They are likely **related to one another**, probably more exist, and it is an active research area.

---

## 📎 Related Notes

- Built on: [[Lec_04-Production]] (TFP, development accounting, [[Cobb-Douglas]])
- Built on: [[Lec_07-Labor Market]] ($MPN = w$), [[Lec_09-Inequality & Polarization]] ([[Heterogeneity]])
- Intro context: [[Lec_00-Introduction]]
- Exam use: Moed A and Moed B 2026 test the efficient-allocation result ([[Misallocation]]) and institutions

> [!note] What was reconstructed
> Charts and regression tables on the slides (TFP time series, plant-level TFP histograms, the institution and management scatterplots) are not reproduced, only their captions and stated results. The Syverson (2004) figure (90–10 range of about 0.65) was read from the slide's text. Decreasing-returns table values are from the slide (Z's outputs 1,061 and 1,414 recomputed: $150\sqrt{50}=1{,}061$, $200\sqrt{50}=1{,}414$).
