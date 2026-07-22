---
title: "Preparation Questions — Loan Pipeline (15 Questions)"
subject: machine-learning
source_doc: /papers/machine-learning/loan-pipeline-brief-and-prep-questions.pdf
tags:
  - machine-learning
  - exam-prep
  - loan-pipeline
  - preparation-questions
  - overfitting
  - data-leakage
  - model-selection
ai_drafted: false
questions:
  - id: "1"
    text: |
      **Overfitting and underfitting.**

      What is **overfitting**, and what is **underfitting**? For each one, describe what you would see when you compare performance on the training data with performance on the test data, and give one way to fix it.
    related_terms:
      - overfitting
      - bias-variance-tradeoff
      - regularization
    solution: |
      **Overfitting** is when a model learns the noise and accidents of the training data rather than the underlying pattern. It has effectively memorised the training rows, so it performs well on them and poorly on anything new.

      **Underfitting** is the opposite: the model is too simple (or too constrained) to capture the real pattern, so it performs poorly *everywhere* — training data included.

      | | Training performance | Test performance | The tell |
      |---|---|---|---|
      | **Overfitting** | high | much lower | a large train–test **gap** |
      | **Underfitting** | low | low (similar) | both scores poor, small gap |
      | **Good fit** | high | close to training | small gap, both good |

      **Fixes**

      - *Overfitting*: simplify the model (fewer layers/units, shallower trees), add [[regularization|regularisation]], gather more training data, or stop training earlier (early stopping).
      - *Underfitting*: use a more flexible model, add or engineer better features, train longer, or reduce regularisation.

      > [!warning] You cannot diagnose either one in our pipeline
      > The notebook **never prints training accuracy** — only test accuracy. With one number and no comparison, the train–test gap is invisible, so nobody could tell you whether the network's fixed 30 epochs overfitted, underfitted, or landed well.
      >
      > It is worse than that: because customers appear on **both sides** of the split, the "test" set is not unseen data at all. The gap would be artificially small even if you did print it.

  - id: "2"
    text: |
      **Bias.**

      What does it mean to say a model has **high bias**? How does this relate to how complex the model is, and how does it relate to underfitting?
    related_terms:
      - bias-variance-tradeoff
      - overfitting
    solution: |
      **High bias** means the model makes strong, systematic assumptions about the shape of the relationship, and those assumptions are wrong. The errors are not random scatter — they lean consistently in one direction, because the model *cannot* represent the true pattern no matter how much data you give it.

      The classic example: fitting a straight line to data that genuinely curves. Add a million more rows and the line stays wrong in the same places.

      **Relationship to complexity**

      Bias falls as model complexity rises. A linear model has high bias and low variance; a deep tree or large neural network has low bias and high variance. This is the [[bias-variance-tradeoff|bias–variance trade-off]] — the total error is minimised somewhere in the middle, not at either extreme.

      | Model complexity | Bias | Variance | Typical failure |
      |---|---|---|---|
      | Too simple | **high** | low | underfitting |
      | About right | moderate | moderate | — |
      | Too complex | low | **high** | overfitting |

      **Relationship to underfitting**

      **High bias is the cause; underfitting is what you observe.** A high-bias model cannot fit the training data well, so training *and* test scores are both poor and close together. That pattern — bad everywhere, small gap — is the signature of underfitting, and it points at bias as the culprit.

  - id: "3"
    text: |
      **Accuracy and baselines.**

      About **14%** of the loans in our data end in default. What accuracy would you get by simply predicting "no default" for every customer? Given that, why is accuracy a weak way to judge this model, and which measures would show you how it actually handles defaulters?
    related_terms:
      - accuracy
      - confusion-matrix
      - precision-and-recall
      - roc-curve
      - auc
    solution: |
      **The baseline: ~86%.**

      If 14% default, then 86% do not. A rule that says "no default" for everybody is right on all 86% of the non-defaulters and wrong on all 14% of the defaulters:

      $$\text{accuracy} = 1 - 0.14 = 0.86$$

      That rule requires no data, no model, and no training — and it catches **zero** defaulters. It is worthless to the bank and scores 86%.

      **Why accuracy is weak here**

      On imbalanced data, accuracy is dominated by the majority class. Most of the score is already banked before the model does anything useful, so a number like 98% has to be read as *"12 points above free"*, not *"nearly perfect"*. Accuracy also cannot distinguish the two error types, which cost the bank very different amounts.

      **What to measure instead** — all read off a [[confusion-matrix]]:

      | Measure | Formula | The question it answers |
      |---|---|---|
      | [[recall]] (sensitivity) | $\frac{TP}{TP + FN}$ | Of everyone who defaulted, how many did we catch? |
      | [[precision]] | $\frac{TP}{TP + FP}$ | Of everyone we flagged, how many really defaulted? |
      | F1 | harmonic mean of the two | single number balancing both |
      | [[auc\|ROC-AUC]] / PR-AUC | area under the curve | quality across *all* thresholds, not just 0.5 |

      > [!danger] The notebook's own baseline claim is wrong
      > It says the models are *"far better than a 50/50 coin flip."* A coin flip is the baseline for a **balanced** problem. The correct baseline here is the majority-class rule at **86%** — and the notebook never computes it, never reports recall, and never builds a confusion matrix.

  - id: "4"
    text: |
      **Regression vs classification.**

      What is the difference between **regression** and **classification**? Give one banking example of each, and say which of the two the loan-approval problem is.
    related_terms:
      - classification
      - linear-regression
      - logistic-regression
      - supervised-learning
    solution: |
      Both are [[supervised-learning|supervised learning]] — you have labelled examples and want to predict the label for new cases. The difference is **what kind of thing the label is**.

      | | Regression | Classification |
      |---|---|---|
      | Target | continuous number | discrete category |
      | Output | a quantity | a class (often with a probability) |
      | Banking example | *How much* will this customer spend next month? | *Will* this customer default: yes or no? |
      | Typical models | [[linear-regression\|linear]], ridge, lasso | [[logistic-regression\|logistic]], trees, [[random-forest\|forests]] |
      | Typical metrics | [[rmse\|RMSE]], MAE, [[r-squared\|R²]] | accuracy, [[precision-and-recall\|precision/recall]], AUC |

      **The loan-approval problem is classification.** The decision is binary — approve or reject — and the label `default` takes only the values 0 and 1.

      > [!tip] The useful nuance
      > Although the *decision* is binary, the useful *output* is a *probability* of default. Both models here can produce one — the neural network's sigmoid output already is one, and `rf.predict_proba()` gives the forest's.
      >
      > That probability is what lets you set a **threshold from the costs** rather than accepting the 0.5 default. The pipeline throws this away by hard-thresholding at `> 0.5` immediately, which is exactly the flexibility the asymmetric-cost question needs.

  - id: "5"
    text: |
      **Deep learning.**

      What is **deep learning**, and when is a neural network the better choice? For a table of about **6,500 rows and 7 columns**, would you expect a neural network or a tree-based model to do better, and why?
    related_terms:
      - random-forest
      - decision-tree
      - ensemble-methods
    solution: |
      **Deep learning** is machine learning with neural networks of many stacked layers. Each layer transforms the output of the last, so the network learns its own hierarchy of features rather than being given them — edges to shapes to objects in images, characters to words to meaning in text.

      **When neural networks win**

      - **Unstructured data**: images, audio, video, free text.
      - **Very large datasets**: millions of examples, enough to fit millions of parameters.
      - **Complex structure worth learning automatically**: spatial, sequential, or hierarchical patterns that hand-crafted features cannot capture.

      **When tree ensembles win**

      - **Tabular data with meaningful named columns** — exactly our case.
      - **Modest dataset sizes**, where a large network simply overfits.
      - **Mixed types and missing values**, which trees handle natively.
      - **When you must explain the decision** (see the regulator constraint).

      **For 6,500 rows × 7 columns: expect the tree-based model to do at least as well, and prefer it.**

      Gradient-boosted trees and random forests remain the strongest performers on small-to-medium tabular problems, and this dataset is genuinely small. Note the mismatch in the notebook:

      ```python
      layers.Dense(256, activation="relu"),
      layers.Dense(256, activation="relu"),
      layers.Dense(256, activation="relu"),
      ```

      Three 256-unit layers is roughly **135,000 parameters** fitted to ~5,200 training rows of 7 features — far more capacity than the problem needs, with no validation set watching for overfitting.

      > [!note] The real answer to "which model"
      > On this data the two scored ~98% and ~99% purely because both were reading leaked columns. Once that is fixed, the sample exam's corrected figures are **36% vs 37% recall** — a tie. The tree wins on explainability and cost, not on accuracy.

  - id: "6"
    text: |
      **Ensembles.**

      What is an **ensemble** of models? Explain simply why combining many decision trees usually works better than a single tree, and what makes the individual trees in a Random Forest different from one another.
    related_terms:
      - ensemble-methods
      - random-forest
      - decision-tree
      - gini-impurity
    solution: |
      An **[[ensemble-methods|ensemble]]** combines the predictions of many models into one. For classification the usual combination is a majority vote; for regression, an average.

      **Why many trees beat one**

      A single deep [[decision-tree|decision tree]] is *unstable*: change a few training rows and you get a noticeably different tree. It has low bias but high variance — it fits the training data closely, including its noise.

      Averaging many such trees cancels much of that noise. Each tree makes errors, but if the errors are **not the same errors**, they partly cancel in the vote while the genuine signal — which all trees pick up — reinforces. The result keeps the low bias of trees and sheds much of the variance.

      The italicised condition is everything: **the trees must be different from each other.** A hundred identical trees is just one tree, a hundred times.

      **How a [[random-forest|Random Forest]] makes its trees differ**

      1. **Bagging (bootstrap sampling)** — each tree trains on its own random sample of the rows, drawn *with replacement*. Different trees see different data.
      2. **Random feature subsetting** — at each split, the tree may only consider a random subset of the features. This is what stops every tree from leading with the same dominant predictor.

      In our notebook `n_estimators=100` builds 100 such trees:

      ```python
      rf = RandomForestClassifier(n_estimators=100, random_state=42)
      ```

      > [!warning] Diversity cannot rescue bad data
      > All 100 trees here trained on the same leaked `avg_days_late` and `collections_flag`. When every tree sees the same corrupted signal, they agree confidently and are all wrong together. Ensembling reduces **variance**, not **bias from broken features**.

  - id: "7"
    text: |
      **Parameter vs hyperparameter.**

      What is the difference between a **parameter** and a **hyperparameter**? Give two examples of each from `loan_pipeline.ipynb`, and say where hyperparameters should be chosen.
    related_terms:
      - hyperparameter-tuning
      - validation-set
      - cross-validation
    solution: |
      | | **Parameter** | **Hyperparameter** |
      |---|---|---|
      | Set by | the fitting algorithm | the human, before training |
      | Learned from data? | yes | no |
      | When fixed | during `.fit()` | before `.fit()` |
      | Changing it means | — | retraining |

      **Two parameters from the notebook** (neither appears in the code — that is the point; they are learned):

      1. The **split thresholds and leaf values** inside each of the 100 trees, chosen by minimising [[gini-impurity|Gini impurity]].
      2. The **weights and biases** of the network's dense layers, fitted by gradient descent.

      **Two hyperparameters from the notebook** (all typed by hand):

      1. `n_estimators=100` — the number of trees.
      2. `epochs=30` — training passes for the network.

      Also hyperparameters here: the three 256-unit layers, `batch_size=64`, `optimizer="adam"`, and `test_size=0.2`.

      **Where hyperparameters should be chosen: on a [[validation-set|validation set]]** — or by [[cross-validation|cross-validation]] within the training data. Never on the test set, which must be touched exactly once, at the very end.

      > [!danger] Both notebook comments get this wrong
      > *"(model parameters: `n_estimators=100`, default settings are fine)"*
      > *"(model parameters: 3 layers, 30 epochs, no tuning needed)"*
      >
      > Every value listed is a **hyperparameter**, not a parameter. And "no tuning needed" is not a finding — the pipeline has no validation set, so no tuning was *possible*. Nothing here was chosen; it was assumed.

  - id: "8"
    text: |
      **Train, validation and test.**

      What is each of the three sets — **training**, **validation** and **test** — for? What goes wrong if you choose your settings by testing them on the test set, and what goes wrong if there is no validation set at all, as in our pipeline?
    related_terms:
      - train-test-split
      - validation-set
      - cross-validation
      - data-leakage
    solution: |
      | Set | Purpose | How often you may use it |
      |---|---|---|
      | **Training** | fit the model's parameters | continuously |
      | **Validation** | choose hyperparameters; decide when to stop; compare candidate models | many times |
      | **Test** | estimate performance on genuinely unseen data | **once**, at the very end |

      A common split is 60/20/20, and every learned quantity — imputation values, scaler statistics, encodings — must be computed on **training only** and applied outward.

      **What goes wrong if you tune on the test set**

      Every time you consult the test set to make a decision, a little of it leaks into the model. Try 20 hyperparameter combinations and pick the best-scoring one, and you have selected the setting that best fits *that particular test set*, including its noise. The reported number is then an optimistic in-sample score wearing the costume of an out-of-sample one — and the model will underperform it in production.

      **What goes wrong with no validation set at all — our pipeline**

      ```python
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      nn.fit(X_train, y_train, epochs=30, batch_size=64, verbose=0)
      ```

      Two sets, not three. No `validation_data`, no `callbacks`. Consequences:

      - **Nothing chose 30 epochs.** It could be far too few or long past the overfitting point, and there is no curve to look at.
      - **No early stopping is possible** — that requires a monitored validation loss.
      - **No honest way to tune anything.** The only remaining held-out data is the test set, so any tuning would burn it.
      - **No model comparison ground.** Choosing between the forest and the network on test scores is itself a decision made on the test set.

  - id: "9"
    text: |
      **Data leakage.**

      What is **data leakage**? Give the general definition, then name the columns in `loans.csv` that leak and explain exactly why each one cannot be used to decide on a new applicant.
    related_terms:
      - data-leakage
      - train-test-split
      - feature-scaling
    solution: |
      **[[data-leakage|Data leakage]]** is when information reaches the model during training that would not genuinely be available at prediction time. The model exploits it, scores brilliantly in testing, and fails in production — because the shortcut it learned does not exist in the real world.

      **The leaking columns**

      **1. `avg_days_late`** — *"How late the borrower's payments have run, in days."*

      ```python
      days_late = rng.uniform(2, 35) if default else rng.exponential(2.5)
      ```

      Computed directly **from `default`**. Beyond that, it is logically impossible for an applicant: you cannot have been late on a loan you have not been given. A new applicant has no payment history *on this loan*, because this loan does not exist.

      **2. `collections_flag`** — *"Whether the collections department has been involved."*

      ```python
      collections = int((default and rng.random() < 0.65) or rng.random() < 0.05)
      ```

      Also branches on `default`. Collections only pursue borrowers who have already stopped paying — an event strictly after origination.

      Both are **consequences of the outcome**, and together they are the reason accuracy reads ~98% instead of something near 86%.

      **Two further leaks that are not columns**

      **3. Preprocessing fitted before the split.** `df["income"].mean()` and `StandardScaler().fit_transform(X)` both run over the *whole* table, so test-set statistics enter the training features.

      **4. Customers on both sides of the split.** Each customer has 3–8 near-identical rows carrying the same label, and the split is by row — so the model sees most customers in training and is then tested on the rest of their rows.

      > [!tip] The decision-day test
      > For every column, ask: *would the bank know this value on the morning the application arrives?* `income`, `self_employed`, `credit_score` and `loan_amount` pass. `avg_days_late` and `collections_flag` fail. `month` and `customer_id` are warehouse artefacts and are not properties of an applicant at all.

  - id: "10"
    text: |
      **What a row represents.**

      What does one row of `loans.csv` represent, and how many rows does a single customer have? Explain why splitting the data randomly by row is a problem here, and what kind of split solves it.
    related_terms:
      - train-test-split
      - cross-validation
      - data-leakage
    solution: |
      **One row = one customer-month** — a monthly billing snapshot of one existing loan, not one applicant and not one lending decision.

      **Rows per customer: 3 to 8.**

      ```python
      for month in range(1, int(rng.integers(3, 9)) + 1):
          rows.append({...})
      ```

      1,200 customers produce **6,557 rows**, about 5.5 rows each. Within a customer, `income`, `self_employed`, `credit_score`, `loan_amount`, `collections_flag` and — critically — `default` are all **identical**; only `month` and a slightly jittered `avg_days_late` move.

      **Why a random row-level split breaks**

      ```python
      train_test_split(X, y, test_size=0.2, random_state=42)
      ```

      With ~5.5 rows per customer, a random 80/20 row split puts nearly **every** customer on both sides. The model memorises "customer with income 11,240 and score 703 → default = 1" from the training rows, then meets four near-identical rows in the test set and recalls the answer.

      The reported score therefore measures **recognition, not prediction** — the one thing a test set exists to rule out.

      **The split that fixes it: a grouped split.**

      Split **by `customer_id`**, so all of a customer's rows land on one side. In scikit-learn: `GroupShuffleSplit` or `StratifiedGroupKFold` with `groups=df["customer_id"]`.

      > [!warning] But the deeper fix is restructuring
      > A grouped split makes the *evaluation* honest. It does not make the *unit* right: the bank makes one decision per **application**, so the table should hold one row per application, containing only decision-day information. Grouping is the minimum; restructuring is the real answer.

  - id: "11"
    text: |
      **Missing values.**

      In the pipeline, missing `income` is filled with the mean of the whole table and missing `credit_score` is filled with `0`. Give **three separate problems** with those two lines, and say what should be done instead.
    related_terms:
      - missing-values
      - data-leakage
      - feature-scaling
      - outliers
    solution: |
      ```python
      df["income"] = df["income"].fillna(df["income"].mean())
      df["credit_score"] = df["credit_score"].fillna(0)
      ```

      **Problem 1 — computed before the split (leakage).**
      The mean is taken over *every* row, test rows included, and both lines run before `train_test_split`. Test-set information is baked into the training features, so the test score is no longer an estimate of unseen performance.

      **Problem 2 — `0` is impossible on a 300–850 scale.**
      Zero is not a low credit score; it is not a score. And it does not stay quiet: after standardisation it becomes an extreme negative [[outliers|outlier]] several standard deviations out, distorting the scaler's statistics and dominating any distance- or gradient-based model. The tree will simply carve out a "score < 300" branch that means "data was missing" — learning the artefact, not the risk.

      **Problem 3 — the missingness is informative, and both lines destroy it.**

      ```python
      income = np.nan if rng.random() < (0.30 if self_emp else 0.05) else round(income)
      ```

      Self-employed borrowers are missing income at **30%**, salaried at **5%** — six times the rate. Missingness correlates with employment type, which genuinely drives risk. Overwriting the gaps with a constant throws that signal away.

      **A fourth, specific to `income`**: the column mixes **monthly and annual** figures, so its mean is the average of a bimodal mixture and describes neither population.

      **What to do instead**

      1. **Split first**, then compute every fill value from the **training rows only**.
      2. Use the **median**, not the mean — robust to skew and outliers.
      3. Add a **missing-indicator column** (`income_missing`, `credit_score_missing`) so the fact of missingness survives as a feature.
      4. Fix the **units** in `income` before computing any statistic from it.
      5. Wrap it in a `SimpleImputer` inside a [[scikit-learn-pipeline|Pipeline]] so the fit never sees validation or test data.

  - id: "12"
    text: |
      **Order of operations.**

      Why is it a mistake to fit a `StandardScaler`, or to compute an imputation value, **before** splitting the data? What is the correct order, and what is this kind of mistake called?
    related_terms:
      - data-leakage
      - feature-scaling
      - scikit-learn-pipeline
      - train-test-split
    solution: |
      **Why it is a mistake**

      A scaler's mean and standard deviation, and an imputer's fill value, are **learned from data**. Compute them over the whole table and they encode information about the test rows — their central tendency and spread. Those statistics then shape the training features, so the model is trained on data that has been informed by the test set.

      The test set is supposed to stand in for *data that does not exist yet*. In production you cannot compute a mean over next month's applicants; you must apply the value you learned during training. Any evaluation that does otherwise measures something the deployed system can never reproduce.

      **The mistake is called [[data-leakage|data leakage]]** — specifically *preprocessing leakage* or *train-test contamination*.

      **The correct order**

      ```python
      # 1. split FIRST — grouped by customer, stratified on the label
      X_train, X_test, y_train, y_test = train_test_split(
          X, y, test_size=0.2, stratify=y, random_state=42
      )

      # 2. FIT transforms on training data only
      imputer = SimpleImputer(strategy="median").fit(X_train)
      scaler  = StandardScaler().fit(imputer.transform(X_train))

      # 3. APPLY those fitted transforms to the test data
      X_test_prepared = scaler.transform(imputer.transform(X_test))
      ```

      The rule in one line: **`fit` on train, `transform` on everything.**

      > [!tip] Why `Pipeline` exists
      > ```python
      > pipe = Pipeline([
      >     ("impute", SimpleImputer(strategy="median")),
      >     ("scale",  StandardScaler()),
      >     ("model",  RandomForestClassifier(n_estimators=100)),
      > ])
      > ```
      > Inside a [[scikit-learn-pipeline|Pipeline]], every step's `fit` sees only the training fold — and it stays correct under cross-validation, where doing it by hand is almost impossible to get right. Preprocessing a whole DataFrame by hand, as the notebook does, is how this bug gets written.

  - id: "13"
    text: |
      **Reading the data.**

      The `income` histogram produced by the pipeline shows **two separate peaks**, one about **twelve times** the other. What is the most likely cause, and what should be done about it before any modelling continues?
    related_terms:
      - exploratory-data-analysis
      - histograms
      - distributions
      - outliers
    solution: |
      **The cause: the column mixes monthly and annual income.**

      ```python
      income_m = np.exp(rng.normal(9.1, 0.45))                    # monthly
      income = income_m * 12 if rng.random() < 0.3 else income_m  # 30% stored annually
      ```

      About **30%** of records hold an annual figure and **70%** a monthly one, under one column name. Twelve is not a coincidence — it is months per year. This is a **unit inconsistency**, not a natural feature of the population: incomes are right-skewed but *unimodal*, so two clean peaks a factor of 12 apart means two different quantities have been merged.

      **Why it must be fixed before modelling**

      - The feature is meaningless as it stands — the same number means two different things depending on the row.
      - Any statistic computed from it is corrupted, including the **mean used to impute missing incomes**.
      - Debt-to-income, the most informative signal in lending, is wrong for 30% of rows.
      - Standardising does **not** fix it. Scaling shifts and stretches the whole column at once; a mixture stays a mixture.

      **What to do**

      1. **Trace each record to its source system** — the system of origin determines the unit deterministically.
      2. **Convert everything to one documented unit** (say, monthly gross).
      3. **Record the definition in a data dictionary** so next quarter's export does not reintroduce it.
      4. Only then recompute imputation statistics and continue.

      > [!warning] Do not use a threshold rule
      > "Divide everything above 50,000 by twelve" is tempting and wrong. The populations **overlap** — a high monthly salary and a modest annual one land in the same range — so any cutoff misclassifies in both directions. Worse, the histogram's second peak disappears, so the chart *looks* fixed while the column is silently corrupted.

      > [!tip] This is why the brief tells you to run the notebook
      > This defect is invisible in a code review and obvious in one chart. Plotting your features before modelling is the cheapest bug-finding available. See [[exploratory-data-analysis|EDA]].

  - id: "14"
    text: |
      **How the data was collected.**

      Our training data contains **only loans that the bank approved** in the past. What is this problem called, why does it matter when the model goes into production, and **can it be fixed by changing the code**?
    related_terms:
      - correlation-vs-causation
      - data-leakage
    solution: |
      **What it is called: selection bias** — specifically *survivorship bias*, and in lending the standard term is the **reject inference** problem.

      The brief states it plainly: *"The warehouse stores approved loans only."*

      **Why it matters in production**

      There is a mismatch between the population the model **learned from** and the population it will **face**:

      | | Population |
      |---|---|
      | Trained on | applicants the old rules **approved** |
      | Deployed on | **all** applicants, approved or not |

      The model was asked *"of everyone who applies, who will default?"* but the data only answers *"of the people we already approved, who defaulted?"* The missing slice is precisely the **riskiest** applicants — the ones the bank most needs to reason about.

      Consequences:

      - The model has **never seen** low-score or high-debt-to-income profiles, so its predictions there are blind extrapolation.
      - Measured default rates are **artificially low**, because the risky applicants were filtered out before the data existed.
      - The model **inherits and launders the old rules**. It learns the thresholds that produced the sample and presents them back as objective findings — including any bias in the original underwriting.
      - Left to retrain on its own filtered output, it forms a **feedback loop**: rejected segments generate no outcomes, so the next model rejects them more confidently. The bias hardens while every metric looks stable.

      **Can it be fixed in code? No.**

      This is the one defect on the paper that no edit to the notebook can repair. The information was never collected — the bank turned those people away and never learned what they would have done. There is no column to drop, no split to change, no transform to reorder.

      **What actually fixes it**

      Collect the missing data with a **controlled experiment**: approve a small random share of borderline applications, track their outcomes, and treat the resulting losses as the **cost of acquiring the data**. Some of those loans will default — that is not the experiment failing, that is the price of the information.

      (Reject-inference techniques exist to partly extrapolate into the rejected region, but they rest on assumptions and are no substitute for real observations.)

      > [!warning] Never generate synthetic rejected applicants
      > Labelling invented applicants by their risk scores means training on **your own assumptions** and then validating them against themselves. It produces confident numbers with no information content whatsoever.

  - id: "15"
    text: |
      **Choosing between two models.**

      The pipeline reports about **99%** for the Random Forest and **98%** for the neural network, then recommends the neural network because *"deep learning is the more advanced technology"*. List the criteria you would actually use to choose between two models, and explain why the comparison chart — whose **y-axis runs from 0.90 to 1.00** — is misleading.
    related_terms:
      - model-selection
      - accuracy
      - precision-and-recall
      - random-forest
    solution: |
      **What is wrong with the stated reasoning**

      Two separate failures in one sentence:

      1. **"More advanced technology" is not a decision criterion.** It says nothing about defaults caught, money saved, or explainability to the regulator.
      2. **The recommendation contradicts the team's own evidence.** Their printout ranks the Random Forest *higher*, and they recommended the other model anyway.

      That second point matters beyond this one choice. A team that overrides its own numbers when inconvenient has told you how much weight to place on their other numbers.

      **The criteria you would actually use**

      | Criterion | Why it matters here |
      |---|---|
      | **Defaulters caught at a cost-derived threshold** | The business outcome, measured where you will actually operate — not at the arbitrary 0.5 |
      | **Money lost per error type** | A missed defaulter costs the outstanding principal; a wrong rejection costs the interest margin. Roughly 10× apart |
      | **Explainability to the regulator** | A hard external constraint: rejections must be explainable in plain terms |
      | **Cost to build, run and maintain** | Infrastructure, monitoring, retraining, and the staff who can operate it |
      | **Stability across customer segments** | A model that works overall but fails for the self-employed is a fairness *and* business problem |
      | **Latency and operational fit** | Competitors approve online in minutes |

      Fix these **before** the numbers arrive. Criteria chosen afterwards are rationalisations.

      **Why the chart misleads**

      ```python
      fig.update_yaxes(range=[0.90, 1.00])
      ```

      The y-axis is **truncated** — it starts at 0.90 rather than 0. A one-point difference between 98% and 99% occupies a *tenth of the axis*, so the two bars look dramatically different when the underlying gap is one percentage point.

      Three compounding problems:

      1. **Truncated axes exaggerate small differences.** The visual gap is ~10× the real one. A bar chart implies a zero baseline; breaking that silently is a classic misleading-graphics technique.
      2. **The relevant baseline is invisible.** The meaningful comparison is against the **86%** do-nothing rule — off the bottom of this chart entirely. It would show both bars barely clearing a line that requires no model at all.
      3. **There are no error bars.** With one split and no cross-validation, a one-point difference is well inside the variation from a different random seed. The chart presents noise as a finding.

      > [!success] What the decision actually looks like
      > On the sample exam's corrected evaluation — **36%** recall for the forest against **37%** for the network — the metric is a tie within noise, and every other criterion (explainability, cost, maintainability) favours the **Random Forest**.
      >
      > That the numbers are almost identical is deliberate: the question is testing whether you decide on a one-point difference or on the criteria you committed to beforehand.
