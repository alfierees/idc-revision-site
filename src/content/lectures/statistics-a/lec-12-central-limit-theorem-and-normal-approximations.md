---
title: "Lecture 12: Central Limit Theorem and Normal Approximations"
semester: 1
year: 1
course: "Statistics A"
lecture: 12
tags:
  - statistics-a
  - normal-distribution
  - standardization
  - sample
  - iid
  - central-limit-theorem
  - law-of-large-numbers
  - normal-approximation-of-binomial
  - sample-proportion
  - expected-value
  - variance
subject: statistics-a
in_scope: true
---

# Lecture 12: Central Limit Theorem and Normal Approximations

> Part of: [[Statistics A]]
> Key concepts: [[Normal Distribution]], [[Standardization]], [[Standard Normal Distribution]], [[Percentile]], [[Sample]], [[Independent and Identically Distributed]], [[Central Limit Theorem]], [[Sample Average]], [[Law of Large Numbers]], [[Normal Approximation of the Binomial]], [[Sample Proportion]], [[Expected Value]], [[Variance]], [[Binomial Distribution]]

Instructor: Asael Sklar. The lecture reviews the normal distribution and Exercise 11 (questions 2 and 3), then asks a new question: if we cannot ask everyone, which **single number** should we report from a group of people, and how far can we trust it? The answer is the **average of a random sample**, and the [[Central Limit Theorem]] tells us its distribution. The normal tools come from the previous lecture on the normal distribution (standardization and the Z table); the expected value and variance rules are from [[Lec_05-Random Variables, Expected Value and Variance]] and [[Lec_06-Expected Value, Variance and Known Distributions]]; the binomial is from [[Lec_07-Known Distributions]]. The handout for this class (Handout 12) is merged into sections 4 to 7 below.

## 1. The normal distribution: a quick review

The normal density is

$$
f(x)=\frac{1}{\sqrt{2\pi\sigma^{2}}}\,e^{-\frac{(x-\mu)^{2}}{2\sigma^{2}}}
$$

with $E(X)=\mu$ and $Var(X)=\sigma^{2}$, written $X\sim N(\mu,\sigma^{2})$.

**Why this distribution?** The slide answers "this is the distribution we normally get". It shows a New York Times (2015) histogram of the calories in real Chipotle meals: a single hump, roughly symmetric, with small bumps from sides such as chips and guacamole, and about 2 percent of meals above the 2,000 calorie recommended allowance.

![[Lec12_data_chipotle_calories.png]]

> Real data crop from the slides (NYT, 2015). Many real measurements pile up in a bell shape. Section 4 explains why.

**The problem.** The density is known, but its cumulative distribution function has no formula we can evaluate by hand. The workaround is to read $\Phi$ from the Z table.

> [!tip] The CDF workaround (three steps)
> To find $P(X<t)$ for $X\sim N(\mu,\sigma^{2})$:
> 1. Standardize $t$: $Z(t)=\dfrac{t-\mu}{\sigma}$.
> 2. Find $\Phi(Z)$ in the Z table.
> 3. $P(X<t)=P\!\left(Z<\dfrac{t-\mu}{\sigma}\right)=\Phi(Z(t))$.

**Example.** $X\sim N(1,3^{2})$. Find $P(X<2)$.

$$
Z(2)=\frac{2-1}{3}=\frac{1}{3}=0.33,\qquad \Phi(0.33)=0.6293
$$

So $P(X<2)=0.6293$.

## 2. Exercise 11, question 2: heights

Student heights in a college are normal with $E(X)=175$ cm and standard deviation $15$, so $X\sim N(175,15^{2})$.

**(a) What percent are taller than 195 cm?** Use the complement: $P(X>195)=1-P(X\le195)$.

$$
Z(195)=\frac{195-175}{15}=\frac{20}{15}=1.33,\qquad \Phi(1.33)=0.9082
$$

$$
P(X>195)=1-0.9082=0.0918
$$

About **9.18 percent**.

**(b) How many students are in the college if 300 are taller than 190 cm?**

$$
Z(190)=\frac{190-175}{15}=1,\qquad \Phi(1)=0.8413,\qquad P(X>190)=1-0.8413=0.1587
$$

