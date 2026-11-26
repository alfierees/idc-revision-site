---
title: "Quick Self-Test"
subject: maths-for-economists-b
type: self-test
description: "18 new exam-style questions in course order, each with the full working: global extrema, logs, limits, log differentiation, implicit slopes, domains, profit and the differential, critical points, Lagrange, sums and parametric systems. Five are quick multiple-choice checks."
course: Maths for Economists B
instructor: Hever Schulberg
semester: 2
year: 1
order: 6
tags:
  - maths-for-economists-b
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "1 · Global extrema on three intervals"
    text: |
      $f(x) = x - \ln x$.

      a. Find the critical point and its type.

      b. Global extrema on $[\tfrac12, 3]$.

      c. Global extrema on $(0, 3)$.
    solution: |
      a. Domain $x > 0$. $f'(x) = 1 - \tfrac1x = \tfrac{x - 1}{x}$: negative on $(0, 1)$, positive after. **Minimum at $x = 1$**, $f(1) = 1$.

      b. Closed interval, so both exist. Candidates: $f(\tfrac12) = \tfrac12 + \ln 2 \approx 1.19$, $f(1) = 1$, $f(3) = 3 - \ln 3 \approx 1.90$. **Min 1 at $x = 1$, max $\approx 1.90$ at $x = 3$.**

      c. The minimum at 1 is the only extremum, so it is global: **min 1**. As $x \to 0^+$, $-\ln x \to \infty$, so $f$ is unbounded: **no max** (and $x = 3$ is excluded anyway).
  - id: "2"
    title: "2 · A log equation"
    text: |
      Solve $\ln x + \ln(x - 3) = \ln 10$.
    solution: |
      Domain: $x > 0$ and $x > 3$, so $x > 3$.

      Product rule: $\ln[x(x - 3)] = \ln 10$, so $x^2 - 3x - 10 = 0$, $(x - 5)(x + 2) = 0$.

      $x = -2$ is outside the domain. **$x = 5$.** Check: $\ln 5 + \ln 2 = \ln 10$.
  - id: "3"
    title: "3 · A $0^0$ limit"
    text: |
      $\displaystyle\lim_{x\to0^+} x^{2x} = \;?$
    options:
      - label: a
        text: |
          $0$
        why: |
          The base tends to 0, but so does the exponent: $0^0$ is indeterminate, not 0.
      - label: b
        text: |
          $1$
        correct: true
        why: |
          $x^{2x} = e^{2x\ln x}$ and $x\ln x = \tfrac{\ln x}{1/x} \overset{L'H}{=} -x \to 0$, so the limit is $e^0 = 1$.
      - label: c
        text: |
          $e^2$
        why: |
          That would need $2x\ln x \to 2$. It tends to 0.
      - label: d
        text: |
          It does not exist
        why: |
          It exists. Writing it as $e^{2x\ln x}$ turns it into an ordinary $0\cdot\infty$ limit.
    solution: |
      $x^{2x} = e^{2x\ln x}$. The exponent is a $0\cdot\infty$ form: $x\ln x = \dfrac{\ln x}{1/x} \overset{L'H}{=} \dfrac{1/x}{-1/x^2} = -x \to 0$. So the limit is $e^0 = 1$. **Answer (b).**
  - id: "4"
    title: "4 · L'Hôpital twice"
    text: |
      Find $\displaystyle\lim_{x\to0}\frac{e^{3x} - 1 - 3x}{x^2}$.
    solution: |
      Form $\tfrac00$. L'Hôpital: $\dfrac{3e^{3x} - 3}{2x}$, still $\tfrac00$. Again: $\dfrac{9e^{3x}}{2} \to \boxed{\tfrac92}$.
  - id: "5"
    title: "5 · A full function study"
    text: |
      $f(x) = \dfrac{\ln x}{x}$.

      a. Domain, intercept, asymptotes.

      b. Extremum.

      c. Global extrema on $[1, \infty)$.
    solution: |
      a. Domain $x > 0$. Intercept: $\ln x = 0$ at $x = 1$, the point $(1, 0)$.

      $x \to 0^+$: $\tfrac{-\infty}{0^+} = -\infty$, so **$x = 0$ is a vertical asymptote**. $x \to \infty$: form $\tfrac\infty\infty$, L'Hôpital gives $\tfrac{1/x}{1} \to 0$, so **$y = 0$ is a horizontal asymptote**.

      b. $f'(x) = \dfrac{1 - \ln x}{x^2}$: positive for $x < e$, negative after. **Maximum $\tfrac1e$ at $x = e$.**

      c. $f(1) = 0$ at the closed end; $f > 0$ for $x > 1$ and $f \to 0$ only as $x \to \infty$. **Max $\tfrac1e$ at $e$, min 0 at $x = 1$** (attained, because the end is closed).
  - id: "6"
    title: "6 · Tangent line by log differentiation"
    text: |
      Find the tangent line to $y = x^{\ln x}$ at $x = e$.
    solution: |
      $\ln y = (\ln x)^2$, so $\dfrac{y'}{y} = \dfrac{2\ln x}{x}$ and $y' = x^{\ln x}\cdot\dfrac{2\ln x}{x}$.

      At $x = e$: $y = e^1 = e$, and $y' = e\cdot\tfrac{2}{e} = 2$.

      Tangent: $y - e = 2(x - e)$, i.e. **$y = 2x - e$**.
  - id: "7"
    title: "7 · The domain of $f(x, y)$"
    text: |
      What is the domain of $f(x, y) = \ln(y - x^2) + \sqrt{4 - y}$?
    options:
      - label: a
        text: |
          $y \ge x^2$ and $y \le 4$
        why: |
          A log needs a strictly positive argument, so the parabola itself is excluded.
      - label: b
        text: |
          $y > x^2$ and $y < 4$
        why: |
          The square root allows 0, so the line $y = 4$ belongs to the domain.
      - label: c
        text: |
          $y > x^2$ only
        why: |
          The root adds a second condition, $4 - y \ge 0$.
      - label: d
        text: |
          $x^2 < y \le 4$
        correct: true
        why: |
          Strictly above the parabola (dashed), up to and including the line $y = 4$ (solid). In particular $-2 < x < 2$.
    solution: |
      Log: $y - x^2 > 0$, strictly above the parabola. Root: $4 - y \ge 0$, on or below the line $y = 4$. Together $x^2 < y \le 4$. **Answer (d).**
  - id: "8"
    title: "8 · Slope of a level curve"
    text: |
      The curve $x^2y + y^3 = 10$. Find the point where $x = 1$ and the slope $y'$ there.
    solution: |
      At $x = 1$: $y + y^3 = 10$, which $y = 2$ solves ($y^3 + y$ is increasing, so it is the only root). The point is $(1, 2)$.

      $F = x^2y + y^3$: $F_x = 2xy$, $F_y = x^2 + 3y^2$, so

      $$
      y' = -\frac{2xy}{x^2 + 3y^2} = -\frac{4}{1 + 12} = -\frac{4}{13}.
      $$
  - id: "9"
    title: "9 · Profit, marginal profit and the maximum"
    text: |
      $P(x, y) = 100x + 80y - x^2 - y^2 - xy$, with $x$, $y$ the weekly quantities of two products.

      a. Compute $P_x$ and $P_y$ at $(30, 10)$ and explain $P_x$.

      b. Estimate the change in profit from $(30, 10)$ to $(32, 11)$.

      c. Find the profit-maximising quantities and show it is a maximum.
    solution: |
      a. $P_x = 100 - 2x - y = 30$, $P_y = 80 - 2y - x = 30$. One more unit of the first product, with the second held at 10, raises weekly profit by about **30**.

      b. $dx = 2$, $dy = 1$: $dP = 30(2) + 30(1) = 90$. Profit rises by about **90**.

      c. $2x + y = 100$ and $x + 2y = 80$ give $x = 40$, $y = 20$. $P_{xx} = -2$, $P_{yy} = -2$, $P_{xy} = -1$, so $D = 4 - 1 = 3 > 0$ with $P_{xx} < 0$: a **maximum**, $P(40, 20) = 4000 + 1600 - 1600 - 400 - 800 = 2800$.
  - id: "10"
    title: "10 · Classify the critical points"
    text: |
      $f(x, y) = x^3 - 3x + y^2 - 4y$. What are the critical points?
    options:
      - label: a
        text: |
          $(1, 2)$ is a maximum and $(-1, 2)$ a minimum
        why: |
          At $(1, 2)$, $f_{xx} = 6 > 0$, which points to a minimum, not a maximum.
      - label: b
        text: |
          Both are minima
        why: |
          At $(-1, 2)$, $D = (-6)(2) - 0 = -12 < 0$: a saddle.
      - label: c
        text: |
          $(1, 2)$ is a minimum and $(-1, 2)$ a saddle
        correct: true
        why: |
          $f_x = 3x^2 - 3 = 0$ gives $x = \pm1$, $f_y = 2y - 4 = 0$ gives $y = 2$. $D = 6x\cdot2 - 0 = 12x$: $+12$ at $x = 1$ (with $f_{xx} > 0$, a min), $-12$ at $x = -1$ (saddle).
      - label: d
        text: |
          There is only one critical point, $(0, 2)$
        why: |
          $f_x(0, 2) = -3 \ne 0$, so $(0, 2)$ is not critical at all.
    solution: |
      Critical points $(1, 2)$ and $(-1, 2)$. $f_{xx} = 6x$, $f_{yy} = 2$, $f_{xy} = 0$, so $D = 12x$. At $(1, 2)$: $D = 12 > 0$, $f_{xx} > 0$, a minimum ($f = -6$). At $(-1, 2)$: $D = -12$, a saddle. **Answer (c).**
  - id: "11"
    title: "11 · Isoprofit slope"
    text: |
      With $P$ from question 9, find the slope $y'$ of the isoprofit curve through $(30, 10)$ and explain it.
    solution: |
      $y' = -\dfrac{P_x}{P_y} = -\dfrac{30}{30} = -1$.

      To keep profit unchanged, each extra unit of the first product must be matched by about **one unit less** of the second.
  - id: "12"
    title: "12 · Lagrange with a budget"
    text: |
      Maximise $f = xy$ subject to $x + 2y = 20$, and explain $\lambda$.
    solution: |
      $\mathcal L = xy - \lambda(x + 2y - 20)$.

      $\mathcal L_x = y - \lambda = 0$, $\mathcal L_y = x - 2\lambda = 0$, so $x = 2y$. The constraint: $4y = 20$, $y = 5$, $x = 10$, $\lambda = 5$. **Max $f = 50$.**

      $\lambda = 5$: raising the budget from 20 to 21 raises the maximum of $f$ by about 5.
  - id: "13"
    title: "13 · Lagrange in three variables"
    text: |
      Minimise $x^2 + y^2 + z^2$ subject to $x + 2y + 2z = 9$.
    solution: |
      $2x = \lambda$, $2y = 2\lambda$, $2z = 2\lambda$, so $x = \tfrac\lambda2$, $y = z = \lambda$.

      Constraint: $\tfrac\lambda2 + 2\lambda + 2\lambda = 9$, so $\lambda = 2$ and the point is $(1, 2, 2)$. **Minimum $1 + 4 + 4 = 9$.** It is a minimum because a sum of squares is convex (it grows without bound in every direction along the plane).
  - id: "14"
    title: "14 · A sum over $n$ variables"
    text: |
      $f(x_1, \dots, x_n) = \sum_{i=1}^n x_i^4$. What is $\displaystyle\sum_{j=1}^n x_j\frac{\partial f}{\partial x_j}$?
    options:
      - label: a
        text: |
          $4f$
        correct: true
        why: |
          $\dfrac{\partial f}{\partial x_j} = 4x_j^3$, so the sum is $\sum 4x_j^4 = 4f$. ($f$ is homogeneous of degree 4.)
      - label: b
        text: |
          $4nf$
        why: |
          Only the $j$-th term of $f$ depends on $x_j$; nothing is counted $n$ times.
      - label: c
        text: |
          $4x_j^3$
        why: |
          That is one partial derivative, before multiplying by $x_j$ and adding up.
      - label: d
        text: |
          $f^4$
        why: |
          Differentiation lowers each power by one; multiplying by $x_j$ restores it and brings down the 4 as a factor.
    solution: |
      $\sum_j x_j\cdot 4x_j^3 = 4\sum_j x_j^4 = 4f$. **Answer (a).**
  - id: "15"
    title: "15 · Gauss-Jordan"
    text: |
      Solve $x + y + z = 6$, $\;2x - y + z = 3$, $\;x + 2y - z = 2$.
    solution: |
      $R_2 - 2R_1$ and $R_3 - R_1$:

      $$
      \left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -3 & -1 & -9 \\ 0 & 1 & -2 & -4 \end{array}\right)
      $$

      Swap $R_2$, $R_3$, then $R_3 + 3R_2$: $(0, 0, -7 \mid -21)$, so $z = 3$. Back up: $y - 2(3) = -4$, $y = 2$; $x = 6 - 2 - 3 = 1$.

      **$(x, y, z) = (1, 2, 3)$.** Check: $2 - 2 + 3 = 3$ and $1 + 4 - 3 = 2$.
  - id: "16"
    title: "16 · Read the reduced matrix"
    text: |
      Variables $x_1, \dots, x_4$:

      $$
      \left(\begin{array}{cccc|c} 1 & 0 & 3 & 0 & 2 \\ 0 & 1 & -1 & 0 & 5 \\ 0 & 0 & 0 & 1 & -1 \end{array}\right)
      $$

      How many solutions, and what are they?
    solution: |
      It is reduced, with no contradiction row. Leading 1s in columns 1, 2, 4: those are dependent. Column 3 has none, so **$x_3 = t$ is free: infinitely many solutions.**

      $x_1 = 2 - 3t$, $\;x_2 = 5 + t$, $\;x_3 = t$, $\;x_4 = -1$.
  - id: "17"
    title: "17 · A system with a parameter"
    text: |
      $$
      \left(\begin{array}{ccc|c} 1 & 2 & 1 & 3 \\ 0 & k - 1 & 2 & k \\ 0 & 0 & k(k - 2) & k - 2 \end{array}\right)
      $$

      For which $k$ is there a unique solution, infinitely many, none?
    solution: |
      The pivots are $1$, $k - 1$ and $k(k - 2)$. Check each value that zeroes one.

      - **$k = 0$:** last row $(0, 0, 0 \mid -2)$: **no solution**.
      - **$k = 2$:** last row all zeros; rows 1 and 2 have leading entries in columns 1 and 2, so $z$ is free: **infinitely many**.
      - **$k = 1$:** the second row becomes $(0, 0, 2 \mid 1)$ and the third $(0, 0, -1 \mid -1)$. They say $z = \tfrac12$ and $z = 1$: **no solution**. (Easy to miss if you only look at the last row.)
      - **Any other $k$:** three non-zero pivots: **unique solution**.

      | $k$ | Verdict |
      |---|---|
      | $0$ or $1$ | none |
      | $2$ | infinitely many |
      | otherwise | unique |
  - id: "18"
    title: "18 · True or false on systems"
    text: |
      "A homogeneous system of 3 equations in 4 unknowns can have exactly one solution."
    options:
      - label: a
        text: |
          True: the zero solution
        why: |
          The zero solution is always there, but it is not the only one here.
      - label: b
        text: |
          False: it always has infinitely many
        correct: true
        why: |
          At most 3 leading entries for 4 unknowns, so at least one free variable. A homogeneous system is always consistent, so a free variable means infinitely many solutions.
      - label: c
        text: |
          False: it can have no solution
        why: |
          A homogeneous system always has the zero solution, so it is never inconsistent.
      - label: d
        text: |
          It depends on the coefficients
        why: |
          Not here: the count of unknowns and equations alone forces a free variable.
    solution: |
      With 4 unknowns and 3 equations there are at most 3 leading entries, so at least one free variable, and a homogeneous system always has the zero solution. Consistent plus a free variable means infinitely many solutions. **Answer (b): false.**
---

> Questions in course order. Try each on paper first, then reveal the working. The worked versions of the same ideas are on the [[Cheat Sheet (Lec 1–12)]], and the scripts for writing them up on the [[Exam Question Playbook]].
