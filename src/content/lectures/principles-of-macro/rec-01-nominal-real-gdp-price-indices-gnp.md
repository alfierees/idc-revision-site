---
title: Nominal & Real GDP, Price Indices & GNP
week: 1
semester: 2
year: 1
academic_year: "2024-25"
course: Introduction to Macroeconomics
lecture: "Recitation 01 — Introduction: Nominal & Real GDP, Indices, GDP/GNP"
instructor: Yosi Ganel
date: 2026-07-13
tags:
  - macro-economics-intro
  - gdp
  - real-vs-nominal
  - price-index
  - cpi
  - ppi
  - inflation
  - gnp
aliases:
  - Intro Macro Recitation 1
  - GDP and Price Indices
  - Nominal vs Real GDP
subject: principles-of-macro
in_scope: true
---

# Nominal & Real GDP, Price Indices & GNP

> Part of: [[Macro-Economics (Intro)]] | Key concepts: [[Gross Domestic Product]], [[Real GDP]], [[Nominal GDP]], [[Consumer Price Index]], [[Producer Price Index]], [[Inflation]], [[Gross National Product]]

---

## 📚 What This Recitation Covers

> [!info] The big picture
> Macroeconomics needs a single number for "how much did the economy produce?" You cannot add 80 tables to 100 t-shirts — they are different things. The solution is to **value everything in money (NIS)** and sum the values. But money values move for two reasons: quantities change *and* prices change. Separating those two forces is the entire point of this recitation.
>
> The three tools introduced here — ==real vs nominal GDP==, ==price indices (CPI/PPI)==, and ==GDP vs GNP== — are the accounting backbone for everything else in the course (growth, inflation, business cycles).

### Micro vs. Macro

Microeconomics studies individual agents — households, firms, single markets — and how they allocate scarce resources through supply, demand and prices. Macroeconomics studies the economy **as a whole**: aggregate output, inflation, unemployment, growth, and monetary/fiscal policy.

> [!tip] The forest and the trees
> Micro zooms in on the *trees* (one market at a time); macro is concerned with the *forest* (the whole economy). Same economic system, different level of analysis.

---

## 🎯 Why We Need GDP At All

==Gross Domestic Product (GDP)== is the total **market value of all final goods and services produced within a country's borders** in a given period (usually a year or quarter). ^gdp-def

The measurement problem it solves: suppose in one year a market produces 80 tables, 80 kg of apples, and 100 t-shirts. "Production" cannot be a sum of physical units — the units are incommensurable. So we compute the **monetary value** of each good ($price \times quantity$) and add the values, which *are* in common units (NIS).

$$\text{GDP} = \sum_{i} p_i \, q_i$$

> [!warning] "Final" goods only
> GDP counts **final** goods to avoid double-counting. The flour a bakery buys is an *intermediate* good; its value is already embedded in the price of the bread. Counting both would overstate output.

---

## 💡 Nominal vs. Real GDP — The Core Distinction

The formula $\sum p_i q_i$ hides a trap: the total moves when **prices** move even if **quantities** (real production) do not.

> [!info] Definitions
> **==Nominal GDP==** — output valued at **current-year prices**. Affected by *both* quantity changes and price changes. ^nominal-def
>
> **==Real GDP==** — output valued at **constant (base-year) prices**. Strips out price changes, so it reflects *only* changes in the quantity of goods produced. ^real-def

> [!warning] Why nominal GDP alone is useless for judging the economy
> If nominal GDP rises 10%, you cannot tell whether the country produced 10% more *stuff* or simply charged 10% higher *prices* for the same stuff. Only real GDP answers "are we actually producing more?"

### Worked intuition (from the slides)

| Year | Tables (price × qty) | T-shirts (price × qty) | Nominal GDP |
|------|----------------------|------------------------|-------------|
| 2015 | 1 × 100 | 2 × 50 | **200** |
| 2016 | 2 × 100 | 4 × 50 | **400** |

