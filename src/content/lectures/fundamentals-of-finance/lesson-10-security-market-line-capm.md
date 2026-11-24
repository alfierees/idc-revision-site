---
title: "Security Market Line & CAPM"
week: 10
semester: 2
year: 1
academic_year: "2024-25"
course: Financial Management & Finance
lecture: "Lesson 10 — CAPM and the SML (LN9)"
date: 2026-11-24
tags:
  - financial-management
  - capital-asset-pricing-model
  - security-market-line
  - beta
  - systematic-risk
  - idiosyncratic-risk
  - risk-premium
aliases:
  - FM Lesson 10
  - CAPM
  - SML
subject: fundamentals-of-finance
in_scope: true
---

# Security Market Line & CAPM

> Part of: [[Financial Management]]
> **Lesson 10** — Financial Management & Finance (deck *Entrepreneurial Finance, LN9 (SML)*; second half of the class board of 26 June 2025)
> Key concepts: [[Capital Asset Pricing Model]], [[Security Market Line]], [[Beta]], [[Systematic Risk]], [[Idiosyncratic Risk]], [[Risk Premium]], [[Capital Market Line]]

> [!info] Sources and downloads
> - Lecture deck: [LN9 SML (PDF)](/papers/fundamentals-of-finance/ln9-sml.pdf)
> - Class board notes: [11th class board, CML and CAPM (PDF)](/papers/fundamentals-of-finance/class-2025-06-26-11th-class-capm.pdf) (the CAPM half is summarised [[#The class board, CAPM part|below]])
>
> Practice: [[HW_10-CML, SML & CAPM]], and Q2 of [[PP_01-Machine FCF & NPV, CAPM, Bond Repricing, Loan Effective Rate, NPV vs IRR & EAC (2020 Moed A)|PP 01]].

---

## 1. What risk should be priced?

### The CML only prices efficient portfolios

$E(r_p) = r_f + \frac{E(r_m)-r_f}{\sigma_m}\sigma_p$ holds only for portfolios **on** the CML: mixes of $M$ and $r_f$ that have diversified away all unnecessary risk. It cannot price individual stocks, undiversified portfolios or projects.

### Standard deviation is not the right risk measure

> [!example] Deck example
> A and B both have $E(r) = 10\%$, $\sigma = 20\%$, and $\rho_{A,B} = 0$. You might conclude that "20% risk earns 10%". But the 50/50 portfolio C has $E(r_C) = 10\%$ and $\sigma_C = \sqrt{0.5^2(0.2^2)\times 2} = 14.1\%$. So 10% can be had with far less than 20% risk.
> (The deck prints $\sigma_C = 14.4\%$; the arithmetic gives 14.14%.)
>
> **In equilibrium, total standard deviation cannot be what is compensated with return.** The right risk measure must be linear in the portfolio weights.

### Systematic vs specific risk

A stock with $\sigma_i = 30\%$ lies to the right of the CML. Part of its risk would disappear inside a diversified portfolio; part would not.

| Diversifiable risk | Undiversifiable risk |
|---|---|
| Also called unsystematic, firm-specific, **idiosyncratic**, unique risk | Also called **systematic** or market risk |
| Can be diversified away by holding the asset in a large portfolio | Remains even in a large, well-diversified portfolio |
| The part of risk not explained by the market return | Economy-wide risk the investor must bear to hold the asset |
| **Not compensated** with return | Compensated: securities with more of it add more risk to your portfolio |

> [!success] The plan of attack
> Value $= \sum E(CF_t)/(1+E(r))^t$ needs $E(r)$. Higher **systematic** risk means higher return. The cost of capital depends only on undiversifiable risk, because smart investors are diversified. We measure undiversifiable risk with **beta**, estimated by regressing the security's excess return on the market's excess return.

---

## 2. The Capital Asset Pricing Model

### a. The regression approach

$$r_{i,t} - r_{f,t} = \alpha_i + \beta_i\,(r_{m,t} - r_{f,t}) + \varepsilon_{i,t}$$

- $\beta_i$: the sensitivity to market risk. When the market's excess return rises by 1%, the security's rises by $\beta_i$%. It is the slope of the best-fit line of the stock's excess returns against the market's.
- Estimator: $\boxed{\beta_i = \frac{Cov(r_i, r_m)}{Var(r_m)} = \rho_{i,m}\,\frac{\sigma_i}{\sigma_m}}$
- $\alpha_i$: the intercept; $\varepsilon_{i,t}$: the error, the part not explained by the market, zero on average.

> [!example] Cisco, 1996 to 2009 (deck)
> Monthly excess returns of Cisco plotted against the S&P 500: a 10% market move goes with roughly a 20% Cisco move. The regression gives $\beta = 1.80$ and $\alpha = 1.2\%$.

### Variance decomposition

Taking variances of the regression (with $\varepsilon$ independent of the market):

$$\boxed{\sigma_i^2 = \beta_i^2\sigma_m^2 + \sigma_\varepsilon^2}$$

$\beta_i^2\sigma_m^2$ is **systematic** risk in variance terms; $\sigma_\varepsilon^2$ is **unique** risk. Note that it is the **variances** that add up, not the standard deviations.

### The CAPM

Only the systematic part is priced:

$$\boxed{E(r_i) = r_f + \beta_i\big[E(r_m) - r_f\big]} \qquad E(r_m) - r_f = \text{market risk premium}$$

- $\beta_i$ drives the expected return; $\sigma_\varepsilon$ does not, because the $\varepsilon$'s average out in a diversified portfolio.
- The CAPM also says $\alpha_i = 0$: take expectations of the regression and you get the CAPM formula only if $\alpha_i = 0$.
- The regression's $R^2 = \frac{\beta_i^2\sigma_m^2}{\sigma_i^2} = \rho_{i,m}^2$ is the fraction of the asset's excess-return variance explained by the market.

### b. The mathematical approach (why beta)

Take an investor holding the market portfolio who invests a small extra fraction $\delta$, financed by riskless borrowing, either in more of $M$ or in stock A.

| | Invest $\delta$ more in $M$ | Invest $\delta$ in A |
|---|---|---|
| Extra return | $\delta\,[E(r_m) - r_f]$ | $\delta\,[E(r_A) - r_f]$ |
| Extra variance (dropping $\delta^2$) | $2\delta\sigma_m^2$ | $2\delta\,Cov(r_A, r_m)$ |
| Reward per unit of extra risk | $\frac{E(r_m)-r_f}{2\sigma_m^2}$ | $\frac{E(r_A)-r_f}{2\,Cov(r_A,r_m)}$ |

In equilibrium the two rewards must be equal (otherwise short one and buy the other: more return, no more risk). Setting them equal gives $E(r_A) = r_f + \frac{Cov(r_A,r_m)}{\sigma_m^2}[E(r_m)-r_f]$, which is the CAPM with $\beta_A = Cov(r_A,r_m)/\sigma_m^2$. **What an asset adds to portfolio risk is its covariance with the market, not its own variance.**

### c. Assumptions

Due to Sharpe, Lintner and Mossin (1960s). Investors care about end-of-period wealth and are mean-variance optimisers; they can borrow and lend at $r_f$; they all have the same information (the same frontier); and we can measure the market portfolio they perceive (the most restrictive assumption). Even if the CAPM fails, the earlier advice on what smart investors should do still stands.

---

## 3. The Security Market Line

The CAPM is a straight line in $(\beta, E(r))$ space: the **[[Security Market Line]] (SML)**. Two points pin it down: $r_f$ at $\beta = 0$ and $M$ at $\beta = 1$.

![[L10_sml.png]]

### CML vs SML

| | CML | SML |
|---|---|---|
| Horizontal axis | total risk $\sigma$ | systematic risk $\beta$ |
| Efficient portfolios | ✓ | ✓ |
| Inefficient portfolios | ✗ (lie to the right) | ✓ |
| Individual stocks | ✗ | ✓ |
| Projects | ✗ | ✓ |

> [!info] An efficient portfolio has all three properties
> $\rho_{p,m} = 1$, $\sigma_p = x_m\sigma_m$, and $\beta_p = x_m$. For an efficient portfolio the CML and SML give the same answer.

---

## 4. The beta of a portfolio

Beta is linear in the weights:

$$\boxed{\beta_p = \sum_i x_i\,\beta_i}$$

> [!example] Deck example: 3M and Hewlett-Packard
> $\beta_{3M} = 0.69$, $\beta_{HPQ} = 1.77$, $r_f = 5\%$, $E(r_m) = 12\%$. Portfolio: 40% 3M, 60% HPQ.
> $\beta_p = 0.4(0.69) + 0.6(1.77) = 1.338$, so $E(r_p) = 5\% + 1.338(12\% - 5\%) = 14.37\%$.
>
> **An efficient portfolio with the same expected return and lower risk** (reconstructed; the deck leaves it blank): put $x_m = 1.338$ in the market and $-0.338$ in $r_f$ (borrow). Its $\beta$ is 1.338 and $E(r) = 14.37\%$, but its $\sigma = 1.338\,\sigma_m$ carries **no** specific risk, so it is strictly less risky than the 3M/HPQ mix.

---

## 5. Implementing the CAPM

**Estimating beta.**
- Regress excess returns (omitting $r_f$ gives almost the same beta, but no meaningful alpha).
- Common choices: five years of monthly data, or two to three years of weekly data. Avoid daily data for thinly traded stocks. Betas change over time.
- Market index: usually the S&P 500 (broader US indices give similar betas; a world index such as MSCI is an option).
- Riskless rate in the regression: 30-day Treasury bill returns. Industry asset betas are tabulated (the deck shows Damodaran's table, e.g. banks around 0.75 levered, restaurants 1.34).

**Which riskless rate in the formula?** Today's yield, not a historical average, at a maturity matching the project's cash flows. Firms commonly use 10- to 30-year government yields and often a single cost of capital.

**Which equity premium?**
- Historical: the average excess return of stocks over bonds. 1926 to 2008 gives about 7%, with a wide confidence interval.
- Forward-looking from the Gordon growth model: $E(r_m) = \frac{Div_1}{P_0} + g$. A 2% dividend yield plus 6% long-run nominal GDP growth gives $E(r_m) \approx 8\%$; with long yields near 3%, a premium of about 5%. (Data source in the deck: Damodaran's website.)

---

## 6. Extending the CAPM

- **Evidence for:** you do not get paid for idiosyncratic risk, and beta is positively related to average return (though the line is too flat).
- **Evidence against:** small stocks, value stocks (high book-to-market) and momentum stocks have beaten their betas.
- **Roll critique:** we probably measure the market wrongly (ignoring human capital, real estate and so on). Two fixes:
  - **Consumption CAPM:** betas against consumption growth.
  - **Multi-factor models**, such as **Fama-French three-factor**: market ($r_m - r_f$), size (SMB, small minus big) and value (HML, high minus low book-to-market):

$$E(r_i) - r_f = \beta_{i,1}[E(r_m)-r_f] + \beta_{i,2}[E(r_{small}) - E(r_{big})] + \beta_{i,3}[E(r_{high}) - E(r_{low})]$$

> [!example] IBM with Fama-French (deck)
> $\beta$'s 0.75, 0.18, 0.26; factor premiums 5.5%, 2.2%, 5.3%; $r_f = 4\%$.
> $E(r_{IBM}) = 0.04 + 0.75(0.055) + 0.18(0.022) + 0.26(0.053) = 9.90\%$.

**Prelude to capital budgeting.** A project's beta is generally **not** the firm's equity beta: debt makes the equity beta differ from the **asset beta** of the business, and the project may differ in risk from the firm's existing business. Then estimate the asset beta from comparable firms.

---

## The class board, CAPM part

- Restates the goal: $PV = \sum E(CF_t)/(1+E(r))^t$, and "high **market** risk → high return".
- Draws the CML and the SML side by side. Stocks $i$ and $j$ sit to the right of the CML, and the horizontal gap to the CML is their **specific risk**. On the SML they sit exactly on the line at their betas. Marks $\beta_{rf} = 0$ and $\beta_m = 1$.
- Writes the CML $E(r_p) = r_f + \frac{E(r_m)-r_f}{\sigma_m}\sigma_p$ next to the SML $E(r_i) = r_f + \beta_i(E(r_m) - r_f)$.
- Repeats the CML/SML table above (efficient portfolios ✓✓; inefficient portfolios, stocks, projects ✗✓).
- Boxes beta as the **market risk index**:

$$\beta_i = \frac{Cov(r_i, r_m)}{Var(r_m)} = \frac{\sigma_i\sigma_m\rho_{im}}{\sigma_m^2} = \frac{\sigma_i}{\sigma_m}\rho_{im}$$

---

## Summary

> [!success] Key takeaways
> - Only **systematic** risk is priced; diversifiable risk earns nothing, so $\sigma$ is the wrong measure for single assets. ^summary
> - $\beta_i = Cov(r_i,r_m)/\sigma_m^2 = \rho_{im}\sigma_i/\sigma_m$; total variance $= \beta_i^2\sigma_m^2 + \sigma_\varepsilon^2$.
> - CAPM / SML: $E(r_i) = r_f + \beta_i[E(r_m) - r_f]$, valid for every asset, portfolio and project.
> - CML prices only efficient portfolios (where $\beta_p = x_m$ and $\sigma_p = x_m\sigma_m$).
> - Portfolio beta is the weighted average of betas.
> - In practice: today's long yield for $r_f$, a 5 to 7% equity premium, five years of monthly data for beta; multi-factor models extend the CAPM.

---

## Related Notes

- [[Lesson_09-Capital Market Line]] — efficient portfolios and the CML
- [[Lesson_11-Final Tutorial]] — the last class: exam-style CML/SML questions
- [[HW_10-CML, SML & CAPM]] — problem set with official solutions
- [[Lesson_06-Capital Budgeting & Free Cash Flow]] — where the CAPM cost of capital is used
- [[Financial Management]] — subject hub
