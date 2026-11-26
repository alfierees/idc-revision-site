---
title: "Exam Question Playbook"
subject: statistics-a
type: reference
description: "Every question type the exam asks, in slot order, with the steps to answer it and a worked model answer from a real past paper."
course: Statistics A
semester: 1
year: 1
order: 4
tags:
  - statistics-a
  - exam-prep
  - playbook
---

> **Game plan for the 20 MCQs (3 hours).** Go in order: the paper is sorted by topic. Q1 to Q8 need no table, so bank them first. For every word problem, **write the events or the variable down before any number** ("$A$ = default, $B$ = high risk"; "$X \sim G(0.2)$"). When a question says "closest value", the options are rounded: don't hunt for an arithmetic slip because nothing matches exactly. If a question uses Markov's or Chebyshev's inequality, it is outside the material: skip it.

---

## A · Unions, complements and bounds (Q1)

**Steps**
1. Write what you know as $P(A)$, $P(B)$, $P(A \cap B)$ or $P(A \cup B)$.
2. Union rule: any three of these give the fourth.
3. For "at least / at most": draw two circles and push the overlap to its extremes.

> [!example] 2023 Moed A Q1
> $A$, $B$ disjoint, $P(A) = 0.3$, $P(B) = 0.2$. $P(\bar A \cap \bar B) = 1 - P(A \cup B) = 1 - 0.5 = 0.5$. Answer (c).

> [!example] 2024 Moed A Q2
> $P(A) = 0.7$, $P(B) = 0.6$. The intersection is at least $0.7 + 0.6 - 1 = 0.3$; the union is at least the bigger event, $0.7$. Answer (b).

---

## B · A conditional probability or a 2×2 table (Q2)

**Steps**
1. Find the phrase that sets the condition: "given", "of those who", "among".
2. $P(A \mid B) = P(A \cap B)/P(B)$, or rearranged $P(A \cap B) = P(A \mid B)P(B)$.
3. Use $P(\bar A \mid B) = 1 - P(A \mid B)$ when the complement is asked.

> [!example] 2023 Moed A Q2
> $P(A \mid B) = 0.6$, $P(B) = 0.6$. $P(\bar A \cap B) = P(\bar A \mid B)P(B) = 0.4 \times 0.6 = 0.24$. Answer (b).

> [!example] Comparing two conditionals, practice exam Q2
> $P(A) = P(B) = 0.6$. Both conditionals have numerator $P(A \cap B)$ and equal denominators, so $P(A \mid B) = P(B \mid A)$. Answer (b).

---

## C · Law of total probability (Q4, sometimes Q1)

**Steps**
1. First branch: the groups that split everyone (cheese / no cheese, absence bands).
2. Second branch: the conditional rates given in the question. Turn "20% of non-lovers are **not** clever" into "80% are clever".
3. Multiply along each path, add the paths you want.
4. If the overall rate is given and a group share is missing, call it $X$ and solve.

> [!example] 2023 Moed A Q4
> 75% like cheese, 60% of those are clever; 20% of non-lovers are not clever. $P(\text{clever}) = 0.75(0.6) + 0.25(0.8) = 0.45 + 0.2 = 0.65$. Answer (c).

> [!example] Three groups, 2024 Moed B Q1
> 40% women; 30% social sciences, 40% exact, 30% liberal arts; half of social and of exact are women. Women in liberal arts: $0.4 - 0.15 - 0.2 = 0.05$. Answer (a).

---

## D · Bayes (Q3 or Q5)

**Steps**
1. Name the events. Write each number as $P(\cdot \mid \cdot)$ with the condition on the right.
2. The question asks for the reverse conditional.
3. $P(B \mid A) = P(A \mid B)P(B)/P(A)$. If $P(A)$ isn't given, build it with total probability.

> [!example] 2023 Moed A Q3
> $G$ = model says green, $R$ = stock rises. $P(G) = 0.6$, $P(R) = 0.5$, $P(G \mid R) = 0.8$. $P(R \mid G) = 0.8 \times 0.5 / 0.6 = 2/3$. Answer (c).

