---
title: "PS9"
subject: micro-ii
source_doc: /papers/micro-ii/ps-9.pdf
tags:
  - micro-economics-ii
  - production-economy
  - efficiency-locus
  - ppf
  - rpt
  - mrs
  - rts
  - cobb-douglas
  - quasilinear-utility
  - corner-solution
  - equilibrium-prices
  - partial-vs-general-equilibrium
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Question 1 (corner solutions with linear utility).** A production economy with firms
      $$
      f_1(l_1,k_1) = l_1^{a}k_1^{1-a}, \qquad f_2(l_2,k_2) = b\cdot l_2^{a}k_2^{1-a}, \qquad 0<a<1.
      $$

      The representative consumer has $U(x,y) = c\cdot x + y$, and the resource constraints are $k_1+k_2 = 50$ and $l_1+l_2 = 50$.

      **(1)(a)** Find the optimal allocation as a function of $c$, $a$ and $b$.
    solution: |
      **Step 1: efficiency locus.** Marginal products of firm 1: $MP_{l_1} = a\,l_1^{a-1}k_1^{1-a}$ and $MP_{k_1} = (1-a)\,l_1^{a}k_1^{-a}$, so

      $$
      RTS_1 = \frac{a\,k_1}{(1-a)\,l_1}.
      $$

      Firm 2 is firm 1 multiplied by the constant $b$, and the $b$ cancels in the ratio:

      $$
      RTS_2 = \frac{b\cdot a\,l_2^{a-1}k_2^{1-a}}{b\cdot(1-a)\,l_2^{a}k_2^{-a}} = \frac{a\,k_2}{(1-a)\,l_2}.
      $$

      Equate, using $k_2 = 50-k_1$ and $l_2 = 50-l_1$:

      $$
      \frac{k_1}{l_1} = \frac{k_2}{l_2} = \frac{50-k_1}{50-l_1} \;\Longrightarrow\; k_1 = l_1.
      $$

      The efficiency locus is the diagonal of the box, whatever $a$ and $b$ are.

      **Step 2: PPF.** On the locus both firms are linear in labour:

      $$
      x = l_1^{a}l_1^{1-a} = l_1, \qquad y = b\,(50-l_1)^{a}(50-l_1)^{1-a} = b\,(50-l_1).
      $$

      Eliminate $l_1 = x$:

      $$
      y = b\,(50-x) = 50b - bx.
      $$

      The PPF is a straight line with slope $-b$, so $RPT = b$ at every point.

      > [!tip] Intuition
      > $b$ is firm 2's productivity relative to firm 1. Giving up one unit of $x$ frees one unit of both inputs' worth of production, which firm 2 turns into $b$ units of $y$. So the opportunity cost of $x$ is a constant $b$ units of $y$. The recitation reads $b$ as the relative price $p_x/p_y$.

      **Step 3: compare $MRS$ and $RPT$.** For $U = cx + y$, $MU_x = c$ and $MU_y = 1$, so $MRS = c$ at every bundle. Both $MRS$ and $RPT$ are constants, so they cannot generally be equal: the solution is at a **corner** and depends on which is bigger.

      ![](/images/micro-ii/ps09-q1-corner-solution.png)

      *Theory diagram for the case $c>b$ using the numbers of part (2): the consumer's indifference line (slope $c = 4$) is steeper than the PPF (slope $b = 2$), so utility is highest at the corner where only $x$ is produced.*

      | Case | Meaning | What is produced |
      |---|---|---|
      | $b < c$, i.e. $RPT < MRS$ | the consumer values $x$ more than the economy's cost of making it | **only $x$** (firm 1 gets all inputs) |
      | $b > c$, i.e. $RPT > MRS$ | $x$ is more costly to make than the consumer values it | **only $y$** (firm 2 gets all inputs) |
      | $b = c$, i.e. $RPT = MRS$ | indifference line lies on top of the PPF | **any point on the PPF** |

      > [!success] Answer
      > - $c > b$: $x = 50,\ y = 0$, with $l_1 = k_1 = 50$ and $l_2 = k_2 = 0$.
      > - $c = b$: any point on $y = 50b - bx$, with $k_1 = l_1 = x$ and $k_2 = l_2 = 50-x$.
      > - $c < b$: $x = 0,\ y = 50b$, with $l_2 = k_2 = 50$ and $l_1 = k_1 = 0$.
    related_terms: ["production-economy", "efficiency-locus", "rts", "ppf", "rpt", "mrs", "corner-solution", "quasilinear-utility", "cobb-douglas-production-function"]
    source_doc_page: 1
  - id: "1b"
    text: |
      **Question 1 (corner solutions with linear utility).** A production economy with firms
      $$
      f_1(l_1,k_1) = l_1^{a}k_1^{1-a}, \qquad f_2(l_2,k_2) = b\cdot l_2^{a}k_2^{1-a}, \qquad 0<a<1.
      $$

      The representative consumer has $U(x,y) = c\cdot x + y$, and the resource constraints are $k_1+k_2 = 50$ and $l_1+l_2 = 50$.

      **(1)(b)** Identify a specific property of the optimal solution and provide an explanation for your answer.
    solution: |
      > [!success] Answer (from the recitation)
      > The optimal solution is a **corner solution**: only one good is produced. Two things decide which:
      > - the **relative productivity of $y$**, $b$, which is the amount of $y$ the economy gives up (or gains) for one unit of $x$;
      > - the **relative utility of $x$**, $c$, which is the consumer's willingness to pay in units of $y$ for one unit of $x$.
      >
      > Whichever of the two is bigger wins the whole economy.

      > [!tip] Intuition
      > Interior optima need curvature (diminishing $MRS$ or increasing $RPT$). Here preferences are linear and technology is constant returns with identical shapes, so neither side has any curvature and the optimum jumps from one corner to the other as $c$ crosses $b$.
    related_terms: ["corner-solution", "mrs", "rpt", "quasilinear-utility", "ppf"]
    source_doc_page: 1
  - id: "1c"
    text: |
      **Question 1 (corner solutions with linear utility).** A production economy with firms
      $$
      f_1(l_1,k_1) = l_1^{a}k_1^{1-a}, \qquad f_2(l_2,k_2) = b\cdot l_2^{a}k_2^{1-a}, \qquad 0<a<1.
      $$

      The representative consumer has $U(x,y) = c\cdot x + y$, and the resource constraints are $k_1+k_2 = 50$ and $l_1+l_2 = 50$.

      **(2)** Now assume $a = 1/2$, $b = 2$ and $c = 4$.

      **(2)(a)** Find the optimal allocation of resources and the optimal outcome of products $X$ and $Y$.
    solution: |
      Here $c = 4 > b = 2$, the first case in part (1)(a): the consumer values $x$ more than the economy's cost of making it, so everything goes to $x$.

      > [!success] Answer
      > $x = 50,\ y = 0$, with $l_1 = k_1 = 50$ and $l_2 = k_2 = 0$.
    related_terms: ["corner-solution", "efficiency-locus", "ppf", "production-economy"]
    source_doc_page: 1
  - id: "1d"
    text: |
      **Question 1 (corner solutions with linear utility).** A production economy with firms
      $$
      f_1(l_1,k_1) = l_1^{a}k_1^{1-a}, \qquad f_2(l_2,k_2) = b\cdot l_2^{a}k_2^{1-a}, \qquad 0<a<1.
      $$

      The representative consumer has $U(x,y) = c\cdot x + y$, and the resource constraints are $k_1+k_2 = 50$ and $l_1+l_2 = 50$.

      **(2)** Now assume $a = 1/2$, $b = 2$ and $c = 4$.

      **(2)(b)** Use your answer in clause (a) to derive the equilibrium prices and quantities.
    solution: |
      Quantities are the ones in (2)(a). For prices, use the three conditions in turn. Take good $y$ as the [[Numeraire|numeraire]], $p_y = 1$ (the recitation's implicit normalisation).

      **Input price ratio.** Firm 1 uses $(l_1,k_1)=(50,50)$, so

      $$
      RTS_1 = \frac{a\,k_1}{(1-a)\,l_1} = \frac{50}{50} = 1 = \frac{p_l}{p_k}.
      $$

      **Firm 1's cost function** (with $a=1/2$, $f_1 = \sqrt{l_1k_1}$). Cost-minimisation gives $k_1 = l_1\,p_l/p_k$, so

      $$
      x = l_1^{1/2}\left(l_1\frac{p_l}{p_k}\right)^{1/2} = l_1\sqrt{\frac{p_l}{p_k}} \;\Longrightarrow\; l_1 = x\sqrt{\frac{p_k}{p_l}},\quad k_1 = x\sqrt{\frac{p_l}{p_k}}.
      $$

      $$
      C_1(x) = p_l l_1 + p_k k_1 = 2x\sqrt{p_lp_k}, \qquad C_1'(x) = 2\sqrt{p_lp_k}.
      $$

      Firm 1 is active, so $p_x = C_1'(x)$. With $p_l = p_k$ (from the $RTS$ step) this is $p_x = 2p_l$, i.e.

      $$
      p_l = p_k = \frac{p_x}{2}.
      $$

      **Consumer.** To choose only $x$ the consumer needs the marginal utility per unit of money of $x$ to beat that of $y$:

      $$
      \frac{MU_x}{p_x} > \frac{MU_y}{p_y} \;\Longrightarrow\; \frac{4}{p_x} > \frac{1}{1} \;\Longrightarrow\; p_x < 4.
      $$

      **Firm 2 must stay inactive.** Firm 2 has $y = 2\sqrt{l_2k_2}$; the same steps give

      $$
      C_2(y) = y\sqrt{p_lp_k}, \qquad C_2'(y) = \sqrt{p_lp_k} = p_l.
      $$

      Inactivity needs $p_y < C_2'(y)$:

      $$
      1 < p_l \;\Longrightarrow\; p_x = 2p_l > 2.
      $$

      > [!success] Answer
      > $2 < p_x^* < 4$, $\ 1 < p_l^* = p_k^* < 2$, $\ p_y^* = 1$, with quantities $x = 50$, $y = 0$, $l_1 = k_1 = 50$, $l_2 = k_2 = 0$. Prices are **not unique**: any $p_x$ in the open interval supports the same real allocation.

      > [!tip] Why prices are indeterminate (the recitation's explanation)
      > With constant-returns technologies and a corner solution, any price vector in a range gives zero profits and clears all markets, so several price vectors support the same real allocation. The bounds are just the two corner conditions: $p_x < 4$ keeps the consumer from wanting $y$ (that is $p_x/p_y < c$), and $p_x > 2$ keeps firm 2 from wanting to produce (that is $p_x/p_y > b$ after the cost pass-through).
    related_terms: ["numeraire", "price-indeterminacy", "cost-minimisation", "cost-function", "marginal-cost", "first-welfare-theorem", "rts", "isocost-line", "corner-solution"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Question 2 (partial vs general equilibrium with quasilinear utility).**

      **(1)** Consider the following partial equilibrium model. The representative consumer has utility $U(x) = 10\sqrt{x} + y$, and the firm producing $X$ has cost $C(x) = x$. Find the equilibrium price and the quantity in the market.
    solution: |
      Supply is the firm's marginal cost: $C'(x) = 1$, so $P_S(x) = 1$.

      Demand is the marginal utility of $x$ (quasilinear utility, $p_y = 1$):

      $$
      P_D(x) = MU_x = \frac{10}{2\sqrt{x}} = \frac{5}{\sqrt{x}}.
      $$

      Equate:

      $$
      \frac{5}{\sqrt{x}} = 1 \;\Longrightarrow\; \sqrt{x} = 5.
      $$

      > [!success] Answer
      > $x = 25$, $\ p = 1$.
    related_terms: ["partial-equilibrium", "quasilinear-utility", "marginal-cost", "consumer-surplus"]
    source_doc_page: 1
  - id: "2b"
    text: |
      **Question 2 (production economy).** The firms' production functions are $f_1(l_1,k_1) = l_1^{1/2}k_1^{1/2}$ and $f_2(l_2,k_2) = l_2^{1/2}k_2^{1/2}$. The representative consumer has $U(x,y) = 10\sqrt{x}+y$, and the resource constraints are $k_1+k_2 = 50$ and $l_1+l_2 = 50$.

      **(2)(a)** Find the optimal allocation of resources and the optimal outcome of products $X$ and $Y$.
    solution: |
      **Efficiency locus.** For $f_i = l_i^{1/2}k_i^{1/2}$: $MP_{l_i} = \tfrac12 l_i^{-1/2}k_i^{1/2}$ and $MP_{k_i} = \tfrac12 l_i^{1/2}k_i^{-1/2}$, so $RTS_i = k_i/l_i$. Equalising with $k_2 = 50-k_1$ and $l_2 = 50-l_1$:

      $$
      \frac{k_1}{l_1} = \frac{50-k_1}{50-l_1} \;\Longrightarrow\; k_1 = l_1.
      $$

      **PPF.**

      $$
      x = l_1^{1/2}l_1^{1/2} = l_1, \qquad y = (50-l_1)^{1/2}(50-l_1)^{1/2} = 50 - l_1 \;\Longrightarrow\; y = 50 - x,
      $$

      so $RPT = 1$ everywhere.

      **$MRS = RPT$.** For $U = 10\sqrt{x}+y$, $MRS = MU_x/MU_y = 5/\sqrt{x}$. Then

      $$
      \frac{5}{\sqrt{x}} = 1 = RPT \;\Longrightarrow\; x^* = 25,\quad y^* = 50 - 25 = 25.
      $$

      ![](/images/micro-ii/ps09-q2-quasilinear-optimum.png)

      *Theory diagram: the PPF is a straight line of slope $-1$ and the quasilinear indifference curve touches it at $(25,25)$.*

      > [!success] Answer
      > $x^* = 25,\ y^* = 25$, with $l_1^* = k_1^* = 25$ and $l_2^* = k_2^* = 25$.
    related_terms: ["efficiency-locus", "ppf", "rpt", "mrs", "quasilinear-utility", "production-economy", "rts"]
    source_doc_page: 2
  - id: "2c"
    text: |
      **Question 2 (production economy).** The firms' production functions are $f_1(l_1,k_1) = l_1^{1/2}k_1^{1/2}$ and $f_2(l_2,k_2) = l_2^{1/2}k_2^{1/2}$. The representative consumer has $U(x,y) = 10\sqrt{x}+y$, and the resource constraints are $k_1+k_2 = 50$ and $l_1+l_2 = 50$.

      **(2)(b)** Use your answer in clause (a) to derive the equilibrium prices and quantities.
    solution: |
      **Output price of $x$.** Consumer: $MRS = 5/\sqrt{x^*} = 1 = p_x^*$ (with $p_y = 1$).

      **Input price ratio.** Firm 1 uses $(25,25)$:

      $$
      RTS_1 = \frac{k_1}{l_1} = 1 = \frac{p_l^*}{p_k^*}.
      $$

      **Firm 1's cost function.** Cost minimisation: $k_1 = l_1\,p_l/p_k$, so

      $$
      x = l_1^{1/2}\left(l_1\frac{p_l}{p_k}\right)^{1/2} = l_1\sqrt{\frac{p_l}{p_k}} \;\Longrightarrow\; l_1 = x\sqrt{\frac{p_k}{p_l}},\quad k_1 = x\sqrt{\frac{p_l}{p_k}}.
      $$

      $$
      C(x) = p_l l_1 + p_k k_1 = 2x\sqrt{p_lp_k}, \qquad C'(x) = 2\sqrt{p_lp_k}.
      $$

      **Price equals marginal cost** with $p_l = p_k$:

      $$
      p_x^* = 1 = 2\sqrt{p_l p_l} = 2p_l \;\Longrightarrow\; p_l^* = p_k^* = \tfrac12.
      $$

      > [!success] Answer
      > $p_l^* = p_k^* = \tfrac12$, $\ p_x^* = p_y^* = 1$, with $x^* = y^* = 25$ and $l_1^* = k_1^* = l_2^* = k_2^* = 25$.
    related_terms: ["numeraire", "cost-function", "cost-minimisation", "marginal-cost", "rts", "first-welfare-theorem", "production-economy"]
    source_doc_page: 2
  - id: "2d"
    text: |
      **Question 2.** Parts (1) and (2) above: the partial equilibrium model with $C(x) = x$, and the production economy with $U(x,y) = 10\sqrt{x}+y$.

      **(3)** Compare the answers of clause (a) and clause (b) and provide an economic explanation for your result.

      > [!warning] Which clauses?
      > The sheet says "(a) and (b)". In context it means the partial-equilibrium part (1) and the general-equilibrium part (2). The recitation compares them that way.
    solution: |
      > [!success] Answer (from the recitation)
      > - (1), partial equilibrium: $x = 25$, $p = 1$.
      > - (2), general equilibrium: $x^* = 25$, $y^* = 25$, $p_x^* = p_y^* = 1$.
      >
      > **The two give the same $x$ and $p_x$.** The utility is **quasilinear**, so income does not affect demand for $x$: all income effects are absorbed by $y$, which plays the role of the numeraire. The choice of $x$ therefore depends only on its own price. In both frameworks the quantity of $x$ is set by equating marginal utility to marginal cost, and since firms are competitive and price equals marginal cost, both give the same price and quantity of $x$.

      > [!tip] Intuition
      > A general-equilibrium model normally has feedback: a change in the $x$ market changes incomes, which changes demand elsewhere. Quasilinear utility cuts that feedback loop, so one market can be solved on its own. Here the marginal cost of $x$ is also pinned at 1 by the constant-returns technology with $RPT = 1$, which is why the partial-equilibrium cost $C(x) = x$ matches the production economy.
    related_terms: ["partial-equilibrium", "general-equilibrium", "quasilinear-utility"]
    source_doc_page: 2
  - id: "3a"
    text: |
      **Question 3 (square-root technologies).** A production economy with
      $$
      f_1(k_1,l_1) = \tfrac12\left(\sqrt{l_1}+\sqrt{k_1}\right),\qquad f_2(k_2,l_2) = \tfrac12\left(\sqrt{l_2}+\sqrt{k_2}\right).
      $$

      The consumer has $U(x,y) = x^{1/2}y^{1/2}$, and the resource constraints are $k_1+k_2 = 50$ and $l_1+l_2 = 50$.

      **(a)** Find the efficiency locus in the economy.
    solution: |
      $MP_{l_1} = \dfrac{1}{4\sqrt{l_1}}$ and $MP_{k_1} = \dfrac{1}{4\sqrt{k_1}}$, so

      $$
      RTS_1 = \frac{MP_{l_1}}{MP_{k_1}} = \sqrt{\frac{k_1}{l_1}}, \qquad RTS_2 = \sqrt{\frac{k_2}{l_2}}.
      $$

      Equate and substitute the resource constraints:

      $$
      \sqrt{\frac{k_1}{l_1}} = \sqrt{\frac{50-k_1}{50-l_1}} \;\Longrightarrow\; k_1 = l_1.
      $$

      > [!success] Answer
      > The efficiency locus is the diagonal: $k_1 = l_1$ (and so $k_2 = l_2$).
    related_terms: ["efficiency-locus", "rts", "production-economy"]
    source_doc_page: 2
  - id: "3b"
    text: |
      **Question 3 (square-root technologies).** A production economy with
      $$
      f_1(k_1,l_1) = \tfrac12\left(\sqrt{l_1}+\sqrt{k_1}\right),\qquad f_2(k_2,l_2) = \tfrac12\left(\sqrt{l_2}+\sqrt{k_2}\right).
      $$

      The consumer has $U(x,y) = x^{1/2}y^{1/2}$, and the resource constraints are $k_1+k_2 = 50$ and $l_1+l_2 = 50$.

      **(b)** Find the production possibility frontier.
    solution: |
      On the locus:

      $$
      x = \tfrac12\left(\sqrt{l_1}+\sqrt{l_1}\right) = \sqrt{l_1} \;\Longrightarrow\; l_1 = x^2,
      $$

      $$
      y = \tfrac12\left(\sqrt{50-l_1}+\sqrt{50-l_1}\right) = \sqrt{50-l_1} = \sqrt{50 - x^2}.
      $$

      > [!success] Answer
      > $y = \sqrt{50 - x^2}$, equivalently $x^2+y^2 = 50$, a quarter circle. Its slope gives $RPT = \dfrac{x}{\sqrt{50-x^2}}$.

      > [!tip] Intuition
      > Square-root production has diminishing returns to each input, so shifting labour and capital to $x$ costs more and more $y$: the PPF is bowed out (concave) instead of a straight line as in Q1, Q2 and Q4.
    related_terms: ["ppf", "rpt", "efficiency-locus"]
    source_doc_page: 2
  - id: "3c"
    text: |
      **Question 3 (square-root technologies).** A production economy with
      $$
      f_1(k_1,l_1) = \tfrac12\left(\sqrt{l_1}+\sqrt{k_1}\right),\qquad f_2(k_2,l_2) = \tfrac12\left(\sqrt{l_2}+\sqrt{k_2}\right).
      $$

      The consumer has $U(x,y) = x^{1/2}y^{1/2}$, and the resource constraints are $k_1+k_2 = 50$ and $l_1+l_2 = 50$.

      **(c)** Find the optimal allocation in the economy.
    solution: |
      For $U = x^{1/2}y^{1/2}$, $MRS = y/x$. Set $MRS = RPT$:

      $$
      \frac{y}{x} = \frac{x}{\sqrt{50-x^2}} \;\Longrightarrow\; y = \frac{x^2}{\sqrt{50-x^2}}.
      $$

      The bundle must lie on the PPF, $y = \sqrt{50-x^2}$:

      $$
      \frac{x^2}{\sqrt{50-x^2}} = \sqrt{50-x^2} \;\Longrightarrow\; x^2 = 50 - x^2 \;\Longrightarrow\; x^2 = 25.
      $$

      ![](/images/micro-ii/ps09-q3-circular-ppf.png)

      *Theory diagram: the quarter-circle PPF and the indifference curve $xy = 25$ touch at $(5,5)$.*

      > [!success] Answer
      > $x^* = 5,\ y^* = 5$, with $l_1^* = k_1^* = 25$ and $l_2^* = k_2^* = 25$ (from $l_1 = x^2 = 25$ and the locus $k_1 = l_1$).
    related_terms: ["mrs", "rpt", "ppf", "tangency-condition"]
    source_doc_page: 2
  - id: "3d"
    text: |
      **Question 3 (square-root technologies).** A production economy with
      $$
      f_1(k_1,l_1) = \tfrac12\left(\sqrt{l_1}+\sqrt{k_1}\right),\qquad f_2(k_2,l_2) = \tfrac12\left(\sqrt{l_2}+\sqrt{k_2}\right).
      $$

      The consumer has $U(x,y) = x^{1/2}y^{1/2}$, and the resource constraints are $k_1+k_2 = 50$ and $l_1+l_2 = 50$.

      **(d)** Find the equilibrium prices.
    solution: |
      **Output prices.** $MRS(x^*,y^*) = 5/5 = 1 = p_x^*$ (with $p_y = 1$).

      **Input price ratio.** $RTS_1 = \sqrt{k_1^*/l_1^*} = \sqrt{25/25} = 1 = p_l^*/p_k^*$.

      **Cost function of firm 1.** Cost minimisation gives $\sqrt{k_1/l_1} = p_l/p_k$, i.e. $k_1 = (p_l/p_k)^2\,l_1$, and the recitation substitutes this into $x = \tfrac12(\sqrt{l_1}+\sqrt{k_1})$ to obtain $C(x)$ and $C'(x)$ in general. Since it then evaluates everything at $p_l = p_k = p$, the shortcut below gives the same result.

      At $p_l=p_k=p$: $k_1 = l_1$, so $x = \sqrt{l_1}$, $l_1 = k_1 = x^2$ and

      $$
      C(x) = p\,l_1 + p\,k_1 = 2p\,x^2,\qquad C'(x) = 4p\,x.
      $$

      **Price equals marginal cost** at $x^* = 5$, $p_x^* = 1$:

      $$
      1 = 4p\cdot 5 = 20p \;\Longrightarrow\; p_l^* = p_k^* = \frac{1}{20}.
      $$

      > [!success] Answer
      > $p_l^* = p_k^* = \dfrac{1}{20}$, $\ p_x^* = p_y^* = 1$.

      > [!tip] Check
      > Firm 1's revenue is $p_xx = 5$; its input bill is $\frac{1}{20}(25+25) = 2.5$. These are not equal, so firm 1 makes positive profit of $2.5$ at these prices. That is consistent with the technology having *decreasing* returns to scale ($f(tl,tk) = \sqrt{t}\,f(l,k)$), where price equals marginal cost but marginal cost is below average cost, unlike the constant-returns cases of Q1, Q2 and Q4. The recitation does not comment on this; it only sets $p_x = C'(x^*)$.
    related_terms: ["numeraire", "cost-minimisation", "marginal-cost", "cost-function", "rts"]
    source_doc_page: 2
  - id: "4a"
    text: |
      **Question 4 (unequal Cobb-Douglas shares), as printed on the sheet.** The firms have $f_1(l_1,k_1) = 2\cdot l_1^{1/3}k_1^{2/3}$ and $f_2(l_2,k_2) = l_2^{1/3}k_2^{2/3}$. The consumer has $U(x,y) = x^{1/3}y^{2/3}$ (the sheet prints $x^{1/3}l^{2/3}$, a typo for $y$), and the resource constraints are $k_1+k_2 = 60$ and $l_1+l_2 = 60$.

      > [!warning] The printed sheet and the recitation differ
      > The recitation solves a version with the factor 2 on **both** firms and resources of **50** and **50**. The answers below are the recitation's: they answer the variant it solved, not literally the sheet. A check on the sheet's own numbers is at the end of part (e).

      **(a)** Find the efficiency locus in the economy.
    solution: |
      Recitation version ($f_1 = 2\,l_1^{1/3}k_1^{2/3}$, $f_2 = 2\,l_2^{1/3}k_2^{2/3}$, resources 50 and 50).

      $$
      MP_{l_1} = \frac{2\,l_1^{-2/3}k_1^{2/3}}{3},\qquad MP_{k_1} = \frac{4\,l_1^{1/3}k_1^{-1/3}}{3}.
      $$

      $$
      RTS_1 = \frac{MP_{l_1}}{MP_{k_1}} = \frac{k_1}{2\,l_1}, \qquad RTS_2 = \frac{k_2}{2\,l_2}.
      $$

      Equate and substitute the resource constraints:

      $$
      \frac{k_1}{2l_1} = \frac{50-k_1}{2(50-l_1)} \;\Longrightarrow\; k_1 = l_1.
      $$

      > [!success] Answer
      > The efficiency locus is the diagonal: $k_1 = l_1$.
    related_terms: ["efficiency-locus", "rts", "cobb-douglas-production-function"]
    source_doc_page: 3
  - id: "4b"
    text: |
      **Question 4 (unequal Cobb-Douglas shares), as printed on the sheet.** The firms have $f_1(l_1,k_1) = 2\cdot l_1^{1/3}k_1^{2/3}$ and $f_2(l_2,k_2) = l_2^{1/3}k_2^{2/3}$. The consumer has $U(x,y) = x^{1/3}y^{2/3}$ (the sheet prints $x^{1/3}l^{2/3}$, a typo for $y$), and the resource constraints are $k_1+k_2 = 60$ and $l_1+l_2 = 60$.

      > [!warning] The printed sheet and the recitation differ
      > The recitation solves a version with the factor 2 on **both** firms and resources of **50** and **50**. The answers below are the recitation's: they answer the variant it solved, not literally the sheet. A check on the sheet's own numbers is at the end of part (e).

      **(b)** Find the production possibility frontier.
    solution: |
      Recitation version.

      $$
      x = 2\,l_1^{1/3}l_1^{2/3} = 2l_1, \qquad y = 2(50-l_1)^{1/3}(50-l_1)^{2/3} = 2(50-l_1) = 100 - 2l_1.
      $$

      Since $2l_1 = x$:

      > [!success] Answer
      > $y = 100 - x$, so $RPT = 1$.
    related_terms: ["ppf", "rpt", "efficiency-locus"]
    source_doc_page: 3
  - id: "4c"
    text: |
      **Question 4 (unequal Cobb-Douglas shares), as printed on the sheet.** The firms have $f_1(l_1,k_1) = 2\cdot l_1^{1/3}k_1^{2/3}$ and $f_2(l_2,k_2) = l_2^{1/3}k_2^{2/3}$. The consumer has $U(x,y) = x^{1/3}y^{2/3}$ (the sheet prints $x^{1/3}l^{2/3}$, a typo for $y$), and the resource constraints are $k_1+k_2 = 60$ and $l_1+l_2 = 60$.

      > [!warning] The printed sheet and the recitation differ
      > The recitation solves a version with the factor 2 on **both** firms and resources of **50** and **50**. The answers below are the recitation's: they answer the variant it solved, not literally the sheet. A check on the sheet's own numbers is at the end of part (e).

      **(c)** Find the optimal allocation in the economy.
    solution: |
      Recitation version. $MRS$ for $U = x^{1/3}y^{2/3}$ is

      $$
      MRS = \frac{\tfrac13 x^{-2/3}y^{2/3}}{\tfrac23 x^{1/3}y^{-1/3}} = \frac{y}{2x}.
      $$

      Set $MRS = RPT = 1$:

      $$
      \frac{y}{2x} = 1 \;\Longrightarrow\; y = 2x.
      $$

      Put it into the PPF $y = 100 - x$:

      $$
      2x = 100 - x \;\Longrightarrow\; x = \frac{100}{3},\quad y = \frac{200}{3}.
      $$

      Inputs: $l_1 = k_1 = x/2 = \tfrac{50}{3}$, and $l_2 = k_2 = 50 - \tfrac{50}{3} = \tfrac{100}{3}$.

      ![](/images/micro-ii/ps09-q4-linear-ppf-optimum.png)

      *Theory diagram: straight PPF $y = 100-x$ and the indifference curve of $x^{1/3}y^{2/3}$ through the optimum $(100/3,\,200/3)$.*

      > [!success] Answer
      > $x^* = \dfrac{100}{3}$, $y^* = \dfrac{200}{3}$, $l_1^* = k_1^* = \dfrac{50}{3}$, $l_2^* = k_2^* = \dfrac{100}{3}$.
    related_terms: ["mrs", "rpt", "ppf", "tangency-condition"]
    source_doc_page: 3
  - id: "4d"
    text: |
      **Question 4 (unequal Cobb-Douglas shares), as printed on the sheet.** The firms have $f_1(l_1,k_1) = 2\cdot l_1^{1/3}k_1^{2/3}$ and $f_2(l_2,k_2) = l_2^{1/3}k_2^{2/3}$. The consumer has $U(x,y) = x^{1/3}y^{2/3}$ (the sheet prints $x^{1/3}l^{2/3}$, a typo for $y$), and the resource constraints are $k_1+k_2 = 60$ and $l_1+l_2 = 60$.

      > [!warning] The printed sheet and the recitation differ
      > The recitation solves a version with the factor 2 on **both** firms and resources of **50** and **50**. The answers below are the recitation's: they answer the variant it solved, not literally the sheet. A check on the sheet's own numbers is at the end of part (e).

      **(d)** Find the equilibrium prices.
    solution: |
      Recitation version.

      **Output prices.** $MRS(x^*,y^*) = \dfrac{200/3}{2\cdot 100/3} = 1 = p_x^*$ (with $p_y = 1$).

      **Input price ratio.** $RTS_1 = \dfrac{k_1}{2l_1} = \dfrac12 = \dfrac{p_l^*}{p_k^*}$, so $p_k = 2p_l$ in equilibrium.

      **Firm 1's cost function.** Cost minimisation: $\dfrac{k_1}{2l_1} = \dfrac{p_l}{p_k}$ gives $k_1 = 2\,\dfrac{p_l}{p_k}\,l_1$. Substitute into $x = 2l_1^{1/3}k_1^{2/3}$:

      $$
      x = 2^{5/3}\,l_1\left(\frac{p_l}{p_k}\right)^{2/3} \;\Longrightarrow\; l_1 = \frac{x}{2^{5/3}}\left(\frac{p_k}{p_l}\right)^{2/3},\qquad k_1 = \frac{x}{2^{2/3}}\left(\frac{p_l}{p_k}\right)^{1/3}.
      $$

      $$
      C'(x) = \frac{p_l}{2^{5/3}}\left(\frac{p_k}{p_l}\right)^{2/3} + \frac{p_k}{2^{2/3}}\left(\frac{p_l}{p_k}\right)^{1/3}.
      $$

      **Price equals marginal cost** at $p_x^* = 1$ and $p_k/p_l = 2$:

      $$
      1 = \frac{p_l}{2^{5/3}}\,2^{2/3} + \frac{p_k}{2^{2/3}}\,2^{-1/3} = \frac{p_l}{2} + \frac{p_k}{2} = \frac{p_l + 2p_l}{2} = \frac{3p_l}{2}.
      $$

      > [!success] Answer
      > $p_l^* = \dfrac23$, $\ p_k^* = \dfrac43$, $\ p_x^* = p_y^* = 1$.

      > [!tip] Intuition
      > Capital is twice as expensive as labour because the Cobb-Douglas exponent on capital is $2/3$ (twice the $1/3$ on labour): at equal quantities, capital is twice as productive at the margin, and with the allocation $k_1=l_1$ its price must be bid up to twice that of labour.
    related_terms: ["numeraire", "cost-minimisation", "marginal-cost", "cost-function", "rts", "isocost-line"]
    source_doc_page: 3
  - id: "4e"
    text: |
      **Question 4 (unequal Cobb-Douglas shares), as printed on the sheet.** The firms have $f_1(l_1,k_1) = 2\cdot l_1^{1/3}k_1^{2/3}$ and $f_2(l_2,k_2) = l_2^{1/3}k_2^{2/3}$. The consumer has $U(x,y) = x^{1/3}y^{2/3}$ (the sheet prints $x^{1/3}l^{2/3}$, a typo for $y$), and the resource constraints are $k_1+k_2 = 60$ and $l_1+l_2 = 60$.

      > [!warning] The printed sheet and the recitation differ
      > The recitation solves a version with the factor 2 on **both** firms and resources of **50** and **50**. The answers below are the recitation's: they answer the variant it solved, not literally the sheet. A check on the sheet's own numbers is at the end of part (e).

      **(e)** (5 points) What will be the proportion in the optimal allocation of $X$ and $Y$ if the consumer's utility is $U(x,y) = x^{a}y^{1-a}$?
    solution: |
      Recitation version. $MRS = \dfrac{a\,y}{(1-a)\,x}$. Set $MRS = RPT = 1$:

      $$
      (1-a)\,x = a\,y \;\Longrightarrow\; \frac{x}{y} = \frac{a}{1-a}.
      $$

      Combine with the PPF $y = 100 - x$:

      $$
      \frac{x}{100-x} = \frac{a}{1-a} \;\Longrightarrow\; x(1-a) = a(100-x) \;\Longrightarrow\; x = 100a.
      $$

      > [!success] Answer
      > $\dfrac{x}{y} = \dfrac{a}{1-a}$, with $x^* = 100a$ and $y^* = 100(1-a)$. The consumer spends the budget share $a$ on $x$ and $1-a$ on $y$, which is what Cobb-Douglas demand always does; the PPF is a line of slope $-1$ so $p_x = p_y$ and quantities follow shares. For $a = 1/3$ this reproduces part (c).

      > [!tip] Check on the printed sheet's numbers (not in the recitation)
      > With the sheet's version ($f_2$ without the factor 2, resources 60): the locus is still $k_1 = l_1$, $x = 2l_1$, $y = 60 - l_1 = 60 - x/2$, so $RPT = 1/2$. $MRS = y/(2x) = 1/2$ gives $y = x$, hence $x = 40$, $y = 40$, $l_1 = k_1 = 20$. This is a different answer from the recitation's, so make sure you know which version your exam uses.
    related_terms: ["mrs", "rpt", "ppf", "cobb-douglas-production-function"]
    source_doc_page: 3
---

*Related: [[Lec_05-Production Economy & Externalities]], [[Lec_04-Theory of the Firm, Partial & General Equilibrium]]*
