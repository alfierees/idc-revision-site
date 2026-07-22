---
title: "Loan Pipeline — The Notebook in Plain English"
subject: machine-learning
type: reference
description: "The whole notebook explained for someone who doesn't write code — what each line claims, whether the claim holds up, and the five questions to ask about any model."
course: "Machine Learning — Economics Track"
semester: 2
year: 2
tags:
  - machine-learning
  - exam-prep
  - loan-pipeline
  - plain-english
aliases:
  - Plain-English Walkthrough
  - Notebook in Plain English
  - Loan Pipeline Plain English
order: 2
in_scope: true
---

> [!info] Who this page is for
> You don't need to understand programming to follow this — you need to understand **what the code is claiming, and whether that claim holds up**. Every cell of the notebook is here, translated into plain English, with interactive graphs where seeing beats reading.
>
> Already comfortable with the code? The [[loan-pipeline-code-walkthrough|Code Walkthrough & Defect Catalogue]] is the technical version of this same story, with all fifteen defects numbered and referenced. 📓 [`loan_pipeline.ipynb`](/papers/machine-learning/loan_pipeline.ipynb)

## Before we start: three things that make code readable

Almost everything in this notebook is one of three ideas.

**1. A variable is a labelled box.** When you see `income = 5000`, that means "put 5000 in a box called `income`, so I can refer to it later." Every `=` sign is putting something in a box.

**2. A function is a recipe with a name.** `def load_data(...)` means "here's a recipe called *load_data*." Nothing happens when you write a recipe. It only happens later when someone says `load_data()` — that's calling the recipe and actually cooking it.

**3. Indentation means "inside".** Lines pushed to the right belong to whatever is above them. A line indented under `for month in range(...)` happens once per month.

That's genuinely most of it. Now let's read the notebook.

---

## Cell 1 — Setup

```python
import numpy as np
import pandas as pd
```

Fetching toolboxes. `numpy` does maths, [[pandas]] handles tables (think Excel-in-code), and the others draw charts and build models. Nothing meaningful happens here.

```python
rng = np.random.default_rng(7)
```

**This line matters more than it looks.** It creates a random number generator and puts it in a box called `rng`. Think of it as a dice-rolling machine.

The `7` is called a *seed*. It fixes the sequence of "random" numbers, so the dice roll the same way every time anyone runs this notebook. That's why everybody gets an identical dataset rather than a different one each time.

**Why does the notebook need a dice machine at all?** Hold that thought — it's the first big reveal, and it comes in the next cell.

---

## Cell 2 — "Load data"

The markdown heading above this cell says:

> *Monthly snapshots of the bank's loans, exported from the warehouse.*

> [!warning] That is not true
> Nothing is loaded from anywhere. Read the code and you'll see the notebook *invents* 1,200 customers out of thin air using the dice machine, then saves them to a file called `loans.csv`. There is no warehouse, no export, no real borrowers.
>
> For a classroom exercise that's completely fine — the data has to be fabricated so it can contain deliberately planted flaws for you to find. But it's worth noticing, because it's exactly the kind of confident-sounding label that doesn't survive actually reading the code. Two lines of prose asserted something the code contradicts.

Let's go through how one fake customer gets built.

### The dice-roll pattern

You'll see this shape over and over:

```python
self_emp = rng.random() < 0.25
```

`rng.random()` produces a random decimal between 0 and 1 — 0.83, 0.12, 0.47, and so on. A number between 0 and 1 lands below 0.25 exactly a quarter of the time.

So this line reads: **"give this made-up customer a 25% chance of being self-employed."** The box `self_emp` ends up holding True or False. Across 1,200 customers, roughly 300 come out self-employed.

Once you've got that pattern, you can read the whole cell. `rng.random() < 0.3` is a 30% chance. `rng.random() < 0.05` is a 5% chance. It's a weighted coin, every time.

### Income

```python
income_m = np.exp(rng.normal(9.1, 0.45))
income = income_m * 12 if rng.random() < 0.3 else income_m
```