Nominal GDP doubled from 200 to 400 — but **quantities never changed** (still 100 tables, 50 t-shirts). Every prices doubled. Real production was flat; the whole "growth" was inflation.

### Two equivalent ways to compute Real GDP

> [!example] Method I — Deflate nominal GDP by the price-level change
> $$\text{Real GDP} = \frac{\text{Nominal GDP}}{\text{price level change (deflator)}}$$
> 2016 example: prices doubled (factor 2), so $\text{Real GDP}_{2016} = \dfrac{400}{2} = 200$. ✅

> [!example] Method II — Value current quantities at base-year prices
> Choose 2015 as the **base year**. Re-price 2016's *quantities* using 2015 *prices*:
> $$\text{Real GDP}_{2016} = (1 \times 100) + (2 \times 50) = 200 \;\text{(base-year 2015 prices)}$$
> Same answer — confirming both methods measure the same thing.

$$\boxed{\text{Real GDP}_t = \sum_i p_i^{\text{base}} \, q_i^{t}}$$

> [!tip] Base year has no gap
> In the **base year itself**, real GDP = nominal GDP by construction — you are valuing base-year quantities at base-year prices in both. Any divergence only opens up in *other* years. This single fact solves a lot of exam questions instantly.

---

## 🧮 Worked Example — Nominal & Real GDP with a Rate of Change

**Data:**

| Product | 2016 Price | 2016 Qty | 2017 Price | 2017 Qty |
|---------|-----------|----------|-----------|----------|
| Tables | 100 | 50 | 150 | 150 |
| Avocado | 10 | 20 | 20 | 30 |

**(a) Nominal GDP each year** — current prices × current quantities:

$$\text{Nom}_{2016} = 100(50) + 10(20) = 5{,}000 + 200 = 5{,}200$$
$$\text{Nom}_{2017} = 150(150) + 20(30) = 22{,}500 + 600 = 23{,}100$$

> [!tip] 🗣️ In plain English
> Nominal GDP is just **price times quantity** added up for each year, so 2016 comes to 5,200 and 2017 jumps to 23,100. Most of that jump is prices going up, which is why we need the next step.

**(b) Real GDP 2017 in 2016 prices** — 2017 *quantities* valued at 2016 *prices*:

$$\text{Real}_{2017} = 100(150) + 10(30) = 15{,}000 + 300 = 15{,}300$$

> [!warning] Slide arithmetic check
> The recitation slide wrote "$150 \times 50 + 20 \times 10 = 7{,}700$" — that used the wrong (base-year) quantities and mixed prices. Applying the correct rule (**2017 quantities at 2016 prices**) gives **15,300**. Always pin down explicitly: *which year's quantities, which year's prices?* Real GDP = **current quantities, base prices**.

> [!tip] 🗣️ In plain English
> **Real GDP** means this year's quantities at base-year prices, so 2017 comes to 15,300. Always ask yourself which year's quantities and which year's prices before you multiply.

**(c) Rate of change in real GDP, 2016 → 2017.** Use the general growth formula:

$$\text{rate of change} = \frac{\text{New}}{\text{Old}} - 1$$

Since 2016 is the base year, $\text{Real}_{2016} = \text{Nom}_{2016} = 5{,}200$:

$$\frac{15{,}300}{5{,}200} - 1 = 1.94 \Rightarrow \text{a } 194\% \text{ increase}$$

> [!tip] 🗣️ In plain English
> Real GDP went from 5,200 to 15,300, which is **194%** growth, so real output roughly tripled. Because 2016 is the **base year**, its real and nominal GDP are the same number, so you can use 5,200 straight away.

> [!tip] Reusable move
> Whenever the base year appears in a "rate of change of real GDP" question, replace its real GDP with its nominal GDP — they are identical — and you avoid an extra calculation.

---

## 👥 GDP per Capita — Growth vs. Population

