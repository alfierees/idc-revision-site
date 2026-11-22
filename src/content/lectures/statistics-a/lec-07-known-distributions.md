---
title: "Lecture 7: Known Distributions (Uniform, Bernoulli, Binomial, Geometric, Hypergeometric, Poisson)"
semester: 1
year: 1
course: "Statistics A"
lecture: 7
tags:
  - statistics-a
  - random-variable
  - distribution
  - uniform-distribution
  - bernoulli-distribution
  - binomial-distribution
  - geometric-distribution
  - hypergeometric-distribution
  - poisson-distribution
subject: statistics-a
in_scope: true
---

# Lecture 7: Known Distributions

> Part of: [[Statistics A]]
> Key concepts: [[Random Variable]], [[Distribution]], [[Uniform Distribution]], [[Bernoulli Distribution]], [[Binomial Distribution]], [[Geometric Distribution]], [[Hypergeometric Distribution]], [[Poisson Distribution]]

Instructor: Asael Sklar. Formula sheet: Handout 7 (geometric, hypergeometric and Poisson, merged below). The class reviews the uniform, Bernoulli and binomial distributions, re-works Exercise 6 questions 3 and 4, then introduces three new distribution shapes. It ends with a "which distribution?" game. Counting in the hypergeometric section relies on [[Lec_04-Symmetrical Probability Spaces and Combinatorics]].

## 1. Review: what a distribution is

A [[Random Variable]] is a variable whose value is determined by the result of a random experiment. It is described by a **distribution**, which specifies two things:

- **all possible values** of the random variable;
- **the probability of each possible value** (the PMF).

A distribution can be written as a **distribution table**, or, for many cases, as an instance of a **known distribution shape**. The notation has three parts:

$$
X \sim U(a,b)
$$

- $X$ is the random variable;
- $U$ is the **distribution shape** (U for Uniform);
- $a, b$ are the **distribution parameters** (here the minimum and maximum).

> [!tip] What makes a shape meaningful
> A distribution shape must tell us the **possible values** and the **PMF** from its parameters alone. Once we recognise a variable as a known shape (or a linear transformation of one), we get the possible values, PMF, expected value and variance for free.

The lecture's opening table example is a variable with values $x_1=1,\dots,x_{10}=10$ and $P(X=x_i)=0.1$ for every $i$. That is the uniform shape $U(1,10)$.

## 2. Uniform distribution

All values from $a$ to $b$ (integers) are **equally likely**.

$$
X \sim U(a,b), \qquad \text{values: } a, a+1, a+2, \dots, b
$$

$$
P(X=x_i) = \frac{1}{b-a+1}
$$

$$
E[X] = \frac{b+a}{2}, \qquad Var[X] = \frac{(b-a+1)^2 - 1}{12}
$$

> [!example] Fair die
> A fair 6-sided die is $U(1,6)$, with $E[X]=3.5$ and $Var[X]=\frac{36-1}{12}=\frac{35}{12}$. (Worked out here as a check on the formulas; the slides use a 20-sided die below.)

## 3. Bernoulli distribution

Only **two possible values: 0 and 1**. The parameter $p$ is the probability of success (the value 1).

$$
X \sim \text{Bernoulli}(p), \qquad P(X=1)=p, \quad P(X=0)=1-p
$$

$$
E[X] = p, \qquad Var[X] = p(1-p)
$$

## 4. Exercise 6, questions 3 and 4 (recap)

Both questions apply the uniform and Bernoulli formulas together with the **linear transformation rules** for expected value and variance: $E[aX+b]=aE[X]+b$ and $Var[aX+b]=a^2 Var[X]$.

> [!example] Q3: John's 20-sided die bet
> You pay John 10 shekels; he rolls a fair 20-sided die and pays you as many shekels as the number shown. Let $X$ be the number on the die and $Y$ the earnings.
>
> - $X \sim U(1,20)$ and $Y = X - 10$.
> - $E[X] = \frac{20+1}{2} = 10.5$, so $E[Y] = E[X]-10 = 0.5$.
> - $Var[X] = \frac{(20-1+1)^2-1}{12} = \frac{399}{12} = 33.25$, and subtracting a constant does not change the variance, so $Var[Y] = 33.25$.

