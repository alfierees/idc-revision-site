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

      > [!tip] 🗣️ In plain English
      > You're following one phone through its supply chain — Chinese maker → Israeli importer → Israeli retailer → consumer — to see how much **value each step adds** and where that shows up in each country's GDP.
      >
      > - **(a–c) value added:** Each company's value added is simply **what it sells for minus what it paid** for the parts/goods it bought. That's *its own* contribution, not the whole price.
      > - **(d) into GDP:** A country's GDP only counts value added **inside that country**, so you split the phone's value between Israel and China by where each bit of value was created.
      > - **(e) expenditure view:** The same phone shows up **once** in Israel's GDP as spending — the consumer's purchase (consumption) — with imported parts netted out so you don't double-count.
      > - **(f) trade balance:** Buying parts/phones from China and Vietnam counts as **imports**, which push the trade balance toward deficit — work out the effect with each country.

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

      > [!tip] 🗣️ In plain English
      > With a toy economy (apples, oranges, machines), the goal is to separate **real growth** (actually making more stuff) from growth that's just **higher prices**.
      >
      > - **(a) nominal GDP:** Value output at *each year's own* prices — this mixes real growth *and* inflation together.
      > - **(b–c) real GDP:** Hold prices **fixed** (first at 2010 prices, then at 2020 prices) so only *quantities* move. The growth number depends on which year's prices you freeze.
      > - **(d–e) the deflator:** The GDP deflator = nominal ÷ real. It's the economy-wide **price level**, and its value depends on the base year you chose.
      > - **(f) inflation:** Inflation is just **how much that deflator rose** between the two years.

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

      > [!tip] 🗣️ In plain English
      > This measures inflation the way it's done for **households** — with a **fixed shopping basket** (here, fruit only; machines don't count because families don't buy them).
      >
      > - **(a–b) price the baskets:** Work out what the 2010 basket and the 2020 basket each cost, at both years' prices.
      > - **(c) inflation:** It's just **how much the basket's cost went up**.
      > - **(d) why two answers:** The 2010 and 2020 baskets give *different* inflation because people **buy different amounts** as prices change (they switch away from what got dearer).
      > - **(e) vs the deflator:** CPI **fixes** the basket and **leaves out** capital goods like machines, whereas the GDP deflator re-weights automatically and covers **everything produced** — so the two inflation numbers don't match.

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

      > [!tip] 🗣️ In plain English
      > Using **real data** (the Penn World Table), you compare a country's **total** growth with its growth **per person** — the difference is what tells you about living standards.
      >
      > - **(i–ii) total vs per head:** Total GDP growth counts the whole economy; **GDP per capita** divides by population. Per-head growth is usually **lower** (population grows too) and is the honest way to describe whether people are actually **better off** — so it's the one to give a non-economist.
      > - **(iii) decade by decade:** Splitting the years into decades shows growth **wasn't steady** — some decades ran hot, others slow — which the single full-sample average hides.

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

      > [!tip] 🗣️ In plain English
      > This compares how rich countries look using the **market exchange rate** versus a **purchasing-power (PPP)** rate that adjusts for the fact that things cost less in some countries.
      >
      > - **(a) market view:** Convert each country's income at the everyday **market** exchange rate.
      > - **(b–c) PPP view:** Build a PPP rate from what a **representative product** costs locally, then re-convert income using that.
      > - **(d) why they differ:** Poorer countries usually look **richer under PPP**, because their local prices are low, so each unit of currency buys more than the market rate suggests.
      > - **(e) the catch:** PPP is **hard to measure** — a "representative product" is never exactly the same thing in every country.
    related_terms: ["purchasing-power-parity", "exchange-rates", "gdp"]
  - id: "6"
    text: |
      Quarterly vs. Annualised Growth
    solution: |
      *(TA session)*

      Go to <https://fred.stlouisfed.org>, find quarterly real GDP. Use **2020 Q2 and 2020 Q3** to compute growth.

      When 2020 Q3 was released, the headline was ~**33% GDP growth**. Is this the same as your calculation? Explain.

      > [!tip] 🗣️ In plain English
      > The point is to see why a scary headline like "**33% growth**" *doesn't* mean the economy grew by a third in three months. The official figure is **annualised** — it compounds the quarter's growth as if that same pace kept up for a **full year** ($(1+g_q)^4-1$). The actual quarter-on-quarter number ($g_q$) is much smaller. Same reality, two very different-looking numbers.

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

      > [!tip] 🗣️ In plain English
      > You download the two main **inflation gauges** — the household CPI and the economy-wide GDP deflator — and check how alike they really are.
      >
      > - **(a–b) compute & plot:** Turn each price series into an inflation rate and put them on the **same chart** to eyeball the differences.
      > - **(c) correlation:** Measure how tightly they move together — **high, but not identical**, because they cover different baskets of goods.
      > - **(d) seasonal adjustment:** Prices swing in **predictable within-year patterns** (holidays, harvests). Adjusting for them strips out that noise so you see the **true underlying trend**.
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

      > [!tip] 🗣️ In plain English
      > This backs out what markets **expect inflation to be** by comparing two bonds: an ordinary Treasury (which pays a **nominal** rate) and an inflation-protected one, TIPS (which pays a **real** rate). The gap between them is the market's expected inflation — the "**breakeven**" rate.
      >
      > - **(a–b) why it works:** A normal bond's yield includes expected inflation; a TIPS strips inflation out, so it shows the real rate. Subtract to get expected inflation. They must be the **same issuer and maturity** so the *only* difference is the inflation protection.
      > - **(c–e) reading the data:** Plot expected inflation over 5, 10 and 30 years; they mostly move **together**. In the 2022 spike, **short-term (5yr)** expectations jumped most (people saw high inflation as temporary), realised inflation still came in **higher** than expected, and **long-run** expectations stay pinned near **2%** because markets trust the Fed's target.
    related_terms: ["fisher-equation", "inflation"]
---

## 📎 Related Notes

- [[Lec_01-Data Review]] — lecture material these questions test
- [[Lec_02-Consumption and Saving]] — uses the real interest rate $r$ from Q8
- [[Macro-Economics]] — subject hub
