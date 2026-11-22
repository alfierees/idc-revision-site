---
title: "PS1"
subject: maths-for-economists-a
source_doc: /papers/maths-for-economists-a/ps-1.pdf
tags:
  - maths-for-economists-a
  - problem-set
  - function
  - domain
  - vertical-line-test
  - function-notation
  - difference-quotient
  - piecewise-function
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Which mappings are functions?** Determine which of the following are functions. Three arrow diagrams are given, each from a list of domain values to a list of outputs:

      1. Domain $\{3,4,5\}$: $3\to 5$ and $3\to 6$ (two arrows leave 3), $4\to 7$, $5\to 8$.

      2. Domain $\{8,9,10\}$: $8\to 0$, $10\to 1$ (the input 9 has no arrow drawn).

      3. Domain $\{3,6,9,12\}$: $3\to 5$, $6\to 6$, $9\to 5$, $12\to 6$.
    solution: "TODO"
    related_terms: ["function"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Is $y$ a function of $x$?** (a) Which of these equations represent $y$ as a function of $x$ when the domain is all real numbers? Explain. (b) For those that are not functions, can you reduce the domain so that they become functions?

      $$\text{a. } 4x-5y=20 \qquad \text{b. } x^2-y=1 \qquad \text{c. } x+y^3=10 \qquad \text{d. } y^2+xy=-\tfrac14 x^2$$

      $$\text{e. } |x|+|y|=4 \qquad \text{f. } xy+y-x=5 \qquad \text{g. } x^2+y^2=25 \qquad \text{h. } x^2-y^2=-16$$
    solution: |
      > [!success] Printed answer
      > (a) Functions for all $x$: **a, b, c, d**.
      > (b) **e:** $x=\pm 4$. **f:** $x\neq -1$. **g:** $x=\pm 5$. **h:** will never be a function.

      > [!note] Working reconstructed to reach the printed answer
      > The test: solve for $y$. If every allowed $x$ gives exactly one $y$, it is a function ([[Vertical Line Test]]).
      >
      > - **a.** $y=\dfrac{4x-20}{5}$: one $y$ per $x$.
      > - **b.** $y=x^2-1$: one $y$ per $x$.
      > - **c.** $y=\sqrt[3]{10-x}$: a cube root has exactly one real value for every $x$.
      > - **d.** Move everything to one side: $y^2+xy+\tfrac14x^2=0$, which is $\left(y+\tfrac x2\right)^2=0$. So $y=-\tfrac x2$ only: one value.
      > - **e.** $|y|=4-|x|$ gives two values $\pm(4-|x|)$ unless $4-|x|=0$. Only $x=4$ or $x=-4$ gives the single value $y=0$, so keep the domain to one of those points (the printed $x=\pm4$).
      > - **f.** $y(x+1)=x+5$, so $y=\dfrac{x+5}{x+1}$. One value for each $x$ except where $x+1=0$: remove $x=-1$.
      > - **g.** $y=\pm\sqrt{25-x^2}$: two values unless $x=\pm5$ (where $y=0$).
      > - **h.** $y^2=x^2+16>0$ for every $x$, so there are always two values of $y$. No domain restriction helps.
    related_terms: ["function", "vertical-line-test", "cube-root-domain"]
    source_doc_page: 1
  - id: "3"
    text: |
      **Domains.** Find the domain of each function.

      $$\text{a. } f(x)=\frac{3}{\sqrt{x+2}} \quad \text{b. } f(x)=\frac{x+4}{x^2-4x+5} \quad \text{c. } f(x)=\frac{x-1}{x^2+3x-4}$$

      $$\text{d. } f(x)=\frac{x}{\sqrt{x}+x} \quad \text{e. } f(x)=\sqrt{x^2-3x+2}$$
    solution: |
      > [!success] Printed answer
      > **a.** $x>-2$. **b.** all $x$. **c.** $x\neq 1,\ x\neq -4$. **d.** $x>0$. **e.** $x\ge 2$ or $x\le 1$.

      > [!note] Working reconstructed to reach the printed answer
      > The two rules: no division by zero, no square root of a negative number.
      >
      > - **a.** The root needs $x+2\ge0$ and it sits in the denominator, so $x+2\neq0$. Together $x>-2$.
      > - **b.** The denominator $x^2-4x+5$ has discriminant $16-20<0$, so it is never zero. All $x$.
      > - **c.** $x^2+3x-4=(x+4)(x-1)$, zero at $x=-4$ and $x=1$. Exclude both.
      > - **d.** $\sqrt x$ needs $x\ge0$. At $x=0$ the denominator $\sqrt0+0=0$, so exclude 0. Then $x>0$.
      > - **e.** Need $x^2-3x+2=(x-1)(x-2)\ge0$. This parabola opens upward, so it is non-negative outside its roots: $x\le1$ or $x\ge2$.
    related_terms: ["domain"]
    source_doc_page: 1
  - id: "4"
    text: |
      **Function notation.** (a) $f(x)=3x-4$: find $f(3)$ and $f(a)$.

      (b) $f(x)=3x^2-7x+6$: find $f(a+5)$ and simplify.

      (c) $f(x)=x^3-2x$: find $f(a+h)-f(a)$ and simplify.

      (d) $f(x)=\sqrt x$: find $\dfrac{h}{f(a+h)-f(a)}$ and simplify.
    solution: |
      > [!success] Printed answer
      > **a.** $f(3)=5$ and $f(a)=3a-4$. **b.** $f(a+5)=3a^2+23a+46$. **c.** $f(a+h)-f(a)=h(3a^2+3ah+h^2-2)$. **d.** $\dfrac{h}{f(a+h)-f(a)}=\sqrt{a+h}+\sqrt a$.

      > [!note] Working reconstructed to reach the printed answer
      > Replace every $x$ by the bracket, then expand.
      >
      > **a.** $f(3)=3\cdot3-4=5$; $f(a)=3a-4$.
      >
      > **b.**
      >
      > $$
      > f(a+5)=3(a+5)^2-7(a+5)+6=3a^2+30a+75-7a-35+6=3a^2+23a+46.
      > $$
      >
      > **c.**
      >
      > $$
      > f(a+h)-f(a)=(a+h)^3-2(a+h)-a^3+2a=3a^2h+3ah^2+h^3-2h=h(3a^2+3ah+h^2-2).
      > $$
      >
      > **d.** Multiply top and bottom by the conjugate $\sqrt{a+h}+\sqrt a$:
      >
      > $$
      > \frac{h}{\sqrt{a+h}-\sqrt a}\cdot\frac{\sqrt{a+h}+\sqrt a}{\sqrt{a+h}+\sqrt a}=\frac{h(\sqrt{a+h}+\sqrt a)}{(a+h)-a}=\sqrt{a+h}+\sqrt a.
      > $$

      > [!tip] Intuition
      > Parts (c) and (d) are the difference quotient used later to define the derivative. Factoring out $h$ is the key move.
    related_terms: ["function-notation", "difference-quotient", "conjugate"]
    source_doc_page: 1
  - id: "5"
    text: |
      **Graphs that are functions.** For each curve decide whether it is the graph of a function. The five sketches are: (1) an S-shaped curve that folds back on itself, (2) a smooth curve with a single value above each $x$, (3) a vertical line, (4) a horizontal line, (5) an ellipse.
    solution: |
      > [!success] Printed answer
      > Not functions: **1, 3, 5**.

      > [!note] Working reconstructed to reach the printed answer
      > Apply the [[Vertical Line Test]]: if some vertical line meets the curve twice (or at infinitely many points), it is not a function.
      >
      > - **1.** The curve folds back, so a vertical line crosses it more than once: not a function.
      > - **2.** and **4.** Each vertical line meets the curve at most once: functions.
      > - **3.** A vertical line has every $y$ at a single $x$: not a function.
      > - **5.** An ellipse has two points above most $x$: not a function.
    related_terms: ["vertical-line-test", "function"]
    source_doc_page: 1
  - id: "6"
    text: |
      **Piecewise functions: graph, domain and range.** Draw the graph of each function and find its domain and range.

      $$\text{a. } f(x)=\begin{cases}1 & 0\le x\le2\\ 3 & 2<x\le3\\ 5 & 3<x\le5\end{cases}\qquad \text{b. } f(x)=\begin{cases}x & 0\le x<2\\ 3 & 2\le x\le3\end{cases}$$
    solution: |
      > [!success] Printed answer
      > **a.** Domain $\{0\le x\le5\}$, range $\{y=1,3,5\}$.
      > **b.** Domain $\{0\le x\le3\}$, range $\{0\le y<2,\ y=3\}$.

      ![](/images/maths-for-economists-a/ps01-q6-piecewise-graphs.png)

      > [!note] Working reconstructed to reach the printed answer
      > **a.** The pieces cover $[0,2]$, $(2,3]$ and $(3,5]$ with no gaps, so the domain is $[0,5]$. The only heights used are 1, 3 and 5, so the range is the three values $\{1,3,5\}$. Open circles mark the ends that are excluded from each piece.
      >
      > **b.** The first piece is the line $y=x$ on $[0,2)$, so it reaches heights $0\le y<2$ (the end at $x=2$ is an open circle at height 2). The second piece is the constant 3 on $[2,3]$. Range: $0\le y<2$ together with $y=3$. The height 2 is never reached.

      > [!tip] Intuition
      > To read a range from a graph, project every point onto the $y$-axis. An open circle means that height is skipped unless another piece reaches it.
    related_terms: ["piecewise-function", "step-function", "domain", "minimal-range"]
    source_doc_page: 2
---

*Related: [[Lec_01-Functions, Domain and Sigma Notation]]*