> [!example] Practice exam Q3
> Fraud: $P(F) = 0.03$, $P(\text{flag} \mid F) = 0.98$, $P(\text{flag}) = 0.035$. $P(F \mid \text{flag}) = 0.98 \times 0.03 / 0.035 = 0.84$. Answer (a).

---

## E · Disjoint, independent, or both? (Q5)

**Steps**
1. Get $P(A \cap B)$ (from the union rule if needed).
2. **Disjoint** iff $P(A \cap B) = 0$. **Independent** iff $P(A \cap B) = P(A)P(B)$. Test both.
3. Independence also gives products for complements: $P(\bar A \cap B) = P(\bar A)P(B)$.

> [!example] 2023 Moed A Q5
> Two independent plantings, $P(\text{two flowers}) = 0.49 = p^2$, so $p = 0.7$ and $P(\text{two shrubs}) = 0.3^2 = 0.09$. Answer (a).

> [!example] Practice exam Q5
> $P(\bar B \cap M) = 0.45$ with $P(B) = 0.1$, independent: $0.45 = 0.9\,P(M)$, $P(M) = 0.5$. Answer (d).

> [!example] 2024 Moed B Q3
> $P(A \cup B) = P(A) + P(B)$ with both positive ⇒ $P(A \cap B) = 0$ ⇒ **disjoint**, and therefore not independent. Answer (a).

---

## F · Counting (Q6)

**Steps**
1. Is the space symmetrical (equally likely outcomes)? Then $P = \lvert A \rvert / \lvert \Omega \rvert$.
2. Order? Replacement? Pick $n^k$, $(n)_k$ or $\binom{n}{k}$. Use the **same** method for $\lvert A \rvert$ and $\lvert \Omega \rvert$.
3. For "includes these specific items", fix them and count the rest.

> [!example] 2023 Moed A Q6
> 7 balls, pull 4, want red and blue both in: fix them, choose 2 of the other 5. $P = \binom{5}{2}/\binom{7}{4} = 10/35 = 2/7$. Answer (b).

> [!example] 2024 Moed B Q6
> 10 balls, draw 3, all above 5: $\binom{5}{3}/\binom{10}{3} = 10/120 = 1/12$. Answer (d).

> [!example] 2024 Moed A Q6
> 4 kids queue in ascending age: one ordering out of $4! = 24$. Answer (d).

---

## G · A distribution or CDF table (Q7)

**Steps**
1. PMF: probabilities sum to 1. CDF: $P(X = x_i)$ is the jump at $x_i$.
2. With an unknown value, use the given $E(X)$.
3. Compute $E(X)$, then $E(X^2)$, then $Var = E(X^2) - E(X)^2$.

> [!example] 2024 Moed A Q7
> CDF 0.2, 0.6, 1 at 1, 2, 3 ⇒ PMF 0.2, 0.4, 0.4 ⇒ $E(X) = 0.2 + 0.8 + 1.2 = 2.2$. Answer (c).

> [!example] Symmetric table, practice exam Q7
> Values 1, 2, 3 with $a, b, a$: symmetric so $E = 2$. $Var = a(1) + b(0) + a(1) = 2a$, and $2a < 1$ because $b > 0$, so $SD < 1$. Answer (c).

---

## H · A bet, fee or prize as a linear transformation (Q8)

**Steps**
1. Write the earnings as $Y = bX + a$ (payout minus the cost).
2. $E(Y) = bE(X) + a$, $Var(Y) = b^2Var(X)$. The cost never touches the variance.
3. If given an SD, square it before multiplying by $b^2$.

> [!example] 2023 Moed A Q8
> Pay 1, receive a third of a fair die: $Y = X/3 - 1$, $E(Y) = 3.5/3 - 1 = 1/6$. Answer (a).

> [!example] 2024 Moed A Q10
> Pay 5, receive twice a fair 12-sided die: $Y = 2X - 5$, $Var(Y) = 4 \cdot \frac{12^2 - 1}{12} = 47.67$. Answer (d).

---

## I · Name the distribution, then compute (Q9 to Q12)

