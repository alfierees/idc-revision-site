---
title: "PS5"
subject: maths-for-economists-a
source_doc: /papers/maths-for-economists-a/ps-5.pdf
tags:
  - maths-for-economists-a
  - problem-set
  - limits
  - infinite-limits
  - limits-at-infinity
  - one-sided-limit
  - vertical-asymptote
  - indeterminate-forms
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Calculate the following limits.**

      **(1)** $\displaystyle\lim_{x\to 2}\frac{4}{(x-2)^2}$

      Taught in [[Lec_05-Infinite Limits]] (section 2) and [[Lec_04-Limits and Continuity]] (one-sided limits, absolute values).
    solution: |
      Numerator $\to 4>0$. Denominator $(x-2)^2\to 0$ and is **positive on both sides** (a square). So the quotient is a positive number over a tiny positive number.

      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > \lim_{x\to2}\frac{4}{(x-2)^2}=\frac{4}{0^+}=\infty
      > $$

      > [!success] Answer (printed)
      > $\infty$
    related_terms: ["infinite-limit", "vertical-asymptote", "one-sided-limit"]
    source_doc_page: 1
  - id: "1b"
    text: |
      **Calculate the following limits.**

      **(2)** $\displaystyle\lim_{x\to 2}\frac{x^2-3x+2}{(x-2)^2}$
    solution: |
      Substituting gives $0/0$, so factorise: $x^2-3x+2=(x-1)(x-2)$.

      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > \frac{x^2-3x+2}{(x-2)^2}=\frac{(x-1)(x-2)}{(x-2)^2}=\frac{x-1}{x-2}
      > $$
      >
      > Near $x=2$ the numerator is about $1>0$ and the denominator is tiny.
      >
      > - From the right ($x\to2^+$): $\dfrac{1}{0^+}=+\infty$.
      > - From the left ($x\to2^-$): $\dfrac{1}{0^-}=-\infty$.
      >
      > The one-sided limits disagree, so the two-sided limit does not exist.

      > [!success] Answer (printed)
      > not defined

      > [!tip] Intuition
      > A square in the denominator gave one sign in Q1(1). Cancelling one factor leaves an **odd** power, so the sign flips across $x=2$. Count the power left after cancelling.
    related_terms: ["indeterminate-form", "one-sided-limit", "infinite-limit"]
    source_doc_page: 1
  - id: "1c"
    text: |
      **Calculate the following limits.**

      **(3)** $\displaystyle\lim_{x\to 3^-}\frac{x+5}{(x-3)^3}$
    solution: |
      $x\to3^-$ means $x$ slightly below 3. Numerator $\to 8>0$. $(x-3)$ is a small **negative** number, and its cube is also negative.

      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > \lim_{x\to3^-}\frac{x+5}{(x-3)^3}=\frac{8}{0^-}=-\infty
      > $$

      > [!success] Answer (printed)
      > $-\infty$
    related_terms: ["one-sided-limit", "infinite-limit"]
    source_doc_page: 1
  - id: "1d"
    text: |
      **Calculate the following limits.**

      **(4)** $\displaystyle\lim_{x\to 0^-}\frac{x-1}{\left|-x^2+x\right|}$
    solution: |
      Factor the absolute value: $-x^2+x=x(1-x)$. For $x$ slightly **below** $0$: $x<0$ and $1-x>0$, so $x(1-x)<0$ and the absolute value flips its sign.

      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > \left|-x^2+x\right|=-(-x^2+x)=x^2-x\quad(x\to0^-),
      > $$
      >
      > which is a small **positive** number ($0^+$). The numerator $x-1\to-1$. So
      >
      > $$
      > \lim_{x\to0^-}\frac{x-1}{\left|-x^2+x\right|}=\frac{-1}{0^+}=-\infty
      > $$

      > [!success] Answer (printed)
      > $-\infty$
    related_terms: ["one-sided-limit", "infinite-limit", "absolute-value-function"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Calculate the following limits.**

      **(1)** $\displaystyle\lim_{x\to-\infty}\left(2x^2-3x+1\right)$

      Taught in [[Lec_05-Infinite Limits]] (section 3, degree rule).
    solution: |
      Only the leading term matters at infinity. Because the power is even, $x^2\to\infty$ in **both** directions.

      > [!note] Working reconstructed to reach the printed answers
      >
      > $$
      > 2x^2-3x+1=x^2\left(2-\frac3x+\frac1{x^2}\right)\to(\infty)(2)=\infty\quad\text{as }x\to\pm\infty
      > $$

      > [!success] Answers (printed)
      > (1) $\infty$  (2) $\infty$
    related_terms: ["limit-at-infinity", "leading-term"]
    source_doc_page: 1
  - id: "2b"
    text: |
      **Calculate the following limits.**

      **(2)** $\displaystyle\lim_{x\to\infty}\left(2x^2-3x+1\right)$
    solution: |
      Only the leading term matters at infinity. Because the power is even, $x^2\to\infty$ in **both** directions.

      > [!note] Working reconstructed to reach the printed answers
      >
      > $$
      > 2x^2-3x+1=x^2\left(2-\frac3x+\frac1{x^2}\right)\to(\infty)(2)=\infty\quad\text{as }x\to\pm\infty
      > $$

      > [!success] Answers (printed)
      > (1) $\infty$  (2) $\infty$
    related_terms: ["limit-at-infinity", "leading-term"]
    source_doc_page: 1
  - id: "2c"
    text: |
      **Calculate the following limits.**

      **(3)** $\displaystyle\lim_{x\to\infty}\frac{x^2-2}{2x^2-3x+1}$
    solution: |
      Same degree top and bottom, so divide by $x^2$.

      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > \frac{x^2-2}{2x^2-3x+1}=\frac{1-\frac2{x^2}}{2-\frac3x+\frac1{x^2}}\to\frac{1}{2}
      > $$

      > [!success] Answer (printed)
      > $\dfrac12$
    related_terms: ["limit-at-infinity", "leading-term"]
    source_doc_page: 1
  - id: "3a"
    text: |
      **Given the graph of $f(x)$, find:**

      a. $\displaystyle\lim_{x\to\infty}f(x)$ and $\displaystyle\lim_{x\to-\infty}f(x)$

      ![](/images/maths-for-economists-a/ps05-q3-given-graph.png)

      Taught in [[Lec_04-Limits and Continuity]] (section 3, reading limits off a graph) and [[Lec_05-Infinite Limits]].
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > On the far right the curve flattens onto the $x$-axis from above. On the far left it flattens onto the $x$-axis from below. Both ends approach height $0$, so both limits equal $0$.

      > [!success] Answer (printed)
      > $0$
    related_terms: ["limit-at-infinity", "horizontal-asymptote"]
    source_doc_page: 1
  - id: "3b"
    text: |
      **Given the graph of $f(x)$, find:**

      b. $\displaystyle\lim_{x\to-1^-}f(x)$ and $\displaystyle\lim_{x\to-1^+}f(x)$

      ![](/images/maths-for-economists-a/ps05-q3-given-graph.png)
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > The dotted line $x=-1$ is a vertical asymptote. Just to the **left** the curve plunges downward. Just to the **right** it shoots upward.
      >
      > $$
      > \lim_{x\to-1^-}f(x)=-\infty,\qquad \lim_{x\to-1^+}f(x)=+\infty
      > $$

      > [!success] Answer (printed)
      > $\infty,\ -\infty$

      > [!warning] Order of the printed pair
      > The question asks for $x\to-1^-$ first and $x\to-1^+$ second. Reading the graph I get $-\infty$ then $+\infty$, the **reverse** of the printed order. The key most likely lists the two values without matching the order, so the printed answer is kept as printed. Use the graph, not the order on the sheet: left side down, right side up.
    related_terms: ["one-sided-limit", "vertical-asymptote", "infinite-limit"]
    source_doc_page: 1
  - id: "4a"
    text: |
      **Calculate:**

      a. $\displaystyle\lim_{x\to\infty}\frac{x^2-2}{2x^2-3x+1}$

      Taught in [[Lec_05-Infinite Limits]] (section 3) and, for part e, [[Lec_04-Limits and Continuity]] (section 5.2, the $\frac00$ case).
    solution: |
      Identical to Q2(3).

      > [!success] Answer (printed)
      > $\dfrac12$
    related_terms: ["limit-at-infinity", "leading-term"]
    source_doc_page: 1
  - id: "4b"
    text: |
      **Calculate:**

      b. $\displaystyle\lim_{x\to\infty}\frac{27x^4-3x+2}{(3x-2)^4}$
    solution: |
      Compare the leading terms. $(3x-2)^4$ has leading term $81x^4$.

      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > \frac{27x^4-3x+2}{(3x-2)^4}\sim\frac{27x^4}{81x^4}=\frac13
      > $$

      > [!success] Answer (printed)
      > $\dfrac13$
    related_terms: ["limit-at-infinity", "leading-term"]
    source_doc_page: 1
  - id: "4c"
    text: |
      **Calculate:**

      c. $\displaystyle\lim_{x\to\infty}\left(5x\sqrt{x}-7x^2\right)$
    solution: |
      Both terms go to infinity but with opposite sign. The higher power wins: $x^{3/2}$ against $x^2$.

      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > 5x\sqrt x-7x^2=x^2\left(5x^{-1/2}-7\right)\to(\infty)(0-7)=-\infty
      > $$

      > [!success] Answer (printed)
      > $-\infty$
    related_terms: ["limit-at-infinity", "leading-term"]
    source_doc_page: 1
  - id: "4d"
    text: |
      **Calculate:**

      d. $\displaystyle\lim_{x\to-\infty}\frac{x\sqrt{3x^2+x}}{x^2-8}$
    solution: |
      For $x\to-\infty$, $x$ is negative, so $\sqrt{x^2}=|x|=-x$. This is the sign trap.

      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > x\sqrt{3x^2+x}=x\,|x|\sqrt{3+\tfrac1x}=-x^2\sqrt{3+\tfrac1x}
      > $$
      >
      > $$
      > \frac{x\sqrt{3x^2+x}}{x^2-8}=\frac{-\sqrt{3+\frac1x}}{1-\frac8{x^2}}\to-\sqrt3
      > $$

      > [!success] Answer (printed)
      > $-\sqrt3$

      > [!tip] Intuition
      > Whenever $x\to-\infty$ and you pull $x$ out of a square root, write $\sqrt{x^2}=-x$. Forgetting this gives $+\sqrt3$.
    related_terms: ["limit-at-infinity", "leading-term", "absolute-value-function"]
    source_doc_page: 1
  - id: "4e"
    text: |
      **Calculate:**

      e. $\displaystyle\lim_{x\to2}\frac{x^3-8}{x-2}$  (hint: $a^3-b^3=(a-b)(a^2+ab+b^2)$)
    solution: |
      Substituting $x=2$ gives $\frac00$. Use the hint to factor the numerator.

      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > \frac{x^3-8}{x-2}=\frac{(x-2)(x^2+2x+4)}{x-2}=x^2+2x+4\to4+4+4=12
      > $$

      > [!success] Answer (printed)
      > $12$
    related_terms: ["indeterminate-form", "direct-substitution", "limit"]
    source_doc_page: 1
  - id: "4f"
    text: |
      **Calculate:**

      f. $\displaystyle\lim_{x\to-\infty}\left(x-\sqrt{x^2-2x}\right)$
    solution: |
      Both $x\to-\infty$ and $-\sqrt{x^2-2x}\to-\infty$, so there is no cancellation: it is $-\infty-\infty$, not $\infty-\infty$.

      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > x-\sqrt{x^2-2x}\to(-\infty)-(+\infty)=-\infty
      > $$
      >
      > Check by rationalising: $x-\sqrt{x^2-2x}=\dfrac{2x}{x+\sqrt{x^2-2x}}$. For $x<0$, $\sqrt{x^2-2x}=-x\sqrt{1-\frac2x}$, so this is $\dfrac{2}{1-\sqrt{1-2/x}}$. The denominator tends to $0^-$ (since $\sqrt{1-2/x}$ is slightly above $1$ for $x<0$), giving $\dfrac{2}{0^-}=-\infty$.

      > [!success] Answer (printed)
      > $-\infty$
    related_terms: ["limit-at-infinity", "conjugate", "indeterminate-form"]
    source_doc_page: 1
  - id: "4g"
    text: |
      **Calculate:**

      g. $\displaystyle\lim_{x\to\infty}x\left(1-\sqrt{1-\frac2x}\right)$
    solution: |
      Form $\infty\cdot0$. Rationalise the bracket by multiplying and dividing by the conjugate.

      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > x\left(1-\sqrt{1-\tfrac2x}\right)=x\cdot\frac{1-\left(1-\frac2x\right)}{1+\sqrt{1-\frac2x}}=\frac{2}{1+\sqrt{1-\frac2x}}\to\frac{2}{1+1}=1
      > $$

      > [!success] Answer (printed)
      > $1$
    related_terms: ["conjugate", "limit-at-infinity", "indeterminate-form"]
    source_doc_page: 1
---

*Related: [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_03-Composition, Transformations, Exponentials and Limits]]*
