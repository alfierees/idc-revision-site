---
title: "Root and Parabola Piecewise Investigation, Limits, Marginal Cost & Reflections (2022 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2022 Moed A"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - piecewise-functions
  - function-investigation
  - definition-of-derivative
  - inflection-point
  - vertical-tangent
  - limits
  - exponential-graph
  - asymptotes
  - marginal-cost
  - transformations
  - chain-rule
  - definite-integral
aliases:
  - Math I 2022 Moed A
  - PP27 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Root and Parabola Piecewise Investigation, Limits, Marginal Cost & Reflections (2022 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2022 (Moed A)**, Hever Schulberg. 4 questions (30, 25, 20, 25 points), 3 hours, non-graphing calculator and formula sheet allowed.
> Builds on: [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]]
> Practice: [[PS_03-Composition, Transformations and Exponential Graphs]], [[PS_05-Limits, Infinite Limits and Limits at Infinity]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_08-Chain Rule, Exponential and Log Derivatives and Integrals]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_11-Concavity, Inflection Points & Asymptotes]]

> [!info] Source
> The exam is on pages 2 and 3 of the source PDF (page 1 is the cover). The **handwritten, unsigned key (author unclear)** is on pages 4 to 10. It keeps pointing back to course material ("copied from our week 11 lesson", "ex 4 question 4", "ex 6 question 2d", "2019 B exam"). Where a key only points, I resolved the pointer and say so.
> **Pointers and checks:**
> - **Q3** is not worked in the key ("copied from ex 8, Q5, you can watch its video solution"). It is the same cost function as [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]] Question 2 (the only difference is the domain, here $0\le x<100$ instead of $0\le x\le100$), so I used that problem set's printed answers and re-checked each one by hand.
> - **Q4a** is "based on question 2 from ex 3". The key draws every graph itself, so it is followed directly. The same functions appear in [[PS_03-Composition, Transformations and Exponential Graphs]] Question 1.
> - **Q4c** is "based on Q4 from the 2019 B exam" and the key works it out in full. I followed the key. (The 2019 B note is being written in parallel, so it is not linked.)

> [!warning] Points where the key needs a check
> - **Q1c (corner point):** the key says yes because the two one-sided slopes differ. They are $2$ on the left and $+\infty$ on the right. In [[Lec_07-The Derivative, Differentiability and Rules]] a *corner* means two different **finite** slopes, so this point is better described as "slope $2$ on the left, vertical on the right". I kept the key's "yes" and flagged the wording.
> - **Q1a7:** the key marks $x=0$ as an inflection point even though $f''(0)$ does not exist. That matches the course test (continuous and concavity changes), see [[Lec_11-Concavity, Inflection Points and Asymptotes]]. Fine.
> - **AI-solved parts: none.** Q3 uses the printed answers of the problem set it duplicates, and says so. The remarks marked as my own are checks, not new answers.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | A piecewise function glued from a parabola and $\sqrt x$: continuity at the seam, one-sided derivatives from the definition, extrema, concavity and an inflection point at a non-smooth point, a vertical-tangent check, and a definite integral over the seam | [[Lec_04-Limits and Continuity]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] |
| Q2 | Four separate pieces: conjugate limit, an Euler limit with an absolute value, a transformed exponential graph, and the asymptotes of a root-over-quadratic quotient | [[Lec_04-Limits and Continuity]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_05-Infinite Limits]] |
| Q3 | Total cost and marginal cost: reading $C'$, and how cost and marginal cost move | [[Lec_09-Marginal Functions and Tangent Lines of Composites]] |
| Q4 | Graph reflections and translations of a parabola and a line, a parameter from $g'(a)=0$, and a chain-plus-product-rule derivative from given values | [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_07-The Derivative, Differentiability and Rules]] |

