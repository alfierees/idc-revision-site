---
title: "Cheat Sheet (Lessons 1–11)"
subject: fundamentals-of-finance
type: reference
description: "Everything the final asks, with a worked past-paper example for each: annuities and growing streams, stated vs effective rates and fees, inflation and Fisher, the four loan types and prepayment fees, bond pricing, NPV, IRR, PI and EAC, free cash flow, two-asset portfolios, the CML and the SML."
course: Fundamentals of Finance
instructor: Dr. Tal Mofkadi
semester: 2
year: 1
order: 1
pinned: true
tags:
  - fundamentals-of-finance
  - exam-prep
  - cheat-sheet
aliases:
  - Fundamentals of Finance Cheat Sheet
---

> **The exam:** 3 hours, the two course formula sheets, a calculator and Excel. **Part A** is 10 multiple-choice questions (5 points each); **Part B** is two open questions (25 points each), almost always a **free-cash-flow project** and one more (bonds, a savings plan, project criteria, or CML and SML). Answers are rounded to two decimals. The 2024 take-home exams were five long questions instead.
>
> Every multiple-choice question is one of about a dozen types, listed in §0. The open FCF question is worth a quarter of the paper on its own: practise the table in §7 until it is automatic.

---

## 0. Method picker: what does this question want?

| You see… | Do this | Section |
|---|---|---|
| Equal payments for $n$ periods, a deposit plan, a pension | Annuity PV or FV; "at the **start** of each month": multiply by $(1 + r)$ | §1 |
| Payments growing (or falling) by $g$ | Growing annuity $\frac{PMT_1}{r - g}\left[1 - \left(\frac{1+g}{1+r}\right)^n\right]$ | §1 |
| Payments every 2 or 3 years | Convert $r$ to a 2- or 3-year rate first | §2 |
| "Effective annual rate" of a loan with fees | Timeline of what you **actually** get and pay; solve the IRR; annualise | §2 |
| Two offers for the same thing (developer, instalments) | Equate PVs, solve for $r$ | §2 |
| Real vs nominal, CPI-linked vs not | Fisher: $1 + r_{nom} = (1 + r_{real})(1 + \pi)$ | §3 |
| Two bonds, one indexed, one not | Each gives a yield; Fisher gives expected inflation | §3 |
| Loan balance, the principal in payment $k$ | Balance $=$ PV of the remaining payments | §4 |
| Repaying a mortgage early after rates fell | Fee $=$ PV at the new rate $-$ PV at the loan rate | §4 |
| A bond price, a yield, a coupon | Coupon first; annuity of coupons $+$ discounted face | §5 |
| Projects: accept, rank, budget, unequal lives | The decision table: NPV, PI, EAV | §6 |
| "Which statements about NPV and IRR are correct?" | Conventional projects: NPV falls with $r$; IRR does not depend on $r$ | §6 |
| A new project with revenue, depreciation, tax, a loan | FCF table; drop sunk costs and financing | §7 |
| Two stocks, a correlation, "portfolio SD" | $\sigma_p^2 = x_A^2\sigma_A^2 + x_B^2\sigma_B^2 + 2x_Ax_B\rho\sigma_A\sigma_B$ | §8 |
| "Efficient portfolio", "invests optimally", SD given | CML: $E(r_p) = r_f + \frac{E(r_m) - r_f}{\sigma_m}\sigma_p$ | §9 |
| A share, a beta, a correlation with the market | SML: $E(r) = r_f + \beta[E(r_m) - r_f]$ | §10 |

---

## 1. Time value of money (Lessons 1, 2)

| Stream | PV (one period **before** the first payment) |
|---|---|
| Annuity | $\dfrac{PMT}{r}\left[1 - \dfrac{1}{(1 + r)^n}\right]$ |
| Growing annuity | $\dfrac{PMT_1}{r - g}\left[1 - \left(\dfrac{1 + g}{1 + r}\right)^n\right]$ |
| Perpetuity, growing perpetuity | $\dfrac{PMT}{r}$, $\;\dfrac{PMT_1}{r - g}$ ($r > g$) |
| FV of an annuity (at the **last** payment) | $\dfrac{PMT}{r}\left[(1 + r)^n - 1\right]$ |

