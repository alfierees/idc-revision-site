---
title: "Finance Formula Sheet"
subject: fundamentals-of-finance
type: reference
description: "Every formula the final uses, grouped the way the questions come, with when each applies and the Excel function that does it: annuities, rate conversion, Fisher, loans and prepayment fees, bonds, NPV, IRR, PI, EAV and MIRR, free cash flow, portfolio risk, the CML and the SML."
course: Fundamentals of Finance
instructor: Dr. Tal Mofkadi
semester: 2
year: 1
order: 2
pinned: true
tags:
  - fundamentals-of-finance
  - exam-prep
  - formula-sheet
aliases:
  - Fundamentals of Finance Formula Sheet
---

> The exam gives you the course's two formula sheets (see [[Finance Cheat Sheet]] for the official one, retyped). This page groups them the way the questions come and adds **when** each applies. Worked examples are on the [[Cheat Sheet (Lessons 1–11)]].

## Time value of money

| Stream | PV | FV | Excel |
|---|---|---|---|
| One sum | $\dfrac{FV}{(1 + r)^n}$ | $PV(1 + r)^n$ | `PV`, `FV` |
| Annuity | $\dfrac{PMT}{r}\left[1 - (1 + r)^{-n}\right]$ | $\dfrac{PMT}{r}\left[(1 + r)^n - 1\right]$ | `PV(r,n,-PMT)` |
| Annuity due | annuity $\times (1 + r)$ | annuity $\times (1 + r)$ | `PV(r,n,-PMT,,1)` |
| Growing annuity | $\dfrac{PMT_1}{r - g}\left[1 - \left(\tfrac{1 + g}{1 + r}\right)^n\right]$ | PV $\times (1 + r)^n$ | build the stream, `NPV` |
| $g = r$ | $\dfrac{n\,PMT_1}{1 + r}$ | | |
| Perpetuity | $\dfrac{PMT}{r}$; growing $\dfrac{PMT_1}{r - g}$ | | |
| Solve for $n$ | $n = \dfrac{\ln(\text{factor})}{\ln(1 + r)}$ | | `NPER` |

PV lands **one period before the first payment**; FV lands **at the last payment**.

## Rates

| Conversion | Stated | Effective |
|---|---|---|
| Long to short | $r/n$ | $(1 + r)^{1/n} - 1$ |
| Short to long | $n\,r$ | $(1 + r)^n - 1$ |
| Compounded $m$ times | | $\left(1 + \tfrac{r_s}{m}\right)^m - 1$ |
| Interest paid in advance | | $\left(\tfrac{1}{1 - r_s}\right)^{1/n} - 1$ |
| With fees | solve $PV_{in} = PV_{out}$ for $r$ | `IRR` or `RATE`, then annualise |

## Inflation

$$
1 + r_{nom} = (1 + r_{real})(1 + \pi^e), \qquad \pi_{0\to n} = \frac{\text{index}_n}{\text{index}_0} - 1
$$

Both rates effective and for the same period. Indexed value in shekels $=$ real value $\times (1 + \pi_{0 \to t})$.

## Loans

| | Equal payment | Equal principal | Interest only | Bullet |
|---|---|---|---|---|
| Payment $k$ | $PMT = \dfrac{PV\,r}{1 - (1 + r)^{-n}}$ | $\tfrac{PV}{n} + r\,B_{k-1}$ | $PV\,r$; last $+PV$ | $PV(1 + r)^n$ at $n$ |
| Interest $k$ | $r\,B_{k-1}$ | $r\,B_{k-1}$ | $PV\,r$ | |
| Principal $k$ | $PMT - INT_k$, grows by $(1 + r)$ | $PV/n$ | 0, last $PV$ | |
| Balance after $k$ | $PMT\,a_{\overline{n-k}\vert r}$ | $PV(1 - k/n)$ | $PV$ | $PV(1 + r)^k$ |
| Excel | `PMT`, `IPMT`, `PPMT` | table | | |

$$
\text{Prepayment fee} = \max\left(PMT\,a_{\overline{n-k}|r_{now}} - PMT\,a_{\overline{n-k}|r_{loan}},\ 0\right)
$$

## Bonds

$$
C = FV\frac{i}{m}, \qquad P = C\,a_{\overline{n}|r} + \frac{FV}{(1 + r)^n}, \qquad \text{zero: } \frac{FV}{(1 + r)^n}, \qquad \text{consol: } \frac{C}{r}
$$

| Case | Rule |
|---|---|
| After $k$ coupons | same formula with $n - k$; just **before** a coupon add $C$ |
| Yield from a price | `RATE(n, C, -P, FV)` or `IRR` |
| Same risk | same yield for every bond |
| CPI-linked | real flows at the real rate |
| Partial redemption | coupons on the outstanding face; discount each flow |

## Project criteria

$$
NPV = -I_0 + \sum_{t=1}^n \frac{CF_t}{(1 + r)^t}, \qquad 0 = -I_0 + \sum \frac{CF_t}{(1 + IRR)^t}, \qquad PI = \frac{NPV}{I_0}
$$

$$
EAV = \frac{NPV}{a_{\overline{T}|r}} = \frac{NPV\cdot r}{1 - (1 + r)^{-T}}, \qquad MIRR = \left(\frac{FV_{inflows}}{PV_{outflows}}\right)^{1/n} - 1
$$

Excel `NPV(r, CF1:CFn)` starts at $t = 1$: add $-I_0$ yourself.

## Free cash flow

$$
FCF = (\text{Rev} - \text{Costs} - \text{Dep})(1 - t) + \text{Dep} - \text{CapEx} + \text{Sale} - t(\text{Sale} - \text{BV}) - \Delta WC
$$

$$
DEP = \frac{I_0 - \text{salvage}}{N}, \qquad BV_k = I_0 - k\,DEP, \qquad WC = \text{inventory} + \text{customers} - \text{suppliers}
$$

The changes in working capital sum to zero over the project.

## Portfolios

$$
E(r_p) = \sum x_iE(r_i), \qquad \sigma_p^2 = x_A^2\sigma_A^2 + x_B^2\sigma_B^2 + 2x_Ax_B\rho\sigma_A\sigma_B, \qquad \rho = \frac{Cov}{\sigma_A\sigma_B}
$$

$$
x_A^{MVP} = \frac{\sigma_B^2 - \rho\sigma_A\sigma_B}{\sigma_A^2 + \sigma_B^2 - 2\rho\sigma_A\sigma_B} \qquad (\rho = -1:\ \tfrac{\sigma_B}{\sigma_A + \sigma_B};\ \rho = 0:\ \tfrac{\sigma_B^2}{\sigma_A^2 + \sigma_B^2};\ \rho = 1:\ \text{all in the safer})
$$

## CML and SML

| | CML (efficient only) | SML (everything) |
|---|---|---|
| Line | $E(r_p) = r_f + \dfrac{E(r_m) - r_f}{\sigma_m}\sigma_p$ | $E(r_i) = r_f + \beta_i[E(r_m) - r_f]$ |
| Risk measure | $\sigma_p = x_m\sigma_m$ | $\beta_i = \dfrac{\rho_{im}\sigma_i}{\sigma_m}$, $\beta_p = \sum x_i\beta_i$ |
| Efficient portfolio | $\beta = x_m$ | |

$$
\sigma_i^2 = \underbrace{\beta_i^2\sigma_m^2}_{\text{systematic}} + \underbrace{\sigma_\varepsilon^2}_{\text{specific}}, \qquad \text{Sharpe} = \frac{E(r) - r_f}{\sigma}
$$