The 300 tall students are a 0.1587 share of all students:

$$
\frac{300}{\text{Students}}=0.1587\;\Rightarrow\;\text{Students}=\frac{300}{0.1587}=1890.359
$$

There are about **1,890 students**.

## 3. Exercise 11, question 3: finding a cutoff from a probability

IQ scores are normal with $E(X)=100$ and standard deviation $15$, so $X\sim N(100,15^{2})$. Here the probability is given and we need the score, so we read the Z table **backwards** (find the $Z$ whose $\Phi$ matches) and then un-standardize. Write $C_q$ for the score that a share $q$ of scores lie below, so $\Phi(Z(C_q))=q$.

| Question | Set up | $Z$ from the table | Solve for the score |
| --- | --- | --- | --- |
| 75 percent of scores are lower than? | $\Phi(Z(C_{0.75}))=0.75$ | $0.67$ | $0.67\cdot15=10.05$, so $C_{0.75}=110.05$ |
| 1/4 of scores are higher than? | same event as above, since 1/4 above means 75 percent below | $0.67$ | $110.05$ |
| 0.14 of scores are lower than? | $\Phi(Z(C_{0.14}))=0.14$ | $-1.08$ | $-1.08\cdot15=-16.2$, so $C_{0.14}=83.8$ |
| 80 percent of scores are higher than? | 80 percent above means 20 percent below: $\Phi(Z(C_{0.2}))=0.2$ | $-0.84$ | $-0.84\cdot15=-12.6$, so $C_{0.2}=87.4$ |

The solving step is always

$$
Z(C_q)=\frac{C_q-100}{15}\;\Rightarrow\;C_q=100+15\,Z(C_q).
$$

> [!warning] Convert "higher than" into "lower than" first
> The Z table only gives probabilities **below** a value. For "80 percent are higher than $C$", rewrite it as "20 percent are lower than $C$", then use $\Phi=0.2$. The cutoff comes out below the mean (87.4), which is a good sanity check.

## 4. From one person to a sample

Suppose we want to know how much people are willing to pay for a new phone.

- Asking **one** person tells us little.
- Asking **a group** is better, but only if the group is picked **at random**.

Call $X_1$ the answer of the first person, $X_2$ the second, up to $X_n$ the $n$th. What can we say about them?

- They come from the same population, so they have the **same distribution**.
- Random selection makes the answers **independent**.

So $X_1,X_2,\dots,X_n$ are **independent and identically distributed (i.i.d.)**.

> [!note] Definitions from the slides
> - **Sample**: $n$ observations from the same population distribution. Each observation is $X_i$ (the first is $X_1$, for example the answer of the first person surveyed).
> - **Population**: the distribution from which we draw the observations.
> - **Example.** To learn students' preferred temperature, ask 5 students. The **population** is all students; the **sample** is the 5 students asked.

Now we need **one number** as the answer to "how much are people willing to pay". The natural choice is the **average**

$$
\bar{X}=\frac{\sum_{i=1}^{n}X_i}{n}.
$$

The slides pose "Why?" here and answer it in the next sections: because the distribution of the sum, and hence the average, is known.

## 5. The Central Limit Theorem

The theorem is attributed on the slides to Pierre-Simon Laplace (1749 to 1827), a marquis and polymath. In words: **the shape of the distribution of a sum of many random variables is normal**, and the more variables are summed, the closer it gets.

![[Lec12_clt_sums.png]]

> Theory diagram (simulation, not from the slides). The starting variable is strongly skewed; its sum is skewed for small $n$ and nearly a normal bell by $n=30$. The slides use an online sampling-distribution simulator for the same effect.

### 5.1 Which normal distribution? The sum

Let $X_1,\dots,X_n$ be i.i.d. with $E(X_i)=\mu$ and $Var(X_i)=\sigma^{2}$, and let $S=\sum_{i=1}^{n}X_i$.

**Expected value** (linearity):

$$
E(S)=E(X_1)+E(X_2)+\dots+E(X_n)=\underbrace{\mu+\mu+\dots+\mu}_{n\text{ times}}=n\mu
$$

**Variance** (this step uses **independence**, so the variance of the sum is the sum of the variances):

