---
title: "PS6"
subject: maths-for-economists-b
source_doc: /papers/maths-for-economists-b/ps-6.pdf
tags:
  - maths-for-economists-b
  - problem-set
  - partial-derivative
  - second-partial-derivative
  - total-differential
  - implicit-differentiation
ai_drafted: true
questions:
  - id: "1a"
    text: |
      Find the partial derivatives with respect to $x$ and with respect to $y$ of

      $$
      f(x,y) = x^3y^3+x+y^2
      $$
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Differentiate in $x$ with $y$ constant, then in $y$ with $x$ constant:

      $$
      f'_x = 3x^2y^3+1, \qquad f'_y = 3x^3y^2+2y.
      $$

      > [!success] Answer
      > $f'_x=3x^2y^3+1,\quad f'_y=3x^3y^2+2y$
    related_terms: ["partial-derivative"]
    source_doc_page: 1
  - id: "1b"
    text: |
      Find the partial derivatives with respect to $x$ and with respect to $y$ of

      $$
      f(x,y) = e^{-(x^2+y^2-2x)}
      $$
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Chain rule with inner function $g=-(x^2+y^2-2x)$: $g'_x=-2x+2$, $g'_y=-2y$.

      $$
      f'_x=(-2x+2)\,e^{-(x^2+y^2-2x)}, \qquad f'_y=-2y\,e^{-(x^2+y^2-2x)}.
      $$

      > [!success] Answer
      > $f'_x=(-2x+2)e^{-(x^2+y^2-2x)},\quad f'_y=-2ye^{-(x^2+y^2-2x)}$
    related_terms: ["partial-derivative", "derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "1c"
    text: |
      Find the partial derivatives with respect to $x$ and with respect to $y$ of

      $$
      f(x,y) = y\ln x-x^2-y
      $$
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      f'_x=\frac{y}{x}-2x, \qquad f'_y=\ln x-1.
      $$

      > [!success] Answer
      > $f'_x=\dfrac{y}{x}-2x,\quad f'_y=\ln x-1$
    related_terms: ["partial-derivative", "derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "1d"
    text: |
      Find the partial derivatives with respect to $x$ and with respect to $y$ of

      $$
      f(x,y) = \ln\!\left(\dfrac{e^{2x}+3}{\sqrt{y^2+4}}\right)
      $$

      (Simplify first.)
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Use log rules first: $\ln\frac AB=\ln A-\ln B$ and $\ln\sqrt{u}=\frac12\ln u$.

      $$
      f(x,y)=\ln(e^{2x}+3)-\tfrac12\ln(y^2+4).
      $$

      Then:

      $$
      f'_x=\frac{2e^{2x}}{e^{2x}+3}, \qquad f'_y=-\frac12\cdot\frac{2y}{y^2+4}=-\frac{y}{y^2+4}.
      $$

      > [!success] Answer
      > $f'_x=\dfrac{2e^{2x}}{e^{2x}+3},\quad f'_y=-\dfrac{y}{y^2+4}$
    related_terms: ["partial-derivative", "logarithm-rules", "derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "1e"
    text: |
      Find the partial derivatives with respect to $x$ and with respect to $y$ of

      $$
      f(x,y) = x^y+y^x
      $$

      Evaluate the partial derivatives at the point $(2,1)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Treat $x^y$ as a power in $x$ and $y^x$ as an exponential in $x$; swap roles for $y$:

      $$
      f'_x = y\,x^{y-1}+y^x\ln y, \qquad f'_y = x^y\ln x + x\,y^{x-1}.
      $$

      At $(2,1)$: $f'_x = 1\cdot 1+1\cdot\ln 1=1$ and $f'_y = 2\ln 2+2\cdot 1=2\ln 2+2$.

      > [!success] Answer
      > $f'_x(2,1)=1,\quad f'_y(2,1)=2\ln 2+2$
    related_terms: ["partial-derivative", "derivative-of-exponential-and-logarithmic-functions", "logarithmic-differentiation"]
    source_doc_page: 1
  - id: "2a"
    text: |
      Given $z=f(x,y)=xy^2e^{x^2+y}$, find $\dfrac{\partial z}{\partial y}$ and $\dfrac{\partial z}{\partial x}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Product rule in each variable. In $x$ (the factors are $x$ and $e^{x^2+y}$, with $y^2$ constant):

      $$
      \frac{\partial z}{\partial x}=y^2e^{x^2+y}+xy^2\cdot 2x\,e^{x^2+y}=y^2e^{x^2+y}(1+2x^2).
      $$

      In $y$ (factors $y^2$ and $e^{x^2+y}$, with $x$ constant):

      $$
      \frac{\partial z}{\partial y}=x\left(2y\,e^{x^2+y}+y^2e^{x^2+y}\right)=xy\,e^{x^2+y}(2+y).
      $$

      > [!success] Answer
      > $\dfrac{\partial z}{\partial x}=y^2e^{x^2+y}(1+2x^2),\quad \dfrac{\partial z}{\partial y}=yxe^{x^2+y}(2+y)$
    related_terms: ["partial-derivative"]
    source_doc_page: 1
  - id: "2b"
    text: |
      Given $z=f(x,y)=xy^2e^{x^2+y}$, find $f'_y(2,3)$ and $f'_x(2,3)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      At $(2,3)$: $x^2+y=4+3=7$.

      $$
      f'_y(2,3)=3\cdot 2\cdot e^{7}\cdot(2+3)=30e^7,
      $$

      $$
      f'_x(2,3)=9\,e^{7}\,(1+8)=81e^7.
      $$

      > [!success] Answer
      > $f'_y(2,3)=30e^7,\quad f'_x(2,3)=81e^7$
    related_terms: ["partial-derivative"]
    source_doc_page: 1
  - id: "3"
    text: |
      Given $f(x,y)=x\ln(x+y^2)+y\ln(x^2+y)$. Show that $\dfrac{\partial f}{\partial x}(1,2)=\dfrac{\partial f}{\partial y}(2,1)$.
    solution: "TODO"
    related_terms: ["partial-derivative", "derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "4a"
    text: |
      Given the surface $f(x,y)=4x^2e^{x^2+y}-y^2$.

      Find $y'_{(2,-4)}$ on the curve $f(x,y)=0$, and explain what it means.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      First check the point is on the curve: $x^2+y=4-4=0$, so $f(2,-4)=4\cdot4\cdot e^0-16=0$. Good.

      By implicit differentiation, $y'=-\dfrac{f'_x}{f'_y}$, using the partials from Q4b: $f'_x(2,-4)=80$ and $f'_y(2,-4)=24$.

      $$
      y'_{(2,-4)}=-\frac{80}{24}=-\frac{10}{3}=-3\tfrac13.
      $$

      > [!success] Answer
      > $y'_{(2,-4)}=-3\tfrac13$. It is the slope of the tangent line to the curve $0=4x^2e^{x^2+y}-y^2$ at the point $(2,-4)$.

      > [!tip] Intuition
      > On this contour, moving $x$ right by 1 requires $y$ to fall by about $3\tfrac13$ to stay at height zero.
    related_terms: ["implicit-differentiation", "partial-derivative", "level-curve", "tangent-line"]
    source_doc_page: 1
  - id: "4b"
    text: |
      Given the surface $f(x,y)=4x^2e^{x^2+y}-y^2$.

      Find $f'_x(2,-4)$ and $f'_y(2,-4)$, and explain what each means.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      $$
      f'_x = 8x\,e^{x^2+y}+4x^2\cdot 2x\,e^{x^2+y}=e^{x^2+y}(8x+8x^3).
      $$

      At $(2,-4)$ the exponent is $0$, so $f'_x=1\cdot(16+64)=80$.

      $$
      f'_y = 4x^2e^{x^2+y}-2y \;\Rightarrow\; f'_y(2,-4)=16+8=24.
      $$

      > [!success] Answer
      > $f'_x(2,-4)=80$ is the slope of the tangent line to the curve $z=4x^2e^{x^2-4}-16$ (the section $y=-4$) at $x=2$.
      > $f'_y(2,-4)=24$ is the slope of the tangent line to the curve $z=16e^{4+y}-y^2$ (the section $x=2$) at $y=-4$.
    related_terms: ["partial-derivative", "cross-section-of-a-surface", "tangent-line"]
    source_doc_page: 1
  - id: "5"
    text: |
      Find all second derivatives of $f(x,y)=x^3y^3+x+y^2$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      From Q1a, $f'_x=3x^2y^3+1$ and $f'_y=3x^3y^2+2y$. Differentiate again:

      $$
      f_{xx}=6xy^3, \qquad f_{yy}=6x^3y+2, \qquad f_{xy}=9x^2y^2.
      $$

      Check: differentiating $f'_y$ in $x$ gives $9x^2y^2$, and $f'_x$ in $y$ gives $9x^2y^2$ too, so the mixed partials agree.

      > [!success] Answer
      > $f_{xx}=6xy^3,\ f_{yy}=6x^3y+2,\ f_{xy}=9x^2y^2$
    related_terms: ["second-partial-derivative"]
    source_doc_page: 1
  - id: "6a"
    text: |
      Find all second derivatives of $f(x,y)=e^{-(x^2+y^2-2x)}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Write $E=e^{-(x^2+y^2-2x)}$. From Q1b: $f'_x=(2-2x)E$, $f'_y=-2yE$.

      $$
      f_{xx}=-2E+(2-2x)^2E=E\,(4x^2-8x+2),
      $$

      $$
      f_{yy}=-2E+(-2y)^2E=E\,(4y^2-2),
      $$

      $$
      f_{xy}=(2-2x)(-2y)E=4(x-1)y\,E.
      $$

      > [!success] Answer
      > $f_{xx}=E(4x^2-8x+2),\ f_{yy}=E(4y^2-2),\ f_{xy}=4(x-1)y\,E$ with $E=e^{-(x^2+y^2-2x)}$
    related_terms: ["second-partial-derivative"]
    source_doc_page: 1
  - id: "6b"
    text: |
      Find all second derivatives of $f(x,y)=y\ln x-x^2-y$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      From Q1c: $f'_x=\frac yx-2x$, $f'_y=\ln x-1$.

      $$
      f_{xx}=-\frac{y}{x^2}-2, \qquad f_{yy}=0, \qquad f_{xy}=\frac1x.
      $$

      > [!success] Answer
      > $f_{xx}=-\dfrac{y}{x^2}-2,\ f_{yy}=0,\ f_{xy}=\dfrac1x$
    related_terms: ["second-partial-derivative"]
    source_doc_page: 1
  - id: "7a"
    text: |
      Given the surface $z=\sqrt{x^2+4y^2}$.

      Find the slope of the tangent line to the curve where the plane $y=6$ meets the surface, at $x=5$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Fixing $y$ and moving in $x$ means the slope is the partial derivative $f'_x$:

      $$
      f'_x=\frac{x}{\sqrt{x^2+4y^2}}.
      $$

      At $(5,6)$: $\sqrt{25+144}=13$, so $f'_x(5,6)=\frac{5}{13}$.

      > [!success] Answer
      > $f'_x(5,6)=\dfrac{5}{13}$
    related_terms: ["cross-section-of-a-surface", "tangent-line", "partial-derivative"]
    source_doc_page: 1
  - id: "7b"
    text: |
      Given the surface $z=\sqrt{x^2+4y^2}$.

      Find the slope of the tangent line to the curve where the plane $x=3$ meets the surface, at $y=2$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Fixing $x$ and moving in $y$ gives $f'_y=\dfrac{4y}{\sqrt{x^2+4y^2}}$. At $(3,2)$: $\sqrt{9+16}=5$, so $f'_y(3,2)=\frac85$.

      > [!success] Answer
      > $f'_y(3,2)=\dfrac{8}{5}$
    related_terms: ["cross-section-of-a-surface", "tangent-line", "partial-derivative"]
    source_doc_page: 1
  - id: "8"
    text: |
      Given the function $f(x,y)=\ln\!\left(\dfrac{1}{\sqrt{2e^x+y^3}}\right)$.

      Simplify it, then use the differential to estimate the change in $f$ between the points $(0,3)$ and $(0.1,2.98)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      **Simplify.** $f=-\tfrac12\ln(2e^x+y^3)$.

      **Partials.**

      $$
      f'_x=-\frac12\cdot\frac{2e^x}{2e^x+y^3}, \qquad f'_y=-\frac12\cdot\frac{3y^2}{2e^x+y^3}.
      $$

      At $(0,3)$ the denominator is $2+27=29$:

      $$
      f'_x(0,3)=-\frac{1}{29}, \qquad f'_y(0,3)=-\frac{27}{58}.
      $$

      **Differential.** $dx=0.1-0=0.1$ and $dy=2.98-3=-0.02$:

      $$
      df=f'_x\,dx+f'_y\,dy=-\frac{0.1}{29}+\frac{27}{58}(0.02)\approx -0.00345+0.00931\approx 0.0059.
      $$

      > [!success] Answer
      > $\Delta f\approx 0.0059$
    related_terms: ["total-differential", "partial-derivative", "logarithm-rules"]
    source_doc_page: 2
  - id: "9"
    text: |
      Given a function $f(x,y)$ which satisfies $f(2,1)=8$, $f'_x(2,1)=4$ and $f'_y(2,1)=-3$.

      Estimate $f(1.98,1.03)$ and $f(2.03,0.99)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Use $f(x,y)\approx f(2,1)+f'_x\,dx+f'_y\,dy$.

      **First point:** $dx=-0.02$, $dy=0.03$:

      $$
      f(1.98,1.03)\approx 8+4(-0.02)-3(0.03)=8-0.08-0.09=7.83.
      $$

      **Second point:** $dx=0.03$, $dy=-0.01$:

      $$
      f(2.03,0.99)\approx 8+4(0.03)-3(-0.01)=8+0.12+0.03=8.15.
      $$

      > [!success] Answer
      > $7.83$ and $8.15$
    related_terms: ["total-differential", "partial-derivative"]
    source_doc_page: 2
  - id: "10"
    text: |
      Given the function $f(x,y)=x^y$. Use its value at $(1,6)$ and its differential to estimate $0.98^{6.01}$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      At $(1,6)$: $f=1^6=1$. Partials:

      $$
      f'_x=y\,x^{y-1}\Rightarrow f'_x(1,6)=6, \qquad f'_y=x^y\ln x\Rightarrow f'_y(1,6)=1\cdot\ln 1=0.
      $$

      Here $dx=0.98-1=-0.02$ and $dy=6.01-6=0.01$:

      $$
      0.98^{6.01}\approx 1+6(-0.02)+0\cdot(0.01)=0.88.
      $$

      > [!success] Answer
      > $0.98^{6.01}\approx 0.88$
    related_terms: ["total-differential", "partial-derivative"]
    source_doc_page: 2
  - id: "11a"
    text: |
      Use partial derivatives to find $\dfrac{dy}{dx}$ for the curve $x^3+y^3=x+14$ at the point $(2,2)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Check: $8+8=16=2+14$. Let $F=x^3+y^3-x-14$, so $F'_x=3x^2-1$, $F'_y=3y^2$.

      $$
      \frac{dy}{dx}=-\frac{3\cdot4-1}{3\cdot4}=-\frac{11}{12}.
      $$

      > [!success] Answer
      > $-\dfrac{11}{12}$
    related_terms: ["implicit-differentiation", "partial-derivative"]
    source_doc_page: 2
  - id: "11b"
    text: |
      Use partial derivatives to find $\dfrac{dy}{dx}$ for the curve $e^{xy}=x^2+y+1$ at the point where $x=0$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      **Find $y$.** At $x=0$: $e^0=1=0+y+1$, so $y=0$. The point is $(0,0)$.

      Let $F=e^{xy}-x^2-y-1$: $F'_x=y\,e^{xy}-2x$, $F'_y=x\,e^{xy}-1$.

      At $(0,0)$: $F'_x=0$, $F'_y=-1$, so $\frac{dy}{dx}=-\frac{0}{-1}=0$.

      > [!success] Answer
      > $0$
    related_terms: ["implicit-differentiation", "partial-derivative"]
    source_doc_page: 2
  - id: "11c"
    text: |
      Use partial derivatives to find $\dfrac{dx}{dy}$ for the curve $\ln(xy)-x+1+e=e^{y/x}$ at the point $(1,1)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Check: $\ln 1-1+1+e=e=e^{1}$. Let $F=\ln(xy)-x+1+e-e^{y/x}$.

      $$
      F'_x=\frac1x-1+\frac{y}{x^2}e^{y/x}, \qquad F'_y=\frac1y-\frac1x e^{y/x}.
      $$

      At $(1,1)$: $F'_x=1-1+e=e$ and $F'_y=1-e$. Since we want $x$ as a function of $y$:

      $$
      \frac{dx}{dy}=-\frac{F'_y}{F'_x}=-\frac{1-e}{e}=\frac{e-1}{e}.
      $$

      > [!success] Answer
      > $\dfrac{e-1}{e}$
    related_terms: ["implicit-differentiation", "partial-derivative"]
    source_doc_page: 2
  - id: "11d"
    text: |
      Use partial derivatives to find $\dfrac{dx}{dt}$ for the curve $-5=\dfrac{3t^3}{x^2}+\dfrac{2x^2}{t}$ at the point where $t=-1$ and $x$ is a positive integer.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      **Find $x$.** At $t=-1$: $-5=-\frac{3}{x^2}-2x^2$, so $2x^2+\frac{3}{x^2}=5$. With $u=x^2$: $2u^2-5u+3=0$, so $u=1$ or $u=\tfrac32$. Only $u=1$ gives an integer, so $x=1$.

      Let $F=\dfrac{3t^3}{x^2}+\dfrac{2x^2}{t}+5$:

      $$
      F'_t=\frac{9t^2}{x^2}-\frac{2x^2}{t^2}=9-2=7, \qquad F'_x=-\frac{6t^3}{x^3}+\frac{4x}{t}=6-4=2.
      $$

      $$
      \frac{dx}{dt}=-\frac{F'_t}{F'_x}=-\frac72=-3.5.
      $$

      > [!success] Answer
      > $-3.5$
    related_terms: ["implicit-differentiation", "partial-derivative"]
    source_doc_page: 2
  - id: "11e"
    text: |
      Use partial derivatives to find $\dfrac{dt}{dx}$ for the curve $\sqrt t\cdot x+\ln(x)\cdot t-t=-3+\dfrac{1}{x^2}$ at the point where $x=1$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      **Find $t$.** At $x=1$: $\sqrt t-t=-3+1=-2$. With $s=\sqrt t$: $s^2-s-2=0$, so $s=2$ (the root $s=-1$ is rejected as $s\ge0$). Hence $t=4$.

      Let $F=\sqrt t\,x+t\ln x-t+3-\dfrac{1}{x^2}$:

      $$
      F'_x=\sqrt t+\frac tx+\frac{2}{x^3}=2+4+2=8, \qquad F'_t=\frac{x}{2\sqrt t}+\ln x-1=\frac14+0-1=-\frac34.
      $$

      $$
      \frac{dt}{dx}=-\frac{F'_x}{F'_t}=\frac{8}{3/4}=\frac{32}{3}.
      $$

      > [!success] Answer
      > $\dfrac{32}{3}$
    related_terms: ["implicit-differentiation", "partial-derivative"]
    source_doc_page: 2
  - id: "11f"
    text: |
      Use partial derivatives to find $\dfrac{dx}{dy}$ for the curve $x^y=y^x$ at the point where $x=1$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      **Find $y$.** At $x=1$: $1=y^1$, so $y=1$. Take logs to get a manageable $F$: $y\ln x-x\ln y=0$.

      $$
      F'_x=\frac yx-\ln y=1-0=1, \qquad F'_y=\ln x-\frac xy=0-1=-1.
      $$

      $$
      \frac{dx}{dy}=-\frac{F'_y}{F'_x}=-\frac{-1}{1}=1.
      $$

      > [!success] Answer
      > $1$
    related_terms: ["implicit-differentiation", "partial-derivative", "logarithmic-differentiation"]
    source_doc_page: 2
---

*Related: [[Lec_06-Partial Derivatives and the Differential]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]]*