---

> [!info] What this is
> The **fifteen preparation questions** from the lecturer's problem brief, worked in full. The brief says they *"cover everything the exam covers; if you can answer all fifteen clearly, you are prepared."*
>
> They are short-answer, not multiple-choice — they cover the theory the [[pp-01-sample-exam-25-questions|25-question sample exam]] assumes you already have. Work these first, then sit the sample exam.
>
> 📄 [The problem brief + prep questions](/papers/machine-learning/loan-pipeline-brief-and-prep-questions.pdf) · 📓 [`loan_pipeline.ipynb`](/papers/machine-learning/loan_pipeline.ipynb) · 🔍 [[loan-pipeline-code-walkthrough|Code walkthrough & defect catalogue]]

> [!warning] These answers are derived, not official
> No answer key was distributed with the brief. Every answer here is grounded line-by-line in the notebook and the brief, and the working is shown in full **so you can check it rather than trust it** — which is precisely the habit the lecturer says the exam is designed to reward:
>
> > *"read the answer critically rather than copying it … an answer you accepted without checking is exactly the habit the exam is designed to catch."*

## How these map to the exam

| Prep question | Sample-exam questions it feeds |
|---|---|
| 1–2 Overfitting, bias | background for Q6, Q18 |
| 3 Accuracy and baselines | **Q9, Q19, Q25** |
| 4 Regression vs classification | background for Q24 |
| 5 Deep learning | **Q21, Q23, Q25** |
| 6 Ensembles | **Q7, Q23** |
| 7 Parameter vs hyperparameter | **Q8, Q18** |
| 8 Train/validation/test | **Q6, Q18** |
| 9 Data leakage | **Q1, Q7, Q12, Q13** |
| 10 What a row represents | **Q2, Q11, Q16** |
| 11 Missing values | **Q14** |
| 12 Order of operations | **Q13** |
| 13 Reading the data | **Q5, Q17** |
| 14 How data was collected | **Q4, Q20** |
| 15 Choosing between models | **Q21, Q22, Q24, Q25** |

Every one of the 25 exam questions traces back to at least one of these fifteen. If a prep question is shaky, the exam questions in its row are where you will lose marks.

## A note on two small inconsistencies

Worth knowing so they do not throw you in the exam:

- **99% vs 98%.** Prep question 15 says the Random Forest scored *"about 99%"*, while the notebook's closing cell says both models are *"around 98%"*. Either way the point stands — the forest scored at least as high as the network, and was not recommended.
- **The label rule.** Sample-exam questions 3 and 15 quote a label defined as *"missed 3+ payments at some point"*. That phrasing appears in neither the brief nor the notebook, where `default` is generated from a latent risk score. Treat the no-fixed-window criticism as given by the exam rather than something you could derive from the code.
