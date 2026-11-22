---
title: "Domain, Extrema, Vertical Tangent, Car Value Piecewise (2014 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, Moed B 2014"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - domain
  - functions
  - absolute-value
  - vertical-tangent
  - limits
  - rate-of-change
  - piecewise-function
  - true-false
aliases:
  - Maths A Moed B 2014
  - PP12 Maths A
subject: maths-for-economists-a
in_scope: true
---

# Domain, Extrema, Vertical Tangent, Car Value Piecewise (2014 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, Moed B 2014**, 3 hours, 4 questions of 25 points each. Questions 1, 2 and 3 are made of separate, unconnected parts.
> Builds on: [[Lec_01-Functions, Domain and Sigma Notation]], [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_01-Functions, Domain and Piecewise Graphs]], [[PS_02-Absolute Values, Business Functions and Exponential Equations]], [[PS_03-Composition, Transformations and Exponential Graphs]], [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> Answers follow **the key (author unclear)**: a handwritten, unsigned solution (5 pages). Terse working is expanded into steps. Where the key looks wrong or conflicts with the lectures it is kept and a `> [!warning]` explains (one spot: Q2b).

> [!warning] Parts with no key
> None. Every part has a handwritten answer.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Four short items: [[Domain]] with a fraction and a root, is-it-a-[[Function]] tests (equation and arrow diagram), [[Composition of Functions]] | [[Lec_01-Functions, Domain and Sigma Notation]], [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[PS_01-Functions, Domain and Piecewise Graphs]] |
| Q2 | Graph and extremum of an [[Absolute Value Function]], a [[Vertical Tangent]] of a root function, a limit with a conjugate | [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_04-Limits and Continuity]] |
| Q3 | [[Marginal Function]] and rate of its change for a car's value, then a three-piece [[Piecewise Function]] | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[PS_02-Absolute Values, Business Functions and Exponential Equations]] |
| Q4 | True or false: minimum values, y-intercepts, undefined points, points on asymptotes | [[Lec_01-Functions, Domain and Sigma Notation]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]] |

> [!tip] Intuition: the one move behind each question
> - Q1: a function gives **exactly one output per input**. Domain comes first, before any simplifying.
> - Q2: an absolute value only reflects the negative part, so a curve that is never negative is unchanged.
> - Q3: "rate of change of the rate" is a second-derivative question. Then glue three pieces so the ends match.
> - Q4: for each claim, think of the one picture that breaks it.

---

## Q1 — Four unrelated short items (25 points)

### a. Domain of $y=(x-2)\cdot(x-2)^{-1}+x^{1/4}$

**Question.** Find the domain of $y=(x-2)\cdot(x-2)^{-1}+x^{\frac14}$.

> [!success] Answer
>
> $$
> x\neq2 \quad\text{and}\quad x\ge0,
> \qquad\text{i.e. domain}=[0,2)\cup(2,\infty).
> $$

Rewrite with positive exponents: $y=\dfrac{x-2}{x-2}+\sqrt[4]{x}$.

- The fraction has $x-2$ in the denominator, so $x\neq2$.
- The fourth root needs a non-negative radicand, so $x\ge0$.

