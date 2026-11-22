---
title: "Lecture 9: Covariance and Correlation"
semester: 1
year: 1
course: "Statistics A"
lecture: 9
tags:
  - statistics-a
  - joint-distribution
  - marginal-distribution
  - covariance
  - correlation
  - linear-transformation
subject: statistics-a
in_scope: true
---

# Lecture 9: Covariance and Correlation

> Part of: [[Statistics A]]
> Key concepts: [[Joint Distribution]], [[Marginal Distribution]], [[Covariance]], [[Correlation Coefficient]], [[Linear Transformation]], [[Expected Value]], [[Variance]], [[Standard Deviation]]

Instructor: Asael Sklar. The lecture opens with a quick review of **joint distributions** (two random variables described together), then asks the new question: *do two variables move together, and how strongly?* **Covariance** gives the direction; the **correlation coefficient** rescales it to a number between -1 and 1 that can be compared across problems. The building blocks are [[Lec_05-Random Variables, Expected Value and Variance]] and [[Lec_06-Expected Value, Variance and Known Distributions]].

> [!note] Source
> Class 09 deck (slides 1 to 292, animation builds collapsed) plus Handout 9, merged below. Text, tables and equations were read from the slide XML. Slides 1 and 292 are picture-only ("Correlation vs. causation" is only a title and an image) and were not interpreted. The scatterplot sketches on the "meaning of covariance" slides are drawn shapes; the figure below is a reconstruction of that idea.

---

## 1. Review: joint and marginal distributions

Two (or more) random variables are described together by a **[[Joint Distribution]]**, which lists

1. all combinations of possible values, and
2. the probability of each combination.

It is written as a table with the values of $X$ down the side and the values of $Y$ across the top; the cell for row $x_i$ and column $y_j$ holds $P(X=x_i \cap Y=y_j)$, also written $P(X=x_i, Y=y_j)$.

The **[[Marginal Distribution]]** of $X$ lists the possible values of $X$ and their probabilities *regardless of $Y$*, and likewise for $Y$. They are called marginal because we write them **on the margin** of the table: add across each row to get $P(X=x_i)$, add down each column to get $P(Y=y_j)$.

The recording list on the last slides also mentions conditional distributions, conditional expected value and independence: these are in the earlier lectures ([[Lec_03-Conditional Probability, Bayes and Independence]] for independence of events) and are not re-derived here.

### Running example: two football games

> [!example] Two independent games
> Two teams play 2 independent games. In a single game team A wins with probability 0.5, team B wins with probability 0.4, and they tie with probability 0.1.
> - $X$ = number of wins for team A
> - $Y$ = number of wins for team B
>
> What is the joint distribution of $X$ and $Y$?

**Step 1: list the 9 outcomes of (Game 1, Game 2)**, each a letter A (A wins), B (B wins) or T (tie). Because the games are independent, multiply the single-game probabilities. For example AA has probability $0.5 \cdot 0.5 = 0.25$, AB has $0.5 \cdot 0.4 = 0.2$, AT has $0.5 \cdot 0.1 = 0.05$, BB has $0.16$, BT has $0.04$, TT has $0.01$, and the reversed orders (BA, TA, TB) repeat the same values.

| Game 1 | Game 2 | $p$ | $X$ | $Y$ |
|---|---|---|---|---|
| A | A | 0.25 | 2 | 0 |
| A | B | 0.2 | 1 | 1 |
| A | T | 0.05 | 1 | 0 |
| B | A | 0.2 | 1 | 1 |
| B | B | 0.16 | 0 | 2 |
| B | T | 0.04 | 0 | 1 |
| T | A | 0.05 | 1 | 0 |
| T | B | 0.04 | 0 | 1 |
| T | T | 0.01 | 0 | 0 |

**Step 2: collect outcomes with the same $(X, Y)$ into one cell.** For example $(X=1, Y=1)$ comes from AB and BA: $0.2 + 0.2 = 0.4$; $(X=1, Y=0)$ comes from AT and TA: $0.05+0.05 = 0.1$; $(X=0,Y=1)$ comes from BT and TB: $0.04 + 0.04 = 0.08$.

