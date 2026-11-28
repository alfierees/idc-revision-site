---
title: "Python and scikit-learn Sheet"
subject: intro-data-science
type: reference
description: "The code a final project needs, in the order you write it: load and inspect with pandas, clean, encode, split, scale inside a Pipeline, the four classifiers and the regression models, evaluation, cross-validation, K-Means and PCA, the two summary graphs, and a minimal Gradio app."
course: Data Science for Entrepreneurs
semester: 1
year: 2
order: 3
pinned: true
tags:
  - intro-data-science
  - exam-prep
  - formula-sheet
aliases:
  - Data Science Syntax Sheet
  - Data Science Formula Sheet
---

> The course's code, in the order a project notebook runs. Every scikit-learn model has the same three calls: **create, `fit`, `predict`**, so swapping models is one line. Build the pipeline first, then iterate on the model.

## 1. Load and inspect

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("data.csv")
df.shape            # (rows, columns)
df.info()           # types and non-null counts
df.describe()       # summary statistics
df.head()
df["plan"].value_counts(normalize=True)   # class balance
```

## 2. Clean

```python
df.isnull().sum()                                  # missing per column
(df.isnull().sum() / len(df)) * 100                # as a percentage
df = df.dropna(subset=["target"])                  # never impute the target
df["age_missing"] = df["age"].isnull().astype(int) # keep the fact it was missing
df.duplicated().sum()
df = df.drop_duplicates()

q1, q3 = df["revenue"].quantile([0.25, 0.75])      # IQR outlier rule
iqr = q3 - q1
outliers = df[(df["revenue"] < q1 - 1.5 * iqr) | (df["revenue"] > q3 + 1.5 * iqr)]
```

Fill values (a median, a mean) are **learned**, so compute them on the training set after the split (section 4), or let a Pipeline do it.

## 3. Features and target

```python
df["churn"] = df["churn"].map({"Yes": 1, "No": 0})
y = df["churn"]
X = df.drop(columns=["churn", "customer_id"])      # drop IDs: no signal, pure leakage risk
X = pd.get_dummies(X, drop_first=True)             # one-hot, without the redundant column
```

## 4. Split, then fit anything that learns

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y   # stratify for classification
)

median_age = X_train["age"].median()                # learned on train only
X_train["age"] = X_train["age"].fillna(median_age)
X_test["age"] = X_test["age"].fillna(median_age)
```

## 5. Scale inside a Pipeline

```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer

pipe = Pipeline([
    ("impute", SimpleImputer(strategy="median")),
    ("scale", StandardScaler()),
    ("model", SomeModel()),
])
pipe.fit(X_train, y_train)          # every step is fitted on train only
preds = pipe.predict(X_test)
```

Scale for **KNN, logistic regression, Ridge, Lasso, K-Means, PCA**. Trees and random forests do not need it.

## 6. Classification

```python
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix, classification_report, accuracy_score

models = {
    "tree": DecisionTreeClassifier(max_depth=4, random_state=42),
    "logistic": Pipeline([("s", StandardScaler()), ("m", LogisticRegression(max_iter=1000))]),
    "knn": Pipeline([("s", StandardScaler()), ("m", KNeighborsClassifier(n_neighbors=7))]),
    "forest": RandomForestClassifier(n_estimators=200, max_depth=8, random_state=42),
}
for name, model in models.items():
    model.fit(X_train, y_train)
    preds = model.predict(X_test)
    print(name, accuracy_score(y_test, preds))
    print(classification_report(y_test, preds))   # precision, recall, F1 per class

print(confusion_matrix(y_test, preds))            # [[TN, FP], [FN, TP]]

probs = models["forest"].predict_proba(X_test)[:, 1]
preds_03 = (probs >= 0.3).astype(int)             # a lower threshold: more recall

importances = pd.Series(models["forest"].feature_importances_, index=X_train.columns)
importances.sort_values(ascending=False).head(10)
```

## 7. Regression

```python
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

lin = LinearRegression().fit(X_train, y_train)
pd.Series(lin.coef_, index=X_train.columns)        # effect of +1 unit, others fixed

ridge = Pipeline([("s", StandardScaler()), ("m", Ridge(alpha=1.0))]).fit(X_train, y_train)
lasso = Pipeline([("s", StandardScaler()), ("m", Lasso(alpha=0.5))]).fit(X_train, y_train)
poly = Pipeline([("p", PolynomialFeatures(degree=2)), ("s", StandardScaler()), ("m", Ridge())])

y_pred = ridge.predict(X_test)
print("MAE ", mean_absolute_error(y_test, y_pred))
print("RMSE", np.sqrt(mean_squared_error(y_test, y_pred)))
print("R2  ", r2_score(y_test, y_pred))
print("train R2", ridge.score(X_train, y_train))   # a big gap to test = overfitting
```

## 8. Cross-validation

```python
from sklearn.model_selection import cross_val_score

scores = cross_val_score(pipe, X, y, cv=5, scoring="neg_root_mean_squared_error")
print(f"CV RMSE {-scores.mean():.2f} ± {scores.std():.2f}")

scores = cross_val_score(models["forest"], X, y, cv=5, scoring="f1")   # classification
```

## 9. Clustering and PCA

```python
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
from sklearn.decomposition import PCA

X_scaled = StandardScaler().fit_transform(X)

for k in range(2, 9):                                     # elbow and silhouette
    km = KMeans(n_clusters=k, n_init=10, random_state=42).fit(X_scaled)
    print(k, km.inertia_, silhouette_score(X_scaled, km.labels_))

km = KMeans(n_clusters=4, n_init=10, random_state=42).fit(X_scaled)
df["cluster"] = km.labels_
df.groupby("cluster").mean(numeric_only=True)              # profile, then name each segment

pca = PCA(n_components=2).fit(X_scaled)
print(pca.explained_variance_ratio_.cumsum())               # variance kept
X_2d = pca.transform(X_scaled)
```

## 10. The two graphs for the summary document

```python
fig, ax = plt.subplots(figsize=(7, 4))
importances.sort_values().tail(8).plot(kind="barh", ax=ax)
ax.set_title("Contract length and support calls drive churn")   # the finding, not the topic
ax.set_xlabel("Importance")
fig.tight_layout()
fig.savefig("feature_importance.png", dpi=200)

from sklearn.metrics import ConfusionMatrixDisplay
ConfusionMatrixDisplay.from_predictions(y_test, preds, display_labels=["stays", "churns"])
```

## 11. A minimal Gradio app

Gradio is not in the lecture notes; this is the brief's deployment step. Check the [Gradio quickstart](https://www.gradio.app/guides/quickstart) for your version.

```python
import gradio as gr

model = models["forest"]
columns = X_train.columns

def predict(age, monthly_fee, support_calls, plan):
    row = pd.DataFrame([{"age": age, "monthly_fee": monthly_fee,
                         "support_calls": support_calls, "plan": plan}])
    row = pd.get_dummies(row).reindex(columns=columns, fill_value=0)   # same columns as training
    p = model.predict_proba(row)[0, 1]
    return {"churns": float(p), "stays": float(1 - p)}

demo = gr.Interface(
    fn=predict,
    inputs=[gr.Number(label="Age"), gr.Number(label="Monthly fee"),
            gr.Slider(0, 20, step=1, label="Support calls"),
            gr.Dropdown(["basic", "premium"], label="Plan")],
    outputs=gr.Label(label="Prediction"),
    title="Will this member churn?",
)
demo.launch()          # in Colab: demo.launch(share=True)
```

The `reindex` line matters: the app must build **exactly the columns the model was trained on**, in the same order, or the prediction is wrong or fails.
