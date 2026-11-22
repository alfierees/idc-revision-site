---
title: "Lecture 8: Joint Distributions, Conditional Distributions and Covariance"
semester: 1
year: 1
course: "Statistics A"
lecture: 8
tags:
  - statistics-a
  - joint-distribution
  - marginal-distribution
  - conditional-distribution
  - conditional-expected-value
  - independence
  - covariance
  - variance-of-a-sum
subject: statistics-a
in_scope: true
---

# Lecture 8: Joint Distributions, Conditional Distributions and Covariance

> Part of: [[Statistics A]]
> Key concepts: [[Joint Distribution]], [[Joint Distribution Table]], [[Marginal Distribution]], [[Conditional Distribution]], [[Conditional Expected Value]], [[Independent Random Variables]], [[Covariance]], [[Scatter Plot]], [[Variance of a Sum]]

Until now each random variable lived on its own: one table of values and probabilities (see [[Lec_05-Random Variables, Expected Value and Variance]] and [[Lec_06-Expected Value, Variance and Known Distributions]]). This lecture describes **two random variables together**, asks what one tells us about the other, and ends with the covariance, the number that measures a linear relationship. Instructor: Asael Sklar. Formula sheet: Handout 8 (merged below).

> [!abstract] Plan of the lecture
> 1. Joint distribution and the joint distribution table
> 2. Marginal distributions
> 3. Conditional distribution
> 4. Conditional expected value
> 5. Independence of random variables
> 6. Covariance and the variance of a sum

---

## 1. Why describe random variables together?

A single random variable is described by a **distribution**: all possible values and the probability of each one (a table of $x_i$ and $P(X = x_i)$).

> [!example] A class of 100 students
> 50 are women and 50 are men. 15 students are shorter than 160 cm and 15 are taller than 180 cm. Pick one student at random.
>
> - $X$ = height category: $X = 1$ if height $< 160$ cm, $X = 2$ if between 160 and 180 cm, $X = 3$ if height $> 180$ cm.
> - $Y$ = gender: $Y = 1$ if female, $Y = 2$ if male.

Separately, the two distributions are:

| $x_i$ | 1 | 2 | 3 |
|---|---|---|---|
| $P(X = x_i)$ | 0.15 | 0.70 | 0.15 |

| $y_j$ | 1 | 2 |
|---|---|---|
| $P(Y = y_j)$ | 0.5 | 0.5 |

The lecture then asks: **is a student's height related to their gender?** Probably yes, but these two tables cannot tell us. They contain no information about how the variables move together. We need the probability of each **combination**.

> [!info] Joint distribution
> A **joint distribution** describes two (or more) random variables together by listing:
> - all combinations of possible values, and
> - the probability of each combination.

What the joint distribution gives us: (a) more accurate probabilities when we know the value of the other variable, and (b) the **relationship** between the variables.

## 2. The joint distribution table

The joint distribution is written as a table with the values of $X$ down the side and the values of $Y$ across the top. Each cell holds $P(X = x_i \cap Y = y_j)$. The lecturer also uses the shorter notation $P(X = x_i, Y = y_j)$: it means the same thing, "the probability that $X$ is $x_i$ **and** $Y$ is $y_j$".

| $x_i$ \ $y_j$ | $y_1$ | $y_2$ | $\dots$ | $y_m$ |
|---|---|---|---|---|
| $x_1$ | $P(X = x_1, Y = y_1)$ | | | $P(X = x_1, Y = y_m)$ |
| $x_2$ | | | | |
| $\dots$ | | | | |
| $x_n$ | $P(X = x_n, Y = y_1)$ | | | $P(X = x_n, Y = y_m)$ |

(Handout 8 shows this table. The cells that the handout leaves blank follow the same pattern.)

