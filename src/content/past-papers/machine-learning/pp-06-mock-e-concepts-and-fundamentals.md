---
title: "Mock Paper E — Concepts and Fundamentals"
type: past-paper
status: worked-solution
exam: "Mock Paper E (practice)"
course: "Machine Learning — Economics Track"
semester: 2
year: 2
tags:
  - machine-learning
  - past-paper
  - mock-exam
  - loan-pipeline
  - preparation-questions
  - overfitting
  - bias-variance
aliases:
  - Mock E Machine Learning
  - ML Mock Paper E
  - Prep Questions Mock
subject: machine-learning
in_scope: true
questions:
  - id: q1
    title: "Q1 — 'Whatever else is wrong, it isn't overfitting'"
    text: |
      A colleague adds two lines to the notebook and prints the training score alongside the test score:

      ```text
      Random Forest  — train 0.9924 | test 0.9871
      Neural Network — train 0.9903 | test 0.9817
      ```

      > "Half a point of gap on both models. Whatever else is wrong with this pipeline, overfitting isn't one of the problems."

      Is that conclusion sound?
    options:
      - label: "A"
        text: |
          Sound — a sub-point gap between training and test performance is the standard signature of a model that has generalised, and it holds for both models here
        correct: false
        why: |
          The train–test gap only means something when the test rows are genuinely unseen. Here they are not, so a small gap is uninformative rather than reassuring.
      - label: "B"
        text: |
          Not sound — a gap that small is the signature of underfitting, and the appropriate response is a deeper forest and a wider network
        correct: false
        why: |
          Underfitting shows up as poor scores on **both** sides. 98–99% on both is not that. The level is high; only its meaning is in doubt.
      - label: "C"
        text: |
          Not sound — 3–8 rows per customer sit on both sides of the split, so the test rows are near-copies of training rows and the gap would stay small even if the network had memorised outright
        correct: true
        why: |
          The diagnostic requires held-out data. `train_test_split` splits by row, and a customer's rows are duplicates of each other, so most customers appear on both sides.
      - label: "D"
        text: |
          Sound for the Random Forest, whose bootstrap supplies an honest out-of-bag estimate, but not for the network, which has no equivalent internal check
        correct: false
        why: |
          `oob_score` defaults to `False` and is never set, so no out-of-bag estimate is computed. Even if it were, it would resample the same duplicated rows.
    solution: |
      The three fit signatures, and what each looks like when you have both numbers:

      | | Training | Test | The tell |
      |---|---|---|---|
      | **Overfitting** | high | much lower | large train–test gap |
      | **Underfitting** | low | low | both poor, small gap |
      | **Good fit** | high | close to training | small gap, both good |

      Read naively, the printed numbers land in row three. But the diagnostic assumes one thing that is false here: **that the test rows are data the model has not seen.**

      ```python
      for month in range(1, int(rng.integers(3, 9)) + 1):
          rows.append({"customer_id": cid, ...})
      ```

      Each customer contributes 3–8 rows that share the same `income`, `credit_score`, `loan_amount`, `self_employed` and — crucially — the same `default` label. `train_test_split` then shuffles **rows**, not customers. For a customer with five rows, the chance of landing entirely on one side is `0.8⁵ + 0.2⁵ ≈ 0.33`, so roughly **two-thirds of customers straddle the split**.

      A model that memorised its training rows would score almost as well on the test set, because the test set is mostly the same people again. The gap is small **by construction**, whatever the fit.

      > [!success] Answer — **C**
      > The gap is uninformative because the test set is not held-out data.

      > [!warning] Two things are being confused
      > "There is no gap" and "there is no overfitting" are the same statement only when the split is honest. Fix the split by customer, remove the leaked columns, and the gap becomes meaningful for the first time — see [[prep-questions-loan-pipeline|prep question 1]].
    related_terms:
      - overfitting
      - bias-variance-tradeoff
      - train-test-split

  - id: q2
    title: "Q2 — Both numbers poor, no gap"
    text: |
      The pipeline is rebuilt properly: leaked columns dropped, split by customer, imputation fitted on training rows only. One configuration comes back with **recall on defaulters of 0.11 on training and 0.10 on test**.

      Which response does that pattern call for?
    options:
      - label: "A"
        text: |
          More capacity or better features — both scores are poor with essentially no gap between them, which is underfitting, and regularisation would push both lower still
        correct: true
        why: |
          Poor-and-equal on both sides is the underfitting signature. The model cannot represent the relationship; constraining it further makes that worse.
      - label: "B"
        text: |
          Regularisation and earlier stopping — scores this close mean the model has settled, and the low level reflects noise in the data rather than anything about the fit
        correct: false
        why: |
          Regularisation and early stopping are the *overfitting* toolkit. Applied to a model that is already too constrained, they lower both numbers.
      - label: "C"
        text: |
          Nothing — flagging 10% of applicants at random catches about 10% of defaulters, so the model is performing at chance and the honest conclusion is that the data has no signal
        correct: false
        why: |
          The chance comparison is fair, but "no signal" is a conclusion you reach *after* trying a model flexible enough to find some, not before.
      - label: "D"
        text: |
          Rebalance the classes and leave the model alone — low recall on a 14% minority class is an imbalance problem, not a fitting problem
        correct: false
        why: |
          Imbalance handling changes *which* errors the model makes. It does not make an over-constrained model able to represent a relationship it currently cannot.
    solution: |
      Two numbers, two questions. **The level** tells you how good the model is. **The gap** tells you what kind of problem you have.

      - Gap large, training high → the model memorised. Overfitting.
      - Gap small, both low → the model cannot represent the pattern. **Underfitting**, which is [[bias-variance-tradeoff|high bias]].
      - Gap small, both high → good fit (assuming the split is honest — see Q1).

      0.11 and 0.10 is the second row. The fixes point the opposite way from the overfitting fixes:

      | | Fix |
      |---|---|
      | **Overfitting** | simplify, add [[regularization|regularisation]], more data, early stopping |
      | **Underfitting** | more flexible model, better or more features, train longer, *less* regularisation |

      > [!success] Answer — **A**
      > Poor on both sides with no gap is underfitting. Add capacity or better features.

      > [!note] Why C is tempting and still wrong
      > On a 14% base rate, flagging 10% of applicants at random does catch roughly 10% of defaulters, so 0.10 recall really is chance-like. That makes C a reasonable *hypothesis*. It is not yet a finding: the honest rebuild in the [[loan-pipeline-code-walkthrough|walkthrough]] expects defaulter-recall in the **mid-30s**, so signal does exist on application-day data. A model finding none of it has a fitting problem before it has a data problem.
    related_terms:
      - overfitting
      - bias-variance-tradeoff
      - recall

  - id: q3
    title: "Q3 — Three people say 'bias' and mean three things"
    text: |
      In the go/no-go meeting someone says:

      > "The real risk here is bias."

      Three people in the room take that to mean three different things, and all three concerns are genuine.

      Which statement describes **high bias in the statistical sense** — the sense the term carries in the bias–variance trade-off?
    options:
      - label: "A"
        text: |
          The warehouse holds only loans the bank approved, so the population the model learned from is not the population it will be asked to score
        correct: false
        why: |
          That is **selection bias** — a real defect here (and not fixable in code), but a statement about how the sample was drawn, not about the model's error structure.
      - label: "B"
        text: |
          Self-employed applicants are missing an income figure 30% of the time against 5% for salaried, so one group is systematically scored on worse information
        correct: false
        why: |
          That is a fairness concern, and a live one. It describes unequal treatment across groups, not a model that is too rigid to fit the relationship.
      - label: "C"
        text: |
          The reported score moves noticeably when the random split changes, so the number in the pack depends on which rows happened to land in the test set
        correct: false
        why: |
          That is **variance** — the other half of the trade-off. Bias is the error that survives no matter which sample you drew.
      - label: "D"
        text: |
          The model is too constrained to represent the true relationship, so its errors lean the same way everywhere and more data will not remove them
        correct: true
        why: |
          High bias is systematic error from a model's own assumptions. It is the property that produces underfitting, and it does not shrink with sample size.
    solution: |
      The word carries at least three meanings in a lending meeting, and the exam expects you to hold them apart.

      | Sense | What it means | Present here? |
      |---|---|---|
      | **Statistical bias** (bias–variance) | the model's assumptions are too rigid to represent the pattern; errors lean consistently | the question being asked |
      | **Selection bias** | the sample was drawn from a filtered population | yes — approved loans only |
      | **Fairness / disparate impact** | one group is treated systematically worse | yes — missing-income pattern by employment type |

      The statistical sense: fit a straight line to data that genuinely curves and the line is wrong in the same places forever. Add a million rows and it stays wrong there. That is bias — error you cannot sample your way out of.

      **Relation to complexity.** Bias falls as complexity rises: a linear model has high bias and low variance, a deep tree or a 134,000-weight network has low bias and high variance. Total error is minimised somewhere in the middle.

      **Relation to underfitting.** Underfitting is what high bias *looks like* in the numbers — poor performance on training and test alike, with almost no gap between them (Q2).

      > [!success] Answer — **D**

      > [!warning] The trap
      > A, B and C all describe true problems with this pipeline. Only one of them is *this* word. Being right about the pipeline and wrong about the vocabulary loses the mark.
    related_terms:
      - bias-variance-tradeoff
      - overfitting

  - id: q4
    title: "Q4 — 'Far better than a 50/50 coin flip'"
    text: |
      The notebook's closing cell reads:

      > "Both models are around 98% - far better than a 50/50 coin flip."

      About 14% of loans in the data end in default. Which reading of that sentence is correct?
    options:
      - label: "A"
        text: |
          The right comparison is 86%, so the models add about twelve points — a real improvement, though a far smaller one than the sentence implies
        correct: false
        why: |
          Right about the baseline, wrong about what the twelve points are. They come from two columns written *after* the loan went bad; remove the leak and most of the gap goes with it.
      - label: "B"
        text: |
          The right comparison is 86%, and the twelve points above it come from columns that will not exist for a new applicant — so no meaningful comparison has been made at all
        correct: true
        why: |
          The baseline is the majority-class rule, and the margin over it is manufactured by `avg_days_late` and `collections_flag`. Both halves have to be said.
      - label: "C"
        text: |
          The right comparison is 50%, since accuracy on a two-class problem is measured against chance — the sentence is correct and both models are strong
        correct: false
        why: |
          A coin flip is the baseline for a **balanced** problem. At a 14% base rate, predicting "no default" for everyone scores 86% while catching nobody.
      - label: "D"
        text: |
          The right comparison is 14%, the share the naive rule gets wrong, so the models improve on doing nothing by roughly 84 points
        correct: false
        why: |
          14% is the *error rate* of the majority rule, not its accuracy. Subtracting it from 98 compares two different quantities.
    solution: |
      Two separate errors are stacked in that one sentence, and the exam wants both.

      **Error one — the wrong baseline.** With a 14% default rate, the rule "approve everyone, predict no default" scores:

      ```text
      accuracy = 1 - 0.14 = 0.86
      defaulters caught = 0
      ```

      86%, for free, from a rule that requires no data, no model and no meeting. That — not 50% — is the number any model has to beat.

      **Error two — the twelve points are not real.** `avg_days_late` and `collections_flag` are generated *from* the default outcome:

      ```python
      days_late = rng.uniform(2, 35) if default else rng.exponential(2.5)
      collections = int((default and rng.random() < 0.65) or rng.random() < 0.05)
      ```

      Neither exists for a person who has not borrowed yet. The models are reading the answer, then being congratulated for knowing it.

      | Rule | Accuracy | Defaulters caught |
      |---|---|---|
      | Approve everyone | ~86% | **0%** |
      | The notebook's models | ~98% | never measured |
      | Corrected evaluation | near baseline | **36–37%** |

      > [!success] Answer — **B**
      > The baseline is 86%, and the margin above it is leakage.

      > [!tip] Why A is the expensive wrong answer
      > A is what a well-prepared candidate says when they have learned the baseline and stopped there. It concedes the model is worth twelve points. In the meeting, that concession is the whole go/no-go.
    related_terms:
      - accuracy
      - data-leakage
      - recall

  - id: q5
    title: "Q5 — Asking for the right measures"
    text: |
      The go/no-go pack contains one number per model. You want measures that show how the system actually treats **defaulters**.

      Which request gets you what you need?
    options:
      - label: "A"
        text: |
          Training accuracy alongside test accuracy for both models, since the gap between them is what exposes a model's weakness on the smaller class
        correct: false
        why: |
          The train–test gap diagnoses *fit*, not class behaviour. A model can generalise beautifully and still never flag a single defaulter.
      - label: "B"
        text: |
          ROC-AUC on its own — it is threshold-independent and unaffected by class imbalance, so it answers the question without needing an operating point
        correct: false
        why: |
          AUC measures ranking across all thresholds. It never tells you how many defaulters you catch at the cutoff you will actually deploy.
      - label: "C"
        text: |
          RMSE and R² against the `default` column, treating the 0/1 outcome as a quantity, so the size of each error is measured and not just whether it occurred
        correct: false
        why: |
          Those are regression measures. On hard 0/1 predictions RMSE is the square root of the error rate — accuracy again, wearing a different hat.
      - label: "D"
        text: |
          The confusion matrix at the threshold the bank will actually use, with recall and precision on the default class, and AUC alongside as a summary
        correct: true
        why: |
          The confusion matrix is the only object that shows the two error types separately; recall and precision are read off it; AUC summarises ranking independently of the cutoff.
    solution: |
      Accuracy collapses two very different errors into one number, and at a 14% base rate it is dominated by the class you care least about. Prise it apart:

      |  | Predicted repay | Predicted default |
      |---|---|---|
      | **Actually repaid** | true negative | false positive — a lost customer |
      | **Actually defaulted** | **false negative — a written-off loan** | true positive |

      From that single table:

      - **[[recall|Recall]] on defaults** = TP / (TP + FN) — *of everyone who went bad, what share did we catch?* The number the bank's losses depend on.
      - **[[precision]]** = TP / (TP + FP) — *of everyone we rejected, what share would really have defaulted?* The number the lost-margin cost depends on.
      - **[[auc|ROC-AUC]]** — how well the model *ranks* applicants, independent of where you put the cutoff. Report it; do not decide on it alone.

      The two errors here differ by roughly an order of magnitude in cost (a written-off loan against a lost interest margin), so any single number that averages them is answering a question nobody asked.

      > [!success] Answer — **D**

      > [!warning] B is the sophisticated wrong answer
      > AUC is genuinely imbalance-insensitive, and reaching for it shows you understand the problem with accuracy. But a bank does not deploy a ranking — it deploys a **cutoff**, and AUC is silent about what happens at one. Two models with identical AUC can catch very different numbers of defaulters at the threshold you choose.
    related_terms:
      - confusion-matrix
      - precision-and-recall
      - auc
      - accuracy

  - id: q6
    title: "Q6 — 'A sigmoid output makes it regression'"
    text: |
      A colleague reads the last two lines of the network cell:

      ```python
      layers.Dense(1, activation="sigmoid"),
      ...
      acc_nn = accuracy_score(y_test, (nn.predict(X_test, verbose=0) > 0.5).astype(int))
      ```

      > "The output is a continuous number between 0 and 1, so this is a regression model. The `> 0.5` is us converting a regression into a classification by hand."

      Is that right?
    options:
      - label: "A"
        text: |
          No — the task is fixed by the target, which takes two values; the score is an intermediate and the threshold is part of the classifier, not a conversion between model types
        correct: true
        why: |
          Regression versus classification is a property of what you are predicting. `default` is binary, so this is [[classification]] however the score is produced.
      - label: "B"
        text: |
          Yes — model type follows from what the model outputs, and a continuous output is regression by definition; the cast is separate post-processing
        correct: false
        why: |
          Then logistic regression would be a regression model that happens to classify, and every classifier reporting probabilities would change type on output.
      - label: "C"
        text: |
          Yes for the network, no for the forest — the forest votes across discrete trees and never produces a continuous score to threshold
        correct: false
        why: |
          `RandomForestClassifier` exposes `predict_proba` (the share of trees voting for class 1), and `predict` applies an implicit 0.5 to it. Both models carry a score and a cutoff.
      - label: "D"
        text: |
          No — model type follows from the loss function, and `binary_crossentropy` is a regression loss adapted to a target bounded at 0 and 1
        correct: false
        why: |
          Cross-entropy is *the* standard classification loss, derived from the likelihood of a two-valued target. It is not squared error in disguise.
    solution: |
      | | Predicts | Banking example |
      |---|---|---|
      | **Regression** | a quantity on a continuous scale | expected loss in shekels if this loan defaults; lifetime interest margin; what a property is worth |
      | **[[classification|Classification]]** | which of a fixed set of classes | approve or reject; will this borrower default within 24 months; is this transaction fraudulent |

      **The loan-approval problem is classification** — a binary yes/no about a new applicant, exactly as the brief frames it.

      That most useful classifiers emit a *score* first and a class second is not a blurring of the categories; it is how classification is done. Logistic regression outputs a probability. A forest outputs a vote share. A sigmoid unit outputs a number in (0, 1). In every case the class comes from comparing that score to a threshold.

      > [!success] Answer — **A**

      > [!tip] The point hiding underneath
      > Once you accept that the threshold is *part of the classifier*, the `> 0.5` stops being a formatting detail and becomes a policy decision — one nobody in this notebook made, on a problem where the two errors cost roughly ten times differently. See [[pp-05-mock-d-deployment-and-judgement|Mock D, Q1]].
    related_terms:
      - classification
      - logistic-regression
      - sigmoid-function

  - id: q7
    title: "Q7 — 'A network was never the right tool here'"
    text: |
      Setting the accuracy figures aside, a colleague makes a claim about the model class itself:

      > "On seven tabular columns and 6,500 rows, a neural network was never the right tool for this — and no amount of tuning would have changed that."

      Is that right?
    options:
      - label: "A"
        text: |
          No — a network of sufficient width and depth is a universal approximator, so with enough training it can represent anything a tree ensemble can and more
        correct: false
        why: |
          Universal approximation says the function *can* be represented, not that gradient descent will find it from 5,245 rows, and not that what it finds will generalise.
      - label: "B"
        text: |
          Yes — tree ensembles are the stronger default on modest heterogeneous tables, and ~134,000 weights against 5,245 rows is capacity this data cannot support
        correct: true
        why: |
          The model class is wrong for the data shape, and "tune it properly" is impossible anyway without a validation set to define what properly means.
      - label: "C"
        text: |
          No — the real objection is the fixed 30 epochs; with early stopping and dropout a network would be a perfectly legitimate candidate on data of this shape
        correct: false
        why: |
          Those changes give you a better-run network. They do not change the shape of the data, or make deep learning the right family for seven tabular columns.
      - label: "D"
        text: |
          Yes, though for the wrong reason — what rules the network out here is the regulator's explainability requirement, not anything about the shape of the data
        correct: false
        why: |
          The regulator's constraint is real and independent. But the claim also stands on the data shape alone: this is precisely the regime where tree ensembles win.
    solution: |
      **What deep learning is.** Neural networks stacked several layers deep, which learn their own intermediate representations of the input instead of being handed engineered features. That is the whole advantage — and it only pays when the raw input is something no human can hand-engineer well: pixels, waveforms, tokens.

      **When it wins:** high-dimensional unstructured data (images, audio, text), very large sample sizes, and problems where the useful features are compositional.

      **When trees win:** heterogeneous tabular columns on different scales, non-smooth interactions, modest sample sizes, and any setting where you need to say *why* a row was scored the way it was. This is that setting.

      The arithmetic is decisive here:

      | | |
      |---|---|
      | Network weights and biases | **≈ 133,900** |
      | Training rows | ≈ 5,245 |
      | Independent customers behind them | ≈ 1,200 |
      | Feature columns | 7 |

      Roughly **twenty-five free parameters per training row**, and about a hundred per genuinely independent customer — with no dropout, no weight decay, no early stopping.

      And "tune it properly" has no meaning in this pipeline either: `nn.fit(...)` is called with no `validation_data` and no callbacks, so nothing exists that could tell you whether epoch 30 was too few, too many, or right.

      > [!success] Answer — **B**

      > [!warning] And the regulator settles it anyway
      > Even if the network won on the numbers, the bank must explain every rejection in plain terms. A 134,000-weight network does not do that out of the box; [[logistic-regression|logistic regression]] does. Performance cannot buy its way past a hard constraint.
    related_terms:
      - overfitting
      - random-forest
      - logistic-regression

  - id: q8
    title: "Q8 — What makes a hundred trees different"
    text: |
      ```python
      rf = RandomForestClassifier(n_estimators=100, random_state=42)
      ```

      What makes the hundred trees differ from one another, and why does averaging them beat a single tree?
    options:
      - label: "A"
        text: |
          Each tree is fitted to the mistakes of the tree before it, so errors are corrected in sequence and later trees specialise in the rows earlier ones got wrong
        correct: false
        why: |
          That is **boosting** — a different ensemble family. A Random Forest grows its trees independently, which is why they can be averaged rather than summed in sequence.
      - label: "B"
        text: |
          Each tree sees the same rows and the same features but starts from a different random seed, which sends the splitting search down a different path
        correct: false
        why: |
          Tree growing is deterministic given its rows and its candidate features. Without resampling, a hundred seeds would give you a hundred identical trees.
      - label: "C"
        text: |
          Each tree is grown on a bootstrap resample of the rows and may consider only a random subset of the features at every split, which decorrelates their errors so averaging cancels them
        correct: true
        why: |
          Bagging plus feature subsampling are the two sources of difference. Averaging reduces variance in proportion to how *uncorrelated* the individual errors are.
      - label: "D"
        text: |
          Each tree receives a disjoint slice of the training rows, so a hundred trees cover the data a hundred different ways and no row influences more than one tree
        correct: false
        why: |
          Bootstrap samples are drawn **with replacement**, at full training-set size, so they overlap heavily. Disjoint slices would run out after a handful of trees.
    solution: |
      An **[[ensemble-methods|ensemble]]** is many models whose predictions are combined. A single deep decision tree is a low-bias, *high-variance* model: change a few training rows and the splits rearrange and the predictions move. Average many such trees and the idiosyncratic parts of their errors cancel while the shared signal survives.

      That cancellation only works if the errors are not all the same error. A Random Forest engineers the difference twice:

      1. **Bagging** — each tree is grown on a bootstrap resample: the same number of rows, drawn with replacement, so about 63% of rows appear at least once and the rest are out-of-bag for that tree.
      2. **Feature subsampling** — at every split, a tree may only choose among a random subset of the columns. With 7 features and scikit-learn's `sqrt` default, that is about **2 candidate features per split**.

      Without step 2, one dominant feature would be the root of all hundred trees and the forest would collapse towards a single tree.

      > [!success] Answer — **C**

      > [!note] Which is exactly what happens here
      > `avg_days_late` is so nearly a copy of the label (Q13) that it will win most splits it is offered. The forest's decorrelation machinery is working against a feature that makes decorrelation pointless — every tree, however it was built, ends up reading the same giveaway.
    related_terms:
      - ensemble-methods
      - random-forest
      - decision-tree

  - id: q9
    title: "Q9 — 'Model parameters: 3 layers, 30 epochs'"
    text: |
      Two markdown cells describe the settings:

      > *(model parameters: `n_estimators=100`, default settings are fine)*
      >
      > *(model parameters: 3 layers, 30 epochs, no tuning needed)*

      Which classification of those settings is correct?
    options:
      - label: "A"
        text: |
          All four are hyperparameters; the parameters are the forest's split columns and thresholds and the network's ~134,000 weights and biases, none of which appear in the code
        correct: true
        why: |
          Hyperparameters are set before `fit` and govern how learning happens; parameters are what `fit` learns. Every number in those comments is the former.
      - label: "B"
        text: |
          `n_estimators` and the layer count are hyperparameters; `epochs` and `batch_size` are training parameters, since `adam` adapts them as `fit` runs
        correct: false
        why: |
          `adam` adapts the step size applied to the **weights**. It never touches `epochs` or `batch_size` — both are fixed before `fit` and never revisited.
      - label: "C"
        text: |
          They are parameters — what you pass into the model is a parameter, and a hyperparameter is what the library holds back and sets for you by default
        correct: false
        why: |
          Backwards. Whether a value is typed out or left at a default is irrelevant; what matters is whether it is learned from the data or chosen before learning starts.
      - label: "D"
        text: |
          The distinction applies to the network only — a forest stores decision rules rather than fitted numbers, so it has hyperparameters but no parameters
        correct: false
        why: |
          A split rule *is* a fitted parameter: a column and a numeric threshold on it. This forest fits tens of thousands of them.
    solution: |
      | | Chosen by | Where it should be chosen | Examples here |
      |---|---|---|---|
      | **Hyperparameter** | you, before `fit` | on a **validation set** or by cross-validation | `n_estimators=100`, 3 hidden layers, 256 units, `epochs=30`, `batch_size=64`, `test_size=0.2`, the 0.5 threshold |
      | **Parameter** | the algorithm, during `fit` | nowhere — the data decides | each tree's split column and threshold; the network's ≈133,900 weights and biases |

      The comment is not a slip of vocabulary. It is a claim — *"default settings are fine"*, *"no tuning needed"* — about decisions that were never made and never checked. Nothing in the notebook chose 100, or 3, or 256, or 30, or 64, and there is no held-out data on which any of them could have been chosen (Q11).

      > [!success] Answer — **A**

      > [!warning] Where hyperparameters must **not** be chosen
      > On the test set. The moment the test set selects a setting, the number it reports stops being an unbiased estimate of live performance — see Q10.
    related_terms:
      - hyperparameter-tuning
      - validation-set
      - random-forest

  - id: q10
    title: "Q10 — 'The test rows never go into fit'"
    text: |
      A colleague proposes:

      > "Let's try `n_estimators` at 50, 100, 200 and 500 and keep whichever scores best on the test set. That isn't leakage — the test rows never go into `fit`."

      Is that right?
    options:
      - label: "A"
        text: |
          Yes — leakage is about rows crossing into training, and selection uses only a score, which carries far less information than the rows themselves
        correct: false
        why: |
          Selection is a channel like any other. Choose the best of four and you have imported the test set's noise into the choice, and the winning score keeps it.
      - label: "B"
        text: |
          Yes, provided the candidate list stays short — with four values the optimism is negligible next to the sampling error of a 1,312-row test set
        correct: false
        why: |
          The optimism shrinks with fewer candidates but never reaches zero, and once the principle is conceded four candidates becomes forty. The safeguard has to be structural.
      - label: "C"
        text: |
          No — the moment the test set selects anything, the number it reports stops being an unbiased estimate of live performance; that choice belongs on a validation set or in cross-validation
        correct: true
        why: |
          A test set can be used **once**, to report. Using it to choose spends it, and there is no second clean set behind it.
      - label: "D"
        text: |
          No — but the deeper objection is that `n_estimators` is not worth searching, since a forest's accuracy is flat in the number of trees beyond about fifty
        correct: false
        why: |
          Broadly true and beside the point. The objection is to *where* the choice is made, and it applies identically to `max_depth`, epochs, or the threshold.
    solution: |
      Three sets, three jobs:

      | Set | Job | May be used |
      |---|---|---|
      | **Training** | fit the parameters | as often as you like |
      | **Validation** | choose the hyperparameters, compare candidates, decide when to stop | as often as you like |
      | **Test** | estimate live performance | **once**, at the end, on nothing else |

      **What goes wrong when you choose on the test set.** Every score has a signal component and a noise component. Picking the maximum of four scores picks whichever candidate got the luckiest noise draw too. The reported figure is then biased upward by an amount nobody can measure — and, worse, you now have no untouched data left with which to measure it.

      **What goes wrong when there is no validation set at all**, as here: the choices still get made, just without evidence. And the moment anyone *does* start tuning, the only held-out data in the notebook is the set the headline number is reported on, so the pressure to do exactly what this colleague proposes becomes structural.

      ```python
      # what it should look like
      from sklearn.model_selection import GridSearchCV, StratifiedGroupKFold
      cv = StratifiedGroupKFold(n_splits=5)
      search = GridSearchCV(rf, {"n_estimators": [50, 100, 200, 500]}, cv=cv, scoring="recall")
      search.fit(X_train, y_train, groups=customer_id_train)   # test set untouched
      ```

      > [!success] Answer — **C**
    related_terms:
      - validation-set
      - cross-validation
      - hyperparameter-tuning
      - data-leakage

  - id: q11
    title: "Q11 — 'Nothing was tuned, so nothing was lost'"
    text: |
      One member of the team argues that the missing validation set is a technicality *in this case*:

      > "Neither model was tuned. Each was fitted once, at one configuration. A validation set would have had nothing to decide."

      Another disagrees, and says the missing validation set is a real defect regardless. **Is the second person right?**
    options:
      - label: "A"
        text: |
          No — validation exists to arbitrate between candidates, and with a single candidate per model there was nothing to arbitrate, so the test estimate stayed clean
        correct: false
        why: |
          "Not tuned" and "tuned badly" look identical from outside. Someone typed 100, 3, 256, 30 and 64; each is a decision, and none was checked against anything.
      - label: "B"
        text: |
          Only for the network — 30 epochs is plainly a choice that needed checking, whereas the forest was left at library defaults chosen by people who tested them
        correct: false
        why: |
          `n_estimators=100` and an untouched `max_depth` are as unjustified for this data as 30 epochs. The asymmetry is in how arbitrary they *look*, not in whether they were chosen.
      - label: "C"
        text: |
          Yes — the settings were chosen, just not by evidence, and with no held-out data there was never a point at which anyone could see whether 30 epochs stopped too early, too late, or about right
        correct: true
        why: |
          The absence of tuning is the defect, not the excuse for it. Without validation data the question "is this configuration any good?" cannot be asked at all.
      - label: "D"
        text: |
          Yes — because `train_test_split` folds the unrequested validation share back into training, so the training set is larger than the printed figure suggests
        correct: false
        why: |
          Right verdict, invented mechanism. `train_test_split` returns exactly two parts and takes no view on validation; the training set is the 80% it says it is.
    solution: |
      Look at what `fit` was actually given:

      ```python
      nn.fit(X_train, y_train, epochs=30, batch_size=64, verbose=0)
      ```

      No `validation_data`. No `callbacks`. `verbose=0`, so not even a training curve is printed. The network trains for exactly thirty passes and stops, and nothing anywhere in the notebook could distinguish that from stopping at five or at three hundred.

      Three consequences, none of them technicalities:

      1. **Early stopping is impossible.** It requires a held-out score to monitor. There is none.
      2. **The stopping point is unjustified.** So are 100 trees, 256 units and 3 layers. "No tuning needed" is an assertion, not a finding.
      3. **There is nowhere honest to tune later.** Once the leak is fixed and someone starts searching properly, the only spare data is the test set — and Q10 is what happens next.

      > [!success] Answer — **C**

      > [!note] A is the argument you will actually meet
      > It is a genuinely reasonable-sounding defence: no selection happened, so no selection bias entered the test estimate. That much is true. What it misses is that the *purpose* of validation is not only to protect the test set — it is to give anyone, ever, grounds for believing the configuration is a sensible one.
    related_terms:
      - validation-set
      - hyperparameter-tuning
      - overfitting

  - id: q12
    title: "Q12 — Applying the decision-day rule"
    text: |
      The general rule: a feature may be used only if the bank knows it about the applicant **on the day they apply**. `X = df.drop(columns=["default", "customer_id"])` leaves seven columns.

      Applying the rule, which of them fail it?
    options:
      - label: "A"
        text: |
          `avg_days_late` and `collections_flag`. Both are written after the loan is issued, and no other surviving column depends on the outcome
        correct: false
        why: |
          Right about the leak, incomplete on the rule. The rule is "knowable on decision day", which is broader than "derived from the label".
      - label: "B"
        text: |
          `avg_days_late`, `collections_flag` and `month` — none of the three exists for someone who has not borrowed yet, though only the first two carry the answer
        correct: true
        why: |
          `month` indexes a monthly billing record. It is a fact about the warehouse, not about an applicant, and it survives the `drop` and is fed to both models.
      - label: "C"
        text: |
          `avg_days_late`, `collections_flag` and `credit_score` — the bureau refreshes the score over the life of the loan, so the value in the file post-dates the application too
        correct: false
        why: |
          `credit_score` is a genuine application-day field. The fix is to source it *as of* the application date, not to drop one of the few honest predictors the bank has.
      - label: "D"
        text: |
          `avg_days_late` only. `collections_flag` is visible in the credit file at application, and `month` is an inert row index no model can misuse
        correct: false
        why: |
          In this file `collections_flag` is generated from `default` (65% of defaulters against 5% of everyone else), so here it is an outcome. And a tree will happily split on `month`.
    solution: |
      The seven columns the models receive, each against the rule:

      | Column | Known on decision day? | Verdict |
      |---|---|---|
      | `month` | no — it is the index of a billing snapshot | **drop** (warehouse artefact) |
      | `income` | yes, in principle | keep — but see the mixed-units problem (Q19) |
      | `self_employed` | yes | keep |
      | `credit_score` | yes, as of the application date | keep |
      | `loan_amount` | yes — the amount requested | keep |
      | `avg_days_late` | **no** — measured over the loan's life | **drop** (target leak) |
      | `collections_flag` | **no** — generated from the outcome | **drop** (target leak) |

      Two distinct failures are being tested here:

      - **Target leakage** — the column is a function of the answer. `avg_days_late`, `collections_flag`.
      - **Not knowable at decision time** — the column exists only because the row is a warehouse record. `month`.

      Both make a feature unusable; only the first inflates the score. Knowing which is which is the point of the question.

      > [!success] Answer — **B**

      > [!tip] The general definition to have ready
      > **Data leakage** is any situation where information reaches the model at training time that will not be available — or was not available — at the moment the prediction has to be made. It shows up as performance that is excellent in development and collapses in production, because in production the giveaway is gone.
    related_terms:
      - data-leakage
      - feature-selection

  - id: q13
    title: "Q13 — Why one column is worth twelve points"
    text: |
      `avg_days_late` is generated as `rng.uniform(2, 35)` for defaulters and `rng.exponential(2.5)` for everyone else, then blurred with `rng.normal(0, 2)`.

      What does that imply about the reported 98%?
    options:
      - label: "A"
        text: |
          The two distributions barely overlap, so a single cut on that one column separates most of the data — the models are restating the label, not predicting it
        correct: true
        why: |
          About 95% of non-defaulters fall below 7.5 days and about 83% of defaulters above it. One threshold on one column does most of the work.
      - label: "B"
        text: |
          The models are overfitting to a noisy feature, which more training data or a shallower forest would correct
        correct: false
        why: |
          Overfitting is fitting noise. This is the opposite — the feature is almost noiseless about the label, and the relationship learned is real. It just will not exist at decision time.
      - label: "C"
        text: |
          The column needs different scaling, since a uniform and an exponential on one axis distort the standardisation both models depend on
        correct: false
        why: |
          Scaling changes units, not information. Standardising leaves the two groups exactly as separable as they were.
      - label: "D"
        text: |
          Nothing on its own — it is one of seven columns, and no single feature can drive accuracy that high across two different model families
        correct: false
        why: |
          One feature can, when it is a near-copy of the target. Two very different families landing in the same place is evidence *for* the leak: they are reading the same giveaway.
    solution: |
      Do the overlap arithmetic:

      | | Distribution | Roughly |
      |---|---|---|
      | **Non-defaulters** | `exponential(2.5)` | ~95% below **7.5 days** (`e⁻³ ≈ 0.05`) |
      | **Defaulters** | `uniform(2, 35)` | ~83% above **7.5 days** (`(7.5−2)/33 ≈ 0.17` below) |

      A single rule — *"flag anyone averaging more than about a week late"* — gets you roughly 95% specificity and 83% recall from one column, before `collections_flag` (65% of defaulters, 5% of everyone else) is even consulted. The `± 2` day blur softens the boundary slightly and changes nothing structural.

      Stack that on an 86% base rate and 98% is not surprising. It is arithmetic.

      > [!danger] The sentence to carry into the exam
      > The models are not predicting default. They are **reading a restatement of it**, and being scored on how well they can copy.

      > [!success] Answer — **A**

      > [!warning] And the direction of the tell
      > When a tabular credit model reports 98%, the first hypothesis is leakage, not brilliance. The [[loan-pipeline-code-walkthrough|walkthrough]] puts the honest expectation at accuracy near the 86% baseline with ROC-AUC in the 0.70s. Run the fixes, land at 98% again, and you have found another leak.
    related_terms:
      - data-leakage
      - accuracy
      - overfitting

  - id: q14
    title: "Q14 — What one row is"
    text: |
      `df.shape` prints `(6557, 9)`, and `load_data` writes `int(rng.integers(3, 9))` rows for each of 1,200 customers.

      What does one row represent, and what does that do to `train_test_split`?
    options:
      - label: "A"
        text: |
          One row is one loan. The 6,557 loans are split 80/20, so the models are tested on 1,312 loans they have never seen
        correct: false
        why: |
          There are 1,200 customers behind 6,557 rows. The inner `for month in ...` loop writes 3–8 billing snapshots of the *same* loan.
      - label: "B"
        text: |
          One row is one customer-month, and the duplication is harmless — repeated rows simply weight longer-running loans more heavily, which is what a bank would want anyway
        correct: false
        why: |
          Weighting requires distinct evidence. These rows carry an identical label and identical `income`, `credit_score` and `loan_amount` — the same evidence repeated, not more of it.
      - label: "C"
        text: |
          One row is one customer-month, so the effective sample is 1,200 — but the split remains valid, since `random_state=42` guarantees the two sides are independent draws
        correct: false
        why: |
          `random_state` fixes *which* rows go where. It says nothing about *what* the rows are, and near-duplicate rows are not independent however they are shuffled.
      - label: "D"
        text: |
          One row is one customer-month. About 1,200 customers are spread across 6,557 rows, so a random row split puts most customers on both sides and the test measures recognition, not prediction
        correct: true
        why: |
          For a customer with five rows the chance of landing entirely on one side is about 0.33, so roughly two-thirds of customers straddle the split.
    solution: |
      ```python
      for month in range(1, int(rng.integers(3, 9)) + 1):
          rows.append({
              "customer_id": cid,
              "month": month,
              "income": income,          # identical across the customer's rows
              "credit_score": score,     # identical
              "loan_amount": round(loan),# identical
              "default": default,        # identical
          })
      ```

      **One row = one customer-month.** 1,200 customers × 3–8 months = 6,557 rows. Only `month` and the jittered `avg_days_late` differ within a customer.

      Now the split. For a customer with `k` rows, the probability that all of them land on the same side is roughly `0.8ᵏ + 0.2ᵏ`:

      | Rows per customer | Chance of straddling the split |
      |---|---|
      | 3 | ~49% |
      | 5 | ~67% |
      | 8 | ~83% |

      So for most customers, the model sees some of their rows in training and is then tested on their remaining rows — same person, same income, same loan, same label. That is a **memory test**, not a prediction test.

      > [!success] Answer — **D**

      > [!warning] The number to say out loud
      > The effective sample size is **1,200**, not 6,557. Every confidence interval, every power calculation and every "we have plenty of data" claim has to be rebuilt on the smaller figure.
    related_terms:
      - train-test-split
      - data-leakage
      - cross-validation

  - id: q15
    title: "Q15 — Plan: the split that fixes it"
    text: |
      You are writing the remediation plan. Which instruction correctly fixes the grouping problem?
    options:
      - label: "A"
        text: |
          Sort the frame by `customer_id` and take the last 20% of rows as the test set — ordering by customer keeps each customer's rows together
        correct: false
        why: |
          The cut still lands mid-customer, and a positional cut is not a random sample: the test set becomes the highest ids, which in a real warehouse means the newest customers.
      - label: "B"
        text: |
          Keep the random row split but pass `stratify=y`, which balances the label across the two sides and removes the dependence between rows
        correct: false
        why: |
          Stratification balances the **label**. It says nothing about which rows belong to the same person. Stratifying a leaked split gives you a balanced leaked split.
      - label: "C"
        text: |
          Deduplicate first — keep, for each customer, the row with the fewest missing values — then split randomly across the resulting 1,200 independent rows
        correct: false
        why: |
          Choosing the best-measured row selects on data quality, which correlates with self-employment and therefore with risk. It swaps a grouping problem for a selection problem.
      - label: "D"
        text: |
          Split by `customer_id` so every row of a customer goes to one side, and stratify on the label; the cost is that the effective sample drops to about 1,200 and the reported numbers drop with it
        correct: true
        why: |
          A grouped, stratified split is the fix, and naming the cost up front is what stops the falling accuracy being read as a regression later.
    solution: |
      ```python
      from sklearn.model_selection import StratifiedGroupKFold, GroupShuffleSplit

      # single held-out test set, no customer on both sides
      gss = GroupShuffleSplit(n_splits=1, test_size=0.2, random_state=42)
      train_idx, test_idx = next(gss.split(X, y, groups=df["customer_id"]))

      # and for tuning, k folds that respect both the groups and the label balance
      cv = StratifiedGroupKFold(n_splits=5)
      ```

      Better still, fix the **unit of analysis** upstream: the decision the bank makes is per *application*, so the modelling table should have one row per application, carrying the values as they stood on submission day. That is a data-engineering job, not a `train_test_split` argument — and this extract does not contain application-day values at all.

      > [!success] Answer — **D**

      > [!warning] Say the cost before you make the change
      > Fix the split and the honest accuracy falls. If nobody was warned, the meeting reads that as *"the fix broke the model"*. It did not — it removed a number that was never real. State the expected drop in the plan, not in the post-mortem.
    related_terms:
      - train-test-split
      - cross-validation
      - model-selection

  - id: q16
    title: "Q16 — Two lines of cleaning"
    text: |
      ```python
      df["income"] = df["income"].fillna(df["income"].mean())
      df["credit_score"] = df["credit_score"].fillna(0)
      ```

      Which statement identifies what is wrong with these two lines most completely?
    options:
      - label: "A"
        text: |
          The mean is computed over the whole table rather than the training portion, and 0 is off-scale — both fixed by moving the lines after the split and using the training minimum instead of 0
        correct: false
        why: |
          Both observations are right and the second fix is wrong. The training minimum still invents a score for someone who has none; the absence has to be flagged, not replaced by a plausible-looking number.
      - label: "B"
        text: |
          Both are computed over data that includes the test rows; the mean averages two different units; 0 is far outside the 300–850 range; and both lines erase a missingness pattern that carries signal
        correct: true
        why: |
          Four independent failures in two lines: ordering, a meaningless statistic, an off-scale sentinel, and destroyed information.
      - label: "C"
        text: |
          Only the second line is a real problem — a mean is a defensible default for a continuous column, whereas 0 is a sentinel the model will read as a genuine score
        correct: false
        why: |
          The first line is not defensible here: `income` mixes monthly and annual figures, so its mean is an average of two different quantities and describes nobody.
      - label: "D"
        text: |
          Neither line is wrong in itself — both are standard practice, and the only defect is that they run before the split, which moving them after it resolves
        correct: false
        why: |
          Ordering is one failure of four. Move both lines after the split and you still have a meaningless mean, an off-scale sentinel, and a destroyed signal.
    solution: |
      | # | Problem | Why it bites |
      |---|---|---|
      | 1 | **Computed before the split** | the mean is calculated over training *and* test rows, so test information enters every training row (Q18) |
      | 2 | **The mean is meaningless** | `income` holds monthly figures for ~70% of customers and annual for ~30%; its mean is an average of two units (Q19) |
      | 3 | **0 is off-scale** | credit scores run 300–850. After `StandardScaler`, 0 becomes an extreme low outlier — the model reads "no score" as "worst possible borrower" |
      | 4 | **Missingness is informative** | income is missing for **30%** of the self-employed against **5%** of the salaried; `credit_score` is missing for ~8%. That pattern is a signal, and both `fillna` calls overwrite it |

      Problem 4 is the one candidates miss. The gap is not an inconvenience to be papered over — *who* has a gap is itself predictive, and once filled it is unrecoverable.

      > [!success] Answer — **B**
    related_terms:
      - missing-values
      - feature-scaling
      - data-leakage

  - id: q17
    title: "Q17 — Plan: what replaces the two fillna lines"
    text: |
      What should the rebuilt pipeline do about missing `income` and missing `credit_score`?
    options:
      - label: "A"
        text: |
          Fit a median imputer on the training rows only, add a binary "was missing" indicator for each imputed field, and put both inside a `Pipeline` so the fit never sees validation or test data
        correct: true
        why: |
          Median resists the skew and the mixed units better than the mean; the indicator preserves the signal; the `Pipeline` makes the ordering impossible to get wrong.
      - label: "B"
        text: |
          Drop every row with a missing value — an imputed number is a fabricated one either way, and 1,200 customers can spare a few
        correct: false
        why: |
          The gaps are not random. Dropping them removes nearly a third of the self-employed, changing the population the model learns from.
      - label: "C"
        text: |
          Impute `income` from a regression on the other columns and `credit_score` from the group mean by employment type, which preserves relationships between features better than any constant
        correct: false
        why: |
          Model-based imputation is legitimate but is itself a model fitted on data, so it inherits every ordering rule here — and it still discards the missingness flag.
      - label: "D"
        text: |
          Leave the values missing and rely on models that handle them natively, which removes the imputation step and its ordering problem altogether
        correct: false
        why: |
          Some tree implementations route missing values; a Keras network does not — NaN propagates and the loss comes back NaN. And `StandardScaler` runs over the whole matrix first, so the option is not available here anyway.
    solution: |
      ```python
      from sklearn.pipeline import Pipeline
      from sklearn.compose import ColumnTransformer
      from sklearn.impute import SimpleImputer
      from sklearn.preprocessing import StandardScaler

      num = Pipeline([
          ("impute", SimpleImputer(strategy="median", add_indicator=True)),
          ("scale",  StandardScaler()),
      ])
      pre = ColumnTransformer([("num", num, ["income", "credit_score", "loan_amount"])])
      model = Pipeline([("pre", pre), ("clf", RandomForestClassifier(...))])
      model.fit(X_train, y_train)     # every statistic is learned on training rows only
      ```

      Three things this buys you at once:

      1. **`strategy="median"`** — unaffected by the annual/monthly bimodality and by outliers in a way the mean is not. (The units still have to be fixed properly — see Q20. Median is damage limitation, not a repair.)
      2. **`add_indicator=True`** — a `income_missing` column so the model can learn what the gap means instead of having it erased.
      3. **The `Pipeline` itself** — imputation and scaling are fitted inside each cross-validation fold, so it becomes structurally impossible to compute a statistic on data the model is about to be tested on.

      > [!success] Answer — **A**

      > [!note] Why "just drop the rows" is worse than it sounds
      > `income = np.nan if rng.random() < (0.30 if self_emp else 0.05)`. Listwise deletion removes 30% of self-employed borrowers and 5% of salaried ones — and self-employment is one of the genuine risk factors in the generator. You would be deleting your riskiest, best-signalled segment on the grounds that it is inconvenient.
    related_terms:
      - missing-values
      - scikit-learn-pipeline
      - feature-scaling

  - id: q18
    title: "Q18 — Fit, then split"
    text: |
      ```python
      X = StandardScaler().fit_transform(X)
      ...
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      ```

      What is wrong, what is the right order, and what is this class of mistake called?
    options:
      - label: "A"
        text: |
          Nothing is wrong for a `StandardScaler` — the mean and standard deviation are summary statistics of the features alone, and the label never enters them, so no information about the answer crosses the split
        correct: false
        why: |
          Leakage is not only about the label. The transformation applied to every training row was computed with the test rows' help, so the test set is no longer untouched.
      - label: "B"
        text: |
          The order is wrong but the effect is negligible on 6,557 rows, where whole-table and training-only statistics agree to several decimal places; the name for it is overfitting
        correct: false
        why: |
          The effect here is small — which is why it is a dangerous habit. With a `MinMaxScaler`, a target encoder, or less data it moves the number a lot. And the name is wrong: overfitting is about the model, contamination is about the protocol.
      - label: "C"
        text: |
          The order is wrong for the network but not the forest, since a forest splits on thresholds and is invariant to any monotone rescaling of its inputs
        correct: false
        why: |
          True about the forest's invariance and irrelevant to the objection. The problem is that a quantity computed from the test rows was used before testing, whatever the model's sensitivity to it.
      - label: "D"
        text: |
          The scaler is fitted on rows it will later be tested on, so the test rows help define the transformation applied to the training data; split first, fit on training only, apply to the rest — the mistake is train–test contamination, a form of data leakage
        correct: true
        why: |
          Fit on train, transform everything. The general principle: no quantity used in training may be computed from data the model will be evaluated on.
    solution: |
      **The correct order**, and this pipeline gets steps 2 and 3 exactly the wrong way round:

      1. Define the label and the unit of analysis.
      2. **Split** — by customer, stratified on the label, into train / validation / test.
      3. **Then** fit every data-derived quantity on the training portion only: imputation values, scaler statistics, encoders, feature selections.
      4. Apply those fitted transformations to validation and test.
      5. Tune on validation; report once on test.

      The name: **train–test contamination**, a species of [[data-leakage|data leakage]]. It is distinct from the *target* leakage in Q12–Q13 — nothing about the answer crosses here, only information about the test distribution — but both violate the same rule: the model must not be helped by anything it will later be graded on.

      Note that `df["income"].fillna(df["income"].mean())` one line earlier commits the identical error, and `SimpleImputer` inside a [[scikit-learn-pipeline|Pipeline]] fixes both at once.

      > [!success] Answer — **D**

      > [!tip] How to be sure you never do it
      > Never call `.fit()` or `.fit_transform()` on anything except training data. If a transformation needs to learn something, it belongs inside a `Pipeline` that the cross-validation splitter controls.
    related_terms:
      - data-leakage
      - feature-scaling
      - scikit-learn-pipeline
      - train-test-split

  - id: q19
    title: "Q19 — The chart nobody acted on"
    text: |
      The histogram in cell 4 shows two clearly separated peaks, the right one roughly **twelve times** the left. What is the most likely cause?
    options:
      - label: "A"
        text: |
          A genuine two-population effect — self-employed borrowers report substantially higher income than salaried ones, so the two groups show up as separate modes
        correct: false
        why: |
          A separation of exactly twelve is not a behavioural difference, it is a unit conversion. And only about a quarter of customers are self-employed, not a third.
      - label: "B"
        text: |
          An artefact of `nbins=80` — on a heavy-tailed column a fixed bin count often manufactures a second mode that disappears at a different bin width
        correct: false
        why: |
          Binning artefacts blur or split a mode; they do not place a second one at precisely 12× the first. The ratio is the tell.
      - label: "C"
        text: |
          Two units in one column — some source systems store income monthly and some annually, so roughly a third of the values are twelve times the rest
        correct: true
        why: |
          The generator says so outright: `income = income_m * 12 if rng.random() < 0.3 else income_m`. About 30% of customers carry an annual figure.
      - label: "D"
        text: |
          A handful of extreme outliers pulling a long right tail that reads visually as a second peak — handled by winsorising the top percentile before modelling
        correct: false
        why: |
          Outliers make a tail, not a second concentration of mass. Winsorising here would quietly compress genuine annual figures towards the monthly ones and make the column worse.
    solution: |
      ```python
      income_m = np.exp(rng.normal(9.1, 0.45))                    # monthly
      income = income_m * 12 if rng.random() < 0.3 else income_m  # some systems store it annually
      ```

      A single log-normal population, split by a coin weighted 30/70 and multiplied by twelve on one side. The histogram shows it plainly — and cell 4 draws that histogram, prints it, and the pipeline carries straight on to `fillna(mean)` in the next cell.

      **What it breaks downstream, in order:**

      - The **mean** of the column is an average of two quantities, so the imputed income belongs to nobody (Q16).
      - **Standardisation** computes one mean and one standard deviation across a bimodal column, so the scaled values are uninterpretable.
      - `loan_amount / income` — the ratio a credit analyst would reach for first — is wrong by a factor of twelve for a third of the file.
      - **Nothing can be explained to the regulator.** "Rejected because income was low" is unanswerable when the column means two things.

      > [!success] Answer — **C**

      > [!warning] The exploratory point behind the question
      > The pipeline did the exploratory work — and then ignored the result. Producing a chart is not the same as reading one. Every defect in this notebook that a five-minute look at the data would have caught is a defect that *was* looked at.
    related_terms:
      - histograms
      - exploratory-data-analysis
      - distributions
      - outliers

  - id: q20
    title: "Q20 — Plan: fixing the income column"
    text: |
      You are writing the remediation instruction for `income`. Which one is right?
    options:
      - label: "A"
        text: |
          Divide every value above 50,000 by twelve to bring the annual figures onto a monthly basis, then re-run — the 12× gap makes the boundary unambiguous
        correct: false
        why: |
          The distributions overlap: a high monthly earner and a low annual one land on the same side of any threshold, and those borderline cases are exactly the ones the decisions turn on.
      - label: "B"
        text: |
          Stop, trace the column to its source systems, establish per record which unit was written, convert to one documented unit and record the definition — no modelling until that is settled
        correct: true
        why: |
          The unit is knowable from the source system. Recovering it from the values is guesswork; reading it from provenance is not.
      - label: "C"
        text: |
          Add a binary `is_annual` indicator alongside the raw column and let the model learn the distinction itself, avoiding any need to guess at a boundary
        correct: false
        why: |
          The flag only helps if it is correct, which requires knowing the unit per record — the very thing you do not have. If you knew it, you would convert instead.
      - label: "D"
        text: |
          Take the logarithm of the column — a 12× multiplicative difference becomes an additive shift, which both models can absorb without touching the data
        correct: false
        why: |
          A log turns 12× into a constant `+2.48` everywhere, so the two populations stay exactly as separated. The column still means two things, now on a different scale.
    solution: |
      The temptation is to fix it in the frame, because that takes ten seconds. Look at what a threshold rule actually does:

      Monthly incomes are log-normal around `exp(9.1) ≈ 8,955` with `σ = 0.45`, so the monthly population runs to roughly 20,000+ at the top. The annual population starts at 12 × the *bottom* of that distribution — around 40,000. **They overlap.** Any cut you pick misclassifies high monthly earners as annual, or low annual earners as monthly — and both groups sit near the decision boundaries the bank cares most about.

      The unit is not a property to be inferred from the number. It is a property of **which system wrote the record**, and that is recoverable:

      1. Trace `income` back through the warehouse to the originating systems.
      2. Establish, per record, which unit was written — a join, not an inference.
      3. Convert to one documented unit (monthly, say) and write the definition into a data dictionary.
      4. Only then re-run anything.

      > [!success] Answer — **B**

      > [!danger] "A rule that is right 95% of the time" is not a fix
      > On the most important column in a credit model, applied to the applicants closest to the cutoff, a 95% rule is a systematic error concentrated precisely where the money is. This is the difference between cleaning data and guessing at it.
    related_terms:
      - exploratory-data-analysis
      - missing-values
      - feature-selection

  - id: q21
    title: "Q21 — Only the loans that were approved"
    text: |
      The warehouse holds the loans the bank currently has on its books. Every applicant the old rules **rejected** is absent from the file.

      What is this problem called, and can it be fixed in code?
    options:
      - label: "A"
        text: |
          Selection bias — the model learns the feature–default relationship only among people the old rules let through, and no code change recovers applicants whose outcomes were never observed
        correct: true
        why: |
          The missing group has no labels, anywhere, in any system. Nothing you can write recovers an outcome that never happened.
      - label: "B"
        text: |
          Class imbalance — the rejected applicants are simply the under-represented class, and `class_weight="balanced"` restores the balance without any need for new data
        correct: false
        why: |
          Imbalance is about the ratio of defaults to non-defaults *inside* the data you have. This is about a group that is not in the data at all, with no labels to weight.
      - label: "C"
        text: |
          Survivorship bias — fixed by weighting the surviving loans by the historical approval rate, which reconstructs the original applicant population
        correct: false
        why: |
          The family of bias is right and the fix is not. Reweighting requires knowing the outcome the rejected applicants *would* have had, and by construction nobody does.
      - label: "D"
        text: |
          Sampling error — 1,200 customers is simply too small to represent the applicant pool, so the fix is a larger extract from the same warehouse
        correct: false
        why: |
          A larger extract from the same warehouse is a larger sample of *approved* loans. Every additional row reproduces the same exclusion.
    solution: |
      The notebook's own markdown says it out loud and then does nothing with it:

      > *(The warehouse stores approved loans only.)*

      The training data describes the relationship between features and default **conditional on having been approved by the old rules** — rules that screen on credit score, debt-to-income and employment history, which are the same signals the model reads. So the sample is filtered on exactly the space the model has to generalise across.

      **Why no code change fixes it.** For a rejected applicant there is no `default` value — not missing, *non-existent*. The loan was never issued, so the outcome never occurred. Imputation, reweighting, resampling and synthetic data all require a target to work from.

      **What actually helps**, all of it a business decision rather than a commit:

      - **Reject inference** — modelling the missing outcomes from bureau performance on loans those applicants took elsewhere. Partial, and assumption-heavy.
      - **A randomised approval slice** — approving a small, deliberately random set of borderline applications to observe what happens. It costs real money, in defaults, and it is the only way to actually buy the missing information.
      - **Restricting the model's scope** — stating explicitly that it is valid only on applicants resembling the approved population, and routing everyone else to a human.

      > [!success] Answer — **A**

      > [!note] One of two defects code cannot touch
      > The other is the label definition: loans observed for 3–8 months are all judged by one rule, with no fixed outcome window. That needs a business decision about what "default" means, not a patch. Knowing which defects are code-fixable is itself examinable.
    related_terms:
      - correlation-vs-causation
      - supervised-learning
      - model-selection

  - id: q22
    title: "Q22 — 'Both populations are just people who applied'"
    text: |
      A colleague accepts the selection point but argues it is not blocking:

      > "In production the model only ever sees applicants. It was trained on approved loans and it will score new applicants — both are just 'people who applied'. The bias washes out."

      Is that right?
    options:
      - label: "A"
        text: |
          Yes — the exclusion happened at approval, not at application, so the applicant population is identical on both sides and only the label is affected
        correct: false
        why: |
          The filter was applied *to* applicants, using credit score, debt-to-income and employment history — the same information the model reads. The training rows are a non-random slice of the applicant space.
      - label: "B"
        text: |
          Yes in the short term, but it becomes a problem within a year, once the only loans entering the warehouse are the ones this model approved
        correct: false
        why: |
          The feedback loop is real and is a *second* problem. It does not rescue day one: the model is extrapolating on the very first application it scores.
      - label: "C"
        text: |
          No — the training rows were filtered by the old rules using the very features the model reads, so on the applicants those rules rejected it extrapolates rather than predicts
        correct: true
        why: |
          The model has no evidence at all about the region of feature space the old rules excluded, and that region is where it will be asked to overturn them.
      - label: "D"
        text: |
          No — the label is unobservable for rejected applicants, which makes the target variable undefined and the entire exercise invalid
        correct: false
        why: |
          Too strong. The label is perfectly well defined for the loans that *were* issued. The problem is which loans those are, and it narrows the model's valid scope rather than voiding it.
    solution: |
      The argument sounds right because it swaps two populations that are genuinely different:

      | | Who is in it |
      |---|---|
      | **Training rows** | applicants **approved** by the old rules, with observed outcomes |
      | **Production traffic** | **all** applicants, including everyone the old rules would have turned away |

      The bank's stated reason for building this at all is the suspicion that *"it is rejecting customers who would have repaid"*. Those customers are, by definition, absent from the training data. The model is being asked to answer a question about a population it has never seen a single example of.

      Statistically: it **interpolates** where the old rules approved and **extrapolates** everywhere else — and extrapolation from a tree ensemble is especially unreliable, since a forest simply returns the value of the nearest region it did observe.

      > [!success] Answer — **C**

      > [!warning] And then it compounds
      > Deploy it and next year's warehouse contains only the loans *this model* approved. The training data for version two is filtered by version one, the excluded region grows, and the bias tightens with each retrain. Breaking that loop requires deliberately approving some applications the model would reject — a cost the business has to agree to carry.
    related_terms:
      - supervised-learning
      - model-selection
      - correlation-vs-causation

  - id: q23
    title: "Q23 — On what basis do you choose?"
    text: |
      The pipeline reports about **99%** for the Random Forest and **98%** for the neural network, then recommends the network *"because deep learning is the more advanced technology"*.

      What is the right basis for choosing between two models?
    options:
      - label: "A"
        text: |
          The higher test accuracy, applied consistently — which on these numbers selects the Random Forest, making the recommendation an arithmetic error rather than a methodological one
        correct: false
        why: |
          Right that the recommendation contradicts its own printout, wrong that accuracy should decide. On a 14% base rate accuracy mostly measures the majority class.
      - label: "B"
        text: |
          Criteria agreed before the numbers are seen — defaulters caught at the chosen threshold, money per error type, explainability, running cost, segment stability — with a one-point gap treated as noise
        correct: true
        why: |
          Fixing the criteria in advance is what stops the choice being rationalised backwards from whichever number came out highest.
      - label: "C"
        text: |
          Whichever model the regulator will accept without qualification, since explainability is a hard constraint and performance is only negotiable within it
        correct: false
        why: |
          Explainability is a hard constraint, which means it **screens** the candidate set. It does not choose within it — once two models both satisfy the regulator, something else must decide.
      - label: "D"
        text: |
          ROC-AUC, since it is threshold-independent, together with training time, since the bank will have to retrain the chosen model every month
        correct: false
        why: |
          Both are real criteria and neither is sufficient. AUC never says how many defaulters you catch at your cutoff; training time is trivial next to the cost of a missed default.
    solution: |
      The criteria a lending business should actually commit to, **written down before the results are opened**:

      | Criterion | The question it answers |
      |---|---|
      | **Defaulters caught** at the deployed threshold | how much of the loss do we prevent? |
      | **Cost per error type** | what do the false positives and false negatives cost, in shekels? |
      | **Explainability** | can we give the regulator a reason for each rejection? |
      | **Stability across segments** | does it behave the same for the self-employed, for small loans, for thin files? |
      | **Cost to run and maintain** | retraining, monitoring, the people who own it |
      | **Uncertainty** | is the difference between the candidates bigger than the noise? |

      On the corrected evaluation the two models come in at **36%** and **37%** defaulter-recall — a tie inside the noise of a single split. Every remaining criterion favours the forest, and the review report's actual candidate is [[logistic-regression|logistic regression]]: comparable performance, and the only one of the three that satisfies the regulator out of the box.

      "Deep learning is the more advanced technology" is not a criterion at all. It is a statement about the tool, in a decision that is about the outcome.

      > [!success] Answer — **B**

      > [!tip] The discipline being tested
      > Criteria after numbers is not choosing, it is justifying. The reason this is examinable is that it is the single most common failure in real model-selection meetings.
    related_terms:
      - model-selection
      - precision-and-recall
      - logistic-regression
      - auc

  - id: q24
    title: "Q24 — A y-axis from 0.90 to 1.00"
    text: |
      ```python
      fig.update_yaxes(range=[0.90, 1.00])
      ```

      Why is the comparison chart misleading?
    options:
      - label: "A"
        text: |
          Because a bar chart is the wrong form for two numbers — a table would state 0.9871 and 0.9817 plainly, with no visual encoding to distort
        correct: false
        why: |
          A table would be clearer, but the form is not the objection. The same two numbers in the same bar chart on a full axis would be honest.
      - label: "B"
        text: |
          Because plotly would have started the axis at zero by default, and overriding an accessible default is a presentation error rather than a substantive one
        correct: false
        why: |
          The override is the mechanism, not the reason. Calling it presentation misses that the chart argues for a decision the numbers do not support.
      - label: "C"
        text: |
          Because both bars are drawn in the same colour, so the eye reads them as comparable when they come from two model families measured in different ways
        correct: false
        why: |
          The two models are measured identically — same test rows, same metric, same code path. Colour is not the problem.
      - label: "D"
        text: |
          Because a bar's length is read as its value, so starting at 0.90 inflates a half-point gap — while pushing the only baseline that matters, 86%, off the chart, with no uncertainty shown
        correct: true
        why: |
          Three compounding failures: exaggerated difference, absent baseline, absent error bars — and the chart is what the go/no-go meeting will actually look at.
    solution: |
      Three problems, compounding:

      1. **A truncated axis exaggerates.** A bar chart implies a zero baseline; a bar's *length* encodes its value. Rendering 0.9871 and 0.9817 on a 0.90–1.00 axis makes a **0.5-point** difference occupy about 5% of the plot height — a visual gap roughly **ten times** the real one.
      2. **The baseline is off the chart.** The meaningful comparison is the 86% do-nothing rule. On a full axis both bars would sit just above a line that requires no model at all; at 0.90–1.00 that line does not exist.
      3. **There are no error bars.** One split, no cross-validation, and a one-point difference well inside the variation of a different random seed. The chart presents noise as a finding.

      **The honest version:** full axis from 0, a horizontal line at 0.86 labelled *"approve everyone"*, several metrics rather than one, and intervals from repeated grouped splits.

      > [!success] Answer — **D**

      > [!warning] Why this question carries weight
      > This chart is the artefact the decision-makers see. Everything else in the pipeline is a defect in the work; the chart is a defect in the **argument**, and it is pointed at the people with the authority to say yes.
    related_terms:
      - accuracy
      - model-selection
      - histograms

  - id: q25
    title: "Q25 — The go/no-go"
    text: |
      The decision is yours. Which position is defensible on what this pipeline actually shows?
    options:
      - label: "A"
        text: |
          No-go — and the reason is not the accuracy figure; nothing here has been measured on data the models had not seen, so there is no number to approve or reject, and the work required is a rebuild rather than a tuning exercise
        correct: true
        why: |
          Every reported number is contaminated by leaked columns and a split that shares customers. There is no evidence in the pack, in either direction.
      - label: "B"
        text: |
          No-go on the network, go on the Random Forest — it scores higher, it is the more explainable option, and it can run in shadow mode while the leakage is investigated
        correct: false
        why: |
          The forest is the better *candidate*, and shadow mode is the right eventual step. But its 99% is measured on rows it has effectively already seen, using columns that will not exist at decision time — there is nothing yet to shadow.
      - label: "C"
        text: |
          Conditional go, with the threshold moved off 0.5 to reflect the ten-to-one cost asymmetry, and the leakage tracked as a monitoring item after launch
        correct: false
        why: |
          The threshold work is necessary and cannot come first. A threshold is chosen on a probability that means something, and these probabilities are produced by reading the outcome.
      - label: "D"
        text: |
          Go — 98% against an 86% baseline is a genuine twelve-point improvement, and holding it back over methodology costs the bank money every week it is not live
        correct: false
        why: |
          The twelve points *are* the leak. Remove it and split by customer, and the expected result is accuracy near the baseline with defaulter-recall in the mid-30s — a different proposition, and one nobody has costed.
    solution: |
      What the pack contains: two numbers, produced by models that were given two columns describing what happened **after** the loan was issued, evaluated on rows belonging to customers they were trained on, summarised by a chart with the baseline cropped off the bottom.

      What the pack does not contain: a single measurement of how many defaulters the system would catch.

      > [!danger] The one sentence
      > **Everything the notebook reports is measured wrong, and the model does not answer the question that was asked.**

      **What has to be true before this comes back:**

      1. One row per **application**, with values as at submission day.
      2. Application-day features only — `avg_days_late`, `collections_flag` and `month` gone.
      3. `income` traced to source and converted to one documented unit.
      4. Split **by customer**, stratified, into train / validation / test.
      5. Imputation and scaling fitted on training rows only, inside a `Pipeline`.
      6. Hyperparameters chosen on validation, never on test.
      7. Confusion matrix, recall, precision and AUC — reported against the **86%** baseline.
      8. A threshold derived from the bank's own cost of each error, not a library default.
      9. Model chosen on the criteria agreed in advance, with the regulator's constraint applied first.
      10. Shadow mode before live traffic, drift monitoring after, and a plan for the approved-only bias.

      > [!success] Answer — **A**

      > [!note] No-go is not a verdict on the team
      > It is a verdict on **this evidence**. The pipeline is clean, readable, conventional code that runs end to end — and none of that is evidence it works. Distinguishing "this code ran" from "this model will make the bank money" is, in the brief's own words, the whole point of the exercise.
    related_terms:
      - data-leakage
      - model-selection
      - accuracy
