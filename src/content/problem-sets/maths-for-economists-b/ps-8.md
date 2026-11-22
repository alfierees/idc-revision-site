---
title: "PS8"
subject: maths-for-economists-b
source_doc: /papers/maths-for-economists-b/ps-8.pdf
tags:
  - maths-for-economists-b
  - problem-set
  - critical-point
  - local-extremum
  - saddle-point
  - second-derivative-test
  - implicit-differentiation
ai_drafted: true
questions:
  - id: "1a"
    text: |
      Find all critical points of the function and check whether each is a local minimum, local maximum or saddle point:

      $$
      f(x,y) = 2x^2+xy+y^2-15x-9y
      $$
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      f'_x=4x+y-15, \qquad f'_y=x+2y-9.
      $$

      From the first, $y=15-4x$. Substituting: $x+30-8x-9=0$, so $x=3$ and $y=3$.

      Second derivatives (constants): $f_{xx}=4$, $f_{yy}=2$, $f_{xy}=1$, so $D=8-1=7>0$ with $f_{xx}>0$.

      > [!success] Answer
      > $(3,3)$ is a local **minimum**.
    related_terms: ["critical-point", "local-extremum", "saddle-point", "second-derivative-test", "partial-derivative", "second-partial-derivative"]
    source_doc_page: 1
  - id: "1b"
    text: |
      Find all critical points of the function and check whether each is a local minimum, local maximum or saddle point:

      $$
      f(x,y) = y\ln x-x^2-y
      $$
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      f'_x=\frac yx-2x, \qquad f'_y=\ln x-1.
      $$

      $f'_y=0$ gives $x=e$. Then $f'_x=0$ gives $y=2x^2=2e^2$.

      Second derivatives (from PS 6 Q6b): $f_{xx}=-\frac{y}{x^2}-2$, $f_{yy}=0$, $f_{xy}=\frac1x$. At $(e,2e^2)$: $f_{xx}=-2-2=-4$, $f_{yy}=0$, $f_{xy}=\frac1e$.

      $$
      D=(-4)(0)-\frac{1}{e^2}=-\frac{1}{e^2}<0.
      $$

      > [!success] Answer
      > $(e,2e^2)$ is a **saddle point**.
    related_terms: ["critical-point", "local-extremum", "saddle-point", "second-derivative-test", "partial-derivative", "second-partial-derivative"]
    source_doc_page: 1
  - id: "1c"
    text: |
      Find all critical points of the function and check whether each is a local minimum, local maximum or saddle point:

      $$
      f(x,y) = e^{-(x^2+y^2-2x)}
      $$
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      With $E=e^{-(x^2+y^2-2x)}>0$: $f'_x=(2-2x)E$ and $f'_y=-2yE$. Since $E\neq0$, we need $x=1$ and $y=0$.

      Second derivatives (from PS 6 Q6a) at $(1,0)$, where $E=e^{1}=e$: $f_{xx}=e(4-8+2)=-2e$, $f_{yy}=e(0-2)=-2e$, $f_{xy}=4(1-1)\cdot0\cdot e=0$.

      $$
      D=(-2e)(-2e)-0=4e^2>0, \qquad f_{xx}<0.
      $$

      > [!success] Answer
      > $(1,0)$ is a local **maximum**.
    related_terms: ["critical-point", "local-extremum", "saddle-point", "second-derivative-test", "partial-derivative", "second-partial-derivative"]
    source_doc_page: 1
  - id: "2"
    text: |
      A factory's daily cost is $C=2x^2+3y^2-100x$. Product A sells at the price $100-x+2y$ and product B at the price $160-y+2x$ (the factory from Exercise 7, Q2).

      Go back to your answer for the profit function. For which values of $x$ and $y$ is daily profit maximised?
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Profit is revenue minus cost:

      $$
      P(x,y)=x(100-x+2y)+y(160-y+2x)-C=-3x^2-4y^2+4xy+200x+160y.
      $$

      **First-order conditions.**

      $$
      P'_x=-6x+4y+200=0, \qquad P'_y=4x-8y+160=0.
      $$

      From the second, $x=2y-40$. Substituting: $-12y+240+4y+200=0$, so $y=55$ and $x=70$.

      **Check it is a maximum.** $P_{xx}=-6$, $P_{yy}=-8$, $P_{xy}=4$:

      $$
      D=(-6)(-8)-4^2=32>0, \qquad P_{xx}<0.
      $$

      > [!success] Answer
      > **70 units of A and 55 units of B**, a local maximum.
    related_terms: ["critical-point", "local-extremum", "saddle-point", "second-derivative-test", "marginal-profit", "first-order-conditions", "optimization-problem"]
    source_doc_page: 1
  - id: "3"
    text: |
      Find all critical points of $f(x,y)=xy^3-2x^3+2x^2-3xy$ and check whether each is a local minimum, local maximum or saddle point.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      **Gradient.**

      $$
      f'_x=y^3-6x^2+4x-3y, \qquad f'_y=3xy^2-3x=3x(y^2-1).
      $$

      **Solve $f'_y=0$:** either $x=0$ or $y=\pm1$.

      - **Case $x=0$.** $f'_x=y^3-3y=y(y^2-3)=0$ gives $y=0$ or $y=\pm\sqrt3$. Points: $(0,0)$, $(0,\sqrt3)$, $(0,-\sqrt3)$.
      - **Case $y=1$.** $f'_x=1-6x^2+4x-3=-6x^2+4x-2=0$, i.e. $3x^2-2x+1=0$. The discriminant is $4-12<0$, so **no** real solution.
      - **Case $y=-1$.** $f'_x=-1-6x^2+4x+3=0$, i.e. $3x^2-2x-1=0$, so $x=1$ or $x=-\tfrac13$. Points: $(1,-1)$, $\left(-\tfrac13,-1\right)$.

      **Second derivatives.** $f_{xx}=-12x+4$, $f_{yy}=6xy$, $f_{xy}=3y^2-3$.

      | Point | $f_{xx}$ | $f_{yy}$ | $f_{xy}$ | $D=f_{xx}f_{yy}-f_{xy}^2$ | Type |
      |---|---|---|---|---|---|
      | $(0,0)$ | $4$ | $0$ | $-3$ | $-9$ | saddle |
      | $(0,\sqrt3)$ | $4$ | $0$ | $6$ | $-36$ | saddle |
      | $(0,-\sqrt3)$ | $4$ | $0$ | $6$ | $-36$ | saddle |
      | $(1,-1)$ | $-8$ | $-6$ | $0$ | $48$ | local max |
      | $\left(-\tfrac13,-1\right)$ | $8$ | $2$ | $0$ | $16$ | local min |

      ![](/images/maths-for-economists-b/ps08-q3-critical-points.png)

      The contour map shows the five points: the maximum at $(1,-1)$ sits in closed loops, the minimum at $(-\tfrac13,-1)$ in a small loop, and the three saddles lie on the line $x=0$ where contours cross.

      > [!success] Answer
      > $(0,0)$ saddle, $(0,\pm\sqrt3)$ saddle, $(1,-1)$ local max, $\left(-\tfrac13,-1\right)$ local min.
    related_terms: ["critical-point", "local-extremum", "saddle-point", "second-derivative-test", "partial-derivative", "second-partial-derivative"]
    source_doc_page: 1
  - id: "4a"
    text: |
      Given $u(x,y)=ax^2+2bxy+cy^2$.

      Let $a=1$, $b=1$, $c=2$ and define $g(x,y)=u(\ln x,\,2y)$. Show that the point $(e,1)$ lies on the curve $g(x,y)=13$ and find $\dfrac{dy}{dx}$ at that point.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      With these parameters $u(s,t)=s^2+2st+2t^2$. Substitute $s=\ln x$, $t=2y$:

      $$
      g(x,y)=(\ln x)^2+4y\ln x+8y^2.
      $$

      **On the curve.** $g(e,1)=1+4+8=13$. Yes.

      **Slope.** $g'_x=\dfrac{2\ln x+4y}{x}$ and $g'_y=4\ln x+16y$. At $(e,1)$: $g'_x=\frac{6}{e}$, $g'_y=20$.

      $$
      \frac{dy}{dx}=-\frac{g'_x}{g'_y}=-\frac{6/e}{20}=-\frac{3}{10e}.
      $$

      > [!success] Answer
      > $\dfrac{dy}{dx}=-\dfrac{3}{10e}$
    related_terms: ["implicit-differentiation", "partial-derivative", "level-curve"]
    source_doc_page: 1
  - id: "4b"
    text: |
      Given $u(x,y)=ax^2+2bxy+cy^2$.

      Let $a=1$, $b=1$, $c=-1$. Find $\displaystyle\lim_{x\to\infty}\frac{u(\ln x,\,e^x)}{e^x\ln x}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Now $u(s,t)=s^2+2st-t^2$, so the numerator is $(\ln x)^2+2e^x\ln x-e^{2x}$. Divide each term by $e^x\ln x$:

      $$
      \frac{(\ln x)^2}{e^x\ln x}+2-\frac{e^{2x}}{e^x\ln x}=\frac{\ln x}{e^x}+2-\frac{e^x}{\ln x}.
      $$

      As $x\to\infty$: $\frac{\ln x}{e^x}\to0$ (the exponential dominates), and $\frac{e^x}{\ln x}\to\infty$. So the expression tends to $0+2-\infty$.

      > [!success] Answer
      > $-\infty$
    related_terms: ["horizontal-asymptote", "indeterminate-form"]
    source_doc_page: 1
  - id: "4c"
    text: |
      Given $u(x,y)=ax^2+2bxy+cy^2$.

      The point $(4,2)$ is a critical point of $u$. Express $u(x,y)$ using only the parameter $b$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      u'_x=2ax+2by, \qquad u'_y=2bx+2cy.
      $$

      At $(4,2)$: $u'_x=8a+4b=0$ gives $a=-\tfrac b2$. And $u'_y=8b+4c=0$ gives $c=-2b$.

      $$
      u(x,y)=-\frac b2x^2+2bxy-2by^2.
      $$

      > [!success] Answer
      > $u(x,y)=-\dfrac b2x^2+2bxy-2by^2$
    related_terms: ["critical-point", "partial-derivative", "first-order-conditions"]
    source_doc_page: 1
---

*Related: [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_08-Second Derivative Test and Lagrange Multipliers]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]]*
