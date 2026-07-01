---
title: "Exam Revision Sheet (Lec 1–4)"
subject: micro
type: reference
description: "Lecture-by-lecture revision sheet for Micro 3 — every structure, formula, when-to-use rule, and worked example across asymmetric information, market structures, game theory, and complementary-goods pricing. Built for the exam."
course: Advanced Microeconomics (Micro 3)
semester: 2
year: 2
order: 1
pinned: true
tags:
  - micro
  - exam-prep
  - revision-sheet
  - reference
  - cheat-sheet
aliases:
  - Micro Revision Sheet
  - Micro Cheat Sheet
  - Exam Revision Sheet
source_doc: "Micro 3 — Exam Revision Sheet.pdf"
---



> Part of: [[Microeconomics]] · Glossary: [[_Micro Concepts]]
> **Scope:** the whole Micro 3 toolkit — asymmetric information, monopoly & oligopoly equilibrium, game theory, and complementary-goods pricing. Each section = concept → method / when-to-use → worked example.
> **Default everywhere:** linear demand $P=A-bQ$ gives $MR=A-2bQ$ (same intercept, double slope). Constant marginal cost $MC=c$ unless told otherwise. Always start a pricing question from $MR=MC$.

---

## 🧭 0. Structure picker — "which model does this question want?"

