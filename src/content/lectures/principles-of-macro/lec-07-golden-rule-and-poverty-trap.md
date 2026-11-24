---
title: "The Golden Rule and the Poverty Trap"
week: 7
semester: 2
year: 1
academic_year: "2024-25"
course: Introduction to Macroeconomics
lecture: "Lecture 07: 4, Growth: Solow with constant technology, part 2"
instructor: Dr. Idit Kalisher
tags:
  - macro-economics-intro
  - class-slides
  - golden-rule-savings-rate
  - poverty-trap
  - solow-model
  - steady-state
aliases:
  - Intro Macro Lecture 07
subject: principles-of-macro
in_scope: true
---

> [!info] Built from the class slides
> AI-written notes from the Moodle deck *4, Growth: Solow with constant technology, part 2*. Slide photos and data charts are not reproduced.

## The Golden Rule

Consumption per worker is $c = y - sy$. In steady state, $sy^* = (\delta + n)k^*$, so:

$$
c^* = f(k^*) - (\delta + n)k^*
$$

To maximise it, set the derivative to zero:

$$
\frac{dc^*}{dk^*} = f'(k^*) - \delta - n = 0
\quad\Longrightarrow\quad
f'(k_{GR}) = \delta + n
$$

The savings rate that delivers this level is:

$$
s_{GR} = \frac{(\delta + n)\,k_{GR}}{f(k_{GR})}
$$

For Cobb-Douglas, $Y = AK^{\alpha}L^{1-\alpha}$:

$$
\boxed{s_{GR} = \alpha}
$$

```graph
type: solow-model
figure: golden-rule
```

### Worked example: the island

$Y = 4K^{0.5}L^{0.5}$, $n = 2\%$, $\delta = 5\%$, and the island saves 20%.

$$
y = 4k^{0.5},
\qquad
\frac{dc}{dk} = 2k^{-0.5} - 0.07 = 0
\quad\Longrightarrow\quad
k_{GR} = \left(\frac{200}{7}\right)^2
$$

$$
s_{GR} = \frac{0.07 \cdot (200/7)^2}{4 \cdot (200/7)} = 0.5
$$

The island saves 20%, below the Golden Rule rate of 50%, so it **does not maximise** long-run consumption.

## Similar capital, different outcomes

In the 1960s, South Korea and Niger looked alike: GDP per capita of about 1,500 and 1,100 USD (PPP), both agrarian. By the 2010s, South Korea was at about 40,000 and Niger about 1,200.

| | South Korea | Niger |
|---|---|---|
| Institutions | Strong, long-term planning | Weak, limited capacity |
| Trade | Export-oriented | Aid-dependent, little diversification |
| Education | Universal, vocational | Low access |
| Saving | Incentives and financial development | Low saving, weak financial system |

Physical capital alone is not enough. Growth depends on **how capital is used**.

## The poverty trap

A **poverty trap** is a self-reinforcing cycle of low income, low saving and low investment.

$$
s\,f(k) < (\delta + n)k
\quad\Longrightarrow\quad
\Delta k < 0
$$

### Worked example: Economia and Stagnatia

Both have $y = k^{0.4}$, $n + \delta = 0.08$ and $k_0 = 1.5$. Economia saves 30% and Stagnatia 10%.

$$
\Delta k^E = 0.3(1.5)^{0.4} - 0.08(1.5) = 0.2328
$$

$$
\Delta k^S = 0.1(1.5)^{0.4} - 0.08(1.5) = -0.0024
$$

Steady states are $k_E^* \approx 9.05$ with $y \approx 2.41$, and $k_S^* \approx 1.45$ with $y \approx 1.16$. The savings rate needed to hold $k = 1.5$ is:

$$
s = 0.08(1.5)^{0.6} \approx 0.102
$$

```graph
type: solow-model
figure: poverty-trap
```

## Can aid break the trap?

In theory, a large capital injection could move an economy to a higher path, but **only if saving and institutions sustain accumulation**. Despite trillions of dollars of aid, most recipients have not escaped poverty. The slides' success cases (South Korea, Taiwan, Rwanda, Vietnam) paired aid with reforms, institutions and human capital.