> [!tip] Intuition: the one move behind each question
> - Q1: the seam $x=0$ is where everything interesting happens. The left slope is $2$ (finite) and the right slope is $+\infty$ (vertical), so $f'(0)$ does not exist, yet the graph is unbroken.
> - Q2: multiply by the conjugate to cancel the $0/0$ (a), rewrite $\lvert x\rvert$ as $-x$ for negative $x$ to expose an Euler limit (b), and track the shift of the exponential (c). In (d), $\sqrt{x^2}$ is $\lvert x\rvert$, so the two ends of the graph give different asymptotes.
> - Q3: marginal cost is the derivative of cost. Its sign says cost rises, and the sign of the second derivative says the marginal cost falls.
> - Q4: with a transformation that has both a reflection and a shift, the **order** of the steps decides the final graph.

---

## Q1 — A parabola glued to a square root (30 points)

**Question.**

$$
f(x)=\begin{cases}x^2+2x & x<0\\[2pt] \sqrt{x} & x\ge0\end{cases}
$$

a. Investigate the function by the following criteria:
1. Domain.
2. Interval of continuity.
3. Axes intercept points (if any).
4. Asymptotes (if any) using the appropriate limits.
5. Show using the **definition of the derivative** that the function is not differentiable at $x=0$.
6. Find relative extreme points (if any) and increase/decrease intervals.
7. Find inflection points (if any) and concavity intervals.
8. Draw the graph.

b. Does the function have a vertical tangent line? If so, find its equation, and if not, explain why.

c. Does the function have a corner point? Explain.

d. Find the value of $a$ ($a>0$) which satisfies $\displaystyle\int_{-1}^{a}f(x)\,dx=0$.

The key notes that this function is almost identical to the second example from the week 11 lesson in class (compare [[Lec_11-Concavity, Inflection Points and Asymptotes]]).

### a1. Domain

Each branch is defined on its own half-line ($x^2+2x$ for $x<0$, $\sqrt x$ for $x\ge0$), together covering every real number.

> [!success] Answer (the key)
> All $x$.

### a2. Interval of continuity

Each branch is continuous on its own piece, so only the seam $x=0$ needs the three-condition check:

1. $f(0)=\sqrt0=0$.
2. $\displaystyle\lim_{x\to0^+}f(x)=\sqrt0=0$ and $\displaystyle\lim_{x\to0^-}f(x)=0^2+2\cdot0=0$, so the limit exists and equals $0$.
3. $f(0)=\lim_{x\to0}f(x)$.

> [!success] Answer (the key)
> Continuous for all $x$.

### a3. Intercepts

| | $x<0$ branch | $x\ge0$ branch |
|---|---|---|
| Set $f(x)=0$ | $x^2+2x=0 \Rightarrow x(x+2)=0$ | $\sqrt x=0 \Rightarrow x=0$ |
| Roots | $x=0$ (rejected, since this branch needs $x<0$) and $x=-2$ | $x=0$ |
| Point | $(-2,0)$ | $(0,0)$ |

> [!success] Answer (the key)
> x-intercepts $(-2,0)$ and $(0,0)$. The y-intercept is $f(0)=0$, the point $(0,0)$.

### a4. Asymptotes

**Horizontal.**

- $x\to\infty$: $\sqrt x\to\infty$.
- $x\to-\infty$: $x(x+2)\to(-\infty)(-\infty)=\infty$.

Neither limit is finite, so there is **no horizontal asymptote**.

**Vertical.** $f$ is continuous for all $x$, so there is **no vertical asymptote**.

### a5. Not differentiable at $x=0$ (definition)

$$
f'(0)=\lim_{h\to0}\frac{f(h)-f(0)}{h}
$$

Take each side separately (the formula differs on the two sides):

$$
h\to0^+:\ \lim_{h\to0^+}\frac{\sqrt h-0}{h}=\lim_{h\to0^+}\frac{1}{\sqrt h}=\frac1{0^+}=\infty
$$

$$
h\to0^-:\ \lim_{h\to0^-}\frac{h^2+2h-0}{h}=\lim_{h\to0^-}(h+2)=2
$$

> [!success] Answer (the key)
> The two one-sided limits differ ($\infty$ on the right, $2$ on the left), so the limit does not exist and **$f$ is not differentiable at $x=0$**.