$$
Var(S)=Var(X_1)+\dots+Var(X_n)=\underbrace{\sigma^{2}+\dots+\sigma^{2}}_{n\text{ times}}=n\sigma^{2}
$$

> [!important] CLT for the sum
> $$
> S\sim N\!\left(n\mu,\;n\sigma^{2}\right)\quad\text{for large enough }n
> $$
> Rule of thumb: $n\ge30$.

### 5.2 Example: the elevator

A person's weight has $E(X_i)=80$ and standard deviation $20$. An elevator holds at most 30 people and at most 2,600 kg. What is the probability that 30 randomly chosen people exceed the limit?

Let $X_i$ be the weight of person $i$, so $E(X_i)=80$, $Var(X_i)=20^{2}$, and $S=\sum_{i=1}^{30}X_i$.

$$
E(S)=30\cdot80=2400,\qquad Var(S)=30\cdot20^{2}=30\cdot400=12000
$$

$$
S\sim N\!\left(2400,\;(\sqrt{12000})^{2}\right)=N\!\left(2400,\;109.54^{2}\right)
$$

$$
P(S>2600)=1-P(S\le2600),\qquad Z(2600)=\frac{2600-2400}{109.54}=1.83
$$

$$
\Phi(1.83)=0.9664\;\Rightarrow\;P(S>2600)=1-0.9664=0.0336
$$

About a **3.4 percent** chance the elevator is overloaded.

### 5.3 The distribution of the average

Since $\bar{X}=S/n$, apply the expected value and variance rules to a constant multiple. Variance picks up the **square** of the constant.

$$
E(\bar{X})=E\!\left(\frac{S}{n}\right)=\frac{E(S)}{n}=\frac{n\mu}{n}=\mu
$$

$$
Var(\bar{X})=Var\!\left(\frac{S}{n}\right)=\frac{Var(S)}{n^{2}}=\frac{n\sigma^{2}}{n^{2}}=\frac{\sigma^{2}}{n}
$$

> [!important] CLT for the average
> $$
> \bar{X}\sim N\!\left(\mu,\;\frac{\sigma^{2}}{n}\right)\quad\text{as }n\text{ increases}
> $$
> The average is centred on the population mean, and its variance **shrinks as $n$ grows**. Its standard deviation is $\dfrac{\sigma}{\sqrt{n}}$.

### 5.4 Example: household income

US household income has $E(X)=100{,}000$ and standard deviation $20{,}000$. We average the incomes of 100 randomly selected households. What is the probability the average is below 105,000?

Individually, $X\sim N(100000,\,20000^{2})$. For the average:

$$
\bar{X}\sim N\!\left(100000,\;\frac{20000^{2}}{100}\right)=N\!\left(100000,\;\left(\frac{20000}{10}\right)^{2}\right)=N\!\left(100000,\;2000^{2}\right)
$$

$$
Z(105000)=\frac{105000-100000}{2000}=\frac{5000}{2000}=2.5,\qquad \Phi(2.5)=0.9938
$$

So $P(\bar{X}<105000)=0.9938$. The average of 100 households is almost certainly within a few thousand dollars of 100,000, even though single households vary by 20,000.

## 6. The Law of Large Numbers

The slide asks what happens to the variance of the average as $n$ increases: it **decreases**. That gives the **law of large numbers**:

> [!important] Law of large numbers
> The average of a sample is more likely to be close to the population's expected value the larger the sample is.
> $$
> \bar{X}\to\mu\quad\text{as }n\to\infty
> $$

**Proof (from the slides).** By the CLT, $\bar{X}\sim N\!\left(\mu,\frac{\sigma^{2}}{n}\right)$. As $n\to\infty$, $\dfrac{\sigma^{2}}{n}\to0$, so the distribution of $\bar{X}$ collapses onto $\mu$.

![[Lec12_lln_narrowing.png]]

> Theory diagram. The slides show the density of $\bar{X}$ for $N=30$, $300$, $3000$ and $10000$, each narrower than the last around $\mu$. The curves here are drawn from $N(\mu,\sigma^{2}/n)$ with $\sigma=1$.

### 6.1 Example: average height, n = 10 versus n = 100

