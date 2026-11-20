---
title: "Public Goods, Free Riding & Altruism"
week: 6
semester: 1
year: 2
academic_year: "2025-26"
course: Micro-Economics II
lecture: "Presentation 6 — Public Goods (continuing Externalities)"
instructor: Dr. Boaz Zik
tags:
  - micro-economics-ii
  - public-goods
  - free-riding
  - externalities
  - market-failure
  - nash-equilibrium
  - best-response
  - social-planner
  - under-provision
  - altruism
aliases:
  - Micro II Presentation 6
  - Public Goods Micro II
subject: micro-ii
in_scope: true
---

# Public Goods, Free Riding & Altruism

> Part of: [[Micro-Economics II]] | Key concepts: [[Public Goods]], [[Free Riding]], [[Nash Equilibrium]], [[Best Response]], [[Under-Provision]], [[Altruistic Utility]], [[Market Failure]], [[Pareto Efficiency]]

---

## 🗺️ What This Presentation Is About

This is the final section of the cumulative Presentation 6 deck, and it continues straight on from [[Lec_05-Production Economy & Externalities]]. A **public good** is treated as a *special kind of externality*, one that hits **many agents at once**. That small difference breaks the usual fixes, because every agent now has to guess what everyone else will contribute.

The section does four things:

1. **Define** a public good and name the two problems it causes (under-provision and free riding).
2. **Illustrate** with a small numerical game (Alice and Bob's seminar work).
3. **Solve the general model** twice: the social planner's optimum, then the free-market Nash equilibrium.
4. **Add altruism**: what happens when agents partly care about each other's utility.

> [!note] Source scope
> Slides 298 to 313 of the deck. Slide 297 is only a section divider ("Externalities / Public Goods").

---

## 📌 Part 1 — What Is a Public Good?

> [!info] Public Good
> A ==public good== is a good whose **aggregate quantity** affects agents' utilities. Everyone's utility depends on the *total* amount provided, not just on what they provide themselves. ^public-good-definition

**Slide examples:** national security, a public swimming pool, sidewalks, an elevator in a building, seminar work (a joint group project).

### Why it is "a special kind of externality"

An ordinary [[Externalities|externality]] usually involves a pair of agents. A public good is an externality that affects **many agents at once**. That creates a coordination problem:

- When each agent decides how much to invest in the public good, she must **conjecture how much the others invest**.
- The slide's link back to the previous lecture: if two agents (Homer and Ned) suffer from Barney's smoking, and Ned wants to bargain with Barney over how much to cut cigar consumption, Ned's decision **depends on what Homer is doing**.

### The two phenomena

| Phenomenon | What happens |
|---|---|
| [[Under-Provision]] (a [[Market Failure]]) | The public good is provided at a level that is **too low** |
| [[Free Riding]] | An agent invests **less (or nothing)** because other agents' investment already gives her the benefit |

---

## 🎓 Part 2 — Example: Alice and Bob's Seminar Work

> [!example] Setup
> Two students, Alice and Bob, hand in one joint seminar paper.
> - Each chooses an investment $e_A, e_B \in \{0, 1, 2, 3, \dots\}$.
> - Each unit of investment costs the investor a **disutility of 1** (in money).
> - The shared grade depends only on **total** investment:
>
> $$g(e_A + e_B) = \begin{cases} F & e_A + e_B = 0 \\ D & e_A + e_B = 1 \\ C & e_A + e_B = 2 \\ B & e_A + e_B = 3 \\ A & e_A + e_B = 4 \end{cases}$$

The grade is the **public good**: both students get the same one, whoever worked.

**Utility from each grade (in money terms):**

| Grade | F | D | C | B | A |
|---|---|---|---|---|---|
| Alice $U_A$ | 0 | 3 | 5 | 6 | 6.5 |
| Bob $U_B$ | 0 | 2 | 2.9 | 3.5 | 4.1 |

Alice is motivated, Bob is less so. Net payoff is the grade utility minus the student's own investment cost.

### Best responses (as stated on the slide)

- **Bob:** if $e_A \ge 1$, Bob does **not** invest (cost exceeds benefit). If $e_A = 0$, Bob invests 1.
- **Alice:** if $e_B \ge 3$, Alice does not invest. If $e_B < 3$, she invests $3 - e_B$.

> [!success] Stable outcome: free riding
> The only stable situation is **Bob invests 0, Alice invests 3**, and the grade is **B**. Bob **free rides** on Alice's effort.

### A Pareto improvement exists

Force Bob to invest 1 (total 4, grade A), and have Alice pay him a fee $f$ with $0.4 < f < 0.5$.

> [!tip] My check of the slide's numbers
> *Not on the slide, my working.* At the free-riding outcome, Alice nets $6 - 3 = 3$ and Bob nets $3.5$.
>
> | Outcome | Alice | Bob |
> |---|---|---|
> | Free riding ($e_A=3, e_B=0$, grade B) | $6 - 3 = 3$ | $3.5$ |
> | Bob 1, Alice 3, grade A, fee $f$ | $6.5 - 3 - f = 3.5 - f$ | $4.1 - 1 + f = 3.1 + f$ |
>
> Alice is better off iff $3.5 - f > 3$, i.e. $f < 0.5$. Bob is better off iff $3.1 + f > 3.5$, i.e. $f > 0.4$. This reproduces the slide's range.

> [!warning] Small tie in Alice's choice (my observation)
> With $e_B = 0$, Alice nets $5 - 2 = 3$ by investing 2 (grade C) and $6 - 3 = 3$ by investing 3 (grade B). She is **indifferent**. The slide picks 3 (the rule "$3 - e_B$"), so I follow that, but the equilibrium is knife-edge for Alice.

---

## 🧮 Part 3 — The General Model

> [!info] Model setup
> - Two agents, 1 and 2.
> - Two goods: the **public good** $G$ and **money** $Y$.
> - [[Quasilinear Utility]] for both:
>
> $$U_1(g, y) = V_1(g) + y \qquad U_2(g, y) = V_2(g) + y$$
>
> - Note $g$ has **no agent index**: both consume the *same* $g$.
> - Each agent can produce one unit of $g$ at a cost of 1 dollar (1 unit of $Y$).
> - Agents have money endowments $I_1$ and $I_2$, so $g_i + y_i = I_i$. ^public-good-model

Because each agent produces $g_i$ and the **total** is $g = g_1 + g_2$, each agent's utility is $V_i(g_1 + g_2) + I_i - g_i$.

---

### 3a. The Social Planner's Problem

The [[Social Welfare]] maximiser picks everyone's contribution and money:

$$\max_{g_1, g_2, y_1, y_2} \; V_1(g_1 + g_2) + y_1 + V_2(g_1 + g_2) + y_2$$

subject to $g_1 + y_1 = I_1$ and $g_2 + y_2 = I_2$.

> [!warning] Typo on slide 304
> The slide writes the second constraint as $g_2 + y_2 = I_1$. It should be $I_2$ (the substituted objective on the same slide correctly uses $I_2$).

Substituting the constraints into the objective:

$$\max_{g_1, g_2} \; V_1(g_1 + g_2) + I_1 - g_1 + V_2(g_1 + g_2) + I_2 - g_2$$

**First-order conditions** (one per $g_i$):

$$\frac{\partial V_1}{\partial g}(g_1^* + g_2^*) + \frac{\partial V_2}{\partial g}(g_1^* + g_2^*) = 1 \quad \text{(w.r.t. } g_1\text{)}$$

$$\frac{\partial V_1}{\partial g}(g_1^* + g_2^*) + \frac{\partial V_2}{\partial g}(g_1^* + g_2^*) = 1 \quad \text{(w.r.t. } g_2\text{)}$$

Both conditions are **identical**, because $V_i$ depends only on the sum $g_1 + g_2$. Writing $g^* = g_1^* + g_2^*$:

$$\boxed{\frac{\partial V_1}{\partial g}(g^*) + \frac{\partial V_2}{\partial g}(g^*) = 1}$$

> [!info] Interpretation (Samuelson-style condition)
> The public good is produced until its ==marginal social benefit== (the **sum** of both agents' marginal benefits) equals its **marginal cost** (1). ^planner-condition

> [!note] Many efficient splits
> Only the **total** $g^*$ is pinned down, so there are many $(g_1, g_2)$ with $g_1 + g_2 = g^*$. The slide states: an allocation is [[Pareto Efficiency|Pareto efficient]] **if and only if** $g_1 + g_2 = g^*$.

---

### 3b. Why the Condition Characterises Efficiency

The slide shows that if the condition fails, a Pareto improvement exists. Suppose

$$\frac{\partial V_1}{\partial g}(g) + \frac{\partial V_2}{\partial g}(g) > 1.$$

Ask agent 1 to produce **one more unit**. Agent 1's utility changes by $\frac{\partial V_1}{\partial g}(g) - 1$.

| Case | What happens |
|---|---|
| $\frac{\partial V_1}{\partial g} - 1 > 0$ | Agent 1 gains. Agent 2 also gains (extra $g$ at no cost). **Pareto improvement.** |
| $\frac{\partial V_1}{\partial g} - 1 < 0$ | Agent 2 compensates agent 1 by paying $1 - \frac{\partial V_1}{\partial g}$. Agent 1 is back at his old utility. |

In the second case agent 2's utility changes by

$$\frac{\partial V_2}{\partial g}(g) - \left(1 - \frac{\partial V_1}{\partial g}(g)\right) = \frac{\partial V_1}{\partial g}(g) + \frac{\partial V_2}{\partial g}(g) - 1 > 0,$$

which is positive by the assumption, so agent 2 gains and agent 1 is no worse off. **Pareto improvement.**

> [!tip] My intuition
> This is the same idea as the Alice/Bob fee: when the **combined** marginal benefit exceeds the marginal cost, there is surplus on the table. Whoever produces the extra unit can be **paid** out of the other agent's gain, so both end up better off. (I have kept the slide's argument for the $>1$ case only, it is the only case the slide covers.)

---

### 3c. The Free Market: Nash Equilibrium

To model the market without a planner, the slides import game theory.

> [!info] Nash Equilibrium
> A pair $(g_1^e, g_2^e)$ is a ==Nash equilibrium== if $g_1^e$ is agent 1's optimal choice **given** that agent 2 plays $g_2^e$, **and** $g_2^e$ is agent 2's optimal choice given that agent 1 plays $g_1^e$. ^nash-definition

**Step 1: the stand-alone optimum.** If agent 2 produces nothing, agent 1 would produce $g_1^o$ solving

$$\max_{g_1} \; V_1(g_1) + I_1 - g_1 \quad \Longrightarrow \quad V_1'(g_1^o) = 1$$

($g_1^o$ is how much agent 1 wants *in total* if she had to provide it all herself.)

**Step 2: best response.** Agent 1 only cares about the **total** $g_1 + g_2$, so:

- If $g_2 < g_1^o$: agent 1 tops the total up to her ideal, $g_1 + g_2 = g_1^o$.
- If $g_2 \ge g_1^o$: agent 1's utility is **decreasing** in $g_1$, so she produces 0.

$$BR_1(g_2) = \begin{cases} g_1^o - g_2 & \text{if } g_2 < g_1^o \\ 0 & \text{if } g_2 \ge g_1^o \end{cases}$$

Analogously for agent 2:

$$BR_2(g_1) = \begin{cases} g_2^o - g_1 & \text{if } g_1 < g_2^o \\ 0 & \text{if } g_1 \ge g_2^o \end{cases}$$

A Nash equilibrium satisfies $g_1^e = BR_1(g_2^e)$ and $g_2^e = BR_2(g_1^e)$.

### The equilibria, by case

| Case | Nash equilibrium | Interpretation |
|---|---|---|
| $g_1^o = g_2^o$ | **Every** pair with $g_1 + g_2 = g_1^o = g_2^o$ | Agents want the same total, so any split works |
| $g_2^o > g_1^o$ | Only $g_1 = 0,\; g_2 = g_2^o$ | **Complete free riding** by agent 1 |
| $g_2^o < g_1^o$ | Only $g_2 = 0,\; g_1 = g_1^o$ | **Complete free riding** by agent 2 |

> [!tip] My intuition
> The agent who wants the public good **more** (higher stand-alone level $g^o$) ends up providing all of it. The other agent's ideal total is already reached, so she contributes nothing. This matches the Alice/Bob result, where motivated Alice carries the load.

---

### 3d. Why the Market Under-Provides

> [!warning] Result: under-provision
> In any equilibrium, the total $g_1^e + g_2^e$ satisfies **either** $\frac{\partial V_1}{\partial g} = 1$ **or** $\frac{\partial V_2}{\partial g} = 1$ (the one who contributes is at her own optimum). This implies, at the equilibrium quantity:
>
> $$\frac{\partial V_1}{\partial g}(g_1^e + g_2^e) + \frac{\partial V_2}{\partial g}(g_1^e + g_2^e) > 1.$$
>
> So the equilibrium total $g_1^e + g_2^e$ is **smaller** than the welfare-maximising $g^*$. ^under-provision-result

**Why?** Each agent cares only about **her own** utility and does **not internalise** the effect of her choice on the other agent's welfare.

| | Social planner | Free-market Nash equilibrium |
|---|---|---|
| Condition | $V_1'(g^*) + V_2'(g^*) = 1$ | $V_1'(g^e) = 1$ or $V_2'(g^e) = 1$ |
| What is compared to cost 1 | **Sum** of marginal benefits | **One** agent's marginal benefit |
| Total quantity | $g^*$ | $g^e < g^*$ |
| Who pays | Any split summing to $g^*$ | Often one agent only |
| Pareto efficient? | Yes | No |

> [!tip] My intuition
> The strict "$> 1$" step also relies on each $V_i$ having positive, diminishing marginal benefit (concave $V_i$), which the slide uses implicitly. The key picture: at $g^e$ the **non-contributing** agent still has a positive marginal benefit, and nobody counts it.

---

## 🤝 Part 4 — Altruism

> [!question] The slide's question
> What happens when agents are **altruists**, that is, they internalise *to some extent* the other agent's utility?

> [!info] Altruistic Utility
> - Agent 1: $V_1(g_1 + g_2) + y_1 + \alpha \cdot \big(V_2(g_1 + g_2) + y_2\big)$ with $\alpha \le 1$
> - Agent 2: $V_2(g_1 + g_2) + y_2 + \beta \cdot \big(V_1(g_1 + g_2) + y_1\big)$ with $\beta \le 1$
>
> $\alpha$ and $\beta$ measure how much each agent weighs the other's utility ($\alpha = \beta = 0$ is the selfish case above). ^altruistic-utility

**Claimed results (to be shown in the problem set):**

1. With altruists, the equilibrium quantity of the public good is **greater** than with selfish agents.
2. When $\alpha = 1$ or $\beta = 1$, the equilibrium quantity **equals** the socially optimal quantity.

> [!warning] Not derived on the slides
> The deck states these results and leaves the proof to the problem set, so there is no derivation here. Do not quote a formula for the altruistic equilibrium from this lecture.

> [!tip] My intuition
> If agent 1 sets $\alpha = 1$, she weighs agent 2's utility fully, so her private marginal benefit from $g$ becomes $V_1' + V_2'$, which is the planner's marginal social benefit. This is the same kind of fix as a tax in [[Lec_05-Production Economy & Externalities]]: change the incentive so the agent counts the external effect. (My reading, not stated on the slide.)

---

## 🔗 Links to Lecture 5

| Idea | In [[Lec_05-Production Economy & Externalities]] | Here |
|---|---|---|
| Externality | One agent's choice affects another's utility or cost | A public good affects **many** agents at once |
| Why markets fail | Private choice ignores the external effect | Each agent ignores the benefit to the others |
| Fix | [[Pigouvian Tax]] or [[Coase Theorem]] bargaining | Side-payment (Alice/Bob fee), or altruism ($\alpha, \beta$) |

> [!note] Difference from the bilateral case
> The Coase-style bargaining of Lec 5 works between two parties. With a public good each agent must guess **everyone else's** investment, so the pairwise bargain breaks down (slide 299).

---

## 📝 Summary

- A [[Public Goods|public good]] is a good whose **aggregate** quantity enters every agent's utility; it is an externality hitting many agents at once.
- Two problems follow: **under-provision** (a [[Market Failure]]) and **free riding**.
- **Alice/Bob example:** the stable outcome is Bob 0, Alice 3 (grade B); a fee between 0.4 and 0.5 enables a Pareto improvement with Bob investing 1.
- **Model:** $U_i = V_i(g) + y_i$, $g = g_1 + g_2$, cost of 1 per unit.
- **Planner:** produce until $V_1'(g^*) + V_2'(g^*) = 1$ (sum of marginal benefits equals marginal cost). Efficient **iff** $g_1 + g_2 = g^*$.
- **Nash equilibrium:** $BR_i(g_j) = \max(g_i^o - g_j, 0)$. If $g_1^o \ne g_2^o$, one agent free rides completely; total provision $< g^*$.
- **Altruism** ($\alpha, \beta \le 1$) raises provision, and at $\alpha = 1$ or $\beta = 1$ restores the social optimum (proof left to the problem set).

---

## 🔗 Related Notes

- [[Micro-Economics II]] (subject hub)
- [[Lec_05-Production Economy & Externalities]] (externalities, Pigouvian tax, Coase theorem)
- [[Lec_04-Theory of the Firm, Partial & General Equilibrium]] (welfare theorems, Pareto efficiency)
- [[PS_07-Core, Corner Endowments & Equilibrium vs the Social Planner]] (social planner vs equilibrium)
