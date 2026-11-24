---
title: "Linear Demand and Profit, Limits, Tangent Slopes & Composite Tangent Lines (2024 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2024 Moed B"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - price-demand
  - profit-maximisation
  - limits
  - definition-of-derivative
  - horizontal-tangent
  - chain-rule
  - exponential-graph
aliases:
  - Math I 2024 Moed B
  - PP32 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Linear Demand and Profit, Limits, Tangent Slopes & Composite Tangent Lines (2024 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2024 (Moed B)**, Hever Schulberg. 4 questions (25, 27, 23, 25 points), 3 hours, non-graphing calculator and formula sheet allowed.
> Builds on: [[Lec_01-Functions, Domain and Sigma Notation]], [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]]
> Practice: [[PS_01-Functions, Domain and Piecewise Graphs]], [[PS_03-Composition, Transformations and Exponential Graphs]], [[PS_05-Limits, Infinite Limits and Limits at Infinity]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]]

> [!info] Source
> The exam is on pages 2 to 3 of the source PDF (page 1 is the cover sheet). The **handwritten, unsigned key (author unclear)** is on pages 4 to 5. It is almost entirely a list of pointers ("this is Exercise 5, question 1(4)") plus one worked item (Q4d). For each pointer the answer below comes from the exam or exercise named, after checking that the wording and numbers match. Each part says where its answer comes from.

> [!warning] Parts that are AI-written, not from the key
> - **Q4a, Q4b, Q4c** (the $g(0)=0.5$, $g'(0)=2$ chain-rule parts): the key only says "solved in class in lesson 9, watch the video". Solved here, following [[Lec_09-Marginal Functions and Tangent Lines of Composites]], which treats the same data.
> - **The right-hand check in Q2a** is mine (the exercise it points to only covers $x\to0^-$). The two-sided answer matches the 2016 Moed B key.
>
> Every other part follows the key (author unclear), directly or through the exam or exercise it points to.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Linear price-demand, revenue, cost, profit, marginal meaning, maximum profit | [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] |
| Q2 | Four unrelated parts: a limit with an absolute value, a near-Euler limit, a limit at $-\infty$ with a root, and a tangent slope from the definition | [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]] |
| Q3 | Is an equation a function, an exponential graph from transformations, horizontal tangents of a product | [[Lec_01-Functions, Domain and Sigma Notation]], [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_07-The Derivative, Differentiability and Rules]] |
| Q4 | Tangent slopes of composites of an unknown $g$ from two pieces of data | [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]] |

> [!tip] Intuition: the one move behind each question
> - Q1: the demand line gives price as a function of quantity; revenue is quantity times price; profit is revenue minus cost, a downward parabola.
> - Q2: each limit has one trap: an absolute value (sign by side), a base that is not 1 (not Euler), a root at $-\infty$ ($\sqrt{x^2}=-x$).
> - Q4: with an unknown function, only the two given numbers can appear in the answer.

---

## Q1 — Linear demand, revenue, cost and profit (25 points)

**Question.** A factory has found that when the price per unit of its product is set at $\$45$ the daily demand is $200$ units, whereas when the price is $\$40$ the daily demand is $300$ units.

a. Assuming the price-demand equation is linear, show that its equation is $x=-20p+1100$, where $x$ is the daily demand and $p$ the price per unit.
b. Find the daily revenue function $R(x)$, find $R'(30)$ and explain the meaning of the result.
c. Assuming the cost of producing each unit is $\$25$, find the daily cost function $C(x)$, find $C'(30)$ and explain the meaning.
d. Find the daily profit function $P(x)$ and find the maximal daily profit.

This is the 2019 Moed A question 3 with the same numbers (the 2019 version says "find its equation" where this one says "show that it is"). The answers are from that key (author unclear), written out in steps.

### a. The demand line

Two points $(p,x)=(45,200)$ and $(40,300)$. Slope $\dfrac{300-200}{40-45}=-20$. Point-slope form through $(40,300)$:

$$
x-300=-20(p-40)\;\Longrightarrow\;x=-20p+800+300
$$

> [!success] Answer (the key via 2019 Moed A Q3)
> $x=-20p+1100$, as the question states.

### b. Revenue and $R'(30)$

Revenue is quantity times price, so write the price in terms of $x$: from $x=-20p+1100$ we get $p=\dfrac{1100-x}{20}$.

$$
R(x)=x\cdot p=x\cdot\frac{1100-x}{20}=-\frac1{20}x^2+55x
$$

$$
R'(x)=-\frac1{10}x+55\;\Longrightarrow\;R'(30)=-3+55=52
$$

