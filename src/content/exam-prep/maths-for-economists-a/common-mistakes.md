---
title: "Common Mistakes"
subject: maths-for-economists-a
type: reference
description: "The slips that cost points in this course: limits with the wrong sign, Euler where there is none, a seam checked once instead of three times, marginal values without their meaning."
course: Maths for Economists A
semester: 1
year: 1
order: 5
tags:
  - maths-for-economists-a
  - exam-prep
  - common-mistakes
---

> The exam is open-answer, so most lost points are not wrong numbers but **missing justification**: a limit not written, a sign table not drawn, a sentence not given. The right-hand column is the check to run before moving on.

## Functions and domains (Lec 01 to 03)

| Mistake | Why it's wrong | Check |
|---|---|---|
| Excluding negative $x$ from $\sqrt[3]{x}$ or $x^{2/3}$ | Odd roots are defined everywhere | Only **even** roots need $\ge 0$ |
| Forgetting a root in a denominator must be $> 0$, not $\ge 0$ | Dividing by $0$ | $\frac1{\sqrt u}$ needs $u > 0$ |
| Keeping an intercept that falls outside its piece | Each formula only holds on its interval | $x^2 + 2x = 0$ gives $x = 0$ and $-2$, but only $-2$ is in $x < 0$ (2025 B Q3) |
| Saying two formulas are the same function | They may have different domains | Compare the domains too (2009 A Q1) |
| $f(x+2)$ moved right | $+$ inside moves **left** | Solve "new input = old point": $x + 2 = 1 \Rightarrow x = -1$ |
| $\lvert f\rvert$ drawn by flipping the whole graph | Only the parts **below** the axis flip | The parts above are unchanged |

## Limits (Lec 03 to 06)

| Mistake | Fix |
|---|---|
| Writing $\tfrac{c}{0} = \infty$ without the sign | Decide $0^+$ or $0^-$ **from each side** |
| Concluding a two-sided limit from one side | Do both: they may differ ($\pm\tfrac12$ in 2024 A Q1d) |
| Dropping an absolute value as if it were brackets | Split: $\lvert u\rvert = -u$ where $u < 0$ |
| $\sqrt{x^2} = x$ at $-\infty$ | $\sqrt{x^2} = \lvert x\rvert = -x$ for $x < 0$ (2024 B Q2c: $-\sqrt3$, not $\sqrt3$) |
| Calling every $(\dots)^x$ limit Euler | Euler needs base $\to 1$. Base $\to 2$ with exponent $\to 2$ is just $4$ (2025 B Q2b) |
| Euler limit answered $e^{\text{(numerator)}}$ without matching the exponent | $e^{\lim f\cdot g}$: in $(1 + \tfrac4{1-x})^x$ the product is $\tfrac{4x}{1-x} \to -4$, so $e^{-4}$ |
| $\infty - \infty = 0$, $\tfrac{\infty}{\infty} = 1$, $1^\infty = 1$, $0\cdot\infty = 0$ | All are **indeterminate**: simplify first |
| Factoring out the wrong exponential in $3^x + 2^x$ | Factor the **largest** base for $x \to \infty$ (and the smallest for $-\infty$) |
| Using $e^{1/x} \to \infty$ from both sides | $\infty$ from the right, $0$ from the left |

## Continuity and differentiability (Lec 04, 07)

| Mistake | Fix |
|---|---|
| Checking only the two limits at a seam | Three conditions: value, left limit, right limit |
| Using the wrong piece for $f(x_0)$ | The piece with $\le$ or $\ge$ owns the seam |
| Differentiating each piece and comparing, when the question says **definition** | Write $\lim_{h\to0^\pm}\tfrac{f(x_0+h)-f(x_0)}{h}$ for each side |
| Testing differentiability at a point where $f$ is not continuous | Not continuous ⇒ not differentiable. Stop there |
| Calling $+\infty$ / $+\infty$ a cusp | Same-sign infinities: **vertical tangent**. Opposite: cusp |
| "Not differentiable" ⇒ "no tangent line" | A vertical tangent **is** a tangent line ($x = x_0$) |
| Assuming every $\lvert\cdot\rvert$ makes a corner | $\lvert x-2\rvert\sqrt[3]{x-2}$ is differentiable at $2$ (Lec 07) |

