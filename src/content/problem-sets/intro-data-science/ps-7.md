---
title: "PS7"
subject: intro-data-science
source_doc: /papers/intro-data-science/ps-7-recitation-8.ipynb
tags:
  - data-science
  - intro-data-science
  - recitation
  - neural-networks
  - mlp
  - overfitting
  - early-stopping
  - cross-validation
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Understand the architecture.**

      `hidden_layer_sizes=(32,)` is one hidden layer with 32 neurons.

      - How many weight connections between the input (8 features) and the hidden layer?
      - How many between the hidden layer (32 neurons) and the output (2 classes)?
      - Does the total match the `mlp_simple.coefs_` shapes?
      - Why do more parameters mean more capacity to learn?
    solution: |
      Every input connects to every hidden neuron (a **fully connected** layer), so each layer's weight count is *inputs × outputs*, and each neuron after the input also has one bias.

      $$
      \text{input} \to \text{hidden: } 8 \times 32 = 256 \qquad \text{hidden} \to \text{output: } 32 \times 2 = 64
      $$

      $$
      \text{weights} = 256 + 64 = 320, \qquad \text{biases} = 32 + 2 = 34, \qquad \text{total} = 320 + 34 = 354
      $$

      ```python
      print(f"Input → Hidden: {8 * 32}")
      print(f"Hidden → Output: {32 * 2}")
      print(f"Biases: {32 + 2}")
      print(f"Total: {8 * 32 + 32 * 2 + 32 + 2}")
      ```

      The shapes of `mlp_simple.coefs_` are therefore `(8, 32)` and `(32, 2)`, whose sizes are 256 and 64, matching the hand count.

      ![](/images/intro-data-science/ps07-q1-mlp-parameter-count.png)

      *Parameter count for the (32,) network: 256 + 64 weights plus 34 biases gives 354.*

      > [!success] Answer
      > 256 input-to-hidden weights, 64 hidden-to-output weights, 34 biases, so **354 parameters**. More parameters mean more capacity: the network can represent more complex decision boundaries because it has more "knobs to tune". But more knobs can also memorise noise (overfitting) if the data is insufficient. For comparison, the notebook says logistic regression has about 9 parameters.

      > [!info] Note on the notebook's rounding
      > The notebook text says "~350 parameters" and the solution computes exactly 354, so the two agree. Logistic regression's "~9" is 8 weights plus 1 intercept.
    related_terms: ["multi-layer-perceptron", "hidden-layer", "weight", "bias", "neural-network"]
  - id: "2"
    text: |
      **Diagnose overfitting.**

      Compare three models: the overfit MLP (256, 128, 64), the early-stopped MLP (64, 32), and the simple MLP (32,). For each print train accuracy and test accuracy. Which has the smallest train-test gap? Which has the best **test** accuracy? What is the lesson about model size vs dataset size?
    solution: |
      ```python
      models_check = {
          "MLP (32,) simple": mlp_simple,
          "MLP (64,32) early stop": mlp_earlystop,
          "MLP (256,128,64) overfit": mlp_overfit,
      }

      print(f"{'Model':<30} {'Train Acc':<12} {'Test Acc':<12} {'Gap':<10}")
      print("-" * 64)
      for name, m in models_check.items():
          tr = m.score(X_train, y_train)
          te = m.score(X_test, y_test)
          print(f"{name:<30} {tr:<12.3f} {te:<12.3f} {tr - te:<10.3f}")
      ```

      The **gap** (train minus test) measures memorisation; **test accuracy** is what predicts performance on new data.

      > [!success] Answer
      > The simple or early-stopped MLP likely has the best test accuracy. The overfit MLP has the highest train accuracy but the worst test accuracy. Lesson: **more parameters need more data**; early stopping is your seatbelt.

      > [!warning] The source hedges
      > The solution says "simple *or* early-stopped" and "likely", because it was written without a run. I kept it as stated and did not pick between the two.
    related_terms: ["overfitting", "early-stopping", "multi-layer-perceptron", "bias-variance-tradeoff"]
  - id: "3"
    text: |
      **Cross-validation check.**

      Run 5-fold cross-validation on the best MLP architecture and on the Decision Tree. Compare mean ± std of accuracy. Is the MLP advantage consistent across folds, or just lucky on one split?
    solution: |
      ```python
      dt_cv = cross_val_score(DecisionTreeClassifier(max_depth=5, random_state=42),
                              X_scaled, y, cv=5, scoring="accuracy")
      mlp_cv = cross_val_score(MLPClassifier(hidden_layer_sizes=(32, 16), activation="relu",
                                              max_iter=500, random_state=42),
                               X_scaled, y, cv=5, scoring="accuracy")

      print(f"Decision Tree:  {dt_cv.mean():.3f} ± {dt_cv.std():.3f}")
      print(f"MLP (32, 16):   {mlp_cv.mean():.3f} ± {mlp_cv.std():.3f}")
      ```

      `cross_val_score` splits the data into 5 folds, trains on 4 and tests on the 5th, five times, and returns five accuracies. Comparing the means says which model is better on average; the stds say how much that depends on the split.

      > [!success] Answer
      > The MLP should show consistently higher accuracy across the folds (with slightly higher variance). If the advantage holds across all 5 folds it is real, not luck. `cross_val_score` with an MLP may be slow on CPU.

      > [!warning] Leakage detail
      > Here `X_scaled` was scaled on the **whole** dataset before CV, so each fold's scaling has seen its own test rows. The notebook accepts that for simplicity; the stricter approach is a `make_pipeline(StandardScaler(), model)` as in Recitation 4 (see [[Scikit-Learn Pipeline]]). This is my observation, not the source's.
    related_terms: ["cross-validation", "decision-tree", "multi-layer-perceptron", "scikit-learn-pipeline"]
