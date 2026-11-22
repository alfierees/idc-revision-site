---
title: "Lec 01: Global Extrema, Optimization and Summation"
semester: 2
year: 1
course: "Maths for Economists B"
lecture: 1
tags:
  - maths-for-economists-b
  - global-extremum
  - optimization
  - summation
subject: maths-for-economists-b
in_scope: true
---

# Lec 01: Global Extrema, Optimization and Summation

> Part of: [[Maths for Economists B]]
> Key concepts: [[Global Extremum]], [[Critical Point]], [[Closed Interval Rule]], [[Optimization Problem]], [[Summation Rules]]

> [!note] How to read this note
> The lesson slides are a skeleton: definitions, rules and unsolved examples. Every example below is worked in full, and the working is marked as reconstructed because the class working is not in the source.

## 1. Global extremum of a continuous function

A **global (absolute) maximum** is the highest value $f$ takes on the whole domain under consideration; a **global minimum** is the lowest. A *local* (relative) extremum is only the best value in a small neighbourhood. The domain matters: the same formula can have a global maximum on one domain and none on another.

> [!example] Slide example: $f(x)=-x^2$ on four domains
> ![[Lec01_global_extrema_domains.png]]

> [!note] Reconstructed from the slides
> $f(x)=-x^2$ has its only critical point at $x=0$, where $f(0)=0$. It decreases away from 0 on both sides.
>
> | Domain | Global max | Global min | Why |
> |---|---|---|---|
> | a) all $x$ | $0$ at $x=0$ | none | $f\to-\infty$ in both directions |
> | b) $[-1,1]$ | $0$ at $x=0$ | $-1$ at $x=\pm1$ | closed interval: endpoints are included |
> | c) $(-1,1)$ | $0$ at $x=0$ | none | values approach $-1$ but $x=\pm1$ is excluded |
> | d) $[-1,2)$ | $0$ at $x=0$ | none | $f(-1)=-1$ is attained but $f$ keeps falling towards $-4$ as $x\to2$, never reached |

> [!tip] Endpoint intuition
> A closed bracket $[$ or $]$ means the endpoint belongs to the domain, so its value competes. An open bracket $($ or $)$ means the value is approached but never attained, so it cannot be an extremum.

### The closed-interval rule

> [!info] Rule (closed interval)
> If a continuous function is defined on a **closed interval**, it has both a global maximum and a global minimum on that interval.

This is why b) had both and a), c), d) did not: a) is unbounded, c) and d) are not closed. The slide's hand-drawn curve (starting at a closed dot, rising to a local peak, dipping, then climbing steeply to an arrow) illustrates that the global extremum can sit at an endpoint or at an interior turning point, and that an arrow ($\to\infty$) means no global maximum.

### Steps to find a global extremum without graphing

1. Find all relative extrema (it is enough to find the **critical points**: where $f'(x)=0$ or $f'$ does not exist).
2. Find the value, or the limit, of $f$ at the ends of the domain.
3. The highest value is the global max; the lowest is the global min. A limit that is only approached (open end or $\pm\infty$) cannot be a global extremum.

### Worked example: $f(x)=x^3+3x^2-9x-7$

> [!note] Reconstructed from the slides
> $f'(x)=3x^2+6x-9=3(x+3)(x-1)$, so the critical points are $x=-3$ and $x=1$.
>
> $f(-3)=-27+27+27-7=20$ and $f(1)=1+3-9-7=-12$. Also $f(-2)=15$, $f(2)=-5$ and $f(4)=69$.
>
> ![[Lec01_cubic_intervals.png]]
>
> | Interval | Candidates | Result |
> |---|---|---|
> | a. $[-2,2]$ | $x=1$: $-12$; ends: $f(-2)=15$, $f(2)=-5$ | max $15$ at $x=-2$, min $-12$ at $x=1$ |
> | b. entire domain | $f\to\pm\infty$ at the ends | **no** global max or min; $x=-3$ (value 20) is only a local max, $x=1$ only a local min |
> | c. $[-2,4)$ | $x=1$: $-12$; $f(-2)=15$; $f\to69$ as $x\to4$ (not attained) | min $-12$ at $x=1$; **no** global max (69 is approached, not reached) |

### Single relative extremum rule

> [!info] Rule (one extremum)
> If a continuous function has **exactly one** relative extremum on an interval (open or closed), that relative extremum is also a global one.

