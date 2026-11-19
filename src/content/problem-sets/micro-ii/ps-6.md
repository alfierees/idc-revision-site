---
title: "PS6"
subject: micro-ii
source_doc: /papers/micro-ii/ps-6.pdf
tags:
  - micro-economics-ii
  - exchange-economy
  - contract-curve
  - pareto-efficiency
  - walrasian-equilibrium
  - general-equilibrium
  - social-welfare
  - mrs
  - cobb-douglas
  - solutions
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Question 1.** Consider the exchange economy $U_1(x_1,y_1)=x_1y_1$ and $U_2(x_2,y_2)=x_2y_2$ with $\omega_1^X=10$, $\omega_1^Y=20$ and $\omega_2^X=20$, $\omega_2^Y=10$.
    solution: |
      Totals: $X=Y=30$.

      > [!tip] The recipe the official key uses on every contract-curve part
      > 1. Derive each agent's $MRS$ (for Cobb-Douglas $x^ay^b$, $MRS=\frac{a}{b}\frac{y}{x}$).
      > 2. Apply the tangency condition $MRS_1=MRS_2$.
      > 3. Solve for $y_1$ as a function of $x_1$. That locus *is* the contract curve.
      >
      > For equilibrium parts the recipe becomes: budget-share demands, market clearing, price ratio, then back out the allocation.
    related_terms: ["exchange-economy", "contract-curve", "edgeworth-box", "mrs"]
    source_doc_page: 1
  - id: "1a"
    text: |
      (a) Present the contract curve as the set of bundles $(x_1,y_1)$ for agent 1.
    solution: |
      Both agents are symmetric Cobb-Douglas, so $MRS_1=\dfrac{y_1}{x_1}$ and $MRS_2=\dfrac{y_2}{x_2}=\dfrac{30-y_1}{30-x_1}$. Set them equal and cross-multiply:

      $$
      \frac{y_1}{x_1}=\frac{30-y_1}{30-x_1}\;\Longrightarrow\; y_1(30-x_1)=x_1(30-y_1)\;\Longrightarrow\; 30y_1=30x_1.
      $$

      $$
      \boxed{y_1=x_1,\qquad 0\le x_1\le 30}
      $$

      The [[Contract Curve]] is the **main diagonal** of the box. With identical symmetric preferences, efficiency requires both agents to hold goods in the same proportion.
    related_terms: ["contract-curve", "mrs", "tangency-condition", "pareto-efficiency"]
    source_doc_page: 1
  - id: "1b"
    text: |
      (b) Present the set of Pareto efficient allocations that are better for both agents than the initial endowment.
    solution: |
      Endowment utilities: $U_1(10,20)=200$ and $U_2(20,10)=200$. Parametrise the contract curve by $x_1=y_1=t$, so $U_1=t^2$ and $U_2=(30-t)^2$. Require both strictly above 200:

      $$
      t^2>200\;\Rightarrow\; t>\sqrt{200}\approx 14.14,\qquad (30-t)^2>200\;\Rightarrow\; t<30-\sqrt{200}\approx 15.86.
      $$

      $$
      \boxed{\{(x_1,y_1):\ y_1=x_1,\ \sqrt{200}<x_1<30-\sqrt{200}\}}\quad\text{i.e. } 14.14<x_1<15.86
      $$

      > [!tip] What this segment is
      > It is the slice of the contract curve lying **inside the lens** formed by the two agents' indifference curves through the endowment, i.e. the [[Core]] of the economy. Any competitive trade must land here.
    related_terms: ["core", "contract-curve", "pareto-efficiency", "edgeworth-box", "individual-rationality"]
    source_doc_page: 1
  - id: "1c"
    text: |
      (c) Look at the bundle $(x_1,y_1)=(x_2,y_2)=(15,15)$. Is this bundle Pareto efficient? Prove your answer and provide an economic explanation for your result.
    solution: |
      **Yes, it is Pareto efficient.**

      > [!example] Two-step check
      > **1. On the contract curve?** $y_1=x_1=15$ satisfies $y_1=x_1$. Equivalently $MRS_1=\frac{15}{15}=1=\frac{15}{15}=MRS_2$.
      > **2. Convexity.** Cobb-Douglas indifference curves are strictly convex, so the tangency $MRS_1=MRS_2$ is a genuine no-improvement point (not a saddle).
      >
      > It also lies in the range found in (b) ($14.14<15<15.86$): $U_1=U_2=15\cdot15=225>200$, so both agents are strictly better off than at the endowment.

      **Economic explanation:** at $(15,15)$ both agents value $x$ and $y$ at exactly the same rate ($MRS=1$). There is no reallocation that can make one agent strictly better off without harming the other. $\blacksquare$
    related_terms: ["pareto-efficiency", "mrs", "contract-curve", "pareto-dominance"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Question 2.** Consider the exchange economy $U_1(x_1,y_1)=x_1^{1/3}y_1^{2/3}$ and $U_2(x_2,y_2)=x_2\,y_2^{1/2}$ with $\omega_1^X=8$, $\omega_1^Y=8$ and $\omega_2^X=16$, $\omega_2^Y=16$.
    solution: |
      Totals: $X=Y=24$.
    related_terms: ["exchange-economy", "contract-curve", "mrs"]
    source_doc_page: 1
  - id: "2a"
    text: |
      (a) Present the contract curve as the set of bundles $(x_1,y_1)$ for agent 1.
    solution: |
      $$
      MRS_1=\frac{1/3}{2/3}\cdot\frac{y_1}{x_1}=\frac{y_1}{2x_1},\qquad MRS_2=\frac{1}{1/2}\cdot\frac{y_2}{x_2}=\frac{2y_2}{x_2}=\frac{2(24-y_1)}{24-x_1}.
      $$

      Set them equal and cross-multiply:

      $$
      \frac{y_1}{2x_1}=\frac{2(24-y_1)}{24-x_1}\;\Longrightarrow\; y_1(24-x_1)=4x_1(24-y_1)\;\Longrightarrow\; 24y_1+3x_1y_1=96x_1.
      $$

      $$
      \boxed{y_1=\frac{96x_1}{24+3x_1}=\frac{32x_1}{8+x_1},\qquad 0\le x_1\le 24}
      $$

      The curve bows below the diagonal: agent 1, who weights $y$ more, ends up holding relatively more $y$.
    related_terms: ["contract-curve", "mrs", "tangency-condition", "pareto-efficiency"]
    source_doc_page: 1
  - id: "2b"
    text: |
      (b) Present the set of Pareto efficient allocations that are better for both agents than the initial endowment.
    solution: |
      Endowment utilities: $U_1(8,8)=8^{1/3}8^{2/3}=8$ and $U_2(16,16)=16\cdot16^{1/2}=64$. Walk along the contract curve and impose $U_1>8$ **and** $U_2>64$. $U_1$ rises and $U_2$ falls as $x_1$ increases, so the set is the band between the two break-even points:

      $$
      U_1=8\text{ at }x_1\approx 4.21\ (y_1\approx 11.0),\qquad U_2=64\text{ at }x_1\approx 5.13\ (y_1\approx 12.5).
      $$

      $$
      \boxed{\{(x_1,y_1)\text{ on the contract curve}:\ 4.21<x_1<5.13\}}
      $$

      > [!info] Numerical answer
      > This band is found numerically. The official key writes the lower end as roughly $4.3$; solving $U_1=8$ on the curve exactly gives $4.21$ (the write-up's value, used here), and the upper end $5.13$ agrees in both.
    related_terms: ["core", "contract-curve", "pareto-efficiency", "individual-rationality"]
    source_doc_page: 1
  - id: "2c"
    text: |
      (c) Look at the bundle $(x_1,y_1)=(x_2,y_2)=(12,12)$. Is this bundle Pareto efficient? Prove your answer and provide an economic explanation for your result.
    solution: |
      **No.**

      $$
      MRS_1=\frac{12}{2\cdot12}=\tfrac12,\qquad MRS_2=\frac{2\cdot12}{12}=2,\qquad MRS_1\ne MRS_2.
      $$

      Equivalently, the contract curve at $x_1=12$ requires $y_1=\frac{96\cdot12}{24+36}=19.2\ne 12$. So $(12,12)$ is **not** on the contract curve and is **not** Pareto efficient. $\blacksquare$

      > [!warning] Read the MRS gap as a trade
      > $MRS_1=\tfrac12$: agent 1 will give up only half a unit of $y$ for a unit of $x$, so $y$ is relatively valuable to agent 1 and $x$ is cheap. $MRS_2=2$: $x$ is relatively valuable to agent 2. Because the rates differ, a mutually beneficial trade exists: **give more $x$ to agent 2 and more $y$ to agent 1.** Both move to a higher indifference curve. Trade only stops once the MRS gap closes, i.e. on the contract curve.
    related_terms: ["pareto-efficiency", "mrs", "contract-curve", "pareto-dominance"]
    source_doc_page: 1
  - id: "3"
    text: |
      **Question 3.** Consider the exchange economy $U_1(x_1,y_1)=x_1y_1$ and $U_2(x_2,y_2)=x_2\,y_2^{1/2}$ with $\omega_1^X=5$, $\omega_1^Y=10$ and $\omega_2^X=15$, $\omega_2^Y=20$.
    solution: |
      Totals: $X=20$, $Y=30$.
    related_terms: ["exchange-economy", "contract-curve", "social-welfare"]
    source_doc_page: 2
  - id: "3a"
    text: |
      (a) Present the contract curve as the set of bundles $(x_1,y_1)$ for agent 1.
    solution: |
      $$
      MRS_1=\frac{y_1}{x_1},\qquad MRS_2=\frac{2y_2}{x_2}=\frac{2(30-y_1)}{20-x_1}.
      $$

      Set them equal and cross-multiply:

      $$
      y_1(20-x_1)=2x_1(30-y_1)\;\Longrightarrow\; 20y_1+x_1y_1=60x_1
      $$

      $$
      \boxed{y_1=\frac{60x_1}{20+x_1},\qquad 0\le x_1\le 20}
      $$
    related_terms: ["contract-curve", "mrs", "tangency-condition", "pareto-efficiency"]
    source_doc_page: 2
  - id: "3b"
    text: |
      (b) Assume now that there is a social planner whose welfare can be represented as

      $$
      W\big((x_1,y_1),(x_2,y_2)\big)=U_1(x_1,y_1)\cdot U_2(x_2,y_2).
      $$
    solution: |
      The next four parts compare efficient and inefficient allocations under this Nash-product planner.
    related_terms: ["social-welfare", "social-planner", "pareto-efficiency"]
    source_doc_page: 2
  - id: "3bi"
    text: |
      (i) Consider the allocation $(x_1,y_1)=(5,12)$ and $(x_2,y_2)=(15,18)$. Show that it is Pareto efficient.
    solution: |
      Call it $A$.

      - **Feasible:** $5+15=20$ and $12+18=30$.
      - **On the contract curve:** $\frac{60\cdot5}{20+5}=12=y_1$.
      - **Tangency:** $MRS_1=\frac{12}{5}=2.4$ and $MRS_2=\frac{2\cdot18}{15}=2.4$. Equal, with convex preferences, so $A$ is **Pareto efficient**. $\blacksquare$
    related_terms: ["pareto-efficiency", "contract-curve", "mrs"]
    source_doc_page: 2
  - id: "3bii"
    text: |
      (ii) Consider the allocation $(x_1,y_1)=(10,18)$ and $(x_2,y_2)=(10,12)$. Show that it is not Pareto efficient.
    solution: |
      Call it $B$.

      - **Feasible:** $10+10=20$ and $18+12=30$.
      - **Off the contract curve:** $\frac{60\cdot10}{20+10}=20\ne 18$.
      - **MRS differ:** $MRS_1=\frac{18}{10}=1.8$ and $MRS_2=\frac{2\cdot12}{10}=2.4$. Not equal, so $B$ is **not Pareto efficient**. $\blacksquare$
    related_terms: ["pareto-efficiency", "contract-curve", "mrs"]
    source_doc_page: 2
  - id: "3biii"
    text: |
      (iii) Show that the social planner prefers the latter allocation ($B$) over the former ($A$).
    solution: |
      $$
      W(A)=(5\cdot12)\cdot\big(15\sqrt{18}\big)=60\cdot63.64\approx 3818,\qquad W(B)=(10\cdot18)\cdot\big(10\sqrt{12}\big)=180\cdot34.64\approx 6235.
      $$

      $$
      \boxed{W(B)\approx 6235>3818\approx W(A)}
      $$

      > [!tip] Marked takeaway
      > The planner ranks the **inefficient** $B$ above the **efficient** $A$. Welfare maximisation is not the same as efficiency; a Nash product rewards balance (this is PS 5, Question 1(c), with real numbers).
    related_terms: ["social-welfare", "social-planner", "pareto-efficiency"]
    source_doc_page: 2
  - id: "3biv"
    text: |
      (iv) Find an allocation on the contract curve that is better for the planner than the latter allocation ($B$).
    solution: |
      Maximise $W=x_1y_1(20-x_1)(30-y_1)^{1/2}$ over the box:

      $$
      \frac{\partial W}{\partial x_1}=0\Rightarrow 20-2x_1=0\Rightarrow x_1=10,\qquad \frac{\partial W}{\partial y_1}=0\Rightarrow (30-y_1)-\tfrac12y_1=0\Rightarrow y_1=20.
      $$

      The planner's optimum is $(x_1,y_1)=(10,20)$ and $(x_2,y_2)=(10,10)$. It lies on the contract curve: $\frac{60\cdot10}{20+10}=20=y_1$.

      $$
      W^{*}=(10\cdot20)\cdot\big(10\sqrt{10}\big)=200\cdot31.62\approx 6325>6235=W(B).
      $$

      > [!tip] Why the planner optimum lands on the contract curve
      > A Nash-product maximiser can never be Pareto dominated (a dominating allocation would raise the product), so it is necessarily efficient. The planner does not *avoid* efficiency; it just does not pick the particular efficient point $A$. Among efficient points it picks the one with the best balance of utilities.
    related_terms: ["social-welfare", "social-planner", "pareto-efficiency", "contract-curve"]
    source_doc_page: 2
  - id: "4"
    text: |
      **Question 4.** Consider the exchange economy $U_1(x_1,y_1)=x_1^{1/3}y_1^{2/3}$ and $U_2(x_2,y_2)=x_2\,y_2^{1/2}$ with $\omega_1^X=8$, $\omega_1^Y=8$ and $\omega_2^X=16$, $\omega_2^Y=16$ (the same economy as Question 2).
    solution: |
      Let $p\equiv p_x/p_y$. Totals: $X=Y=24$.
    related_terms: ["walrasian-equilibrium", "exchange-economy", "general-equilibrium", "numeraire"]
    source_doc_page: 2
  - id: "4a"
    text: |
      (a) Find the equilibrium price ratio $\frac{p_x^{*}}{p_y^{*}}$ and the equilibrium allocation.
    solution: |
      **Budget-share demands.** Income is $M_i=p_x\omega_i^X+p_y\omega_i^Y$.

      > [!info] Agent 1 ($x^{1/3}y^{2/3}$): spends $\tfrac13$ on $x$ and $\tfrac23$ on $y$
      > $M_1=8(p_x+p_y)$, so $x_1=\dfrac13\dfrac{M_1}{p_x}=\dfrac83\Big(1+\dfrac1p\Big)$.

      > [!info] Agent 2 ($x\,y^{1/2}$): exponents $1,\tfrac12$, so spends $\tfrac23$ on $x$ and $\tfrac13$ on $y$
      > $M_2=16(p_x+p_y)$, so $x_2=\dfrac23\dfrac{M_2}{p_x}=\dfrac{32}{3}\Big(1+\dfrac1p\Big)$.

      **Market clearing for $x$:**

      $$
      x_1+x_2=\frac{40}{3}\Big(1+\frac1p\Big)=24\;\Longrightarrow\; 1+\frac1p=\frac95.
      $$

      $$
      \boxed{\frac{p_x^{*}}{p_y^{*}}=\frac54}
      $$

      Back-substituting, with $1+\frac1p=1.8$: $x_1=\frac83(1.8)=4.8$, $y_1=\frac{16}{3}(p+1)=12$, $x_2=19.2$, $y_2=12$.

      $$
      \boxed{\text{Agent 1: }(4.8,\,12),\qquad \text{Agent 2: }(19.2,\,12)}
      $$

      The $y$ market clears too ($12+12=24$), and the allocation sits on the Question 2 contract curve, confirming the [[First Welfare Theorem]].

      > [!warning] Common pitfall
      > For $U=x\,y^{1/2}$ the budget shares are $\tfrac23,\tfrac13$ (use the exponents $1,\tfrac12$), **not** $\tfrac12,\tfrac12$.
    related_terms: ["walrasian-equilibrium", "general-equilibrium", "exchange-economy", "first-welfare-theorem", "walras-law"]
    source_doc_page: 2
  - id: "4b"
    text: |
      (b) Show that for any price ratio $\frac{p_x}{p_y}<\frac{p_x^{*}}{p_y^{*}}$ there will be over-demand for good $X$.
    solution: |
      Total demand for $x$ is $X^d(p)=\tfrac{40}{3}\big(1+\tfrac1p\big)$, which is **strictly decreasing in $p$**. For $p<p^{*}=\tfrac54$ we have $\tfrac1p>\tfrac45$, so

      $$
      X^d>\tfrac{40}{3}\cdot\tfrac95=24=\text{supply}.
      $$

      > [!tip] Intuition
      > A low $p_x/p_y$ means $x$ is **cheap**. Both agents shift spending toward $x$, pushing aggregate demand above the fixed supply of 24. $\blacksquare$
    related_terms: ["excess-demand", "walrasian-equilibrium"]
    source_doc_page: 2
  - id: "4c"
    text: |
      (c) Show that for any price ratio $\frac{p_x}{p_y}>\frac{p_x^{*}}{p_y^{*}}$ there will be over-demand for good $Y$.
    solution: |
      By [[Walras' Law]] the value of aggregate excess demand is zero: $p_x(X^d-X)+p_y(Y^d-Y)=0$. For $p>p^{*}$, the logic of (b) reverses: $X^d<24$, so $x$ is in excess *supply*, and Walras' Law then forces $y$ into excess *demand*, $Y^d>24$.

      Equivalently, a high $p_x/p_y$ makes $y$ cheap, so consumers move toward $y$. $\blacksquare$
    related_terms: ["excess-demand", "walras-law", "walrasian-equilibrium"]
    source_doc_page: 2
  - id: "5"
    text: |
      **Question 5.** Consider the exchange economy $U_1(x_1,y_1)=x_1^a\cdot y_1^b$ and $U_2(x_2,y_2)=x_2^a\cdot y_2^b$ (note that both agents have the same utility function) with $\omega_1^X=15$, $\omega_1^Y=15$ and $\omega_2^X=15$, $\omega_2^Y=15$.
    solution: |
      > [!info] The structural shortcut
      > Identical preferences **and** identical endowments make the two agents indistinguishable, so in equilibrium **no trade** occurs: each consumes $(15,15)$. The equilibrium price ratio is just the common $MRS$ at $(15,15)$.

      Formally, total $x$-demand is $\frac{a}{a+b}\cdot\frac{M_1+M_2}{p_x}=\frac{a}{a+b}\cdot\frac{30(p_x+p_y)}{p_x}$. Setting it equal to supply $30$:

      $$
      \frac{a}{a+b}(p_x+p_y)=p_x\;\Longrightarrow\; a\,p_y=b\,p_x\;\Longrightarrow\;\boxed{\frac{p_x^{*}}{p_y^{*}}=\frac ab}
      $$

      Equivalently, $MRS=\frac ab\cdot\frac{15}{15}=\frac ab$.
    related_terms: ["walrasian-equilibrium", "exchange-economy", "mrs", "numeraire"]
    source_doc_page: 3
  - id: "5a"
    text: |
      (a) Assume that the ratio of the equilibrium prices is $\frac{p_x^{*}}{p_y^{*}}=2$. Find the ratio $\frac ab$.
    solution: |
      $$
      \frac ab=\frac{p_x^{*}}{p_y^{*}}=2\quad\Longrightarrow\quad\boxed{\frac ab=2}
      $$
    related_terms: ["walrasian-equilibrium", "mrs"]
    source_doc_page: 3
  - id: "5b"
    text: |
      (b) Assume that the ratio of the equilibrium prices is $\frac{p_x^{*}}{p_y^{*}}=\frac32$. Find the ratio $\frac ab$.
    solution: |
      $$
      \frac ab=\frac{p_x^{*}}{p_y^{*}}=\frac32\quad\Longrightarrow\quad\boxed{\frac ab=\frac32}
      $$

      > [!tip] What $a/b$ measures
      > The ratio $\frac ab$ captures how much the common consumer likes $x$ relative to $y$. With identical endowments the price ratio must match that taste ratio: if $x$ is twice as expensive as $y$, the consumer must value $x$ twice as much, otherwise someone would want to trade and break the no-trade equilibrium.
    related_terms: ["walrasian-equilibrium", "mrs"]
    source_doc_page: 3
  - id: "6"
    text: |
      **Question 6.** Consider the exchange economy $U_1(x_1,y_1)=x_1y_1$ and $U_2(x_2,y_2)=x_2\,y_2^{1/2}$ with $\omega_1^X=5$, $\omega_1^Y=10$ and $\omega_2^X=15$, $\omega_2^Y=20$ (the same economy as Question 3).
    solution: |
      Let $p\equiv p_x/p_y$. Totals: $X=20$, $Y=30$.
    related_terms: ["walrasian-equilibrium", "exchange-economy", "social-welfare"]
    source_doc_page: 3
  - id: "6a"
    text: |
      (a) Find the equilibrium price ratio and the equilibrium allocation.
    solution: |
      > [!info] Demands
      > Agent 1 ($xy$, shares $\tfrac12,\tfrac12$): $M_1=5p_x+10p_y$, so $x_1=\tfrac52+\tfrac5p$ and $y_1=\tfrac52p+5$.
      > Agent 2 ($x\,y^{1/2}$, shares $\tfrac23,\tfrac13$): $M_2=15p_x+20p_y$, so $x_2=10+\tfrac{40}{3p}$ and $y_2=5p+\tfrac{20}{3}$.

      **Market clearing for $x$:**

      $$
      x_1+x_2=12.5+\frac{55}{3p}=20\;\Longrightarrow\;\frac{55}{3p}=7.5\;\Longrightarrow\;\boxed{\frac{p_x^{*}}{p_y^{*}}=\frac{22}{9}\approx2.44}
      $$

      Plugging in $p=\tfrac{22}{9}$:

      $$
      \boxed{\text{Agent 1: }(4.55,\,11.11),\qquad\text{Agent 2: }(15.45,\,18.89)}
      $$

      Markets clear: $4.55+15.45=20$ and $11.11+18.89=30$. The allocation lies on the Question 3 contract curve (First Welfare Theorem again). Equilibrium welfare: $U_1=50.5$, $U_2=67.2$, so $W_{\text{eq}}=50.5\cdot67.2\approx3392$.
    related_terms: ["walrasian-equilibrium", "general-equilibrium", "first-welfare-theorem", "walras-law"]
    source_doc_page: 3
  - id: "6b"
    text: |
      (b) Assume now that there is a social planner whose welfare can be represented as

      $$
      W\big((x_1,y_1),(x_2,y_2)\big)=U_1(x_1,y_1)\cdot U_2(x_2,y_2).
      $$
    solution: |
      Two parts follow: a non-efficient allocation the planner prefers to the equilibrium, and an endowment that lets the market beat it.
    related_terms: ["social-welfare", "social-planner"]
    source_doc_page: 3
  - id: "6bi"
    text: |
      (i) Find an allocation that is not Pareto efficient which the social planner prefers to the equilibrium allocation.
    solution: |
      Try the **balanced** split $(x_1,y_1)=(10,15)$ and $(x_2,y_2)=(10,15)$. It is feasible: $10+10=20$ and $15+15=30$.

      $$
      W=(10\cdot15)\cdot\big(10\sqrt{15}\big)=150\cdot38.73\approx5810>3392=W_{\text{eq}}.
      $$

      It is not Pareto efficient: $MRS_1=\tfrac{15}{10}=1.5\ne3=\tfrac{2\cdot15}{10}=MRS_2$.

      $$
      \boxed{(10,15)/(10,15):\ W\approx5810>3392,\ \text{and not Pareto efficient}}
      $$

      > [!warning] Common pitfall
      > "The planner prefers it" is not the same as "it is efficient." A balanced inefficient allocation can beat a lopsided efficient one.
    related_terms: ["social-welfare", "social-planner", "pareto-efficiency", "mrs"]
    source_doc_page: 3
  - id: "6bii"
    text: |
      (ii) Find another endowment allocation under which the equilibrium outcome is better for the social planner than the allocation you found in (i).
    solution: |
      Use the **Second Welfare Theorem**: any Pareto efficient allocation can be made the competitive equilibrium by handing the agents that allocation *as their endowment*. Then no trade occurs and the equilibrium sits exactly there. Choose the **planner's global optimum** from Question 3(b)(iv):

      $$
      \omega_1=(10,20),\qquad\omega_2=(10,10).
      $$

      With these endowments the competitive equilibrium is $(10,20)/(10,10)$ itself, giving

      $$
      W=(10\cdot20)\cdot\big(10\sqrt{10}\big)=200\cdot31.62\approx6325>5810.
      $$

      > [!tip] Punchline of the set
      > The market does not maximise the planner's welfare *given the original endowments* (part (i)). But the planner is not powerless: by **redistributing endowments** first and then letting the market run, it steers the equilibrium onto its favourite efficient allocation. Efficiency (markets) is separable from distribution (lump-sum transfers).
    related_terms: ["second-welfare-theorem", "walrasian-equilibrium", "social-welfare", "lump-sum-tax"]
    source_doc_page: 3
---

> [!info] Method cheat-sheet
> **Contract curve:** $MRS_1=MRS_2$, solve for $y_1(x_1)$. **Walrasian equilibrium:** Cobb-Douglas budget shares, demands, clear the $x$ market, get $p^{*}$, then back out the allocation (it lies on the contract curve). **Planner:** maximise $W=U_1U_2$; its optimum is Pareto efficient; to *implement* it, redistribute endowments (Second Welfare Theorem).

> [!warning] Pitfall
> $MRS_2=\frac{2y_2}{x_2}$ for $U_2=x_2y_2^{1/2}$: the factor of 2 comes from $\frac ab=\frac{1}{1/2}$. Forgetting it corrupts the whole contract curve.

*Related: [[Lec_04-Theory of the Firm, Partial & General Equilibrium]], [[Lec_05-Production Economy & Externalities]]*
