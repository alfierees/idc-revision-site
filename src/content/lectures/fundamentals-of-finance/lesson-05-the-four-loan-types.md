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

> [!example] $100k, $r=5\%$, $n=10$
> Payments 1–9: $0.05\times 100{,}000 = \$5{,}000$ interest, $0 principal. Payment 10: $5{,}000$ interest $+ 100{,}000$ principal $= \$105{,}000$. The balance stays at $100k the whole time — see the flat red line above.

---

## 2. Equal-principal loan (equal amortization)

Principal repaid in **equal** chunks $L/n$ each period; interest falls as the balance shrinks, so the **total payment declines** over time.

$$P_t = \frac{L}{n}\ \text{(constant)},\qquad E_t = \frac{L}{n} + r\,B_t\ \text{(falling)}$$

> [!example] $100k, $r=5\%$, $n=10$
> $P = 10{,}000$ every period. Payment 1: $10{,}000 + 5{,}000 = 15{,}000$. Payment 10: $10{,}000 + 500 = 10{,}500$. Balance falls in a straight line (blue line above). Outstanding balance after 6 years $= 100{,}000 - 6\times 10{,}000 = \$40{,}000$.

---

## 3. Equal-payment loan (the mortgage)

The **total payment is constant** every period. Early on most of it is interest; over time the principal portion grows — the classic mortgage amortization. The level payment is an annuity:

$$\boxed{E = \frac{r\,L}{1-(1+r)^{-n}} = \texttt{PMT}(r,n,-L)}$$ ^equal-payment

> [!example] $100k, $r=5\%$, $n=10$
> $E = \texttt{PMT}(5\%,10,-100000) = \$12{,}950.46$ every year. Payment 1 is $5{,}000 interest $+ 7{,}950 principal; payment 10 is $617 interest $+ 12{,}334 principal.

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

> [!example] 7th payment of the $100k mortgage
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
