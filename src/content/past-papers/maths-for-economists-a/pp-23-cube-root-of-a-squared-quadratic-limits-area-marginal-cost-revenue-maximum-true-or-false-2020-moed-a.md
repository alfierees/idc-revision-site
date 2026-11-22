---
title: "Cube Root of a Squared Quadratic, Limits & Area, Marginal Cost, Revenue Maximum & True or False (2020 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2020 Moed A"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - function-investigation
  - cusp
  - inflection-points
  - global-extrema
  - limits
  - vertical-tangent
  - definition-of-derivative
  - definite-integral
  - area
  - marginal-cost
  - revenue-maximisation
  - horizontal-asymptote
  - true-or-false
aliases:
  - Math I 2020 Moed A
  - PP23 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Cube Root of a Squared Quadratic, Limits & Area, Marginal Cost, Revenue Maximum & True or False (2020 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2020 (Moed A)**, Hever Schulberg. 4 questions (30, 25, 25, 20 points). Q2, Q3 and Q4 say there is no connection between their segments.
> Builds on: [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_05-Limits, Infinite Limits and Limits at Infinity]], [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]], [[PS_08-Chain Rule, Exponential and Log Derivatives and Integrals]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> The exam is on pages 2 to 3 of the source PDF (page 1 is the cover). The **handwritten, unsigned key (author unclear)** is on pages 4 to 8 and covers every part, including the **true/false item Q4c**. Answers follow the key, expanded into steps. The key notes that the asymptote example in Q4c is "from Ex 11".

> [!warning] Points where the key needs a check
> - **Q1 inflection table (key page 5):** the second sign table is headed "$f'(x)$" but its entries ($+,-,-,-,+$) are the signs of $f''$, so it is a label slip. The contents are right.
> - **Q1 inflection $y$-value:** the key writes $(\pm\sqrt3,\,1.58)$; the exact value is $2^{2/3}\approx1.587$, which rounds to $1.59$. Kept as the key's, with the exact value shown.
> - **Q2c:** the key's wording about why $f$ is not differentiable at $0$ reads as "$f'(0)$ is undefined". Note $f(0)=0$ **is** defined; it is the derivative that fails. The answer (vertical tangent $x=0$) is right.
> - **Q2e:** the key's solution is on its own page ("Solution to 2e", page 8), after the Q4 work.
> - No part is AI-solved.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Full investigation of $\sqrt[3]{(x^2-1)^2}$ (two **cusps**, an interior maximum, two inflections), a tangent-line question for $f$ and for $f-1$, and **global** extremes on $(-\infty,0]$ | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]] |
| Q2 | Five unconnected items: an infinite limit, a base-to-the-$-x$ limit, a vertical tangent of $\sqrt[5]{x}$, a derivative from the definition, area between a parabola and the axis | [[Lec_05-Infinite Limits]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] |
| Q3 | Approximating total cost from marginal cost, revenue maximisation from a price-demand equation, and a "zero rate of change" claim | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] |
| Q4 | $\sqrt{x^2}=|x|$, a vertical asymptote of $e^{-1/x}$, and a **true/false** on two horizontal asymptotes | [[Lec_01-Functions, Domain and Sigma Notation]], [[Lec_05-Infinite Limits]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]] |

> [!tip] Intuition: the one move behind each question
> - Q1: a cube root of a square, $(x^2-1)^{2/3}$, touches the axis at $\pm1$ with a **cusp** (infinite slopes), so the axis is never a tangent there. Subtracting $1$ moves the interior peak down onto the axis, where the slope really is $0$.
> - Q2: one-sided signs decide infinite limits; a vertical tangent means $f'\to\infty$.
> - Q3: total cost is cost at $10$ plus (marginal cost at $10$) $\times$ one extra unit.
> - Q4: a ratio can have **different** limits at $+\infty$ and $-\infty$, giving two horizontal asymptotes.

---

## Q1 — Investigating $f(x)=\sqrt[3]{(x^2-1)^2}$ (30 points)

**Question.** Given $f(x)=\sqrt[3]{(x^2-1)^2}=(x^2-1)^{2/3}$.

a. Investigate the function by the following criteria:
  1. Interval of continuity. Explain.
  2. Axes intercept points (if any).
  3. Asymptotes (if any) using the appropriate limits.
  4. Show that $f'(x)=\dfrac{4x}{3\,(x^2-1)^{1/3}}$.
  5. Find relative extreme points (if any) and categorize them as max or min.
  6. Show that $f''(x)=\dfrac{4\,(x^2-3)}{9\,(x^2-1)^{4/3}}$.
  7. Find inflection points (if any).
  8. Draw the graph.

b. Is it true to say that the $x$-axis is a tangent line to the graph of this function? If not, explain why, and if so, at which point (or points)?

