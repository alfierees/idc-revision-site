---
title: "Exam Question Playbook"
subject: maths-for-economists-a
type: reference
description: "Every question type the final asks, with the steps that earn the points and a model answer from a real past paper."
course: Maths for Economists A
semester: 1
year: 1
order: 4
tags:
  - maths-for-economists-a
  - exam-prep
  - playbook
---

> **Game plan for 3 hours and 4 questions.** Read all four first. Start with the one you are surest of, often the economics question, to bank points. Give the investigation a full hour. Write every limit you use and every sign table: the grader checks the reasoning ("you must justify anything you claim" is printed on the papers). If a later part depends on a number you couldn't get, say so and carry on with the value given in the question, or a letter.

---

## A · The full function investigation (25 to 35 points)

**Steps**
1. **Domain**, then the interval of continuity.
2. **Intercepts.** $y$: $f(0)$. $x$: solve $f = 0$ (substitute $t = x^{1/3}$ or $t = x^{2/3}$ for powers).
3. **Asymptotes.** Vertical: one-sided limits at every excluded point. Horizontal: $x \to \infty$ and $x \to -\infty$ separately.
4. **$f'$**, simplified to one fraction with a factored top. Critical points: $f' = 0$ and $f'$ undefined (inside the domain).
5. **Sign table of $f'$**, cut also at excluded points. Extrema with $y$ values.
6. **$f''$** and its sign table. Inflection where $f$ is continuous and $f''$ changes sign.
7. **Graph**: asymptotes dashed, then the points, then the curve following the tables.
8. The add-on: transformed graph, $\lvert f\rvert$, a tangent question.

> [!example] 2025 Moed A Q3: $f(x) = x(x+1)^{2/3}$
> Domain all $x$, no asymptotes ($\pm\infty$ at the ends). Intercepts $(0, 0)$ and $(-1, 0)$.
>
> $f' = (x+1)^{2/3} + \tfrac23x(x+1)^{-1/3} = \dfrac{5x+3}{3\sqrt[3]{x+1}}$: zero at $x = -\tfrac35$, undefined at $-1$. Signs $+, -, +$: **maximum at $(-1, 0)$**, a cusp (slopes $+\infty$ and $-\infty$), **minimum at $x = -\tfrac35$**.
>
> $f'' = \dfrac{10x+12}{9(x+1)^{4/3}}$: zero at $x = -1.2$, and the denominator is positive. So $\cap$ for $x < -1.2$, $\cup$ after (except at $-1$), and the only **inflection is at $x = -1.2$**.

Step through this and five other past-paper investigations in the [[Graph Gallery|graph gallery]].

---

## B · Piecewise: continuity with a parameter

**Steps**
1. Domain: each piece on its own interval, and any piece's own restrictions.
2. At each seam write $f(x_0)$, $\lim_{x\to x_0^-}$ and $\lim_{x\to x_0^+}$, each from the right formula.
3. Set them equal and solve for the parameter. A $\tfrac00$ piece: factor or conjugate first.

> [!example] 2025 Moed B Q3a2 (= 2022 Moed A Q1)
> $x^2 + 2x$ for $x < 0$, $\sqrt x$ for $x \ge 0$: $f(0) = 0$, left $0$, right $0$. Continuous for all $x$.

---

## C · Differentiability from the definition (and a parameter from it)

**Steps**
1. Check continuity at $x_0$ first. Not continuous ends it: not differentiable.
2. Right: $\displaystyle\lim_{h\to0^+}\frac{f(x_0+h)-f(x_0)}{h}$ with the right-hand formula. Left: the same with $h \to 0^-$ and the left formula.
3. Equal and finite: differentiable, and that number is $f'(x_0)$. Otherwise name it (§D).
4. With a parameter: set the two one-sided limits equal.

