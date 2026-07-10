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

      > Part of: [[Macro-Economics]]
      > Companion notes: [[Lec_01-Data Review]]
      > **Questions 1–4 for submission**; the rest are for the TA session.
    solution: ""
    related_terms: []
  - id: "1"
    text: |
      **Value Added (Phone Supply Chain)** — *for submission*

      Consider the following prices (in Shekels) for a phone sold in Israel. The retail price is 3,000. Prior to selling the phone to the consumer, the retailer pays 2,500 to an importer. The importer's costs are 1,700 that are paid to the manufacturer in China. The Chinese manufacturer uses intermediate goods that were purchased in Vietnam for 500 and other intermediate goods that were purchased in China for 300.

      | Stage | Pays | Receives |
      |---|---|---|
      | Chinese manufacturer | 500 (Vietnam intermediates) + 300 (China intermediates) | 1,700 from importer |
      | Israeli importer | 1,700 to manufacturer | 2,500 from retailer |
      | Israeli retailer | 2,500 to importer | 3,000 from consumer |

      (a) What is the Israeli **retailer's** value added?

      (b) What is the Israeli **importer's** value added?

      (c) What is the Chinese **manufacturer's** value added?

      (d) How much of the tablet's retail value shows up in **Israel's GDP** according to the product (value-added) approach? How much in **China's GDP**?

      (e) Where does the tablet show up in the **expenditure components** of Israel's GDP? How much of its retail value shows up in Israel's GDP according to the expenditure approach?

      (f) If we count Israel's net exports (or trade balance) with each individual country, how does the tablet affect Israel's **trade balance with China**? With **Vietnam**?
    solution: |
      > [!tip] Approach
      > Value added at each stage = sales price − cost of intermediates **bought at that stage**. See [[Lec_01-Data Review#Value added vs. final goods]].

      ### (a) Retailer's value added

      The Israeli retailer sells the final product to the consumer for 3,000 after paying 2,500 to the importer:

      $$
      3{,}000 - 2{,}500 = 500
      $$

      > [!success] Answer
      > The retailer's value added is **500 Shekels**.

      ### (b) Importer's value added

      The importer sells to the retailer for 2,500 and pays 1,700 to the manufacturer:

      $$
      2{,}500 - 1{,}700 = 800
      $$

      > [!success] Answer
      > The importer's value added is **800 Shekels**.

      ### (c) Manufacturer's value added

      Value added of the Chinese manufacturer is the sale price minus intermediate costs paid to **both** sellers (Vietnam and China):

      $$
      1{,}700 - 500 - 300 = 900
      $$

      > [!success] Answer
      > The manufacturer's value added is **900 Shekels**.

      > [!tip] 🗣️ In plain English
      > Each company's value added is simply **what it sells for minus what it paid** for the goods it bought in. That's *its own* contribution to the phone, not the whole price: retailer 500, importer 800, manufacturer 900.

      ### (d) Value-added approach: Israel vs China

      According to the value-added approach, Israeli GDP is the sum of the two values added *in Israel*:

      $$
      500 + 800 = 1{,}300
      $$

      For Chinese GDP we sum the values added *in China*: the manufacturer adds 900 and Chinese producers of the intermediate goods add 300:

      $$
      900 + 300 = 1{,}200
      $$

      > [!success] Answer
      > **1,300 Shekels** enters Israel's GDP; **1,200 Shekels** enters China's GDP.

      > [!tip] 🗣️ In plain English
      > A country's GDP only counts value added **inside that country** — so the phone's 3,000 retail value gets split by where each slice of value was created: 1,300 in Israel, 1,200 in China (the remaining 500 was created in Vietnam).

      ### (e) Expenditure approach

      According to the expenditure approach, the final product enters in **two places**:

      1. The final price to the consumer is a **positive** entry under **Consumption**: $+3{,}000$.
      2. Importing the phone contributes **negatively** to **Net Exports**: $-1{,}700$.

      Therefore:

      $$
      3{,}000 - 1{,}700 = 1{,}300
      $$

      > [!success] Answer
      > The tablet appears as **+3,000 in consumption** and **−1,700 in net exports (imports)**, so **1,300 Shekels** enters Israel's GDP — exactly matching the value-added approach in (d).

      > [!tip] 🗣️ In plain English
      > Looked at as spending, the phone shows up as the consumer's 3,000 purchase, but the 1,700 import cost is netted out so Israel doesn't claim value created in China. Both accounting routes land on the same 1,300.

      ### (f) Bilateral trade balances

      The tablet affects the trade balance with **China**: a trade deficit (imports > exports) of **1,700**.

      There is **no direct trading with Vietnam**, so there is **no effect** on Israel's trade balance with Vietnam. The trade balance between *China and Vietnam* is affected, but all of that is already accounted for in the price at which the manufacturer sells to the importer.

      This also alludes to a broader point: a country's trade balance should really be looked at **as an aggregate** (how it stands versus the rest of the world), not bilaterally.

      > [!tip] 🗣️ In plain English
      > Israel only bought from China, so only the Israel–China balance moves (a 1,700 deficit). The Vietnamese parts are China's problem — they're already baked into China's 1,700 price — which is why economists prefer looking at the trade balance with the whole world rather than country by country.
    related_terms: ["gdp", "value-added"]
  - id: "2"
    text: |
      **GDP Growth and the Deflator** — *for submission*

      Consider an economy that produces three products: apples, oranges, and machines. Production and price data are:

      | Product | Year | Quantity | Price |
      |---|---|---|---|
      | Apples | 2010 | 8,000 kg | \$2/kg |
      | Apples | 2020 | 10,000 kg | \$4/kg |
      | Oranges | 2010 | 3,000 kg | \$6/kg |
      | Oranges | 2020 | 6,000 kg | \$3/kg |
      | Machines | 2010 | 100 | \$300 each |
      | Machines | 2020 | 110 | \$400 each |

      (a) What is the growth rate of **nominal GDP** from 2010 to 2020?

      (b) What is the growth rate of **real GDP at 2010 prices**?

      (c) What is the growth rate of **real GDP at 2020 prices**?

      (d) What is the GDP deflator in 2010 and 2020 if you calculate real GDP based on **2010 prices**?

      (e) What is the GDP deflator in 2010 and 2020 if you calculate real GDP based on **2020 prices**?

      (f) What is the inflation rate (based on the GDP deflator) associated with the price levels of (d) and (e)?
    solution: |
      > [!tip] Which formula?
      > $\text{Deflator} = \frac{\text{Nominal GDP}}{\text{Real GDP}}$. The base year matters — see [[Lec_01-Data Review#Fixed-weight real GDP]].

      ### (a) Nominal GDP growth

      Value each year's output at that year's own prices:

      $$
      \text{Nominal GDP}_{2010} = 8{,}000 \times 2 + 3{,}000 \times 6 + 100 \times 300 = 64{,}000
      $$

      $$
      \text{Nominal GDP}_{2020} = 10{,}000 \times 4 + 6{,}000 \times 3 + 110 \times 400 = 102{,}000
      $$

      > [!success] Answer
      > Growth rate $= 102{,}000/64{,}000 - 1 = 0.594$, or **59.4%**.

      > [!tip] 🗣️ In plain English
      > Nominal GDP values each year's output at *that year's own* prices, so this 59.4% mixes real growth *and* inflation together.

      ### (b) Real GDP growth at 2010 prices

      $$
      \text{GDP}_{2010}^{\,2010\text{ prices}} = 64{,}000
      $$

      $$
      \text{GDP}_{2020}^{\,2010\text{ prices}} = 10{,}000 \times 2 + 6{,}000 \times 6 + 110 \times 300 = 89{,}000
      $$

      > [!success] Answer
      > Growth rate $= 89{,}000/64{,}000 - 1 = 0.391$, or **39.1%**.

      ### (c) Real GDP growth at 2020 prices

      $$
      \text{GDP}_{2010}^{\,2020\text{ prices}} = 8{,}000 \times 4 + 3{,}000 \times 3 + 100 \times 400 = 81{,}000
      $$

      $$
      \text{GDP}_{2020}^{\,2020\text{ prices}} = 102{,}000
      $$

      > [!success] Answer
      > Growth rate $= 102{,}000/81{,}000 - 1 \approx 0.259$, or **25.9%**.

      > [!tip] 🗣️ In plain English
      > Real GDP holds prices **fixed** so only *quantities* move — but the answer depends on which year's prices you freeze: 39.1% at 2010 prices vs 25.9% at 2020 prices. Both are lower than the 59.4% nominal number because inflation has been stripped out.

      ### (d) Deflator with 2010 as base year

      $$
      P^{GDP}_{2010} = \frac{64{,}000}{64{,}000} = 1 \qquad P^{GDP}_{2020} = \frac{102{,}000}{89{,}000} = 1.146
      $$

      ### (e) Deflator with 2020 as base year

      $$
      P^{GDP}_{2010} = \frac{64{,}000}{81{,}000} = 0.79 \qquad P^{GDP}_{2020} = \frac{102{,}000}{102{,}000} = 1
      $$

      > [!tip] 🗣️ In plain English
      > The deflator is just nominal GDP divided by real GDP — the economy-wide **price level**. It always equals 1 in the base year, and its other values depend on which base year you picked.

      ### (f) Inflation from the deflator

      Inflation is the % change in the price level. With **2010 as base year**:

      $$
      \pi = \frac{P_{2020} - P_{2010}}{P_{2010}} = \frac{1.146 - 1}{1} = 0.146 \;\; \text{or} \;\; 14.6\%
      $$

      With **2020 as base year**:

      $$
      \pi = \frac{P_{2020} - P_{2010}}{P_{2010}} = \frac{1 - 0.79}{0.79} = 0.266 \;\; \text{or} \;\; 26.6\%
      $$

      > [!success] Answer
      > Inflation is **14.6%** with a 2010 base year and **26.6%** with a 2020 base year.

      > [!tip] 🗣️ In plain English
      > Inflation is just how much the deflator rose over the decade — but because the deflator itself depends on the base year, so does the inflation figure. Same economy, two defensible answers.
    related_terms: ["gdp", "gdp-deflator", "real-vs-nominal", "inflation"]
  - id: "3"
    text: |
      **CPI Inflation** — *for submission*

      Continue with the same data as in Question 2. Now let's calculate Consumer Price Index inflation in the economy. Assume that there are **1,000 identical households** in the economy, and each of them consumes the same basket of consumption goods (i.e. **only the fruit, not the machines**, enter the CPI calculations).

      (a) Assume that the "representative consumption basket" is the one reflected by the **quantities of 2010**. What is the price of this basket in 2010? In 2020?

      (b) Assume that the "representative consumption basket" is the one reflected by the **quantities of 2020**. What is the price of this basket in 2010? In 2020?

      (c) What is the inflation rate associated with the prices in (a) and (b)?

      (d) Why are the inflation rates different?

      (e) What is the reason for the different inflation rates in this question relative to the inflation rates based on the GDP deflator?
    solution: |
      > [!tip] Key distinction
      > CPI uses a **fixed** consumption basket; the GDP deflator implicitly re-weights as quantities change. CPI also excludes capital goods like the machines. See [[Lec_01-Data Review#Differences between GDP deflator and CPI]].

      ### (a) The 2010 basket

      Per household, the representative basket is **8 kg of apples and 3 kg of oranges** (total quantities divided by 1,000 households).

      Cost in 2010:

      $$
      8 \times 2 + 3 \times 6 = 34
      $$

      Cost of the same basket in 2020:

      $$
      8 \times 4 + 3 \times 3 = 41
      $$

      ### (b) The 2020 basket

      The representative basket is **10 kg of apples and 6 kg of oranges**.

      Cost in 2010:

      $$
      10 \times 2 + 6 \times 6 = 56
      $$

      Cost in 2020:

      $$
      10 \times 4 + 6 \times 3 = 58
      $$

      > [!tip] 🗣️ In plain English
      > You price a fixed shopping basket at both years' prices. The 2010-style basket goes from 34 to 41; the 2020-style basket goes from 56 to 58.

      ### (c) Inflation rates

      With the 2010 basket:

      $$
      \pi = \frac{41}{34} - 1 = 0.206 \;\; \text{or} \;\; 20.6\%
      $$

      With the 2020 basket:

      $$
      \pi = \frac{58}{56} - 1 = 0.036 \;\; \text{or} \;\; 3.6\%
      $$

      > [!success] Answer
      > CPI inflation is **20.6%** using the 2010 basket and **3.6%** using the 2020 basket.

      > [!tip] 🗣️ In plain English
      > Inflation is just how much the basket's cost went up — and the answer swings wildly (20.6% vs 3.6%) depending on which basket you fix.

      ### (d) Why the rates differ

      When we **fix quantities**, we don't take into account the fact that the representative basket may change as well (due to tastes, new products, substitution away from goods that got more expensive, etc.). Here apple prices doubled while orange prices halved, so the relative weight of apples vs. oranges in the fixed basket drives the measured inflation.

      > [!tip] 🗣️ In plain English
      > People **change what they buy** as prices change — they shift toward what got cheaper. A fixed basket ignores that, so the 2010 basket (heavier in now-expensive apples relative to spending) shows much higher inflation than the 2020 basket.

      ### (e) Why CPI differs from the GDP deflator

      The CPI includes **consumer goods only**. Therefore, the CPI does not account for the price changes of **machines**, which have been significant in our data. The GDP deflator, by contrast, covers everything produced and implicitly re-weights as quantities change.

      > [!tip] 🗣️ In plain English
      > CPI fixes the basket and **leaves out** capital goods like machines; the GDP deflator re-weights automatically and covers **everything produced** — so the two inflation gauges don't match.
    related_terms: ["cpi", "gdp-deflator", "inflation"]
  - id: "4"
    text: |
      **Average Growth Rates: GDP vs. GDP per capita** — *for submission*

      The Penn World Table (PWT) is a database with information on various economic variables for more than 180 countries and over time. Its strength is that it is a serious attempt to have comparable figures across countries and over time.

      Download the recent version (11.0) from <https://www.rug.nl/ggdc/productivity/pwt/?lang=en>.

      Pick **any two countries** that you like. For each country use:
      - `rgdpna` — Real GDP at constant 2017 national prices (mil. 2017 USD)
      - `pop` — Population (millions)

      Divide real GDP by population, so that you have a series of real GDP per capita for each country.

      (i) What is the average growth rate of **GDP** for each of the two countries between 1990 and the latest year that you have (for most countries 2022 or 2023, but for some the most updated may be earlier)?

      (ii) What is the average growth rate of **GDP per capita** for each country between 1990 and the latest year?
      - Which growth rate is larger: GDP or GDP per capita? In case of a difference, why do you think it exists?
      - If you were asked to describe (to a friend or a relative) the growth experience of a country, would you use GDP or GDP per capita? Briefly explain.

      (iii) Now calculate the average growth rates of GDP per capita **by decade** for each country (see table below), and briefly describe how different these growth rates are relative to your calculations in part (ii).

      | Period | Country 1 | Country 2 |
      |---|---|---|
      | 1990–1999 | | |
      | 2000–2009 | | |
      | 2010–2019 | | |
    solution: |
      > [!tip] Formula
      > $\bar{g} = (y_t / y_0)^{1/t} - 1$. See [[Lec_01-Data Review#Average Growth Rates]].

      > [!info] Your numbers will differ
      > Results depend on which two countries you pick and the latest available year. The official solution uses **Israel and Canada** with data through 2019 — the method below is what matters.

      ### (i) Average GDP growth, 1990 to latest year

      From two data points and the number of periods between them, the average growth rate $g$ solves:

      $$
      y_{2019} = (1+g)^{29} \, y_{1990} \;\; \Longleftrightarrow \;\; g = \left( \frac{y_{2019}}{y_{1990}} \right)^{1/29} - 1
      $$

      Example (Israel's GDP): $344{,}039.438$ in 2019 and $101{,}372.5$ in 1990, so

      $$
      g = \left( \frac{344{,}039.438}{101{,}372.5} \right)^{1/29} - 1 = 0.043 \;\; \text{or} \;\; 4.3\%
      $$

      In the official example:

      | | GDP growth 1990–2019 | GDP per capita growth 1990–2019 |
      |---|---|---|
      | Canada | 2.28% | 1.21% |
      | Israel | 4.39% | 2.99% |

      > [!tip] 🗣️ In plain English
      > The "average growth rate" is the single steady rate that would carry the 1990 value to the latest value — you take the ratio, raise it to one over the number of years, subtract one.

      ### (ii) GDP per capita growth and which measure to use

      In both cases the growth rate of **GDP is larger** than that of GDP per capita, because both countries have **positive population growth**. GDP per capita is the ratio GDP/population: if both numerator and denominator grow, the fraction grows more slowly than the numerator alone.

      For describing a country's growth experience to a friend, the two measures report related but different things. GDP represents aggregate production; GDP per capita is related to **average income / standard of living**, so it's the better measure for describing how well-off people are. (As a side note: political parties in power typically choose to emphasise GDP growth, as it is typically larger…)

      > [!success] Answer
      > GDP growth exceeds GDP per capita growth whenever population is growing. Use **GDP per capita** to describe living standards to a non-economist.

      > [!tip] 🗣️ In plain English
      > Total GDP growth counts the whole economy; per-capita growth divides by a growing population, so it's smaller — and it's the honest way to describe whether people are actually **better off**.

      ### (iii) Decade-by-decade growth

      Use the same formula with $1/9$ in the exponent for each decade. In the official Israel–Canada example:

      | Period | Canada | Israel |
      |---|---|---|
      | 1990–1999 | 1.52% | 2.71% |
      | 2000–2009 | 0.62% | 0.75% |
      | 2010–2019 | 1.09% | 1.87% |

      The immediate observation: the long-term average **masks substantial heterogeneity** across sub-periods. For these countries, the 2000s show slow growth in Israel (dot-com bust plus the second Intifada), while the 2010s look better in Israel relative to Canada, partly because Israel was hurt less by the global financial crisis.

      > [!tip] 🗣️ In plain English
      > Splitting the years into decades shows growth **wasn't steady** — some decades ran hot, others slow — which the single full-sample average hides. Your story will depend on your countries' own crises and booms.
    related_terms: ["gdp"]
  - id: "5"
    text: |
      *(TA session)*

      **PPP vs. Nominal Exchange Rates** — all numbers in this example are invented.

      Assume that in 2015 China's GDP per capita was 8,000 yuan, and that the market exchange rate between the yuan and the U.S. dollar was 8 yuan per dollar.

      Assume that in the same year Albania's GDP per capita was 20,000 Albanian Lek (that's the name of the currency) and the U.S. dollar was traded for 4 Lek per dollar.

      Also assume that a representative product costs \$1 in the US, 4 yuan in China, and 10 Lek in Albania.

      (a) What is the market value of China's GDP per capita in U.S. dollars? What is the market value of Albania's GDP per capita in US dollars?

      (b) What is the "purchasing power exchange rate" between the yuan and the U.S. dollar? Between the Albanian Lek and the U.S. dollar?

      (c) What is China's PPP GDP per capita? What is Albania's PPP GDP per capita?

      (d) Which country looks richer according to the calculation in part (a)? And according to part (c)? Explain the source of the difference and why it is usually better to use the PPP measure rather than the nominal one.

      (e) Give one example of a measurement problem when calculating the PPP exchange rate.
    solution: |
      > [!tip] Approach
      > See [[Lec_01-Data Review#Purchasing Power Parity (PPP)]].

      ### (a) Market-value GDP per capita

      Nominal GDP in dollars is local-currency GDP divided by the market exchange rate:

      $$
      GDP^{nom}_{CH} = \frac{8{,}000}{8} = \$1{,}000 \qquad GDP^{nom}_{AL} = \frac{20{,}000}{4} = \$5{,}000
      $$

      > [!tip] 🗣️ In plain English
      > Converting at the everyday market exchange rate, Albania looks five times richer than China.

      ### (b) PPP exchange rates

      The "purchasing power exchange rate" is the price ratio (in local currency) of the representative product in the two countries:

      $$
      e^{pp}_{CH} = \frac{P_{yuan}}{P_{\$}} = \frac{4}{1} = 4 \qquad e^{pp}_{AL} = \frac{P_{Lek}}{P_{\$}} = \frac{10}{1} = 10
      $$

      ### (c) PPP GDP per capita

      Divide local-currency GDP by the PPP exchange rate:

      $$
      GDP^{ppp}_{CH} = \frac{8{,}000}{4} = \$2{,}000 \qquad GDP^{ppp}_{AL} = \frac{20{,}000}{10} = \$2{,}000
      $$

      > [!tip] 🗣️ In plain English
      > The PPP rate asks "how much local currency buys what \$1 buys in the US?" — 4 yuan or 10 Lek. Re-converting incomes at those rates, the two countries turn out to be **equally rich**: \$2,000 each.

      ### (d) Which looks richer, and why the difference

      **Albania looks much richer** according to the nominal calculation ($\$5{,}000$ vs $\$1{,}000$), but the countries are **equal** in terms of PPP GDP per capita.

      The reason is that the nominal exchange rate does not (or usually does not) account for **differences in purchasing power** between countries. If we have a well-defined basket of goods, what we really want to know is *how many baskets GDP can buy*. The PPP measure corrects for that and provides a comparable measure — the numbers in (c) allow a meaningful comparison, while those in (a) don't.

      > [!success] Answer
      > Nominal: Albania looks richer. PPP: they are equal. PPP is better because it measures what income can actually **buy** locally.

      > [!tip] 🗣️ In plain English
      > Things are cheap in China and dear in Albania (relative to their market exchange rates), so the market-rate comparison is misleading. Once you adjust for local prices, the apparent gap vanishes entirely.

      ### (e) A measurement problem with PPP

      It is hard to come up with a **unified consumption basket across countries** — a typical Chinese person does not consume the same goods as a typical Albanian or American. (Moreover, it is hard to find a representative consumption basket even *within* an economy.)

      > [!tip] 🗣️ In plain English
      > PPP is hard to measure because a "representative product" is never exactly the same thing — or equally representative — in every country.
    related_terms: ["purchasing-power-parity", "exchange-rates", "gdp"]
  - id: "6"
    text: |
      *(TA session)*

      **Quarterly vs. Annualised Growth** — growth rates in the data and how they are reported.

      Go to <https://fred.stlouisfed.org> and search for real GDP, so that you can see the quarterly real gross domestic product series for the US. Use the data points for the **second quarter of 2020** and the **third quarter of 2020** to calculate the growth rate.

      When the data on GDP growth for the third quarter of 2020 was released, the "headline number" reported was around **33% GDP growth**. Is this identical to your calculation? Explain.
    solution: |
      > [!tip] Hint
      > The headline is an **annualised** rate. US BEA reports quarter-on-quarter growth as $(1+g_q)^4 - 1$, while the direct calculation gives just $g_q$.

      ### Working

      From the FRED series, the quarterly growth rate between 2020 Q2 and 2020 Q3 is:

      $$
      \frac{18{,}560.774}{17{,}258.205} - 1 = 0.075 \;\; \text{or} \;\; 7.5\%
      $$

      This is **not** identical to the headline. Reported numbers are usually **annualised**, meaning the assumption is that the quarterly rate persists for a full year:

      $$
      g_{annual} = (1 + g_{quarterly})^4 - 1 = (1 + 0.075)^4 - 1 = 0.335 \;\; \text{or} \;\; 33.5\%
      $$

      > [!success] Answer
      > No — the direct quarter-on-quarter growth is about **7.5%**; the ~33% headline is the **annualised** version of that same number.

      Remark: looking at the 2020 Q2 values, the same logic explains the earlier "conclusion" that the US economy experienced negative GDP growth of over 30%.

      > [!tip] 🗣️ In plain English
      > The scary "33% growth" headline doesn't mean the economy grew by a third in three months. Officials compound the quarter's 7.5% as if it kept up for a whole year. Same reality, two very different-looking numbers — and the "-30%" crash headline a quarter earlier was the same trick in reverse.
    related_terms: ["gdp"]
  - id: "7"
    text: |
      *(TA session)*

      **CPI vs. GDP Deflator with Real Data** — related to Questions 2 and 3, but with real data.

      The Federal Reserve Bank of St. Louis maintains a data source called FRED, with a lot of macro data for the US and other countries: <https://fred.stlouisfed.org>

      Using FRED, download two data series: (i) **Consumer Price Index: Total All Items for the United States**; and (ii) **Gross Domestic Product: Implicit Price Deflator**. For both series, use quarterly and seasonally adjusted data, starting from the earliest date possible.

      (a) Download the data and calculate the inflation rate based on CPI and the inflation rate based on the GDP deflator.

      (b) Plot the two inflation rates (time on the x-axis, the index on the y-axis). Are there any noticeable differences?

      (c) Compute the correlation coefficient between the two inflation series. How similar are they? Explain why you would expect them to be similar or different. (To calculate the correlation you must use the same time period for both series.)

      (d) Explain why it is important to use **seasonally adjusted** data when calculating inflation rates. (To illustrate, search for Consumer Price Index for All Urban Consumers: All Items — available with and without seasonal adjustment — and zoom in on a short period of a few years.)
    solution: |
      ### (a)–(b) Inflation rates and the plot

      Compute the inflation rate as the percentage change of each index between consecutive quarters, then plot both series on the same axes. (The official solution's detailed calculations are in an attached Excel file — the method is what matters.)

      The two lines track each other closely over the whole post-1960 sample, but the CPI series is visibly **more volatile**, with larger spikes (e.g. the 1970s oil shocks, 2008, and 2021–22).

      > [!tip] 🗣️ In plain English
      > Turn each price index into a quarter-on-quarter % change and put both on one chart: they tell the same broad inflation story, but the CPI line jumps around more.

      ### (c) Correlation

      The correlation coefficient between the two inflation series is about **0.85** — highly correlated, but not perfectly.

      This is consistent with Question 3(e): the CPI focuses **only on consumption goods**, while the GDP deflator measures the prices of everything produced. They share most of their movement but cover different baskets.

      > [!success] Answer
      > Correlation ≈ **0.85**: very similar, not identical, because the CPI covers consumer goods only while the deflator covers all domestic production.

      > [!tip] 🗣️ In plain English
      > The two gauges move together (correlation about 0.85) but can't match exactly — they're pricing different collections of goods.

      ### (d) Why seasonal adjustment matters

      The not-seasonally-adjusted series has more variation. A classic example: nominal prices tend to **fall in the US around the holiday season (Nov–Dec)** — on a zoomed-in FRED chart the unadjusted line usually slopes down at the end of each year. It is important to isolate these repeated within-year patterns so we can see the **true trend** in prices. The same idea applies to other series: if consumption rises around holidays every year, we don't want to mix that with business-cycle data and declare an "expansion".

      > [!tip] 🗣️ In plain English
      > Prices swing in **predictable within-year patterns** (holiday sales, harvests). Seasonal adjustment strips out that recurring noise so a December dip doesn't get mistaken for deflation.
    related_terms: ["cpi", "gdp-deflator", "inflation"]
  - id: "8"
    text: |
      *(TA session)*

      **Expected Real Rates from TIPS**

      In class we described the reasoning behind the equation for the expected real interest rate:

      $$
      \mathbb{E}[r] = i - \pi^e
      $$

      where $\mathbb{E}[r]$ is the expected real interest rate, $i$ is the nominal interest rate, and $\pi^e$ is expected inflation.

      Sometimes it is useful to use data on market prices to calculate the expected inflation according to financial markets. In principle, this can be done by rearranging the equation:

      $$
      \pi^e = i - \mathbb{E}[r]
      $$

      If we have market prices for the nominal and expected real rate, the calculation is easy. One such price involves indexed vs. non-indexed government bonds. In the US, the Treasury issues "regular" bonds that are not indexed, as well as "Treasury Inflation-Protected Securities" (TIPS).

      (a) Explain why a regular bond can be used as a proxy for the **nominal rate**, and the indexed bond as a proxy for **real rates**.

      (b) Explain why it is important that the two bonds are issued by the **same borrower** and have **similar maturities**.

      (c) Go to <https://fred.stlouisfed.org> and search for the **5-year, 10-year, and 30-year Breakeven Inflation Rate** (three separate series). These are "…what market participants expect inflation to be in the next 5/10/30 years, on average." Plot the three series from the earliest available point.

      (d) Do the three appear to be positively correlated?

      (e) Focusing on the recent spike around 2022: why do you think the 5-year expectations are higher than the other two? Why do you think expected inflation is lower than what inflation was? Why do you think that over the longer term inflation is expected to be close to 2%?
    solution: |
      > [!tip] Approach
      > See [[Lec_01-Data Review#Nominal and Real Interest Rates]].

      ### (a) Why the two bonds proxy nominal and real rates

      The yield on a "regular" bond is in **nominal terms**, as it does not take into account any change in the price level. For example, if you pay \$97 to purchase a bond that pays \$100 in a year, the return is $100/97 - 1 \approx 3.09\%$, regardless of inflation.

      When you purchase TIPS, the **principal is adjusted by inflation** — up if inflation is positive, down in periods of deflation. You are therefore "protected" against inflation, and the return is in **real terms**.

      > [!tip] 🗣️ In plain English
      > A normal bond's yield silently includes expected inflation; a TIPS strips inflation out by adjusting your principal, so its yield is the real rate. Subtracting one from the other isolates expected inflation — the "breakeven" rate.

      ### (b) Same borrower, similar maturity

      Bond prices are determined by many factors, among which **risk** and **duration (maturity)** are very important. Comparing assets issued by the US government and a different entity (the Israeli government, a US corporation, etc.) does not necessarily reflect the same risk. Similarly, the risks of a one-year maturity differ from those of a five-year maturity. It is therefore useful to compare assets issued by the **same borrower** for the **same duration**, so that the *only* difference between them is the inflation indexation.

      > [!tip] 🗣️ In plain English
      > If the two bonds differed in issuer or maturity, their yield gap would mix inflation expectations with credit and duration risk. Matching both makes inflation protection the only difference.

      ### (c)–(d) The breakeven series and their correlation

      Plotting the 5-, 10-, and 30-year breakeven inflation rates from the earliest available point, the three lines move in the same direction over time and are **positively correlated**. In fact, the correlation between the 5-year and 10-year breakeven rates is **0.936**. (The 30-year series is monthly, while the 5- and 10-year are daily, so computing its correlation with the others is harder.)

      > [!tip] 🗣️ In plain English
      > Yes — the three horizons of expected inflation move almost in lockstep (5y vs 10y correlation about 0.94).

      ### (e) Reading the 2022 spike

      **Why 5-year > 10-year and 30-year:** expected *average* inflation over the next 5 years is higher than over 10 or 30. This makes sense if market participants expect inflation to remain high **for a while** but eventually "return to normal" over a longer horizon. (Note also the period around the 2008 financial crisis, when a relatively short *deflation* period was expected.)

      **Why expected inflation < realised inflation:** actual inflation during the spike came in higher than the breakevens implied. This makes sense: the breakeven reflects market participants' expectations that inflation would be **lower in the future** than it currently was.

      **Why long-term expectations sit near 2%:** the US has an inflation **target of 2%**, so it is not surprising that expectations for average inflation over the next 30 years are around 2%.

      > [!success] Answer
      > 5-year breakevens spiked highest because high inflation was seen as temporary; realised inflation exceeded expectations because markets bet on a quick decline; and long-run expectations hover near 2% because markets trust the Fed's target.

      > [!tip] 🗣️ In plain English
      > Markets saw the 2022 burst as a passing storm: near-term expectations jumped, actual inflation still overshot them, and 30-year expectations barely budged from the Fed's 2% anchor.
    related_terms: ["fisher-equation", "inflation"]
---

## 📎 Related Notes

- [[Lec_01-Data Review]] — lecture material these questions test
- [[Lec_02-Consumption and Saving]] — uses the real interest rate $r$ from Q8
- [[Macro-Economics]] — subject hub