Height is normal, $X\sim N(170,15^{2})$ cm.

**Sample of 10.** $\bar{X}\sim N\!\left(170,\frac{15^{2}}{10}\right)=N(170,22.5)=N(170,4.74^{2})$.

$$
P(\bar{X}_{n=10}>175)=1-P(\bar{X}_{n=10}<175),\qquad Z(175)=\frac{175-170}{4.74}=1.05
$$

$$
\Phi(1.05)=0.85\;\Rightarrow\;P=1-0.85=0.15
$$

**Sample of 100.** $\bar{X}\sim N\!\left(170,\frac{15^{2}}{100}\right)=N(170,2.25)=N(170,1.5^{2})$.

$$
Z(175)=\frac{175-170}{1.5}=3.33,\qquad \Phi(3.33)=0.9996\;\Rightarrow\;P=1-0.9996=0.0004
$$

| Sample size | Standard deviation of $\bar{X}$ | $P(\bar{X}>175)$ |
| --- | --- | --- |
| $n=10$ | $4.74$ | $0.15$ |
| $n=100$ | $1.5$ | $0.0004$ |

![[Lec12_height_average_n10_n100.png]]

> Theory diagram. A bigger sample makes the average more precise, so a 5 cm gap becomes very unlikely. The slide's closing remark: the error variance of a single response is $\sigma^{2}$, while for the class average it is $\sigma^{2}/n$.

> [!note] A small slide slip
> On the $n=100$ build the slide writes the complement as $1-P(\bar{X}_{n=10}<175)$; the subscript should read $n=100$. The numbers ($1.5$, $3.33$, $0.9996$, $0.0004$) are all for $n=100$.

## 7. Normal approximation of the binomial

A binomial probability such as $P(X\le74)$ for $X\sim B(100,0.8)$ means adding 75 terms:

$$
P(X\le74)=P(X=0)+\dots+P(X=74),\qquad P(X=k)=\binom{n}{k}p^{k}(1-p)^{n-k}
$$

This is where Abraham de Moivre (1667 to 1754, a gambling consultant) comes in. His approximation: for $X\sim B(n,p)$ we know $E(X)=np$ and $Var(X)=np(1-p)$, and

$$
X\sim B(n,p)\;\Longrightarrow\;X\approx N\!\big(np,\;np(1-p)\big)\quad\text{as }n\text{ increases}
$$

(Handout 12 writes this as $X\sim N(np,\,np(1-p))$ "as $n$ increases".) This is the CLT again, because a binomial is a sum of $n$ independent 0/1 trials.

> [!tip] Tip
> What is a large enough $n$? (rule of thumb)
>
> Use the approximation if **both**
> $$
> np\ge5\qquad\text{and}\qquad n(1-p)\ge5.
> $$

**Example.** 80 percent of people are right-handed. In a sample of 100, what is the probability **at most 74** are right-handed? Let $X$ be the number of right-handed people, so $X\sim B(100,0.8)$.

*Can we use the approximation?* $np=100\cdot0.8=80\ge5$ and $n(1-p)=100\cdot0.2=20\ge5$. Yes.

$$
X\approx N(80,\,100\cdot0.8\cdot0.2)=N(80,16)=N(80,4^{2})
$$

$$
Z(74)=\frac{74-80}{4}=-\frac{6}{4}=-1.5,\qquad \Phi(-1.5)=0.0668
$$

So $P(X\le74)\cong0.0668$.

![[Lec12_binomial_normal_approx.png]]

> Theory diagram. The bars are the exact binomial probabilities; the black curve is the normal approximation; the shaded area is $P(X\le74)$.

> [!note] Added by me, not on the slides
> The exact binomial value is $P(X\le74)\approx0.0875$, a bit above the normal answer 0.0668. The lecture uses the plain approximation with no continuity correction, so the approximation is rough here even though both rule-of-thumb conditions hold. Exam answers should follow the lecture's method.

## 8. Normal approximation of a proportion

A **proportion** is the fraction of the $n$ observations that show a characteristic (the successes):

$$
\hat{P}=\frac{\text{number of successes}}{n}=\frac{X}{n}
$$

Because $\hat{P}$ is just the binomial count divided by $n$, we get its distribution the same way as for the average.