> [!example] Height and gender: building the table
> The extra information: **12 women and 3 men are shorter than 160 cm; 14 men and 1 woman are taller than 180 cm.** Each cell is a count divided by 100.
>
> - $P(X=1, Y=1) = 12/100 = 0.12$ (short women)
> - $P(X=1, Y=2) = 3/100 = 0.03$ (short men)
> - $P(X=3, Y=1) = 1/100 = 0.01$ (tall women)
> - $P(X=3, Y=2) = 14/100 = 0.14$ (tall men)
> - $P(X=2, Y=1) = (50 - 12 - 1)/100 = 37/100 = 0.37$ (medium women: all 50 women minus the short and tall ones)
> - $P(X=2, Y=2) = (50 - 14 - 3)/100 = 33/100 = 0.33$ (medium men)
>
> | $X$ \ $Y$ | $Y=1$ (woman) | $Y=2$ (man) |
> |---|---|---|
> | $X=1$ (short) | 0.12 | 0.03 |
> | $X=2$ (medium) | 0.37 | 0.33 |
> | $X=3$ (tall) | 0.01 | 0.14 |

> [!example] Three fair coins: building the table from the sample space
> Flip 3 fair coins. Let $X$ = number of heads on the **first two** coins and $Y$ = number of heads on **all three** coins. List the 8 equally likely outcomes (each has probability $1/8 = 0.125$) and compute $X$ and $Y$ for each:
>
> | C1 | C2 | C3 | $X$ | $Y$ | $p$ |
> |---|---|---|---|---|---|
> | H | H | H | 2 | 3 | 0.125 |
> | H | H | T | 2 | 2 | 0.125 |
> | H | T | H | 1 | 2 | 0.125 |
> | H | T | T | 1 | 1 | 0.125 |
> | T | H | H | 1 | 2 | 0.125 |
> | T | H | T | 1 | 1 | 0.125 |
> | T | T | H | 0 | 1 | 0.125 |
> | T | T | T | 0 | 0 | 0.125 |
>
> Now count how many rows give each $(X, Y)$ pair. For example $(X=1, Y=2)$ occurs twice (HTH and THH), so its probability is $0.25$. The joint table is:
>
> | $X$ \ $Y$ | 0 | 1 | 2 | 3 |
> |---|---|---|---|---|
> | 0 | 0.125 | 0.125 | 0 | 0 |
> | 1 | 0 | 0.25 | 0.25 | 0 |
> | 2 | 0 | 0 | 0.125 | 0.125 |
>
> Impossible combinations (such as $X=0, Y=3$) get probability 0: you cannot have 3 heads in total if the first two coins have none.

## 3. Marginal distributions

> [!info] Marginal distribution
> The **marginal distribution of $X$** is all the possible values of $X$ and their probabilities, **regardless of $Y$**. It is also just called "the distribution of $X$". It is called *marginal* because it is written in the **margin** of the joint table. Likewise for $Y$.

To get it, **add up the row** (for $X$) or **the column** (for $Y$):

$$
P(X = x_i) = \sum_j P(X = x_i, Y = y_j), \qquad P(Y = y_j) = \sum_i P(X = x_i, Y = y_j)
$$

Handout 8's table puts the marginals in an extra column ($P(X = x_i)$) and an extra row ($P(Y = y_j)$).

> [!example] Coins: marginals
> Row sums give $P(X=0) = 0.125 + 0.125 + 0 + 0 = 0.25$, $P(X=1) = 0 + 0.25 + 0.25 + 0 = 0.5$ and $P(X=2) = 0.25$. Column sums give $P(Y=0) = 0.125$, $P(Y=1) = 0.125 + 0.25 = 0.375$, $P(Y=2) = 0.25 + 0.125 = 0.375$ and $P(Y=3) = 0.125$.
>
> | $X$ \ $Y$ | 0 | 1 | 2 | 3 | $P(X = x_i)$ |
> |---|---|---|---|---|---|
> | 0 | 0.125 | 0.125 | 0 | 0 | 0.25 |
> | 1 | 0 | 0.25 | 0.25 | 0 | 0.5 |
> | 2 | 0 | 0 | 0.125 | 0.125 | 0.25 |
> | $P(Y = y_j)$ | 0.125 | 0.375 | 0.375 | 0.125 | |
>
> Sanity check against [[Lec_06-Expected Value, Variance and Known Distributions]]: $X \sim B(2, 0.5)$ (two fair coins) and $Y \sim B(3, 0.5)$ (three fair coins). The marginals above match those [[Binomial Distribution]]s: $0.25, 0.5, 0.25$ and $0.125, 0.375, 0.375, 0.125$.

