---
title: "Sample Exam 2 — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Sample Exam 2 (practice)"
semester: 2
year: 2
course: "Micro 3 — Advanced Microeconomics"
instructor: Ido Eisdorfer
tags:
  - microeconomics
  - past-paper
  - worked-solution
  - two-part-tariff
  - price-discrimination
  - bundling
  - moral-hazard
  - cournot-competition
  - bertrand-competition
  - game-theory
aliases:
  - Sample Exam 2 Solutions
  - Micro 3 Practice Exam 2
  - PP02 Micro
subject: micro
in_scope: true
---

# Sample Exam 2 — Worked Solutions

> Part of: [[Microeconomics]]
> **Sample Exam 2** (practice) — Micro 3 — Advanced Microeconomics | Tyomkin School of Economics, Reichman University
> Builds on: [[Topic 1 - Asymmetric Information]] · [[Topic 2 - Equilibrium in Different Market Structures]] · [[Topic 3 - Game Theory]] · [[Topic 4 - Price Competition with Complementary Goods]]
> Key concepts: [[_Micro Concepts#Bundling|Bundling]], [[_Micro Concepts#Moral Hazard|Moral Hazard]], [[_Micro Concepts#Two-Part Tariff|Two-Part Tariff]], [[_Micro Concepts#First-Degree Price Discrimination|First-Degree Price Discrimination]], [[_Micro Concepts#Coordination Game|Coordination Game]], [[_Micro Concepts#Cournot Competition|Cournot Competition]], [[_Micro Concepts#Bertrand Competition|Bertrand Competition]], [[_Micro Concepts#Nash Equilibrium|Nash Equilibrium]]

> [!warning] No official solutions
> Solved from scratch and checked in Python. Two questions are genuinely awkward as printed — **Q3** (the cost-effectiveness numbers point the opposite way to the keyed pairing) and **Q6** (the value works out to a number not in the option list). Both are flagged with a `[!question]` callout; check them against your instructor's key.

---

## 🧰 What this paper tests

> [!info] The throughline: extracting surplus from heterogeneous buyers
> Exam 2 leans hard on **[[_Micro Concepts#Two-Part Tariff|two-part tariffs]]** and **[[_Micro Concepts#Price Discrimination|price discrimination]]** (Q6, Open Q1) plus the **quantity-vs-price** competition contrast (Open Q2). The single most useful reflex: a first-degree two-part tariff sets **per-unit price = MC** and **fixed fee = consumer surplus**; a *uniform* tariff for two types has its fee pinned by the **smaller** consumer.
> - **Q1, Q6, Open Q1** — bundling & two-part tariffs.
> - **Q2, Q3** — health insurance, cost-effectiveness, [[_Micro Concepts#Moral Hazard|moral hazard]].
> - **Q4, Open Q2** — differentiated competition: substitutes, [[_Micro Concepts#Cournot Competition|Cournot]] vs [[_Micro Concepts#Bertrand Competition|Bertrand]].
> - **Q5** — [[_Micro Concepts#Coordination Game|Battle of the Sexes]] and counting equilibria.

---

# Part A — Multiple Choice

## Q1 — Screens sold separately (uniform price)

**Setup:** WTP for screens $= 800, 600, 400, 200$; $MC = 300$. One uniform price; profit $= (\text{buyers})\times(p-300)$.

| Price | Buyers | Profit |
|---|---|---|
| 200 | 4 | $-400$ |
| 400 | 3 | $300$ |
| **600** | **2** | $\mathbf{600}$ |
| 800 | 1 | $500$ |

> [!success] Answer — **C. \$600** (sell to customers 1 and 2, profit 600).

![[PP02_q1_screens_uniform.png|640]]

> [!tip] Same engine as Exam 1 Q1
> Walk the WTP ladder; the best uniform price trades off margin against the number of buyers. See [[PP_01-Sample Exam 1#Q1 — Bundling vs. separate sales (uniform price)|PP01 Q1]] for the computers version.

---

## Q2 — Physician maximises the patient's expected utility

**Setup:** A — cost 1,200, success 0.5, 4 utility units; B — cost 2,400, success 0.75, 20 utility units. The physician ignores cost (acts for the patient).

$$E[U_A] = 0.5\times 4 = 2, \qquad E[U_B] = 0.75\times 20 = 15.$$

$B$ delivers far more expected health utility, and the physician — who doesn't pay — chooses it.

> [!success] Answer — **C. Treatment B** (higher expected utility units).

> [!question] The numbers in option C don't match the data
> Option C states "16 vs 12". With the data given, the expected utilities are **15 vs 2**, not 16 vs 12 — the option's figures look like a typo. C is still the only choice that selects **B for the right reason** (maximising expected utility), so it's the answer; just don't trust its arithmetic.

---

## Q3 — HMO maximises utility per fixed budget

**Setup:** continues Q2; the HMO wants the most utility per dollar.

Cost-effectiveness (expected utility per dollar):

$$\begin{gathered}
\frac{E[U_A]}{\text{cost}_A} = \frac{2}{1200} \approx 0.0017, \\
\frac{E[U_B]}{\text{cost}_B} = \frac{15}{2400} \approx 0.0063.
\end{gathered}$$

So **Treatment B is the more cost-effective** option (about 3.7× better per dollar), and **[[_Micro Concepts#Moral Hazard|moral hazard]] / agency conflict can arise** because the physician (maximising the patient's utility, ignoring cost) and the HMO (maximising utility per budget) need not share the same objective.

> [!question] Likely keyed **E**, but the numbers contradict statement C
> The intended answer is almost certainly **E (C and D)** — the classic "physician over-treats, payer wants cost-effectiveness" story. **D is definitely correct.** But statement **C says Treatment A is more cost-effective, and that is false**: by the given numbers **B** has the higher utility-per-dollar (statement **B** is the true one). So strictly, the defensible answer is **D** (moral hazard), and if forced to pick the *correct factual* cost-effectiveness statement it's **B**, not C. Flag this with your instructor — the exam likely assumed the cheaper Treatment A is "more efficient", which the data doesn't support.

> [!tip] The concept that's being tested
> Regardless of the arithmetic slip, the point is the **agency problem in healthcare**: when the decision-maker (physician/patient) doesn't bear the cost, treatment can diverge from what a budget-holder would choose — a form of [[_Micro Concepts#Moral Hazard|moral hazard]].

---

## Q4 — Substitute products, $q_i = A - p_i + p_j$, $MC = 0$

By symmetry the equilibrium has **equal prices** (statement A true). To compare welfare with the "independent products" benchmark, generalise the cross-term to $q_i = A - p_i + \gamma p_j$ and solve:

$$\begin{gathered}
\pi_i = p_i(A - p_i + \gamma p_j),\quad \text{FOC } A - 2p_i + \gamma p_j = 0 \\
\Rightarrow p^* = \frac{A}{2-\gamma},\quad q^* = \frac{A}{2-\gamma}.
\end{gathered}$$

- **Independent products** ($\gamma = 0$): $p = A/2,\ q = A/2$, total output $A$.
- **Substitutes** ($\gamma > 0$): total output $\dfrac{2A}{2-\gamma} > A$.

With $MC = 0$, more output ⟹ more total surplus, so **welfare is higher in the substitute equilibrium** (statement B true).

> [!success] Answer — **D. A and B are correct.** Prices are equal, and welfare exceeds the independent-products benchmark.

> [!warning] Substitutes vs complements — opposite welfare signs
> Competing **substitutes** push prices toward cost and *raise* welfare. Competing **complements** suffer [[_Micro Concepts#Double Marginalization|double marginalization]] — independent pricing makes the total price *too high* and *lowers* welfare (Topic 4). Read the sign of the cross-price term before answering. *(As literally printed with $\gamma=1$ the demand is degenerate — $q_1+q_2 = 2A$ regardless of price — so the conclusion is cleanest argued via the $\gamma<1$ limit above.)*

---

## Q5 — Ronit & Dan at the movies (Battle of the Sexes)

Both prefer to be **together**; Ronit's favoured joint film is *Sense & Sensibility*, Dan's is *Rambo 5*. Going alone is the worst outcome for each. That is textbook **[[_Micro Concepts#Coordination Game|Battle of the Sexes]]**:

| Ronit \ Dan | Rambo | S&S |
|---|---|---|
| **Rambo** | $(1, 2)$ ✓NE | $(0,0)$ |
| **S&S** | $(0,0)$ | $(2, 1)$ ✓NE |

Two **pure** Nash equilibria — both watch Rambo, or both watch S&S — plus one **[[_Micro Concepts#Mixed Strategy|mixed-strategy]]** equilibrium where each randomises over their preferred film.

> [!success] Answer — **C. 3** (two pure + one mixed).

> [!warning] 2 or 3? Know your course's convention
> If only **pure-strategy** equilibria are counted the answer is **2 (B)**. Because Topic 3 explicitly teaches mixed strategies (and computes the Battle-of-the-Sexes mixed NE — see [[Topic 3 - Game Theory#3.2 Battle of the Sexes|the lecture]]), the complete count of **3** is the intended answer here.

---

## Q6 — Value of identifying consumer types (uniform vs separate two-part tariffs)

**Setup:** $q_1 = 9 - p,\ q_2 = 12 - p,\ MC = 2$. With perfect type info the monopolist runs **separate** first-degree two-part tariffs; without it, a single **uniform** $(p,T)$.

**With info (first-degree, $p = MC = 2$, $T = CS$):**

$$\begin{gathered}
CS_1 = \tfrac12(9-2)^2 = 24.5,\quad CS_2 = \tfrac12(12-2)^2 = 50 \\
\Rightarrow \pi^{\text{disc}} = 74.5.
\end{gathered}$$

**Without info (uniform).** The fee is capped by the *smaller* consumer 1: $T = \tfrac12(9-p)^2$. Profit serving both:

$$\pi(p) = (9-p)^2 + (p-2)(21-2p) = -p^2 + 7p + 39,$$
$$p^* = 3.5,\quad T = 15.125,\quad \pi^{\text{uni}} = 51.25.$$

(Serving only consumer 2 yields 50 < 51.25, so the monopolist keeps both.)

**Value of the information** $= \pi^{\text{disc}} - \pi^{\text{uni}} = 74.5 - 51.25 = \boxed{23.25}.$

> [!question] Answer — **E. None of the answers is correct** (value $= 23.25$)
> The maximum the monopolist should pay is the profit *gain* from discriminating, **23.25**, which is not among 97.75 / 124 / 51.25 / 49. Note the trap: **51.25 is the uniform-tariff profit itself**, not the value of the information. If your key insists on 51.25, it is answering "what is the uniform-TPT profit" rather than the question asked. By the literal question (willingness to pay = extra profit), the answer is **E**.

---

# Part B — Open Questions

## Open Q1 — Two-part tariffs to two consumers

**Setup:** $TC(Q) = 20Q$ (so $MC = 20$); Consumer 1 $p = 200 - q_1$, Consumer 2 $p = 150 - q_2$.

### A. Pay $M$ → separate two-part tariffs ([[_Micro Concepts#First-Degree Price Discrimination|first-degree]])

Set each per-unit price to $MC$ and the fee to that consumer's surplus:

$$\begin{gathered}
p_1 = p_2 = MC = 20, \\
T_1 = \tfrac12(200-20)^2 = 16{,}200,\qquad T_2 = \tfrac12(150-20)^2 = 8{,}450.
\end{gathered}$$

> [!success] Answer (A)
> $(p_1, T_1) = (20,\ 16{,}200)$ and $(p_2, T_2) = (20,\ 8{,}450)$. Total profit $= 24{,}650$.

![[PP02_open1_two_part_tariff.png|620]]

### B. No $M$ → uniform $(p,T)$. Find the maximum $M$

A single fee can't exceed the **smaller** surplus, so $T = CS_2(p) = \tfrac12(150-p)^2$ (binds on consumer 2). Profit serving both:

$$\pi(p) = (150-p)^2 + (p-20)(350 - 2p) = -p^2 + 90p + 15{,}500,$$
$$p^* = 45,\quad T = 5{,}512.5,\quad \pi^{\text{uni}} = 17{,}525.$$

> [!success] Answer (B)
> Uniform tariff $(p,T) = (45,\ 5{,}512.5)$, profit $17{,}525$. The monopolist pays at most
> $$M_{\max} = \pi^{\text{disc}} - \pi^{\text{uni}} = 24{,}650 - 17{,}525 = \boxed{7{,}125}.$$

> [!warning] Why the uniform price jumps from 20 to 45
> Under discrimination the per-unit price is $MC=20$. Under a uniform tariff the fee is throttled by consumer 2, so the firm leans on the **per-unit margin** instead, raising $p$ to 45 to claw back profit from the larger consumer 1. That higher price is exactly the inefficiency that makes type information worth 7,125.

### C. Uniform tariff with Consumer 2 demand $p = A - q_2$ ($A \le 200$)

Same logic, fee pinned by consumer 2: $T = \tfrac12(A-p)^2$. Profit serving both:

$$\begin{aligned}
\pi(p) &= (A-p)^2 + (p-20)(200 + A - 2p) \\
&= -p^2 + (240 - A)p + (A^2 - 20A - 4000).
\end{aligned}$$

$$\boxed{p^*(A) = 120 - \tfrac{A}{2}}, \qquad T^*(A) = \tfrac{9}{8}(A-80)^2.$$

> [!success] Answer (C)
> Optimal uniform tariff $p^*(A) = 120 - \tfrac{A}{2}$, fee $T^*(A) = \tfrac{9}{8}(A-80)^2$. **The per-unit price *falls* as $A$ rises** ($dp^*/dA = -\tfrac12$). *(Check: $A=150$ reproduces part B's $p=45$.)*

![[PP02_open1cd_price_vs_A.png|700]]

> [!tip] The counter-intuitive comparative static
> As consumer 2 becomes more valuable (higher $A$), the firm *lowers* the per-unit price. Why? A bigger consumer 2 means more surplus to harvest through the **fixed fee**, so the firm prices closer to $MC$ to expand quantity and lets $T$ do the extracting — the two-part-tariff instinct of "price near cost, charge for entry".

### D. When does the monopolist serve only one consumer?

Two candidate strategies, each written as a function of $A$:

**Serve only consumer 1** (drop consumer 2). This is plain first-degree on consumer 1: $p=MC=20$, fee $=CS_1(20)=\tfrac12(200-20)^2=16{,}200$. Consumer 2 never enters, so this profit is a **constant** — independent of $A$:
$$\pi^{\text{only 1}} = 16{,}200.$$

**Serve both.** Here we need the *maximised* profit as a function of $A$ — the value function. Take part C's serve-both profit $\pi(p)=-p^2+(240-A)p+(A^2-20A-4000)$ and substitute the optimal price $p^*(A)=120-\tfrac{A}{2}$ back in, so $p$ disappears and only $A$ remains. Working the pieces with $p=120-\tfrac A2$:
$$\begin{gathered}
-p^2 = -\big(14400-120A+\tfrac{A^2}{4}\big), \\
(240-A)p = 28800-240A+\tfrac{A^2}{2},
\end{gathered}$$
and adding $A^2-20A-4000$: the $A^2$ terms give $\big(-\tfrac14+\tfrac12+1\big)A^2=\tfrac54A^2$, the $A$ terms give $(120-240-20)A=-140A$, the constants give $10{,}400$. Hence
$$\boxed{\pi^{\text{both}}(A) = \tfrac54 A^2 - 140A + 10{,}400.}$$
(Sanity check: $A=150$ gives $\tfrac54(22500)-21000+10400 = 17{,}525$ — exactly part B.)

**Find the switch point** — set the two equal and solve the quadratic:
$$\begin{aligned}
\tfrac54 A^2 - 140A + 10{,}400 = 16{,}200 &\Rightarrow \tfrac54 A^2 - 140A - 5{,}800 = 0 \\
&\Rightarrow A^2 - 112A - 4{,}640 = 0,
\end{aligned}$$
$$\begin{aligned}
A &= \frac{112 \pm \sqrt{112^2 + 4(4640)}}{2} = \frac{112 \pm \sqrt{31{,}104}}{2} = 56 \pm 36\sqrt6 \\
&\Rightarrow A^* = 56 + 36\sqrt{6} \approx 144.2.
\end{aligned}$$

> [!success] Answer (D)
> The monopolist drops consumer 2 and serves **only consumer 1** when $A < 56 + 36\sqrt{6} \approx 144.2$ (for $A$ above that, serving both wins). Intuitively, when consumer 2 is weak, including them only drags the fee $T$ down and sacrifices extraction from consumer 1 — better to forgo the small market entirely.

---

## Open Q2 — Differentiated duopoly: quantity vs price

**Setup:** $p_1 = 24 - q_1 - 0.5q_2,\ p_2 = 24 - q_2 - 0.5q_1$, $MC = 0$.

### A. Cournot ([[_Micro Concepts#Cournot Competition|simultaneous quantities]])

Each firm chooses its **quantity** taking the rival's as given, earning $\pi_i = p_i q_i = (24 - q_i - 0.5q_j)q_i$ (recall $MC = 0$). The first-order condition in its own output gives the best response:

$$\begin{gathered}
\frac{\partial \pi_i}{\partial q_i} = 24 - 2q_i - 0.5q_j = 0 \\
\Rightarrow q_i = 12 - \tfrac14 q_j.
\end{gathered}$$

Impose symmetry ($q_1 = q_2 = q$): $\,q = 12 - \tfrac14 q \Rightarrow \tfrac54 q = 12 \Rightarrow q^* = 9.6$. The price then follows from demand, $p = 24 - 1.5q^* = 9.6$, and profit is $\pi = pq$ (since $MC = 0$):

$$q^* = 9.6,\qquad p^* = 9.6,\qquad \pi^* = 92.16.$$

### B. Bertrand ([[_Micro Concepts#Bertrand Competition|simultaneous prices]])

In Bertrand each firm chooses its **price**, so we first need quantity as a function of prices — invert the given (inverse) demands. Write them as a linear system:
$$q_1 + 0.5q_2 = 24 - p_1, \qquad 0.5q_1 + q_2 = 24 - p_2.$$
Solve it (substitute the first into the second): $0.5(24-p_1-0.5q_2)+q_2 = 24-p_2 \Rightarrow 0.75q_2 = 12+0.5p_1-p_2$, and symmetrically for $q_1$:
$$q_i = 16 - \tfrac43 p_i + \tfrac23 p_j.$$
(The own-price coefficient $\tfrac43$ exceeds the cross-price $\tfrac23$, as it should; both come from $1/\det$ of $\big[\begin{smallmatrix}1&0.5\\0.5&1\end{smallmatrix}\big]$, whose $\det = 1-\tfrac14 = \tfrac34$.)

Now each firm maximises $\pi_i = p_i q_i = p_i\big(16 - \tfrac43 p_i + \tfrac23 p_j\big)$ over its own price ($MC=0$):
$$\begin{gathered}
\frac{\partial \pi_i}{\partial p_i} = 16 - \tfrac83 p_i + \tfrac23 p_j = 0 \\
\Rightarrow p_i = 6 + \tfrac14 p_j.
\end{gathered}$$
Symmetric ($p_1=p_2=p$): $p = 6 + \tfrac14 p \Rightarrow \tfrac34 p = 6 \Rightarrow p^* = 8$. Then
$$\begin{gathered}
q^* = 16 - \tfrac43(8) + \tfrac23(8) = \tfrac{32}{3} \approx 10.67, \\
\pi^* = 8\cdot\tfrac{32}{3} = \tfrac{256}{3} \approx 85.33.
\end{gathered}$$

> [!warning] Price competition is tougher
> $p^{\text{Bertrand}} = 8 < p^{\text{Cournot}} = 9.6$ and profit drops $92.16 \to 85.33$. With differentiated goods, competing in **prices** is more aggressive than competing in **quantities** — the key fact that drives part D.

### C. Firm 1 sets quantity, Firm 2 sets price

Now the two firms use **different** instruments, so rewrite each firm's profit in terms of *its own* choice variable, holding the rival's fixed. Firm 1 controls $q_1$ (so it needs its price as $p_1(q_1,p_2)$); Firm 2 controls $p_2$ (so it needs its quantity as $q_2(p_2,q_1)$).

**Firm 2's quantity** — solve its inverse demand for $q_2$: $\;q_2 = 24 - p_2 - 0.5q_1$.
**Firm 1's price** — substitute that $q_2$ into $p_1 = 24 - q_1 - 0.5q_2$:
$$p_1 = 24 - q_1 - 0.5(24 - p_2 - 0.5q_1) = 12 - 0.75q_1 + 0.5p_2.$$

**Best responses** (each firm differentiates w.r.t. its own variable, $MC=0$):
$$\begin{aligned}
\text{Firm 1: } \pi_1 = (12 - 0.75q_1 + 0.5p_2)q_1 &\Rightarrow 12 - 1.5q_1 + 0.5p_2 = 0 \\
&\Rightarrow q_1 = 8 + \tfrac13 p_2,
\end{aligned}$$
$$\begin{aligned}
\text{Firm 2: } \pi_2 = p_2(24 - p_2 - 0.5q_1) &\Rightarrow 24 - 2p_2 - 0.5q_1 = 0 \\
&\Rightarrow p_2 = 12 - \tfrac14 q_1.
\end{aligned}$$

**Solve together** — substitute the second into the first:
$$\begin{aligned}
q_1 = 8 + \tfrac13\big(12 - \tfrac14 q_1\big) = 12 - \tfrac1{12}q_1 &\Rightarrow \tfrac{13}{12}q_1 = 12 \Rightarrow q_1 = \tfrac{144}{13}, \\
p_2 &= 12 - \tfrac14\cdot\tfrac{144}{13} = \tfrac{120}{13}.
\end{aligned}$$
Back out the rest: $q_2 = 24 - \tfrac{120}{13} - 0.5\cdot\tfrac{144}{13} = \tfrac{120}{13}\approx9.23$ and $p_1 = 12 - 0.75\cdot\tfrac{144}{13} + 0.5\cdot\tfrac{120}{13} = \tfrac{108}{13}\approx8.31$. Profits:
$$\begin{gathered}
\pi_1 = \tfrac{108}{13}\cdot\tfrac{144}{13} = \tfrac{15552}{169} \approx 92.02, \\
\pi_2 = \tfrac{120}{13}\cdot\tfrac{120}{13} = \tfrac{14400}{169} \approx 85.21.
\end{gathered}$$

> [!success] Answer (C)
> $q_1 = \tfrac{144}{13},\ p_1 \approx 8.31,\ \pi_1 \approx 92.02$; $p_2 = \tfrac{120}{13},\ q_2 \approx 9.23,\ \pi_2 \approx 85.21$. The **quantity-setter (Firm 1) earns more** than the price-setter.

### D. The strategy game — choose Quantity or Price

| Firm 1 \ Firm 2 | Quantity | Price |
|---|---|---|
| **Quantity** | $(92.16,\ 92.16)$ | $(92.02,\ 85.21)$ |
| **Price** | $(85.21,\ 92.02)$ | $(85.33,\ 85.33)$ |

For each firm, **Quantity beats Price against either rival choice** ($92.16 > 85.21$ and $92.02 > 85.33$): Quantity is a **[[_Micro Concepts#Dominant Strategy|dominant strategy]]**.

> [!success] Answer (D)
> Unique Nash equilibrium **(Quantity, Quantity)** — i.e. Cournot — with profits $(92.16, 92.16)$. Each firm prefers to compete in quantities because it softens competition.

![[PP02_open2_qp_game.png|700]]

> [!tip] Why firms "choose" Cournot
> Committing to a quantity is a softer move than committing to a price; both firms anticipating this end up at the higher-profit Cournot outcome. This is the classic result that, when firms can pick the *mode* of competition, they gravitate to quantity competition.

---

## 🎯 One-page recap

| Q | Topic | Tool | Answer |
|---|---|---|---|
| **MC1** | Bundling | Uniform price over WTP ladder | **C** — \$600 (profit 600) |
| **MC2** | Insurance | Physician max expected utility | **C** — Treatment B ($E[U]=15>2$) |
| **MC3** | Cost-effectiveness | Utility per \$ + moral hazard | **D / likely-keyed E** — see flag (B is the cost-effective one) |
| **MC4** | Substitutes | Symmetric eq.; output ↑ | **D** — prices equal & welfare higher |
| **MC5** | Battle of the Sexes | Count NE | **C** — 3 (2 pure + 1 mixed) |
| **MC6** | Two-part tariff | $\pi^{\text{disc}}-\pi^{\text{uni}}$ | **E** — value $=23.25$ (not listed) |
| **Open 1A** | First-degree TPT | $p=MC$, $T=CS$ | $(20,16200),(20,8450)$; $\pi=24{,}650$ |
| **Open 1B** | Uniform TPT | $T=CS_2$ | $p=45,\ T=5512.5$; $M_{\max}=7{,}125$ |
| **Open 1C** | Uniform TPT, general $A$ | maximise over $p$ | $p^*=120-\tfrac A2,\ T^*=\tfrac98(A-80)^2$ |
| **Open 1D** | Serve one vs both | $\pi^{\text{both}}=\pi^{\text{only1}}$ | serve one iff $A<56+36\sqrt6\approx144.2$ |
| **Open 2A** | Cournot | $MR=MC$ | $q=p=9.6,\ \pi=92.16$ |
| **Open 2B** | Bertrand | invert demand, $MR=MC$ | $p=8,\ q=\tfrac{32}3,\ \pi=\tfrac{256}3$ |
| **Open 2C** | Mixed Q/P | cross best-responses | $\pi_1\approx92.0,\ \pi_2\approx85.2$ |
| **Open 2D** | Mode game | dominance | NE $=$ (Quantity, Quantity) = Cournot |

> [!tip] Exam reflexes
> - **First-degree TPT** → $p = MC$, $T = CS_i$. **Uniform TPT for two types** → fee pinned by the *smaller* consumer; lean on the per-unit margin.
> - **"Value of information / identifying types"** → $\pi^{\text{discriminate}} - \pi^{\text{uniform}}$, *not* either profit on its own.
> - **Substitutes** competing → lower prices, *higher* welfare. **Complements** → double marginalisation, *lower* welfare.
> - **Cournot vs Bertrand (differentiated)** → Bertrand price & profit are lower; given the choice of mode, **Quantity dominates** → firms land at Cournot.
> - **Battle of the Sexes** → 2 pure + 1 mixed = **3** equilibria.

---

## 📎 Related Notes

- [[PP_01-Sample Exam 1]] — companion practice paper (same toolkit: bundling, PD, two-part tariffs, Bertrand, game theory)
- [[Topic 1 - Asymmetric Information]] — insurance & moral hazard (Q2–Q3)
- [[Topic 2 - Equilibrium in Different Market Structures]] — bundling, price discrimination, two-part tariffs, Cournot/Bertrand (Q1, Q4, Q6, Open Q1–Q2)
- [[Topic 3 - Game Theory]] — Battle of the Sexes, dominant strategies, mixed NE (Q5, Open Q2D)
- [[Topic 4 - Price Competition with Complementary Goods]] — substitutes vs complements, best-response functions (Q4, Open Q2)
- [[Exercise 5 - Solutions]] — price discrimination & two-part tariffs (Open Q1)
- [[Exercise 8 - Solutions]] — Cournot & Stackelberg quantity competition (Open Q2)
- [[Microeconomics]] — subject hub
