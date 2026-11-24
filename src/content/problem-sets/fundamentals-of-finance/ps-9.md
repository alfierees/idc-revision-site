---
title: "HW9"
subject: fundamentals-of-finance
tags:
  - financial-management
  - portfolio-risk
  - diversification
  - correlation
  - solutions
ai_drafted: true
questions:
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
  - id: "3"
    text: |
      **Three-asset portfolio.** A portfolio holds Target, Hershey and a new stock with weights $0.4$, $0.4$ and $0.2$. The expected returns are $20\%$, $12\%$ and $16\%$, and the standard deviations of the first two are $0.4$ and $0.3$. Use the zero-correlation structure given in the question.

      Find the expected return and the standard deviation of the portfolio.
    solution: |
      With the given zero-correlation structure the cross terms drop out.

      **Expected return:**

      $$
      E(r_p) = 0.4(0.20) + 0.4(0.12) + 0.2(0.16) = 16\%
      $$

      **Variance:**

      $$
      \sigma_p^2 = 0.4^2(0.4^2) + 0.4^2(0.3^2) = 0.04
      $$

      **Standard deviation:**

      $$
      \sigma_p = \sqrt{0.04} = 20\%
      $$
    related_terms: ["expected-return", "portfolio-risk", "correlation"]
  - id: "4"
    text: |
      **Perfect negative correlation.** Suppose two assets have a correlation of $\rho = -1$. What does this imply for the risk of a portfolio of the two?
    solution: |
      With $\rho = -1$ the two assets move exactly opposite to each other. A weighting exists that drives portfolio risk to **zero**, which is a riskless hedge. This is the theoretical extreme of [[Diversification]].
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

*Related: [[Lesson_02-Perpetuities, NPV & IRR]]*
