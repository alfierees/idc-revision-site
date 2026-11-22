---
title: "PS9"
subject: maths-for-economists-b
source_doc: /papers/maths-for-economists-b/ps-9.pdf
tags:
  - maths-for-economists-b
  - lagrange-multipliers
  - constrained-optimisation
  - problem-set
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Two constraints, four variables.** Use Lagrange multipliers to find the minimal value of $f(x,y,z,t)=x^2+y^2+z^2+t^2$ under the constraints $x+y+z+t=-4$ and $x-y+z-t=0$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Two constraints need two multipliers:

      $$
      \mathcal L = x^2+y^2+z^2+t^2-\lambda_1\,(x+y+z+t+4)-\lambda_2\,(x-y+z-t)
      $$

      First-order conditions:

      $$
      2x=\lambda_1+\lambda_2,\quad 2y=\lambda_1-\lambda_2,\quad 2z=\lambda_1+\lambda_2,\quad 2t=\lambda_1-\lambda_2
      $$

      So $x=z$ and $y=t$. The second constraint gives $x-y+z-t=2(x-y)=0$, so $x=y$, hence all four variables are equal. The first constraint gives $4x=-4$, so $x=y=z=t=-1$.

      $$
      f(-1,-1,-1,-1)=4
      $$

      > [!success] Answer
      > Minimal value $=4$, at $(-1,-1,-1,-1)$.

      > [!tip] Intuition
      > $f$ is the squared distance from the origin, so the minimum is the point of the constraint plane closest to the origin. It is the only critical point and $f$ grows without bound away from it, so it is the minimum.
    related_terms: ["lagrange-multiplier-method", "lagrangian", "first-order-conditions", "constrained-optimisation", "lagrange-multiplier"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Extreme points under a linear or hyperbolic constraint.** Find the extreme points of $f=x^2y$ under $x+y=12$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      \mathcal L=x^2y-\lambda\,(x+y-12),\qquad 2xy=\lambda,\quad x^2=\lambda
      $$

      Equating: $2xy=x^2$, so $x(2y-x)=0$, giving $x=0$ or $x=2y$.

      - $x=0$: then $y=12$, $f=0$.
      - $x=2y$: $3y=12$, so $y=4$, $x=8$, $f=256$.

      > [!success] Answer
      > $(8,4)$ is a maximum and $(0,12)$ is a minimum.

      > [!warning] Local, not global
      > Substituting $y=12-x$ gives $f=x^2(12-x)$, which tends to $-\infty$ as $x\to\infty$ and to $+\infty$ as $x\to-\infty$. So these are local extremes along the constraint, not global ones. The sheet's labels are the local type at each point.
    related_terms: ["lagrange-multiplier-method", "lagrangian", "first-order-conditions", "constrained-optimisation", "local-extremum", "global-extremum"]
    source_doc_page: 1
  - id: "2b"
    text: |
      Find the extreme point of $f=xy$ under $2x+y=16$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      \mathcal L=xy-\lambda\,(2x+y-16),\qquad y=2\lambda,\quad x=\lambda
      $$

      So $y=2x$, and $2x+2x=16$ gives $x=4$, $y=8$, $f=32$.

      > [!success] Answer
      > $(4,8)$ is a maximum.
    related_terms: ["lagrange-multiplier-method", "lagrangian", "first-order-conditions", "constrained-optimisation"]
    source_doc_page: 1
  - id: "2c"
    text: |
      Find the extreme point of $f=x+y$ under $xy=16$, $x>0$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      \mathcal L=x+y-\lambda\,(xy-16),\qquad 1=\lambda y,\quad 1=\lambda x
      $$

      So $x=y$, and $x^2=16$ with $x>0$ gives $x=4$, $y=4$, $f=8$.

      ![](/images/maths-for-economists-b/ps09-q2c-hyperbola-tangent.png)

      *The level line $x+y=8$ touches the hyperbola $xy=16$ at $(4,4)$ and every other point of the hyperbola lies on a higher level line, so $(4,4)$ is the minimum.*

      > [!success] Answer
      > $(4,4)$ is a minimum.
    related_terms: ["lagrange-multiplier-method", "lagrangian", "first-order-conditions", "constrained-optimisation", "level-curve", "tangent-line"]
    source_doc_page: 1
  - id: "3a"
    text: |
      **Extreme point, its value, and a shadow-price approximation.** Given $f(x,y)=3y^2-6xy-9x-3y$, find the extreme point of $f$ under $x+y=7$ and say whether it is a maximum or a minimum.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      \mathcal L=3y^2-6xy-9x-3y-\lambda\,(x+y-7)
      $$

      $$
      \mathcal L_x=-6y-9=\lambda,\qquad \mathcal L_y=6y-6x-3=\lambda
      $$

      Equating: $-6y-9=6y-6x-3$, so $x=2y+1$. With $x+y=7$: $3y=6$, $y=2$, $x=5$, and $\lambda=-6(2)-9=-21$.

      To classify, substitute $x=7-y$: $f=9y^2-36y-63$, a convex parabola in $y$, so the point is a minimum.

      > [!success] Answer
      > $(5,2)$ is a minimum.
    related_terms: ["lagrange-multiplier-method", "lagrangian", "first-order-conditions", "constrained-optimisation", "lagrange-multiplier"]
    source_doc_page: 1
  - id: "3b"
    text: |
      Given $f(x,y)=3y^2-6xy-9x-3y$ with the extreme point found in part (a), find the value of $f$ at that point.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      f(5,2)=3(4)-6(5)(2)-9(5)-3(2)=12-60-45-6=-99
      $$

      > [!success] Answer
      > $-99$
    related_terms: ["constrained-optimisation"]
    source_doc_page: 1
  - id: "3c"
    text: |
      Use the Lagrange multiplier to approximate the extreme value of $f(x,y)=3y^2-6xy-9x-3y$ under the new constraint $x+y=8$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      With $\mathcal L=f-\lambda\,(g-k)$, the optimal value changes at rate $\lambda$ per unit increase in the constraint constant $k$ (the shadow price). Raising $k$ from $7$ to $8$:

      $$
      f^*(8)\approx f^*(7)+\lambda\cdot 1=-99+(-21)=-120
      $$

      > [!success] Answer
      > $\approx -120$

      > [!tip] Intuition
      > This is a first-order approximation. Re-solving exactly with $x+y=8$ gives $f=9y^2-42y-72$, minimised at $y=7/3$ with value $-121$ (my own check, not on the sheet). The approximation is close because the change in the constraint is small.
    related_terms: ["shadow-price", "lagrange-multiplier", "lagrangian"]
    source_doc_page: 1
  - id: "4"
    text: |
      **Critical points under a mixed constraint.** Find the critical points of $f(x,y)=4x+y$ under $x+y+xy=8$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      \mathcal L=4x+y-\lambda\,(x+y+xy-8),\qquad 4=\lambda(1+y),\quad 1=\lambda(1+x)
      $$

      Dividing: $4(1+x)=1+y$, so $y=4x+3$. Substitute into the constraint:

      $$
      x+(4x+3)+x(4x+3)=8\;\Rightarrow\;4x^2+8x-5=0\;\Rightarrow\;x=\frac{-8\pm 12}{8}
      $$

      So $x=\tfrac12$ (then $y=5$) or $x=-\tfrac52$ (then $y=-7$).

      > [!success] Answer
      > Critical points $(-2.5,\,-7)$ and $(0.5,\,5)$.
    related_terms: ["lagrange-multiplier-method", "lagrangian", "first-order-conditions", "constrained-optimisation", "critical-point"]
    source_doc_page: 1
  - id: "5"
    text: |
      **Min and max on a sphere.** Find the minimal and maximal value of $f(x,y,z)=2x+4y+4z$ under $x^2+y^2+z^2=1$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      \mathcal L=2x+4y+4z-\lambda\,(x^2+y^2+z^2-1):\quad 2=2\lambda x,\;4=2\lambda y,\;4=2\lambda z
      $$

      So $(x,y,z)=\tfrac1\lambda(1,2,2)$. The constraint gives $\tfrac{9}{\lambda^2}=1$, so $\lambda=\pm3$ and the points are $\pm\left(\tfrac13,\tfrac23,\tfrac23\right)$.

      $$
      f=\pm\left(\tfrac23+\tfrac83+\tfrac83\right)=\pm 6
      $$

      > [!success] Answer
      > Maximum $6$ and minimum $-6$.

      > [!tip] Intuition
      > The sphere is closed and bounded, so a maximum and a minimum must exist; the two critical points are them.
    related_terms: ["lagrange-multiplier-method", "lagrangian", "first-order-conditions", "constrained-optimisation", "critical-point", "global-extremum"]
    source_doc_page: 1
  - id: "6"
    text: |
      **Investing in two kinds of shares.** Annual profit from investing $x$ thousand dollars in industrial shares and $y$ thousand in technology shares is $f(x,y)=2\sqrt x+y$ thousand. With 16,000 dollars to invest, how should it be split to maximise profit?
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Constraint $x+y=16$ (in thousands).

      $$
      \mathcal L=2\sqrt x+y-\lambda\,(x+y-16):\quad \frac{1}{\sqrt x}=\lambda,\quad 1=\lambda
      $$

      So $\sqrt x=1$, $x=1$, $y=15$. Profit $=2(1)+15=17$ thousand.

      > [!success] Answer
      > 1,000 dollars in industrial shares and 15,000 dollars in technology shares.

      > [!tip] Intuition
      > Industrial shares have diminishing returns ($2\sqrt x$) while technology is linear, so only the first thousand is worth putting in industrial.
    related_terms: ["lagrange-multiplier-method", "lagrangian", "first-order-conditions", "constrained-optimisation"]
    source_doc_page: 1
---

*Related: [[Lec_08-Second Derivative Test and Lagrange Multipliers]] · [[Lec_09-Constrained Optimisation and Lagrange Multipliers]]*
