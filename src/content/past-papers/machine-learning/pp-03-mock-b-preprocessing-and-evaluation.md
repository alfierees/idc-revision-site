---
title: "Mock Paper B — Preprocessing and Evaluation"
type: past-paper
status: worked-solution
exam: "Mock Paper B (practice)"
course: "Machine Learning — Economics Track"
semester: 2
year: 2
tags:
  - machine-learning
  - past-paper
  - mock-exam
  - loan-pipeline
  - data-leakage
  - class-imbalance
  - confusion-matrix
  - train-test-split
aliases:
  - Mock B Machine Learning
  - ML Mock Paper B
  - PP03 Machine Learning
subject: machine-learning
in_scope: true
questions:
  - id: q1
    title: "Q1 — How much of the 98% is the scaler's fault?"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The scaler was fitted before the split, and that is what produced the 98% accuracy."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — fitting the scaler on every row copies information about the test data into the training features, which is what produced the score
        correct: false
        why: |
          The scaler never touches `y`. It reads feature columns only, so no label information moves through it.
      - label: "B"
        text: |
          Not valid as to cause — the pre-split scaler leaks mildly; the ~98% comes from the post-outcome columns and the row-level split
        correct: true
        why: |
          Correct on both halves: the line is buggy, and it is not the line that manufactures the score.
      - label: "C"
        text: |
          Valid — a mean and standard deviation computed over all 6,557 rows are enough on their own to lift accuracy by twelve points
        correct: false
        why: |
          Two shared constants cannot carry twelve points of signal. The inflation comes from leaked columns and repeated customers.
      - label: "D"
        text: |
          Not valid at all — a scaler learns nothing from the data it sees, so fitting it before the split is harmless here
        correct: false
        why: |
          A scaler does learn: it stores a mean and a standard deviation, and here both are computed with test rows included.
    solution: |
      Two claims are bundled together, and only one survives.

      ```python
      X = StandardScaler().fit_transform(X)
      # ... only afterwards ...
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      ```

      **Is it a leak?** Yes. `fit_transform` computes a mean and standard deviation over every one of the 6,557 rows, test rows included, so the training features carry a trace of the held-out data. That is a real [[data-leakage|leak]] and the ordering is genuinely wrong.

      **Is it the cause of 98%?** No, and the magnitude argument settles it. A leaked mean shifts a whole column by one constant; a leaked standard deviation rescales it by another. Neither depends on `y`, and neither tells the model anything about a specific test row. Meanwhile `avg_days_late` and `collections_flag` are computed *from* `default`, and each customer's 3–8 rows sit on both sides of the split. Those two defects account for essentially the entire gap between the ~86% you get for free and the 98% reported.

      > [!success] Answer — **B**
      > The pre-split scaler is a real leak of the mild kind; the score is manufactured by the post-outcome columns and the row-level split.

      > [!tip] Ranking leaks by size
      > All leaks are worth fixing, but they are not the same size. A leak that moves *summary statistics* across the split is small. A leak that puts the *label itself*, or the *same customer*, on both sides is fatal. Say which kind you have found — an audit that treats them identically is not an audit.
    related_terms:
      - data-leakage
      - feature-scaling

  - id: q2
    title: "Q2 — What the zero-filled credit scores do after scaling"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Filling missing credit scores with 0 does not just insert a wrong value — it distorts the whole column once it is standardised."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — standardisation maps every column onto the same scale, so an unusual fill value is absorbed along with everything else
        correct: false
        why: |
          Standardisation shifts and rescales; it does not compress outliers. A point three deviations out stays three deviations out.
      - label: "B"
        text: |
          Valid — but only the imputed rows are harmed, since the remaining credit scores are transformed exactly as they would have been anyway
        correct: false
        why: |
          The genuine scores are harmed too: the zeros inflate the standard deviation used to rescale every row in the column.
      - label: "C"
        text: |
          Not valid — the credit score column matters little to a tree-based model, which splits on rank order rather than on magnitude
        correct: false
        why: |
          True about trees and irrelevant: the network is fitted on the same matrix, and the score is a genuinely informative feature.
      - label: "D"
        text: |
          Valid — the zeros drag the column mean down and inflate its spread, so real scores are squeezed together while the filled rows become extreme outliers
        correct: true
        why: |
          Names both effects: the fill value is off-scale, and it corrupts the statistics used to transform every other row.
    solution: |
      The line is one of the shortest in the notebook and one of the most damaging:

      ```python
      df["credit_score"] = df["credit_score"].fillna(0)
      ```

      Credit scores live on a **300–850** scale. Zero is not a bad score; it is not a score. About **8%** of rows are missing (`score = np.nan if rng.random() < 0.08`), so roughly one row in twelve gets it.

      Now watch what standardisation does with that. Genuine scores are centred near **680** with a spread of about **70**. Once 8% of the column is zeros, the column mean falls to roughly **625** and the standard deviation swells to roughly **195** — nearly three times the true spread. Standardising with those two numbers produces:

      - **Filled rows** land around $-3.2$ — far out in the tail, where a tree will happily carve them off and a network will see a large activation.
      - **Every genuine row** is now divided by a spread three times too large, so the real variation between a 600-score borrower and a 760-score borrower is compressed into a narrow band.

      That is the part option B misses. The damage is not confined to the 8%; it is spread across the whole column by the statistics the zeros corrupted.

      > [!success] Answer — **D**
      > The zeros pull the mean down, inflate the spread, and so distort both the imputed rows and every genuine score alongside them.

      > [!warning] Sentinel values and scaling do not mix
      > `-1`, `0`, `-999` and `9999` are all common "missing" sentinels, and every one of them becomes an outlier the moment you scale. If you must use a sentinel, handle it *before* any statistic is computed from the column — or better, impute a plausible value and flag it. See [[missing-values]] and [[outliers]].
    related_terms:
      - missing-values
      - feature-scaling
      - outliers

  - id: q3
    title: "Q3 — One split, one number"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Everything we know about these models rests on a single random 80/20 split, and we have no idea how much that number would move."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — one split gives a point estimate with no spread, though it is secondary: repeating a leaky measurement just measures the leak better
        correct: true
        why: |
          Accepts the concern and ranks it correctly — the single split is a real weakness, but not the one that voids the number.
      - label: "B"
        text: |
          Valid — and it is the most serious problem in the evaluation, since without cross-validation no reported figure can be interpreted at all
        correct: false
        why: |
          Overstates it. Leaky features and customers on both sides void the figure long before sampling variation becomes the issue.
      - label: "C"
        text: |
          Not valid — `random_state=42` fixes the split, so the result is exactly reproducible and the question of how much it would vary does not arise
        correct: false
        why: |
          Reproducible and reliable are different things. A fixed seed reproduces one arbitrary draw, it does not represent the others.
      - label: "D"
        text: |
          Not valid — with 6,557 rows the test set holds over 1,300 observations, which is ample for a stable estimate of accuracy
        correct: false
        why: |
          Those 1,300 rows are not 1,300 independent customers, so the effective sample behind the estimate is far smaller.
    solution: |
      The pipeline's entire evidence base is one call:

      ```python
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      ```

      One draw, one accuracy figure per model, no interval. Change `random_state` and both numbers move — by how much, nobody has checked. [[cross-validation|Cross-validation]] exists precisely to replace a point estimate with a mean and a spread across folds.

      So the concern is valid. But Part 1 also asks you to *rank*, and the ranking here matters. Cross-validating this pipeline as written would give you a tight confidence interval around a meaningless number: every fold would contain the same leaked columns, and every fold would scatter each customer's rows across both sides. **Precision about a biased estimate is not progress.** Fix the features and the splitting unit first; then cross-validate, by customer.

      Option D is the sharpest distractor because its arithmetic is right and its inference is wrong. There are indeed ~1,310 test rows — but they come from perhaps 240 distinct customers, each contributing 3–8 near-identical rows carrying one shared label. The effective sample size is the customer count, not the row count.

      > [!success] Answer — **A**
      > A single split gives one estimate with no spread; valid, but secondary to the defects that make the estimate wrong in the first place.
    related_terms:
      - cross-validation
      - train-test-split

  - id: q4
    title: "Q4 — No stratification on the label"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The split is not stratified on the outcome, even though only about one customer in seven defaults."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — `train_test_split` already stratifies on the target by default whenever the labels are passed to it as the second positional argument in that call
        correct: false
        why: |
          It does not. Stratification happens only when you pass `stratify=y` explicitly; the default is a plain random draw.
      - label: "B"
        text: |
          Not valid — stratification is a convenience for small samples and makes no measurable difference on a table of several thousand rows
        correct: false
        why: |
          It is cheap insurance at any size, and here the effective sample is customers, not rows, which is far smaller than it looks.
      - label: "C"
        text: |
          Valid — `stratify=y` is absent, so the default rate can drift between the sides, and stratifying rows means little while customers straddle the split
        correct: true
        why: |
          Confirms the omission and points out that stratification and grouping have to be fixed together, not one without the other.
      - label: "D"
        text: |
          Valid — an unstratified split is the reason that the two models end up reporting almost identical accuracy figures on the held-out set
        correct: false
        why: |
          The two models agree because both are reading the same leaked columns, not because of how the classes were divided.
    solution: |
      Read the call again and note what is *not* there:

      ```python
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      ```

      No `stratify=y`. With a base rate near **14%**, a plain random draw can hand the test set a noticeably different default rate from the training set, and every metric computed on it inherits that drift. Adding one keyword argument fixes it and costs nothing.

      The second clause of option C is what makes it the right answer rather than merely a true one. Stratification balances the *label* across the two sides; it does nothing about the fact that the same customer's rows appear on both. A stratified row-level split on this table is a tidy division of contaminated data — you have made the leak evenly distributed. The correct object is a **grouped, stratified** split: group by `customer_id`, stratify on the customer's label, so that class balance is preserved *and* no customer is shared.

      > [!success] Answer — **C**
      > `stratify=y` is missing, so the default rate can drift — but stratifying rows is only meaningful once the split is also grouped by customer.

      > [!tip] The tool that does both
      > `StratifiedGroupKFold` exists for exactly this situation: preserve the class balance, keep every member of a group on one side. Reach for it whenever your rows have both an entity and an imbalanced label.
    related_terms:
      - train-test-split
      - classification

  - id: q5
    title: "Q5 — 'Accuracy is never the right metric'"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Accuracy is never an appropriate metric for a classification problem, so both reported figures should be discarded."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — accuracy summarises the total number of correct decisions, which is exactly what the bank cares about across a portfolio
        correct: false
        why: |
          Total correct decisions is not what the bank cares about; the two error types carry very different amounts of money.
      - label: "B"
        text: |
          Valid exactly as stated — accuracy carries no useful information about any classifier and should not be computed in the first place
        correct: false
        why: |
          Too strong. On balanced classes with symmetric error costs, accuracy is a perfectly reasonable headline figure.
      - label: "C"
        text: |
          Not valid — the 98% figures are high enough that no alternative metric could realistically change the conclusion the team drew from them about either model
        correct: false
        why: |
          The height of a number computed the wrong way is not evidence. Recall on defaulters was never measured at all.
      - label: "D"
        text: |
          Valid in substance, wrong as a rule — accuracy is fine when classes are balanced and errors cost alike, and here neither condition holds
        correct: true
        why: |
          Rescues the correct conclusion from a false generalisation, and names the two conditions that actually decide the matter.
    solution: |
      The colleague has reached a sound conclusion by way of an unsound rule, and the exam wants you to separate them.

      **Why the rule is false.** [[accuracy|Accuracy]] is the share of decisions that were right. On a balanced problem where a false positive and a false negative cost the same, that is a perfectly informative headline. Nothing is wrong with the metric itself.

      **Why the conclusion is right here.** Neither condition holds:

      1. **The classes are not balanced.** About 14% of customers default, so the rule "approve everyone" scores about **86% accuracy while catching zero defaulters**. Any accuracy figure has to be read against that free baseline, and the notebook instead compares itself to a 50/50 coin flip.
      2. **The errors do not cost alike.** A missed defaulter costs the outstanding principal; a wrongly rejected applicant costs the interest margin — roughly a factor of ten apart.

      And the pipeline reports accuracy *only*:

      ```python
      acc_rf = accuracy_score(y_test, rf.predict(X_test))
      acc_nn = accuracy_score(y_test, (nn.predict(X_test, verbose=0) > 0.5).astype(int))
      ```

      No [[confusion-matrix]], no [[recall]], no [[precision]]. So the one question the bank asked — *of the customers who defaulted, how many did we catch?* — has never been answered.

      > [!success] Answer — **D**
      > Right conclusion, wrong rule: accuracy is fine on balanced problems with symmetric costs, and this is neither.
    related_terms:
      - accuracy
      - confusion-matrix
      - precision-and-recall

  - id: q6
    title: "Q6 — Reading the comparison chart"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The bar chart is drawn so as to make the neural network look far better than the Random Forest."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — the truncated axis is what allowed the team to conclude that the neural network was the stronger of the two models
        correct: false
        why: |
          The stated reason for choosing the network was that it is "more advanced", and the chart does not favour it anyway.
      - label: "B"
        text: |
          Not valid as stated — the axis does exaggerate a difference of about one point, but in the forest's favour, not the network's
        correct: true
        why: |
          Accepts the real defect while correcting the direction, which is checkable straight off the printed figures.
      - label: "C"
        text: |
          Not valid — a bar chart showing only two numbers cannot mislead anybody, because both of the underlying values are printed directly beneath the figure
        correct: false
        why: |
          Readers take their impression from the picture. A truncated axis reliably distorts that impression whatever the caption says.
      - label: "D"
        text: |
          Valid — plotting accuracy rather than recall is what makes the neural network appear to be the stronger of the two performers
        correct: false
        why: |
          Plotting accuracy is a genuine fault, but it does not favour one model over the other; both are scored on the same metric.
    solution: |
      Two things have to be checked, and they point in different directions.

      **The chart is genuinely misleading.**

      ```python
      fig.update_yaxes(range=[0.90, 1.00])
      ```

      A y-axis running from 0.90 to 1.00 turns a one-point difference into a bar roughly twice the height of its neighbour. On a 0-to-1 axis the two bars would be visually indistinguishable, which is the honest picture. Worse, the truncation hides the number that matters: the **~86% do-nothing baseline** sits below the bottom of the chart entirely, so the reader never sees how much of the bar is free.

      **But the direction is wrong.** The team's own printout ranks the **Random Forest** higher — that is precisely the contradiction in the closing recommendation, which picks the network anyway. So the truncated axis inflates the forest's apparent lead, and the text then overrides it. The concern as phrased has the beneficiary backwards.

      > [!success] Answer — **B**
      > The truncation is real and does exaggerate a one-point gap, but in the forest's favour — the network was chosen despite the chart, not because of it.

      > [!tip] What a truncated axis is for
      > Zooming an axis is legitimate when small differences are the subject and the reader is told. It is misleading when the zoom is what makes the difference look important. The test: would your conclusion survive a 0-to-1 axis with the baseline drawn on it? Here it plainly would not.
    related_terms:
      - accuracy
      - exploratory-data-analysis

  - id: q7
    title: "Q7 — No training score anywhere"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "We are shown a test score for each model and nothing else, so we cannot say whether either one is overfitting."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — `accuracy_score` is called on the test set only, so neither model has a training figure to compare against and the gap is unmeasured
        correct: true
        why: |
          Straightforwardly checkable in the code: both calls pass `y_test`, and no training prediction is made anywhere.
      - label: "B"
        text: |
          Not valid — a Random Forest cannot really overfit, since averaging over many decorrelated trees removes the variance that overfitting consists of
        correct: false
        why: |
          Averaging reduces variance but does not eliminate it; fully grown trees can still memorise, especially with duplicated rows.
      - label: "C"
        text: |
          Not valid — a test accuracy of 98% is far too high for a model that is overfitting, so the diagnosis can be ruled out already
        correct: false
        why: |
          A high test score built on leakage tells you nothing about generalisation; the test set is contaminated, so it cannot clear anyone.
      - label: "D"
        text: |
          Valid — and the gap can be recovered from the existing output by comparing each model's test accuracy against the other model's
        correct: false
        why: |
          Comparing two models to each other says nothing about either one's train-to-test gap; that needs a training score.
    solution: |
      The evaluation is two lines, and both of them read the test set:

      ```python
      acc_rf = accuracy_score(y_test, rf.predict(X_test))
      acc_nn = accuracy_score(y_test, (nn.predict(X_test, verbose=0) > 0.5).astype(int))
      ```

      Nothing calls `rf.predict(X_train)`. Nothing records the network's training loss (`verbose=0`, no history inspected, no `validation_data`). The standard diagnostic for [[overfitting]] — *train score high, held-out score much lower* — cannot be computed from what the notebook produces.

      The concern is valid. It is worth adding the second-order point, though, because it is where the marks are: even if the training scores were printed, they would not settle anything here. A small train-to-test gap normally reassures you. On this pipeline it would reassure you falsely, because the test set contains near-duplicates of training customers and both sets carry the same post-outcome columns. **A leaky test set cannot certify anything, including the absence of overfitting.**

      > [!success] Answer — **A**
      > Only test accuracy is computed, so no train-to-test gap exists to inspect.

      > [!tip] Underfitting looks different
      > A model that scores poorly on training *and* held-out data is underfitting — too little capacity, or features that do not carry the signal. Three 256-unit layers on seven tabular columns is the opposite risk. See [[bias-variance-tradeoff]].
    related_terms:
      - overfitting
      - bias-variance-tradeoff

  - id: q8
    title: "Q8 — The mean of a two-humped column"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The value used to fill missing incomes is the average of a column with two separate peaks in it."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — an average is the standard imputation choice, and its whole purpose is to summarise a column whatever shape that column has
        correct: false
        why: |
          A mean summarises a single population. Across two populations it names a value that describes neither of them.
      - label: "B"
        text: |
          Valid — and switching from the mean to the median resolves it, since the median is robust to unusual values in a column
        correct: false
        why: |
          The median is robust to tails, not to mixtures; on a bimodal column it simply lands in a different unrepresentative place.
      - label: "C"
        text: |
          Not valid — the missing incomes are only 30% of self-employed records, too few for the choice of fill value to move any result
        correct: false
        why: |
          Understates the exposure and misses the point: those rows are concentrated in exactly the segment that carries elevated risk.
      - label: "D"
        text: |
          Valid — the column merges monthly and annual figures, so its mean sits between the two peaks and describes no real borrower
        correct: true
        why: |
          Identifies the mixture as the cause and states the consequence precisely: the fill value belongs to neither population.
    solution: |
      The generator explains the two humps:

      ```python
      income = income_m * 12 if rng.random() < 0.3 else income_m  # some systems store it annually
      ```

      About **30%** of records are annual and **70%** are monthly, in one column under one name. The cleaning step then does this:

      ```python
      df["income"] = df["income"].fillna(df["income"].mean())
      ```

      The mean of a mixture of two populations twelve times apart lands in the trough between them: too large to be a monthly salary, far too small to be an annual one. Every imputed borrower is assigned a figure that no real borrower in either group has.

      Option B is the trap for anyone who has learned "prefer the median" as a rule without the reason attached. The median is robust to **outliers** — a few extreme values in one tail. It is not robust to **mixtures**. On a 70/30 monthly/annual split the median falls inside the monthly hump, which is arguably worse: it looks reasonable and is systematically wrong for the annual 30%. Neither statistic can be trusted until the units are reconciled at source.

      And note who is affected. Income is missing at **30% for the self-employed** against **5% for the salaried**, so the bad fill value is concentrated in the segment the risk model treats as higher risk.

      > [!success] Answer — **D**
      > The column mixes monthly and annual incomes, so its mean falls between the two peaks and describes nobody.

      > [!warning] Fix units before computing any statistic
      > Every summary you take from a mixed-unit column — mean, median, standard deviation, correlation, feature importance — is a statement about a population that does not exist. Reconcile units first, then clean. See [[distributions]] and [[summary-statistics]].
    related_terms:
      - missing-values
      - distributions
      - summary-statistics

  - id: q9
    title: "Q9 — Would a confusion matrix add anything?"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Asking for a confusion matrix is bureaucracy — it just decomposes a number we already have."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — the matrix is derived arithmetically from the predictions, so it can contain no information the accuracy figure has not already captured
        correct: false
        why: |
          Derived is not equivalent. Accuracy fixes only the total of the diagonal, and many very different matrices share one total.
      - label: "B"
        text: |
          Valid in part — the matrix adds little for the forest, whose errors are spread evenly across the two classes by its construction
        correct: false
        why: |
          Nothing constrains a forest's errors to be evenly spread; on imbalanced data they concentrate in the minority class.
      - label: "C"
        text: |
          Not valid — accuracy pins down how many decisions were right, not which kind were wrong, and at 14% those differ sharply
        correct: true
        why: |
          States exactly what accuracy leaves undetermined, and why the missing part is the part the lending decision turns on.
      - label: "D"
        text: |
          Not valid — a confusion matrix is required by the regulator for any rejected application, so the team has no discretion in the matter
        correct: false
        why: |
          The regulator requires a plain-terms reason for each rejection, which is an explainability duty, not a request for a matrix.
    solution: |
      Take the concern seriously for a moment: the matrix *is* computed from the same predictions, so in what sense does it add anything?

      Suppose 1,300 test applications, 14% of them defaulters — about 182 defaults and 1,118 sound loans. Two models both score **86% accuracy**, meaning both get about 1,118 decisions right:

      | | Model X | Model Y |
      |---|---|---|
      | Defaulters caught | 0 | 91 |
      | Defaulters missed | 182 | 91 |
      | Good applicants wrongly rejected | 0 | 91 |
      | Accuracy | ~86% | ~86% |

      Model X is the do-nothing rule: approve everyone, catch nobody. Model Y catches half the defaults. **Identical accuracy, completely different businesses.** Accuracy constrains only the total on the diagonal; it says nothing about how the errors are distributed between the two kinds, and on imbalanced data the distribution is the entire question.

      That is why the [[confusion-matrix]] is not decoration. Every metric the bank actually needs — [[recall]] (of the defaulters, how many did we catch?), [[precision]] (of those we flagged, how many really defaulted?), and the cost of the two error types — is read straight off it, and none of them is recoverable from a single accuracy number.

      > [!success] Answer — **C**
      > Accuracy fixes how many decisions were right, not which kind were wrong — and on a 14% base rate those come apart completely.
    related_terms:
      - confusion-matrix
      - precision-and-recall
      - accuracy

  - id: q10
    title: "Q10 — Whose threshold is 0.5?"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The neural network's outputs are cut at 0.5, which is an arbitrary choice — the Random Forest at least avoids that problem."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — 0.5 is the mathematically correct cut-off for a sigmoid output, because that is the point at which the two classes are equally likely
        correct: false
        why: |
          Equally likely is only the right rule when the two errors cost the same. It is a default, not a theorem about decisions.
      - label: "B"
        text: |
          Valid on the threshold, wrong on the forest — `rf.predict` applies its own implicit 0.5 to the vote share, so both are cut identically
        correct: true
        why: |
          Confirms the real defect and corrects the exemption: a classifier's `predict` is always a threshold applied to a score.
      - label: "C"
        text: |
          Valid — and the forest escapes the problem because it casts discrete votes rather than producing a continuous probability estimate of its own
        correct: false
        why: |
          The forest does produce a continuous score, `predict_proba`, which `predict` then thresholds at one half exactly as Keras does.
      - label: "D"
        text: |
          Not valid — the threshold can safely be left until deployment, since it is purely a business setting rather than a modelling decision
        correct: false
        why: |
          It is a business setting, and that is why it belongs in the evaluation: the model comparison depends on where it is placed.
    solution: |
      The network's threshold is written out in full:

      ```python
      acc_nn = accuracy_score(y_test, (nn.predict(X_test, verbose=0) > 0.5).astype(int))
      ```

      The forest's is invisible, which is exactly why the concern gets it wrong:

      ```python
      acc_rf = accuracy_score(y_test, rf.predict(X_test))
      ```

      `RandomForestClassifier.predict` computes `predict_proba` — the share of trees voting for each class — and returns whichever class exceeds one half. The 0.5 is still there; it is just supplied by the library rather than typed by the analyst. **Every classifier that outputs a hard label has a threshold in it somewhere.** The only question is whether someone chose it.

      Here nobody did, and 0.5 is the wrong place to stand. It is optimal only when the classes are balanced and a false positive costs the same as a false negative — and a missed defaulter costs the outstanding principal against an interest margin for a wrongly rejected applicant, roughly ten times apart. Both models should be scored at a cost-derived threshold, and compared there.

      > [!success] Answer — **B**
      > The threshold criticism is right, but it applies to both models: `rf.predict` thresholds the vote share at 0.5 just as the network's sigmoid is cut at 0.5.

      > [!tip] Get the scores, not the labels
      > Call `predict_proba` (or read the sigmoid output) and keep the continuous score. Everything downstream — the [[roc-curve|ROC curve]], the precision-recall curve, the cost-optimal cut-off — needs the score. `predict` throws it away and hands you one arbitrary decision.
    related_terms:
      - classification
      - sigmoid-function
      - roc-curve

  - id: q11
    title: "Q11 — Plan: the scaler is still fitted on the test rows"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "We moved the split to the top of the notebook, but the code still calls `fit_transform` on the test features as well as the training ones."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Fit the scaler on the training rows, `transform` validation and test, and move both steps inside a Pipeline so the order cannot slip again
        correct: true
        why: |
          Fixes the immediate bug and removes the class of bug, since a Pipeline's steps only ever see the fitting fold.
      - label: "B"
        text: |
          Call `fit_transform` separately on each side of the split, so that the training and test features are each properly centred on their own distributions
        correct: false
        why: |
          Deriving a mean from the test rows is the leak you are removing, and the two sides end up on incompatible scales.
      - label: "C"
        text: |
          Fit one scaler on the full table exactly as now, but document clearly in the notebook that the scaling constants were shared across the split
        correct: false
        why: |
          A documented leak is still a leak. The reported score remains an estimate contaminated by the held-out data.
      - label: "D"
        text: |
          Fit on the training rows, then rescale the transformed test features afterwards so that their overall range matches the training range exactly
        correct: false
        why: |
          The second step reintroduces the leak by tuning the test features using a statistic read off the test features.
    solution: |
      The correct pattern is one sentence long: **fit on train, transform everywhere.**

      ```python
      scaler = StandardScaler().fit(X_train)     # learns mean and SD from training rows only
      X_train = scaler.transform(X_train)
      X_test  = scaler.transform(X_test)         # applies those same constants
      ```

      `fit_transform` on the test set relearns the constants from the test rows, which is the original bug wearing a new position in the file.

      Option B is the version that sounds principled — "each side properly centred on its own distribution" — and it is wrong twice over. First, it reads statistics off the held-out data, which is the definition of the leak. Second, it puts the two sides on **different scales**: a value of 1.2 means something different in training than in test, and the model's learned coefficients no longer apply.

      What makes A the plan to approve rather than merely the correct line of code is its second clause. This defect has now appeared twice in one notebook, and it will appear again while the transforms are applied by hand to a DataFrame. A [[scikit-learn-pipeline|Pipeline]] makes it structurally impossible: every step's `fit` sees the training fold only, including inside cross-validation.

      > [!success] Answer — **A**
      > Fit on train, `transform` elsewhere, and put both preprocessing steps inside a Pipeline so the ordering is enforced rather than remembered.

      > [!warning] The rule generalises past scaling
      > Anything *learned from data* is subject to it: imputation values, encoders, PCA loadings, feature-selection choices, discretisation cut-points, even the decision of which columns to keep. If a step looks at the data, it must look at the training data only.
    related_terms:
      - scikit-learn-pipeline
      - feature-scaling
      - data-leakage

  - id: q12
    title: "Q12 — Plan: what to do about the 14% base rate"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "About one customer in seven defaults, and nothing in the training procedure acknowledges that the classes are unbalanced."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Oversample the defaulters until the classes are even, applying the resampling to the whole table before it is divided into training and test sets
        correct: false
        why: |
          Resampling before the split copies minority rows across the boundary, so the test set contains duplicates of training rows.
      - label: "B"
        text: |
          Rebalance the training and test sets to 50/50 alike, so the two share one distribution and the reported figures are directly comparable across them
        correct: false
        why: |
          The test set has to mirror the population the bank faces; at 50/50 it describes a portfolio that does not exist.
      - label: "C"
        text: |
          Leave the test set at its natural rate, and treat rebalancing — weights, resampling, or nothing — as a choice made on validation
        correct: true
        why: |
          Protects the evaluation set and treats the remedy as an empirical question rather than a reflex, which is what it is.
      - label: "D"
        text: |
          Discard non-defaulting customers at random until the training set is evenly balanced, which removes the imbalance without inventing any new synthetic rows
        correct: false
        why: |
          Undersampling here throws away roughly six sound loans in seven, discarding most of the information about who repays.
    solution: |
      Imbalance is a real issue at 14%, but the reflex response — "rebalance it" — is where the marks are lost. Three things have to be kept straight.

      **The test set is never rebalanced.** It exists to estimate performance on the population the bank will actually face, and that population defaults at ~14%. Options A and B both violate this, B openly and A by accident: resampling before `train_test_split` puts copies of the same minority customer on both sides, which is [[data-leakage|leakage]] of the most direct kind.

      **Undersampling is expensive here.** Option D balances by deleting sound loans — roughly 5 in every 6 of them. The minority class is not the only one carrying information; you would be discarding most of what the model knows about repayment to fix a ratio.

      **Rebalancing is a hyperparameter, not a rule.** `class_weight="balanced"`, minority oversampling, and doing nothing at all are three candidate settings. Which one helps depends on the model and the metric, and the honest way to find out is to try them on a validation set and read [[recall]] and [[precision]] at the cost-derived threshold. Often, with a properly chosen threshold, doing nothing wins — much of what rebalancing achieves is shifting the effective cut-off, which you can do directly.

      > [!success] Answer — **C**
      > Keep the test set at its natural 14%, and pick the imbalance treatment on validation like any other setting.
    related_terms:
      - classification
      - precision-and-recall
      - hyperparameter-tuning

  - id: q13
    title: "Q13 — Plan: what to report instead of one accuracy figure"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The only evidence offered for either model is a single accuracy figure computed on one held-out set."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Report ROC-AUC for each model in place of accuracy, since it is threshold-free and therefore not distorted by the class imbalance
        correct: false
        why: |
          AUC is threshold-free but weights both classes equally, so it flatters models on data where the positives are rare.
      - label: "B"
        text: |
          Report accuracy computed under two further random seeds, so that the stability of the headline number can be seen directly
        correct: false
        why: |
          Three unstable readings of the wrong metric are no more informative about defaulter performance than one was.
      - label: "C"
        text: |
          Report F1 as the single headline figure, since it combines precision and recall and so covers both error types at once
        correct: false
        why: |
          F1 weights the two errors equally by construction, which contradicts a cost ratio of roughly ten to one.
      - label: "D"
        text: |
          Report a confusion matrix with recall and precision at the operating threshold, plus PR-AUC, repeated across customer-grouped folds so each figure carries a spread
        correct: true
        why: |
          Covers the error composition, the metric suited to rare positives, and the variability — the three things one accuracy figure hides.
    solution: |
      Each distractor here is a defensible instinct applied without checking whether it fits the problem.

      | Proposal | What it is good for | Why it falls short here |
      |---|---|---|
      | [[auc\|ROC-AUC]] alone | ranking quality, balanced classes | Weights both classes equally; with 14% positives a model can look strong while catching few defaulters |
      | Repeated seeds | a rough stability check | Repeats the metric that was already hiding the error composition |
      | [[precision-and-recall\|F1]] as headline | one number covering both errors | Its harmonic mean fixes the two errors as equally important, which is false at 10:1 |

      What option D assembles instead:

      - **A [[confusion-matrix]] at the operating threshold** — the four raw counts, from which every other figure follows, read at the cut-off the bank will actually use rather than at 0.5.
      - **[[recall]] and [[precision]]** — of the defaulters, how many caught; of those flagged, how many really defaulted.
      - **PR-AUC** — the precision-recall curve summarised. Unlike ROC-AUC it takes the positive class as its reference, so it does not get carried by the 86% of easy negatives.
      - **Customer-grouped folds** — so each figure comes with a spread and you can see whether a two-point difference is signal or noise.

      > [!success] Answer — **D**
      > Confusion matrix with recall and precision at the operating threshold, PR-AUC, and grouped folds to give each number a spread.

      > [!tip] ROC-AUC versus PR-AUC in one line
      > ROC-AUC asks *how well does the score separate the two classes?* PR-AUC asks *when the model flags someone, how often is it right, across all thresholds?* When positives are rare and expensive, the second question is the business's question.
    related_terms:
      - confusion-matrix
      - auc
      - roc-curve
      - cross-validation

  - id: q14
    title: "Q14 — Plan: nothing decides when training stops"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The network runs for exactly thirty epochs and nothing at all is watching it while it does."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Monitor the loss on the test set each epoch and stop training at the point where that loss reaches its lowest value
        correct: false
        why: |
          Choosing the stopping epoch by test loss selects on the test set, so the final figure stops being an unseen estimate.
      - label: "B"
        text: |
          Hold out validation customers from the training side, monitor validation loss each epoch, and stop early with the best weights restored
        correct: true
        why: |
          Puts the stopping decision on data that is neither trained on nor reserved for the final estimate — which is what validation is.
      - label: "C"
        text: |
            Raise the budget to two hundred epochs, since a larger allowance can only help a network that is currently stopping too early
        correct: false
        why: |
          Longer training is as likely to overfit as to help, and the pipeline has no way of telling which is happening.
      - label: "D"
        text: |
          Keep the thirty-epoch budget but average the predictions produced by the final five epochs, which smooths out any late instability
        correct: false
        why: |
          Averaging the tail of an arbitrary schedule smooths the output without answering whether thirty was the right number.
    solution: |
      The line that contains the problem:

      ```python
      nn.fit(X_train, y_train, epochs=30, batch_size=64, verbose=0)
      ```

      No `validation_data`, no `callbacks`, no `validation_split`. Thirty is a number somebody typed. It might stop the network well short of convergence, or leave it grinding deep into [[overfitting]] — and the pipeline produces no evidence either way, because `verbose=0` discards even the training curve.

      The fix is what the [[validation-set|validation set]] is *for*. Split the training customers again into train and validation, watch the validation loss each epoch, and stop when it turns upward:

      ```python
      es = keras.callbacks.EarlyStopping(monitor="val_loss", patience=5,
                                         restore_best_weights=True)
      nn.fit(X_tr, y_tr, validation_data=(X_val, y_val), epochs=200, callbacks=[es])
      ```

      Note `restore_best_weights=True`. Without it you keep the weights from the last epoch — five epochs *past* the best one, by construction of `patience`.

      Option A is the one to be able to argue against precisely. Monitoring test loss and stopping at its minimum does produce a good-looking test score, and that is the problem: you have used the test set to make a modelling choice, so it is no longer held out. Do it once and the contamination is small; do it across a hyperparameter search and the final number is an in-sample score in disguise.

      > [!success] Answer — **B**
      > Carve validation customers out of the training side, monitor validation loss, and stop early with the best weights restored.
    related_terms:
      - validation-set
      - overfitting
      - hyperparameter-tuning

  - id: q15
    title: "Q15 — Plan: putting an interval around the number"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "We are quoting a single figure to the board with no indication of how much it would move under a different draw."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Use k-fold cross-validation with folds formed by customer, and report the mean and spread across folds, accepting k times the training cost
        correct: true
        why: |
          Gives a distribution rather than a point, and forms the folds on the unit that makes the estimate honest in the first place.
      - label: "B"
        text: |
          Repeat the existing 80/20 split under twenty different random seeds, then report the average accuracy across them together with its own standard deviation
        correct: false
        why: |
          Twenty row-level splits are twenty contaminated measurements; the spread would describe the leak's variability, not the model's.
      - label: "C"
        text: |
          Raise the test share from 20% to 40%, since a larger held-out set produces a correspondingly more stable estimate of performance
        correct: false
        why: |
          It does narrow sampling noise, but it buys that with a smaller training set and still yields a single number with no interval.
      - label: "D"
        text: |
          Bootstrap the existing set of test predictions a thousand times and report the resulting confidence interval around the accuracy already computed
        correct: false
        why: |
          Resampling one set of predictions captures test-set noise only; it cannot see how the fitted model varies with the training draw.
    solution: |
      A single number invites a question the pipeline cannot answer: *how much of this is the model, and how much is the particular 20% that happened to land in the test set?*

      [[cross-validation|K-fold cross-validation]] answers it by rotating the held-out fold. Every customer is held out exactly once, you get k estimates instead of one, and the spread across them tells you whether a two-point difference between models is worth arguing about. The clause "accepting that it costs k times the training time" is the honest cost, and on this dataset it is trivial — 6,557 rows and a small network.

      The critical detail is **how the folds are formed**. `GroupKFold` or `StratifiedGroupKFold`, keyed on `customer_id`, so no customer appears in two folds. Row-level folds would reproduce the original defect k times over, which is exactly what option B does.

      Option D is the most interesting distractor because bootstrapping *is* a legitimate way to get an interval. But it resamples the **predictions**, holding the fitted model fixed. It therefore measures how much the score would wobble if a different set of test customers had been drawn — and says nothing about how much the model itself would change if it had been trained on a different 80%. That second source of variation is usually the larger one, and only refitting can expose it.

      > [!success] Answer — **A**
      > Customer-grouped k-fold, reporting mean and spread, at k times the compute.
    related_terms:
      - cross-validation
      - train-test-split

  - id: q16
    title: "Q16 — Plan: what to compare the model against"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The notebook compares its models to a coin flip, and nobody has established what the bank's current process would score."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Adopt the coin-flip comparison as the formal baseline, since a fifty-fifty guess is the weakest possible rule and any model must beat it
        correct: false
        why: |
          A coin flip is the baseline for balanced classes; here "approve everyone" scores ~86% and a coin flip scores ~50%.
      - label: "B"
        text: |
          Fit a logistic regression on the same features as a simple reference model, and require the two headline models to beat it clearly
        correct: false
        why: |
          A sensible reference in general, but on these features it would inherit the same leak and set a meaninglessly high bar.
      - label: "C"
        text: |
          Report the majority-class figure of about 86%, and code the bank's existing underwriting rules as a second baseline judged on cost
        correct: true
        why: |
          Names both the statistical floor and the commercial one — the process the model would actually be replacing.
      - label: "D"
        text: |
          Compare against the same Random Forest fitted with a different set of hyperparameters, which isolates the contribution made by the modelling choices themselves
        correct: false
        why: |
          That measures the effect of tuning, not whether the model is worth deploying against what the bank does today.
    solution: |
      The closing printout contains the error in plain sight:

      ```
      "Both models are around 98% - far better than a 50/50 coin flip."
      ```

      A coin flip is the baseline for a **balanced** problem. Here about 14% of customers default, so the rule "approve everyone, decline nobody" scores about **86% accuracy while catching zero defaulters**. Measured against that, 98% is a twelve-point gain rather than a forty-eight-point one — and, as Part 1 established, most of those twelve points are leakage.

      But option C asks for a second baseline, and that is the one the business actually cares about. The bank is not currently flipping coins or approving everyone; it is underwriting against **fixed rules** — a minimum credit score, a maximum debt-to-income ratio, a minimum employment history. Those rules can be coded in an afternoon and scored on the same held-out customers. The real question is never "does the model beat chance?" It is **"does the model beat what we do today, in money?"**

      Option B deserves a word because a simple linear reference model is normally excellent practice. It fails *here* for a specific reason: fitted on the same feature matrix, a [[logistic-regression|logistic regression]] would read `avg_days_late` and `collections_flag` and post its own inflated score. A baseline built from leaky features is not a floor, it is a mirror.

      > [!success] Answer — **C**
      > Report the ~86% majority-class figure, and code the existing underwriting rules as a second baseline judged on cost.
    related_terms:
      - accuracy
      - logistic-regression
      - model-selection

  - id: q17
    title: "Q17 — Plan: where to put the threshold"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "Both models are being scored at a cut-off of one half, which nobody chose and which no cost calculation supports."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Sweep the threshold on validation and select the value that maximises F1, which balances the two error types in a single figure
        correct: false
        why: |
          F1 treats a missed defaulter and a wrongly rejected applicant as equally bad, which is exactly the assumption to reject.
      - label: "B"
        text: |
          Sweep the threshold on validation and select the value minimising expected cost at roughly ten to one, then re-run the model comparison at that point
        correct: true
        why: |
          Chooses the cut-off from the money, on data reserved for choices, and fixes the comparison at the operating point.
      - label: "C"
        text: |
          Take the point on the ROC curve lying closest to the top-left corner, which is the standard geometric criterion for an optimal cut-off
        correct: false
        why: |
          The closest-corner rule is a cost-blind convention; it implicitly weights the two error rates equally regardless of price.
      - label: "D"
        text: |
          Keep the cut-off at one half and instead reject the highest-scoring applicants until the rejection rate matches the observed default rate
        correct: false
        why: |
          Pinning the rejection rate to the base rate is arbitrary; the number to reject follows from costs, not from the prevalence.
    solution: |
      A threshold is not a modelling parameter. It is a **business decision expressed as a number**, and the way to find it is to write down what each mistake costs.

      Roughly: a missed defaulter costs the outstanding principal — on a 70,000-shekel loan, tens of thousands. A wrongly rejected applicant costs the interest margin on a loan that never happened — a few thousand at most. Call it **10 to 1**. Then for each candidate cut-off $t$:

      $$\text{cost}(t) = 10 \times \text{FN}(t) + 1 \times \text{FP}(t)$$

      Sweep $t$ across the validation scores, evaluate the expression, take the minimum. Because false negatives are weighted ten times heavier, the minimum lands **well below 0.5**: the bank should flag more applicants as risky and accept that more sound customers are turned away.

      Options A and C are the two conventional answers, and both fail for the same reason. F1's harmonic mean of [[precision]] and [[recall]] weights the two errors equally; the closest-to-corner rule on the [[roc-curve|ROC curve]] weights the two error *rates* equally. Neither has been told that one mistake costs ten times the other, so neither can find the right point except by coincidence.

      And the second clause of B carries real weight: **re-run the comparison at that threshold.** A model ranked best at 0.5 need not be best at 0.18. Comparing at a cut-off you will not use answers a question you did not ask.

      > [!success] Answer — **B**
      > Minimise expected cost at roughly 10:1 on validation, then compare the models at that operating point.

      > [!warning] Sweep on validation, never on test
      > The threshold is a choice like any other, so it is selected on validation data. Sweep it on the test set and the final figure becomes the best of many attempts rather than an estimate of unseen performance.
    related_terms:
      - precision-and-recall
      - roc-curve
      - cost-function

  - id: q18
    title: "Q18 — Plan: diagnosing overfitting once the data is clean"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "Once the leaky columns are gone and the split is by customer, we still have no way to tell whether either model is overfitting."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Compare the two models' test scores against each other; if one is much higher than the other, that model is the one overfitting
        correct: false
        why: |
          A difference between two models says nothing about either one's gap between fitted and unseen performance.
      - label: "B"
        text: |
          Add dropout and weight decay to the network and cap the trees' depth, so that overfitting is prevented before it can arise
        correct: false
        why: |
          Regularising blind is a guess. Without a measured gap you cannot tell whether you have fixed anything or crippled the model.
      - label: "C"
        text: |
          Cut the network back to a single layer, since three layers of 256 units is far more capacity than seven tabular features could ever justify
        correct: false
        why: |
          Probably the right instinct about capacity, but it is a change made without evidence rather than a way of getting evidence.
      - label: "D"
        text: |
          Record training and validation scores for both models, read the gap between them as the diagnostic, and keep test for one final measurement
        correct: true
        why: |
          Produces the comparison that defines overfitting, on the set meant for diagnosis, without spending the test set to get it.
    solution: |
      [[overfitting|Overfitting]] has a definition, and the definition is a comparison: the model performs substantially better on the data it was fitted to than on data it has not seen. You cannot diagnose it from one number, and none of A, B or C produces the second number.

      What the diagnostic looks like once you have it:

      | Training score | Validation score | Reading |
      |---|---|---|
      | high | high | Healthy — or leaking; check the features before celebrating |
      | high | much lower | Overfitting — reduce capacity, regularise, or gather more data |
      | low | low | Underfitting — more capacity, better features, longer training |
      | low | higher | Something is wrong with the split or the metric |

      Note where the comparison is drawn: **training against validation**, not training against test. The gap is something you will look at repeatedly while adjusting capacity and regularisation, and every look at the test set costs a little of its independence. Reserve it for one measurement at the end. See [[validation-set]] and [[bias-variance-tradeoff]].

      Option B is worth dwelling on because it is what teams actually do. Dropout and weight decay are the right tools *if* you have measured a gap. Applied pre-emptively they are as likely to push a model into underfitting, and since nothing is being measured, nobody will notice.

      > [!success] Answer — **D**
      > Record train and validation scores for both models, read the gap, and keep test for one final measurement.
    related_terms:
      - overfitting
      - bias-variance-tradeoff
      - validation-set
      - regularization

  - id: q19
    title: "Q19 — Plan: the comparison chart"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The bar chart's vertical axis is set to run from 0.90 to 1.00, which makes a difference of about one point fill the frame."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Redraw the axis from zero to one, mark the ~86% do-nothing baseline on it, and label the gap in percentage points
        correct: true
        why: |
          Restores the visual proportion and adds the baseline, which is the context the truncated version cut off entirely.
      - label: "B"
        text: |
          Keep the zoomed axis, which shows the difference clearly, and add a caption noting that the vertical scale has been deliberately truncated here
        correct: false
        why: |
          The caption is read after the impression has formed. A note does not undo a distorted picture, it only excuses it.
      - label: "C"
        text: |
          Delete the chart entirely and print the two accuracy figures as plain numbers, which cannot mislead anybody at all about their relative size
        correct: false
        why: |
          Honest but thin: the numbers still arrive with no baseline beside them, which is the information the reader most needs.
      - label: "D"
        text: |
          Keep the zoomed axis, because on a full scale the difference between the two models would be too small for the board to see
        correct: false
        why: |
          Being too small to see is the finding. Engineering visibility for a difference that does not matter inverts the purpose.
    solution: |
      ```python
      fig.update_yaxes(range=[0.90, 1.00])
      ```

      A y-axis spanning ten points of accuracy makes the roughly one-point gap between the models fill most of the frame. The reader's eye reports a decisive win; the data says a tie.

      Three things option A does that the alternatives do not:

      1. **Zero to one restores proportion.** The bars become nearly the same height, which is the truthful picture of a one-point difference.
      2. **The baseline goes on the chart.** At **~86%**, the do-nothing rule sits *below the bottom edge* of the truncated version — so the current chart hides the single most important comparison. Drawn as a reference line, it shows at a glance how much of each bar was free.
      3. **The gap is labelled in points.** "1.1 percentage points" is unambiguous where two bar heights are not.

      Option D is the argument you will genuinely hear, and it is worth naming plainly: *"on a full scale you would not be able to see the difference."* That is not a problem with the scale. **The difference being invisible at true proportion is the finding**, and it is the finding that decides the question in Part 3.

      > [!success] Answer — **A**
      > Full 0-to-1 axis, the ~86% baseline drawn on it, and the gap labelled in percentage points.
    related_terms:
      - accuracy
      - exploratory-data-analysis

  - id: q20
    title: "Q20 — Plan: the column nobody dropped"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "Only `default` and `customer_id` are dropped, so `month` — a property of the warehouse export — is being used as a predictor."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          One-hot encode `month` so the model treats it as a set of categories rather than as a quantity with a meaningful ordering
        correct: false
        why: |
          A better encoding of a column that should not be there. The problem is provenance, not the representation chosen.
      - label: "B"
        text: |
          Keep `month` for now and check its feature importance first; drop it only if it turns out to carry weight in the fitted model
        correct: false
        why: |
          Importance measured on this data would reflect the row structure, so the check would justify keeping an artefact.
      - label: "C"
        text: |
          Drop `month`, then audit every remaining column against one question: was this knowable about this applicant on the day they applied?
        correct: true
        why: |
            Removes the column and installs the general test that would have caught it, along with the two leaky behaviour columns.
      - label: "D"
        text: |
          Standardise `month` separately from all the other features, so that its unusually narrow range cannot dominate any of the distance calculations
        correct: false
        why: |
          Scaling adjusts a column's influence; it cannot make a warehouse artefact into a property of the applicant.
    solution: |
      The line that lets it through:

      ```python
      X = df.drop(columns=["default", "customer_id"])
      ```

      Two columns out, seven left in — and `month` is one of them. It is not a fact about the borrower; it records **which monthly snapshot this row came from**, running 1 to 3–8 depending on how long the warehouse happened to have been watching. A new applicant on submission day has no month index at all.

      Worse, it is quietly correlated with the label through the export mechanics: customers observed longer produce higher month values *and* have had more opportunity to default under the unanchored label. The model can pick that up and report it as signal.

      What makes C the plan rather than just the deletion is the second clause. Dropping `month` fixes one symptom of a missing habit. The habit is the **decision-day test**, applied column by column:

      | Column | Known on submission day? | Verdict |
      |---|---|---|
      | `income`, `credit_score`, `loan_amount`, `self_employed` | yes | keep, once units are fixed |
      | `avg_days_late`, `collections_flag` | no — computed after lending | drop |
      | `month` | no — a warehouse artefact | drop |
      | `customer_id` | yes, but an identifier | drop |

      Run that test once and `month` never survives it — and neither do the two post-outcome columns that produced the ~98%.

      > [!success] Answer — **C**
      > Drop `month`, and audit every remaining column with the decision-day test that would have caught it.
    related_terms:
      - feature-selection
      - data-leakage

  - id: q21
    title: "Q21 — The honest numbers come in below the baseline"
    text: |
      The model decision:

      > "The rebuilt pipeline reports, for the Random Forest at the cost-based threshold: 36% of defaulters caught, 29% of flagged applicants genuinely defaulting, and overall accuracy of 71% — down from the 98% first presented, and below the 86% a do-nothing rule achieves."

      How should this be read?
    options:
      - label: "A"
        text: |
          The rebuild has gone wrong somewhere, since a correctly specified model should never score below the baseline that simply predicting the majority class achieves
        correct: false
        why: |
          A cost-weighted model is expected to fall below majority accuracy, because it deliberately buys false positives cheaply.
      - label: "B"
        text: |
          The 71% shows the model is now underfitting, so capacity should be increased until accuracy climbs back above the 86% baseline
        correct: false
        why: |
          Tuning towards an accuracy target would undo the threshold choice, which was made on cost for good reason.
      - label: "C"
        text: |
          Accuracy has fallen by 27 points while recall is only 36%, so the corrected pipeline performs materially worse than the original one did
        correct: false
        why: |
          The original figures measured leakage. Comparing an honest number to a contaminated one is not a comparison at all.
      - label: "D"
        text: |
          Expected: a threshold below 0.5 trades cheap false rejections for expensive defaults avoided, so accuracy falls by design and cost decides
        correct: true
        why: |
          Explains the drop as the intended consequence of cost-weighting rather than as a defect, and names the right yardstick.
    solution: |
      This is the moment the exam is really testing, because every instinct says the numbers got worse.

      **Why accuracy fell below the baseline.** The threshold was deliberately placed **below 0.5**, because a missed defaulter costs roughly ten times a wrongly rejected applicant. That setting flags many more applicants as risky, and most of those flags are false positives — sound customers turned away. Every one of them is an "incorrect" decision in the accuracy count. A do-nothing rule makes none of them, which is exactly why it scores 86% while catching nobody.

      So a cost-optimal classifier on imbalanced data **routinely scores below the majority-class baseline on accuracy**. That is not a failure mode; it is the arithmetic of choosing to buy cheap errors in order to avoid expensive ones.

      **The right yardstick.** Put the money in:

      | | Do nothing | Corrected model |
      |---|---|---|
      | Defaulters caught | 0% | 36% |
      | Accuracy | ~86% | 71% |
      | Principal saved | none | 36% of defaults avoided |
      | Margin forgone | none | the false rejections |

      Whether the model wins depends on whether the principal saved exceeds the margin forgone — a cost calculation, not an accuracy comparison. Option C's mistake is subtler and just as important: the 98% was never a measurement, so "down 27 points" compares an honest number against a contaminated one.

      > [!success] Answer — **D**
      > Accuracy falls by design when the threshold is cost-weighted; judge the result on money, not on the accuracy baseline.
    related_terms:
      - accuracy
      - precision-and-recall
      - cost-function

  - id: q22
    title: "Q22 — Validation recall above test recall"
    text: |
      The model decision:

      > "After tuning, the chosen model reaches 41% recall on validation and 34% on the held-out test set."

      What should be made of the seven-point difference?
    options:
      - label: "A"
        text: |
          The model is overfitting badly and its capacity should be cut until the two figures converge on a common value
        correct: false
        why: |
          A gap of this size after a tuning search is ordinary selection optimism, not evidence of a capacity problem.
      - label: "B"
        text: |
          Expected optimism: validation was used to make choices, so it flatters the winner — report the 34% and stop tuning against test
        correct: true
        why: |
          Names the mechanism, takes the honest figure forward, and protects the test set from becoming a second validation set.
      - label: "C"
        text: |
          Report the average of the two, around 37%, since both were measured on data the model was not fitted to directly
        correct: false
        why: |
          Averaging a selected figure with an unselected one produces a number that estimates nothing in particular.
      - label: "D"
        text: |
          Re-split the data under several seeds and adopt the split on which the validation and test figures come out closest together
        correct: false
        why: |
          Selecting the split that looks tidiest is choosing the evidence to fit the story; the agreement would be manufactured.
    solution: |
      Validation scores are **optimistically biased for the model you selected**, and the mechanism is worth stating precisely.

      You tried a number of configurations and kept the one with the best validation recall. Each configuration's validation score is its true performance plus some noise. Taking the maximum over many such scores tends to pick a configuration that got a *favourable* draw of noise — so the winner's validation figure sits above its true performance almost by construction. The wider the search, the larger the optimism.

      The test set has been used for nothing, so its 34% is the unbiased estimate. **Report 34%.** Seven points of selection optimism after a real tuning search is unremarkable.

      Two traps to avoid:

      - Option A treats selection optimism as [[overfitting]]. The two are related but distinct: overfitting is memorising the *training* rows; this is over-selecting on the *validation* rows. Cutting capacity is the wrong response and would likely cost you real recall.
      - Option D is the more dangerous one because it produces tidy-looking evidence. Choosing the split on which the numbers agree is choosing your data to fit your conclusion, and it manufactures exactly the reassurance you were trying to earn.

      > [!success] Answer — **B**
      > The gap is expected optimism from selecting on validation; report the 34% and leave the test set alone.

      > [!tip] Nested cross-validation
      > When the tuning search is large and honesty about the final figure matters, an inner loop selects the settings and an outer loop estimates performance — so the selection never touches the set that produces the reported number.
    related_terms:
      - validation-set
      - overfitting
      - cross-validation

  - id: q23
    title: "Q23 — Choosing between the models on AUC"
    text: |
      The model decision:

      > "A colleague proposes settling the choice on ROC-AUC, on the grounds that it is threshold-free and therefore avoids all the arguments about where to cut."

      How should this proposal be treated?
    options:
      - label: "A"
        text: |
          Accept it — a threshold-free measure is the only fair way to rank two models whose optimal cut-offs may well differ from each other
        correct: false
        why: |
          Fairness in ranking is not the goal; the bank operates at one cut-off, so performance there is what has to be compared.
      - label: "B"
        text: |
          Reject it — a metric computed across every possible threshold cannot describe a bank that will operate at exactly one of them
        correct: false
        why: |
          Too blunt. A threshold-free ranking is genuinely useful as a summary, provided it is not the figure the decision rests on.
      - label: "C"
        text: |
          Accept it only as secondary — AUC weights both classes alike, so with 14% defaulters lead on PR-AUC and recall at the operating threshold
        correct: true
        why: |
          Keeps AUC in its proper supporting role while putting the decision on metrics that answer the bank's actual question.
      - label: "D"
        text: |
          Reject it — AUC cannot be computed for a Random Forest, which returns discrete class votes rather than a continuous score
        correct: false
        why: |
          The forest exposes `predict_proba`, a continuous vote share, from which an ROC curve and its area follow directly.
    solution: |
      [[auc|ROC-AUC]] is a real metric with a clear meaning: the probability that a randomly chosen defaulter is scored higher than a randomly chosen non-defaulter. It is threshold-free, which is genuinely useful — it tells you about the **ranking** the model produces, independently of where anybody cuts.

      Two reasons it should not decide this question.

      **It is insensitive to imbalance in the wrong direction.** The ROC curve plots true positive rate against *false positive rate*, and the false positive rate has the 1,118 sound loans in its denominator. Flagging a hundred extra good customers barely moves it. The bank feels those hundred rejections directly. PR-AUC uses [[precision]] instead, whose denominator is the flagged set, so it responds to exactly the cost the ROC curve dilutes.

      **The bank operates at one point, not across all of them.** Two models can have identical AUC and behave very differently in the region below 0.5 where this bank will actually sit. What matters is [[recall]] and precision **at the operating threshold**.

      Hence the ordering in option C: lead on PR-AUC and recall at the operating threshold; keep AUC as a secondary check that one model is not ranking systematically better across the range. Option B throws away that secondary value; option A promotes a summary statistic over the operating point.

      > [!success] Answer — **C**
      > Keep AUC as a secondary ranking check, and decide on PR-AUC and recall at the threshold the bank will actually use.
    related_terms:
      - auc
      - roc-curve
      - precision-and-recall

  - id: q24
    title: "Q24 — Reading the corrected confusion matrix"
    text: |
      The model decision:

      > "On 1,300 held-out applications containing 182 eventual defaulters, the chosen model catches 62 of them, misses 120, and wrongly rejects 158 applicants who would have repaid."

      Which reading of these figures is correct?
    options:
      - label: "A"
        text: |
          Recall is about 34% and precision about 28%; the bank refuses 158 payers to stop 62 defaults, which pays above 2.5 margins
        correct: true
        why: |
          Both metrics are computed correctly and the trade is expressed as the ratio that decides whether it is worth making.
      - label: "B"
        text: |
          Recall is about 28% and precision about 34%; the model is therefore more reliable when it flags an applicant than it is at finding defaulters
        correct: false
        why: |
          The two figures are swapped: recall divides by the 182 defaulters, precision by the 220 applicants flagged.
      - label: "C"
        text: |
          Accuracy comes out at about 79%, which sits below the do-nothing baseline, so the model is not yet performing well enough to consider
        correct: false
        why: |
          The accuracy figure is right but the inference is not; a cost-weighted model is expected to fall below majority accuracy.
      - label: "D"
        text: |
          Recall is about 34% and precision about 39%; two thirds of defaulters still get through, so the threshold should be raised to improve the balance
        correct: false
        why: |
          Precision is 62/220, not 62/158, and raising the threshold would let even more defaulters through, not fewer.
    solution: |
      Lay the four counts out first — this is the arithmetic the exam expects you to do without hesitating.

      | | Predicted default | Predicted repay |
      |---|---|---|
      | **Actually defaulted** | TP = 62 | FN = 120 |
      | **Actually repaid** | FP = 158 | TN = 960 |

      (182 defaulters − 62 caught = 120 missed; 1,300 − 182 = 1,118 sound loans, minus 158 wrongly rejected = 960.)

      **[[recall|Recall]]** — of the defaulters, how many did we catch?

      $$\text{Recall} = \frac{TP}{TP+FN} = \frac{62}{182} \approx 34\%$$

      **[[precision|Precision]]** — of those we flagged, how many really defaulted?

      $$\text{Precision} = \frac{TP}{TP+FP} = \frac{62}{220} \approx 28\%$$

      Note the denominators, because that is where B and D go wrong. Recall divides by everyone who **actually defaulted** (182). Precision divides by everyone the model **flagged** (62 + 158 = 220). Option D's 39% comes from dividing by the false positives alone, which is not a metric at all.

      **The trade.** The bank turns away **158 payers** to stop **62 defaults** — about **2.5 rejections per default avoided**. So the policy pays if one default costs more than roughly 2.5 interest margins. Given that a default costs the outstanding principal against a margin, the real ratio is nearer ten to one, so 2.5 is comfortably clear.

      Option C's arithmetic is right — $(62+960)/1300 \approx 79\%$ — and its conclusion is the Q21 error repeated: falling below the 86% majority baseline is the expected consequence of cost-weighting, not a disqualification.

      > [!success] Answer — **A**
      > Recall 34%, precision 28%, and 2.5 sound customers refused per default prevented — a trade that clears comfortably at 10:1 costs.
    related_terms:
      - confusion-matrix
      - recall
      - precision

  - id: q25
    title: "Q25 — The go/no-go call"
    text: |
      The model decision:

      > "Final position: recall 34% and precision 28% at the cost threshold, expected losses roughly 22% below the current rules on the same applications. The approved-only data problem remains unfixed."

      What is the defensible call?
    options:
      - label: "A"
        text: |
          Deploy it as the automatic underwriting decision, since a 22% reduction in expected losses is a large and clearly measured improvement
        correct: false
        why: |
          The 22% was measured only on profiles the old rules already approved, which is not the population an automatic decision would face.
      - label: "B"
        text: |
          Deploy alongside the existing rules on live applications, with human decisions still binding, and review once outcomes on the borderline cases arrive
        correct: true
        why: |
          Takes the measured gain seriously while conceding that it was measured on a population the model has not yet been tested against.
      - label: "C"
        text: |
            Decline to deploy in any form until the selection-bias experiment has run and the model has been refitted on the wider population
        correct: false
        why: |
          Waiting costs a documented 22% for months and forgoes the shadow evidence that would make the eventual decision better.
      - label: "D"
        text: |
          Deploy it only for salaried applicants, whose records are far more complete, and continue underwriting the self-employed by the existing rules
        correct: false
        why: |
          Segmenting by data quality is reasonable in principle, but it entrenches the gap for the group the model handles worst.
    solution: |
      Everything on this paper converges here, and the call has two halves that have to be held at once.

      **The evidence is real.** The numbers are honest this time: leaky columns removed, split by customer, threshold set from costs, metrics that describe the defaulters. A 22% reduction in expected losses is a serious result and should not be waved away because 34% recall sounds low.

      **The evidence has a boundary.** It was measured on applications the old rules **approved**. The bank's warehouse stores approved loans only, so the model has never been scored on the profiles it was built to make decisions about — the borderline and rejected ones. Deploying it as the automatic decision (option A) extrapolates into a region where no measurement exists.

      **Shadow mode resolves the tension.** Run the model on live applications, record what it would have decided, let the humans decide as they do now. It costs almost nothing, breaks nothing, and generates precisely the evidence that is missing: how the model behaves on the full applicant flow, and whether its disagreements with the underwriters are the sensible kind. Pair it with the controlled experiment on borderline applications and the second review will rest on data from the right population.

      That is why C is wrong despite sounding like the careful answer. Declining outright forgoes a documented 22% and produces **no new information** — you wait months and arrive at the same decision with the same evidence.

      > [!success] Answer — **B**
      > Run it in shadow alongside the existing rules, humans binding, and review when borderline outcomes arrive.

      > [!quote] The habit this paper is training
      > Not "is the model good?" but **"what exactly was measured, on whom, and does that population match the one the decision applies to?"** Every question on this paper is a version of that question.
    related_terms:
      - model-selection
      - precision-and-recall