> [!example] Q4: Jenny's 6-sided die bet
> You pay Jenny 2 shekels; she rolls a fair 6-sided die. If it shows 6 she pays you 20 shekels, otherwise nothing. Let $X = 1$ if the die is 6 and $0$ otherwise, and $Y$ the earnings.
>
> - $X \sim \text{Bernoulli}(\tfrac16)$ and $Y = 20X - 2$.
> - $E[X] = \tfrac16$, so $E[Y] = 20\cdot\tfrac16 - 2 = 3\tfrac13 - 2 = 1\tfrac13$.
> - $Var[X] = \tfrac16\cdot\tfrac56 = \tfrac{5}{36}$, so $Var[Y] = 20^2 \cdot \tfrac{5}{36} = 400\cdot\tfrac5{36} \approx 55.56$.

## 5. Binomial distribution

$X$ is the **number of successes in $n$ independent Bernoulli trials**, each with the same success probability $p$.

$$
X \sim B(n,p)
$$

- $n$: number of Bernoulli variables (trials);
- $p$: probability of success for each one;
- possible values: $0, 1, \dots, n$.

$$
P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}
$$

$$
E[X] = n p, \qquad Var[X] = n p (1-p)
$$

> [!note] Reconstructed from the slides
> The slides show these three formulas as a build-up ("what is $P(X=k)$?", "what is $E[X]$?"). The intuition, added here, is that $\binom{n}{k}$ counts which $k$ trials succeed, and $E[X]$ and $Var[X]$ are $n$ times the Bernoulli mean and variance because the trials are independent.

**What binomials look like.** The slides link an interactive applet. Two screenshots from it:

![[Lec07_data_binomial_n5_p02.png]]

*$B(5, 0.2)$: skewed right, because success is unlikely.*

![[Lec07_data_binomial_32_half.png]]

*$B(32, 0.5)$: symmetric and bell-shaped around $np = 16$. The red bars ($0 \le X \le 21$) add up to 0.975, so the tail $P(X>21)$ is about 2.5%.*

### Why known distributions are useful: Project Eye-opener

> [!example] Can formerly blind children identify facial expressions?
> Children who had been blind were shown 32 pairs of faces and asked "which one is smiling?". **How many correct answers would suggest the child is probably not guessing?**
>
> 1. Let $X$ be the number of correct responses. If the child **guesses randomly**, each of the 32 trials is an independent success with probability 0.5, so $X \sim B(32, 0.5)$.
> 2. Using this distribution, $P(X>21) \approx 2.5\%$ (checked here: 0.0251).
> 3. By **hypothesis testing logic** (next semester): if a child got more than 21 correct, guessing is an unlikely explanation, so they can probably distinguish facial expressions.

The same logic applies to evaluating forecasters, employees, investors and so on: ask how likely a track record is under pure luck.

### Which distribution game (warm-up)

A multiple choice test has 20 questions, each with 4 answers (one correct), in randomised order.

| Variable | Distribution | Reasoning |
|---|---|---|
| Number of the correct answer on question 1 (1, 2, 3 or 4) | $X \sim U(1,4)$ | four equally likely values |
| A guessing student is correct on question 1 (yes or no) | $X \sim \text{Bernoulli}(0.25)$ | one trial, $p=0.25$ |
| Number of correct answers for a student guessing all 20 | $X \sim B(20, 0.25)$, $E[X]=20\cdot0.25=5$ | 20 independent trials |
| Rain days in a year, if it rains on any day with probability 0.1 | $X \sim B(365, 0.1)$, $E[X]=365\cdot 0.1 = 36.5$ | 365 trials |
| 1 if it rains tomorrow, 0 if not | $X \sim \text{Bernoulli}(0.1)$, $Var[X] = 0.1\cdot 0.9 = 0.09$ | one trial |

## 6. Geometric distribution

### Motivation