- **Annuity due** (payments at the start): the PV formula lands one period too early, so multiply by $(1 + r)$.
- **Deferred** stream: value it with the formula, then discount the result from "one period before the first payment" back to today.
- Falling payments: $g$ is negative, e.g. $-1\%$.

> [!example] Worked: a retirement plan ([[PP_05|2024 Moed B]] Q7)
> Ilana saves at the end of each month for 444 months, then withdraws 15,000 at the **start** of each month for 216 months. Effective annual 6.168%, so monthly $1.06168^{1/12} - 1 = 0.5\%$.
>
> Needed at 67: $15{,}000\cdot\frac{1}{0.005}\left[1 - \frac{1}{1.005^{216}}\right]\cdot1.005 = 1{,}988{,}360$. Deposits: $PMT\cdot\frac{1.005^{444} - 1}{0.005} = 1{,}988{,}360$, so $PMT = 1{,}219$.

---

## 2. Stated and effective rates (Lesson 3)

| | To a shorter period | To a longer period |
|---|---|---|
| **Stated** (APR) | divide: $r/n$ | multiply: $n\cdot r$ |
| **Effective** | root: $(1 + r)^{1/n} - 1$ | compound: $(1 + r)^n - 1$ |

"12% a year compounded monthly" is stated: 1% a month, effective $1.01^{12} - 1 = 12.68\%$. Payments every three years at 10%: $r_{3y} = 1.1^3 - 1 = 33.1\%$.

**Fees and the true rate:** draw what you **receive** and what you **pay**, then solve for the rate that equates them.

> [!example] Worked: two fees ([[PP_04|2024 Moed A]] Q6, again in [[PP_02|2025 Moed B]])
> Borrow 50,000 for 10 months at 12% compounded monthly, a 1,000 fee up front and 1,200 at the end. You get 49,000; you repay $50{,}000\cdot1.01^{10} + 1{,}200 = 56{,}431$.
>
> $r_{month} = \left(\tfrac{56{,}431}{49{,}000}\right)^{1/10} - 1 = 1.422\%$, so $EAR = 1.01422^{12} - 1 = 18.46\%$.

> [!example] Worked: one fee ([[PP_03|2025 Moed A]] Q4)
> 100,000 for a year at 6% monthly, a 780 fee now: $99{,}220 = \tfrac{100{,}000\cdot1.005^{12}}{1 + r} = \tfrac{106{,}168}{1 + r}$, so $r = 7\%$.

**Implied rate in two offers** ([[PP_03|2025 Moed A]] Q2): 2,000,000 now $+$ 700,000 in 4 years against 700,000 now $+$ 2,300,000 in 4 years. The difference: 1,300,000 now saves 1,600,000 in 4 years, $r = (1{,}600/1{,}300)^{1/4} - 1 = 5.33\%$.

---

## 3. Inflation, real and nominal (Lesson 4)

$$
1 + r_{nominal} = (1 + r_{real})(1 + \pi), \qquad \pi_{0 \to n} = \frac{\text{index}_n}{\text{index}_0} - 1 = \prod(1 + \pi_t) - 1
$$

- A **non-linked** plan or bond quotes a **nominal** rate; a CPI-linked one quotes a **real** rate.
- Discount nominal flows at the nominal rate, real (indexed) flows at the real rate.
- Actual inflation above the expected rate: the indexed deal was better for the lender.

> [!example] Worked: real returns after the fact
> 2% nominal, 5% inflation ([[PP_02|2025 Moed B]] MCQ 6): $\tfrac{1.02}{1.05} - 1 = -2.857\%$.
> Prices **fell** from 106.5 to 102.24 ([[PP_04|2024 Moed A]] Q10): $\pi = -4\%$, real $= \tfrac{1.045}{0.96} - 1 = 8.85\%$.

