---
title: "PS1"
subject: intro-data-science
tags:
  - data-science
  - intro-data-science
  - problem-set
  - classification
  - eda
  - preprocessing
  - titanic
  - scikit-learn
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Load and inspect.** Load the Titanic dataset and get a first look: first 5 rows, the shape, `.info()` and summary statistics, as done with the Sababa Market dataset in Lecture 2.

      *Scenario: an intern at a consultancy is given the Titanic dataset by a maritime insurer who wants to know what affected survival.*
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      **Q1.1 Load the dataset**

      ```python
      path = kagglehub.dataset_download("yasserh/titanic-dataset")
      df = pd.read_csv(os.path.join(path, "Titanic-Dataset.csv"))
      print(f"Shape: {df.shape}")
      ```

      - `kagglehub.dataset_download` fetches the dataset and returns the local folder path.
      - `pd.read_csv` reads the CSV into a [[DataFrame]]; `os.path.join` builds the file path.

      Saved output: shape **(891, 12)**, i.e. 891 passengers and 12 columns.

      **Q1.2 First 5 rows**

      ```python
      df.head()
      ```

      `.head()` shows the first 5 rows. The columns are `PassengerId`, `Survived`, `Pclass`, `Name`, `Sex`, `Age`, `SibSp`, `Parch`, `Ticket`, `Fare`, `Cabin`, `Embarked`.

      **Q1.3 `.info()` and `.describe()`**

      ```python
      print("--- Dataset Info ---")
      df.info()
      print("\n--- Summary Statistics ---")
      df.describe()
      ```

      - `.info()` lists each column's dtype and non-null count. Only `Age` (714 non-null) is visibly short in the saved output shown here (`Cabin` and `Embarked` are covered in Q2).
      - `.describe()` gives count, mean, std, min, quartiles and max for numeric columns. Saved values include: `Survived` mean 0.3838, `Pclass` mean 2.31, `Age` count 714, mean 29.70, median 28.0, min 0.42.

      > [!tip] Intuition
      > The mean of a 0/1 column is the proportion of ones, so the `Survived` mean of 0.3838 is already the survival rate used in Q3.
    related_terms: ["dataframe", "pandas", "exploratory-data-analysis", "summary-statistics"]
  - id: "2a"
    text: |
      **Missing values (2.1).** Missing data is one of the most common real-world problems; where and why it is missing affects every downstream decision. Count the missing values in each column.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      See [[Missing Values]].

      ```python
      missing_counts = df.isna().sum()
      print(missing_counts)
      ```

      `.isna()` gives True where a value is missing; `.sum()` counts the Trues per column.

      | Column | Missing |
      |---|---|
      | Age | 177 |
      | Cabin | 687 |
      | Embarked | 2 |
      | every other column | 0 |
    related_terms: ["missing-values", "pandas"]
  - id: "2b"
    text: |
      **Missing values (2.2, conceptual).** Which columns have missing values? For each, suggest a strategy (fill or drop) and explain why in 1 to 2 sentences.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      > [!success] Student answer
      > 1. **Age**: fill with the mean value to preserve those rows.
      > 2. **Cabin**: leave alone, as it is not thought to be particularly important information.
      > 3. **Embarked**: drop; there are only 2 rows.

      > [!warning] Check
      > - **Age:** the answer says *mean*, but in Q6 the code actually uses the **median**. Both are reasonable; the median is the safer choice here because age is right-skewed (saved mean 29.70 against median 28.0) and it is less affected by [[Outliers]]. Keep the two consistent when revising.
      > - **Cabin:** 687 of 891 rows are missing, about 77% (687/891). That is the real reason to leave it out; the stated reason ("not important") is a guess, not something the data shows.
      > - **Embarked:** the answer says drop the two rows, but Q6 fills them with the mode. Filling keeps the rows and costs nothing for 2 of 891.
    related_terms: ["missing-values", "outliers"]
  - id: "3a"
    text: |
      **Survival overview (3.1).** Before looking at features, understand the balance of the target. Is survival a 50/50 split or imbalanced? This matters for interpreting model performance later. Compute the overall survival rate.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      survival_rate = df['Survived'].mean()
      print(f"Overall survival rate: {survival_rate:.2%}")
      ```

      Saved output: **38.38%**.
    related_terms: ["exploratory-data-analysis", "summary-statistics"]
  - id: "3b"
    text: |
      **Survival overview (3.2).** Draw a bar chart of survived against not survived.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      sns.countplot(x='Survived', data=df, width=0.5)
      plt.xticks(ticks=[0, 1], labels=['Died', 'Survived'])
      ```

      ![](/images/intro-data-science/ps01-q3-survival-countplot.png)

      The chart (from the notebook) shows about 550 passengers who died against about 340 who survived: the classes are **imbalanced** (roughly 62% / 38%), though not extremely so.

      > [!tip] Intuition
      > A model that always predicts "died" would already score about 61.6% accuracy (1 - 0.3838), so any model has to beat that baseline to be useful.
    related_terms: ["seaborn", "matplotlib", "exploratory-data-analysis"]
  - id: "4a"
    text: |
      **Survival by feature (4.1).** Which features seem to influence survival? Show the survival rate by `Pclass`.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      Both charts in Q4 use [[Groupby]]: split rows by a category, then take the mean of the 0/1 `Survived` column within each group.

      ```python
      df.groupby('Pclass')['Survived'].mean().plot(kind='bar')
      plt.xticks(ticks=[0, 1, 2], labels=['1st', '2nd', '3rd'])
      ```

      ![](/images/intro-data-science/ps01-q4-survival-by-pclass.png)

      Reading the saved chart: survival is about 0.63 for 1st class, about 0.47 for 2nd and about 0.24 for 3rd.
    related_terms: ["groupby", "matplotlib", "exploratory-data-analysis"]
  - id: "4b"
    text: |
      **Survival by feature (4.2).** Show the survival rate by `Sex`.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      df.groupby('Sex')['Survived'].mean().plot(kind='bar')
      ```

      ![](/images/intro-data-science/ps01-q4-survival-by-sex.png)

      Reading the saved chart: about 0.74 for female against about 0.19 for male.
    related_terms: ["groupby", "matplotlib", "exploratory-data-analysis"]
  - id: "4c"
    text: |
      **Survival by feature (4.3, conceptual).** Based on the charts, which two features seem most predictive of survival, and what is the real-world explanation?
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      > [!success] Student answer
      > Being female and being in 1st class gave better survival odds. It is well known that women and children were evacuated first, so this makes sense. Richer passengers probably got priority evacuating the ship, hence a 1st-class ticket also raised survival odds.

      > [!tip] Intuition
      > Sex and class are the two features with the biggest gaps between groups in the charts (about 0.74 against 0.19, and about 0.63 against 0.24). Large gaps between group means are what a classifier can exploit. The "women and children first" and "richer passengers had priority" explanations are plausible stories, not something the charts prove (correlation, not causation, see [[Lecture 1 - Introduction]]).
    related_terms: ["correlation-vs-causation", "groupby"]
  - id: "5a"
    text: |
      **Age distribution (5.1).** Age is continuous, so use histograms and boxplots. Draw a histogram of `Age`.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      plt.hist(df['Age'], bins=20)
      ```

      ![](/images/intro-data-science/ps01-q5-age-histogram.png)

      See [[Histograms]]. Saved bin counts show the peak in the 20 to 36 range (up to 98 passengers per bin), a small spike for infants and young children (40 in the first bin, ages 0.42 to about 4.4) and a long right tail to age 80. `plt.hist` drops the 177 missing ages automatically.
    related_terms: ["histograms", "distributions", "matplotlib"]
  - id: "5b"
    text: |
      **Age distribution (5.2).** Draw boxplots of `Age` by `Survived`.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      sns.boxplot(x='Survived', y='Age', data=df)
      ```

      ![](/images/intro-data-science/ps01-q5-age-boxplot-by-survived.png)

      See [[Boxplots]].
    related_terms: ["boxplots", "seaborn", "outliers"]
  - id: "5c"
    text: |
      **Age distribution (5.3, conceptual).** What difference do you see between survivors and non-survivors, and what might explain it?
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      > [!success] Student answer
      > The median ages are nearly identical, but the upper quartile (Q3) and maximum values are noticeably lower for survivors. This reflects "women and children first": younger passengers had higher survival priority, while older adults were disproportionately left behind. Age alone is not deterministic, but the non-survivor age distribution skews older, so younger passengers had a statistical survival advantage.

      > [!warning] Check
      > The chart supports the first half: the medians look about equal (both near 28) and the survivor box is slightly lower (Q3 about 36 against about 39 for non-survivors; upper whisker about 60 against about 66). The wording "**maximum** values noticeably lower" is not right for the raw maximum: the single oldest passenger (age 80) is a *survivor*, shown as an outlier dot. It holds only for the whisker ends. The difference is also modest; age is a much weaker separator than sex or class.
    related_terms: ["boxplots", "outliers", "distributions"]
  - id: "6"
    text: |
      **Handle missing values.** Deal with the missing values found in Q2. Use the median for `Age` and the mode for `Embarked`.

      *Order of operations (as stated in the notebook): strictly, you should split into train and test before filling missing values, otherwise fill values such as the median age leak information from the test set into training. The homework fills first and splits afterwards for simplicity.*
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      > [!info] Order of operations (as stated in the notebook)
      > Strictly, you should split into train and test **before** filling missing values, otherwise fill values such as the median age leak information from the test set into training (data leakage). The homework fills first and splits afterwards for simplicity; production code would reverse this. A [[Scikit-Learn Pipeline]] is the standard fix.

      ```python
      df['Age'] = df['Age'].fillna(df['Age'].median())
      df['Embarked'] = df['Embarked'].fillna(df['Embarked'].mode()[0])
      print(df.isna().sum())
      ```

      - `.fillna(value)` replaces missing entries with `value`.
      - `.mode()` returns a Series (there can be ties), so `[0]` picks the single most frequent port.

      Saved output: `Age` 0 missing, `Embarked` 0 missing; only `Cabin` (687) still has gaps, and it is dropped in Q7.

      > [!tip] Intuition
      > Median for a skewed numeric column, mode for a categorical column: the "typical" value for each type.
    related_terms: ["missing-values", "data-leakage", "scikit-learn-pipeline", "outliers"]
  - id: "7"
    text: |
      **Select features and target.** Keep only useful columns. Identifiers such as `PassengerId` and `Name` carry no pattern; `Cabin` is mostly empty. Define `X` and `y`.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      X = df.drop(columns=['PassengerId', 'Name', 'Cabin', 'Ticket', 'Survived'])
      y = df['Survived']
      ```

      Saved output: `X` has shape (891, 7) with columns `Pclass`, `Sex`, `Age`, `SibSp`, `Parch`, `Fare`, `Embarked`; `y` has shape (891,).

      `Survived` has to be removed from `X`: leaving the answer inside the features would be target leakage. `Ticket` is also dropped (an extra choice beyond the question's list), since it is a near-unique identifier.
    related_terms: ["data-leakage", "supervised-learning", "dataframe"]
  - id: "8"
    text: |
      **One-hot encoding.** Models need numbers, not text. Convert `Sex` and `Embarked` into numeric form with `pd.get_dummies()` and `drop_first=True` to avoid redundancy.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      X_encoded = pd.get_dummies(X, drop_first=True, dtype=int)
      print(f"Encoded shape: {X_encoded.shape}")
      ```

      Saved output: shape **(891, 8)**, with columns `Pclass`, `Age`, `SibSp`, `Parch`, `Fare`, `Sex_male`, `Embarked_Q`, `Embarked_S`.

      See [[One-Hot Encoding]]. `Sex` becomes one column (`Sex_male`, 1 for male) and `Embarked` becomes two (`Embarked_Q`, `Embarked_S`). With `drop_first=True` the first category (`female`, port `C`) is dropped because it is implied when all the others are 0; keeping it would make the columns perfectly redundant.
    related_terms: ["one-hot-encoding", "dummy-variable-trap", "multicollinearity"]
  - id: "9a"
    text: |
      **Train/test split (9.1).** Split into training and test sets (`test_size=0.2`, `random_state=42`).
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      X_train, X_test, y_train, y_test = train_test_split(X_encoded, y, test_size=0.2, random_state=42)
      ```

      Saved output: **712 training rows and 179 test rows** (80% / 20% of 891). `random_state=42` fixes the shuffle so everyone gets the same split. See [[Train Test Split]].
    related_terms: ["train-test-split"]
  - id: "9b"
    text: |
      **Train/test split (9.2, conceptual).** Why split, and what goes wrong if you evaluate on the training data? 2 to 3 sentences.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      > [!success] Student answer
      > We split to test the model on data it has never seen. Evaluated on the training data it would just have memorised patterns and noise, looking artificially accurate while actually overfitting and performing poorly on new data. The test set is the reality check for how well the model generalises.

      This is the [[Bias-Variance Tradeoff]] in practice: a flexible model can drive training error to near zero, so only held-out data reveals overfitting.
    related_terms: ["train-test-split", "overfitting", "bias-variance-tradeoff"]
  - id: "10"
    text: |
      **Decision tree.** Train a decision tree classifier (hint: `DecisionTreeClassifier(random_state=42)`).

      *All four models in Part C follow the same scikit-learn pattern: create, fit, predict, then score with `accuracy_score` (fraction of test passengers classified correctly).*
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      dt_clf = DecisionTreeClassifier(max_depth=5, random_state=42)  # max_depth added to prevent overfitting
      dt_clf.fit(X_train, y_train)
      y_pred_dt = dt_clf.predict(X_test)
      acc_dt = accuracy_score(y_test, y_pred_dt)
      ```

      Saved output: **Decision Tree accuracy 0.7989**.

      A [[Decision Tree]] asks a chain of yes/no questions about features. An unrestricted tree keeps splitting until it memorises the training set; `max_depth=5` caps the number of questions in any chain. This deviates from the hint (no depth cap) as a deliberate choice, noted in the submitted comment.
    related_terms: ["decision-tree", "overfitting", "supervised-learning"]
  - id: "11"
    text: |
      **Logistic regression.** Train a logistic regression (hint: `LogisticRegression(random_state=42, max_iter=1000)`). It estimates the probability that a passenger survived and picks the most likely class.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      scaler = StandardScaler()
      X_train_scaled = scaler.fit_transform(X_train)
      X_test_scaled = scaler.transform(X_test)
      lr_clf = LogisticRegression(random_state=42, max_iter=1000)
      lr_clf.fit(X_train_scaled, y_train)
      y_pred_lr = lr_clf.predict(X_test_scaled)
      acc_lr = accuracy_score(y_test, y_pred_lr)
      ```

      Saved output: **Logistic Regression accuracy 0.8101**.

      - [[Feature Scaling]] with `StandardScaler` rescales every column to mean 0 and standard deviation 1.
      - The scaler is **fit on the training set only** (`fit_transform`) and then only applied (`transform`) to the test set, so no test information leaks in.
      - [[Logistic Regression]] passes a weighted sum of features through the [[Sigmoid Function]] to get a probability between 0 and 1.
    related_terms: ["logistic-regression", "feature-scaling", "sigmoid-function", "data-leakage"]
  - id: "12"
    text: |
      **K-nearest neighbours.** KNN predicts by taking a vote among the K closest training passengers. Because it uses distances, large-range features (`Fare`, 0 to 512) would dominate small-range ones (`SibSp`, 0 to 8), so scale first with `StandardScaler`. Use `KNeighborsClassifier(n_neighbors=5)`.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      Knn_clf = KNeighborsClassifier(n_neighbors=5)
      Knn_clf.fit(X_train_scaled, y_train)
      y_pred_knn = Knn_clf.predict(X_test_scaled)
      acc_knn = accuracy_score(y_test, y_pred_knn)
      ```

      Saved output: **KNN accuracy 0.8045**.

      The scaled arrays `X_train_scaled` and `X_test_scaled` come from the Q11 cell, which is why the scaler is not repeated here. The notebook therefore depends on cell order. See [[KNN]] and [[Euclidean Distance]].
    related_terms: ["knn", "euclidean-distance", "feature-scaling"]
  - id: "13"
    text: |
      **Random forest.** Train a random forest (hint: `RandomForestClassifier(random_state=42, n_estimators=100)`), the "wisdom of the crowd".
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      rf_cld = RandomForestClassifier(random_state=42, n_estimators=100)
      rf_cld.fit(X_train, y_train)
      y_pred_rf = rf_cld.predict(X_test)
      acc_rf = accuracy_score(y_test, y_pred_rf)
      ```

      Saved output: **Random Forest accuracy 0.8212**.

      A [[Random Forest]] grows 100 trees, each on a random resample of the rows and random subsets of features, and takes a majority vote ([[Ensemble Methods]]). Trees do not depend on feature scale, so it uses the **unscaled** `X_train`. (The variable is named `rf_cld`, a typo for `rf_clf`, used consistently in Q16.)
    related_terms: ["random-forest", "ensemble-methods", "decision-tree"]
  - id: "14a"
    text: |
      **Model comparison (14.1).** Put all four models side by side in a DataFrame with columns `Model` and `Accuracy`.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      results = pd.DataFrame({
          'Model': ['Decision Tree', 'Logistic Regression', 'KNN', 'Random Forest'],
          'Accuracy': [acc_dt, acc_lr, acc_knn, acc_rf]
      })
      print(results)
      ```

      | Model | Accuracy |
      |---|---|
      | Decision Tree | 0.7989 |
      | Logistic Regression | 0.8101 |
      | KNN | 0.8045 |
      | Random Forest | **0.8212** |

      > [!warning] Check
      > The four scores span only about 2.2 points (0.7989 to 0.8212) on a **179-row test set**, where one passenger is worth 0.56 points of accuracy. The Random Forest "win" is about 4 passengers more than the decision tree (0.8212 and 0.7989 correspond to 147 and 143 correct of 179). With a single split this is a small, noisy gap. [[Cross-Validation]] would give a sturdier comparison.
    related_terms: ["cross-validation", "dataframe", "pandas"]
  - id: "14b"
    text: |
      **Model comparison (14.2).** Draw a bar chart of the accuracies.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      results.plot(x='Model', y='Accuracy', kind='bar', legend=False)
      plt.ylim(0, 1)
      plt.ylabel('Accuracy')
      plt.title('Model Accuracy Comparison')
      ```

      ![](/images/intro-data-science/ps01-q14-model-accuracy-bars.png)
    related_terms: ["matplotlib", "pandas"]
  - id: "15a"
    text: |
      **Confusion matrix and detailed metrics (15.1).** Identify the best model and show its confusion matrix.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      model_predictions = {
          'Decision Tree': y_pred_dt,
          'Logistic Regression': y_pred_lr,
          'KNN': y_pred_knn,
          'Random Forest': y_pred_rf
      }
      best_model_name = results.loc[results['Accuracy'].idxmax(), 'Model']
      y_pred_best = model_predictions[best_model_name]
      cm = confusion_matrix(y_test, y_pred_best)
      ```

      - `idxmax()` returns the row index of the highest accuracy; `.loc` reads the model name from that row, so the code picks the best model automatically.

      Saved output: best model **Random Forest**.

      | | Predicted not survived | Predicted survived |
      |---|---|---|
      | **Actually not survived** | 91 (TN) | 14 (FP) |
      | **Actually survived** | 18 (FN) | 56 (TP) |

      ![](/images/intro-data-science/ps01-q15-confusion-matrix-rf.png)

      Check: accuracy = (91 + 56) / 179 = 147/179 = 0.8212, matching Q13. See [[Confusion Matrix]].
    related_terms: ["confusion-matrix", "random-forest"]
  - id: "15b"
    text: |
      **Confusion matrix and detailed metrics (15.2).** Print a classification report for the best model.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      report = classification_report(y_test, y_pred_best)
      print(report)
      ```

      | Class | Precision | Recall | F1 | Support |
      |---|---|---|---|---|
      | 0 (not survived) | 0.83 | 0.87 | 0.85 | 105 |
      | 1 (survived) | 0.80 | 0.76 | 0.78 | 74 |
      | accuracy | | | 0.82 | 179 |

      Recomputed from the matrix: precision for class 1 = 56/70 = 0.80, recall for class 1 = 56/74 = 0.757, precision for class 0 = 91/109 = 0.83, recall for class 0 = 91/105 = 0.867. All match. See [[Precision and Recall]].
    related_terms: ["precision-and-recall", "confusion-matrix"]
  - id: "15c"
    text: |
      **Confusion matrix and detailed metrics (15.3, conceptual).** How many passengers did the best model wrongly predict as "survived" when they did not? What is this error called? Why might a maritime insurer care?
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      > [!success] Student answer
      > This is the number of **false positives**: passengers the model predicted would survive but who actually died. The model had 14/70 of these. A maritime insurer would care because this error means the model is underestimating risk, which can lead to underpricing policies and paying out more claims than expected.

      > [!tip] Intuition
      > The count is **14**, as the matrix shows. The "/70" is the number the model *predicted* as survivors (56 + 14 = 70), so 14/70 = 20% is the share of "survived" predictions that were wrong, which is 1 minus the class-1 precision (0.80). It is not a share of all deaths (14 of 105 actual deaths is about 13%).
    related_terms: ["confusion-matrix", "precision-and-recall"]
  - id: "16a"
    text: |
      **Feature importance (16.1).** Random forests report which features contributed most. Compute and plot feature importances as a horizontal bar chart.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      ```python
      feature_importances = pd.Series(rf_cld.feature_importances_, index=X_encoded.columns)
      feature_importances.sort_values().plot(kind='barh')
      plt.title('Feature Importances from Random Forest')
      plt.xlabel('Importance')
      plt.tight_layout()
      plt.show()
      ```

      `feature_importances_` gives each feature's share of the total impurity reduction ([[Gini Impurity]]) across all trees, summing to 1. Pairing it with `X_encoded.columns` labels each value.

      ![](/images/intro-data-science/ps01-q16-feature-importance-rf.png)

      Reading the saved chart (approximate values): `Sex_male` about 0.27, `Fare` about 0.27, `Age` about 0.25, `Pclass` about 0.08, `SibSp` about 0.05, `Parch` about 0.04, `Embarked_S` about 0.02, `Embarked_Q` about 0.01.
    related_terms: ["random-forest", "gini-impurity", "matplotlib"]
  - id: "16b"
    text: |
      **Feature importance (16.2, conceptual).** Which feature is most important; does that match the EDA? 2 to 3 sentences.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      > [!success] Student answer
      > The most important feature is `Sex_male`, which makes sense as females were more than 3 times as likely to have survived as males.

      > [!warning] Check
      > - `Sex_male` is only **marginally** first: the chart shows `Fare` at almost the same length (about 0.27 each), with `Age` close behind (about 0.25). Calling it "the most important" is fair, but the three leaders are close.
      > - "More than 3 times": from the Q4.2 chart, 0.74 / 0.19 is about 3.9, so it holds (roughly).
      > - Importances from impurity are biased towards continuous features with many split points (`Fare`, `Age`), which may inflate them against binary features.
    related_terms: ["random-forest", "gini-impurity", "exploratory-data-analysis"]
  - id: "17a"
    text: |
      **Precision against recall (a).** The insurer might use the model in two ways. (a) **Pricing risk:** identify passengers likely to NOT survive, to set higher premiums. Should the company prioritise precision or recall? Explain in 2 to 3 sentences.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      > [!success] Student answer
      > **(a) Pricing risk: precision**, for the "likely to NOT survive" prediction. Flagged passengers should truly be high risk, so the insurer avoids overcharging or misclassifying low-risk people as high risk.

      > [!tip] Intuition
      > Precision = of those flagged, how many were right (cost of a false alarm). Recall = of the truly at-risk, how many were caught (cost of a miss). The answer follows from which mistake is more expensive in each scenario.
      >
      > **Consistency with Q15.3:** in Q15.3 the "bad" error was a false positive on *survived* (underpricing). In Q17(a) the flagged class is *not survived*, so the same mistake appears as a false negative on that class. Check which class is called "positive" before reading a precision or recall number.
    related_terms: ["precision-and-recall", "confusion-matrix"]
  - id: "17b"
    text: |
      **Precision against recall (b).** (b) **Safety investment:** identify ALL passengers at risk, to invest in safety measures. Should the company prioritise precision or recall? Explain in 2 to 3 sentences.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      > [!success] Student answer
      > **(b) Safety investment: recall**, to catch as many at-risk passengers as possible. Missing a passenger who is actually at risk costs more here than some false alarms, because safety measures should protect everyone who might need them.
    related_terms: ["precision-and-recall", "confusion-matrix"]
  - id: "18"
    text: |
      **Final recommendation.** Write 4 to 6 sentences covering: what you found in the data, which model performed best and how well, the key factors that predict survival, and what you would recommend the client focus on.
    solution: |
      > [!info] Student answer (Alfie's submission), not an official key

      > [!success] Student answer
      > The Titanic data shows that survival was not balanced and that passenger characteristics strongly influenced outcomes. The Random Forest model was the best performer, with the highest test accuracy among the classifiers, and it confirmed that sex and passenger class were the most important predictors. In particular, being male sharply reduced survival probability, while first-class passengers had higher odds of surviving. I would recommend the client focus on including demographic and class-related factors in their risk scoring, and to treat underestimation of high-risk passengers carefully because false positives or underpriced policies can lead to financial losses.

      > [!warning] Check
      > - **Numbers missing:** the summary never states the accuracy (0.8212, about 82%) or the survival rate (38.4%), which "how well" and "what did you find" call for.
      > - **Class claim:** it says the forest "confirmed" that sex *and passenger class* were the most important. In the Q16 chart `Pclass` ranks 4th (about 0.08), behind `Sex_male`, `Fare` and `Age`. Class matters in the EDA (Q4.1), but `Fare` partly carries the same information, so the forest splits the credit. A more accurate sentence: sex was the top feature (tied with fare), with age and fare close behind.
      > - **Terminology:** "false positives" here means predicting survival for someone who died (consistent with Q15.3).
    related_terms: ["random-forest", "precision-and-recall", "confusion-matrix"]
---

*Related: [[Lecture 1 - Introduction]], [[Lecture 2 - EDA and Charts]], [[Lecture 3 - Classification, KNN, Random Tree]]*
