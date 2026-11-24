---
title: "Cost Curve and Two-Product Profit, Lagrange, Differential, e^2x over x & Linear System (2016 Moed B)"
type: past-paper
status: worked-solution
exam: "Math II Final Exam, 2016 (file labelled Moed B)"
semester: 2
year: 1
course: "Maths for Economists B"
instructor: Hever Schulberg
tags:
  - maths
  - past-paper
  - worked-solution
  - implicit-differentiation
  - profit-maximisation
  - lagrange-multipliers
  - differential
  - asymptotes
  - gauss-jordan
aliases:
  - Math II Moed B 2016
  - Maths for Economists B 2016 Moed B
  - PP14 Maths B
subject: maths-for-economists-b
in_scope: true
---

# Cost Curve and Two-Product Profit, Lagrange, Differential, e^2x over x & Linear System (2016 Moed B)

> Part of: [[Maths for Economists B]]
> **Math II Final Exam, 2016 (Moed B)**, Maths for Economists B, Hever Schulberg. 3 hours, four questions of 25 points each, non-graphic calculator only (no formula sheet in this sitting). "Justify anything you claim and explain all your calculations."
> Builds on: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]]

> [!info] Source and answer provenance
> The PDF holds the typed questions (pages 1 to 3, title page says only "Moed A") followed by the lecturer's **handwritten official solutions** (pages 4 to 9). **Labelling quirk:** the file is named "2016 - B", the typed title page says "Moed A", and the solution pages are headed "Solution for 2016A" (Q1 to Q3) and "Solution for 2016B" (Q4). The questions and the key match part by part, so this note treats them as one paper and files it as 2016 Moed B, as the file name says. No part needed an AI-written answer.

> [!note] Flags on the key
> - **Q2a** decides "minimum" by comparing with the value at another feasible point, $f(0,-20)=60$. That works; a cleaner second-order check is given in a tip below.
> - **Q3b** reads the global extremum of the $x$ value off the graph. The key's answer for the **maximum** is $x=3$ (the other global extremum is $x=\tfrac12$, the minimum).
> - **Q3c** is typed "$f(x)=\sqrt{x^2-y^4}$" but is a function of two variables $f(x,y)$.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | A cost level curve: find a constant and interpret $dx/dy$, then maximise a two-product profit with the second derivative test | [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]] |
| Q2 | Lagrange with an exponential, a tangent line to a slice of a surface, a limit by L'Hopital | [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]] |
| Q3 | Study of $e^{2x}/x$, global extrema on an interval, the differential for estimation | [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_06-Partial Derivatives and the Differential]] |
| Q4 | A parametric system: show it is solvable only for $p=2$, then find all solutions and a special one | [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]] |

> [!tip] Intuition: the moves that recur
> - $dx/dy$ on a level curve means "how much must $x$ change if $y$ goes up by one, to stay on the same level" (Q1a).
> - Profit is revenue (price times quantity, **with prices written as functions of the quantities**) minus cost (Q1b).
> - The differential estimates a function at a nearby point from the value and slopes at a friendly point (Q3c).

---

## Q1 — Cost curve and profit maximisation (25 points)

A company sells $x$ units of A and $y$ units of B annually. Annual cost (thousand dollars):

$$
C(x,y)=\tfrac12x^2+3y^2+100x+ay, \qquad a>0
$$

Retail prices (thousand dollars): $p_A=110-\tfrac12x+2y$ and $p_B=120-y+x$.

### a. On the curve $C(x,y)=4250$, $\dfrac{dx}{dy}=-2$ at a point where $x=10$. Find $a$ and explain the derivative.

The curve is $4250=\tfrac12x^2+3y^2+100x+ay$. At $x=10$:

$$
4250=50+3y^2+1000+ay \;\Rightarrow\; 3y^2+ay-3200=0 \qquad (1)
$$