> [!example] Worked: expected inflation from two bonds ([[PP_04|2024 Moed A]] Q3)
> 5-year zeros, face 100: non-indexed at 62.09 gives $(100/62.09)^{1/5} - 1 = 10\%$ nominal; indexed at 74.73 gives 6% real. $1 + \pi^e = 1.10/1.06$, so $\pi^e = 3.78\%$.
> With a CPI-linked **consol** ([[PP_05|2024 Moed B]] Q3): $300 = 6/r_{real}$ gives $r_{real} = 2\%$; the zero gives 4.5%; $\pi^e = 2.45\%$.

---

## 4. Loans (Lesson 5)

| Type | Payments | Balance after $k$ payments |
|---|---|---|
| Equal payment (Spitzer, the mortgage) | $PMT = \dfrac{PV\cdot r}{1 - (1 + r)^{-n}}$; interest $= r\times$ balance, principal $= PMT -$ interest | PV of the $n - k$ remaining payments |
| Equal principal | principal $PV/n$ each time, plus interest on the balance | $PV - k\cdot PV/n$ |
| Interest only (balloon) | $PV\cdot r$ each period, $PV$ at the end | $PV$ |
| Bullet | one payment $PV(1 + r)^n$ | grows at $r$ |

- **Deferred start:** interest builds up in the grace period, so the balance at the first payment's "one period before" is $PV(1 + r)^{\text{deferral}}$.
- **CPI-linked:** compute the payment in real terms, then multiply by the price index to date.

> [!example] Worked: a deferred loan ([[PP_04|2024 Moed A]] Q5)
> 100,000 at 10%, five equal payments, the first at the end of year 2. Balance at $t = 1$: 110,000. $PMT = 29{,}017.72$. The third payment: balance before it $72{,}162.78$, interest $7{,}216.28$, **principal 21,801**.

**Early repayment fee ("discount difference"):** when market rates have **fallen**, the bank charges