---

> [!info] What this paper is
> A **practice mock** written to sit alongside the lecturer's [[pp-01-sample-exam-25-questions|sample exam]]. Same notebook, same three-part structure, same style of question — but a different slice of it. Where the sample paper roams across the whole pipeline, this one drills the **preprocessing and evaluation** half in depth.
>
> - 📓 [`loan_pipeline.ipynb`](/papers/machine-learning/loan_pipeline.ipynb) — run it before attempting this
> - 📄 [Problem brief + 15 preparation questions](/papers/machine-learning/loan-pipeline-brief-and-prep-questions.pdf)
> - 📝 [[loan-pipeline-code-walkthrough|Code walkthrough & defect catalogue]]

## What this paper covers

| Territory | Questions |
|---|---|
| Order of operations — fit on train, transform on test | 1, 11 |
| Imputation, fill values, missing-indicators | 2, 8 |
| Standardisation: what it does and does not fix | 1, 2, 11 |
| Split design — grouping, stratification, validation sets | 3, 4, 14, 15 |
| Cross-validation and the spread around an estimate | 3, 15, 22 |
| Class imbalance, baselines, and what accuracy hides | 5, 9, 12, 16 |
| [[confusion-matrix\|Confusion matrix]], [[recall]], [[precision]], [[auc\|ROC-AUC]], PR-AUC | 9, 13, 23, 24 |
| Thresholds and cost-sensitive evaluation | 10, 17, 21 |
| Overfitting diagnosed from train-versus-held-out gaps | 7, 18, 22 |
| The truncated-axis chart | 6, 19 |
| Feature provenance and the decision-day test | 20 |

The data-generating process, the model architectures, and deployment governance are touched only in passing — the sample paper and the other mocks cover those.

## How to sit it

Three parts, same as the real thing:

- **Part 1 (Q1–Q10)** — a colleague raises a concern; decide whether it holds. Not every concern is valid, and some are true but trivial. Three of the ten here are **not** valid as stated.
- **Part 2 (Q11–Q20)** — the concern is confirmed; choose between four competing plans. The wrong plans are things a competent analyst might genuinely propose.
- **Part 3 (Q21–Q25)** — the numbers arrive and you have to act on them.

> [!warning] This paper is deliberately harder to guess
> The sample paper can be half-answered by picking the longest, most hedged option every time. That tell has been removed here on purpose: options within a question are matched for length, cautious phrasing appears as often in wrong answers as in right ones, and several correct answers are the blunt short ones. **You will have to read the code.**

> [!tip] Where to look if you get one wrong
> Q1–Q2 and Q11 turn on the cleaning cell; Q3–Q4 and Q15 on the split; Q5, Q9, Q13 and Q24 on the evaluation. All of them are catalogued in the [[loan-pipeline-code-walkthrough|walkthrough]] — mark which cell your mistakes cluster around, because that is the cell to reread.
