---
title: "Lec 02: Piecewise Functions and Business Applications"
semester: 1
year: 1
course: "Maths for Economists A"
lecture: 2
tags:
  - maths-for-economists-a
  - piecewise-function
  - absolute-value
  - quadratic-function
  - linear-function
  - cost-revenue-profit
subject: maths-for-economists-a
in_scope: true
---

# Lec 02: Piecewise Functions and Business Applications

> Part of: [[Maths for Economists A]]
> Key concepts: [[Absolute Value Function]], [[Piecewise Function]], [[Quadratic Function]], [[Parabola]], [[Linear Function]], [[Slope]], [[Step Function]], [[Revenue Function]], [[Cost Function]], [[Profit Function]]

> [!note] Reconstructed from the slides
> The Lesson 02 worksheet is a two-page image-only sheet. Page 2 is blank graph paper (working space). Everything printed on page 1 (the headings, the quick method, the questions and the given numbers) is the source. All definitions, explanations and worked solutions in this note are reconstructed, because the lecturer worked them in class in the blank space. Check your own class notes against them.

## Overview of the worksheet

| Worksheet item | Topic | Section |
| --- | --- | --- |
| 1 | Writing an absolute value function without the absolute value sign | [[#1. Absolute value functions]] |
| Quick method | Draw, then reflect | [[#1. Absolute value functions]] |
| Quadratic function (parabola) | $f(x)=ax^2+bx+c$ and $f(x)=\lvert x^2+x-6\rvert$ | [[#2. Quadratic with absolute value]] |
| 2 | A business situation: telephone charges | [[#3. Business situation: telephone charges]] |
| Linear function | Slope and equation from two points | [[#4. Finding the equation of a linear function]] |
| Software | Straight-line depreciation | [[#5. Software depreciation]] |
| The Business World | Clock radios: cost, revenue, profit | [[#6. The Business World: clock radios]] |

## 1. Absolute value functions

Printed task: *write an absolute value function without using the absolute value sign.*

> [!note] Reconstructed from the slides
> The absolute value of a number is its distance from zero, so it is never negative. For any expression $g(x)$:
>
> $$
> \lvert g(x)\rvert =
> \begin{cases}
> g(x) & \text{if } g(x)\ge 0\\
> -g(x) & \text{if } g(x)<0
> \end{cases}
> $$
>
> This **is** the piecewise form: the absolute value sign is replaced by two rules, and the **sign of the inside** decides which rule applies. Procedure:
> 1. Find where the inside $g(x)$ equals zero (these are the break points).
> 2. Check the sign of $g(x)$ on each interval between break points (a sign table).
> 3. Where $g\ge 0$ keep $g(x)$; where $g<0$ use $-g(x)$.

### Quick method for drawing the graph (printed)

1. Draw the function **without** the absolute value.
2. **Reflect** the part of the graph **below** the x-axis around the x-axis.

> [!tip] Why reflection works
> Flipping a point $(x,y)$ with $y<0$ to $(x,-y)$ is exactly "replace $g$ by $-g$ where $g<0$". Points already on or above the axis do not move, and the result never dips below the axis.

## 2. Quadratic with absolute value

Printed: **Quadratic function, parabola:** $f(x)=ax^2+bx+c$.

> [!note] Reconstructed from the slides
> The graph is a parabola. It opens **up** if $a>0$ and **down** if $a<0$. Its vertex is at $x=-\dfrac{b}{2a}$, and its roots (x-intercepts) come from $ax^2+bx+c=0$.

Printed question: given $f(x)=\lvert x^2+x-6\rvert$, (a) draw the graph, (b) write it as a piecewise function, (c) find its extreme points.

> [!example] Worked solution (reconstructed)
> **Step 1: inside function.** $g(x)=x^2+x-6=(x+3)(x-2)$. Roots at $x=-3$ and $x=2$. Here $a=1>0$, so the parabola opens up and $g<0$ **between** the roots.
>
> Vertex: $x=-\dfrac{1}{2}$, $g\!\left(-\tfrac12\right)=\tfrac14-\tfrac12-6=-6.25$. The y-intercept is $g(0)=-6$.
>
> **Step 2: sign table.**
>
> | Interval | $x<-3$ | $-3<x<2$ | $x>2$ |
> | --- | --- | --- | --- |
> | Sign of $g(x)$ | $+$ | $-$ | $+$ |
> | Rule for $f(x)$ | $g(x)$ | $-g(x)$ | $g(x)$ |
>
> **(b) Piecewise form.**
>
> $$
> f(x)=
> \begin{cases}
> x^2+x-6 & \text{if } x\le -3\\
> -x^2-x+6 & \text{if } -3<x<2\\
> x^2+x-6 & \text{if } x\ge 2
> \end{cases}
> $$
>
> The endpoints can go in either outer piece because $g=0$ there.
>
> **(a) Graph.** Draw the parabola $y=x^2+x-6$, then reflect the part between $x=-3$ and $x=2$ (the part below the axis) upward.
>
> ![[Lec02_abs_quadratic.png]]
>
> **(c) Extreme points.**
> - **Minimum: $f=0$ at $x=-3$ and $x=2$.** These are the corners where the reflected piece meets the outer branches. Since $f\ge 0$ everywhere, 0 is the **global minimum**. (The function is not smooth at these points, so you find them from the graph and the zeros, not from a zero-slope condition.)
> - **Local maximum: $f=6.25$ at $x=-\tfrac12$.** The reflected vertex is $\left(-\tfrac12,\,6.25\right)$.
> - **No global maximum**: both outer branches rise without bound.

**See it move.** See how a, b and c reshape a parabola and move its vertex.

```graph
type: calc-function-family
family: quadratic
```

## 3. Business situation: telephone charges

Printed: A telephone company charges **$4.8** for the first minute of a long distance call (or for part of it) and **$3.5** for any additional minute (or a part of it). Let $x$ be the duration of a call in minutes and $c(x)$ its cost.
(a) Write the equation of $c(x)$ for a call of up to 3 minutes. (b) Graph. (c) Find $R_{min}$ (as printed).

> [!example] Worked solution (reconstructed)
> "Or part of it" means any started minute is charged in full, so the cost **jumps** at each whole minute. This gives a **step function**, a type of piecewise function.
>
> **(a)**
>
> $$
> c(x)=
> \begin{cases}
> 4.8 & \text{if } 0<x\le 1\\
> 8.3 & \text{if } 1<x\le 2\\
> 11.8 & \text{if } 2<x\le 3
> \end{cases}
> $$
>
> The values come from $4.8$, then $4.8+3.5=8.3$, then $8.3+3.5=11.8$.
>
> **(b) Graph.** Horizontal segments, with an open circle at the left end and a closed circle at the right end of each (the end of the minute is included).
>
> ![[Lec02_phone_cost_steps.png]]
>
> **(c) "$R_{min}$".** The label is printed as $R_{min}$ and looks like a typo for the minimum cost. Reading it that way, the smallest value of $c$ is **$4.8**, reached by any call lasting more than 0 and up to 1 minute. Treat this reading as an assumption.

> [!warning] Open versus closed ends
> Because a part of a minute counts as a whole minute, a call of exactly 1 minute costs $4.8$, but a call of 1.01 minutes costs $8.3$. The closed circle sits at the right end of each step.

## 4. Finding the equation of a linear function

Printed method for a [[Linear Function]] through two points $(x_1,y_1)$ and $(x_2,y_2)$:

1. **Slope:** $m=\dfrac{y_2-y_1}{x_2-x_1}$
2. **Line:** $y-y_1=m(x-x_1)$

> [!note] Reconstructed from the slides
> The slope is the change in $y$ per one unit change in $x$. Once you have $m$, plug in either point. The result rearranges to $y=mx+b$.

## 5. Software depreciation

Printed: A company bought software for **$12,000**. Its value drops **linearly** to **$2,000** **8 years** after purchase. Find the software's value 5 years after purchase.

> [!example] Worked solution (reconstructed)
> Let $t$ be years since purchase and $V$ the value. Two points: $(0,\,12000)$ and $(8,\,2000)$.
>
> $$
> m=\frac{2000-12000}{8-0}=-1250
> $$
>
> $$
> V-12000=-1250\,(t-0)\quad\Rightarrow\quad V(t)=12000-1250\,t
> $$
>
> $$
> V(5)=12000-1250\cdot 5=12000-6250=5750
> $$
>
> The value after 5 years is **$5,750**. The slope means the software loses $1,250 of value each year.

## 6. The Business World: clock radios

Printed: A factory that makes clock radios found that when the retail price per radio is $p$ dollars and weekly demand is $x$, the price-demand equation is $x=6000-30p$. The cost of production is $C(x)=72{,}000+60x$.
(a) Express $C(p)$ and draw it. (b) Express the revenue function $R(p)$ and draw it on the same axes. (c) For which values of $p$ is the factory profitable? (d) Find the price for which profit is maximised.

> [!example] Worked solution (reconstructed)
> **(a) Cost as a function of price.** Substitute the demand into the cost function:
>
> $$
> C(p)=72000+60\,(6000-30p)=432000-1800p
> $$
>
> This is a straight line that **falls** as price rises, because a higher price means fewer radios are sold and so fewer are produced. Demand must satisfy $x\ge 0$, so $p\le 200$ (and $p\ge 0$): the sensible domain is $0\le p\le 200$.
>
> **(b) Revenue.** Revenue is price times quantity:
>
> $$
> R(p)=p\cdot x=p\,(6000-30p)=6000p-30p^2
> $$
>
> A downward-opening parabola with roots $p=0$ and $p=200$, peaking at $p=100$ (a revenue of $300{,}000$).
>
> ![[Lec02_cost_revenue.png]]
>
> **(c) Profitable range.** Profit is $\pi(p)=R(p)-C(p)$:
>
> $$
> \pi(p)=6000p-30p^2-432000+1800p=-30p^2+7800p-432000
> $$
>
> Profit is positive when $\pi(p)>0$. Divide by $-30$ (which flips the inequality):
>
> $$
> p^2-260p+14400<0
> $$
>
> $$
> p=\frac{260\pm\sqrt{260^2-4\cdot 14400}}{2}=\frac{260\pm\sqrt{10000}}{2}=\frac{260\pm 100}{2}
> $$
>
> The roots are $p=80$ and $p=180$. The parabola $p^2-260p+14400$ is negative **between** its roots, so the factory is profitable for **$80<p<180$**. These are the two price points where $R=C$ (break-even), as the graph shows.
>
> **(d) Maximum profit.** $\pi(p)=-30p^2+7800p-432000$ is a downward parabola, so its maximum is at the vertex:
>
> $$
> p=-\frac{7800}{2\cdot(-30)}=130
> $$
>
> Check: $x=6000-30\cdot 130=2100$ radios, $R=130\cdot 2100=273{,}000$, $C=72000+60\cdot 2100=198{,}000$, so $\pi=75{,}000$. The maximum weekly profit is **$75,000** at $p=130$. Note that this is not the price that maximises revenue ($p=100$), because cost falls as price rises.

**See it move.** Follow the clock-radio factory from break-even to maximum profit.

```graph
type: calc-optimisation
```

## Summary

| Idea | Rule |
| --- | --- |
| Absolute value as piecewise | $g$ where $g\ge0$, $-g$ where $g<0$ |
| Quick graph | Draw without the bars, reflect the part below the x-axis |
| $\lvert x^2+x-6\rvert$ | Roots $-3$, $2$; local max $(-\tfrac12, 6.25)$; global min $0$ at the roots |
| "Or part of it" pricing | Step function: $4.8,\ 8.3,\ 11.8$ |
| Line through two points | $m=\frac{y_2-y_1}{x_2-x_1}$, then $y-y_1=m(x-x_1)$ |
| Software value | $V(t)=12000-1250t$, $V(5)=5750$ |
| Clock radios | $C=432000-1800p$, $R=6000p-30p^2$, profitable for $80<p<180$, max profit at $p=130$ |

## Related notes

- [[Maths for Economists A]]
