---
title: "PS4"
subject: maths-for-economists-a
source_doc: /papers/maths-for-economists-a/ps-4.pdf
tags:
  - maths-for-economists-a
  - problem-set
  - limit
  - one-sided-limit
  - continuity
  - piecewise-function
  - direct-substitution
  - conjugate
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Values, limits and discontinuities from a graph.** The graph below shows $f$. (a) Find each limit if it exists: $\lim_{x\to0}$, $\lim_{x\to1}$, $\lim_{x\to2}$, $\lim_{x\to4}$ of $f(x)$. (b) Find $f(0)$, $f(1)$, $f(2)$, $f(4)$ if defined. (c) At which of $x=0,1,2,4$ is $f$ discontinuous?

      ![](/images/maths-for-economists-a/ps04-q1-source-graph.png)
    solution: |
      > [!success] Printed answer
      > (a) $1.\ 2$, $2.\ 2$, $3.$ does not exist, $4.\ 4$. (b) $1.\ 2$, $2.\ 2$, $3.\ 2$, $4.$ does not exist. (c) Discontinuous for $x=4$ and $x=2$.

      > [!note] Working reconstructed to reach the printed answer
      > Reading the graph: height 2 up to $x=1$, then a line falling to an open circle at $(2,1)$. At $x=2$ there is a filled dot at height 2, from which a line rises with slope 1 and passes an open circle at $(4,4)$.
      >
      > - $x=0$ and $x=1$: the limit and the value agree at 2.
      > - $x=2$: left limit $1$, right limit $2$, so the limit does not exist, though $f(2)=2$. Discontinuous.
      > - $x=4$: the limit from both sides is 4, but there is a hole, so $f(4)$ is undefined. Discontinuous.
    related_terms: ["limit", "one-sided-limit", "continuity", "jump-discontinuity", "removable-discontinuity"]
    source_doc_page: 1
  - id: "2"
    text: |
      **An absolute value quotient.** $f(x)=\dfrac{x^2+3x}{|x+3|}$. (a) Write it as a compound function. (b) Find $\lim_{x\to-3}f(x)$. (c) Draw its graph and verify (b) graphically.
    solution: |
      > [!success] Printed answer
      > (a) $f(x)=\begin{cases}x & x>-3\\ -x & x<-3\end{cases}$. (b) The limit does not exist because $\lim_{x\to-3^+}f(x)=-3$ and $\lim_{x\to-3^-}f(x)=3$. (c) Graph with open circles at $x=-3$.

      ![](/images/maths-for-economists-a/ps04-q2-abs-quotient.png)

      > [!note] Working reconstructed to reach the printed answer
      > $x^2+3x=x(x+3)$. For $x>-3$, $|x+3|=x+3$, so $f=x$. For $x<-3$, $|x+3|=-(x+3)$, so $f=-x$. At $x=-3$ the function is undefined. Approaching from the right the value heads to $-3$; from the left it heads to $3$. Different one-sided limits mean no limit ([[One-Sided Limit]]).
    related_terms: ["absolute-value-function", "piecewise-function", "one-sided-limit", "limit"]
    source_doc_page: 1
  - id: "3"
    text: |
      **Values and limits from a second graph.** The graph of $f(x)$ is shown. (a) For $x=-2,-1,0,1,2$ find the value of the function at the point and the limit at the point. (b) For each, decide if $f$ is continuous and explain.

      ![](/images/maths-for-economists-a/ps04-q3-source-graph.png)
    solution: |
      > [!success] Printed answer
      > (a) $\lim_{x\to-2}f=1$, $\lim_{x\to2}f=2$, $\lim_{x\to0}f=1$, $\lim_{x\to1}f$ = none, $\lim_{x\to-1}f=0$. And $f(-2)=3$, $f(2)$ = none, $f(1)=1$, $f(0)=1$, $f(-1)=0$.
      > (b) Discontinuous for $x=-2,1,2$.

      > [!note] Working reconstructed to reach the printed answer
      > - $x=-2$: flat at 1 on the left, the V descends from an open circle at height 1, so the limit is 1, but the filled dot sits at 3. Value $\ne$ limit: discontinuous.
      > - $x=-1$: bottom of the V at 0. Continuous.
      > - $x=0$: on the rising line, value and limit both 1. Continuous.
      > - $x=1$: the line heads to height 2 on the left, but the curve starts from the filled dot at height 1 on the right. Limits differ, so none exists. Discontinuous ($f(1)=1$).
      > - $x=2$: the curve passes through an open circle at height 2, so the limit is 2 but $f(2)$ is undefined. Discontinuous.
    related_terms: ["limit", "continuity", "jump-discontinuity", "removable-discontinuity"]
    source_doc_page: 1
  - id: "4"
    text: |
      **Piecewise with a rational piece.** $f(x)=\begin{cases}2x-3 & x\ge2\\ \dfrac{2x}{x-3} & x<2\end{cases}$. (a) Find the domain. (b) Is the function continuous at $x=2$? (c) Find the intervals of continuity.
    solution: |
      > [!success] Printed answer
      > (a) All $x$. (b) No. (c) $x<2,\ x>2$.

      > [!note] Working reconstructed to reach the printed answer
      > **(a)** The rational piece is undefined at $x=3$, but that piece only applies for $x<2$, so $x=3$ is never used. The other piece is a polynomial. Domain: all $x$.
      >
      > **(b)** Right: $f(2)=2\cdot2-3=1$. Left: $\dfrac{2\cdot2}{2-3}=-4$. The one-sided limits differ, so $f$ is not continuous at 2.
      >
      > **(c)** Each piece is continuous on its own region, so $f$ is continuous for $x<2$ and for $x>2$.
    related_terms: ["piecewise-function", "domain", "continuity", "one-sided-limit"]
    source_doc_page: 2
  - id: "5"
    text: |
      **Domain and continuity of formulas.** Find the domain and the intervals of continuity: (i) $g(x)=\dfrac{2}{x-5}$, (ii) $h(x)=\dfrac{|x^2+3x|}{x}$.
    solution: |
      > [!success] Printed answer
      > "Since the functions are non-piecewise functions, their interval of continuity is identical to their domain, meaning: $h: x<5,\ x>5$, $g: x<0,\ x>0$."

      > [!warning] Function labels look swapped in the key
      > From the formulas, $g(x)=\dfrac2{x-5}$ is undefined at $x=5$, so its domain is $x<5,\ x>5$. And $h(x)=\dfrac{|x^2+3x|}{x}$ is undefined at $x=0$, so its domain is $x<0,\ x>0$. The key prints these the other way round ($h$ with 5, $g$ with 0). The printed answer is kept as given; the two intervals themselves are right, only the letters are swapped.

      > [!note] Working reconstructed to reach the printed answer
      > A quotient of continuous functions is continuous wherever the denominator is non-zero, so the set of continuity equals the domain: the real line with the one forbidden point removed.
    related_terms: ["domain", "continuity"]
    source_doc_page: 2
  - id: "6"
    text: |
      **Sketch and continuity of piecewise functions.** Sketch each function and find its intervals of continuity.

      $$\text{a. } f(x)=\begin{cases}x^2 & x\le1\\ 2x & x>1\end{cases}\quad \text{b. } g(x)=\begin{cases}x^2 & x\le2\\ 2x & x>2\end{cases}\quad \text{c. } h(x)=\begin{cases}x & x<0\\ 1 & x=0\\ x & x>0\end{cases}$$
    solution: |
      > [!success] Printed answer
      > **a.** $x>1$ or $x<1$. **b.** all $x$. **c.** $x>0$ or $x<0$.

      ![](/images/maths-for-economists-a/ps04-q6-piecewise-continuity.png)

      > [!note] Working reconstructed to reach the printed answer
      > Check the join point of each.
      >
      > - **a.** At $x=1$: left limit $1^2=1$, right limit $2\cdot1=2$. They differ: a jump. Continuous on $x<1$ and $x>1$.
      > - **b.** At $x=2$: left $2^2=4$, right $2\cdot2=4$, and $g(2)=4$. The pieces meet, so $g$ is continuous everywhere.
      > - **c.** At $x=0$: both sides tend to $0$, but $h(0)=1$. A removable-type break (the value is out of place). Continuous for $x<0$ and $x>0$.
    related_terms: ["piecewise-function", "continuity", "jump-discontinuity", "removable-discontinuity", "one-sided-limit"]
    source_doc_page: 2
  - id: "7"
    text: |
      **Computing limits.** Calculate:

      $$\text{(1) } \lim_{x\to1}(3x-2) \quad \text{(2) } \lim_{x\to5}9 \quad \text{(3) } \lim_{x\to1}\frac{x-2}{x^2-2x}$$

      $$\text{(4) } \lim_{x\to-3}\frac{x^2-9}{x+3} \quad \text{(5) } \lim_{x\to-3}\frac{x^2+3x}{|x+3|} \quad \text{(6) } \lim_{x\to-3}\frac{x^2+4x+3}{x^2-9}$$

      $$\text{(7) } \lim_{x\to2}\frac{\sqrt x-\sqrt2}{x-2} \quad \text{(8) } \lim_{x\to3}\frac{1-\sqrt{x-2}}{x-3}$$
    solution: |
      > [!success] Printed answer
      > (1) $1$. (2) $9$. (3) $1$. (4) $-6$. (5) not defined. (6) $\tfrac13$. (7) $\dfrac1{2\sqrt2}$. (8) $-\tfrac12$.

      > [!note] Working reconstructed to reach the printed answer
      > Try [[Direct Substitution]] first; if you get $0/0$, factor or multiply by a conjugate.
      >
      > **(1)** $3(1)-2=1$. **(2)** A constant: $9$.
      >
      > **(3)** Substitute: $\dfrac{-1}{1-2}=\dfrac{-1}{-1}=1$ (the denominator is not zero, so no trick is needed).
      >
      > **(4)** $\dfrac{(x-3)(x+3)}{x+3}=x-3\to-6$.
      >
      > **(5)** This is the function from Q2: the one-sided limits are $-3$ (right) and $3$ (left), so the limit does not exist (the printed "not defined").
      >
      > **(6)** Factor: $\dfrac{(x+1)(x+3)}{(x-3)(x+3)}=\dfrac{x+1}{x-3}\to\dfrac{-2}{-6}=\dfrac13$.
      >
      > **(7)** Multiply by the conjugate $\sqrt x+\sqrt2$:
      >
      > $$
      > \frac{x-2}{(x-2)(\sqrt x+\sqrt2)}=\frac1{\sqrt x+\sqrt2}\to\frac1{2\sqrt2}.
      > $$
      >
      > **(8)** Multiply by $1+\sqrt{x-2}$:
      >
      > $$
      > \frac{1-(x-2)}{(x-3)(1+\sqrt{x-2})}=\frac{-(x-3)}{(x-3)(1+\sqrt{x-2})}=\frac{-1}{1+\sqrt{x-2}}\to-\frac12.
      > $$

      > [!tip] Intuition
      > A limit asks where the function is heading, not what happens at the point. That is why you may cancel the common factor that makes the expression $0/0$: it only matters at the point itself.
    related_terms: ["limit", "direct-substitution", "conjugate", "indeterminate-form", "one-sided-limit"]
    source_doc_page: 2
---

*Related: [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]]*