c. Given $y=f(x)-1$:
  1. Is it true to say that the $x$-axis is a tangent line to the graph of this function? If not, explain why; if so, at which point(s)?
  2. Find global extreme points on the interval $(-\infty,0]$.

### a1. Continuity

> [!success] Answer (the key)
> $f$ is not piecewise, so the interval of continuity equals the domain: **all $x$** (a cube root is defined everywhere).

### a2. Intercepts

$f(0)=(-1)^{2/3}=1$. And $(x^2-1)^{2/3}=0\Rightarrow x=\pm1$.

> [!success] Answer (the key)
> $y$-intercept $(0,\,1)$; $x$-intercepts $(\pm1,\,0)$.

### a3. Asymptotes

> [!success] Answer (the key)
> **No vertical asymptote** ($f$ is continuous for all $x$). Horizontal: $\displaystyle\lim_{x\to\pm\infty}(x^2-1)^{2/3}=\infty^{2/3}=\infty$, so **no horizontal asymptote**.

### a4 and a5. First derivative, extremes

Chain rule: $f'(x)=\dfrac23(x^2-1)^{-1/3}\cdot2x=\dfrac{4x}{3(x^2-1)^{1/3}}$, which is the stated $f'$.

- $f'(x)=0$ when $x=0$.
- $f'(x)$ is **undefined** when $x^2-1=0$, so at $x=\pm1$.

Signs (the denominator has the sign of $x^2-1$, i.e. positive for $|x|>1$, negative for $|x|<1$; the numerator has the sign of $x$):

| Interval | $4x$ | $(x^2-1)^{1/3}$ | $f'$ | $f$ |
|---|---|---|---|---|
| $x<-1$ | $-$ | $+$ | $-$ | decreasing |
| $-1<x<0$ | $-$ | $-$ | $+$ | increasing |
| $0<x<1$ | $+$ | $-$ | $-$ | decreasing |
| $x>1$ | $+$ | $+$ | $+$ | increasing |

> [!success] Answer (the key)
> Minima at $x=\pm1$ (points $(\pm1,\,0)$); **maximum** at $x=0$ (point $(0,\,1)$).

### a6. Second derivative

Quotient rule on $\dfrac{4x}{3(x^2-1)^{1/3}}$, or factor first:

$$
f''(x)=\frac{4\cdot3(x^2-1)^{1/3}-4x\cdot3\cdot\frac13(x^2-1)^{-2/3}\cdot2x}{9(x^2-1)^{2/3}}
=\frac{12(x^2-1)-8x^2}{9(x^2-1)^{2/3}\,(x^2-1)^{2/3}}=\frac{4x^2-12}{9(x^2-1)^{4/3}}=\frac{4(x^2-3)}{9(x^2-1)^{4/3}}
$$

(Multiplying top and bottom by $(x^2-1)^{2/3}$ turns $12(x^2-1)^{1/3}$ into $12(x^2-1)$; the second term $8x^2(x^2-1)^{-2/3}$ becomes $8x^2$.) This is the stated $f''$.

### a7. Inflection points

$f''=0$ at $x^2=3$, so $x=\pm\sqrt3$. $f''$ is undefined at $x=\pm1$. The denominator $9(x^2-1)^{4/3}=9\left(\sqrt[3]{x^2-1}\right)^4$ is positive for $x\neq\pm1$, so the sign of $f''$ is the sign of $x^2-3$:

| Interval | $f''$ | $f$ |
|---|---|---|
| $x<-\sqrt3$ | $+$ | concave up |
| $-\sqrt3<x<-1$ | $-$ | concave down |
| $-1<x<1$ | $-$ | concave down |
| $1<x<\sqrt3$ | $-$ | concave down |
| $x>\sqrt3$ | $+$ | concave up |

At $x=\pm1$ the sign does not change (still concave down), so those are **not** inflection points.

> [!success] Answer (the key)
> Inflection points at **$x=\pm\sqrt3$**: the points $\left(\pm\sqrt3,\,\approx1.58\right)$. (Exact height $f(\pm\sqrt3)=2^{2/3}\approx1.59$.)

### a8. The graph

![[PP23_q1_cube_root_squared_graph.png]]

> [!success] Answer (the key)
> A "W with a rounded middle": **cusps** touching the axis at $(\pm1,0)$, a rounded maximum at $(0,1)$, rising on both outer sides with inflections at $\pm\sqrt3$. (The dashed curve in the figure is $y=f(x)-1$, used in part c.)

> [!tip] Intuition
> Cusp versus smooth minimum: at $x=\pm1$ the slope tends to $\mp\infty$ on one side and $\pm\infty$ on the other, so the curve comes in vertically and leaves vertically. See [[Lec_10-Increase and Decrease Intervals and Relative Extrema]].

