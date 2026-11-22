---
title: "Assignment 0"
subject: intro-econometrics
source_doc: /papers/intro-econometrics/assignment-0.pdf
tags:
  - intro-econometrics
  - assignment
  - R
  - data-cleaning
  - descriptive-statistics
  - wage-gap
  - expectation-variance
ai_drafted: true
questions:
  - id: "0"
    text: |
      **Part 0: Set-up.** Create a project folder with sub-folders `Data`, `Code`, `Assignment`, `Solutions`. Save the two data files in `Data`. Open a new R script first thing, set the working directory with `setwd(...)`, install `rio` and load it with `library(rio)`. Submit a PDF solution set and the `.R` file; the first line of both has the student ID and assignment number, and "group:" plus names if you worked with others.
    solution: |
      > [!tip] Intuition
      > Nothing to compute here: the habits (a script that regenerates every result, relative paths, version numbers in file names) are what make the later regression assignments reproducible.

      The script loads its packages as:

      ```r
      library(tidyverse)  # data manipulation and plots
      library(rio)        # import()/export() for xlsx and RData
      library(psych)      # descriptive statistics
      ```
    related_terms: []
    source_doc_page: 1
  - id: "1a"
    text: |
      **Q1: Read in the data.** Read `exp2015_v2025.xlsx` into R as an object called `mydata`. (A 2015 survey of household costs and incomes in Israel: 23,134 rows, 78 columns.)
    solution: |
      ```r
      mydata <- import("Raw/Copy of exp2015_v2025.xlsx")
      ```

      Output: `mydata` has **23,134 observations and 78 variables**.
    related_terms: []
    source_doc_page: 2
  - id: "1b"
    text: |
      Create `newdata` containing only: `sex age national marital ussrborn schoolty schooly diploma weekwhrs weekwrk workstat incomems chld017`.
    solution: |
      ```r
      newdata <- mydata[, c("sex", "age", "national", "marital", "ussrborn",
                            "schoolty", "schooly", "diploma",
                            "weekwrk", "weekwhrs", "workstat", "incomems", "chld017")]
      ```

      `newdata` keeps the same 23,134 rows and **13 variables**.
    related_terms: []
    source_doc_page: 2
  - id: "2a"
    text: |
      **Q2: Data types.** Use `summary` to find each variable's type. Which are characters?
    solution: |
      The character variables are `sex`, `age`, `national`, `marital`, `ussrborn`, `schoolty`, `diploma` and `workstat`. The numeric ones are `schooly`, `weekwhrs`, `weekwrk`, `incomems` and `chld017`.
    related_terms: []
    source_doc_page: 2
  - id: "2b"
    text: |
      Convert each character variable (including `age`) to a factor with `as.factor`.
    solution: |
      ```r
      newdata <- newdata %>%
        mutate(
          sex = as.factor(sex),
          national = as.factor(national),
          marital = as.factor(marital),
          ussrborn = as.factor(ussrborn),
          schoolty = as.factor(schoolty),
          diploma = as.factor(diploma),
          workstat = as.factor(workstat),
          age_factor = as.factor(age),
          age_numeric = as.numeric(as.factor(age))
        )
      ```
    related_terms: []
    source_doc_page: 2
  - id: "2c"
    text: |
      Create `age_numeric`, a numeric version of the factor `age` (hint: `as.numeric`).
    solution: |
      Done in the `mutate()` call above: `age_numeric = as.numeric(as.factor(age))`.

      > [!note] Why `as.numeric(as.factor(age))` works
      > `age` is stored as text bands such as `"25-29"`. `as.factor` sorts the bands alphabetically, which here is also chronological, and `as.numeric` returns each band's **position** (1, 2, 3, ...). So `age_numeric` is a band code, **not** an age in years.

      | Band | 00-04 | 05-09 | 10-14 | 15-17 | 18-24 | **25-29** | 30-34 | 35-39 | 40-44 | 45-49 | 50-54 | 55-60 | **61-62** | 63-65 | ... | 85+ |
      |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
      | `age_numeric` | 1 | 2 | 3 | 4 | 5 | **6** | 7 | 8 | 9 | 10 | 11 | 12 | **13** | 14 | ... | 19 |
    related_terms: []
    source_doc_page: 2
  - id: "3a"
    text: |
      **Q3: Subset the data.** Subset the observations in `newdata` to those with age between 25 and 62. Refer to the variable description file to interpret the values of `age_numeric`. Why do we need to limit our observations to this age range?
    solution: |
      Ages 25 to 62 are band codes 6 to 13:

      ```r
      newdata <- newdata %>% filter(age_numeric > 5 & age_numeric < 14)
      ```

      Sample size falls from 23,134 to **9,681**.

      > [!todo] No solution in source
      > The "why limit to 25-62?" explanation is not written in the script or any other source.

      > [!tip] Intuition
      > Our own reading, not from the source: before 25 many people are still studying or in service, and after 62 many have retired, so wage and employment are not comparable to prime working-age behaviour. Check against your own submission.
    related_terms: []
    source_doc_page: 2
  - id: "3b"
    text: |
      Limit the observations in `newdata` to individuals with less than 25 years of education (individuals with more than 24 years are considered data-entry errors).
    solution: |
      ```r
      newdata <- newdata %>% filter(schooly < 25)
      ```

      Sample size falls from 9,681 to **9,476**.
    related_terms: []
    source_doc_page: 2
  - id: "4a"
    text: |
      **Q4: Explore the data.** Create a table with the following summary statistics for each numeric (non-factor) variable: average, median, minimum, maximum.
    solution: |
      Script output (`summary()` on the numeric columns of the 9,476-person sample):

      | Variable | Min | Median | Mean | Max | Note |
      |---|---:|---:|---:|---:|---|
      | `schooly` (years of study) | 0 | 14 | 13.86 | 24 | |
      | `weekwrk` (weeks worked per month) | 0.13 | 4.33 | 4.237 | 4.33 | |
      | `weekwhrs` (weekly hours) | 1 | 42 | 40.99 | 112 | 2,095 NA |
      | `incomems` (income, NIS) | 0 | 5,332 | 7,418 | 138,470 | 1st quartile is 0 |
      | `chld017` (children under 17) | 0 | 0 | 0.809 | 12 | |
      | `age_numeric` (band code) | 6 | 9 | 9.03 | 13 | not a real age |
    related_terms: []
    source_doc_page: 2
  - id: "4b"
    text: |
      What can be learned about the variable `incomems` from this table?
    solution: |
      - The **minimum is 0**: some people report no income (likely the non-employed; the first quartile is also 0).
      - **Mean (7,418) is above the median (5,332)**, so the distribution is **right-skewed**.
      - The **maximum of 138,470** is an extreme high earner pulling the mean up. The script concludes the distribution is right-skewed with income inequality.
    related_terms: []
    source_doc_page: 2
  - id: "4c"
    text: |
      What percentage of the observations are women? (hint: use `sex`)
    solution: |
      **5,030 of 9,476 are women, i.e. 53.1%** (men: 4,446, 46.9%).
    related_terms: []
    source_doc_page: 2
  - id: "4d"
    text: |
      What percentage of the observations are for people born in the USSR? (hint: use `ussrborn`)
    solution: |
      **1,288 of 9,476 are USSR-born (`ussrborn == "yes"`), i.e. 13.6%.**
    related_terms: []
    source_doc_page: 2
  - id: "5a"
    text: |
      **Q5: New variables.** Create a variable called `emp` which takes the value 0 if the person is unemployed and 1 otherwise (hint: use `workstat`).
    solution: |
      `workstat` has three levels: `salaried` (6,481), `self-emp` (900) and `other` (2,095). The script treats `other` as not employed:

      ```r
      emp_binary = ifelse(workstat == "other", 0, 1)
      ```

      Result: 2,095 coded 0 and **7,381 coded 1**.

      > [!tip] Intuition
      > `other` covers everyone not working, which includes people outside the labour force, so "unemployed" in the question is really "not employed". This is a [[Dummy Variable]] that later gives the **employment rate** as its mean.
    related_terms: ["dummy-variable"]
    source_doc_page: 2
  - id: "5b"
    text: |
      Create a new variable for hourly wage called `wage_per_hour` (hint: use `weekwrk`, `weekwhrs`, `incomems`).
    solution: |
      $$
      \text{wage\_per\_hr} = \frac{\texttt{incomems}}{\texttt{weekwrk} \times \texttt{weekwhrs}}
      $$

      `weekwrk` is weeks worked per month (maximum 4.33) and `weekwhrs` is weekly hours, so the denominator is hours worked per month. It is set to `NA` if either is not positive:

      ```r
      wage_per_hr = ifelse(weekwrk > 0 & weekwhrs > 0,
                           incomems / (weekwrk * weekwhrs), NA_real_)
      ```

      Before trimming: min 0, median 42.14, mean 55.07, max 1,495.79, with 2,095 `NA` (exactly the non-employed, who have no hours).
    related_terms: []
    source_doc_page: 2
  - id: "5c"
    text: |
      Drop (delete) the variable `age_numeric` you created in 2c (hint: use `subset`).
    solution: "TODO"
    related_terms: []
    source_doc_page: 2
  - id: "5d"
    text: |
      Remove observations that have an outlier hourly wage (higher than 1,000 NIS), while keeping those that have hourly wage of `NA`. Use the command `is.na`.
    solution: |
      ```r
      newdata <- newdata %>% filter(is.na(wage_per_hr) | wage_per_hr <= 1000)
      ```

      **2 observations** are removed, leaving **9,474**. The `is.na` condition matters: a plain `wage_per_hr <= 1000` would also drop every `NA`.
    related_terms: []
    source_doc_page: 2
  - id: "5e"
    text: |
      Create a new variable `sex_by_nation` that classifies individuals into one of the following groups (and `NA` otherwise): Jewish men, Arab men, Jewish women, Arab women. Save it as a factor.
    solution: |
      ```r
      sex_by_nation = case_when(
        national == "jewish" & sex == "male"   ~ "jewish_male",
        national == "jewish" & sex == "female" ~ "jewish_female",
        national == "arab"   & sex == "male"   ~ "arab_male",
        national == "arab"   & sex == "female" ~ "arab_female",
        TRUE ~ "other")
      ```

      | Group | n |
      |---|---:|
      | jewish_female | 3,987 |
      | jewish_male | 3,466 |
      | arab_female | 849 |
      | arab_male | 806 |
      | other | 366 |

      > [!warning] Deviation from the question
      > The question says to code everyone outside the four groups as `NA`; the script codes them `"other"` (the 366 people whose nationality is neither Jewish nor Arab). The "other" group therefore appears in the histograms and the summary table below, but not in the box plot or the bar chart.
    related_terms: []
    source_doc_page: 2
  - id: "6"
    text: |
      **Q6: Save the cleaned data.** The object `newdata` will be used in other problem sets for this class. Save the cleaned version in your `Data` folder as `HW1-cleanData.RData` using the command `export`.
    solution: |
      ```r
      export(newdata, "Cleaned/HW1-cleanData.RData")
      ```

      Reload later with `load("Cleaned/HW1-cleanData.RData")`. The script saves to `Cleaned/` rather than `Data/`; only the folder differs.
    related_terms: []
    source_doc_page: 3
  - id: "7a"
    text: |
      **Q7: Explore across different groups.** Calculate the average hourly wage for each of the groups in 5e.
    solution: |
      Script output (`group_by(sex_by_nation)` then `mean(wage_per_hr, na.rm = TRUE)` and `mean(emp_binary) * 100`):

      | Group | Avg hourly wage (NIS) | Employment rate | n |
      |---|---:|---:|---:|
      | jewish_male | **62.5** | **86.4%** | 3,466 |
      | jewish_female | 53.9 | 80.2% | 3,987 |
      | other | 44.0 | 83.6% | 366 |
      | arab_female | 35.8 | **33.3%** | 849 |
      | arab_male | **34.5** | 74.6% | 806 |

      > [!note] Reading the wage average
      > `na.rm = TRUE` means the averages are over **employed people with a computed wage only**. Employment rates use everyone in the group, so the two columns have different denominators.

      The wage spread inside each group is shown by the script's two bonus plots (real data, from the same sample). The box plot excludes "other"; the histograms include it.

      ![](/images/intro-econometrics/assign-00-wage-boxplot.png)

      ![](/images/intro-econometrics/assign-00-wage-distribution.png)

      > [!tip] Intuition
      > Every distribution is right-skewed with a long tail (Jewish groups reach several hundred NIS/hr), which is why the mean sits above the median and why the 1,000 NIS cut-off in Q5d matters. The Arab groups have a much tighter, lower spread.
    related_terms: ["conditional-mean"]
    source_doc_page: 3
  - id: "7b"
    text: |
      Describe in a couple of sentences the wage gaps between these different groups. What are some things that could cause these gaps?
    solution: |
      - Wages: Jewish men earn the most (about 62 NIS/hr); the script describes Arab women as the lowest (about 36 NIS/hr).
      - Employment: about 86% for Jewish men against about 33% for Arab women, a gender employment gap that is especially severe among Arabs.
      - The script's explanation: Arab workers face a dual disadvantage (ethnicity and gender), pointing to systemic labour-market inequality and anti-discrimination policy.

      > [!warning] Check: the script's wage claims do not all match its own table
      > The script says a gender wage gap exists "within both ethnic groups" and that Arab women earn the least. The table shows the gap in **Jewish** workers (62.5 vs 53.9, men higher) but among **Arab** workers women earn slightly **more** than men (35.8 vs 34.5), so **Arab men** have the lowest average wage. The 33.3% figure for Arab women is an employment gap, not a wage gap. Selection is a likely reason: with only a third of Arab women employed, those who work may be a more skilled subset, which raises their average wage. The answer is kept as submitted, with this check added.

      > [!todo] No solution in source
      > The script comments do not discuss further causes (education, occupation, hours, discrimination, location); a fuller answer is not written in the source.
    related_terms: ["causality-vs-correlation"]
    source_doc_page: 3
  - id: "7c"
    text: |
      For the same groupings in 5e, calculate the employment rates (hint: use `emp` from 5a).
    solution: |
      The employment rates are in the table under 7a. As a chart:

      ![](/images/intro-econometrics/assign-00-employment-rate.png)
    related_terms: ["dummy-variable", "conditional-mean"]
    source_doc_page: 3
  - id: "8"
    text: |
      **Q8: Marriage in the labour market.** Through independent analysis, answer: does being married provide an advantage or a disadvantage in the labour market?

      **a.** Address differences in both wage and employment between married and unmarried people.

      **b.** Does your answer change between men and women?
    solution: |
      Supporting table (script output: `group_by(marital, sex)`, mean wage and employment rate; the script has no written conclusion):

      | Marital status | Sex | Avg wage (NIS/hr) | Employment rate | n |
      |---|---|---:|---:|---:|
      | married | female | 54.7 | 71.4% | 3,660 |
      | married | male | 61.0 | 86.2% | 3,381 |
      | single | female | 43.4 | 73.6% | 697 |
      | single | male | 41.8 | 76.1% | 812 |
      | divorced | female | 48.2 | 80.4% | 480 |
      | divorced | male | 56.3 | 84.3% | 197 |
      | living separately | female | 30.8 | 79.3% | 87 |
      | living separately | male | 35.1 | 82.1% | 28 |
      | widowed | female | 54.5 | 51.9% | 104 |
      | widowed | male | 45.7 | 66.7% | 24 |
      | unknown | female / male | 53.1 / 51.5 | 100% | 1 / 3 |

      > [!note] Sample caveat
      > The `marital` variable has 6,764 `NA` values in the full file, and some cells are tiny (widowed men 24, living separately men 28, unknown 1 and 3), so those rows are not reliable. The `living s` label in the data is read here as "living separately" (an assumption; the codebook entry for `marital` has no code list in the converted file).

      > [!todo] No solution in source
      > Q8a and Q8b (the written answer on whether marriage is an advantage, and whether it differs by sex) are not in the script or any other source, so no conclusion is drawn here. Also note this is a descriptive comparison: see [[Causality vs Correlation]] before reading it as an effect of marriage.
    related_terms: ["causality-vs-correlation", "dummy-variable", "conditional-mean"]
    source_doc_page: 3
  - id: "9a"
    text: |
      **Q9: Expectation, variance, covariance.** $X$ is a random variable with mean $\mu_X$ and variance $\sigma_X^2$, and $Y$ has mean $\mu_Y$ and variance $\sigma_Y^2$. Let $\text{Cov}(X,Y) = \sigma_{XY}$. Evaluate:

      **a.** $\mathbb{E}[4 + 6X]$
    solution: "TODO"
    related_terms: []
    source_doc_page: 3
  - id: "9b"
    text: |
      **b.** $(\mu_X)^2 + \sigma_X^2$
    solution: "TODO"
    related_terms: []
    source_doc_page: 3
  - id: "9c"
    text: |
      **c.** $\text{Var}(11 - 3X)$
    solution: "TODO"
    related_terms: []
    source_doc_page: 3
  - id: "9d"
    text: |
      **d.** $\text{Cov}(X - 8,\, Y - 2)$
    solution: "TODO"
    related_terms: []
    source_doc_page: 3
  - id: "9e"
    text: |
      **e.** $\text{Cov}(6X,\, 2Y)$
    solution: "TODO"
    related_terms: []
    source_doc_page: 3
  - id: "9f"
    text: |
      **f.** $\text{Var}(8X - 6Y)$
    solution: "TODO"
    related_terms: []
    source_doc_page: 3
  - id: "10a"
    text: |
      **Q10: Summation identities.** Prove the following equalities hold.

      **a.**

      $$
      \sum_{i=1}^{n} (X_i - \bar{X}) = 0
      $$
    solution: "TODO"
    related_terms: []
    source_doc_page: 3
  - id: "10b"
    text: |
      **b.**

      $$
      \sum_{i=1}^{n} (X_i - \bar{X})^2 = \sum_{i=1}^{n} (X_i - \bar{X})\, X_i
      $$
    solution: "TODO"
    related_terms: []
    source_doc_page: 3
  - id: "10c"
    text: |
      **c.**

      $$
      \sum_{i=1}^{n} (X_i - \bar{X})(Y_i - \bar{Y}) - \sum_{i=1}^{n} X_i Y_i = -n\,\bar{X}\,\bar{Y}
      $$
    solution: "TODO"
    related_terms: []
    source_doc_page: 3
  - id: "11a"
    text: |
      **Q11: A weighted average of independent variables.** $X_1, \dots, X_n$ are independent random variables with $\text{Var}(X_i) = \sigma^2$ and $\mathbb{E}[X_i] = \mu$ for all $i$. Let

      $$
      Y = \frac{\sum_{i=1}^{n} b_i X_i}{n},
      $$

      where $b_1, \dots, b_n$ are non-random real numbers.

      **a.** Find $\mathbb{E}[Y]$ in terms of $\mu$ and the $b_i$'s.
    solution: "TODO"
    related_terms: []
    source_doc_page: 3
  - id: "11b"
    text: |
      **b.** Find $\text{Var}(Y)$ in terms of $\sigma^2$ and the $b_i$'s.
    solution: "TODO"
    related_terms: []
    source_doc_page: 3
---

> [!info] Solutions are Alfie's submitted work, not an official key.

Part B (R data handling) comes from Alfie's own R script, re-run on the raw data to check the outputs. Part A (statistics review, Q9 to Q11) has no solution in the source and is left as TODO. The cleaned `newdata` object from this assignment is reused in later problem sets.

*Course review: [[Lec_13-Exam Review]]*
