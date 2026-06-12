---
title: Linear Regression
semester: 2
year: 2
course: Machine Learning
lecture: 2
tags:
  - machine-learning
  - linear-regression
  - supervised-learning
  - regression
  - gradient-descent
  - regularization
  - feature-scaling
  - polynomial-regression
subject: machine-learning
in_scope: true
---

# Linear Regression

> Part of: [[Machine Learning]]
> Key concepts: [[Supervised Learning]], [[Cost Function]], [[Gradient Descent]], [[Normal Equation]], [[Feature Scaling]], [[Regularization]], [[Overfitting]], [[Polynomial Regression]]

---

## Agenda

- What is regression
- Single-variable linear regression
- Cost functions
- Gradient descent and optimization
- Multi-variable linear regression
- Normalization (feature scaling)
- Regularization
- Polynomial regression

---

## What is Regression?

Regression is a **supervised learning** task where the goal is to predict a **continuous** numerical output $y \in \mathbb{R}$ from an input feature vector $\mathbf{x} \in \mathbb{R}^d$.

> [!example] Motivating example — House prices
> | Square Feet | House Price ($1000s) |
> | ----------- | -------------------- |
> | 1400        | 245                  |
> | 1600        | 312                  |
> | 1700        | 279                  |
> | 1875        | 308                  |
> | 1100        | 199                  |
> | 2350        | 405                  |
> | 2450        | 324                  |
>
> Goal: given a new house's size, predict its price.

**Regression vs. classification:** regression outputs a real value; classification outputs a discrete class label.

---

## Notation

- $m$ — number of training examples
- $d$ (or $n$) — number of input features
- $\mathbf{x}^{(i)} \in \mathbb{R}^d$ — feature vector of the $i$-th training example
- $y^{(i)} \in \mathbb{R}$ — target value of the $i$-th example
- $(\mathbf{x}^{(i)}, y^{(i)})$ — the $i$-th training pair
- $\hat{y}^{(i)}$ — the model's prediction for $\mathbf{x}^{(i)}$
- $\boldsymbol{\theta}$ (or $\mathbf{w}$) — the learned model parameters (weights)

---

## Single-Variable Linear Regression

With a single input feature $x$, the hypothesis is a straight line:

$$h_\theta(x) = \theta_0 + \theta_1 x$$

- $\theta_0$ — **intercept** (bias)
- $\theta_1$ — **slope**

The line that "best fits" the data is the one that minimizes some measure of error between the predicted $\hat y^{(i)} = h_\theta(x^{(i)})$ and the actual $y^{(i)}$.

### Residuals

The **residual** for the $i$-th point is:

$$r^{(i)} = y^{(i)} - \hat{y}^{(i)} = y^{(i)} - (\theta_0 + \theta_1 x^{(i)})$$

---

## Performance Metric — Least Squares

We measure the quality of a fit by the **sum of squared residuals**. Squaring has three effects:
1. removes sign so positive and negative errors don't cancel,
2. penalises large errors more than small ones,
3. produces a smooth, differentiable, **convex** function — easy to optimize.

### Cost function (Mean Squared Error)

$$J(\theta_0, \theta_1) = \frac{1}{2m}\sum_{i=1}^{m}\left(h_\theta(x^{(i)}) - y^{(i)}\right)^2$$

The $\tfrac{1}{2}$ is a convenience: it cancels when we differentiate.

> [!info] Why "least squares"?
> Minimizing $J$ is equivalent to finding the line with the smallest total squared vertical distance from the data points.

---

## Cost Function Intuition

- Every choice of $(\theta_0, \theta_1)$ gives a different line — and hence a different cost.
- Plotting $J(\theta_0, \theta_1)$ over the parameter space produces a **bowl-shaped surface** (a paraboloid).
- The cost function for linear regression with MSE is **convex** — there is a single global minimum and no local minima to get stuck in.

> [!tip] Contour view
> In 2D, the cost surface $J(\theta_0, \theta_1)$ can be drawn as concentric ellipses (contours). The centre of the smallest ellipse corresponds to the optimal parameters.

---

## Optimization — Gradient Descent

We want to find $\boldsymbol{\theta}$ that minimizes $J(\boldsymbol{\theta})$. Two approaches:

1. **Iterative** — gradient descent,
2. **Analytical** — the normal equation (closed form).

