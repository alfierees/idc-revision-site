---
title: "Finance Cheat Sheet"
semester: 2
year: 1
academic_year: "2024-25"
course: "Financial Management & Finance"
lecture: "Reading 1 — Finance Cheat Sheet (course summary sheet)"
date: 2026-11-21
tags:
  - financial-management
  - fundamentals-of-finance
  - reading
  - formula-sheet
  - time-value-of-money
  - bonds
  - loans
  - capital-budgeting
  - portfolio-risk
  - capm
aliases:
  - FM Cheat Sheet
  - Finance Cheat Sheet
  - Formula Sheet
subject: fundamentals-of-finance
in_scope: true
---

# Finance Cheat Sheet

> Part of: [[Financial Management]]
> **Reading 1** — Financial Management & Finance
> Source: `Finance Cheat Sheet.pdf` (4 pages, Amitai Malik, Teaching Success)

> [!info] This is a summary sheet, not a taught lesson
> It is the course formula sheet: every formula the course uses on four pages, with a few worked examples. It sits under **Readings** on the site. Use it to **revise and look up** formulas; to *learn* a topic, follow the link in each section to the lesson that teaches it. The sheet has two blank "Personal Additions" boxes, which are not reproduced.

> [!tip] How the sheet is organised
> It follows the course order: [[#1. Time value of money]], [[#2. Interest rates: stated vs effective]], [[#3. Inflation and the Fisher equation]], [[#4. Bonds]], [[#5. Loans]], [[#6. Project choice: NPV, IRR and friends]], [[#7. Risk and reward]] (the part with no lesson), then [[#8. Capital budgeting: free cash flow]].

---

## 1. Time value of money

> Taught in [[Lesson_01-Time Value of Money]] and [[Lesson_02-Perpetuities, NPV & IRR]]. Practice: [[HW_01-Time Value of Money]].

$r$ is the **discount rate** and, unless the question says otherwise, it is **compounding**.

- **Discounting** = moving to the *left* on the timeline: **divide** by $(1+r)^n$.
- **Compounding** = moving to the *right*: **multiply** by $(1+r)^n$.

Here $n$ is the number of periods (or payments, for annuities), $PMT$ the periodic payment, $g$ the periodic growth rate.

| Cash flow | Present value | Future value at $n$ |
|---|---|---|
| Single cash flow | $\dfrac{FV_n}{(1+r)^n}$ | $PV\,(1+r)^n$ |
| Annuity (finite, identical payments) | $\dfrac{PMT}{r}\left[1-\dfrac{1}{(1+r)^n}\right]$ | $\dfrac{PMT}{r}\left[(1+r)^n-1\right]$ |
| Growing annuity | $\dfrac{PMT_1}{r-g}\left[1-\left(\dfrac{1+g}{1+r}\right)^n\right]$ | $\dfrac{PMT_1}{r-g}\left[(1+r)^n-(1+g)^n\right]$ |
| Perpetuity (infinite, identical payments) | $\dfrac{PMT}{r}$ | none |
| Growing perpetuity | $\dfrac{PMT_1}{r-g}$ | none |

> [!note] Two timing rules from the sheet
> - **PV** takes you **one period before the first payment**.
> - **FV** takes you **to the final payment**.

**Plain English.** The PV of an annuity is "payment divided by the rate, minus the part that would have been paid after year $n$". A growing perpetuity is the same idea with the rate reduced by the growth.

Special cases and tools:

$$
g = r:\qquad PV=\frac{n\cdot PMT_1}{1+r},\qquad FV=n\cdot PMT_1\,(1+r)^{n-1}
$$

*When growth equals the discount rate, every payment has the same present value, so the PV is just $n$ equal pieces.*

$$
PMT_k = PMT_1\,(1+g)^{k-1}
$$

*The $k$-th payment of a growing stream.*

$$
g \ge r \;\Rightarrow\; PV\to\infty \quad\text{(growing perpetuity)}
$$

*A growing perpetuity only has a finite price if $r>g$.*

**Extracting the power** (solving for $n$): if $1.1^n=1.4641$, then

$$
n=\frac{\ln 1.4641}{\ln 1.1}=4
$$

*Take logs of both sides to bring $n$ down from the exponent.*

**Excel:** `PV`, `FV`, `PMT`, `NPER` and `RATE` cover the annuity rows; for a stream of different amounts use `NPV`.

---

## 2. Interest rates: stated vs effective

> Taught in [[Lesson_03-Rate Conversion, Effective Rates & EAC]]. Practice: [[HW_04-Effective Interest Rates]].

Three ground rules from the sheet: **always draw a timeline**; **adjust every rate to the same period as the timeline** (monthly payments need a monthly rate); and **when comparing scenarios, find each one's PV and compare**.

$n$ = how many times the shorter period fits into the longer one.

| | To the shorter period | To the longer period |
|---|---|---|
| **Stated** interest (APR) | $\dfrac{r_{longer}}{n}$ | $n\cdot r_{shorter}$ |
| **Effective** interest (EAR) | $(1+r_{longer})^{\frac{1}{n}}-1$ | $(1+r_{shorter})^{n}-1$ |

*Stated rates are split or multiplied; effective rates are compounded or rooted.* See [[Stated Rate]] and [[Effective Interest Rate]].

### When stated and effective differ

The sheet lists three situations.

**1. Interest compounded more than once a period** ($n$ = number of compoundings):

$$
r_e=\left(1+\frac{r_s}{n}\right)^{n}-1
$$

*Example from the sheet:* APR $=12\%$ compounded monthly gives

$$
EAR=\left(1+\frac{0.12}{12}\right)^{12}-1=12.68\%
$$

**2. Interest paid in advance** ($n$ = the transaction's length):

$$
r_e=\left(\frac{1}{1-r_s}\right)^{\frac{1}{n}}-1
$$

*You receive less than you borrow, so the true rate is higher than the stated one.* Example: APR $=12\%$, one year, paid in advance:

$$
r_e=\left(\frac{1}{1-0.12}\right)^{\frac{1}{1}}-1\approx 13.64\%
$$

> [!warning] Sheet rounding
> The sheet prints $13.63\%$. The exact value is $1/0.88-1=0.13636\ldots$, which rounds to $13.64\%$. The sheet truncated it.

**3. Commissions.** Draw the timeline, then solve the equation below for $r_e$, discounting with $r_e$ itself:

$$
PV_{incoming}=PV_{outgoing}
$$

*Example from the sheet:* a \$100 loan for one year at APR $=12\%$ plus a \$4 commission paid at expiry. At time 1 you pay back $112+4=116$:

$$
100=\frac{116}{1+r_e}\;\Rightarrow\; r_e=16\%
$$

---

## 3. Inflation and the Fisher equation

> Taught in [[Lesson_04-Inflation, Real Rates & Expected Inflation]]. Practice: [[HW_05-Inflation & Real Annuities]].

$inf$ is periodic inflation. **Actual inflation from time 0 to $n$**, from a price index or from period inflations:

$$
inf_{0\to n}=\frac{\text{Final Index}}{\text{Base Index}}-1
\qquad\text{or}\qquad
inf_{0\to n}=(1+inf_1)(1+inf_2)\cdots(1+inf_n)-1
$$

*Cumulative inflation is a ratio of price levels, or a product of the yearly growth factors. Never a sum.*

Sheet examples:

- Base index $M_0=100$, $M_2=120$: $inf_{0\to2}=\frac{120}{100}-1=20\%$. If $M_2=80$: $inf_{0\to2}=-20\%$.
- Yearly inflations $1\%,2\%,3\%$: $(1.01)(1.02)(1.03)-1=6.11\%$.

### Index-linked vs non-index-linked

| | Real value (without inflation) | Nominal value (money in our pocket) |
|---|---|---|
| **Index-linked** (real rate; compensates for time and risk only) | $FV_n=PV(1+r_{real})^n$ | $FV_n=PV(1+r_{real})^n\,(1+inf_{0\to n})$ |
| **Non-index-linked** (nominal rate; compensates for time, risk **and expected** inflation) | $FV_n=\dfrac{PV(1+r_{nominal})^n}{1+inf_{0\to n}}$ | $FV_n=PV(1+r_{nominal})^n$ |

Which is better, in the sheet's words:

1. If $inf_{0\to n}<\pi_{exp}$ (actual below expected), **non-index-linked is better**. If $inf_{0\to n}>inf_{exp}$, **index-linked is better**.
2. Non-index-linked is **more dangerous**: we cannot know whether we will withstand future payments.

### Fisher equation

$$
(1+r_{nominal})=(1+r_{real})\cdot(1+inf_{exp})
$$

*Nominal growth = real growth times expected price growth.* See [[Fisher Equation]]. Two conditions: all variables must cover the **same time period**, and all must be **effective** (not stated) rates.

*Worked example from the sheet.* A bank offers a **quarterly** effective 3% on index-linked deals and a **semi-annual** effective 10% on non-index-linked deals. What annual inflation does the bank expect? First put both on the annual period:

$$
r_{real,\,annual}=(1.03)^4-1=12.55\%
\qquad
r_{nominal,\,annual}=(1.1)^2-1=21\%
$$

Then plug into Fisher:

$$
1.21=1.1255\cdot(1+inf_{exp})\;\Rightarrow\; inf_{exp}=7.5\%
$$

---

## 4. Bonds

> Taught in [[Lesson_07-Bond Pricing]]. Practice: [[HW_08-Bond Pricing]].

Notation: $i$ = coupon rate (stated), $r=YTM$ = market rate (effective), $FV$ = face value, $PV$ = the bond's price, $m$ = coupons per year, $n$ = number of coupons.

**First step in every bond question: find the coupon.** See [[Coupon]] and [[Face Value]].

$$
C=FV\cdot\frac{i}{m}
$$

**Classic bond** (equal coupons, $FV$ at maturity), price at issuance:

$$
PV=\frac{C}{r}\left[1-\frac{1}{(1+r)^n}\right]+\frac{FV}{(1+r)^n}
$$

*An annuity of coupons plus the discounted face value.*

**Zero-coupon bond** ([[Zero-Coupon Bond]]), and **coupons in perpetuity** (no $FV$):

$$
PV=\frac{FV}{(1+r)^n}
\qquad\qquad
PV=\frac{C}{r}
$$

**Price after issuance**, $k$ coupons already paid:

$$
PV_k=\frac{C}{r}\left[1-\frac{1}{(1+r)^{n-k}}\right]+\frac{FV}{(1+r)^{n-k}}
\quad\text{(immediately after coupon } k\text{)}
$$

$$
PV_k=\frac{C}{r}\left[1-\frac{1}{(1+r)^{n-k}}\right]+\frac{FV}{(1+r)^{n-k}}+C
\quad\text{(right before coupon } k\text{ is paid)}
$$

*Just before a coupon is handed out, you still get it, so add one more $C$.*

**Discount, par, premium** (see [[Yield to Maturity]]):

| Issued at | Condition |
|---|---|
| **Discount** | $YTM>i$, so $FV>PV$ |
| **Par** | $YTM=i$, so $FV=PV$ |
| **Premium** | $YTM<i$, so $FV<PV$ |

**Credit rating.** Safer bond, higher rating, lower market rate, **higher price**. Dangerous bond, lower rating, higher market rate, **lower price**.

*Worked example from the sheet.* 3-year bond, annual 10% coupons, $FV=50{,}000$. **30% of $FV$ is repaid at the end of year 1**, the rest at maturity. $r=8\%$. Cash flows (this is not a classic bond, so discount each flow):

| Time | Coupon | Principal repaid | Total |
|---|---|---|---|
| 1 | $50{,}000\cdot0.1=5{,}000$ | $0.3\cdot50{,}000=15{,}000$ | $20{,}000$ |
| 2 | $0.7\cdot50{,}000\cdot0.1=3{,}500$ | none | $3{,}500$ |
| 3 | $0.7\cdot50{,}000\cdot0.1=3{,}500$ | $0.7\cdot50{,}000=35{,}000$ | $38{,}500$ |

$$
PV=\frac{20{,}000}{1.08}+\frac{3{,}500}{1.08^2}+\frac{38{,}500}{1.08^3}=52{,}081.75
$$

**Excel:** `PV` prices a classic bond; for irregular cash flows discount each flow with `NPV`; `RATE` or `IRR` recovers the YTM from a price.

---

## 5. Loans

> Taught in [[Lesson_05-The Four Loan Types]]. Practice: [[HW_06-Loans & Amortization]].

Notation: $PV_k$ = starting balance at time $k$, $r$ = interest rate, $n$ = number of payments, and for period $k$: $PRN_k$ = principal part, $INT_k$ = interest part, $PMT_k$ = payment.

### Annuity loan (Spitzer loan): constant payment

First step: find the payment from

$$
PV_n=\frac{PMT}{r}\left[1-\frac{1}{(1+r)^n}\right]
$$

Amortization row for period $k$:

| Starting balance | Payment | Interest | Principal | Ending balance |
|---|---|---|---|---|
| $PV_k$ | $PMT$ | $PV_k\cdot r$ | $PMT-INT_k$ | $PV_{k+1}=PV_k-PRN_k=\dfrac{PMT}{r}\left[1-\dfrac{1}{(1+r)^{n-k}}\right]$ |

Totals and a useful pattern:

$$
\sum_{k=1}^{n}PMT_k=n\cdot PMT,\qquad
\sum_{k=1}^{n}INT_k=n\cdot PMT-PV_1,\qquad
\sum_{k=1}^{n}PRN_k=PV_1
$$

$$
PRN_k=PRN_1\,(1+r)^{k-1}
$$

*In a Spitzer loan the principal repaid grows by a factor $(1+r)$ each period.*

### Regular loan: constant principal

First step: the periodic principal.

$$
PRN=\frac{PV}{n}
$$

| Starting balance | Principal | Interest | Payment | Ending balance |
|---|---|---|---|---|
| $PV_k$ | $PRN$ | $PV_k\cdot r$ | $PRN+PV_k\cdot r$ | $PV_{k+1}=PV_1-k\cdot PRN$ |

$$
\sum_{k=1}^{n}PMT_k=PV_1\left[1+\frac{r(n+1)}{2}\right],\qquad
\sum_{k=1}^{n}INT_k=PV_1\cdot\frac{r(n+1)}{2},\qquad
\sum_{k=1}^{n}PRN_k=PV_1
$$

*Payments shrink each period because interest falls with the balance.*

### Bullet loan and balloon loan

**Bullet** ([[Bullet Loan]]): one single payment at the end.

$$
PMT=PV(1+r)^n,\qquad INT=PV\left[(1+r)^n-1\right],\qquad PRN=PV
$$

**Balloon**: periodic interest-only payments, then the whole principal at the end.

$$
INT_k=PV\cdot r,\qquad PRN_n=PV
$$

> [!note] Index-linked vs non-index-linked loans
> 1. For an **index-linked** loan, multiply the result by actual inflation $(1+inf_{0\to n})$ to get the **nominal** value.
> 2. A **non-index-linked** loan already contains the nominal rate (with expected inflation inside), so **multiply by nothing** at the end.

**Excel:** `PMT`, `IPMT`, `PPMT`, `PV`, `RATE`.

---

## 6. Project choice: NPV, IRR and friends

> Taught in [[Lesson_02-Perpetuities, NPV & IRR]] (NPV, IRR), [[Lesson_03-Rate Conversion, Effective Rates & EAC]] (profitability index, EAC) and [[Lesson_06-Capital Budgeting & Free Cash Flow]]. Practice: [[HW_02-NPV, IRR & Project Choice]], [[HW_03-Profitability Index & EAC]].

The two defining formulas:

$$
NPV=-I_0+\frac{Cf_1}{1+r}+\frac{Cf_2}{(1+r)^2}+\cdots+\frac{Cf_n}{(1+r)^n}
$$

$$
0=-I_0+\frac{Cf_1}{1+IRR}+\frac{Cf_2}{(1+IRR)^2}+\cdots+\frac{Cf_n}{(1+IRR)^n}
$$

*[[Net Present Value]] is today's value of all the cash flows; the [[Internal Rate of Return]] is the discount rate that makes it zero.* Excel: `NPV` (remember it starts at period 1, so add $-I_0$ separately), `IRR`.

### The decision tree on the sheet

| Situation | Rule |
|---|---|
| **Single project**, NPV test | $NPV>0$: accept. $NPV=0$: indifferent. $NPV<0$: reject. |
| **Single project**, IRR test (only if the project is *standard*) | $IRR>r$: accept. $IRR=r$: indifferent. $IRR<r$: reject. |
| **Multiple, mutually exclusive** | Pick the **greatest NPV**, or the greatest $MIRR$ (below). |
| **Multiple, not mutually exclusive, unlimited budget** | Undertake **every** project with $NPV>0$. |
| **Multiple, not mutually exclusive, budget constraint, partial projects not allowed** | Choose the combination with the **greatest cumulative NPV**. |
| **Multiple, not mutually exclusive, budget constraint, partial projects allowed** | **Rank by profitability index** $P.I.=\dfrac{NPV}{\lvert I_0\rvert}$. |
| **Renewable projects with unequal lives, or continuous projects** | Pick the greatest $EAV$ (below). |

> [!tip] When the IRR test is safe
> The sheet says to use the IRR rule only if the project is "standard" (one sign change in the cash flows: outflow first, then inflows). For non-standard projects, trust NPV.

**Modified IRR** ([[Modified Internal Rate of Return]]):

$$
MIRR=\left(\frac{FV_{\text{all positive cash flows}}}{PV_{\text{all negative cash flows}}}\right)^{\frac{1}{n}}-1
$$

*Compound all inflows forward to the end, discount all outflows back to today, and take the single-period growth rate between them.*

**Equivalent annual value** ([[Equivalent Annual Cost]] is the cost-side version), for projects with unequal lives:

$$
EAV=\frac{NPV\cdot r}{\left[1-\dfrac{1}{(1+r)^n}\right]}
$$

*Turn each project's NPV into a level yearly amount over its own life, so projects of different lengths become comparable.*

---

## 7. Risk and reward

> [!warning] No lesson in this course covers this section
> The course has no lesson on risk, return, portfolios, beta or the SML. The only note that practises it is [[HW_09-Risk, Return & Diversification]], so treat this sheet as the main source for the formulas and the homework as the worked practice. Plain-English glosses below are mine; the formulas are the sheet's.

Learning order that makes this section easy: (a) one asset, (b) two or three assets, (c) add a risk-free asset, (d) market portfolio and the CML, (e) beta and the SML, (f) split total risk into market and specific.

### 7.1 One asset

Based on scenarios, where $P_i$ is the **scenario's probability** and $R_i$ the **asset's return** in that scenario:

$$
E(R)=\sum P_i\,R_i
\qquad
VAR(R)=\sum P_i\,\bigl(R_i-E(R)\bigr)^2
$$

*Expected return is the probability-weighted average; variance is the probability-weighted squared distance from it.* See [[Expected Return]].

Based on **historical data** ($n$ observations):

$$
E(R_i)=\frac{1}{n}\sum_{i=1}^{n}R_i=\overline{R}
\qquad
VAR(R_i)=\frac{\sum_{i=1}^{n}\bigl(R_i-E(R_i)\bigr)^2}{n-1}
$$

*With history, use the plain average and divide the variance by $n-1$ (not $n$).*

### 7.2 Two assets

$X_A,X_B$ are the **investment proportions** and must add to 1:

$$
X_A+X_B=1,\qquad
X_A=1-X_B=\frac{\text{Initial sum invested in }A}{\text{Initial investment total}}
$$

**Correlation** measures how the two returns move together ([[Correlation]]):

$$
\rho_{AB}=\frac{Cov(A,B)}{\sigma_A\cdot\sigma_B},\qquad -1\le\rho\le1
$$

| Covariance | Correlation |
|---|---|
| $Cov(A,B)>0$ | $\rho>0$ (move together) |
| $Cov(A,B)=0$ | $\rho=0$ (unrelated) |
| $Cov(A,B)<0$ | $\rho<0$ (move opposite) |

**Portfolio expected return and variance** ([[Portfolio Risk]]):

$$
E(R_p)=X_A\,E(R_A)+X_B\,E(R_B)
$$

$$
VAR(R_p)=\sigma_p^2=X_A^2\sigma_A^2+X_B^2\sigma_B^2+2X_AX_B\,\rho_{AB}\,\sigma_A\sigma_B
$$

*The return is a plain weighted average, but the risk is not: the cross term shrinks as $\rho$ falls, which is the whole point of [[Diversification]].*

For **three assets** ($A$, $B$, $C$):

$$
E(R_p)=\sum_{i=A}^{C}X_i\,E(R_i)
$$

$$
\sigma_p^2=\sum_{i=A}^{C}X_i^2\sigma_i^2+2\left(X_AX_B\rho_{AB}\sigma_A\sigma_B+X_AX_C\rho_{AC}\sigma_A\sigma_C+X_BX_C\rho_{BC}\sigma_B\sigma_C\right)
$$

*Every asset's own variance, plus twice every pair's covariance term.*

### 7.3 Minimum variance portfolio (MVP)

The mix of $A$ and $B$ with the lowest possible risk ([[Minimum Variance Portfolio]]). The sheet gives the general formula for $\rho\ne\pm1,0$ (it also reproduces the two shortcuts below):

$$
X_A=\frac{\sigma_B^2-\rho_{AB}\,\sigma_A\sigma_B}{\sigma_A^2+\sigma_B^2-2\rho_{AB}\,\sigma_A\sigma_B},\qquad X_B=1-X_A
$$

Shortcuts for the three standard cases:

| Case | MVP weight | What the curve looks like |
|---|---|---|
| $\rho=-1$ | $X_A=\dfrac{\sigma_B}{\sigma_A+\sigma_B}$ | Two straight lines meeting on the vertical axis: risk can be driven to **zero** |
| $\rho=0$ | $X_A=\dfrac{\sigma_B^2}{\sigma_A^2+\sigma_B^2}$ | A curve bending back to the left of $A$ |
| $\rho=1$ | $X_{\text{less risky asset}}=1$ | A straight line from $A$ to $B$: no diversification, so the MVP is simply the less risky asset |

![[Read01_two_asset_frontier.png]]

> [!note] About this figure
> **Theory diagram** with illustrative numbers I chose ($\sigma_A=10\%$, $\sigma_B=20\%$, $E(R_A)=6\%$, $E(R_B)=10\%$), not real data. It redraws the three small sketches on the sheet. The dots mark the MVP for $\rho=-1$ (zero risk) and $\rho=0$.

### 7.4 Adding a risk-free asset

With one risky asset $A$ and a risk-free asset $r_F$:

$$
E(R_p)=X_A\,E(R_A)+X_{r_F}\,r_F
\qquad
VAR(R_p)=X_A^2\sigma_A^2
\qquad
\sigma_p=X_A\,\sigma_A
$$

*The risk-free part has no variance and no covariance, so portfolio risk is just the risky share times the risky asset's risk.*

**Leveraged portfolio.** The investor **borrows at the risk-free rate** to invest more than their own money, so $X_{r_F}<0$:

$$
X_{r_F}=-\frac{\text{Borrowed sum}}{\text{Initial investment total}},\qquad
X_A=\frac{\text{Initial sum invested in }A}{\text{Initial investment total}}
$$

The same formulas for $E(R_p)$ and $\sigma_p$ apply. Leverage raises expected return in exchange for higher risk.

**Short selling** is another way to lever up: sell one stock short to buy more of another.

$$
X_{\text{purchased}}=\frac{\text{Initial sum invested in purchased asset}}{\text{Initial investment total}},\qquad
X_{\text{short sold}}=-\frac{\text{Sum asset was short sold for}}{\text{Initial investment total}}
$$

*Check:* the weights still add to 1, the short-sold asset's weight is negative.

### 7.5 Efficient portfolio and the CML

An **efficient portfolio** combines the risk-free asset $r_F$ with the **market portfolio** $M$ (all risky assets in the market, held in proportion to their market worth).

- **Step 1** is the same for every investor: determine $M$.
- **Step 2** is personal: choose how to split between $M$ and $r_F$ (the more risk averse, the closer to $r_F$).

$$
X_{asset}=\frac{\text{Asset's market worth}}{\text{Total worth of the market's portfolio}},\qquad
\text{Asset's market worth}=\text{no. of shares}\cdot\text{price per share}
$$

Where an efficient portfolio sits:

| Position | Weights |
|---|---|
| On $r_F$ | $X_{r_F}=1,\;X_M=0$ |
| Between $r_F$ and $M$ | $0<X_{r_F},X_M<1$ |
| On $M$ | $X_{r_F}=0,\;X_M=1$ |
| Right of $M$ (leveraged) | $X_{r_F}<0,\;X_M>1$ |

$$
E(R_p)=X_{r_F}\,r_F+X_M\,E(R_M)
\qquad
\sigma_p=X_M\,\sigma_M
$$

The **Capital Market Line** ([[Capital Market Line]]) links an efficient portfolio's expected return to its risk. Always leave $E(R_p)$ and $\sigma_p$ as variables:

$$
CML:\qquad E(R_p)=r_f+\left(\frac{E(R_m)-r_f}{\sigma_m}\right)\cdot\sigma_p
$$

*Start at the risk-free rate and add the market's extra return per unit of risk, times the risk you take.*

![[Read01_cml_frontier.png]]

> [!note] About this figure
> **Theory diagram**, schematic and not to scale; the shapes are mine, redrawing the sheet's page-4 sketch. The CML touches the efficient frontier of risky assets at $M$. $A$, $B$, $C$ are single assets that sit below the CML.

### 7.6 Inefficient portfolios, beta and the SML

A portfolio that is **not** a mix of the risk-free asset and the market portfolio is **inefficient**. Single assets and inefficient portfolios are priced by the **Security Market Line** ([[Security Market Line]]), which fits *all* portfolios and assets:

$$
SML:\qquad E(R)=r_f+\bigl[E(R_m)-r_f\bigr]\cdot\beta
$$

*Required return = risk-free rate + market risk premium times the asset's sensitivity to the market.*

- The **risk premium** is $E(R_m)-r_f$.
- If you are **given $\beta$, always use the SML**, even for an efficient portfolio.
- The $E(R)$ from the SML can be used as the **discount rate**: $E(R)=r$.

**Beta** ([[Beta]]) is how sensitive an asset is to market moves.

- **Rule 1:** the greater the $\beta$, the more sensitive the asset, the **higher the return** investors demand.
- **Rule 2:** the market portfolio has $\beta_M=1$, and a risk-free asset has $\beta_{r_F}=0$.

$$
\text{Single asset:}\quad \beta=\frac{\rho_{A,M}\cdot\sigma_A}{\sigma_m}=\frac{Cov(A,M)}{\sigma_m^2}
$$

$$
\text{Any portfolio:}\quad \beta_p=\sum_{i=1}^{n}X_i\,\beta_i
\qquad
\text{Efficient portfolio:}\quad \beta=X_M
$$

*A portfolio's beta is the weighted average of its parts' betas, and an efficient portfolio's beta is just its share in the market portfolio, because the risk-free part has beta 0.*

**Regression form** ($r_A,r_f,r_m$ are the actual returns of asset $A$, the risk-free asset and the market):

$$
r_A-r_f=\beta\,(r_M-r_f)+\epsilon_A
$$

*$\epsilon_A$ is the part of $A$'s return that is not related to the market.*

### 7.7 Market risk vs specific risk

Total variance splits into the part driven by the market (systematic, undiversifiable) and the part unique to the asset (specific, also called diversifiable, unsystematic or idiosyncratic). See [[Systematic Risk]] and [[Idiosyncratic Risk]].

$$
\sigma^2_{total}=\sigma^2_{systematic}+\sigma^2_{specific}
$$

$$
\sigma^2_{systematic}=\beta_a^2\cdot\sigma_M^2
\qquad
\sigma^2_{specific}=\sigma^2_{total}-\sigma^2_{systematic}
$$

$$
\%\text{ of systematic risk}=\frac{\text{Systematic Risk}}{\text{Total Risk}}=\frac{\sigma^2_{systematic}}{\sigma^2_{total}}
$$

### 7.8 Reading the CML / efficient-frontier diagram

The sheet's last diagram (page 4) puts risky assets $A,B,C$ around the efficient frontier. Its bullet points:

- $M$ is where $X_m=1$ and $X_{r_f}=0$: the **intersection of the CML and the efficient frontier of all risky assets**.
- The market portfolio contains all risky assets in proportion to their market worth. $A$, $B$, $C$ are points on the **SML**.
- $\sigma_B$ (total risk of $B$) = **market risk** (undiversifiable) up to the CML, plus **specific risk** (diversifiable) from the CML to $B$.
- The **closer an asset is to the CML, the better its correlation with the market**. The gap between the asset and the CML is $\epsilon$ (epsilon).

*Comparing assets $A$ and $C$ (the sheet's example):*

| Comparison | Answer |
|---|---|
| Identical total risk ($\sigma_A=\sigma_C$) | Same distance from the vertical axis |
| Greater **market** risk | $A$ (further from the axis, up to the CML) |
| Greater **specific** risk | $C$ (further from the CML) |
| Greater correlation with the market | $A$ ($\epsilon_A<\epsilon_C$) |

---

## 8. Capital budgeting: free cash flow

> Taught in [[Lesson_06-Capital Budgeting & Free Cash Flow]]. Practice: [[HW_07-Free Cash Flow & Project NPV]].

**Steps to solve a capital budgeting question:** (1) analyse the information; (2) build a final table with all the project's variables; (3) find the **NPV** to judge profitability.

**Straight-line depreciation** ([[Depreciation]]):

$$
DEP=\frac{I_0-SVG_N}{N}=\frac{\text{Initial Investment}-\text{Salvage Value}}{\text{No. of depreciation years}}
$$

### The free cash flow table

Rows, from top to bottom ([[Free Cash Flow]]), one column per time $0,1,\ldots,n$:

| | Row |
|---|---|
| + | Revenues |
| − | Expenses |
| − | Depreciation |
| **=** | **Operational Profit (EBIT)** |
| − | Corporate tax expenses |
| **=** | **Net Operating Profit after Tax (NOPAT)** |
| + | Depreciation (add back, it is not a cash cost) |
| + | Tax-free revenues |
| − | Undeductible expenses |
| − | Cost of project or initial investment |
| + | Money received for the sale of fixed assets |
| − | Capital gains tax for the sale of fixed assets |
| − | Changes in working capital |
| **=** | **Free Cash Flow** |

Rules the sheet attaches to the table:

1. Any revenue or expense is taxable **unless noted otherwise**.
2. If there are several revenues or expenses, each goes on a **separate row**.
3. Sometimes irrelevant information is given and must be **ignored**:
   - **A. Sunk costs**: an expense that has already happened or was already promised in the future.
   - **B. Funding** (loans, bonds) and financing expenses.
   - **C. Payroll**: if the existing workforce is used with no addition to their pay, ignore their wages; if there is an **increase** in their wages due to the project, count it as a project cost.
4. **General rule when information is misleading:** what happens *with* the project minus what happens *without* the project is what goes in the table.

### Sale of fixed assets

Sometimes equipment is sold before it is fully depreciated. The accounting (book) value differs from the sale price, and the **gain is taxed**.

$$
\text{Book Value}=I_0-n\cdot DEP
\qquad
\text{Capital Gain}=\text{Selling Value}-\text{Book Value}
$$

$$
\text{Capital Gain Tax}=\text{Capital Gain}\cdot\text{Capital Gains Tax Rate}
$$

*Worked example from the sheet.* A mining company buys tractors for \$500,000 for a project, depreciated over 5 years with no salvage value. After 3 years they are sold for \$300,000. Capital gains tax is 20%.

$$
DEP=\frac{500k-0}{5}=100k
\qquad
\text{Book Value}=500k-3(100k)=200k
$$

$$
\text{Capital Gain}=300k-200k=100k
\qquad
\text{Capital Gain Tax}=100k\cdot0.2=20k
$$

In the table: **+\$300,000** (sale proceeds) and **−\$20,000** (capital gains tax). The company is left with \$280,000.

### Investment in working capital

Working capital is the cash tied up in running the business day to day:

$$
\text{Working Capital}=\text{Inventory}+\text{Customers}-\text{Suppliers}
$$

*Inventory is stock not yet sold, customers is what customers still owe you, suppliers is what you still owe.* See [[Working Capital]].

The **change in working capital** is the row that goes in the free cash flow table (it is "part of the original table", the sheet stresses). An increase in working capital is a cash **outflow**; a decrease is an **inflow**.

*Worked example from the sheet.* "ABC Computers" just started. A customer buys a computer and pays \$6,000 in **6 monthly installments**; ABC buys the same computer from "HM" for **\$6,000 cash**. So the owners must put in \$6,000 of working capital at time 0, and take \$1,000 out each month as the customer pays.

| Time | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| Inventory | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Customers (still owed) | 6,000 | 5,000 | 4,000 | 3,000 | 2,000 | 1,000 | 0 |
| Suppliers (owed) | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **Working capital** | 6,000 | 5,000 | 4,000 | 3,000 | 2,000 | 1,000 | 0 |
| **Change in working capital** | (6,000) | 1,000 | 1,000 | 1,000 | 1,000 | 1,000 | 1,000 |

> [!tip] General rule from the sheet
> The **sum of the changes in working capital must be zero at the end**: all the cash tied up is eventually released. Use this to check your table.

---

## Quick finder

| I need | Section | Lesson |
|---|---|---|
| PV or FV of a stream, solving for $n$ | [[#1. Time value of money]] | [[Lesson_01-Time Value of Money]] |
| APR to EAR, rates paid in advance, commissions | [[#2. Interest rates: stated vs effective]] | [[Lesson_03-Rate Conversion, Effective Rates & EAC]] |
| Real vs nominal, expected inflation | [[#3. Inflation and the Fisher equation]] | [[Lesson_04-Inflation, Real Rates & Expected Inflation]] |
| Price a bond or find the coupon | [[#4. Bonds]] | [[Lesson_07-Bond Pricing]] |
| Amortization tables, loan types | [[#5. Loans]] | [[Lesson_05-The Four Loan Types]] |
| Accept or reject, rank projects | [[#6. Project choice: NPV, IRR and friends]] | [[Lesson_02-Perpetuities, NPV & IRR]] |
| Portfolio risk, beta, CML, SML | [[#7. Risk and reward]] | no lesson; [[HW_09-Risk, Return & Diversification]] |
| Build a free cash flow table | [[#8. Capital budgeting: free cash flow]] | [[Lesson_06-Capital Budgeting & Free Cash Flow]] |