| $X \backslash Y$ | $y_1 = 0$ | $y_2 = 1$ | $y_3 = 2$ | $P(X=x_i)$ |
|---|---|---|---|---|
| $x_1 = 0$ | 0.01 | 0.08 | 0.16 | **0.25** |
| $x_2 = 1$ | 0.1 | 0.4 | 0 | **0.5** |
| $x_3 = 2$ | 0.25 | 0 | 0 | **0.25** |
| $P(Y=y_j)$ | **0.36** | **0.48** | **0.16** | 1 |

The cells $(X=1, Y=2)$, $(2,1)$ and $(2,2)$ are 0 because two games cannot contain more than two non-tied results in total.

> [!tip] Sanity check
> The nine cells sum to 1, and so do both margins. If a margin does not sum to 1, a cell is wrong.

The marginals give $E(X) = 0 \cdot 0.25 + 1 \cdot 0.5 + 2 \cdot 0.25 = 1$ and $E(Y) = 0 \cdot 0.36 + 1 \cdot 0.48 + 2 \cdot 0.16 = 0.8$. (The slides state $E(X)=1$ and $E(Y)=0.8$.)

---

## 2. Covariance

### Definition

The **[[Covariance]]** is the expected value of the product of the deviation of $X$ from $E(X)$ and the deviation of $Y$ from $E(Y)$:

$$
Cov(X,Y) = E\big((X-E(X)) \cdot (Y-E(Y))\big)
$$

For a joint table this is a double sum over every cell:

$$
Cov(X,Y) = \sum_i \sum_j \big(x_i - E(X)\big)\big(y_j - E(Y)\big)\, P(X=x_i, Y=y_j)
$$

> [!example] Football example, from the definition
> Using $E(X)=1$ and $E(Y)=0.8$, each nonzero cell contributes (deviation of X) times (deviation of Y) times probability:
>
> | $x$ | $y$ | $(x-1)(y-0.8)$ | $P$ | contribution |
> |---|---|---|---|---|
> | 0 | 0 | $(-1)(-0.8) = 0.8$ | 0.01 | 0.008 |
> | 0 | 1 | $(-1)(0.2) = -0.2$ | 0.08 | -0.016 |
> | 0 | 2 | $(-1)(1.2) = -1.2$ | 0.16 | -0.192 |
> | 1 | 0 | $(0)(-0.8) = 0$ | 0.1 | 0 |
> | 1 | 1 | $0$ | 0.4 | 0 |
> | 2 | 0 | $(1)(-0.8) = -0.8$ | 0.25 | -0.2 |
>
> Sum: $0.008 - 0.016 - 0.192 - 0.2 = -0.4$. This matches the slide: $Cov(X,Y) = -0.4$. (The per-cell breakdown is reconstructed; the slide shows only the formula and the result.)

### Working formula

The definition is tedious; the **working formula** is usually faster:

$$
\boxed{Cov(X,Y) = E(X \cdot Y) - E(X) \cdot E(Y)}
$$

Proof (from the slides): expand the product and use the fact that $E(X)$ and $E(Y)$ are constants that come out of an expectation.

$$
\begin{aligned}
Cov(X,Y) &= E\big((X-E(X))(Y-E(Y))\big) \\
&= E\big(XY - X\,E(Y) - Y\,E(X) + E(X)E(Y)\big) \\
&= E(XY) - E(Y)E(X) - E(X)E(Y) + E(X)E(Y) \\
&= E(XY) - E(X)E(Y)
\end{aligned}
$$

> [!example] Football example, working formula
> $E(X \cdot Y)$ needs its own little distribution of the product $X \cdot Y$. The product is 1 only for the cell $(1,1)$, so $P(XY = 1) = 0.4$. Every other cell with positive probability has $X=0$ or $Y=0$ (cells such as $(2,1)$ and $(1,2)$ have probability 0), so $P(XY=0) = 0.6$. Hence $E(XY) = 0.4$ and
>
> $$
> Cov(X,Y) = 0.4 - 1 \cdot 0.8 = -0.4
> $$