### a6. Extrema and monotonicity

$$
f'(x)=\begin{cases}2x+2 & x<0\\[2pt] \dfrac{1}{2\sqrt x} & x>0\end{cases}
$$

- $f'(x)=0$: $2x+2=0$ gives $x=-1$ (this is on the left branch, valid). The right branch $\frac1{2\sqrt x}$ is never zero.
- $f'(x)$ undefined: $x=0$ (from a5).

| Interval | $x<-1$ | $-1<x<0$ | $x>0$ |
|---|---|---|---|
| $f'(x)$ | $-$ | $+$ | $+$ |
| $f(x)$ | decreasing | increasing | increasing |

$f(-1)=1-2=-1$.

> [!success] Answer (the key)
> - Increasing for $x>-1$, decreasing for $x<-1$.
> - Relative **minimum** at $(-1,-1)$. There is **no extremum at $x=0$**: $f'$ does not change sign there.

### a7. Inflection points and concavity

$$
f''(x)=\begin{cases}2 & x<0\\[2pt] -\dfrac{1}{4x^{3/2}} & x>0\end{cases}
$$

(For $x>0$: $\frac{d}{dx}\tfrac12x^{-1/2}=-\tfrac14x^{-3/2}$.)

| Interval | $x<0$ | $x>0$ |
|---|---|---|
| $f''(x)$ | $+$ | $-$ |
| Concavity | up | down |

$f''(0)$ does not exist (the key: $f''$ undefined at $x=0$), but $f$ is continuous there and the concavity **changes** from up to down.

> [!success] Answer (the key)
> Concave up for $x<0$, concave down for $x>0$. **Inflection point at $x=0$**, the point $(0,0)$.

### a8. The graph

![[PP27_q1_piecewise_graph.png]]

A parabola valley with its bottom at $(-1,-1)$ climbs to $(0,0)$ with slope $2$, then the curve bends over and continues as the root curve, starting with a vertical tangent-like steepness and flattening out.

### b. Vertical tangent?

> [!success] Answer (the key)
> **No.** The only $x$ where the derivative is undefined is $x=0$, but the derivative does not go to $\pm\infty$ from **both** sides there. From the left the slope is the finite number $2$; only the right side blows up.

> [!tip] Intuition
> A vertical tangent needs the slope to go to $+\infty$ on both sides, or to $-\infty$ on both sides (compare $\sqrt[3]{x}$). Here only one side is vertical.

### c. A corner point?

> [!success] Answer (the key)
> **Yes**: the one-sided derivatives approach two different values.

> [!warning] Wording check
> The two values are $2$ (from the left) and $+\infty$ (from the right). In [[Lec_07-The Derivative, Differentiability and Rules]] a corner is two different **finite** slopes. So strictly this point is "a finite slope on one side and a vertical slope on the other", not a textbook corner. The key's answer (yes, a non-smooth point where the two sides disagree) is kept, but expect an examiner to accept the explanation "the one-sided derivatives are different, so the graph has a sharp change of direction at $x=0$".

### d. $\int_{-1}^{a}f(x)\,dx=0$ with $a>0$

Split at the seam $x=0$ (the function changes formula there):

$$
\int_{-1}^{a}f(x)\,dx=\int_{-1}^{0}(x^2+2x)\,dx+\int_{0}^{a}x^{1/2}\,dx=\left[\frac{x^3}{3}+x^2\right]_{-1}^{0}+\left[\frac{x^{3/2}}{\frac32}\right]_0^a
$$

The first bracket is $0-\left(-\frac13+1\right)=-\frac23$. The second is $\frac23a^{3/2}$:

$$
-\frac23+\frac23\sqrt{a^3}=0\;\Rightarrow\;\sqrt{a^3}=1\;\Rightarrow\;a^3=1\;\Rightarrow\;a=1
$$

> [!success] Answer (the key)
> $a=1$.