---

> [!info] What this paper is
> A **practice mock** in the format of the real exam — 25 multiple-choice questions on the same notebook, `loan_pipeline.ipynb`. It is not the lecturer's paper. It is built directly on the **fifteen preparation questions** in the problem brief, the ones the brief says *"cover everything the exam covers"*.
>
> - 📓 [`loan_pipeline.ipynb`](/papers/machine-learning/loan_pipeline.ipynb)
> - 📄 [The problem brief + 15 preparation questions](/papers/machine-learning/loan-pipeline-brief-and-prep-questions.pdf)
> - ✍️ [[prep-questions-loan-pipeline|The 15 prep questions, worked in full]] (short answer)
> - 📝 [[pp-01-sample-exam-25-questions|The lecturer's sample paper]] · 📖 [[loan-pipeline-code-walkthrough|Code walkthrough & defect catalogue]]

## The territory this paper covers

Where mocks A–D drill the pipeline, this one drills the **concepts underneath it** — the theory the exam assumes you already have, tested through the notebook rather than in the abstract.

| Prep question | Questions here |
|---|---|
| 1 Overfitting and underfitting | 1, 2 |
| 2 Bias | 3 |
| 3 Accuracy and baselines | 4, 5 |
| 4 Regression vs classification | 6 |
| 5 Deep learning | 7 |
| 6 Ensembles | 8 |
| 7 Parameter vs hyperparameter | 9 |
| 8 Train, validation and test | 10, 11 |
| 9 Data leakage | 12, 13 |
| 10 What a row represents | 14, 15 |
| 11 Missing values | 16, 17 |
| 12 Order of operations | 18 |
| 13 Reading the data | 19, 20 |
| 14 How the data was collected | 21, 22 |
| 15 Choosing between two models | 23, 24, 25 |

Every one of the fifteen appears. If you can answer all twenty-five, the brief's claim is that you are prepared.

## How the options were written

> [!warning] The usual shortcuts will not work
> - **The correct option is not the longest.** Options are matched for length within each question, and several correct answers are the shortest on offer.
> - **Distractors are not strawmen.** Every wrong option is something a competent analyst might genuinely say — most of them are *true about something*, just not about what was asked.
> - **"Is that right?" carries no signal.** Six questions put a claim in a colleague's mouth. In four the right answer rejects it (1, 6, 10, 22); in two the right answer endorses it (7, 11). Answering "no" on reflex loses marks in both directions.
> - **Several distractors are entirely true and entirely beside the point** (10D, 18C, 22B, 24A). Recognising relevance is part of the mark.
> - **Two distractors reach the right verdict by an invented mechanism** (11D, 21C). Getting there for the wrong reason is not getting there.
> - **Q3 offers four real problems with this pipeline** and asks which one the *word* refers to. Being right about the notebook and wrong about the vocabulary scores zero.

The near-misses are the point. In Q4, knowing the 86% baseline gets you to option A — which is still wrong, because it concedes twelve points that do not exist. In Q16, spotting the ordering error gets you to D. In Q15, knowing that deduplication is the right idea gets you to C. Each of those is a candidate who has done the reading and stopped one step early.

## Suggested use

Work the [[prep-questions-loan-pipeline|fifteen prep questions]] as short answer **first** — write them out, in your own words, before you look at anything here. Then sit this closed-book and mark yourself by block:

- **Q1–Q11 (concepts)** — if you drop marks here, the problem is theory, and re-reading the notebook will not fix it.
- **Q12–Q20 (the concepts applied to this data)** — drops here mean you know the definitions but have not read the code closely enough to spot them in the wild.
- **Q21–Q25 (judgement)** — drops here are the expensive ones. This is the part of the exam that is actually about owning the decision.

> [!warning] These answers are derived, not official
> No answer key exists for this notebook. Every answer here is grounded line by line in the code, the data generator and the brief, with the working shown **so you can check it rather than trust it** — which the lecturer says is precisely the habit the exam rewards.

## Related

- 📝 [[pp-01-sample-exam-25-questions|Sample exam — 25 questions]] (the lecturer's)
- 📝 [[pp-02-mock-a-data-and-collection|Mock A — data and collection]]
- 📝 [[pp-03-mock-b-preprocessing-and-evaluation|Mock B — preprocessing and evaluation]]
- 📝 [[pp-04-mock-c-models-and-methodology|Mock C — the two models and methodology]]
- 📝 [[pp-05-mock-d-deployment-and-judgement|Mock D — deployment, governance and judgement]]
- 📖 [[loan-pipeline-code-walkthrough|Code walkthrough & defect catalogue]] · 🗣️ [[loan-pipeline-plain-english|The notebook in plain English]]