> [!tip] Zero covariance
> If $Cov(X,Y) = 0$, the working formula gives $E(X \cdot Y) = E(X) \cdot E(Y)$: the expected value of the product is the product of the expected values.

### Covariance of a variable with itself

$$
Cov(X,X) = E\big((X-E(X))(X-E(X))\big) = E\big((X-E(X))^2\big) = Var(X)
$$

So [[Variance]] is just the covariance of a variable with itself.

### Covariance and linear transformations

For constants $a, b, c, d$:

$$
\boxed{Cov(a + bX,\; c + dY) = b \cdot d \cdot Cov(X,Y)}
$$

Proof (from the slides): the constants $a$ and $c$ cancel inside the deviations, and $b$, $d$ factor out.

$$
\begin{aligned}
Cov(bX+a,\, dY+c) &= E\big((bX + a - E(bX+a))(dY + c - E(dY+c))\big) \\
&= E\big((bX + a - bE(X) - a)(dY + c - dE(Y) - c)\big) \\
&= E\big(b(X-E(X)) \cdot d(Y-E(Y))\big) \\
&= b\,d\;E\big((X-E(X))(Y-E(Y))\big) = b \cdot d \cdot Cov(X,Y)
\end{aligned}
$$

> [!example] Bonuses
> League rules: the winner of each game earns a $100,000 bonus, the loser gets nothing, and a tie pays nobody. Let $S$ be team A's total bonus and $T$ team B's. Then $S = 100{,}000 \cdot X$ and $T = 100{,}000 \cdot Y$, so
>
> $$
> Cov(S,T) = 100{,}000 \cdot 100{,}000 \cdot (-0.4) = -4{,}000{,}000{,}000
> $$

### What covariance means

Define the deviations $d_X = X - E(X)$ and $d_Y = Y - E(Y)$. Then $Cov(X,Y) = E(d_X \cdot d_Y)$: **the heart of the covariance is a multiplication of deviations**.

- If the signs of $d_X$ and $d_Y$ **tend to match** (both above or both below their means), the products are mostly positive: **covariance is positive**.
- If the signs **tend to mismatch**, the products are mostly negative: **covariance is negative**.
- If signs neither match nor mismatch, positive and negative products cancel: **covariance is about 0**.

![[Lec09_covariance_sign_match.png]]

So the **sign** of the covariance gives the direction of the linear relationship between $X$ and $Y$, if there is one. What about its absolute value? The slide's answer is **"Not much..."**: the size depends on the units (see the bonus example, where changing dollars scales the covariance by $10^{10}$ without changing the relationship at all). That is the problem the correlation coefficient solves.

> [!warning] Common mistake
> Do not read "covariance is large" as "strong relationship". Covariance is not unit-free. Use the correlation coefficient to judge strength.

---

## 3. The correlation coefficient

The **[[Correlation Coefficient]]** $\rho$ (rho) signifies the degree of **linear** correlation between two variables. It divides the covariance by both standard deviations, which cancels the units:

$$
\boxed{\rho(X,Y) = \frac{Cov(X,Y)}{SD(X) \cdot SD(Y)}}
$$

### Correlation of a variable with itself

$$
\rho(X,X) = \frac{Cov(X,X)}{SD(X)\cdot SD(X)} = \frac{Var(X)}{SD(X)^2} = \frac{Var(X)}{Var(X)} = 1
$$

This is the highest possible value: **perfect positive correlation**, $\rho(X,X) = 1$.

### Influence of a linear transformation

Let $Y = a + bZ$ and suppose $\rho(X,Z)$ is known. Using the covariance rule and $SD(a + bZ) = |b| \cdot SD(Z)$:

$$
\rho(X,Y) = \frac{Cov(X, a+bZ)}{SD(X)\cdot SD(a+bZ)} = \frac{b\,Cov(X,Z)}{SD(X)\cdot |b|\, SD(Z)} = \frac{b}{|b|}\,\rho(X,Z)
$$

The factor $b/|b|$ is $+1$ if $b>0$ and $-1$ if $b<0$. In the general form with two transformed variables (Handout 9):

