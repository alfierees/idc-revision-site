---
title: The Monetary System
week: 4
semester: 1
year: 2
academic_year: "2025-26"
course: Macro-Economics II
lecture: "Chapter 4 — The Monetary System: What It Is and How It Works"
instructor: Alon Cohen
date: 2026-05-17
tags:
  - macro-economics-ii
  - money
  - monetary-system
  - money-supply
  - fractional-reserve-banking
  - money-multiplier
  - central-bank
  - federal-reserve
  - monetary-policy
  - bank-capital
  - leverage
  - quantitative-easing
aliases:
  - Chapter 4 Macro II
  - Monetary System
  - Money Creation
subject: macro-ii
in_scope: true
---

# The Monetary System

> Part of: [[Macro-Economics II]] | Key concepts: [[Money Supply]], [[Money Multiplier]], [[Fractional Reserve Banking]], [[Monetary Base]], [[Federal Reserve]], [[Bank Capital]], [[Leverage]], [[Quantitative Easing]]

---

## 🗺️ What This Chapter Is About

Chapter 4 answers two fundamental questions: *what exactly is money*, and *how does the banking system determine how much of it exists in the economy?* The punchline is that the banking system *creates* money — a $1 deposit can become $5 in total money supply through the multiplier process. Central banks try to control this, but households and banks both have a say too.

> [!info] Where Chapter 4 fits
> Chapter 3 showed how the **real economy** works in the long run. Chapter 4 introduces the **monetary side** — the quantity of money, who controls it, and how it interacts with prices (the full story of inflation follows in Chapter 5).

---

## 💵 Money: Definition, Functions, and Types

### Definition

> [!info] Definition: Money
> ==Money== is the **stock of assets** that can be readily used to make transactions. ^money-definition

This sounds obvious but the key word is *stock* (not a flow) and *readily used* — an asset you'd have to sell first (like a bond) doesn't count.

### Functions of Money

Money serves three distinct roles:

| Function | Meaning | Example |
|----------|---------|---------|
| **Medium of exchange** | We use it to buy goods and services | Paying for coffee |
| **Store of value** | Transfers purchasing power through time | Saving for next year |
| **Unit of account** | Common yardstick for quoting prices | "The car costs $20,000" |

> [!tip] Intuition: Why all three?
> Barter economies fail because of the **double coincidence of wants** problem — you need to find someone who wants what you have *and* has what you want. Money eliminates this. But to be useful, money also has to hold its value over time (otherwise people refuse it) and be universally understood as a measure.

### Types of Money

| Type | Has Intrinsic Value? | Examples |
|------|---------------------|---------|
| **Commodity money** | ✅ Yes | Gold coins, cigarettes in POW camps |
| **Fiat money** | ❌ No | Paper currency, bank reserves |

==Fiat money== has value purely by government decree and social convention — it's "legal tender." Most modern economies run on fiat money.

> [!example] What counts as money?
> - **Currency** ✅ — cash in your pocket
> - **Demand deposits** ✅ — cheque accounts (you can spend directly)
> - **Checks** ❌ — an *instruction* to move money, not money itself
> - **Credit cards** ❌ — a *loan*, not a store of assets
> - **Bonds** ❌ — must be sold first; not readily usable for transactions

---

## 📊 The Money Supply and Its Measures

### Key Definitions

> [!info] Definition: Money Supply
> The ==money supply== is the **quantity of money available** in the economy, typically measured by M1 or M2. ^money-supply-definition

> [!info] Definition: Monetary Policy
> ==Monetary policy== is the **central bank's control** over the money supply — expanding or contracting it to influence prices, output, and employment.

### M1 vs M2

| Measure | Components | 2015 ($ bn) | Aug 2025 ($ bn) |
|---------|-----------|-------------|-----------------|
| **C** (currency) | Cash held by the public | 1,279 | 2,404 |
| **M1** | C + demand deposits + travelers' checks + other checkable deposits | 2,988 | 18,899 |
| **M2** | M1 + small time deposits + savings deposits + money market mutual funds + money market deposit accounts | 11,846 | 22,195 |

