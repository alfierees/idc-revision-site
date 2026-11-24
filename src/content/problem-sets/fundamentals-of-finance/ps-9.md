---
title: "HW9"
subject: fundamentals-of-finance
official_solution: "/papers/fundamentals-of-finance/ps-9-official-solution.pdf"
source_doc: "/papers/fundamentals-of-finance/ps-9-risk-diversification-questions.pdf"
tags:
  - financial-management
  - portfolio-risk
  - diversification
  - correlation
  - solutions
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Ford and Molson Coors.** Ford has an expected return of $20\%$ and volatility $40\%$; Molson Coors has $10\%$ and $30\%$. The two are uncorrelated.

      (a) Expected return and volatility of an equally weighted portfolio? (b) Is putting everything in Molson Coors efficient? (c) Is putting everything in Ford efficient?
    solution: |
      **(a)** $E(r_p) = 0.5(20\%) + 0.5(10\%) = 15\%$; $\sigma_p = \sqrt{0.5^2(0.4^2) + 0.5^2(0.3^2)} = \sqrt{0.0625} = 25\%$.

      **(b)** No. The 50/50 portfolio has a **higher** return (15% vs 10%) and **lower** risk (25% vs 30%), so it dominates Molson Coors alone.

      **(c)** Yes. Nothing dominates Ford: it has the highest return, bought with much higher risk.

      (Official answers, Problem Set 10, Question 1.)
    related_terms: ["expected-return", "portfolio-risk", "efficient-frontier"]
  - id: "2"
    text: |
      **J&J and Walgreen.** Johnson & Johnson has an expected return of $7\%$ and a standard deviation of $16\%$. Walgreen has an expected return of $10\%$ and a standard deviation of $20\%$. The correlation between the two is $\rho = 0.22$.

      You invest $50\%$ in each. Find the expected return and the standard deviation of the portfolio.
    solution: |
      Expected return is a weighted average, but risk is not. The two-asset formulas are:

      $$
      E(r_p) = w_1 E(r_1) + w_2 E(r_2)
      $$

      $$
      \sigma_p^2 = w_1^2\sigma_1^2 + w_2^2\sigma_2^2 + 2w_1 w_2 \sigma_1 \sigma_2 \rho_{12}
      $$

      The cross term carries the [[Correlation|correlation]]. Because $\rho \le 1$, portfolio risk is almost always less than the weighted average of the individual risks. That gap is the gain from [[Diversification]].

      **Expected return:**

      $$
      E(r_p) = 0.5(7\%) + 0.5(10\%) = 8.5\%
      $$

      **Variance:**

      $$
      \sigma_p^2 = 0.5^2(0.16^2) + 0.5^2(0.20^2) + 2(0.5)(0.5)(0.16)(0.20)(0.22) = 0.01992
      $$

      **Standard deviation:**

      $$
      \sigma_p = \sqrt{0.01992} = 14.11\%
      $$

      > [!tip] Risk below the average
      > The simple average of the two standard deviations is $18\%$, but the portfolio standard deviation is only $14.11\%$. Correlation below $1$ means the assets partly offset each other.
    related_terms: ["expected-return", "portfolio-risk", "correlation", "diversification"]
  - id: "2b"
    text: |
      For the J&J and Walgreen 50/50 portfolio: if the correlation between the two stocks **increased**, would (a) the portfolio's expected return and (b) its volatility rise or fall?
    solution: |
      **(a)** Unchanged: the expected return, $0.5(7\%) + 0.5(10\%) = 8.5\%$, does not involve the correlation.

      **(b)** It rises: the covariance term $2x_Jx_W\sigma_J\sigma_W\rho$ in the variance gets bigger. (Official answer.)
    related_terms: ["correlation", "portfolio-risk"]
  - id: "2c"
    text: |
      Expected return and volatility of a portfolio that is **long \$10,000 in J&J** and **short \$2,000 in Walgreen**.
    solution: |
      Net investment $10{,}000 - 2{,}000 = 8{,}000$, so the weights are $x_J = 10{,}000/8{,}000 = 1.25$ and $x_W = -2{,}000/8{,}000 = -0.25$ (as in the official solution).

      $$E(r_p) = 1.25(7\%) - 0.25(10\%) = 6.25\%$$

      $$\sigma_p^2 = 1.25^2(0.16^2) + 0.25^2(0.20^2) - 2(1.25)(0.25)(0.16)(0.20)(0.22) = 0.0381 \Rightarrow \sigma_p = 19.52\%$$

      Shorting the higher-return stock lowers the return and, because the two are positively correlated, the short partly hedges J&J. (The numbers here are computed for this site; the official file shows the weights and refers to the textbook formula.)
    related_terms: ["short-selling", "portfolio-risk", "expected-return"]
  - id: "3"
    text: |
      **Target, Hershey and a new stock.** Target: expected return $20\%$, volatility $40\%$. Hershey: $12\%$, $30\%$. They are uncorrelated.

      (a) Expected return and volatility of an equally weighted portfolio of the two?

      A new stock has expected return $16\%$ and volatility $30\%$, uncorrelated with both. (b) Is holding it alone attractive compared with the portfolio in (a)? (c) Can you improve the portfolio in (a) by adding it?
    solution: |
      **(a)** $E(r_p) = 0.5(20\%) + 0.5(12\%) = 16\%$; $\sigma_p = \sqrt{0.5^2(0.4^2) + 0.5^2(0.3^2)} = 25\%$.

      **(b)** No: same 16% expected return with higher volatility (30% vs 25%).

      **(c)** Yes. It is uncorrelated with the others, so shifting some weight into it **lowers risk while keeping the expected return at 16%**. For example, weights \$0.4, 0.4, 0.2$ give $E(r_p) = 0.4(20\%) + 0.4(12\%) + 0.2(16\%) = 16\%$ and

      $$\sigma_p^2 = 0.4^2(0.4^2) + 0.4^2(0.3^2) + 0.2^2(0.3^2) = 0.0436 \Rightarrow \sigma_p = 20.9\% < 25\%$$

      > [!note] Corrected
      > An earlier version left out the new stock's own variance term ($0.2^2 \times 0.3^2$) and reported 20%.
    related_terms: ["expected-return", "portfolio-risk", "correlation", "diversification"]
  - id: "4"
    text: |
      **Perfect negative correlation.** Intel: expected return $26\%$, volatility $50\%$. Coca-Cola: $6\%$, $25\%$. Their correlation is $-1$.

      (a) Which weights remove all risk? (b) With no arbitrage, what is the risk-free rate?
    solution: |
      **(a)** With $\rho = -1$, $\sigma_p = |x_I\sigma_I - x_C\sigma_C|$, which is zero when $x_I(50\%) = x_C(25\%)$. Intel is twice as volatile, so hold twice as much Coke: $x_C = 2/3$, $x_I = 1/3$.

      **(b)** That portfolio is riskless, so it must earn the risk-free rate: $\frac13(26\%) + \frac23(6\%) = 12.67\%$. (Official answers.)
    related_terms: ["correlation", "diversification", "portfolio-risk", "minimum-variance-portfolio"]
  - id: "5"
    text: |
      **The limit of diversification.** An equal-weighted portfolio holds $n$ identical stocks, each with standard deviation $\sigma = 0.5$ and a pairwise correlation of $\rho = 0.2$.

      Find the portfolio risk for $n = 1$, $n = 30$ and $n = 1000$, and say what happens as $n \to \infty$.
    solution: |
      For an equal-weighted portfolio of $n$ identical stocks:

      $$

      \sigma_p = \sigma\sqrt{\frac{1}{n} + \rho\left(1 - \frac{1}{n}\right)}

      $$
      ![](/images/fundamentals-of-finance/hw9-diversification.png)

      | $n$ | Portfolio risk |
      |---|---|
      | 1 | 50.0% |
      | 30 | 23.8% |
      | 1000 | 22.4% |

      > [!warning] Diversification has a floor
      > As $n \to \infty$ the $1/n$ (idiosyncratic) term vanishes but the correlation term remains. Risk converges to $\sigma\sqrt{\rho} = 0.5\sqrt{0.2} = 22.4\%$, **not zero**. You can diversify away firm-specific risk but never the systematic (market-wide) risk captured by $\rho$.
    related_terms: ["diversification", "idiosyncratic-risk", "systematic-risk", "correlation", "portfolio-risk"]
---

*Related: [[Lesson_08-Risk, Return & Diversification]]*