> [!example] Brian and the ten-sided die
> Brian rolls a ten-sided die until he rolls a 10. $X$ is the number of rolls.
>
> - $P(X=1) = 0.1$
> - $P(X=2) = 0.9 \cdot 0.1 = 0.09$
> - $P(X=3) = 0.9^2 \cdot 0.1 = 0.081$
> - $P(X=4) = 0.9^3 \cdot 0.1 = 0.0729$
> - in general, $P(X=k) = 0.9^{k-1} \cdot 0.1$

### Definition (Handout 7)

When each try has the **same probability of success** $p$ and tries are independent, the number of tries needed for the **first success** (counting the successful try) is geometrically distributed.

$$
X \sim G(p), \qquad \text{values: } 1, 2, 3, \dots
$$

$$
P(X=k) = (1-p)^{k-1} \cdot p
$$

The factor $(1-p)^{k-1}$ is the probability of $k-1$ failures and $p$ is the probability of the success on try $k$. There is no upper limit on $k$.

**Corollary (the tail).** The probability that more than $k$ tries are needed is the probability that the first $k$ tries all fail:

$$
P(X>k) = (1-p)^k
$$

$$
E[X] = \frac{1}{p}, \qquad Var[X] = \frac{1-p}{p^2}
$$

> [!tip] Tip
> Intuition for $E[X]=1/p$
>
> How many rolls of a fair die until you roll a 1? Success probability is $\tfrac16$, and the expected wait is $\dfrac{1}{1/6} = 6$ rolls.

### Examples

> [!example] Tom and the public sector jobs
> Tom applies to one job at a time until he lands one; each application succeeds with probability 0.2. $X$ is the total number of applications, so $X \sim G(0.2)$.
>
> - **At least 3 applications**: this is $P(X>2)$, the probability that Tom fails on the first two tries, so $P(X>2) = 0.8^2 = 0.64$. (Same result by summing: $1 - 0.2 - 0.16 = 0.64$.)
> - **Expected number of applications**: $E[X] = \frac{1}{0.2} = 5$.
> - **Variance**: $Var[X] = \frac{1-0.2}{0.2^2} = 20$.

> [!example] No six in four rolls
> What is the probability of rolling a fair die four times and not getting a 6? With $X \sim G(\tfrac16)$ the number of rolls until the first 6, we need $P(X>4) = \left(\tfrac56\right)^4 \approx 0.482$.

![[Lec07_three_new_distributions.png]]

*Left: $G(0.2)$ is always highest at $k=1$ and decays geometrically. (Drawn for this note; the slides use an interactive applet.)*

### Binomial vs geometric

| | Binomial $B(n,p)$ | Geometric $G(p)$ |
|---|---|---|
| Trials | independent Bernoulli | independent Bernoulli |
| Success probability | same $p$ each try | same $p$ each try |
| Meaning of $X$ | **number of successes** out of $n$ tries | **number of tries** until the first success |
| Possible values | $0,\dots,n$ | $1,2,\dots$ (unbounded) |

## 7. Hypergeometric distribution

### Motivation

> [!example] Bag of balls
> A bag holds 10 balls: 6 red and 4 blue. We draw 3. What is the distribution of the number of red balls drawn?

This is a **combinatorics problem**. The slides show the flowchart from [[Lec_04-Symmetrical Probability Spaces and Combinatorics]]: order does not matter and there is no replacement, so we are in **combinations without replacement**.

- Total number of different draws: $\binom{10}{3} = \frac{10!}{3!\,7!} = 120$.
- Draws with exactly $l$ red balls: **step 1** choose $l$ of the 6 red balls, **step 2** choose $3-l$ of the 4 blue balls, giving $\binom{6}{l}\binom{4}{3-l}$ by the multiplication principle.

$$
P(X=l) = \frac{\binom{6}{l}\binom{4}{3-l}}{\binom{10}{3}}
$$

> [!note] Reconstructed from the slides
> The slides stop at the general formula; the table below evaluates it for each $l$ (checked to sum to 1).

