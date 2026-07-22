---
title: "Mock Paper A — The Data and How It Was Collected"
type: past-paper
status: worked-solution
exam: "Mock Paper A (practice)"
course: "Machine Learning — Economics Track"
semester: 2
year: 2
tags:
  - machine-learning
  - past-paper
  - mock-exam
  - loan-pipeline
  - data-leakage
  - selection-bias
aliases:
  - Mock A Machine Learning
  - ML Mock Paper A
subject: machine-learning
in_scope: true
questions:
  - id: q1
    title: "Q1 — The column that describes the warehouse, not the applicant"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The `month` column ends up in the feature matrix, and it describes our filing system rather than the person applying."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — later month values occur only for customers who eventually defaulted, so the column leaks the label directly
        correct: false
        why: |
          Row count comes from `rng.integers(3, 9)`, drawn independently of `default`. Long histories are no more likely among defaulters.
      - label: "B"
        text: |
          Not valid — the column records the calendar month of application, which captures seasonal demand and is known on submission day
        correct: false
        why: |
          It is not a calendar month. It runs 1 upwards inside each customer's own history, so it carries no seasonal information at all.
      - label: "C"
        text: |
          Valid — `drop` removes only `default` and `customer_id`, so a snapshot counter running from 1 to at most 8 survives as a predictor
        correct: true
        why: |
          The drop list is exactly `["default", "customer_id"]`, so `month` is standardised and handed to both models as if it were a customer attribute.
      - label: "D"
        text: |
          Not valid — the value is fixed within each customer, so standardising it produces a constant that no model can use
        correct: false
        why: |
          `month` is one of only two columns that *vary* within a customer — the other being the jittered `avg_days_late`.
    solution: |
      The cleaning cell decides which columns become features, and it decides by subtraction:

      ```python
      X = df.drop(columns=["default", "customer_id"])
      ```

      Two columns go. Seven stay — including `month`, which is produced here:

      ```python
      for month in range(1, int(rng.integers(3, 9)) + 1):
          rows.append({... "month": month, ...})
      ```

      That is a **snapshot counter**: the first row of a customer's history is month 1, the last is somewhere between 3 and 8. It is a fact about how many times the warehouse photographed this loan, not a fact about the borrower. A new applicant on submission day has no month at all — or, if you insisted, has month 1 and nothing else, which is a value the model has only ever seen alongside a full history.

      The tempting wrong answer is **A**. It correctly senses that `month` is entangled with the outcome, but the entanglement it names does not exist: the number of rows per customer is drawn from `rng.integers(3, 9)` with no reference to `default`. History length here is noise, not signal — which is a different defect from leakage and needs a different fix.

      > [!success] Answer — **C**
      > `month` survives the drop and enters the model as a feature, but it is a warehouse snapshot index, not a property of the applicant.

      > [!tip] Two questions, not one
      > For every surviving column ask both: *does this exist on submission day?* **and** *is this a fact about the applicant or about our systems?* `month` fails the second test even before it fails the first.
    related_terms:
      - feature-selection
      - data-leakage

  - id: q2
    title: "Q2 — The histogram nobody read"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The team plotted an income histogram in the very first cell, then moved straight on to cleaning. That plot was already telling them something."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — roughly 30% of rows store income annually and the rest monthly, so an 80-bin plot shows two separate humps about twelve times apart
        correct: true
        why: |
          `income = income_m * 12 if rng.random() < 0.3 else income_m` mixes two populations into one column, and 80 bins is more than enough to resolve them.
      - label: "B"
        text: |
          Not valid — income is drawn from a lognormal, so a long right tail is exactly what the plot should show and nothing else follows
        correct: false
        why: |
          The lognormal draw is real, but a lognormal has one mode. What the plot shows is a mixture with two, which no single lognormal produces.
      - label: "C"
        text: |
          Valid — but the warning in the plot is the missing values, which plotly silently omits from the bars without saying so
        correct: false
        why: |
          True that missing rows are dropped from the plot, but that is the smaller finding; the two-population shape is the one that invalidates the column.
      - label: "D"
        text: |
          Not valid — the plot is drawn before the cleaning step, so whatever shape it has is overwritten by the imputation that follows
        correct: false
        why: |
          Imputation fills gaps; it does not convert annual figures to monthly. The mixture survives cleaning completely untouched.
    solution: |
      The plot and the defect are three lines apart:

      ```python
      income = income_m * 12 if rng.random() < 0.3 else income_m  # some systems store it annually
      ...
      px.histogram(df, x="income", nbins=80, title="Income distribution").show()
      ```

      Monthly incomes cluster around `exp(9.1)`, roughly 9,000 shekels. The 30% that were multiplied by twelve cluster an order of magnitude higher. Plotted together at 80 bins, that is not a skewed distribution — it is **two distributions in one column**, and it is visible at a glance.

      **B** is the distractor worth understanding. It is true that `np.exp(rng.normal(9.1, 0.45))` is a lognormal draw, and true that lognormals are right-skewed. But a lognormal is **unimodal**. If the plot has two humps, the lognormal story cannot be the whole story — and reasoning that stops at "skew is expected" is exactly how the team walked past it.

      > [!success] Answer — **A**
      > The histogram shows a two-population mixture caused by mixed units, and the team drew no conclusion from it.

      > [!warning] Plotting is not looking
      > The notebook does contain [[exploratory-data-analysis|exploratory work]] — one plot, rendered and ignored. An EDA step you do not act on is decoration. Ask of every chart: *what would I have done differently if it had come out another way?*
    related_terms:
      - histograms
      - exploratory-data-analysis
      - distributions

  - id: q3
    title: "Q3 — Who is missing an income figure"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Income is not missing evenly across applicants, and filling every gap with one average treats a specific group as if they were typical."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — a 30% missing rate is high but the gaps arrive at random, so a single average is an unbiased choice for them
        correct: false
        why: |
          The gaps do not arrive at random. The probability of a gap is a function of `self_emp`, which the risk equation also uses.
      - label: "B"
        text: |
          Valid — but the affected group is applicants with low credit scores, whose income the bank finds hardest to verify from documents
        correct: false
        why: |
          Nothing links missing income to `score` in the generator. The conditioning variable is employment status, not creditworthiness.
      - label: "C"
        text: |
          Not valid — the self-employed flag stays in the feature matrix, so the model can recover the pattern from that column by itself
        correct: false
        why: |
          The flag says who is self-employed, not who was imputed. After `fillna` the two are indistinguishable, so the interaction is gone.
      - label: "D"
        text: |
          Valid — self-employed applicants lose income six times as often as salaried ones, and mean-filling hands them the average of a mixed-unit column
        correct: true
        why: |
          `0.30 if self_emp else 0.05` is a six-fold gap, and `self_emp` raises default risk in the generator, so the missingness itself is a risk signal.
    solution: |
      The mechanism is stated in one line, and it is not random:

      ```python
      income = np.nan if rng.random() < (0.30 if self_emp else 0.05) else round(income)
      ```

      Self-employed applicants — about a quarter of the book, since `self_emp = rng.random() < 0.25` — go missing at 30%. Salaried applicants go missing at 5%. And `self_emp` is not a neutral label: the risk equation carries `- 0.5 * (not self_emp)`, meaning the self-employed are the higher-risk group. **The fact that a value is absent is itself a risk signal**, and the cleaning step destroys it:

      ```python
      df["income"] = df["income"].fillna(df["income"].mean())
      ```

      Worse, the value being written in is the mean of a column that is 30% annual and 70% monthly — a number that corresponds to no real income at all, in either unit.

      **C** is the distractor that catches careful readers. It is true that `self_employed` survives into `X`. But that column identifies a *group*, not the *rows that were imputed*. A self-employed applicant who supplied an income and one who did not become identical after the fill, and the model has no way to tell them apart.

      > [!success] Answer — **D**
      > Missingness is conditioned on employment status at 30% versus 5%, and employment status is itself a risk factor.

      > [!tip] The name for this
      > Data that is [[missing-values|missing not at random]] carries information in the pattern of absence. The general fix is to record the pattern before you fill it — see Q13.
    related_terms:
      - missing-values
      - correlation-vs-causation

  - id: q4
    title: "Q4 — 'None of this data is real'"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "This file was written by a generator function in the same notebook that reads it. It is invented data, so none of our findings mean anything."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — conclusions drawn from invented records cannot transfer to real applicants, so the review should stop here and wait for a genuine extract
        correct: false
        why: |
          The review is of the *pipeline*, and every defect in it would survive unchanged if a real extract were swapped in tomorrow.
      - label: "B"
        text: |
          Not valid — the generator stands in for the warehouse, and every defect it plants is one a real bank extract would carry too
        correct: true
        why: |
          Mixed units, grouped rows, informative missingness and post-outcome columns are all ordinary properties of real warehouse extracts.
      - label: "C"
        text: |
          Valid — the risk equation is written out in plain sight, so the models are only recovering a formula somebody typed above them
        correct: false
        why: |
          The models are not recovering the risk equation; they are reading `avg_days_late` and `collections_flag`, which are downstream of the label.
      - label: "D"
        text: |
          Not valid — synthetic records are the better choice here anyway, since they avoid the privacy constraints real lending records carry
        correct: false
        why: |
          Privacy is a genuine advantage of synthetic data, but it is not an answer to the objection raised, which was about validity.
    solution: |
      This is a **true-but-beside-the-point** concern, and the exam plants at least one every time.

      Yes: `df = load_data()` then `df.to_csv("loans.csv", index=False)`. The file is manufactured. But look at *what* was manufactured:

      ```python
      income = income_m * 12 if rng.random() < 0.3 else income_m   # two source systems
      income = np.nan if rng.random() < (0.30 if self_emp else 0.05) else round(income)
      for month in range(1, int(rng.integers(3, 9)) + 1):          # monthly snapshots
      days_late = rng.uniform(2, 35) if default else rng.exponential(2.5)
      ```

      Mixed units from multiple source systems. Missingness correlated with who the applicant is. One row per customer-month rather than per decision. Columns populated after the outcome was known. **These are not exotic simulation artefacts — they are the four most common things wrong with a real warehouse extract.** The generator is a faithful stand-in, and a real file would fail the same review for the same reasons.

      **C** is the sharper distractor, and it is half right: the generative process really is visible, which would be a fatal objection if the question were *"how good is this model?"* But the models are not learning the risk equation. They are learning the leak — and that is a finding that transfers.

      > [!success] Answer — **B**
      > The concern is factually true and materially irrelevant; the defects it dismisses are the ones real extracts have.

      > [!note] Why the exam does this
      > Part 1 is a test of judgement, not of suspicion. Some concerns are correct statements attached to the wrong conclusion, and marking every plausible worry "valid" will cost you marks.
    related_terms:
      - exploratory-data-analysis

  - id: q5
    title: "Q5 — What the 14% default rate actually measures"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The brief says about 14% of loans default. That is not the same thing as 14% of applicants being risky."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — the warehouse holds approved loans only, so 14% is the default rate among applicants who already passed the underwriting rules
        correct: true
        why: |
          The brief states the warehouse stores approved loans only, so the figure is conditional on approval and understates the applicant pool's risk.
      - label: "B"
        text: |
          Not valid — 14% is computed over 6,557 rows, which is a large enough sample for the figure to be treated as settled
        correct: false
        why: |
          Sample size fixes noise, not bias. A larger extract of the same approved-only population converges on the same wrong number.
      - label: "C"
        text: |
          Valid — but the distortion comes from counting rows, so customers with eight snapshots weigh more heavily than those with three
        correct: false
        why: |
          Row counts come from `rng.integers(3, 9)` independently of `default`, so this adds noise to the estimate rather than shifting it.
      - label: "D"
        text: |
          Not valid — the underwriting rules are fixed and documented, so whatever effect they have applies evenly and cancels out
        correct: false
        why: |
          A fixed rule is exactly what does *not* cancel: it removes the same high-risk profiles every time, systematically and in one direction.
    solution: |
      The number is real; the population it describes is not the one the model will face.

      Every row in `loans.csv` is a loan that was **made**. Someone applied, a human underwriter checked the minimum credit score, the maximum debt-to-income and the employment history, and said yes. The applicants who said no to — the ones the bank most wants a model's opinion about — left no trace. So the honest reading of 14% is:

      > 14% of the people our current rules already judged safe went on to default.

      The default rate across *all* applicants is unmeasured and is necessarily higher, because the rules were filtering in roughly the right direction. Deploying a model trained on this file and describing its performance as applying to "applicants" quietly swaps one population for another.

      **C** deserves credit for spotting that rows are not customers — that is a genuine structural fact about this file. But the direction matters. Because `int(rng.integers(3, 9))` is drawn without reference to `default`, customers with long histories are no more or less likely to default than customers with short ones. Row-counting makes the estimate *noisier*; it does not make it *biased*. Selection on approval does both.

      > [!success] Answer — **A**
      > 14% is a rate conditional on approval, so it describes past underwriting rather than the applicant population.

      > [!warning] Bias and noise are different problems
      > Noise shrinks when you collect more of the same data. Bias does not — it is baked into *how* the data was collected, and only a change in collection can remove it.
    related_terms:
      - accuracy
      - summary-statistics

  - id: q6
    title: "Q6 — A label stamped on every snapshot"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The `default` flag is written identically onto every one of a customer's rows, including the earliest one."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — a repeated flag is the correct shape for a yes-or-no outcome, and repetition carries no information either way
        correct: false
        why: |
          The shape is not the issue. The issue is that a month-1 snapshot is labelled with something that had not happened yet at month 1.
      - label: "B"
        text: |
          Valid — but the only consequence is an inflated row count, which makes the dataset look larger than the 1,200 customers behind it
        correct: false
        why: |
          Inflation is real and is Q15's topic, but the sharper problem here is that the label is stamped backwards onto earlier snapshots.
      - label: "C"
        text: |
          Not valid — `month` records when each snapshot was taken, so the timing of the default can be recovered as the customer's last month
        correct: false
        why: |
          The flag is already 1 at month 1, so the last month tells you when observation stopped, not when the default occurred.
      - label: "D"
        text: |
          Valid — the flag is back-dated onto snapshots taken before the outcome existed, and it carries no date of its own to correct that
        correct: true
        why: |
          `default` is computed once per customer and written into every row, so a month-1 row asserts an outcome that was still in the future.
    solution: |
      The label is decided once, before any row is written:

      ```python
      default = int(rng.random() < 1 / (1 + np.exp(-risk)))
      ...
      for month in range(1, int(rng.integers(3, 9)) + 1):
          rows.append({..., "month": month, "default": default})
      ```

      So a customer who defaulted in month 7 has `default = 1` on their month-1 row, their month-2 row, and every row after. The table asserts, of a snapshot taken six months before anything went wrong, that this loan is a default. **The label has been back-dated onto the whole history.**

      This matters for two separate reasons. First, it is what makes the row-level split so damaging: an early snapshot in training and a late snapshot in test carry the same answer. Second, and more fundamental for the business question, it means the file cannot tell you *when* default occurred — which is precisely what you would need to define a fixed observation window.

      **C** is the trap, and it is a reasonable-sounding reconstruction: if the flag appeared partway through a history you really could read the timing off `month`. It does not. It is present from row one.

      > [!success] Answer — **D**
      > `default` is computed once per customer and back-written onto every snapshot, including those predating the event.

      > [!tip] The as-of discipline
      > Every row of a modelling table should be able to answer: *what did we know, and when did we know it?* A label with no date, repeated across a history, cannot answer either half.
    related_terms:
      - data-leakage
      - supervised-learning

  - id: q7
    title: "Q7 — 'We dropped the customer identifier'"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Removing `customer_id` from the feature matrix means the repeated-customer structure has been dealt with."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — the identifier should have been kept in the frame and handed to a grouped splitter as an ordinary predictive feature
        correct: false
        why: |
          It should be kept for grouping, but not as a feature. The concern claims dropping *solves* the problem, which is what is at issue.
      - label: "B"
        text: |
          Not valid — dropping the column stops the model reading the id, but the duplicate rows remain and the split still scatters customers
        correct: true
        why: |
          `train_test_split` is called on rows. Removing a column changes what the model sees, not how many rows each customer contributes.
      - label: "C"
        text: |
          Valid — an integer identifier would otherwise be standardised and read by the forest as a meaningful ordered quantity
        correct: false
        why: |
          A true statement, and a good reason to drop the column — but it is not a reason the grouped structure has been handled.
      - label: "D"
        text: |
          Not valid — the identifier is an arbitrary counter, so retaining or dropping it makes no measurable difference to either model
        correct: false
        why: |
          Retaining it as a feature would matter, since the trees would happily split on it. The reasoning here is wrong even though the verdict is not.
    solution: |
      Two different jobs are being confused. Dropping `customer_id` is correct — it is an identifier, not an attribute — but it does nothing about grouping:

      ```python
      X = df.drop(columns=["default", "customer_id"])
      ...
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      ```

      `train_test_split` shuffles **rows**. Customer 412 contributed, say, six of them; after the split roughly five land in training and one in test, and all six carry the same `default`, the same `income`, the same `credit_score`, the same `loan_amount`. The test row is a near-duplicate of rows the model has already memorised. Removing the id column made that invisible rather than untrue — and in fact made it *harder* to fix, because the column you would need for a grouped split is no longer to hand.

      **D** reaches the same verdict as the correct answer by reasoning that is wrong. An arbitrary integer counter left in the feature matrix is not harmless: a forest will split on it, memorise ranges of ids, and score beautifully on rows belonging to customers it has already seen. Getting to "not valid" is not enough; the exam marks the reason.

      > [!success] Answer — **B**
      > Dropping the column hides the grouped structure rather than handling it — the duplicated rows and the row-level split are both untouched.

      > [!tip] Identifier columns have two uses
      > Never a feature; often essential as a **grouping key**. Drop it from `X`, but keep it in the frame so `GroupShuffleSplit` or `StratifiedGroupKFold` can use it.
    related_terms:
      - train-test-split
      - cross-validation

  - id: q8
    title: "Q8 — Where did `income` come from?"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Nobody in this room can name the system that `income` was extracted from, and the notebook does not record it anywhere."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — the column name and the magnitude of its values make the intended meaning clear enough to proceed with modelling
        correct: false
        why: |
          Magnitude is exactly what is ambiguous: a value of 40,000 is a plausible monthly income and a plausible annual one.
      - label: "B"
        text: |
          Valid — but the remedy is straightforward, since renaming the column to state its unit removes the ambiguity for future readers
        correct: false
        why: |
          Renaming presumes you know the unit. Here different rows have different units, so no single name can be accurate.
      - label: "C"
        text: |
          Valid — the code concedes more than one system feeds this column, and without a dictionary the unit of a row is unrecoverable
        correct: true
        why: |
          The comment "some systems store it annually" admits multiple sources, and nothing in the file records which source produced which row.
      - label: "D"
        text: |
          Not valid — the histogram already separates the two populations visually, so provenance adds nothing that the plot has not already delivered
        correct: false
        why: |
          The plot shows that two populations exist; it cannot tell you which one any individual applicant belongs to, which is what scoring needs.
    solution: |
      The notebook itself supplies the evidence, in a comment:

      ```python
      income = income_m * 12 if rng.random() < 0.3 else income_m  # some systems store it annually
      ```

      **"Some systems"** — plural. That single word admits that `income` is a union of feeds, and once you know that, the column has no single definition. What it does not admit, anywhere, is *which* row came from *which* feed. That information exists in the source systems and was discarded on the way into the warehouse.

      **D** is the distractor to think through carefully, because it is right about the aggregate and wrong about the instance. The histogram genuinely establishes that the column contains two populations roughly twelve times apart. But scoring is per applicant. Confronted with a single row reading 42,000, the plot cannot tell you whether you are looking at a well-paid professional's monthly salary or a modest annual one — and near the overlap between the two humps, no rule can. Only provenance can.

      > [!success] Answer — **C**
      > Multiple source systems feed one column and nothing records which fed which row, so the unit of an individual record cannot be recovered from the file.

      > [!warning] A column is not defined by its name
      > A column is defined by its **source system, its unit, its as-of rule, and its null semantics**. If those four are not written down somewhere a stranger can read, the column is not ready to model — see Q11.
    related_terms:
      - dataframe
      - pandas

  - id: q9
    title: "Q9 — Values that look safe"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "`credit_score` and `loan_amount` are fine on decision day, but we have not checked that the stored values are the ones that existed then."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — the file holds monthly snapshots with these fields constant across them, so they are as-of some extract date the file never states
        correct: true
        why: |
          Nothing in `loans.csv` records an as-of date, so a value repeated across a history is equally consistent with capture-at-application or a later overwrite.
      - label: "B"
        text: |
          Not valid — bureau scores are refreshed every month, so the stored figure is the current one and is therefore the correct one to use
        correct: false
        why: |
          A refreshed score is the *wrong* one: scoring a new applicant requires the value known at application, not one updated afterwards.
      - label: "C"
        text: |
          Valid — but only `credit_score` is exposed, since a loan amount is fixed at origination and cannot subsequently be revised
        correct: false
        why: |
          Loan amounts are restructured, topped up and written down in practice, and the stored figure is granted rather than requested.
      - label: "D"
        text: |
          Not valid — both fields are constant within each customer, which is what you would see if they had been captured once at application
        correct: false
        why: |
          Constancy is equally consistent with a single current value copied onto every historical row, which is the more common warehouse behaviour.
    solution: |
      This is the subtler half of the decision-day test. Everyone catches `avg_days_late` and `collections_flag`, because those columns obviously describe the future. The harder question is whether the columns that *could* have existed on submission day actually hold their submission-day values.

      Look at what the file gives you. `credit_score` and `loan_amount` are written once per customer and repeated across every snapshot:

      ```python
      rows.append({"customer_id": cid, "month": month, "income": income,
                   "credit_score": score, "loan_amount": round(loan), ...})
      ```

      There is no origination date, no extract date, no as-of column anywhere in the nine. So the file is silent on the one thing you need to know.

      **D** is the trap, and it is a genuine piece of reasoning — constancy *is* what capture-at-application looks like. Unfortunately it is also what a **latest-value overwrite** looks like: a warehouse that stores today's bureau score against every historical row produces exactly the same pattern. The two hypotheses are observationally identical in this file, which is why the honest answer is that you cannot tell, not that it is fine. And in the second case the score has been contaminated by everything that happened after the loan was made.

      > [!success] Answer — **A**
      > The fields are as-of an unstated date, and the file contains nothing that distinguishes application-day capture from a later overwrite.

      > [!tip] Point-in-time correctness
      > The requirement has a name: a training row must contain only values as they stood at the moment of the decision. It is the most common source of leakage that survives an obvious-columns audit — see Q16.
    related_terms:
      - data-leakage

  - id: q10
    title: "Q10 — One plot and nothing else"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The whole exploratory stage of this notebook is a single histogram. We went straight from loading the file to standardising it."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — with only nine columns to consider, summary statistics would restate what the histogram and the column names already convey
        correct: false
        why: |
          Nine columns is few enough that a full check costs minutes, and several defects here are invisible in the histogram.
      - label: "B"
        text: |
          Valid — but the missing piece is a correlation matrix, which would have ranked the features by how strongly each predicts default
        correct: false
        why: |
          A correlation matrix would indeed have exposed the leak, but ranking features by strength is the wrong purpose to run it for.
      - label: "C"
        text: |
          Valid — no missing-value counts, no rows-per-customer check and no cross-tabulation of the outcome, each of which is a one-line query
        correct: true
        why: |
          Those three checks expose the informative missingness, the grouped structure and the target leakage respectively, in about three lines.
      - label: "D"
        text: |
          Not valid — exploration belongs before modelling and the team did place their plot there, so the ordering of the notebook is sound
        correct: false
        why: |
          Correct placement of an inadequate check is not a defence. The question is what the check covered, not where it sat.
    solution: |
      Three lines would have caught three of the notebook's worst defects:

      ```python
      df.isna().sum()                                 # → income and credit_score gaps, unevenly distributed
      df.groupby("customer_id").size().describe()     # → 3 to 8 rows each, 1,200 customers not 6,557
      df.groupby("default")[["avg_days_late", "collections_flag"]].mean()   # → the leak, in plain sight
      ```

      That last one is the killer. Group by the label and the two post-outcome columns separate almost completely — defaulters averaging somewhere around eighteen days late against a couple of days for everyone else, and collections flagged for roughly two thirds of defaulters against one in twenty otherwise. No modelling required. The 98% is explained before a single tree is grown.

      **B** is the most interesting wrong answer because the tool it names would have worked. A correlation matrix really would have shown `avg_days_late` and `collections_flag` towering over everything else. But the reason given — *ranking the features by how strongly each predicts default* — is the reason that gets you into trouble. Read that way, an implausibly strong correlation looks like good news. Read as a **leakage check**, the same number is an alarm. Same table, opposite conclusions, depending on what you thought you were doing.

      > [!success] Answer — **C**
      > Missing-value counts, rows per customer and a cross-tabulation against the label would each have exposed a separate defect in one line.

      > [!warning] Suspiciously good is bad
      > A feature that predicts the outcome far better than any domain expert expects is a leakage suspect first and a discovery second. Investigate it before you celebrate it.
    related_terms:
      - exploratory-data-analysis
      - groupby
      - summary-statistics

  - id: q11
    title: "Q11 — Plan: no column has a documented definition"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "For not one of the nine columns can we state its source system, its unit, and the date its value refers to."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Sit the engineer who built the extract down with the team, walk through the file together, and record the answers as notebook comments
        correct: false
        why: |
          The right conversation, recorded in the wrong place. Comments in a notebook are not a governed artefact and go stale immediately.
      - label: "B"
        text: |
          Write a data dictionary giving each column its source, unit and as-of rule, and model no column whose row cannot be completed
        correct: true
        why: |
          It makes the definition a precondition rather than a nice-to-have, and accepts the cost of losing columns that fail.
      - label: "C"
        text: |
          Infer each definition from the data itself, since the distributions already separate the two income populations cleanly enough to work with
        correct: false
        why: |
          Distributions describe aggregates. They cannot recover the source of an individual row, which is what Q8 established.
      - label: "D"
        text: |
          Defer the dictionary until after a pilot, so the documentation effort is spent only on the columns that prove to matter
        correct: false
        why: |
          The pilot's results are what the dictionary is needed to interpret, so this orders the work exactly backwards.
    solution: |
      Every other question on this paper is downstream of this one. You cannot judge whether `income` is usable without knowing what it means; you cannot define an observation window without an as-of rule; you cannot apply the decision-day test to `credit_score` without knowing when it was captured.

      What makes **B** the right plan is not that it produces a document. It is the second clause: **refuse to model any column whose row cannot be completed**. That is a real cost, willingly taken — on this file it would likely knock out `income` until provenance is traced, and possibly `credit_score` too. A dictionary that records "unit: unknown" and waves the column through is worse than no dictionary, because it launders the gap into a governed artefact.

      **A** is the most tempting distractor and it is genuinely half of the work — the engineer is where the knowledge lives, and that conversation has to happen. It fails on where the answers land. Notebook comments are not versioned against the extract, are not reviewable by anyone outside the team, and are not consulted by the next person to pull the same table.

      > [!success] Answer — **B**
      > Document source, unit and as-of rule per column, and treat an incomplete row as a bar to modelling that column.

      > [!tip] The four fields
      > **Source system · unit · as-of rule · null semantics.** If you can fill those in for every column, most of this paper's defects become visible before you write any modelling code at all.
    related_terms:
      - dataframe

  - id: q12
    title: "Q12 — Plan: the extract carries no dates at all"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "There is no origination date, no observation date and no extract date anywhere in the nine columns."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Use each customer's maximum `month` value as a proxy for how recent their record is, then order the file by that
        correct: false
        why: |
          Maximum month measures history length, not recency. Two customers ordered this way may come from entirely different years.
      - label: "B"
        text: |
          Proceed for now without dates, since the relative ranking of applicants by risk is unaffected by when each was observed
        correct: false
        why: |
          Ranking is affected: without dates you cannot tell whether a customer's outcome window was long enough to have observed a default.
      - label: "C"
        text: |
          Add a load timestamp to all future extracts and carry on with this one, treating it as undated but adequate for a first pass
        correct: false
        why: |
          A load timestamp says when the file was pulled, not when each loan started, so it cannot anchor an observation window either.
      - label: "D"
        text: |
          Require an origination date and a per-row as-of date before this table is modelled again, since no observation window exists without them
        correct: true
        why: |
          Both the label definition and the point-in-time check depend on dates, so the extract cannot be repaired downstream of them.
    solution: |
      Nine columns, and not one of them is a date:

      ```
      customer_id, month, income, self_employed, credit_score,
      loan_amount, avg_days_late, collections_flag, default
      ```

      `month` looks like a date and is not — it is an index running from 1 to somewhere between 3 and 8 within each customer. Without real dates, three things are impossible. You cannot define "default within 24 months of origination", because you do not know when origination was. You cannot verify that `credit_score` is the application-day value, because you do not know what day that was. And you cannot hold out a time-based test set, which is how you would check that the model still works on next quarter's applicants.

      **C** is the plan that will actually be proposed in the room, because it sounds like progress and costs nothing today. It fails on a specific point: a load timestamp is a property of the *extract job*, identical for every row. What is needed is a date per **loan** — when it started, and as-of when each field was true. One timestamp on six and a half thousand rows anchors nothing.

      > [!success] Answer — **D**
      > Dates are a precondition, not an enhancement: the label definition and the point-in-time check both fail without them.

      > [!warning] `month` is not a date
      > It is the single most likely column on this paper to be mistaken for one. It has no year, no calendar meaning, and resets to 1 for every customer.
    related_terms:
      - train-test-split

  - id: q13
    title: "Q13 — Plan: the gaps are not evenly spread"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "Self-employed applicants are missing an income figure six times as often as salaried ones, and our fix erased that pattern."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Impute from the training median and add an `income_missing` indicator, so the fact of the gap survives alongside a filled value
        correct: true
        why: |
          The indicator preserves the signal that mean-filling destroys, and the median is robust to the column's mixed-unit distortion.
      - label: "B"
        text: |
          Impute within each employment group separately, so self-employed applicants receive the self-employed average rather than a global figure spanning both
        correct: false
        why: |
          Better than a global mean, but it still leaves imputed and observed rows indistinguishable, which is the information that mattered.
      - label: "C"
        text: |
          Drop rows with a missing income, since thirty per cent of a quarter of the book is a modest share of the total
        correct: false
        why: |
          It deletes the self-employed disproportionately, shrinking exactly the higher-risk segment the model most needs to learn.
      - label: "D"
        text: |
          Make income a mandatory field on the application form, so the column arrives complete for every applicant from now on
        correct: false
        why: |
          A sound operational change that does nothing for the historical file you must train on today.
    solution: |
      Q3 established the mechanism:

      ```python
      income = np.nan if rng.random() < (0.30 if self_emp else 0.05) else round(income)
      ```

      The pattern of absence is correlated with a genuine risk factor, so **the missingness is a feature**. The fix therefore has to do two things at once: supply a usable number for the model to compute with, *and* keep the fact that the number was supplied rather than observed. An indicator column does exactly that, and the model is then free to learn that imputed-income applicants default at a different rate — which they do.

      Two details in **A** earn it the mark. *Training* median, not the whole column's — otherwise you have reintroduced the pre-split leak. And *median*, not mean, because the column mixes annual and monthly figures and a mean sits in the empty valley between the two humps, describing nobody.

      **B** is the distractor that will divide the room, and it is a real improvement — a self-employed applicant gets a plausible self-employed figure instead of a blend. But it solves the wrong half. After group-wise imputation you still cannot distinguish a self-employed applicant who declared 11,000 from one who declared nothing and was assigned 11,000, and it was the second group that was carrying the extra risk.

      > [!success] Answer — **A**
      > Fill from the training median and keep a missingness indicator, so the pattern of absence remains available to the model.

      > [!tip] Impute *and* flag
      > Whenever missingness might be informative, the default should be both operations, never just the fill. It costs one column and preserves a signal you cannot recover later.
    related_terms:
      - missing-values
      - feature-selection

  - id: q14
    title: "Q14 — Plan: what to do with `month`"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The `month` column survived into the feature matrix and both models are using it."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          One-hot encode it, so the models treat it as an unordered category rather than reading it as a quantity that increases
        correct: false
        why: |
          Encoding fixes how a meaningless column is interpreted. It does not make the column mean anything to a new applicant.
      - label: "B"
        text: |
          Replace it with the customer's total row count, which is a cleaner summary of how long the loan has been observed
        correct: false
        why: |
          Observation length is unknown for a new applicant and is a property of the extract, so this swaps one artefact for another.
      - label: "C"
        text: |
          Drop it — it is a snapshot counter produced by our warehouse, not a fact about the applicant on the day they apply
        correct: true
        why: |
          The decision-day test disposes of it immediately, and no encoding of a warehouse artefact can make it a legitimate predictor.
      - label: "D"
        text: |
          Keep it and join a calendar date, so genuine seasonality in loan demand can be modelled rather than discarded
        correct: false
        why: |
          There is no calendar date in the file to join to, and seasonality of demand is not what this column encodes.
    solution: |
      Sometimes the correct plan is the shortest one. `month` fails the decision-day test outright:

      ```python
      for month in range(1, int(rng.integers(3, 9)) + 1):
      ```

      An applicant standing at the counter has no month. There is nothing to encode, nothing to transform, and nothing to recover. Drop it.

      The two sophisticated distractors are worth separating. **A** proposes a technique that is correct in general — treating a small-cardinality integer as a category rather than a magnitude is usually right, and one-hot encoding is how you do it. But technique applied to a column that should not exist just produces eight meaningless columns instead of one.

      **B** is the more dangerous of the two, because it sounds like an upgrade. Total row count is how long the warehouse watched this loan, which is (a) unknown for a new applicant and (b) mechanically related to how much opportunity there was to observe a default. Building a feature out of observation length is a step towards leakage, not away from it.

      > [!success] Answer — **C**
      > Drop the column: it describes the warehouse's snapshot schedule, and no encoding turns that into an applicant attribute.

      > [!note] Not every problem is a modelling problem
      > Two of this paper's twenty-five correct answers are "remove it" or "we cannot know". Reaching for a technique when the answer is deletion is a specific, common, and marked mistake.
    related_terms:
      - one-hot-encoding
      - feature-selection

  - id: q15
    title: "Q15 — Plan: six thousand rows, twelve hundred customers"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "We have been describing this as a 6,557-row dataset, but there are only 1,200 customers behind those rows."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Keep treating 6,557 as the sample size, since each customer-month is a separate observation of that borrower's repayment behaviour
        correct: false
        why: |
          The rows share one label and near-identical features, so they carry almost no independent information about default.
      - label: "B"
        text: |
          Treat 1,200 as the sample size, note that roughly 170 of them defaulted, and scale the modelling ambition to that figure
        correct: true
        why: |
          1,200 customers at a 14% default rate leaves about 170 positive cases, which is the number that actually constrains what can be learned.
      - label: "C"
        text: |
          Extend each customer's history so every borrower contributes eight rows, which lifts the effective sample and balances the panel
        correct: false
        why: |
          Copying a customer's label onto more rows adds volume without adding information, and worsens the duplication problem.
      - label: "D"
        text: |
          Train on all 6,557 rows but evaluate on one row per customer, so the reported score is measured at the decision level
        correct: false
        why: |
          Evaluation improves, but the training set still contains the test customers, so the score remains inflated by recognition.
    solution: |
      The arithmetic is the whole answer. 1,200 customers, a default rate around 14%, so roughly **170 defaulters in total**. That is the number that governs everything: how many features you can afford, how much you can tune, how wide the confidence interval on any performance figure will be.

      Three 256-unit dense layers is roughly 130,000 parameters. Against 170 positive examples. Stating the sample size honestly is what makes that comparison available — which is why **B** is a plan and not merely an observation.

      **D** is the thoughtful distractor and it gets the diagnosis right: evaluation should happen at the level of the decision, one row per applicant. But applying the fix to only one side of the split leaves the leak intact. The model still trains on five rows belonging to a customer whose sixth row is now the test case, so the evaluation row is a near-duplicate of something already memorised. Collapsing has to happen **before** the split, not after it.

      > [!success] Answer — **B**
      > The effective sample is 1,200 customers containing roughly 170 defaults, and the modelling should be sized to that.

      > [!warning] Rows are not evidence
      > Within a customer, only `month` and a jittered `avg_days_late` vary; everything else, label included, is copied. Five copies of one observation is one observation.
    related_terms:
      - train-test-split
      - overfitting

  - id: q16
    title: "Q16 — Plan: were these the application-day values?"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "We cannot show that the stored `credit_score` is the value that existed when the application was assessed."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Pull the bureau's historical file and rebuild each score as it stood on the application date, accepting that some records will not be recoverable
        correct: true
        why: |
          It restores point-in-time correctness from the only source that has it, and admits that coverage will be incomplete.
      - label: "B"
        text: |
          Use the earliest snapshot for each customer, since a month-1 row is the closest thing the file has to an application-day record
        correct: false
        why: |
          The value is identical across all of a customer's rows, so taking the earliest one returns exactly the same number.
      - label: "C"
        text: |
          Keep the current values and add a note to the model card, since a slightly stale score is a small error next to the other defects
        correct: false
        why: |
          A refreshed score is not stale — it is contaminated by repayment behaviour that occurred after the decision being modelled.
      - label: "D"
        text: |
          Drop `credit_score` entirely, since a field we cannot date cannot be trusted and the remaining columns will have to carry the model
        correct: false
        why: |
          Too blunt when the bureau's history exists: this discards the single most legitimate predictor available on decision day.
    solution: |
      Q9 established that the file cannot distinguish two stories: the score was captured at application, or today's score was written onto every historical row. If the second is true, then for a customer who defaulted the stored score has almost certainly been *dragged down by the default itself* — and you are back to leakage, arriving through a column that passed the obvious audit.

      The only place that can settle it is the bureau, which keeps a dated history. **A** is the plan that goes there, and its second clause matters: some records will not be recoverable, and those loans drop out of training. That is the price of a defensible feature.

      **B** is the plan that will sound clever for about ten seconds. It is worth working through why it fails, because the reasoning generalises. The score is written once per customer inside `load_data` and then repeated:

      ```python
      score = np.clip(rng.normal(680, 70), 300, 850)
      ...
      for month in range(1, int(rng.integers(3, 9)) + 1):
          rows.append({..., "credit_score": score, ...})
      ```

      Every row holds the same value, so "take the earliest" returns the same number as "take the latest". **You cannot recover point-in-time information from a table that never stored it** — no amount of clever selection within the file will do it. The information has to come from outside.

      > [!success] Answer — **A**
      > Rebuild the score from the bureau's dated history and accept the loss of records that cannot be reconstructed.

      > [!tip] Leakage after the obvious pass
      > Once the obviously post-outcome columns are gone, the remaining leak is almost always a legitimate-looking field holding a value refreshed after the decision. Look for it in anything sourced from a system that updates.
    related_terms:
      - data-leakage

  - id: q17
    title: "Q17 — Plan: what to check before modelling anything"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "We ran one histogram and then started fitting. We need an exploratory step that would actually have caught this."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Plot every column against every other column and read the resulting grid for anything that looks unusual or unexpected
        correct: false
        why: |
          An undirected grid of plots produces a lot of output and no decisions. Nothing in it says which finding blocks the work.
      - label: "B"
        text: |
          Compute the correlation of each feature with the outcome and rank them, so the strongest predictors are identified before fitting
        correct: false
        why: |
          It would surface the leak, but framed as feature ranking a suspiciously strong correlation reads as good news rather than an alarm.
      - label: "C"
        text: |
          Run the standard profiling report over the file, so distributions, missing counts and correlations are all captured automatically
        correct: false
        why: |
          Automated profiling produces the numbers but not the judgement, and the grouped structure in particular will pass unremarked.
      - label: "D"
        text: |
          Check missing counts, rows per customer and each feature's distribution by outcome, with a stated rule for what blocks modelling
        correct: true
        why: |
          It names the three checks that expose the actual defects and commits in advance to what a failed check means.
    solution: |
      The difference between **D** and the other three is the last clause: *a stated rule for what blocks modelling.* The checks alone are ordinary. Deciding beforehand what you will do if one of them fails is what converts exploration into a control.

      The three checks map onto three defects:

      ```python
      df.isna().sum()                              # informative missingness (Q3)
      df.groupby("customer_id").size().describe()  # 1,200 customers, not 6,557 (Q15)
      df.groupby("default")[["avg_days_late", "collections_flag"]].mean()   # the leak
      ```

      **C** is the distractor most teams would actually adopt, and it is not lazy — a profiling report genuinely computes distributions, missing counts and a correlation matrix in one call. It fails for two reasons. First, the grouped structure is invisible to it: nothing in a standard profile says "these 6,557 rows are 1,200 customers", because that requires knowing which column is an entity key. Second, and more fundamentally, a report tells you what is in the data. It does not tell you that a correlation of 0.9 between `collections_flag` and `default` means **stop**.

      **B** deserves the same treatment it got in Q10. Right instrument, wrong question written on the form.

      > [!success] Answer — **D**
      > Three targeted checks — missingness, rows per entity, distributions by outcome — with a pre-agreed rule for what a failure blocks.

      > [!tip] Write the stopping rule first
      > "If any feature separates the classes more cleanly than our best underwriter, we halt and investigate before fitting." A rule written before you see the numbers is worth ten written afterwards.
    related_terms:
      - exploratory-data-analysis
      - groupby
      - correlation-vs-causation

  - id: q18
    title: "Q18 — Plan: telling annual figures from monthly ones"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "Roughly thirty per cent of income values are annual and the rest monthly, and we must decide which is which."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Divide every income above 100,000 by twelve, since essentially nobody in this book earns that much in a single month
        correct: false
        why: |
          A threshold rule misclassifies high monthly earners and low annual ones, and the two populations overlap precisely where it is applied.
      - label: "B"
        text: |
          Trace each record to its source system and convert to one documented unit, dropping records whose system cannot be identified
        correct: true
        why: |
          Provenance is the only thing that determines the unit of an individual row, and the plan states the cost of records it cannot resolve.
      - label: "C"
        text: |
          Add a flag marking which rows look annual and keep both columns, letting the model learn how to use the distinction itself
        correct: false
        why: |
          The flag has to be derived by the same guesswork as A, so it hands the model a noisy label rather than resolving anything.
      - label: "D"
        text: |
          Use the loan-to-income ratio in place of raw income, since a ratio is unaffected by which unit the denominator was recorded in
        correct: false
        why: |
          A ratio is not unit-invariant: dividing by an annual figure rather than a monthly one changes it by a factor of twelve.
    solution: |
      Only one thing determines whether a given row is annual or monthly, and it is not in the file:

      ```python
      income = income_m * 12 if rng.random() < 0.3 else income_m  # some systems store it annually
      ```

      **B** goes to the systems, and accepts that some records will not be resolvable and will be dropped. That is the shape of a correct answer on this paper: it fixes the cause and names what it costs.

      **A** is the plan that gets adopted in real teams, so it is worth being precise about the failure. Monthly incomes centre on `exp(9.1)` ≈ 9,000 with a log-scale spread of 0.45, so the top of the monthly distribution runs well past 20,000. Annual figures are twelve times a draw from the same distribution, so the bottom of the annual distribution runs well below 100,000. **The two populations overlap**, and any single cutoff sits inside that overlap, misclassifying high earners as annual and modest annual earners as monthly. It is not a threshold that needs tuning; it is a rule that cannot exist.

      **D** is the most seductive because it invokes a real principle. Ratios *are* invariant to a change of unit applied consistently to the whole column. Here the unit varies **row by row**, so `loan_amount / income` is off by a factor of twelve for the annual thirty per cent, and the ratio inherits the defect intact.

      > [!success] Answer — **B**
      > Recover the unit from the source system per record, convert to one documented unit, and drop what cannot be traced.

      > [!warning] Do not model your way out of a data-collection problem
      > Options A, C and D are three attempts to infer inside the file something that only exists outside it. When a fact was never recorded, the fix is upstream.
    related_terms:
      - feature-scaling
      - missing-values

  - id: q19
    title: "Q19 — Plan: the amount in the file is the amount we lent"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "`loan_amount` records what we granted. An applicant on submission day has asked for something, which may differ."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Keep the granted amount, since it is what the borrower actually had to repay and therefore what genuinely drove the default
        correct: false
        why: |
          True of the past and useless in production: at scoring time the granted amount does not yet exist to be fed in.
      - label: "B"
        text: |
          Model the granted amount from applicant characteristics first, then feed that prediction into the default model as a feature
        correct: false
        why: |
          It stacks an approximation of a past underwriting decision underneath the model meant to replace that decision.
      - label: "C"
        text: |
          Retrieve the requested amount from the application file and train on that, since it is what is available on submission day
        correct: true
        why: |
          It aligns the training feature with the value that will actually be present at scoring time, taken from where it was recorded.
      - label: "D"
        text: |
          Drop the amount entirely, since granted and requested figures cannot be reconciled and loan size is captured by income anyway
        correct: false
        why: |
          Loan size is a primary driver of risk in the generator and is not recoverable from income, so dropping it is a real loss.
    solution: |
      This is a **train-serve mismatch**, and it is the quietest defect on the paper because the column looks entirely innocent. `loan_amount` passes the decision-day test in the loose sense — loans have amounts, applicants ask for amounts — but the specific number in the warehouse is the one an underwriter approved, sometimes after negotiating the applicant down. In production the model runs *before* that negotiation, on a number that was never in the training data.

      The risk equation makes the stakes clear:

      ```python
      risk = -3.1 - 0.011 * (score - 680) + 1.6 * loan / (income_m * 12) ...
      ```

      Loan-to-income carries the largest coefficient in the model. Getting the numerator's definition wrong is not a rounding issue.

      **A** is the argument that will be made most forcefully, and its premise is correct: the granted amount really is what determined whether repayment was affordable. But causal correctness in the past does not make a feature usable in the present. If a value does not exist at the moment of scoring, it cannot be an input, regardless of how well it explains history.

      **B** deserves a moment because it is superficially rigorous. It builds a model of what the old underwriters would have granted, then uses that as an input to the model meant to replace them — importing every bias in the current rules as a feature, laundered through a regression.

      > [!success] Answer — **C**
      > Train on the requested amount from the application file, because that is the value that will exist when the model is asked to score.
    related_terms:
      - feature-selection
      - data-leakage

  - id: q20
    title: "Q20 — Plan: how the next extract gets produced"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "`loans.csv` was written by one person and cannot be reproduced. Nobody can say what query produced it."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Store the file in shared storage with a clear name and date, so everyone works from the same copy
        correct: false
        why: |
          Shared access to an unexplained file spreads the problem rather than fixing it; the query is still unknown.
      - label: "B"
        text: |
          Have a second analyst rebuild the extract independently and compare the two, treating a close match as adequate confirmation
        correct: false
        why: |
          Two undocumented queries agreeing tells you they made similar assumptions, not that either assumption was correct.
      - label: "C"
        text: |
          Ask the author to write up the extract logic once the modelling work has settled and the required columns are known
        correct: false
        why: |
          Deferring means the modelling decisions are made against a file nobody can yet describe or regenerate.
      - label: "D"
        text: |
          Put the extract query in version control with its filters and date range, so any result can be regenerated and audited later
        correct: true
        why: |
          A versioned query makes the dataset reproducible and makes its filters — which is where selection bias lives — visible to review.
    solution: |
      A regulator who asks why an application was rejected will not stop at the model. The answer runs back through the features to the data, and if the data is a CSV somebody produced once, the chain breaks.

      The clause that matters in **D** is *with its filters and date range*. Selection bias lives in the `WHERE` clause. "The warehouse stores approved loans only" is not a fact about the bank's business — it is a fact about a filter, and it is invisible until the query is written down where someone can read it. Every question on this paper about population validity ultimately traces to a line of SQL that was never reviewed.

      **B** is the distractor with the most institutional appeal, because independent reproduction is a genuine control in other contexts. Here it verifies the wrong thing. Two analysts from the same team, working from the same warehouse and the same shared assumptions, will both filter to approved loans, because that is what "the loan book" means to both of them. Their agreement confirms a shared blind spot and dresses it as validation.

      > [!success] Answer — **D**
      > Version the extract query with its filters and date range so the dataset can be regenerated, reviewed and audited.

      > [!tip] The filter is part of the dataset
      > A dataset is the query plus the data, and the query is where the population is decided. If it is not in version control, no one can review the single most consequential choice in the pipeline.
    related_terms:
      - scikit-learn-pipeline

  - id: q21
    title: "Q21 — The model decision: 'we just drop two columns'"
    text: |
      The model decision:

      > "The team accepts the leakage finding and says the fix is a one-line change: drop `avg_days_late` and `collections_flag`, re-run, and report the new number. They want to keep the same file otherwise."

      What do you require before this proceeds?
    options:
      - label: "A"
        text: |
          The drop is necessary but the same file still has grouped rows, mixed units and approved loans only; require those addressed as well
        correct: true
        why: |
          Removing the leak fixes one of several independent defects, and the remaining three each inflate or misdirect the result on their own.
      - label: "B"
        text: |
          Approve the change and treat the resulting accuracy as the honest estimate, since the source of the inflation has been removed
        correct: false
        why: |
          The row-level split still places each customer on both sides, so the new figure is inflated by recognition rather than leakage.
      - label: "C"
        text: |
          Approve the change and additionally require a validation set, since nothing in the notebook chose the epochs or the tree count
        correct: false
        why: |
          A fair point about tuning, but it is a modelling gap. It leaves every data defect in this paper's territory untouched.
      - label: "D"
        text: |
          Reject the change and require the two columns be repaired with as-of logic, since repayment history is genuinely predictive
        correct: false
        why: |
          There is no as-of version of these fields for a new applicant; the loan does not exist, so no repayment history can.
    solution: |
      Leakage is the loudest defect, which makes it a convenient one to fix. The risk is that fixing it is treated as fixing the pipeline.

      Take the file after the two columns are gone. It still contains:

      - **3–8 rows per customer**, all carrying the same label, split at row level — so the model still gets to recognise customers it has already seen.
      - **`income` in two units**, so the strongest term in the true risk equation, loan-to-income, is scrambled for thirty per cent of records.
      - **approved loans only**, so whatever number comes out describes a population the model will not face.
      - **`month`**, still in the feature matrix.

      Each of those distorts the result independently. **B** is the answer being angled for by the team, and its logic is that there was one cause of the inflation. There were several.

      **D** is worth taking seriously because in many lending problems repayment history is exactly the right feature — for *behavioural* scoring of an existing customer, `avg_days_late` is legitimate and powerful. It is not legitimate here, because the question is origination: this applicant has no loan, so there is no history to date. The same column is fine in one model and fatal in another, and which one you are building is the thing to be clear about.

      > [!success] Answer — **A**
      > Dropping the leaky columns is necessary and nowhere near sufficient; the grouping, the units and the population all remain.
    related_terms:
      - data-leakage
      - train-test-split

  - id: q22
    title: "Q22 — The model decision: evidence that the file matches production"
    text: |
      The model decision:

      > "You ask the team what evidence they have that `loans.csv` describes the population of applicants the model will actually face."

      Which answer would you accept?
    options:
      - label: "A"
        text: |
          The rows come from the bank's own warehouse, which by definition holds the bank's own customers and therefore its own population
        correct: false
        why: |
          The bank's customers are the people it approved. The model will face applicants, which is a strictly larger group.
      - label: "B"
        text: |
          The income distribution has the lognormal shape real earnings take, which indicates the sample was drawn without distortion
        correct: false
        why: |
          A plausible marginal shape says nothing about selection, and this column is in fact a two-population mixture.
      - label: "C"
        text: |
          There is none — the file holds approved loans only, so it describes past underwriting decisions rather than incoming applicants
        correct: true
        why: |
          The correct answer is that the evidence does not exist, and no statistic computed on this file can supply it.
      - label: "D"
        text: |
          The observed default rate of 14% matches the figure quoted in the brief, which confirms the extract is representative
        correct: false
        why: |
          Both numbers are computed on approved loans, so the agreement confirms consistency with itself and nothing more.
    solution: |
      The answer is that there is no such evidence, and there cannot be any that comes from inside the file.

      Every option except **C** performs the same manoeuvre: it computes something on the approved-loan sample and offers the result as reassurance about a population the sample excludes. **D** does this most elegantly — the 14% really does match the brief. But the brief's 14% is a statement about the loan book, and the file *is* the loan book. Checking one against the other is checking a number against itself.

      **A** is the version that will be said out loud in a meeting, with some impatience. It rests on a slide between two words. The warehouse does hold the bank's own customers. The model does not score customers; it scores **applicants**, and the difference between those two groups is precisely the thing the current rules created and the file cannot show.

      > [!success] Answer — **C**
      > No evidence exists, because the file describes the outcome of past underwriting rather than the applicant population.

      > [!warning] Unfalsifiable comfort
      > If a proposed check would return "looks fine" no matter how severe the selection bias was, it is not a check. Ask what result would have made the team stop.
    related_terms:
      - correlation-vs-causation

  - id: q23
    title: "Q23 — The model decision: which columns can explain a rejection"
    text: |
      The model decision:

      > "The regulator requires a plain-terms reason for any rejection. You go through the nine columns asking which of them could appear in such a reason."

      What do you conclude?
    options:
      - label: "A"
        text: |
          A reason can be given as the model's output probability, which is a specific figure the applicant is free to query with us
        correct: false
        why: |
          A probability restates the decision in decimals. It names nothing the applicant could recognise, dispute or act on.
      - label: "B"
        text: |
          Two columns do not exist for an applicant and `month` is a warehouse artefact, leaving income, score, amount and employment status
        correct: true
        why: |
          Only the four remaining columns are both known on submission day and meaningful to the applicant, and one of them has an unresolved unit.
      - label: "C"
        text: |
          Explainability is a property of the model rather than the data, so which columns were used has no bearing on the requirement
        correct: false
        why: |
          A reason has to name something. If every available column is an artefact or unknown at decision time, no model can produce one.
      - label: "D"
        text: |
          A reason can always be produced by naming the feature with the largest standardised value for that particular applicant
        correct: false
        why: |
          The largest standardised value is often just an outlier — and a `credit_score` of 0 from the imputation would top that list.
    solution: |
      Work through the nine columns against two tests — *known on submission day* and *meaningful to the applicant*:

      | Column | Available at decision? | Usable in a reason? |
      |---|---|---|
      | `customer_id` | yes | no — an identifier |
      | `month` | no | no — a warehouse snapshot index |
      | `income` | yes | yes, once the unit is resolved |
      | `self_employed` | yes | yes |
      | `credit_score` | yes | yes |
      | `loan_amount` | requested only | yes, see [[data-leakage\|Q19 on granted versus requested]] |
      | `avg_days_late` | no | no — the loan does not exist |
      | `collections_flag` | no | no |
      | `default` | it is the label | not a feature |

      Four survive. That is a workable basis for a rejection notice — *"the amount requested is high relative to your declared income"* is a sentence an applicant can act on — but only if `income` has been converted to a documented unit and `credit_score` has not been silently replaced by zero.

      **D** is the distractor that looks like a method, and this pipeline shows exactly how it fails. After `fillna(0)` and standardisation, an applicant with a missing credit score has an enormous negative standardised value on that column, dwarfing everything else. The rule would generate the reason *"your credit score"* for someone whose credit score was never recorded.

      > [!success] Answer — **B**
      > Income, credit score, loan amount and employment status are the only columns that are both available at decision time and meaningful to an applicant.

      > [!tip] Explainability starts in the schema
      > A model cannot explain a decision in terms of columns that do not exist on decision day. The regulator's requirement constrains feature selection before it constrains model choice.
    related_terms:
      - feature-selection
      - outliers

  - id: q24
    title: "Q24 — The model decision: a half-corrected dataset"
    text: |
      The model decision:

      > "The team returns having removed the leaky columns and split by customer. The income units are still unresolved and the sample is still approved loans only. They ask to go live."

      What do you decide?
    options:
      - label: "A"
        text: |
          Approve for production on the applicants the current rules would reject, since those are the cases the old system handles worst
        correct: false
        why: |
          Those applicants are precisely the ones absent from training, so the model has the least basis for judging them.
      - label: "B"
        text: |
          Approve for production across the board, since the two remaining issues concern data quality rather than the correctness of the method
        correct: false
        why: |
          Mixed units corrupt the strongest risk term in the data, and the population gap makes any reported figure describe the wrong group.
      - label: "C"
        text: |
          Decline and require the entire corrected pipeline, including the population experiment, before any further conversation about deployment takes place
        correct: false
        why: |
          The population experiment takes months to return outcomes, and refusing all intermediate steps forfeits the learning available now.
      - label: "D"
        text: |
          Run it in shadow, scoring live applications without acting on them, while income provenance is traced and the population work begins
        correct: true
        why: |
          Shadow mode generates evidence on the real applicant flow at no lending risk, and runs concurrently with the two outstanding fixes.
    solution: |
      The team has done real work. Removing the leak and splitting by customer are the two changes that most affect the numbers, and the honest figure that comes out of that — around 36–37% of defaulters caught, per the [[pp-01-sample-exam-25-questions|lecturer's sample paper]] — is a genuine result rather than an artefact.

      But two things are still true. Thirty per cent of income values are in the wrong unit, which corrupts loan-to-income, the largest term in the true risk process. And the sample is still approved loans only, so any performance figure describes a population the model will not meet.

      Neither of those blocks *learning*, and that is what makes **D** right. A shadow run scores every live application and records what it would have decided, without a single decision changing. Within weeks you have the model's behaviour on the real applicant flow — including profiles absent from training — at zero lending risk, while provenance tracing and the population experiment proceed alongside.

      **C** is the answer that feels most rigorous and is the most expensive. The population experiment needs applications approved, then months of repayment observed. Refusing every intermediate step means waiting out that clock with nothing running and nothing learned. Rigour is about not acting on unsound evidence, not about refusing to gather any.

      > [!success] Answer — **D**
      > Shadow deployment: score live applications without acting on them, while the unit and population problems are worked in parallel.

      > [!tip] Separate the two decisions
      > *Do we trust this enough to act on it?* and *do we trust this enough to run it?* are different questions with different thresholds. Shadow mode is what lives in between.
    related_terms:
      - model-selection

  - id: q25
    title: "Q25 — The model decision: who the model may be used on"
    text: |
      The model decision:

      > "The corrected evaluation catches 36–37% of defaulters. The board asks whether the data supports deploying this at all."

      What do you tell them?
    options:
      - label: "A"
        text: |
          Yes for applicants inside the current rules, where the data is representative; not for anyone outside them until the experiment returns
        correct: true
        why: |
          It scopes deployment to the population the training data actually describes, and states plainly where the evidence runs out.
      - label: "B"
        text: |
          Yes for all applicants, since catching 36% of defaulters is a clear improvement on a rule set that currently catches none of them
        correct: false
        why: |
          The 36% was measured on approved loans only, so it is not an estimate of performance on applicants the rules currently reject.
      - label: "C"
        text: |
          No — 36% is too weak to justify replacing an underwriting process that already holds the default rate down to about 14%
        correct: false
        why: |
          It compares a recall figure against a base rate, which are different quantities, and ignores that the two run together.
      - label: "D"
        text: |
          Yes for all applicants, provided the model is retrained every month so that the population gap corrects itself over time
        correct: false
        why: |
          Retraining on applicants the model itself approved entrenches the gap: rejected profiles never generate outcomes to learn from.
    solution: |
      The question is not *how good is the model* but *on whom is the evidence valid*, and those have different answers.

      The 36–37% figure was measured on a test set drawn from approved loans. Within that population it is a real estimate: for applicants the current rules would pass, the model catches roughly a third of the defaulters that slip through today, and it does so alongside the existing rules rather than instead of them. That is a defensible deployment.

      Outside that population there is no estimate at all. An applicant the rules currently reject has no counterpart in the training data, and a model scoring one is extrapolating into a region it has never observed. **A** draws the line exactly where the evidence does, and accepts that the more valuable use case — lending to people the bank currently turns away — has to wait for data that does not exist yet.

      **D** is the most dangerous answer on the paper, because it sounds like a plan for fixing the very problem it entrenches. If the model only ever scores applicants who were approved, then only approved applicants ever generate outcomes, so every retrain is fitted to the same filtered population. The gap does not close — it hardens, while every metric on the dashboard holds steady.

      > [!success] Answer — **A**
      > Deploy within the population the data describes, and withhold judgement on everyone outside it until the experiment returns.

      > [!warning] Scope is part of the recommendation
      > "Deploy" and "do not deploy" are rarely the real options. *Deploy, on this population, with these caveats, until this evidence arrives* is the answer a business owner is actually being asked for.
    related_terms:
      - model-selection
      - overfitting
---

> [!info] What this paper is
> A **practice mock** in the format of the real exam: 25 multiple-choice questions about the same deliberately-flawed notebook, `loan_pipeline.ipynb`. It is not the lecturer's paper — it is an additional set, written to cover one territory in much more depth than a single paper can.
>
> - 📓 [`loan_pipeline.ipynb`](/papers/machine-learning/loan_pipeline.ipynb)
> - 📄 [The problem brief + 15 preparation questions](/papers/machine-learning/loan-pipeline-brief-and-prep-questions.pdf)
> - 📝 [[pp-01-sample-exam-25-questions|The lecturer's sample paper]] · 📖 [[loan-pipeline-code-walkthrough|Code walkthrough & defect catalogue]]

## The territory this paper covers

Every question here is about **the data and how it was collected** — the half of the exam that is decided before a single model is fitted.

| Theme | Questions |
|---|---|
| What a row represents; the panel structure | 1, 7, 14, 15 |
| The label: definition, dating, observation window | 6, 12 |
| Missing values and why the pattern is informative | 3, 13 |
| Mixed units in `income`, and the histogram that showed it | 2, 8, 18 |
| What is knowable on decision day; point-in-time correctness | 9, 16, 19, 21, 23 |
| Selection bias and the population the file describes | 4, 5, 22, 24, 25 |
| Exploratory work, data dictionaries, provenance | 10, 11, 17, 20 |

Scaler ordering, metric definitions, thresholds and model architecture appear only as distractors here — those belong to the lecturer's paper and to the other mocks.

## How this mock differs from the sample paper

The [[pp-01-sample-exam-25-questions|sample paper]] is, if you read it closely, slightly guessable: the correct option is usually the longest, the most hedged, and the one that admits a cost. Those tells were removed here deliberately.

> [!warning] The shortcuts will not work
> - Options within a question are **matched for length**. Counting words tells you nothing.
> - Hedging language appears in wrong options as often as right ones.
> - Several correct answers are **blunt and short** — "drop it", "there is none", "treat 1,200 as the sample size".
> - Two questions in Part 1 have a **"Not valid"** answer, and one more is *true but beside the point*.
> - Every distractor is something a competent analyst might genuinely propose. There are no strawmen to eliminate.

If you find yourself picking an option because of how it is written rather than what it claims, you are doing the thing this paper was built to punish. Go back to the code.

## Suggested use

Attempt it closed-book after you have read the [[loan-pipeline-code-walkthrough|walkthrough]] once, and mark yourself **by part**:

- **Part 1 (1–10)** — did you read the code, or did you pattern-match on the concern sounding plausible?
- **Part 2 (11–20)** — did you fix the cause, or the nearest visible symptom?
- **Part 3 (21–25)** — did you scope the recommendation, or just answer yes or no?

Losing marks in one part and not the others tells you what to revise. Losing them evenly usually means going back to `load_data` and reading it line by line.