The first line invents a **monthly** income. `rng.normal(9.1, 0.45)` draws from a bell curve — most values near 9.1, occasionally further out — and `np.exp` converts that into money, landing most people around 9,000 shekels a month with a long tail of higher earners.

The second line is where a problem is planted. Read it as: *"30% of the time, store this as an annual figure (multiply by 12). The other 70% of the time, leave it monthly."*

**The issue:** the `income` column now mixes two different units. Two people earning exactly the same can appear 12× apart in the data. Any average you compute on this column is meaningless — you'd be averaging monthly salaries with annual ones.

This is the notebook's own explanation for the strange chart later on: the income [[histograms|histogram]] shows two separate humps, one about 12× the other. That's not two types of customer. It's one population recorded in two units.

### Credit score and loan size

```python
score = np.clip(rng.normal(680, 70), 300, 850)
loan  = np.clip(rng.normal(70000, 30000), 8000, 300000)
```

More bell curves. Scores cluster around 680, loans around 70,000 shekels. `np.clip` means "don't let it wander outside these limits" — scores stay within the real 300–850 range, loans within the 8,000–300,000 shekels the bank actually offers.

### Deciding who defaults — the heart of it

```python
risk = -3.1 - 0.011 * (score - 680) + 1.6 * loan / (income_m * 12) \
       - 0.5 * (not self_emp) + rng.normal(0, 0.4)
```

This builds one "riskiness number" by adding up ingredients. Taking them one at a time:

| Ingredient | What it does |
|---|---|
| `-3.1` | The starting point. Very negative = "assume most people repay." This is what makes the overall default rate land near 14% rather than 50%. |
| `- 0.011 * (score - 680)` | Credit score, measured against an average of 680. Score of 780 → subtracts 1.1 (safer). Score of 580 → adds 1.1 (riskier). |
| `+ 1.6 * loan / (income_m * 12)` | Loan size divided by annual income — the debt-to-income ratio. Borrowing a full year's income adds 1.6. **The strongest ingredient in the recipe.** |
| `- 0.5 * (not self_emp)` | Salaried people get 0.5 knocked off. Self-employed get nothing, so they're riskier. |
| `+ rng.normal(0, 0.4)` | A small random nudge — "luck". Redundancy, illness, the things no data captures. |

`risk` ends up as a number, usually somewhere between −4 and −1.

```python
default = int(rng.random() < 1 / (1 + np.exp(-risk)))
```

Two steps in one line.

**Step one:** `1 / (1 + np.exp(-risk))` is the [[sigmoid-function|logistic function]]. Its only job is to squash any number into a probability between 0 and 1:

| risk number | becomes a probability of |
|---|---|
| −4 | 1.8% |
| −3 | 4.7% |
| −2 | 12% |
| −1 | 27% |
| 0 | 50% |

**Step two:** `rng.random() < ...` is the weighted coin again. If the probability came out 12%, this customer defaults 12% of the time.

Notice what this means: a risky customer is not *guaranteed* to default — just more likely to. Two identical-looking customers can end up with different fates. That's realistic, and it's why no model could ever be 100% accurate here even in principle. **A model claiming near-perfect accuracy on this data should immediately make you suspicious.**

**Now note carefully which ingredients went into that risk formula:** credit score, loan amount, income, and employment type. Four things. That's all. Keep that list in mind for the next two lines.

### The two poisoned columns

```python
days_late   = rng.uniform(2, 35) if default else rng.exponential(2.5)
collections = int((default and rng.random() < 0.65) or rng.random() < 0.05)
```

Read the first line out loud: *"Has this person already been marked as a defaulter? If yes, give them somewhere between 2 and 35 days late. If no, give them a small number, usually under 3."*

And the second: *"If they're a defaulter, flip the collections flag on 65% of the time. If not, flip it on only 5% of the time."*

