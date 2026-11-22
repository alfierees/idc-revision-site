---
title: "PS3"
subject: maths-for-economists-a
source_doc: /papers/maths-for-economists-a/ps-3.pdf
tags:
  - maths-for-economists-a
  - problem-set
  - composition-of-functions
  - graph-transformations
  - reflection
  - exponential-function
  - asymptote
ai_drafted: true
questions:
  - id: "1"
    text: |
      **A parabola and a line.** Given $g(x)=3x+1$ and $f(x)=6x^2-x-1$.

      (a) Factorize $f(x)$ and $f(g(x))$.

      (b) Draw $f(x)$ and $g(x)$ on the same axes and write the intersection points between them and their $x$ and $y$ intercepts.

      (c) Draw $f(x)+2$ and $g(x)+2$ on a new set of axes.

      (d) Draw $f(x+1)$ and $g(x+1)$ on a new set of axes.
    solution: |
      > [!success] Printed answer
      > **(a)** $f(x)=(2x-1)(3x+1)$ and $f(g(x))=(6x+1)(9x+4)$.
      > **(b)** Points marked: $(1,4)$, $(-\tfrac13,0)$, $(\tfrac12,0)$.
      > **(c)** Points marked: $(1,6)$ and $(-\tfrac13,2)$.
      > **(d)** Points marked: $(0,4)$, $(-1\tfrac13,0)$ and $(-\tfrac12,0)$.

      ![](/images/maths-for-economists-a/ps03-q1-f-and-g-shifts.png)

      > [!note] Working reconstructed to reach the printed answer
      > **(a)** $6x^2-x-1=(2x-1)(3x+1)$ (check: $6x^2+2x-3x-1$). Substituting $g$:
      >
      > $$
      > f(g(x))=6(3x+1)^2-(3x+1)-1=54x^2+36x+6-3x-2=54x^2+33x+4=(6x+1)(9x+4).
      > $$
      >
      > **(b)** Intercepts of $f$: $x=\tfrac12$ and $x=-\tfrac13$ (from the factors), $y=f(0)=-1$. Intercepts of $g$: $x=-\tfrac13$, $y=1$. The graphs meet where $6x^2-x-1=3x+1$, i.e. $3x^2-2x-1=0$, i.e. $(3x+1)(x-1)=0$: $x=-\tfrac13$ (height 0) and $x=1$ (height 4).
      >
      > **(c)** Adding 2 lifts every point by 2, so the intersections become $(-\tfrac13,2)$ and $(1,6)$.
      >
      > **(d)** Replacing $x$ by $x+1$ slides each graph **left** by 1, so the intersections become $(-\tfrac43,0)=(-1\tfrac13,0)$ and $(0,4)$, and the roots of $f$ become $-\tfrac43$ and $-\tfrac12$.
    related_terms: ["quadratic-function", "linear-function", "composition-of-functions", "vertical-translation", "horizontal-translation"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Composition.** $f(x)=x^2-2x+4$, $g(x)=\dfrac1{x^2}$, $h(x)=\dfrac1{\sqrt x-1}$.

      (a) Find and simplify (1) $f(g(x))$ and (2) $h(g(x))$.

      (b) Express each as a composition of two of the given functions: (1) $y=\dfrac{1}{(x^2-2x+4)^2}$, (2) $y=(\sqrt x-1)^2$.
    solution: |
      > [!success] Printed answer
      > (a1) $\dfrac{1-2x^2+4x^4}{x^4}$. (a2) $\dfrac{x}{1-x}$. (b1) $g(f(x))=\dfrac{1}{(x^2-2x+4)^2}$. (b2) $g(h(x))=(\sqrt x-1)^2$.

      > [!note] Working reconstructed to reach the printed answer
      > **(a1)** Put $g$ inside $f$:
      >
      > $$
      > f\!\left(\tfrac1{x^2}\right)=\frac1{x^4}-\frac2{x^2}+4=\frac{1-2x^2+4x^4}{x^4}.
      > $$
      >
      > **(a2)**
      >
      > $$
      > h\!\left(\tfrac1{x^2}\right)=\frac{1}{\sqrt{1/x^2}-1}=\frac1{\frac1x-1}=\frac{x}{1-x}.
      > $$
      >
      > **(b1)** $g$ of $(x^2-2x+4)$ is $\dfrac1{(x^2-2x+4)^2}$, so $y=g(f(x))$.
      >
      > **(b2)** $g$ of $h(x)=\dfrac1{\sqrt x-1}$ is $\dfrac1{\left(\frac1{\sqrt x-1}\right)^2}=(\sqrt x-1)^2$, so $y=g(h(x))$.

      > [!warning] Check of (a2): the key assumes $x>0$
      > $\sqrt{1/x^2}=\dfrac1{|x|}$, not $\dfrac1x$. The printed $\dfrac{x}{1-x}$ is right for $x>0$. For $x<0$ the same working gives $\dfrac1{-\frac1x-1}=\dfrac{-x}{1+x}$. The printed answer is kept as given; take $x>0$ (and $x\neq1$) as its domain.
    related_terms: ["composition-of-functions"]
    source_doc_page: 1
  - id: "3"
    text: |
      **Reflections of $\sqrt x$.** Given the graph of $f(x)=\sqrt x$ (a curve starting at the origin and rising to the right), (a) draw $y=\sqrt{-x}$, (b) draw $y=-\sqrt x$.
    solution: |
      > [!success] Printed answer
      > (a) The curve starting at the origin and rising to the **left**. (b) The curve starting at the origin and falling to the **right** (below the $x$-axis).

      ![](/images/maths-for-economists-a/ps03-q3-sqrt-reflections.png)

      > [!note] Working reconstructed to reach the printed answer
      > $-x$ inside the root flips the graph across the $y$-axis (left-right mirror); the domain becomes $x\le0$. A minus sign outside flips it across the $x$-axis (up-down mirror); the range becomes $y\le0$. See [[Reflection of a Graph]].
    related_terms: ["reflection-of-a-graph"]
    source_doc_page: 1
  - id: "4"
    text: |
      **Exponential graphs.** (a) Draw each function using reflections and translations of the basic exponential graph. (b) Find the $x$ and $y$ intercepts and the horizontal asymptote.

      $$\text{(i) } y=-5^{-x} \qquad \text{(ii) } y=-3+e^{1+x} \qquad \text{(iii) } y=|e^x-1|$$
    solution: |
      > [!success] Printed answer (hand-drawn)
      > - The curve for $y=-5^{-x}$ lies below the axis and levels off to the axis on the right.
      > - The curve for $y=-3+e^{1+x}$ is labelled with the intercept values $0.099$ (on the $x$-axis) and $-0.28$ (on the $y$-axis).
      > - The curve for $|e^x-1|$ has its horizontal asymptote labelled $y=1$.

      ![](/images/maths-for-economists-a/ps03-q4-exponential-graphs.png)

      > [!note] Working reconstructed to reach the printed answer
      > **(i) $y=-5^{-x}$.** Start with $5^x$; $-x$ flips it left-right, the outer minus flips it upside down. Horizontal asymptote $y=0$ (as $x\to\infty$). $y$-intercept: $-5^0=-1$. No $x$-intercept, since $5^{-x}>0$.
      >
      > **(ii) $y=-3+e^{1+x}$.** Shift $e^x$ left by 1 and down by 3. Horizontal asymptote $y=-3$ (as $x\to-\infty$). $y$-intercept: $-3+e\approx-0.28$ (matches the printed $-0.28$). $x$-intercept: $e^{1+x}=3\Rightarrow x=\ln3-1\approx0.099$ (matches the printed $0.099$).
      >
      > **(iii) $y=|e^x-1|$.** Shift $e^x$ down by 1, then reflect the negative part (where $x<0$) above the axis. It touches the origin: both intercepts are $(0,0)$. For $x\to-\infty$, $e^x\to0$ so $|e^x-1|\to1$: asymptote $y=1$ (matches the printed $y=1$).

      > [!note] Lettering mismatch in the source
      > The question lists the functions as "b. $y=-5^{-x}$", "a. $y=-3+e^{1+x}$", "c. $y=|e^x-1|$", but the answer graphs are drawn in the order (the $-5^{-x}$ curve), (the $-3+e^{1+x}$ curve), then $|e^x-1|$ and are labelled a, b, c. The key's "a" and "b" are therefore swapped relative to the question lettering. This note labels the functions (i), (ii), (iii) and matches each to its graph by its shape and intercepts.
    related_terms: ["exponential-function", "reflection-of-a-graph", "vertical-translation", "horizontal-translation", "horizontal-asymptote", "absolute-value-function"]
    source_doc_page: 1
---

*Related: [[Lec_03-Composition, Transformations, Exponentials and Limits]]*
