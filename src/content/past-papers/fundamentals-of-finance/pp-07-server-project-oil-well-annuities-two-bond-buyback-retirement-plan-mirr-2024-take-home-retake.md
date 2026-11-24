---
title: "Server Project, Oil Well Annuities, Two-Bond Buyback, Retirement Plan & MIRR (2024 Take-Home Retake)"
type: "past-paper"
status: "ai-solved"
exam: "Entrepreneurial Finance take-home retake (19 March 2024)"
course: "Financial Management & Finance"
instructor: "Tal Mofkadi and Lihi Cohen"
semester: 1
year: 2024
source_doc: "/papers/fundamentals-of-finance/2024-take-home-exam-retake.pdf"
tags:
  - financial-management
  - past-paper
  - free-cash-flow
  - growing-annuity
  - growing-perpetuity
  - bond
  - perpetuity
  - effective-interest-rate
  - internal-rate-of-return
  - modified-internal-rate-of-return
  - profitability-index
aliases:
  - "Finance Take-Home Retake 2024"
  - "PP07 Finance"
  - "2024 Take-Home Retake"
subject: fundamentals-of-finance
in_scope: true
questions:
  - id: "q1"
    title: "Question 1 — Serverim's new server: recommendation"
    text: |
      - Equipment \$350M today, depreciated over 20 years, no salvage. Financed with an interest-only loan of \$250M at 3% for 4 years.
      - \$300M already spent on R&D. The project uses 10% of existing management (total cost \$100M); two new project managers cost \$2M a year in total.
      - Sales: 120 servers a year in the first 2 years, 110 a year in the next 3, at \$3M each. Operating costs 50% of revenue.
      - At the end of year 5 the whole project is sold for \$25M.
      - Working capital at the start of each production year = 15% of that year's revenue, recovered when the project is sold.
      - Existing servers' operating profit falls by \$100M in year 1, \$50M in year 2 and \$40M in years 3 to 5; the technology department says the years 3 to 5 fall would happen anyway.
      - Tax (corporate and capital) 25%. Cost of capital for similar risk 15%; otherwise the money goes into a riskier project earning 25%. The firm is profitable.
    solution: |
      > [!warning] AI-written answer, not official.


      **Exclude:** the \$300M R&D (sunk), the loan (financing), the management share (an allocation, no incremental cost), and the years 3 to 5 profit fall (it happens anyway). **Include:** the new managers (\$2M a year) and the years 1 and 2 cannibalisation. Discount at **15%**, the rate for this risk (the 25% project is riskier). Assumption: "120 servers in the first 2 years" means 120 in each year.

      | ($M) | 0 | 1 | 2 | 3 | 4 | 5 |
      |---|---|---|---|---|---|---|
      | Revenue | | 360 | 360 | 330 | 330 | 330 |
      | Operating costs (50%) | | −180 | −180 | −165 | −165 | −165 |
      | Cannibalisation | | −100 | −50 | | | |
      | New managers | | −2 | −2 | −2 | −2 | −2 |
      | Depreciation (350/20) | | −17.5 | −17.5 | −17.5 | −17.5 | −17.5 |
      | **EBIT** | | 60.5 | 110.5 | 145.5 | 145.5 | 145.5 |
      | Tax (25%) | | −15.125 | −27.625 | −36.375 | −36.375 | −36.375 |
      | **NOPAT** | | 45.375 | 82.875 | 109.125 | 109.125 | 109.125 |
      | Add back depreciation | | 17.5 | 17.5 | 17.5 | 17.5 | 17.5 |
      | CAPEX | −350 | | | | | |
      | Sale (25) + tax saving on the loss | | | | | | +84.375 |
      | Working capital (54, 54, 49.5, 49.5, 49.5, then 0) | −54 | 0 | +4.5 | 0 | 0 | +49.5 |
      | **FCF** | **−404** | **62.875** | **104.875** | **126.625** | **126.625** | **260.5** |

      Sale: book value \$350 - 5(17.5) = 262.5$; sold for 25, a loss of 237.5 that saves $25\% \times 237.5 = 59.375$ tax: $25 + 59.375 = 84.375$.

      $$NPV_{15\%} = -404 + \frac{62.875}{1.15} + \frac{104.875}{1.15^2} + \frac{126.625}{1.15^3} + \frac{126.625}{1.15^4} + \frac{260.5}{1.15^5} = \boxed{+15.1\text{M}}$$

      **Recommendation: continue the project**, though the margin is thin, so the decision is sensitive to the cannibalisation and sale-price estimates.
    related_terms: ["free-cash-flow", "working-capital", "opportunity-cost", "net-present-value", "depreciation"]
  - id: "q2"
    title: "Question 2 — Valuing and spending an oil well"
    text: |
      After 5 years of development, production starts at the beginning of year 6. Year-1 production 250 barrels, growing 5% a year for another 19 years; then constant for 10 years; then falling 10% a year for 25 years. Oil is \$100 a barrel, cash flows at year end, rate 8%.

      **a.** Value of the well. **b.** The constant amount you can draw at the end of each of the next 60 years. **c.** The first draw if draws grow 4% a year for 60 years. **d.** The same with 8% growth. **e.** Under plan (c), what is your loan or savings balance in 25 years?
    solution: |
      > [!warning] AI-written answer, not official.


      Cash flows: 25,000 at $t=6$, growing 5% to $t=25$ (20 payments, the last 63,173.75); 63,173.75 a year for $t=26$ to 35; then falling 10% a year for $t=36$ to 60 (first 56,856.38).

      **a.** $PV = \sum_t CF_t/1.08^t = \boxed{\$327{,}332}$ (sum the three stages, or use the growing-annuity formulas for each stage and discount).

      **b.** $327{,}332 / a_{\overline{60}|8\%} = \boxed{\$26{,}448}$ a year.

      **c.** Growing annuity: $327{,}332 = \frac{C}{0.08 - 0.04}\left[1 - \left(\frac{1.04}{1.08}\right)^{60}\right] \Rightarrow \boxed{C = \$14{,}611}$.

      **d.** With $g = r$ every draw has the same PV, $C/1.08$: $327{,}332 = 60\,C/1.08 \Rightarrow \boxed{C = \$5{,}892}$.

      **e.** Track the balance: $B_t = 1.08\,B_{t-1} + CF_t - 14{,}611(1.04)^{t-1}$. You borrow in years 1 to 5 (no oil yet), then the oil income outruns the draws. At $t = 25$: $\boxed{+\$145{,}210}$, a **savings** balance.
    related_terms: ["growing-annuity", "annuity", "present-value"]
  - id: "q3"
    title: "Question 3 — Two bonds issued in 2021 and bought back in 2024"
    text: |
      On 1 January 2021 ABC raises \$10,000,000 with two bonds. **Bond A:** a perpetual bond, 6% a year paid semi-annually. **Bond B:** face \$5,000,000, 4% a year paid quarterly, repaid on 31 December 2030. Similar bonds yield 5.095%.

      **a.** Amount raised from B. **b.** Face value of A. **c.** Price paid for B on 1 February 2024, when similar bonds yield 8%. **d.** Price paid for A on 31 March 2024, when the yield is 4%. **e.** The combined ex-post effective annual borrowing rate.
    solution: |
      > [!warning] AI-written answer, not official.


      Treat the yields as effective annual rates. 5.095% a year is 1.25% a quarter and 2.516% a half-year.

      **a.** B pays 50,000 a quarter for 40 quarters: $P_B = 50{,}000\,a_{\overline{40}|1.25\%} + 5{,}000{,}000/1.0125^{40} = \boxed{\$4{,}608{,}246}$.

      **b.** A must raise $10{,}000{,}000 - 4{,}608{,}246 = 5{,}391{,}754$. A perpetuity paying $3\%$ of face each half-year: $5{,}391{,}754 = 0.03X/0.025159 \Rightarrow \boxed{X = \$4{,}521{,}619}$.

      **c.** At 31 Dec 2023, 28 coupons remain; at 8% a year ($1.943\%$ a quarter) $B = 3{,}989{,}463$. One month later it has grown by $(1.01943)^{1/3}$: $\boxed{\$4{,}015{,}132}$ on 1 February (the full price, including accrued interest).

      **d.** At 31 Dec 2023: $0.03 \times 4{,}521{,}619 / 0.019804 = 6{,}849{,}588$ (4% a year is 1.98% a half-year). Three months later: $\times 1.04^{1/4}$ $= \boxed{\$6{,}917{,}080}$.

      **e.** Monthly cash flows: +10,000,000 in January 2021; B's 50,000 each quarter and A's 135,649 each half-year to December 2023; −4,015,132 in February 2024; −6,917,080 at the end of March 2024. The monthly IRR is $0.586\%$, so $\boxed{7.26\%}$ a year. B was cheap to retire (yields rose) but A was dear (yields fell).
    related_terms: ["bond", "perpetuity", "yield-to-maturity", "effective-interest-rate", "internal-rate-of-return"]
  - id: "q4"
    title: "Question 4 — Dan's early-retirement plan"
    text: |
      Dan is 20, retires at 50 and plans to live to 100. He withdraws at the end of each retirement year, from age 51 to 100 (50 withdrawals): \$88,000 at 51, growing 1% a year until 75 and 3% a year after that. He saves a constant amount at the end of each quarter for 20 years (to age 40). APR 9%, compounded quarterly.

      **a.** Amount needed at 50. **b.** Amount needed at 20. **c.** Quarterly deposit. **d.** At 75, right after the annual withdrawal, Dan switches to quarterly withdrawals until 100, growing at the equivalent quarterly rate. What is the quarterly withdrawal?
    solution: |
      > [!warning] AI-written answer, not official.


      Quarterly rate 2.25%; effective annual $R = 1.0225^4 - 1 = 9.308\%$. Reading: payments at 51 to 75 grow 1% a year (the one at 75 is 111,736.65); from 76 to 100 they grow 3% (the one at 76 is 115,088.75).

      **a.** Stage 1 at 50: $\frac{88{,}000}{R - 0.01}\left[1 - \left(\frac{1.01}{1+R}\right)^{25}\right] = 912{,}396$. Stage 2 valued at 75: $\frac{115{,}088.75}{R - 0.03}\left[1 - \left(\frac{1.03}{1+R}\right)^{25}\right] = 1{,}411{,}614$, which is $1{,}411{,}614/1.09308^{25} = 152{,}540$ at 50. Total $\boxed{\$1{,}064{,}936}$.

      **b.** $1{,}064{,}936 / 1.09308^{30} = \boxed{\$73{,}744}$.

      **c.** $73{,}744 = PMT \cdot a_{\overline{80}|2.25\%} \Rightarrow \boxed{PMT = \$1{,}996}$ a quarter.

      **d.** At 75 the remaining plan is worth 1,411,614. Quarterly growth $1.03^{1/4} - 1 = 0.742\%$; 100 quarterly withdrawals: $1{,}411{,}614 = \frac{W}{0.0225 - 0.00742}\left[1 - \left(\frac{1.00742}{1.0225}\right)^{100}\right] \Rightarrow \boxed{W = \$27{,}517}$ for the first quarter, then growing. (If "constant" means no growth: $1{,}411{,}614 / a_{\overline{100}|2.25\%} = \$35{,}609$.)
    related_terms: ["growing-annuity", "rate-conversion", "stated-rate", "future-value"]
  - id: "q5"
    title: "Question 5 — IRR, MIRR, NPV and a budget"
    text: |
      | ($ thousands) | 0 | 1 | 2 | 3 |
      |---|---|---|---|---|
      | A | (900) | 250 | 250 | 650 |
      | B | (1,000) | 540 | 370 | 300 |
      | C | (1,100) | – | – | 1,485 |

      Cost of capital 9%. **a.** Rank by IRR. **b.** Rank by MIRR. **c.** Mutually exclusive one-off projects: which? **d.** Mutually exclusive renewable projects: which? **e.** Budget \$1,500 thousand, partial projects allowed: which, and total NPV?
    solution: |
      > [!warning] AI-written answer, not official.


      | | IRR | MIRR (reinvest at 9%) | NPV at 9% | PI |
      |---|---|---|---|---|
      | A | 11.18% | 10.66% | 41.70 | 0.046 |
      | B | 11.39% | 10.38% | 38.49 | 0.038 |
      | C | 10.52% | 10.52% | 46.69 | 0.042 |

      **a.** IRR: **B > A > C**.

      **b.** MIRR: **A > C > B**. MIRR compounds the inflows to year 3 at 9% instead of at the IRR, which hurts B's early cash flows most. C has no interim flows, so its MIRR equals its IRR.

      **c.** One-off and mutually exclusive: the highest NPV, **C**.

      **d.** Renewable: compare equivalent annual values. All three last 3 years, so EAV ranks like NPV: **C** (EAV 18.45).

      **e.** Rank by PI: A (900) in full, then 600/1,100 of C. Total NPV $= 41.70 + \frac{600}{1{,}100}(46.69) = \boxed{67.17}$ thousand.
    related_terms: ["internal-rate-of-return", "modified-internal-rate-of-return", "net-present-value", "profitability-index", "equivalent-annual-cost"]
---

> Part of: [[Financial Management]] · 12-hour take-home retake in Excel (19 March 2024) · [question paper](/papers/fundamentals-of-finance/2024-take-home-exam-retake.pdf)

> [!warning] AI-written answers, no official key
> No official solution was posted for this exam. Every answer below is **AI-written**: each number was recomputed in code, but check the reasoning, especially where an assumption is flagged. Question 0 (the honesty statement) is left out.