$$
\rho(a + bX,\; c + dY) =
\begin{cases}
\;\;\rho(X,Y) & \text{if } b \cdot d > 0 \\
-\rho(X,Y) & \text{if } b \cdot d < 0
\end{cases}
$$

**A linear transformation never changes the size of the correlation coefficient; it only flips the sign if the slope is negative.**

> [!note] Reconstructed from the slides
> The slides derive the case with one variable transformed ($Y = a + bZ$). The two-sided version with $b \cdot d$ comes from Handout 9; it follows by applying the one-sided result twice.

### Correlation of a variable with its negative, and with a linear transformation of itself

$$
\rho(X,-X) = \rho(X, -1 \cdot X) = -\rho(X,X) = -1
$$

**Perfect negative correlation.** More generally, if $Y = a + bX$:

$$
\rho(X,Y) = \rho(X, a+bX) = \pm\rho(X,X) = \pm 1
$$

so the correlation of a variable with a linear transformation of itself is **always perfect**: $+1$ when $b>0$, $-1$ when $b<0$. On a scatterplot a perfect correlation is a straight line sloping up ($\rho=1$) or down ($\rho=-1$).

![[Lec09_perfect_correlation.png]]

### Rules for the correlation coefficient (Handout 9)

| Rule | Statement |
|---|---|
| Symmetry | $\rho(X,Y) = \rho(Y,X)$ |
| Linear transformation | $\lvert\rho(a + bX,\; c + dY)\rvert = \lvert\rho(X,Y)\rvert$ |
| Limits | $-1 \le \rho(X,Y) \le 1$ |

The slides reach the limits by noting that the extreme cases are a variable with itself ($+1$) and with its negative ($-1$).

### Worked example: a die and two variables

> [!example] One die, two random variables
> Roll a fair six-sided die. $X = 1$ if the die shows 3 or less and $X=2$ if it shows 4 or more. $Y = 1$ if the die shows 2 or less, $Y=2$ if it shows 3 or 4, and $Y=3$ if it shows 5 or 6. Find $\rho(X,Y)$.

First tabulate each face (each has probability $1/6$):

| Die | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| $X$ | 1 | 1 | 1 | 2 | 2 | 2 |
| $Y$ | 1 | 1 | 2 | 2 | 3 | 3 |

Joint distribution, with marginals:

| $X \backslash Y$ | $y_1=1$ | $y_2=2$ | $y_3=3$ | $P(X=x_i)$ |
|---|---|---|---|---|
| $x_1=1$ | $\tfrac13$ | $\tfrac16$ | 0 | $\tfrac12$ |
| $x_2=2$ | 0 | $\tfrac16$ | $\tfrac13$ | $\tfrac12$ |
| $P(Y=y_j)$ | $\tfrac13$ | $\tfrac13$ | $\tfrac13$ | 1 |

**Predict the sign first**: both variables increase with the die face, so $\rho > 0$, and since they are not an exact linear function of each other, $\rho < 1$.

**Standard deviations.** $X$ is uniform on $\{1,2\}$ and $Y$ is uniform on $\{1,2,3\}$. With the uniform variance formula $Var = \frac{(b-a+1)^2 - 1}{12}$ (see [[Uniform Distribution]]):

$$
SD(X) = \sqrt{\frac{(2-1+1)^2-1}{12}} = \sqrt{\frac{3}{12}} = \sqrt{\frac14}, \qquad
SD(Y) = \sqrt{\frac{(3-1+1)^2-1}{12}} = \sqrt{\frac{8}{12}} = \sqrt{\frac23}
$$

**Covariance (working formula).** $E(X) = 0.5 \cdot 1 + 0.5 \cdot 2 = 1.5$ and $E(Y) = \frac13(1+2+3) = 2$. For the product $X \cdot Y$:

| $X \cdot Y$ | 1 | 2 | 4 | 6 |
|---|---|---|---|---|
| $P$ | $\tfrac13$ | $\tfrac16$ | $\tfrac16$ | $\tfrac13$ |

