---
title: "Mock Paper C — The Two Models and Methodology"
type: past-paper
status: worked-solution
exam: "Mock Paper C (practice)"
course: "Machine Learning — Economics Track"
semester: 2
year: 2
tags:
  - machine-learning
  - past-paper
  - mock-exam
  - loan-pipeline
  - model-selection
  - random-forest
aliases:
  - Mock C Machine Learning
  - ML Mock Paper C
subject: machine-learning
in_scope: true
questions:
  - id: q1
    title: "Q1 — Was the forest handicapped by standardisation?"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Both models were trained on the same standardised matrix, which makes the comparison between them unfair to the Random Forest."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — the forest was handicapped, because standardising compresses the credit-score range the trees would split on
        correct: false
        why: |
          Standardising is a linear rescaling: it moves every value by the same rule, so the ordering of rows is untouched and no range is "compressed" in any sense a tree can feel.
      - label: "B"
        text: |
          Valid — the network benefits from scaled inputs while the forest gains nothing, so the shared matrix flatters the network
        correct: false
        why: |
          The first half is true and the conclusion does not follow: scaling helps the network relative to *not* scaling, but it costs the forest nothing, so the forest is not disadvantaged.
      - label: "C"
        text: |
          Not valid — both models were trained on identical inputs, so by construction neither can have been treated unfairly here
        correct: false
        why: |
          Identical inputs do not guarantee fairness — a shared transformation can help one model class and hurt another. The right answer needs the reason, not the symmetry.
      - label: "D"
        text: |
          Not valid — scaling is irrelevant to a tree, so the shared matrix disadvantages neither; the unfairness lies elsewhere
        correct: true
        why: |
          A [[decision-tree|tree]] splits on rank order, and standardisation is monotonic, so every candidate split maps to an equivalent one. The comparison is broken for other reasons entirely.
    solution: |
      The line under discussion:

      ```python
      X = StandardScaler().fit_transform(X)
      ```

      **Why a tree does not care.** A tree asks one kind of question at every node: *is this feature below some cut?* Standardising replaces $x$ with $(x - \mu)/\sigma$, which is strictly increasing. Any cut $c$ on the raw scale becomes a cut $(c - \mu)/\sigma$ on the scaled one, and **exactly the same rows fall either side**. The tree that gets grown is identical. Trees are scale-invariant, so [[feature-scaling|scaling]] them is pointless rather than damaging.

      **Why a network does care.** Dense layers multiply inputs by weights and add them. If `loan_amount` runs to 300,000 while `self_employed` is 0 or 1, the raw gradients for those two weights differ by five orders of magnitude, and [[gradient-descent]] crawls. Scaling is a real prerequisite for the network — it just is not a favour done at the forest's expense.

      Option B is the trap for people who know half of this. It correctly spots the asymmetry (one model needs scaling, the other does not) and then draws the wrong conclusion from it. "Helps A, does nothing to B" is not the same as "handicaps B".

      > [!success] Answer — **D**
      > Scaling is irrelevant to a tree, so the shared matrix disadvantages neither model.

      > [!tip] What *is* unfair about this comparison
      > Not the scaling — the fact that both models were fed the same leaky columns, evaluated on a split that shares customers, and compared on a single [[accuracy]] number. The comparison is worthless, but not because of `StandardScaler`.
    related_terms:
      - feature-scaling
      - decision-tree
      - random-forest

  - id: q2
    title: "Q2 — Nobody looked at which features the forest used"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Nothing in the notebook reports which features the forest actually relied on, even though scikit-learn computes that for free."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — feature importances are unavailable for a forest once its inputs have been standardised in advance
        correct: false
        why: |
          Importances are computed from the splits the trees made, whatever scale the inputs were on. Standardising has no bearing on whether they can be read.
      - label: "B"
        text: |
          Valid — `rf.feature_importances_` is never read, and one line of it would have shown `avg_days_late` dominating everything
        correct: true
        why: |
          The attribute exists on every fitted forest and costs nothing. Printing it would have exposed the leak on the first day rather than at the exam.
      - label: "C"
        text: |
          Valid — but importances matter only for the network, whose dense layers are otherwise impossible to interpret at all
        correct: false
        why: |
          Backwards. `feature_importances_` is a forest attribute; a network needs separate tooling. And the forest is the model that most repays inspection here.
      - label: "D"
        text: |
          Not valid — importances describe the training data, so they say nothing useful about a model bound for production
        correct: false
        why: |
          Importances describe *the fitted model's reliance on each column*, which is precisely what an auditor and a leak-hunter both need.
    solution: |
      The forest is fitted and immediately reduced to one scalar:

      ```python
      rf = RandomForestClassifier(n_estimators=100, random_state=42)
      rf.fit(X_train, y_train)
      acc_rf = accuracy_score(y_test, rf.predict(X_test))
      ```

      Between those last two lines sits a free diagnostic nobody ran. A fitted forest exposes `feature_importances_` — for each of the seven feature columns, how much that column reduced [[gini-impurity|Gini impurity]] across all 100 trees, weighted by how many samples reached each split.

      On this data the ranking would be lopsided and obvious. `avg_days_late` is drawn as `rng.uniform(2, 35)` when `default` is 1 and `rng.exponential(2.5)` when it is 0 — two almost non-overlapping distributions. A single split near 10 days separates most defaulters from most non-defaulters in one move, so that column would absorb a large share of the total impurity reduction, with `collections_flag` behind it and `credit_score` and `loan_amount` trailing.

      > [!success] Answer — **B**
      > The forest's importances were never printed, and they would have made the leak visible immediately.

      > [!tip] The cheapest leak detector there is
      > **A feature that dominates the importances far beyond what domain sense allows is a leakage alarm, not a triumph.** Before celebrating a high score, look at what the model is leaning on. If one column carries the model, ask where that column comes from — see [[data-leakage]].
    related_terms:
      - random-forest
      - gini-impurity
      - data-leakage

  - id: q3
    title: "Q3 — A network far larger than the dataset"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The network is fitting far more weights than the training data has rows."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — extra capacity is harmless because the network can always drive the unused weights towards zero itself
        correct: false
        why: |
          Nothing pushes unused weights to zero unless you ask for it. There is no [[regularization|weight decay]], no dropout, and no early stopping in this `fit` call.
      - label: "B"
        text: |
          Valid — but the fix is more epochs, so the oversized network has time to settle into a stable solution
        correct: false
        why: |
          More epochs on an oversized network with no validation monitoring drives it further into memorisation, not towards stability.
      - label: "C"
        text: |
          Valid — roughly 134,000 weights are fitted to about 5,200 training rows of seven features, with nothing restraining them
        correct: true
        why: |
          The arithmetic is decisive: the model has more than twenty free parameters per training row, and no mechanism in the code limits how it uses them.
      - label: "D"
        text: |
          Not valid — 256 units per layer is modest by modern standards, and a depth of three is shallow for tabular work
        correct: false
        why: |
          "Modest by modern standards" imports intuitions from image and language models trained on millions of examples. Capacity is only meaningful relative to the data you have.
    solution: |
      Count the weights. Seven feature columns survive `drop(columns=["default", "customer_id"])`, so the input width is 7:

      | Layer | Weights | Biases | Total |
      |---|---|---|---|
      | Dense(256) from 7 inputs | 1,792 | 256 | 2,048 |
      | Dense(256) | 65,536 | 256 | 65,792 |
      | Dense(256) | 65,536 | 256 | 65,792 |
      | Dense(1) output | 256 | 1 | 257 |
      | **Total** | | | **133,889** |

      Against that: 6,557 rows, of which 80% go to training — about **5,245 rows**. That is roughly **twenty-five free parameters for every training row**, and the rows are not even independent (3–8 of them belong to the same customer, so the effective sample size is closer to 1,200).

      Capacity on that scale is not automatically fatal — it is fatal *when nothing restrains it*:

      ```python
      nn.fit(X_train, y_train, epochs=30, batch_size=64, verbose=0)
      ```

      No `validation_data`, no `callbacks`, no dropout layers, no kernel regulariser. The network has enough room to memorise the training set outright and nothing in the code would report it.

      > [!success] Answer — **C**
      > About 134,000 weights against roughly 5,200 training rows, with no regularisation of any kind.

      > [!warning] Capacity is a ratio, not a number
      > Three 256-unit layers is small for ImageNet and enormous for seven tabular columns. The question is never "is this network big?" but "is it big **relative to the information available**?" See [[bias-variance-tradeoff]] and [[overfitting]].
    related_terms:
      - overfitting
      - bias-variance-tradeoff
      - regularization

  - id: q4
    title: "Q4 — Does a sigmoid output give you probabilities?"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The network's sigmoid output means its predictions are already probabilities the bank can price loans against."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — the sigmoid guarantees an output between zero and one, which is not a trustworthy probability
        correct: true
        why: |
          Range and calibration are different properties. A number in [0, 1] is only a probability if, among cases scored 0.2, roughly 20% actually default.
      - label: "B"
        text: |
          Valid — sigmoid outputs are probabilities by construction, so they can be priced against without further checking
        correct: false
        why: |
          "By construction" only delivers the range. Overconfident networks routinely output 0.99 for cases that default a third of the time.
      - label: "C"
        text: |
          Not valid — the forest's votes are calibrated probabilities, whereas the network's sigmoid is only a ranking score
        correct: false
        why: |
          Neither is calibrated for free. Forest vote shares are typically pulled towards the middle; both models need checking against outcomes.
      - label: "D"
        text: |
          Valid — but calibration matters only once the threshold moves away from the default value of one half
        correct: false
        why: |
          Calibration matters most *because* the threshold must move. If the outputs are miscalibrated, a cost-derived threshold lands in the wrong place.
    solution: |
      The output layer and the decision rule:

      ```python
      layers.Dense(1, activation="sigmoid"),
      ...
      acc_nn = accuracy_score(y_test, (nn.predict(X_test, verbose=0) > 0.5).astype(int))
      ```

      The [[sigmoid-function|sigmoid]] $\sigma(z) = 1/(1 + e^{-z})$ maps any real number into $(0, 1)$. That is a **range guarantee and nothing more**. Training with `binary_crossentropy` does push the outputs in the direction of probabilities — the loss is minimised by the true conditional probability — but only *in the limit of enough data and a well-specified model*. With 134,000 weights on 5,200 rows and 30 unmonitored epochs, the network is far more likely to be driven towards confident 0s and 1s than towards honest frequencies.

      Why the bank should care: the [[precision-and-recall|threshold]] has to be set from the cost asymmetry (a missed defaulter costs roughly the principal; a wrongly rejected applicant costs the margin — about 10x apart). Choosing a threshold means choosing a point on the probability scale. If the scale is distorted, the point you pick is not the point you meant.

      > [!success] Answer — **A**
      > Sigmoid gives you the range zero to one. Calibration is a separate property, and it must be measured.

      > [!tip] How you would actually check
      > Bucket the held-out predictions into deciles and plot predicted rate against observed rate — a **reliability curve**. On the diagonal means calibrated. Off it means recalibrate (Platt scaling or isotonic regression) before any threshold is chosen. See Q15.
    related_terms:
      - sigmoid-function
      - classification
      - precision-and-recall

  - id: q5
    title: "Q5 — Are the hundred trees all the same tree?"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The forest's hundred trees are effectively a hundred copies of the same tree, since they are all fitted to the same table."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — all hundred trees are fitted to the same table, so they converge on very nearly the same splits
        correct: false
        why: |
          They are not fitted to the same table. Each tree gets its own bootstrap resample, and each split considers only a random subset of features.
      - label: "B"
        text: |
          Not valid — each tree sees a bootstrap resample and a random subset of features at every split, so they differ
        correct: true
        why: |
          These are the two mechanisms that make a forest an [[ensemble-methods|ensemble]] rather than a hundred redundant copies of one model.
      - label: "C"
        text: |
          Valid — but only because the random state was fixed, which forces every tree down an identical path
        correct: false
        why: |
          `random_state=42` seeds the sequence so the *whole forest* is reproducible. It does not make the trees within it identical to each other.
      - label: "D"
        text: |
          Not valid — the trees differ because each is grown to a different depth, chosen at random for each tree
        correct: false
        why: |
          Right conclusion, invented mechanism. Depth is not randomised; by default every tree grows until its leaves are pure.
    solution: |
      Averaging only helps if the things being averaged make **different mistakes**. A hundred identical trees would average to exactly one tree. A [[random-forest]] earns its variance reduction from two deliberate injections of randomness:

      **1. Bagging (bootstrap aggregating).** Each tree is fitted to a sample of $n$ rows drawn *with replacement* from the $n$ training rows. Roughly 63% of the original rows appear in any given bootstrap; the rest are duplicated or absent. So every tree sees a different dataset.

      **2. Random feature subsetting.** At *every* split, the tree considers only a random subset of features — scikit-learn's default for a classifier is $\sqrt{p}$, so with $p = 7$ here that is **2 or 3 features per split**. Even a tree that dominates the impurity ranking cannot be chosen at a node where it was not offered.

      That second mechanism is the one students forget, and it is the one that matters most here. Without it, `avg_days_late` would win the root split in all 100 trees and the forest really would be near-identical copies. With it, roughly two-thirds of nodes never see that column and must find structure elsewhere.

      > [!success] Answer — **B**
      > Bootstrap resampling plus random feature subsetting at each split make the trees genuinely different.

      > [!tip] Why decorrelation is the whole point
      > Averaging $k$ estimators with variance $\sigma^2$ gives variance $\sigma^2/k$ **only if they are uncorrelated**. The more correlated the trees, the less the averaging buys you. Feature subsetting exists purely to force decorrelation.
    related_terms:
      - random-forest
      - ensemble-methods
      - decision-tree

  - id: q6
    title: "Q6 — Can anyone else reproduce these results?"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Nobody else can reproduce these numbers, because both models involve randomness."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — a bootstrap resample cannot be reproduced across different machines, so the forest's reported score will drift
        correct: false
        why: |
          A seeded pseudo-random generator produces the same sequence on any machine running the same library version. Nothing about bootstrapping is machine-dependent.
      - label: "B"
        text: |
          Valid — but only the network is affected, since Keras initialises its weights afresh on every single training run
        correct: false
        why: |
          `keras.utils.set_random_seed(7)` is called in the setup cell precisely so weight initialisation and shuffling repeat.
      - label: "C"
        text: |
          Not valid — every source of randomness is seeded, so the run repeats exactly; generalisation is what does not
        correct: true
        why: |
          Four seeds are set. The 98% is stable, which makes it consistently wrong rather than a fluke — and reproducibility is not validity.
      - label: "D"
        text: |
          Not valid — reproducibility follows from pinning the library versions, so seeding the run was never required here
        correct: false
        why: |
          Pinned versions fix the *algorithm*; they do not fix the random draws. Without a seed the same code gives a different answer every run.
    solution: |
      Every stochastic step in this notebook is seeded:

      ```python
      rng = np.random.default_rng(7)          # the data generator
      keras.utils.set_random_seed(7)          # weight init, shuffling, dropout
      ...
      train_test_split(X, y, test_size=0.2, random_state=42)
      RandomForestClassifier(n_estimators=100, random_state=42)
      ```

      Run it twice and you get the same 98% twice. Hand it to a classmate and they get the same 98%.

      The point worth taking away is that **this makes the result worse, not better**. A wrong number that fluctuates at least announces its own instability. A wrong number that is bit-for-bit stable looks like a solid finding. Reproducibility is a property of the *code*; validity is a property of the *measurement*, and these two are entirely independent.

      There is also a genuine concern hiding nearby that this one is not making: nothing varies the seed to see how much the reported scores *would* move. One split, one seed, one number per model — see Q17.

      > [!success] Answer — **C**
      > Everything is seeded, so the run repeats exactly. What does not repeat is anything about generalisation.

      > [!warning] The distractor shape to recognise
      > A concern can be **false about the code** while pointing at a real neighbouring problem. The exam rewards you for saying "not valid as stated" and then naming the actual issue, rather than accepting a plausible criticism because its neighbourhood is right.
    related_terms:
      - train-test-split
      - random-forest

  - id: q7
    title: "Q7 — Two complex models and no simple one"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Neither model was ever compared against something simple."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — the coin flip named in the printout serves perfectly well as the reference point for both models
        correct: false
        why: |
          A coin flip is the baseline for a balanced problem. Here "approve everyone" scores ~86%, which is the reference that matters.
      - label: "B"
        text: |
          Valid — but the missing baseline is a second neural network, trained with a different architecture for comparison
        correct: false
        why: |
          Another network is another complex model. A baseline is meant to be simpler than the candidates, not a third contender.
      - label: "C"
        text: |
          Not valid — baselines belong to regression problems, whereas a classifier is judged against its majority class instead
        correct: false
        why: |
          The majority-class rule *is* a baseline, and it is missing from the notebook too. The distinction drawn here does not exist.
      - label: "D"
        text: |
          Valid — nothing simple was fitted, so nobody knows whether either model beats a plain logistic regression here
        correct: true
        why: |
          With seven features and a mostly monotone risk relationship, a [[logistic-regression|logistic regression]] is a serious candidate, not a formality.
    solution: |
      The notebook fits two models, both complex, and compares them only to each other:

      ```python
      fig = go.Figure(go.Bar(x=["Random Forest", "Neural Network"], y=[acc_rf, acc_nn]))
      print("Both models are around 98% - far better than a 50/50 coin flip.")
      ```

      Two things are missing, and they are different things:

      | Missing reference | What it tells you |
      |---|---|
      | **Majority-class rule** ("approve everyone") | ~86% accuracy, 0% of defaulters caught — the floor any model must clear |
      | **A simple fitted model** ([[logistic-regression\|logistic regression]], one shallow tree) | Whether the complexity of a forest or a network is buying anything at all |

      The second is the subject of this question and it is not a formality. Look at the true data-generating process:

      ```python
      risk = -3.1 - 0.011 * (score - 680) + 1.6 * loan / (income_m * 12) \
             - 0.5 * (not self_emp) + rng.normal(0, 0.4)
      ```

      That is **a linear function passed through a sigmoid** — which is exactly what a logistic regression is. On honest features, a logistic regression is not merely a baseline here; it is arguably the correctly-specified model, and it is fully explainable to a regulator by construction.

      > [!success] Answer — **D**
      > Nothing simple was fitted, so nobody can say whether either complex model earns its complexity.

      > [!tip] The rule for baselines
      > Always fit the dumbest defensible thing first. If your sophisticated model cannot clearly beat it, you have learned something valuable and cheap: **the complexity is not paying for itself**.
    related_terms:
      - logistic-regression
      - model-selection
      - accuracy

  - id: q8
    title: "Q8 — One configuration per model, chosen once"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Each model was given exactly one configuration, and no alternative was ever tried."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — one tree count, one architecture, one epoch count, chosen once and never compared against alternatives
        correct: true
        why: |
          Every setting in the notebook is a first guess that was never revisited, and the comments say so explicitly.
      - label: "B"
        text: |
          Not valid — scikit-learn and Keras defaults are chosen by experts, so they represent a searched configuration already
        correct: false
        why: |
          Library defaults are chosen to be safe across every possible dataset, which is precisely why they are rarely best for yours.
      - label: "C"
        text: |
          Valid — but the omission is minor, because tuning rarely moves a score by more than a percentage point
        correct: false
        why: |
          Tuning can move a network's performance enormously, and in any case the size of the effect is unknown until someone measures it.
      - label: "D"
        text: |
          Not valid — the random states were varied between the two models, which amounts to a small search already
        correct: false
        why: |
          The random states were not varied — `random_state=42` appears twice — and a seed is not a hyperparameter you search over anyway.
    solution: |
      The notebook's own comments confess it:

      > *(model parameters: `n_estimators=100`, default settings are fine)*
      >
      > *(model parameters: 3 layers, 30 epochs, no tuning needed)*

      Set out what was fixed by fiat and never questioned:

      | Setting | Value | Was anything compared? |
      |---|---|---|
      | `n_estimators` | 100 | no |
      | Tree depth, min samples per leaf | scikit-learn defaults | no |
      | Hidden layers | 3 x 256 | no |
      | Epochs | 30 | no |
      | `batch_size` | 64 | no |
      | Optimiser | `adam`, default learning rate | no |

      Six [[hyperparameter-tuning|hyperparameters]], six unexamined guesses. And there is no mechanism by which they *could* have been searched, because there is no [[validation-set|validation set]] — the split produces train and test only, and searching on the test set would burn it.

      Note carefully what this question is **not** claiming. It is not saying the values are wrong; 100 trees may well be fine. It is saying nobody knows, and "no tuning needed" is an assertion nobody was in a position to make.

      > [!success] Answer — **A**
      > One configuration per model, never compared against any alternative, on a split with nowhere to compare them.

      > [!tip] Parameter or hyperparameter?
      > Ask whether `fit()` changes it. Tree split points and network weights change during fitting — those are **parameters**. `n_estimators`, layer widths, epochs, `batch_size` are typed before fitting and never touched by it — those are **hyperparameters**, and they are your responsibility.
    related_terms:
      - hyperparameter-tuning
      - validation-set
      - model-selection

  - id: q9
    title: "Q9 — 'A forest cannot overfit'"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The forest's score needs no scrutiny, because averaging a hundred trees means a Random Forest cannot overfit."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — averaging a hundred trees removes variance entirely, so the forest's reported score needs no scrutiny
        correct: false
        why: |
          Averaging reduces variance towards a floor set by how correlated the trees are; it does not remove it, and it does nothing about leakage.
      - label: "B"
        text: |
          Not valid — bagging curbs variance, but a forest fed leaky duplicated rows memorises them just as happily
        correct: true
        why: |
          The forest's score is untrustworthy for reasons that have nothing to do with the algorithm's own tendency to overfit.
      - label: "C"
        text: |
          Valid — and the same protection covers the network, since both were trained on exactly the same feature matrix
        correct: false
        why: |
          Bagging is a property of the forest's training procedure, not of the data. The network gets no such protection from sharing a matrix.
      - label: "D"
        text: |
          Not valid — forests overfit more readily than networks, which is why the network scored higher on the test set
        correct: false
        why: |
          The forest scored *higher* in the printout, and a general ranking of which model class overfits more is not something you can assert.
    solution: |
      The claim contains a grain of truth wrapped around a serious error.

      **The grain of truth.** Bagging genuinely does reduce variance. A single unpruned tree grown to pure leaves is a high-variance estimator; averaging 100 of them, each fitted to a different bootstrap and split on a different random feature subset, cancels much of that. This is why forests are unusually forgiving of default settings.

      **The error.** Reduced variance is not immunity, and more importantly it is **the wrong axis entirely for this pipeline**. Two defects make the forest's 98% meaningless regardless of any bagging:

      ```python
      days_late = rng.uniform(2, 35) if default else rng.exponential(2.5)   # computed from the label
      ...
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      ```

      The first hands the forest the answer. The second puts 3–8 rows of the *same customer*, carrying the *same label*, on both sides of the split. No amount of averaging fixes either. Bagging protects you from a model that is too sensitive to its training sample; it offers nothing against a training sample that contains the test answers.

      > [!success] Answer — **B**
      > Bagging curbs variance; it does not make a leaky, customer-contaminated measurement trustworthy.

      > [!warning] "Robust to defaults" is not "robust to bad data"
      > The forest's reputation for working out of the box is real and it is about **hyperparameters**. It says nothing about features, splits, or labels — and those are where this pipeline fails.
    related_terms:
      - random-forest
      - overfitting
      - data-leakage

  - id: q10
    title: "Q10 — Is a Random Forest fully transparent?"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Explainability is a solved problem here — the Random Forest is fully transparent, so you can read the rules straight out of it."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — the forest's decision rules can be printed and handed to compliance exactly as the regulator requires
        correct: false
        why: |
          One tree's rules can be printed. A hundred trees' averaged vote is not a rule set anybody can hand over or read.
      - label: "B"
        text: |
          Not valid — a forest is no more auditable than a network, since both average many opaque internal quantities
        correct: false
        why: |
          Overcorrects. Tree splits are on named features at named thresholds, which is far more interrogable than dense-layer weights.
      - label: "C"
        text: |
          Valid — and the same is true of the network, whose weights can equally be printed and inspected directly
        correct: false
        why: |
          A weight matrix is printable and not interpretable. "You can see the numbers" is not the same as "you can explain the decision".
      - label: "D"
        text: |
          Not valid as stated — one tree reads as rules, a hundred averaged trees do not; what you get is attributions
        correct: true
        why: |
          Keeps the forest's genuine advantage while refusing the overstatement, which is exactly the calibration the regulator question needs.
    solution: |
      Careful here — the exam is testing whether you will over-claim in the direction you already favour.

      **What a single [[decision-tree|decision tree]] gives you.** A path from root to leaf: *credit score below 610, and loan-to-income above 0.4, and no collections flag → reject.* That is a sentence a compliance officer can read, a customer can be told, and an auditor can challenge.

      **What 100 averaged trees give you.** Not that. `rf.predict_proba` is the mean vote across 100 different paths through 100 different trees, and no single path is the reason. What you can honestly produce is:

      - **Global** [[feature-selection|feature importances]] — which columns the model relies on overall.
      - **Per-decision attributions** (TreeSHAP, which is exact and fast for tree ensembles) — how much each feature pushed *this* applicant's score.
      - **A surrogate**: fit one shallow tree to mimic the forest, and read that — but it is an approximation, and you must say so.

      That is still a meaningfully better position than a dense network, where every equivalent explanation is post-hoc and approximate. The correct answer keeps that advantage and refuses the overstatement.

      > [!success] Answer — **D**
      > A single tree reads as rules; an averaged ensemble does not. The honest output is attributions, not a rule set.

      > [!tip] The spectrum, not the binary
      > **Logistic regression** (a coefficient per feature) → **one shallow tree** (readable rules) → **random forest** (exact attributions, no rule set) → **neural network** (approximate post-hoc attributions only). Explainability is a gradient, and pretending otherwise loses you marks in both directions.
    related_terms:
      - decision-tree
      - random-forest
      - feature-selection

  - id: q11
    title: "Q11 — Plan: nobody can justify the activation functions"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The hidden layers use ReLU and the output uses a sigmoid, and nobody on the team can say why."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Replace the sigmoid output with a softmax over two units, the standard formulation for classification problems
        correct: false
        why: |
          Mathematically equivalent for two classes, so it changes nothing measurable. Busywork presented as a fix.
      - label: "B"
        text: |
          Replace ReLU throughout with sigmoid activations, so the whole network is consistent from input to output
        correct: false
        why: |
          Sigmoid hidden layers saturate and their gradients vanish through depth — the specific problem ReLU was introduced to solve.
      - label: "C"
        text: |
          Keep both: sigmoid suits a binary output under cross-entropy, ReLU is a sound hidden default, and search width instead
        correct: true
        why: |
          Correctly identifies that these two choices are defensible and redirects the tuning budget to the settings that actually need it.
      - label: "D"
        text: |
          Drop the activations from the hidden layers so the network stays linear, making it far easier to explain
        correct: false
        why: |
          Stacked linear layers collapse to a single linear map, so you get a logistic regression with 134,000 redundant weights.
    solution: |
      The concern is legitimate — nothing in the notebook justifies anything — but "unjustified" and "wrong" are different verdicts, and a good business owner does not spend budget fixing what is already correct.

      **The output sigmoid is right.** The task is binary, the loss is `binary_crossentropy`, and that pairing is the standard, well-behaved combination: the [[sigmoid-function|sigmoid]] maps to $(0,1)$ and the cross-entropy gradient with respect to the pre-activation simplifies to $\hat{y} - y$, which trains stably.

      **The hidden ReLUs are right.** ReLU is the sensible default for dense hidden layers precisely because it does not saturate for positive inputs, so gradients survive being passed back through three layers.

      **What is genuinely unjustified** is everything option C redirects you towards: why 256 units, why three layers, why 30 epochs, why `batch_size=64`. Those are the settings with no defensible default, and they are the ones nobody searched.

      Option A deserves attention because it is not *wrong* — a two-unit softmax and a one-unit sigmoid produce identical models. It is wrong as a *plan*: it consumes effort, changes no number, and leaves the real gap untouched.

      > [!success] Answer — **C**
      > Both activation choices are already defensible. Spend the tuning budget on width, depth, and the stopping rule.

      > [!tip] Not every unjustified choice is a bad choice
      > Part 2 punishes two opposite errors: defending a defect because it is conventional, and rewriting a convention because nobody documented it. Ask which choices have a **principled default** and which are free parameters someone guessed.
    related_terms:
      - sigmoid-function
      - hyperparameter-tuning
      - logistic-regression

  - id: q12
    title: "Q12 — Plan: no hyperparameter search was ever run"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "No search over hyperparameters was ever run for either model."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Define a small search space per model, search it on a grouped validation split, after removing the leaks
        correct: true
        why: |
          Gets the sequencing right — leaks first, then a search against data that is neither the training set nor the test set.
      - label: "B"
        text: |
          Run a wide random search now over both models, and adopt whichever configuration scores highest on the test set
        correct: false
        why: |
          Searching against the test set consumes it: the winning score becomes an in-sample number, and the search optimises the leak.
      - label: "C"
        text: |
          Search only the network, since the forest's defaults are established and its tree count barely affects results
        correct: false
        why: |
          The forest's depth and leaf-size settings matter a great deal even where the tree count does not. Half a search is not a plan.
      - label: "D"
        text: |
          Skip searching and adopt a published configuration from a comparable lending model in the research literature
        correct: false
        why: |
          Another team's dataset, features, and sample size are not yours. A borrowed configuration is still an unjustified guess.
    solution: |
      Three things have to be true before a search is worth running, and option A has all of them.

      **1. Fix the leaks first.** Tuning is optimisation *against a measurement*. With `avg_days_late` and `collections_flag` still present, a search does not find the best model — it finds **the configuration that exploits the leak most efficiently**. You would be systematically selecting for the defect.

      **2. Search against a grouped validation split.** Not the test set (option B burns it), and not a row-level validation split either — with 3–8 rows per customer, a random validation split shares customers with training and every configuration scores inflated. `GroupShuffleSplit` or `StratifiedGroupKFold` on `customer_id`.

      **3. Keep the space small.** With ~1,200 effective observations, a 500-point grid will find something that looks good by chance. A handful of candidates per model is proportionate:

      | Model | Reasonable space |
      |---|---|
      | Random Forest | `max_depth`, `min_samples_leaf`, `max_features` — a few values each |
      | Neural network | one or two widths, one or two depths, learning rate, with early stopping handling epochs |

      > [!success] Answer — **A**
      > Small space, grouped validation split, and only after the leaky columns are gone.

      > [!warning] Searching harder on broken data makes things worse
      > This is the counter-intuitive part. A more thorough search on a leaking pipeline produces a *more confidently wrong* model, because the search's whole job is to find whatever exploits the measurement best.
    related_terms:
      - hyperparameter-tuning
      - cross-validation
      - validation-set

  - id: q13
    title: "Q13 — Plan: thirty epochs, fixed in advance"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The network trains for exactly thirty epochs with nothing monitoring the run."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Raise the ceiling to three hundred epochs, so the network is certainly given enough time to find its best solution
        correct: false
        why: |
          Without monitoring, a longer run simply travels further past the point of [[overfitting|overfitting]]. It converts one guess into a worse one.
      - label: "B"
        text: |
          Hold out a grouped validation set, monitor its loss, stop when it stops improving, and restore the best weights
        correct: true
        why: |
          Lets the data choose the stopping point rather than a guess, and `restore_best_weights` keeps the model from the epoch that actually won.
      - label: "C"
        text: |
          Keep thirty epochs but train five networks and average them, which smooths out any unlucky stopping point
        correct: false
        why: |
          Ensembling five models all stopped at the wrong epoch gives you a reliable average of five wrong models.
      - label: "D"
        text: |
          Watch the training loss and stop once it flattens, which needs no extra data to be held out at all
        correct: false
        why: |
          Training loss falls almost monotonically while a network memorises. It is the one curve that cannot tell you when to stop.
    solution: |
      The line, in full:

      ```python
      nn.fit(X_train, y_train, epochs=30, batch_size=64, verbose=0)
      ```

      Thirty is a guess, and it is a guess with **no safe direction of error**. Too few and the network is undertrained; too many and it has memorised 5,200 rows with 134,000 weights (Q3). Nothing in the code reports which of those happened.

      What option B changes:

      ```python
      es = keras.callbacks.EarlyStopping(monitor="val_loss", patience=5,
                                         restore_best_weights=True)
      nn.fit(X_train, y_train, validation_data=(X_val, y_val),
             epochs=500, batch_size=64, callbacks=[es], verbose=0)
      ```

      Three things happen at once. The epoch ceiling stops being a decision and becomes a generous bound. **Validation** loss — not training loss — decides when to stop, because that is the curve that turns upward when memorisation begins. And `restore_best_weights` rolls back to the epoch that was actually best, rather than whichever epoch the patience counter happened to end on.

      Option D is the one worth dwelling on, because it sounds thrifty. Training loss on an over-parameterised network keeps falling right through the point where the model stops generalising. Watching it is not a cheap version of early stopping; it is a way of guaranteeing you stop too late.

      > [!success] Answer — **B**
      > A grouped validation set, early stopping on validation loss, and the best weights restored.

      > [!tip] Why the validation set has to be grouped too
      > If a customer's rows straddle train and validation, the validation loss is contaminated exactly as the test accuracy is, and early stopping fires on a number that already knows the answer. Group by `customer_id` for every split, not just the final one.
    related_terms:
      - validation-set
      - overfitting
      - train-test-split

  - id: q14
    title: "Q14 — Plan: nothing shows what drives the forest"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "Nothing in the notebook shows which features are driving the forest's predictions."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Report the forest's built-in importances and accept the ranking they give, since they come from the fitted model itself
        correct: false
        why: |
          Impurity-based importances are computed on training data and inflate high-cardinality continuous features. Useful, but not something to accept unexamined.
      - label: "B"
        text: |
          Ask the team to describe in writing which features they expect to matter, and compare that list against the score
        correct: false
        why: |
          Expectations are worth eliciting, but comparing them to an accuracy figure tells you nothing about what the model used.
      - label: "C"
        text: |
          Fit a single shallow tree alongside the forest and read its splits as the explanation for the forest's behaviour
        correct: false
        why: |
          A surrogate approximates the forest and may diverge from it precisely where a rejected applicant is disputing the decision.
      - label: "D"
        text: |
          Report permutation importance on held-out data plus per-decision attributions, treating a dominant post-outcome column as an alarm
        correct: true
        why: |
          Measures importance where generalisation lives, gives the regulator per-applicant reasons, and turns the diagnostic into a leak check.
    solution: |
      Three separate jobs are being asked of one diagnostic, and only option D does all three.

      **Job 1 — measure importance honestly.** The default `feature_importances_` is mean impurity decrease computed on the *training* data, and it is known to favour continuous, high-cardinality columns. **Permutation importance on held-out data** asks a cleaner question: shuffle one column in the validation set and see how much the score falls. That measures reliance where it matters.

      **Job 2 — explain individual decisions.** The regulator does not want to know which features matter on average; it wants to know why *this* applicant was rejected. That needs per-decision attributions (TreeSHAP is exact for tree ensembles), not a global ranking. See Q10 and Q19.

      **Job 3 — use it as a leak alarm.** This is the clause that separates D from A. If `avg_days_late` sits at the top with an enormous margin, the correct response is not "our model has found a strong signal" — it is **"why does that column know so much, and does an applicant have it on submission day?"**

      Option C is the near-miss. A shallow surrogate is a legitimate communication tool, but it is an approximation of the forest, and using it as *the* explanation means the reason you give an applicant may not be the reason the model used.

      > [!success] Answer — **D**
      > Permutation importance on held-out data, per-decision attributions, and a dominant post-outcome column treated as an alarm.
    related_terms:
      - random-forest
      - feature-selection
      - data-leakage

  - id: q15
    title: "Q15 — Plan: the outputs are being read as probabilities"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The models' outputs are being treated as genuine probabilities of default, with no check that they are."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Convert the outputs into deciles and work with the rank ordering only, sidestepping the calibration question
        correct: false
        why: |
          Ranking is enough to compare models but not to price a loan or to set a cost-derived threshold on the probability scale.
      - label: "B"
        text: |
          Accept the outputs as they stand, since both models were trained with a proper probabilistic loss function
        correct: false
        why: |
          A proper loss makes calibration the *optimum*, not the outcome. Overfitting and class imbalance both pull the outputs away from it.
      - label: "C"
        text: |
          Plot a reliability curve on held-out data, recalibrate if the outputs are off, then choose a threshold
        correct: true
        why: |
          Measures calibration before assuming it, fixes it if needed, and puts the threshold decision after rather than before.
      - label: "D"
        text: |
          Average the two models' outputs, which pulls the extreme network scores back towards the forest's moderate ones
        correct: false
        why: |
          Averaging two miscalibrated models produces a third miscalibrated model whose errors are now harder to diagnose.
    solution: |
      Calibration is the question *"when the model says 0.20, do 20% of those applicants actually default?"* — and nothing in the notebook asks it.

      **How to check.** Take the held-out predictions, sort them into ten buckets by predicted probability, and plot the mean predicted value against the observed default rate in each bucket. A calibrated model sits on the diagonal. Two failure shapes are common and both are expected here:

      | Shape | Typical cause |
      |---|---|
      | Predictions pushed towards 0 and 1 | an over-parameterised network trained past convergence |
      | Predictions squeezed towards the base rate | vote-share averaging in a bagged ensemble |

      **How to fix.** Platt scaling (fit a logistic regression on the model's scores) or isotonic regression (a monotone step fit, more flexible, needs more data). Both are fitted on a held-out calibration set — never on training data, and never on the test set.

      **Why the ordering in option C matters.** The threshold has to come from the ~10x cost asymmetry, and a threshold is a point on the probability axis. Choose it before calibrating and you have picked a point on a distorted scale, then calibrated the scale out from under it.

      > [!success] Answer — **C**
      > Measure calibration on held-out data first, recalibrate if it fails, and only then set the threshold.

      > [!warning] Ranking and calibration are different goods
      > A model can rank applicants perfectly ([[auc|AUC]] of 1.0) and be badly calibrated. Model *comparison* often needs only ranking. Pricing, provisioning, and threshold-setting all need the probabilities to be true.
    related_terms:
      - auc
      - roc-curve
      - logistic-regression

  - id: q16
    title: "Q16 — Plan: the recommendation was made on model class"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The model was chosen on what class of model it belongs to, not on any evidence about its behaviour."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Ask the team to rewrite the recommendation with better reasoning, keeping the neural network as the chosen model
        correct: false
        why: |
          Preserves the conclusion and improves only the prose around it. That is a better-argued unjustified decision.
      - label: "B"
        text: |
          Rerun both under the corrected pipeline against criteria agreed beforehand, and prefer the simpler model when scores tie
        correct: true
        why: |
          Reopens the decision properly, and pre-commits to a tie-breaker so the choice cannot be rationalised after the numbers land.
      - label: "C"
        text: |
          Overturn it and mandate the forest immediately, since tree models are the accepted standard in regulated lending
        correct: false
        why: |
          Replaces one class-based argument with another. The forest may well win — but it has to win on measured evidence.
      - label: "D"
        text: |
          Let the two models run side by side in production and choose whichever performs better after a quarter
        correct: false
        why: |
          Puts a leaky, unvalidated model in front of real applicants and calls the resulting losses an experiment.
    solution: |
      "Deep learning is the more advanced technology" is not a criterion — it is a preference about tools wearing the clothes of an argument. But notice what the *tempting* correction does.

      Option C is the mirror image of the original error. "Tree models are the accepted standard in regulated lending" is another statement about model classes, and it happens to point at the answer that is probably right. Getting the right answer from the wrong kind of reasoning is not what is being marked — it means the next decision, on a different problem, goes wrong.

      Option B does the work in the correct order:

      1. **Fix the pipeline** — no comparison run on leaky features and a shared-customer split means anything.
      2. **Agree the criteria first** — defaulters caught at a cost-derived threshold, money per error type, explainability, running cost, stability across segments.
      3. **Rerun both** under identical conditions.
      4. **Pre-commit to the tie-breaker** — when the headline metric ties, take the simpler model.

      Step 4 is what makes B a plan rather than a wish. The corrected numbers are 36% against 37%, and without a tie-break rule agreed *in advance*, whoever prefers the network will read one point as a lead.

      > [!success] Answer — **B**
      > Rerun both under the corrected pipeline against pre-agreed criteria, with the simpler model favoured on a tie.

      > [!tip] Simplicity as a tie-breaker, not as a rule
      > "Prefer the simpler model when the evidence ties" is defensible because simplicity buys real things here: explainability to the regulator, lower running cost, fewer ways to fail. It is not a claim that simple models are better.
    related_terms:
      - model-selection
      - random-forest
      - accuracy

  - id: q17
    title: "Q17 — Plan: is a one-point difference real?"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "Nobody knows whether the difference between the two models' scores is real or an accident of this particular split."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Repeat the comparison over several grouped splits and seeds, report the spread, and treat gaps inside it as ties
        correct: true
        why: |
          Turns a single number into a distribution, which is the only way to tell a real difference from a split-to-split accident.
      - label: "B"
        text: |
          Enlarge the test set to half the data, so the difference between the two scores is measured far more precisely
        correct: false
        why: |
          A larger test set narrows sampling error but still gives one draw, and it shrinks the training data for both models.
      - label: "C"
        text: |
          Run a significance test on the two accuracy figures from the single split already computed, and read the p-value
        correct: false
        why: |
          A test on one paired split treats split-to-split variation as zero, which is the exact source of uncertainty in question.
      - label: "D"
        text: |
          Accept the difference as real, since both models were trained and evaluated on exactly the same rows
        correct: false
        why: |
          Shared rows remove one source of difference and leave the rest — initialisation, bootstrapping, and which customers landed where.
    solution: |
      Everything in the notebook rests on a single draw:

      ```python
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      ```

      One split, one seed, one number per model. `random_state=42` is not a neutral choice — it is *a* choice, and nobody knows how much the answer would move under `random_state=43`.

      What option A produces instead: repeat the whole corrected pipeline over, say, five or ten **customer-grouped** splits, refitting both models each time, and report mean and spread per model. Then a comparison table looks like this rather than like two bare numbers:

      | Model | Defaulters caught (mean) | Spread across splits |
      |---|---|---|
      | Random Forest | 36% | narrow |
      | Neural Network | 37% | wide |

      Once the spread is on the page, a one-point gap either survives it or it does not, and Q25 becomes answerable.

      Option C is the trap for the statistically-trained. Running McNemar's test on the two models' predictions from one split is a real technique and it answers a narrower question: *given this split, do the models differ?* It cannot speak to the variation *across* splits, which is exactly what "an accident of this particular split" means.

      > [!success] Answer — **A**
      > Repeat over several grouped splits and seeds, report the spread, and call differences inside it ties.

      > [!tip] The habit worth carrying out of this course
      > **A model score without a spread is not a measurement.** One number invites the reader to treat every digit as signal. Two numbers — a centre and a spread — tell them how much of it to believe.
    related_terms:
      - cross-validation
      - train-test-split
      - model-selection

  - id: q18
    title: "Q18 — Plan: a hundred trees, chosen from nowhere"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The tree count of one hundred was never justified against anything."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Raise the tree count to a thousand, since more trees can only help and the extra training cost is affordable
        correct: false
        why: |
          More trees stop helping once the ensemble average has stabilised, and every one of them is paid for at every prediction forever.
      - label: "B"
        text: |
          Leave the tree count alone and instead reduce the training data, which makes each tree considerably faster to grow
        correct: false
        why: |
          Throwing away data to save training time is the worst trade on the list, on a dataset of ~1,200 effective customers.
      - label: "C"
        text: |
          Raise the count until the out-of-bag score plateaus, then spend the tuning budget on depth and leaf size
        correct: true
        why: |
          Treats the one knob with no real trade-off correctly and redirects the effort to the knobs that genuinely trade bias against variance.
      - label: "D"
        text: |
          Tune the tree count jointly with everything else in one large grid, so interactions between settings are captured
        correct: false
        why: |
          Multiplies the grid by a dimension that has no optimum, and on ~1,200 customers a large grid overfits the validation set.
    solution: |
      `n_estimators` is unusual among hyperparameters, and the exam wants you to know why.

      **Most hyperparameters trade off.** Deeper trees fit training data better and generalise worse. Fewer samples per leaf, likewise. There is an interior optimum, and finding it requires a search.

      **Tree count does not.** Each additional tree is another draw from the same procedure, and the ensemble prediction is their average. More trees means a more stable average — the score rises steeply, then flattens, and never turns back down. There is no optimum to find, only a **plateau**, and the only cost of going past it is compute:

      ```python
      rf = RandomForestClassifier(n_estimators=100, random_state=42)
      ```

      So the right treatment is the one in option C: raise it until the score stops moving and stop there. The **out-of-bag** score makes this nearly free — each tree is fitted to a bootstrap that omits about 37% of rows, so scoring every row on the trees that did not see it gives an internal estimate at no extra data cost.

      Then spend the real tuning budget where trade-offs live: `max_depth`, `min_samples_leaf`, `max_features`. With ~1,200 effective customers, fully-grown trees (the scikit-learn default) will happily isolate individual borrowers in their own leaves.

      Option A gets close and misses on cost discipline. A thousand trees is not *wrong*, but it is ten times the inference cost for a gain that stopped arriving somewhere in the low hundreds, on a model that will score every application the bank ever receives.

      > [!success] Answer — **C**
      > Raise the count to the plateau, then tune depth and leaf size — the settings that actually trade off.

      > [!tip] Out-of-bag scoring, briefly
      > Set `oob_score=True` and the forest reports an estimate computed from each row's own held-out trees. It is not a substitute for a proper grouped validation set here — the duplicated customer rows contaminate it too — but for the narrow question "have the trees stopped helping?", it is exactly the right instrument.
    related_terms:
      - random-forest
      - ensemble-methods
      - hyperparameter-tuning

  - id: q19
    title: "Q19 — Plan: the regulator wants a reason per rejection"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The regulator requires a plain-terms reason for each rejection, and neither model produces one today."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Adopt the network and publish its overall feature importances, which explain the model's behaviour in general terms
        correct: false
        why: |
          A global ranking says what matters on average. The applicant asking why *they* were refused is not answered by an average.
      - label: "B"
        text: |
          Adopt the network and have an underwriter write a reason after each rejection, based on their own reading of the file
        correct: false
        why: |
          The reason given would not be the reason the decision was made, which is a compliance failure dressed as a solution.
      - label: "C"
        text: |
          Adopt either model and disclose the full list of input features, which tells applicants what the decision rests on
        correct: false
        why: |
          Disclosing the inputs is not explaining the output. Every applicant would receive the same list regardless of their case.
      - label: "D"
        text: |
          Require per-applicant reasons traceable to the model actually used, and rule out any model that cannot produce them
        correct: true
        why: |
          Makes explainability a gate the model must pass rather than a report written alongside it, which is what the requirement means.
    solution: |
      The requirement from the brief is specific: explain **in plain terms why any particular application was rejected**. Three of the four options quietly answer a different question.

      | Option | What it actually delivers | What was asked |
      |---|---|---|
      | A | what matters on average | why *this* applicant |
      | B | a human's post-hoc narrative | the model's reason |
      | C | the input schema | the decision's reason |
      | D | attributions tied to the model used | ✅ |

      Option B is the most dangerous, because it looks like diligence and it is the opposite. An underwriter writing a plausible-sounding reason after a model has already decided produces a document that **does not describe the decision**. If the model rejected on loan-to-income and the letter says "insufficient employment history", the bank has told the applicant something untrue about its own process.

      What D means in practice depends on which model wins — which is exactly why it belongs in the model decision rather than after it:

      - **Random Forest**: TreeSHAP gives exact per-decision attributions cheaply, and the underlying splits are on named features at named thresholds (see Q10).
      - **Neural network**: SHAP or LIME, both approximate, both extra infrastructure, both producing explanations of a local surrogate rather than of the network.

      > [!success] Answer — **D**
      > Per-applicant reasons that trace to the model actually used, with inability to produce them disqualifying a model.

      > [!warning] Explainability is a constraint, not a deliverable
      > If it is treated as a report produced after selection, you will eventually select a model that cannot be explained and then be asked to explain it. Making it a gate means the constraint shapes the choice, which is the only point at which it is cheap.
    related_terms:
      - random-forest
      - decision-tree
      - model-selection

  - id: q20
    title: "Q20 — Plan: the team wants more layers"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The network came in slightly behind the forest, and the team wants to add layers to close the gap."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Decline: fix the measurement first, and if the network still trails, cut capacity rather than add it
        correct: true
        why: |
          The gap is currently noise on a broken measurement, and with ~5,200 rows of seven features the binding constraint is data.
      - label: "B"
        text: |
          Approve a modest increase to four layers, which is a cheap experiment and may well close the remaining gap
        correct: false
        why: |
          Cheap in compute, expensive in credibility: it tunes towards a target produced by leakage and a contaminated split.
      - label: "C"
        text: |
          Approve it but only with dropout added, so the extra capacity cannot memorise the training rows outright
        correct: false
        why: |
          Regularising a network that is already too large for the data is a fix for a problem you chose to create.
      - label: "D"
        text: |
          Decline and drop the network entirely, since tabular problems of this size never reward a neural architecture
        correct: false
        why: |
          Right instinct, overstated into a rule. Drop it because the corrected evidence says so, not because of a blanket claim.
    solution: |
      Two errors are bundled into the request, and the answer has to unpick both.

      **The gap is not real yet.** The forest's 98% and the network's 98% are both products of `avg_days_late` and `collections_flag` leaking the label into the features, measured on a split that shares customers. A difference between two broken numbers is not a deficit to be closed.

      **The direction is backwards.** Suppose the measurement were honest. The network already carries about 134,000 weights against roughly 5,200 training rows representing only ~1,200 independent customers, across seven features (Q3). When a model is that far past the information in its data, adding capacity is the wrong lever in the wrong direction. The reason forests and gradient-boosted trees usually win on small tabular problems is not that networks are bad — it is that networks buy their advantage by learning representations, and there is no representation to learn from seven pre-engineered columns.

      Option D reaches the same practical decision and is still wrong, and it is worth being precise about why. "Never rewards a neural architecture" is a claim about all tabular problems of this size, which is neither true nor needed. You do not have to believe networks are unsuitable in general to decline this request; you only have to note that this one has no evidence behind it.

      > [!success] Answer — **A**
      > Decline. Fix the measurement, and if the network still trails, reduce capacity rather than add more.

      > [!tip] "It is a cheap experiment" is not a reason
      > Option B's argument is that trying costs little. But an experiment against a broken measurement has a negative expected value: it produces a result that will be quoted later as though it meant something.
    related_terms:
      - overfitting
      - bias-variance-tradeoff
      - model-selection

  - id: q21
    title: "Q21 — What the rerun must hold fixed"
    text: |
      The model decision:

      > "The pipeline has been rebuilt and both models are about to be compared again. What must be held constant for that comparison to mean anything?"

      Which specification do you approve?
    options:
      - label: "A"
        text: |
          The same random seed for both models, so that any remaining difference between them is attributable to architecture
        correct: false
        why: |
          A shared seed does not make two different algorithms comparable, and one seed is the thing you most need to vary (Q17).
      - label: "B"
        text: |
          The same grouped splits, the same features, and one threshold derived from costs, with an interval reported per score
        correct: true
        why: |
          Names the three things that make the numbers commensurable and requires the uncertainty to be shown alongside them.
      - label: "C"
        text: |
          The same accuracy metric applied to both, reported to two decimal places so that small differences remain visible
        correct: false
        why: |
          More decimal places on a metric that hides performance on the 14% who default is precision about the wrong quantity.
      - label: "D"
        text: |
          The same training time budget for each model, so neither is favoured by having been given more compute
        correct: false
        why: |
          Equal compute is a fairness rule for benchmark papers. The bank cares which model performs, not which trained faster.
      
    solution: |
      A comparison is only a comparison if the two numbers differ in **one** respect. Option B pins down the three that must not vary:

      **Same grouped splits.** Both models evaluated on the same customers, with no customer appearing in both training and evaluation. Different splits means the difference between the scores includes the difference between the splits.

      **Same features.** Both models fed the identical decision-day feature set, after `avg_days_late` and `collections_flag` are removed and `income` is put onto one unit. Otherwise you are comparing feature sets, not models.

      **One cost-derived threshold.** Not 0.5. A missed defaulter costs roughly the outstanding principal and a wrong rejection costs the interest margin — about 10x apart — so the operating point sits well below 0.5, and both models must be measured *there*, at the point the bank will actually run them.

      **An interval per score.** From Q17: repeat over several grouped splits and report the spread. This is what makes Q25 decidable rather than a matter of taste.

      > [!success] Answer — **B**
      > Same grouped splits, same features, one cost-derived threshold, and a reported interval around every score.

      > [!tip] Option D is a real principle in the wrong setting
      > Equal-compute comparison matters when you are publishing a claim that architecture X beats architecture Y. The bank is not publishing anything — it is choosing which model to run, and a model that needs more compute simply costs more to operate, which is already one of the criteria.
    related_terms:
      - model-selection
      - cross-validation
      - precision-and-recall

  - id: q22
    title: "Q22 — Reading the model versus explaining it"
    text: |
      The model decision:

      > "The forest can be interrogated directly; the network's decisions can only be explained by fitting a separate method on top of it."

      How much weight should that distinction carry?
    options:
      - label: "A"
        text: |
          The difference is presentational: both approaches produce a ranked list of reasons a compliance officer can read
        correct: false
        why: |
          The lists look alike and are not alike. One is computed from the model's own splits; the other from a fitted approximation of it.
      - label: "B"
        text: |
          It favours the network, since a post-hoc method can be tuned to give clearer reasons than raw tree splits do
        correct: false
        why: |
          An explanation you can tune towards clarity is an explanation you can tune away from accuracy. That is the opposite of an audit trail.
      - label: "C"
        text: |
          It is neutral, because the regulator asks for a plain-terms reason and never asks how that reason was produced
        correct: false
        why: |
          A regulator that cannot verify how a reason was produced cannot verify the reason, and will eventually ask.
      - label: "D"
        text: |
          It favours the forest: its explanation is the model, whereas a post-hoc method explains an approximation of it
        correct: true
        why: |
          Names the substantive difference — whether the explanation and the decision come from the same object — rather than a stylistic one.
    solution: |
      The distinction is not "one model is clear and the other is murky". Both can be made to emit a ranked list of contributing features. The question is **where that list comes from**.

      **TreeSHAP on a forest** is computed from the tree structures themselves. It decomposes the actual prediction of the actual model exactly. If it says loan-to-income contributed +0.12 to this applicant's risk score, that is a fact about the model that made the decision.

      **SHAP or LIME on a dense network** fits a local approximation around each applicant and reads the coefficients of the approximation. The output is a statement about a surrogate, and it comes with its own choices — kernel width, neighbourhood size, number of samples — each of which moves the answer. Two competent analysts can produce two different explanations of the same rejection.

      That matters at the exact moment it is expensive: an applicant disputes a rejection, and the bank has to say why. "Our explanation tool, configured this way, approximates the model as having weighted your debt-to-income heavily" is a materially weaker position than "the model's splits on your file were these".

      > [!success] Answer — **D**
      > It favours the forest — its explanation is derived from the model itself, not from an approximation of it.

      > [!warning] Not a prohibition
      > This does not rule networks out of regulated lending; they are deployed there with explanation stacks around them. It means the network arrives with a **standing cost** — tooling, infrastructure, and a weaker answer under challenge — that has to be paid out of a performance advantage. On 36% against 37%, there is no advantage to pay with.
    related_terms:
      - random-forest
      - decision-tree
      - model-selection

  - id: q23
    title: "Q23 — 'It will scale as more data arrives'"
    text: |
      The model decision:

      > "Someone argues for the neural network on the grounds that it will keep improving as the bank accumulates more lending data."

      How should that argument be treated?
    options:
      - label: "A"
        text: |
          Decide on what is measured now; capacity for data the bank does not yet hold is not evidence
        correct: true
        why: |
          Separates a plausible forecast from a measurement, and leaves the door open to revisit the architecture when the data exists.
      - label: "B"
        text: |
          Accept it, since replacing a deployed model later is costly and the network is the more future-proof choice
        correct: false
        why: |
          Retraining or swapping a model on a corrected pipeline is routine. The switching cost is not large enough to buy a decision.
      - label: "C"
        text: |
          Accept it in part, and deploy the network on a share of applications so that it can begin learning early
        correct: false
        why: |
          Models do not learn by being deployed. Serving traffic through an unjustified model buys data at the price of real defaults.
      - label: "D"
        text: |
          Reject it, because a neural network cannot benefit from additional rows once its architecture has been fixed
        correct: false
        why: |
          Factually wrong. More data is exactly what an over-parameterised network is short of; the same weights fit better with more rows.
    solution: |
      The claim is not absurd. It is broadly true that neural networks scale better with data than tree ensembles do, and that the gap between them tends to close and then reverse as the sample grows. As a *forecast* it is reasonable.

      As an *argument for today's decision* it fails on a simpler point: **the bank has 1,200 customers' worth of information, and the decision is about now.** Deciding on data you do not have means deciding on an assumption, and assumptions do not have confusion matrices.

      Note the asymmetry that makes A the calm answer rather than the stubborn one. If the bank picks the forest today and the data grows tenfold over three years, revisiting the architecture then costs a retraining cycle — and by then the network's advantage would be *measurable* rather than argued. If it picks the network today on a promise, it pays the explanation-tooling cost (Q22) immediately, for a benefit that arrives later or never.

      Option D is included because it reaches the right decision through a false claim. More data genuinely does help an over-parameterised network — that is precisely the fix for the ratio in Q3. You do not need to deny that to decline the argument.

      > [!success] Answer — **A**
      > Decide on what is measured now. A capacity argument about data the bank does not hold is not evidence.

      > [!tip] The pattern across Part 3
      > Every wrong option in this part is either a **prediction offered as a measurement**, a **preference offered as a criterion**, or a **true statement pointed at the wrong conclusion**. The correct one is usually the plainest sentence on the page.
    related_terms:
      - model-selection
      - bias-variance-tradeoff

  - id: q24
    title: "Q24 — Two models, two different probability scales"
    text: |
      The model decision:

      > "On the corrected pipeline, the forest's predicted probabilities cluster between 0.05 and 0.30, while the network's are pushed towards 0 and 1."

      What follows from this?
    options:
      - label: "A"
        text: |
          It shows the network separates the classes more sharply, which is the property the bank should be selecting on
        correct: false
        why: |
          Confidence is not accuracy. A network pushed to the extremes by over-parameterisation is overconfident, not more discriminating.
      - label: "B"
        text: |
          It shows the forest is underconfident, so its outputs should be stretched to cover the full range before use
        correct: false
        why: |
          Stretching a range to look decisive is cosmetic. If the forest is right that risk sits near the base rate, the range is correct.
      - label: "C"
        text: |
          It means a threshold cannot be transferred between them; calibrate both, then compare at the cost-derived operating point
        correct: true
        why: |
          The two models are on different scales, so the same number means different things — which breaks any shared threshold.
      - label: "D"
        text: |
          It is an artefact of averaging a hundred trees and carries no information about either model's quality
        correct: false
        why: |
          Half right about the mechanism, and it draws the wrong conclusion: the shapes carry direct information about calibration.
    solution: |
      The shapes are exactly what the two algorithms would be expected to produce here, and each has a mechanism.

      **The forest.** Its output is the share of 100 trees voting "default". With a ~14% base rate, most applicants have some trees voting each way, so the average lands near the base rate. Bagged vote shares are characteristically **compressed towards the middle**.

      **The network.** Trained with 134,000 weights on ~5,200 rows for 30 unmonitored epochs, it can drive the pre-activation to large magnitudes, and the [[sigmoid-function|sigmoid]] saturates. Outputs pile up at the extremes. That is **overconfidence**, and it is a well-known consequence of over-parameterisation.

      Why C is the operative conclusion: the threshold is set from the ~10x cost asymmetry, and it is a number on the probability axis. A threshold of 0.15 rejects a large slice of the forest's applicants and almost none of the network's, purely because the scales differ. Comparing the two models at any shared threshold, before calibrating, compares their output distributions rather than their judgement.

      So: calibrate both against held-out outcomes (Q15), then derive the operating point, then compare recall and precision there.

      > [!success] Answer — **C**
      > The two scales are not interchangeable. Calibrate both, then compare at the cost-derived operating point.

      > [!warning] The seductive reading of A
      > A histogram of confident predictions looks like a model that has learned something. It looks identical to a model that has memorised something. The only way to distinguish them is to check the predictions against observed outcomes.
    related_terms:
      - sigmoid-function
      - random-forest
      - precision-and-recall

  - id: q25
    title: "Q25 — The corrected comparison, with spreads"
    text: |
      The model decision:

      > "The rebuilt evaluation over five customer-grouped splits: Random Forest catches 36% of defaulters, varying by about one point across splits. Neural Network catches 37%, varying by about four points."

      What is the defensible call?
    options:
      - label: "A"
        text: |
          The network, since its mean is the higher of the two and the spreads overlap only partially across splits
        correct: false
        why: |
          A one-point mean gap inside a four-point spread is not a lead, and "overlap only partially" is not a standard anyone applies.
      - label: "B"
        text: |
          Neither, because a spread of four points shows that the corrected pipeline is still measuring something unstable
        correct: false
        why: |
          The spread is a property of the network on a small sample, not of the pipeline — the forest is stable on the same splits.
      - label: "C"
        text: |
          The forest, on explainability alone; the recall figures are too close to carry any weight in the decision
        correct: false
        why: |
          Reaches the right model by discarding evidence it should have used. Stability is a measured advantage, not a tie to be ignored.
      - label: "D"
        text: |
          The forest: the network's lead sits inside its own spread, and stability is worth more than a marginally higher mean
        correct: true
        why: |
          Uses the spread as evidence rather than ignoring it, and identifies stability itself as an advantage rather than a footnote.
    solution: |
      This question exists to check whether Q17 changed how you read a comparison table.

      | | Random Forest | Neural Network |
      |---|---|---|
      | Defaulters caught | 36% | 37% |
      | Variation across five grouped splits | ~1 point | ~4 points |
      | Explanation | from the model itself | from an approximation |
      | Running cost | low | higher |

      **The lead is not a lead.** A network scoring 37% with a four-point spread produced results somewhere in the 33–41% range depending on which customers landed in which split. The forest's 36% came with a one-point spread. The network's mean advantage sits comfortably inside its own variation — it is one draw from a wider distribution that happens to have landed above.

      **The stability is itself the finding.** This is the part option C throws away. A model whose measured performance swings four points on 1,200 customers will swing when the applicant mix shifts, when a segment grows, when next year's book looks different. The forest's tighter spread is not a tie-breaker of last resort; it is evidence about which model the bank can rely on.

      **And the other criteria agree.** Explainability (Q22), running cost, and the absence of an explanation-tooling stack all point the same way. Nothing in the corrected evidence favours the network.

      > [!success] Answer — **D**
      > The forest — the network's lead sits inside its own spread, and stability outweighs a marginally higher mean.

      > [!quote] What this paper has been testing
      > Not whether you can name a model, but whether you will read a number as a measurement or as a fact. Every question in Part 3 hands you a figure and asks how much of it to believe. **36% with a one-point spread is a stronger result than 37% with four.**
    related_terms:
      - model-selection
      - cross-validation
      - random-forest
---

> [!info] What this paper is
> A **practice paper**, written in the format of the lecturer's [[pp-01-sample-exam-25-questions|sample exam]] and built on the same notebook, `loan_pipeline.ipynb`. Same structure, same three parts, same 25 questions — different territory.
>
> - 📓 [`loan_pipeline.ipynb`](/papers/machine-learning/loan_pipeline.ipynb) — run it before attempting this
> - 📄 [The problem brief + 15 preparation questions](/papers/machine-learning/loan-pipeline-brief-and-prep-questions.pdf)
> - 📝 [[loan-pipeline-code-walkthrough|Code walkthrough & defect catalogue]]

## What this paper covers

The sample exam concentrates on **the data** — where the columns come from, what leaks, how the rows are split, what "default" means. This paper concentrates on **the two models and the method used to compare them**.

| Theme | Questions |
|---|---|
| Trees: splitting, scale-invariance, [[gini-impurity\|Gini impurity]], readability | 1, 2, 5, 10 |
| Ensembles: bagging, feature subsetting, tree count | 5, 9, 18 |
| Network: capacity against sample size, activations, the sigmoid output | 3, 4, 11, 20 |
| Hyperparameters and tuning method | 8, 12, 13, 18 |
| Baselines, reproducibility, and how much of a difference to believe | 6, 7, 17, 21, 25 |
| Calibration and the probability scale | 4, 15, 24 |
| Explainability and what makes a model auditable | 10, 19, 22 |

There is deliberately **no question here about leakage, imputation order, or metric definitions** — those are the sample paper's ground, and covering them again would just be practice at recognising questions you have already seen.

## How this paper differs from the sample exam

The sample paper has a tell: its correct option is almost always the longest and most hedged one, which makes it partly guessable without reading the code. **This paper is written so that trick does not work.**

- Options within a question are matched for length.
- The correct answer is sometimes the shortest and bluntest on the page (Q20, Q23).
- Cautious hedging and cost-admitting clauses appear in wrong options as often as in right ones.
- Every distractor is a mistake a competent analyst might actually make — several are true statements attached to a wrong conclusion (Q1 B, Q5 C, Q23 D), and several reach the right *decision* by the wrong *reasoning* (Q16 C, Q20 D, Q25 C).

If you find yourself picking an option because of how it sounds rather than what it claims, that is the habit this paper is built to break.

## Before you attempt it

Have three numbers in your head, because a lot of the reasoning hangs off them:

| Number | Where it comes from |
|---|---|
| **7 feature columns** | nine columns, minus `default` and `customer_id` |
| **~5,200 training rows** | 6,557 rows, 80% to training — but only ~1,200 independent customers |
| **~134,000 network weights** | three 256-unit layers plus a single-unit output |

The third against the second is Q3, Q20 and Q24. The gap between 5,200 rows and 1,200 customers is why every split in this paper is a *grouped* split.