**Steps**
1. Read the story: fixed tries ⇒ binomial; until the first success ⇒ geometric; finite group, no replacement ⇒ hypergeometric; rate per interval ⇒ Poisson; fair die ⇒ uniform.
2. Write $X \sim \dots$ with its parameters (rescale $\lambda$).
3. Use the table formula for $P(X = k)$, $E$ or $Var$. "At least one" ⇒ $1 - P(X = 0)$.

> [!example] Geometric SD, 2023 Moed A Q9
> Waiting for a double six: $p = 1/36$. $Var = \frac{35/36}{1/1296} = 1260$, $SD = \sqrt{1260} \approx 35.5$. Answer (a).

> [!example] Binomial, 2023 Moed A Q10
> 5 darts, bullseye $p = 0.1$, exactly 2: $\binom{5}{2}(0.1)^2(0.9)^3 = 0.0729$. Answer (d).

> [!example] Hypergeometric mean, 2023 Moed A Q11
> Aces in 7 cards: $E = 7 \times 4/52 = 7/13$. Answer (b).

> [!example] Poisson, 2024 Moed A Q12
> 5 strikes on average, exactly 4: $e^{-5}\frac{5^4}{4!} \approx 0.175$. Answer (b).

---

## J · Variance of a total of independent pieces (Q10 to Q11)

**Steps**
1. Write the total as $aX + bY$ (prizes times win indicators, or two counts).
2. Independent ⇒ $Var = a^2Var(X) + b^2Var(Y)$. Bernoulli variance is $p(1-p)$.

> [!example] 2024 Moed B Q10
> Two independent job offers, 0.3 and 0.5: $Var = 0.3(0.7) + 0.5(0.5) = 0.46$. Answer (d).

---

## K · Reading a joint table (Q13, Q15)

**Steps**
1. Add the margins first. Check everything sums to 1.
2. Conditional on $Y = y$: divide that column (or row) by its margin.
3. Conditional $E$: values times conditional probabilities.
4. "Fill in a cell": use that a row or column must hit its margin, or that independence makes each cell a product.

> [!example] 2024 Moed A Q13
> $P(X = 1 \mid Y = 2)$: the $Y = 2$ row is $0.4, 0.2$, total $0.6$, so $0.4/0.6 \approx 0.67$. Answer (d). The trap 0.33 is the other cell.

> [!example] Practice exam Q15
> A missing cell: the row must total 0.5, so it is $0.5 - 0.2 - 0.2 = 0.1$. Answer (a).

---

## L · Independent, uncorrelated, or neither? (Q14)

**Steps**
1. $Cov = 0$ means **uncorrelated**. It does **not** prove independence.
2. Independence must hold in every cell: one cell where $P(X, Y) \ne P(X)P(Y)$ kills it.
3. Typical answer: "dependent but covariance 0".

> [!example] 2023 Moed A Q14
> $E[(X - E(X))(Y - E(Y))] = 0$: necessarily uncorrelated, not necessarily independent. Answer (c).

> [!example] 2024 Moed A Q14
> $P(X=1, Y=1) = 0$ but $P(X=1)P(Y=1) = 0.4 \times 0.2 = 0.08$ ⇒ dependent. The table is symmetric around $X = 2$, so the covariance is 0. Answer (c): not independent but uncorrelated.

---

## M · Correlation (Q13 to Q15)

**Steps**
1. From covariance: $\rho = Cov/(SD_X SD_Y)$. From $Var(X+Y)$: get $Cov$ first.
2. After a linear transformation: same size, flip the sign if exactly one slope is negative.
3. Scatter plots: slope gives the sign, tightness gives the size. Points on a line ⇒ $\pm 1$.

> [!example] 2023 Moed A Q15
> $\rho(X,Y) = 0.3$ and $T = -2Y$: the 2 cancels, the minus flips the sign, $\rho(X,T) = -0.3$. Answer (d). The trap options $\pm 0.15$ divide by 2.

> [!example] 2024 Moed A Q15
> All the probability sits in the cells $(1,1)$ and $(2,2)$: every point is on $Y = X$, so $\rho = +1$ whatever $a$ and $b$ are. Answer (a): positive, necessarily 1.