$$
E(XY) = \tfrac13 \cdot 1 + \tfrac16 \cdot 2 + \tfrac16 \cdot 4 + \tfrac13 \cdot 6 = 3\tfrac13, \qquad
Cov(X,Y) = 3\tfrac13 - 1.5 \cdot 2 = \tfrac13
$$

**Correlation.**

$$
\rho(X,Y) = \frac{1/3}{\sqrt{1/4}\cdot\sqrt{2/3}} \approx 0.816
$$

which is positive and below 1, as predicted.

### Correlation benchmarks

| Strength | Rough value |
|---|---|
| Weak | $\rho \approx 0.2$ |
| Medium | $\rho \approx 0.5$ |
| Strong | $\rho \approx 0.8$ |

> [!warning] Context matters
> The slide stresses that **benchmarks are field and context dependent**: a correlation of 0.3 may be impressive in one discipline and weak in another.

### Real-data examples from the lecture

- **IQ and income** (a large sample of 6,000 Americans born 1957 to 1964, income on a log scale): a big, noisy cloud with an upward-sloping line. A positive but weak-to-moderate association (the plot's own legend shows $R^2 = 0.132$; the slide gives no $\rho$).

![[Lec09_data_iq_income.png]]

- **Shoe size and height** (199 survey respondents): points rise to the right with plenty of scatter.

![[Lec09_data_shoe_height.png]]

- **Attention to positive images**: the tendency to look at more positive images, measured in two sessions two months apart, has $\rho = 0.83$, a strong correlation for a psychological trait (a paper co-authored by the lecturer).
- The lecture also points to guessthecorrelation.com, a game for building intuition, and ends with the title "Correlation vs. causation" (a reminder that a high $\rho$ does not show that one variable causes the other).

> [!info] Extra credit
> The deck announces a 2-point extra credit task on Moodle. Administrative only.

---

## Formula sheet (Handout 9)

| Item | Formula |
|---|---|
| Covariance (definition) | $Cov(X,Y) = E\big((X-E(X))(Y-E(Y))\big)$ |
| Covariance (working) | $Cov(X,Y) = E(XY) - E(X)E(Y)$ |
| Covariance with itself | $Cov(X,X) = Var(X)$ |
| Linear transformation | $Cov(bX+a,\, dY+c) = b\,d\,Cov(X,Y)$ |
| Correlation coefficient | $\rho(X,Y) = \dfrac{Cov(X,Y)}{SD(X)\,SD(Y)}$ |
| Correlation, linear transformation | $\rho(bX+a,\, dY+c) = \pm\rho(X,Y)$, plus if $bd>0$, minus if $bd<0$ |
| Variable with its own transformation $Y=bX+a$ | $\rho = 1$ if $b>0$, $\rho=-1$ if $b<0$ |
| Rules | symmetric; $\lvert\rho\rvert$ unchanged by linear transformations; $-1 \le \rho \le 1$ |

---

## Summary

- A **joint distribution** gives the probability of every $(x_i, y_j)$ pair; **marginals** are the row and column totals.
- **Covariance** $= E\big((X-E(X))(Y-E(Y))\big) = E(XY)-E(X)E(Y)$. Its **sign** shows the direction of the linear relationship; its **size** is unit-dependent and not very informative.
- $Cov(X,X) = Var(X)$, and $Cov(a+bX, c+dY) = b\,d\,Cov(X,Y)$.
- The **correlation coefficient** $\rho = Cov/(SD(X)\,SD(Y))$ is unit-free, symmetric and lies in $[-1,1]$.
- Linear transformations keep $|\rho|$ and flip its sign only when the slope product is negative; a variable and a linear function of itself have $\rho = \pm1$.
- Benchmarks (0.2 weak, 0.5 medium, 0.8 strong) depend on the field. Next week: continuous random variables.

## Related notes

- [[Statistics A]]
- [[Lec_06-Expected Value, Variance and Known Distributions]]
- [[Lec_05-Random Variables, Expected Value and Variance]]
- [[Lec_03-Conditional Probability, Bayes and Independence]]