Suppose real GDP rises 2% this year. Is the economy better off? Not necessarily — if the **population** grew faster, each person may have *less*. True living-standard growth is measured by ==real GDP per capita==:

$$\text{real GDP per capita} = \frac{\text{real GDP}}{\text{population}}$$

Because it is a ratio, growth rates combine **multiplicatively**:

$$\underbrace{(1+g_{\text{percap}})}_{\text{per person}} \times \underbrace{(1+g_{\text{pop}})}_{\text{population}} = (1+g_{\text{GDP}})$$

> [!example] Ex.1 Q1 — population *shrinks*
> Real GDP per capita ↑ 3%; population ↓ 1%. Find real GDP growth.
> $$1.03 \times 0.99 = 1.0197 \approx 1.02 \Rightarrow \textbf{+2\%}\ \text{(answer b)}$$

> [!tip] 🗣️ In plain English
> If people are **per head** 3% richer and there are 1% fewer of them, total output only grows about 2%. Growth rates **multiply** rather than add, which is why we get $1.03 \times 0.99 \approx 1.02$.

> [!example] Ex.1 Q2 — population *grows*
> Real GDP ↑ 5%; population ↑ 2%. Find per-capita growth.
> $$\frac{1.05}{1.02} = 1.0294 \approx 1.03 \Rightarrow \textbf{+3\%}\ \text{(answer c)}$$

> [!tip] 🗣️ In plain English
> Output grew 5% but it is shared between 2% more people, so each person only gets about **3%** more. You divide the growth factors: $1.05 / 1.02 \approx 1.03$.

> [!example] Ex.1 Q3 — separating price from quantity over a decade
> Nominal GDP ↑ 32%; price level ↑ 10%. Then real GDP:
> $$\text{Real growth factor} = \frac{1.32}{1.10} = 1.20 \Rightarrow \textbf{real GDP +20\% (answer d)}$$
> Nominal-per-capita (if population flat) is just +32%, so option (b)'s "22%" is wrong.

> [!tip] 🗣️ In plain English
> Nominal GDP grew 32% but prices rose 10%, so only part of that is real output. Dividing out the **price level** leaves real GDP up **20%**, because $1.32 / 1.10 = 1.20$.

> [!example] Ex.1 Q6 — average annual real growth
> Nominal GDP: 500 bn (2011, base) → 625 bn (2013). Prices +2.5%/yr.
> Deflate 2013: $\text{Real}_{2013} = \dfrac{625}{1.025^{2}} = 594.88$.
> Total real change: $\dfrac{594.88}{500} - 1 = 0.1897$.
> Convert a **2-year total** to an **annual average** using compounding:
> $$1 + 0.1897 = (1 + x)^2 \Rightarrow x = \sqrt{1.1897}-1 \approx 0.0907 = \textbf{9.07\%/yr (answer d)}$$

> [!tip] 🗣️ In plain English
> First strip out the **inflation** to get real GDP in 2013 (594.88), then work out the total real growth (about 19%) over the two years. Because growth **compounds**, you take the square root to get the yearly average of **9.07%**, not just half of 19%.

> [!warning] Total vs. average growth
> Never divide a multi-year total growth by the number of years. Growth **compounds**, so you take the $t$-th root: $1+\text{total} = (1+\text{avg})^t$.

---

## 📊 Price Indices — Measuring Inflation

A ==price index== tracks the cost of a **fixed basket** of goods across time, so any change reflects **prices only** (quantities are held constant). There are two, distinguished by *whose* basket and *which* quantities they fix.

> [!info] The two indices
> **==Consumer Price Index (CPI)==** — cost of a **base-year** basket of **consumer goods**. Fixes **base-year quantities** (a Laspeyres-type index). Measures the cost of living. ^cpi-def
>
> **==Producer Price Index (PPI)==** — cost of the basket using **current-year quantities** of **domestically produced goods** (a Paasche-type index). ^ppi-def