---

## Recitation walkthrough

### Scale, split, baselines

```python
from sklearn.neural_network import MLPClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier

X = df.drop(columns=["zone_status", "observation_id"])
y = df["zone_status"]

scaler = StandardScaler()           # non-negotiable for MLPs, same reason as KNN
X_scaled = pd.DataFrame(scaler.fit_transform(X), columns=X.columns, index=X.index)
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2,
                                                    random_state=42, stratify=y)

baselines = {
    "Logistic Regression": LogisticRegression(max_iter=1000, random_state=42),
    "Decision Tree (d=5)": DecisionTreeClassifier(max_depth=5, random_state=42),
}
```

The notebook says the best traditional model is the Decision Tree at about **77% accuracy**.

### The first MLP

```python
mlp_simple = MLPClassifier(
    hidden_layer_sizes=(32,),    # one hidden layer of 32 neurons
    activation="relu",           # ReLU in hidden layers
    max_iter=500,                # maximum training epochs
    random_state=42,
)
mlp_simple.fit(X_train, y_train)
```

Each neuron computes a weighted sum plus an [[Activation Function]]; training adjusts the weights to cut prediction error. Useful attributes: `coefs_` (weight matrices), `intercepts_` (biases), `n_iter_`, `loss_`, `loss_curve_`.

### Architecture search and diminishing returns

```python
architectures = {"(16,)": (16,), "(32,)": (32,), "(64,)": (64,),
                 "(32, 16)": (32, 16), "(64, 32)": (64, 32), "(64, 32, 16)": (64, 32, 16)}
```

The notebook's lesson: going from (16,) to (32, 16) helps noticeably, but (64, 32, 16) barely helps while **tripling the parameters**. (32, 16) is recommended as the best accuracy-per-parameter trade-off, and small enough for phone inference.

### Overfitting and early stopping

```python
mlp_overfit = MLPClassifier(hidden_layer_sizes=(256, 128, 64), activation="relu",
                            max_iter=2000, random_state=42).fit(X_train, y_train)

mlp_earlystop = MLPClassifier(hidden_layer_sizes=(64, 32), activation="relu", max_iter=2000,
                              early_stopping=True,        # hold out part of training data to watch validation score
                              validation_fraction=0.15,   # 15% of the training set
                              n_iter_no_change=20,        # stop after 20 iterations with no improvement
                              random_state=42).fit(X_train, y_train)
```

The (256, 128, 64) network has tens of thousands of parameters for only 4,000 training rows (80% of 5,000): it can memorise noise. Its training loss keeps falling while test accuracy does not improve. See [[Overfitting]] and [[Early Stopping]].

### The decision framework (Lecture 8)

1. Try simpler models first.
2. Do you have enough data?
3. Are there complex feature interactions? (if a linear model works, the MLP adds little)
4. Can you tolerate a black box? (a Decision Tree is more explainable)
5. Is inference speed acceptable?

Rotem's recommended fallback if the MLP fails in production: the **Decision Tree**. The notebook also notes that `MLPClassifier` is CPU only with fully connected layers; for GPUs, CNNs, RNNs and transformers you move to TensorFlow/Keras or PyTorch.

*Related: [[Lecture 8 - Intro to Deep Learning]] | [[Lecture 3 - Classification, KNN, Random Tree]] | [[Data Science]]*
