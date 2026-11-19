---
title: "PS5"
subject: micro-ii
source_doc: /papers/micro-ii/ps-5.pdf
tags:
  - micro-economics-ii
  - pareto-efficiency
  - pareto-dominance
  - social-welfare
  - exchange-economy
  - mrs
  - solutions
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Question 1.** For each of the following statements, claim whether it is true or not. If true, prove your answer; if not, provide a counterexample.

      The three parts below (a), (b), (c) are each answered separately.
    solution: |
      > [!info] The three concepts this question keeps separate
      > 1. **[[Pareto Efficiency]]** is a property of *one* allocation: nothing feasible Pareto dominates it.
      > 2. **[[Pareto Dominance]]** is a relation between *two* allocations: $A$ dominates $B$ if everyone is weakly better off under $A$ and at least one agent is strictly better off.
      > 3. **[[Social Welfare]]** ranking is a complete ordering of allocations by a planner's objective $W(\cdot)$.
      >
      > Efficiency is a *negative* property (no allocation dominates it). It says nothing about whether the allocation dominates others, or whether a planner prefers it.
    related_terms: ["pareto-efficiency", "pareto-dominance", "social-welfare"]
    source_doc_page: 1
  - id: "1a"
    text: |
      Consider three allocations $\{A,B,C\}$. If $A$ is Pareto efficient and $B$ is not Pareto efficient, then $A$ Pareto dominates $B$.
    solution: |
      **FALSE.**

      > [!warning] Why the official key rejects it
      > A Pareto *move* makes at least one agent better off **without making anyone worse off**. Just because $A$ is efficient does **not** mean $A$ is better for everyone. "$B$ is not efficient" only guarantees that *something* dominates $B$, and that something can be the third allocation $C$.

      > [!example] Counterexample (utilities shown as $(U_1,U_2)$)
      >
      > $$
      > A=(1,6),\qquad B=(5,5),\qquad C=(6,6).
      > $$
      >
      > - $C$ makes everyone better off than $B$ ($6>5$ and $6>5$), so $B$ is **not efficient**.
      > - $A$ is not dominated by $B$ or $C$ (agent 1 is worse off in $A$ than in either), so, assuming nothing else beats it, $A$ is **efficient**.
      > - But $A$ does **not** dominate $B$: under $A$ agent 1 has only $1$, versus $5$ in $B$, so agent 1 is strictly worse off.
      >
      > So $A$ is efficient, $B$ is inefficient, yet $A$ and $B$ are simply *incomparable*. $\blacksquare$
    related_terms: ["pareto-efficiency", "pareto-dominance"]
    source_doc_page: 1
  - id: "1b"
    text: |
      Consider two allocations $\{A,B\}$. If $A$ is Pareto efficient and $B$ is not Pareto efficient, then $A$ Pareto dominates $B$.
    solution: |
      **TRUE.**

      > [!tip] Why removing the third allocation flips the answer
      > "$B$ is not Pareto efficient" means **some feasible allocation Pareto dominates $B$**. The feasible set is now just $\{A,B\}$. The dominating allocation cannot be $B$ itself (domination needs someone strictly better off), so the only candidate left is $A$. Hence $A$ dominates $B$. $\blacksquare$

      The counterexample in (a) *needed* a third allocation $C$ to do the dominating. Take $C$ away and efficiency and dominance collapse into the same statement.
    related_terms: ["pareto-efficiency", "pareto-dominance"]
    source_doc_page: 1
  - id: "1c"
    text: |
      Consider two agents 1 and 2, three allocations $\{A,B,C\}$, and a social planner whose objective function is $W(K)=U_1(K)\cdot U_2(K)$, where $K$ is an element of $\{A,B,C\}$ and the functions $U_1(K)$ and $U_2(K)$ represent agent 1 and agent 2 utilities respectively.

      If $A$ is Pareto efficient and $B$ is not Pareto efficient, then the social planner prefers $A$ to $B$.
    solution: |
      **FALSE.**

      > [!example] The "grandmother who values balance" (the instructor's analogy)
      >
      > $$
      > A=(U_1,U_2)=(100,1)\ \Rightarrow\ W(A)=100,\qquad B=(20,20)\ \Rightarrow\ W(B)=400.
      > $$
      >
      > Even though $(100,1)$ can be Pareto efficient, the planner **prefers** $(20,20)$ because the **product is bigger**. A Nash-product objective rewards even splits, so an efficient-but-lopsided allocation can score lower than an inefficient-but-balanced one. $\blacksquare$

      For the counterexample to be valid, $B=(20,20)$ must be inefficient, which holds if some allocation dominates it (for example one giving $(21,21)$).

      > [!warning] What this does NOT say
      > The planner's *optimum* over the whole feasible set is always Pareto efficient: a dominating allocation would raise the product. The statement fails only because it compares one specific efficient $A$ with one specific inefficient $B$.
    related_terms: ["pareto-efficiency", "social-welfare"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Question 2.** In each part, total endowments are $X$ of good $x$ and $Y$ of good $y$, so agent 2 receives whatever agent 1 does not: $x_2=X-x_1$, $y_2=Y-y_1$. Restrict attention to the set of allocations that satisfies $U_1(x_1,y_1)=6$, and find the Pareto efficient allocation(s) in that set.
    solution: |
      > [!info] Method for every part
      > On agent 1's fixed indifference curve, the efficient point is the one that **maximises agent 2's utility** (Question 3 proves this is equivalent to efficiency). Smooth interior case: tangency $MRS_1=MRS_2$. Linear case: a corner. Identical linear preferences: a whole set.

      | Part | Preferences | $MRS$ comparison | Efficient allocation(s) | Cardinality |
      |---|---|---|---|---|
      | (a) | both Cobb-Douglas | vary, cross once | $x_1=\sqrt{6X/Y},\ y_1=\sqrt{6Y/X}$ | unique (interior) |
      | (b) | linear, $MRS_1=1<2=MRS_2$ | constant, never equal | $x_1=0,\ y_1=6$ | unique (corner) |
      | (c) | linear, $MRS_1=MRS_2=1$ | equal everywhere | all $(x_1,y_1)$ with $x_1+y_1=6$ | a whole set |

      > [!tip] Why the answer changes from unique, to corner, to a set
      > It is driven entirely by how the two agents' MRS compare. Diminishing MRS that *cross* give one interior tangency. Constant but *unequal* MRS give a corner. *Equal* MRS everywhere make every feasible split efficient. The shape of preferences, not the numbers, decides the geometry.
    related_terms: ["pareto-efficiency", "edgeworth-box", "contract-curve", "mrs"]
    source_doc_page: 1
  - id: "2a"
    text: |
      Consider $U_1(x_1,y_1)=x_1y_1$ and $U_2(x_2,y_2)=x_2y_2$ with totals $X$ and $Y$, and the set of allocations that satisfies $U_1(x_1,y_1)=6$. Find the Pareto efficient allocation in this set and show that it is unique.
    solution: |
      Both agents are Cobb-Douglas, so $MRS_1=\dfrac{y_1}{x_1}$ and $MRS_2=\dfrac{y_2}{x_2}=\dfrac{Y-y_1}{X-x_1}$. Set them equal:

      $$
      \frac{y_1}{x_1}=\frac{Y-y_1}{X-x_1}\;\Longrightarrow\; y_1(X-x_1)=x_1(Y-y_1)\;\Longrightarrow\; y_1X=x_1Y\;\Longrightarrow\;\frac{y_1}{x_1}=\frac{Y}{X}.
      $$

      So the [[Contract Curve]] is the **diagonal** $y_1=\frac{Y}{X}x_1$. Intersect it with the constraint $x_1y_1=6$:

      $$
      x_1\cdot\frac{Y}{X}x_1=6\;\Longrightarrow\; x_1^2=\frac{6X}{Y}
      $$

      $$
      \boxed{x_1=\sqrt{\frac{6X}{Y}},\qquad y_1=\sqrt{\frac{6Y}{X}}}
      $$

      A ray crosses the hyperbola $x_1y_1=6$ exactly once in the positive quadrant, so the efficient allocation is **unique**. $\blacksquare$
    related_terms: ["pareto-efficiency", "mrs", "contract-curve", "tangency-condition", "edgeworth-box"]
    source_doc_page: 1
  - id: "2b"
    text: |
      Consider $U_1(x_1,y_1)=x_1+y_1$ and $U_2(x_2,y_2)=2x_2+y_2$ with $X\ge 6$ and $Y\ge 6$, and the set of allocations that satisfies $U_1(x_1,y_1)=6$. Find the Pareto efficient allocation in this set and show that it is unique.
    solution: |
      Utilities are **linear** (perfect substitutes), so the MRS are constants: $MRS_1=1$ and $MRS_2=2$. They can never be equal, so the optimum is a **corner**.

      Substitute the endowment identity into agent 2's utility:

      $$
      U_2=2x_2+y_2=2(X-x_1)+(Y-y_1)=\underbrace{(2X+Y)}_{\text{constant}}-\big(2x_1+y_1\big).
      $$

      Maximising $U_2$ means **minimising** $2x_1+y_1$ subject to $x_1+y_1=6$ and $x_1,y_1\ge 0$. Because $x_1$ carries the larger penalty (coefficient 2 against 1), put all of agent 1's utility into $y_1$:

      $$
      \boxed{x_1=0,\quad y_1=6}\quad\Rightarrow\quad x_2=X,\quad y_2=Y-6.
      $$

      **Economic reading:** agent 2 values good $x$ twice as much as agent 1 does, so efficiency hands all of $x$ to agent 2 and lets agent 1 hold its required utility entirely in $y$. The corner is **unique**. $\blacksquare$
    related_terms: ["pareto-efficiency", "mrs", "perfect-substitutes", "corner-solution"]
    source_doc_page: 2
  - id: "2c"
    text: |
      Consider $U_1(x_1,y_1)=x_1+y_1$ and $U_2(x_2,y_2)=x_2+y_2$ with $X\ge 6$ and $Y\ge 6$, and the set of allocations that satisfies $U_1(x_1,y_1)=6$. Find the set of Pareto efficient allocations in this set.
    solution: |
      Both agents now value the goods identically: $MRS_1=MRS_2=1$ everywhere. Agent 2's utility on the constraint is

      $$
      U_2=(X-x_1)+(Y-y_1)=(X+Y)-(x_1+y_1)=(X+Y)-6,
      $$

      which is a **constant**. Agent 2 is equally well off at every allocation satisfying $x_1+y_1=6$, so none can be improved on without lowering $U_1$. **Every** point on agent 1's indifference line is Pareto efficient:

      $$
      \boxed{\{(x_1,y_1):\ x_1+y_1=6,\ 0\le x_1\le X,\ 0\le y_1\le Y\}}
      $$

      The efficient set is the **entire segment**, not a single point. $\blacksquare$
    related_terms: ["pareto-efficiency", "mrs", "perfect-substitutes", "edgeworth-box"]
    source_doc_page: 2
  - id: "3"
    text: |
      **Question 3.** Consider an exchange economy and a given indifference curve of agent 1. Assume that the agents' utility functions satisfy decreasing MRS. Prove the following results (without using graphical arguments).
    solution: |
      This question justifies the *method* used in Question 2: on agent 1's indifference curve, "maximises $U_2$", "Pareto efficient" and "$MRS_1=MRS_2$" pick out the same point.
    related_terms: ["pareto-efficiency", "mrs", "exchange-economy", "contract-curve"]
    source_doc_page: 2
  - id: "3ai"
    text: |
      (a)(i) The point on agent 1's indifference curve at which agent 2's utility is maximised is Pareto efficient.
    solution: |
      > [!example] Proof (by contradiction)
      > Let $X^{*}$ maximise $U_2$ among all allocations giving agent 1 utility exactly $\bar U_1$. Suppose $X^{*}$ were **not** efficient. Then some feasible allocation $Z$ Pareto dominates it: $U_1(Z)\ge \bar U_1$ and $U_2(Z)\ge U_2(X^{*})$, with at least one strict.
      > - If $U_2(Z)>U_2(X^{*})$ while $U_1(Z)\ge\bar U_1$: by [[Local Nonsatiation]] we can move a little of agent 1's goods to agent 2 until $U_1$ is back at exactly $\bar U_1$, keeping $U_2$ above $U_2(X^{*})$. That gives a point **on** agent 1's curve with higher $U_2$, contradicting that $X^{*}$ was the maximiser.
      > - If instead $U_1(Z)>\bar U_1$ with $U_2(Z)\ge U_2(X^{*})$: transfer goods from agent 1 to agent 2 until $U_1=\bar U_1$, strictly raising $U_2$ above $U_2(X^{*})$. Same contradiction.
      >
      > Hence no dominating $Z$ exists and $X^{*}$ is Pareto efficient. $\blacksquare$

      The official key's shorter version: this point makes agent 2 as happy as possible while agent 1 is held fixed. You cannot make agent 1 happier without making agent 2 less happy, and agent 2 is already maximised, so no Pareto improvement exists.
    related_terms: ["pareto-efficiency", "pareto-dominance", "local-nonsatiation"]
    source_doc_page: 2
  - id: "3aii"
    text: |
      (a)(ii) If a point on agent 1's indifference curve is Pareto efficient, then it is the point that maximises agent 2's utility among all the points on agent 1's indifference curve.
    solution: |
      > [!example] Proof (contrapositive)
      > Let $X^{*}$ be on agent 1's curve ($U_1=\bar U_1$) and suppose it does **not** maximise $U_2$ there. Then there is another point $Y$ on the *same* curve with $U_1(Y)=\bar U_1$ and $U_2(Y)>U_2(X^{*})$.
      > Moving from $X^{*}$ to $Y$ leaves agent 1 **exactly as well off** and makes agent 2 **strictly better off**, which is a Pareto improvement. So $X^{*}$ is dominated and therefore **not** Pareto efficient. $\blacksquare$

      Official key, same logic: if another point $Y$ on the same curve gave agent 1 the same happiness and agent 2 more, then moving $X\to Y$ would be a Pareto improvement, contradicting efficiency of $X$. So the efficient point must be the one giving agent 2 the maximum.

      Together, (i) and (ii) show that on agent 1's indifference curve, "Pareto efficient" and "maximises $U_2$" are the same points.
    related_terms: ["pareto-efficiency", "pareto-dominance"]
    source_doc_page: 2
  - id: "3bi"
    text: |
      (b)(i) At a point that maximises agent 2's utility among all the points on agent 1's indifference curve, we have $MRS_1=MRS_2$.
    solution: |
      > [!example] Proof
      > The maximiser solves: maximise $U_2(x_2,y_2)$ subject to $U_1(x_1,y_1)=\bar U_1$ and the feasibility identities $x_1+x_2=X$, $y_1+y_2=Y$. Consider a feasible reallocation along agent 1's curve:
      >
      > $$
      > dy_1=-MRS_1\,dx_1,\qquad dU_2\ \propto\ \big(MRS_2-MRS_1\big)\,dx_1.
      > $$
      >
      > If $MRS_1\ne MRS_2$, then $dU_2\ne 0$ for a suitable sign of $dx_1$: agent 2 could be made strictly better off while agent 1 stays on $\bar U_1$. So at the maximiser
      >
      > $$
      > \boxed{MRS_1=MRS_2}
      > $$
      >
      > $\blacksquare$

      *Intuition (official key):* if the two agents value the goods differently, there is always a way to reshuffle goods that makes agent 2 happier while keeping agent 1 equally happy. At the point that maximises agent 2's happiness no such improvement is allowed, so their MRS must be equal.
    related_terms: ["mrs", "tangency-condition", "pareto-efficiency", "contract-curve"]
    source_doc_page: 2
  - id: "3bii"
    text: |
      (b)(ii) A point on agent 1's indifference curve at which $MRS_1=MRS_2$ maximises agent 2's utility among all the points on agent 1's indifference curve.
    solution: |
      > [!example] Proof (the converse, where *decreasing MRS* is essential)
      > $MRS_1=MRS_2$ is only the first-order (stationarity) condition, which could in principle be a minimum, maximum or saddle. **Decreasing MRS** (strictly convex indifference curves) supplies the second-order condition. Moving along agent 1's fixed curve away from the tangency, $MRS_1$ and $MRS_2$ move apart so that $dU_2\propto(MRS_2-MRS_1)\,dx_1$ is negative in either direction. The stationary point is therefore a strict **maximum** of $U_2$. $\blacksquare$

      > [!warning] Why decreasing MRS matters
      > Without convexity, $MRS_1=MRS_2$ would only be necessary, not sufficient: the tangency could even be a minimum. The marked answer leans on the "same trade rate" intuition: if the rates differed you could improve agent 2 while keeping agent 1 on the same curve, so no such trade can remain at the tangency.
    related_terms: ["mrs", "tangency-condition", "contract-curve"]
    source_doc_page: 2
---

> [!tip] Key takeaway
> "Pareto efficient" is a *weak* and *negative* idea: it rules out waste but says nothing about fairness, balance, or being preferred. A planner's value judgement (a [[Social Welfare]] function) is what selects *among* the efficient (and sometimes inefficient) allocations.

*Related: [[Lec_04-Theory of the Firm, Partial & General Equilibrium]], [[Lec_05-Production Economy & Externalities]]*
