---
title: "PS4"
subject: maths-for-economists-b
source_doc: /papers/maths-for-economists-b/ps-4.pdf
tags:
  - maths-for-economists-b
  - implicit-differentiation
  - tangent-line
  - logarithmic-differentiation
  - two-variable-function
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Question 1.** Find $y'$ at the given point: $2y^3+y^2-x=0$ at $(3,1)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      When $y$ is only defined implicitly, differentiate **both sides with respect to $x$**, treat $y$ as a function $y(x)$, and use the chain rule on every $y$ term:

      $$
      \frac{d}{dx}\,g(y)=g'(y)\,y'.
      $$

      The point lies on the curve: $2+1-3=0$. Differentiate with respect to $x$:

      $$
      6y^2y'+2yy'-1=0\;\Rightarrow\;y'(6y^2+2y)=1\;\Rightarrow\;y'=\frac1{6y^2+2y}.
      $$

      At $(3,1)$: $y'=\dfrac1{6+2}=\dfrac18$.

      > [!success] Official answer
      > $y'=\dfrac1{6y^2+2y}$, $y'(3,1)=\dfrac18$.
    related_terms: ["implicit-differentiation"]
    source_doc_page: 1
  - id: "1b"
    text: |
      Find $y'$ at the given point: $x^3-y=\ln y$ at $(1,1)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Check: $1-1=0=\ln1$. Differentiate:

      $$
      3x^2-y'=\frac{y'}{y}\;\Rightarrow\;3x^2=y'\left(1+\frac1y\right)=y'\,\frac{y+1}{y}\;\Rightarrow\;y'=\frac{3x^2y}{1+y}.
      $$

      At $(1,1)$: $y'=\dfrac{3\cdot1\cdot1}{2}=1.5$.

      > [!success] Official answer
      > $y'=\dfrac{3x^2y}{1+y}$, $y'(1,1)=1.5$.
    related_terms: ["implicit-differentiation", "derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "1c"
    text: |
      Find $y'$ at the given point: $xe^y-y=x^2-2$ at $(2,0)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Check: $2\cdot1-0=2=4-2$. The first term is a product ($x$ times $e^y$):

      $$
      e^y+xe^yy'-y'=2x\;\Rightarrow\;y'(xe^y-1)=2x-e^y\;\Rightarrow\;y'=\frac{2x-e^y}{xe^y-1}.
      $$

      At $(2,0)$: $y'=\dfrac{4-1}{2-1}=3$.

      > [!success] Official answer
      > $y'=\dfrac{2x-e^y}{xe^y-1}$, $y'(2,0)=3$.
    related_terms: ["implicit-differentiation", "derivative-of-exponential-and-logarithmic-functions"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Question 2.** (a) Find $x'=\dfrac{dx}{dt}$ for the function $x=f(t)$ which is given implicitly by $x^2-t^2x+t^3+11=0$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Here the independent variable is $t$ and $x$ is the function. Differentiate with respect to $t$; the term $t^2x$ is a product:

      $$
      2x\,x'-\big(2t\,x+t^2x'\big)+3t^2=0.
      $$

      Collect the $x'$ terms:

      $$
      x'(2x-t^2)=2tx-3t^2\;\Rightarrow\;x'=\frac{2tx-3t^2}{2x-t^2}.
      $$

      > [!success] Official answer
      > $x'=\dfrac{2tx-3t^2}{2x-t^2}$.
    related_terms: ["implicit-differentiation"]
    source_doc_page: 1
  - id: "2b"
    text: |
      (b) Find the equations of the tangent lines to the curve $y^2-xy-6=0$ at points where $x=1$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      **Find the points.** Put $x=1$: $y^2-y-6=0\Rightarrow(y-3)(y+2)=0$, so $y=3$ or $y=-2$. There are two points, $(1,3)$ and $(1,-2)$, hence two tangent lines.

      **Slope.** Differentiate $y^2-xy-6=0$:

      $$
      2yy'-y-xy'=0\;\Rightarrow\;y'(2y-x)=y\;\Rightarrow\;y'=\frac{y}{2y-x}.
      $$

      - At $(1,3)$: $y'=\dfrac{3}{6-1}=0.6$. Line: $y-3=0.6(x-1)$, i.e. $y=0.6x+2.4$.
      - At $(1,-2)$: $y'=\dfrac{-2}{-4-1}=0.4$. Line: $y+2=0.4(x-1)$, i.e. $y=0.4x-2.4$.

      ![](/images/maths-for-economists-b/ps04-q2b-curve-tangents.png)

      *The curve $y^2-xy-6=0$ has an upper and a lower branch; the vertical line $x=1$ meets each branch once, and each point has its own tangent.*

      > [!tip] Intuition
      > Fixing $x$ in an implicit equation can leave several $y$ values. Each gives its own point and slope, so "the tangent at $x=1$" has two answers here.

      > [!success] Official answer
      > $y=0.6x+2.4$ and $y=0.4x-2.4$.
    related_terms: ["implicit-differentiation", "tangent-line"]
    source_doc_page: 1
  - id: "3"
    text: |
      **Question 3.** Use implicit differentiation to find the equation of the tangent line to the graph of $y=x^{\ln x}$ at $x=e$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      The variable appears in both the base and the exponent, so take $\ln$ of both sides first ([[Logarithmic Differentiation]]):

      $$
      \ln y=\ln x\cdot\ln x=(\ln x)^2.
      $$

      Differentiate implicitly:

      $$
      \frac{y'}{y}=2\ln x\cdot\frac1x\;\Rightarrow\;y'=y\cdot\frac{2\ln x}{x}.
      $$

      At $x=e$: $y=e^{\ln e}=e^1=e$ and $y'=e\cdot\dfrac{2\cdot1}{e}=2$. Tangent line through $(e,e)$ with slope $2$:

      $$
      y-e=2(x-e)\;\Rightarrow\;y=2x-e.
      $$

      > [!success] Official answer
      > $y=2x-e$.
    related_terms: ["implicit-differentiation", "logarithmic-differentiation", "tangent-line"]
    source_doc_page: 1
  - id: "4a"
    text: |
      **Question 4.** Given the function $f(x,y)=x\ln\!\big(x+y^2\big)+y\ln\!\big(x^2+y\big)$. We can obtain a single variable function from a two-variable function, for example:

      (a) Find global extremum of the function $g(x)=f(e^x,0)$ on the interval $[-2,0]$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Substitute $x\to e^x$ and $y=0$. The second term has $y=0$ as a factor and vanishes:

      $$
      g(x)=e^x\ln\!\big(e^x\big)+0=x\,e^x.
      $$

      $$
      g'(x)=e^x+xe^x=e^x(1+x)=0\;\Rightarrow\;x=-1.
      $$

      The interval is closed, so compare the critical point with the endpoints:

      | $x$ | $g(x)=xe^x$ |
      |---|---|
      | $-2$ | $-2e^{-2}\approx-0.27$ |
      | $-1$ | $-e^{-1}\approx-0.37$ |
      | $0$ | $0$ |

      **Global minimum at $x=-1$** (value $-1/e$), **global maximum at $x=0$** (value $0$).

      > [!tip] Intuition
      > Restricting a two-variable function to a curve, here $y=0$ or $y=x$, gives a one-variable function you can analyse with the Lec 01-03 tools. This is the "cross section" idea in [[Lec_04-Implicit Differentiation and Two-Variable Functions]].

      > [!success] Official answer
      > $x_{\min}=-1$, $x_{\max}=0$.
    related_terms: ["two-variable-function", "cross-section-of-a-surface", "global-extremum", "critical-point", "closed-interval-rule"]
    source_doc_page: 1
  - id: "4b"
    text: |
      (b) Find $\displaystyle\lim_{x\to\infty}\frac{f(x,x)}{x^2}$ for the same $f(x,y)=x\ln\!\big(x+y^2\big)+y\ln\!\big(x^2+y\big)$.
    solution: |
      > [!info] Working written for this site; the final answer is from the official sheet.

      Put $y=x$ in $f$:

      $$
      f(x,x)=x\ln\!\big(x+x^2\big)+x\ln\!\big(x^2+x\big)=2x\ln\!\big(x^2+x\big).
      $$

      Divide by $x^2$ (for $x>0$):

      $$
      \frac{f(x,x)}{x^2}=\frac{2\ln\!\big(x^2+x\big)}{x}.
      $$

      This is $\frac\infty\infty$ as $x\to\infty$. L'Hopital:

      $$
      \lim_{x\to\infty}\frac{2\cdot\frac{2x+1}{x^2+x}}{1}=\lim_{x\to\infty}\frac{2(2x+1)}{x^2+x}=0.
      $$

      **Limit $0$.** The log grows far more slowly than $x$ (the ratio $\ln(\cdot)/x\to0$).

      > [!success] Official answer
      > $0$.
    related_terms: ["two-variable-function", "cross-section-of-a-surface", "lhopitals-rule", "indeterminate-form"]
    source_doc_page: 1
---

*Related: [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_05-Two Variable Functions]]*