### Gradient descent — key idea

- At the minimum, the derivative (slope) is **zero**.
- To move "downhill", take a step **against** the sign of the gradient.
- The magnitude of the step scales with both the gradient and a **learning rate** $\alpha$.

### Update rule

For each parameter $\theta_j$, simultaneously update:

$$\theta_j \leftarrow \theta_j - \alpha \frac{\partial J(\boldsymbol{\theta})}{\partial \theta_j}$$

> [!warning] Simultaneous update
> All parameters must be updated from the *same* snapshot of $\boldsymbol{\theta}$. Update a temp variable for each, then assign together — never update $\theta_0$ and then use the new $\theta_0$ when computing the step for $\theta_1$.

### Gradients for single-variable linear regression

$$\frac{\partial J}{\partial \theta_0} = \frac{1}{m}\sum_{i=1}^{m}\left(h_\theta(x^{(i)}) - y^{(i)}\right)$$

$$\frac{\partial J}{\partial \theta_1} = \frac{1}{m}\sum_{i=1}^{m}\left(h_\theta(x^{(i)}) - y^{(i)}\right) x^{(i)}$$

---

## Learning Rate $\alpha$

The learning rate controls the step size of gradient descent.

| Learning rate | Behaviour                                                            |
| ------------- | -------------------------------------------------------------------- |
| **Too small** | Very slow convergence; can stall in shallow regions or local minima. |
| **Too large** | Overshoots the minimum; cost can diverge.                            |
| **Good**      | Steady, monotonic decrease in $J$.                                   |

> [!note] Diagnostic
> Plot $J(\boldsymbol{\theta})$ vs iteration. It should decrease smoothly. If it oscillates or grows → $\alpha$ is too large.

### Hyper-parameters

- **Parameters** ($\theta$) — learned by the algorithm from data.
- **Hyper-parameters** ($\alpha$, number of iterations, regularization strength $\lambda$, batch size, polynomial degree …) — chosen *before* training, not learned by the algorithm itself.

Hyper-parameters are typically tuned on a **validation set**.

---

## Analytical Solution — The Normal Equation

For linear regression, we don't actually need an iterative algorithm — there's a closed-form solution.

### Matrix formulation

Stack the data:

- $\mathbf{X} \in \mathbb{R}^{m \times (d+1)}$ — design matrix, rows are training examples (with a leading column of $1$s for the intercept).
- $\mathbf{y} \in \mathbb{R}^{m}$ — target vector.
- $\boldsymbol{\theta} \in \mathbb{R}^{d+1}$ — parameters.

The model becomes $\hat{\mathbf{y}} = \mathbf{X}\boldsymbol{\theta}$, and the cost is:

$$J(\boldsymbol{\theta}) = \frac{1}{2m}(\mathbf{X}\boldsymbol{\theta} - \mathbf{y})^\top(\mathbf{X}\boldsymbol{\theta} - \mathbf{y})$$

### Normal equation

Setting $\nabla_{\boldsymbol{\theta}} J = 0$ gives:

$$\boxed{\boldsymbol{\theta}^* = (\mathbf{X}^\top \mathbf{X})^{-1}\mathbf{X}^\top \mathbf{y}}$$

### Gradient descent vs closed form

| Aspect                  | Gradient descent                               | Normal equation                         |
| ----------------------- | ---------------------------------------------- | --------------------------------------- |
| Needs $\alpha$?         | Yes                                            | No                                      |
| Needs iterations?       | Yes                                            | No                                      |
| Works with many features | Good — $O(kmd)$ per iteration                  | Slow — $O(d^3)$ to invert $\mathbf{X}^\top\mathbf{X}$ |
| Feature scaling required?| Yes (for fast convergence)                     | No                                      |
| Non-invertible case?    | Still works                                    | Fails (redundant features, $m < d$)     |

**Rule of thumb:** use the normal equation for small $d$ (say $d \lesssim 10^4$), gradient descent for larger problems.

---

## Multi-Variable Linear Regression

With $d$ features, the hypothesis generalises to:

$$h_\theta(\mathbf{x}) = \theta_0 + \theta_1 x_1 + \theta_2 x_2 + \cdots + \theta_d x_d = \boldsymbol{\theta}^\top \mathbf{x}$$

(where we prepend $x_0 = 1$ to absorb the intercept into $\boldsymbol{\theta}$).