> [!example] 2023 Moed B Q1d
> $f = x^3 - kx$ for $x < 0$, $6\sqrt[3]{x^4} - x$ for $x \ge 0$. Right: $\dfrac{6h^{4/3} - h}{h} = 6h^{1/3} - 1 \to -1$. Left: $\dfrac{h^3 - kh}{h} = h^2 - k \to -k$. Differentiable when $k = 1$, and then $f'(0) = -1$.

---

## D · Corner, cusp or vertical tangent?

**Steps**
1. Find the two one-sided slopes $L$ and $R$ (with §C, or from $f'$ on each side when $f$ is continuous).
2. Read the verdict:

| $L$, $R$ | Answer |
|---|---|
| different finite numbers | corner, no tangent |
| one finite, one infinite | corner (the course key's convention), no tangent |
| $-\infty$ and $+\infty$ | cusp, no tangent |
| both $+\infty$ or both $-\infty$ | vertical tangent $x = x_0$ |

> [!example] 2019 Moed A Q1b
> $f = \sqrt[3]{x-1}$ near $x = 1$: $f' = \dfrac{1}{3\sqrt[3]{(x-1)^2}} \to +\infty$ from both sides. Vertical tangent $x = 1$; a tangent exists; not a corner.

> [!example] 2025 Moed B Q3b and c
> At the seam $0$ the slopes are $2$ (left) and $\infty$ (right). No vertical tangent (only one side is steep), and the key says it is a corner.

---

## E · $\tfrac00$ limits

**Steps**
1. Substitute. $\tfrac00$: factor polynomials; conjugate for roots; common denominator for differences.
2. Cancel the factor $(x - a)$ and substitute again.

> [!example] 2025 Moed A Q2a
> $\dfrac{1-\sqrt{x-2}}{x-3}\cdot\dfrac{1+\sqrt{x-2}}{1+\sqrt{x-2}} = \dfrac{3-x}{(x-3)(1+\sqrt{x-2})} \to -\dfrac12$.

---

## F · $\tfrac c0$ limits and absolute values

**Steps**
1. Substitute: a nonzero top over $0$ means $\pm\infty$ or "does not exist".
2. Factor the denominator; for $\lvert u\rvert$ decide the sign of $u$ just left and just right.
3. Write both one-sided limits. Same: that is the limit. Different: does not exist.

> [!example] 2024 Moed A Q1c and d
> $f = \dfrac{x-2}{\lvert x^2-2x\rvert}$. At $0$: top $\to -2$, bottom $\to 0^+$ from both sides, so $-\infty$. At $2$: it simplifies to $\pm\dfrac1{\lvert x\rvert}$, giving $\tfrac12$ from the right and $-\tfrac12$ from the left: **does not exist**.

---

## G · Limits at $\pm\infty$ with roots

**Steps**
1. Factor the highest power out of each root: $\sqrt{3x^2+x} = \lvert x\rvert\sqrt{3 + \tfrac1x}$.
2. Replace $\lvert x\rvert$ by $x$ at $+\infty$ and by $-x$ at $-\infty$.
3. $\infty - \infty$: conjugate.

> [!example] 2025 Moed A Q2c
> $\displaystyle\lim_{x\to-\infty}\frac{\sqrt{x^2+1}}{x} = \lim_{x\to-\infty}\frac{-x\sqrt{1+\frac1{x^2}}}{x} = -1$.

---

## H · Euler and other exponent limits

**Steps**
1. Find the limit of the base and of the exponent **separately**.
2. Base $\to b \neq 1$: the answer is $b^{\lim\text{exponent}}$, or $0$ / $\infty$ by the size of $b$.
3. Base $\to 1$, exponent $\to\infty$: write base $= 1 + f$, then the answer is $e^{\lim f\cdot g}$. Show the bracket $\left[(1+f)^{1/f}\right]^{f g}$.

> [!example] 2021 Moed A Q2c
> $2 + \dfrac{x+3}{1-x} = 1 + \dfrac{4}{1-x}$, so $\displaystyle\lim_{x\to\infty}\left(1+\frac4{1-x}\right)^x = e^{\lim\frac{4x}{1-x}} = e^{-4}$.

> [!example] 2025 Moed B Q2b (the trap)
> Base $1 + \tfrac{x^2}{x^2+1} \to 2$, exponent $\tfrac{2x}{x-1} \to 2$: the answer is $2^2 = 4$.

---

## I · Asymptotes of an exponential or root function

**Steps**
1. Vertical: where an exponent or denominator blows up. Take **both** one-sided limits; one infinite side is enough.
2. Horizontal: $x \to \infty$ and $x \to -\infty$ separately. Roots and exponentials can give two different ones.

> [!example] 2025 Moed B Q2c (= PS 12 Q2c)
> $f = e^{\frac1{x-4}} + 2$: $x \to 4^+$ gives $\infty$ and $x \to 4^-$ gives $2$, so a vertical asymptote $x = 4$ from the right. At $\pm\infty$, $f \to e^0 + 2 = 3$: horizontal asymptote $y = 3$.

---

## J · Tangent slope from the definition (non-piecewise)

**Steps:** write $\dfrac{f(x_0 + h) - f(x_0)}{h}$, combine into one fraction, cancel $h$, let $h \to 0$. Then check with the rules.

> [!example] 2024 Moed B Q2d
> $f = \dfrac{x-3}{x+5}$ at $x = -1$, $f(-1) = -1$: $\dfrac{\frac{h-4}{h+4} + 1}{h} = \dfrac{2h}{h(h+4)} = \dfrac{2}{h+4} \to \dfrac12$. Check: $f' = \tfrac{8}{(x+5)^2}$, $f'(-1) = \tfrac12$.

---

## K · Tangents of composites from data

**Steps**
1. Translate the words: "meets the $y$-axis at $0.5$" is $g(0) = 0.5$; "slope of the tangent there is $2$" is $g'(0) = 2$.
2. Differentiate layer by layer (power, then $g$, then the inside).
3. Plug in. Find the point by evaluating the function itself, then point-slope.

> [!example] 2024 Moed B Q4
> $y = [g(3x)]^4$: $y' = 4[g(3x)]^3\cdot g'(3x)\cdot3$, so $y'(0) = 12 \cdot 0.5^3 \cdot 2 = 3$. Point $y(0) = 0.5^4 = \tfrac1{16}$. Tangent $y = 3x + \tfrac1{16}$.
>
> And $y = [x\,g(\tfrac x2)]^3$ has slope $0$ at $x = 0$, because the factor $[x\,g(\tfrac x2)]^2$ is $0$ there.

---

## L · Transformations and absolute values of a graph

**Steps**
1. Investigate (or take from earlier parts) the basic graph: extrema, zeros, asymptotes.
2. Apply the move from the table in §1 of the [[Cheat Sheet (Lec 1–12)|cheat sheet]] to each point.
3. $\lvert f\rvert$: zeros where $f$ changes sign become minima (corners); maxima below the axis become maxima above it.

> [!example] 2025 Moed B Q1
> $\lvert(x-3)^2x\rvert$: min $0$, max $1$ (height $4$), min $3$. $f(x+2)$: $-2$, $-1$, $1$. $f(-x)$: $-3$, $-1$, $0$, maxima stay maxima.

---

## M · Economics from a linear demand

**Steps**
1. Demand line through two (price, quantity) points: $x(p)$. Solve for $p(x)$.
2. $R(x) = x\,p(x)$, $C(x)$ from the costs, $P = R - C$.
3. Marginals at the given level, each with a **meaning sentence**.
4. Max profit: $P' = 0$, confirm a max (downward parabola, or $P'' < 0$), give the quantity and the profit (and the price, if asked).

> [!example] 2024 Moed B Q1
> $(45, 200)$ and $(40, 300)$: $x = -20p + 1100$, $p = \tfrac{1100-x}{20}$, $R = -\tfrac1{20}x^2 + 55x$, $R'(30) = 52$: "at 30 units, selling the 31st adds about \$52 of revenue". $C = 25x$, $C'(30) = 25$. $P = -\tfrac1{20}x^2 + 30x$, $P'(300) = 0$, maximal daily profit **\$4,500**.

---

## N · Economics from given $R$, $C$ or marginal functions

**Steps**
1. Differentiate (chain rule for roots and powers).
2. Units: "thousands of units" and "thousands of dollars" go into the sentence.
3. Max profit at $R' = C'$; roots: isolate, square, **check both** solutions.
4. "Is marginal profit increasing anywhere?": the sign of $P''$.

> [!example] 2021 Moed A Q3
> $R' = 5\sqrt x$, $C' = 2x + 2$: $R'(9) = 15$, $C'(6) = 14$. Max profit where $5\sqrt x = 2x + 2$: $x = 4$ (both sides $10$). $C' > R'$ for $x > 4$, so each extra unit there loses money.

> [!example] 2025 Moed A Q4 (= 2011 Moed A Q4)
> $P' = 60\sqrt{x+6} + 360 - 60x = 0 \iff \sqrt{x+6} = x - 6$. Squaring: $x = 3$ or $10$; only $10$ satisfies the root equation. $P'' = \tfrac{30}{\sqrt{x+6}} - 60 < 0$ everywhere, so marginal profit is never increasing, and $x = 10$ (thousand units) is the maximum.

---

## O · Reading the graph of $f'$, or $g' = f(\dots)$

**Steps:** make the sign table of the **given** derivative. Its sign gives rising and falling; its own rises and falls give concavity; a shift inside ($f(x - 1)$) shifts the whole table.

> [!example] 2019 Moed B Q1f
> $g'(x) = f(x-1)$ with $f = \sqrt[3]{x^2}(x - 10)$, which is negative for $x < 10$ (apart from $0$) and positive for $x > 10$. So $g' > 0$ for $x - 1 > 10$: $g$ decreasing for $x < 11$ and increasing for $x > 11$.

---

## P · Definite integrals (with a seam or a parameter)

**Steps**
1. Split at every seam inside the interval.
2. Antiderivative of each piece, evaluate, add.
3. "Find $a$": set the total equal to the target and solve, keeping the condition on $a$.

> [!example] 2025 Moed B Q3d
> $\int_{-1}^{0}(x^2 + 2x)\,dx = -\tfrac23$ and $\int_0^a\sqrt x\,dx = \tfrac23a^{3/2}$. Total $0$ gives $a^{3/2} = 1$, so $a = 1$.

---

## Q · Is it a function? Domain? Composition?

**Steps**
1. Function: solve for $y$. Two values for one $x$ (a $\pm$ root, a quadratic in $y$) means no. A single formula that fails at some $x$ means "a function only for $x \neq \dots$".
2. Domain: list every condition from §1 of the cheat sheet and intersect them.
3. Composition $f(g(x))$: substitute, then the domain needs $x \in D_g$ **and** $g(x) \in D_f$.

> [!example] 2024 Moed B Q3a (= PS 1 Q2f)
> $xy + y - x = 5 \Rightarrow y = \dfrac{x+5}{x+1}$. Not a function on all real $x$: nothing at $x = -1$. A function for $x \neq -1$.

---

## R · True or false (older papers)

Last seen in 2020 Moed B. Each claim wants a one-line proof or a **counterexample**: "there is a non-piecewise function with a vertical asymptote at $x = 4$ and $\lim_{x\to4^-} f = 2$" is **true**: $e^{\frac1{x-4}} + 2$ (2020 Moed B Q4c). Most claims test a definition from §6 to §10 of the cheat sheet: a critical point is not always an extremum, $f'' = 0$ is not always an inflection, a corner has no tangent.
