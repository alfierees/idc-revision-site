---
title: "PS7"
subject: maths-for-economists-a
source_doc: /papers/maths-for-economists-a/ps-7.pdf
tags:
  - maths-for-economists-a
  - problem-set
  - definition-of-the-derivative
  - differentiability
  - tangent-line
  - vertical-tangent
  - corner-point
  - piecewise-function
  - power-rule
  - product-rule
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Given** $f(x)=\sqrt{x-1}$.

      a. Find the function's domain.

      Taught in [[Lec_07-The Derivative, Differentiability and Rules]] (sections 1 and 2, the derivative of $\sqrt x$ from the definition; 3.3 for the vertical tangent).
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > The root needs a non-negative argument: $x-1\ge0$.

      > [!success] Answer (printed)
      > $x\ge1$
    related_terms: ["domain"]
    source_doc_page: 1
  - id: "1b"
    text: |
      **Given** $f(x)=\sqrt{x-1}$.

      b. Use the definition of the derivative to find the derivative of $f(x)$.
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > f'(x)=\lim_{h\to0}\frac{\sqrt{x+h-1}-\sqrt{x-1}}{h}
      > $$
      > Multiply by the conjugate:
      >
      > $$
      > =\lim_{h\to0}\frac{(x+h-1)-(x-1)}{h\left(\sqrt{x+h-1}+\sqrt{x-1}\right)}=\lim_{h\to0}\frac{1}{\sqrt{x+h-1}+\sqrt{x-1}}=\frac{1}{2\sqrt{x-1}}
      > $$

      > [!success] Answer (printed)
      > $f'(x)=\dfrac{1}{2\sqrt{x-1}}$
    related_terms: ["definition-of-the-derivative", "derivative", "conjugate"]
    source_doc_page: 1
  - id: "1c"
    text: |
      **Given** $f(x)=\sqrt{x-1}$.

      c. Find the domain of $f'(x)$.
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $f'$ has $\sqrt{x-1}$ in the denominator, so $x-1>0$ strictly (it cannot be $0$, and the root needs non-negative).

      > [!success] Answer (printed)
      > $x>1$
    related_terms: ["domain", "derivative"]
    source_doc_page: 1
  - id: "1d"
    text: |
      **Given** $f(x)=\sqrt{x-1}$.

      d. Find the equation of the tangent line at $x=2$.
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $f(2)=\sqrt{1}=1$ and $f'(2)=\dfrac{1}{2\sqrt1}=\dfrac12$. The tangent line is
      >
      > $$
      > y-1=\tfrac12(x-2)\;\Rightarrow\;y=\tfrac12x
      > $$

      > [!success] Answer (printed)
      > $y=\tfrac12x$
    related_terms: ["tangent-line", "derivative"]
    source_doc_page: 1
  - id: "1e"
    text: |
      **Given** $f(x)=\sqrt{x-1}$.

      e. Find the equation of the tangent line at $x=1$.
    solution: |
      At $x=1$ the point is $(1,0)$, but $f'(1)$ is not defined (it is outside the domain in Q1c).

      > [!note] Working reconstructed to reach the printed answer
      > From the right, $f'(x)=\dfrac{1}{2\sqrt{x-1}}\to+\infty$ as $x\to1^+$. The slope becomes infinitely steep, so the tangent is the **vertical** line through $(1,0)$.

      > [!success] Answer (printed)
      > $x=1$
    related_terms: ["vertical-tangent", "tangent-line", "one-sided-limit"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **a)** Is $f(x)=x^{1/3}$ differentiable at $x=0$?

      Taught in [[Lec_07-The Derivative, Differentiability and Rules]] (section 3.3, roots: vertical tangent versus cusp).
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $f(0)=0$ and
      >
      > $$
      > \frac{f(0+h)-f(0)}{h}=\frac{h^{1/3}}{h}=h^{-2/3}=\frac{1}{h^{2/3}}\to+\infty\quad(h\to0^\pm)
      > $$
      > The slope is infinite, so the limit is not a real number. Not differentiable.

      > [!success] Answer (printed)
      > no
    related_terms: ["differentiability", "vertical-tangent"]
    source_doc_page: 1
  - id: "2b"
    text: |
      **b)** Does a tangent line exist at $x=0$? If so, find its equation.
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > The function is continuous at $0$ and the secant slopes tend to $+\infty$ from **both** sides (same sign). So the tangent line exists and is vertical, through $(0,0)$: the $y$-axis.

      > [!success] Answer (printed)
      > Yes, the $y$ axis: $x=0$

      > [!tip] Intuition
      > $\sqrt x$ and $x^{1/3}$ both have a vertical tangent. A **cusp** such as $x^{2/3}$ has the slope going to $-\infty$ on one side and $+\infty$ on the other, so no single tangent.
    related_terms: ["vertical-tangent", "tangent-line"]
    source_doc_page: 1
  - id: "3a"
    text: |
      **Given**

      $$f(x)=\begin{cases}x^2-3 & x\ge2\\-3x+7 & x<2\end{cases}$$

      a. Is $f(x)$ continuous at $x=2$?

      Taught in [[Lec_07-The Derivative, Differentiability and Rules]] (section 3.2, a piecewise function with a corner) and [[Lec_04-Limits and Continuity]] (section 4, continuity).
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $f(2)=2^2-3=1$. Right limit: $2^2-3=1$. Left limit: $-3(2)+7=1$. All three agree.

      > [!success] Answer (printed)
      > Yes
    related_terms: ["continuity", "piecewise-function"]
    source_doc_page: 1
  - id: "3b"
    text: |
      **Given**

      $$f(x)=\begin{cases}x^2-3 & x\ge2\\-3x+7 & x<2\end{cases}$$

      b. Draw the graph of $f(x)$.
    solution: |
      The key draws a straight line sloping down to the point $(2,1)$, then a curve rising from there.

      ![](/images/maths-for-economists-a/ps07-q3b-corner-graph.png)

      > [!success] Answer (printed: a sketch)
      > Descending line for $x<2$, rising parabola for $x\ge2$, meeting at $(2,1)$. The sketch above is my redraw of the key's graph.
    related_terms: ["piecewise-function", "corner-point"]
    source_doc_page: 1
  - id: "3c"
    text: |
      **Given**

      $$f(x)=\begin{cases}x^2-3 & x\ge2\\-3x+7 & x<2\end{cases}$$

      c. Use the definition of the derivative to answer whether $f(x)$ is differentiable at $x=2$.
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Right-hand slope ($h>0$): $f(2+h)=(2+h)^2-3=1+4h+h^2$, so
      >
      > $$
      > \frac{f(2+h)-f(2)}{h}=\frac{4h+h^2}{h}=4+h\to4
      > $$
      > Left-hand slope ($h<0$): $f(2+h)=-3(2+h)+7=1-3h$, so
      >
      > $$
      > \frac{f(2+h)-f(2)}{h}=\frac{-3h}{h}=-3
      > $$
      > $4\neq-3$, so the derivative at $2$ does not exist.

      > [!success] Answer (printed)
      > No
    related_terms: ["definition-of-the-derivative", "differentiability", "one-sided-limit"]
    source_doc_page: 1
  - id: "3d"
    text: |
      **Given**

      $$f(x)=\begin{cases}x^2-3 & x\ge2\\-3x+7 & x<2\end{cases}$$

      d. Is $x=2$ a "corner" point?
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > The function is continuous at $2$ but the two one-sided slopes are finite and different ($-3$ and $4$). That is the definition of a corner.

      > [!success] Answer (printed)
      > Yes
    related_terms: ["corner-point", "differentiability"]
    source_doc_page: 1
  - id: "3e"
    text: |
      **Given**

      $$f(x)=\begin{cases}x^2-3 & x\ge2\\-3x+7 & x<2\end{cases}$$

      e. At which intervals is the function differentiable?
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Each piece is a polynomial, differentiable everywhere on its own interval. The only trouble spot is the corner at $x=2$.

      > [!success] Answer (printed)
      > $x<2$ and $x>2$
    related_terms: ["differentiability", "piecewise-function"]
    source_doc_page: 1
  - id: "4a"
    text: |
      **Given**

      $$f(x)=\begin{cases}x^2+2 & x>1\\4x-x^2 & x\le1\end{cases}$$

      a. Is $f(x)$ continuous at $x=1$?

      Taught in [[Lec_07-The Derivative, Differentiability and Rules]] (sections 3.1 and 3.5, a piecewise function with a jump).
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $f(1)=4-1=3$ (from the lower piece, since $x\le1$). Left limit: $4(1)-1^2=3$. Right limit: $1^2+2=3$. All equal.

      > [!success] Answer (printed)
      > Yes
    related_terms: ["continuity", "piecewise-function"]
    source_doc_page: 1
  - id: "4b"
    text: |
      **Given**

      $$f(x)=\begin{cases}x^2+2 & x>1\\4x-x^2 & x\le1\end{cases}$$

      b. Draw the graph of $f(x)$.
    solution: |
      ![](/images/maths-for-economists-a/ps07-q4b-smooth-join-graph.png)

      > [!success] Answer (printed: a sketch)
      > One smooth rising curve passing through $(1,3)$. The key's sketch shows the same shape. The dashed line is the tangent from Q4d.
    related_terms: ["piecewise-function"]
    source_doc_page: 1
  - id: "4c"
    text: |
      **Given**

      $$f(x)=\begin{cases}x^2+2 & x>1\\4x-x^2 & x\le1\end{cases}$$

      c. Use the definition of the derivative to answer whether $f(x)$ is differentiable at $x=1$.
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Right-hand ($h>0$): $f(1+h)=(1+h)^2+2=3+2h+h^2$, so the quotient is $\dfrac{2h+h^2}{h}=2+h\to2$.
      >
      > Left-hand ($h<0$): $f(1+h)=4(1+h)-(1+h)^2=3+2h-h^2$, so the quotient is $\dfrac{2h-h^2}{h}=2-h\to2$.
      >
      > Both one-sided slopes equal $2$, so $f'(1)=2$.

      > [!success] Answer (printed)
      > Yes
    related_terms: ["definition-of-the-derivative", "differentiability", "one-sided-limit"]
    source_doc_page: 1
  - id: "4d"
    text: |
      **Given**

      $$f(x)=\begin{cases}x^2+2 & x>1\\4x-x^2 & x\le1\end{cases}$$

      d. Find the equation of the tangent line at $x=1$.
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Point $(1,3)$, slope $2$: $y-3=2(x-1)\Rightarrow y=2x+1$.

      > [!success] Answer (printed)
      > $y=2x+1$
    related_terms: ["tangent-line", "slope-of-a-tangent"]
    source_doc_page: 1
  - id: "4e"
    text: |
      **Given**

      $$f(x)=\begin{cases}x^2+2 & x>1\\4x-x^2 & x\le1\end{cases}$$

      e. Answer parts a to c again for

      $$g(x)=\begin{cases}x^2+3 & x>1\\4x-x^2 & x\le1\end{cases}$$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > **Continuity.** $g(1)=4(1)-1=3$. Left limit $=3$. Right limit $=1^2+3=4$. These differ: $g$ has a **jump** at $x=1$, so it is not continuous.
      >
      > **Differentiability.** A function that is not continuous at a point cannot be differentiable there. Directly: the right quotient is $\dfrac{g(1+h)-g(1)}{h}=\dfrac{(1+h)^2+3-3}{h}=\dfrac{1+2h+h^2}{h}\to+\infty$, so the limit does not exist.

      ![](/images/maths-for-economists-a/ps07-q4e-jump-graph.png)

      > [!success] Answer (printed)
      > Not differentiable and discontinuous
    related_terms: ["jump-discontinuity", "continuity", "differentiability"]
    source_doc_page: 1
  - id: "4f"
    text: |
      **Given**

      $$f(x)=\begin{cases}x^2+2 & x>1\\4x-x^2 & x\le1\end{cases}$$

      f. Is $x=1$ a "corner" point of $g(x)$?

      Here $g$ is the function from part e:

      $$g(x)=\begin{cases}x^2+3 & x>1\\4x-x^2 & x\le1\end{cases}$$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > A corner needs a function that is continuous with two different finite one-sided slopes. $g$ is not continuous at $1$, so the point is a jump discontinuity, not a corner.

      > [!success] Answer (printed)
      > No
    related_terms: ["corner-point", "jump-discontinuity"]
    source_doc_page: 1
  - id: "5a"
    text: |
      **Given** $f(x)=x^2-2\cdot|x|$.

      a. Write $f(x)$ as a compound (piecewise) function and find its interval of continuity.

      Taught in [[Lec_07-The Derivative, Differentiability and Rules]] (section 3.4, a product with an absolute value) and [[Lec_02-Piecewise Functions and Business Applications]] (absolute values as piecewise).
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $|x|=x$ for $x\ge0$ and $|x|=-x$ for $x<0$, so
      >
      > $$
      > f(x)=\begin{cases}x^2-2x & x\ge0\\x^2+2x & x<0\end{cases}
      > $$
      > $x^2$ and $|x|$ are both continuous everywhere, so $f$ is continuous everywhere. (Check at $0$: both pieces give $0$.)

      > [!success] Answer (printed)
      > $f(x)=\begin{cases}x^2-2x & x\ge0\\x^2+2x & x<0\end{cases}$, continuous for all $x$
    related_terms: ["piecewise-function", "absolute-value-function", "continuity"]
    source_doc_page: 1
  - id: "5b"
    text: |
      **Given** $f(x)=x^2-2\cdot|x|$.

      b. Is $f(x)$ differentiable at $x=0$? Does it have a tangent line at $x=0$?
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $f(0)=0$. Right-hand ($h>0$): $\dfrac{h^2-2h}{h}=h-2\to-2$. Left-hand ($h<0$): $\dfrac{h^2+2h}{h}=h+2\to2$. The one-sided slopes $-2$ and $2$ differ and are finite: a corner. No derivative and no tangent line.

      > [!success] Answer (printed)
      > Not differentiable and doesn't have a tangent line
    related_terms: ["differentiability", "corner-point", "tangent-line"]
    source_doc_page: 1
  - id: "5c"
    text: |
      **Given** $f(x)=x^2-2\cdot|x|$.

      c. Write the derivative as a function of $x$, meaning find $f'(x)$.
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Differentiate each piece on its open interval: $(x^2-2x)'=2x-2$ for $x>0$ and $(x^2+2x)'=2x+2$ for $x<0$. The point $x=0$ is excluded because the derivative does not exist there.

      > [!success] Answer (printed)
      > $f'(x)=\begin{cases}2x-2 & x>0\\2x+2 & x<0\end{cases}$
    related_terms: ["derivative", "piecewise-function", "power-rule"]
    source_doc_page: 1
  - id: "6"
    text: |
      **Find the derivative using the differentiation rules:**

      $f_4(x)=\sqrt[3]{x}\cdot\sqrt{x^3}$, $\quad f_3(x)=\dfrac{10x+20}{x}$, $\quad f_2(x)=\dfrac{10}{\sqrt[5]{x}}$, $\quad f_1(x)=\dfrac{\sqrt[3]{x^4}}{4}$

      Rewrite each as a sum of powers of $x$ first, then apply $\dfrac{d}{dx}x^n=nx^{n-1}$.

      Taught in [[Lec_07-The Derivative, Differentiability and Rules]] (section 4, rules for differentiation; see [[Power Rule]]).
    solution: |
      > [!note] Working reconstructed to reach the printed answers
      > **$f_1$.** $f_1=\tfrac14x^{4/3}$, so $f_1'=\tfrac14\cdot\tfrac43x^{1/3}=\tfrac13x^{1/3}=\dfrac{\sqrt[3]{x}}{3}$.
      >
      > **$f_2$.** $f_2=10x^{-1/5}$, so $f_2'=10\cdot\left(-\tfrac15\right)x^{-6/5}=-2x^{-6/5}=\dfrac{-2}{\sqrt[5]{x^6}}$.
      >
      > **$f_3$.** $f_3=\dfrac{10x}{x}+\dfrac{20}{x}=10+20x^{-1}$, so $f_3'=-20x^{-2}=\dfrac{-20}{x^2}$.
      >
      > **$f_4$.** $f_4=x^{1/3}\cdot x^{3/2}=x^{1/3+3/2}=x^{11/6}$, so $f_4'=\tfrac{11}{6}x^{5/6}=\dfrac{11\sqrt[6]{x^5}}{6}$.

      > [!success] Answers (printed)
      > $f_1'=\dfrac{\sqrt[3]{x}}{3}$, $\ f_2'=\dfrac{-2}{\sqrt[5]{x^6}}$, $\ f_3'=\dfrac{-20}{x^2}$, $\ f_4'=\dfrac{11\sqrt[6]{x^5}}{6}$
    related_terms: ["power-rule", "derivative", "constant-multiple-rule"]
    source_doc_page: 2
  - id: "7"
    text: |
      **Given** $f(x)=(2x-9)(x^2+6)$. Use the rule for differentiating a product to find the equations of the two horizontal tangent lines to the graph (parallel to the $x$ axis).

      Taught in [[Lec_07-The Derivative, Differentiability and Rules]] (section 4, [[Product Rule]]) and [[Lec_09-Marginal Functions and Tangent Lines of Composites]] (tangent lines).
    solution: |
      > [!note] Working reconstructed to reach the printed answers
      > **Product rule:** $f'(x)=(2)(x^2+6)+(2x-9)(2x)=2x^2+12+4x^2-18x=6x^2-18x+12$.
      >
      > **Horizontal tangent** means $f'(x)=0$: $6(x^2-3x+2)=6(x-1)(x-2)=0$, so $x=1$ or $x=2$.
      >
      > **Heights:** $f(1)=(2-9)(1+6)=(-7)(7)=-49$ and $f(2)=(4-9)(4+6)=(-5)(10)=-50$. A horizontal line through height $c$ is $y=c$.

      > [!success] Answer (printed)
      > $y=-50$ and $y=-49$
    related_terms: ["product-rule", "tangent-line", "derivative", "critical-point"]
    source_doc_page: 2
  - id: "8"
    text: |
      **Use the graph to determine whether $F(x)$ is differentiable at $x=a,b,c,d,e,f,g,h$.**

      ![](/images/maths-for-economists-a/ps07-q8-given-graph.png)

      Taught in [[Lec_07-The Derivative, Differentiability and Rules]] (section 3, the failure cases).
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Reading each point from the graph (my reading, to match the printed key):
      >
      > | Point | What the graph shows | Differentiable? |
      > |---|---|---|
      > | $a$ | smooth curve, a tangent is drawn | yes |
      > | $b$ | jump: the left branch ends at an open circle, the right branch starts higher | no (discontinuous) |
      > | $c$ | continuous but the curve is vertical here (vertical tangent) | no |
      > | $d$ | smooth bottom of a dip, horizontal tangent | yes |
      > | $e$ | curve shoots up to a spike (vertical asymptote or cusp) | no |
      > | $f$ | sharp point, two different tangents drawn | no (corner) |
      > | $g$ | smooth, a tangent is drawn | yes |
      > | $h$ | sharp peak (cusp) | no |

      > [!success] Answer (printed)
      > Differentiable at: $a,d,g$. Not differentiable at: $b,c,e,f,h$.
    related_terms: ["differentiability", "corner-point", "cusp", "vertical-tangent", "jump-discontinuity"]
    source_doc_page: 2
---

*Related: [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_04-Limits and Continuity]], [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]]*
