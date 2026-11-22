---
title: "PS9"
subject: maths-for-economists-a
source_doc: /papers/maths-for-economists-a/ps-9.pdf
tags:
  - maths-for-economists-a
  - problem-set
  - differentiability
  - piecewise-functions
  - marginal-cost
  - tangent-line
  - chain-rule
  - inequalities
  - indefinite-integral
ai_drafted: true
questions:
  - id: "1a"
    text: |
      $$
      f(x)=\begin{cases} x\,e^{1/x}, & x<0\\[2pt] \sqrt{x}, & x\ge 0\end{cases}
      $$

      **(a)** Find the domain. **(b)** Find the interval of continuity. **(c)** Use the definition of the derivative: is $f$ differentiable at $x=0$? Is there a tangent line there? **(d)** Is $x=0$ a corner point?

      Lecture: [[Lec_07-The Derivative, Differentiability and Rules]] (definition, corner, cusp, tangent) and [[Lec_04-Limits and Continuity]].

      **(a)** Domain
    solution: |
      ![](/images/maths-for-economists-a/ps09-q1-piecewise-corner.png)

      > [!note] Working reconstructed to reach the printed answer
      > For $x<0$ the expression $xe^{1/x}$ is defined (only $x=0$ is a problem, and $x=0$ belongs to the other piece). For $x\ge 0$, $\sqrt{x}$ is defined. Together the two pieces cover every real number.

      > [!success] Answer (printed)
      > All $x$.
    related_terms: ["piecewise-function", "corner-point", "domain"]
    source_doc_page: 1
  - id: "1b"
    text: |
      $$
      f(x)=\begin{cases} x\,e^{1/x}, & x<0\\[2pt] \sqrt{x}, & x\ge 0\end{cases}
      $$

      **(a)** Find the domain. **(b)** Find the interval of continuity. **(c)** Use the definition of the derivative: is $f$ differentiable at $x=0$? Is there a tangent line there? **(d)** Is $x=0$ a corner point?

      **(b)** Continuity
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Each piece is continuous on its own region, so only the joint $x=0$ needs a check.
      >
      > Left limit: as $x\to0^-$, $\;1/x\to-\infty$, so $e^{1/x}\to0$ and $xe^{1/x}\to 0\cdot0=0$.
      >
      > Right limit: $\sqrt{x}\to 0$. Value: $f(0)=\sqrt0=0$.
      >
      > All three equal $0$, so $f$ is continuous at $0$.

      > [!success] Answer (printed)
      > Continuous for all $x$.
    related_terms: ["continuity"]
    source_doc_page: 1
  - id: "1c"
    text: |
      $$
      f(x)=\begin{cases} x\,e^{1/x}, & x<0\\[2pt] \sqrt{x}, & x\ge 0\end{cases}
      $$

      **(a)** Find the domain. **(b)** Find the interval of continuity. **(c)** Use the definition of the derivative: is $f$ differentiable at $x=0$? Is there a tangent line there? **(d)** Is $x=0$ a corner point?

      **(c)** Differentiability at $0$ by definition
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Compare the two one-sided limits of the difference quotient
      >
      > $$
      > \frac{f(h)-f(0)}{h}.
      > $$
      >
      > From the right ($h>0$):
      >
      > $$
      > \frac{\sqrt{h}-0}{h}=\frac{1}{\sqrt{h}}\longrightarrow +\infty.
      > $$
      >
      > From the left ($h<0$):
      >
      > $$
      > \frac{h\,e^{1/h}-0}{h}=e^{1/h}\longrightarrow e^{-\infty}=0.
      > $$
      >
      > The two one-sided slopes are different ($0$ on the left, $+\infty$ on the right), so the limit does not exist. There is no single line that touches the graph at the joint.

      > [!success] Answer (printed)
      > **No**: not differentiable at $x=0$, and **no** tangent line.
    related_terms: ["tangent-line"]
    source_doc_page: 1
  - id: "1d"
    text: |
      $$
      f(x)=\begin{cases} x\,e^{1/x}, & x<0\\[2pt] \sqrt{x}, & x\ge 0\end{cases}
      $$

      **(a)** Find the domain. **(b)** Find the interval of continuity. **(c)** Use the definition of the derivative: is $f$ differentiable at $x=0$? Is there a tangent line there? **(d)** Is $x=0$ a corner point?

      **(d)** Is $x=0$ a corner point?
    solution: |
      > [!success] Answer (printed)
      > **Yes.**

      > [!tip] Intuition
      > The graph is continuous at $0$ but the direction changes abruptly: it arrives flat from the left and leaves vertically upward on the right. In [[Lec_07-The Derivative, Differentiability and Rules]] the word "corner" is used for two different finite slopes and "cusp" for opposite infinite slopes. Here one slope is finite and one is infinite, and the sheet simply calls the point a corner. Either way: **not differentiable, no tangent line**.
    related_terms: ["tangent-line", "cusp", "corner-point", "continuity"]
    source_doc_page: 1
  - id: "2a"
    text: |
      $$
      C(x)=1000+100x-\frac{x^{2}}{2},\qquad 0\le x\le 100
      $$

      ($C$ in dollars for $x$ units.) **(a)** Marginal cost function. **(b)** Marginal cost at $80$ units and its meaning. **(c)** Exact cost of the $81$st unit, compared with (b). **(d)** $C'(50)$ and its meaning. **(e)** Effect of more units on cost. **(f)** Effect of more units on marginal cost.

      Lecture: [[Lec_09-Marginal Functions and Tangent Lines of Composites]].

      **(a)**
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Marginal cost is the derivative of cost:
      >
      > $$
      > C'(x)=100-x.
      > $$

      > [!success] Answer (printed)
      > $C'(x)=100-x$.
    related_terms: ["marginal-cost"]
    source_doc_page: 1
  - id: "2b"
    text: |
      $$
      C(x)=1000+100x-\frac{x^{2}}{2},\qquad 0\le x\le 100
      $$

      ($C$ in dollars for $x$ units.) **(a)** Marginal cost function. **(b)** Marginal cost at $80$ units and its meaning. **(c)** Exact cost of the $81$st unit, compared with (b). **(d)** $C'(50)$ and its meaning. **(e)** Effect of more units on cost. **(f)** Effect of more units on marginal cost.

      **(b)**
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $C'(80)=100-80=20$.

      > [!success] Answer (printed)
      > $\$20$. At a production level of $80$ units, producing one more unit costs about $\$20$ extra.
    related_terms: []
    source_doc_page: 1
  - id: "2c"
    text: |
      $$
      C(x)=1000+100x-\frac{x^{2}}{2},\qquad 0\le x\le 100
      $$

      ($C$ in dollars for $x$ units.) **(a)** Marginal cost function. **(b)** Marginal cost at $80$ units and its meaning. **(c)** Exact cost of the $81$st unit, compared with (b). **(d)** $C'(50)$ and its meaning. **(e)** Effect of more units on cost. **(f)** Effect of more units on marginal cost.

      **(c)**
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > The exact cost of the $81$st unit is $C(81)-C(80)$.
      >
      > $$
      > C(81)=1000+8100-\frac{6561}{2}=5819.5,\qquad C(80)=1000+8000-3200=5800.
      > $$
      >
      > $$
      > C(81)-C(80)=19.5.
      > $$

      > [!success] Answer (printed)
      > $\$19.5$. It is very close to the marginal cost $\$20$ from (b): the derivative at $80$ is a good approximation of the cost of one more unit.
    related_terms: ["marginal-cost"]
    source_doc_page: 1
  - id: "2d"
    text: |
      $$
      C(x)=1000+100x-\frac{x^{2}}{2},\qquad 0\le x\le 100
      $$

      ($C$ in dollars for $x$ units.) **(a)** Marginal cost function. **(b)** Marginal cost at $80$ units and its meaning. **(c)** Exact cost of the $81$st unit, compared with (b). **(d)** $C'(50)$ and its meaning. **(e)** Effect of more units on cost. **(f)** Effect of more units on marginal cost.

      **(d)**
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $C'(50)=100-50=50$.

      > [!success] Answer (printed)
      > $C'(50)=50$. At $50$ units, one more unit costs about $\$50$.
    related_terms: []
    source_doc_page: 1
  - id: "2e"
    text: |
      $$
      C(x)=1000+100x-\frac{x^{2}}{2},\qquad 0\le x\le 100
      $$

      ($C$ in dollars for $x$ units.) **(a)** Marginal cost function. **(b)** Marginal cost at $80$ units and its meaning. **(c)** Exact cost of the $81$st unit, compared with (b). **(d)** $C'(50)$ and its meaning. **(e)** Effect of more units on cost. **(f)** Effect of more units on marginal cost.

      **(e)**
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $C'(x)=100-x\ge0$ on the whole domain $0\le x\le100$ (it only reaches $0$ at $x=100$). A non-negative derivative means $C$ never falls.

      > [!success] Answer (printed)
      > The cost would increase.
    related_terms: ["domain"]
    source_doc_page: 1
  - id: "2f"
    text: |
      $$
      C(x)=1000+100x-\frac{x^{2}}{2},\qquad 0\le x\le 100
      $$

      ($C$ in dollars for $x$ units.) **(a)** Marginal cost function. **(b)** Marginal cost at $80$ units and its meaning. **(c)** Exact cost of the $81$st unit, compared with (b). **(d)** $C'(50)$ and its meaning. **(e)** Effect of more units on cost. **(f)** Effect of more units on marginal cost.

      **(f)**
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $C''(x)=-1<0$, so $C'$ is decreasing: $C'(50)=50$ but $C'(80)=20$.

      > [!success] Answer (printed)
      > The marginal cost would decrease.

      > [!tip] Intuition
      > Total cost rises, but each extra unit adds less than the previous one (economies of scale): the cost curve is concave.
    related_terms: ["concavity", "marginal-cost"]
    source_doc_page: 1
  - id: "3a"
    text: |
      $$
      N(x)=20000\left(1-\frac{3}{\sqrt{x+10}}\right),\qquad x\ge0
      $$

      where $x$ is advertising spend in thousands of dollars and $N$ is units sold. **(a)** Find $N'(x)$ and show advertising has a positive effect on sales. **(b)** Is the rate of change of sales increasing or decreasing in $x$? **(c)** Compute $N'(15)$ and $N'(26)$ and explain them.

      Lecture: [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] (derivative of a power of a function) and [[Lec_09-Marginal Functions and Tangent Lines of Composites]].

      **(a)**
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Rewrite $N(x)=20000-60000\,(x+10)^{-1/2}$ and use the chain rule:
      >
      > $$
      > N'(x)=-60000\cdot\left(-\tfrac12\right)(x+10)^{-3/2}=\frac{30000}{(x+10)^{3/2}}.
      > $$
      >
      > For $x\ge0$ the denominator is positive, so $N'(x)>0$: more advertising always raises sales.

      > [!success] Answer (printed)
      > $N'(x)=\dfrac{30{,}000}{(x+10)^{3/2}}$, which is positive.
    related_terms: ["chain-rule"]
    source_doc_page: 1
  - id: "3b"
    text: |
      $$
      N(x)=20000\left(1-\frac{3}{\sqrt{x+10}}\right),\qquad x\ge0
      $$

      where $x$ is advertising spend in thousands of dollars and $N$ is units sold. **(a)** Find $N'(x)$ and show advertising has a positive effect on sales. **(b)** Is the rate of change of sales increasing or decreasing in $x$? **(c)** Compute $N'(15)$ and $N'(26)$ and explain them.

      **(b)**
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > As $x$ grows, $(x+10)^{3/2}$ grows, so the fraction $30000/(x+10)^{3/2}$ shrinks. (Equivalently $N''(x)=-45000\,(x+10)^{-5/2}<0$.)

      > [!success] Answer (printed)
      > Decreasing.
    related_terms: []
    source_doc_page: 1
  - id: "3c"
    text: |
      $$
      N(x)=20000\left(1-\frac{3}{\sqrt{x+10}}\right),\qquad x\ge0
      $$

      where $x$ is advertising spend in thousands of dollars and $N$ is units sold. **(a)** Find $N'(x)$ and show advertising has a positive effect on sales. **(b)** Is the rate of change of sales increasing or decreasing in $x$? **(c)** Compute $N'(15)$ and $N'(26)$ and explain them.

      **(c)**
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > N'(15)=\frac{30000}{25^{3/2}}=\frac{30000}{125}=240.
      > $$
      >
      > $$
      > N'(26)=\frac{30000}{36^{3/2}}=\frac{30000}{216}\approx138.9.
      > $$

      > [!success] Answer (printed)
      > $N'(15)=240$ and $N'(26)\approx139$. After spending $\$15$ thousand, one more thousand dollars of advertising brings about $240$ extra units; after $\$26$ thousand it brings only about $139$. Each extra dollar of advertising works less hard (diminishing returns).
    related_terms: []
    source_doc_page: 1
  - id: "4a"
    text: |
      A differentiable $f$ satisfies: the tangent slope at $x=0$ is $1$; the graph meets the $y$-axis at $y=2$; the graph passes through $(1,3)$.

      **(a)** Write the data in function notation. **(b)** For $y_2=f(2x)$ find the tangent line at $x=0$. **(c)** For $y_1=f(x^2+1)$ find the tangent line at $x=0$.

      Lecture: [[Lec_09-Marginal Functions and Tangent Lines of Composites]] and [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]].

      **(a)**
    solution: |
      > [!success] Answer (printed)
      > $f'(0)=1,\quad f(0)=2,\quad f(1)=3.$
    related_terms: []
    source_doc_page: 1
  - id: "4b"
    text: |
      A differentiable $f$ satisfies: the tangent slope at $x=0$ is $1$; the graph meets the $y$-axis at $y=2$; the graph passes through $(1,3)$.

      **(a)** Write the data in function notation. **(b)** For $y_2=f(2x)$ find the tangent line at $x=0$. **(c)** For $y_1=f(x^2+1)$ find the tangent line at $x=0$.

      **(b)**
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Point: $y_2(0)=f(0)=2$.
      >
      > Slope by the chain rule: $y_2'(x)=2f'(2x)$, so $y_2'(0)=2f'(0)=2$.
      >
      > Tangent line: $y-2=2(x-0)$.

      > [!success] Answer (printed)
      > $y=2x+2$.
    related_terms: ["tangent-line", "chain-rule"]
    source_doc_page: 1
  - id: "4c"
    text: |
      A differentiable $f$ satisfies: the tangent slope at $x=0$ is $1$; the graph meets the $y$-axis at $y=2$; the graph passes through $(1,3)$.

      **(a)** Write the data in function notation. **(b)** For $y_2=f(2x)$ find the tangent line at $x=0$. **(c)** For $y_1=f(x^2+1)$ find the tangent line at $x=0$.

      **(c)**
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Point: $y_1(0)=f(0^2+1)=f(1)=3$.
      >
      > Slope: $y_1'(x)=f'(x^2+1)\cdot 2x$, so $y_1'(0)=f'(1)\cdot0=0$. (Whatever $f'(1)$ is, it is multiplied by $0$.)
      >
      > Tangent line: horizontal through $(0,3)$.

      > [!success] Answer (printed)
      > $y=3$.
    related_terms: ["tangent-line"]
    source_doc_page: 1
  - id: "5a"
    text: |
      Lecture: [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] (sign-table method) and [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]] (exponential with base below $1$).

      **(a)** $\;20x^2-7x-6<0$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Roots: $x=\dfrac{7\pm\sqrt{49+480}}{40}=\dfrac{7\pm23}{40}$, so $x=\tfrac34$ and $x=-\tfrac25$.
      >
      > The parabola opens upward, so it is negative between its roots.

      > [!success] Answer (printed)
      > $-\dfrac25<x<\dfrac34$.
    related_terms: []
    source_doc_page: 2
  - id: "5b"
    text: |
      **(b)** $\;1\ge\dfrac{2x+9}{x^{2}-9}$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Move everything to one side (never multiply by $x^2-9$, its sign changes):
      >
      > $$
      > \frac{x^2-9-(2x+9)}{x^2-9}\ge0\;\Longrightarrow\;\frac{x^2-2x-18}{(x-3)(x+3)}\ge0.
      > $$
      >
      > Numerator roots: $x=1\pm\sqrt{19}\approx-3.36,\;5.36$. Denominator zeros: $x=\pm3$ (excluded).
      >
      > Signs, left to right: $+$ for $x<-3.36$, $-$ on $(-3.36,-3)$, $+$ on $(-3,3)$, $-$ on $(3,5.36)$, $+$ for $x>5.36$. Keep the $+$ regions, include the numerator roots (the inequality is $\ge$), exclude $\pm3$.

      > [!success] Answer (printed)
      > $x\le-3.36$, $\;-3<x<3$, $\;x\ge5.36$.

      > [!warning] Typo in the printed answer
      > The sheet prints the middle interval as "$3<x<3$", which is empty. My check (test $x=0$: $\frac{-18}{-9}=2>0$, so $0$ is a solution) gives $-3<x<3$; the minus sign was lost in print. The other two intervals match.
    related_terms: []
    source_doc_page: 2
  - id: "5c"
    text: |
      **(c)** $\;0.09<0.3^{\,x^{2}}$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Write $0.09=0.3^2$, so the inequality is $0.3^2<0.3^{x^2}$.
      >
      > The base $0.3$ is below $1$, so the exponential is **decreasing** and the inequality of exponents **flips**: $2>x^2$.

      > [!success] Answer (printed)
      > $-\sqrt2<x<\sqrt2$.
    related_terms: []
    source_doc_page: 2
  - id: "5d"
    text: |
      **(d)** $\;x^{2}+0.5<0$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $x^2\ge0$, so $x^2+0.5\ge0.5>0$ for every $x$. It is never negative.

      > [!success] Answer (printed)
      > No solution.
    related_terms: []
    source_doc_page: 2
  - id: "6"
    text: |
      $$
      C'(x)=-4x^{3}+3x^{2}+2x+4,\qquad C(1)=8.
      $$

      Find $C(x)$. Lecture: [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] (indefinite integral).
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Integrate term by term and keep the constant $K$:
      >
      > $$
      > C(x)=-x^{4}+x^{3}+x^{2}+4x+K.
      > $$
      >
      > Use $C(1)=8$: $-1+1+1+4+K=8$, so $5+K=8$ and $K=3$.

      > [!success] Answer (printed)
      > $C(x)=-x^{4}+x^{3}+x^{2}+4x+3$.

      > [!tip] Intuition
      > The derivative forgets the fixed cost; the extra condition $C(1)=8$ pins the constant down.
    related_terms: ["chain-rule", "indefinite-integral"]
    source_doc_page: 2
---
