---
title: "Sample Exam — 25 Practice Questions (Loan Pipeline)"
type: past-paper
status: worked-solution
exam: "Sample Exam — 25 Practice Questions"
course: "Machine Learning — Economics Track"
semester: 2
year: 2
source_doc: /papers/machine-learning/sample-exam-25-questions.pdf
tags:
  - machine-learning
  - past-paper
  - worked-solution
  - loan-pipeline
  - data-leakage
  - class-imbalance
  - model-selection
  - train-test-split
  - selection-bias
aliases:
  - ML Sample Exam
  - Loan Pipeline Sample Exam
  - PP01 Machine Learning
subject: machine-learning
in_scope: true
questions:
  - id: q1
    title: "Q1 — Columns that are empty on decision day"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Two of the columns will simply be empty when a new customer applies for a loan."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — `avg_days_late` and `collections_flag` describe what happened **after** the money was lent, so no applicant can have them on decision day
        correct: true
        why: |
          Both columns are generated *from* `default` inside `load_data`. They are consequences of the outcome, not predictors of it.
      - label: "B"
        text: |
          Not valid — the bank collects these fields from the credit bureau at application
        correct: false
        why: |
          The bureau reports a credit score. "How late **this** loan's payments have run" cannot exist before this loan exists.
      - label: "C"
        text: |
          Not valid — empty values are handled automatically by the cleaning step
        correct: false
        why: |
          Imputation fills a *gap*. It cannot invent information that does not exist yet — and filling a leaky column just launders the leak.
      - label: "D"
        text: |
          Valid — but the columns concerned are `income` and `credit_score`
        correct: false
        why: |
          Those two have **missing** values, which is a different problem (Q11/Q14). They are genuinely known on decision day.
    solution: |
      This is the single most important defect in the pipeline, and the code shows it plainly:

      ```python
      days_late = rng.uniform(2, 35) if default else rng.exponential(2.5)
      collections = int((default and rng.random() < 0.65) or rng.random() < 0.05)
      ```

      Both lines branch **on `default`**. The label is used to manufacture the feature. That is textbook [[data-leakage|target leakage]]: the model is handed the answer in disguise, which is why accuracy lands at ~98% instead of something near the ~86% you would get by predicting "no default" for everyone.

      > [!success] Answer — **A**
      > `avg_days_late` and `collections_flag` are **post-outcome** fields. A new applicant on submission day has neither.

      > [!tip] The decision-day test
      > For every column, ask: *would the bank know this value on the morning the application arrives?* If not, it cannot be a feature — no matter how predictive it looks. Predictive power that comes from the future is not predictive power at all.

  - id: q2
    title: "Q2 — One customer, several rows"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "A single customer can occupy several rows of the table, which the split does not take into account."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — the pipeline removes duplicate customers before splitting
        correct: false
        why: |
          Nothing in the code deduplicates. `train_test_split` is called on the raw row-level frame.
      - label: "B"
        text: |
          Valid — the table holds monthly snapshots, so most customers appear 3–8 times, and a random row-level split scatters them across train and test
        correct: true
        why: |
          `for month in range(1, int(rng.integers(3, 9)) + 1)` emits 3–8 near-identical rows per customer, all carrying the same `default`.
      - label: "C"
        text: |
          Not valid — repeated rows only slow training down, they do not affect the score
        correct: false
        why: |
          They affect the score decisively: the model recognises a customer it has already memorised rather than predicting a new one.
      - label: "D"
        text: |
          Valid — but this affects only customers who defaulted
        correct: false
        why: |
          Every customer is replicated, defaulter or not. The leak is symmetric.
    solution: |
      `load_data` writes one row per **customer-month**:

      ```python
      for month in range(1, int(rng.integers(3, 9)) + 1):
          rows.append({...})
      ```

      Crucially, `default`, `income`, `credit_score`, `loan_amount` and `collections_flag` are **constant across a customer's rows** — only `month` and a jittered `avg_days_late` move. So the test set contains near-duplicates of training rows with the same label attached.

      Then:

      ```python
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      ```

      A random row-level [[train-test-split|split]] puts ~80% of each customer's rows in train and ~20% in test. The reported accuracy measures **recognition, not prediction**.

      > [!success] Answer — **B**
      > Monthly snapshots mean 3–8 rows per customer; a row-level split spreads each customer across both sides.

      > [!warning] Grouped data needs a grouped split
      > Whenever rows share an entity (customer, patient, firm, school), the split must be **by that entity** — `GroupShuffleSplit` or `StratifiedGroupKFold`. Splitting by row silently inflates every score you report.

  - id: q3
    title: "Q3 — Loans observed for different lengths of time"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Loans have been observed for different lengths of time, yet they are all labelled by the same rule."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — the label is measured over a fixed 24-month horizon
        correct: false
        why: |
          No horizon is defined anywhere. The number 24 does not appear in the brief or the code.
      - label: "B"
        text: |
          Not valid — observation time is irrelevant once the outcome is known
        correct: false
        why: |
          The outcome is only "known" relative to how long you watched. A loan watched for 3 months has had less opportunity to default.
      - label: "C"
        text: |
          Valid — "missed 3+ payments at some point" has no fixed window, so a loan observed for three months and one observed for eight are judged on different terms
        correct: true
        why: |
          Without a common horizon the label means different things for different rows, biasing the target itself.
      - label: "D"
        text: |
          Valid — but the fix is simply to drop the `month` column
        correct: false
        why: |
          Dropping `month` hides the evidence of the problem without fixing the label definition.
    solution: |
      Loans in this table are observed for anywhere between **3 and 8 months** (`rng.integers(3, 9)`), yet a single rule labels all of them. A borrower watched for three months simply has had fewer chances to miss three payments than one watched for eight.

      The consequence is that **the target variable is not comparable across rows**. Two identical borrowers can carry different labels purely because of when the warehouse snapshot was taken. Every downstream metric inherits that inconsistency.

      > [!success] Answer — **C**
      > An "at some point" label with no fixed window judges short- and long-observed loans on different terms.

      > [!tip] Label definitions are a business decision, not a coding one
      > "Default" has to be pinned down before any modelling: *default within N months of origination*. Pick the horizon, document it, and **exclude loans not yet observed for that long** — see Q15 for the plan.

  - id: q4
    title: "Q4 — No rejected applicants in the data"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "There are no examples in the data of the applicants the bank turned down."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — rejected applications are stored with an estimated outcome
        correct: false
        why: |
          An *estimated* outcome is a guess, not an observation. Training on guesses just relearns the old rules.
      - label: "B"
        text: |
          Valid — the warehouse stores approved loans only, so the riskiest slice of the applicant population never appears in training
        correct: true
        why: |
          The brief states it directly: "The warehouse stores approved loans only."
      - label: "C"
        text: |
          Not valid — rejected applicants are irrelevant, since we only lend to approved ones
        correct: false
        why: |
          The model's job is to decide **who to approve**, so it must reason about the full applicant population — including profiles the old rules refused.
      - label: "D"
        text: |
          Valid — but this is easily fixed by generating synthetic rejected applicants
        correct: false
        why: |
          Synthetic labels encode your assumptions, not reality. You would be validating your own guesswork.
    solution: |
      This is **selection bias** (specifically *survivorship bias*, and in lending, *reject inference*). The training population is not the population the model will face in production.

      The model is asked: *"of all people who apply, who will default?"* The data only answers: *"of people the old rules already approved, who defaulted?"* Those are different questions, and the gap is exactly the risky segment the bank most wants to reason about.

      > [!success] Answer — **B**
      > Approved-only data omits the riskiest slice of applicants entirely.

      > [!warning] This one cannot be fixed in code
      > Every other defect on this paper is a coding or methodology fix. This one is a **missing-data problem in the world**, and the only honest remedy is to go and collect the data — see Q20.

  - id: q5
    title: "Q5 — Income holding two kinds of number"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The income column looks as though it holds two different kinds of number."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — income is a single well-defined quantity by nature
        correct: false
        why: |
          Income is only well-defined once you state *per what period*. That is precisely what is missing here.
      - label: "B"
        text: |
          Not valid — the standardisation step resolves any inconsistency in the column
        correct: false
        why: |
          [[feature-scaling|Standardising]] shifts and rescales the whole column at once. A mixture of two populations stays a mixture.
      - label: "C"
        text: |
          Valid — the column mixes gross and net income, which differ by roughly that ratio
        correct: false
        why: |
          Gross and net differ by tens of percent, not by a factor of twelve. The ratio points at months vs years.
      - label: "D"
        text: |
          Valid — the histogram shows two populations about twelve times apart, consistent with monthly and annual incomes merged into one column
        correct: true
        why: |
          The factor of ~12 is the giveaway, and the code confirms it explicitly.
    solution: |
      The histogram in the notebook has two clear peaks, and the generator says why:

      ```python
      income = income_m * 12 if rng.random() < 0.3 else income_m  # some systems store it annually
      ```

      About 30% of records are **annual**, 70% are **monthly**, in one column with one name. Twelve is not a coincidence — it is the number of months in a year.

      This matters twice over. The obvious harm is that the feature is meaningless as it stands. The subtler harm is that the mean used to fill missing incomes (Q11/Q13) is the average of a **bimodal** column — a value that describes neither population.

      > [!success] Answer — **D**
      > Two peaks a factor of ~12 apart = monthly and annual figures merged.

      > [!tip] Why the brief tells you to run the notebook
      > This defect is invisible in the code summary and obvious in the chart. Plotting your features before modelling is not decoration — it is the cheapest bug-finding you will ever do. See [[exploratory-data-analysis|EDA]].

  - id: q6
    title: "Q6 — Does the pipeline use a validation set?"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The pipeline uses a validation set to decide when to stop training the neural network."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — there is no validation set at all: the data is split into train and test only, and the network runs a fixed 30 epochs with nothing monitoring it
        correct: true
        why: |
          `train_test_split` produces two sets, and `nn.fit(..., epochs=30, verbose=0)` passes no `validation_data` and no callbacks.
      - label: "B"
        text: |
          Valid — and that is the correct use of a validation set
        correct: false
        why: |
          It *would* be the correct use — but the pipeline does not do it. Read the `fit` call.
      - label: "C"
        text: |
          Valid — but the validation set is too small to be reliable
        correct: false
        why: |
          You cannot judge the size of a set that does not exist.
      - label: "D"
        text: |
          Not valid — the network stops automatically when the loss stops improving
        correct: false
        why: |
          That is `EarlyStopping`, and it must be requested explicitly. No callback is passed.
    solution: |
      Note the trap: the *concern* is phrased as a compliment, and you have to catch that it describes something the pipeline never does. Two lines settle it.

      ```python
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      ```

      Two sets out, not three.

      ```python
      nn.fit(X_train, y_train, epochs=30, batch_size=64, verbose=0)
      ```

      No `validation_split`, no `validation_data`, no `callbacks`. The network trains for exactly 30 epochs whatever happens — 30 could be far too few or long past the point of [[overfitting]], and nothing in the pipeline would tell you which.

      > [!success] Answer — **A**
      > Train/test only, and a fixed 30 epochs with nothing monitored.

      > [!tip] What the three sets are for
      > **Train** fits the parameters. **[[validation-set|Validation]]** chooses the [[hyperparameter-tuning|hyperparameters]] and decides when to stop. **Test** is touched once, at the end, to estimate performance. Skip the middle one and every tuning decision quietly contaminates your final number.

  - id: q7
    title: "Q7 — Standardising features for a Random Forest"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The Random Forest's results are invalid because its features were standardised before training."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — decision trees cannot be trained on standardised features
        correct: false
        why: |
          They train perfectly well on them. Scaling is simply irrelevant to a tree.
      - label: "B"
        text: |
          Valid — standardisation destroys the thresholds the trees rely on
        correct: false
        why: |
          A monotonic transform maps every threshold to an equivalent one. The tree splits at the same *rows*.
      - label: "C"
        text: |
          Not valid — standardising does no harm to a tree-based model; the real problem with that step is that it was fitted on all the data before the split
        correct: true
        why: |
          Separates the harmless part (scaling trees) from the genuine defect (fit-before-split leakage).
      - label: "D"
        text: |
          Not valid — and there is nothing wrong with the standardisation step at all
        correct: false
        why: |
          Half right. Scaling the trees is fine, but the line is still buggy — it is fitted on all the data.
    solution: |
      Two separate claims are bundled here, and you have to pull them apart.

      **Is scaling harmful to a [[random-forest|Random Forest]]?** No. A [[decision-tree|tree]] splits on rank order — "is $x$ below this cut?" Standardising is a monotonic transform, so it relabels the cut without changing which rows fall either side. Trees are scale-invariant; scaling them is pointless, not damaging.

      **Is the line still wrong?** Yes, badly:

      ```python
      X = StandardScaler().fit_transform(X)
      ```

      This runs **before** `train_test_split`. The mean and standard deviation are computed over *every* row, test rows included, so information about the test set is baked into the training features. That is a second, quieter [[data-leakage|leak]].

      > [!success] Answer — **C**
      > Scaling does not hurt the forest — but fitting the scaler on all the data before splitting is a real leak.

      > [!warning] The distractor pattern to expect
      > Options A and B are **true-sounding statements about a real concept** attached to the wrong conclusion. The exam rewards you for noticing that a criticism can be simultaneously well-intentioned, aimed at the right line of code, and wrong about why.

  - id: q8
    title: "Q8 — 'Model parameters' in the comments"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The notebook's comments describe the number of trees and the number of epochs as things the model works out for itself."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — the number of trees is indeed learned during training
        correct: false
        why: |
          `n_estimators=100` is typed by a human before training starts. Nothing learns it.
      - label: "B"
        text: |
          Valid — those are hyperparameters the team chose, and calling them "model parameters" signals that nobody justified the choices
        correct: true
        why: |
          Matches both the mislabelling and what it reveals about the process.
      - label: "C"
        text: |
          Not valid — the comments describe them correctly as settings
        correct: false
        why: |
          The comments say "model parameters", and add "default settings are fine" / "no tuning needed".
      - label: "D"
        text: |
          Valid — but only the epochs are mislabelled, not the trees
        correct: false
        why: |
          Both are mislabelled, by the same phrase, in two different markdown cells.
    solution: |
      The notebook's own headings:

      > *(model parameters: `n_estimators=100`, default settings are fine)*
      >
      > *(model parameters: 3 layers, 30 epochs, no tuning needed)*

      The distinction the exam wants:

      | | Set by | Learned during training? | Examples here |
      |---|---|---|---|
      | **Parameter** | the fitting algorithm | yes | tree split points; network weights and biases |
      | **[[hyperparameter-tuning\|Hyperparameter]]** | the human, beforehand | no | `n_estimators=100`, 3 layers of 256 units, 30 epochs, `batch_size=64`, `test_size=0.2` |

      Every value called a "model parameter" in those comments is in fact a **hyperparameter**. And the tell is the second half of each comment — "default settings are fine", "no tuning needed". Nobody searched for these values on a validation set; they were typed once and never questioned.

      > [!success] Answer — **B**
      > They are hyperparameters, and the mislabelling reveals that the choices were never justified.

  - id: q9
    title: "Q9 — Do the two models agree?"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The pipeline never checks whether the two models actually agree with each other."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — two models must always be checked for agreement before deployment
        correct: false
        why: |
          "Always" is far too strong, and agreement is not a correctness test — two models fed the same leaky features agree beautifully and are both wrong.
      - label: "B"
        text: |
          Not valid as a priority — agreement between models tells us little; what is missing is far more basic, namely any measure of how each model performs on the customers who default
        correct: true
        why: |
          Correctly ranks a nice-to-have below the actual gap: no [[recall|recall]], no [[precision]], no [[confusion-matrix|confusion matrix]].
      - label: "C"
        text: |
          Valid — disagreement between models is the standard test for data leakage
        correct: false
        why: |
          There is no such standard test. Leakage is found by auditing where each feature comes from.
      - label: "D"
        text: |
          Not valid — the pipeline does compare their predictions row by row
        correct: false
        why: |
          It compares two accuracy *scalars* and draws a bar chart. Predictions are never compared.
    solution: |
      This concern is not *false* — the pipeline genuinely does not check agreement. But the question asks whether it is **valid as a concern**, and the honest answer is that it is a minor observation standing in front of a much larger hole.

      The pipeline's entire evaluation is:

      ```python
      acc_rf = accuracy_score(y_test, rf.predict(X_test))
      acc_nn = accuracy_score(y_test, (nn.predict(X_test, verbose=0) > 0.5).astype(int))
      ```

      Two numbers. On a portfolio where ~14% default, [[accuracy]] alone cannot tell you the one thing the bank actually needs to know: **of the customers who defaulted, how many did we catch?** That requires a confusion matrix, recall, and precision — none of which appear anywhere.

      > [!success] Answer — **B**
      > Model agreement is a distraction; the missing measure is performance on the defaulters.

      > [!tip] Exam skill: ranking concerns, not just listing them
      > Part 1 is not only "true or false". Several concerns are technically accurate but trivial, and the correct option says so. A business owner who escalates everything equally is as unhelpful as one who escalates nothing.

  - id: q10
    title: "Q10 — 'It was written by an AI assistant'"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The results cannot be trusted because the code was written with the help of an AI assistant."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — AI-written code cannot be used for financial decisions
        correct: false
        why: |
          A blanket ban on a tool is not an audit finding. Human-written code fails audits constantly.
      - label: "B"
        text: |
          Valid — AI assistants always introduce data leakage
        correct: false
        why: |
          "Always" is false. This pipeline leaks because of specific lines, which a human could equally have written.
      - label: "C"
        text: |
          Not valid as stated — how the code was written is not itself evidence of anything; the results cannot be trusted because of specific, demonstrable defects in the data and the evaluation
        correct: true
        why: |
          Rejects the reasoning while keeping the conclusion, and grounds it in evidence.
      - label: "D"
        text: |
          Not valid — and there are in fact no defects in this pipeline
        correct: false
        why: |
          There are at least a dozen, several fatal.
    solution: |
      The subtlest question on Part 1, because the **conclusion** ("the results cannot be trusted") is correct while the **reasoning** ("because an AI wrote it") is worthless. Options A and B agree with you for the wrong reason; D disagrees for the wrong reason. Only C separates the two.

      Provenance is not evidence. What condemns this pipeline is a list you can point at, line by line: leaky post-outcome features, customers on both sides of the split, a scaler fitted before the split, an impossible imputation value, mixed units in `income`, no validation set, accuracy on imbalanced data, and a recommendation that contradicts its own printout.

      > [!success] Answer — **C**
      > The results fail on demonstrable defects — not on who or what typed them.

      > [!quote] What the brief is actually teaching
      > "Treat every claim in the notebook, and every claim in this brief, the same way: as something to be checked, not something to be believed."
      >
      > That cuts both ways. An AI-assisted pipeline is not automatically suspect, and it is not automatically sound. It is *checkable*, and checking it is your job.

  - id: q11
    title: "Q11 — Plan: customers on both sides of the split"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The same customers appear on both sides of the split, so part of the reported score reflects recognition rather than prediction."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Increase the test share from 20% to 40%, so the overlap matters proportionally less
        correct: false
        why: |
          A bigger test set contains *more* leaked customers, not fewer. The contamination rate is unchanged.
      - label: "B"
        text: |
          Split by customer, so that all of a customer's rows fall on one side only, and treat every score measured before that change as void
        correct: true
        why: |
          Fixes the mechanism *and* draws the right conclusion about the old numbers.
      - label: "C"
        text: |
          Sort the rows by customer before splitting, so that similar rows stay together
        correct: false
        why: |
          Sorting changes the order, not the split boundary. A customer straddling the cut is still split.
      - label: "D"
        text: |
          Add `customer_id` as a feature, so the models can account for the repetition themselves
        correct: false
        why: |
          This makes it far worse — you hand the model an identifier it can memorise directly.
    solution: |
      The only fix that addresses the **mechanism** is to change the unit of splitting from the row to the customer, so that no customer's rows appear on both sides.

      What separates B from a merely-correct answer is its second clause: *treat every score measured before that change as void*. The 98% figures were not slightly optimistic — they measured the wrong thing. They cannot be adjusted or discounted; they have to be discarded and re-measured.

      > [!success] Answer — **B**
      > Split by customer, and void every score measured under the old split.

      > [!warning] Note what D is doing
      > `customer_id` is the purest possible leak: a key that identifies the individual whose label you are predicting. It is the sort of option that sounds sophisticated ("let the model handle it") while being the worst choice on the list. Expect one of these per question in Part 2.

  - id: q12
    title: "Q12 — Plan: features that describe events after the loan"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "Two features describe events that occur after the loan is granted, and will be empty for every new applicant."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Keep them and fill them with zeros for new applicants, so the model can still run
        correct: false
        why: |
          The model would then score every applicant as a perfectly-behaved borrower. The output runs and is meaningless.
      - label: "B"
        text: |
          Keep them in training but hide them at prediction time
        correct: false
        why: |
          Train/serve skew: the model's learned weights lean on columns that are absent in production.
      - label: "C"
        text: |
          Remove them, rebuild the feature set from information available on submission day, and accept the much lower score that follows as the honest one
        correct: true
        why: |
          The only option that removes the leak and pre-commits to the consequence.
      - label: "D"
        text: |
          Keep them, since removing them causes the accuracy to collapse — which proves how informative they are
        correct: false
        why: |
          Inverts the evidence. The collapse *is* the proof of leakage, not a defence of it.
    solution: |
      Leaky features cannot be patched, hidden, or filled. They have to go, and the feature set has to be rebuilt from the decision-day question: *what did the bank know about this person on the morning they applied?*

      The clause that makes C the right answer is the last one — **accept the much lower score as the honest one**. Removing `avg_days_late` and `collections_flag` will drop accuracy from ~98% towards the mid-80s, and the recall on defaulters will be visibly poor. That is not a regression. That is the first true measurement anyone has taken.

      > [!success] Answer — **C**
      > Remove them, rebuild from submission-day information, and accept the lower honest score.

      > [!tip] D is the argument you will actually hear
      > "But accuracy collapses without them!" is a real thing teams say, and it is exactly backwards. A feature whose removal destroys performance is the *first* place to look for leakage, not the last thing you defend.

  - id: q13
    title: "Q13 — Plan: the imputation average was computed too early"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The average used to fill missing incomes was computed over the whole table, before the data was split."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Compute the filling value from the training rows only, then apply that same value to the test rows
        correct: true
        why: |
          The definition of fitting a transform on train and applying it to test — the correct order of operations.
      - label: "B"
        text: |
          Compute a separate average for each side of the split, so each is internally consistent
        correct: false
        why: |
          The test set must be treated as unseen. Deriving anything from it is the leak you are trying to remove.
      - label: "C"
        text: |
          Keep the current approach but document it clearly in the notebook
        correct: false
        why: |
          Documenting a bug does not fix it. The number stays wrong, now with a footnote.
      - label: "D"
        text: |
          Fill missing incomes with zero instead, which involves no averaging at all
        correct: false
        why: |
          Trades one defect for a worse one — see Q14 on impossible fill values.
    solution: |
      The offending lines run before the split:

      ```python
      df["income"] = df["income"].fillna(df["income"].mean())
      X = StandardScaler().fit_transform(X)
      # ... only afterwards ...
      X_train, X_test, ... = train_test_split(X, y, test_size=0.2, random_state=42)
      ```

      Any quantity learned from data — a mean, a median, a scaler's standard deviation, a category encoding — must be **computed on the training set and applied to the test set**. Otherwise the test set has influenced the model, and the score it produces is no longer an estimate of unseen performance.

      Option B is the trap for people who half-remember the rule: "each side internally consistent" sounds tidy and still touches the test data.

      > [!success] Answer — **A**
      > Fit on train, apply to test.

      > [!tip] Why pipelines exist
      > `sklearn.pipeline.Pipeline` enforces this automatically — every step's `fit` sees training folds only. Doing imputation and scaling by hand on a whole DataFrame, as here, is how this bug gets written in the first place. See [[scikit-learn-pipeline]].
      >
      > Fixing the *order* does not fix the *value*, though: the mean of a column that mixes monthly and annual incomes (Q5) still describes nobody. Q17 has to be resolved too, and a median is more robust than a mean regardless.

  - id: q14
    title: "Q14 — Plan: credit scores filled with zero"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "Missing credit scores were replaced with 0 — a value that cannot occur on a 300–850 scale."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Replace them with 850 instead, which at least is a value the scale allows
        correct: false
        why: |
          Swaps "impossibly bad" for "implausibly perfect" — now missing-score applicants look like the safest customers on the book.
      - label: "B"
        text: |
          Remove every applicant whose score is missing
        correct: false
        why: |
          Missingness is not random here, so dropping those rows systematically deletes self-employed borrowers.
      - label: "C"
        text: |
          Leave the zeros — after standardisation they become ordinary numbers like any other
        correct: false
        why: |
          Scaling maps 0 to a large negative outlier. The distortion is preserved, just relabelled.
      - label: "D"
        text: |
          Fill from a training-set statistic such as the median, and add an indicator column recording that the score was missing
        correct: true
        why: |
          Plausible value, computed on train only, **and** the fact of missingness preserved as its own feature.
    solution: |
      Three things are wrong with `df["credit_score"] = df["credit_score"].fillna(0)`:

      1. **0 is off-scale.** Scores run 300–850. Zero is not a low score; it is not a score.
      2. **It is computed on the full table**, before the split (Q13).
      3. **It destroys information.** Look at how missingness is generated:

      ```python
      income = np.nan if rng.random() < (0.30 if self_emp else 0.05) else round(income)
      ```

      Self-employed borrowers are missing income at **30%**, salaried at **5%**. The missingness is not random — it *is* a signal, correlated with the very trait that feeds risk. Overwriting it with any single value throws that signal away.

      Option D handles all three: a **median** is a plausible in-scale value robust to the tails, computed **from the training rows only**, with a **`credit_score_missing` indicator** so the model can still learn that "we did not have a score for this person" carries meaning.

      > [!success] Answer — **D**
      > Median from the training set, plus a missing-value indicator column.

      > [!tip] The general rule for [[missing-values]]
      > Impute a plausible value **and** flag that you imputed. The flag costs one column and preserves everything the gap was telling you.

  - id: q15
    title: "Q15 — Plan: a label with no observation window"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The label 'missed 3+ payments at some point' has no fixed observation window."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Keep the definition and weight older loans more heavily, since more is known about them
        correct: false
        why: |
          Weighting cannot repair a target that means different things for different rows.
      - label: "B"
        text: |
          Fix one horizon for every loan — for example, default within 24 months of origination — document it, and exclude loans not yet observed for that long
        correct: true
        why: |
          Makes the label comparable across rows and is honest about the cost: some loans become unusable for now.
      - label: "C"
        text: |
          Let each modelling experiment choose the window that produces the clearest signal
        correct: false
        why: |
          Choosing the definition that flatters your results is how you fool yourself, and then the regulator.
      - label: "D"
        text: |
          Add the number of months observed as an extra feature and let the model adjust for it
        correct: false
        why: |
          Patches a symptom in the features while the target itself stays incoherent.
    solution: |
      A supervised model can only be as coherent as its label. If "default" silently means *within 3 months* for some rows and *within 8* for others, then no amount of feature engineering can rescue it — the model is being taught to predict an inconsistent quantity.

      The fix is definitional, and it costs something: **fix the horizon, document it, and exclude loans not yet observed for the full window.** Loans originated four months ago simply cannot yet be labelled under a 24-month rule. Excluding them shrinks the dataset, and that is the correct trade.

      Option C deserves particular attention. "Let each experiment choose the window that produces the clearest signal" is a description of **choosing your definition to fit your desired result** — dressed in experimental language.

      > [!success] Answer — **B**
      > One fixed horizon, documented, with under-observed loans excluded.

  - id: q16
    title: "Q16 — Plan: rows per customer-month vs decisions per application"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The table holds one row per customer-month, while the bank makes one decision per application."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Keep the monthly rows but train only on customers with at least six months of history
        correct: false
        why: |
          Keeps the wrong unit *and* biases the sample toward longer-observed loans.
      - label: "B"
        text: |
          Average each customer's rows into a single row, including the behaviour columns
        correct: false
        why: |
          Right unit, but averaging the behaviour columns carries the post-outcome leak straight through.
      - label: "C"
        text: |
          Rebuild the table with one row per application, containing only what was known on submission day, and retrain both models on it
        correct: true
        why: |
          Aligns the row with the decision *and* restricts the columns to decision-day information.
      - label: "D"
        text: |
          Keep the monthly rows and predict for every month, then take each customer's worst prediction
        correct: false
        why: |
          Answers a monitoring question ("is this borrower deteriorating?") rather than the underwriting question that was asked.
      
    solution: |
      **A row should represent the decision you are making.** The bank makes one decision per application, so the table should hold one row per application.

      B is the near-miss, and worth understanding precisely. It gets the unit right — one row per customer — but "including the behaviour columns" quietly averages `avg_days_late` and `collections_flag` into the new row. The leak survives the restructuring in aggregated form. C is B done properly: right unit **and** right columns.

      > [!success] Answer — **C**
      > One row per application, containing only submission-day information, then retrain.

      > [!tip] Two questions that look alike
      > *Underwriting*: "should we lend to this applicant?" — one row per application, decision-day features only.
      > *Monitoring*: "is this existing borrower heading for trouble?" — monthly rows and behaviour columns are entirely legitimate, because the borrower already has a loan.
      >
      > The team built the data for the second and answered the first. D is that same confusion offered back as a plan.

  - id: q17
    title: "Q17 — Plan: one column, two units"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "One column carries two different units, depending on which source system produced the record."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Trace each record back to its source system, convert everything to a single documented unit, and record the definition in a data dictionary
        correct: true
        why: |
          Fixes it at the source, deterministically, and prevents the same bug from recurring.
      - label: "B"
        text: |
          Divide every value above 50,000 by twelve, which will catch nearly all the annual figures
        correct: false
        why: |
          A guess dressed as a rule. It mangles genuinely high monthly earners and misses low annual ones.
      - label: "C"
        text: |
          Keep both units — with enough data the model can learn to distinguish them
        correct: false
        why: |
          There is no column telling the model which unit a row uses. It cannot learn a distinction it cannot observe.
      - label: "D"
        text: |
          Drop the income column and rely on the credit score instead
        correct: false
        why: |
          Discards the input to debt-to-income, one of the most informative signals in lending.
    solution: |
      The distinction the exam is drawing: **B repairs the symptom by inference, A repairs the cause by lookup.**

      A threshold rule cannot separate the populations cleanly, because they overlap. A high monthly salary and a modest annual one land in the same numeric range, and any cutoff you pick misclassifies both directions. Worse, the rule is invisible afterwards — nobody reading the data six months later knows a fudge was applied.

      Going back to the **source system** is deterministic: each record's origin tells you its unit with certainty. Writing the result into a **data dictionary** is what stops the same bug arriving with next quarter's export.

      > [!success] Answer — **A**
      > Trace to source, convert to one documented unit, and record it in a data dictionary.

      > [!warning] Threshold hacks are the most seductive wrong answer
      > "Divide everything above 50,000 by twelve" will *look* like it worked — the histogram's second peak disappears. That is exactly why it is dangerous: a visibly fixed chart over a silently corrupted column.

  - id: q18
    title: "Q18 — Plan: more trees, more epochs"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The team asks to raise the number of trees and the number of training epochs in order to improve the results."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Approve it, and adopt whichever combination scores highest on the test set
        correct: false
        why: |
          Tuning on the test set burns it — the final number stops being an estimate of unseen performance.
      - label: "B"
        text: |
          Approve it for the neural network only, since that is the model under consideration
        correct: false
        why: |
          Pre-judges the model choice, which Q21–Q25 establish has not properly been made yet.
      - label: "C"
        text: |
          Approve it, and report the average result across all combinations tried
        correct: false
        why: |
          An average over arbitrary settings describes nothing you would ever deploy.
      - label: "D"
        text: |
          Decline for now: with leaky features and customers on both sides of the split, tuning would only optimise a broken measurement — fix the data first, then tune on a validation set
        correct: true
        why: |
          Gets the sequencing right and names both the reason to wait and the correct method for later.
      
    solution: |
      This question is about **order of work**. Tuning is an optimisation against a measurement — so if the measurement is broken, tuning makes things *worse*: you are now systematically selecting the settings that best exploit the leak.

      The correct sequence:

      1. Remove the leaky features and fix the split (Q11, Q12, Q16).
      2. Fix imputation, units, and the label (Q13, Q14, Q15, Q17).
      3. Carve out a **validation set** from the training data.
      4. *Then* tune, on validation — never on test.
      5. Touch the test set once, at the end.

      Option A is the classic error and worth stating plainly: every time you consult the test set to make a choice, you leak a little of it into the model. Do it across a hyperparameter grid and the final "test" score is an optimistic in-sample number wearing a disguise.

      > [!success] Answer — **D**
      > Decline for now — fix the data, then tune on a validation set.

  - id: q19
    title: "Q19 — Plan: one accuracy figure on imbalanced data"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The pipeline reports one accuracy figure per model, on data where about 14% of customers default."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Require the accuracy recomputed after rebalancing the test data to 50/50
        correct: false
        why: |
          The test set must reflect reality. Rebalancing it produces a number describing a population the bank never faces.
      - label: "B"
        text: |
          Require, per model, a confusion matrix with the share of real defaulters caught and the share of flagged customers who truly default, shown against the accuracy a do-nothing rule would achieve
        correct: true
        why: |
          Recall, precision, and the majority-class baseline together — exactly what accuracy alone conceals.
      - label: "C"
        text: |
          Require accuracy broken down by month of the loan
        correct: false
        why: |
          Slicing a misleading metric produces several misleading metrics.
      - label: "D"
        text: |
          Require both test accuracy and training accuracy, so the two can be compared
        correct: false
        why: |
          A useful overfitting check, but it does not tell you anything about performance on defaulters.
    solution: |
      With a ~14% default rate, the do-nothing rule "**approve everyone**" scores **~86% accuracy** while catching zero defaulters. Any accuracy figure has to be read against that baseline, and 98% starts to look a lot less impressive once you know 86% is free.

      Decode option B into its three components:

      | Phrase in the option | Metric | Question it answers |
      |---|---|---|
      | "share of real defaulters caught" | [[recall]] | Of everyone who defaulted, how many did we flag? |
      | "share of flagged customers who truly default" | [[precision]] | Of everyone we flagged, how many really defaulted? |
      | "accuracy a do-nothing rule would achieve" | majority-class baseline | Is the model beating *nothing at all*? |

      All three come out of a [[confusion-matrix]], which is why the option asks for one per model.

      > [!success] Answer — **B**
      > Confusion matrix per model: recall, precision, and the baseline alongside accuracy.

      > [!warning] Why A is wrong even though rebalancing is a real technique
      > Resampling to correct imbalance belongs to **training**, not evaluation. Rebalance the *test* set and you are measuring performance on an imaginary portfolio where 50% of borrowers default.

  - id: q20
    title: "Q20 — Plan: a model for the whole applicant population"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The bank wants a model that works for the whole applicant population, not only for profiles the old rules approved."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Generate synthetic rejected applicants and label them according to their risk scores
        correct: false
        why: |
          The labels would come from the model's own assumptions. You would be training on your beliefs and calling it evidence.
      - label: "B"
        text: |
          Lower the model's threshold until it begins approving riskier profiles
        correct: false
        why: |
          Moves the threshold within a model that has never seen those profiles — extrapolating blind, with real money.
      - label: "C"
        text: |
          Fund a controlled experiment: approve a small random share of borderline applications, track their outcomes, and treat the resulting losses as the cost of acquiring the data
        correct: true
        why: |
          The only plan that generates genuinely new observations, with the cost stated openly and bounded.
      - label: "D"
        text: |
          Retrain the model monthly, so the population corrects itself over time
        correct: false
        why: |
          Retraining on data the model itself filtered entrenches the bias — a feedback loop, not a correction.
    solution: |
      Q4 established that this defect **cannot be fixed in code**, because the information does not exist anywhere. The data about rejected applicants was never collected — the bank turned those people away and never learned what they would have done.

      So the only real option is to **go and collect it**: approve a small random share of borderline applications and observe what actually happens. This is a deliberately-funded experiment with a known price tag, and the framing in option C — *treat the resulting losses as the cost of acquiring the data* — is exactly the business judgement being tested. Some of those loans will default. That is not the experiment failing; that is what you are paying for.

      > [!success] Answer — **C**
      > Fund a controlled experiment on borderline applications and treat the losses as data-acquisition cost.

      > [!tip] Why D is the most dangerous option here
      > Retraining monthly on data the model itself filtered is a **feedback loop**. The model rejects a segment, so no outcomes are observed for it, so the next model rejects it even more confidently. The bias hardens with every retrain while all your metrics look stable.

  - id: q21
    title: "Q21 — Stating the criteria before the numbers"
    text: |
      The model decision:

      > "Before any numbers are presented, you must say what would make one model preferable to the other."

      Which statement of criteria is defensible?
    options:
      - label: "A"
        text: |
          Overall accuracy on the test set, since it summarises everything in a single number
        correct: false
        why: |
          A single number over imbalanced data hides everything that matters (Q19).
      - label: "B"
        text: |
          The share of defaulters caught at a threshold derived from the costs, the money lost per error type, explainability to the regulator, cost to run and maintain, and stability across customer segments
        correct: true
        why: |
          Ties the metric to the money, and includes the operating constraints the bank actually lives under.
      - label: "C"
        text: |
          Whichever model represents the more advanced technology, all else being equal
        correct: false
        why: |
          "Advanced" is not a criterion. It is the exact reasoning the notebook uses and Q22 condemns.
      - label: "D"
        text: |
          Whichever model the team is more confident maintaining in production
        correct: false
        why: |
          A real consideration, but one factor among several — and not the one the lending business turns on.
    solution: |
      Option B is the only one that connects the metric to the **decision** and to the **money**:

      - **Defaulters caught at a cost-derived threshold** — the business outcome, measured where the costs say to measure it, not at an arbitrary 0.5.
      - **Money lost per error type** — a missed defaulter and a wrongly-rejected applicant cost different amounts (Q24).
      - **Explainability to the regulator** — a hard constraint from the brief, not a preference (Q23).
      - **Cost to run and maintain** — a model nobody can operate is not a deployed model.
      - **Stability across customer segments** — a model that works overall but fails for the self-employed is a fairness and business problem.

      > [!success] Answer — **B**
      > Cost-derived threshold, money per error type, explainability, operating cost, and segment stability.

      > [!tip] Why the question insists on "before any numbers are presented"
      > Criteria chosen *after* seeing the results are not criteria — they are rationalisations. Fixing them in advance is what stops you from discovering that your standards happen to match whichever model you already liked.

  - id: q22
    title: "Q22 — A recommendation that contradicts its own printout"
    text: |
      The model decision:

      > "The pipeline's closing line recommends the neural network 'because deep learning is the more advanced technology' — although the Random Forest scored higher in the team's own printout."

      What is the significance of this?
    options:
      - label: "A"
        text: |
          It is a minor inconsistency in the write-up and should simply be corrected
        correct: false
        why: |
          Treats a failure of reasoning as a typo. The conclusion did not follow from the evidence at all.
      - label: "B"
        text: |
          It is acceptable: when scores are close, technology maturity is a reasonable tie-breaker
        correct: false
        why: |
          "More advanced" is not a tie-breaker — it is not a criterion, and it was never agreed as one.
      - label: "C"
        text: |
          The stated reason is not a criterion, and the recommendation contradicts the team's own evidence — a process that ignores its own numbers cannot be trusted on any other number either
        correct: true
        why: |
          Identifies both faults and draws the correct inference about everything else the team reported.
      - label: "D"
        text: |
          It is irrelevant, because both models scored above 95%
        correct: false
        why: |
          Those scores are products of leakage. A high number computed wrongly is not reassurance.
    solution: |
      Two distinct faults sit in that one closing line:

      1. **The stated reason is not a decision criterion.** "Deep learning is the more advanced technology" says nothing about defaults caught, money saved, or regulatory explainability.
      2. **The recommendation contradicts the evidence the team itself produced.** Their own printout ranks the Random Forest higher, and they recommended the other model anyway.

      The inference in option C is what elevates it. This is not one bad sentence at the end of a good analysis — it is **evidence about the process**. A team that overrides its own numbers when the numbers are inconvenient has told you how much weight to put on their other numbers.

      > [!success] Answer — **C**
      > Not a criterion, contradicts their own evidence, and that discredits the rest of the analysis.

      > [!quote] From the brief
      > The exam is built around judging work that "looks convincing". A confident closing recommendation is precisely where a reader stops checking — which is precisely why this one is planted there.

  - id: q23
    title: "Q23 — The regulator's explainability requirement"
    text: |
      The model decision:

      > "The regulator requires the bank to explain, in plain terms, why any particular application was rejected."

      How does this requirement bear on the choice between the two models?
    options:
      - label: "A"
        text: |
          It counts materially in favour of the tree-based model, which is far easier to explain and audit — though it can be answered for a neural network with additional explanation tooling, at a cost
        correct: true
        why: |
          Gives the requirement real weight without overstating it into a prohibition.
      - label: "B"
        text: |
          It rules out neural networks entirely, in banking and everywhere else
        correct: false
        why: |
          Overstated. Neural networks are deployed in regulated finance alongside explanation tooling.
      - label: "C"
        text: |
          It is a legal matter and has no bearing on which model is chosen
        correct: false
        why: |
          A hard legal constraint on the output is a first-order input to the choice of model.
      - label: "D"
        text: |
          It favours the neural network, since a more sophisticated model produces more convincing explanations
        correct: false
        why: |
          Sophistication and explainability pull in opposite directions. This inverts the trade-off.
    solution: |
      A [[random-forest|tree-based model]] supports per-decision reasons fairly directly — feature importances, decision paths, and rules a compliance officer can read. A neural network is a composition of dense layers whose weights carry no plain-English meaning, so the same requirement has to be met indirectly with SHAP, LIME, or surrogate models: extra tooling, extra infrastructure, extra ongoing cost, and explanations that are themselves approximations.

      The reason A beats B is calibration. B says "rules out entirely, everywhere" — too strong to be true. A says the requirement **counts materially in favour** of the forest while acknowledging the alternative exists at a price. That is a real assessment of a trade-off rather than a slogan.

      > [!success] Answer — **A**
      > Materially favours the tree-based model; achievable for a neural network at additional cost.

      > [!tip] Calibration is being marked here
      > Across Part 3, correct options tend to be the carefully-hedged ones and wrong options the absolute ones ("entirely", "no bearing", "always"). Reality has trade-offs; exam distractors have certainties.

  - id: q24
    title: "Q24 — Asymmetric costs and the threshold"
    text: |
      The model decision:

      > "A missed defaulter costs the bank roughly the outstanding principal; a wrongly rejected applicant costs the interest margin that customer would have generated."

      What follows from this asymmetry?
    options:
      - label: "A"
        text: |
          The threshold should be raised, so that as few customers as possible are rejected
        correct: false
        why: |
          Points the wrong way — it minimises the *cheap* error while letting the expensive one through.
      - label: "B"
        text: |
          The rejection threshold should be lowered to catch more defaulters, accepting more false rejections, and the two models should be compared at that threshold rather than at the default 0.5
        correct: true
        why: |
          Follows the cost asymmetry in the right direction and fixes the comparison point accordingly.
      - label: "C"
        text: |
          The threshold should stay at 0.5, which weighs the two errors neutrally
        correct: false
        why: |
          Neutral weighting is only correct if the errors cost the same. Here they differ by an order of magnitude.
      - label: "D"
        text: |
          The asymmetry affects the business plan but not the choice of model
        correct: false
        why: |
          It determines the threshold, and the threshold determines which model looks better.
    solution: |
      Put rough numbers on it. A missed defaulter costs the **outstanding principal** — on a 70,000-shekel loan, tens of thousands. A wrongly rejected applicant costs the **interest margin** on a loan that never happened — perhaps a few thousand over its life. The errors differ by roughly an order of magnitude.

      When one error is ~10× more expensive, the decision rule should trade many cheap errors for each expensive one avoided: **lower the threshold**, flag more applicants as risky, catch more defaulters, and accept that more good customers get turned away.

      The second clause of B is the part people miss. Once the threshold moves, **the model comparison has to move with it**. Comparing two models at 0.5 tells you about a threshold you are not going to use. Compare them where you will actually operate.

      ```python
      # what the pipeline does:
      (nn.predict(X_test) > 0.5).astype(int)   # 0.5 is a default, not a decision
      ```

      > [!success] Answer — **B**
      > Lower the threshold, accept more false rejections, and compare the models at that threshold.

      > [!tip] Where 0.5 comes from
      > Nowhere in particular. It is a library default that happens to be optimal only when the two errors cost the same and the classes are balanced — neither of which holds here. Pick the threshold from the cost matrix, not from the docstring.

  - id: q25
    title: "Q25 — The corrected evaluation arrives"
    text: |
      The model decision:

      > "The corrected evaluation arrives: Random Forest — 36% of defaulters caught, easy to explain, cheap to run. Neural Network — 37% caught, requires additional explanation tooling and more infrastructure."

      What is the defensible call?
    options:
      - label: "A"
        text: |
          The Neural Network: 37% is higher than 36%, and higher is better
        correct: false
        why: |
          Reduces a multi-criteria decision to one number, and a number well inside noise at that.
      - label: "B"
        text: |
          The Random Forest: a one-point difference is not a real advantage, and every other criterion points the same way
        correct: true
        why: |
          Applies the Q21 criteria as agreed: the metric ties, so explainability and cost decide.
      - label: "C"
        text: |
          The Neural Network: it will improve as more data accumulates
        correct: false
        why: |
          A promise about the future, not evidence. Decide on measured performance.
      - label: "D"
        text: |
          Neither: both are below 50%, so no model should be deployed
        correct: false
        why: |
          50% is an arbitrary bar. The real test is whether the model beats current underwriting on cost — 36% recall may be a large improvement.
    solution: |
      This question closes the loop on Q21: you fixed your criteria before the numbers arrived, and now you apply them.

      **On the headline metric, it is a tie.** One percentage point of [[recall|recall]] is well within the variation you would see from a different random seed or split. Treating 37% as beating 36% is reading noise as signal.

      **So the remaining criteria decide**, and they all point one way:

      | Criterion | Random Forest | Neural Network |
      |---|---|---|
      | Defaulters caught | 36% | 37% (tie within noise) |
      | Explainability to regulator | direct | needs extra tooling |
      | Cost to run and maintain | cheap | more infrastructure |

      Option D deserves a moment because it sounds appropriately cautious. But **50% is not a threshold anyone chose** — it is a round number. The real question is whether catching 36% of defaulters beats the bank's current rules on cost, and on a book where every default writes off principal, it very plausibly does.

      > [!success] Answer — **B**
      > The Random Forest: the recall difference is noise, and every other criterion favours it.

      > [!quote] The whole exam in one question
      > The 36%/37% figures are *deliberately* almost identical, because the paper is checking whether you will decide on a one-point difference or on the criteria you committed to in Q21. Everything before this question was setup for it.
