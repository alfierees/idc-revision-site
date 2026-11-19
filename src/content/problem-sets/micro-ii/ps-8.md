---
title: "PS8"
subject: micro-ii
source_doc: /papers/micro-ii/ps-8.pdf
tags:
  - micro-economics-ii
  - production-economy
  - efficiency-locus
  - edgeworth-box
  - ppf
  - rpt
  - mrs
  - rts
  - cobb-douglas
  - constant-returns-to-scale
  - comparative-statics
ai_drafted: true
questions:
  - id: "1a"
    text: |
      Consider the following production economy: $f_1(l_1,k_1)=l_1k_1$ and $f_2(l_2,k_2)=l_2k_2^{1/2}$, where $L=20$ and $K=30$.

      **(a)** Present the efficiency locus as the set of input bundles $(l_1,k_1)$ for firm 1.
    solution: |
      > [!info] The recipe
      > Input efficiency requires equal technical rates of substitution, $RTS_1=RTS_2$ with $RTS_i = MP_{l_i}/MP_{k_i}$. The set of input splits satisfying it is the [[Efficiency Locus]].

      **Firm 1.** $f_1=l_1k_1$, so $MP_{l_1}=k_1$ and $MP_{k_1}=l_1$:

      $$
      RTS_1 = \frac{k_1}{l_1}.
      $$

      **Firm 2.** $f_2=l_2k_2^{1/2}$, so $MP_{l_2}=k_2^{1/2}$ and $MP_{k_2}=\tfrac12 l_2k_2^{-1/2}$:

      $$
      RTS_2 = \frac{k_2^{1/2}}{\tfrac12 l_2 k_2^{-1/2}} = \frac{2k_2}{l_2}.
      $$

      **Equate**, eliminating firm 2's inputs with $k_2=30-k_1$ and $l_2=20-l_1$:

      $$
      \frac{k_1}{l_1} = \frac{2(30-k_1)}{20-l_1}.
      $$

      Cross-multiply and collect the $k_1$ terms:

      $$
      k_1(20-l_1) = 2l_1(30-k_1)
      $$

      $$
      20k_1 - k_1l_1 = 60l_1 - 2k_1l_1
      $$

      $$
      k_1(20+l_1) = 60\,l_1.
      $$

      > [!success] Efficiency locus
      >
      > $$
      > k_1 = \frac{60\,l_1}{20+l_1}
      > $$
      >
      > Corner checks: $l_1=0\Rightarrow k_1=0$ (the $O_1$ corner) and $l_1=20\Rightarrow k_1=30$ (the $O_2$ corner). The locus is a concave curve from $O_1$ to $O_2$, not the diagonal, because the two firms have different technologies.

      > [!tip] Check
      > The diagonal of this box is $k_1=1.5\,l_1$. At $l_1=10$ the locus gives $k_1=20$, above the diagonal's 15.

      ![](/images/micro-ii/ps08-q1-efficiency-locus-and-ppf.png)

      *Left: the input Edgeworth box with the efficiency locus; A and C (from the parts below) lie on it, B lies just below it. Right: the same three allocations in output space; B is strictly inside the PPF and A has the lowest utility. The PPF is traced by plugging each locus point into $x=l_1k_1$, $y=(20-l_1)\sqrt{30-k_1}$.*
    related_terms: ["efficiency-locus", "rts", "marginal-physical-product", "production-function", "production-economy", "edgeworth-box", "pareto-efficiency"]
    source_doc_page: 1
  - id: "1bi"
    text: |
      Same economy as in part (a): $f_1=l_1k_1$, $f_2=l_2k_2^{1/2}$, $L=20$, $K=30$. The representative consumer's utility is $U(x,y)=x\cdot y$.

      **(b)(i)** Consider the allocation $(l_1,k_1)=(5,12)$ and $(l_2,k_2)=(15,18)$. Show that it is Pareto efficient.
    solution: |
      An allocation is efficient exactly when it satisfies the locus $k_1=\frac{60\,l_1}{20+l_1}$ and uses up the resources.

      $$
      k_1 = \frac{60\cdot 5}{20+5} = \frac{300}{25} = 12 \quad\checkmark
      $$

      Resources are exhausted: $5+15=20=L$ and $12+18=30=K$.

      > [!success] Answer
      > The point lies on the efficiency locus and exhausts $L$ and $K$, so it is efficient (call it point **A**).

      > [!tip] Direct check
      > $RTS_1=12/5=2.4$ and $RTS_2=2\cdot 18/15=2.4$. Equal, as required.

      > [!warning] "Pareto efficient" here means input-efficient
      > The test only checks $RTS_1=RTS_2$, i.e. efficiency in production. It does not check $MRS=RPT$ on the output side. A is on the PPF but, as part (iii) shows, it is far from the consumer's best point on it.
    related_terms: ["efficiency-locus", "rts", "pareto-efficiency", "production-economy", "ppf"]
    source_doc_page: 1
  - id: "1bii"
    text: |
      Same economy and utility $U(x,y)=x\cdot y$ as in part (b).

      **(b)(ii)** Consider the allocation $(l_1,k_1)=(10,18)$ and $(l_2,k_2)=(10,12)$. Show that it is not Pareto efficient.
    solution: |
      Test the allocation against the locus:

      $$
      k_1 = \frac{60\cdot 10}{20+10} = \frac{600}{30} = 20 \neq 18.
      $$

      > [!success] Answer
      > The point is not on the efficiency locus, so it is not efficient (point **B**). The value is exactly 20, so B is 2 units of capital short for firm 1.

      Directly: $RTS_1=18/10=1.8$ but $RTS_2=2\cdot 12/10=2.4$. Firm 2 values labour relatively more than firm 1 does, so reallocating inputs between the firms raises output of one good without lowering the other.
    related_terms: ["efficiency-locus", "rts", "pareto-efficiency", "production-economy"]
    source_doc_page: 1
  - id: "1biii"
    text: |
      Same economy and utility $U(x,y)=x\cdot y$ as in part (b).

      **(b)(iii)** Show that the representative consumer prefers the latter allocation, $(10,18)/(10,12)$, over the former, $(5,12)/(15,18)$.
    solution: |
      Evaluate utility at each allocation.

      **Allocation A**, $(5,12)/(15,18)$:

      $$
      x=f_1=5\cdot 12=60, \qquad y=f_2=15\sqrt{18}=45\sqrt2\approx 63.64,
      $$

      $$
      U_A = 60\cdot 45\sqrt2 \approx 3818.
      $$

      **Allocation B**, $(10,18)/(10,12)$:

      $$
      x=10\cdot 18=180, \qquad y=10\sqrt{12}=20\sqrt3\approx 34.64,
      $$

      $$
      U_B = 180\cdot 20\sqrt3 \approx 6235.
      $$

      > [!success] Answer
      > $U_B\approx 6235 > U_A\approx 3818$, so the consumer strictly prefers the inefficient allocation B to the efficient allocation A.

      > [!warning] Exam trap
      > Efficient does not mean better for the consumer. A is on the PPF but produces too much $y$ and too little $x$ for $U=xy$. B is inside the PPF yet sits much closer to the consumer's preferred mix. Efficiency says nothing about which efficient point is best; only $MRS=RPT$ does.
    related_terms: ["ppf", "production-economy", "pareto-efficiency", "mrs", "rpt"]
    source_doc_page: 1
  - id: "1biv"
    text: |
      Same economy and utility $U(x,y)=x\cdot y$ as in part (b).

      **(b)(iv)** Find an allocation on the efficiency locus that is better for the consumer than the latter allocation, $(10,18)/(10,12)$.
    solution: |
      Keep the same labour split as B ($l_1=10$) and move to the locus:

      $$
      k_1=\frac{60\cdot 10}{30}=20, \quad\text{so}\quad (l_1,k_1)=(10,20),\ (l_2,k_2)=(10,10).
      $$

      $$
      x=10\cdot 20=200, \qquad y=10\sqrt{10}\approx 31.62,
      $$

      $$
      U_C = 200\cdot 31.62 \approx 6324.
      $$

      > [!success] Answer
      > $(l_1,k_1)=(10,20)$ and $(l_2,k_2)=(10,10)$ is on the efficiency locus and gives $U\approx 6324 > 6235 = U_B$ (point **C**). It is a Pareto improvement over B: the same labour, with the 2 units of capital that B misallocated reallocated efficiently.

      > [!warning] C is not claimed to be optimal
      > The question only asks for an efficient point that beats B. Finding the utility-maximising point on the PPF (where $MRS=RPT$) is not required here.
    related_terms: ["efficiency-locus", "ppf", "pareto-efficiency", "production-economy"]
    source_doc_page: 1
  - id: "2a"
    text: |
      Consider the following production economy: the firms' production functions are $f_1(l_1,k_1)=l_1^{1/2}k_1^{1/2}$ and $f_2(l_2,k_2)=l_2^{1/2}k_2^{1/2}$. The representative consumer's utility function is $U(x,y)=x^{1/2}y^{1/2}$ and the resource constraints are $k_1+k_2=K$ and $l_1+l_2=L$.

      **(a)** Find the optimal allocation (i.e., the allocation of inputs among the firms and the produced bundle) as a function of $K$ and $L$.
    solution: |
      > [!info] The two-step recipe
      > **Step 1, input efficiency:** $RTS_1=RTS_2$ gives the [[Efficiency Locus]] and, mapped into outputs, the [[PPF]]. **Step 2, output efficiency:** pick the point on the PPF where $MRS=RPT$.

      **Efficiency locus.** Both firms have $MP_{l_i}=\tfrac12 l_i^{-1/2}k_i^{1/2}$ and $MP_{k_i}=\tfrac12 l_i^{1/2}k_i^{-1/2}$, so $RTS_i=k_i/l_i$. Equalising and using $k_2=K-k_1$, $l_2=L-l_1$:

      $$
      \frac{k_1}{l_1}=\frac{K-k_1}{L-l_1} \;\Rightarrow\; k_1L-k_1l_1=l_1K-k_1l_1 \;\Rightarrow\; k_1=\frac{K}{L}\,l_1.
      $$

      With identical technologies the locus is the diagonal of the box: both firms use the same capital-labour ratio $K/L$.

      **PPF.** Substituting $k_1=l_1K/L$ into each production function:

      $$
      x = l_1\left(\frac{K}{L}\right)^{1/2}, \qquad y=(L-l_1)\left(\frac{K}{L}\right)^{1/2}.
      $$

      Eliminating $l_1$ gives a straight line, so $RPT=1$ at every point:

      $$
      y=\sqrt{LK}-x.
      $$

      **$MRS=RPT$.** For $U=x^{1/2}y^{1/2}$, $MRS=y/x$. Setting $MRS=RPT=1$ gives $x=y$, and substituting into the PPF:

      $$
      x^*=y^*=\frac{\sqrt{LK}}{2}.
      $$

      **Back out the inputs.** From $x^*=l_1(K/L)^{1/2}$ we get $l_1=\frac{L}{2}$, hence $l_2=\frac{L}{2}$ and $k_1=k_2=\frac{K}{2}$.

      > [!success] Answer
      >
      > $$
      > x^*=y^*=\frac{\sqrt{LK}}{2}, \qquad l_1=l_2=\frac{L}{2}, \qquad k_1=k_2=\frac{K}{2}.
      > $$
      >
      > Split every input equally between the two firms and consume equal amounts of $x$ and $y$: the economy sits at the exact centre of the Edgeworth box.
    related_terms: ["efficiency-locus", "rts", "ppf", "rpt", "mrs", "cobb-douglas-production-function", "constant-returns-to-scale", "production-economy", "edgeworth-box", "marginal-physical-product"]
    source_doc_page: 2
  - id: "2b"
    text: |
      Same economy as in part (a).

      **(b)** Show that the optimal allocation is homogeneous of degree 1 in $K$ and $L$, i.e., if we look at resources $t\cdot K$ and $t\cdot L$, the optimal allocation that you found in clause (a) is multiplied by $t$.
    solution: |
      Replace $(K,L)$ by $(tK,tL)$ in the answer to (a):

      $$
      x^*_{new}=y^*_{new}=\frac{\sqrt{tL\cdot tK}}{2}=\frac{t\sqrt{LK}}{2}=t\,x^*,
      $$

      $$
      k_1^{new}=k_2^{new}=\frac{tK}{2}=t\,k_1, \qquad l_1^{new}=l_2^{new}=\frac{tL}{2}=t\,l_1.
      $$

      > [!success] Answer
      > Every component of the optimal allocation, both inputs and outputs, is multiplied by $t$. The optimum is [[Homogeneity of Degree 1|homogeneous of degree 1]] in $(K,L)$.
    related_terms: ["homogeneity-of-degree-1", "constant-returns-to-scale", "production-economy"]
    source_doc_page: 2
  - id: "2c"
    text: |
      Same economy as in parts (a) and (b).

      **(c)** Provide an economic explanation for your result.
    solution: |
      Both goods are produced with the **same** production function, which has [[Constant Returns to Scale|constant returns to scale]]. Multiplying all resources by $t$ therefore multiplies the whole PPF by $t$. The relative optimal allocation does not change (still the centre of the box, still $x=y$), so every amount scales by $t$.

      > [!tip] Intuition
      > With constant returns, doubling the economy is the same as replicating it: two copies of the original economy, each with its own half-sized firms, can do exactly what the original did. Output doubles and the shares stay the same. On the PPF, $\sqrt{tL\cdot tK}=t\sqrt{LK}$ is what makes the intercepts scale linearly.
    related_terms: ["constant-returns-to-scale", "homogeneity-of-degree-1", "ppf", "production-economy"]
    source_doc_page: 2
  - id: "3a"
    text: |
      Consider the following production economy: the firms' production functions are $f_1(l_1,k_1)=l_1^{a}k_1^{1-a}$ and $f_2(l_2,k_2)=l_2^{a}k_2^{1-a}$ where $0<a<1$. The representative consumer's utility function is $U(x,y)=x^{\alpha}y^{1-\alpha}$ and the resource constraints are $k_1+k_2=A$ and $l_1+l_2=A$.

      > [!info] A note on the printed question
      > The printed question says "$0<a<1$ and $0<b<1$", but there is no $b$ anywhere in the problem. This is a typo; only $0<a<1$ is used.

      **Solve the optimal allocation as a function of the parameters.**
    solution: |
      **Efficiency locus.** Marginal products are $MP_{l_i}=a\,l_i^{a-1}k_i^{1-a}$ and $MP_{k_i}=(1-a)\,l_i^{a}k_i^{-a}$, so

      $$
      RTS_i=\frac{a\,k_i}{(1-a)\,l_i}.
      $$

      Equalising $RTS_1=RTS_2$, the factor $\frac{a}{1-a}$ cancels:

      $$
      \frac{k_1}{l_1}=\frac{k_2}{l_2}=\frac{A-k_1}{A-l_1} \;\Rightarrow\; k_1=l_1.
      $$

      The locus is the diagonal of the box and does not depend on $a$.

      **PPF.** With $k_1=l_1$ and $k_2=l_2=A-l_1$, both firms are linear in labour:

      $$
      x=l_1^{a}l_1^{1-a}=l_1, \qquad y=(A-l_1)^{a}(A-l_1)^{1-a}=A-l_1,
      $$

      so the PPF is $y=A-x$ and $RPT=1$ everywhere. Again $a$ drops out.

      **$MRS=RPT$.** For $U=x^{\alpha}y^{1-\alpha}$, $MRS=\frac{\alpha}{1-\alpha}\cdot\frac{y}{x}$. Setting it equal to 1 gives $x=\frac{\alpha}{1-\alpha}y$. Substituting into $y=A-x$:

      $$
      \frac{y}{1-\alpha}=A \;\Rightarrow\; y^*=(1-\alpha)A, \quad x^*=\alpha A.
      $$

      **Inputs.** Since $x=l_1=k_1$:

      > [!success] Answer
      >
      > $$
      > x^*=\alpha A, \quad y^*=(1-\alpha)A, \quad l_1=k_1=\alpha A, \quad l_2=k_2=(1-\alpha)A.
      > $$
      >
      > The technology parameter $a$ plays no role: with identical Cobb-Douglas technologies the locus is the diagonal and the PPF is the line $y=A-x$ whatever $a$ is.
    related_terms: ["efficiency-locus", "rts", "ppf", "rpt", "mrs", "cobb-douglas-production-function", "constant-returns-to-scale", "production-economy", "edgeworth-box", "marginal-physical-product"]
    source_doc_page: 2
  - id: "3b"
    text: |
      Same economy as in part (3a).

      Show graphically, using the Edgeworth box and the production possibility frontier, the changes that occur in the optimal allocation of inputs and, consequently, in the optimal bundle of consumption when **(1) the parameter $\alpha$ increases**. Provide an economic explanation for your result.
    solution: |
      The consumer cares relatively more about $x$.

      - **Edgeworth box:** the box and the diagonal locus are unchanged (neither depends on $\alpha$). The optimal point slides up the diagonal away from $O_1$: $(l_1,k_1)=(\alpha A,\alpha A)$ with $\alpha$ larger, so firm 1 gets more of both inputs and firm 2 less.
      - **PPF:** the line $y=A-x$ does not move. The optimal bundle slides down and to the right along it: more $x$ ($x^*=\alpha A$ rises), less $y$ ($y^*=(1-\alpha)A$ falls).

      > [!success] Answer
      > Nothing shifts. The economy just reallocates both inputs towards firm 1 and the output mix towards $x$, moving from B to C along the diagonal in the box and along the fixed PPF.

      > [!tip] Intuition
      > Since $RPT=1$, the economy can trade one unit of $y$ for one unit of $x$ at any point. A stronger taste for $x$ makes the consumer willing to give up more $y$ for it, so resources shift to the $x$-firm until $MRS=1$ again. The shift costs nothing in efficiency because the locus is the same diagonal throughout.

      > [!todo] Explanation is an addition
      > The source slide for this part shows the picture only; the economic explanation above is an addition, not taken from the recitation.

      ![](/images/micro-ii/ps08-q3-comparative-statics.png)

      *Schematic, no numerical scale: B is the point before the change, C the point after. Top row: $\alpha$ rises. Bottom row: $A$ rises. Left column: Edgeworth box; right column: PPF.*
    related_terms: ["efficiency-locus", "ppf", "rpt", "mrs", "edgeworth-box", "production-economy"]
    source_doc_page: 2
  - id: "3c"
    text: |
      Same economy as in part (3a).

      Show graphically, using the Edgeworth box and the production possibility frontier, the changes that occur in the optimal allocation of inputs and, consequently, in the optimal bundle of consumption when **(2) the parameter $A$ increases**. Provide an economic explanation for your result.
    solution: |
      More of both inputs is available.

      - **Edgeworth box:** the box becomes a larger square. The diagonal locus stretches with it, and the optimal point $(l_1,k_1)=(\alpha A,\alpha A)$ moves out along the diagonal (the same share $\alpha$ of a bigger box).
      - **PPF:** $y=A-x$ shifts outward and parallel, with intercepts $A$ on both axes. The optimal bundle moves out along the ray with slope $\frac{1-\alpha}{\alpha}$: $(x^*,y^*)=A\,(\alpha,1-\alpha)$.

      > [!success] Answer
      > Both the box and the PPF expand; the optimal point moves outward along the diagonal in the box and along a ray in output space, so both $x^*$ and $y^*$ rise in proportion to $A$.

      > [!tip] Intuition
      > This is the same constant-returns logic as Q2(c): scaling both inputs by $A$ scales the PPF by $A$, and the consumer's preferred shares $(\alpha,1-\alpha)$ do not depend on $A$, so every quantity scales with $A$. Higher $\alpha$ changes the mix; higher $A$ changes the scale.

      > [!todo] Explanation is an addition
      > The source slide for this part shows the picture only; the economic explanation above is an addition, not taken from the recitation.
    related_terms: ["constant-returns-to-scale", "homogeneity-of-degree-1", "ppf", "edgeworth-box", "production-economy"]
    source_doc_page: 2
---

*Related: [[Lec_05-Production Economy & Externalities]], [[Lec_04-Theory of the Firm, Partial & General Equilibrium]]*