$$
\text{Fee} = \underbrace{PMT\cdot a_{\overline{n-k}|r_{new}}}_{\text{value at today's rate}} - \underbrace{PMT\cdot a_{\overline{n-k}|r_{loan}}}_{\text{book balance}}
$$

and nothing if rates rose.

> [!example] Worked: Michal's mortgage ([[PP_03|2025 Moed A]] Q3)
> 1,000,000 at 0.4% a month for 360 months: $PMT = 5{,}246.65$. After 10 years, 240 remain and the rate is 0.25%. Fee $= 5{,}246.65\left(a_{\overline{240}|0.25\%} - a_{\overline{240}|0.4\%}\right) = 137{,}555$.

---

## 5. Bonds (Lesson 7)

$$
C = FV\cdot\frac{i}{m}, \qquad P = \frac{C}{r}\left[1 - \frac{1}{(1 + r)^n}\right] + \frac{FV}{(1 + r)^n}
$$

with $r$ and $n$ per coupon period. Coupon rate above the yield: **premium**; equal: **par**; below: **discount**. Same risk means the **same yield** for every bond.

| Variant | What changes |
|---|---|
| Just **before** a coupon | add one more $C$ to the price |
| Partial redemption | coupons on the **outstanding** face; discount each piece |
| CPI-linked | discount at the **real** rate (from expected inflation) |
| Issued at par | yield per period $=$ coupon per period |

> [!example] Worked: yield from one bond, price of another ([[PP_03|2025 Moed A]] Q8)
> Series A, one year, 19% coupon, priced 106.25: $106.25 = 119/(1 + r)$, so $r = 12\%$. Series B, 8% for 5 years: $P = 8\,a_{\overline{5}|12\%} + 100/1.12^5 = 85.58$.

> [!example] Worked: CPI-linked, semi-annual ([[PP_03|2025 Moed A]] Q5)
> 8% coupon twice a year, 10 years. Non-linked yield 6%, expected inflation 1.88%: real $1.06/1.0188 - 1 = 4.044\%$, semi-annual 2%. $P = 4\,a_{\overline{20}|2\%} + 100/1.02^{20} = 132.66$. The **actual** inflation in the question is a distraction.

> [!example] Worked: holding-period return ([[PP_04|2024 Moed A]] Q9)
> 8% coupon, 6 years, bought at a 10% yield: $91{,}289$. Sold a year later just **before** the coupon at 8.5%: $8{,}000\,a_{\overline{5}|8.5\%} + 100{,}000/1.085^5 + 8{,}000 = 106{,}030$. Return $16.15\%$.

---

## 6. Choosing projects (Lessons 2, 3)

| Situation | Rule |
|---|---|
| One project | $NPV > 0$; or $IRR > r$ if the project is conventional (one sign change) |
| Mutually exclusive | **highest NPV** (not IRR, not payback) |
| Independent, no budget limit | **every** project with $NPV > 0$ |
| Budget limit, partial projects allowed | rank by $PI = NPV/I_0$ and fill the budget |
| Budget limit, whole projects only | the combination with the highest total NPV |
| Renewable projects of different lengths | highest $EAV = NPV / a_{\overline{T}\vert r}$ (lowest EAC for costs) |
| MIRR | $\left(\frac{FV\text{ of inflows at } r}{PV\text{ of outflows}}\right)^{1/n} - 1$ |

**Statements that come up** ([[PP_03|2025 Moed A]] Q7): a higher discount rate lowers NPV (true); it changes the IRR (false); it makes the project more likely to be worth doing (false); rank exclusive projects by IRR (false).

> [!example] Worked: three projects ([[PP_03|2025 Moed A]] Q12)
> At 8%: A $(-8{,}000, 9{,}600)$ NPV 889, IRR 20%; B $(-10{,}000, 0, 12{,}996)$ NPV 1,142, IRR 14%; C $(-5{,}000, 0, 0, 6{,}655)$ NPV 283, IRR 10%. Independent: take all three. Exclusive: **B**, despite A's higher IRR and faster payback.

```graph
type: finance-npv-profile
paper: a25
```

> [!example] Worked: EAC, replaced forever ([[PP_05|2024 Moed B]] Q1)
> USA part: 120,000, 3-year depreciation, lasts 5 years. China: 50,000, 2-year depreciation, lasts 2. Tax 25%, 12%. After-tax PV of cost: USA $120{,}000 - 0.25(40{,}000)a_{\overline{3}|12\%} = 95{,}982$, EAC $= 95{,}982/a_{\overline{5}|12\%} = 26{,}626$; China $39{,}437$, EAC $23{,}335$. **China**.

---

## 7. Free cash flow (Lesson 6): the open question

| Row | |
|---|---|
| Revenue $-$ costs $-$ depreciation | $=$ EBIT |
| $-$ tax on EBIT | $=$ NOPAT (a loss gives a tax **saving** if the firm has other profits) |
| $+$ depreciation | not a cash cost |
| $-$ investment, $+$ sale of assets, $-$ tax on the gain over book value | |
| $-$ increase in working capital (released at the end) | |
| $=$ **FCF**, discounted at the project's own risk-adjusted rate | |

**Leave out:** sunk costs (R&D already spent), **financing** (the loan, its interest, the bond), allocated overheads that do not change. **Put in:** opportunity costs (space you could rent out), extra wages caused by the project, lost sales of other products (cannibalisation).

**Depreciation shield** ([[PP_04|2024 Moed A]] Q1): one more shekel of depreciation raises the FCF by $t_c$, **less than one shekel**.

**Sale of an asset:** book value $= I_0 - k\cdot DEP$; tax $= t\,(\text{price} - \text{book value})$.

---

## 8. Portfolios of two assets (Lesson 8)

$$
E(r_p) = x_AE(r_A) + x_BE(r_B), \qquad \sigma_p^2 = x_A^2\sigma_A^2 + x_B^2\sigma_B^2 + 2x_Ax_B\rho\,\sigma_A\sigma_B
$$

Minimum variance: $x_A = \dfrac{\sigma_B^2 - \rho\sigma_A\sigma_B}{\sigma_A^2 + \sigma_B^2 - 2\rho\sigma_A\sigma_B}$ ($\rho = 0$: $\tfrac{\sigma_B^2}{\sigma_A^2 + \sigma_B^2}$). A risk-free asset adds no variance: $\sigma_p = x\sigma$ for the risky part.

> [!example] Worked: the most in the safer stock ([[PP_04|2024 Moed A]] Q4)
> A: 15%, SD 20%; B: 25%, SD 40%; $\rho = 0$. Past the MVP, more of A lowers return **and** raises risk. $x_A = \tfrac{0.16}{0.04 + 0.16} = 0.8$: at most **80,000** of 100,000.

> [!example] Worked: two stocks and cash ([[PP_05|2024 Moed B]] Q4)
> 30% in each stock (SD 16%, 20%, $\rho = 0.6$), 40% risk-free: $\sigma_p^2 = 0.09(0.0256) + 0.09(0.04) + 2(0.09)(0.16)(0.20)(0.6) = 0.00936$, $\sigma_p = 9.67\%$.

---

## 9. Efficient portfolios and the CML (Lessons 9, 11)

$$
E(r_p) = r_f + \frac{E(r_m) - r_f}{\sigma_m}\,\sigma_p, \qquad \sigma_p = x_m\sigma_m, \qquad \beta_p = x_m
$$

Every efficient portfolio has the **same Sharpe ratio**, the CML slope. $x_{rf} < 0$ means borrowing (leverage). Separation theorem: everyone holds the same market portfolio; risk aversion only sets the split with $r_f$.

> [!example] Worked: the SD of an efficient portfolio ([[PP_04|2024 Moed A]] Q2)
> A is efficient with 16% and SD 5%, $r_f = 4\%$: slope $= \tfrac{16 - 4}{5} = 2.4$. B is efficient with 13%: $13 = 4 + 2.4\sigma_B$, so $\sigma_B = 3.75\%$.

> [!example] Worked: as risky as a stock ([[PP_02|2025 Moed B]] MCQ 10)
> Market 15%, SD 20%; $r_f = 5\%$; stock A has SD 40%. The efficient portfolio with SD 40% is $x_m = 2$: $E(r) = 5\% + 0.5\times40\% = 25\%$.

---

## 10. Beta, the SML and pricing (Lesson 10)

$$
E(r_i) = r_f + \beta_i\left[E(r_m) - r_f\right], \qquad \beta_i = \frac{\rho_{im}\sigma_i}{\sigma_m} = \frac{Cov(i, m)}{\sigma_m^2}, \qquad \sigma_i^2 = \beta_i^2\sigma_m^2 + \sigma_\varepsilon^2
$$

Only **systematic** risk is priced. Use the SML for single shares, projects and inefficient portfolios; given a beta, always use the SML. A portfolio with $\beta > 1$ **may** be efficient (levered).

> [!example] Worked: price a perpetual dividend ([[PP_02|2025 Moed B]] MCQ 9)
> SD 60%, $\rho = 1/3$, market SD 15%: $\beta = \tfrac13\cdot\tfrac{60}{15} = 1.33$. $E(r) = 3\% + 1.33(9\% - 3\%) = 11\%$. Price $= 200/0.11 = 1{,}818$.

> [!example] Worked: CAPM plus Gordon ([[PP_02|2025 Moed B]] MCQ 8)
> $\beta = 0.8$: $E(r) = 2\% + 0.8(9\%) = 9.2\%$. Next dividend $7\times1.072 = 7.504$. $P = 7.504/(0.092 - 0.072) = 375.2$.

More practice by topic, in Hebrew: [[Practice Bank by Topic (Hebrew)]].