> [!warning] Check the hypothesis
> In part b) above the cubic has *two* relative extrema (and is unbounded), so the rule does not apply. In the $-x^2$ example it does apply: the only relative extremum is the maximum at 0.

## 2. Optimization problems

**Method:** write the quantity to optimise as a function of one variable (use the constraint to eliminate the other), find the critical point, then justify it is global (single-extremum rule, or compare with endpoints).

> [!example] Slide problem: fencing a storage area
> A manufacturer fences a rectangular storage area of $10{,}800\ \text{m}^2$ next to a building, using the building as one side. The fence **parallel** to the building costs $\$3$ per metre (the side facing the highway); the other two sides cost $\$2$ per metre. Find the length of each type of fence that minimises total cost, and the minimal cost.

> [!note] Reconstructed from the slides
> Let $x$ be the length of the side parallel to the building and $y$ the length of each of the two perpendicular sides. The building replaces the other parallel side, so fencing is needed on three sides.
>
> Constraint: $xy=10{,}800$, so $y=\dfrac{10{,}800}{x}$.
>
> Cost: $C=3x+2(2y)=3x+4y=3x+\dfrac{43{,}200}{x}$, for $x>0$.
>
> $$C'(x)=3-\frac{43{,}200}{x^2}=0 \;\Rightarrow\; x^2=14{,}400 \;\Rightarrow\; x=120.$$
>
> Then $y=\dfrac{10{,}800}{120}=90$.
>
> $C''(x)=\dfrac{86{,}400}{x^3}>0$ for $x>0$, and $x=120$ is the only critical point, so by the single-extremum rule it is the global minimum.
>
> $$C(120)=3(120)+4(90)=360+360=\boxed{720}$$
>
> ![[Lec01_fence_cost.png]]
>
> **Answer:** $120$ m of $\$3$ fence (parallel to the building), $90$ m for each of the two $\$2$ sides, minimal cost $\$720$.

> [!tip] Sanity check
> At the optimum the two cost components are equal ($3x=4y=360$). That is typical of "cost of one type grows with $x$, the other falls with $x$" problems.

## 3. Summation rules

For $\sum_{i=1}^{n}$ notation, three rules let you split and pull out pieces:

1. **Commutative (additive) property:**

$$\sum_{i=1}^{n}(a_i+b_i)=\sum_{i=1}^{n}a_i+\sum_{i=1}^{n}b_i$$

2. **Distributive property** (constant factor comes out):

$$\sum_{i=1}^{n}(\alpha\cdot a_i)=\alpha\cdot\sum_{i=1}^{n}a_i$$

3. **Sum of a constant:** the slide leaves the formula blank.

$$\sum_{i=1}^{n}c=n\cdot c$$

> [!note] Reconstructed from the slides
> Rule 3 follows because adding the same constant $c$ exactly $n$ times gives $nc$. The slide heading is given; the formula is filled in here.

> [!example] Slide example
> Find $\sum_{i=1}^{10}(2^i+3i-5)$, given $\sum_{i=1}^{10}2^i=2046$ and $\sum_{i=1}^{10}i=55$.

> [!note] Reconstructed from the slides
> Split with rule 1, pull out constants with rule 2, and use rule 3 for the $-5$:
>
> $$\sum_{i=1}^{10}2^i+3\sum_{i=1}^{10}i-\sum_{i=1}^{10}5=2046+3(55)-10\cdot5=2046+165-50=\boxed{2161}.$$

> [!warning] Common mistake
> $\sum_{i=1}^{n}(\alpha+a_i)\neq\alpha+\sum a_i$. The constant is added $n$ times: the correct result is $n\alpha+\sum a_i$.

## Summary

- A global extremum depends on the domain: closed interval means both exist (for continuous $f$); open ends or unbounded domains may leave one or both missing.
- Recipe: critical points, plus endpoint values or limits, then compare.
- Exactly one relative extremum on an interval implies it is global.
- Optimization: eliminate a variable with the constraint, differentiate, then justify globality. Fence example: $x=120$, $y=90$, cost $\$720$.
- Summation is linear: split sums, pull out constants, and $\sum_{i=1}^{n}c=nc$.

## Related notes

- [[Maths for Economists B]]
- Next: [[Lec_02-Logarithmic Functions and Inverse Functions]]
