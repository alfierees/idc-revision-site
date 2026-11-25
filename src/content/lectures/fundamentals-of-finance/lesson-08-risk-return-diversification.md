---
title: "Risk, Return & Diversification"
week: 8
semester: 2
year: 1
academic_year: "2024-25"
course: Financial Management & Finance
lecture: "Lesson 8 — Risk diversification (LN7)"
date: 2026-11-24
tags:
  - financial-management
  - expected-return
  - portfolio-risk
  - correlation
  - covariance
  - diversification
  - minimum-variance-portfolio
  - short-selling
aliases:
  - FM Lesson 8
  - Risk Diversification
  - Introduction to Risk
subject: fundamentals-of-finance
in_scope: true
---

# Risk, Return & Diversification

> Part of: [[Financial Management]]
> **Lesson 8** — Financial Management & Finance (deck *Entrepreneurial Finance, LN7 (Risk diversification)*, class of 19 June 2025)
> Key concepts: [[Expected Return]], [[Standard Deviation]], [[Covariance]], [[Correlation]], [[Portfolio Risk]], [[Diversification]], [[Minimum Variance Portfolio]], [[Short Selling]]

> [!info] Sources and downloads
> - Lecture deck: [LN7 Risk diversification (PDF)](/papers/fundamentals-of-finance/ln7-risk-diversification.pdf)
> - Class board notes: [Ninth class board (PDF)](/papers/fundamentals-of-finance/class-2025-06-19-ninth-class-risk-diversification.pdf)
> - Class workbook: [2025.06.19 Ninth class (risk diversification).xlsx](/papers/fundamentals-of-finance/class-2025-06-19-ninth-class-risk-diversification.xlsx), walked through [[#The class workbook, sheet by sheet|below]]
>
> Practice: [[HW_09-Risk, Return & Diversification]].

---

## Why risk enters the course now

Until now every cash flow was certain, so we discounted at a known rate. For a **risky** project the value is

$$PV = \sum_{t} \frac{E(CF_t)}{\big(1+E(r)\big)^t}$$

$E(CF)$ is relatively easy to estimate. The hard part is $E(r)$, the **cost of capital**, which has two pieces:

$$\text{Cost of capital} = \text{risk-free rate} + \text{risk premium}$$

- The **risk-free rate** is the yield on a zero-coupon government bond of the right maturity (see [[Lesson_07-Bond Pricing]]).
- The **risk premium** is what investors demand for bearing risk. To measure it we need the right measure of risk, and that depends on **what else the investor holds**. So the next three lessons build up: smart investors diversify (this lesson), what smart investors hold ([[Lesson_09-Capital Market Line]]), and what that implies for a project's cost of capital ([[Lesson_10-Security Market Line & CAPM]]).

---

## What we assume about investors

- They prefer **more to less** (higher return).
- They are **risk averse**: a riskier position must be compensated with a higher expected return.
- In investments, **risk = dispersion of future outcomes**, measured by the variance or the standard deviation $\sigma$. (The board also mentions Value at Risk, the chance of losing more than some amount $x$, as the everyday meaning of risk. The course uses $\sigma$.)

> [!tip] Mean-variance dominance
> Plot every investment in the **mean–standard deviation plane** ($\sigma$ on the x-axis, $E(r)$ on the y-axis). Asset A **dominates** B if $E(r_A) \ge E(r_B)$ **and** $\sigma_A \le \sigma_B$, with at least one inequality strict. On the class board, everything up-and-left of A dominates A, and everything down-and-right of A is dominated by A. Points up-and-right (more return **and** more risk) cannot be ranked by this rule alone.

---

## Measuring reward and risk

### Expected return

With $n$ possible outcomes $r_i$ with probabilities $p_i$:

$$E(r) = \sum_{i=1}^{n} p_i\, r_i, \qquad \text{realised return } r = \frac{P_1 + Div_1}{P_0} - 1$$

> [!example] Deck example: a \$20 stock
> Half the time the price goes to \$25 and it pays a \$1 dividend ($r = 26/20 - 1 = 30\%$). Otherwise it goes to \$18 with no dividend ($r = -10\%$).
> $E(r) = 0.5(30\%) + 0.5(-10\%) = 10\%$.

### Variance and standard deviation

$$Var(r) = \sigma^2 = E\big[(r - E(r))^2\big] = \sum_i p_i\,\big(r_i - E(r)\big)^2, \qquad \sigma = \sqrt{Var(r)}$$

Same stock: $\sigma^2 = 0.5(0.3-0.1)^2 + 0.5(-0.1-0.1)^2 = 0.04$, so $\sigma = 20\%$.

### Covariance and correlation

$$Cov(r_A, r_B) = \sigma_{A,B} = \sum_i p_i\,\big[r_{A,i}-E(r_A)\big]\big[r_{B,i}-E(r_B)\big], \qquad \rho_{A,B} = \frac{Cov(r_A,r_B)}{\sigma_A\,\sigma_B}$$

The correlation rescales covariance so it always lies between $-1$ and $1$.

> [!example] Class board: boom, neutral, bust
> | Event | $r_A$ | $r_B$ | Probability |
> |---|---|---|---|
> | Boom | 45% | 11% | 30% |
> | Neutral | 5% | 0% | 50% |
> | Bust | −35% | −5% | 20% |
>
> The board gives only the table. Worked through (reconstructed, my arithmetic): $E(r_A) = 0.3(45) + 0.5(5) + 0.2(-35) = 9\%$ and $E(r_B) = 2.3\%$. $\sigma_A^2 = 784$ (%²), so $\sigma_A = 28\%$; $\sigma_B^2 = 36.01$, so $\sigma_B \approx 6.0\%$. $Cov = 0.3(36)(8.7) + 0.5(-4)(-2.3) + 0.2(-44)(-7.3) = 162.8$, so $\rho_{A,B} = 162.8/(28 \times 6.0) \approx 0.97$. The two assets move almost in lockstep.

### Estimating from historical data

In practice the probabilities are unknown, so we use $T$ years of data:

| Quantity | Sample formula | Excel |
|---|---|---|
| Mean return | $\bar r = \frac{1}{T}\sum_t r_t$ | `AVERAGE` |
| Variance | $\frac{1}{T-1}\sum_t (r_t - \bar r)^2$ | `VAR.S` (and `STDEV.S` for $\sigma$) |
| Covariance | $\frac{1}{T-1}\sum_t (r_{A,t}-\bar r_A)(r_{B,t}-\bar r_B)$ | `COVARIANCE.S` |
| Correlation | $Cov/(\sigma_A\sigma_B)$ | `CORREL` |

With **monthly** data, annualise the mean by $\times 12$ and the standard deviation by $\times\sqrt{12}$ (this is exactly what the class workbook does).

---

## A portfolio of two risky assets

Put a fraction $x_A$ in A and $x_B = 1 - x_A$ in B.

$$\boxed{E(r_p) = x_A E(r_A) + x_B E(r_B)}$$

$$\boxed{\sigma_p^2 = x_A^2\sigma_A^2 + x_B^2\sigma_B^2 + 2x_Ax_B\,\sigma_A\sigma_B\,\rho_{A,B}}$$

> [!success] The key asymmetry
> Expected return is a **weighted average** (linear). Risk is **not**: it depends on each variance **and on the covariance**. That gap is what makes diversification work.

> [!example] Deck example: Microsoft and Johnson & Johnson
> \$30K in MSFT and \$50K in JNJ, so $x_{MSFT} = 0.375$, $x_{JNJ} = 0.625$. Monthly $E(r)$: 1.2% and 0.5%; $\sigma$: 11.6% and 6.5%; $\rho = 0.18$.
> - $E(r_p) = 0.375(1.2\%) + 0.625(0.5\%) = 0.76\%$ per month.
> - $\sigma_p^2 = 0.375^2(0.116)^2 + 0.625^2(0.065)^2 + 2(0.375)(0.625)(0.116)(0.065)(0.18) = 0.004179$, so $\sigma_p = 6.46\%$ per month, **lower than either stock's own $\sigma$**.
> - Realised: MSFT −9.08%, JNJ −1.83%, so the portfolio returned $0.375(-9.08\%) + 0.625(-1.83\%) = -4.55\%$.
>
> (The deck prints the variance once as 0.001479; the square root it then takes, 6.46%, matches 0.004179.)

### The role of correlation

![[L8_correlation_frontiers.png]]

The deck traces every mix of A ($E=25\%$, $\sigma=75\%$) and B ($E=8\%$, $\sigma=25\%$) for $\rho = 1, 0.5, 0, -0.5, -1$. The curve of possible portfolios is the **minimum variance frontier**.

1. **$\rho = 1$: no diversification benefit.** The variance becomes a perfect square, so $\sigma_p = x_A\sigma_A + x_B\sigma_B$, a straight weighted average (the board derives this line by line).
2. **$\rho < 1$: a benefit.** $\sigma_p$ is below the weighted average, so you get less risk for the same return. The lower $\rho$, the bigger the benefit.
3. **$\rho = -1$: risk can be eliminated.** $\sigma_p = |x_A\sigma_A - x_B\sigma_B|$, which is zero when $x_A/x_B = \sigma_B/\sigma_A$. Here that is $x_A = 0.25$, $x_B = 0.75$.

### The minimum variance portfolio

Minimising $\sigma_p^2$ subject to $x_B = 1 - x_A$ gives

$$\boxed{x_A^{MVP} = \frac{\sigma_B^2 - \sigma_A\sigma_B\rho_{A,B}}{\sigma_A^2 + \sigma_B^2 - 2\sigma_A\sigma_B\rho_{A,B}}}$$

Special cases: $\rho = -1 \Rightarrow x_A = \frac{\sigma_B}{\sigma_A+\sigma_B}$; $\rho = 0 \Rightarrow x_A = \frac{\sigma_B^2}{\sigma_A^2+\sigma_B^2}$; and if $\rho \ge \sigma_B/\sigma_A$ the MVP is $x_A = 0$ (only the less risky asset).

> [!warning] Efficient vs inefficient part of the frontier
> Only the part of the frontier **above** the MVP is efficient. Below it, you can get a higher return for the same risk by moving up the curve.

### Short selling

Negative weights are allowed: a **short position**. You borrow a share, sell it at $P_0$, pay the lender any dividends, and buy it back at $P_1$. Your cash flows are $+P_0$ today and $-(P_1 + Div_1)$ later, so per \$1 received you repay $1 + r$: **you borrowed at the stock's own return**.

> [!example] Deck example: \$10,000 with $x_A = 1.4$, $x_B = -0.4$
> Short \$4,000 of B and buy \$14,000 of A. $E(r_p) = 1.4(25\%) - 0.4(8\%) = 31.8\%$. But if A returns 2% and B 25%, the portfolio returns $1.4(2\%) - 0.4(25\%) = -7.2\%$, and there is **no lower limit** on losses. The share lender earns a fee.

Allowing shorts extends the frontier beyond the two assets (dashed parts of the workbook chart below).

---

## Many risky assets

With $n$ assets, $E(r_p) = \sum_i x_iE(r_i)$, and

$$\sigma_p^2 = \sum_{i=1}^{n} x_i^2\sigma_i^2 + \sum_{i=1}^{n}\sum_{j\ne i} x_ix_j\,Cov(r_i,r_j)$$

There are $n$ variance terms but $n(n-1)$ covariance terms in the double sum, which is $\frac{n^2-n}{2}$ **distinct** covariances (the board's count). For large $n$ the covariances dominate. Three assets, for example:

$$\sigma_p^2 = x_A^2\sigma_A^2 + x_B^2\sigma_B^2 + x_C^2\sigma_C^2 + 2x_Ax_B\sigma_A\sigma_B\rho_{AB} + 2x_Ax_C\sigma_A\sigma_C\rho_{AC} + 2x_Bx_C\sigma_B\sigma_C\rho_{BC}$$

### Only the average covariance survives

Take an equally weighted portfolio ($x_i = 1/n$) where every stock has variance $\sigma^2$ and every pair has covariance $\overline{cov}$:

$$\sigma_p^2 = \frac{1}{n}\sigma^2 + \Big(1 - \frac{1}{n}\Big)\overline{cov} \;\xrightarrow{\,n\to\infty\,}\; \overline{cov}$$

> [!example] NYSE numbers from the deck ($\sigma = 0.49$, $\overline{cov} = 0.037$)
> | Stocks | $\sigma_p$ |
> |---|---|
> | 2 | 37.2% |
> | 10 | 23.9% |
> | 40 | 20.5% |
> | 150 | 19.6% |
> | $\infty$ | $\sqrt{0.037} = 19.2\%$ |
>
> Because the average covariance is positive, even a perfectly diversified stock portfolio is still risky. That leftover is **[[Systematic Risk]]**; what diversification removes is **[[Idiosyncratic Risk]]**.

The number of stocks needed to reach a given portfolio risk has risen over time, because the typical stock is now more volatile (fewer conglomerates, firms list earlier).

### Risk does not disappear with the horizon

The **fallacy of time diversification**: average annual returns converge to the expected return, but investors care about **cumulative wealth**, and there risk compounds. In the deck's example, \$1 in US small stocks from 1926 grew to \$7.3 million by 2008. A +20% first year would have made it \$8.8 million, a −20% first year \$5.8 million, yet the 83-year average return moves only from 20.9% to 21.1% or 20.7%.

---

## The class workbook, sheet by sheet

> [!info] Download: [2025.06.19 Ninth class (risk diversification).xlsx](/papers/fundamentals-of-finance/class-2025-06-19-ninth-class-risk-diversification.xlsx)

### Sheet `AAPL and K`: two real stocks

- **Data:** monthly adjusted prices for Apple (AAPL) and the stock with ticker K, July 2015 to June 2025.
- **Returns:** each month `=B5/B6-1` (this month's price over last month's, minus 1). Rows run newest first.
- **Annualised statistics:** mean `=AVERAGE(D:D)*12` and $\sigma$ `=STDEV.S(D:D)*SQRT(12)`; correlation `=CORREL(D:D,E:E)`.

| | AAPL | K |
|---|---|---|
| Mean return (annual) | 23.92% | 7.56% |
| $\sigma$ (annual) | 27.86% | 19.91% |
| Correlation | 0.276 | |

- **A 20/80 portfolio, two ways.** Column F builds the portfolio's monthly return `=0.2*D5+0.8*E5`, then takes its mean (10.83%) and $\sigma$ (18.27%) directly. The table at H15 gets the same numbers from the formula: $E(r_p)$ `=H16*$I$5+I16*$J$5` and $Var(r_p)$ `=H16^2*$I$6^2+I16^2*$J$6^2+2*H16*I16*$I$6*$J$6*$I$8`, so $\sigma_p$ = `SQRT` = 18.27%. **The two routes agree**, which is the point of the sheet: the portfolio formula is just a shortcut for building the return series.
- Lesson: putting 20% in the volatile Apple **raises** the return from 7.56% to 10.83% while risk falls from 19.91% to 18.27%, because $\rho$ is low.

> [!warning] Label mismatch in the workbook
> The labels say "90/10 portfolio", but every formula uses weights 0.2 and 0.8. The numbers above are for 20% AAPL / 80% K.

### Sheet `Portfolios`: tracing the frontier

- Inputs: A has $E = 25\%$, $\sigma = 30\%$; the second asset has $E = 8\%$, $\sigma = 20\%$ (its column header says `rf`, but it has a 20% standard deviation, so it is a second **risky** asset B); $\rho = 0.3$.
- Columns A to E: $x_A$ from 0 to 1 in steps of 0.01, $x_B$ `=1-A9`, then $E(r_P)$ and $\sigma_P$ from the two formulas above. Plotting $\sigma$ against $E(r)$ draws the frontier.
- **GMVP** (global minimum variance portfolio) at H25: `=(C4^2-B4*C4*B6)/(B4^2+C4^2-2*B4*C4*B6)` = **0.234** in A, giving $E(r) = 11.98\%$ and $\sigma = 18.67\%$, below either asset's own risk.

![[L8_workbook_frontier.png]]

### Board notes (PDF)

The board recaps the formulas above: risk as $\sigma = \sqrt{Var}$, the boom/neutral/bust table, the dominance regions, the two-asset formulas with the $\rho = 1$ derivation, and three boxed cases that the next lessons use:

| Case | $E(r_p)$ | $\sigma_p$ |
|---|---|---|
| 2 risky assets | $x_AE(r_A) + x_BE(r_B)$ | $\sqrt{x_A^2\sigma_A^2 + x_B^2\sigma_B^2 + 2x_Ax_B\sigma_A\sigma_B\rho_{AB}}$ |
| 1 risky + risk-free | $x_AE(r_A) + (1-x_A)r_f$ | $x_A\sigma_A$ (since $\sigma_{rf} = 0$ and $Cov(r_f, r_A) = 0$) |
| 2 risky + risk-free | $x_AE(r_A) + x_BE(r_B) + x_{rf}r_f$ | $\sqrt{x_A^2\sigma_A^2 + x_B^2\sigma_B^2 + 2x_Ax_B\sigma_A\sigma_B\rho_{AB}}$ |

---

## Summary

> [!success] Key takeaways
> - Cost of capital $=$ risk-free rate $+$ risk premium; to price risk we first need to know what investors hold. ^summary
> - $E(r_p)$ is a weighted average; $\sigma_p$ is not, because of the covariance term.
> - The lower the correlation, the bigger the diversification benefit; at $\rho = -1$ risk can be eliminated, at $\rho = 1$ there is none.
> - MVP weight: $x_A = \frac{\sigma_B^2 - \sigma_A\sigma_B\rho}{\sigma_A^2+\sigma_B^2-2\sigma_A\sigma_B\rho}$; only the frontier above it is efficient.
> - In a large portfolio only the **average covariance** remains: diversification removes specific risk, not market risk.
> - Shorting is borrowing at the stock's return; it extends the frontier but losses are unbounded.

---

## Related Notes

- [[Lesson_09-Capital Market Line]] — adding the riskless asset: the CAL, the tangency portfolio and the CML
- [[Lesson_10-Security Market Line & CAPM]] — which part of risk is priced: beta
- [[HW_09-Risk, Return & Diversification]] — problem set on two-asset portfolios and the diversification limit
- [[Read_01-Finance Cheat Sheet]] — the course formula sheet (risk and reward section)
- [[Financial Management]] — subject hub