> [!tip] Intuition
> From $x=-1$ to $0$ the function is below the axis, so the integral there is negative ($-\frac23$). The root branch adds area above the axis. The two cancel exactly when $a=1$.

---

## Q2 — Four separate pieces (25 points)

**Question.** There is no connection between the parts.

a. Find $\displaystyle\lim_{x\to0}\frac{\sqrt{5x+9}-3}{x}$.

b. Find $\displaystyle\lim_{x\to-\infty}\left(1+\frac3x\right)^{\lvert x\rvert}$.

c. Draw the graph of $y=-3+e^{1+x}$ using the graph of the basic exponent function.

d. Find asymptotes (if any) for $f(x)=\dfrac{x\sqrt{3x^2+x+1}}{x^2+5}$.

### a. The limit at $0$

The key notes this is copied from the week 5 lesson. Substituting $x=0$ gives $\frac{3-3}{0}=\frac00$. Multiply by the conjugate $\dfrac{\sqrt{5x+9}+3}{\sqrt{5x+9}+3}$:

$$
\lim_{x\to0}\frac{(5x+9)-9}{x\left(\sqrt{5x+9}+3\right)}=\lim_{x\to0}\frac{5x}{x\left(\sqrt{5x+9}+3\right)}=\lim_{x\to0}\frac{5}{\sqrt{5x+9}+3}=\frac{5}{3+3}=\frac56
$$

> [!success] Answer (the key)
> $\dfrac56$.

### b. The Euler limit

For $x\to-\infty$ we have $x<0$, so $\lvert x\rvert=-x$:

$$
\lim_{x\to-\infty}\left(1+\frac3x\right)^{-x}=\lim_{x\to-\infty}\left[\left(1+\frac3x\right)^{x/3}\right]^{-3}=e^{-3}
$$

The inner expression is the standard form $\left(1+\frac1t\right)^t\to e$ with $t=\frac x3\to-\infty$.

> [!success] Answer (the key)
> $e^{-3}$.

### c. The graph of $y=-3+e^{1+x}$

The key notes this is taken from exercise 4, question 4 (compare [[PS_03-Composition, Transformations and Exponential Graphs]]). Build it in two steps from $y=e^x$:

1. $y=e^{x+1}$: replace $x$ by $x+1$, so the graph shifts **one unit left**. It passes through $(0,e)$.
2. $y=-3+e^{x+1}$: subtract $3$, so the graph shifts **three units down**. The horizontal asymptote moves from $y=0$ to $y=-3$, and the y-intercept becomes $(0,\,e-3)$.

![[PP27_q2c_shifted_exponential.png]]

> [!success] Answer (the key)
> The shifted exponential with horizontal asymptote $y=-3$ (as $x\to-\infty$) and y-intercept $(0,\,e-3)$.

> [!tip] Intuition (my own check)
> $e-3\approx-0.28$ is just below the axis, so the curve crosses the x-axis a little to the right, where $e^{1+x}=3$, at $x=\ln3-1\approx0.10$.

### d. Asymptotes of $f(x)=\dfrac{x\sqrt{3x^2+x+1}}{x^2+5}$

The key notes this is similar to exercise 6, question 2d.

**Vertical.** The denominator $x^2+5$ is never zero and the root is defined everywhere ($3x^2+x+1>0$ always), so $f$ is continuous for all $x$: **no vertical asymptote**.

**Horizontal, $x\to+\infty$.** Pull $x^2$ out of the root and the denominator. For $x>0$, $\sqrt{x^2}=x$:

$$
\lim_{x\to\infty}\frac{x\sqrt{x^2\left(3+\frac1x+\frac1{x^2}\right)}}{x^2\left(1+\frac5{x^2}\right)}=\lim_{x\to\infty}\frac{x\cdot x\sqrt{3+\frac1x+\frac1{x^2}}}{x^2\left(1+\frac5{x^2}\right)}=\sqrt3
$$

**Horizontal, $x\to-\infty$.** Now $\sqrt{x^2}=\lvert x\rvert=-x$, so a minus sign appears:

$$
\lim_{x\to-\infty}\frac{x\cdot(-x)\sqrt{3+\frac1x+\frac1{x^2}}}{x^2\left(1+\frac5{x^2}\right)}=\lim_{x\to-\infty}\frac{-x^2\sqrt{3+\frac1x+\frac1{x^2}}}{x^2\left(1+\frac5{x^2}\right)}=-\sqrt3
$$

> [!success] Answer (the key)
> Horizontal asymptotes $y=\sqrt3$ (as $x\to\infty$) and $y=-\sqrt3$ (as $x\to-\infty$). No vertical asymptote.

---

## Q3 — Cost and marginal cost (20 points)

**Question.** The cost (in dollars) for producing $x$ units of a product is $C(x)=1000+100x-\dfrac{x^2}{2}$ for $0\le x<100$.

a. Find the marginal cost when 80 units are produced and explain the meaning of the result.
b. Calculate $C'(50)$ and explain the meaning of the result.
c. How would an increase in the number of units produced affect the cost in the given domain?
d. How would an increase in the number of units produced affect the marginal cost in the given domain?

> [!info] Source of the answers
> The key only says "copied from ex 8, Q5, you can watch its video solution". The same cost function is [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]] Question 2, whose printed answers I follow. The numbers match, so the answers carry over. I re-derived each one below.

The marginal cost is the derivative: $C'(x)=100-x$.

### a. Marginal cost at 80 units

$$
C'(80)=100-80=20
$$

> [!success] Answer (printed in the matching problem set)
> At a production level of $80$ units, producing **one more unit costs about \$20 extra**.

> [!tip] Intuition
> $C'$ is the instantaneous rate of change. Over a whole extra unit it is an approximation: the exact cost of the 81st unit is $C(81)-C(80)=5819.5-5800=19.5$, very close to $20$.

### b. $C'(50)$

$$
C'(50)=100-50=50
$$

> [!success] Answer (printed in the matching problem set)
> At $50$ units, one more unit costs about **\$50**.

### c. Effect on cost

$C'(x)=100-x>0$ for every $x$ in $0\le x<100$ (it only reaches $0$ at $x=100$, which is outside the domain), so $C$ is increasing.

> [!success] Answer (printed in the matching problem set)
> Producing more **increases the cost**.

### d. Effect on marginal cost

$C''(x)=-1<0$, so $C'$ is decreasing (check: $C'(50)=50$ but $C'(80)=20$).

> [!success] Answer (printed in the matching problem set)
> Producing more **decreases the marginal cost**.

> [!tip] Intuition
> Total cost keeps rising, but each extra unit adds less than the one before. The cost curve is concave (economies of scale).

---

## Q4 — Transformations, a parameter and a chain rule (25 points)

**Question.** There is no connection between the parts.

a. Given $f(x)=6x^2-x-1$ and $g(x)=3x+1$.
1. Draw the graphs of the two functions on the same set of axes and write on the graph the coordinates of their x-intercept points and the vertex of the parabola.
2. **Use reflections and translations** to draw $y_1=-g(x-1)$ on a different set of axes and write the coordinates of its x-intercept. Explain which translation or reflection you used in each step.
3. **Use reflections and translations** to draw $y_2=f(-x-1)$ on a different set of axes and write the coordinates of its x-intercepts and its vertex. Explain each step.

b. Given $f(x)=(x-a)^2$ and $g(x)=f\!\left(\dfrac1x\right)$, where $a>0$ is a constant. It is given that $g'(a)=0$. Find $a$.

c. Given $f(4)=2$ and $f'(4)=4$ and $g(x)=\left[x\cdot f\!\left(\dfrac x2\right)\right]^3$. Find $g'(8)$.

### a1. The two graphs