### CPI worked example

| Product | 2015 Price | 2015 Qty | 2016 Price | 2016 Qty |
|---------|-----------|----------|-----------|----------|
| Chairs | 5 | 10 | 6 | 15 |
| Shirts | 2 | 30 | 4 | 20 |

CPI holds **base-year (2015) quantities** {10, 30} fixed:

$$\text{Basket}_{2015\text{ prices}} = 5(10) + 2(30) = 110 \qquad \text{Basket}_{2016\text{ prices}} = 6(10) + 4(30) = 180$$
$$\frac{180}{110} - 1 = 0.63 \Rightarrow \textbf{prices rose 63\%}$$

> [!tip] 🗣️ In plain English
> The **CPI** asks: what would last year's shopping basket cost at today's prices? The same basket cost 110 in 2015 and 180 in 2016, so prices rose **63%**.

### PPI worked example

PPI holds **current-year (2016) quantities** {15, 20} fixed:

$$\text{Basket}_{2015\text{ prices}} = 5(15) + 2(20) = 115 \qquad \text{Basket}_{2016\text{ prices}} = 6(15) + 4(20) = 170$$
$$\frac{170}{115} - 1 = 0.48 \Rightarrow \textbf{prices rose 48\%}$$

> [!tip] 🗣️ In plain English
> The **PPI** does the same job but uses this year's output as the basket (15 chairs and 20 shirts). That basket cost 115 then and 170 now, so prices rose **48%**, which differs from the CPI only because the weights differ.

> [!tip] Why CPI and PPI disagree
> Same prices, different **weights**. CPI weights by what consumers bought in the *base* year; PPI weights by *current* production. The gap is not measurement error — it is the well-known Laspeyres-vs-Paasche divergence driven by substitution.

### 🚫 Which goods to exclude

| Index | Exclude | Reason |
|-------|---------|--------|
| **CPI** | Investment goods (e.g. machines) | Not *consumed* by households |
| **PPI** | Imported goods (e.g. imported perfume) | Not *domestically produced* |

> [!example] Ex.1 Q5 — computing a PPI change
> Closed economy, no government. Food (consumer good) + machines (investment).
> 2000: 100 food @ \$1, 30 machines @ \$10. 2001: 110 food @ \$1.10, 33 machines @ \$13.
> PPI uses **current (2001) quantities** {110, 33}:
> $$\text{2001 basket at 2001 prices} = 110(1.10) + 33(13) = 121 + 429 = 550$$
> $$\text{2001 basket at 2000 prices} = 110(1) + 33(10) = 110 + 330 = 440$$
> $$\frac{550}{440} - 1 = 0.25 \Rightarrow \textbf{PPI +25\% (answer b)}$$

> [!tip] 🗣️ In plain English
> The **PPI** uses 2001 quantities, so we price the same 110 food and 33 machines at 2000 prices (440) and at 2001 prices (550). The ratio gives **+25%**. Machines count because they are produced domestically, even though no household buys them.

---

## 🔢 From Index to Inflation Rate

An index is **normalised to 100 in the base year**. The ==inflation rate== is the percentage change in the index between consecutive years.

$$\text{CPI}_t = \frac{\text{basket value}_t}{\text{basket value}_{\text{base}}} \times 100 \qquad \pi_t = \frac{\text{CPI}_t - \text{CPI}_{t-1}}{\text{CPI}_{t-1}} \times 100$$