> [!success] Answer (the key via 2019 Moed A Q3)
> $R(x)=-\tfrac1{20}x^2+55x$ and $R'(30)=52$. At a daily level of $30$ units, producing and selling the $31$st unit raises revenue by about **$\$52$**.

### c. Cost and $C'(30)$

Each unit costs $\$25$, so $C(x)=25x$ and $C'(x)=25$ for every $x$.

> [!success] Answer (the key via 2019 Moed A Q3)
> $C(x)=25x$ and $C'(30)=25$. Each unit costs $\$25$ to produce, **including the $31$st unit**.

### d. Profit and its maximum

$$
P(x)=R(x)-C(x)=-\frac1{20}x^2+55x-25x=-\frac1{20}x^2+30x
$$

$$
P'(x)=-\frac1{10}x+30=0\;\Longrightarrow\;x=300
$$

$P$ is a parabola opening **downward**, so $x=300$ is the maximum. 

$$
P(300)=-\frac{90000}{20}+9000=-4500+9000=4500
$$

> [!success] Answer (the key via 2019 Moed A Q3)
> $P(x)=-\tfrac1{20}x^2+30x$; the maximal daily profit is **$\$4{,}500$**, at $300$ units a day.

> [!tip] Intuition
> The maximum is where marginal revenue equals marginal cost: $-\tfrac1{10}x+55=25$ gives $x=300$ again. At $300$ units the price is $p=\tfrac{1100-300}{20}=40$.

---

## Q2 — Four unrelated segments (27 points)

### a. $\displaystyle\lim_{x\to0}\frac{x-1}{\left|-x^2+x\right|}$

Factor the absolute value: $-x^2+x=x(1-x)$. The numerator tends to $-1$ and the absolute value is a small positive number from **both** sides:

- **$x\to0^-$:** $x<0$, $1-x>0$, so $x(1-x)<0$ and $\left|x(1-x)\right|=-x(1-x)=x^2-x$, a small positive number $0^+$. The limit is $\dfrac{-1}{0^+}=-\infty$. This is Exercise 5, Question 1(4) ([[PS_05-Limits, Infinite Limits and Limits at Infinity]]).
- **$x\to0^+$** (my check): $0<x<1$ gives $x(1-x)>0$, so $\left|\cdot\right|=x(1-x)\to0^+$ and again $\dfrac{-1}{0^+}=-\infty$.

$$
\lim_{x\to0}\frac{x-1}{\left|-x^2+x\right|}=\frac{-1}{0^+}=-\infty
$$

> [!success] Answer (the key via Exercise 5 Q1(4) and 2016 Moed B Q4a)
> $-\infty$. The same function and two-sided limit appear in [[PP_16-Derivative Graph Reading, Marginal Cost, Piecewise Tangents & Absolute Value Limits (2016 Moed B)]] (Q4a), where the answer is $-\infty$ too.

### b. $\displaystyle\lim_{x\to\infty}\left(1-\frac2{x^2+1}\right)^{x}$

The base tends to $1$ and the exponent to $\infty$ ($1^\infty$ form), but the small term $-\dfrac2{x^2+1}$ is of order $\dfrac1{x^2}$, much smaller than $\dfrac1x$. Use the Euler recipe and look at the leftover exponent:

$$
\left(1-\frac2{x^2+1}\right)^{x}=\left[\left(1+\frac{-2}{x^2+1}\right)^{\frac{x^2+1}{-2}}\right]^{\frac{-2x}{x^2+1}}
$$

The inner bracket tends to $e$, and the outer exponent $\dfrac{-2x}{x^2+1}\to0$. So the limit is $e^{0}$.

> [!success] Answer (the key via Exercise 6 Q2(i))
> $1$. See [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]] (Q2i).

> [!tip] Intuition
> Compare $\left(1-\tfrac3x\right)^x\to e^{-3}$, where the small term is of order $\tfrac1x$. Here it is of order $\tfrac1{x^2}$, so it is "too small to count" and the limit stays at $1$.

### c. $\displaystyle\lim_{x\to-\infty}\frac{x\sqrt{3x^2+x}}{x^2-8}$

For $x\to-\infty$, $x$ is negative, so $\sqrt{x^2}=|x|=-x$ (the sign trap). Pull $x^2$ out of the root:

$$
x\sqrt{3x^2+x}=x\cdot|x|\sqrt{3+\tfrac1x}=-x^2\sqrt{3+\tfrac1x}
$$

$$
\frac{x\sqrt{3x^2+x}}{x^2-8}=\frac{-\sqrt{3+\frac1x}}{1-\frac8{x^2}}\;\longrightarrow\;\frac{-\sqrt3}{1}=-\sqrt3
$$

