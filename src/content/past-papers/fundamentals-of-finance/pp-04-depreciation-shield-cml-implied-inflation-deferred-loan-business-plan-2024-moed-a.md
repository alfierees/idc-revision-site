---
title: "Depreciation Shield, CML, Implied Inflation, Deferred Loan & Business Plan (2024 Moed A)"
type: "past-paper"
status: "official-answers"
exam: "Financial Management & Finance, Moed A (2024)"
course: "Financial Management & Finance"
instructor: "Dr. Tal Mofkadi"
semester: 2
year: 2024
source_doc: "/papers/fundamentals-of-finance/2024-moed-a-solution.pdf"
tags:
  - financial-management
  - past-paper
  - depreciation
  - capital-market-line
  - real-interest-rate
  - minimum-variance-portfolio
  - amortization
  - effective-interest-rate
  - growing-annuity
  - bond
  - free-cash-flow
  - profitability-index
  - equivalent-annual-cost
aliases:
  - "Finance Moed A 2024"
  - "PP04 Finance"
  - "2024 Moed A"
subject: fundamentals-of-finance
in_scope: true
questions:
  - id: "q1"
    title: "Q1 — One more shekel of depreciation"
    text: |
      When the **annual** depreciation increases by one shekel, the cash flow in that year:
    options:
      - label: "a"
        text: |
          All of the answers are incorrect
        correct: false
        why: |
          The correct option is the one marked right above; this catch-all is wrong.
      - label: "b"
        text: |
          Decreases by one shekel
        correct: false
        why: |
          Treats depreciation as a cash cost; it is a non-cash expense.
      - label: "c"
        text: |
          Increases by more than one shekel
        correct: false
        why: |
          The gain is the tax saving only, a fraction of the shekel.
      - label: "d"
        text: |
          Decreases by less than one shekel
        correct: false
        why: |
          Depreciation reduces taxable profit, so cash flow goes up, not down.
      - label: "e"
        text: |
          Increases by less than one shekel
        correct: true
        why: |
          Depreciation is not a cash outflow; it only cuts tax, by $t_c \times 1 < 1$.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      $FCF = (EBIT)(1 - t_c) + Dep - \dots = (EBITDA - Dep)(1-t_c) + Dep = EBITDA(1-t_c) + t_c \cdot Dep$. So one more shekel of depreciation raises the cash flow by the tax rate $t_c$ (the depreciation **tax shield**), less than one shekel. See [[Lesson_06-Capital Budgeting & Free Cash Flow]].
    related_terms: ["depreciation", "free-cash-flow"]
  - id: "q2"
    title: "Q2 — SD of an efficient portfolio from the CML"
    text: |
      Two **efficient** portfolios: A has $E(r) = 16\%$, SD $5\%$; B has $E(r) = 13\%$, SD unknown. $E(r_m) = 10\%$ and $r_f = 4\%$. What is the SD of B?
    options:
      - label: "a"
        text: |
          4.15%
        correct: false
        why: |
          Does not lie on the CML through A.
      - label: "b"
        text: |
          3.25%
        correct: false
        why: |
          Does not lie on the CML through A.
      - label: "c"
        text: |
          3.75%
        correct: true
        why: |
          CML slope from A: $(16-4)/5 = 2.4$; B: $13 = 4 + 2.4\sigma_B \Rightarrow \sigma_B = 3.75\%$.
      - label: "d"
        text: |
          4.75%
        correct: false
        why: |
          Does not lie on the CML through A.
      - label: "e"
        text: |
          It is not possible to find the standard deviation of Portfolio B without data on the standard deviation of the market portfolio
        correct: false
        why: |
          Not needed: the efficient portfolio A already gives the CML slope.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      Efficient portfolios lie on one line (the CML), so they share its slope, the [[Sharpe Ratio]]: $\frac{16\% - 4\%}{5\%} = 2.4$. Then $13\% = 4\% + 2.4\,\sigma_B \Rightarrow \boxed{\sigma_B = 3.75\%}$. (Implied $\sigma_m = 6\%/2.4 = 2.5\%$.)
    related_terms: ["capital-market-line", "sharpe-ratio"]
  - id: "q3"
    title: "Q3 — Expected inflation from two zero-coupon bonds"
    text: |
      Two Israeli government zero-coupon bonds, face 100, 5 years: a **non-indexed** one priced 62.09 and an **index-linked** one priced 74.73. What is the expected annual inflation?
    options:
      - label: "a"
        text: |
          4.00%
        correct: false
        why: |
          The simple difference $10\% - 6\%$; the exact Fisher relation divides.
      - label: "b"
        text: |
          6.43%
        correct: false
        why: |
          Not consistent with 10% nominal and 6% real.
      - label: "c"
        text: |
          4.27%
        correct: false
        why: |
          Not consistent with 10% nominal and 6% real.
      - label: "d"
        text: |
          3.78%
        correct: true
        why: |
          Nominal $(100/62.09)^{1/5} - 1 = 10\%$, real $(100/74.73)^{1/5} - 1 = 6\%$; $1.10/1.06 - 1 = 3.78\%$.
      - label: "e"
        text: |
          3.27%
        correct: false
        why: |
          Not consistent with 10% nominal and 6% real.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      The non-indexed bond gives the **nominal** yield, $(100/62.09)^{1/5} - 1 = 10\%$; the indexed one the **real** yield, $(100/74.73)^{1/5} - 1 = 6\%$. By the [[Fisher Equation]]: $1 + \pi^e = 1.10/1.06 \Rightarrow \boxed{\pi^e = 3.78\%}$.
    related_terms: ["fisher-equation", "zero-coupon-bond", "inflation"]
  - id: "q4"
    title: "Q4 — The most an investor would put in the safer stock"
    text: |
      Stock A: $E(r) = 15\%$, SD $20\%$. Stock B: $E(r) = 25\%$, SD $40\%$. Correlation 0. An investor with 100,000 ILS will invest **at most** how much in A?
    options:
      - label: "a"
        text: |
          40,000 ILS
        correct: false
        why: |
          Not the minimum-variance weight.
      - label: "b"
        text: |
          33,333 ILS
        correct: false
        why: |
          Not the minimum-variance weight.
      - label: "c"
        text: |
          20,000 ILS
        correct: false
        why: |
          That is the MVP weight of B, not A.
      - label: "d"
        text: |
          80,000 ILS
        correct: true
        why: |
          The minimum-variance mix has $x_A = 0.4^2/(0.2^2 + 0.4^2) = 0.8$. More A than that is inefficient.
      - label: "e"
        text: |
          66,667 ILS
        correct: false
        why: |
          Not the minimum-variance weight.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      Holding more of the low-return asset than the [[Minimum Variance Portfolio]] lowers return **and** raises risk, so no rational investor goes past it. With $\rho = 0$: $x_A = \frac{\sigma_B^2}{\sigma_A^2 + \sigma_B^2} = \frac{0.16}{0.04 + 0.16} = 0.8$, i.e. at most **80,000 ILS** in A. See [[Lesson_08-Risk, Return & Diversification]].
    related_terms: ["minimum-variance-portfolio", "efficient-frontier"]
  - id: "q5"
    title: "Q5 — Principal in the third payment of a deferred loan"
    text: |
      ₪100,000 for 6 years at 10% a year, repaid in **5 equal annual instalments**; the first payment is deferred to the end of year 2. What is the principal component of the **third** payment?
    options:
      - label: "a"
        text: |
          19,820 ILS
        correct: false
        why: |
          That is the principal in the **second** payment.
      - label: "b"
        text: |
          18,610 ILS
        correct: false
        why: |
          Not a principal component of this schedule.
      - label: "c"
        text: |
          8,920 ILS
        correct: false
        why: |
          Not a principal component of this schedule.
      - label: "d"
        text: |
          16,529 ILS
        correct: false
        why: |
          Ignores the year of deferred interest.
      - label: "e"
        text: |
          21,801 ILS
        correct: true
        why: |
          Balance 110,000 at year 1; PMT 29,017.72; principal parts 18,017.72, 19,819.50, 21,801.44.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      Interest accrues in the deferral year: balance at $t=1$ is $110{,}000$. Payments at $t = 2..6$: $PMT = 110{,}000 / a_{\overline{5}|10\%} = 29{,}017.72$.

      | Payment | Interest | Principal | Balance after |
      |---|---|---|---|
      | 1 ($t=2$) | 11,000.00 | 18,017.72 | 91,982.28 |
      | 2 ($t=3$) | 9,198.23 | 19,819.50 | 72,162.78 |
      | 3 ($t=4$) | 7,216.28 | **21,801.44** | 50,361.34 |
    related_terms: ["mortgage", "amortization"]
  - id: "q6"
    title: "Q6 — Effective rate with opening and closing fees"
    text: |
      Loan of ₪50,000 for **10 months**: opening fee ₪1,000 at the start, APR 12% compounded monthly, single repayment of principal and interest at the end, closing fee ₪1,200 at the end. What is the effective annual rate?
    options:
      - label: "a"
        text: |
          Approximately 10.27%
        correct: false
        why: |
          Lower than the 12.68% the loan costs even without fees.
      - label: "b"
        text: |
          Approximately 12.45%
        correct: false
        why: |
          Roughly the cost without the fees.
      - label: "c"
        text: |
          Approximately 15.17%
        correct: false
        why: |
          Leaves out part of the fees.
      - label: "d"
        text: |
          Approximately 1.50%
        correct: false
        why: |
          A monthly-scale number, not annual.
      - label: "e"
        text: |
          Approximately 18.46%
        correct: true
        why: |
          Net 49,000 now, repay 56,431.11 in 10 months: 1.42% a month, 18.46% a year.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      Receive $50{,}000 - 1{,}000 = 49{,}000$. Repay $50{,}000 \times 1.01^{10} + 1{,}200 = 56{,}431.11$ after 10 months.

      $$i_{month} = \left(\frac{56{,}431.11}{49{,}000}\right)^{1/10} - 1 = 1.422\%, \qquad EAR = 1.01422^{12} - 1 = \boxed{18.46\%}$$
    related_terms: ["effective-interest-rate", "stated-rate"]
  - id: "q7"
    title: "Q7 — Lump sum equal to a declining salary"
    text: |
      Roy's 5-year contract pays ₪30,000 at the end of month 1, then **1% less each month**. At an effective annual rate of 4.91%, what lump sum today makes him indifferent?
    options:
      - label: "a"
        text: |
          Approximately ₪145,293
        correct: false
        why: |
          Far too small for 60 salaries starting at 30,000.
      - label: "b"
        text: |
          Approximately ₪1,220,111
        correct: true
        why: |
          Growing annuity with $g = -1\%$, 60 months, monthly rate 0.4%.
      - label: "c"
        text: |
          Approximately ₪920,889
        correct: false
        why: |
          Too small; discounts too hard or drops payments.
      - label: "d"
        text: |
          Approximately ₪2,846,926
        correct: false
        why: |
          Too large: even a salary growing 1% a month would be worth only about 2.15M.
      - label: "e"
        text: |
          Approximately ₪1,640,553
        correct: false
        why: |
          Too large: a level 30,000 for 60 months is worth only about 1.60M, and this salary declines.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      Monthly rate $1.0491^{1/12} - 1 = 0.4\%$. A [[Growing Annuity]] with $g = -1\%$, 60 payments:

      $$PV = \frac{30{,}000}{0.004 - (-0.01)}\left[1 - \left(\frac{0.99}{1.004}\right)^{60}\right] \approx \boxed{1{,}220{,}000}$$

      (1,220,035 with the exact monthly rate; the official 1,220,111 uses 0.4% exactly.)
    related_terms: ["growing-annuity", "rate-conversion"]
  - id: "q8"
    title: "Q8 — Two independent projects, no budget limit"
    text: |
      Project A: invest ₪56,000, receive ₪15,000 a year for 5 years. Project B: invest ₪32,000, receive ₪9,500 a year for 5 years. Cost of capital 8%, projects not mutually exclusive, no budget constraint. Which do you take?
    options:
      - label: "a"
        text: |
          Only Project A.
        correct: false
        why: |
          B also has a positive NPV.
      - label: "b"
        text: |
          Insufficient data to answer the question.
        correct: false
        why: |
          All the data needed for NPV is given.
      - label: "c"
        text: |
          Neither project.
        correct: false
        why: |
          Both NPVs are positive.
      - label: "d"
        text: |
          Only Project B.
        correct: false
        why: |
          A also has a positive NPV; with no budget limit take both.
      - label: "e"
        text: |
          Both projects.
        correct: true
        why: |
          NPV(A) = 3,890.65 > 0 and NPV(B) = 5,930.75 > 0.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      $a_{\overline{5}|8\%} = 3.9927$. $NPV_A = 15{,}000(3.9927) - 56{,}000 = 3{,}890.65$; $NPV_B = 9{,}500(3.9927) - 32{,}000 = 5{,}930.75$. Independent projects with no budget limit: take **every** positive-NPV project.
    related_terms: ["net-present-value"]
  - id: "q9"
    title: "Q9 — Holding-period return on a bond"
    text: |
      A ₪100,000 face bond pays 8% annually for 6 years; YTM at issue is 10%. You buy at issue and sell one year later **just before** the coupon, when the YTM is 8.5%. What is your annual return?
    options:
      - label: "a"
        text: |
          Negative yield of 12.3%
        correct: false
        why: |
          The yield fell, so the price rose: the return is positive.
      - label: "b"
        text: |
          Positive yield of 16.15%
        correct: true
        why: |
          Buy at 91,289.48; sell for 106,029.68 (98,029.68 after-coupon value plus the 8,000 coupon).
      - label: "c"
        text: |
          None of the above
        correct: false
        why: |
          The correct option is the one marked right above; this catch-all is wrong.
      - label: "d"
        text: |
          Positive yield of 14.03%
        correct: false
        why: |
          Leaves out part of the gain.
      - label: "e"
        text: |
          Negative yield of 18.56%
        correct: false
        why: |
          Wrong sign: falling yields raise bond prices.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      $P_0 = 8{,}000\,a_{\overline{6}|10\%} + 100{,}000/1.1^6 = 91{,}289.48$.
      One year later, 5 coupons remain at 8.5%; just **before** the coupon the seller also gets the 8,000: $P_1 = 8{,}000\,a_{\overline{5}|8.5\%} + 100{,}000/1.085^5 + 8{,}000 = 106{,}029.68$.
      Return $= 106{,}029.68/91{,}289.48 - 1 = \boxed{16.15\%}$. See [[Lesson_07-Bond Pricing]] (before vs after the coupon).
    related_terms: ["bond", "yield-to-maturity"]
  - id: "q10"
    title: "Q10 — Real return when prices fell"
    text: |
      Dana's non-indexed savings plan pays 4.5% for a year. The CPI is 106.5 at the deposit and 102.24 at year end. Which statement is correct?
    options:
      - label: "a"
        text: |
          The savings plan yielded a real return of 4.5% and a nominal return of 3.20%.
        correct: false
        why: |
          Swaps real and nominal.
      - label: "b"
        text: |
          The savings plan yielded a real return of 4.5% and a nominal return of 0.32%.
        correct: false
        why: |
          The plan is non-indexed: 4.5% is nominal.
      - label: "c"
        text: |
          The savings plan yielded a nominal return of 4.5% and a real return of 8.85%.
        correct: true
        why: |
          Inflation $102.24/106.5 - 1 = -4\%$; real $1.045/0.96 - 1 = 8.85\%$.
      - label: "d"
        text: |
          The savings plan yielded a nominal return of 4.5% and a real return of 0.48%.
        correct: false
        why: |
          Prices fell 4%, so the real return exceeds 4.5%.
      - label: "e"
        text: |
          The savings plan yielded a nominal return of 4.5% and a real return of 0.32%.
        correct: false
        why: |
          Treats deflation as inflation.
    solution: |
      > [!warning] AI-written working: the official file gives only the correct option.


      Inflation $= 102.24/106.5 - 1 = -4\%$ (deflation). The plan is not indexed, so 4.5% is **nominal**, and the real return is $\frac{1.045}{0.96} - 1 = \boxed{8.85\%}$: money gained value as prices fell.
    related_terms: ["real-interest-rate", "cpi", "fisher-equation"]
  - id: "bp"
    title: "Business plan (25 points) — New project with a loan, sunk R&D and an alternative use of funds"
    text: |
      - ₪100,000 has already been spent on R&D. The project lasts 5 years.
      - Investment ₪600,000, financed with a ₪400,000 loan at 4% (interest annual, principal at the end of year 5).
      - Depreciated over **3 years**, no salvage, but used for 5 years; sold for ₪50,000 at the end.
      - Revenue ₪150,000 in year 1, rising by ₪100,000 a year. Production costs 40% of revenue.
      - The project is charged ₪20,000 a year for existing management and ₪10,000 a year for factory space (the land has no alternative use).
      - Total working capital: 20,000 at $t=0$, 35,000 at $t=1$ to 4, 0 at $t=5$.
      - Cost of capital 15%. The money is currently in a riskier project earning 22%. Corporate tax 25%, capital-gains tax 20%; the company is profitable.

      **a.** (15 pts) Should the company invest?
      **b.** (10 pts) A retailer offers a fixed annual payment for 5 years (first in one year), subject to corporate tax, if the company drops the project. What is the minimum payment?
    solution: |
      **Official solution.** What to leave out and why: the R&D is **sunk**; the loan and its interest are **financing**; the management and factory charges are **allocations** with no incremental cost (the land has no alternative use). Discount at the project's **15%** (its risk), not the 22% of a riskier project.

      | | 0 | 1 | 2 | 3 | 4 | 5 |
      |---|---|---|---|---|---|---|
      | Sales | | 150,000 | 250,000 | 350,000 | 450,000 | 550,000 |
      | Cost of goods sold | | −60,000 | −100,000 | −140,000 | −180,000 | −220,000 |
      | Depreciation | | −200,000 | −200,000 | −200,000 | | |
      | **EBIT** | | −110,000 | −50,000 | 10,000 | 270,000 | 330,000 |
      | Tax (25%) | | +27,500 | +12,500 | −2,500 | −67,500 | −82,500 |
      | **NOPAT** | | −82,500 | −37,500 | 7,500 | 202,500 | 247,500 |
      | Add back depreciation | | 200,000 | 200,000 | 200,000 | | |
      | Investment in working capital | −20,000 | −15,000 | | | | +35,000 |
      | CAPEX | −600,000 | | | | | |
      | Proceeds from sale (after 20% tax on the 50,000 gain) | | | | | | +40,000 |
      | **FCF** | **−620,000** | **102,500** | **162,500** | **207,500** | **202,500** | **322,500** |

      $$NPV = -620 + \frac{102.5}{1.15} + \frac{162.5}{1.15^2} + \frac{207.5}{1.15^3} + \frac{202.5}{1.15^4} + \frac{322.5}{1.15^5} = \boxed{4{,}557.93}$$

      Positive, so **invest**.

      **b.** The payment must replace the project's NPV. After tax: $4{,}557.93 = \frac{PMT}{0.15}\left[1 - \frac{1}{1.15^5}\right] \Rightarrow PMT = 1{,}359.70$. It is taxed at 25%, so before tax $\frac{1{,}359.70}{0.75} = \boxed{1{,}812.93}$ a year.
    related_terms: ["free-cash-flow", "working-capital", "depreciation", "net-present-value", "opportunity-cost"]
  - id: "pe"
    title: "Project evaluation criteria (25 points) — Five projects, five decision rules"
    text: |
      | Project | 0 | 1 | 2 | 3 | 4 | 5 |
      |---|---|---|---|---|---|---|
      | A | −100 | 100 | 18 | | | |
      | B | −90 | 10 | 10 | 10 | 10 | 105 |
      | C | −80 | 20 | 20 | 20 | 20 | 20 |
      | D | −70 | 10 | 10 | 80 | | |
      | E | −10 | 1 | 17 | | | |

      Cost of capital 10%. **a.** IRR of each. **b.** One-off, not mutually exclusive, no budget limit: which? **c.** One-off and mutually exclusive: which? **d.** One-off, not exclusive, budget 150 with partial investment allowed. **e.** Mutually exclusive but renewable (A repeats every 2 years, B every 5, …): which?
    solution: |
      **Official solution.**

      | | IRR | NPV (10%) | PI = NPV/investment | Life $T$ | EAV = NPV/$a_{\overline{T}\vert 10\%}$ |
      |---|---|---|---|---|---|
      | A | 15.57% | 5.79 | 5.79% | 2 | 3.33 |
      | B | 11.99% | 6.90 | 7.66% | 5 | 1.82 |
      | C | 7.93% | −4.18 | −5.23% | 5 | −1.10 |
      | D | 14.29% | 7.46 | 10.66% | 3 | 3.00 |
      | E | 35.48% | 4.96 | 49.59% | 2 | 2.86 |

      **a.** IRR solves $0 = \sum_t CF_t/(1+IRR)^t$ (Excel `IRR`).

      **b.** Take every positive-NPV project: **A, B, D, E** (not C).

      **c.** Highest NPV: **D**.

      **d.** Rank by PI and fill the budget: E (10) and D (70) in full, then the remaining 70 into B, i.e. $70/90 = 77.78\%$ of B.

      **e.** Renewable projects with different lives: compare **EAV**. **A** is best (3.33).

      See [[Lesson_02-Perpetuities, NPV & IRR]] and [[Lesson_03-Rate Conversion, Effective Rates & EAC]].
    related_terms: ["internal-rate-of-return", "net-present-value", "profitability-index", "equivalent-annual-cost"]
---

> Part of: [[Financial Management]] · Moed A 2024 · [official solution file](/papers/fundamentals-of-finance/2024-moed-a-solution.pdf) (it contains the full questions)

> [!info] What is official here
> - **Multiple choice (Q1 to Q10):** the official file marks the correct option (it always lists it first; the options are shuffled here) but gives **no working**. The working and the reasons other options fail are **AI-written**; each one was recomputed and agrees with the official option.
> - **Business plan and project-evaluation questions:** the numbers are the **official** solution. The explanations around them are written for this site.