## Derivatives and tangents (Lec 07 to 09)

| Mistake | Fix |
|---|---|
| Forgetting the inner derivative: $[g(3x)]' = g'(3x)$ | Times $3$: the chain rule |
| $[g(3x)]^4$ with only one layer differentiated | Power, then $g$, then $3x$: $4g^3\cdot g'\cdot3$ |
| Plugging $x_0$ into $g$ instead of the inside | $f(x^2 + 1)$ at $x = 0$ uses $f(1)$, not $f(0)$ (2025 A Q2f) |
| Writing the slope but not the line | Tangent line $= y - y_0 = m(x - x_0)$ with $y_0$ from the **function** |
| Quotient rule with the top reversed | $\dfrac{u'v - uv'}{v^2}$: the derivative of the **top** comes first |
| Not simplifying $f'$ before the sign table | One fraction, top and bottom factored, then read the signs |

## Extrema, concavity, asymptotes (Lec 10 to 12)

| Mistake | Fix |
|---|---|
| Only using $f' = 0$ as critical points | Also where $f'$ is **undefined** (cusps, corners, vertical tangents) |
| An extremum at a vertical asymptote or a hole | Not in the domain: never an extremum, even if the sign changes |
| $f'(x_0) = 0$ ⇒ extremum | Needs a sign change ($x^3$ at $0$) |
| $f''(x_0) = 0$ ⇒ inflection | Needs a sign change and continuity ($x^4$ at $0$) |
| Inflection at an asymptote | Concavity can change there, but it's not in the domain |
| Giving only $x$ for an extremum | Give the **point** $(x, f(x))$ |
| One horizontal asymptote for both ends | Check $+\infty$ and $-\infty$ separately (roots, exponentials) |
| A vertical asymptote at every zero of the denominator | A $\tfrac00$ that simplifies is a **hole** (2022 B Q1: hole at $x = 2$) |
| Thinking a graph can't cross its horizontal asymptote | It can: $(1 + \tfrac2x)^2$ crosses $y = 1$ at $x = -1$ |
| A graph that contradicts the tables | Last step: check every row of the sign tables against the sketch |

## Economics (Lec 02, 09)

| Mistake | Fix |
|---|---|
| A marginal value with no sentence | "At $x$ units, one more unit changes cost by about $C'(x)$ dollars" |
| Ignoring units of thousands | $x = 3$ might be **3,000** units; the answer may be in **thousands of dollars** |
| Revenue $R = p$ or $R = x$ | $R = x\cdot p$, with $p$ written in terms of $x$ (or $x$ in terms of $p$, as asked) |
| Demand slope upside down | $x$ as a function of $p$: slope $= \tfrac{\Delta x}{\Delta p}$ (negative) |
| Max profit without checking it is a max | Downward parabola, $P'' < 0$, or a sign table |
| Keeping both solutions after squaring | Plug back into the **unsquared** equation (2025 A Q4: $x = 3$ is false) |
| Marginal = exact change | It's an approximation: $C'(30) = 40$ but $C(31) - C(30) = 39$ (Lec 09) |
| Confusing "profit increasing" with "marginal profit increasing" | The first is $P' > 0$, the second $P'' > 0$ |

## Integrals (Lec 08)

| Mistake | Fix |
|---|---|
| One antiderivative across a seam | Split the integral at the seam |
| $\int f(ax + b)\,dx = F(ax + b)$ | Divide by $a$ |
| Area $=$ the definite integral when the curve dips below the axis | Split at the zeros and add absolute values |
| $\int x^{-1}\,dx = \tfrac{x^0}{0}$ | $\ln\lvert x\rvert$ |