### Vectorised cost and gradient

$$J(\boldsymbol{\theta}) = \frac{1}{2m}\lVert \mathbf{X}\boldsymbol{\theta} - \mathbf{y} \rVert_2^2$$

$$\nabla_{\boldsymbol{\theta}} J = \frac{1}{m}\mathbf{X}^\top(\mathbf{X}\boldsymbol{\theta} - \mathbf{y})$$

The update rule is the same, just vectorised:

$$\boldsymbol{\theta} \leftarrow \boldsymbol{\theta} - \alpha \cdot \frac{1}{m}\mathbf{X}^\top(\mathbf{X}\boldsymbol{\theta} - \mathbf{y})$$

---

## Variants of Gradient Descent

The cost involves a sum over all $m$ training points. Depending on *how many* points we use per update, we get three flavours:

| Variant               | Points per update | Cost curve        | Compute per step | Notes                                       |
| --------------------- | ----------------- | ----------------- | ---------------- | ------------------------------------------- |
| **Batch GD**          | All $m$           | Smooth            | High             | True gradient; slow on large datasets.      |
| **Stochastic GD (SGD)** | 1 random point  | Very noisy        | Low              | Fast iterations; never fully settles.       |
| **Mini-batch GD**     | Batch of $b$      | Slightly noisy    | Medium           | Sweet spot in practice; uses vectorisation. |

> [!tip] Why stochastic noise can help
> When the cost function is irregular, the noise in SGD can **jump out of local minima** — giving it a better chance of finding the global optimum. The flip side: it can never fully settle at the exact minimum. Common fix: use a **decaying learning rate** so steps shrink over time.

---

## Feature Scaling

> What happens in multivariate linear regression if the scales of features differ drastically?
> You need a very small learning rate, and training becomes slow.

When features have very different scales (e.g. square feet $\in [500, 4000]$ vs bedrooms $\in [1, 5]$), the cost-function contours become long, narrow ellipses. Gradient descent then **zig-zags** along the steep axis and converges slowly.

### Two common scaling methods

1. **Min-max scaling (normalisation)** — rescales each feature to $[0, 1]$:

   $$x'_j = \frac{x_j - \min(x_j)}{\max(x_j) - \min(x_j)}$$

2. **Standardisation** — zero mean, unit variance:

   $$x'_j = \frac{x_j - \mu_j}{\sigma_j}$$

### Choosing between them

| Property                     | Min-max | Standardisation |
| ---------------------------- | ------- | --------------- |
| Bounded range                | Yes (useful for NNs expecting $[0,1]$) | No |
| Robust to outliers           | No (crushes normal values if an outlier dominates) | More robust |
| Affected by feature with outlier $=1000$? | Maps $[0,10]$ range to $[0, 0.01]$ | Barely affected |

> [!note]
> Scaling is itself a hyperparameter — there's no universal best method; it depends on the data and algorithm.

Feature scaling is **not needed for the normal equation**, but strongly recommended for gradient descent.

---

## Overfitting and Underfitting

We want the model to do well on **unseen** data, not just on the training set — this is the **generalisation** goal.

| Regime            | Training error | Test error   | Cause                                     |
| ----------------- | -------------- | ------------ | ----------------------------------------- |
| **Underfitting**  | High           | High         | Model too simple to capture the pattern.  |
| **Ideal fit**     | Low            | Low          | Complexity matches data-generating process. |
| **Overfitting**   | Very low       | High         | Model memorised noise; doesn't generalise. |

Model complexity can be controlled by **changing the number of terms** in the regression function (e.g. the degree of a polynomial, or the number of features used).

---

## Regularization

> Any change we apply to the learning algorithm aimed at **decreasing generalization error without affecting training error** (much).

**Intuition:** simpler models have smaller absolute weights — or even fewer non-zero weights. Adding a penalty on the size of $\boldsymbol{\theta}$ pushes the optimiser toward simpler solutions that still explain the data, at the cost of slightly higher training error.

### Regularised cost

$$J_{\text{reg}}(\boldsymbol{\theta}) = \underbrace{\frac{1}{2m}\lVert \mathbf{X}\boldsymbol{\theta} - \mathbf{y}\rVert_2^2}_{\text{data-fit term}} + \lambda \cdot R(\boldsymbol{\theta})$$