> [!example] Height and gender: marginals
> Row sums: $0.12 + 0.03 = 0.15$, $0.37 + 0.33 = 0.70$, $0.01 + 0.14 = 0.15$. Column sums: $0.12 + 0.37 + 0.01 = 0.5$ and $0.03 + 0.33 + 0.14 = 0.5$. These are exactly the two single-variable tables from Section 1, which is the point: **the marginals are recovered from the joint table, but the joint table cannot be recovered from the marginals.**

> [!tip] Useful checks (the lecture says these can help solve questions)
> - The probabilities of all values of $X$ sum to 1; so do those of $Y$.
> - The joint probabilities across a row sum to the marginal probability of that $X$ value.
> - The joint probabilities down a column sum to the marginal probability of that $Y$ value.
>
> A joint table is like the $2 \times 2$ tables for events (see [[Lec_03-Conditional Probability, Bayes and Independence]]), just with more rows and columns.

## 4. Conditional distribution

Reminder from [[Lec_03-Conditional Probability, Bayes and Independence]]: the probability of $A$ given $B$ is $P(A \mid B) = \dfrac{P(A \cap B)}{P(B)}$.

> [!info] Conditional distribution
> The **conditional distribution of $X$ given that we know $Y = y_j$** is all the possible values of $X$ together with the conditional probability of each, given the known value of $Y$:
>
> $$
> P(X = x_i \mid Y = y_j) = \frac{P(X = x_i, Y = y_j)}{P(Y = y_j)}
> $$

In table terms: **take the column of $Y = y_j$ and divide every cell by the column total** (the marginal $P(Y = y_j)$). The result is a new distribution, and it sums to 1.

> [!example] Height and gender: how likely is a tall student to be a man?
> Question: what is the gender distribution if the student is taller than 180 cm ($X = 3$)? Here we divide the row by $P(X=3) = 0.15$.
>
> $$
> P(Y = 1 \mid X = 3) = \frac{P(X = 3, Y = 1)}{P(X = 3)} = \frac{0.01}{0.15} \approx 0.066
> $$
>
> $$
> P(Y = 2 \mid X = 3) = \frac{P(X = 3, Y = 2)}{P(X = 3)} = \frac{0.14}{0.15} \approx 0.933
> $$
>
> The student is far more likely to be a man (about 93%) than the unconditional 50%. Knowing the height changed our probabilities, so height and gender are related.

> [!example] Coins: given 2 heads in total, how many heads on the first two coins?
> Condition on $Y = 2$. The column for $Y=2$ is $(0, 0.25, 0.125)$ and its total is $P(Y=2) = 0.375$.
>
> | $X$ | $P(X = x_i \mid Y = 2)$ |
> |---|---|
> | 0 | $0 / 0.375 = 0$ |
> | 1 | $0.25 / 0.375 = 2/3$ |
> | 2 | $0.125 / 0.375 = 1/3$ |
>
> Check: $0 + 2/3 + 1/3 = 1$.

## 5. Conditional expected value

> [!info] Conditional expected value
> The **conditional expected value** is the expected value calculated with the **conditional distribution** instead of the ordinary one. It answers: *what value of $X$ should we expect, if we know $Y = y_j$?*
>
> $$
> E(X \mid Y = y_j) = \sum_{i=1}^{n} x_i \cdot P(X = x_i \mid Y = y_j)
> $$

Same recipe as [[Expected Value]]: value times probability, summed, but with conditional probabilities.

> [!example] Coins: expected heads on the first two coins given 2 heads in total
> $$
> E(X \mid Y = 2) = 0 \cdot 0 + 1 \cdot \tfrac{2}{3} + 2 \cdot \tfrac{1}{3} = \tfrac{4}{3} = 1\tfrac{1}{3}
> $$