| $l$ | $\binom{6}{l}\binom{4}{3-l}$ | $P(X=l)$ |
|---|---|---|
| 0 | $1 \cdot 4 = 4$ | $4/120 \approx 0.033$ |
| 1 | $6 \cdot 6 = 36$ | $36/120 = 0.300$ |
| 2 | $15 \cdot 4 = 60$ | $60/120 = 0.500$ |
| 3 | $20 \cdot 1 = 20$ | $20/120 \approx 0.167$ |

### Definition (Handout 7)

$X$ is the number of successes in a **sample of size $n$** drawn **without replacement** from a **population of size $N$** that contains $D$ successes in total.

$$
X \sim HG(N, D, n)
$$

- $N$: size of the population;
- $D$: number of members of the population that are successes;
- $n$: sample size.

$$
P(X=k) = \frac{\binom{D}{k}\binom{N-D}{n-k}}{\binom{N}{n}}
$$

$$
E[X] = n \cdot \frac{D}{N}
$$

$$
Var[X] = \frac{N-n}{N-1} \cdot n \cdot \frac{D}{N}\left(1-\frac{D}{N}\right)
$$

The conventional letter for the number of successes is $k$ (the ball example used $l$). The bag example is $X \sim HG(10, 6, 3)$.

### Example: the committee

> [!example] Class of 50, 40 male, committee of 5
> $X \sim HG(50, 40, 5)$ is the number of males on the committee.
>
> - **Exactly 4 male**: $P(X=4) = \dfrac{\binom{40}{4}\binom{10}{1}}{\binom{50}{5}} \approx 0.431$.
> - **Expected value**: $E[X] = 5 \cdot \frac{40}{50} = 4$.
> - **Variance**: $Var[X] = \frac{50-5}{50-1} \cdot 5 \cdot \frac{40}{50}\left(1-\frac{40}{50}\right) = \frac{45}{49}\cdot 0.8 \approx 0.735$.

### Hypergeometric vs binomial

| | Binomial | Hypergeometric |
|---|---|---|
| Meaning of $X$ | number of successes out of $n$ tries | number of successes out of $n$ tries |
| Population | infinite | **finite** |
| Sampling | **with** replacement | **without** replacement |
| Success probability | $p$ | about $p \approx D/N$ on the first try |

- **Expected values** line up: binomial $n p$, hypergeometric $n \frac{D}{N}$, with $p \approx \frac{D}{N}$.
- **Variances**: binomial $n p (1-p)$; hypergeometric the same expression times the factor $\frac{N-n}{N-1}$, which is below 1. **When the population is small there is less possible variation**, because each draw changes what is left. As $N$ grows, the factor tends to 1 and the two distributions become almost the same.

![[Lec07_three_new_distributions.png]]

*Middle panel: $HG(10,6,3)$ from the bag example. The slides also show an applet with $HG(100,400,200)$ in its own notation ($\mu=50$, $\sigma^2\approx18.8$), a symmetric bell shape.*

## 8. Poisson distribution

### Motivation

> [!example] The professor's colds
> A statistics professor catches colds at a rate of 4 per year. $X$ is the number of colds in a given year. What is the distribution of $X$?

### Definition (Handout 7)

The distribution of the **number of independent events in a fixed interval**. Intervals can be a day, a year, 5 minutes, 1000 lines of code, and so on.

$$
X \sim P(\lambda), \qquad \lambda = \text{rate: number of events per interval}
$$

$$
P(X=k) = e^{-\lambda} \cdot \frac{\lambda^k}{k!}, \qquad k = 0, 1, 2, \dots
$$

$$
E[X] = \lambda, \qquad Var[X] = \lambda
$$

> [!tip] Tip
> Intuition for $E[X]=\lambda$
>
> If the professor catches 4 colds a year on average, we expect 4 in a given year. For a Poisson variable the **mean and variance are equal**.

### Changing the interval

$\lambda$ **changes proportionally to the interval size**: a twice-as-long interval has twice the rate, a half-as-long interval has half the rate.