> [!success] Answer (the key via Exercise 5 Q4(d))
> $-\sqrt3$. The expression is identical to [[PS_05-Limits, Infinite Limits and Limits at Infinity]] (Q4d).

### d. Slope of the tangent to $f(x)=\dfrac{x-3}{x+5}$ at $x=-1$, from the definition

The question is 2020 Moed A, question 2d, with the same function and the same point.

$$
f(-1)=\frac{-4}{4}=-1,\qquad f(-1+h)=\frac{h-4}{h+4}
$$

$$
\frac{f(-1+h)-f(-1)}{h}=\frac{\frac{h-4}{h+4}+1}{h}=\frac{\frac{h-4+h+4}{h+4}}{h}=\frac{2h}{h(h+4)}=\frac2{h+4}
$$

$$
f'(-1)=\lim_{h\to0}\frac2{h+4}=\frac12
$$

> [!success] Answer (the key via 2020 Moed A Q2d)
> The slope of the tangent at $x=-1$ is **$\tfrac12$**. Check with the quotient rule: $f'(x)=\dfrac{(x+5)-(x-3)}{(x+5)^2}=\dfrac8{(x+5)^2}$ and $\dfrac8{16}=\dfrac12$.

---

## Q3 — Three unrelated segments (23 points)

### a. Does $xy+y-x=5$ define $y$ as a function of $x$ on all real $x$?

Collect the $y$ terms: $y(x+1)=x+5$.

- For $x\neq-1$: $y=\dfrac{x+5}{x+1}$, exactly one value.
- For $x=-1$: the equation becomes $0\cdot y=4$, which has **no** solution for $y$.

> [!success] Answer (the key via Exercise 1 Q2(f))
> **No**, not on all real numbers: at $x=-1$ there is no $y$ at all. If the domain is reduced to **$x\neq-1$**, it is a function, $y=\dfrac{x+5}{x+1}$. See [[PS_01-Functions, Domain and Piecewise Graphs]] (Q2f).

### b. Graph $y=-3+e^{1+x}$ from the basic exponential

The same function is graphed in 2022 Moed A, question 2c, and in Exercise 3, Question 4 ([[PS_03-Composition, Transformations and Exponential Graphs]]), where the key's graph labels the horizontal asymptote $-3$ and the $y$-intercept.

Start from $y=e^x$ (through $(0,1)$, asymptote $y=0$), then:

1. **Shift left $1$** ($x\to x+1$): $y=e^{1+x}$, which passes through $(0,e)$.
2. **Shift down $3$**: $y=-3+e^{1+x}$, so the asymptote moves from $y=0$ to $y=-3$.

- **$y$-intercept:** $y(0)=-3+e\approx-0.28$, the point $(0,\,e-3)$.
- **Horizontal asymptote:** $y=-3$ (as $x\to-\infty$).

![[PP32_q3_exponential_shift.png]]

> [!success] Answer (the key via Exercise 3 Q4 and 2022 Moed A Q2c)
> $y$-intercept $(0,\,e-3)\approx(0,-0.28)$; horizontal asymptote $y=-3$.

### c. Horizontal tangent lines of $f(x)=(2x-9)(x^2+6)$

Product rule:

$$
f'(x)=2(x^2+6)+(2x-9)(2x)=2x^2+12+4x^2-18x=6x^2-18x+12=6(x-1)(x-2)
$$

A horizontal tangent is where $f'(x)=0$: $x=1$ or $x=2$. Heights:

$$
f(1)=(2-9)(1+6)=-49,\qquad f(2)=(4-9)(4+6)=-50
$$

> [!success] Answer (the key via Exercise 7 Q7)
> Two horizontal tangent lines: **$y=-49$** and **$y=-50$**. See [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]] (Q7).

---

## Q4 — Composites of an unknown function (25 points)

**Question.** The function $g(x)$ intersects the $y$-axis at $y=0.5$ and the slope of its tangent line at that point is $2$.

a. Write this data using mathematical notation.
b. For $y_1=g(3x)$, find the slope of the tangent line at $x=0$.
c. For $y_2=\left[g(3x)\right]^4$: (i) find the slope of the tangent line at $x=0$; (ii) find the equation of that tangent line.
d. For $y_3=\left[x\cdot g\!\left(\tfrac x2\right)\right]^3$, find the slope of the tangent line at $x=0$.

> [!warning] AI-written answers for a, b and c, not official. Check before relying on them.
> The key says a to c were solved in class (lesson 9, "the chain rule" video) and gives no written answer. The working below is mine, following the same data and method as [[Lec_09-Marginal Functions and Tangent Lines of Composites]]. Part d is the key's own.