> [!tip] M1 vs M2: Liquidity
> **M1** is the most liquid — assets you can spend immediately. **M2** adds less-liquid assets that require notice or have restrictions (but can still be accessed fairly quickly). The dramatic jump in M1 from 2015 to 2025 partly reflects how the Fed categorised savings accounts after 2020.

**Key definitions for money supply components:**

- **Demand deposit** — a standard bank account; funds can be withdrawn at any time without prior notice
- **Time deposit** — an interest-bearing account where withdrawal requires advance notice (typically 30 days); a Certificate of Deposit (CD) is the classic example
- **Savings deposit** — interest-bearing, with limits on the number of withdrawals per period; normally no chequebook
- **Money market fund** — a mutual fund investing in low-risk, short-term assets; shares can be redeemed on any business day
- **Money market account** — an interest-bearing bank account that allows check-writing, but usually requires a higher minimum balance

---

## 🏦 How Banks Create Money

### The Basic Identity

$$M = C + D$$

where $C$ = currency held by the public, $D$ = demand (checking) deposits.

Because $M$ includes $D$, the banking system directly shapes the money supply. Understanding how requires working through three scenarios, starting from $C = \$1{,}000$, $D = 0$, $M = \$1{,}000$.

### Reserves: The Key Concept

> [!info] Definition: Reserves
> ==Reserves ($R$)== are the portion of deposits that banks have **not lent out** — physical cash held in the vault or on deposit at the central bank. Reserves are NOT included in currency ($C$). ^reserves-definition

A simplified bank balance sheet:

| **Assets** | | **Liabilities** |  |
|-----------|--|----------------|--|
| Reserves | $200 | Deposits | $1,000 |
| Loans | $800 | | |

### Scenario 1: No Banks

$$D = 0, \quad M = C = \$1{,}000$$

No banking system means no money creation — the money supply is just whatever cash exists.

### Scenario 2: 100%-Reserve Banking

Every dollar deposited is held as a reserve. After depositing $1,000:

$$C = 0, \quad D = \$1{,}000, \quad R = \$1{,}000, \quad M = \$1{,}000$$

> [!info] Lesson
> **100%-reserve banking does not change the money supply.** Money just moves from currency to deposits — no new money is created.

### Scenario 3: Fractional-Reserve Banking

Banks hold a **reserve-deposit ratio** of $rr = 0.20$ (20%) and lend the rest.

| Bank | Receives deposit | Keeps (20%) | Lends (80%) |
|------|-----------------|-------------|-------------|
| Firstbank | $1,000 | $200 | $800 |
| Secondbank | $800 | $160 | $640 |
| Thirdbank | $640 | $128 | $512 |
| … | … | … | … |

**Total money supply:**

$$M = \frac{1}{rr} \times \text{original deposit} = \frac{1}{0.20} \times \$1{,}000 = \$5{,}000$$

> [!info] Key Lesson
> In a ==fractional-reserve banking system==, banks **create money** through lending. But note: this creates new *money*, not new *wealth* — every new deposit to a borrower comes with an equal new debt. ^money-creation

> [!warning] Common Pitfall
> Money creation ≠ wealth creation. The borrower gets $800 in purchasing power, but also has $800 in debt. The net addition to private sector wealth is zero. What changes is the *liquidity* of the economy — there is more money chasing goods.

---

## 🏗️ Bank Capital, Leverage, and Capital Requirements

Modern banks have a more complex balance sheet than the simple reserves/deposits/loans picture above:

| **Assets** | \$ | **Liabilities & Owners' Equity** | \$ |
|-----------|----|---------------------------------|----|
| Reserves | 200 | Deposits | 750 |
| Loans | 500 | Debt (bonds issued) | 200 |
| Securities | 300 | Capital (owners' equity) | 50 |
| **Total** | **1,000** | **Total** | **1,000** |

### Bank Capital

> [!info] Definition: Bank Capital
> ==Bank capital== is the owners' equity — what remains after subtracting all liabilities from assets. It is the bank's cushion against losses. ^bank-capital-definition

$$\text{Bank capital} = \text{Assets} - \text{Liabilities}$$

In the example above: $1{,}000 - 950 = \$50$

### Leverage

> [!info] Definition: Leverage
> ==Leverage== is the use of borrowed money to supplement existing funds for investment.

$$\text{Leverage ratio} = \frac{\text{Assets}}{\text{Capital}} = \frac{\$1{,}000}{\$50} = 20$$

A leverage ratio of 20 means: for every $1 of the bank's *own* money, it controls $20 of assets. This magnifies both gains and losses.

> [!warning] Leverage Risk
> If the bank's assets fall by just **5%** (to $950), then:
> $$\text{Capital} = 950 - 950 = 0$$
> The bank is **insolvent**. A decline larger than 5% means depositors can't be repaid. With a leverage ratio of 20, even a small shock to asset values can wipe out equity entirely.

### Capital Requirements

> [!info] Capital Requirements
> Regulators impose a **minimum capital ratio** to protect depositors. Banks holding riskier assets face stricter requirements, since riskier assets are more likely to fall in value.

The **2008–09 Financial Crisis** vividly illustrated why this matters: losses on mortgage-backed securities eroded bank capital → banks cut lending → credit crunch worsened the recession → governments injected capital (bailouts) to stabilise the system.

---

## 📐 A Formal Model of the Money Supply

### Three Exogenous Variables

$$\underbrace{B = C + R}_{\text{Monetary base}} \qquad \underbrace{rr = R/D}_{\text{Reserve-deposit ratio}} \qquad \underbrace{cr = C/D}_{\text{Currency-deposit ratio}}$$

- **Monetary base ($B$):** controlled directly by the central bank
- **Reserve-deposit ratio ($rr$):** depends on reserve requirements and bank discretion (excess reserves)
- **Currency-deposit ratio ($cr$):** depends on household preferences

### Solving for the Money Supply

Starting from $M = C + D$ and using the definitions of $cr$ and $rr$:

$$\boxed{M = m \cdot B, \qquad \text{where} \quad m = \frac{1 + cr}{cr + rr}}$$

$m$ is the ==money multiplier==. ^money-multiplier

### The Money Multiplier

> [!info] Definition: Money Multiplier
> The ==money multiplier== $m$ is the amount by which the money supply expands for each additional dollar of monetary base. If $rr < 1$, then $m > 1$: the banking system amplifies base money into a larger money supply.

$$\Delta M = m \times \Delta B$$

> [!example] Worked Example
> Suppose $cr = 0.5$ (households hold 50¢ in cash for every $1 in deposits) and $rr = 0.1$ (banks hold 10% reserves):
> $$m = \frac{1 + 0.5}{0.5 + 0.1} = \frac{1.5}{0.6} = 2.5$$
> So a $100 increase in the monetary base → $250 increase in money supply.

> [!tip] Intuition: What affects the multiplier?
> - **↑ $cr$** (households hold more cash): money spent in cash doesn't get re-deposited, so banks can create less additional money → $m$ falls → $M$ falls.
> - **↑ $rr$** (banks hold more reserves): banks lend a smaller fraction of deposits → $m$ falls → $M$ falls.
> - Both $cr$ and $rr$ are in the denominator of $m$.

---

## 🔧 Instruments of Monetary Policy

The central bank controls the money supply through four main instruments:

| Instrument | What It Is | To ↑ Money Supply | Channel |
|-----------|-----------|-------------------|---------|
| **Open Market Operations** | Fed buys/sells government bonds | Buy bonds → pay with new dollars | $B \uparrow$ |
| **Discount Rate** | Interest rate the Fed charges banks for loans | Lower discount rate → banks borrow more reserves | $B \uparrow$ |
| **Reserve Requirements** | Minimum $rr$ mandated by regulators | Lower reserve requirement | $rr \downarrow \Rightarrow m \uparrow$ |
| **Interest on Reserves** | Interest the Fed pays banks on reserves held at Fed | Pay lower interest → banks lend more | $rr \downarrow \Rightarrow m \uparrow$ |

Open market operations are the Fed's **preferred** and most frequently used tool.

> [!warning] Why the Fed Can't Precisely Control $M$
> $$M = m \cdot B = \frac{1 + cr}{cr + rr} \cdot B$$
> The Fed directly controls $B$, but both $cr$ (household preference) and $rr$ (bank behaviour — excess reserves) are **outside the Fed's direct control**. If households hold more cash or banks pile up excess reserves, $m$ falls and $M$ may not rise even if $B$ rises.

---

## 📚 Case Studies

### Quantitative Easing (2008–2011)

> [!example] QE in the 2008 Crisis
> - The Fed dramatically expanded the monetary base ($B$ tripled from August 2008 to August 2011).
> - But M1 grew only ~40% over the same period.
> - **Why?** The money multiplier collapsed: after mortgage losses, banks sharply increased excess reserves ($rr \uparrow$, $m \downarrow$).
> - The Fed also broadened *what* it bought — not just short-term T-bills, but **long-term government bonds** (to push down long-term rates) and **mortgage-backed securities** (to support the housing market).

The contrast with 2020–2021 is striking: from February 2020 to December 2021, the monetary base rose ~85% but M1 jumped ~410% — implying banks *reduced* their reserve ratios ($rr \downarrow$, $m \uparrow$), aggressively lending out their reserves.

### Bank Failures in the Great Depression (1929–1933)

> [!example] The 1930s Credit Crunch
> Over 9,000 banks failed between 1929 and 1933, and the money supply fell 28% — despite the monetary base rising.

| Variable | Aug 1929 | Mar 1933 | % Change |
|----------|----------|----------|---------|
| $M$ | 26.5 | 19.0 | −28.3% |
| $B$ | 7.1 | 8.4 | +18.3% |
| $m$ | 3.7 | 2.3 | −37.8% |
| $cr$ | 0.17 | 0.41 | +141.2% |
| $rr$ | 0.14 | 0.21 | +50.0% |

**What happened:** Bank runs caused households to withdraw cash ($cr \uparrow$). Surviving banks, terrified of further runs, hoarded reserves instead of lending ($rr \uparrow$). Both effects crushed the money multiplier $m$, causing $M$ to plummet even as $B$ rose.

$$m = \frac{1 + cr}{cr + rr}: \quad \frac{1+0.17}{0.17+0.14} = 3.77 \;\text{(1929)} \quad \to \quad \frac{1+0.41}{0.41+0.21} = 2.27 \;\text{(1933)}$$

> [!info] Policy Response: Deposit Insurance
> The **Federal Deposit Insurance Corporation (FDIC)** was created in 1933 specifically to prevent bank runs. If depositors know the government guarantees their deposits, they have no reason to panic-withdraw — stabilising $cr$ and the money multiplier.

---

## 📝 Summary

The monetary system works through two interlocking mechanisms: **the central bank controlling base money** ($B$), and **the banking system amplifying base money through lending** (the multiplier $m$).

Money's three functions — medium of exchange, store of value, unit of account — make it useful. The fractional-reserve system is what makes it powerful: a $1 deposit can cascade into $5 of money supply. But this same leverage makes banks fragile; capital requirements exist to ensure banks can absorb losses without failing.

The four monetary policy tools (open market operations, discount rate, reserve requirements, interest on reserves) all work through either $B$ or $m$ — but because households control $cr$ and banks control excess reserves, the Fed's influence over $M$ is real but imprecise.

| Concept | Formula | Key Driver |
|---------|---------|-----------|
| Money supply | $M = C + D$ | Banking system |
| Multiplier | $m = \frac{1+cr}{cr+rr}$ | $cr$, $rr$ |
| Full money supply | $M = m \cdot B$ | Fed + banks + households |
| Bank solvency buffer | Capital = Assets − Liabilities | Leverage ratio |

---

## 🔗 Related Notes

- [[Lec_03-Classical Theory & National Income]] — the real-side model that pairs with the monetary side
- [[Lec_05-Inflation]] — Chapter 5 uses the money supply model to explain price levels (Quantity Theory)
- [[Money Supply]]
- [[Money Multiplier]]
- [[Fractional Reserve Banking]]
- [[Federal Reserve]]
- [[Bank Capital]]
- [[Leverage]]
- [[Quantitative Easing]]
- [[Monetary Base]]