### b. Is the $x$-axis a tangent line to the graph of $f$?

The graph meets the $x$-axis at $x=\pm1$, but a tangent line there would have to be the horizontal line, which needs $f'=0$.

> [!success] Answer (the key)
> **No.** At the points where $y=0$ the derivative is not $0$ (it is actually **undefined**, since these are cusps). So the $x$-axis is not a tangent line.

### c. The function $y=f(x)-1$

**(1) Is the $x$-axis tangent?** The graph shifts **one unit downward**, so the maximum $(0,1)$ becomes $(0,0)$, and the derivative there is still $f'(0)=0$ (shifting does not change slopes).

> [!success] Answer (the key)
> **True.** The $x$-axis is tangent at the point $(0,\,0)$.

**(2) Global extreme points on $(-\infty,0]$.** Read from the shifted graph: as $x\to-\infty$ the function tends to $+\infty$, and the lowest point on the interval is at the cusp $x=-1$, where $y=f(-1)-1=-1$.

> [!success] Answer (the key)
> **No global maximum** ($\lim y=\infty$ as $x\to-\infty$). **Global minimum** at $x=-1$ (value $-1$).

> [!tip] Intuition
> $x=0$ is only a local maximum (value $0$): the curve climbs without bound to the left, so nothing there is global.

---

## Q2 — Five unconnected items (25 points)

### a. $\displaystyle\lim_{x\to0}\frac{3-x}{\left|3x-x^2\right|}$

Numerator $\to3$. The denominator $|3x-x^2|\to0$ and is always non-negative, so it tends to $0^+$ from both sides:

$$
\lim_{x\to0}\frac{3-x}{|3x-x^2|}=\frac{3}{0^+}=\infty
$$

> [!success] Answer (the key)
> $\infty$.

### b. $\displaystyle\lim_{x\to\infty}\left(\frac{1-4x}{3-5x}\right)^{-x}$

Divide inside by $x$ (top and bottom): $\dfrac{\frac1x-4}{\frac3x-5}\to\dfrac{-4}{-5}=\dfrac45$. The exponent $-x\to-\infty$:

$$
\left(\frac45\right)^{-\infty}=\left(\frac54\right)^{\infty}=\infty
$$

> [!success] Answer (the key)
> $\infty$.

### c. Is $f(x)=\sqrt[5]{x}$ differentiable at $x=0$? Tangent line?

$f'(x)=\tfrac15x^{-4/5}=\dfrac{1}{5\sqrt[5]{x^4}}$ for $x\ne0$, and $\displaystyle\lim_{x\to0}f'(x)=\frac1{0^+}=\infty$.

> [!success] Answer (the key)
> **Not differentiable at $x=0$** (the derivative is infinite there), but there **is a vertical tangent line**, with equation **$x=0$**.

### d. Slope at $x=-1$ of $f(x)=\dfrac{x-3}{x+5}$, from the definition

$f(-1)=\dfrac{-4}{4}=-1$ and $f(-1+h)=\dfrac{(-1+h)-3}{(-1+h)+5}=\dfrac{h-4}{h+4}$:

$$
f'(-1)=\lim_{h\to0}\frac{\frac{h-4}{h+4}+1}{h}=\lim_{h\to0}\frac{\frac{h-4+h+4}{h+4}}{h}=\lim_{h\to0}\frac{2h}{h(h+4)}=\lim_{h\to0}\frac2{h+4}=\frac12
$$

> [!success] Answer (the key)
> $\dfrac12$.

### e. $a$ from the area under the parabola $y=ax^2-2ax$ ($a<0$)

$y=ax(x-2)$ meets the axis at $x=0$ and $x=2$. Because $a<0$ the parabola opens **downward**, so the region lies **above** the axis and its area is the plain integral:

$$
\int_0^2(ax^2-2ax)\,dx=\left[\frac{ax^3}3-ax^2\right]_0^2=\frac{8a}3-4a=-\frac43a=4\;\Rightarrow\;a=-3
$$

![[PP23_q2e_parabola_area.png]]

> [!success] Answer (the key)
> $a=-3$.

---

## Q3 — Three unconnected items (25 points)

### a. Total cost at $11$ units from the marginal cost

The monthly marginal cost (in thousands of dollars) is $f(x)=10+\dfrac{20x}{\sqrt{(x^2+1)^3}}$, and the total cost at $10$ units is $\$32{,}000$. Going from $10$ to $11$ units adds one unit, and the marginal cost at $10$ approximates its cost:

$$
f(10)=10+\frac{200}{\sqrt{101^3}}=10+\frac{200}{101^{3/2}}\approx10+0.197=10.197\ \text{thousand}=\$10{,}197
$$

