---
title: "EX-4"
subject: principles-of-macro
source_doc: /papers/principles-of-macro/exercise-4.pdf
tags:
  - macro-economics-intro
  - gdp
  - real-vs-nominal
  - gdp-per-capita
  - growth-rate
  - inflation
  - israel-data
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Step 1: GDP per capita.** Using Israel's Nominal GDP, Real GDP (both in millions of NIS) and population (in thousands) for 2000 to 2024, compute **nominal GDP per capita** and **real GDP per capita** for each year, in NIS per person.
    solution: |
      Dividing each GDP total by the **population** gives what each person gets on average, so living standards can be compared across years whatever the population size.

      $$
      \text{GDP per capita}_t = \frac{\text{GDP}_t \ (\text{millions NIS})}{\text{Population}_t \ (\text{thousands})} \times 1000
      $$

      > [!warning] Units matter
      > GDP is in **millions** of NIS and population in **thousands**. Dividing millions by thousands gives *thousands* of NIS per person, so multiply by 1,000 to get NIS per person. This is the `*1000` in the spreadsheet formula `=C4/D4 *1000`.

      **2000 (worked):**

      $$
      \text{Nominal pc}_{2000} = \frac{556{,}601.1}{6{,}369.3}\times 1000 = 87{,}388 \ \text{NIS}
      $$

      $$
      \text{Real pc}_{2000} = \frac{748{,}244.2}{6{,}369.3}\times 1000 = 117{,}477 \ \text{NIS}
      $$

      > [!tip] Why real is above nominal before the base year
      > The base year of the real series is **2020**. For every year before 2020, output is valued at 2020 prices, which are *higher* than the prices of the day, so real per-capita GDP sits **above** nominal. After 2020 the relationship flips.

      > [!info] Spotting the base year from the data alone
      > In **2020**, Nominal GDP = Real GDP exactly (both 1,414,038.9), so both per-capita figures equal 152,214 NIS. That equality is the fingerprint of the **base year**: real GDP is nominal GDP re-valued at base-year prices, and in the base year those are the same prices.

      > [!warning] 2024
      > Population for 2024 is **N/A** in the source, so 2024 per-capita GDP (and its growth rate) cannot be computed. The spreadsheet shows `#VALUE!`.

      > [!tip] 🗣️ In plain English
      > Dividing each GDP total by the **population** gives what each person gets on average. In 2000 that is 87,388 NIS nominal and 117,477 NIS real, and the real figure is higher because 2020 prices are higher than 2000 prices.
    related_terms: ["gdp-per-capita", "nominal-gdp", "real-gdp", "gross-domestic-product"]
  - id: "2"
    text: |
      **Step 2: Annual growth rates.** For both per-capita series, compute the year-on-year growth rate for 2001 to 2023.
    solution: |
      The **growth rate** is the proportional change from one year to the next:

      $$
      g_t = \frac{X_t - X_{t-1}}{X_{t-1}} = \frac{X_t}{X_{t-1}} - 1
      $$

      The spreadsheet uses `=(F4-F3)/F3` for nominal and the same form for real.

      **2021 (worked, the inflation year):**

      $$
      g^{\text{nom}}_{2021} = \frac{167{,}389}{152{,}214}-1 = +9.97\%
      $$

      $$
      g^{\text{real}}_{2021} = \frac{163{,}630}{152{,}214}-1 = +7.50\%
      $$

      Nominal grew about 10% but real only about 7.5%. The gap of roughly 2.5 percentage points is **inflation**.

      **Full results** (NIS per person; growth year-on-year):

      | Year | Nominal GDP/cap | Real GDP/cap | Nominal growth | Real growth |
      |------|----------------:|-------------:|---------------:|------------:|
      | 2000 | 87,388 | 117,477 | n/a | n/a |
      | 2001 | 87,232 | 115,279 | −0.18% | −1.87% |
      | 2002 | 89,548 | 113,001 | +2.65% | −1.98% |
      | 2003 | 88,680 | 112,646 | −0.97% | −0.31% |
      | 2004 | 91,374 | 115,803 | +3.04% | +2.80% |
      | 2005 | 94,701 | 118,789 | +3.64% | +2.58% |
      | 2006 | 99,488 | 123,222 | +5.06% | +3.73% |
      | 2007 | 104,739 | 128,718 | +5.28% | +4.46% |
      | 2008 | 107,091 | 129,844 | +2.25% | +0.87% |
      | 2009 | 111,118 | 129,017 | +3.76% | **−0.64%** |
      | 2010 | 116,458 | 133,626 | +4.81% | +3.57% |
      | 2011 | 122,410 | 138,454 | +5.11% | +3.61% |
      | 2012 | 127,295 | 139,216 | +3.99% | +0.55% |
      | 2013 | 132,490 | 142,231 | +4.08% | +2.17% |
      | 2014 | 135,852 | 144,718 | +2.54% | +1.75% |
      | 2015 | 139,369 | 145,040 | +2.59% | +0.22% |
      | 2016 | 143,295 | 148,608 | +2.82% | +2.46% |
      | 2017 | 146,657 | 152,084 | +2.35% | +2.34% |
      | 2018 | 150,668 | 155,179 | +2.73% | +2.04% |
      | 2019 | 156,241 | 157,893 | +3.70% | +1.75% |
      | **2020** | **152,214** | **152,214** | **−2.58%** | **−3.60%** |
      | 2021 | 167,389 | 163,630 | +9.97% | +7.50% |
      | 2022 | 182,614 | 170,117 | +9.10% | +3.96% |
      | 2023 | 188,020 | 167,532 | +2.96% | **−1.52%** |
      | 2024 | N/A | N/A | n/a | n/a |

      > [!tip] 🗣️ In plain English
      > **Growth rate** is just this year divided by last year, minus 1. In 2021 nominal per capita grew 9.97% but real only 7.50%, and the gap of about 2.5 percentage points is **inflation**.
    related_terms: ["growth-rate", "inflation", "nominal-gdp", "real-gdp", "gdp-per-capita"]
  - id: "3"
    text: |
      **Step 3: Plot.** Plot nominal and real GDP per capita against the year on one chart.
    solution: |
      ![](/images/principles-of-macro/ex04-nominal-vs-real-gdp-pc.png)

      > [!tip] How to read the two curves
      > The two lines **start apart, meet at a single point in 2020, then cross**. To the left of 2020 real is above nominal (past output valued at higher 2020 prices); to the right nominal is above real (recent output valued at inflated current prices). The **vertical gap between the lines in any year is a pure price effect**: the accumulated inflation between that year and 2020.

      > [!tip] 🗣️ In plain English
      > The two lines meet in **2020**, the base year, and swap places there. The vertical gap between them is purely **prices**, so it shows how much inflation has built up between that year and 2020.
    related_terms: ["nominal-gdp", "real-gdp", "gdp-deflator", "inflation"]
  - id: "4a"
    text: |
      **Step 4a: Describe the trends** in nominal and real GDP per capita over 2000 to 2023.
    solution: |
      Both series rise strongly over the period, but **nominal climbs faster**, and the gap between them widens sharply after 2020. Nominal per-capita GDP marches upward almost continuously and accelerates after 2020. Real per-capita GDP, which strips out price effects, rises **more slowly and more unevenly**, because it captures only genuine increases in output per person.

      > [!warning] A rising level is not rising welfare
      > Nominal GDP per capita can rise every year even if people produce and consume *nothing more*, simply because prices went up. Real GDP per capita is the series for living standards, and it has several **negative years** (2001 to 2003, 2009, 2020, 2023) that the nominal series hides.

      > [!tip] 🗣️ In plain English
      > Both series rise over time, but **nominal** rises faster and pulls away after 2020. **Real** per capita rises more slowly and dips in 2001 to 2003, 2009, 2020 and 2023, so only the real series shows the bad years.
    related_terms: ["nominal-gdp", "real-gdp", "gdp-per-capita", "economic-growth"]
  - id: "4b"
    text: |
      **Step 4b: Why do the two series diverge?**
    solution: |
      The single distinction between them is **inflation**. Nominal GDP per capita embeds price changes: when prices rise, nominal rises even with flat output. Real GDP per capita holds prices at the 2020 base, so it isolates *quantity*, the true production and consumption of goods and services.

      $$
      \text{Nominal growth} \approx \text{Real growth} + \text{Inflation}
      $$

      > [!example] The widening post-2021 gap
      > Nominal per-capita growth of +9.97% (2021) and +9.10% (2022) far outran real growth of +7.50% and +3.96%. That wedge *is* the post-pandemic inflation surge: most of the 2022 headline growth was rising prices, not rising output. By 2023 real per-capita GDP **fell 1.52%** while nominal still rose 2.96%.

      > [!tip] Exam takeaway
      > When **nominal grows faster than real**, purchasing power lags income: unless wages keep pace with prices, real living standards stagnate or fall despite a rising nominal GDP.

      > [!tip] 🗣️ In plain English
      > The only difference between the two series is **inflation**, so nominal growth is roughly real growth plus inflation. In 2022 nominal grew 9.10% but real only 3.96%, so most of the rise was prices. In 2023 real fell 1.52% while nominal still rose 2.96%.
    related_terms: ["inflation", "gdp-deflator", "nominal-gdp", "real-gdp", "growth-rate"]
  - id: "4c"
    text: |
      **Step 4c: Tie the movements to historical events.**
    solution: |
      > [!info] 2008 to 2009: Global Financial Crisis
      > Real per-capita growth **slows and turns negative in 2009 (−0.64%)**. Israel was relatively resilient, so the dip is shallow compared with many advanced economies, but it is unmistakable in the real series.

      > [!info] 2020: COVID-19
      > Both series **contract and converge** (nominal −2.58%, real −3.60%). The convergence is mechanical (2020 is the base year), but the contraction is real: lockdowns cut output while inflation was low, so both fell together, the signature of a demand-driven recession with little price movement.

      > [!info] 2021 to 2023: Post-pandemic recovery and inflation
      > A **sharp nominal rebound** (+9.97%, +9.10%) reflects genuine recovery *plus* strong inflationary pressure. Real growth recovers more slowly (+7.50%, then +3.96%) and **turns negative in 2023 (−1.52%)**, with purchasing power lagging as inflation persists.

      > [!info] 2024
      > Nominal GDP keeps rising, but with population N/A the per-capita figure cannot be computed from this dataset. The source commentary suggests a plateau or mild decline in real per-capita GDP, consistent with persistent inflation and softer real growth.

      > [!tip] 🗣️ In plain English
      > The real series matches known events: a dip in 2009 (global financial crisis, −0.64%), a fall in 2020 (COVID, real −3.60%) and a post-pandemic inflation squeeze (real +7.50%, +3.96%, then −1.52% in 2023). For 2024 population is N/A, so no per-capita figure can be computed.
    related_terms: ["inflation", "real-gdp", "nominal-gdp", "economic-growth", "growth-rate"]
---

**Note on the source.** The source is a spreadsheet printout (data columns, formulas, a chart and short commentary), not a list of numbered questions. It labels the task as Steps 1 to 4 (with 4a to 4c), so the question wording here is the task as the printout describes it, restated from the vault note where the printout gives only a step label. The figures are Israel's nominal GDP, real GDP (base year 2020) and population, 2000 to 2024.

*Related: [[Rec_01-Nominal & Real GDP, Price Indices & GNP]]*