---

## N · A density (Q16)

**Steps**
1. Unknown constant: total area = 1 (integrate, or use a triangle or rectangle area).
2. Probability: area over the interval. Expected value: $\int x f(x)\,dx$.
3. "Which is a CDF": starts at 0, never decreases, ends at 1.

> [!example] 2023 Moed A Q16
> A triangle on $[-a, a]$ with peak height $a$: area $\tfrac12 \cdot 2a \cdot a = a^2 = 1$, so $a = 1$. Answer (b).

> [!example] 2024 Moed A Q16
> $f(x) = 2x$ on $[0, 1]$: $E(X) = \int_0^1 2x^2\,dx = 2/3$. Answer (d).

---

## O · A percentile of a continuous uniform (Q17)

**Steps**
1. $C_q = a + q(b - a)$.
2. Sanity check: the answer lies between $a$ and $b$, and the 50th percentile is the midpoint.

> [!example] 2023 Moed A Q17
> $U(6, 10)$, 70th percentile: $6 + 0.7 \times 4 = 8.8$. Answer (d).

> [!example] 2024 Moed A Q17
> $U(2, 14)$, 75th percentile: $2 + 0.75 \times 12 = 11$. Answer (a).

---

## P · One normal value: a probability or a cut-off (Q18)

**Steps**
1. $z = (t - \mu)/\sigma$. Round to two decimals.
2. "Less than" ⇒ $\Phi(z)$. "More than" ⇒ $1 - \Phi(z)$. Negative $z$ ⇒ $1 - \Phi(\lvert z \rvert)$.
3. Cut-off from a percentage: turn it into an area to the left, find it inside the table, then $t = \mu + z\sigma$.

> [!example] 2023 Moed A Q18
> Gnomes $N(35, 10^2)$, shorter than 32: $z = -0.3$, $\Phi(-0.3) = 0.382$. Answer (a).

> [!example] Cut-off, practice exam Q18
> Kicks $N(48, 14^2)$, 85% are shorter than $X$: $z = 1.04$, $X = 48 + 1.04 \times 14 \approx 62.5$. Answer (d).

---

## Q · CLT: a sum or an average (Q19 to Q20)

**Steps**
1. Is it a **total** (weight of 40 cookies, distance of 100 steps) or an **average** (mean salary of 100 workers)?
2. Sum: $N(n\mu, n\sigma^2)$, $SD = \sqrt n\,\sigma$. Average: $N(\mu, \sigma^2/n)$, $SD = \sigma/\sqrt n$. If given a **variance**, don't square it again.
3. Standardize with that SD, read $\Phi$, complement for "more than".

> [!example] Sum, 2023 Moed B Q19
> 100 steps, $\mu = 0.85$, $\sigma = 0.12$: $S \sim N(85, 1.2^2)$. $P(S > 90)$: $z = 4.17$, essentially 0. Pick the smallest option, 0.01.

> [!example] Average with a variance given, 2024 Moed B Q19
> Nails: $\mu = 100$, **variance** 5, $n = 50$: $SD(\bar X) = \sqrt{5/50} = 0.316$. $P(\bar X > 99.5)$: $z = -1.58$, $\Phi(1.58) = 0.943$. Answer (c).

---

## R · Normal approximation of a proportion or count (Q20)

**Steps**
1. Check $np \ge 5$ and $n(1-p) \ge 5$.
2. Count: $N(np, np(1-p))$. Proportion: $N(p, p(1-p)/n)$. No continuity correction in this course.
3. Standardize and read $\Phi$.

> [!example] Practice exam Q20
> 5% of batteries are faulty, sample of 200, more than 7%: $SD = \sqrt{0.05 \times 0.95/200} = 0.0154$, $z = 0.02/0.0154 \approx 1.30$, $1 - 0.9032 \approx 0.097$. Answer (b).

> [!example] Count, 2024 Moed A Q20
> 10 or fewer sixes in 50 dice: $X \approx N(8.33, 6.94)$, $SD = 2.635$, $z = 0.63$, $\Phi(0.63) = 0.7357 \approx 0.74$. Answer (d).
