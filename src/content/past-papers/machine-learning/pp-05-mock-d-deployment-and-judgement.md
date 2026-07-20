---
title: "Mock Paper D — Deployment, Governance and Judgement"
type: past-paper
status: worked-solution
exam: "Mock Paper D (practice)"
course: "Machine Learning — Economics Track"
semester: 2
year: 2
tags:
  - machine-learning
  - past-paper
  - mock-exam
  - loan-pipeline
  - model-selection
  - deployment
aliases:
  - Mock D Machine Learning
  - ML Mock Paper D
subject: machine-learning
in_scope: true
questions:
  - id: q1
    title: "Q1 — Who chose the cutoff?"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The cutoff at which an application gets rejected was never chosen by anyone — it is whatever the library happened to default to."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — `> 0.5` is a library default, and with a missed defaulter costing ten times a wrong rejection, that cutoff is a decision nobody made
        correct: true
        why: |
          The 0.5 appears only inside `(nn.predict(X_test, verbose=0) > 0.5)`. Nothing in the notebook connects it to the bank's cost of either error.
      - label: "B"
        text: |
          Not valid — 0.5 is the mathematically neutral cutoff, so it is the correct starting point until evidence arrives that some other value performs materially better
        correct: false
        why: |
          Neutral is only correct when the two errors cost the same. Here they differ by about an order of magnitude, so neutrality is itself a costly choice.
      - label: "C"
        text: |
          Valid — but the cutoff only matters for the neural network, since the Random Forest votes across its trees rather than producing a probability to compare
        correct: false
        why: |
          `RandomForestClassifier` exposes `predict_proba`, and its `predict` applies an implicit 0.5 to that vote share. Both models carry the same hidden cutoff.
      - label: "D"
        text: |
          Not valid — the threshold can be adjusted freely after launch, so it is an operational setting rather than something the go/no-go decision needs to cover
        correct: false
        why: |
          The threshold determines which model looks better and how much money the system saves. Deciding it after approval means approving an unpriced system.
    solution: |
      One character carries the whole rejection policy:

      ```python
      acc_nn = accuracy_score(y_test, (nn.predict(X_test, verbose=0) > 0.5).astype(int))
      ```

      A threshold is not a modelling detail. It is the sentence *"reject the applicant"* written as a number, and it is the only place in the pipeline where the bank's economics could have entered. They never did.

      The economics are stark. A missed defaulter costs roughly the outstanding principal — on a typical 70,000-shekel loan, tens of thousands. A wrongly rejected applicant costs the interest margin on a loan that never happened, perhaps a few thousand. Roughly a 10x gap, and 0.5 weighs the two as equal.

      Option C is the tempting one because it sounds like it knows something about how forests work. It does not: `rf.predict` is `predict_proba` compared against 0.5 internally. Both models are operating at the same unchosen cutoff.

      > [!success] Answer — **A**
      > 0.5 is a library default, not a decision. With a 10x cost asymmetry it is the wrong one.

      > [!tip] Where thresholds should come from
      > The score and the decision are separate objects. The model produces a ranking; the business converts the ranking into approvals using a cutoff derived from what each error costs. Q11 covers how to derive it properly.
    related_terms:
      - classification
      - cost-function

  - id: q2
    title: "Q2 — The comparison chart"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The comparison chart makes the difference between the two models look far larger than it actually is."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — the chart is only an illustration, and the two accuracy numbers are printed underneath it in full, so nobody is actually being misled
        correct: false
        why: |
          The chart is what a board member remembers. "The number was also available" is not a defence of a visual that argues the opposite.
      - label: "B"
        text: |
          Valid — bar charts are always misleading for model comparison, and any responsible write-up would present the numbers in a table rather than drawing them
        correct: false
        why: |
          Bar charts are fine. This one is misleading because of a specific axis choice, not because it is a bar chart.
      - label: "C"
        text: |
          Valid — the y-axis is truncated to 0.90–1.00, so a gap of a fraction of a point fills a visible share of the plot area
        correct: true
        why: |
          `fig.update_yaxes(range=[0.90, 1.00])` compresses the axis to a tenth of its natural range, magnifying every difference tenfold.
      - label: "D"
        text: |
          Not valid — the axis range was chosen to show the relevant region clearly, which is standard practice when both values sit close together near the top
        correct: false
        why: |
          Zooming is legitimate when the reader is told. Presenting a zoomed chart as a like-for-like comparison, then recommending a model, is not.
    solution: |
      The line that does it:

      ```python
      fig.update_yaxes(range=[0.90, 1.00])
      ```

      Both bars sit around 0.98. Drawn from zero, they would be visually indistinguishable — which is the truth. Drawn from 0.90, a difference of a few tenths of a percentage point becomes a step you can see across a meeting room.

      Notice what the chart is being asked to do. The notebook's closing line recommends the neural network. The chart is the visual that accompanies that recommendation, and it has been scaled so that a difference well inside noise looks like a result. Whether that was deliberate or careless, the effect on a reader is identical.

      Option B is the trap for people who have absorbed "charts can lie" without the specifics. The exam wants you to name the line.

      > [!success] Answer — **C**
      > The y-axis runs 0.90–1.00, so a fractional gap occupies a visible share of the plot.

      > [!warning] The owner's habit
      > Read the axis before the bars. A truncated axis is not always dishonest, but it is always a reason to go and find the underlying numbers before you agree with the picture.
    related_terms:
      - accuracy
      - exploratory-data-analysis

  - id: q3
    title: "Q3 — What next year's data will contain"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Once this model is live, next year's training data will consist only of applications it chose to approve."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — the warehouse will keep recording every application received, so the next training set will cover the full population the bank actually sees
        correct: false
        why: |
          Applications are recorded; **outcomes** are not. A rejected applicant never gets a loan, so there is nothing to label.
      - label: "B"
        text: |
          Valid — the model filters its own future training data, so segments it rejects generate no outcomes and each retrain rejects them more confidently
        correct: true
        why: |
          Names the mechanism and its direction: the bias compounds with every retraining cycle rather than washing out.
      - label: "C"
        text: |
          Valid — but the effect washes out after two or three retraining cycles, once the approved population stabilises and the model's error rate settles down
        correct: false
        why: |
          Stabilising is the problem, not the cure. It stabilises around the model's own blind spots, and the metrics look calm throughout.
      - label: "D"
        text: |
          Not valid — this is the same selection bias the warehouse already has, so deployment adds nothing new and the existing mitigation plan covers it
        correct: false
        why: |
          It is the same bias made **worse**: today's filter is a fixed human rule, tomorrow's is a filter trained on the output of yesterday's filter.
    solution: |
      The brief already tells you the warehouse "stores approved loans only". That is the static version of the problem. Deployment turns it into a dynamic one.

      Trace the loop. The model rejects a segment. Those applicants get no loan, so no repayment history, so no `default` label. Next year's training set contains nothing from that segment. The retrained model has even less reason to approve anyone there, so it rejects the segment more decisively. Repeat.

      The dangerous property is that **every metric you monitor looks fine while this happens**. Recall on the observed population may even improve, because the observed population is becoming exactly the population the model understands. You are not measuring the mistake, because the mistake removes its own evidence.

      Option D is the sophisticated-sounding wrong answer: it correctly identifies the family of problem and then draws the conclusion that nothing has changed. Something has changed — the filter is now trained on its own output.

      > [!success] Answer — **B**
      > The model filters its own training data, and each retrain hardens the blind spot.

      > [!tip] The general shape
      > Any model whose decisions determine what data it later sees has this property: hiring screens, fraud rules, content ranking, credit. The remedy is always some form of deliberate randomisation — see Q13.
    related_terms:
      - supervised-learning
      - correlation-vs-causation

  - id: q4
    title: "Q4 — How the system will treat the self-employed"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Whatever we deploy will behave differently for self-employed applicants than for salaried ones."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — `self_employed` is included as a feature, so the model already accounts for the difference and treats each group on its own terms
        correct: false
        why: |
          A flag lets the model shift the average for the group. It does nothing about the group's inputs being systematically less complete.
      - label: "B"
        text: |
          Valid — self-employed borrowers are genuinely riskier in the data, so any accurate model will reject more of them, and that is the correct behaviour
        correct: false
        why: |
          True about the generator, but it answers a different question. The concern is about data quality by group, not the base rate.
      - label: "C"
        text: |
          Not valid — the imputation step fills every gap, so both groups arrive at the model with complete records and are scored on identical information
        correct: false
        why: |
          Filling a gap is not the same as having the value. Both groups have complete *rows*; only one group has complete *information*.
      - label: "D"
        text: |
          Valid — they are missing income at 30% against 5%, so their scores rest largely on a filled-in value rather than reported income
        correct: true
        why: |
          Identifies the concrete asymmetry in the data and what it means at decision time for one group of applicants.
    solution: |
      The generator states the asymmetry outright:

      ```python
      income = np.nan if rng.random() < (0.30 if self_emp else 0.05) else round(income)
      ```

      Six times the missingness rate. And the cleaning step responds identically to both:

      ```python
      df["income"] = df["income"].fillna(df["income"].mean())
      ```

      So roughly three in ten self-employed applicants are scored on a number the bank invented — and, because of the mixed-units defect, invented from a bimodal column whose mean describes neither population. One in twenty salaried applicants is in the same position.

      This is a deployment problem, not just a data problem. The bank is about to run an automated decision system that is materially less well informed about a quarter of its applicants, and the aggregate metrics will not show it because the self-employed are the minority in every average.

      Option B is worth sitting with. It is *true* — the `risk` line does include `- 0.5 * (not self_emp)`, so the self-employed really are riskier. But "the model rejects more of them" and "the model knows less about them" are different statements, and only the second is a governance concern.

      > [!success] Answer — **D**
      > 30% missing income against 5% means their scores lean on an imputed value.

      > [!warning] Aggregate metrics hide segments
      > A single recall figure is a weighted average. A quarter of the book performing badly can be entirely invisible in it — see Q24, where exactly that arithmetic is worked through.
    related_terms:
      - missing-values
      - customer-segmentation

  - id: q5
    title: "Q5 — 'Ninety percent is the standard bar'"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "We should not deploy anything until the model reaches at least 90% accuracy, which is the standard bar for a production system."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — 90% is a reasonable floor for a lending decision, and anything below it exposes the bank to losses the model was meant to prevent
        correct: false
        why: |
          Accuracy and losses are not the same thing. A model at 86% accuracy that catches a third of defaulters may save more money than one at 95% that catches none.
      - label: "B"
        text: |
          Valid — but the bar should be set higher still, since the pipeline already reports 98% and going backwards from that would be hard to justify
        correct: false
        why: |
          Anchoring on a leaked number. The 98% measures recognition of memorised customers, so it is not a level anything honest can be held to.
      - label: "C"
        text: |
          Not valid — there is no such standard, and approving everyone already scores about 86%, so the bar is whether expected cost beats current underwriting
        correct: true
        why: |
          Rejects the invented benchmark and replaces it with the one the business actually cares about: money per application.
      - label: "D"
        text: |
          Not valid — accuracy targets belong in the model specification rather than the deployment gate, so this should be settled by the data team internally
        correct: false
        why: |
          Delegates the one question the owner must not delegate. What counts as good enough is a business decision, not a technical one.
    solution: |
      Two things are wrong with the concern, and you have to catch both.

      **There is no such standard.** "90% accuracy" is not a threshold any regulator, textbook or industry body sets. It is a round number that sounds authoritative.

      **Accuracy is the wrong currency anyway.** With roughly 14% of loans defaulting, the rule "approve everyone" scores about **86%** while catching zero defaulters and requiring no model at all. So 90% is four points above free, and those four points could be earned by a model that is barely doing anything.

      What replaces it is the question the bank actually faces: does automating this decision, at a threshold derived from the costs, produce a lower expected loss per application than the current human rules? That comparison has a unit — shekels — and it is the only bar that means anything.

      Option A is the honest-sounding version of the same error, and it is the one most students pick. The tell is that it slides from "accuracy" to "losses" as though they were interchangeable.

      > [!success] Answer — **C**
      > No such standard exists, 86% is free, and the real bar is expected cost against current underwriting.

      > [!tip] Round numbers are rarely criteria
      > 90%, 95%, "better than a coin flip", "above 50%" — every one of these appears somewhere in this exam's distractors. A criterion has to come from the decision, not from the number line.
    related_terms:
      - accuracy
      - classification

  - id: q6
    title: "Q6 — Monitoring accuracy month by month"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Tracking the model's accuracy month by month in production will tell us when it has gone stale."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — accuracy barely moves when 86% is free, and defaults surface months later, so monitor recall at the operating threshold and the input distributions
        correct: true
        why: |
          Names both failures at once: the metric is insensitive on imbalanced data, and the labels needed to compute it arrive far too late.
      - label: "B"
        text: |
          Valid — a monthly accuracy series is the standard production health check, and a sustained fall is the clearest early signal that retraining is needed
        correct: false
        why: |
          By the time an accuracy series falls visibly on a 14% base rate, the model has been making poor decisions for a long time.
      - label: "C"
        text: |
          Not valid — monitoring is unnecessary once the model has passed its evaluation gate, since the underwriting rules and applicant population change only slowly
        correct: false
        why: |
          Passing a gate is a statement about the past. Populations, competitors and macro conditions all move, and none of them consult the gate.
      - label: "D"
        text: |
          Valid — but the series should be computed weekly rather than monthly, so that a deterioration is caught before too many decisions are affected
        correct: false
        why: |
          Increasing the frequency of a metric that cannot be computed yet, and would not move much if it could, buys nothing.
    solution: |
      The concern is a compliment to a plan that will not work, and the exam wants you to catch that. Two independent problems:

      **The metric is insensitive.** On a portfolio where about 14% default, accuracy is dominated by the 86% majority class. A model whose performance on defaulters halves might move the accuracy series by a couple of points — well inside monthly noise.

      **The labels are not available yet.** This is the more fundamental one. A loan approved in March does not reveal whether it defaults until many months later, once a proper outcome window has elapsed (Q3 of the sample paper). "Accuracy this month" cannot be computed this month for the decisions made this month.

      So what does a monitoring plan actually contain? Two layers:

      | Layer | Available when? | What it catches |
      |---|---|---|
      | Input and output monitoring — feature distributions, approval rate by segment, score distribution | immediately | population drift, upstream data breakage |
      | Outcome metrics — [[recall]] and [[precision]] at the operating threshold, against the majority baseline | after the outcome window matures | genuine performance decay |

      You need the first layer precisely *because* the second one is slow.

      > [!success] Answer — **A**
      > Accuracy is insensitive here and its labels arrive months late; monitor inputs now and outcomes later.
    related_terms:
      - precision-and-recall
      - accuracy

  - id: q7
    title: "Q7 — When the branch officer disagrees"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Nobody has said what a branch officer should do when the model rejects an applicant they can see is creditworthy."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — allowing staff to override the model would undo the consistency automation is meant to deliver, so the absence of a route is deliberate
        correct: false
        why: |
          Consistency is a benefit, not an absolute. A system with no exception path simply relocates the exceptions into complaints and appeals.
      - label: "B"
        text: |
          Valid — every rejected applicant should be reviewable by a human, so the model's role is to order the queue rather than decide anything itself
        correct: false
        why: |
          Reviewing every rejection abandons the speed the project exists to deliver. The question is who may override, not whether everyone does.
      - label: "C"
        text: |
          Valid — an override route, who may use it, and how often it is used all need deciding before launch, and overrides must be logged and reviewed
        correct: true
        why: |
          Treats the override as a designed, bounded, measured mechanism rather than as either forbidden or unlimited.
      - label: "D"
        text: |
          Not valid — this is a training question for branch staff rather than a defect in the model, and it can be settled after the system is live
        correct: false
        why: |
          It is a design question about the decision system as a whole, and leaving it to launch day means it gets answered improvised, case by case.
    solution: |
      The project was framed as *"build a model that tells us which applications to approve and which to reject"*, and that framing quietly assumes there is no human left in the loop. There always is. The only question is whether their role was designed or defaulted into.

      Three things have to be settled before launch, and option C names all three:

      1. **Is there an override route at all**, and in which direction — can a human approve someone the model rejected, reject someone it approved, or both?
      2. **Who may use it**, at what seniority, and with what recorded justification.
      3. **How often it is used**, tracked as a metric in its own right.

      The third is the one people forget, and it is the most informative. An override rate near zero means either the model is good or nobody dares challenge it. A rate of 30% means the model is not really deployed — humans are, and the model is decoration. Either reading changes what you think you have built.

      Option B is the near-miss. Human review is genuinely part of the answer; reviewing *everything* is not, because the bank's problem is that it is "slow and expensive today" while competitors approve in minutes.

      > [!success] Answer — **C**
      > Design the override route, its holders, and its measurement before launch, and log every use.

      > [!tip] Human-in-the-loop is a design, not a fallback
      > "A person can always step in" is only true if someone has decided which person, at what point, with what information, and what happens to the record afterwards.
    related_terms:
      - model-selection
      - classification

  - id: q8
    title: "Q8 — No record of what produced the numbers"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "There is no record of which data and which version of the code produced the numbers we are being asked to approve."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Not valid — the random seeds are fixed at 7 and 42, so the notebook is fully reproducible and anyone can regenerate the results on demand
        correct: false
        why: |
          Seeds make one run repeatable on one machine with one library set. They record nothing about which data or which code version was used.
      - label: "B"
        text: |
          Valid — fixed seeds reproduce a run, not a lineage; a regulated decision needs the dataset version, code version, and owner recorded alongside the result
        correct: true
        why: |
          Draws the distinction the question turns on, and states what a regulated environment actually requires beyond reproducibility.
      - label: "C"
        text: |
          Valid — and this alone should block deployment, since an undocumented model is a regulatory breach regardless of how well it performs on the test set
        correct: false
        why: |
          Right concern, overstated remedy and overstated legal claim. Missing documentation is a gap to close before launch, not an automatic breach.
      - label: "D"
        text: |
          Not valid — the notebook is the record, and it contains every step from data generation through to the recommendation in the order it was run
        correct: false
        why: |
          A notebook is a script that was run once. It does not record which version of itself ran, against which data, or who signed off the output.
    solution: |
      The notebook does fix its seeds:

      ```python
      rng = np.random.default_rng(7)
      keras.utils.set_random_seed(7)
      ```

      That is genuinely useful and genuinely insufficient. **Reproducibility** means the same code on the same data gives the same answer. **Lineage** means you can say, six months later, which data and which code produced the number in the board pack — and who was accountable for it.

      For a decision a regulator can ask about, the second matters more. When an applicant complains about a rejection in March, the bank has to identify the model version that made it, the training data behind that version, the threshold in force, and the person who owns it. None of that is recoverable from a notebook whose contents have since been edited.

      Option C is the calibration trap. It agrees with you and then overshoots into "regulatory breach" and "block deployment on this alone". The finding is real; the escalation is not proportionate to it. Q18 covers what the documentation should actually contain.

      > [!success] Answer — **B**
      > Seeds reproduce a run; a regulated decision needs data version, code version and a named owner.
    related_terms:
      - model-selection
      - scikit-learn-pipeline

  - id: q9
    title: "Q9 — Switching everything over on day one"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "Switching every application over to the model on day one is the fastest way to find out whether it works."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid — a full switch is the only way to observe the model's real effect, since a partial rollout leaves the results too noisy to interpret
        correct: false
        why: |
          A partial rollout is *less* noisy for causal purposes, not more: the control arm absorbs everything else that changes.
      - label: "B"
        text: |
          Valid — speed matters here, because competitors approve online in minutes while the bank remains slow, and a cautious rollout hands them the market
        correct: false
        why: |
          Speed is a real pressure and a genuine reason to act. It is not a reason to make the one change that destroys your ability to measure it.
      - label: "C"
        text: |
          Not valid — the rollout should instead wait until the model has been retrained on a full year of fresh data, at which point it can go live
        correct: false
        why: |
          Waiting a year produces the same untested full switch, later, on data the current process filtered.
      - label: "D"
        text: |
          Not valid — with no comparison group you cannot separate the model's effect from everything else changing, and there is nothing to fall back to
        correct: true
        why: |
          Names both costs of a full switch: no counterfactual to measure against, and no unaffected path to retreat to.
    solution: |
      A full cutover looks like the fastest experiment and is in fact not an experiment at all.

      **You lose the counterfactual.** If defaults fall over the next two quarters, was that the model, or a stronger labour market, or a change in the marketing mix, or seasonality? With every application routed through the model, there is nothing to compare against, and every claim about impact becomes an argument rather than a measurement.

      **You lose the retreat.** If something goes wrong — a broken upstream feed, an unexpected segment, a compliance objection — the bank has no parallel path still running. Rebuilding a decommissioned human process under pressure is far harder than keeping it warm.

      Option B is the strongest distractor because its premise is true and stated in the brief: the bank is "slow and expensive today; competitors approve online in minutes". Commercial urgency is real. It argues for moving quickly through a staged rollout, not for skipping the stages.

      > [!success] Answer — **D**
      > No comparison group means no measurable effect, and no parallel path means no way back.

      > [!tip] Speed and rigour are not opposites here
      > A random 10% arm produces a defensible impact estimate within one outcome window. A 100% switch produces a plausible story forever. See Q17 and Q20.
    related_terms:
      - train-test-split
      - correlation-vs-causation

  - id: q10
    title: "Q10 — A number reported without uncertainty"
    text: |
      A member of your team raises the following concern about the pipeline:

      > "The 98% figure is reported to two significant figures with no sense of how much it would move under a different split."

      Reviewing the code and its outputs yourself — is this concern valid?
    options:
      - label: "A"
        text: |
          Valid, but secondary — an interval around a leaked number describes nothing; the figure's problem is what it measures, not how precisely it measures it
        correct: true
        why: |
          Accepts the technical point and ranks it correctly beneath the defect that makes the number meaningless in the first place.
      - label: "B"
        text: |
          Valid — every reported metric needs an interval, and without one the comparison between the two models cannot be assessed at all by a reader
        correct: false
        why: |
          Overstates a real practice into a blocking requirement, and implies the comparison would be sound once intervals were added.
      - label: "C"
        text: |
          Not valid — the seed is fixed, so the number is exactly reproducible and an interval would add nothing that the reader does not already have
        correct: false
        why: |
          Confuses reproducibility with precision. A number you can regenerate exactly can still be a highly unstable estimate.
      - label: "D"
        text: |
          Not valid — intervals matter for small samples, and with over six thousand rows the estimate is stable enough for a decision of this kind
        correct: false
        why: |
          Those 6,557 rows are only about 1,200 customers, so the effective sample is far smaller than the row count suggests.
    solution: |
      This is the "true but subordinate" question of Part 1, and the skill being marked is **ranking**, not detection.

      The concern is technically correct. `accuracy_score` returns a point estimate from one split with `random_state=42`, and nothing reports how much it would move under another. In a clean pipeline that would be worth fixing — a repeated split or a [[cross-validation|cross-validated]] estimate with a spread.

      But this pipeline is not clean. The 98% comes from features computed out of the label and from customers appearing on both sides of the split. An interval around that number would tell you, with great precision, how stable a measurement of the wrong quantity is. Fixing the reporting before fixing the measurement is polish on a broken instrument.

      Option D contains a fact worth carrying: **6,557 rows are not 6,557 independent observations.** With 3–8 rows per customer and about 1,200 customers, the effective sample is roughly a fifth of what the row count implies — which makes the estimate *less* stable than D claims, not more.

      > [!success] Answer — **A**
      > The point is valid but secondary; an interval around a leaked number still describes the wrong thing.

      > [!quote] The exam skill
      > "A business owner who escalates everything equally is as unhelpful as one who escalates nothing." Part 1 keeps testing whether you can hold a true observation and still say *not first*.
    related_terms:
      - cross-validation
      - accuracy

  - id: q11
    title: "Q11 — Plan: deriving the threshold from the costs"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The cutoff sits at 0.5 although the two kinds of error cost the bank roughly ten times different amounts."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Move the cutoff to 0.1, since a missed defaulter costs about ten times a wrong rejection and the ratio should set the number directly
        correct: false
        why: |
          The ratio gives the right theoretical point only for calibrated probabilities. Neither model's raw score is calibrated, so the number must be found empirically.
      - label: "B"
        text: |
          Keep 0.5 for launch and revisit once six months of live decisions have accumulated, accepting some avoidable losses as the price of a simple start
        correct: false
        why: |
          The losses are avoidable today with a validation sweep. Paying them for six months buys nothing that the sweep would not have given you free.
      - label: "C"
        text: |
          Let each branch set its own cutoff within an agreed band, so local knowledge of the applicant population feeds into where the line is drawn
        correct: false
        why: |
          Identical applicants would receive different decisions by location, which is an explainability and fairness problem the regulator will find first.
      - label: "D"
        text: |
          Write down the cost of each error type, sweep the threshold on validation data, and pick the value minimising expected cost per application
        correct: true
        why: |
          Turns the threshold into a measured optimisation against stated costs, on data that is not the test set.
    solution: |
      Start from the expected cost of a decision rule. For a given threshold $t$:

      $$\text{Expected cost}(t) = C_{FN}\,\cdot\,\text{FN}(t) \;+\; C_{FP}\,\cdot\,\text{FP}(t)$$

      with $C_{FN}$ the loss on a missed defaulter (roughly the outstanding principal, tens of thousands of shekels on a typical 70,000-shekel loan) and $C_{FP}$ the forgone interest margin on a wrongly rejected applicant, roughly a tenth of that.

      **Why A is nearly right, and instructive.** For a perfectly calibrated probability, the cost-minimising threshold is

      $$t^{*} = \frac{C_{FP}}{C_{FP} + C_{FN}} \approx \frac{1}{1 + 10} \approx 0.09$$

      which is essentially the 0.1 that option A proposes. So A has the correct formula and the correct direction. What it lacks is the condition the formula depends on: **the score has to be an honest probability.** A neural network's sigmoid output and a Random Forest's vote share are both scores, and neither is calibrated by default. Applying 0.09 to an uncalibrated score lands somewhere unpredictable.

      D does the same thing without the assumption: state the costs, evaluate every candidate threshold on the validation set, and read off the minimum. It also lands on the right set of data — validation, never test, or you burn the final estimate exactly as Q18 of the sample paper warns.

      > [!success] Answer — **D**
      > State the two costs, sweep the threshold on validation, and take the expected-cost minimum.

      > [!tip] Recalibrate, then you may use the formula
      > If you calibrate the scores first — Platt scaling, isotonic regression — the closed-form threshold becomes usable again. A is a plan missing a step, which is why it belongs in Part 2 rather than Part 1.
    related_terms:
      - cost-function
      - precision-and-recall

  - id: q12
    title: "Q12 — Plan: giving the regulator a reason"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The regulator requires a plain-terms reason for each rejection, and the pipeline outputs only a number between zero and one."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Send rejected applicants the model's probability with a short note explaining that it was produced by an automated system trained on historical lending outcomes
        correct: false
        why: |
          "Your score was 0.83" is not a reason in plain terms. It restates the decision rather than explaining what drove it.
      - label: "B"
        text: |
          Require per-decision reason codes drawn from the model's own logic, checked by compliance against real rejections, and treat explainability as a launch condition
        correct: true
        why: |
          Ties the explanation to the actual decision path, validates it on real cases, and makes it a gate rather than a follow-up task.
      - label: "C"
        text: |
          Have a compliance officer write a plausible reason after each rejection, based on the applicant's weakest field, so every letter carries a human-readable justification
        correct: false
        why: |
          A plausible reason invented after the fact is not the reason. If the model did not use that field, the letter is a fabrication.
      - label: "D"
        text: |
          Fit a simple logistic regression alongside the model and use its coefficients to explain the decisions the main model actually made
        correct: false
        why: |
          A separate model explains its own decisions, not the deployed one's. Where they disagree, the explanation is simply wrong.
    solution: |
      The requirement in the brief is specific: explain **why any particular application was rejected**, in plain terms. That is a per-decision obligation, not a description of the method.

      Rank the four options by how close the explanation sits to the decision that was actually made:

      | Plan | What the applicant is told | Is it the real reason? |
      |---|---|---|
      | A — send the score | a number and a disclaimer | no; it restates the outcome |
      | C — officer writes one | a plausible-sounding field | no; constructed after the fact |
      | D — surrogate [[logistic-regression\|logistic model]] | the surrogate's coefficients | only where the two models agree |
      | B — reason codes from the model | the drivers of this decision | yes, and it is validated |

      D is the one that catches good students, because surrogate modelling is a real technique. The failure is subtle: a surrogate approximates the deployed model *on average*. The cases where it diverges are disproportionately the borderline ones — which are exactly the ones that get appealed.

      B also does something the others do not: it makes explainability a **launch condition**. That has a consequence the bank should face up front. If a model cannot be explained per decision, it cannot ship, and that constraint is part of why [[random-forest|tree-based models]] hold an advantage here over a network needing extra tooling.

      > [!success] Answer — **B**
      > Reason codes from the model's own logic, validated by compliance, with explainability as a gate.
    related_terms:
      - random-forest
      - logistic-regression

  - id: q13
    title: "Q13 — Plan: breaking the feedback loop"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "Once live, the model will only see outcomes for applications it approved, so its blind spots will harden with every retrain."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Retrain more often, so that any drift caused by the model's own filtering is corrected before it has time to accumulate into a real problem
        correct: false
        why: |
          Retraining is the mechanism that hardens the bias. Doing it more often accelerates the loop rather than breaking it.
      - label: "B"
        text: |
          Add the model's own score as a feature at the next retrain, so later versions can see and correct for how earlier ones filtered the data
        correct: false
        why: |
          The score is available for everyone, but outcomes still exist only for approvals. The gap in the labels is untouched.
      - label: "C"
        text: |
          Keep approving a small random share of borderline rejections permanently, budget the losses as the cost of the data, and retrain on that unfiltered slice
        correct: true
        why: |
          Generates genuinely unfiltered observations on a continuing basis, and states the price openly rather than hoping it is free.
      - label: "D"
        text: |
          Buy outcome data from a credit bureau covering applicants the bank rejected, and use it to fill the gap the model's filtering creates
        correct: false
        why: |
          Bureau data covers only rejected applicants who borrowed elsewhere, on different terms — a selected sample of a selected sample.
    solution: |
      Q3 established the loop: the model rejects, no outcome is observed, the next model rejects harder. Only one of these four plans introduces new information into it.

      **Why the random share has to be permanent.** A one-off experiment tells you about the population as it stood that quarter. The feedback loop is continuous, so the correction has to be too. A standing random-approval holdout — say one or two percent of borderline rejections — is the model's only ongoing source of ground truth about the region it refuses.

      **The cost is real and should be named.** Some of those loans will default; on a 70,000-shekel typical loan, at a default rate above the book average because these are borderline cases, the annual bill is a number the bank can compute in advance and put in a budget line. Option C says so explicitly. That is the business judgement being tested: this is not a failure, it is a purchase.

      **Why D deserves more than a dismissal.** Buying bureau outcomes is a genuine industry practice for reject inference, and it is better than nothing. It is not a solution here because the applicants it covers are those who went elsewhere and were approved elsewhere — a second selection on top of the first, at different terms, with different loan sizes. It narrows the gap; it does not close it, and it cannot tell you what would have happened on *your* loan.

      > [!success] Answer — **C**
      > A permanent random-approval holdout on borderline rejections, with the losses budgeted as data cost.

      > [!warning] The plan that sounds most technical is the worst one
      > Option B — "add the model's own score as a feature" — is the sort of proposal that survives a meeting because nobody wants to admit they cannot follow it. It changes the features and leaves the missing labels exactly as missing.
    related_terms:
      - supervised-learning
      - missing-values

  - id: q14
    title: "Q14 — Plan: noticing when the population moves"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "Nobody would notice if the applicant population shifted away from the population the model was trained on."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Baseline each input's distribution on the training data, compare the live monthly distributions against it, and alert on shifts in inputs or approval rates by segment
        correct: true
        why: |
          Detects drift from inputs alone, which are available immediately, rather than waiting for outcomes that mature months later.
      - label: "B"
        text: |
          Compare the model's average predicted probability each month against its training average, since a drift in inputs will show up in the scores it produces
        correct: false
        why: |
          A single average can stay put while the distribution beneath it changes shape, and it says nothing about which input moved.
      - label: "C"
        text: |
          Retrain the model every month on the most recent data available, so that it tracks the population automatically and drift never has time to build up
        correct: false
        why: |
          Silent adaptation is worse than detected drift: the model changes monthly, nobody is told why, and the feedback loop from Q13 runs unchecked.
      - label: "D"
        text: |
          Ask the underwriting team to flag it when applicants start to look unfamiliar, since experienced staff notice a change in the mix long before a metric does
        correct: false
        why: |
          Once decisions are automated, staff stop seeing the applications, so the very people being relied on lose their view of the population.
    solution: |
      Drift monitoring is the layer that works **before the labels arrive**, and that is its whole point. A loan approved today reveals its outcome many months from now; the applicant population can move long before then.

      What option A specifies, concretely:

      - a **baseline** for every input — income, credit score, loan amount, employment type, missingness rates — computed once on the training data;
      - a **monthly comparison** of the live distribution against that baseline;
      - **alerts** on both the inputs and the downstream approval rate, **broken out by segment**.

      The segment split is the part that earns its place. A stable overall approval rate can conceal the self-employed share collapsing while the salaried share rises — precisely the asymmetry Q4 identified, now moving in production.

      Option B is the plausible shortcut and fails on a simple statistical point: the mean of the predicted probabilities is one number summarising a whole distribution. Half the applicants shifting up and half shifting down leaves it untouched, and even when it does move, it cannot tell you *which* feed broke.

      Option C deserves attention because it is a real strategy that many teams adopt. Continuous retraining is not monitoring — it is unsupervised change. The model in production next month differs from this month's, nobody has approved the difference, and the documentation from Q18 is stale on arrival.

      > [!success] Answer — **A**
      > Baseline the inputs, compare monthly, and alert on both input shifts and segment approval rates.
    related_terms:
      - distributions
      - summary-statistics

  - id: q15
    title: "Q15 — Plan: a segment the model handles badly"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The corrected model performs noticeably worse for self-employed applicants than for salaried ones."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Train a separate model for self-employed applicants, so their weaker data does not drag down performance on the salaried majority the bank mostly lends to
        correct: false
        why: |
          A second model faces the same 30% missing income on a quarter of the sample, and doubles what has to be governed, documented and monitored.
      - label: "B"
        text: |
          Drop `self_employed` from the feature set, so the model cannot use employment type and the two groups are necessarily scored on the same basis
        correct: false
        why: |
          Removing the flag does not remove the information; income patterns and missingness still identify the group, now without the model saying so.
      - label: "C"
        text: |
          Weight self-employed rows more heavily during training until per-segment performance evens out, then deploy the single model across the whole applicant population
        correct: false
        why: |
          Reweighting can only redistribute signal that exists. It cannot create income data the bank never collected for those applicants.
      - label: "D"
        text: |
          Report metrics per segment, set a minimum each must clear before launch, and route self-employed applicants to human underwriters if theirs is not met
        correct: true
        why: |
          Makes the segment bar an explicit launch condition and provides a concrete answer for the case where it is not met.
    solution: |
      Notice what the four plans disagree about. A, B and C are all attempts to make the number better. D is the only one that asks **what happens if it cannot be made better**, and that is the question a business owner has to answer before launch, not after.

      The underlying constraint is stubborn. Self-employed applicants are missing income at 30% against 5%, and no modelling technique manufactures the missing values. You can reweight, you can split the model, you can hide the flag — the bank still knows less about a quarter of its applicants than about the rest.

      So the plan has to have a branch in it:

      1. **Measure per segment.** Recall, precision and approval rate for self-employed and salaried separately, not just in aggregate.
      2. **Set a floor for each** before you see which model wins, for the same reason criteria are fixed before numbers are read.
      3. **Decide the fallback now.** If the self-employed floor is not met, those applications go to a human underwriter rather than through the automated path.

      That fallback costs speed on a quarter of the book — and it is the honest price of not automating a decision you cannot make well.

      Option B is worth dwelling on because it is the most common instinct and it is actively counterproductive. Removing a protected or sensitive attribute does not make a model blind to the group; it makes the model's use of the group unobservable. You lose the ability to measure the disparity while keeping the disparity.

      > [!success] Answer — **D**
      > Per-segment metrics, a floor each must clear, and human underwriting for the segment that misses it.
    related_terms:
      - customer-segmentation
      - precision-and-recall

  - id: q16
    title: "Q16 — Plan: how often to retrain"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "Nobody has decided how often the model will be retrained, or what has to be true before a new version replaces the live one."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Retrain nightly on all data available that morning, so the live model is never more than a day behind the population it is scoring
        correct: false
        why: |
          Labels take months to mature, so a nightly retrain adds almost no new outcome information while changing the deployed model every day.
      - label: "B"
        text: |
          Retrain whenever the monitored accuracy falls below the level recorded at launch, so effort is spent only when the model has genuinely degraded
        correct: false
        why: |
          Triggering on accuracy inherits every problem from Q6: it barely moves on a 14% base rate and its labels arrive far too late.
      - label: "C"
        text: |
          Set a cadence from how long labels take to mature, and put every candidate version through the same evaluation gate before it replaces the incumbent
        correct: true
        why: |
          Ties the schedule to when genuinely new information exists, and makes replacement conditional rather than automatic.
      - label: "D"
        text: |
          Freeze the launch version and leave it unchanged, so the regulator always sees one documented model and the explanations given never shift underneath applicants
        correct: false
        why: |
          Stability is a real virtue, but a frozen model drifts away from the population while its documentation stays reassuringly accurate.
    solution: |
      Two decisions hide inside "how often should we retrain", and option C is the only plan that makes both.

      **The cadence.** Retraining is only worth doing when new *labelled* data exists. With a fixed outcome window — say default within 24 months of origination, per the label fix — a cohort becomes usable a long time after it was approved. Retraining faster than labels mature means refitting on essentially the same information and calling it an update.

      **The gate.** A new version is not automatically better than the incumbent. Every candidate should clear the same bar the launch model cleared: per-segment metrics, the threshold re-derived from costs, the explainability check, and documentation. Then, and only then, does it replace what is live — and the champion/challenger comparison from Q17 is how you confirm it in production.

      Option A is the engineer's instinct (fresher is better) applied to a problem where freshness is bounded by biology, not by compute. Option D is the compliance instinct, and it fails in the opposite direction: the model does not change, so the world changing is invisible in every report.

      > [!success] Answer — **C**
      > Cadence set by label maturity, and the same evaluation gate for every candidate version.
    related_terms:
      - validation-set
      - model-selection

  - id: q17
    title: "Q17 — Plan: how the model reaches live traffic"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "There is no plan for how the model would be introduced to live applications."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Launch it to a single branch first, and extend across the network once that branch's default rate over the following quarter looks acceptable to the risk committee
        correct: false
        why: |
          One branch is one applicant population, so the comparison confounds the model with the local market — and one quarter is too short for outcomes.
      - label: "B"
        text: |
          Run it in shadow first — scoring applications while humans still decide — then give it a random share of real decisions once the two are compared
        correct: true
        why: |
          Shadow mode surfaces disagreements at zero risk, and the random share that follows produces a clean comparison against current underwriting.
      - label: "C"
        text: |
          Give the model only the applications the current rules find borderline, and leave the clear approvals and the clear rejections to the existing underwriting process
        correct: false
        why: |
          The model is then evaluated only on the hardest slice, and never tested on the decisions that make up most of the bank's volume.
      - label: "D"
        text: |
          Deploy it as a second opinion that underwriters may consult, and revisit full automation once they have built up confidence in its recommendations over time
        correct: false
        why: |
          Confidence is not a measurement, and an advisory model changes human decisions in ways that contaminate the comparison you wanted.
    solution: |
      Option B describes two stages, and they do different jobs.

      **Shadow mode.** The model scores every incoming application and its output is recorded, but humans still make every decision. Nothing is at risk. What you learn is where the model and the underwriters disagree, and disagreement is the most informative signal available before launch: pull fifty cases where the model rejects and the human approves, read them, and you will find either a model defect or a rule the humans have been applying that nobody wrote down.

      **Then a random share.** Once the disagreements make sense, route a random slice of applications to the model for real decisions. Random, so the two arms are comparable; a slice, so the exposure is bounded. This is the champion/challenger arrangement, and it is what Q20 needs in order to measure impact at all.

      Option D is the most seductive because it sounds like caution. It is the worst of both worlds: the model influences decisions, so you cannot attribute outcomes to it, and it is never actually accountable for one. "Advisory" deployments tend to become permanent, with all the influence of automation and none of the measurement.

      Option A confounds the model with the branch. If the pilot branch serves a wealthier catchment, its default rate falls for reasons that have nothing to do with modelling.

      > [!success] Answer — **B**
      > Shadow mode to surface disagreements, then a random share of real decisions.
    related_terms:
      - train-test-split
      - model-selection

  - id: q18
    title: "Q18 — Plan: what has to be written down"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "Nothing records what the model does, what data it was built on, or where it is known to be weak."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Require a signed-off document covering data lineage, the label definition, per-segment metrics, the threshold rationale, known limitations, the named owner and a review date
        correct: true
        why: |
          Specifies the contents rather than gesturing at documentation, and includes the two items teams omit: limitations and an accountable owner.
      - label: "B"
        text: |
          Publish the notebook to a shared drive with the markdown comments expanded, so any colleague or auditor can read the full method end to end
        correct: false
        why: |
          The notebook records what was run, not what was decided. Its own comments already call hyperparameters "model parameters".
      - label: "C"
        text: |
          Have the data team maintain a running changelog of every modelling change made, so the history of the model is always available if anyone asks
        correct: false
        why: |
          A changelog captures movement without ever stating the current position, its limits, or who is answerable for it.
      - label: "D"
        text: |
          Ask the regulator what documentation they require and produce exactly that, since anything beyond their standard is effort the bank does not need to spend
        correct: false
        why: |
          Documentation exists for the bank's own decisions first. Writing to the minimum external standard leaves the internal questions unanswered.
    solution: |
      "Document the model" is easy to agree to and easy to leave undone, which is why option A names the contents. Each item exists because something on this exam went wrong without it:

      | Item | Why it is on the list |
      |---|---|
      | Data lineage | which dataset version, from which source systems, in which units (Q5 and Q17 of the sample paper) |
      | Label definition | "default within N months of origination", the fixed window (Q3 and Q15 of the sample paper) |
      | Per-segment metrics | so the self-employed gap is on the record, not buried in an average (Q15, Q24) |
      | Threshold rationale | why the cutoff is where it is, in terms of the two error costs (Q11) |
      | Known limitations | selection bias on approved loans only — a limitation no code fixes |
      | Named owner | someone answerable when an applicant complains about a March rejection |
      | Review date | so the document expires rather than quietly becoming false |

      Two of those are the ones teams skip. **Known limitations** is uncomfortable to write, because it is a list of reasons your model might be wrong, in your own words, on the record. **Review date** is what stops the pack becoming an artefact everyone cites and nobody has reread.

      Option B is worth naming plainly: the notebook is the least trustworthy narrator available. Its markdown cells describe hyperparameters as "model parameters" and assert "no tuning needed". Publishing it more widely distributes the confusion.

      > [!success] Answer — **A**
      > A signed-off pack: lineage, label, per-segment metrics, threshold rationale, limitations, owner, review date.
    related_terms:
      - model-selection
      - hyperparameter-tuning

  - id: q19
    title: "Q19 — Plan: how the rollout stops"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The rollout plan describes how the model goes live but says nothing about how it would be stopped."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Give the head of risk authority to suspend the model at any time, which covers every scenario without committing the bank to thresholds set in advance
        correct: false
        why: |
          Authority without criteria means the decision gets made under pressure, by someone weighing a project they are invested in.
      - label: "B"
        text: |
          Agree the numbers that trigger a rollback before launch, keep human underwriting able to take the volume, and rehearse the switch back before going live
        correct: true
        why: |
          Pre-commits the criteria while judgement is cold, and makes sure the fallback path physically works rather than assuming it does.
      - label: "C"
        text: |
          Add a monthly review meeting at which the model's performance is discussed and its continuation confirmed, so problems surface within a bounded period
        correct: false
        why: |
          A meeting is a forum, not a rule. Without agreed numbers it discusses whatever the room finds salient that month.
      - label: "D"
        text: |
          Cap the exposure instead by limiting automated approvals to loans below 50,000 shekels, which bounds the damage without needing a stopping rule at all
        correct: false
        why: |
          Bounding the loss per decision is sensible and unrelated. It does not tell anyone when the system should stop making decisions.
    solution: |
      Three components, and option B has all of them.

      **Pre-agreed numbers.** Approval rate outside an agreed band, override rate above a threshold, complaint volume, a monitored input distribution breaking its bounds, per-segment approval rates diverging. Written down before launch, when nobody is defending anything.

      **A fallback with capacity.** Human underwriting has to still be able to absorb the volume. If the team was reduced on day one because the model was going to handle everything, there is no rollback — there is only a slower version of continuing.

      **A rehearsal.** Switch the traffic back before going live and confirm it works. Untested recovery paths fail exactly when they are needed, and this is the clause that separates a real plan from a paragraph in a slide deck.

      Option A is the standard organisational answer and the reason kill criteria exist. Discretion is fine in principle; in practice the person holding it is the person who sponsored the project, deciding under time pressure, with the sunk cost visible and the counterfactual invisible. Criteria fixed in advance are how you protect a decision from the circumstances in which it gets made.

      > [!success] Answer — **B**
      > Numbers agreed beforehand, human underwriting kept able to take the volume, and the switch rehearsed.

      > [!tip] The same move as Q21 of the sample paper
      > Setting kill criteria before launch is the deployment version of setting model criteria before seeing the numbers. Both exist to stop you grading your own work after the fact.
    related_terms:
      - model-selection
      - classification

  - id: q20
    title: "Q20 — Plan: measuring the business impact"
    text: |
      The following concern is real and confirmed. The data team proposes four ways forward:

      > "The team plans to measure the model's value by comparing the default rate before and after it goes live."

      Which plan do you approve?
    options:
      - label: "A"
        text: |
          Compare defaults on model-approved loans against defaults on loans the underwriters approved over the same period, which removes any confounding from the calendar
        correct: false
        why: |
          The two groups are not comparable: each was selected by a different rule, so the difference measures the selection as much as the model.
      - label: "B"
        text: |
          Keep the before-and-after comparison but adjust for unemployment and interest rates over the window, so the macroeconomic backdrop cannot explain the difference away
        correct: false
        why: |
          Adjusting for the confounders you thought of leaves the ones you did not. A control arm handles all of them at once.
      - label: "C"
        text: |
          Run the model in one region and the current rules in another, then compare default rates across the two after a full year of lending
        correct: false
        why: |
          Regions differ in employment mix, income and property markets, so the comparison confounds the model with the geography.
      - label: "D"
        text: |
          Route a random share of applications to the model and the rest to current underwriting, then compare the two arms over a fixed outcome window
        correct: true
        why: |
          Randomisation makes the two arms comparable on everything, observed or not, so the difference is attributable to the model.
    solution: |
      The four plans are four positions on one question: **what is the comparison group, and how was it formed?**

      | Plan | Comparison group | What contaminates it |
      |---|---|---|
      | Before-and-after | last year's applicants | everything else that changed with the calendar |
      | B — adjusted before-and-after | last year, minus two controls | every confounder not on the list |
      | A — model-approved vs human-approved | a differently-selected group | the selection rule itself |
      | C — region against region | a different market | the geography |
      | D — random arms | statistically identical applicants | nothing systematic |

      Option A is the one that catches people, because it feels like a controlled comparison — same period, same bank, two groups. But the groups were formed by the very rules being compared. The model's approvals are the applicants the model liked; the underwriters' approvals are the applicants they liked. Any difference in default rates reflects the selection at least as much as the quality of the decision.

      Randomisation is the only assignment mechanism that balances the things you did not think to measure. And the **fixed outcome window** in D matters as much as the randomisation: comparing arms observed for different lengths of time reproduces the unanchored-label defect from the sample paper, now in your impact study.

      > [!success] Answer — **D**
      > Random assignment to model and current underwriting, compared over a fixed outcome window.

      > [!warning] The measurement you can only take once
      > Randomisation has to be built into the rollout from the start. Once every application flows through the model (Q9), there is no comparison group left to construct and no way to recover one afterwards.
    related_terms:
      - correlation-vs-causation
      - train-test-split

  - id: q21
    title: "Q21 — What go/no-go is a decision about"
    text: |
      The model decision:

      > "The board asks you to bring them a single go/no-go recommendation on the data team's model."

      What should that decision actually be a decision about?
    options:
      - label: "A"
        text: |
          Whether the model's performance is good enough in absolute terms to justify replacing a process that has served the bank adequately for years
        correct: false
        why: |
          "Good enough in absolute terms" has no unit. Every version of that question collapses into an arbitrary number like the 90% bar in Q5.
      - label: "B"
        text: |
          Whether the data team has fixed every defect identified in the review, since an unresolved defect list is what a go decision would be signing off
        correct: false
        why: |
          One defect — selection bias on approved loans only — cannot be fixed at all, so this criterion can never be satisfied.
      - label: "C"
        text: |
          Whether automating at the chosen threshold beats current underwriting on expected cost per application, while meeting the explainability and segment constraints
        correct: true
        why: |
          Names the comparison (against the status quo), the unit (cost per application) and the constraints that money cannot express.
      - label: "D"
        text: |
          Whether the bank can afford the reputational risk of an automated rejection going wrong, weighed against the commercial cost of remaining slower than competitors
        correct: false
        why: |
          Both risks are real inputs, but neither is the decision. This trades two vague quantities without measuring either.
    solution: |
      A go/no-go is a comparison, and the thing being compared to is easy to forget: **the process the bank runs today.** Not perfection, not a benchmark, not the 98% in the notebook. Human underwriters, applying fixed rules, on a book where about 14% default.

      So the question has three parts, and C has all three:

      1. **Against the status quo.** The model does not have to be good. It has to be better than what it replaces.
      2. **In shekels per application.** Expected cost is the only unit that lets a missed defaulter and a wrongly rejected applicant be compared at all, and it is computed at the threshold you will actually operate (Q11), not at 0.5.
      3. **Subject to constraints.** Explainability is a hard requirement from the regulator, and per-segment performance is a bar the bank sets itself (Q15). Neither converts cleanly into money, and both can veto a model that wins on cost.

      Option B is the disciplined-sounding wrong answer. "Fix every defect first" is unmeetable here: the warehouse stores approved loans only, and no amount of engineering recovers outcomes for people who were never lent to. A criterion that can never be satisfied is not a high standard — it is an abdication, because in practice it gets quietly abandoned rather than met.

      > [!success] Answer — **C**
      > Does automating at the chosen threshold beat current underwriting on expected cost, within the constraints?

      > [!tip] "Compared to what?"
      > The most useful three words an owner can say in a model review. Every number in the notebook is missing them.
    related_terms:
      - model-selection
      - cost-function

  - id: q22
    title: "Q22 — Putting numbers on the two errors"
    text: |
      The model decision:

      > "Per 1,000 applications, about 140 would default under current rules. At the chosen threshold the model would catch 50 of those 140, and would also reject 200 applicants who would have repaid. A missed defaulter costs roughly 70,000 shekels; a wrongly rejected applicant costs roughly 7,000 in forgone margin."

      What does the arithmetic support?
    options:
      - label: "A"
        text: |
          A net gain near 2.1 million shekels per thousand applications, so the arithmetic favours approval, subject to the constraints this calculation does not price
        correct: true
        why: |
          3.5 million saved against 1.4 million forgone, and it is careful to say that explainability and segment stability sit outside the sum.
      - label: "B"
        text: |
          A poor trade: the model turns away four good customers for every defaulter it stops, which is a ratio no lending business should accept
        correct: false
        why: |
          The 4:1 count is right and the conclusion is wrong, because the costs run 10:1 the other way. Counts do not settle a decision about money.
      - label: "C"
        text: |
          Nothing yet, because the calculation needs the model's accuracy at that threshold before the two error counts can be weighed against each other properly
        correct: false
        why: |
          Accuracy adds nothing the counts do not already contain, and would import the majority class that makes it uninformative here.
      - label: "D"
        text: |
          A net loss, since 200 rejected customers is a larger number than the 50 defaults caught and each rejection also damages the bank's reputation
        correct: false
        why: |
          Compares two counts of different things as though a customer and a default were the same unit. They differ by a factor of ten.
    solution: |
      Do the arithmetic per 1,000 applications.

      **Defaults prevented:**

      $$50 \times 70{,}000 = 3{,}500{,}000 \text{ shekels saved}$$

      **Good customers turned away:**

      $$200 \times 7{,}000 = 1{,}400{,}000 \text{ shekels forgone}$$

      **Net:**

      $$3{,}500{,}000 - 1{,}400{,}000 = 2{,}100{,}000 \text{ shekels per thousand applications}$$

      The model wins by roughly 2.1 million per thousand applications, and it wins **while making four times as many errors of the cheap kind as it prevents of the expensive kind.** That is not a flaw in the design; it is the design. When one error costs ten times the other, a rule that trades four cheap errors for one expensive one avoided is a good rule.

      Option B is the whole question in one distractor. Its factual claim — 200 wrong rejections against 50 defaults caught, a 4:1 ratio — is correct. Its conclusion inverts the economics, because it counts decisions instead of pricing them. D makes the same mistake more crudely.

      What the last clause of A protects you from is over-reading the sum. Expected cost does not contain the regulator's explainability requirement, does not contain the self-employed gap from Q24, and does not contain the risk that the model's estimates are themselves built on a selected population. A positive number is a necessary condition for go, not a sufficient one.

      > [!success] Answer — **A**
      > About +2.1 million per thousand applications, subject to the constraints the arithmetic cannot price.

      > [!warning] Where these counts have to come from
      > 50 caught and 200 wrongly rejected are read off a [[confusion-matrix]] computed at the operating threshold, on a validation set, after the leakage is removed. Run the same sum on the notebook's leaked model and you get a fantasy in shekels.
    related_terms:
      - confusion-matrix
      - cost-function

  - id: q23
    title: "Q23 — 'You don't have the background to assess this'"
    text: |
      The model decision:

      > "You press the team on the evaluation. They reply that you do not have the modelling background to assess it, and that the results speak for themselves."

      What is the defensible response?
    options:
      - label: "A"
        text: |
          Accept the point on the modelling itself, and confine your review to the business questions the team is not in a position to answer for you
        correct: false
        why: |
          The division does not hold. Which columns exist on decision day and what the baseline scores are both technical and squarely business questions.
      - label: "B"
        text: |
          Commission an external consultant to review the pipeline, since an argument between a business owner and a data team cannot be settled from the inside
        correct: false
        why: |
          Sometimes reasonable, but it outsources a judgement you can make today and treats a checkable disagreement as a clash of authorities.
      - label: "C"
        text: |
          Insist the team present to the board directly, so the recommendation and the confidence behind it sit with the people who actually produced them
        correct: false
        why: |
          Moves the accountability without testing the claim. The board would hear the same confident summary with the same defects intact.
      - label: "D"
        text: |
          Ask for three things any owner can check: what each column means on decision day, what approving everyone scores, and how many defaulters are caught
        correct: true
        why: |
          Each request is answerable in plain language, and each one exposes a specific defect without needing any modelling expertise at all.
    solution: |
      "You lack the background" is a claim about you, offered instead of an answer. The reply that works is not an argument about credentials — it is three requests that require none.

      **1. What does each column mean, and would we know it on the day the application arrives?** This needs no mathematics. It surfaces `avg_days_late` and `collections_flag` immediately, because no honest answer to "when do we learn this?" puts them before the loan exists.

      **2. What does the do-nothing rule score?** "Approve everyone" scores about 86% on a book where 14% default. Once that is on the table, 98% stops being a triumph and starts being a question.

      **3. How many of the customers who defaulted did we catch?** [[recall]], asked in English. The pipeline never computes it, and "we didn't measure that" is itself the finding.

      Notice the structure. Each request is a plain-language question about the business, each has an answer that is either a number or an admission, and none can be deflected on expertise. If the team can answer all three convincingly, your concerns were misplaced and you have learned something. If they cannot — or will not — then the refusal is the result of the review, not an obstacle to it.

      > [!success] Answer — **D**
      > Three questions any owner can ask: column meanings on decision day, the baseline, and defaulters caught.

      > [!quote] From the brief
      > You are asked to judge work that "looks convincing". Confidence is part of what makes it look convincing, and confidence is not evidence about anything except the speaker.
    related_terms:
      - recall
      - data-leakage

  - id: q24
    title: "Q24 — One headline, two populations"
    text: |
      The model decision:

      > "The corrected model catches 41% of defaulters among salaried applicants and 22% among the self-employed, who are about a quarter of the book. The headline figure quoted to the board is 36%."

      What follows?
    options:
      - label: "A"
        text: |
          The gap reflects genuinely thinner data for the self-employed, so it is a limitation to record rather than something the deployment decision should turn on
        correct: false
        why: |
          The cause is right and the conclusion is not. A quarter of applicants being scored materially worse is a decision input, not a footnote.
      - label: "B"
        text: |
          The 36% headline averages two different models of the world, and whether the self-employed are automated at all is now a separate decision
        correct: true
        why: |
          Reads the headline as the weighted average it is, and converts the gap into the decision it actually forces.
      - label: "C"
        text: |
          The threshold should be lowered for self-employed applicants until their share of defaulters caught matches the salaried figure, evening out the treatment across groups
        correct: false
        why: |
          Equalising recall by group means rejecting far more self-employed applicants, which worsens their treatment while making the metric look fair.
      - label: "D"
        text: |
          The self-employed should be removed from the training data, since a group the model handles badly is dragging the overall figures down for everyone
        correct: false
        why: |
          They remain a quarter of applicants regardless. Removing them from training leaves the model scoring them with no experience of them at all.
    solution: |
      Check the arithmetic first, because it is the point of the question:

      $$0.75 \times 41\% \;+\; 0.25 \times 22\% \;=\; 30.75\% + 5.5\% \;=\; 36.25\%$$

      The 36% quoted to the board is exactly the weighted average of a model that works reasonably for three quarters of applicants and poorly for the remaining quarter. Nothing in the headline is false. Everything important about it is invisible.

      This is why Q15's per-segment reporting is a launch condition rather than a nice-to-have. The aggregate is a genuine number that answers no question anyone is actually asking, because the bank does not lend to the average applicant — it lends to salaried applicants and to self-employed applicants, and it now knows it is materially worse at one of them.

      **Why C is the dangerous option.** Equalising recall across groups sounds like fairness and does the opposite here. To catch 41% of self-employed defaulters with a weaker signal, you have to reject far more self-employed applicants overall — including many who would have repaid. The metric converges; the treatment diverges sharply. Fairness constraints have to be chosen deliberately, with the resulting approval rates checked, not applied because a number looks uneven.

      > [!success] Answer — **B**
      > 36% is the weighted average of 41% and 22%; whether to automate the self-employed is now its own decision.

      > [!tip] Always ask what a headline is an average of
      > A single figure over a mixed population is a summary of a summary. The exam's entire Part 3 is built on refusing to stop at the first number you are handed.
    related_terms:
      - customer-segmentation
      - recall

  - id: q25
    title: "Q25 — The go/no-go call"
    text: |
      The model decision:

      > "Everything is now in place: the leakage removed, the split by customer, the label windowed, the threshold derived from the costs. The Random Forest catches 36% of defaulters and the Neural Network 37%; the forest is explainable and cheap to run. Expected cost per application beats current underwriting. Selection bias on approved-only data remains, and cannot be fixed with the data the bank holds."

      What is the defensible call?
    options:
      - label: "A"
        text: |
          No — the selection bias cannot be fixed with the data the bank holds, so a model built only on approved loans is unsafe to deploy
        correct: false
        why: |
          The current human rules were built on the same population and are already in use. An unfixable limitation is one to manage, not an automatic veto.
      - label: "B"
        text: |
          Yes — deploy the Random Forest across all applications at the cost-derived threshold, since the corrected evaluation shows it beats current underwriting
        correct: false
        why: |
          Right model, right threshold, wrong rollout. A full switch removes the comparison group and the fallback, exactly as Q9 and Q17 establish.
      - label: "C"
        text: |
          Yes, in shadow first — the Random Forest at the cost-derived threshold, with per-segment monitoring, a random approval holdout, and rollback triggers agreed beforehand
        correct: true
        why: |
          Approves the model the criteria select and the rollout shape that keeps the decision measurable and reversible.
      - label: "D"
        text: |
          Yes — deploy the Neural Network, since it catches one point more and the extra explanation tooling is a fixed cost the bank can absorb once
        correct: false
        why: |
          One point is inside noise, so it is paying for infrastructure and explanation tooling to buy nothing measurable.
    solution: |
      Every thread on this paper meets here, so take the decision in two parts.

      **Which model.** The 36%/37% difference is well inside the variation you would see from a different seed or split — it is a tie. So the remaining criteria decide, and they all point the same way: the [[random-forest|forest]] is directly explainable to the regulator (Q12), cheap to run, and simpler to document and monitor (Q18). D pays real infrastructure cost for a difference nobody can measure.

      **What kind of deployment.** This is what separates C from B, and it is the part this whole mock paper has been building towards. "Go" is not one bit of information. It is a shape:

      | Element | Why it is in the call | Question |
      |---|---|---|
      | Shadow mode first | surfaces disagreements with underwriters at zero risk | Q17 |
      | Random share afterwards | keeps a comparison group so impact is measurable | Q20 |
      | Per-segment monitoring | the self-employed gap must stay visible in production | Q15, Q24 |
      | Random approval holdout | breaks the feedback loop that would otherwise harden | Q3, Q13 |
      | Rollback triggers agreed beforehand | decided while judgement is cold, with a rehearsed fallback | Q19 |

      **Why A is wrong even though its premise is right.** The selection bias is real and unfixable in the current data — the sample paper's Q4 and Q20 establish exactly that. But the bank's existing human rules were built on the same approved-only population and are running today. Refusing to deploy on that ground alone holds the new system to a standard the incumbent never met, and it forgoes a measured improvement in expected cost in exchange for an unchanged flaw.

      > [!success] Answer — **C**
      > The Random Forest, at the cost-derived threshold, in shadow first, with monitoring, a holdout and rollback triggers.

      > [!quote] What "go" means for a business owner
      > Not "the model is good". It is: *this model, at this threshold, introduced this way, watched by these measures, stopped by these triggers, owned by this person.* A recommendation without those five clauses is not a decision — it is an opinion with a number attached.
    related_terms:
      - random-forest
      - model-selection