| You see in the question… | Reach for | Lec |
|---|---|---|
| "Buyers can't tell quality", "used cars", "which types trade" | [[_Micro Concepts#Adverse Selection\|Adverse selection]] → [[_Micro Concepts#Rational Expectations Equilibrium\|REE]] | L1 |
| "Single premium", "who buys insurance", "government subsidy" | [[_Micro Concepts#Risk Aversion\|Risk aversion]] + pool self-consistency | L1 |
| "After buying insurance", "expected medical spend" | [[_Micro Concepts#Moral Hazard\|Moral hazard]]: insured price → 0 | L1 |
| "Warranty", "degree / education", "menu of contracts" | [[_Micro Concepts#Signaling\|Signaling]] / [[_Micro Concepts#Screening\|Screening]] | L1 |
| "Single firm", "profit-maximising price" | [[_Micro Concepts#Monopoly\|Monopoly]] $MR=MC$ | L2 |
| "Different prices", "discriminate", "student discount" | [[_Micro Concepts#Price Discrimination\|Price discrimination]] (1st/2nd/3rd) | L2 |
| "Sells two goods", "season ticket", "WTP table" | [[_Micro Concepts#Bundling\|Bundling]] | L2 |
| "Compete in prices", "identical product" | [[_Micro Concepts#Bertrand Competition\|Bertrand]] | L2 |
| "Simultaneous quantities" | [[_Micro Concepts#Cournot Competition\|Cournot]] | L2 |
| "Chooses first / commits" | [[_Micro Concepts#Stackelberg Model\|Stackelberg]] | L2 |
| "Many firms / free entry", "long run" | [[_Micro Concepts#Perfect Competition\|Perfect competition]] | L2 |
| "Sells through a distributor / retailer" | [[_Micro Concepts#Double Marginalization\|Double marginalisation]] | L2 |
| "For which values of $a,b$… is it a NE" | [[_Micro Concepts#Nash Equilibrium\|Pure Nash]] + parametric BRs | L3 |
| "Odd/even", "matching pennies", "no pure NE" | [[_Micro Concepts#Mixed Strategy\|Mixed NE]] (indifference) | L3 |
| "Toll booths", "console + game", "supply chain" | [[_Micro Concepts#Perfect Complements\|Complements]] + [[_Micro Concepts#Pricing Externality\|pricing externality]] | L4 |

> [!tip] First move on every question
> **(1)** How many firms, and do they set **price or quantity**, **simultaneously or sequentially**? **(2)** Is information **symmetric**? If not — hidden *quality* (pre-contract → adverse selection) or hidden *action* (post-contract → moral hazard)? **(3)** For pricing power, can the firm **segment** buyers and **block arbitrage**? Those three answers pin down the model.

---

## 🔍 Lecture 1 — Asymmetric Information

### 1.1 [[_Micro Concepts#Adverse Selection|Adverse selection]] & the lemons market

Hidden **quality**, known to the seller, not the buyer (**pre-contract**). Buyers pay an *average* price → the best types exit → average quality and price fall → death spiral (thinning → collapse).

> **Method — find the [[_Micro Concepts#Rational Expectations Equilibrium|REE]]:** (1) assume **all** types trade; (2) compute $\mathbb{E}[V]=\sum_k p_k V_k$; (3) if $\mathbb{E}[V]<$ the top type's reservation, that type exits; (4) recompute on the smaller pool; (5) stop at the largest self-consistent set.

A good equilibrium exists only if $\mathbb{E}[V]$ clears the good-seller reservation; the lemons equilibrium always co-exists.

> [!example] Full unravelling
> 3 types, equal numbers; values (seller, buyer): Good (1000, 1500), Med (500, 750), Bad (100, 150).
> **All:** $\mathbb{E}[V]=\tfrac13(1500+750+150)=800<1000 \Rightarrow$ Good exits.
> **Med + Bad:** $\mathbb{E}[V]=\tfrac12(750+150)=450<500 \Rightarrow$ Med exits.
> **Bad only:** $150\ge100$ ✓ → price 150, only lemons trade.

> [!example] Partial unravelling
> 5 Good, 20 Med, 5 Bad. Good exits ($\mathbb{E}[V]=775<1000$), but the Med+Bad pool is now 80% Med: $\mathbb{E}[V]=\tfrac45(750)+\tfrac15(150)=630\ge500 \Rightarrow$ Med & Bad trade. Concentration of mid-quality saves the market.

### 1.2 [[_Micro Concepts#Risk Aversion|Risk aversion]] & insurance

Concave utility $U=\sqrt{M}\Rightarrow \mathbb{E}[U(M)]<U(\mathbb{E}[M])$: a risk-averse agent prefers a sure thing → will pay to remove risk. The [[_Micro Concepts#Actuarially Fair Premium|actuarially fair premium]] $=\mathbb{E}[\text{payout}]$ (zero-profit pool). Risk-based premiums: each type pays its own expected cost.

> **Method:** a uniform premium → healthy types opt out, the pool gets sicker, price rises (adverse selection again). Test each candidate pool for **self-consistency**: premium $=$ average cost of those who stay, **and** each stayer's reservation price $\ge$ premium.

> [!example] Who stays insured
> Costs / RP: H 1000/2000 (25%), M 2000/3000 (50%), L 4000/6000 (25%). Uniform & all buy: $\text{avg}=2250>$ H's RP 2000 → H out. M+L: $\text{avg}=2000/0.75\approx2667$, both RPs exceed it ✓. **25% uninsured.** Subsidy to make H join $=2250-2000=250$ per H (also drops M, L price to 2250).

### 1.3 [[_Micro Concepts#Moral Hazard|Moral hazard]]

Hidden **action**, **post-contract**. Once insured, the price of care → 0, so the insured over-consumes (drives recklessly, over-treats).

> **Method:** uninsured pays the true price $P=MC$, quantity off own demand. Fully insured: $P=0$ → moral-hazard quantity; the fair premium is computed on these *larger* quantities, so it exceeds uninsured spend. DWL $=$ units whose value $<MC$.

> [!example] Insured over-consumption
> $\Pr(\text{mild, mod, sev})=\tfrac12,\tfrac13,\tfrac16$; demands $5-P,\;15-P,\;20$; $MC=2$. Uninsured ($P=2$): $Q=3,13,20 \Rightarrow \text{spend}=\tfrac12(6)+\tfrac13(26)+\tfrac16(40)=18.33$. Insured ($P=0$): $Q=5,15,20 \Rightarrow$ fair premium $=21.67>18.33$; the gap is the moral-hazard loss.

> [!example] Agency (physician vs HMO)
> Treatment A cost 1200, $\mathbb{E}[U]=2$; B cost 2400, $\mathbb{E}[U]=15$. The physician (ignores cost) picks B (max utility). The HMO (utility per \$): B gives $15/2400>$ A's $2/1200$ → also B, but the **conflict of objectives** is the agency point.

### 1.4 [[_Micro Concepts#Signaling|Signaling]] & [[_Micro Concepts#Screening|screening]]

**Signaling** = the informed party takes a costly action to prove quality. Works only under **single-crossing**:
$$\text{Cost(low)} > \text{gain from being believed high} > \text{Cost(high)} \;\Rightarrow\; \text{separating eq.}$$
High types signal, low types don't. **Screening** = the uninformed party offers a menu so types self-select.

> [!example] Warranty as a signal
> A warranty costs the good seller 300 but the lemon seller 1300. Only good cars carry it → warranty $=$ credible quality signal. Spence: a degree can separate workers even with **zero** productivity gain (socially wasteful).

---

## 🏭 Lecture 2 — Equilibrium in Different Market Structures

### 2.1 [[_Micro Concepts#Cost Functions|Costs]] & cost curves

Economic $\Pi$ counts implicit / [[_Micro Concepts#Opportunity Cost|opportunity cost]], so it is $<$ accounting $\Pi$. [[_Micro Concepts#Sunk Cost|Sunk costs]] are ignored.
$$TC=FC+VC,\quad MC=\frac{dTC}{dQ},\quad AFC=\frac{FC}{Q}\downarrow,\quad AVC=\frac{VC}{Q},\quad ATC=AVC+AFC$$
$MC$ cuts $AVC$ and $ATC$ at their minima. Decisions use only **avoidable / marginal** costs.

> [!example] Sunk vs marginal
> Plane already flying (cost sunk); extra passenger $MC\approx0$; offer $300>0$ → accept (ignore the \$500 average). $TC=5+40Q+20Q^2 \Rightarrow AVC=40+20Q,\;MC=40+40Q$; $ATC$ min at $Q=0.5\,(=60)$, where $MC=ATC$.

### 2.2 [[_Micro Concepts#Monopoly|Monopoly]] — $MR=MC$

Single seller faces whole-market demand; set $MR=MC$, then read $P$ off demand. With constant $MC=c$:
$$Q_M=\frac{A-c}{2b},\qquad P_M=\frac{A+c}{2},\qquad DWL=\tfrac12(P_M-MC)(Q_c-Q_M)$$

> [!example]
> $P=1300-5q,\;MC=50+10q$. $MR=1300-10q=50+10q \Rightarrow q^\*=62.5,\;P^\*=987.5$.

### 2.3 [[_Micro Concepts#Elasticity|Elasticity]], MR & the [[_Micro Concepts#Lerner Index|Lerner index]]

$$MR=P\!\left(1-\tfrac{1}{|E|}\right),\qquad L=\frac{P-MC}{P}=\frac{1}{|E|},\qquad P^\*=\frac{MC}{1-1/|E|}$$
A monopolist always operates on the **elastic** part ($|E|>1$, $MR>0$); never the inelastic part ($MR<0<MC$). More elastic buyers → lower markup.

> [!example]
> $MC=16,\;|E|=5 \Rightarrow P^\*=16/(4/5)=20$. Students $|E|=9 \Rightarrow P^\*=18$ (a 10% discount). $|E|=2 \Rightarrow L=\tfrac12$, so $P=2\cdot MC$.
> **True/False:** $P=100-10Q \Rightarrow MR=100-20Q=0$ at $Q=5$. For $Q>5$, $MR<0<MC$ → a profit-maximiser never sells $>5$m units — true regardless of the cost function.

### 2.4 Revenue maximisation & capacity

Max **revenue** (not profit) where $MR=0$ (i.e. $|E|=1$). A binding capacity may force a corner.

> [!example]
> $P=40-0.5Q$ (thousands of seats), cap 56k, price \$10 → demand 60k → sell 56k, $TR=560$k. Rev-max: $MR=40-Q=0 \Rightarrow Q=40$k, $P=\$20$, $TR=800$k → **underpriced**; the optimum leaves 16k seats empty (the price of a single uniform price).

### 2.5 Taxes on a monopoly

**[[_Micro Concepts#Lump-Sum Tax|Lump-sum]] / profit tax:** doesn't enter $MC$ → $P,Q$ unchanged (only participation). **[[_Micro Concepts#Per-Unit Tax|Per-unit]] tax $t$:** $MC\to MC+t$ → $P$ rises, $Q$ falls. [[_Micro Concepts#Tax Incidence|Incidence]] (linear demand slope $b$, $MC$ slope $m$):
$$\frac{\Delta P}{\Delta t}=\frac{b}{2b+m}$$

> [!example]
> $P=1300-5q,\;MC=50+10q$ ($b=5,m=10$). Per-unit $t=300$: $q\,62.5\to47.5$, $P\,987.5\to1062.5$. Pass-through $=5/20=25\%$. Lump-sum 5000: $q,P$ unchanged.

### 2.6 [[_Micro Concepts#Bundling|Bundling]]

Sell goods together at one price. Profitable when buyers' reservation prices are **negatively correlated** (the bundle smooths heterogeneity). Compare separate vs pure bundle vs mixed (bundle + singles at a premium). Profit $=(\#\text{buyers})\times(\text{price}-MC)$.

> [!example]
> Excel/Word WTPs $(90,10),(80,40),(40,80),(10,90)$. Separate $\approx320$; pure bundle @100 → 400; mixed (bundle @120 + single @90) → **420**.
> Season tickets (2 seats/concert, 0 cost): separate best $=44$; pure season bundle @23 $=46$; versioned (full @26 + 2-concert pass @23) $=\mathbf{49}$. Mixed/versioning wins.

### 2.7 [[_Micro Concepts#Price Discrimination|Price discrimination]]

Charge different prices **unrelated to cost** to capture consumer surplus. Needs: segments with different elasticity, price control, WTP inference, and **no arbitrage**. Always start from $MR=MC$ per segment / type.

**2.7a [[_Micro Concepts#First-Degree Price Discrimination|First-degree]] (perfect PD).** Firm knows each buyer's WTP → charges each their reservation price → captures **all** [[_Micro Concepts#Consumer Surplus|consumer surplus]]; quantity is efficient (last unit at $P=MC$). In practice a [[_Micro Concepts#Two-Part Tariff|two-part tariff]]: set $p=MC$ and fixed fee $T=CS$ at that price.

> [!example]
> $C1:\,q=40-2P$, $C2:\,q=20-P$, $MC=6$. Discriminating TPT: $p_i=6$; $T_1=CS_1=\tfrac12(20-6)\cdot28=196$, $T_2=98 \Rightarrow \Pi=294$ (all surplus taken).

**2.7b [[_Micro Concepts#Second-Degree Price Discrimination|Second-degree]] (menu / screening).** Types unobservable → offer a menu so buyers self-select; must satisfy [[_Micro Concepts#Incentive Compatibility|incentive compatibility]]. High type gets $p=MC$ (efficient $Q$) but keeps an [[_Micro Concepts#Information Rent|information rent]]; distort the low type's quantity down while marginal gain $a$ (rent saved) $>$ marginal loss $b$; stop at $a=b$. **"No distortion at the top."**

> [!example]
> Same $C1/C2$, screening menu: $p_1=MC=6$ ($T_1=171.5$, low fee $=$ info rent), $p_2=13>MC$ ($T_2=24.5$) $\Rightarrow \Pi=245$ — between uniform (220.5) and perfect PD (294).

**2.7c [[_Micro Concepts#Third-Degree Price Discrimination|Third-degree]] (group pricing).** Firm observes a group label (student/adult, peak/off-peak, country) and sets a separate price per group; resale blocked. In each segment $MR_i=MC \Rightarrow Q_i,P_i$; the **less-elastic** group pays more ($P_i=MC/(1-1/|E_i|)$).

> [!example]
> $Q=500-P,\;MC=100$. Uniform: $Q=200,P=300$. Split ($MR_i=MC$): business $110$ @375, students $90$ @250. Capped govt buyer + rising $MC$: public $P=100-X$, $MC=X$; fill govt cap 10 @50, then $100-2X_p=X_p+10 \Rightarrow X_p=30$, $P_\text{pub}=70$, $Q=40$.

### 2.8 Uniform two-part tariff & the value of information

When the firm can't tell types apart it offers **one** uniform two-part tariff. A single fee can't exceed the *smaller* buyer's surplus → $T=CS_\text{small}(p)$; raise per-unit $p$ above $MC$ to claw margin back from the big buyer; maximise total $\Pi$ over $p$.
$$\text{Value of type info} = \Pi_\text{discriminate} - \Pi_\text{uniform}$$

> [!example]
> $C1:\,q=40-2P$, $C2:\,q=20-P$, $MC=6$. Uniform: $p^\*=9.5,\;T=55.1 \Rightarrow \Pi=220.5$ (vs 294 if types known → info worth **73.5**).

### 2.9 [[_Micro Concepts#Bertrand Competition|Bertrand]] — price competition

Homogeneous goods, simultaneous prices, buyers go to the cheapest. Symmetric $MC=c \Rightarrow P^\*=c,\;\Pi=0$ (**Bertrand paradox**: 2 firms $=$ perfect comp.). Asymmetric $c_1<c_2$: the efficient firm [[_Micro Concepts#Limit Pricing|limit-prices]] at $\min(c_2,\text{own monopoly price})$. Entry: enter iff $\Pi-F\ge0$.

> [!example]
> $P=100-Q,\;MC_1=10,\;MC_2=80$. Monopoly price $55<80$ → firm 1 charges 55 ($\Pi=2025$), firm 2 out. If $MC_2=50<55$ → limit-price 50, $\Pi=2000$.

### 2.10 [[_Micro Concepts#Monopolistic Competition|Differentiated (monopolistic) competition]]

Imperfect substitutes; each firm keeps power over its own demand. Demand $q_i=\alpha-\beta p_i+\gamma p_j$. Set $\partial\Pi_i/\partial p_i=0$ → best responses → intersect (use symmetry). A **merger raises both prices & profits** (internalises the cross-price effect).

> [!example]
> $q_1=168-2P_1+P_2,\;c=0$. FOC $P_1=(168+P_2)/4$ → symmetric $P=56,\;q=112,\;\Pi=6272$. Merger: $P=84,\;\Pi/\text{firm}=7056$ (both gain).
> Mode choice: $p_i=24-q_i-0.5q_j,\;MC=0$. Cournot $\Pi=92.16$; Bertrand $\Pi=85.33$. In the $2\times2$ mode game **Quantity is dominant** → NE $=$ (Q,Q) $=$ Cournot (softer competition).

### 2.11 [[_Micro Concepts#Cournot Competition|Cournot]] — quantity competition

Firms pick quantities simultaneously; price clears total $Q$. Reaction functions slope **down** (strategic substitutes). FOC → $BR:\,q_i=(A-c-q_j)/2$; intersect:
$$q_i=\frac{A-c}{3},\quad P=\frac{A+2c}{3},\quad \Pi_i=\Big(\frac{A-c}{3}\Big)^2 \qquad\Big[\,N\text{ firms: } q_i=\tfrac{A-c}{N+1},\;P=\tfrac{A+Nc}{N+1}\,\Big]$$

> [!example]
> $P=120-Q,\;MC=70 \Rightarrow q_i=50/3\approx16.7,\;P\approx86.7,\;\Pi\approx277.8$ each. Asymmetric convex costs $P=550-Q,\;MC_1=q_1,\;MC_2=2q_2 \Rightarrow q_1=150,\;q_2=100$ (cheaper firm larger share).

### 2.12 [[_Micro Concepts#Stackelberg Model|Stackelberg]] — sequential quantity

Leader chooses $q_1$ first; follower best-responds. Leader substitutes the follower's BR into its own profit (backward induction):
$$q_1=\frac{A-c}{2},\quad q_2=\frac{A-c}{4},\quad Q=\frac{3(A-c)}{4}$$
First-mover advantage (leader ↑ output & profit; follower ↓). Rising $MC$ mutes it.

> [!example]
> $P=120-Q,\;MC=70$: leader $q_1=25$, follower $q_2=12.5 \Rightarrow \Pi_1=312.5>277.8$ (Cournot) $>\Pi_2=156.25$.

### 2.13 [[_Micro Concepts#Cartel|Cartel]], cheating & merger

A cartel maximises **joint** profit (acts as a monopolist) then splits output — jointly best but **not a Nash eq.**: each firm gains by secretly over-producing. Merger price band: max buyer pays $=\Pi_\text{monopoly}-\text{own duopoly }\Pi$; min seller accepts $=$ its duopoly $\Pi$.

> [!example]
> $P=200-Q,\;MC=80$. Cournot $\Pi=1600$ ea. Cartel $q=30,\Pi=1800$. Cheat $q=45,\Pi=2025$ (cheat $>$ cartel $>$ Cournot). Monopoly $\Pi=3600$ → buyer pays $\le3600-1600=2000$.

### 2.14 [[_Micro Concepts#Perfect Competition|Perfect competition]] (SR & LR)

Price takers set $P=MC$. **Short run:** profit can be $\pm$; produce while $P\ge\min AVC$ ([[_Micro Concepts#Shutdown Condition|shutdown]]). **Long run:** [[_Micro Concepts#Free Entry|free entry]] → $\Pi=0$, $P=\min AC$, each firm at [[_Micro Concepts#Minimum Efficient Scale|efficient scale]]; demand sets only the **number of firms**.

> [!example]
> $P=1000/X,\;C=12.5+0.5x^2\,(MC=x)$, 10 firms. SR: $x=P,\;X=10P,\;P=1000/(10P) \Rightarrow P=10,\;x=10,\;\Pi=37.5$. LR: $\min AC$ at $x=5\,(=5) \Rightarrow P=5,\;X=200$, **40 firms**. A demand fall leaves $P=\min AC$ unchanged (only fewer firms).

### 2.15 [[_Micro Concepts#Vertical Relations|Vertical relations]] — [[_Micro Concepts#Double Marginalization|double marginalisation]]

Producer ($MC=k$) sells wholesale $w$ to a retailer who sets $P$. Two stacked markups → higher $P$, lower $Q$ than one integrated monopolist — worse for everyone. Backward induction:
$$Q_{VR}=\frac{A-k}{4},\quad w=\frac{A+k}{2},\quad P=\frac{3A+k}{4}$$
**Fix:** two-part tariff ($w=MC+$ fee), [[_Micro Concepts#Vertical Integration|vertical merger]], or RPM → restores the integrated outcome.

> [!example]
> $P=200-Q,\;MC=0$. Integrated: $Q=100,P=100,\Pi=10000$. Chain: $w=100,P=150,Q=50 \Rightarrow \Pi=5000+2500=7500<10000$. TPT ($w=0+$ fee) restores 10000.

---

## 🎲 Lecture 3 — Game Theory

### 3.1 Dominance & [[_Micro Concepts#Iterated Dominance|IESDS]]

[[_Micro Concepts#Normal-Form Game|Normal form]]: rows $=$ P1, cols $=$ P2, cell $=$ (P1, P2). A [[_Micro Concepts#Dominant Strategy|dominant]] strategy is best vs every rival action; a [[_Micro Concepts#Dominated Strategy|dominated]] one is never played. **Strict** dominance: $>$ in every column. **Weak:** $\ge$ all, $>$ one. **IESDS:** delete strictly dominated strategies repeatedly (order-free; never removes a NE).

> [!example]
> Hire vs Not $(5,5)(3,6)/(6,3)(4,4)$: Hire beats Not in both columns → Hire dominant → NE $(\text{Hire,Hire})=(4,4)$, worse than $(5,5)$ — a [[_Micro Concepts#Prisoner's Dilemma|Prisoner's Dilemma]].

### 3.2 Pure [[_Micro Concepts#Nash Equilibrium|Nash]] & parametric conditions

A Nash eq. $=$ no player gains from a unilateral deviation (mutual [[_Micro Concepts#Best Response|best responses]]). **Underline method:** mark P1's best in each column & P2's best in each row; a doubly-marked cell is a pure NE. For parametric games, write each profile's two BR inequalities; for a **unique** NE, also negate every other profile's conditions.

> [!example]
> $U:(3,2)(1,4)$ / $D:(2,1)(4,3)$. Col L → U, col R → D; row U → R, row D → R $\Rightarrow$ NE $=(D,R)=(4,3)$.
> Parametric: $U:(c,1)(1,a)$, $D:(d,1)(2,b)$. $(\text{Right,Down})$ is the unique NE iff $b<1,\;d\ge c,$ and $(d>c \text{ or } a>1)$.

### 3.3 The game zoo

| Game | #NE | Key |
|---|---|---|
| [[_Micro Concepts#Prisoner's Dilemma\|Prisoner's Dilemma]] | 1 | dominant → Pareto-inferior |
| Battle of the Sexes | 3 | 2 pure + 1 mixed |
| [[_Micro Concepts#Coordination Game\|Coordination]] / network | 2 | Pareto- vs risk-dominant; lock-in |
| Matching pennies / odd-even | 1 | 0 pure, mixed $(\tfrac12,\tfrac12)$ |
| Rock-Paper-Scissors | 1 | 0 pure, mixed $(\tfrac13,\tfrac13,\tfrac13)$ |

> [!example]
> Network adoption: payoffs add bonus $c$ if both pick the same model. $(A,A)$ is a NE iff $c\ge b$; if $a=b<c$ there are two NE $(A,A)$ & $(B,B)$.

### 3.4 [[_Micro Concepts#Mixed Strategy|Mixed-strategy]] NE

When no pure NE exists (or for extra equilibria), players randomise. **Make the opponent indifferent:** set their expected utility of each pure strategy equal, solve for *your* mixing probability.

> [!example]
> $U:(0,2)(3,0)/D:(2,0)(0,3)$: $3-3q=2q \Rightarrow q=\tfrac15$; by symmetry $p=\tfrac15$. Battle of the Sexes $(2,1)$: $p=\tfrac23,\;q=\tfrac13$.

### 3.5 Iterated-dominance unravelling

Even cooperative-looking outcomes collapse if undercutting is always individually better. Spot the marginal incentive to deviate by $\varepsilon$ and iterate to the floor. **Escape:** repeated play (tit-for-tat / folk theorem), binding contracts, social preferences.

> [!example]
> [[_Micro Concepts#Traveller's Dilemma|Traveller's dilemma]], report 180–300, lower report $+5$ bonus, higher $-5$. $(300,300)$ is Pareto-best but each undercuts → unravels to the unique NE $(180,180)$.

---

## 🔗 Lecture 4 — Price Competition with Complementary Goods

### 4.1 [[_Micro Concepts#Perfect Complements|Perfect complements]] & $N$-firm pricing

Buyer needs **all** components → cares only about the total price $P=\sum p_i$; demand $Q=A-P$. Each firm prices its piece taking the others' as given. FOC firm $i$: $A-P-p_i=0$; impose symmetry $p_i=P/N$:
$$P_N=\frac{AN}{N+1},\quad p_i=Q=\frac{A}{N+1},\quad \Pi_\text{tot}=\frac{NA^2}{(N+1)^2}\qquad[\,N=1:\;P=A/2\,]$$
**More complementary firms → higher total price**; industry profit is maximised at $N=1$.

> [!example]
> $A=10,\;N=2$ (toll road): $p_i=10/3,\;P=20/3\approx6.67,\;Q=10/3,\;\Pi_i=100/9$ vs monopoly $P=5,\;\Pi=25$ → firms jointly earn **less**. $A=12$: $N=1\Rightarrow P=6,\Pi=36$; $N=3\Rightarrow P=9,Q=3,\Pi_\text{tot}=27<36$.

### 4.2 [[_Micro Concepts#Double Marginalization|Double marginalisation]] / [[_Micro Concepts#Pricing Externality|pricing externality]]

Each firm's markup raises the total price and shrinks demand for **all** firms, but it ignores that loss — a **negative pricing externality**. So more complementary firms → higher $P$, lower $Q$, lower $\Pi$: the exact opposite of substitutes. As $N\to\infty$, $P\to A$, $Q\to0$.

### 4.3 Fixes & substitutes vs complements

Internalise the externality: [[_Micro Concepts#Vertical Integration|vertical integration]] ($\to P=A/2$), two-part tariff, or revenue sharing. **Read the cross-price sign first:** substitutes (compete) → more firms lower $P$, raise welfare; complements → more firms raise $P$, lower welfare.

---

## Σ Formula bank (linear demand, $MC=c$)

| Structure | $Q$ | $P$ |
|---|---|---|
| Monopoly | $(A-c)/2b$ | $(A+c)/2$ |
| Cournot (2) | $2(A-c)/3b$ | $(A+2c)/3$ |
| Cournot ($N$) | $N(A-c)/(N+1)b$ | $(A+Nc)/(N+1)$ |
| Stackelberg | $3(A-c)/4b$ | $(A+3c)/4$ |
| Bertrand / PC | $(A-c)/b$ | $c$ |
| Vertical chain | $(A-k)/4$ | $(3A+k)/4$ |
| Complements ($N$) | $A/(N+1)$ | $AN/(N+1)$ |

$$MR=A-2bQ \;\cdot\; MR=P(1-\tfrac1{|E|}) \;\cdot\; L=\tfrac{P-MC}{P}=\tfrac1{|E|} \;\cdot\; P^\*=\tfrac{MC}{1-1/|E|} \;\cdot\; CS=\tfrac12(P_\text{max}-p)Q \;\cdot\; \text{pass-through }\tfrac{b}{2b+m} \;\cdot\; \text{TPT: }p=MC,\,T=CS$$

---

## ✎ Worked open questions (Part-B style)

> [!example] Coffee carts — a whole-market sweep
> 4 carts, each $TC=q^2+64$ ($MC=2q$); demand $Q=440-20p$.
> **(a) Perfect competition.** $P=MC=2q \Rightarrow q=p/2$; industry supply $Q=2p$. Clear $2p=440-20p \Rightarrow p=20,\;Q=40$, each cart $q=10$.
> **(b) Merge → monopoly + TPT.** $TC=0.25Q^2\,(MC=0.5Q)$. Optimal TPT: $p=MC$, so $22-Q/20=0.5Q \Rightarrow Q=40,\;p=20$; fee $T=CS=\tfrac12(22-20)\cdot40=40$.
> **(c) One uniform price.** MBAs $Q=220-10p$, others $Q=220-20p$. Serving MBAs only is best → $MR=MC \Rightarrow p=132/7\approx18.9$.
> **(d) PD across days.** Separable markets → $MR_i=MC$ each: MBA $p\approx18.9$, others $p\approx10.1$ (less-elastic MBAs pay more).

> [!example] Two-part tariffs to two consumers
> $C1:\,p=200-q$, $C2:\,p=150-q$, $MC=20$.
> **(a) Pay to discriminate (1st-degree).** Each $p=MC=20$; $T_i=CS_i$: $T_1=\tfrac12(180)^2=16200$, $T_2=\tfrac12(130)^2=8450 \Rightarrow \Pi=24650$.
> **(b) Uniform tariff.** Fee pinned by the smaller $C2$: $T=\tfrac12(150-p)^2$. Maximise $\Rightarrow p^\*=45,\;T=5512.5 \Rightarrow \Pi=17525$. Max to pay for type info $=24650-17525=\mathbf{7125}$.
> **(c) Serve one or both?** Compare serving-both profit with serving only $C1$ (16200). Drop the weak consumer when it only drags the shared fee down.

---

## ⚑ Exam reflexes — read the trigger words

> [!tip] Asymmetric info & pricing
> - **"Which types trade / who buys"** → test pools for self-consistency (REE); the top type exits first.
> - **"Uninsured"** → $P=MC$. **"Fully insured"** → $P=0$, over-consume; fair premium on the *insured* quantities.
> - **"Sold separately / single price"** → walk the WTP ladder; $\Pi=n\cdot(p-MC)$.
> - **"Membership card / two-part tariff"** → $p=MC$, fee $=CS$; never price the good at 0 if $MC$ rises.
> - **"Value of identifying types"** → $\Pi_\text{discriminate}-\Pi_\text{uniform}$ (a difference, not a level).
> - **Per-unit vs lump-sum tax** → per-unit shifts $MC$ (incidence $b/(2b+m)$); lump-sum/profit leaves $P,Q$ unchanged.

> [!tip] Competition & market structure
> - **Asymmetric Bertrand** → efficient firm limit-prices at $\min(\text{rival }MC,\text{ own monopoly price})$.
> - **"Sells through a distributor"** → backward induction; $\Pi_\text{chain}<\Pi_\text{integrated}$; fix with TPT / merger.
> - **"Chooses first"** → Stackelberg (sub the follower's BR first). **"Simultaneous quantities"** → Cournot.
> - **"Max price to acquire a rival"** $=\Pi_\text{monopoly}-$ buyer's duopoly $\Pi$; min $=$ seller's duopoly $\Pi$.
> - **"Long-run, free entry"** → $P=\min AC,\;\Pi=0$; demand sets only the number of firms.
> - **Differentiated mode choice** → Quantity dominates Price → firms land at Cournot.

> [!tip] Game theory & complements
> - **"Odd/even / matching pennies"** → no pure NE, unique mixed NE ("no NE" is the trap).
> - **Battle of the Sexes** → 3 equilibria (2 pure + 1 mixed); **RPS** → uniform mixed.
> - **"For which values of… is it a NE"** → write each profile's BR inequalities; for uniqueness negate the others.
> - **Mixed NE** → make the opponent indifferent; solve for your own probability.
> - **Substitutes** compete → $P\downarrow$, welfare $\uparrow$. **Complements** → double marginalisation, $P\uparrow$, welfare $\downarrow$ — check the cross-price sign.
