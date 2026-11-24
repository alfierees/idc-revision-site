---
title: "Inflation, Real Rates & Expected Inflation"
week: 4
semester: 2
year: 1
academic_year: "2024-25"
course: Financial Management & Finance
lecture: "Lesson 4 — Inflation & Expected Interest Rate"
date: 2026-06-05
tags:
  - financial-management
  - inflation
  - real-interest-rate
  - fisher-equation
  - nominal-vs-real
aliases:
  - FM Lesson 4
  - Real vs Nominal
  - Fisher Equation
  - Inflation
subject: fundamentals-of-finance
in_scope: true
---

# Inflation, Real Rates & Expected Inflation

> Part of: [[Financial Management]]
> **Lesson 4** — Financial Management & Finance
> Key concepts: [[Inflation]], [[CPI]], [[Nominal Rate]], [[Real Interest Rate]], [[Fisher Equation]]

> [!info] Class workbooks (downloads)
> - [2025.05.08 Fourth class (Inflation).xlsx](/papers/fundamentals-of-finance/class-2025-05-08-fourth-class-inflation.xlsx)
> - [2025.05.19 Recitation hour.xlsx](/papers/fundamentals-of-finance/class-2025-05-19-recitation-hour.xlsx) (sheet `Ex5 question 3`: tuition and pension in real terms)
>
> What each sheet does: [[#The class workbooks, sheet by sheet|see below]].

---

## Money vs purchasing power

Interest makes your bank balance grow, but inflation makes each dollar buy less. What you actually care about is ==purchasing power== — how many *apples* you can buy, not how many *dollars* you hold. This lesson separates the two: [[Nominal Rate|nominal]] returns (dollars) from [[Real Interest Rate|real]] returns (apples).

> [!info] Measuring inflation with the CPI
> The [[CPI]] (Consumer Price Index) tracks the price of a basket of goods. Inflation between two dates is the percentage change:
> $$\pi = \frac{CPI_{\text{end}}}{CPI_{\text{start}}}-1$$
> e.g. $CPI$ rising $1024\to 1047$ is $\pi = 1047/1024 - 1 = 2.25\%$.

---

## The Fisher equation — the exact relationship

The real rate is what's left of your nominal return *after* inflation erodes purchasing power. Crucially it is a **ratio**, not a subtraction:

$$\boxed{1 + r_{\text{real}} = \frac{1+r_{\text{nominal}}}{1+\pi}}\;\Longrightarrow\; r_{\text{real}} = \frac{1+r_{\text{nom}}}{1+\pi}-1$$ ^fisher

> [!example] The apples derivation (why it's a ratio)
> Start with \$100 and one apple costs $1 → you can buy 100 apples. After a year at $r_{\text{nom}} = 5\%$ you have $105; with $2\%$ inflation an apple now costs \$1.02. Apples you can buy: $105/1.02 = 102.94$. Your **real** return is $102.94/100 - 1 = 2.94\%$ — exactly $\frac{1.05}{1.02}-1$.

> [!tip] The approximation $r_{\text{real}} \approx r_{\text{nom}} - \pi$
> For small rates the ratio is well-approximated by simple subtraction: $5\% - 2\% = 3\% \approx 2.94\%$. The approximation *overstates* the real rate slightly and worsens as inflation rises — always use the exact ratio in calculations.

![[L4_fisher_real_rate.png]]

---

## Nominal vs real cash flows — match them to the right rate

> [!warning] The golden rule of discounting
> **Discount nominal cash flows at the nominal rate; discount real cash flows at the real rate.** Mixing them is wrong. Both give the same PV if done consistently.

> [!example] A \$1000 promise in 7 years, $r_{\text{nom}}=5\%$, expected $\pi = 2\%$
> - **Nominal payment** (fixed \$1000): $PV = 1000/1.05^7 = \$710.68$.
> - **Inflation-adjusted (real) payment**: the \$1000 is in *today's* purchasing power, so discount at the real rate $r_{\text{real}} = \frac{1.05}{1.02}-1 = 2.941\%$: $PV = 1000/1.02941^7 = \$816.35$.
>
> The inflation-protected promise is worth more — it preserves purchasing power. **Check:** $816.35/710.68 - 1 = 14.87\% = (1.02)^7 - 1$, the total inflation over 7 years. ✓

---

## Adjusting a future payment for inflation

If a payment is *contractually* linked to inflation, scale it up by the realised price change before discounting:

| Information given | Adjusted (nominal) payment |
|---|---|
| Total inflation 20% over the period | $1000\times 1.20 = \$1200$ |
| 1.5%/yr for 3 yrs then 3.45%/yr for 4 yrs | $1000\,(1.015)^3(1.0345)^4 = \$1197.62$ |
| $CPI_0 = 1301,\ CPI_7 = 1521$ | $1000\times \frac{1521}{1301} = \$1169.10$ |

---

## Expected vs actual inflation

> [!info] Two distinct moments
> - **At decision time** you discount using *expected* inflation (and hence the *expected* real rate) — it's all you know.
> - **Later**, when *actual* inflation is realised, you re-price using the real value compounded by the actual inflation to convert back to nominal (dollar) terms.

> [!example] Re-pricing after the fact
> A CPI-linked bond worth 102 "apples" at $t=4$, with actual inflation 2%/yr, has nominal **price** $= 102\times(1.02)^{?}$ — convert real value to dollars using the *actual* cumulative inflation since issue. (Worked fully in [[Lesson_07-Bond Pricing]], the CPI-linked bond.)

---

## The class workbooks, sheet by sheet

### 8 May 2025, fourth class (Inflation), `Sheet1`

- **Inflation from the CPI:** CPI 1,024 in January and 1,047 in February 2025, so inflation `=B4/B3-1` = 2.25% for the month.
- **"I owe you \$1,000 in 7 years":** paid nominally it is 1,000. Linked to inflation it is 1,000 times the cumulative inflation: with 20% in total, 1,200; with 1.5% a year for 3 years then 3.45% for 4, `=1000*(1+1.5%)^3*(1+3.45%)^4` = 1,197.62; with CPI going from 1,301 to 1,521, `=1000*1521/1301` = 1,169.10.
- **Real interest with apples:** 100 papilimos at 5% become 105; an apple's price goes from 1 to 1.02. You could buy 100 apples today and 102.94 next year, so the real rate is `=(1+5%)/(1+2%)-1` = **2.94%**, not 3%.
- **Final example: valuing the promise.** Nominal rate 5%, expected inflation 2%.
  - (a.1) Not linked: `=1000/(1+B48)^7` = **710.68** today.
  - (a.2) Linked: discount at the real rate 2.94%, giving `=1000/(1+B59)^7` = **816.35**. Check: 816.35/710.68 − 1 = 14.87% = $(1.02)^7 - 1$, the expected cumulative inflation.
  - (b.1) Not linked, after 4 years (3 years left): 863.84.
  - (b.2) Linked, with actual inflation 1.8% a year: real value `=1000/(1+B76)^3` = 916.71, then converted to today's money with the **actual** inflation so far, `=B78*(1+1.8%)^4` = **984.52**.

### 19 May 2025, recitation hour, sheet `Ex5 question 3`

A walkthrough of [[HW_05-Inflation & Real Annuities|HW 5]] question 3. Nominal rate 8%, inflation 1.88%, so the real rate is `=(1+B3)/(1+B4)-1` = 6.007%. Tuition of 25,000 and 27,000 (real) in years 4 and 5 is 26,933.68 and 29,635.24 in nominal money; the year-40 pension of 50,000 (real) is 105,324.03 nominal. Present values in real terms: tuition 39,966.31, plus 20 pension payments from year 40 discounted back, `=-PV(B5,20,50000)*1/(1+B5)^39` = 58,914.66; total **98,880.97**.

---

## Summary

> [!success] Key takeaways
> - Inflation $\pi = CPI_{\text{end}}/CPI_{\text{start}} - 1$. ^summary
> - Fisher (exact): $1+r_{\text{real}} = \dfrac{1+r_{\text{nom}}}{1+\pi}$; approximation $r_{\text{real}}\approx r_{\text{nom}}-\pi$ only for small rates.
> - **Match the cash flow to the rate**: nominal↔nominal, real↔real. Both routes give the same PV.
> - Inflation-protected (real) payments are worth more than fixed nominal ones because they preserve purchasing power.
> - Use *expected* inflation to value today; use *actual* inflation to re-price and convert real values back to dollars later.

---

## Related Notes

- [[Lesson_03-Rate Conversion, Effective Rates & EAC]] — the other rate-conversion toolkit
- [[Lesson_07-Bond Pricing]] — CPI-linked bonds put real/nominal pricing to work
- [[HW_05-Inflation & Real Annuities]] — retirement & tuition planning in real terms
- [[Financial Management]] — subject hub
