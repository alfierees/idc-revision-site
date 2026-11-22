---
title: "PS5"
subject: maths-for-economists-b
source_doc: /papers/maths-for-economists-b/ps-5.pdf
tags:
  - maths-for-economists-b
  - problem-set
  - two-variable-function
  - domain
  - contour-line
  - cross-section
  - tangent-line
ai_drafted: true
questions:
  - id: "1a"
    text: |
      Find the domain of the following function and graph it on the $xy$ plane:

      $$
      f(x,y) = x + 3y^2
      $$
    solution: |
      > [!tip] Intuition
      > The domain is every point $(x,y)$ where the formula can be evaluated. Only three things can go wrong: a **zero denominator**, a **negative number under an even root**, and a **non-positive argument of a log**. Write each restriction, then intersect them.

      ![](/images/maths-for-economists-b/ps05-q1-domains.png)

      The figure shows each printed domain for Q1a to Q1k: shaded region is allowed, an open circle is an excluded point, and the view is cut at $-4\le x,y\le 4$.

      > [!info] Working written for this site; the final answer is from the official sheet.

      A polynomial has no denominator, root or log.

      > [!success] Answer
      > The whole $xy$ plane.
    related_terms: ["domain-of-a-two-variable-function", "two-variable-function"]
    source_doc_page: 1
  - id: "1b"
    text: |
      Find the domain of the following function and graph it on the $xy$ plane:

      $$
      f(x,y) = \dfrac{xy}{x^4+y^4}
      $$
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      The denominator is $x^4+y^4 \ge 0$, and it is zero only when $x=y=0$ (a sum of two non-negative terms is zero only if both are).

      > [!success] Answer
      > $(x,y) \neq (0,0)$.
    related_terms: ["domain-of-a-two-variable-function", "two-variable-function"]
    source_doc_page: 1
  - id: "1c"
    text: |
      Find the domain of the following function and graph it on the $xy$ plane:

      $$
      f(x,y) = \dfrac{x-y}{x+y}
      $$
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Need $x+y \neq 0$, which removes the line $y=-x$.

      > [!success] Answer
      > The whole plane except the line $y=-x$.
    related_terms: ["domain-of-a-two-variable-function", "two-variable-function"]
    source_doc_page: 1
  - id: "1d"
    text: |
      Find the domain of the following function and graph it on the $xy$ plane:

      $$
      f(x,y) = \dfrac{x+y}{e^{x^2}-1}
      $$
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      The denominator is zero when $e^{x^2}=1$, i.e. $x^2=0$, i.e. $x=0$. Nothing restricts $y$.

      > [!success] Answer
      > The whole plane except the $y$ axis (the line $x=0$).
    related_terms: ["domain-of-a-two-variable-function", "two-variable-function"]
    source_doc_page: 1
  - id: "1e"
    text: |
      Find the domain of the following function and graph it on the $xy$ plane:

      $$
      f(x,y) = \dfrac{x^4+y^4}{xy}
      $$
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Need $xy \neq 0$, so $x\neq 0$ and $y\neq 0$.

      > [!success] Answer
      > The whole plane except both axes (the lines $x=0$ and $y=0$).
    related_terms: ["domain-of-a-two-variable-function", "two-variable-function"]
    source_doc_page: 1
  - id: "1f"
    text: |
      Find the domain of the following function and graph it on the $xy$ plane:

      $$
      f(x,y) = 5\sqrt{x-1} - 2\sqrt{y-3}
      $$
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Both roots need a non-negative argument: $x-1\ge 0$ and $y-3\ge 0$.

      > [!success] Answer
      > $x \ge 1$ and $y \ge 3$.
    related_terms: ["domain-of-a-two-variable-function", "two-variable-function"]
    source_doc_page: 1
  - id: "1g"
    text: |
      Find the domain of the following function and graph it on the $xy$ plane:

      $$
      f(x,y) = \sqrt{x+y} - \sqrt{x-y}
      $$
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Need $x+y\ge 0$, i.e. $y\ge -x$, and $x-y\ge 0$, i.e. $y\le x$. Together these give a wedge opening to the right (which forces $x\ge 0$).

      > [!success] Answer
      > $y \le x$ and $y \ge -x$.
    related_terms: ["domain-of-a-two-variable-function", "two-variable-function"]
    source_doc_page: 1
  - id: "1h"
    text: |
      Find the domain of the following function and graph it on the $xy$ plane:

      $$
      f(x,y) = \dfrac{x+y}{\sqrt{x}+\sqrt{y}}
      $$
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      The roots need $x\ge 0$ and $y\ge 0$. The denominator $\sqrt x+\sqrt y$ is then non-negative and is zero only when both are zero, so remove the origin.

      > [!success] Answer
      > $x \ge 0$ and $y \ge 0$ and $(x,y)\neq(0,0)$.
    related_terms: ["domain-of-a-two-variable-function", "two-variable-function"]
    source_doc_page: 1
  - id: "1i"
    text: |
      Find the domain of the following function and graph it on the $xy$ plane:

      $$
      f(x,y) = \dfrac{x}{\sqrt{x-y}} + \ln(x)
      $$
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Root in a denominator needs $x-y>0$ (strict, since it cannot be zero), so $y<x$. The log needs $x>0$.

      > [!success] Answer
      > $x>0$ and $y<x$.
    related_terms: ["domain-of-a-two-variable-function", "two-variable-function"]
    source_doc_page: 1
  - id: "1j"
    text: |
      Find the domain of the following function and graph it on the $xy$ plane:

      $$
      f(x,y) = \ln\big(x\cdot(x^2+y)\big)
      $$
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Need $x(x^2+y)>0$: the two factors have the same sign.

      - Both positive: $x>0$ and $y>-x^2$.
      - Both negative: $x<0$ and $y<-x^2$.

      > [!success] Answer
      > $x>0$ and $y>-x^2$, or $x<0$ and $y<-x^2$.
    related_terms: ["domain-of-a-two-variable-function", "two-variable-function"]
    source_doc_page: 1
  - id: "1k"
    text: |
      Find the domain of the following function and graph it on the $xy$ plane:

      $$
      f(x,y) = \sqrt{x} + \sqrt{1-xy}
      $$
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Need $x\ge 0$ and $1-xy\ge 0$. For $x>0$ the second condition is $y\le \frac1x$.

      > [!success] Answer
      > $x\ge 0$ and $y\le \dfrac1x$.

      > [!warning] Edge case at $x=0$
      > The printed answer writes $y\le \frac1x$, which is undefined at $x=0$. Checking directly: $f(0,y)=\sqrt0+\sqrt{1-0}=1$ is defined for **every** $y$. So the full domain also contains the whole $y$ axis. The figure shades it. Away from $x=0$ the printed answer is right.
    related_terms: ["domain-of-a-two-variable-function", "two-variable-function"]
    source_doc_page: 1
  - id: "2a"
    text: |
      Given the surface $f(x,y)=e^{x^2+y}+\ln(y^2+x)$.

      Show that the point $(0,1)$ lies on the curve where the plane $z=e$ meets the surface, and find the equation of the tangent line to that curve at $(0,1)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      **On the curve.** Evaluate:

      $$
      f(0,1)=e^{0+1}+\ln(1+0)=e+0=e.
      $$

      So $(0,1)$ lies on the contour $f(x,y)=e$, which is the intersection of the surface with $z=e$.

      **Slope.** On a level curve $f(x,y)=e$, implicit differentiation gives $\dfrac{dy}{dx}=-\dfrac{f'_x}{f'_y}$. The partial derivatives:

      $$
      f'_x = 2x\,e^{x^2+y}+\frac{1}{y^2+x}, \qquad f'_y = e^{x^2+y}+\frac{2y}{y^2+x}.
      $$

      At $(0,1)$: $f'_x = 0+1 = 1$ and $f'_y = e+2$. So

      $$
      \frac{dy}{dx}=-\frac{1}{e+2}.
      $$

      **Line.** Through $(0,1)$ with that slope, staying in the plane $z=e$:

      $$
      y = 1-\frac{x}{e+2}.
      $$

      > [!success] Answer
      > $y=-\dfrac{x}{e+2}+1,\quad z=e$
    related_terms: ["contour-line", "level-curve", "tangent-line", "implicit-differentiation", "partial-derivative"]
    source_doc_page: 1
  - id: "2b"
    text: |
      Given the surface $f(x,y)=e^{x^2+y}+\ln(y^2+x)$.

      Find the equation of the tangent line to the curve where the plane $x=0$ meets the surface, at the point where $y=1$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Set $x=0$: the section is $z=g(y)=e^{y}+\ln(y^2)$. At $y=1$: $z=e+0=e$.

      $$
      g'(y)=e^{y}+\frac{2y}{y^2}=e^{y}+\frac{2}{y}, \qquad g'(1)=e+2.
      $$

      Tangent line through $(y,z)=(1,e)$ with slope $e+2$:

      $$
      z-e=(e+2)(y-1) \;\Longrightarrow\; z=(e+2)y-2.
      $$

      > [!tip] Intuition
      > Part a holds $z$ fixed and asks how $y$ must move when $x$ moves (a **contour**). Part b holds $x$ fixed and asks how $z$ moves with $y$ (a **cross section**). The slope in b is exactly $f'_y(0,1)=e+2$, the same number that appears in the denominator of a.

      > [!success] Answer
      > $z=(e+2)y-2,\quad x=0$
    related_terms: ["cross-section-of-a-surface", "tangent-line", "partial-derivative"]
    source_doc_page: 1
  - id: "3"
    text: |
      Graph several contour lines on the $xy$ plane for the following functions:

      a) $z=y-2x+5$

      b) $z=y-x^2$

      c) $z=x\cdot y$ (show specifically the case $z=0$)

      d) $z=\min\{2x,y\}$ for $x,y\ge 0$
    solution: "TODO"
    related_terms: ["contour-line", "level-curve", "two-variable-function"]
    source_doc_page: 1
  - id: "4"
    text: |
      Given $z=x^2-y^2$, graph its contour line when $z=0$.
    solution: "TODO"
    related_terms: ["contour-line", "level-curve"]
    source_doc_page: 2
---

*Related: [[Lec_05-Two Variable Functions]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]]*