> [!example] Height and gender: expected height category of a woman
> Condition on $Y = 1$ (woman). Divide the column by $P(Y=1) = 0.5$:
>
> | $X$ | $P(X = x_i \mid Y = 1)$ |
> |---|---|
> | 1 | $0.12 / 0.5 = 0.24$ |
> | 2 | $0.37 / 0.5 = 0.74$ |
> | 3 | $0.01 / 0.5 = 0.02$ |
>
> $$
> E(X \mid Y = 1) = 1 \cdot 0.24 + 2 \cdot 0.74 + 3 \cdot 0.02 = 1.78
> $$
>
> Compare with the unconditional expectation:
>
> $$
> E(X) = 1 \cdot 0.15 + 2 \cdot 0.7 + 3 \cdot 0.15 = 2
> $$
>
> Since $1.78 < 2$: **if we know the student is a woman, we expect her to be shorter** than a randomly chosen student.

> [!note] Reconstructed beyond the slides
> The slides do the woman case only. For completeness, the men's column divided by 0.5 gives $0.06,\ 0.66,\ 0.28$, so $E(X \mid Y = 2) = 0.06 + 1.32 + 0.84 = 2.22$. As a check, $0.5(1.78) + 0.5(2.22) = 2 = E(X)$: the conditional expectations, weighted by the probabilities of the conditions, average back to $E(X)$.

## 6. Independence of random variables

**Reminder (events).** $A$ and $B$ are independent when knowing that $A$ happened does not change the probability of $B$: $P(A \mid B) = P(A)$, equivalently $P(A \cap B) = P(A)\,P(B)$. Independence is reciprocal and also applies to complements (see [[Independent Events]] and [[Lec_03-Conditional Probability, Bayes and Independence]]).

> [!info] Independent random variables
> $X$ and $Y$ are **independent** if knowing the value of one does not change the probabilities of the possible values of the other. Formally, for **every** $i$ and $j$:
>
> $$
> P(X = x_i \mid Y = y_j) = P(X = x_i)
> $$
>
> Equivalently (the form on Handout 8):
>
> $$
> P(X = x_i, Y = y_j) = P(X = x_i) \cdot P(Y = y_j)
> $$

Consequences the lecturer stresses:

- Independence is **reciprocal**: if $X$ is independent of $Y$, then $Y$ is independent of $X$.
- For every value of $Y$, the conditional distribution of $X$ is the same, and **all conditional distributions of $X$ equal its marginal distribution**.
- It must hold for **every cell**. One failing cell is enough to show dependence.

> [!example] Height and gender are NOT independent
> Check one cell: $P(X=1, Y=1) = 0.12$, but $P(X=1)\,P(Y=1) = 0.15 \times 0.5 = 0.075$. Since $0.12 \neq 0.075$, **$X$ and $Y$ are not independent.**

> [!example] Coins: first two coins vs the last coin are independent
> Flip 3 fair coins. $X$ = number of heads on the first 2 coins; $Y$ = 1 if the last coin is heads, 0 if tails. The joint table:
>
> | $X$ \ $Y$ | 0 | 1 | $P(X = x_i)$ |
> |---|---|---|---|
> | 0 | 0.125 | 0.125 | 0.25 |
> | 1 | 0.25 | 0.25 | 0.5 |
> | 2 | 0.125 | 0.125 | 0.25 |
> | $P(Y = y_j)$ | 0.5 | 0.5 | |
>
> Conditional distribution of $X$ given $Y = 1$ (divide the $Y=1$ column by 0.5): $P(X=0 \mid Y=1) = 0.25$, $P(X=1 \mid Y=1) = 0.5$, $P(X=2 \mid Y=1) = 0.25$. This **equals the marginal distribution of $X$**. The same holds for $Y = 0$, so $X$ and $Y$ are independent. This makes sense: the last coin does not influence the first two.

> [!warning] Contrast with the first coin example
> When $Y$ was the total number of heads (including the first two coins), $X$ and $Y$ clearly are related: conditioning on $Y = 2$ changed the distribution of $X$ from $(0.25, 0.5, 0.25)$ to $(0, 2/3, 1/3)$. So $X$ and $Y$ were dependent there.

## 7. Covariance

### Why we need it: variance of a sum

For independent variables, $\mathrm{Var}(X + Y) = \mathrm{Var}(X) + \mathrm{Var}(Y)$ (stated earlier in the course). What if $X$ and $Y$ are **not** independent?