> [!example] Practice — Guns & Butter (quantities fixed at 100 each)
> | Year | Guns P | Butter P | Basket value | CPI | Inflation |
> |------|--------|----------|--------------|-----|-----------|
> | 2020 | 250 | 2.50 | $250(100)+2.5(100)=25{,}250$ | 100.00 | — |
> | 2021 | 250 | 3.00 | $250(100)+3(100)=25{,}300$ | 100.19 | 0.19% |
> | 2022 | 275 | 3.50 | $275(100)+3.5(100)=27{,}850$ | 110.29 | 10.0% |
>
> **2021 CPI:** $\frac{25{,}300}{25{,}250}\times 100 = 100.19$.
> **2022 CPI:** $\frac{27{,}850}{25{,}250}\times 100 = 110.29$.
> **2022 inflation:** $\frac{110.29 - 100.19}{100.19}\times 100 = 10.0\%$.

> [!tip] 🗣️ In plain English
> The **CPI** is just the basket's cost divided by the base-year cost, times 100, so 2021 is 100.19 and 2022 is 110.29. **Inflation** is the change from last year's CPI, so 2022 is 10.0% and 2021 is only 0.19%.

> [!warning] Inflation is measured off last year's index, not the base
> The 2022 inflation rate divides by the **2021** CPI (100.19), *not* by the base 100. The index is anchored to the base year; the *inflation rate* is always year-on-year.

---

## 🌍 GDP vs. GNP

The two aggregates differ on **who** does the producing vs. **where**.

> [!info] Definitions
> **GDP** — value of goods/services produced **within a country's borders** (territory-based), regardless of producer nationality.
>
> **==Gross National Product (GNP)==** — value produced by a country's **residents/nationals**, wherever they are. Equals GDP **plus net factor income from abroad** (income residents earn overseas minus income foreigners earn domestically). ^gnp-def

$$\boxed{\text{GNP} = \text{GDP} + \text{net factor income from abroad}}$$

| Concept | Basis | Includes income earned… |
|---------|-------|--------------------------|
| **GDP** | Location (borders) | …inside the country, by anyone |
| **GNP** | Nationality (residents) | …by residents, anywhere in the world |

> [!example] Israeli worker in Japan
> An Israeli resident works for a Japanese firm in Japan.
> - Counts in **Israel's GNP** (Israeli national) — *not* Israel's GDP (produced abroad).
> - Counts in **Japan's GDP** (produced on Japanese soil) — *not* Japan's GNP (not a Japanese national).

> [!example] Ex.1 Q4 — definition check
> "Zulu's GDP in 2014 is…" → **(d)** total value of goods and services produced **within Zulu's territory** during 2014. GDP is defined by *borders*, not by who consumes, who owns, or the government.

> [!tip] 🗣️ In plain English
> GDP is about **where** something is produced, not who owns it or who buys it. So Zulu's GDP is everything produced **within Zulu's territory** in 2014, which is answer (d).

---

## 🎯 Summary — Recitation 1 in Five Ideas

1. **You can't add apples to t-shirts** — value everything in money and sum. That is GDP, $\sum p_i q_i$.
2. **Nominal moves for two reasons, real for one.** Real GDP fixes prices at a base year, so it isolates *quantity* changes. Base year: nominal = real.
3. **Growth is per person and compounds.** Real GDP per capita divides by population; multi-year growth uses the $t$-th root, never simple division.
4. **Price indices fix quantities to isolate prices.** CPI fixes *base-year* consumer quantities; PPI fixes *current* domestic-production quantities. Exclude investment goods from CPI, imports from PPI. Inflation = year-on-year % change in the index.
5. **GDP is territory, GNP is nationality.** $\text{GNP} = \text{GDP} + \text{net income from abroad}$.

---

## 📎 Related Notes

- Next: [[Rec_02-The Three Approaches to Measuring GDP|Rec 02]]
- Reference: [[Key Terms and Definitions]] (course glossary)
- Concepts introduced here: [[Gross Domestic Product]], [[Real GDP]], [[Nominal GDP]], [[GDP Deflator]], [[Consumer Price Index]], [[Producer Price Index]], [[Inflation]], [[Gross National Product]], [[GDP per Capita]]
- Builds toward: [[Aggregate Demand]], [[Aggregate Supply]], later business-cycle and policy topics