> [!example] Colds in a quarter of a year
> Rate 4 per year; for $\tfrac14$ of a year, $\lambda = 4 \cdot \tfrac14 = 1$, so $X \sim P(1)$ and $Var[X] = \lambda = 1$. (The slide labels this interval a "semester" but uses the factor $\tfrac14$, which is a quarter of a year.)

> [!example] Example
> Probabilities for $X \sim P(4)$
>
> - Exactly 3 colds: $P(X=3) = e^{-4}\frac{4^3}{3!} \approx 0.195$. (Value computed here; the slide leaves it to the formula.)
> - No colds: $P(X=0) = e^{-4}\frac{4^0}{0!} \approx 0.018$.

The rightmost panel of the figure above is $P(4)$. The slides' applet shows $P(100)$, which is nearly symmetric with $\sigma=10$: for large $\lambda$ the shape is bell-like.

## 9. "Which distribution?" game

Each scenario is matched to a shape and its parameters.

| Scenario | Distribution | Why |
|---|---|---|
| 300 employees, 200 Israelis; 25 chosen randomly; $X$ = Israelis chosen | $HG(300,200,25)$ | finite population, no replacement |
| Football match averages 3.5 goals; $X$ = goals in a match | $P(3.5)$ | events in a fixed interval |
| Scratch ticket wins with probability 0.05; Gaby buys until she wins | $G(0.05)$ | tries until first success |
| Ayalon river floods twice per winter on average; $X$ = floods in a year | $P(2)$ | rate per interval |
| 100 employees sent on a retreat, 5% cancel; $X$ = number who go | $B(100, 0.95)$ | 100 trials, success = going |
| Doorman: 15 people per hour; $X$ = people arriving in a 5-minute break | $P(15 \cdot \tfrac{1}{12}) = P(1.25)$ | rate scaled to a 5-minute interval |
| HR: 25 women and 30 men, 10 fired at random; $X$ = women fired | $HG(55, 25, 10)$ | fixed population, no replacement |
| Fair 20-sided die; $X=1$ if the roll is 5 or lower | Bernoulli$(\tfrac14)$ | one trial, $p=\tfrac{5}{20}$ |
| Fair 20-sided die; $X$ = the number rolled | $U(1,20)$ | equally likely values |
| Roll a 20-sided die until a 20; $X$ = number of rolls | $G(\tfrac{1}{20})$ | tries until first success |
| Roll a 20-sided die 30 times; $X$ = number of 1s | $B(30, \tfrac{1}{20})$ | 30 trials |

> [!note] Reconstructed from the slides
> In the HR case the slide gives the setup (women are 45% of staff but 60% of those fired, and you must show it is not discrimination) and the answer $HG(55,25,10)$. The 10 fired (6 women, 4 men) is read from the scenario. The next step, how likely 6 or more women is, is hypothesis-testing logic for next semester.

## 10. Summary table

| Distribution | Notation | PMF | $E[X]$ | $Var[X]$ |
|---|---|---|---|---|
| Uniform | $U(a,b)$ | $\frac{1}{b-a+1}$ | $\frac{a+b}{2}$ | $\frac{(b-a+1)^2-1}{12}$ |
| Bernoulli | $\text{Bernoulli}(p)$ | $P(1)=p$, $P(0)=1-p$ | $p$ | $p(1-p)$ |
| Binomial | $B(n,p)$ | $\binom{n}{k}p^k(1-p)^{n-k}$ | $np$ | $np(1-p)$ |
| Geometric | $G(p)$ | $(1-p)^{k-1}p$ | $\frac1p$ | $\frac{1-p}{p^2}$ |
| Hypergeometric | $HG(N,D,n)$ | $\frac{\binom Dk\binom{N-D}{n-k}}{\binom Nn}$ | $n\frac DN$ | $\frac{N-n}{N-1}n\frac DN\left(1-\frac DN\right)$ |
| Poisson | $P(\lambda)$ | $e^{-\lambda}\frac{\lambda^k}{k!}$ | $\lambda$ | $\lambda$ |

## 11. Next steps

On Tuesday: review of the uniform, Bernoulli and binomial distributions and Exercise 7. Next week: **joint distributions**, distributions of more than one variable.
