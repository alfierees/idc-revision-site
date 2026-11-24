---
title: "Air-Led Project, Lottery Annuity, Efficient Portfolio, Indexed Loan & Bond Issue (2024 Take-Home)"
type: "past-paper"
status: "ai-solved"
exam: "Entrepreneurial Finance take-home exam (12 March 2024)"
course: "Financial Management & Finance"
instructor: "Tal Mofkadi and Lihi Cohen"
semester: 1
year: 2024
source_doc: "/papers/fundamentals-of-finance/2024-take-home-exam.pdf"
tags:
  - financial-management
  - past-paper
  - free-cash-flow
  - annuity
  - capital-market-line
  - security-market-line
  - real-interest-rate
  - mortgage
  - bond
  - effective-interest-rate
aliases:
  - "Finance Take-Home 2024"
  - "PP06 Finance"
  - "2024 Take-Home Exam"
subject: fundamentals-of-finance
in_scope: true
questions:
  - id: "q1"
    title: "Question 1 — Air-Led's AirFree: continue or cancel?"
    text: |
      - \$300M already spent on development over 3 years. Finishing the control unit costs **\$50M today** and takes a year.
      - Production starts in one year: machines cost **\$200M** at $t=1$, depreciated over 4 years, no salvage. Half is to be funded by a 4-year balloon loan of \$100M at 5%.
      - Production runs 4 years ($t=2$ to $t=5$). Revenue \$200M in the first production year, rising \$10M a year. Operating costs 50% of revenue.
      - The old air conditioners' operating profit falls by \$30M in the first production year and \$10M in the second.
      - Working capital at the start of each production year = 20% of that year's revenue, recovered at the end.
      - Tax 40%, $r = 13\%$, the firm has other profitable projects, cash flows at year end unless stated.

      Should Air-Led continue the project?
    solution: |
      > [!warning] AI-written answer, not official.


      Leave out the **\$300M sunk** development and the **loan** (financing). Include the lost profit on the old products (**cannibalisation**). Assume the \$50M development cost is expensed at $t=0$ and, since the firm is profitable, saves 40% tax at once.

      | ($M) | 0 | 1 | 2 | 3 | 4 | 5 |
      |---|---|---|---|---|---|---|
      | Revenue | | | 200 | 210 | 220 | 230 |
      | Operating costs (50%) | | | −100 | −105 | −110 | −115 |
      | Lost profit on old models | | | −30 | −10 | | |
      | Development cost | −50 | | | | | |
      | Depreciation (200/4) | | | −50 | −50 | −50 | −50 |
      | **EBIT** | −50 | | 20 | 45 | 60 | 65 |
      | Tax (40%) | +20 | | −8 | −18 | −24 | −26 |
      | **NOPAT** | −30 | | 12 | 27 | 36 | 39 |
      | Add back depreciation | | | 50 | 50 | 50 | 50 |
      | CAPEX | | −200 | | | | |
      | Working capital (balance 40, 42, 44, 46, then 0) | | −40 | −2 | −2 | −2 | +46 |
      | **FCF** | **−30** | **−240** | **60** | **75** | **84** | **135** |

      $$NPV_{13\%} = -30 - \frac{240}{1.13} + \frac{60}{1.13^2} + \frac{75}{1.13^3} + \frac{84}{1.13^4} + \frac{135}{1.13^5} = \boxed{-18.6\text{M}}$$

      **Cancel the project.** The \$300M already spent is irrelevant either way. If the \$50M were not tax-deductible the NPV would be about −38.6M, so the decision does not depend on that assumption.
    related_terms: ["free-cash-flow", "working-capital", "net-present-value", "opportunity-cost"]
  - id: "q2"
    title: "Question 2 — Lump sum or monthly lottery payments"
    text: |
      You win 10 million. Option I: an immediate 7 million (after 30% tax). Option II: 40,000 a month for 20 years, tax-free. The effective annual rate is 3%.

      **A.** Which do you prefer? **B.** What monthly payment would make you indifferent? **C.** At what effective annual rate would 40,000 a month make you indifferent? **D.** (independent) You can instead receive 10 million in a single payment in 20 years. The risk-free rate is 3% and the stock market returns 9%. What would you accept today instead?
    solution: |
      > [!warning] AI-written answer, not official.


      The question mixes $ and NIS; the answers treat all amounts as the same currency. Monthly rate: $1.03^{1/12} - 1 = 0.2466\%$.

      **A.** $PV_{II} = 40{,}000\,a_{\overline{240}|0.2466\%} = 7{,}238{,}855 > 7{,}000{,}000$. **Take the monthly payments.**

      **B.** $PMT = 7{,}000{,}000 / a_{\overline{240}|0.2466\%} = \boxed{38{,}680}$ a month.

      **C.** Solve $7{,}000{,}000 = 40{,}000\,a_{\overline{240}|i}$: $i = 0.2778\%$ a month, $(1.002778)^{12} - 1 = \boxed{3.38\%}$ a year. Above that rate the lump sum wins.

      **D.** A promised lottery payment is riskless, so discount at the **risk-free** 3%, not the stock market's 9% (that return compensates for risk this payment does not have): $10{,}000{,}000 / 1.03^{20} = \boxed{5{,}536{,}758}$. If the 30% tax also applied to this payment, it would be $7{,}000{,}000/1.03^{20} = 3{,}875{,}730$.
    related_terms: ["annuity", "present-value", "rate-conversion", "discount-rate"]
  - id: "q3"
    title: "Question 3 — Which portfolio is efficient?"
    text: |
      | Portfolio | $E(r)$ | SD |
      |---|---|---|
      | A | 10% | 14% |
      | B | 7% | 9% |

      Only one of A and B is efficient. $r_f = 3\%$; the market's SD is 10%.

      **A.** Which is efficient? **B.** Beta of each. **C.** Systematic and specific risk (in variance terms) of each. **D.** An investor with \$1,000 wants twice the market's expected return. How much must she put in the market portfolio?
    solution: |
      > [!warning] AI-written answer, not official.


      **A.** Efficient portfolios have the highest [[Sharpe Ratio]] (they lie on the CML). A: $(10-3)/14 = 0.50$; B: $(7-3)/9 = 0.44$. **A is efficient.** So the CML slope is 0.5 and $E(r_m) = 3\% + 0.5(10\%) = 8\%$.

      **B.** A is efficient, so $\beta_A = x_m = \sigma_A/\sigma_m = 1.4$ (check: $3\% + 1.4 \times 5\% = 10\%$). B from the SML: $7\% = 3\% + \beta_B(5\%) \Rightarrow \beta_B = 0.8$.

      **C.** Systematic variance $= \beta^2\sigma_m^2$, specific = total − systematic:

      | | Total $\sigma^2$ | Systematic | Specific |
      |---|---|---|---|
      | A | 0.0196 | $1.4^2(0.01) = 0.0196$ | 0 |
      | B | 0.0081 | $0.8^2(0.01) = 0.0064$ | 0.0017 |

      **D.** Target $16\% = 3\% + x_m(8\% - 3\%) \Rightarrow x_m = 2.6$. She puts **\$2,600** in the market portfolio, borrowing \$1,600 at the risk-free rate.
    related_terms: ["sharpe-ratio", "capital-market-line", "security-market-line", "beta", "systematic-risk", "idiosyncratic-risk"]
  - id: "q4"
    title: "Question 4 — Indexed vs nominal loan"
    text: |
      NIS 60,000 for 5 years, index-adjusted, real rate 4%. Expected inflation 3% a year. Actual inflation: 4%, 2%, 3%, 4%, 5%.

      **A.** Nominal rate on the day of the loan. **B.** Cumulative inflation over the 5 years. **C.** Payments in the first 3 years if the loan is **nominal** with 5 equal nominal payments. **D.** Actual payments in the first 3 years if the loan is **indexed** with 5 payments equal in real value.
    solution: |
      > [!warning] AI-written answer, not official.


      **A.** Fisher: $(1.04)(1.03) - 1 = \boxed{7.12\%}$.

      **B.** $1.04 \times 1.02 \times 1.03 \times 1.04 \times 1.05 - 1 = \boxed{19.31\%}$.

      **C.** $PMT = 60{,}000 / a_{\overline{5}|7.12\%} = \boxed{14{,}680.49}$ in each of years 1 to 3 (and 4 and 5): fixed in money, whatever inflation turns out to be.

      **D.** Real payment $60{,}000 / a_{\overline{5}|4\%} = 13{,}477.63$, multiplied by the actual price level so far:
      - Year 1: $13{,}477.63 \times 1.04 = 14{,}016.73$
      - Year 2: $\times 1.04 \times 1.02 = 14{,}297.07$
      - Year 3: $\times 1.04 \times 1.02 \times 1.03 = 14{,}725.98$

      See [[Lesson_04-Inflation, Real Rates & Expected Inflation]] and [[Lesson_05-The Four Loan Types]].
    related_terms: ["fisher-equation", "real-interest-rate", "mortgage", "inflation"]
  - id: "q5"
    title: "Question 5 — Sizing a bond issue and its true cost"
    text: |
      On 1 January 2024 ABC issues a bond with face value $X: 2% annual coupon paid **quarterly**, face repaid on 31 December 2031 (8 years). Similar bonds yield 5.719%. ABC needs to raise $3,000,000, and pays a \$76,518 issue fee from its own equity.

      **A.** Face value? **B.** Effective annual borrowing rate including the fee? **C.** On 30 June 2025, just after a coupon, the YTM drops to 4.06% and ABC buys the bond back. Price? **D.** ABC's effective annual borrowing rate from 1 January 2024 to 30 June 2025?
    solution: |
      > [!warning] AI-written answer, not official.


      Treat the yields as effective annual rates. Quarterly: $1.05719^{1/4} - 1 = 1.40\%$; coupon $0.5\%$ of face per quarter, 32 quarters.

      **A.** Price per 1 of face $= 0.005\,a_{\overline{32}|1.4\%} + 1.014^{-32} = 0.76913$. $X = 3{,}000{,}000/0.76913 = \boxed{\$3{,}900{,}513}$.

      **B.** ABC nets $3{,}000{,}000 - 76{,}518 = 2{,}923{,}482$ and pays $19{,}502.57$ a quarter plus the face at the end. Quarterly IRR $1.490\%$, so $\boxed{6.09\%}$ a year.

      **C.** Quarterly yield $1.0406^{1/4} - 1 = 1.0\%$; 26 quarters left: $P = X\,[0.005\,a_{\overline{26}|1\%} + 1.01^{-26}] = \boxed{\$3{,}456{,}029}$.

      **D.** Cash flows: $+2{,}923{,}482$ at the start, six quarterly coupons of 19,502.57, and the $3{,}456{,}029$ buyback at quarter 6. Quarterly IRR $3.45\%$, so $\boxed{14.54\%}$ a year. Buying back after yields fell was expensive. (Without the fee: 12.55%.)
    related_terms: ["bond", "yield-to-maturity", "effective-interest-rate", "internal-rate-of-return"]
---

> Part of: [[Financial Management]] · 12-hour take-home exam in Excel (12 March 2024) · [question paper](/papers/fundamentals-of-finance/2024-take-home-exam.pdf)

> [!warning] AI-written answers, no official key
> No official solution was posted for this exam. Every answer below is **AI-written**: each number was recomputed in code, but check the reasoning before relying on it, especially where an assumption is flagged. Question 0 (the honesty statement in the spreadsheet) is left out.