---

> [!info] What this paper is
> A **practice mock** in the format of the lecturer's sample exam: 25 multiple-choice questions on the same deliberately-flawed notebook, `loan_pipeline.ipynb`, in the same three-part structure. It is not an official paper and carries no answer key from the course.
>
> - 📓 [`loan_pipeline.ipynb`](/papers/machine-learning/loan_pipeline.ipynb)
> - 📄 [Problem brief + 15 preparation questions](/papers/machine-learning/loan-pipeline-brief-and-prep-questions.pdf)
> - 📝 [[pp-01-sample-exam-25-questions|The lecturer's sample paper]] · 📘 [[loan-pipeline-code-walkthrough|Code walkthrough & defect catalogue]]

## The territory this paper covers

The sample paper spends most of its length on the notebook itself — which columns leak, where the split goes wrong, why the scaler is fitted too early. Those defects are settled by the time this paper starts. **Mock D picks up at the point where someone says "fine, we've fixed it — now what?"**

| Theme | Questions |
|---|---|
| Cost matrices, thresholds and expected-loss arithmetic | 1, 11, 22 |
| The regulator, explainability and adverse-action reasons | 12, 23 |
| Fairness and stability across customer segments | 4, 15, 24 |
| Monitoring, drift, and what a metric can tell you in production | 2, 6, 14 |
| Feedback loops from a model that filters its own training data | 3, 13 |
| Shadow deployment, champion/challenger, controlled experiments | 9, 17, 20 |
| Governance: documentation, retraining cadence, kill criteria, escalation | 7, 8, 16, 18, 19 |
| What go/no-go actually means, and reading confidence sceptically | 5, 10, 21, 25 |

## How this mock differs from the sample paper

The sample paper has a tell: its correct option is almost always the longest and most hedged one, so a student who has not read the code can guess a respectable score. **This paper is built so that does not work.**

- Options within a question are matched for length, so you cannot pick by word count.
- Cautious phrasing ("in part", "for now", "materially") appears in wrong options as often as right ones.
- The willingness to admit a cost — "accept the losses", "accept the lower score" — is spread across correct and incorrect options deliberately.
- Some correct answers are the **shortest and bluntest** option on the page. Some refuse to act. Some are the most specific. The shape varies on purpose.
- Every distractor is something a competent analyst might genuinely propose. Several are correct in almost every respect and fail on one clause.

If you find yourself narrowing to two options and choosing on tone, you have found a question you do not actually know. Mark it and come back.

## How to use it

Work through it **closed-book on the notebook first**, then check. Count your mistakes by part:

- **Part 1 (1–10)** — losing marks here means you are agreeing or disagreeing too readily. Three of these ten concerns are not valid, and two more are true but secondary.
- **Part 2 (11–20)** — losing marks here means you are picking the plan that sounds most thorough rather than the one that addresses the mechanism.
- **Part 3 (21–25)** — losing marks here means you have not fixed your criteria before reading the numbers.

The last question is the one to reread afterwards. Everything else on this paper is a clause inside its answer.
