---
title: "Practice Quiz (Lectures 1-5)"
label: "Practice Quiz"
topics: "20 multiple-choice questions: lifecycle, EDA, classification, regression, clustering and PCA"
type: past-paper
status: worked-solution
exam: "Practice Quiz (take-home self-assessment)"
course: "Introduction to Data Science - Entrepreneurship-Economy Track"
semester: 2
year: 2
source_doc: /papers/intro-data-science/practice-quiz.pdf
tags:
  - data-science
  - intro-data-science
  - past-paper
  - practice-quiz
  - worked-solution
  - data-science-lifecycle
  - survivorship-bias
  - missing-values
  - data-leakage
  - one-hot-encoding
  - overfitting
  - r-squared
  - pca
  - k-means
aliases:
  - DS Practice Quiz
  - Data Science Practice Quiz
  - PP01 Data Science
subject: intro-data-science
in_scope: true
questions:
  - id: q1
    title: "Q1 — Lifecycle order"
    text: |
      Which of the following correctly lists the stages of the Data Science Lifecycle in order?
    options:
      - label: "A"
        text: |
          Collect → Clean → Ask → Model → Explore → Communicate → Decide
        correct: false
        why: |
          Skips the critical first step of defining the question before collecting data.
      - label: "B"
        text: |
          Ask → Collect → Clean → Explore → Model → Communicate → Decide
        correct: true
        why: |
          The lifecycle starts with asking a business question, then collecting data, cleaning it, exploring patterns, modeling, communicating results, and finally deciding on an action.
      - label: "C"
        text: |
          Ask → Model → Collect → Clean → Explore → Decide → Communicate
        correct: false
        why: |
          Places modeling before data is even collected or cleaned.
      - label: "D"
        text: |
          Collect → Ask → Clean → Model → Explore → Communicate → Decide
        correct: false
        why: |
          Starts with collection before defining what question the data should answer.
    solution: |
      Think about what you must know before you can do each step. You cannot decide what data to collect until you know the question, and you cannot model data you have not collected and cleaned.

      | Step | Why it sits here |
      |---|---|
      | **Ask** | Defines the business question, which decides what data is needed |
      | **Collect** | Gather the data that answers that question |
      | **Clean** | Fix missing values, types and errors before analysis |
      | **Explore** | EDA: distributions, relationships, surprises |
      | **Model** | Fit and evaluate a model |
      | **Communicate** | Turn results into something stakeholders can use |
      | **Decide** | Act on the findings |

      > [!success] Answer: **B**
      > Ask, Collect, Clean, Explore, Model, Communicate, Decide.

      > [!tip] Fast elimination
      > Any option that starts with Collect (A, D) or puts Model before Collect (C) fails the "question first, data second" test.
    related_terms: ["data-science-lifecycle"]
  - id: q2
    title: "Q2 — Office dogs"
    text: |
      A Tel Aviv startup analyzed 500 successful companies and found that 90% of them had office dogs. The CEO concludes: "Getting an office dog significantly increases our chance of success." Which critical thinking concept is being violated?
    options:
      - label: "A"
        text: |
          Correlation ≠ causation — having a dog does not cause success
        correct: false
        why: |
          While correlation ≠ causation is relevant, the primary flaw is the biased sample, not just a causal leap.
      - label: "B"
        text: |
          Survivorship bias — the analysis only examined successful companies and ignored failed ones that may also have had office dogs
        correct: true
        why: |
          By only looking at successful companies, the analysis ignores failed companies that may also have had office dogs. This is survivorship bias — drawing conclusions from the 'survivors' without considering the full population.
      - label: "C"
        text: |
          Descriptive analytics — the CEO is just describing the data
        correct: false
        why: |
          The CEO is making a prescriptive recommendation, not merely describing data.
      - label: "D"
        text: |
          Confounding variables — office dogs are a hidden variable in all datasets
        correct: false
        why: |
          The statement about confounding variables is vague and does not identify the core sampling flaw.
    solution: |
      Two flaws are tempting here, so separate them.

      - The CEO only studied **500 successful companies**. Failed companies with office dogs were never counted, so 90% tells you nothing about whether dogs raise the *success rate*. To say dogs help you would need the share of dog-owning firms that succeed versus the share of dog-free firms that succeed, which needs the failures in the sample.
      - "Correlation is not causation" is also true, but it is the second problem. The first and decisive flaw is the **sampling**, which is why B beats A.

      > [!success] Answer: **B**
      > This is [[Survivorship Bias]]: concluding from the survivors while the failures are invisible.

      > [!tip] Exam pattern
      > When a sample is selected on the outcome (only winners, only survivors), say survivorship bias first and causation second.
    related_terms: ["survivorship-bias", "correlation-vs-causation", "confounding-variable"]
  - id: q3
    title: "Q3 — Predict, then reroute"
    text: |
      Consider the four types of analytics: descriptive, diagnostic, predictive, and prescriptive. A logistics company runs a model that forecasts next week's delivery delays and then automatically reroutes packages through alternative shipping paths to minimize those delays. Which type(s) of analytics does this system perform?
    options:
      - label: "A"
        text: |
          This system performs predictive analytics only. It forecasts future delivery delays based on historical data, and the automatic rerouting is simply the operational response to the prediction — not a separate type of analytics, since the model itself only produces a forecast.
        correct: false
        why: |
          Correctly identifies the predictive component but incorrectly dismisses the rerouting optimization as 'just operational.' Automatic optimization based on model output is the textbook definition of prescriptive analytics.
      - label: "B"
        text: |
          This system performs both predictive and prescriptive analytics. The forecasting of delays is predictive (what will happen?), and the automatic rerouting to minimize delays is prescriptive (what should we do?), since it recommends and executes an optimal action based on the prediction.
        correct: true
        why: |
          The system has two distinct analytical components: predicting delays (predictive) and optimizing routes to minimize them (prescriptive). Both types are present and neither subsumes the other.
      - label: "C"
        text: |
          This system performs prescriptive analytics only. Because it both predicts and acts, the entire pipeline is prescriptive — prescriptive analytics subsumes predictive analytics by definition, so listing both would be redundant and technically incorrect.
        correct: false
        why: |
          Incorrectly claims prescriptive subsumes predictive. While prescriptive builds on predictions, they are separate types. Saying one subsumes the other contradicts the four-type framework taught in the course.
      - label: "D"
        text: |
          This system performs diagnostic and predictive analytics. The model must first diagnose why delays occur (diagnostic) before it can forecast them (predictive), and the rerouting is an operational step outside the analytics framework entirely.
        correct: false
        why: |
          Incorrectly injects diagnostic analytics. The model may or may not diagnose root causes — the scenario only states it forecasts delays. The rerouting is prescriptive, not merely operational.
    solution: |
      Match each part of the system to the four types:

      | Type | Question | In this system |
      |---|---|---|
      | Descriptive | What happened? | Not described |
      | Diagnostic | Why did it happen? | Not described |
      | **Predictive** | What will happen? | Forecasts next week's delays |
      | **Prescriptive** | What should we do? | Reroutes packages to minimise delays |

      The model forecasts (predictive) and then recommends and executes an action based on that forecast (prescriptive). Prescriptive builds on predictive but does not replace it, so both are present.

      > [!success] Answer: **B**
      > Predictive and prescriptive.

      > [!warning] Watch the long options
      > A, C and D each sound confident but each makes a false structural claim (rerouting is "just operational", prescriptive "subsumes" predictive, diagnostic is required). Check each claim against the four-type definitions rather than choosing the most fluent paragraph.
    related_terms: ["four-types-of-analytics"]
  - id: q4
    title: "Q4 — Counting missing values"
    text: |
      What does the following code print?

      ```python
      import pandas as pd

      df = pd.DataFrame({'product': ['A', 'B', 'C', 'A', 'B'],
                         'revenue': [100, 200, None, 300, 400]})
      print(df['revenue'].isna().sum())
      ```
    options:
      - label: "A"
        text: |
          0
        correct: false
        why: |
          Assumes None is not treated as NaN — in pandas, None in a numeric column becomes NaN.
      - label: "B"
        text: |
          1
        correct: true
        why: |
          Only one value (row with product 'C') is None/NaN. `.isna()` returns a boolean Series, and `.sum()` counts the True values, giving 1.
      - label: "C"
        text: |
          2
        correct: false
        why: |
          Miscounts missing values, perhaps confusing None with empty string or zero.
      - label: "D"
        text: |
          NaN
        correct: false
        why: |
          Assumes `.sum()` on booleans returns NaN — it actually returns an integer count.
    solution: |
      Step by step:

      1. `pd.DataFrame` turns the `None` in the numeric `revenue` list into `NaN`.
      2. `.isna()` returns a boolean Series: `[False, False, True, False, False]`.
      3. `.sum()` adds booleans as 0 and 1, giving `1`.

      ```text
      1
      ```

      > [!success] Answer: **B**
      > Exactly one missing value (the row for product C).
    related_terms: ["missing-values", "pandas", "dataframe"]
  - id: q5
    title: "Q5 — Deleting 15% of rows"
    text: |
      Sababa Market's data team finds that 15% of their `product_weight` column is missing. A junior analyst suggests deleting all rows with missing weights. Why might this be a bad idea?
    options:
      - label: "A"
        text: |
          Deleting rows is never allowed in data science
        correct: false
        why: |
          Deletion is sometimes valid, but not blindly on a large fraction of data.
      - label: "B"
        text: |
          Removing 15% of the data could introduce bias if the missingness is not random and reduces the dataset significantly
        correct: true
        why: |
          Deleting 15% of data can introduce bias if the missing values are not randomly distributed (e.g., heavy items might be missing more often). It also reduces the sample size substantially.
      - label: "C"
        text: |
          Missing values should always be replaced with the mean
        correct: false
        why: |
          Mean imputation is one option but not always the right one — it depends on context.
      - label: "D"
        text: |
          The `product_weight` column should be dropped entirely instead
        correct: false
        why: |
          Dropping the entire column discards useful information that could be partially recovered.
    solution: |
      Missing data is only safely deleted when it is **missing at random** and you can afford to lose the rows. Here 15% is a lot of data, and weights are plausibly missing for a reason (for example, heavy or bulky items recorded differently). If so, dropping those rows changes the sample, which is bias, and it shrinks the dataset.

      > [!success] Answer: **B**
      > Deletion can bias the data if the missingness is not random, and it throws away 15% of the rows.

      > [!tip] What to do instead
      > Check *why* values are missing first. Then choose between imputation (mean, median, a model) and a missing-indicator, rather than a blanket rule. See [[Missing Values]].
    related_terms: ["missing-values"]
  - id: q6
    title: "Q6 — Mean, median and the boxplot dots"
    text: |
      A dataset of apartment prices in Tel Aviv shows the following: mean = ₪3.2M, median = ₪2.1M, standard deviation = ₪1.8M. A boxplot of the same data shows several dots above the upper whisker. Which of the following interpretations is most complete and accurate?
    options:
      - label: "A"
        text: |
          The distribution is right-skewed with outliers. The mean being significantly higher than the median indicates right skew caused by expensive apartments pulling the mean upward. The dots above the upper whisker in the boxplot represent values exceeding Q3 + 1.5 × IQR, confirming the presence of extreme high-end properties. The large standard deviation (₪1.8M) relative to the mean reflects this high variability.
        correct: true
        why: |
          Mean > median indicates right skew. Boxplot dots above the upper whisker confirm high- end outliers (values > Q3 + 1.5×IQR). The large SD reflects the overall spread. Option A integrates all three statistical signals correctly.
      - label: "B"
        text: |
          The distribution is right-skewed with outliers. The mean being higher than the median always indicates right skew, and the outliers visible in the boxplot are the direct cause of this skew — without those outliers, the distribution would be perfectly symmetric. The standard deviation is large because outliers inflate it.
        correct: false
        why: |
          Correctly identifies right skew and outliers but makes a causal error: removing outliers would reduce skew but not guarantee perfect symmetry. The distribution may be inherently skewed even without extreme values. The claim that outliers are the 'direct cause' oversimplifies.
      - label: "C"
        text: |
          The distribution is left-skewed with outliers. Since the standard deviation (₪1.8M) is more than half the mean, the data is spread to the left, and the dots above the upper whisker are the extreme left- tail values that the boxplot displays above the whisker by convention.
        correct: false
        why: |
          Incorrectly identifies left skew — when mean > median, the skew is rightward, not leftward. Also incorrectly claims boxplot dots above the whisker represent left-tail values. The distractor targets confusion about the direction of skew.
      - label: "D"
        text: |
          The distribution is normal with outliers. The mean-median difference of ₪1.1M is small relative to the standard deviation of ₪1.8M, which means the distribution is approximately normal. The boxplot dots are simply rare but expected values in a normal distribution, appearing by chance in the upper tail.
        correct: false
        why: |
          Incorrectly claims normality. A ₪1.1M gap between mean and median is substantial (over 50% of median value), indicating significant asymmetry. In a truly normal distribution, mean ≈ median.
    solution: |
      Read the three signals together:

      1. **Mean (3.2M) above median (2.1M)** means the long tail is on the right: **right skew**. A few very expensive apartments drag the mean up, while the median resists them.
      2. **Dots above the upper whisker** are points beyond Q3 + 1.5 x IQR, so they confirm **high-end outliers**.
      3. **SD of 1.8M** is large relative to the mean, which fits a spread-out, skewed distribution.

      > [!success] Answer: **A**
      > Right-skewed with high-end outliers.

      > [!tip] Rules of thumb
      > mean > median: right skew. mean < median: left skew. mean ≈ median: roughly symmetric. B overclaims that outliers are the "direct cause" and that removing them gives perfect symmetry. D calls a gap of more than half the median "small".
    related_terms: ["distributions", "boxplots", "outliers", "summary-statistics"]
  - id: q7
    title: "Q7 — Mean imputation"
    text: |
      What does the following code print?

      ```python
      import pandas as pd

      df = pd.DataFrame({'score': [85, None, 90, None, 75, 100]})
      df['score'] = df['score'].fillna(df['score'].mean())
      print(df['score'].mean())
      ```
    options:
      - label: "A"
        text: |
          It prints 87.5. Before fillna, the mean of the non-null values [85, 90, 75, 100] is 87.5. The two NaN values are filled with 87.5. After filling, all six values are [85, 87.5, 90, 87.5, 75, 100], and the new mean is (85+87.5+90+87.5+75+100)/6 = 87.5 — mean imputation preserves the original mean.
        correct: true
        why: |
          pandas `.mean()` skips NaN by default, computing (85+90+75+100)/4 = 87.5. After filling two NaNs with 87.5, the overall mean remains 87.5. This is a mathematical property of mean imputation — it always preserves the original mean.
      - label: "B"
        text: |
          It prints 88.33. Before fillna, the mean is computed as (85+90+75+100)/6 = 75.0 because pandas includes NaN as zero when calculating the mean. After filling with 75.0, the new mean becomes 88.33 due to the replaced values shifting the distribution upward.
        correct: false
        why: |
          Incorrectly claims pandas includes NaN as zero in `.mean()`. By default, pandas skips NaN values in aggregation functions (skipna=True). This is a common misconception about how pandas handles missing values in computations.
      - label: "C"
        text: |
          It prints 87.5. Before fillna, the mean of all six values including NaN is computed as (85+0+90+0+75+100)/6 = 58.33. The NaN values are filled with 58.33, and the new mean coincidentally rounds to 87.5 due to the specific values in this dataset.
        correct: false
        why: |
          Also incorrectly claims NaN is treated as zero, but wraps it in a coincidence-based explanation to seem plausible. The 'coincidental rounding' claim is fabricated to make the wrong reasoning appear to produce the right answer.
      - label: "D"
        text: |
          It prints NaN. The `.fillna()` method cannot accept the result of `.mean()` as an argument because `.mean()` returns a scalar computed from a column that contains NaN values, and any computation involving NaN propagates NaN. The column remains unchanged with two missing values, so the final mean is also NaN.
        correct: false
        why: |
          Incorrectly claims NaN propagation prevents `.mean()` from returning a usable value. pandas `.mean()` returns a valid scalar (87.5) by skipping NaN. The `.fillna()` method accepts this scalar without issue.
    solution: |
      ```python
      df = pd.DataFrame({'score': [85, None, 90, None, 75, 100]})
      df['score'].mean()        # pandas skips NaN: (85 + 90 + 75 + 100) / 4 = 87.5
      df['score'].fillna(87.5)  # [85, 87.5, 90, 87.5, 75, 100]
      ```

      New mean: (85 + 87.5 + 90 + 87.5 + 75 + 100) / 6 = 525 / 6 = **87.5**.

      Mean imputation always preserves the mean, because you add values equal to the mean. It does shrink the standard deviation, a side effect worth remembering.

      > [!success] Answer: **A**
      > Prints `87.5`.

      > [!warning] The common trap
      > pandas `.mean()` uses `skipna=True` by default. NaN is skipped, not counted as zero (B and C) and does not poison the result (D).
    related_terms: ["missing-values", "summary-statistics", "pandas"]
  - id: q8
    title: "Q8 — A 70/30 split"
    text: |
      What does the following code print?

      ```python
      from sklearn.model_selection import train_test_split

      data = list(range(10)) # [0, 1, 2, ..., 9]
      train, test = train_test_split(data, test_size=0.3, random_state=42)
      print(len(train), len(test))
      ```
    options:
      - label: "A"
        text: |
          7 3
        correct: true
        why: |
          With `test_size`=0.3, 30% of 10 items go to test (3) and 70% go to train (7). The output is '7 3'.
      - label: "B"
        text: |
          3 7
        correct: false
        why: |
          Reverses train and test sizes — `test_size`=0.3 means test gets 30%, not 70%.
      - label: "C"
        text: |
          5 5
        correct: false
        why: |
          Assumes a 50/50 default split.
      - label: "D"
        text: |
          10 3
        correct: false
        why: |
          Thinks train keeps all 10 items and test is an additional 3.
    solution: |
      `test_size=0.3` means 30% of the 10 items go to the test set.

      - test: 0.3 x 10 = 3
      - train: the remaining 7

      `train_test_split` returns `train, test` in that order, so it prints `7 3`.

      > [!success] Answer: **A**
      > `7 3`.

      > [!tip] Order matters
      > `random_state=42` only fixes *which* items land in each part. It does not change the sizes.
    related_terms: ["train-test-split"]
  - id: q9
    title: "Q9 — False positive"
    text: |
      In a confusion matrix for a binary classifier, what does a False Positive (FP) mean?
    options:
      - label: "A"
        text: |
          The model correctly predicted the positive class
        correct: false
        why: |
          Describes a True Positive (TP), not a False Positive.
      - label: "B"
        text: |
          The model predicted positive, but the actual class was negative
        correct: true
        why: |
          A False Positive means the model predicted 'positive' but was wrong — the actual label was negative. It is a false alarm.
      - label: "C"
        text: |
          The model predicted negative, but the actual class was positive
        correct: false
        why: |
          Describes a False Negative (FN) — predicted negative, actual was positive.
      - label: "D"
        text: |
          The model correctly predicted the negative class
        correct: false
        why: |
          Describes a True Negative (TN), not a False Positive.
    solution: |
      Read the name from right to left: the second word is what the model **predicted**, the first word says whether that prediction was **right**.

      | | Actual positive | Actual negative |
      |---|---|---|
      | **Predicted positive** | TP | **FP** (false alarm) |
      | **Predicted negative** | FN (miss) | TN |

      A false positive is a predicted positive that turned out to be actually negative.

      > [!success] Answer: **B**
      > Predicted positive, actually negative.
    related_terms: ["confusion-matrix", "precision-and-recall"]
  - id: q10
    title: "Q10 — Mean before the split"
    text: |
      A data scientist at a Tel Aviv fintech company builds a churn model. She uses the entire dataset to calculate the mean of a numerical feature (to fill missing values), then splits into train and test sets, trains a Decision Tree, and gets 96% test accuracy. Her colleague warns that the results are unreliable. Why?
    options:
      - label: "A"
        text: |
          Decision Trees always overfit, so the accuracy is meaningless
        correct: false
        why: |
          Decision Trees can overfit, but the core issue here is data leakage, not the model choice.
      - label: "B"
        text: |
          96% accuracy is suspiciously high and must be an error in the code
        correct: false
        why: |
          High accuracy alone is not proof of an error — but in this case, it is artificially inflated by leakage.
      - label: "C"
        text: |
          Computing the mean on the full dataset before splitting caused data leakage — test data influenced the training process
        correct: true
        why: |
          By computing the mean on the full dataset (including test rows) before splitting, information from the test set leaked into the training process. This inflates test accuracy and makes it unreliable.
      - label: "D"
        text: |
          She should have used Random Forest instead of a Decision Tree
        correct: false
        why: |
          Switching models does not fix the data leakage problem — the preprocessing step is the issue.
    solution: |
      The order of operations is the problem. She computed the mean (used to fill missing values) on the **entire** dataset, then split. That mean already contains information from the rows that later became the test set, so the test data influenced preprocessing.

      The correct order:

      1. Split into train and test.
      2. Compute the mean on the **training** set only.
      3. Use that training mean to fill missing values in both train and test.

      > [!success] Answer: **C**
      > Data leakage: test information reached the training process.

      > [!tip] General rule
      > Anything that *learns* from data (means, scalers, imputers, encoders) must be fitted on the training set only. A scikit-learn Pipeline enforces this automatically. See [[Data Leakage]].
    related_terms: ["data-leakage", "train-test-split", "missing-values"]
  - id: q11
    title: "Q11 — Dummies before the split"
    text: |
      A student writes the following code to prepare data for a classification model. The code runs without errors. What is the critical problem?

      ```python
      import pandas as pd
      from sklearn.model_selection import train_test_split
      from sklearn.tree import DecisionTreeClassifier

      df = pd.read_csv('customers.csv')
      df['churn'] = df['churn'].map({'Yes': 1, 'No': 0})
      X = pd.get_dummies(df.drop('churn', axis=1), drop_first=True)
      y = df['churn']
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2,
                                                          random_state=42)
      model = DecisionTreeClassifier()
      model.fit(X_train, y_train)
      print(model.score(X_test, y_test))
      ```
    options:
      - label: "A"
        text: |
          The code applies `pd.get_dummies()` to the entire dataset X before `train_test_split`. This creates dummy columns based on all categories present in the full dataset. If the test set contains a category not seen in training, the model would have been trained on that column — but more importantly, if a rare category appears only in the test set, the training data would still have that dummy column (all zeros), leaking information about the test set's categorical structure into training.
        correct: true
        why: |
          Applying `get_dummies` before splitting means the dummy columns are determined by the full dataset. This is a subtle form of data leakage — the training set 'knows' which categories exist in the test set. While the effect is often small, it violates the principle that the training process should have no knowledge of the test data.
      - label: "B"
        text: |
          The code has no critical problem. It correctly encodes the target variable, applies one-hot encoding with `drop_first` to avoid multicollinearity, splits into train/test, trains a Decision Tree, and evaluates. The order of operations — encoding before splitting — is the standard pandas workflow since `get_dummies` is a deterministic transformation that does not learn statistics from the data.
        correct: false
        why: |
          Incorrectly claims there is no problem and that encoding before splitting is standard. While `get_dummies` is deterministic, the set of columns it creates depends on which categories appear — if done before splitting, the column structure is influenced by test data. The phrase 'does not learn statistics' is misleading because the column creation itself reveals test-set category information.
      - label: "C"
        text: |
          The code incorrectly uses `model.score()` instead of manually computing accuracy with `accuracy_score(y_test, predictions)`. The `.score()` method on DecisionTreeClassifier returns the R² value (regression metric), not classification accuracy, which would produce a misleading evaluation of the model.
        correct: false
        why: |
          Incorrectly claims `.score()` returns R². For classifiers, `.score()` returns accuracy (mean accuracy for classifiers, R² for regressors). `DecisionTreeClassifier.score()` returns classification accuracy. This targets confusion about sklearn's polymorphic `.score()` method.
      - label: "D"
        text: |
          The code fails to scale the features using StandardScaler before fitting the Decision Tree. Without scaling, features with larger numerical ranges will dominate the tree's split decisions, making the model biased toward high-magnitude features and producing unreliable accuracy.
        correct: false
        why: |
          Incorrectly claims Decision Trees require feature scaling. Decision Trees split on individual feature thresholds and are invariant to feature scale — they do not use distance calculations. Scaling is mandatory for distance-based methods (KNN, K-Means, SVM) but not for tree-based models.
    solution: |
      The code runs, so the problem is conceptual. The sequence is:

      1. encode the target;
      2. `pd.get_dummies` on the **whole** feature table;
      3. only then `train_test_split`.

      Because dummies are created before the split, the set of dummy columns is determined by every category in the full dataset, including categories that appear only in what becomes the test set. The training process therefore "knows" the test set's category structure. The principle is that nothing about the test data may shape the training pipeline.

      Checking the other options:

      - **B** says encode-then-split is standard and harmless. That is the claim the question is testing.
      - **C** is false: for a classifier `.score()` returns accuracy, and R squared only for regressors.
      - **D** is false: trees split on thresholds and are not affected by feature scale. Scaling matters for distance-based methods such as KNN and K-Means.

      > [!success] Answer: **A**
      > Encoding before splitting leaks the test set's categorical structure.

      > [!warning] Official answer, but a mild issue
      > The official key itself says the effect is "often small". Because `get_dummies` uses no labels and learns no statistics, many practitioners would call this a minor structural leak rather than a serious one. It is still the best available answer, because B, C and D are each clearly false.
    related_terms: ["data-leakage", "one-hot-encoding", "train-test-split", "decision-tree", "feature-scaling"]
  - id: q12
    title: "Q12 — Why drop_first"
    text: |
      Why does one-hot encoding use `pd.get_dummies(X, drop_first=True)` rather than keeping all dummy columns? Which of the following provides the most complete and accurate explanation?
    options:
      - label: "A"
        text: |
          Keeping all dummy columns creates perfect multicollinearity — each dummy can be perfectly predicted from the others (if it's not category A or B, it must be C). For linear models like Logistic Regression, this makes the coefficient matrix singular (non-invertible), leading to unstable or non- unique solutions. `drop_first=True` removes one category as the reference, breaking the linear dependency. Tree-based models like Decision Trees are not affected by multicollinearity, so `drop_first` is technically optional for them.
        correct: true
        why: |
          Full dummy encoding creates perfect multicollinearity. In linear models, this causes mathematical problems (singular matrix). Dropping one column breaks the dependency while preserving all information (the dropped category is the case where all remaining dummies are 0). Tree- based models are unaffected.
      - label: "B"
        text: |
          Keeping all dummy columns creates redundancy that wastes memory and slows training. `drop_first=True` removes one column purely for computational efficiency — it halves the encoding size and speeds up model fitting. There is no statistical or mathematical reason to drop a column; it is solely a performance optimization that does not affect model accuracy or coefficient interpretation for any model type.
        correct: false
        why: |
          Incorrectly reduces the reason to computational efficiency. The primary reason is mathematical: multicollinearity makes linear models' coefficient estimation unstable or impossible. Memory savings are negligible for typical datasets. The claim that there is 'no statistical reason' is false.
      - label: "C"
        text: |
          Keeping all dummy columns causes data leakage because the model can learn which category was dropped by observing that all dummies are zero. `drop_first=True` prevents this leakage by ensuring that at least one dummy is always 1 for every row, which makes the encoding non-invertible and protects against the model reverse-engineering the dropped category.
        correct: false
        why: |
          Incorrectly frames the issue as data leakage. Multicollinearity is not data leakage — it is a linear algebra problem. The claim about 'non-invertible encoding' and 'reverse-engineering the dropped category' is fabricated. A row with all zeros for remaining dummies simply represents the dropped category — this is by design, not a leak.
      - label: "D"
        text: |
          Keeping all dummy columns is actually the correct approach for all model types. `drop_first=True` is a legacy pandas default that was inherited from R and is now considered a mistake. Modern machine learning best practices recommend keeping all dummy columns (`drop_first=False`) because dropping a category introduces bias by treating one category as the implicit reference, which distorts the model's predictions toward that reference category.
        correct: false
        why: |
          Falsely claims `drop_first=True` is a 'legacy mistake.' It is a well-founded statistical practice for linear models. The claim about 'bias toward the reference category' misunderstands reference encoding — the reference category is not favored; it is simply the baseline against which other categories' effects are measured.
    solution: |
      If a feature has three categories A, B and C and you keep all three dummy columns, then `is_A + is_B + is_C = 1` for every row. Each column is perfectly predictable from the other two: **perfect multicollinearity**.

      - In **linear and logistic regression** this makes the design matrix singular (not invertible), so coefficients are unstable or not unique. This is the [[Dummy-Variable Trap]].
      - `drop_first=True` removes one category, which becomes the **reference**. A row of all zeros means "the dropped category", so no information is lost.
      - **Tree-based models** are not affected, so dropping is optional for them.

      > [!success] Answer: **A**
      > It removes the exact linear dependency among dummies.

      > [!warning] Why not B, C, D
      > It is a linear-algebra issue, not a speed trick (B), not data leakage (C), and not a legacy mistake (D). Dropping a category does not bias predictions toward it: it just becomes the baseline.
    related_terms: ["one-hot-encoding", "dummy-variable-trap", "multicollinearity", "logistic-regression"]
  - id: q13
    title: "Q13 — Reading regression output"
    text: |
      A linear regression model is trained to predict startup valuation (in millions of ₪). The model produces the following output:

      - Intercept: 2.5
      - Coefficient for `num_employees`: 0.8
      - Coefficient for `years_active`: 1.2

      What is the predicted valuation for a startup with 10 employees and 3 years of activity?
    options:
      - label: "A"
        text: |
          ₪14.1M
        correct: true
        why: |
          Prediction = intercept + (0.8 × 10) + (1.2 × 3) = 2.5 + 8.0 + 3.6 = 14.1 million ₪.
      - label: "B"
        text: |
          ₪11.6M
        correct: false
        why: |
          Forgets to add the intercept: 8.0 + 3.6 = 11.6, or miscalculates one term.
      - label: "C"
        text: |
          ₪6.1M
        correct: false
        why: |
          May multiply coefficients together instead of applying each to its feature.
      - label: "D"
        text: |
          ₪16.5M
        correct: false
        why: |
          Might add the number of employees and years first (10+3=13) then multiply by a single coefficient.
    solution: |
      A linear regression prediction is the intercept plus each coefficient times its feature:

      $$\hat{y} = 2.5 + 0.8 \times \text{num\_employees} + 1.2 \times \text{years\_active}$$

      Substituting 10 employees and 3 years:

      $$\hat{y} = 2.5 + 0.8 \times 10 + 1.2 \times 3 = 2.5 + 8.0 + 3.6 = 14.1$$

      The target is in millions of shekels, so the prediction is **14.1M**.

      > [!success] Answer: **A**
      > 14.1M.

      > [!tip] Where the wrong options come from
      > B (11.6) forgets the intercept. C and D come from multiplying the coefficients together or adding the features first.
    related_terms: ["linear-regression"]
  - id: q14
    title: "Q14 — R2 0.99 on train, 0.35 on test"
    text: |
      Galil Ventures built a polynomial regression model (degree=8) to predict startup valuations. The model achieves R² = 0.99 on the training data but R² = 0.35 on the test data. What is the most likely problem, and what should they try?
    options:
      - label: "A"
        text: |
          The model is underfitting — increase the polynomial degree to 12
        correct: false
        why: |
          Increasing the degree would make overfitting worse, not better.
      - label: "B"
        text: |
          The model is overfitting — reduce the polynomial degree or apply regularization
        correct: true
        why: |
          A huge gap between training R² (0.99) and test R² (0.35) is a classic sign of overfitting. The degree-8 polynomial memorized training data. Reducing the degree or using Ridge/Lasso regularization would help.
      - label: "C"
        text: |
          The test data is corrupted — collect new test data
        correct: false
        why: |
          The pattern (high train, low test) is a modeling problem, not a data quality issue.
      - label: "D"
        text: |
          R² is unreliable for polynomial regression — switch to MAE
        correct: false
        why: |
          R² is valid for polynomial regression; the metric is not the issue — the model complexity is.
    solution: |
      | | R squared |
      |---|---|
      | Train | 0.99 |
      | Test | 0.35 |

      A model that fits training data almost perfectly but fails on unseen data has **memorised noise**: classic [[Overfitting]]. A degree-8 polynomial is very flexible, which makes this likely.

      Fixes: lower the polynomial degree, or add regularisation ([[Ridge Regression]] or [[Lasso Regression]]) to shrink coefficients, or get more data.

      > [!success] Answer: **B**
      > Overfitting: reduce the degree or apply regularisation.

      > [!warning] The traps
      > A (raise the degree to 12) makes overfitting worse. C blames the data without evidence. D is wrong because R squared is perfectly valid for polynomial regression: the gap, not the metric, is the symptom.
    related_terms: ["overfitting", "polynomial-features", "r-squared", "ridge-regression", "lasso-regression"]
  - id: q15
    title: "Q15 — What R2 = 0.82 means"
    text: |
      An R² value of 0.82 for a regression model means:
    options:
      - label: "A"
        text: |
          The model is 82% accurate in classification
        correct: false
        why: |
          R² is a regression metric, not a classification accuracy measure.
      - label: "B"
        text: |
          82% of the variance in the target variable is explained by the model
        correct: true
        why: |
          R² (coefficient of determination) measures the proportion of variance in the target variable that is explained by the model's features. An R² of 0.82 means the model captures 82% of the variability.
      - label: "C"
        text: |
          The model makes errors 82% of the time
        correct: false
        why: |
          R² is not an error rate — higher R² means better fit, not more errors.
      - label: "D"
        text: |
          82% of the features are used by the model
        correct: false
        why: |
          R² measures explained variance, not the number of features used.
    solution: |
      $$R^2 = 1 - \frac{SS_{res}}{SS_{tot}}$$

      It is the **share of the target's variance** explained by the model. 0.82 means 82% of the variability in the target is captured, and 18% is not.

      > [!success] Answer: **B**
      > 82% of the variance in the target is explained.

      > [!tip] Do not say "82% accurate"
      > Accuracy is a classification metric. R squared is not an error rate and not a count of features used.
    related_terms: ["r-squared"]
  - id: q16
    title: "Q16 — A negative patents coefficient"
    text: |
      Galil Ventures trained a multiple linear regression to predict startup valuations. The model has R² = 0.78 on the test set. The coefficient for '`number_of_patents`' is -50,000 (negative). A board member says: "This is wrong — more patents should increase valuation. The model is broken." Which of the following best addresses this concern?
    options:
      - label: "A"
        text: |
          The board member may be wrong to assume the model is broken. In multiple regression, each coefficient reflects the effect of that feature holding all other features constant. If '`number_of_patents`' is correlated with another feature (e.g., 'R&`D_spending`'), the negative coefficient may reflect the residual effect after accounting for R&D spending — companies that have many patents relative to their R&D spending may be less efficient. The sign of a coefficient in multiple regression can differ from the univariate correlation due to confounding among features.
        correct: true
        why: |
          In multiple regression, coefficients reflect partial effects — the effect of one feature after controlling for all others. A negative coefficient for patents could result from confounding with correlated features like R&D spending. This is Simpson's paradox in regression. The model is not necessarily broken.
      - label: "B"
        text: |
          The board member is correct — a negative coefficient for patents definitively proves the model is broken. In linear regression, coefficients always match the real-world direction of causal relationships. Since patents are known to increase company value, a negative coefficient indicates a bug in the data pipeline or code, and the model should be discarded and rebuilt from scratch.
        correct: false
        why: |
          Incorrectly claims coefficients must match causal intuition. Regression coefficients capture statistical associations, not causal relationships. A counterintuitive sign does not prove a bug — it may reveal confounding, multicollinearity, or a genuine conditional relationship.
      - label: "C"
        text: |
          The negative coefficient means the model has learned a correct and counterintuitive causal truth: patents actually decrease startup valuations in the Israeli market. Since the model has R² = 0.78, we can be 78% confident that this causal relationship is real. The board member should update their business intuition based on what the model discovered.
        correct: false
        why: |
          Incorrectly interprets the coefficient as causal and R² as a confidence measure. R² measures variance explained, not confidence in causation. Regression models find associations; they cannot establish causal truths without experimental design.
      - label: "D"
        text: |
          The negative coefficient is caused by overfitting. When a multiple regression model has too many features, the coefficients become random and meaningless — they can be positive, negative, or zero with equal probability. The model needs regularization to force all coefficients to match their expected real-world signs, which is the primary purpose of Ridge and Lasso regularization.
        correct: false
        why: |
          Incorrectly claims overfitting makes coefficients random. Overfitting inflates variance but does not produce uniformly random signs. Also falsely claims regularization's purpose is to enforce correct signs — Ridge and Lasso shrink coefficients toward zero to reduce variance, not to enforce sign directions.
    solution: |
      In a **multiple** regression each coefficient is the effect of that variable **holding the others constant**, which can differ in sign from the simple relationship between that variable and the target.

      If `number_of_patents` is correlated with something like R&D spending, the negative coefficient can mean that, at a *given* level of R&D, extra patents go with lower valuation (for example inefficient patent-heavy firms). So the sign is not automatically a bug.

      > [!success] Answer: **A**
      > The model is not necessarily broken: partial effects, confounding and multicollinearity can flip signs.

      > [!warning] Why the others fail
      > B assumes coefficients must match causal intuition. C reads R squared (0.78) as "78% confident" and a coefficient as causal. D says overfitting makes signs random and that Ridge and Lasso enforce sensible signs, but they only shrink coefficients.

      > [!warning] Loose wording in the key
      > The official explanation calls this "Simpson's paradox in regression". Strictly, Simpson's paradox is a reversal between aggregated and grouped data. Here the idea is the same in spirit (conditioning on other variables can flip a sign), so the answer stands, but treat the label as an analogy.
    related_terms: ["linear-regression", "multicollinearity", "confounding-variable", "correlation-vs-causation"]
  - id: q17
    title: "Q17 — Is MAE 50k good enough?"
    text: |
      A model predicting apartment prices produces the following evaluation on the test set: MAE = ₪50,000, RMSE = ₪55,000, R² = 0.92. The average apartment price in the test set is ₪2,000,000. A stakeholder asks: "Is this model good enough to use for investment decisions?" Which analysis is most accurate?
    options:
      - label: "A"
        text: |
          The model has strong statistical performance but its practical adequacy depends on the business context. R² = 0.92 means 92% of price variance is explained. MAE = ₪50,000 means the average prediction is off by ₪50K, which is 2.5% of the average price — quite precise for real estate. However, RMSE = ₪55,000 (close to MAE) suggests errors are fairly consistent without extreme outliers. Whether 2.5% average error is acceptable depends on the investment margin — if deals have thin margins below ₪50K, the model's error may exceed the profit opportunity.
        correct: true
        why: |
          Technical metrics need business context interpretation. The model explains 92% of variance with ~2.5% average error and consistent error distribution (RMSE ≈ MAE). Whether this suffices depends on the investment's risk tolerance and profit margins. No model should be deployed without this business-context evaluation.
      - label: "B"
        text: |
          The model is excellent and ready for deployment. R² = 0.92 means the model is 92% accurate, MAE = ₪50,000 is a tiny fraction of the average price, and RMSE close to MAE confirms consistent performance. Any R² above 0.90 is considered production-ready in real estate modeling, and the stakeholder can confidently use this model for all investment decisions without additional human judgment.
        correct: false
        why: |
          Incorrectly interprets R² as accuracy percentage and fabricates a '0.90 production-ready' threshold. R² measures variance explained, not percentage accuracy. There is no universal production threshold — adequacy depends on the use case. The claim that no human judgment is needed is dangerously overconfident.
      - label: "C"
        text: |
          The model is too inaccurate for investment decisions. MAE = ₪50,000 means the model loses ₪50,000 on every prediction, which would accumulate to millions in losses over a portfolio. R² = 0.92 means there is still 8% unexplained variance, which represents unacceptable risk. No model with R² below 0.99 should be used for financial decisions — the 8% error could bankrupt the fund.
        correct: false
        why: |
          Incorrectly interprets MAE as monetary loss. MAE measures prediction error, not financial loss — a ₪50K prediction error might still lead to profitable decisions depending on the margin. The 0.99 R² threshold is fabricated and unrealistically high for real estate. Also confuses prediction error with financial risk.
      - label: "D"
        text: |
          The model cannot be evaluated with these metrics. MAE, RMSE, and R² are only valid for evaluating classification models, not regression models. For regression, the correct evaluation metrics are precision, recall, and F1-score. The stakeholder should ask the data scientist to recompute the model's precision and recall before making any investment decisions.
        correct: false
        why: |
          Completely wrong — MAE, RMSE, and R² are regression metrics, not classification metrics. Precision, recall, and F1-score are for classification. The distractor targets the fundamental confusion between regression and classification evaluation frameworks.
    solution: |
      Convert the errors to something the business can judge.

      - MAE as a share of the average price: 50,000 / 2,000,000 = **2.5%**.
      - RMSE (55,000) is close to MAE (50,000). RMSE punishes large errors more, so a small gap suggests errors are fairly even with no extreme misses.
      - R squared of 0.92 means 92% of the variance in prices is explained.

      Whether that is "good enough" depends on the decision: if typical deal margins are below 50,000, an average error of 50,000 could wipe out the profit.

      > [!success] Answer: **A**
      > Strong statistics, but adequacy depends on business context.

      > [!warning] Why the others fail
      > B treats R squared as "92% accurate" and invents a production threshold. C reads MAE as money lost on every prediction and invents a 0.99 threshold. D is false: MAE, RMSE and R squared are regression metrics, while precision, recall and F1 are for classification.
    related_terms: ["mae", "rmse", "r-squared"]
  - id: q18
    title: "Q18 — 85% explained variance"
    text: |
      After running PCA on a dataset with 10 features, the first two principal components explain 85% of the total variance. What does this mean?
    options:
      - label: "A"
        text: |
          The first two components are 85% accurate in predicting the target variable
        correct: false
        why: |
          PCA is unsupervised — explained variance is about data variability, not prediction accuracy.
      - label: "B"
        text: |
          85% of the information (variance) in the original 10 features can be captured by just 2 new combined features
        correct: true
        why: |
          Explained variance ratio of 85% for 2 components means those 2 components capture 85% of the total variability in the original 10-feature dataset, enabling dimensionality reduction from 10 to 2 with minimal information loss.
      - label: "C"
        text: |
          85% of the rows in the dataset are explained by the first two components
        correct: false
        why: |
          Explained variance refers to features (columns), not rows.
      - label: "D"
        text: |
          The remaining 8 components explain 85% of the variance
        correct: false
        why: |
          The remaining 8 components explain the other 15%, not 85%.
    solution: |
      Explained variance tells you how much of the dataset's **total variability** a set of components keeps. Two components retaining 85% means you can describe the 10-feature data with 2 new combined features and lose only about 15% of the variance.

      PCA is unsupervised, so this has nothing to do with predicting a target (A). It concerns the **columns** being compressed, not the rows (C). The other 8 components together carry the remaining 15%, not 85% (D).

      > [!success] Answer: **B**
      > 85% of the information (variance) is captured by 2 combined features.
    related_terms: ["pca", "explained-variance"]
  - id: q19
    title: "Q19 — The tiny cluster"
    text: |
      After running K-Means with K=4 on StyleNation's customer data, one cluster has only 12 customers out of 800 (1.5%). The cluster has extremely high spending and very low visit frequency. What should the data team do?
    options:
      - label: "A"
        text: |
          Delete this cluster — it is too small to be meaningful
        correct: false
        why: |
          Small clusters can be the most actionable — deleting without investigation wastes potential business insight.
      - label: "B"
        text: |
          Re-run K-Means with K=3 to eliminate the small cluster automatically
        correct: false
        why: |
          Changing K to avoid a small cluster ignores the possibility that the cluster is genuinely meaningful.
      - label: "C"
        text: |
          Investigate the cluster — it may represent a valuable niche segment (e.g., high-value infrequent buyers) worth targeted marketing
        correct: true
        why: |
          A small cluster is not necessarily meaningless. High spending combined with low visits could represent VIP or wholesale buyers — a valuable niche worth special attention. Business validation of clusters is essential before discarding them.
      - label: "D"
        text: |
          Merge it with the largest cluster to simplify the segmentation
        correct: false
        why: |
          Merging destroys the unique profile of this segment, losing potentially valuable business intelligence.
    solution: |
      A cluster of 12 out of 800 customers (1.5%) with very high spend and low visit frequency looks like a distinct behavioural group, for example big occasional buyers. Clustering is exploratory: the right response to a surprising cluster is to **investigate and validate it with the business**, not to remove it.

      - Deleting (A) or merging (D) throws away the profile.
      - Lowering K to make it vanish (B) is hiding the result rather than understanding it.

      > [!success] Answer: **C**
      > Investigate: it may be a valuable niche segment.
    related_terms: ["k-means", "customer-segmentation"]
  - id: q20
    title: "Q20 — One coupon for four clusters"
    text: |
      StyleNation segmented 800 customers into 4 clusters using K-Means. Cluster profiling shows:
      - Cluster 1 (n=300): Low spending, high visits — "Bargain Browsers"
      - Cluster 2 (n=250): High spending, low visits — "VIP One-Timers"
      - Cluster 3 (n=200): Medium everything — "Average Joes"
      - Cluster 4 (n=50): High spending, high visits — "Loyalists"

      The marketing team proposes sending the same "20% off" coupon to all clusters. Which of the following best critiques this strategy?
    options:
      - label: "A"
        text: |
          A uniform discount ignores the distinct behaviors that segmentation revealed. Cluster 1 (Bargain Browsers) might respond to small frequent discounts since they visit often but spend little. Cluster 2 (VIP One-Timers) might not need discounts at all — they already spend heavily and a discount reduces margin without changing behavior. Cluster 4 (Loyalists) are already spending heavily and visiting often, so discounts leave money on the table. The whole point of segmentation is to tailor strategies per cluster; a one-size-fits-all coupon defeats this purpose.
        correct: true
        why: |
          Segmentation exists to enable differentiated strategies. Each cluster has distinct behavior patterns that call for different interventions. A uniform coupon wastes budget on segments that don't need it and may not effectively activate segments that need different incentives.
      - label: "B"
        text: |
          A uniform discount is the correct approach because K-Means clusters are statistical groupings, not actionable business segments. Cluster labels like 'Bargain Browsers' are subjective interpretations imposed by the analyst, not objective properties of the data. Since the clusters do not represent fundamentally different customer types, treating them differently would introduce unfair bias. Equal treatment is both ethically sound and statistically valid.
        correct: false
        why: |
          Incorrectly claims K-Means clusters are not actionable. The entire purpose of customer segmentation in business is to enable differentiated strategies. While cluster labels are interpreted by analysts, the underlying behavioral differences are real and measurable. The 'ethical bias' framing is a red herring — different marketing to different segments is standard practice, not discrimination.
      - label: "C"
        text: |
          A uniform discount is wrong, but the solution is not tailoring by cluster — it is running K-Means again with K=1 to merge all customers into a single segment and then optimizing the discount amount for that single group. The problem with K=4 is over-segmentation: the marketing team cannot realistically manage 4 separate campaigns, and research shows that more than 2 customer segments always reduces overall campaign ROI.
        correct: false
        why: |
          Reducing to K=1 defeats the purpose of clustering entirely. The claim that 'more than 2 segments always reduces ROI' is fabricated. Many successful businesses operate with 4+ customer segments. The suggestion contradicts the course material on choosing K with business input.
      - label: "D"
        text: |
          A uniform discount would work well for clusters 1, 2, and 3, but cluster 4 (Loyalists) should receive a larger discount (30-40% off) because they are the most valuable customers. The general principle in customer segmentation is to give the highest rewards to the best customers to maintain their loyalty, and smaller rewards to lower-value segments to minimize cost.
        correct: false
        why: |
          Inverts the logic for the best customers. Loyalists are already spending heavily and visiting often — giving them the largest discount unnecessarily reduces margin on customers who would buy anyway. A better strategy might be exclusive access or early releases rather than price discounts. The principle of 'biggest rewards for best customers' is an oversimplification that ignores opportunity cost.
    solution: |
      The point of segmentation is to treat groups **differently**. Compare the profiles with the proposed single "20% off":

      | Cluster | Profile | Does a blanket 20% make sense? |
      |---|---|---|
      | 1 Bargain Browsers | Low spend, high visits | Small, frequent offers could lift spend |
      | 2 VIP One-Timers | High spend, low visits | Discount cuts margin; they already spend |
      | 3 Average Joes | Medium everything | Possibly |
      | 4 Loyalists | High spend, high visits | Discount gives away margin, better to reward with access or early releases |

      > [!success] Answer: **A**
      > A uniform discount ignores the differences the clustering revealed.

      > [!warning] The tempting wrong ideas
      > B says clusters are not actionable (the whole purpose is that they are). C proposes K = 1, which undoes the clustering and invents a "more than 2 segments always reduces ROI" rule. D gives the biggest discount to the most loyal customers, which wastes margin on people who would buy anyway.
    related_terms: ["k-means", "customer-segmentation"]
---

# Practice Quiz (Lectures 1-5)

> Part of: [[Data Science]]
> **Practice quiz** for the graded quiz: 20 multiple-choice questions (A to D), take-home and open-book, about 60 minutes. It covers [[Lecture 1 - Introduction|Lecture 1]] to [[Lecture 5 - Clustering and Dimensionality Reduction|Lecture 5]].

> [!success] Official answer key
> The answers and the per-option explanations come from the lecturer's **Answer Key (v1)**. The key is also available as a download: [Practice Quiz answer key (PDF)](/papers/intro-data-science/practice-quiz-answer-key.pdf). The "Show working" sections are expanded for revision and written by AI; they never change an official answer.

> [!info] How to use it
> Several questions have very long options. Read all four before choosing, and check each sentence in an option, because a distractor is often mostly right with one false claim.

<!--questions-->

> [!tip] Where each lecture shows up
> Lecture 1: Q1 to Q3. Lecture 2: Q4 to Q7. Lecture 3: Q8 to Q12. Lecture 4: Q13 to Q17. Lecture 5: Q18 to Q20.