$$
\mathrm{Var}(X + Y) = \mathrm{Var}(X) + \mathrm{Var}(Y) + 2\,\mathrm{Cov}(X, Y)
$$

When $X$ and $Y$ are independent the covariance is 0 and the extra term disappears.

### Definition

> [!info] Covariance
> The **covariance** is the expected value of the product of the deviation of $X$ from $E(X)$ and the deviation of $Y$ from $E(Y)$:
>
> $$
> \mathrm{Cov}(X, Y) = E\big((X - E(X)) \cdot (Y - E(Y))\big)
> $$
>
> Computed from a joint table (a sum over **every cell**):
>
> $$
> \mathrm{Cov}(X, Y) = \sum_i \sum_j \big(x_i - E(X)\big)\big(y_j - E(Y)\big) \cdot P(X = x_i, Y = y_j)
> $$

> [!example] Covariance of height category and gender
> First the two expectations: $E(X) = 2$ (from Section 5) and $E(Y) = 0.5 \cdot 1 + 0.5 \cdot 2 = 1.5$. Now one term per cell (deviation of $X$ times deviation of $Y$ times the cell probability):
>
> $$
> \begin{aligned}
> \mathrm{Cov}(X,Y) &= (1-2)(1-1.5)(0.12) + (1-2)(2-1.5)(0.03) + (2-2)(1-1.5)(0.37) \\
> &\quad + (2-2)(2-1.5)(0.33) + (3-2)(1-1.5)(0.01) + (3-2)(2-1.5)(0.14) \\
> &= 0.06 - 0.015 + 0 + 0 - 0.005 + 0.07 = 0.11
> \end{aligned}
> $$
>
> The covariance is positive. Because $Y = 2$ is male, it says taller categories go with the higher code of $Y$: men are taller on average, in line with Section 5.

> [!note] Reconstructed from the slides
> The slides show the six-term sum building up and end at $0.11$. The cell-by-cell values in the last line are filled in so each step can be checked.

### What the sign means

The heart of the covariance is a **multiplication** of two deviations.

- **Positive covariance.** The product is positive when both deviations are positive ($X$ above its mean **and** $Y$ above its mean) or both negative. $X$ and $Y$ **match**: when $X$ is relatively high, so is $Y$; when $X$ is low, so is $Y$. On a [[Scatter Plot]] this is a **positive linear relationship**: when $X$ increases, $Y$ increases.
- **Negative covariance.** The product is negative when one deviation is positive and the other negative. $X$ and $Y$ **mis-match**: when $X$ is high, $Y$ is low and vice versa. This is a **negative linear relationship**: when $X$ increases, $Y$ decreases.
- **Covariance about 0.** No consistent linear relationship: when $X$ is high, $Y$ is not consistently high or low. When $X$ increases, $Y$ neither increases nor decreases systematically.