> [!tip] Intuition
> Of course the fraction $\frac{x-2}{x-2}$ "reduces" to $1$, but **the domain comes first**: $x=2$ stays excluded even after cancelling. (The key's own reminder.)

### b. Does $y^{2}+xy=0$ represent $y$ as a function of $x$ (domain all numbers)?

> [!success] Answer
> **No.**

Factor: $y^{2}+xy=y(y+x)=0$, so $y=0$ **or** $y=-x$.

For almost every $x$ (all except $x=0$, where the two values coincide) there are **two different** $y$ values. For example, $x=1$ gives $y=0$ and $y=-1$. A function allows only one output per input, so this is not a function of $x$.

### c. Given $f(x)=\sqrt{x}+3$ and $g(x)=2-x$, find $f(g(x))$

> [!success] Answer
>
> $$
> f(g(x))=\sqrt{2-x}+3
> $$

Substitute $g(x)=2-x$ wherever $f$ has an $x$:

$$
f(g(x))=\sqrt{g(x)}+3=\sqrt{2-x}+3 .
$$

> [!tip] Intuition
> The key stops at the formula. The radicand needs $2-x\ge0$, so the composite is defined for $x\le2$. This is a domain remark of mine, not part of the key.

### d. Does the arrow diagram represent a function?

The diagram has the domain $\{3,6,9,12\}$ with these arrows:

| Input | Output |
|---|---|
| $3$ | $5$ |
| $6$ | $6$ |
| $9$ | $5$ |
| $12$ | $6$ |

> [!success] Answer
> **Yes**, it is a function.

Every input has **exactly one** output. It does not matter that two inputs ($3$ and $9$, or $6$ and $12$) share an output: the rule forbids one input with two outputs, not two inputs with the same output.

---

## Q2 — Absolute value graph, vertical tangent, a limit (25 points)

### a. Draw the graph and find any extreme points of $y=\left|x^{2}+3x+4\right|$

> [!success] Answer
> The graph is the same as that of $y=x^{2}+3x+4$. There is a **minimum at $(-1.5,\ 1.75)$**.

**Why the absolute value changes nothing.** The parabola $y=x^{2}+3x+4$ opens upward. Its discriminant is $3^{2}-4\cdot1\cdot4=9-16=-7<0$, so it never touches the $x$-axis and is **always positive**. Taking the absolute value only reflects the negative part upward, and there is none, so $y=|x^{2}+3x+4|=x^{2}+3x+4$.

**Vertex.** $x=-\dfrac{3}{2\cdot1}=-1.5$ and

$$
y(-1.5)=2.25-4.5+4=1.75 .
$$

![[PP12_q2_abs_parabola.png]]

The only extreme point is this minimum. There is no maximum, since the parabola goes up forever on both sides.

### b. Vertical tangent line of $f(x)=\sqrt[3]{(x-1)^{2}}$

> [!success] Answer (the key)
>
> $$
> x=1
> $$

Write $f(x)=(x-1)^{2/3}$. Then

$$
f'(x)=\frac23\,(x-1)^{-1/3}=\frac{2}{3\sqrt[3]{x-1}} .
$$

The derivative is undefined only at $x=1$, where the denominator is $0$:

$$
\lim_{x\to1^{+}}f'(x)=\frac{2}{0^{+}}=+\infty,
\qquad
\lim_{x\to1^{-}}f'(x)=\frac{2}{0^{-}}=-\infty .
$$

The key concludes that the vertical tangent line is **$x=1$** (and adds that this can also be found using the definition of the derivative).

> [!warning] The key's label conflicts with the lectures
> In the lectures the slopes $+\infty$ on one side and $-\infty$ on the other mean a [[Cusp]], and a cusp has **no tangent line**. A [[Vertical Tangent]] needs infinite slopes of the **same sign** on both sides (like $\sqrt[3]{x-1}$). See [[Lec_07-The Derivative, Differentiability and Rules]] (section 3.3) and [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]]. The key's answer $x=1$ is kept as written. For the point itself: the graph has a sharp tip at $(1,0)$, which is its minimum. The same function appears in [[PP_14-Marginal Profit, Rational Function Graph, Cusp, Euler Limits, Continuity Parameter (2015 Moed B)]] Q3a, where that key calls $x=1$ a corner point instead.

### c. Find $\displaystyle\lim_{x\to3}\frac{1-\sqrt{x-2}}{x-3}$

> [!success] Answer
>
> $$
> -\tfrac12
> $$

Direct substitution gives $\frac{1-1}{0}=\frac00$. The numerator has a square root, so multiply top and bottom by its **conjugate** $1+\sqrt{x-2}$:

$$
\lim_{x\to3}\frac{1-\sqrt{x-2}}{x-3}\cdot\frac{1+\sqrt{x-2}}{1+\sqrt{x-2}}
=\lim_{x\to3}\frac{1-(x-2)}{(x-3)\left(1+\sqrt{x-2}\right)} .
$$

The numerator simplifies: $1-(x-2)=3-x=-(x-3)$. The factor $x-3$ cancels:

$$
=\lim_{x\to3}\frac{-1}{1+\sqrt{x-2}}=\frac{-1}{1+1}=-\frac12 .
$$

---

## Q3 — A car's value over 30 years (25 points)

**Question.** A car was purchased at a price of $\$25{,}000$. During the next 20 years its value $V(x)$ decreased according to

$$
V(x)=\frac{22{,}000}{0.5x+1}+3000,
$$

where $x$ is the time in years since the purchase.

a. Is the **rate of change** of the car's value increasing or decreasing during the first 20 years?

For the next two years the car's value remained constant. Then, being considered a collector's item, its value began to increase **linearly**, so that 30 years after its purchase it was worth $\$20{,}000$.

b. Write the equation of $V(x)$, the car's value in dollars $x$ years after purchase, for the domain $0\le x\le30$.

### a. Is the rate of change increasing or decreasing?

> [!success] Answer
> The rate of change is **increasing**.