Factor $f$: $6x^2-x-1=(3x+1)(2x-1)$, so the roots are $x=-\frac13$ and $x=\frac12$. The vertex is at $x=-\frac{b}{2a}=\frac{1}{12}$, with $f\!\left(\frac1{12}\right)=\frac{6}{144}-\frac1{12}-1=\frac1{24}-\frac2{24}-\frac{24}{24}=-\frac{25}{24}$. For the line, $3x+1=0$ gives $x=-\frac13$.

![[PP27_q4a_f_and_g.png]]

> [!success] Answer (the key)
> $f$: x-intercepts $\left(-\frac13,0\right)$ and $\left(\frac12,0\right)$, vertex $\left(\frac1{12},-\frac{25}{24}\right)$. $g$: x-intercept $\left(-\frac13,0\right)$. (The line and the parabola meet on the x-axis at $-\frac13$.)

### a2. $y_1=-g(x-1)$

Two steps, in the order the key uses:

1. $g(x-1)$: replace $x$ by $x-1$, so shift **one unit to the right**. The x-intercept moves from $-\frac13$ to $\frac23$.
2. $-g(x-1)$: the minus sign outside reflects the graph **in the x-axis**. An x-intercept stays on the axis, so it stays at $\frac23$.

Check: $-g(x-1)=-(3(x-1)+1)=-3x+2$, which is $0$ at $x=\frac23$.

> [!success] Answer (the key)
> A falling line through $\left(\frac23,0\right)$.

### a3. $y_2=f(-x-1)$

1. $f(x-1)$: shift **one unit to the right**. Roots: $-\frac13+1=\frac23$ and $\frac12+1=\frac32$. Vertex: $\left(\frac{13}{12},-\frac{25}{24}\right)$.
2. $f(-x-1)$: replace $x$ by $-x$, so reflect **in the y-axis**. Roots become $-\frac23$ and $-\frac32$. The vertex becomes $\left(-\frac{13}{12},-\frac{25}{24}\right)$.

The key adds that the order can be reversed (reflect first, then shift) but you must watch the direction of the shift: $f(-x-1)=f(-(x+1))$, so after reflecting in the y-axis you shift **one unit to the left**.

![[PP27_q4a_reflections.png]]

> [!success] Answer (the key)
> x-intercepts $\left(-\frac32,0\right)$ and $\left(-\frac23,0\right)$, vertex $\left(-\frac{13}{12},-\frac{25}{24}\right)$.

> [!tip] Intuition
> The y-coordinates never change under a horizontal move or a horizontal reflection. Only the x-coordinates move, which is why the vertex height stays $-\frac{25}{24}$.

### b. Finding $a$ from $g'(a)=0$

The key says the chain rule works, but it is simpler to differentiate directly:

$$
g(x)=f\!\left(\frac1x\right)=\left(\frac1x-a\right)^2
$$

$$
g'(x)=2\left(\frac1x-a\right)\cdot\left(-\frac1{x^2}\right)
$$

$$
g'(a)=2\left(\frac1a-a\right)\cdot\left(-\frac1{a^2}\right)=0
$$

The factor $-\frac1{a^2}$ is never zero, so $\frac1a-a=0$, which gives $\frac1a=a$ and $a^2=1$. Since $a>0$:

> [!success] Answer (the key)
> $a=1$.

### c. $g'(8)$

The key notes this is based on Q4 from the 2019 B exam. Use the chain rule on the cube, and the product rule inside:

$$
g'(x)=3\left[x\,f\!\left(\frac x2\right)\right]^2\cdot\left[1\cdot f\!\left(\frac x2\right)+x\,f'\!\left(\frac x2\right)\cdot\frac12\right]
$$

At $x=8$ we have $\frac x2=4$:

$$
g'(8)=3\left[8\,f(4)\right]^2\left[f(4)+4f'(4)\right]=3\cdot(8\cdot2)^2\cdot\left[2+4\cdot4\right]=3\cdot256\cdot18=13{,}824
$$

(The key writes $3\cdot64\cdot2^2\cdot[2+4\cdot4]$, which is the same thing since $(8\cdot2)^2=64\cdot2^2=256$.)

> [!success] Answer (the key)
> $g'(8)=13{,}824$.
