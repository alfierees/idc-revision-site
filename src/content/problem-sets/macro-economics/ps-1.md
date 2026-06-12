---
title: "PS1"
subject: macro-economics
source_doc: /papers/macro-economics/ps-1.pdf
tags:
  - macroeconomics
  - problem-set
  - gdp
  - value-added
  - real-vs-nominal
  - cpi
  - ppp
  - fisher-equation
ai_drafted: true
questions:
  - id: "setup"
    text: |
      Problem Set 1 — Macroeconomics I
    solution: |
      > Part of: [[Macro-Economics]]
      > Companion notes: [[Lec_01-Data Review]]
      > **Questions 1–4 for submission**; the rest are for the TA session.
    related_terms: []
  - id: "1"
    text: |
      Value Added (Phone Supply Chain)
    solution: |
      *[submission]*

      **Prices in Shekels:**

      | Stage | Pays | Receives |
      |---|---|---|
      | Chinese manufacturer | 500 (Vietnam intermediates) + 300 (China intermediates) | 1,700 from importer |
      | Israeli importer | 1,700 to manufacturer | 2,500 from retailer |
      | Israeli retailer | 2,500 to importer | 3,000 from consumer |

      **Tasks:**

      (a) Israeli **retailer's** value added?
      (b) Israeli **importer's** value added?
      (c) Chinese **manufacturer's** value added?
      (d) How much of the tablet's retail value shows up in **Israel's GDP** (value-added approach)? How much in **China's GDP**?
      (e) Where does the tablet appear in the **expenditure components** of Israel's GDP? How much of its retail value shows up in Israel's GDP via the expenditure approach?
      (f) Effect on Israel's **trade balance** with China? With Vietnam?

      > [!tip] Approach
      > Value added at each stage = sales price − cost of intermediates **bought at that stage**. See [[Lec_01-Data Review#Value added vs. final goods]].
    related_terms: ["gdp", "value-added"]
  - id: "2"
    text: |
      GDP Growth and the Deflator
    solution: |
      *[submission]*

      | Product | Year | Quantity | Price |
      |---|---|---|---|
      | Apples | 2010 | 8,000 kg | \$2/kg |
      | Apples | 2020 | 10,000 kg | \$4/kg |
      | Oranges | 2010 | 3,000 kg | \$6/kg |
      | Oranges | 2020 | 6,000 kg | \$3/kg |
      | Machines | 2010 | 100 | \$300 each |
      | Machines | 2020 | 110 | \$400 each |

      **Tasks:**

      (a) Growth rate of **nominal GDP** from 2010 to 2020?
      (b) Growth rate of **real GDP at 2010 prices**?
      (c) Growth rate of **real GDP at 2020 prices**?
      (d) GDP deflator in 2010 and 2020 using **2010 base year**?
      (e) GDP deflator in 2010 and 2020 using **2020 base year**?
      (f) Inflation rate (GDP deflator) implied by (d) and (e)?

      > [!tip] Which formula?
      > $\text{Deflator} = \frac{\text{Nominal GDP}}{\text{Real GDP}}$. The base year matters — see [[Lec_01-Data Review#Fixed-weight real GDP]].
    related_terms: ["gdp", "gdp-deflator", "real-vs-nominal", "inflation"]
  - id: "3"
    text: |
      CPI Inflation
    solution: |
      *[submission]*

      Using the Q2 data, assume **1,000 identical households**, each consuming the same basket. **Only fruit enters the CPI** (not machines).

      **Tasks:**

      (a) Price of the **2010 basket** in 2010? In 2020?
      (b) Price of the **2020 basket** in 2010? In 2020?
      (c) Inflation rate implied by (a) and (b)?
      (d) Why are the two inflation rates different?
      (e) Why do these differ from the **GDP-deflator** inflation rates in Q2?

      > [!tip] Key distinction
      > CPI uses a **fixed** consumption basket; the GDP deflator implicitly re-weights as quantities change. CPI also excludes capital goods like the machines. See [[Lec_01-Data Review#Differences between GDP deflator and CPI]].
    related_terms: ["cpi", "gdp-deflator", "inflation"]
  - id: "4"
    text: |
      Average Growth Rates: GDP vs. GDP per capita
    solution: |
      *[submission]*

      Download **PWT 11.0** from <https://www.rug.nl/ggdc/productivity/pwt/?lang=en>.

      Pick **any two countries**. For each, use:
      - `rgdpna` — Real GDP at constant 2017 national prices (mil. 2017 USD)
      - `pop` — Population (millions)

      Compute real GDP per capita = `rgdpna / pop`.

      **Tasks:**

      (i) Average growth rate of **GDP** (1990 → latest year) for each country?

      (ii) Average growth rate of **GDP per capita** (1990 → latest) for each?
      - Which is larger, GDP or GDP per capita growth? Why?
      - Which would you use to describe a country's growth experience to a non-economist? Briefly justify.

      (iii) Fill in the decade-by-decade table:

      | Period | Country 1 | Country 2 |
      |---|---|---|
      | 1990–1999 | | |
      | 2000–2009 | | |
      | 2010–2019 | | |

      Briefly comment on how sub-period rates differ from the full-sample rate.

      > [!tip] Formula
      > $\bar{g} = (y_t / y_0)^{1/t} - 1$. See [[Lec_01-Data Review#Average Growth Rates]].
    related_terms: ["gdp"]
  - id: "5"
    text: |
      PPP vs. Nominal Exchange Rates
    solution: |
      *(TA session)*

      **Given (invented numbers):**
      - China 2015: GDP per capita = 8,000 yuan; market rate = 8 yuan/USD.
      - Albania 2015: GDP per capita = 20,000 Lek; market rate = 4 Lek/USD.
      - Representative product: \$1 in USA, 4 yuan in China, 10 Lek in Albania.

      (a) Market-value GDP per capita in USD for each?
      (b) PPP exchange rate for each currency?
      (c) PPP GDP per capita for each?
      (d) Which country looks richer by (a)? By (c)? Explain the source of the difference.
      (e) One measurement problem with PPP exchange rates?

      See [[Lec_01-Data Review#Purchasing Power Parity (PPP)]].
    related_terms: ["purchasing-power-parity", "exchange-rates", "gdp"]
  - id: "6"
    text: |
      Quarterly vs. Annualised Growth
    solution: |
      *(TA session)*

      Go to <https://fred.stlouisfed.org>, find quarterly real GDP. Use **2020 Q2 and 2020 Q3** to compute growth.

      When 2020 Q3 was released, the headline was ~**33% GDP growth**. Is this the same as your calculation? Explain.

      > [!tip] Hint
      > The headline is an **annualised** rate. US BEA reports quarter-on-quarter growth as $(1+g_q)^4 - 1$, while the direct calculation gives just $g_q$.
    related_terms: ["gdp"]
  - id: "7"
    text: |
      CPI vs. GDP Deflator with Real Data
    solution: |
      *(TA session)*

      From FRED, download (quarterly, seasonally adjusted):
      (i) CPI: Total All Items — US
      (ii) GDP Implicit Price Deflator

      (a) Compute inflation from each series.
      (b) Plot both on the same axes — any noticeable differences?
      (c) Compute the correlation coefficient. How similar are they? Why would you expect them to match or diverge?
      (d) Why is **seasonal adjustment** important? (Compare CPI with vs. without seasonal adjustment on a short window.)
    related_terms: ["cpi", "gdp-deflator", "inflation"]
  - id: "8"
    text: |
      Expected Real Rates from TIPS
    solution: |
      *(TA session)*

      $$\pi^e = i - \mathbb{E}[r]$$

      Where $i$ = nominal rate, $\mathbb{E}[r]$ = expected real rate, $\pi^e$ = expected inflation.

      (a) Why can a **regular (non-indexed)** US Treasury bond proxy the nominal rate, and a **TIPS** proxy the real rate?
      (b) Why must both bonds be issued by the **same borrower** with **similar maturities**?
      (c) On FRED, find the **5-, 10-, and 30-year Breakeven Inflation Rate**. Plot all three from the earliest available date.
      (d) Are they positively correlated?
      (e) Around the 2022 spike: why were **5-year** expectations higher than the others? Why was expected inflation **lower than realised** inflation? Why does long-term expected inflation hover near **2%**?

      See [[Lec_01-Data Review#Nominal and Real Interest Rates]].
    related_terms: ["fisher-equation", "inflation"]
---

## 📎 Related Notes

- [[Lec_01-Data Review]] — lecture material these questions test
- [[Lec_02-Consumption and Saving]] — uses the real interest rate $r$ from Q8
- [[Macro-Economics]] — subject hub