### a. The data

The $y$-axis is where $x=0$, and the tangent slope is the derivative.

> [!success] Answer (AI-written)
> $g(0)=0.5$ and $g'(0)=2$.

### b. $y_1=g(3x)$

Outer function $g$, inner function $3x$ (derivative $3$). Chain rule:

$$
y_1'(x)=g'(3x)\cdot3\;\Longrightarrow\;y_1'(0)=g'(0)\cdot3=2\cdot3=6
$$

> [!success] Answer (AI-written)
> The slope is **$6$**. (The point is $(0,\,g(0))=(0,\,0.5)$, so the tangent line is $y=6x+0.5$.)

### c. $y_2=\left[g(3x)\right]^4$

Three layers: the power $4$, then $g$, then $3x$.

$$
y_2'(x)=4\left[g(3x)\right]^3\cdot g'(3x)\cdot3=12\left[g(3x)\right]^3g'(3x)
$$

**i. Slope at $x=0$** (here $3x=0$ too, so only $g(0)$ and $g'(0)$ appear):

$$
y_2'(0)=12\cdot(0.5)^3\cdot2=12\cdot0.125\cdot2=3
$$

**ii. Tangent line.** The point is $y_2(0)=\left[g(0)\right]^4=0.5^4=\dfrac1{16}$. Point-slope form with slope $3$:

$$
y-\frac1{16}=3(x-0)\;\Longrightarrow\;y=3x+\frac1{16}
$$

> [!success] Answer (AI-written)
> i. Slope **$3$**. ii. Tangent line **$y=3x+\tfrac1{16}$**.

### d. $y_3=\left[x\cdot g\!\left(\tfrac x2\right)\right]^3$

Power of a product. Chain rule on the cube, then the product rule inside, with $\dfrac{d}{dx}g\!\left(\tfrac x2\right)=g'\!\left(\tfrac x2\right)\cdot\tfrac12$:

$$
y_3'(x)=3\left[x\,g\!\left(\tfrac x2\right)\right]^2\cdot\left[1\cdot g\!\left(\tfrac x2\right)+x\cdot g'\!\left(\tfrac x2\right)\cdot\tfrac12\right]
$$

At $x=0$ the first factor contains $x=0$:

$$
y_3'(0)=3\left[0\cdot g(0)\right]^2\cdot\left[g(0)+0\cdot g'(0)\cdot\tfrac12\right]=3\cdot0\cdot0.5=0
$$

> [!success] Answer (the key, author unclear)
> The slope is **$0$**: the whole expression carries the factor $\left[x\,g\!\left(\tfrac x2\right)\right]^2$, which is $0$ at $x=0$. The key notes that this derivative also appears in 2022 Moed A, question 4(c).

> [!tip] Intuition
> Inside the cube, $x\cdot g(x/2)$ is $0\cdot0.5=0$ at $x=0$, so $y_3$ looks like $(\text{something near }0)^3$ there, which is extremely flat. The $0$ slope does not depend on $g'(0)$ at all.

---

## Quick reference

> [!summary] Results at a glance
> | Part | Result | Source |
> |---|---|---|
> | Q1a | $x=-20p+1100$ | key via 2019 Moed A Q3 |
> | Q1b | $R=-\tfrac1{20}x^2+55x$, $R'(30)=52$ | key via 2019 Moed A Q3 |
> | Q1c | $C=25x$, $C'(30)=25$ | key via 2019 Moed A Q3 |
> | Q1d | $P=-\tfrac1{20}x^2+30x$, max $\$4{,}500$ at $x=300$ | key via 2019 Moed A Q3 |
> | Q2a | $-\infty$ | key via Exercise 5 Q1(4) and 2016 Moed B Q4a |
> | Q2b | $1$ | key via Exercise 6 Q2(i) |
> | Q2c | $-\sqrt3$ | key via Exercise 5 Q4(d) |
> | Q2d | $\tfrac12$ | key via 2020 Moed A Q2d |
> | Q3a | not a function on all $x$ (no $y$ at $x=-1$); fine for $x\neq-1$ | key via Exercise 1 Q2(f) |
> | Q3b | $y$-intercept $(0,e-3)$, asymptote $y=-3$ | key via Exercise 3 Q4 and 2022 Moed A Q2c |
> | Q3c | $y=-49$ and $y=-50$ | key via Exercise 7 Q7 |
> | Q4a-c | $g(0)=0.5$, $g'(0)=2$; slope $6$; slope $3$, line $y=3x+\tfrac1{16}$ | AI-written |
> | Q4d | $0$ | key |
