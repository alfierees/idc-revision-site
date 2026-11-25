---
title: "The Four Loan Types"
week: 5
semester: 2
year: 1
academic_year: "2024-25"
course: Financial Management & Finance
lecture: "Lesson 5 — Different Loan Types"
date: 2026-06-05
tags:
  - financial-management
  - loan
  - amortization
  - mortgage
  - outstanding-balance
aliases:
  - FM Lesson 5
  - Loan Types
  - Amortization
  - Mortgage
subject: fundamentals-of-finance
in_scope: true
---

# The Four Loan Types

> Part of: [[Financial Management]]
> **Lesson 5** — Financial Management & Finance
> Key concepts: [[Loan]], [[Amortization]], [[Outstanding Balance]], [[Mortgage]], [[Bullet Loan]]

> [!info] Class workbooks (downloads)
> - [2025.05.13 Fifth class (Loans).xlsx](/papers/fundamentals-of-finance/class-2025-05-13-fifth-class-loans.xlsx)
> - [2025.05.29 Sixth class (Loans II).xlsx](/papers/fundamentals-of-finance/class-2025-05-29-sixth-class-loans-ii.xlsx)
>
> What each sheet does: [[#The class workbooks, sheet by sheet|see below]].

---

## The anatomy of every loan

Every loan payment splits into two parts: ==interest== (the rent on the money still owed) and ==principal== (the repayment of the debt itself). The [[Amortization]] table tracks this period by period:

> [!info] The five columns of any amortization table
> | Column | Formula | Meaning |
> |---|---|---|
> | Beginning balance $B_t$ | prior $F_{t-1}$ | debt owed at start of period |
> | Interest $I_t$ | $r\cdot B_t$ | rent on outstanding debt |
> | Principal $P_t$ | depends on loan type | debt repaid this period |
> | Total payment $E_t$ | $I_t + P_t$ | the cheque you write |
> | Ending balance $F_t$ | $B_t - P_t$ | debt still owed |
>
> Interest is **always** $r\times$ the *current* balance. What distinguishes the four loan types is how the principal is scheduled.

The four types differ only in which column is held constant:

![[L5_loan_balances.png]]

---

## 1. Interest-only loan (balloon / grace)

Every payment is **interest only**; the entire principal is repaid in one lump (the "balloon") at maturity.

> [!example] \$100k, $r=5\%$, $n=10$
> Payments 1–9: $0.05\times 100{,}000 = \$5{,}000$ interest, \$0 principal. Payment 10: $5{,}000$ interest $+ 100{,}000$ principal $= \$105{,}000$. The balance stays at \$100k the whole time — see the flat red line above.

---

## 2. Equal-principal loan (equal amortization)

Principal repaid in **equal** chunks $L/n$ each period; interest falls as the balance shrinks, so the **total payment declines** over time.

$$P_t = \frac{L}{n}\ \text{(constant)},\qquad E_t = \frac{L}{n} + r\,B_t\ \text{(falling)}$$

> [!example] \$100k, $r=5\%$, $n=10$
> $P = 10{,}000$ every period. Payment 1: $10{,}000 + 5{,}000 = 15{,}000$. Payment 10: $10{,}000 + 500 = 10{,}500$. Balance falls in a straight line (blue line above). Outstanding balance after 6 years $= 100{,}000 - 6\times 10{,}000 = \$40{,}000$.

---

## 3. Equal-payment loan (the mortgage)

The **total payment is constant** every period. Early on most of it is interest; over time the principal portion grows — the classic mortgage amortization. The level payment is an annuity:

$$\boxed{E = \frac{r\,L}{1-(1+r)^{-n}} = \texttt{PMT}(r,n,-L)}$$ ^equal-payment

> [!example] \$100k, $r=5\%$, $n=10$
> $E = \texttt{PMT}(5\%,10,-100000) = \$12{,}950.46$ every year. Payment 1 is $5{,}000 interest $+ 7{,}950 principal; payment 10 is \$617 interest $+ 12{,}334 principal.

![[L5_amortization_split.png]]

> [!tip] Why interest shrinks and principal grows
> The payment is fixed, but interest $= r\times$ balance and the balance keeps falling. So the interest slice shrinks each period, and since principal $= E - I$, the principal slice must grow to fill the constant payment.

---

## 4. Bullet loan

The borrower and bank agree a **fixed payment** $E$ (given, not solved) that does *not* fully cover amortization on a normal schedule; whatever principal remains is cleared in a final balloon. Two regimes:

> [!warning] PMT > interest vs PMT < interest
> - **$E > rL$** (e.g. $E = 8000 > 5000$): the payment covers interest *and* chips away at principal — balance falls gradually, final balloon is moderate. (Orange line above.)
> - **$E < rL$** (e.g. $E = 3000 < 5000$): the payment doesn't even cover interest, so the **balance grows** (negative amortization) until a large balloon at the end. Dangerous structure.

---

## Three things you'll always be asked

### A. Outstanding balance at time $t$

The balance you still owe = PV of all *remaining* payments at the contract rate. For an equal-payment loan with $k$ payments left:

$$\boxed{B_t = \texttt{PV}(r, k, E) \;=\; -\texttt{PV}(r, n-t, E)}$$ ^outstanding-balance

For non-level loans you must read it off the amortization table or NPV the remaining cash flows.

### B. Early-termination fee

If you repay early when **market rates have fallen**, the loan is worth more to the bank than its book balance, so they charge a penalty equal to the shortfall:

$$\boxed{\text{Fee} = \max\big(\,\text{Fair value at }r_{\text{market}} - \text{Book balance},\ 0\,\big)}$$ ^early-fee

> [!example] Equal-payment loan, $t=6$, rates dropped to 3%
> Book balance (at contract 5%) $= \$45{,}921.68$. Fair value (remaining payments discounted at the new 3%) $= -\texttt{PV}(3\%,4,12950.46) = \$48{,}138.12$. Fee $= \max(48{,}138 - 45{,}922, 0) = \$2{,}216.44$. Total to walk away $= \$48{,}138.12$.

### C. Splitting a single payment into principal & interest

For an equal-payment loan, Excel gives both pieces directly:
- Interest part: `IPMT(r, t, n, -L)` $= r\times B_t$
- Principal part: `PPMT(r, t, n, -L)` $= E - I_t$

> [!example] 7th payment of the \$100k mortgage
> Interest $= \texttt{IPMT}(5\%,7,10,-100000) = \$2{,}296.08$; principal $= \texttt{PPMT}(5\%,7,10,-100000) = \$10{,}654.37$; sum $= 12{,}950.46 = E$. ✓

---

## Comparison table

| Loan type | What's held constant | Total payment over time | Excel for the payment |
|---|---|---|---|
| Interest-only | principal paid = 0 until end | flat, then balloon | $E = rL$ each period |
| Equal-principal | principal $= L/n$ | **falls** | $E_t = L/n + rB_t$ |
| Equal-payment (mortgage) | total payment $E$ | **constant** | `PMT(r,n,-L)` |
| Bullet | a given payment $E$ | constant, then balloon | $E$ given; balloon = residual |

---

## The class workbooks, sheet by sheet

Both loan workbooks use the same example: **100,000 at 5% for 10 years**. Every amortisation table has the same columns: beginning balance $B$, interest $C = r 	imes B$, principal $D$, total payment $E = C + D$, ending balance $F = B - D$. Only the rule for $D$ (or $E$) changes between loan types. Each sheet then answers the three standard questions for $t = 6$ with a market rate of 3%.

### 13 May 2025, fifth class (Loans): `Intro`, `Interest only`, `Equal principal`

| | Interest only | Equal principal |
|---|---|---|
| Rule | $D = 0$ until the end | $D$ = 100,000/10 = 10,000 |
| Outstanding balance at $t=6$ | 100,000 | `=B2-6*B5` = 40,000 |
| Fair value at $t=6$ (3% market rate) | `=-PV(B29,4,5000,100000)` = 107,434.20 | `=NPV(3%, 12,000; 11,500; 11,000; 10,500)` = 41,886.01 |
| Early termination fee `=MAX(fair value − balance, 0)` | 7,434.20 | 1,886.01 |
| 7th payment | 5,000 interest, no principal | 10,000 principal + `=5%*B23` = 2,000 interest = 12,000 |

The fee exists because rates have fallen from 5% to 3%: the bank loses an above-market loan, so it charges the difference between the loan's market value and its book balance. If rates had risen, `MAX(…,0)` gives no fee.

### 29 May 2025, sixth class (Loans II)

- **`Intro`:** adds the alternative names (interest-only = balloon or grace; equal principal = equal amortisation; equal payment = mortgage) and the three bullet variants. Each loan sheet also checks that `=NPV(5%, all payments)` = 100,000: at the loan's own rate, the payments are always worth exactly the loan.
- **`Equal payment`:** the payment `=PMT(B3,B4,-B2)` = **12,950.46**. Balance at $t=6$ is the PV of the 4 remaining payments, `=-PV(B3,4,B5)` = 45,921.68; fair value at 3% `=-PV(B29,4,B5)` = 48,138.12, fee 2,216.44. The 7th payment splits into interest `=B3*B23` = 2,296.08 and principal 10,654.37, which Excel also gives directly with `=IPMT(5%,7,10,-100000)` and `=PPMT(5%,7,10,-100000)`.
- **`Loan Amortization Schedule`:** Excel's mortgage template filled in for a 2,250,000 loan at 5% over 30 years, monthly: payment 12,078.49, 360 payments, total interest 2,098,255. It shows how much of a long mortgage's early payments is interest.
- **Bullet loans** (a fixed payment, with the balance settled at the end):
  - `Bullet (PMT>r)`: pay 8,000 a year, more than the 5,000 interest, so the balance falls; the final payment is 70,266.32.
  - `Bullet (PMT<r)`: pay 3,000, less than the interest, so the unpaid interest is added and the balance **grows** to 122,053; final payment 128,155.79.
  - `Bullet (PMT=0)`: no payments at all; everything compounds, and the single final payment 162,889.46 equals `=B2*(1+B3)^B4`.

---

## Summary

> [!success] Key takeaways
> - Interest is *always* $r\times$ current balance; loan types differ only in the **principal schedule**. ^summary
> - Equal-payment (mortgage): level payment from `PMT`; interest portion shrinks, principal portion grows.
> - Outstanding balance = PV of remaining payments at the **contract** rate.
> - Early-termination fee = $\max(\text{fair value at market rate} - \text{book balance}, 0)$; it bites when rates have **fallen**.
> - Use `IPMT`/`PPMT` to split any equal-payment instalment into interest and principal.

---

## Related Notes

- [[Lesson_01-Time Value of Money]] — the annuity formula behind the level mortgage payment
- [[Lesson_02-Perpetuities, NPV & IRR]] — NPV/PV used for fair value of a loan
- [[Lesson_07-Bond Pricing]] — a bond is essentially a loan *to* the issuer
- [[HW_06-Loans & Amortization]] — problem set on schedules, refinancing & CPI-linked loans
- [[Financial Management]] — subject hub
