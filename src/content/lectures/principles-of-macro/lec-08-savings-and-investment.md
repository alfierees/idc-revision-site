---
title: "Savings and Investment"
week: 8
semester: 2
year: 1
academic_year: "2024-25"
course: Introduction to Macroeconomics
lecture: "Lecture 08: 5, Savings and Investment"
instructor: Dr. Idit Kalisher
tags:
  - macro-economics-intro
  - class-slides
  - loanable-funds-market
  - bond
  - present-value
  - net-present-value
  - financial-intermediaries
aliases:
  - Intro Macro Lecture 08
subject: principles-of-macro
in_scope: true
---

> [!info] Built from the class slides
> AI-written notes from the Moodle deck *5, Savings and Investment*. Slide photos and data charts are not reproduced.

## The financial system

The financial system connects **savers**, who want a return, with **borrowers**, who need finance.

**Financial intermediaries** include banks, investment funds, insurance companies and pension funds. They reduce transaction costs, manage risk, provide liquidity, diversify and turn short-term deposits into long-term loans.

**Financial instruments:**

- **Debt:** bonds, loans, mortgages.
- **Equity:** stocks and shares.
- **Derivatives:** options, futures, swaps.

## Bonds

A **bond** is a debt instrument. The issuer borrows and promises to repay with interest.

- **Pre-determined:** face value, coupon rate, maturity date.
- **Market-determined:** yield, the actual return earned.

A bond's price is the present value of its cash flows:

$$
\text{Price} = \sum_{t=1}^{T} \frac{C}{(1+r)^t} + \frac{FV}{(1+r)^T},
\qquad
C = i \cdot FV
$$

### Worked example

A 3-year bond pays 8% on a face value of 1,000, and the market return is 10%.

$$
\text{Price} = \frac{80}{1.1} + \frac{80}{1.1^2} + \frac{1{,}080}{1.1^3} = 950.27
$$

After the first coupon is paid:

$$
\text{Price} = \frac{80}{1.1} + \frac{1{,}080}{1.1^2} = 965.29
$$

If the market return drops to 5%:

$$
\text{Price} = \frac{80}{1.05} + \frac{80}{1.05^2} + \frac{1{,}080}{1.05^3} = 1{,}081.70
$$

> [!tip] Remember the direction
> When $r < i$, the bond pays more than the market, so its price is above face value. When $r > i$, its price is below face value. **Bond prices and interest rates move in opposite directions.**

## Present value and NPV

$$
PV = \sum_{t=1}^{T}\frac{CF}{(1+r)^t},
\qquad
NPV = -I_0 + PV
$$

A rise in the interest rate lowers the present value of future cash flows, so NPV falls and some projects stop being profitable.

## How the interest rate affects behaviour

**Households.** A higher rate raises the opportunity cost of consuming today (substitution effect). The income effect differs: savers gain, borrowers lose. The course assumes the **substitution effect dominates**, so savings rise with $r$.

**Firms.** A higher rate makes borrowing dearer and lowers present values, so **investment falls**.

## The market for loanable funds

- **Supply** is total saving, $S = s_P + s_B + s_G$.
- **Demand** comes from firms, households and governments that borrow.

If the rate is too low, borrowing exceeds saving and the rate rises. If it is too high, saving exceeds borrowing and the rate falls. At equilibrium, $I^* = S^*$.

Policy works through saving incentives, investment incentives and the fiscal balance: **deficits reduce public saving, surpluses increase it**.
