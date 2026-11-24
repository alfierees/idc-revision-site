---
title: "PS9"
subject: statistics-b
source_doc: /papers/statistics-b/ps-9.pdf
tags:
  - statistics-b
  - chi-squared-test
  - goodness-of-fit
  - test-of-independence
  - contingency-table
  - expected-count
  - non-parametric-test
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Is the dreidel fair?** To test if a dreidel is fair (equal probability for each of the four options), Dany recorded the results of 60 spins and observed:

      | Nun | Gimel | Hey | Shin |
      |---|---|---|---|
      | 12 | 22 | 16 | 10 |

      Test the claim the dreidel is fair at $\alpha = 0.05$.
    solution: |
      One categorical variable against a hypothesised distribution, so the test is $\chi^2$ **goodness of fit** ([[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]], section 5). Both tests in this set use the same statistic:

      $$
      \chi^2 = \sum \frac{(O - E)^2}{E}
      $$

      **Step 1: hypotheses, expected counts, $\alpha$.**

      $$
      H_0: p_n = p_g = p_h = p_s = 0.25, \qquad \alpha = 0.05
      $$

      Each expected count is $0.25 \times 60 = 15$.

      **Step 2: check $E_i \ge 5$.** Every cell has $E = 15$, so the condition holds.

      **Step 3: statistic.**

      $$
      \chi^2 = \frac{(12-15)^2}{15} + \frac{(22-15)^2}{15} + \frac{(16-15)^2}{15} + \frac{(10-15)^2}{15} = \frac{9 + 49 + 1 + 25}{15} = 5.6
      $$

      **Step 4: compare.** $df = 4 - 1 = 3$, so $\chi^2_{critical} = 7.815$.

      ![](/images/statistics-b/ps09-q1-dreidel-chi2-df3.png)

      The statistic 5.6 sits to the left of the critical value 7.815, outside the rejection region.

      > [!success] Answer
      > $\chi^2 = 5.6 < 7.815$: **do not reject $H_0$**. There is not enough evidence to conclude the dreidel is unfair.

      > [!tip] Intuition
      > Gimel came up 22 times against an expected 15, which looks suspicious, but with only 60 spins that much wobble is ordinary. "Not rejecting" is not proof of fairness, only a lack of evidence against it.
    related_terms: ["chi-squared-test-for-goodness-of-fit", "chi-squared-statistic", "observed-and-expected-frequencies", "degrees-of-freedom", "critical-value", "significance-level", "null-hypothesis", "chi-squared-distribution"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Where do shop visitors come from?** An online shop owner suspects that 50% of visitors arrive from Google searches, 25% from social media links and 25% by directly typing the site address. A random sample of 1000 visitors showed:

      | Google | Social | Address |
      |---|---|---|
      | 527 | 302 | 171 |

      Test whether the results differ from the suspected distribution at $\alpha = 0.05$.
    solution: |
      Goodness of fit again.

      **Step 1.**

      $$
      H_0: p_{google} = 0.5,\ p_{social} = 0.25,\ p_{direct} = 0.25, \qquad \alpha = 0.05
      $$

      | | Google | Social | Address |
      |---|---|---|---|
      | Expected | $1000 \times 0.5 = 500$ | $1000 \times 0.25 = 250$ | $1000 \times 0.25 = 250$ |

      **Step 2.** The smallest expected count is 250, well above 5.

      **Step 3.**

      $$
      \chi^2 = \frac{(527-500)^2}{500} + \frac{(302-250)^2}{250} + \frac{(171-250)^2}{250} = 1.458 + 10.816 + 24.964 = 37.238
      $$

      **Step 4.** $df = 3 - 1 = 2$, so $\chi^2_{critical} = 5.991$.

      ![](/images/statistics-b/ps09-q2-visitor-sources-obs-vs-exp.png)

      Address visits fall far short of the expected 250 (observed 171), and Social visits exceed it (observed 302). These two cells drive the statistic.

      > [!success] Answer
      > $\chi^2 = 37.238 > 5.991$: **reject $H_0$**. The distribution of visitor sources differs from the owner's suspected distribution.
    related_terms: ["chi-squared-test-for-goodness-of-fit", "chi-squared-statistic", "observed-and-expected-frequencies", "degrees-of-freedom", "critical-value", "significance-level", "null-hypothesis"]
    source_doc_page: 1
  - id: "2b"
    text: |
      Same setup as 2a (suspected shares 50%, 25%, 25%). What is the smallest number of visitors they would need to sample to satisfy the requirements of a $\chi^2$ test for goodness of fit?
    solution: |
      The requirement for the test is that **every** $E_i \ge 5$. The smallest cell probability is 0.25, so the binding cell is the one with $E = 0.25\,n$:

      $$
      0.25\, n \ge 5 \quad\Longrightarrow\quad n \ge \frac{5}{0.25} = 20
      $$

      > [!success] Answer
      > The smallest sample that satisfies the requirement is **$n = 20$**.

      > [!tip] Intuition
      > The rarest category sets the requirement. With $n = 20$ the cells have expected counts 10, 5 and 5, so the two quarter-share cells just reach the minimum of 5. Notice this only checks that the test is *valid*, not that it would have any power.
    related_terms: ["chi-squared-test-for-goodness-of-fit", "observed-and-expected-frequencies"]
    source_doc_page: 1
  - id: "3"
    text: |
      **Is jury invitation random by age?** Invited members of a jury panel are supposed to be selected randomly from a county's adult (over 21 years old) population. To check whether the selection of invited members was random, a lawyer compared the age distribution of invited members to that of the county's population and found:

      | Age category | Percent in county population | Number of invited jurors |
      |---|---|---|
      | 21 to 40 | 42% | 5 |
      | 41 to 50 | 23% | 9 |
      | 51 to 60 | 16% | 19 |
      | 61 and over | 19% | 33 |
      | Total | 100% | 66 |

      What should the lawyer conclude about the invitation process? Use $\alpha = 0.05$.
    solution: |
      Goodness of fit, where the null distribution is the county's age distribution (what truly random selection would produce).

      **Step 1.**

      $$
      H_0: p_{21\text{-}40} = 0.42,\ p_{41\text{-}50} = 0.23,\ p_{51\text{-}60} = 0.16,\ p_{61+} = 0.19, \qquad \alpha = 0.05
      $$

      Expected counts are the shares times 66:

      | Age category | Share | Observed | Expected |
      |---|---|---|---|
      | 21 to 40 | 42% | 5 | $0.42 \times 66 = 27.72$ |
      | 41 to 50 | 23% | 9 | $0.23 \times 66 = 15.18$ |
      | 51 to 60 | 16% | 19 | $0.16 \times 66 = 10.56$ |
      | 61 and over | 19% | 33 | $0.19 \times 66 = 12.54$ |
      | Total | 100% | 66 | 66 |

      **Step 2.** The smallest expected count is 10.56, above 5.

      **Step 3.**

      $$
      \chi^2 = \frac{(5-27.72)^2}{27.72} + \frac{(9-15.18)^2}{15.18} + \frac{(19-10.56)^2}{10.56} + \frac{(33-12.54)^2}{12.54} = 61.266
      $$

      **Step 4.** $df = 4 - 1 = 3$, so $\chi^2_{critical} = 7.815$.

      ![](/images/statistics-b/ps09-q3-juror-age-obs-vs-exp.png)

      Older age groups are heavily over-represented among the invited (33 observed against 12.54 expected for 61 and over), and the youngest group is heavily under-represented (5 against 27.72).

      > [!success] Answer
      > $\chi^2 = 61.266 > 7.815$: **reject $H_0$**. There is sufficient evidence that the age distribution of invited jurors differs from what a truly random selection would give, so the invitation process does not look random.

      > [!tip] Intuition
      > The test only says the distribution is *different*. The table shows which way: the process favours older residents. That is the lawyer's argument.
    related_terms: ["chi-squared-test-for-goodness-of-fit", "chi-squared-statistic", "observed-and-expected-frequencies", "degrees-of-freedom", "critical-value", "significance-level", "null-hypothesis", "random-sample"]
    source_doc_page: 2
  - id: "4"
    text: |
      **Gender and voting.** A political scientist wants to test the possible dependence of gender and voting tendency. A random sample of 10,000 people was classified:

      | | Male | Female |
      |---|---|---|
      | Voted | 2,792 | 3,591 |
      | Did not vote | 1,486 | 2,131 |

      Are gender and voting tendency dependent? Use $\alpha = 0.05$.
    solution: |
      Two categorical variables, so the test is $\chi^2$ **for independence** ([[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]], section 6).

      **Step 1.** $H_0: p(X_i, Y_j) = p(X_i)\,p(Y_j)$ for every $i, j$ (gender and voting are independent), $\alpha = 0.05$.

      First add the margins:

      | | Male | Female | Total |
      |---|---|---|---|
      | Voted | 2,792 | 3,591 | 6,383 |
      | Did not vote | 1,486 | 2,131 | 3,617 |
      | Total | 4,278 | 5,722 | 10,000 |

      So $p(\text{male}) = 0.4278$, $p(\text{female}) = 0.5722$, $p(\text{voted}) = 0.6383$, $p(\text{did not vote}) = 0.3617$. Each expected count is $E_{i,j} = p(X_i)\,p(Y_j)\,N$:

      | | Male | Female |
      |---|---|---|
      | Voted | $10{,}000 \times 0.4278 \times 0.6383 = 2730.647$ | $10{,}000 \times 0.5722 \times 0.6383 = 3652.353$ |
      | Did not vote | $10{,}000 \times 0.4278 \times 0.3617 = 1547.353$ | $10{,}000 \times 0.5722 \times 0.3617 = 2069.647$ |

      **Step 2.** The smallest expected count is 1547.353, above 5.

      **Step 3.**

      $$
      \chi^2 = \frac{(2792-2730.647)^2}{2730.647} + \frac{(3591-3652.353)^2}{3652.353} + \frac{(1486-1547.353)^2}{1547.353} + \frac{(2131-2069.647)^2}{2069.647} = 6.66
      $$

      **Step 4.** $df = (2-1)(2-1) = 1$, so $\chi^2_{critical} = 3.841$.

      ![](/images/statistics-b/ps09-q4-voting-chi2-df1.png)

      > [!success] Answer
      > $\chi^2 = 6.66 > 3.841$: **reject $H_0$**. There is sufficient evidence that voting status and gender are dependent.

      > [!tip] Intuition
      > Men voted at $2792/4278 \approx 65.3\%$ and women at $3591/5722 \approx 62.8\%$. With a sample this large, a gap of 2.5 percentage points is enough to be statistically significant, though the effect is small in practical terms.

      > [!note] A one-cell shortcut
      > In a $2 \times 2$ table each of the four cells deviates from its expectation by the same amount (here $\pm 61.353$). That is why all four terms share a similar numerator, and why $df = 1$: once one cell is fixed, the margins fix the other three.
    related_terms: ["chi-squared-test-for-independence", "chi-squared-statistic", "contingency-table", "marginal-probability", "observed-and-expected-frequencies", "degrees-of-freedom", "critical-value", "significance-level", "null-hypothesis", "independence-of-random-variables"]
    source_doc_page: 2
  - id: "5"
    text: |
      **Parents' socio-economic status and education.** A researcher wants to check whether fully subsidized education influences the known dependence of a person's education level on their parents' Socio-Economic Status (SES). She randomly sampled 395 people from a county in which education is fully subsidized and measured their highest education level and their parents' SES:

      | | High school | Bachelors | Masters | PhD | Total |
      |---|---|---|---|---|---|
      | High SES | 60 | 54 | 46 | 41 | 201 |
      | Low SES | 40 | 44 | 53 | 57 | 194 |
      | Total | 100 | 98 | 99 | 98 | 395 |

      Are SES and highest education level dependent? Use $\alpha = 0.05$.
    solution: |
      Independence test on a $2 \times 4$ table.

      **Step 1.** $H_0: p(X_i, Y_j) = p(X_i)\,p(Y_j)$ for all $i, j$, $\alpha = 0.05$. The margins are already in the table, so the marginal probabilities are:

      - SES: $p(\text{high}) = 201/395 = 0.509$, $p(\text{low}) = 194/395 = 0.491$.
      - Education: $p(\text{HS}) = 0.253$, $p(\text{BA}) = 0.248$, $p(\text{MA}) = 0.251$, $p(\text{PhD}) = 0.248$.

      Expected counts as printed in the solution (rounded marginals):

      | | High school | Bachelors | Masters | PhD |
      |---|---|---|---|---|
      | High SES | $0.509 \times 0.253 \times 395 = 50.87$ | $0.509 \times 0.248 \times 395 = 49.86$ | $0.509 \times 0.251 \times 395 = 50.46$ | $0.509 \times 0.248 \times 395 = 49.86$ |
      | Low SES | $0.491 \times 0.253 \times 395 = 49.07$ | $0.491 \times 0.248 \times 395 = 48.1$ | $0.491 \times 0.251 \times 395 = 48.68$ | $0.491 \times 0.248 \times 395 = 48.1$ |

      **Step 2.** The smallest expected count is 48.1, above 5.

      **Step 3.**

      $$
      \chi^2 = \frac{(60-50.87)^2}{50.87} + \frac{(54-49.86)^2}{49.86} + \frac{(46-50.46)^2}{50.46} + \frac{(41-49.86)^2}{49.86} + \frac{(40-49.07)^2}{49.07} + \frac{(44-48.1)^2}{48.1} + \frac{(53-48.68)^2}{48.68} + \frac{(57-48.1)^2}{48.1} = 8.007
      $$

      **Step 4.** $df = (4-1)(2-1) = 3$, so $\chi^2_{critical} = 7.815$.

      ![](/images/statistics-b/ps09-q5-ses-education-chi2-df3.png)

      The statistic 8.007 only just clears the critical value 7.815.

      > [!success] Answer
      > $\chi^2 = 8.007 > 7.815$: **reject $H_0$**. There is sufficient evidence that SES and highest education level are dependent.

      > [!warning] Rounding, my check
      > The printed expected counts use marginals rounded to three decimals. Using exact fractions (for example $201 \times 100 / 395 = 50.886$) gives expected counts of 50.89, 49.87, 50.38, 49.87 in the high SES row and 49.11, 48.13, 48.62, 48.13 in the low SES row, and $\chi^2 = 8.006$. The difference from 8.007 is rounding only and the decision is unchanged. Because this result is so close to the critical value, it is worth knowing that the exact p-value is about 0.046, just under 0.05 (my calculation, not in the solution).

      > [!tip] Intuition
      > The pattern is in the proportions: the share of high-SES people falls from $60/100 = 60\%$ at high school level to $41/98 \approx 42\%$ among PhDs. Even with fully subsidised education, parents' SES still shifts who reaches the top.
    related_terms: ["chi-squared-test-for-independence", "chi-squared-statistic", "contingency-table", "marginal-probability", "observed-and-expected-frequencies", "degrees-of-freedom", "critical-value", "significance-level", "null-hypothesis", "p-value"]
    source_doc_page: 3
---

*Related: [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]], [[Lec_04-Hypothesis Testing and the Z Test]]*

> [!warning] Things that cost marks
> - Forgetting to **check $E_i \ge 5$** before trusting the test (step 2 of the recipe).
> - Using **observed** rather than expected counts in the denominator.
> - Wrong degrees of freedom: goodness of fit is categories minus 1; independence is $(\text{rows}-1)(\text{columns}-1)$.
> - Comparing against a two-tailed critical value. $\chi^2$ tests only reject for large values.
> - Concluding "fair" or "independent" when you fail to reject. You only have no evidence against $H_0$.