> [!danger] The single most important observation in this whole document
> These two columns did not help *decide* the outcome — they weren't in the risk formula at all. They were created **from** the outcome, on the lines immediately after it was locked in.
>
> The arrow points the wrong way:
>
> ```
>     What should happen:   customer's traits  →  outcome
>     What happens here:    outcome            →  "days late" and "collections"
> ```

**Why this destroys the model.** The model's job is to look at columns and guess the outcome. But when it sees "this person is 28 days late," it isn't detecting risk — it's reading the answer backwards. Almost nobody who repaid ever exceeds ~10 days late, because their number came from a completely different generator. The column is a disguised copy of the answer.

The analogy: imagine predicting whether a student passed an exam, and one of your "predictors" is *whether the school posted them a congratulations letter*. You'd be right nearly every time. You'd also have learned absolutely nothing, and your method would be useless the moment you tried to use it on a student who hasn't sat the exam yet.

**Why it collapses in real use.** A new applicant walks in on Monday morning. How many days late are they on repayments? They aren't — there's no loan yet. Has collections been involved? No. Both columns are empty for every single applicant the bank actually needs to judge. The model's most powerful signal simply isn't there when it matters.

**See it for yourself** — every column placed at the moment the bank first knows it. Drag "today" back to the application day and watch the model's two favourite columns fall off the knowable side of the line:

```graph
type: leakage-timeline
```

> [!tip] The test you can apply to any column, forever
> *"Could the bank have written this value down on the morning the application arrived, before anyone knew how it turned out?"*
>
> Credit score — yes. Income — yes. Loan amount requested — yes. Days late — **no**, that needs months of repayment history. Collections involvement — **no**, same. Anything that fails this test is called **[[data-leakage|leakage]]**, and it will flatter your model in testing and betray you in production.

### Missing values are planted deliberately

```python
income = np.nan if rng.random() < (0.30 if self_emp else 0.05) else round(income)
score  = np.nan if rng.random() < 0.08 else round(score)
```

`np.nan` means "blank". So: income goes missing **30% of the time for self-employed people, but only 5% for salaried people.** Credit score goes missing 8% of the time for everyone.

That asymmetry is the point. The blanks aren't random — self-employed people are six times more likely to have no recorded income. Which means *the very fact that income is missing tells you something about the person.* Remember this; it matters when we reach the cleaning step. (The technical topic here is [[missing-values|missing values]].)

### One customer becomes many rows

```python
for month in range(1, int(rng.integers(3, 9)) + 1):
    rows.append({...})
```

This says: *"pick a random number between 3 and 8, and write out that many identical rows for this customer — one per month of their loan."*

So **one customer produces 3 to 8 rows**, all with the same income, same credit score, same loan amount, same final outcome. Only the `month` number differs.

That's why the file has 6,557 rows but only 1,200 customers. The table looks five times bigger than the information it actually contains. Remember this too — it's the seed of a separate problem in the splitting step.

---

## Cell 3 — The income chart

```python
px.histogram(df, x="income", nbins=80, ...)
```

Draws a bar chart of how incomes are spread out. And it clearly shows **two separate humps, one about twelve times the other** — the mixed-units problem, in plain sight, on screen.

**See it** — the same histogram, with the ability to colour each bar by which unit it was recorded in, and to watch where the "average" lands between the humps:

```graph
type: income-mixup
```

The notebook draws it and moves on. Nothing changes as a result.

That's the failure worth naming here: not the chart itself, but that the team looked at direct visual evidence of a data fault and carried on regardless. A chart that doesn't change what you do next is decoration.

---

## Cell 4 — "Clean"

Four lines. All four have problems.

```python
df["income"] = df["income"].fillna(df["income"].mean())
```

*"Fill every blank income with the average income."*

**Problem one:** that average is computed from the mixed-up column — it's averaging monthly salaries together with annual ones. The number is meaningless before it's even used.

