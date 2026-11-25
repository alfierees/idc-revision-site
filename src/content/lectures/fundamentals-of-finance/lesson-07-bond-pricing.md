---
title: "Bond Pricing"
week: 7
semester: 2
year: 1
academic_year: "2024-25"
course: Financial Management & Finance
lecture: "Lesson 7 — Bonds"
date: 2026-06-05
tags:
  - financial-management
  - bond
  - bond-pricing
  - yield-to-maturity
  - zero-coupon-bond
aliases:
  - FM Lesson 7
  - Bonds
  - Bond Pricing
  - Price-Yield
subject: fundamentals-of-finance
in_scope: true
---

# Bond Pricing

> Part of: [[Financial Management]]
> **Lesson 7** — Financial Management & Finance
> Key concepts: [[Bond]], [[Coupon]], [[Face Value]], [[Yield to Maturity]], [[Zero-Coupon Bond]]

> [!info] Class workbook (download)
> - [2025.05.30 Seventh class (Bonds).xlsx](/papers/fundamentals-of-finance/class-2025-05-30-seventh-class-bonds.xlsx)
>
> What each sheet does: [[#The class workbook, sheet by sheet|see below]].

---

## What a bond is

A ==bond== is a loan *to* the issuer. It has three features:

> [!info] The three things on a bond
> - **Face value (par)** — the principal repaid at maturity (e.g. \$100 or \$1000).
> - **Coupon rate** — the periodic interest, quoted on the face value (e.g. 5% → $5/yr on $100 face).
> - **Maturity** — when the face value is returned.

A bond's price is just the **PV of its cash flows** — the coupons (an annuity) plus the face value (a single flow) — discounted at the market yield $r$ for bonds of similar risk:

$$\boxed{P = \sum_{t=1}^{n}\frac{C}{(1+r)^t} + \frac{FV}{(1+r)^n} = \underbrace{\tfrac{C}{r}\big(1-(1+r)^{-n}\big)}_{\text{coupons}} + \underbrace{\tfrac{FV}{(1+r)^n}}_{\text{face}}}$$ ^bond-price

In Excel: `-PV(r, n, C, FV)`.

---

## The price–yield relationship

> [!success] Price and yield move in opposite directions
> When the market yield $r$ rises, the fixed coupons are discounted harder → the price **falls**, and vice versa. The relationship is also **convex** (curved), not linear.

![[L7_price_yield.png]]

> [!info] Premium, par, discount
> | Condition | Price | Name |
> |---|---|---|
> | coupon rate $>$ yield | $P > FV$ | **premium** bond |
> | coupon rate $=$ yield | $P = FV$ | **par** bond |
> | coupon rate $<$ yield | $P < FV$ | **discount** bond |
>
> Intuition: if the bond pays more than the market demands, buyers bid the price above par until the *yield* falls to the market rate.

> [!example] Straight bond — 6yr, 5% coupon, FV 100
> Coupons of $5/yr plus $100 at year 6. At market yield 5.5%: $P = -\texttt{PV}(5.5\%,6,5,100) = \$97.50$ — a **discount** (coupon 5% < yield 5.5%). ✓

As a bond ages toward maturity its price is **pulled to par** regardless of where it started:

![[L7_pull_to_par.png]]

---

## Pricing between coupon dates: before vs after

> [!warning] "After the coupon" vs "before the coupon"
> - **Price after a coupon** = PV of the *remaining* (future) coupons + face. This is the standard `-PV`.
> - **Price before a coupon** = price after $+$ the coupon about to be paid (the seller is entitled to that imminent coupon).

> [!example] The 5% bond at $t=2$, yield now 4%
> After the year-2 coupon: $-\texttt{PV}(4\%,4,5,100) = \$103.63$. Before it (still owed the \$5 coupon): $103.63 + 5 = \$108.63$.

---

## Special bond structures

### Partial-redemption bond

Face value repaid in instalments, so the coupon (charged on the *outstanding* face) **steps down** after each redemption.

> [!example] \$1000 face, 8% coupon, \$500 repaid at yr 2, rest at yr 5
> Coupons: $80/yr while $1000 outstanding (yrs 1–2), then $40/yr on the remaining $500 (yrs 3–5). Price at 7% yield $= \texttt{NPV}(7\%, \text{CFs}) = \$1{,}029.54$.

### Semi-annual & CPI-linked bond

Coupons paid twice a year use **half the stated coupon** on each date ($6\%/2 = 3\%$ of face). If the bond is CPI-linked, discount at the **real** semi-annual rate, then convert the resulting real value back to a nominal price using actual inflation.

> [!example] \$100 face, 6% semi-annual coupon, 5yr, nominal 7%, expected inflation 1.8%
> Real annual rate $= \frac{1.07}{1.018}-1 = 5.108\%$; real semi-annual $= 1.05108^{1/2}-1 = 2.522\%$. Price $= -\texttt{PV}(2.522\%, 10, 3, 100) = \$104.18$. (See [[Lesson_04-Inflation, Real Rates & Expected Inflation]] for the real/nominal conversion.)

### Zero-coupon bond

No coupons at all — just one payment of face value at maturity. Pure discounting:

$$\boxed{P = \frac{FV}{(1+r)^n}}$$ ^zero-coupon

> [!example] 4-yr zero, $r = 6\%$, payment $100$
> $P = 100/1.06^4 = \$79.21$. A zero always trades at a **discount** (no coupons to lift it).

---

## Comparison table

| Bond type | Cash-flow pattern | Pricing approach |
|---|---|---|
| Straight | level coupon + face at end | `-PV(r,n,C,FV)` |
| Partial redemption | stepped coupon, face in instalments | `NPV` of bespoke CFs |
| Semi-annual | coupon/2 each half-year, $2n$ periods | `-PV(r_semi, 2n, C/2, FV)` |
| CPI-linked | real coupons; discount at real rate | real PV → convert to nominal via inflation |
| Zero-coupon | single FV at maturity | $FV/(1+r)^n$ |

---

## The class workbook, sheet by sheet

The 30 May 2025 workbook prices every bond in this lesson twice: by laying out the cash flows and using `NPV`, and with `-PV(rate, n, coupon, face)`. The two always agree.

- **`Streight bond`:** 6 years, face 100, 5% coupon. Price at 5.5% `=NPV(B12,C6:H6)` = `=-PV(B12,6,5,100)` = **97.50** (discount). At $t=2$ with the yield at 4%: after the coupon `=-PV(B18,4,5,100)` = 103.63; before it, `=B19+D6` = **108.63**.
- **`Partial redeption`:** face 1,000, 8% coupon, 500 repaid at year 2 and 500 at year 5. Coupons 80, 80, then 40, 40, 40; cash flows 80, 580, 40, 40, 540. At 7%: **1,029.54**. At $t=2$ (after the redemption) with the rate at 8%, the bond is worth exactly **500**: when the yield equals the coupon rate, a bond trades at par.
- **`Streight with two payments`:** CPI-linked, face 100, 6% coupon paid as 3 every six months for 5 years. Nominal 7% and expected inflation 1.8% give a real annual rate `=(1+B11)/(1+B12)-1` = 5.108% and a real semi-annual rate 2.522%, so the price is `=-PV(B14,10,3,100)` = **104.18**. Part b: actual inflation turned out at 2% a year; the real value at period 4 (two years in) is `=-PV(B25,6,3,100)` = 102.63, and the nominal price is `=B27*(1+2%)^2` = **106.78**.
- **`Zeros and Perpetual`:** a 4-year zero paying 100 at 6%: `=F7/(1+B9)^4` = **79.21** (the text says face value \$1,000, but the cell uses 100). A perpetual bond (consol) paying 4% of 1,000 forever at 6%: `=40/B15` = **666.67**.
- **`YTM`:** a 5-year bond with a 6% coupon trading at 95. Its yield to maturity is the IRR of buying it: `=IRR(-95, 6, 6, 6, 6, 106)` = **7.23%**. The table summarises: YTM = coupon rate → price = face (par); YTM < coupon → price > face (premium); YTM > coupon → price < face (discount, "disagio").

---

## Summary

> [!success] Key takeaways
> - A bond price is the PV of coupons (annuity) + face value (single flow); `-PV(r,n,C,FV)`. ^summary
> - **Price and yield move inversely** and convexly; coupon vs yield determines premium/par/discount.
> - "Before-coupon" price = "after-coupon" price + the imminent coupon.
> - Semi-annual coupons use coupon/2 over $2n$ periods; CPI-linked bonds discount real cash flows at the real rate, then convert to nominal.
> - A zero-coupon bond is pure discounting of the face value and always trades at a discount.

---

## Related Notes

- [[Lesson_01-Time Value of Money]] — annuity + single-flow PV that build the bond price
- [[Lesson_04-Inflation, Real Rates & Expected Inflation]] — real/nominal conversion for CPI-linked bonds
- [[Lesson_05-The Four Loan Types]] — a bond is a loan to the issuer
- [[HW_08-Bond Pricing]] — problem set: above/below par, semi-annual, solving for the coupon
- [[Financial Management]] — subject hub