Differentiate the curve implicitly with respect to $y$ (so $x=x(y)$, $x'=dx/dy$):

$$
0=x\,x'+6y+100\,x'+a
$$

Plug in $x=10$ and $x'=-2$: $0=-20+6y-200+a$, so $a=220-6y$. Substitute into (1):

$$
3y^2+(220-6y)y-3200=0 \;\Rightarrow\; -3y^2+220y-3200=0 \;\Rightarrow\; y=20 \ \text{or}\ y=\tfrac{160}{3}
$$

- $y=20$ gives $a=220-120=100$.
- $y=\frac{160}{3}\approx53.3$ gives $a=220-320=-100$, which violates $a>0$. **Rejected.**

> [!success] Answer
> **$a=100$** (at the point $x=10$, $y=20$).

> [!info] Meaning of $dx/dy=-2$ (the key's wording)
> At a production level of 10 units of A and 20 units of B, if we want to produce **one more unit of B** and still keep the annual cost at **4,250,000 dollars**, we should **decrease** the production of A by about **2 units**.

### b. For $a=100$: prices that maximise annual profit

Profit (thousand dollars) is revenue minus cost:

$$
P(x,y)=x\left(110-\tfrac12x+2y\right)+y\left(120-y+x\right)-\tfrac12x^2-3y^2-100x-100y
$$

$$
P(x,y)=-x^2-4y^2+3xy+10x+20y
$$

First-order conditions:

$$
P_x=-2x+3y+10=0, \qquad P_y=-8y+3x+20=0
$$

From the first, $x=\frac{3y+10}{2}$. Substitute into the second: $-8y+\frac{9y+30}{2}+20=0$, so $-7y+70=0$, giving $y=10$ and $x=20$.

Second-order test: $P_{xx}=-2=A$, $P_{xy}=3=B$, $P_{yy}=-8=C$.

$$
\Delta=AC-B^2=16-9=7>0, \qquad A<0 \;\Rightarrow\; \text{maximum}
$$

Prices at the optimum quantities:

$$
p_A=110-\tfrac12(20)+2(10)=120, \qquad p_B=120-10+20=130
$$

> [!success] Answer
> **Set $p_A=120$ thousand dollars (120,000 dollars) and $p_B=130$ thousand dollars (130,000 dollars)**, which corresponds to producing $x=20$, $y=10$.

> [!warning] Trap
> The first-order conditions give **quantities**. The question asks for **prices**, so one more step (plug into $p_A$ and $p_B$) is needed.

---

## Q2 — Lagrange, a tangent line and a limit (25 points)

Given $f(x,y)=x\,e^{x+ky}+6x-3y$.

### a. $k=0$: extremum of $f$ under $2x-y=20$, and its type

With $k=0$: $f(x,y)=xe^x+6x-3y$.

$$
L(x,y,\lambda)=xe^x+6x-3y-\lambda(2x-y-20)
$$

$$
L_x=e^x+xe^x+6-2\lambda=0, \qquad L_y=-3+\lambda=0 \;\Rightarrow\; \lambda=3, \qquad L_\lambda=-(2x-y-20)=0
$$

With $\lambda=3$: $e^x(1+x)+6-6=0$, so $e^x(1+x)=0$ and **$x=-1$**. The constraint gives $y=2x-20=-22$.

$$
f(-1,-22)=-e^{-1}-6+66=60-e^{-1}\approx 59.63
$$

**Type.** The key compares with another point that satisfies the constraint, $(0,-20)$: $f(0,-20)=0+0+60=60>59.63$. Since the only critical point has a smaller value than a feasible point, it is a **minimum**.

> [!tip] Intuition: a cleaner check
> Substitute the constraint $y=2x-20$ into $f$: $g(x)=xe^x+6x-3(2x-20)=xe^x+60$. Then $g'(x)=e^x(1+x)=0$ at $x=-1$, and $g''(x)=e^x(2+x)$, which at $x=-1$ is $e^{-1}>0$. A positive second derivative confirms a minimum. (The constraint is linear, so this is exact.)

> [!success] Answer
> **Extremum at $(-1,-22)$ with value $\approx59.63$: a minimum.**

### b. $k=1$: $f(x,y)=xe^{x+y}+6x-3y$

**1. Tangent line to the curve cut by the plane $y=-1$, at $x=1$.**

On the plane $y=-1$ the curve is $z=xe^{x-1}+6x+3$. At $x=1$: $z=1+6+3=10$, so the point is $(1,-1,10)$.

The slope along $x$ is the partial derivative:

$$
f_x=e^{x+y}+xe^{x+y}+6 \;\Rightarrow\; f_x(1,-1)=e^0+e^0+6=8
$$

$$
z-10=8(x-1) \;\Rightarrow\; z=8x+2
$$

> [!success] Answer
> **$z=8x+2$, $y=-1$.**

**2. The limit $\displaystyle\lim_{x\to\infty}\frac{f(x,2x)}{f(\ln x,0)-6\ln x}$.**

Numerator: $f(x,2x)=xe^{x+2x}+6x-6x=xe^{3x}$.

Denominator: $f(\ln x,0)=\ln x\cdot e^{\ln x}+6\ln x=x\ln x+6\ln x$, so $f(\ln x,0)-6\ln x=x\ln x$.

$$
\lim_{x\to\infty}\frac{xe^{3x}}{x\ln x}=\lim_{x\to\infty}\frac{e^{3x}}{\ln x}
$$

This is $\frac\infty\infty$, so L'Hopital applies:

$$
\lim_{x\to\infty}\frac{3e^{3x}}{1/x}=\lim_{x\to\infty}3x\,e^{3x}=\infty
$$

> [!success] Answer
> **The limit is $\infty$** (an exponential beats a logarithm).

---

## Q3 — $e^{2x}/x$, extrema on an interval and the differential (25 points)

### a. $f(x)=\dfrac{e^{2x}}{x}$: asymptotes, increase and decrease intervals, graph

**1. Asymptotes.**

- At $x=0$: $\lim_{x\to0^+}=\frac{1}{0^+}=+\infty$ and $\lim_{x\to0^-}=\frac{1}{0^-}=-\infty$. **Vertical asymptote $x=0$.**
- $x\to\infty$: L'Hopital gives $\lim\frac{2e^{2x}}{1}=\infty$. **No horizontal asymptote on the right.**
- $x\to-\infty$: $\frac{e^{-\infty}}{-\infty}=\frac{0}{-\infty}=0$. **Horizontal asymptote $y=0$ on the left.**

**2. Increase and decrease.**

$$
f'(x)=\frac{2e^{2x}\cdot x-e^{2x}}{x^2}=\frac{e^{2x}(2x-1)}{x^2}
$$

$f'=0$ at $x=\frac12$. The sign of $f'$ is the sign of $2x-1$ (the other factors are positive for $x\ne0$):

- $f$ **decreases** for $x<\frac12$ ($x\neq0$);
- $f$ **increases** for $x>\frac12$.

So on the right branch there is a minimum at $x=\frac12$, with $f\!\left(\tfrac12\right)=\dfrac{e}{1/2}=2e\approx5.44$.

**3. Graph.**

![[PP14_q3_exp2x_over_x.png|560]]

*Left branch: negative, hugging $y=0$ on the far left and plunging to $-\infty$ at $x=0^-$. Right branch: starts at $+\infty$, dips to $(1/2,2e)$, then grows without bound.*

> [!success] Answer
> Vertical asymptote $x=0$; horizontal asymptote $y=0$ (left only); decreasing for $x<\frac12$ ($x\ne0$), increasing for $x>\frac12$.

### b. $x$ values of the global extrema on $0.01\le x\le3$

On this interval the function is on the right branch (all values positive). The graph shows the **minimum** at $x=\frac12$ (the only critical point). The maximum is at one of the endpoints:

$$
f(0.01)=\frac{e^{0.02}}{0.01}\approx102, \qquad f(3)=\frac{e^6}{3}\approx134.5
$$

$134.5>102$, so the maximum is at $x=3$.

> [!success] Answer
> **Global minimum at $x=\tfrac12$; global maximum at $x=3$.**

### c. Differential estimate of $f(x,y)=\sqrt{x^2-y^4}$ at $(4.95,\,2.04)$

Use the friendly point $(5,2)$: $f(5,2)=\sqrt{25-16}=3$. So $dx=-0.05$ and $dy=0.04$.

$$
f_x=\frac{2x}{2\sqrt{x^2-y^4}}=\frac{x}{\sqrt{x^2-y^4}} \;\Rightarrow\; f_x(5,2)=\frac53
$$

$$
f_y=\frac{-4y^3}{2\sqrt{x^2-y^4}}=\frac{-2y^3}{\sqrt{x^2-y^4}} \;\Rightarrow\; f_y(5,2)=-\frac{16}{3}
$$

$$
dz=\frac53(-0.05)-\frac{16}{3}(0.04)=-\frac{89}{300}\approx-0.297
$$

$$
f(4.95,2.04)\approx 3+dz=3-\frac{89}{300}\approx 2.7
$$

> [!success] Answer
> **$f(4.95,\,2.04)\approx2.7$** (a calculator gives $2.68$, so the estimate is close).

---

## Q4 — A parametric system (25 points)

$$
\begin{cases}
3x_1=3x_2+6x_3-8+p\\
x_1=2x_2+x_3-6\\
2x_1=x_2+5x_3+2p-4
\end{cases}
$$

Rearrange to the form (unknowns on the left, constants on the right):

$$
\left(\begin{array}{ccc|c} 3&-3&-6&p-8\\ 1&-2&-1&-6\\ 2&-1&-5&2p-4 \end{array}\right)
$$

### a. Show the system has solutions only for $p=2$

Swap $R_1\leftrightarrow R_2$, then $R_2\to R_2-3R_1$ and $R_3\to R_3-2R_1$:

$$
\left(\begin{array}{ccc|c} 1&-2&-1&-6\\ 0&3&-3&p+10\\ 0&3&-3&2p+8 \end{array}\right)
$$

Divide $R_2$ by 3, then $R_3\to R_3-3R_2$:

$$
\left(\begin{array}{ccc|c} 1&-2&-1&-6\\ 0&1&-1&\frac{p+10}{3}\\ 0&0&0&p-2 \end{array}\right)
$$

The last row says $0=p-2$. This is a true statement only when $p=2$; for any other $p$ it is a false statement and the system has no solution.

> [!success] Answer
> **The system is solvable only for $p=2$**, because the last row reads $0=p-2$.

### b. All solutions for $p=2$

The last row is all zeros and $\frac{p+10}{3}=4$:

$$
\left(\begin{array}{ccc|c} 1&-2&-1&-6\\ 0&1&-1&4 \end{array}\right)
$$

$R_1\to R_1+2R_2$:

$$
\left(\begin{array}{ccc|c} 1&0&-3&2\\ 0&1&-1&4 \end{array}\right)
$$

Columns 1 and 2 are pivot (dependent) columns; $x_3$ is the free variable, $x_3=t$. Then $x_1-3t=2$ and $x_2-t=4$.

> [!success] Answer
> **$(x_1,x_2,x_3)=(2+3t,\;4+t,\;t)$** for any real $t$.

### c. A solution with $x_1=2x_2$

Use the family from part b: $2+3t=2(4+t)$, so $2+3t=8+2t$ and $t=6$.

> [!success] Answer
> **$(20,\,10,\,6)$.** Check in the original system: $3\cdot20=60$ and $3\cdot10+6\cdot6-8+2=60$; $20=2\cdot10+6-6$; $2\cdot20=40$ and $10+30+4-4=40$.

---

## Recap

| Part | Tool | Answer |
|---|---|---|
| Q1a | Implicit differentiation, $a>0$ | $a=100$; $dx/dy=-2$ means cut A by about 2 units per extra unit of B |
| Q1b | Profit, second derivative test | $p_A=120$, $p_B=130$ (thousand dollars) |
| Q2a | Lagrange, $k=0$ | Min at $(-1,-22)$, $f\approx59.63$ |
| Q2b(1) | Partial derivative as slope | $z=8x+2$, $y=-1$ |
| Q2b(2) | L'Hopital | $\infty$ |
| Q3a | Limits, sign of $f'$ | $x=0$ vertical; $y=0$ left; min at $x=\frac12$ |
| Q3b | Compare endpoints | Min $x=\frac12$, max $x=3$ |
| Q3c | Differential | $\approx2.7$ |
| Q4a | Gauss-Jordan | Only $p=2$ |
| Q4b | Reduced form | $(2+3t,4+t,t)$ |
| Q4c | Substitute | $(20,10,6)$ |

## Related notes

- Lectures: [[Lec_01-Global Extrema, Optimization and Summation]], [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]], [[Lec_04-Implicit Differentiation and Two-Variable Functions]], [[Lec_06-Partial Derivatives and the Differential]], [[Lec_07-Partial Derivatives in Applications and Local Extrema]], [[Lec_09-Constrained Optimisation and Lagrange Multipliers]], [[Lec_10-Linear Systems and Gauss-Jordan Elimination]], [[Lec_11-Reduced Echelon Form and Homogeneous Systems]]
- Problem sets: [[PS_03-Exponential and Logarithmic Derivatives, Limits and Curve Sketching]], [[PS_04-Implicit Differentiation and Two-Variable Functions]], [[PS_06-Partial Derivatives, Differentials and Implicit Differentiation]], [[PS_07-Applications of Partial Derivatives]], [[PS_09-Lagrange Multipliers]], [[PS_11-Reduced Echelon Form and Solutions]]
- Hub: [[Maths for Economists B]]
