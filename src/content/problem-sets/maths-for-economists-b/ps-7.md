---
title: "PS7"
subject: maths-for-economists-b
source_doc: /papers/maths-for-economists-b/ps-7.pdf
tags:
  - maths-for-economists-b
  - problem-set
  - partial-derivative
  - marginal-profit
  - total-differential
  - cobb-douglas
  - implicit-differentiation
ai_drafted: true
questions:
  - id: "1"
    text: |
      The production potential of a factory is given by the Cobb-Douglas function $f(x,y)=9x^{2/3}y^{1/3}$, where $x$ is the number of work units and $y$ the number of investment units. Currently $x=64$ and $y=125$.

      How does production change if one more work unit is used? How does it change if one more investment unit is used?
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      "One more unit" is the marginal effect, i.e. the partial derivative at the current point.

      **Work.** $f'_x=9\cdot\frac23x^{-1/3}y^{1/3}=6\,x^{-1/3}y^{1/3}$. At $(64,125)$: $64^{1/3}=4$, $125^{1/3}=5$:

      $$
      f'_x(64,125)=6\cdot\frac{5}{4}=7.5.
      $$

      **Investment.** $f'_y=9\cdot\frac13x^{2/3}y^{-2/3}=3\,x^{2/3}y^{-2/3}$. At $(64,125)$: $64^{2/3}=16$, $125^{2/3}=25$:

      $$
      f'_y(64,125)=3\cdot\frac{16}{25}=1.92.
      $$

      > [!success] Answer
      > One more work unit raises production by about **7.5**; one more investment unit raises it by about **1.92**. (The sheet prints "7.5 or 1.92", one per sub-question in this order.)
    related_terms: ["partial-derivative"]
    source_doc_page: 1
  - id: "2a"
    text: |
      A factory's daily cost of producing $x$ units of product A and $y$ units of product B is $C(x,y)=2x^2+3y^2-100x$. Product A sells at the price $(100-x+2y)$ and product B at the price $(160-y+2x)$.

      Find the profit function $P(x,y)$.
    solution: "TODO"
    related_terms: ["marginal-profit"]
    source_doc_page: 1
  - id: "2b"
    text: |
      A factory's daily cost of producing $x$ units of product A and $y$ units of product B is $C(x,y)=2x^2+3y^2-100x$. Product A sells at the price $(100-x+2y)$ and product B at the price $(160-y+2x)$.

      The factory now makes 40 units of product A. How many units of product B should it make so that the profit gain from one more unit of A equals the profit gain from one more unit of B?
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      **Marginal profits.** Profit is revenue minus cost. Revenue is $x(100-x+2y)+y(160-y+2x)$. Subtracting $C$:

      $$
      P=-3x^2-4y^2+4xy+200x+160y.
      $$

      $$
      P'_x=-6x+4y+200, \qquad P'_y=-8y+4x+160.
      $$

      **At $x=40$:**

      $$
      P'_x=-240+4y+200=4y-40, \qquad P'_y=-8y+160+160=320-8y.
      $$

      **Set them equal:**

      $$
      4y-40=320-8y \;\Longrightarrow\; 12y=360 \;\Longrightarrow\; y=30.
      $$

      > [!success] Answer
      > **30 units** of product B.

      > [!tip] Intuition
      > This is not the profit maximum (that needs both marginals equal to zero, see PS 8 Q2). It only asks that the two marginal profits be equal at $x=40$.
    related_terms: ["marginal-profit", "partial-derivative"]
    source_doc_page: 1
  - id: "3"
    text: |
      The production potential of a factory is given by the Cobb-Douglas function $f(x,y)=9x^{2/3}y^{1/3}$, where $x$ is the number of work units and $y$ the number of investment units. Currently $x=64$ and $y=125$.

      Estimate the change in production if the factory uses 65 work units and 123 investment units.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Here $dx=65-64=1$ and $dy=123-125=-2$. Using Q1's marginals $f'_x=7.5$ and $f'_y=1.92$:

      $$
      df=f'_x\,dx+f'_y\,dy=7.5(1)+1.92(-2)=7.5-3.84=3.66.
      $$

      > [!success] Answer
      > Production would rise by about **3.66** units.
    related_terms: ["total-differential", "partial-derivative"]
    source_doc_page: 1
  - id: "4a"
    text: |
      A marketing manager found that monthly sales are $S(x,y)=100+3x+15y+xy$ units, where $x$ is the number of minutes of radio advertising per day and $y$ the number of minutes of television advertising per day.

      Find the monthly sales when $x=100$ and $y=20$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      S(100,20)=100+300+300+2000=2700.
      $$

      > [!success] Answer
      > **2700** units per month.
    related_terms: []
    source_doc_page: 1
  - id: "4b"
    text: |
      Monthly sales are $S(x,y)=100+3x+15y+xy$, with $x$ radio minutes and $y$ television minutes per day.

      Find $y'_x(100,20)$ on the curve $S=2700$, and explain what it means.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      The point is on the curve by part a. Partials: $S'_x=3+y$ and $S'_y=15+x$. At $(100,20)$: $S'_x=23$ and $S'_y=115$.

      $$
      y'_x=-\frac{S'_x}{S'_y}=-\frac{23}{115}=-0.2.
      $$

      > [!success] Answer
      > $y'_x(100,20)=-0.2$.
      > **Meaning:** holding monthly sales at 2700, each extra radio minute per day lets television time fall by about 0.2 minutes per day. Equivalently, about 5 radio minutes substitute for 1 television minute.
    related_terms: ["implicit-differentiation", "partial-derivative", "level-curve"]
    source_doc_page: 1
  - id: "4c"
    text: |
      Monthly sales are $S(x,y)=100+3x+15y+xy$, with $x$ radio minutes and $y$ television minutes per day.

      Estimate the gain in monthly sales from advertising one more minute on radio and one more minute on television.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      With $dx=dy=1$:

      $$
      dS=S'_x\,dx+S'_y\,dy=23(1)+115(1)=138.
      $$

      > [!success] Answer
      > About **138** more units per month.
    related_terms: ["total-differential", "partial-derivative"]
    source_doc_page: 1
  - id: "5"
    text: |
      Given $f(x_1,\dots,x_n)=\sum_{i=1}^{n}x_i^2$, show that $\sum_{j=1}^{n}x_j\dfrac{\partial f}{\partial x_j}=2f$.
    solution: "TODO"
    related_terms: ["partial-derivative", "summation-rules"]
    source_doc_page: 1
---

*Related: [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_06-Partial Derivatives and the Differential]]*