$$
E(\hat{P})=\frac{E(X)}{n}=\frac{np}{n}=p
$$

$$
Var(\hat{P})=\frac{Var(X)}{n^{2}}=\frac{np(1-p)}{n^{2}}=\frac{p(1-p)}{n}
$$

> [!important] Approximation for a proportion
> $$
> \hat{P}\sim N\!\left(p,\;\frac{p(1-p)}{n}\right)\quad\text{as }n\text{ increases}
> $$
> Same rule of thumb: $np\ge5$ and $n(1-p)\ge5$.

**Example A (same right-handed problem, now as a proportion).** $P(\hat{P}\le0.74)$ with $p=0.8$, $n=100$. From section 7, $E(X)=80$, $Var(X)=4^{2}$:

$$
E(\hat{P})=\frac{80}{100}=0.8,\qquad Var(\hat{P})=\frac{4^{2}}{100^{2}}=0.0016=0.04^{2}
$$

$$
Z(0.74)=\frac{0.74-0.8}{0.04}=-\frac{0.06}{0.04}=-1.5,\qquad \Phi(-1.5)=0.0668
$$

The answer, $0.0668$, **matches** the count version, as it must: "at most 74 of 100" and "at most 74 percent" are the same event.

**Example B (women in a program).** 65 percent of students are women. In a sample of 40 students, what is the probability that less than 60 percent are women?

*Check:* $40\cdot0.65=26\ge5$ and $40\cdot0.35=14\ge5$. Fine.

$$
\hat{P}\sim N\!\left(0.65,\;\frac{0.65\cdot0.35}{40}\right)=N(0.65,\;0.00568)=N(0.65,\;0.075^{2})
$$

$$
Z(0.6)=\frac{0.6-0.65}{0.075}=-0.66,\qquad \Phi(-0.66)=0.2546
$$

So $P(\hat{P}\le0.6)\cong0.2546$.

> [!note] Rounding in Example B
> The exact $Z$ is $-0.05/0.075=-0.6667$. The slide truncates it to $-0.66$ (giving $0.2546$); rounding to $-0.67$ gives about $0.2514$. Both read the same way: roughly a 25 percent chance.

## 9. Summary (Handout 12)

**Central limit theorem.** For i.i.d. $X_1,\dots,X_n$ with $E(X_i)=\mu$ and $Var(X_i)=\sigma^{2}$:

$$
S=\sum_{i=1}^{n}X_i\sim N(n\mu,\;n\sigma^{2}),\qquad \bar{X}=\frac{\sum_{i=1}^{n}X_i}{n}\sim N\!\left(\mu,\;\frac{\sigma^{2}}{n}\right)
$$

**Law of large numbers.** $\bar{X}\to\mu$ as $n\to\infty$.

**Binomial.** $X\sim B(n,p)\approx N(np,\;np(1-p))$ if $np\ge5$ and $n(1-p)\ge5$.

**Proportion.** $\hat{P}\sim N\!\left(p,\;\dfrac{p(1-p)}{n}\right)$ under the same condition.

| Quantity | Mean | Variance |
| --- | --- | --- |
| Single observation $X_i$ | $\mu$ | $\sigma^{2}$ |
| Sum $S$ | $n\mu$ | $n\sigma^{2}$ |
| Average $\bar{X}$ | $\mu$ | $\sigma^{2}/n$ |
| Binomial count $X$ | $np$ | $np(1-p)$ |
| Proportion $\hat{P}$ | $p$ | $p(1-p)/n$ |

> [!tip] Exam checklist for any CLT or approximation question
> 1. Name the variable: a sum, an average, a count or a proportion.
> 2. Write its mean and **variance** (convert variance to standard deviation before standardizing).
> 3. Check $n\ge30$ for sums and averages, or $np\ge5$ and $n(1-p)\ge5$ for counts and proportions.
> 4. Standardize with $Z=\dfrac{t-\text{mean}}{\text{sd}}$ and read $\Phi$.
> 5. For "more than", take $1-\Phi$.

## 10. Extra credit

The slides announce Extra credit assignment 4 (a Google form, 1 extra credit point, due that evening at 21:00 on Moodle). No content from it is part of this note.
