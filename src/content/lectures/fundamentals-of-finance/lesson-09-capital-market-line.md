---
title: "Capital Market Line"
week: 9
semester: 2
year: 1
academic_year: "2024-25"
course: Financial Management & Finance
lecture: "Lesson 9 — The Capital Market Line (LN8)"
date: 2026-11-24
tags:
  - financial-management
  - capital-allocation-line
  - sharpe-ratio
  - tangency-portfolio
  - efficient-frontier
  - market-portfolio
  - capital-market-line
  - separation-theorem
aliases:
  - FM Lesson 9
  - CML
  - Optimal Portfolio Choice
subject: fundamentals-of-finance
in_scope: true
---

# Capital Market Line

> Part of: [[Financial Management]]
> **Lesson 9** — Financial Management & Finance (deck *Entrepreneurial Finance, LN8 (CML)*; first half of the class board of 26 June 2025)
> Key concepts: [[Capital Allocation Line]], [[Sharpe Ratio]], [[Tangency Portfolio]], [[Efficient Frontier]], [[Market Portfolio]], [[Capital Market Line]], [[Separation Theorem]]

> [!info] Sources and downloads
> - Lecture deck: [LN8 CML (PDF)](/papers/fundamentals-of-finance/ln8-cml.pdf)
> - Class board notes: [11th class board, CML and CAPM (PDF)](/papers/fundamentals-of-finance/class-2025-06-26-11th-class-capm.pdf). Its first half is walked through [[#The class board, CML part|below]]; the second half belongs to [[Lesson_10-Security Market Line & CAPM]].
> - No workbook was posted for this class.
>
> Practice: [[HW_10-CML, SML & CAPM]].

---

## 1. One risky asset plus the riskless asset

Put $x_A$ in a risky asset A and $x_{rf} = 1 - x_A$ in the riskless asset. Because $\sigma_{rf} = 0$ and the riskless asset does not co-move with anything:

$$E(r_p) = x_AE(r_A) + (1-x_A)r_f = r_f + x_A\big[E(r_A) - r_f\big] \qquad \sigma_p = x_A\,\sigma_A$$

Both are **linear** in $x_A$, so the combinations form a straight line: the **[[Capital Allocation Line]] (CAL)**. Eliminating $x_A$:

$$\boxed{E(r_p) = r_f + \frac{E(r_A) - r_f}{\sigma_A}\,\sigma_p}$$

In words: expected return $=$ risk-free rate $+$ (price of risk) $\times$ (amount of risk). The slope is the **[[Sharpe Ratio]]**, the return premium per unit of risk.

> [!example] Deck example: $E(r_A) = 25\%$, $\sigma_A = 75\%$, $r_f = 3\%$
> | $x_A$ | $x_{rf}$ | $\sigma_p$ | $E(r_p)$ |
> |---|---|---|---|
> | 0% | 100% | 0% | 3.0% |
> | 25% | 75% | 18.75% | 8.5% |
> | 50% | 50% | 37.5% | 14.0% |
> | 75% | 25% | 56.25% | 19.5% |
> | 100% | 0% | 75% | 25.0% |
>
> Sharpe ratio of A $= 0.22/0.75 = 0.293$, so the CAL is $E(r_p) = 0.03 + 0.293\,\sigma_p$.

> [!tip] Reading the CAL
> A very risk-averse investor sits near $r_f$ (mostly riskless). A less risk-averse one sits further out; beyond $x_A = 100\%$ she **borrows** at $r_f$ to invest more than her wealth in A. (The deck asks what happens if borrowing costs $r_f + 2\%$: the line would bend down beyond A, because the borrowing part has a lower slope.)

---

## 2. Two risky assets plus the riskless asset

Deck example: $r_f = 3\%$; B has $E = 10\%$, $\sigma = 20\%$; C has $E = 15\%$, $\sigma = 30\%$; $\rho_{BC} = 0.5$.

We could build a CAL through B (Sharpe 0.35) or through C (Sharpe 0.40). But why restrict ourselves to B or C alone? Every mix of B and C on the [[Lesson_08-Risk, Return & Diversification|minimum variance frontier]] gives another CAL. The best one is the **steepest**: the line from $r_f$ that is **tangent** to the frontier.

![[L9_optimal_cal.png]]

> [!success] The mean-variance efficient (MVE) portfolio
> The tangent point is the **MVE portfolio** of risky assets, also called the **[[Tangency Portfolio]]**. It has the highest Sharpe ratio of any risky portfolio, it is the **only** mix of B and C we would ever hold, and the CAL through it is the **optimal CAL**. Every portfolio on that line is efficient.
>
> Here the MVE is **50% B, 50% C**: $E(r_{MVE}) = 12.5\%$, $\sigma_{MVE} = 21.8\%$, Sharpe $= (12.5 - 3)/21.8 = 0.436$.

With two risky assets the MVE weights can be found in Excel with **Solver** (maximise the Sharpe ratio). With three or more assets the calculation is complicated, and **the course does not ask you to compute MVE weights**: you are given the MVE (or the market portfolio) and only choose the mix between it and $r_f$.

### Formulas for efficient portfolios

For a portfolio $p$ that puts $x_{MVE}$ in the MVE and the rest in $r_f$:

$$E(r_p) = r_f + x_{MVE}\big[E(r_{MVE}) - r_f\big] \qquad \sigma_p = x_{MVE}\,\sigma_{MVE} \qquad E(r_p) = r_f + \frac{E(r_{MVE}) - r_f}{\sigma_{MVE}}\,\sigma_p$$

> [!example] Example 1 (deck): \$10,000 and a target risk of $\sigma_p = 10\%$
> Highest return for that risk: $x_{MVE} = \sigma_p/\sigma_{MVE} = 10/21.8 = 45.9\%$, so $x_{rf} = 54.1\%$.
> $E(r_p) = 0.459(12.5\%) + 0.541(3\%) = 7.36\%$, and its Sharpe ratio is still $0.436$ (every point on the line has the line's slope).
> In dollars (reconstructed, the deck leaves these blank): \$5,410 in $r_f$ and \$4,590 in the MVE, which is \$2,295 in B and \$2,295 in C.

> [!example] Example 2 (deck): \$10,000 and a target return of $E(r_p) = 10\%$
> Lowest risk for that return: $x_{MVE}(12.5\%) + (1 - x_{MVE})(3\%) = 10\% \Rightarrow x_{MVE} = 73.7\%$, $x_{rf} = 26.3\%$.
> $\sigma_p = 0.737 \times 0.218 = 16.1\%$. This has the **same expected return as stock B but lower risk** (16.1% vs 20%).

---

## 3. Many risky assets: the efficient frontier

With three risky assets (deck: $E = 5\%, 10\%, 15\%$; $\sigma = 10\%, 20\%, 30\%$; all correlations 0.5), the pairwise frontiers A+B, B+C and A+C are each beaten by portfolios of **all three**. The **minimum variance frontier** is the left boundary of everything achievable: for each expected return, the lowest variance. Its upper half is the **[[Efficient Frontier]]**. Each minimum-variance portfolio generally holds all the assets.

> [!warning] Practical conclusion
> Stock picking exposes the investor to **diversifiable** risk that nobody pays for. The deck contrasts unsophisticated investors (a few stocks, lots of trading, high costs, poor diversification; Barber and Odean (2000), "Trading is hazardous to your wealth") with endowments that decide the split across asset classes and hold patiently.

Adding the riskless asset (deck: $r_f = 3.5\%$) gives the same picture as before: one tangency (MVE) portfolio and a straight optimal allocation line through it.

> [!success] Conclusions with many assets
> - The optimal **mix of risky assets** (the MVE) is the **same for everyone**, whatever their tolerance for risk.
> - Investors control risk **through the split between the MVE and the riskless asset**, not by reshuffling the risky assets. More risk-averse investors simply hold more $r_f$.
> - This assumes everyone has the same estimates of means, standard deviations and covariances. Someone with private information would have a different MVE.

---

## 4. Equilibrium: the MVE is the market portfolio

- **Demanded:** every investor wants the MVE portfolio of risky assets.
- **Supplied:** the (value-weighted) **market portfolio** of all risky assets.
- **Equilibrium:** prices adjust until **MVE = market**. So everyone holds only the market portfolio and the riskless asset, which may explain the popularity of index funds.

The **[[Market Portfolio]]** holds every risky asset in proportion to its market value:

$$r_M = \sum_i x_i r_i, \qquad x_i = \frac{\text{total market value of asset } i}{\text{total market value of all risky assets}}$$

In theory it includes everything investors hold (stocks, bonds, real estate, human capital, foreign assets). In practice we proxy it with the **S&P 500**, a value-weighted index of 500 large US stocks covering about 75% of US market value.

---

## 5. The Capital Market Line

In equilibrium every investor faces the same optimal CAL, the one through the market portfolio $M$. This is the **[[Capital Market Line]] (CML)**:

$$\boxed{E(r_p) = r_f + \frac{E(r_m) - r_f}{\sigma_m}\,\sigma_p}$$

It gives the set of **efficient portfolios**: mixes of $r_f$ and $M$. The efficient-portfolio formulas above apply with MVE replaced by $m$: $E(r_p) = x_mE(r_m) + (1-x_m)r_f$ and $\sigma_p = x_m\sigma_m$.

> [!info] The separation theorem (Tobin)
> Investing separates into two steps: (1) build the efficient risky portfolio, which is the same for everyone and does not depend on preferences (Markowitz); (2) decide how to split between it and the riskless asset, which **does** depend on preferences. This separation underpins the CML and the CAPM.

> [!info] Perspective
> Mean-variance analysis is due to Harry Markowitz (1950s; Nobel Prize 1990), with Tobin. The recommendation: hold the MVE plus the riskless asset and rebalance occasionally. Research extends it: the inputs change over time, human capital and housing matter, and asset classes such as hedge funds and private equity need weights too.

> [!example] Deck example: all \$100,000 in McDonald's
> $E(r_{McD}) = 10\%$, $\sigma_{McD} = 25\%$, $r_f = 3\%$, $E(r_m) - r_f = 8\%$, $\sigma_m = 20\%$. Find an efficient portfolio with the same expected return and the smallest risk.
> *(Reconstructed solution; the deck leaves it blank.)* On the CML: $10\% = 3\% + x_m(8\%) \Rightarrow x_m = 87.5\%$: \$87,500 in the market, \$12,500 riskless. $\sigma_p = 0.875 \times 20\% = 17.5\%$, well below McDonald's 25% for the same 10% return. The extra 7.5 points of $\sigma$ in McDonald's are unrewarded, diversifiable risk.

---

## The class board, CML part

The 26 June board recaps the two cases (two risky assets: a curve; one risky plus $r_f$: a straight line from $r_f$), then:

- **$n$ assets:** many pairwise curves combine into an envelope; its upper part is the efficient frontier ("for every $E(r_p)$, the minimum $\sigma$").
- **Adding $r_f$:** of all lines from $r_f$ to the frontier, the one through the tangency point is steepest. That point is the market portfolio $M$ and the line is the CML.
- **Value weights (Sharpe 1963):** if every investor holds the same market portfolio, then a stock's total value (the board uses NVIDIA) is $V_{NVDA} = x_{NVDA}^{M}\,V_M$, so $x_{NVDA}^{M} = V_{NVDA}/V_M$.

> [!example] Board example: $r_f = 4\%$, $E(r_m) = 10\%$, $\sigma_m = 18\%$, wealth \$300,000
> **Section A: an efficient portfolio with $E(r_p) = 8\%$.**
> $8\% = x_m(10\%) + (1-x_m)(4\%) \Rightarrow x_m = 2/3 = 66.67\%$, $x_{rf} = 33.33\%$: \$200,000 in $M$, \$100,000 riskless.
> Risk: $\sigma_p = 0.6667 \times 18\% = 12\%$. Check on the CML: $8\% = 4\% + \frac{10\% - 4\%}{18\%}\sigma_p \Rightarrow \sigma_p = 12\%$. ✓
>
> **Section B: an efficient portfolio with $\sigma_p = 24\%$.**
> $24\% = x_m(18\%) \Rightarrow x_m = 133.33\%$, $x_{rf} = -33.33\%$: **borrow** \$100,000 and put \$400,000 in $M$.
> $E(r_p) = 1.333(10\%) - 0.333(4\%) = 12\%$. Check: $4\% + \frac{6\%}{18\%}(24\%) = 12\%$. ✓

---

## Summary

> [!success] Key takeaways
> - One risky asset plus $r_f$ gives a straight line, the CAL, with slope = Sharpe ratio. ^summary
> - With many risky assets the best CAL is tangent to the efficient frontier; the tangency (MVE) portfolio is the same for everyone.
> - In equilibrium the MVE is the value-weighted market portfolio, and the optimal CAL is the CML: $E(r_p) = r_f + \frac{E(r_m)-r_f}{\sigma_m}\sigma_p$.
> - Efficient portfolios: $E(r_p) = x_mE(r_m) + (1-x_m)r_f$ and $\sigma_p = x_m\sigma_m$; $x_m > 1$ means borrowing.
> - Separation: choose the risky portfolio first (preference-free), then the risky/riskless split (preference-driven).

---

## Related Notes

- [[Lesson_08-Risk, Return & Diversification]] — portfolio maths and the minimum variance frontier
- [[Lesson_10-Security Market Line & CAPM]] — pricing assets that are not efficient: beta and the SML
- [[HW_10-CML, SML & CAPM]] — problem set with official solutions
- [[Read_01-Finance Cheat Sheet]] — formula sheet
- [[Financial Management]] — subject hub