---

> [!info] What this paper is
> The lecturer's **sample exam** — 25 multiple-choice questions, every one of them about a single deliberately-flawed notebook, `loan_pipeline.ipynb`. The exam is expected to follow this format exactly: the code is released in advance, and you are expected to know it line by line.
>
> - 📄 [The problem brief + 15 preparation questions](/papers/machine-learning/loan-pipeline-brief-and-prep-questions.pdf)
> - 📄 [The sample exam, unanswered](/papers/machine-learning/sample-exam-25-questions.pdf)
> - 📓 [`loan_pipeline.ipynb`](/papers/machine-learning/loan_pipeline.ipynb) — run it in Colab before revising

> [!warning] No official answer key was supplied
> The sample paper ends by telling you to "check your answers against the version of this file that includes the answer key" — that version was not distributed. **Every answer below is derived**, grounded line-by-line in the notebook and the brief rather than copied from a key. The reasoning is shown in full precisely so you can check it rather than trust it, which is the habit the exam is built to reward.

## How the paper is structured

| Part | Questions | What it tests | The move it wants |
|---|---|---|---|
| **1 — Is the concern valid?** | 1–10 | How closely you read the code | Judge a claim against the source, including claims that are *true but trivial* and claims that are *right for the wrong reason* |
| **2 — Approve the right plan** | 11–20 | Whether plausible-sounding plans can mislead you | Pick the fix that addresses the cause, not the symptom — and accept the cost it carries |
| **3 — The model decision** | 21–25 | Whether you set criteria before reading numbers | Commit to criteria first, then apply them even when the headline metric ties |

Count your mistakes **by part**, not in total — each part fails in a different way, and knowing which part you lose marks in tells you what to revise.

## The recurring answer shape

Across all three parts the correct option is almost always the one that is **specific, calibrated, and willing to name a cost**:

- It points at a **named column, line, or number** rather than a general principle.
- It is **hedged where reality is hedged** — "counts materially in favour of", "not valid *as a priority*", "*for now*". Absolute options ("always", "entirely", "rules out", "no bearing") are almost always wrong.
- It **accepts a downside**: a lower score, a smaller dataset, real money spent, loans excluded. Wrong options tend to promise a fix with no cost attached.

The distractors are correspondingly patterned. Expect: a true statement attached to a wrong conclusion (Q7, Q10), a fix that treats the symptom (Q17 B), a fix that sounds sophisticated but makes things worse (Q11 D, Q20 D), and one option that quietly carries the leak through the fix (Q16 B).

## Before you attempt it

Read the [[loan-pipeline-code-walkthrough|Loan Pipeline — Code Walkthrough & Defect Catalogue]] first if you have not already. Fourteen of these twenty-five questions turn on something you can only see by reading `load_data` closely — which columns are generated *from* the label, how many rows each customer gets, and where the missing values come from.