where $\lambda \ge 0$ is the regularization strength (a hyperparameter).

### Common penalties

| Name              | Penalty $R(\boldsymbol{\theta})$         | Effect on weights                          |
| ----------------- | ---------------------------------------- | ------------------------------------------ |
| **L2 — Ridge**    | $\sum_j \theta_j^2 = \lVert\boldsymbol{\theta}\rVert_2^2$ | Shrinks all weights smoothly toward 0.     |
| **L1 — Lasso**    | $\sum_j \lvert\theta_j\rvert = \lVert\boldsymbol{\theta}\rVert_1$ | Drives some weights *exactly* to 0 — sparsity / feature selection. |
| **Elastic Net**   | $\alpha \lVert\boldsymbol{\theta}\rVert_1 + (1-\alpha)\lVert\boldsymbol{\theta}\rVert_2^2$ | Combines both. |

> [!info] Why L1 gives sparsity and L2 doesn't
> The L1 penalty has "corners" at the axes, so the optimum often lands exactly on an axis — a coordinate equals zero. L2's smooth bowl always keeps weights slightly off-axis.

> [!warning] Don't regularise the intercept
> Conventionally, the bias term $\theta_0$ is excluded from the penalty so that shifting $y$ by a constant doesn't get penalised.

### Trade-off

There is a trade-off between fitting the training data well and keeping the model simple (lower norm). $\lambda$ controls where we sit on this spectrum:

- $\lambda \to 0$ → ordinary least squares, risk of overfitting.
- $\lambda \to \infty$ → all weights pushed to 0, risk of underfitting.

### Ridge in closed form

Ridge still has a closed-form solution:

$$\boldsymbol{\theta}^* = (\mathbf{X}^\top\mathbf{X} + \lambda \mathbf{I})^{-1}\mathbf{X}^\top\mathbf{y}$$

Adding $\lambda \mathbf{I}$ also **fixes invertibility issues** when $\mathbf{X}^\top\mathbf{X}$ is singular.

---

## Early Stopping

Another form of regularization: **stop training before overfitting occurs.**

Monitor training and validation loss over iterations:

- **Training loss** decreases monotonically.
- **Validation loss** decreases, reaches a minimum, then starts increasing — that's the onset of overfitting.
- Stop at the minimum of the validation loss and keep those weights.

```
Loss
  │
  │\          Validation loss
  │ \        ╱
  │  \_____╱
  │   \____
  │        ‾‾‾‾‾‾ Training loss
  └───────────────────── Iterations
          ↑
     stop here
```

---

## Polynomial Regression

If a straight line can't capture the shape of the data, we can fit a polynomial while still using **linear regression machinery** — by treating powers of $x$ as new features:

$$h_\theta(x) = \theta_0 + \theta_1 x + \theta_2 x^2 + \cdots + \theta_p x^p$$

We engineer new features $x_1 = x$, $x_2 = x^2$, …, $x_p = x^p$ and run ordinary linear regression on them. The model is **linear in the parameters $\boldsymbol{\theta}$**, even though it's nonlinear in $x$.

### Caveats

- Higher degree $p$ → higher capacity → higher overfitting risk. Use validation to pick $p$.
- Powers blow up the scale of features — **feature scaling is essential** (e.g. $x = 100 \Rightarrow x^3 = 10^6$).
- For multivariate data you can also add **interaction terms** like $x_1 x_2$.

---

## Summary

- **Linear regression** fits a linear model $h_\theta(\mathbf{x}) = \boldsymbol{\theta}^\top \mathbf{x}$ by minimising mean squared error — a convex cost.
- Two ways to solve it: **gradient descent** (iterative, scalable) and the **normal equation** (closed form, exact but $O(d^3)$).
- **Feature scaling** is crucial for gradient descent; different scales slow convergence.
- **Stochastic / mini-batch GD** trade smoothness for speed and can escape local minima (relevant for non-convex problems).
- Control **overfitting** with **regularization** (Ridge, Lasso, Elastic Net) or **early stopping**.
- **Polynomial regression** is linear regression on engineered polynomial features — linear in parameters, not in $x$.

---

## Related notes

- [[Machine Learning]] — subject hub
- [[Gradient Descent]]
- [[Cost Function]]
- [[Regularization]]
- [[Overfitting]]
- [[Feature Scaling]]
- [[Normal Equation]]
