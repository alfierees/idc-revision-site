---
title: "Steps to find a global extremum without graphing"
subject: maths-for-economists-b
related_terms:
  - global-extremum
  - critical-point
  - closed-interval-rule
source_folder: maths-for-economists-b
ai_drafted: true
---

Use this procedure whenever a question asks for the global maximum or minimum of a continuous function on a given domain, without drawing it.

1. Find all relative extrema. It is enough to find the critical points, where $f'(x)=0$ or $f'$ does not exist.
2. Find the value, or the limit, of $f$ at the ends of the domain.
3. The highest value is the global max and the lowest is the global min. A limit that is only approached (an open end or $\pm\infty$) cannot be a global extremum.

## Common pitfalls

- A value that is only approached at an open end is not attained, so it cannot be the global extremum. On $[-2,4)$ the function below approaches 69 but has no global max.
- On the entire domain, a local extremum is not automatically global. Check the limits at the ends first.

## Worked example

For $f(x)=x^3+3x^2-9x-7$, $f'(x)=3(x+3)(x-1)$, so the critical points are $x=-3$ and $x=1$. On $[-2,2]$ only $x=1$ is inside, and the candidates are $f(1)=-12$, $f(-2)=15$ and $f(2)=-5$. The global max is $15$ at $x=-2$ and the global min is $-12$ at $x=1$.

See [[Lec_01-Global Extrema, Optimization and Summation|Lec 01]].
