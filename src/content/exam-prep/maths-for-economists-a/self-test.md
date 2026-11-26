---
title: "Quick Self-Test"
subject: maths-for-economists-a
type: self-test
description: "21 new exam-style questions in the order of the course, each with the full working. Solve on paper, then reveal the answer; four are quick multiple-choice checks."
course: Maths for Economists A
semester: 1
year: 1
order: 6
tags:
  - maths-for-economists-a
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "1 · Domain"
    text: |
      Find the domain of $f(x) = \dfrac{\sqrt{4-x}}{x^2-1}$.
    solution: |
      The root needs $4 - x \ge 0$, so $x \le 4$. The denominator needs $x^2 - 1 \neq 0$, so $x \neq \pm1$.

      **Domain:** $x \le 4$, $x \neq -1$, $x \neq 1$.
  - id: "2"
    title: "2 · Is it a function?"
    text: |
      a. Does $y^2 - x = 4$ define $y$ as a function of $x$?

      b. Does $xy - 2y = x$? On which $x$?
    solution: |
      a. **No.** $y = \pm\sqrt{x+4}$: for $x = 0$ both $y = 2$ and $y = -2$ satisfy it.

      b. $y(x - 2) = x$, so $y = \dfrac{x}{x-2}$: one $y$ for each $x$, so **yes, for $x \neq 2$**. At $x = 2$ the equation reads $0 = 2$: no $y$ at all, so it is not a function on all real $x$.
  - id: "3"
    title: "3 · A 0/0 limit by factoring"
    text: |
      $\displaystyle\lim_{x\to3}\frac{x^2-9}{x^2-x-6}$
    solution: |
      Substituting gives $\tfrac00$. Factor and cancel:

      $$
      \frac{(x-3)(x+3)}{(x-3)(x+2)}=\frac{x+3}{x+2}\;\longrightarrow\;\frac65
      $$

      **Answer:** $\tfrac65$.
  - id: "4"
    title: "4 · A 0/0 limit with a root"
    text: |
      $\displaystyle\lim_{x\to4}\frac{\sqrt x-2}{x-4}$
    solution: |
      Multiply by the conjugate $\sqrt x + 2$:

      $$
      \frac{(\sqrt x-2)(\sqrt x+2)}{(x-4)(\sqrt x+2)}=\frac{x-4}{(x-4)(\sqrt x+2)}=\frac1{\sqrt x+2}\;\longrightarrow\;\frac14
      $$

      (Or factor $x - 4 = (\sqrt x - 2)(\sqrt x + 2)$ directly.) **Answer:** $\tfrac14$.
  - id: "5"
    title: "5 · An absolute value decides the limit"
    text: |
      $\displaystyle\lim_{x\to1}\frac{x-1}{\lvert x^2-1\rvert}$
    solution: |
      $\lvert x^2 - 1\rvert = \lvert x-1\rvert\,\lvert x+1\rvert$, and near $x = 1$, $\lvert x + 1\rvert = x + 1$.

      - $x \to 1^+$: $\lvert x - 1\rvert = x - 1$, so the expression is $\dfrac{1}{x+1} \to \dfrac12$.
      - $x \to 1^-$: $\lvert x - 1\rvert = -(x - 1)$, so it is $\dfrac{-1}{x+1} \to -\dfrac12$.

      The one-sided limits differ: **the limit does not exist**.
  - id: "6"
    title: "6 · A root at minus infinity"
    text: |
      $\displaystyle\lim_{x\to-\infty}\frac{\sqrt{4x^2+1}}{3x-2}$
    solution: |
      $\sqrt{4x^2+1} = \lvert x\rvert\sqrt{4 + \tfrac1{x^2}} = -x\sqrt{4+\tfrac1{x^2}}$ for $x < 0$. So

      $$
      \frac{-x\sqrt{4+\frac1{x^2}}}{x\left(3-\frac2x\right)}=\frac{-\sqrt{4+\frac1{x^2}}}{3-\frac2x}\;\longrightarrow\;-\frac23
      $$

      **Answer:** $-\tfrac23$. (At $+\infty$ it would be $+\tfrac23$.)
  - id: "7"
    title: "7 · An Euler limit at infinity"
    text: |
      $\displaystyle\lim_{x\to\infty}\left(\frac{x+5}{x-1}\right)^{2x}$
    solution: |
      The base $\to 1$ and the exponent $\to \infty$: a $1^\infty$ form. Write the base as $1 + \text{small}$:

      $$
      \frac{x+5}{x-1}=1+\frac{6}{x-1},\qquad \left(1+\frac6{x-1}\right)^{2x}=\left[\left(1+\frac6{x-1}\right)^{\frac{x-1}6}\right]^{\frac{12x}{x-1}}
      $$

      The bracket $\to e$ and $\tfrac{12x}{x-1} \to 12$. **Answer:** $e^{12}$.
  - id: "8"
    title: "8 · An Euler limit at zero"
    text: |
      $\displaystyle\lim_{x\to0}(1-3x)^{1/x}$
    solution: |
      Base $\to 1$, exponent $\to \pm\infty$. With $f = -3x$ and $g = \tfrac1x$, $f \cdot g = -3$:

      $$
      (1-3x)^{1/x}=\left[(1-3x)^{\frac{1}{-3x}}\right]^{-3}\;\longrightarrow\;e^{-3}
      $$

      **Answer:** $e^{-3}$.
  - id: "9"
    title: "9 · Euler or not?"
    text: |
      $\displaystyle\lim_{x\to\infty}\left(\frac{2x+1}{x+3}\right)^{\frac{x+1}{x}}$ equals:
    options:
      - label: a
        text: |
          $2$
        correct: true
        why: |
          Base $\to 2$ and exponent $\to 1$, so the limit is $2^1 = 2$. Not a $1^\infty$ form.
      - label: b
        text: |
          $e^2$
        why: |
          That would need the base to tend to $1$. Here it tends to $2$.
      - label: c
        text: |
          $e$
        why: |
          Euler's $e$ only appears in a $1^\infty$ form.
      - label: d
        text: |
          $\infty$
        why: |
          The exponent tends to $1$, not $\infty$, so nothing blows up.
    solution: |
      Always find the base and the exponent separately first. $\tfrac{2x+1}{x+3} \to 2$ and $\tfrac{x+1}{x} \to 1$, so the answer is $2^1 = 2$.
  - id: "10"
    title: "10 · Asymptotes of an exponential"
    text: |
      Find the asymptotes of $f(x) = e^{\frac{1}{x+1}} - 1$.
    solution: |
      **Vertical**, at $x = -1$:

      - $x \to -1^+$: $\tfrac1{x+1} \to +\infty$, so $f \to \infty$.
      - $x \to -1^-$: $\tfrac1{x+1} \to -\infty$, so $e^{\frac1{x+1}} \to 0$ and $f \to -1$.

      One infinite side is enough: **vertical asymptote $x = -1$** (from the right).

      **Horizontal:** as $x \to \pm\infty$, $\tfrac1{x+1} \to 0$, so $f \to e^0 - 1 = 0$. **Horizontal asymptote $y = 0$** at both ends.
  - id: "11"
    title: "11 · Continuity and differentiability with a parameter"
    text: |
      $$
      f(x)=\begin{cases}x^2+a & x\le1\\ 4\sqrt x & x>1\end{cases}
      $$

      a. Find $a$ so that $f$ is continuous.

      b. With that $a$, use the definition of the derivative to decide whether $f$ is differentiable at $x = 1$.

      c. If it is, find the tangent line at $x = 1$.
    solution: |
      **a.** $f(1) = 1 + a$, left limit $1 + a$, right limit $4\sqrt1 = 4$. Continuous when $1 + a = 4$: $a = 3$.

      **b.** $f(1) = 4$.

      - Left ($h \to 0^-$): $\dfrac{(1+h)^2 + 3 - 4}{h} = \dfrac{2h + h^2}{h} = 2 + h \to 2$.
      - Right ($h \to 0^+$): $\dfrac{4\sqrt{1+h} - 4}{h} = \dfrac{4\left(\sqrt{1+h} - 1\right)\left(\sqrt{1+h}+1\right)}{h\left(\sqrt{1+h}+1\right)} = \dfrac{4}{\sqrt{1+h} + 1} \to 2$.

      Both one-sided limits are $2$: **differentiable**, $f'(1) = 2$.

      **c.** $y - 4 = 2(x - 1)$, so $y = 2x + 2$.
  - id: "12"
    title: "12 · Name the point (I)"
    text: |
      At $x = 0$, the function $f(x) = x^{2/5}$ has:
    options:
      - label: a
        text: |
          a corner
        why: |
          A corner has two different **finite** slopes. Here both slopes are infinite.
      - label: b
        text: |
          a cusp
        correct: true
        why: |
          $f' = \tfrac25x^{-3/5}$: $-\infty$ from the left (an odd root of a negative number) and $+\infty$ from the right. Opposite infinities: a cusp.
      - label: c
        text: |
          a vertical tangent
        why: |
          That needs the **same** infinity from both sides, like $x^{3/5}$.
      - label: d
        text: |
          a derivative equal to $0$
        why: |
          $\tfrac{h^{2/5}}{h} = h^{-3/5}$ blows up as $h \to 0$; there is no finite derivative.
    solution: |
      $\dfrac{f(h) - f(0)}{h} = h^{-3/5} = \dfrac1{\sqrt[5]{h^3}}$: $\to +\infty$ as $h \to 0^+$ and $\to -\infty$ as $h \to 0^-$. The function is continuous at $0$ and the slopes are opposite infinities: **a cusp** (and a minimum, since $x^{2/5} \ge 0$).
  - id: "13"
    title: "13 · Name the point (II)"
    text: |
      At $x = 1$, the function $f(x) = (x-1)^{3/5}$ has:
    options:
      - label: a
        text: |
          a corner
        why: |
          Both slopes are infinite, not two different finite numbers.
      - label: b
        text: |
          a cusp
        why: |
          A cusp needs opposite infinities. Here both sides give $+\infty$.
      - label: c
        text: |
          a vertical tangent $x = 1$
        correct: true
        why: |
          $f' = \tfrac35(x-1)^{-2/5} = \tfrac{3}{5\sqrt[5]{(x-1)^2}} \to +\infty$ from both sides: a vertical tangent.
      - label: d
        text: |
          a jump
        why: |
          $f$ is continuous everywhere: odd roots are defined for all $x$.
    solution: |
      $f$ is continuous at $1$, and $\dfrac{f(1+h) - f(1)}{h} = h^{-2/5} = \dfrac{1}{\sqrt[5]{h^2}} \to +\infty$ from both sides. Same-sign infinities: **vertical tangent $x = 1$**. Not differentiable, but a tangent line exists. Not an extremum ($f$ keeps rising).
  - id: "14"
    title: "14 · Derivative from the definition"
    text: |
      Use the definition of the derivative to find the slope of the tangent to $f(x) = \dfrac{1}{x+1}$ at $x = 1$.
    solution: |
      $f(1) = \tfrac12$.

      $$
      \frac{f(1+h)-f(1)}{h}=\frac{\frac{1}{2+h}-\frac12}{h}=\frac{2-(2+h)}{2h(2+h)}=\frac{-1}{2(2+h)}\;\longrightarrow\;-\frac14
      $$

      **Slope** $-\tfrac14$. Check with the rules: $f' = -\tfrac{1}{(x+1)^2}$, $f'(1) = -\tfrac14$.
  - id: "15"
    title: "15 · Tangents of composites"
    text: |
      $g$ is differentiable, $g(1) = 2$ and $g'(1) = -3$.

      a. Find the tangent line to $y = g(x^2)$ at $x = 1$.

      b. Find the tangent line to $y = [g(x)]^3$ at $x = 1$.
    solution: |
      **a.** Point: $y(1) = g(1) = 2$. Chain rule: $y' = g'(x^2)\cdot2x$, so $y'(1) = g'(1)\cdot2 = -6$. Tangent: $y - 2 = -6(x - 1)$, so $y = -6x + 8$.

      **b.** Point: $y(1) = 2^3 = 8$. $y' = 3[g(x)]^2\,g'(x)$, so $y'(1) = 3\cdot4\cdot(-3) = -36$. Tangent: $y - 8 = -36(x - 1)$, so $y = -36x + 44$.
  - id: "16"
    title: "16 · A rational function investigation"
    text: |
      Investigate $f(x) = \dfrac{x^2}{x-1}$: domain, intercepts, asymptotes, increase and decrease with extrema, concavity and inflection.
    solution: |
      **Domain:** $x \neq 1$. **Intercepts:** $(0, 0)$ only.

      **Asymptotes.** $x \to 1^+$: $\tfrac{1}{0^+} \to \infty$; $x \to 1^-$: $-\infty$. **Vertical $x = 1$.** No horizontal asymptote (top degree is bigger). Division: $\dfrac{x^2}{x-1} = x + 1 + \dfrac{1}{x-1}$, so the **oblique asymptote is $y = x + 1$**.

      **First derivative:** $f' = \dfrac{2x(x-1) - x^2}{(x-1)^2} = \dfrac{x(x-2)}{(x-1)^2}$. Zero at $0$ and $2$; $x = 1$ is not in the domain.

      | | $x<0$ | $0<x<1$ | $1<x<2$ | $x>2$ |
      |---|---|---|---|---|
      | $f'$ | $+$ | $-$ | $-$ | $+$ |

      **Maximum $(0, 0)$, minimum $(2, 4)$.**

      **Second derivative:** from $f = x + 1 + (x-1)^{-1}$, $f'' = \dfrac{2}{(x-1)^3}$: negative for $x < 1$ ($\cap$), positive for $x > 1$ ($\cup$). **No inflection**: the sign changes only at $x = 1$, which is not in the domain.
  - id: "17"
    title: "17 · A cube-root investigation"
    text: |
      Investigate $f(x) = x - 3\sqrt[3]{x}$: intercepts, $f'$ and extrema, the point $x = 0$, concavity and inflection.
    solution: |
      Domain all $x$, continuous, no asymptotes ($f \approx x$ at the ends).

      **Intercepts:** $x = 3x^{1/3} \Rightarrow x^3 = 27x \Rightarrow x(x^2 - 27) = 0$: $x = 0, \pm3\sqrt3$.

      **First derivative:** $f' = 1 - x^{-2/3} = \dfrac{x^{2/3} - 1}{x^{2/3}}$. Zero at $x = \pm1$, undefined at $0$ (where $f' \to -\infty$ from both sides: a **vertical tangent**). Signs: $+$ for $\lvert x\rvert > 1$, $-$ for $\lvert x\rvert < 1$ (apart from $0$).

      **Maximum $(-1, 2)$, minimum $(1, -2)$.** At $0$ the sign does not change: no extremum, just a vertical tangent $x = 0$.

      **Second derivative:** $f'' = \tfrac23x^{-5/3}$: negative for $x < 0$ ($\cap$), positive for $x > 0$ ($\cup$). $f$ is continuous at $0$ and $f''$ changes sign: **inflection $(0, 0)$**, even though $f''$ is undefined there.
  - id: "18"
    title: "18 · Transformations of a known graph"
    text: |
      $f(x) = x^3 - 3x$ has a maximum at $(-1, 2)$ and a minimum at $(1, -2)$. Find the extreme points of

      a. $y_1 = f(x+2)$; b. $y_2 = -f(x)$; c. $y_3 = \lvert f(x)\rvert$.
    solution: |
      **a.** Shift left by 2: max $(-3, 2)$, min $(-1, -2)$.

      **b.** Reflect in the $x$-axis: max and min swap. Min $(-1, -2)$, max $(1, 2)$.

      **c.** The zeros of $f$ are $0$ and $\pm\sqrt3$. The parts below the axis ($x < -\sqrt3$ and $0 < x < \sqrt3$) flip up. So the max $(-1, 2)$ stays, the min $(1, -2)$ becomes a **max $(1, 2)$**, and the three zeros become **minima** (corners) at $(-\sqrt3, 0)$, $(0, 0)$, $(\sqrt3, 0)$.
  - id: "19"
    title: "19 · Linear demand to maximal profit"
    text: |
      At a price of \$30 a firm sells 400 units a day; at \$25 it sells 500. Demand is linear. Each unit costs \$10 to make, plus \$2,000 a day fixed.

      a. Find $x(p)$. b. Find $R(x)$ and $R'(100)$, and explain it. c. Find the maximal daily profit and the price that achieves it.
    solution: |
      **a.** Slope $\dfrac{500 - 400}{25 - 30} = -20$: $x - 400 = -20(p - 30)$, so $x = -20p + 1000$.

      **b.** $p = \dfrac{1000 - x}{20} = 50 - \dfrac{x}{20}$, so $R = xp = 50x - \dfrac{x^2}{20}$ and $R' = 50 - \dfrac{x}{10}$, $R'(100) = 40$. At 100 units a day, selling one more unit raises daily revenue by **about \$40**.

      **c.** $C = 2000 + 10x$, $P = R - C = -\dfrac{x^2}{20} + 40x - 2000$. $P' = -\dfrac{x}{10} + 40 = 0$ at $x = 400$, and $P'' = -\tfrac1{10} < 0$: a maximum. $P(400) = -8000 + 16000 - 2000 = $ **\$6,000** a day, at price $p = 50 - 20 = $ **\$30**.
  - id: "20"
    title: "20 · What does the marginal mean?"
    text: |
      $x$ is output in **thousands** of units and $C(x)$ is cost in **thousands** of dollars. $C'(50) = 12$ means:
    options:
      - label: a
        text: |
          The total cost of 50,000 units is \$12,000.
        why: |
          That would be $C(50) = 12$, the value of the function, not its derivative.
      - label: b
        text: |
          The average cost at 50,000 units is \$12 a unit.
        why: |
          Average cost is $C(x)/x$, a different quantity.
      - label: c
        text: |
          The 50th unit costs exactly \$12.
        why: |
          Wrong units ($x$ counts thousands), and a marginal value is an approximation, not an exact cost.
      - label: d
        text: |
          At 50,000 units, producing 1,000 more raises cost by about \$12,000.
        correct: true
        why: |
          One more unit of $x$ is 1,000 products; one unit of $C$ is \$1,000. The derivative approximates $C(51) - C(50)$.
    solution: |
      $C'(50) \approx C(51) - C(50)$: the change in cost (in thousands of dollars) from one more unit of $x$ (one thousand products). So about \$12,000 more for 1,000 more products, at a level of 50,000.
  - id: "21"
    title: "21 · Reading the derivative, and an integral"
    text: |
      a. $f'(x) = (x+1)^2(x-3)$. Find the extreme points and the $x$ values of the inflection points of $f$.

      b. $g(x) = x$ for $x < 0$ and $g(x) = x^2$ for $x \ge 0$. Find $a > 0$ with $\displaystyle\int_{-1}^{a}g(x)\,dx = 0$.
    solution: |
      **a.** Critical points $-1$ and $3$. $(x+1)^2 \ge 0$, so the sign of $f'$ is the sign of $x - 3$: negative for $x < 3$ (on both sides of $-1$), positive after. **Minimum at $x = 3$; no extremum at $-1$.**

      Inflections are where $f'$ has its own turning points: $f'' = 2(x+1)(x-3) + (x+1)^2 = (x+1)(3x - 5)$, zero at $-1$ and $\tfrac53$ with a sign change at each. **Inflections at $x = -1$ and $x = \tfrac53$.**

      **b.** Split at $0$: $\displaystyle\int_{-1}^{0}x\,dx = -\frac12$ and $\displaystyle\int_0^a x^2\,dx = \frac{a^3}{3}$. So $\tfrac{a^3}{3} = \tfrac12$, $a = \sqrt[3]{1.5} \approx 1.145$.
---

> Work each question on paper first, the way the exam wants it: every limit written, every sign table drawn. Then open the solution. The multiple-choice ones (9, 12, 13, 20) are quick checks of the ideas the open questions rely on.