$$
C(11)\approx C(10)+f(10)=32{,}000+10{,}197=42{,}197
$$

> [!success] Answer (the key)
> About **$\$42{,}197$**.

### b. Price at which revenue is maximised

From $0.12x^2=1296-p$: $p=1296-0.12x^2$. Revenue is price times quantity:

$$
R(x)=x\,(1296-0.12x^2)=1296x-0.12x^3,\qquad R'(x)=1296-0.36x^2=0\;\Rightarrow\;x^2=3600,\ x=60
$$

$R'>0$ before $60$ and $R'<0$ after, so $x=60$ is a **maximum** (and it lies in the domain $0<x<80$). The price at $x=60$:

$$
p(60)=1296-0.12\cdot60^2=1296-432=864
$$

> [!success] Answer (the key)
> The price that maximises revenue is **$\$864$** (at demand $60$ units).

### c. Dan's claim: "no point where the rate of change of $f$ is zero", for $f(x)=\dfrac{x^3}{(2-3x)^5}$ on $-3<x<-0.5$

Quotient rule, then factor out the common power $(2-3x)^4$:

$$
f'(x)=\frac{3x^2(2-3x)^5-x^3\cdot5(2-3x)^4(-3)}{(2-3x)^{10}}
=\frac{3x^2(2-3x)^4\left[(2-3x)+5x\right]}{(2-3x)^{10}}=\frac{3x^2(2+2x)}{(2-3x)^6}
$$

$f'(x)=0$ when $3x^2=0$ ($x=0$) or $2+2x=0$ ($x=-1$). The value $x=0$ is **outside** the domain $(-3,-0.5)$, but $x=-1$ is inside it, and $2-3(-1)=5\neq0$ so $f$ is defined there.

> [!success] Answer (the key)
> **Dan is wrong.** At $x=-1$, in the given domain, $f'(-1)=0$.

---

## Q4 — Three unconnected items (20 points)

### a. Graph of $y=\sqrt{x^2}$

> [!success] Answer (the key)
> $\sqrt{x^2}=|x|$ (as the formula sheet says), so the graph is the **V-shape** of the absolute value: the line $y=x$ for $x\ge0$ and $y=-x$ for $x<0$, with the vertex at the origin.

### b. Vertical asymptote of $y=e^{-1/x}$?

The candidate is $x=0$, where $\dfrac1x$ blows up. Check both sides:

$$
\lim_{x\to0^+}e^{-1/x}=e^{-\infty}=0,\qquad \lim_{x\to0^-}e^{-1/x}=e^{-\frac1{0^-}}=e^{+\infty}=\infty
$$

> [!success] Answer (the key)
> **Yes**, there is a vertical asymptote at **$x=0$** (one infinite one-sided limit is enough).

### c. True or false: "there exist functions of the form $y=\dfrac{f(x)}{g(x)}$ that have two horizontal asymptotes"

1. **True** (no justification was required).
2. Example: a function whose limit at $+\infty$ differs from its limit at $-\infty$. The key uses the function from Exercise 11:

$$
y=\frac{\sqrt{3x^2+1}}{x}\quad\text{with}\quad \lim_{x\to\infty}y=\sqrt3,\quad \lim_{x\to-\infty}y=-\sqrt3
$$

> [!success] Answer (the key)
> **True.** Example: $y=\dfrac{\sqrt{3x^2+1}}{x}$ has the two horizontal asymptotes $y=\sqrt3$ and $y=-\sqrt3$.

> [!tip] Intuition
> The two limits differ because $\sqrt{x^2}=|x|$ equals $x$ for $x>0$ but $-x$ for $x<0$. Another example of the same idea: $\dfrac{x}{|x|}$ tends to $1$ at $+\infty$ and to $-1$ at $-\infty$ (this one is added here, not from the key).

---

## Quick reference

> [!summary] Results at a glance
> | Part | Result |
> |---|---|
> | Q1a | Continuous for all $x$; no asymptotes; intercepts $(0,1)$ and $(\pm1,0)$ |
> | Q1a5 | Min $x=\pm1$ (cusps), max $(0,1)$ |
> | Q1a7 | Inflection at $x=\pm\sqrt3$ (height about $1.59$) |
> | Q1b-c | No ($f'$ undefined at the zeros); true for $f-1$ at $(0,0)$; no global max, global min at $x=-1$ |
> | Q2 | $\infty$; $\infty$; not differentiable, vertical tangent $x=0$; slope $\tfrac12$; $a=-3$ |
> | Q3 | About $\$42{,}197$; price $\$864$; Dan wrong ($f'(-1)=0$) |
> | Q4 | $|x|$ V-shape; vertical asymptote $x=0$; true, e.g. $\frac{\sqrt{3x^2+1}}{x}$ |
