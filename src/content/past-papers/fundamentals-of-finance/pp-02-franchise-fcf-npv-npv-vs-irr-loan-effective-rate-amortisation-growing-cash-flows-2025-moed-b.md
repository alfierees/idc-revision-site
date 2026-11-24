---
title: "Franchise FCF NPV, NPV vs IRR, Loan Effective Rate, Amortisation & Growing Cash Flows (2025 Moed B)"
type: "past-paper"
status: "official-solution"
exam: "Financing for Entrepreneurs, Moed B (2 April 2025)"
course: "Financial Management & Finance"
instructor: "Dr. Tal Mofkadi"
semester: 1
year: 2025
source_doc: "/papers/fundamentals-of-finance/2025-moed-b.pdf"
tags:
  - financial-management
  - past-paper
  - free-cash-flow
  - working-capital
  - opportunity-cost
  - bond
  - yield-to-maturity
  - internal-rate-of-return
  - effective-interest-rate
  - mortgage
  - separation-theorem
  - security-market-line
  - capital-market-line
aliases:
  - "Finance Moed B 2025"
  - "PP02 Finance"
  - "2025 Moed B"
subject: fundamentals-of-finance
in_scope: true
questions:
  - id: "q1"
    title: "Q1 — jPhone franchise: is it worthwhile? (25%)"
    text: |
      You own a profitable computer company and consider buying a 3-year franchise to import and sell jPhone phones. The franchise costs NIS 10 million, fully depreciated for tax over two years. You buy each device for NIS 2,000 and sell it at a profit of NIS 1,000.

      | Units | Year 1 | Year 2 | Year 3 |
      |---|---|---|---|
      | Purchases | 15,000 | 5,000 | 10,000 |
      | Sales | 9,000 | 7,000 | 14,000 |

      - The franchise is financed 70% equity and 30% loans (4% a year, mortgage-style repayment).
      - Maintenance costs NIS 150 per device a year, paid in cash at the start of each year for every device held that day.
      - A year ago you bought monitors at NIS 500 each, which normally sell at a 250% profit on cost. Each jPhone buyer will be offered a monitor for only NIS 750; a quarter of buyers are expected to take it. Monitor payments are always in cash.
      - Buying the franchise will cut your friend Mr. Fox's annual cash flow (he resells Camsung) by NIS 0.5 million a year.
      - Pear gives every new franchise a coupon worth NIS 1.5 million; you intend to pass it to Mr. Fox as compensation.
      - Receivables are 30% of sales from the start of each year; inventory is one third of the cost of purchases from the start of the year; payables are 10% of the cost of purchases from the start of the year.
      - Corporate tax 20%, capital-gains tax 15%. Cost of capital 7%.

      Is buying the franchise worthwhile? Explain fully.
    solution: |
      **Official solution** (NIS thousands).

      | | Year 0 | Year 1 | Year 2 | Year 3 |
      |---|---|---|---|---|
      | Sales | | 27,000 | 21,000 | 42,000 |
      | Cost of sales | | (30,000) | (10,000) | (20,000) |
      | Inventory holding cost | (900) | (600) | | |
      | Losses from screen sales | | (2,250) | (1,750) | (3,500) |
      | Mr. Fox's damage | | | | |
      | Gift from Pear | | | | |
      | Depreciation | | (5,000) | (5,000) | |
      | **Profit before tax** | (900) | (10,850) | 4,250 | 18,500 |
      | Tax (20%) | 180 | 2,170 | (850) | (3,700) |
      | **Profit after tax** | (720) | (8,680) | 3,400 | 14,800 |
      | Add back depreciation | | 5,000 | 5,000 | |
      | Investment in working capital | (15,100) | 6,467 | (8,633) | 17,267 |
      | Franchise acquisition | (10,000) | | | |
      | **Cash flow** | **(25,820)** | **2,787** | **(233)** | **32,067** |

      $$NPV = -25{,}820 + \frac{2{,}787}{1.07} - \frac{233}{1.07^2} + \frac{32{,}067}{1.07^3} = \boxed{2{,}756.51}$$

      Positive, so **buy the franchise**.

      The official notes behind each line:
      1. **Holding cost** (maintenance) is 0.15 per device held at the start of a year: 6,000 units at $t=0$ (the 15,000 bought less the 9,000 sold) and 4,000 at $t=1$, so 900 and 600.
      2. **Screens:** they normally sell for $500 \times 3.5 = 1{,}750$; selling at 750 loses 1,000 each. A quarter of device buyers take one: $25\% \times 9{,}000 \times 1{,}000 = 2{,}250$ thousand, then 1,750 and 3,500.
      3. **Mr. Fox's lost income** is not your cash flow: excluded.
      4. **The Pear coupon** is passed on to Mr. Fox, so its benefit nets out: excluded.
      5. **Depreciation** $= 10{,}000/2 = 5{,}000$ a year.
      6. **Working capital** (balance from the start of each year): inventory $\frac13$ of purchases (10,000, 3,333, 6,667), receivables 30% of sales (8,100, 6,300, 12,600), suppliers 10% of purchases (3,000, 1,000, 2,000). Balances 15,100, 8,633, 17,267, 0; the cash flows are the changes.

      The financing (70/30 and the 4% loan) is left out: financing is separated from the investment decision ([[Lesson_06-Capital Budgeting & Free Cash Flow]]).
    related_terms: ["free-cash-flow", "working-capital", "opportunity-cost", "net-present-value", "depreciation"]
  - id: "q2"
    title: "Q2 — Four bonds with the same risk (25%)"
    text: |
      These bonds have the same risk and have just been issued:

      | Series | Market price | Stated rate | Maturity (years) | Face value | Payments |
      |---|---|---|---|---|---|
      | A | 1,028 | 10% | 1 | 1,000 | yearly |
      | B | 4,590 | ? | 5 | 5,000 | yearly |
      | C | ? | 12% | 8 | 10,000 | every two years |
      | D | ? | 8% | infinity | 3,500 | yearly |

      **I.** The yield to maturity of each bond. **II.** The stated (coupon) rate of series B. **III.** The price of series C. **IV.** The price of series D.
    solution: |
      **Official solution.**

      **I.** Same risk, so every bond has the same yield. From A: $1{,}028 = \frac{1{,}100}{1+r} \Rightarrow \boxed{r = 7\%}$.

      **II.** $4{,}590 = \frac{C}{0.07}\left(1 - \frac{1}{1.07^5}\right) + \frac{5{,}000}{1.07^5} \Rightarrow C = 250$, so the coupon rate is $250/5{,}000 = \boxed{5\%}$.

      **III.** Payments every two years: the two-year rate is $1.07^2 - 1 = 14.5\%$, and each payment is $10{,}000 \times 12\% \times 2 = 2{,}400$ (four payments in 8 years):
      $$P = \frac{2{,}400}{0.145}\left(1 - \frac{1}{1.145^4}\right) + \frac{10{,}000}{1.145^4} = \boxed{12{,}740}$$

      **IV.** A perpetuity: $P = \frac{3{,}500 \times 8\%}{7\%} = \boxed{3{,}998}$ (rounded; exactly 4,000).

      See [[Lesson_07-Bond Pricing]] and [[Lesson_03-Rate Conversion, Effective Rates & EAC]].
    related_terms: ["bond", "yield-to-maturity", "coupon", "perpetuity", "rate-conversion"]
  - id: "mc1"
    title: "MCQ 1 — NPV vs IRR at three discount rates"
    text: |
      Three independent investments:

      | | 0 | 1 | 2 | 3 | IRR |
      |---|---|---|---|---|---|
      | A | −1,000 | 100 | 100 | 1,100 | 10% |
      | B | −700 | 400 | 300 | 200 | 15.6% |
      | C | −2,000 | 0 | 0 | 2,500 | ? |

      Claim 1: at a 5% cost of capital, the investment with the lowest IRR is also the most attractive. Claim 2: at 0%, all three have a positive NPV. Claim 3: at 20%, B is the most attractive. Which is correct?
    options:
      - label: "a"
        text: |
          Only claims 1 and 2 are true
        correct: true
        why: |
          At 5% C (IRR 7.7%, the lowest) has the highest NPV (159.6 vs 136.2 and 125.8); at 0% every NPV is positive; at 20% all three are negative, so none is attractive.
      - label: "b"
        text: |
          Only claims 1 and 3 are true
        correct: false
        why: |
          Claim 3 fails: at 20% even B has a negative NPV (−42.6), so it is not worth doing.
      - label: "c"
        text: |
          Only claims 2 and 3 are true
        correct: false
        why: |
          Claim 1 is true and claim 3 is false.
      - label: "d"
        text: |
          All the claims are true
        correct: false
        why: |
          Claim 3 is false.
      - label: "e"
        text: |
          All the claims are not true
        correct: false
        why: |
          Claims 1 and 2 are true.
    solution: |
      Official: only claims 1 and 2 are true; compute every NPV at each rate.

      | | NPV at 5% | NPV at 0% | NPV at 20% |
      |---|---|---|---|
      | A | 136.2 | 300 | −210.6 |
      | B | 125.8 | 200 | −42.6 |
      | C | 159.6 | 500 | −553.2 |

      C's IRR is $(2{,}500/2{,}000)^{1/3} - 1 = 7.7\%$, the lowest, yet at 5% it has the highest NPV: ranking by IRR misleads ([[Lesson_02-Perpetuities, NPV & IRR]]).
    related_terms: ["net-present-value", "internal-rate-of-return", "npv-profile"]
  - id: "mc2"
    title: "MCQ 2 — Effective rate of a balloon loan with two fees"
    text: |
      Loan of NIS 50,000 for 10 months: a NIS 1,000 processing fee on receipt, 12% a year nominal accrued monthly, principal and interest repaid in one payment at the end, and a NIS 1,200 termination fee at the end. Effective annual rate?
    options:
      - label: "a"
        text: |
          Approx. 10.27%
        correct: false
        why: |
          Below even the 12.68% the loan costs without fees.
      - label: "b"
        text: |
          Approx. 12.45%
        correct: false
        why: |
          Roughly the cost without the fees.
      - label: "c"
        text: |
          Approx. 15.17%
        correct: false
        why: |
          Leaves out part of the fees.
      - label: "d"
        text: |
          Approx. 18.46%
        correct: true
        why: |
          Net 49,000 now, repay 56,431 in 10 months: 1.42% a month, 18.46% a year.
      - label: "e"
        text: |
          All the answers are incorrect
        correct: false
        why: |
          Option d is the effective rate.
    solution: |
      Official: $0 = 49{,}000 - \frac{56{,}431}{(1+r_m)^{10}} \Rightarrow r_m = 1.42\%$, and $(1.0142)^{12} - 1 = \boxed{18.46\%}$.

      The repayment is $50{,}000 \times 1.01^{10} + 1{,}200 = 56{,}431$; you receive only $50{,}000 - 1{,}000 = 49{,}000$. (The same loan appears in the 2024 Moed A paper.)
    related_terms: ["effective-interest-rate", "stated-rate"]
  - id: "mc3"
    title: "MCQ 3 — Outstanding balance after the second payment"
    text: |
      A NIS 15,000 mortgage at 10% a year, repaid in 5 equal annual instalments starting in a year. What is the outstanding principal right after the **second** payment?
    options:
      - label: "a"
        text: |
          3,956 NIS
        correct: false
        why: |
          That is about the annual payment (3,957), not a balance.
      - label: "b"
        text: |
          6,867 NIS
        correct: false
        why: |
          That is the balance after the **third** payment.
      - label: "c"
        text: |
          9,000 NIS
        correct: false
        why: |
          Assumes equal principal of 3,000 a year; this is an equal-payment loan.
      - label: "d"
        text: |
          12,453NIS
        correct: false
        why: |
          Close to the balance after the first payment (12,543).
      - label: "e"
        text: |
          All the answers are incorrect
        correct: true
        why: |
          The balance after the second payment is 9,840, which is not listed.
    solution: |
      Official answer **e**. Payment $= 15{,}000 / a_{\overline{5}|10\%} = 3{,}957$.

      | Payment | Opening | Interest | Principal | Closing |
      |---|---|---|---|---|
      | 1 | 15,000 | 1,500 | 2,457 | 12,543 |
      | 2 | 12,543 | 1,254 | 2,703 | **9,840** |
      | 3 | 9,840 | 984 | 2,973 | 6,867 |

      After the second payment the balance is **9,840**, not among the options.
    related_terms: ["mortgage", "outstanding-balance", "amortization"]
  - id: "mc4"
    title: "MCQ 4 — The two-fund (separation) theorem"
    text: |
      The "two-fund theorem" (also called the separation theorem) states that:
    options:
      - label: "a"
        text: |
          Investing in government bonds (risk-free bonds) should be separated from investing in corporate bonds (risky bonds)
        correct: false
        why: |
          The theorem separates the choice of risky portfolio from the risky/riskless split, not bond types.
      - label: "b"
        text: |
          An investment examined by IRR and one examined by NPV must be separated; first the optimal rate of return for all assets is determined, then each investor chooses weights by NPV
        correct: false
        why: |
          Mixes in project-evaluation rules that have nothing to do with the theorem.
      - label: "c"
        text: |
          Expected return must be separated from standard deviation when investors make optimal investment decisions
        correct: false
        why: |
          Investors trade off the two together on the CML; they are not separated.
      - label: "d"
        text: |
          Stocks with high specific risk should be separated from stocks with low specific risk
        correct: false
        why: |
          Specific risk is diversified away; the theorem is not about sorting stocks.
      - label: "e"
        text: |
          The optimal portfolio of risky assets is independent of risk aversion and the same for everyone; first the market portfolio is determined, then each investor chooses the split between it and the risk-free asset
        correct: true
        why: |
          This is Tobin's separation theorem.
    solution: |
      Official: the definition of the separation theorem ([[Separation Theorem]], [[Lesson_09-Capital Market Line]]). Everyone holds the same risky portfolio (the market portfolio); risk aversion only sets how much of it to hold against the risk-free asset.
    related_terms: ["separation-theorem", "market-portfolio", "capital-market-line"]
  - id: "mc5"
    title: "MCQ 5 — YTM of a CPI-linked bond issued at par"
    text: |
      A two-year CPI-linked bond, face NIS 100, 4% nominal annual rate paid quarterly, issued at par. Its yield to maturity on the issue day?
    options:
      - label: "a"
        text: |
          3.96%
        correct: false
        why: |
          Below the coupon; a bond at par yields at least its coupon rate.
      - label: "b"
        text: |
          4%
        correct: false
        why: |
          That is the stated rate; quarterly compounding makes the effective yield higher.
      - label: "c"
        text: |
          4.04%
        correct: false
        why: |
          Close, but $(1.01)^4 - 1 = 4.06\%$.
      - label: "d"
        text: |
          4.06%
        correct: true
        why: |
          At par the quarterly yield equals the 1% quarterly coupon: $(1.01)^4 - 1 = 4.06\%$.
      - label: "e"
        text: |
          It is impossible to know without data about the actual accumulated inflation
        correct: false
        why: |
          Issue-day pricing uses expected, not actual, inflation; at par the (real) yield equals the coupon rate.
    solution: |
      Official: issued at par, so the quarterly yield equals the quarterly coupon, $4\%/4 = 1\%$; annual effective $\boxed{(1.01)^4 - 1 = 4.06\%}$.
    related_terms: ["bond", "yield-to-maturity", "rate-conversion"]
  - id: "mc6"
    title: "MCQ 6 — Real return after the fact"
    text: |
      A one-year savings plan paid a nominal 2%, and actual inflation was 5%. What real return did it yield?
    options:
      - label: "a"
        text: |
          Negative interest rate of 2.857%
        correct: true
        why: |
          $1.02/1.05 - 1 = -2.857\%$.
      - label: "b"
        text: |
          Positive interest rate of 0.971%
        correct: false
        why: |
          Prices rose faster than the money, so the real return is negative.
      - label: "c"
        text: |
          Positive interest rate of 3%
        correct: false
        why: |
          Wrong sign and uses a simple difference.
      - label: "d"
        text: |
          Negative interest rate of 3%
        correct: false
        why: |
          The simple difference $2\% - 5\%$; the exact Fisher relation divides.
      - label: "e"
        text: |
          Positive interest rate of 7.1%
        correct: false
        why: |
          That is $1.02 \times 1.05 - 1$: multiplying instead of dividing.
    solution: |
      Official: $(1 + R_r)(1 + 5\%) = 1 + 2\% \Rightarrow \boxed{R_r = -2.857\%}$ ([[Fisher Equation]]).
    related_terms: ["real-interest-rate", "fisher-equation", "inflation"]
  - id: "mc7"
    title: "MCQ 7 — Three-yearly receipts against growing payments"
    text: |
      Today is 1 January 2025. From 31 December 2026 (two years from now) you receive four payments of NIS 20,000, one every three years. To get them you pay NIS 6,000 from the end of this year, growing 3% a year, 11 payments in all. Cost of capital 10%. Which statement about the NPV is correct?
    options:
      - label: "a"
        text: |
          The net present value is positive between NIS 0 and NIS 500
        correct: false
        why: |
          The NPV is about 1,159.
      - label: "b"
        text: |
          The net present value is positive between NIS 501 and NIS 1,000
        correct: false
        why: |
          The NPV is about 1,159.
      - label: "c"
        text: |
          The net present value is positive between NIS 1,001 and NIS 1,500
        correct: true
        why: |
          Receipts at years 2, 5, 8, 11 are worth 45,287; the growing payments 44,129; NPV 1,159.
      - label: "d"
        text: |
          The net present value is negative between NIS 0 and NIS 500
        correct: false
        why: |
          The NPV is positive.
      - label: "e"
        text: |
          The net present value is negative between NIS 501 and NIS 1,000
        correct: false
        why: |
          The NPV is positive.
    solution: |
      Official working: receipts discounted at years 2, 5, 8 and 11, less a growing annuity of 11 payments:
      $$NPV = \frac{20{,}000}{1.1^2} + \frac{20{,}000}{1.1^5} + \frac{20{,}000}{1.1^8} + \frac{20{,}000}{1.1^{11}} - \frac{6{,}000}{0.10 - 0.03}\left[1 - \left(\frac{1.03}{1.10}\right)^{11}\right] = 45{,}287 - 44{,}129 \approx \boxed{1{,}159}$$

      > [!note] Dates
      > The question says the last receipt is on 31 December 2034, but the official working (and the four-payment, three-year spacing from year 2) puts it at year 11. The answer follows the official working.
    related_terms: ["growing-annuity", "net-present-value", "rate-conversion"]
  - id: "mc8"
    title: "MCQ 8 — Share price from CAPM and the Gordon model"
    text: |
      ABC's beta is 0.8, the market's expected return 11%, the risk-free rate 2%. ABC paid NIS 7 per share last year, growing 7.2% a year forever. Share price today?
    options:
      - label: "a"
        text: |
          350.0 NIS
        correct: false
        why: |
          Uses last year's 7 instead of next year's 7.504.
      - label: "b"
        text: |
          166.7 NIS
        correct: false
        why: |
          Uses the wrong discount rate.
      - label: "c"
        text: |
          375.2 NIS
        correct: true
        why: |
          CAPM $2\% + 0.8(9\%) = 9.2\%$; $P = 7 \times 1.072 / (9.2\% - 7.2\%) = 375.2$.
      - label: "d"
        text: |
          159.1 NIS
        correct: false
        why: |
          Uses the wrong discount rate.
      - label: "e"
        text: |
          225.2 NIS
        correct: false
        why: |
          Not consistent with a 9.2% required return and 7.2% growth.
    solution: |
      Official: required return from the [[Security Market Line]]: $2\% + 0.8(11\% - 2\%) = 9.2\%$. Next dividend $7 \times 1.072 = 7.504$. Gordon model: $P = \frac{7.504}{9.2\% - 7.2\%} = \boxed{375.2}$.
    related_terms: ["security-market-line", "growing-perpetuity", "beta"]
  - id: "mc9"
    title: "MCQ 9 — Pricing a perpetual cash flow with beta"
    text: |
      A stock pays NIS 200 a year forever, first payment in a year. Its return SD is 60% and its correlation with the market 1/3. The market's SD is 15% and expected return about 9%; the risk-free rate about 3%. Expected share price?
    options:
      - label: "a"
        text: |
          Approx. 1,818 NIS
        correct: true
        why: |
          $\beta = \frac13 \times \frac{60\%}{15\%} = 1.33$; $E(r) = 3\% + 1.33(6\%) = 11\%$; $P = 200/11\% = 1{,}818$.
      - label: "b"
        text: |
          Approx. 2,018 NIS
        correct: false
        why: |
          Implies a discount rate near 9.9%.
      - label: "c"
        text: |
          Approx. 1,618 NIS
        correct: false
        why: |
          Implies a discount rate near 12.4%.
      - label: "d"
        text: |
          Approx. 1,333 NIS.
        correct: false
        why: |
          Implies a 15% discount rate, as if total risk were priced.
      - label: "e"
        text: |
          Approx. 1,533 NIS
        correct: false
        why: |
          Implies a discount rate near 13%.
    solution: |
      Official: only systematic risk is priced. $\beta = \rho\frac{\sigma_i}{\sigma_m} = \frac13 \cdot \frac{60\%}{15\%} = 1.33$; $E(r) = 3\% + 1.33(9\% - 3\%) = 11\%$; perpetuity $P = \frac{200}{0.11} = \boxed{1{,}818}$.
    related_terms: ["beta", "security-market-line", "perpetuity"]
  - id: "mc10"
    title: "MCQ 10 — Efficient portfolio with the same SD as a stock"
    text: |
      Stock A: expected return 20%, SD 40%. Market portfolio: 15%, 20%. Risk-free asset: 5%. Expected return of an efficient portfolio with the same SD as stock A?
    options:
      - label: "a"
        text: |
          15%
        correct: false
        why: |
          That is the market's return, at 20% SD, not 40%.
      - label: "b"
        text: |
          20%
        correct: false
        why: |
          Stock A's own return; A is inefficient, so an efficient portfolio with its risk earns more.
      - label: "c"
        text: |
          25%
        correct: true
        why: |
          CML: $5\% + \frac{15\% - 5\%}{20\%} \times 40\% = 25\%$.
      - label: "d"
        text: |
          30%
        correct: false
        why: |
          Overstates the CML slope.
      - label: "e"
        text: |
          35%
        correct: false
        why: |
          Overstates the CML slope.
    solution: |
      Official: on the [[Capital Market Line]], $E(r_p) = 5\% + \frac{15\% - 5\%}{20\%} \times 40\% = \boxed{25\%}$: twice the market's risk means $x_m = 2$ (borrow 100%).
    related_terms: ["capital-market-line", "sharpe-ratio"]
---

> Part of: [[Financial Management]] · 3 hours, two formula sheets and a calculator · round to two decimals

> [!success] Official solution
> Every answer here comes from the lecturer's official solution ([question paper](/papers/fundamentals-of-finance/2025-moed-b.pdf) · [official solution](/papers/fundamentals-of-finance/2025-moed-b-solution.pdf)). The step-by-step explanations and the reasons each wrong option fails are written for this site.

> [!note] Replaces a reconstruction
> This page used to be rebuilt from a student's workbook, without the question paper. The official solution confirms that reconstruction's franchise NPV (2,756.51). The lecturer's last-class workbook has a different worked version of the same question (NPV 6,769.64): see [[Lesson_11-Final Tutorial|Lesson 11]].

**Part 1** (Q1, Q2) is open, with working required (50%). **Part 2** (MCQ 1 to 10) is multiple choice (50%, 5 points each).