A scatter plot shows the joint distribution: each dot is one combination of $X$ and $Y$ values (the slide's example dot is $X = 1.9$, $Y = 1.5$).

![[Lec08_covariance_sign_quadrants.png]]

*Theory diagram. The dashed lines mark $E(X)$ and $E(Y)$ and cut the plane into four quadrants. Upper right and lower left give a positive product; upper left and lower right give a negative product. Whichever pair of quadrants holds most of the dots decides the sign of the covariance.*

> [!tip] Summary of the sign
> $\mathrm{Cov}(X,Y) > 0$: positive linear relationship. $\mathrm{Cov}(X,Y) < 0$: negative linear relationship. $\mathrm{Cov}(X,Y) \approx 0$: no linear relationship.

The slides use these four scatter plots (simulated data, labelled with their **correlation**, a rescaled version of covariance coming next week):

![[Lec08_data_scatter_correlations.png]]

*Real data (copied from the slide). Top: a positive and a negative linear relationship. Bottom left: a cloud with no pattern. Bottom right: a clear curved (upside-down U) relationship that nevertheless has a correlation of 0.*

## 8. Independence versus covariance

**If $X$ and $Y$ are independent, then $\mathrm{Cov}(X, Y) = 0$.**

> [!example] Two coins
> Flip two fair coins. $X = 1$ if the first is heads (0 if tails), $Y = 1$ if the second is heads (0 if tails). Each of the four cells has probability $0.25$ and $E(X) = E(Y) = 0.5$.
>
> $$
> \begin{aligned}
> \mathrm{Cov}(X,Y) &= (-0.5)(-0.5)(0.25) + (0.5)(-0.5)(0.25) + (-0.5)(0.5)(0.25) + (0.5)(0.5)(0.25) \\
> &= 0.0625 - 0.0625 - 0.0625 + 0.0625 = 0
> \end{aligned}
> $$

**The reverse is false: $\mathrm{Cov}(X, Y) = 0$ does not imply independence.** The lecturer's counter-example: $X$ and $Y$ with covariance 0, yet when $X$ is low $Y$ is low, when $X$ is medium $Y$ is high, and when $X$ is high $Y$ is low. Knowing $X$ clearly tells us something about $Y$, so they are **not independent**.

> [!note] Reconstructed from the slides
> The slides state the pattern in words but the table behind it is a picture whose numbers I could not read. The smallest concrete version consistent with the description: $X \in \{1, 2, 3\}$ each with probability $1/3$ and $Y = 1$ if $X = 2$, else $Y = 0$. Then $E(X) = 2$, $E(Y) = 1/3$ and $E(XY) = 2/3$, so $\mathrm{Cov}(X,Y) = E(XY) - E(X)E(Y) = 2/3 - 2/3 = 0$, yet $Y$ is a function of $X$.

![[Lec08_zero_cov_dependent.png]]

*Theory diagram (reconstructed example). The three points are symmetric around $E(X)$, so the positive and negative products cancel exactly, even though $Y$ is completely determined by $X$.*

> [!warning] Key take-away
> **Covariance captures only linear relationships.** **Independence means there is no relationship of any kind**: knowing $X$ can never inform us about $Y$ in any way. So independent implies zero covariance, but zero covariance only rules out a *linear* relationship.

---

## 9. Formula summary (Handout 8 and slides)

| Idea | Formula |
|---|---|
| Joint table | cell $= P(X = x_i, Y = y_j)$ |
| Marginals | $P(X = x_i)$ = row sum, $P(Y = y_j)$ = column sum |
| Conditional distribution | $P(X = x_i \mid Y = y_j) = \dfrac{P(X = x_i, Y = y_j)}{P(Y = y_j)}$ |
| Conditional expected value | $E(X \mid Y = y_j) = \sum_{i=1}^{n} x_i \, P(X = x_i \mid Y = y_j)$ |
| Independence (every $i, j$) | $P(X = x_i, Y = y_j) = P(X = x_i)\,P(Y = y_j)$ |
| Covariance | $\mathrm{Cov}(X,Y) = E\big((X - E(X))(Y - E(Y))\big) = \sum_i \sum_j (x_i - E(X))(y_j - E(Y))\,P(X = x_i, Y = y_j)$ |
| Variance of a sum | $\mathrm{Var}(X + Y) = \mathrm{Var}(X) + \mathrm{Var}(Y) + 2\,\mathrm{Cov}(X, Y)$ |

> [!note] Handout 8 image gaps
> Handout 8 (rendered page 1 checked) gives blank **template** tables: joint table, joint table with marginal column and row, and an empty conditional table ($X$ against $P(X = x_i \mid Y = y_j)$) to fill in. The formulas above match the handout; the worked numbers come from the slides.

## 10. Looking ahead

- **Tuesday:** review of joint distributions, marginals, conditionals, conditional expectation, independence and covariance, plus **Exercise 8**.
- **Next week:** covariance continues, then **correlation** (the plots above already show it in the titles).

> [!tip] Exam habits from this lecture
> - Always write out the joint table first and check it sums to 1.
> - Marginals: sum rows and columns. Conditionals: divide a row or column by its marginal.
> - To show **dependence**, one failing cell of $P(X = x_i, Y = y_j) = P(X = x_i)P(Y = y_j)$ is enough. To show independence, **every** cell must pass.
> - Zero covariance never proves independence.