**Problem two:** it's computed from **the entire table**, including the portion that's supposed to be held back as a secret exam later. Information from the exam paper is being baked into the study notes. (More on why that's fatal in the next section.)

**Problem three, and the subtlest:** remember that missing income is six times more common among the self-employed? Filling every blank with the same average erases that. The *fact of being missing* was a genuine clue about the person, and it's been painted over.

**What should happen instead:** fix the units first; use the **median** (the middle value, which isn't thrown off by a few huge earners); compute it from the study portion only; and add a separate yes/no column recording "this person's income was missing" so the clue survives.

```python
df["credit_score"] = df["credit_score"].fillna(0)
```

*"Fill every blank credit score with zero."*

Credit scores run from 300 to 850. **Zero is not a low score — it's an impossible score.** The model has no way of knowing this means "we don't know"; it reads it as "this person's creditworthiness is catastrophically, off-the-charts bad." Roughly 8% of customers get silently branded as the worst borrowers imaginable.

**See it** — sixty customers' credit scores, and what each fill-in choice does to the five that are missing:

```graph
type: zero-fill
```

It also drags the rescaling in the final line off course, because those fake zeros distort what "typical" looks like.

**Instead:** the median score from the study portion, plus a "score was missing" flag column.

```python
X = df.drop(columns=["default", "customer_id"])
```

*"Use every column as a clue, except the answer and the ID number."*

This is where the poison enters. "Everything except the answer" **keeps `avg_days_late`, `collections_flag` and `month`** — the two columns manufactured from the outcome, plus a month counter that means nothing for someone who doesn't have a loan yet.

This single line is the main reason the notebook reports 98%.

**Instead:** name the columns you want explicitly — income, self-employed, credit score, loan amount — rather than taking everything and hoping. "Everything except the target" is a habit that quietly smuggles in leakage.

```python
X = StandardScaler().fit_transform(X)
```

*"Put all columns on a comparable scale."*

Reasonable in principle: loan amounts run to hundreds of thousands while credit scores are in the hundreds, and some models care about that mismatch (the technique is [[feature-scaling|feature scaling]]). The problem is again **when** — this measures the whole table, exam portion included, before the split happens.

---

## Cell 5 — "Split"

```python
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
```

The intention is sound and it's the right idea in general: **teach the model on 80% of the data, then test it on the 20% it has never seen** (the [[train-test-split|train/test split]]). Like revising from a textbook and then sitting an exam with fresh questions — if it only memorised, it'll fail the exam.

Two things go wrong.

**Problem one: the exam isn't fresh.** Remember one customer produces 3–8 identical rows? This shuffles *rows*, not customers. So customer #412's March row lands in the study pile, and their May row — same income, same score, same loan, same outcome — lands in the exam pile. With so many rows each, most customers end up on **both sides**. The model isn't being tested on strangers; it's being tested on people it has already memorised, wearing a different date.

**See it** — twelve customers' monthly rows sliding into Train and Test. Toggle how the split is done and watch who ends up on both sides:

```graph
type: split-shuffler
```

The fix: split by **customer**, so everything about a given person lands wholly on one side. Or simpler here — collapse to one row per customer first, since their details never change anyway.

**Problem two: the exam paper already leaked.** Both cleaning steps above (the average income, the rescaling) were computed using the whole table, exam portion included. So even before the split happens, information from the "unseen" 20% has been mixed into the study material.

There's a name for this whole family of mistakes: **[[data-leakage|data leakage]]** — any situation where the model gets access to information it wouldn't have in real use. The correct order is always: **split first, then learn everything else from the study portion only.**

**And a third thing that's simply absent:** there's no [[validation-set|validation set]]. Standard practice uses three piles — study (learn), validation (try out different settings), exam (one final honest check, touched once). This notebook has two. So when the comments say things like "default settings are fine" and "no tuning needed," those aren't conclusions — nothing was ever compared against anything.

---

## Cell 6 — Model 1: Random Forest

```python
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)
```

A **[[decision-tree|decision tree]]** is a flowchart: *"Is the credit score below 640? → Is the loan over 100,000 shekels? → likely default."* The computer works out the questions itself from the data.

A **[[random-forest|random forest]]** is 100 such flowcharts, each built on a slightly different slice of the data so they don't all think alike, and they vote. One tree can be eccentric; a hundred voting together tend to cancel out each other's quirks. `n_estimators=100` is just "build 100 trees."

```python
acc_rf = accuracy_score(y_test, rf.predict(X_test))
```

Ask it to guess every case in the exam pile, and score the percentage it got right. Result: about 98–99%.

**Why that number is hollow.** [[accuracy|Accuracy]] just counts correct answers. But only **14% of these loans default**. So a "model" consisting of the single word *"approve"* — approving literally everyone, no thought involved — is right **86% of the time.**

**See it** — one hundred applicants, three rules. Check what "no model at all" already scores before being impressed by 98%:

```graph
type: baseline-machine
```

Suddenly 98% is not 48 points better than a coin flip. It's about 12 points better than doing nothing at all. And most of that 12 comes from the leaked columns and the memorised exam.

Worse, accuracy hides the only thing the bank cares about. A model could catch **zero defaulters** and still post 86%. The notebook never checks how many defaulters were actually caught, which is the entire business question.

**What should be reported instead:**
- **[[recall|Recall]]** — of all the people who did default, what fraction did we flag? (Did we catch the bad loans?)
- **[[precision|Precision]]** — of everyone we flagged, what fraction really would have defaulted? (How many good customers did we turn away?)
- **The [[confusion-matrix|confusion matrix]]** — the raw counts of missed defaults and false alarms.
- **Cost** — and crucially, the brief says these two errors *do not cost the same*. A missed default writes off a large chunk of principal; a wrongly rejected customer costs a lost margin. Any sensible comparison has to weigh them accordingly.

**And because the errors cost different amounts, where you draw the line matters.** Drag the rejection threshold and watch the money — the cheapest point is nowhere near the 0.5 the notebook silently used:

```graph
type: threshold-money
```

---

## Cell 7 — Model 2: Neural Network

```python
nn = keras.Sequential([
    layers.Dense(256, activation="relu"),
    layers.Dense(256, activation="relu"),
    layers.Dense(256, activation="relu"),
    layers.Dense(1, activation="sigmoid"),
])
```

A neural network — the "deep learning" family. Loosely: layers of simple number-crunchers, each passing signals to the next, gradually tuning themselves until their output matches the right answers. The three `Dense(256)` lines are three layers of 256 units each. The final `Dense(1, sigmoid)` squeezes everything down to one number between 0 and 1: the predicted probability of default.

```python
nn.fit(X_train, y_train, epochs=30, batch_size=64, verbose=0)
```

`epochs=30` means "go through the entire study pile 30 times, adjusting a little each pass."

Several things are off here.

**It's far too big for the job.** Three layers of 256 units is roughly 140,000 internal dials, being tuned on about 1,000 genuinely distinct customers with four real features. That's using a cathedral organ to play a doorbell. On small, simple tables like this one, tree-based models and plain old [[logistic-regression|logistic regression]] almost always beat neural networks — this is a well-established result, not an opinion.

**Nothing was checked while training.** No validation split, no early stopping. The standard way to detect a model memorising rather than learning — the technical name is [[overfitting]] — is to watch its performance on held-out data as training progresses: if it keeps improving on the study material while getting worse on the held-out material, you've gone too far. That check was never even set up. `epochs=30` was picked blind.

**See it** — what training with nothing watching looks like. Drag the epochs and find the turning point the notebook couldn't see:

```graph
type: overfit-curves
```

**And the fatal one — the bank can't use it.** The brief states plainly: *the regulator requires the bank to explain, in plain terms, why any application was rejected.* A dense neural network is the single hardest model to explain. There's no sentence you can write for a rejected customer beyond "the numbers went through 140,000 dials and came out below the threshold."

That constraint alone rules this model out — before any accuracy figure enters the conversation.

---

## Cell 8 — The comparison chart

```python
fig.update_yaxes(range=[0.90, 1.00])
```

**This one line is the most quietly misleading thing in the notebook.**

It tells the chart to only show the range from 90% to 100%. So a gap of about one percentage point gets stretched across the full height of the chart, and one bar towers over the other. A reader glancing at it sees a decisive winner. The real difference is roughly one point — well within what you'd get by reshuffling the data differently.

**See it** — the notebook's own chart with a draggable axis. Pull the start of the axis down to zero and watch the drama evaporate:

```graph
type: axis-truncation
```

There's also **no baseline bar.** If the chart included "approve everyone = 86%," you'd immediately see both models clustered just above it. Instead they float alone near the top, looking triumphant.

The honest version: axis starting at zero, the 86% baseline drawn on, and bars for the metrics that actually matter — defaulters caught, false alarms — not accuracy alone.

---

## Cell 9 — The conclusion

```python
print("Both models are around 98% - far better than a 50/50 coin flip.")
print("Decision: deploy the NEURAL NETWORK (deep learning is the more advanced technology).")
```

Both sentences are wrong.

**"Far better than a 50/50 coin flip"** — the coin flip is the wrong comparison. Nobody would ever build a coin-flip lender. The honest comparison is the do-nothing baseline: approve everyone, 86%. Against that, 98% is a modest gain, and a fake one, since it rests on leaked columns and a memorised exam.

**"Deep learning is the more advanced technology"** — this is choosing a tool by fashion. Newer does not mean better-suited; on small tables it usually means worse-suited. And it's self-defeating on the notebook's own terms, because the Random Forest actually scored *slightly higher*. The notebook recommends the model that performed worse, on the grounds that it sounds more impressive.

The criteria that should have decided it: how many defaults it catches for a given number of rejected good customers, the cost-weighted balance of those two errors, whether the bank can explain a rejection to the regulator, whether the predicted probabilities are trustworthy, and how hard it is to maintain. On **every** one of those, the neural network is the weaker choice here.

---

## Putting it together

Three separate problems stack on top of each other to produce that 98%:

**1. The model can see the answer.** `avg_days_late` and `collections_flag` were built *from* the outcome. It's not predicting — it's copying.

**2. The exam isn't a real exam.** The same customers appear in both the study and exam piles, because splitting was done by row when each customer owns 3–8 near-identical rows.

**3. The score is measured against the wrong yardstick.** 98% sounds extraordinary next to a coin flip and unremarkable next to the 86% you get by approving everybody without thinking.

Strip all three away and you're left with the honest question: how well can income, credit score, loan size and employment type predict default, judged on customers the model has genuinely never seen? The answer will be **much** lower — and that lower number is the real one. A genuine 98% in credit scoring would itself be evidence that something had leaked.

> [!warning] The problem no code can fix
> One problem sits underneath all of them, which no amount of code-fixing can touch: **every loan in this data is one the bank already approved.** The model has never seen a single applicant the old rules turned away — which is precisely the group it's being asked to make new decisions about. That's a data-collection problem, and it needs a real-world answer: run the model in shadow mode alongside human underwriters, and approve a small random sample of borderline applications to find out what actually happens to them.

---

## The five questions to ask about any model anyone brings you

> [!tip] The checklist
> 1. **Could we have known each input on the day of the decision?** If not, it's [[data-leakage|leakage]].
> 2. **What's the do-nothing baseline, and how much better than that is this?** Not "better than a coin flip" — better than the simplest possible policy.
> 3. **Was the test set genuinely untouched?** Including by averages and rescaling computed before the split.
> 4. **What do the errors cost — and are the two kinds equally bad?** They almost never are.
> 5. **Can we explain a single decision to the customer, and to the regulator?**

The notebook runs without a single error and prints an impressive number. Neither fact is evidence that it works. That gap — between *this code ran* and *this model will make the bank money* — is the whole exercise.

---

> [!success] Next step
> When you're ready for the technical version — every defect numbered, exact line references, the corrected pipeline, and the full defect catalogue the exam questions are drawn from — move on to the [[loan-pipeline-code-walkthrough|Code Walkthrough & Defect Catalogue]].