Rewrite $V(x)=22{,}000\,(0.5x+1)^{-1}+3000$ for $0\le x\le20$ and differentiate. The rate of change of the value is the derivative:

$$
V'(x)=22{,}000\cdot\left(-1\right)(0.5x+1)^{-2}\cdot0.5=-\frac{11{,}000}{(0.5x+1)^{2}} .
$$

The key shows it in two ways.

**Way 1: look at $V'$ itself.** As $x$ grows the denominator $(0.5x+1)^{2}$ gets bigger, so the fraction $\frac{11{,}000}{(0.5x+1)^{2}}$ gets closer to zero. $V'$ is a negative number moving toward $0$, so it is **increasing**.

**Way 2: look at $V''$.**

$$
V''(x)=-11{,}000\cdot(-2)(0.5x+1)^{-3}\cdot0.5=\frac{11{,}000}{(0.5x+1)^{3}}>0 .
$$

$V''>0$ means $V'$ is increasing.

> [!tip] Intuition
> Careful with the wording. $V'<0$ so the car's **value** keeps falling. But $V'$ itself rises toward $0$, so the loss per year shrinks: the car depreciates quickly at first and more and more slowly later. "Rate of change increasing" is a statement about $V'$, not about $V$.

### b. The three-piece value function

Value at the end of the first phase:

$$
V(20)=\frac{22{,}000}{0.5\cdot20+1}+3000=\frac{22{,}000}{11}+3000=2000+3000=5000 .
$$

- **Years 0 to 20:** the given formula.
- **Years 20 to 22:** constant at $5000$.
- **Years 22 to 30:** a line through $(22,\ 5000)$ and $(30,\ 20{,}000)$. Its slope is

$$
m=\frac{20{,}000-5000}{30-22}=\frac{15{,}000}{8}=1875 .
$$

Point-slope form: $y-5000=1875\,(x-22)$, so $y=1875x-41{,}250+5000=1875x-36{,}250$.

> [!success] Answer
>
> $$
> V(x)=\begin{cases}
> \dfrac{22{,}000}{0.5x+1}+3000 & 0\le x\le20\\[8pt]
> 5000 & 20\le x\le22\\[4pt]
> 1875x-36{,}250 & 22\le x\le30
> \end{cases}
> $$

The key writes the boundaries with "$\le$" on both sides. That is harmless here because adjacent pieces agree at $x=20$ and $x=22$ (both give $5000$).

**Check.** $V(0)=22{,}000+3000=25{,}000$ (the purchase price). $1875\cdot22-36{,}250=5000$, and $1875\cdot30-36{,}250=20{,}000$. Both match.

![[PP12_q3_car_value.png]]

---

## Q4 — True or false (25 points)

**Question.** Answer true or false and explain briefly (using words, mathematics, a graph or an example).

### a. "At its minimum point, a function's value is always negative."

> [!success] Verdict
> **False.**

The value at a minimum can be positive. The key draws a curve that dips to a low point still above the $x$-axis. For example $f(x)=x^{2}+1$ has its minimum value $1>0$ at $x=0$. (Minimum describes the lowest height, not a sign.)

### b. "A function cannot have more than a single $y$ intercept."

> [!success] Verdict
> **True.**

The $y$ intercept is the output at $x=0$. If there were two different $y$ intercepts, the input $x=0$ would have two outputs, contradicting the definition of a function (one output per input).

### c. "At every $x$ value at which a function is undefined, it will also be discontinuous."

> [!success] Verdict
> **True.**

The key: the definition (the function having a value at the point) is the **first condition** for checking continuity. If $f(a)$ does not exist, the first condition fails, so $f$ is discontinuous at $a$.

### d. "A function's graph can have a point on its horizontal asymptote but not on its vertical one."

> [!success] Verdict
> **False.** (A graph can have a point on a vertical asymptote too.)

The first half is fine. The second half is the error: the function may be **defined at the very $x$** where it blows up nearby, by assigning that single point its own value. The key gives two examples, both seen in the course.

- $f(x)=\begin{cases}e^{1/x} & x\neq0\\ 3 & x=0\end{cases}$. As $x\to0^{+}$, $e^{1/x}\to+\infty$, so $x=0$ is a vertical asymptote. Yet $f(0)=3$ puts the point $(0,3)$ **on** that vertical line.
- $f(x)=\begin{cases}\dfrac{x}{(x-1)^{2}} & x\neq1\\[6pt] 2 & x=1\end{cases}$. Near $1$ the quotient tends to $+\infty$, so $x=1$ is a vertical asymptote, but $f(1)=2$ gives the point $(1,2)$ on it. (This is the question from Exercise 12, [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]].)
