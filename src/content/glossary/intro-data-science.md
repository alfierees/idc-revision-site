---
title: Data Science Concepts
description: Single glossary of every concept used across the Data Science notes. All [[wiki-links]] in lectures and problem sets resolve to a heading here.
tags:
  - meta
  - glossary
  - index
  - intro-data-science
aliases:
  - Data Science Glossary
subject: intro-data-science
in_scope: true
---

# Data Science Concepts

> One-stop glossary for Data Science (Year 2, Semester 1). Each entry: a one-line definition and the lecture that first teaches it. Tracker of links: [[_Wiki-Link Registry]]. Subject hub: [[Data Science]].

## Data science foundations

### Data Science Lifecycle
The iterative loop of Ask, Collect, Clean, Explore, Model, Communicate and Decide; each stage feeds back into earlier ones. → [[Lecture 1 - Introduction|Lec 1]]

### Data Types
Quantitative (continuous or discrete) versus categorical (nominal or ordinal) variables; the type decides which summaries and charts make sense. → [[Lecture 1 - Introduction|Lec 1]]

### Unstructured Data
Data that does not sit in rows and columns, such as text, images and audio; roughly 80 percent of business data. Also in [[PS_06-NLP and Image Analysis|PS 06]]. → [[Lecture 1 - Introduction|Lec 1]]

### Four Types of Analytics
Descriptive (what happened), diagnostic (why), predictive (what will happen) and prescriptive (what to do). → [[Lecture 1 - Introduction|Lec 1]]

### Correlation vs Causation
Two variables moving together does not mean one causes the other; a hidden third variable can drive both. Seen in: [[Machine Learning]]. → [[Lecture 1 - Introduction|Lec 1]]

### Confounding Variable
A hidden third variable that drives both observed variables and creates a misleading association between them. → [[Lecture 1 - Introduction|Lec 1]]

### Survivorship Bias
Looking only at the successes and ignoring the failures, which distorts conclusions (Wald's WW2 aircraft armour example). → [[Lecture 1 - Introduction|Lec 1]]

### Data Ethics
Consent, purpose limitation, data minimisation, deletion rights and explainability when collecting and using personal data. → [[Lecture 1 - Introduction|Lec 1]]

### Google Colab
Free cloud-hosted Jupyter notebook that runs Python in the browser with no local setup. → [[Lecture 1 - Introduction|Lec 1]]

### Garbage In, Garbage Out
Bad input data gives bad results whatever the model; cleaning can take up to 80 percent of project time. → [[Lecture 1 - Introduction|Lec 1]]

## Data handling and exploratory analysis

### Exploratory Data Analysis
First-pass investigation of a dataset with summaries and charts to find structure, problems and hypotheses before modelling. Seen in: [[Machine Learning]]. Also in [[PS_01-Titanic Classification Basics|PS 01]]. → [[Lecture 2 - EDA and Charts|Lec 2]]

### Pandas
Python library for tabular data, built around the DataFrame. Seen in: [[Machine Learning]]. → [[Lecture 2 - EDA and Charts|Lec 2]]

### DataFrame
Pandas table of labelled rows and columns, the standard container for data in this course. Seen in: [[Machine Learning]]. Also in [[PS_01-Titanic Classification Basics|PS 01]]. → [[Lecture 2 - EDA and Charts|Lec 2]]

### Summary Statistics
Mean, median, standard deviation, quartiles and counts that describe a variable in a few numbers (df.describe()). Seen in: [[Machine Learning]]. → [[Lecture 2 - EDA and Charts|Lec 2]]

### Distributions
The shape of how a variable's values are spread: skew, spread, modes and tails. Seen in: [[Machine Learning]]. → [[Lecture 2 - EDA and Charts|Lec 2]]

### Groupby
Split a DataFrame by category, compute a statistic per group, and combine the results. Seen in: [[Machine Learning]]. Also in [[PS_01-Titanic Classification Basics|PS 01]]. → [[Lecture 2 - EDA and Charts|Lec 2]]

### Missing Values
Empty (NaN) cells; detect them, then drop rows or impute with the mean, median or mode. Seen in: [[Machine Learning]]. Also in [[PS_01-Titanic Classification Basics|PS 01]]. → [[Lecture 2 - EDA and Charts|Lec 2]]

### Sentinel Value
A placeholder such as -1 or 999 that stands for missing data but is not NaN, so it must be found and replaced by hand. Also in [[PS_02-Regression on Insurance Charges|PS 02]]. → [[Lecture 2 - EDA and Charts|Lec 2]]

### Outliers
Values far from the bulk of the data; check whether they are errors or real before removing them. Seen in: [[Machine Learning]]. Also in [[PS_01-Titanic Classification Basics|PS 01]]. → [[Lecture 2 - EDA and Charts|Lec 2]]

### Histograms
Bar chart of binned counts showing the distribution of one numeric variable. Seen in: [[Machine Learning]]. Also in [[PS_01-Titanic Classification Basics|PS 01]]. → [[Lecture 2 - EDA and Charts|Lec 2]]

### Boxplots
Chart of median, quartiles and whiskers that compares spread across groups and flags outliers. Seen in: [[Machine Learning]]. Also in [[PS_01-Titanic Classification Basics|PS 01]]. → [[Lecture 2 - EDA and Charts|Lec 2]]

### Matplotlib
Core Python plotting library that Seaborn builds on. Seen in: [[Machine Learning]]. → [[Lecture 2 - EDA and Charts|Lec 2]]

### Seaborn
Statistical plotting library on top of Matplotlib with cleaner defaults for grouped charts. Seen in: [[Machine Learning]]. → [[Lecture 2 - EDA and Charts|Lec 2]]

## Classification

### Classification
Predicting a discrete label (a category) from features; binary with two classes, multiclass with three or more. Also in [[PS_01-Titanic Classification Basics|PS 01]]. → [[Lecture 3 - Classification, KNN, Random Tree|Lec 3]]

### Supervised Learning
Learning a mapping from features to a known label using labelled examples. Seen in: [[Machine Learning]]. Also in [[PS_01-Titanic Classification Basics|PS 01]]. → [[Lecture 3 - Classification, KNN, Random Tree|Lec 3]]

### Decision Tree
Flowchart classifier that splits the data with if/else tests on features until the leaves are mostly one class. Seen in: [[Machine Learning]]. Also in [[PS_01-Titanic Classification Basics|PS 01]]. → [[Lecture 3 - Classification, KNN, Random Tree|Lec 3]]

### Gini Impurity
Node purity measure for tree splits: 0 when a node holds one class, higher when classes are mixed. Seen in: [[Machine Learning]]. → [[Lecture 3 - Classification, KNN, Random Tree|Lec 3]]

### Logistic Regression
Probabilistic binary classifier: a linear score passed through the sigmoid function, then thresholded. Seen in: [[Machine Learning]]. Also in [[PS_01-Titanic Classification Basics|PS 01]]. → [[Lecture 3 - Classification, KNN, Random Tree|Lec 3]]

### Sigmoid Function
Maps any real number into (0, 1) so it can be read as a probability. Seen in: [[Machine Learning]]. → [[Lecture 3 - Classification, KNN, Random Tree|Lec 3]]

### KNN
K-nearest neighbours: classify a point by the majority label among its K closest training points. Seen in: [[Machine Learning]]. Also in [[PS_01-Titanic Classification Basics|PS 01]]. → [[Lecture 3 - Classification, KNN, Random Tree|Lec 3]]

### Random Forest
Ensemble of decision trees trained on bootstrap samples with random feature subsets, voting for the answer. Seen in: [[Machine Learning]]. Also in [[PS_01-Titanic Classification Basics|PS 01]]. → [[Lecture 3 - Classification, KNN, Random Tree|Lec 3]]

### Ensemble Methods
Combining several models so their errors average out, giving lower variance than any single model. Seen in: [[Machine Learning]]. → [[Lecture 3 - Classification, KNN, Random Tree|Lec 3]]

### One-Hot Encoding
Turning a categorical variable into one binary column per category. Seen in: [[Machine Learning]]. Also in [[PS_01-Titanic Classification Basics|PS 01]], [[PS_02-Regression on Insurance Charges|PS 02]]. → [[Lecture 3 - Classification, KNN, Random Tree|Lec 3]]

### Feature Scaling
Putting features on a comparable scale (StandardScaler or MinMaxScaler); essential for distance-based and penalised models. Seen in: [[Machine Learning]]. Also in [[PS_01-Titanic Classification Basics|PS 01]], [[PS_02-Regression on Insurance Charges|PS 02]]. → [[Lecture 3 - Classification, KNN, Random Tree|Lec 3]]

## Evaluation metrics and validation

### Train Test Split
Holding out part of the data as a test set so performance is measured on unseen examples. Seen in: [[Machine Learning]]. Also in [[PS_01-Titanic Classification Basics|PS 01]]. → [[Lecture 3 - Classification, KNN, Random Tree|Lec 3]]

### Confusion Matrix
Table of true and false positives and negatives that shows exactly where a classifier goes wrong. Seen in: [[Machine Learning]]. Also in [[PS_01-Titanic Classification Basics|PS 01]]. → [[Lecture 3 - Classification, KNN, Random Tree|Lec 3]]

### Precision and Recall
Precision is the share of predicted positives that are right; recall is the share of real positives found; both matter on imbalanced classes. Seen in: [[Machine Learning]]. → [[Lecture 3 - Classification, KNN, Random Tree|Lec 3]]

### Cross-Validation
K-fold evaluation: train and test on K different splits and average, for a more robust score than one split. Seen in: [[Machine Learning]]. Also in [[PS_02-Regression on Insurance Charges|PS 02]]. → [[Lecture 4 - Regression|Lec 4]]

### Data Leakage
Information from the test set or target reaching the training step, which inflates scores that will not hold on new data. Seen in: [[Machine Learning]]. Also in [[PS_02-Regression on Insurance Charges|PS 02]]. → [[Lecture 4 - Regression|Lec 4]]

### Scikit-Learn Pipeline
Chains preprocessing and a model into one object so scaling is fitted only on training data, preventing leakage. Seen in: [[Machine Learning]]. Also in [[PS_02-Regression on Insurance Charges|PS 02]]. → [[Lecture 4 - Regression|Lec 4]]

### RMSE
Root mean squared error: typical prediction error in the units of the target, with large errors penalised more. Seen in: [[Machine Learning]]. Also in [[PS_04-Regression with scikit-learn|PS 04]]. → [[Lecture 4 - Regression|Lec 4]]

### MAE
Mean absolute error: average size of the prediction errors in target units, less sensitive to outliers than RMSE. Also in [[PS_02-Regression on Insurance Charges|PS 02]]. → [[Lecture 4 - Regression|Lec 4]]

### R-Squared
Share of the target's variance the model explains, between 0 and 1 on the data it is scored on. Seen in: [[Machine Learning]]. Also in [[PS_04-Regression with scikit-learn|PS 04]]. → [[Lecture 4 - Regression|Lec 4]]

## Regression and regularisation

### Linear Regression
Model that predicts a continuous target as a weighted sum of the features plus an intercept. Seen in: [[Machine Learning]]. Also in [[PS_04-Regression with scikit-learn|PS 04]]. → [[Lecture 4 - Regression|Lec 4]]

### OLS
Ordinary least squares: picks the coefficients that minimise the sum of squared residuals. Seen in: [[Machine Learning]]. → [[Lecture 4 - Regression|Lec 4]]

### Multicollinearity
Features that are strongly correlated with each other, making individual coefficients unstable and hard to interpret. Seen in: [[Intro Econometrics]]. Also in [[PS_04-Regression with scikit-learn|PS 04]]. → [[Lecture 4 - Regression|Lec 4]]

### Dummy-Variable Trap
Perfect multicollinearity from keeping every dummy level plus an intercept; drop one level per category. Seen in: [[Intro Econometrics]]. Also in [[PS_02-Regression on Insurance Charges|PS 02]]. → [[Lecture 4 - Regression|Lec 4]]

### Polynomial Features
Squared and cross-product columns (interaction terms) that let a linear model fit curves and joint effects. Also in [[PS_02-Regression on Insurance Charges|PS 02]]. → [[Lecture 4 - Regression|Lec 4]]

### Overfitting
A model memorises training noise: training error keeps falling while test or validation error rises. Seen in: [[Machine Learning]]. Also in [[PS_02-Regression on Insurance Charges|PS 02]], [[PS_07-Neural Networks MLP with scikit-learn|PS 07]]. → [[Lecture 4 - Regression|Lec 4]]

### Bias-Variance Tradeoff
Simple models underfit (high bias); flexible models overfit (high variance); the aim is the balance with the lowest test error. Seen in: [[Machine Learning]]. Also in [[PS_02-Regression on Insurance Charges|PS 02]]. → [[Lecture 4 - Regression|Lec 4]]

### L1 and L2 Penalty
Regularisation terms added to the loss: L1 adds the sum of absolute coefficients, L2 the sum of squared coefficients. Also in [[PS_02-Regression on Insurance Charges|PS 02]]. → [[Lecture 4 - Regression|Lec 4]]

### Ridge Regression
L2-regularised linear regression that shrinks all coefficients towards zero without removing any. Seen in: [[Machine Learning]]. Also in [[PS_02-Regression on Insurance Charges|PS 02]], [[PS_04-Regression with scikit-learn|PS 04]]. → [[Lecture 4 - Regression|Lec 4]]

### Lasso Regression
L1-regularised regression that can shrink coefficients exactly to zero, so it also selects features. Seen in: [[Machine Learning]]. Also in [[PS_02-Regression on Insurance Charges|PS 02]], [[PS_04-Regression with scikit-learn|PS 04]]. → [[Lecture 4 - Regression|Lec 4]]

## Clustering and dimensionality reduction

### Unsupervised Learning
Finding structure in unlabelled data, with no target to predict. Seen in: [[Machine Learning]]. Also in [[PS_03-Mall Customers Clustering and PCA|PS 03]], [[PS_05-Clustering and PCA with scikit-learn|PS 05]]. → [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]]

### K-Means
Centroid-based clustering: assign points to the nearest centroid, move centroids to the cluster means, repeat. Seen in: [[Machine Learning]]. Also in [[PS_03-Mall Customers Clustering and PCA|PS 03]], [[PS_05-Clustering and PCA with scikit-learn|PS 05]]. → [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]]

### Centroid
The mean point of a cluster, which K-Means moves on every update step. Also in [[PS_03-Mall Customers Clustering and PCA|PS 03]]. → [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]]

### n_init
K-Means setting for the number of random restarts; scikit-learn keeps the run with the lowest inertia. Also in [[PS_03-Mall Customers Clustering and PCA|PS 03]]. → [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]]

### Euclidean Distance
Straight-line distance between two points, the default metric for K-Means and KNN. Seen in: [[Machine Learning]]. → [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]]

### Inertia
Sum of squared distances from each point to its own centroid (within-cluster sum of squares); K-Means minimises it. Also in [[PS_03-Mall Customers Clustering and PCA|PS 03]]. → [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]]

### Elbow Method
Plot inertia against K and choose the K where the curve bends and gains flatten. Seen in: [[Machine Learning]]. Also in [[PS_03-Mall Customers Clustering and PCA|PS 03]], [[PS_05-Clustering and PCA with scikit-learn|PS 05]]. → [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]]

### Silhouette Score
Per-point measure of how close a point is to its own cluster versus the next nearest, from -1 to +1. Seen in: [[Machine Learning]]. Also in [[PS_03-Mall Customers Clustering and PCA|PS 03]], [[PS_05-Clustering and PCA with scikit-learn|PS 05]]. → [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]]

### Internal vs External Cluster Validation
Internal checks use only the geometry (silhouette, inertia); external checks compare clusters with ground-truth labels. Also in [[PS_03-Mall Customers Clustering and PCA|PS 03]]. → [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]]

### Customer Segmentation
Business use of clustering to group customers with similar behaviour for targeted action. Seen in: [[Machine Learning]]. Also in [[PS_03-Mall Customers Clustering and PCA|PS 03]]. → [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]]

### PCA
Principal component analysis: linear dimensionality reduction onto the directions of greatest variance. Seen in: [[Machine Learning]]. Also in [[PS_03-Mall Customers Clustering and PCA|PS 03]], [[PS_05-Clustering and PCA with scikit-learn|PS 05]]. → [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]]

### Principal Component
A direction of maximum remaining variance found by PCA; components are uncorrelated and ordered by variance. Also in [[PS_03-Mall Customers Clustering and PCA|PS 03]]. → [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]]

### Explained Variance
Share of the total variance captured by each principal component, used to decide how many to keep. Seen in: [[Machine Learning]]. Also in [[PS_03-Mall Customers Clustering and PCA|PS 03]]. → [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]]

### Curse of Dimensionality
In many dimensions distances lose meaning and data becomes sparse, hurting KNN and K-Means. Seen in: [[Machine Learning]]. → [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]]

## Recommendation systems

### Recommendation System
Predicts how much a user would like an unseen item and suggests the top-ranked ones. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### User-Item Matrix
Users as rows, items as columns, ratings as values, mostly empty. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### Sparsity
The share of user-item cells with no rating; real matrices are mostly empty. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### Explicit Feedback
Direct signals of preference such as star ratings. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### Implicit Feedback
Preference inferred from behaviour such as watch time or clicks. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### Long Tail
Many niche items each with little popularity; recommenders help users reach them. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### Content-Based Filtering
Recommends items similar to ones the user liked, using item features. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### Cosine Similarity
Angle-based similarity between two vectors, from -1 to +1, ignoring their length. Also in [[PS_06-NLP and Image Analysis|PS 06]]. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### User Profile
Average feature vector of the items a user rated highly, matched against candidate items. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### Collaborative Filtering
Recommends from the rating patterns of similar users or items, with no item features needed. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### User-Based CF
Predicts a rating from what similar users gave the item. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### Item-Based CF
Predicts a rating from the user's own ratings of similar items. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### Cold Start Problem
Too little data about a new user or item to make good recommendations. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### Hybrid Recommender
Weighted blend of content-based and collaborative approaches to cover each other's weaknesses. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### Matrix Factorization
Splits the user-item matrix into low-rank user and item latent-factor matrices whose product fills the gaps. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### Precision at K
Share of the top K recommendations that are relevant. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### Recall at K
Share of all relevant items that appear in the top K. → [[Lecture 6 - Recommendation Systems|Lec 6]]

### Filter Bubble
Recommenders narrowing exposure to familiar content only. → [[Lecture 6 - Recommendation Systems|Lec 6]]

## Natural language processing

### Natural Language Processing
Making computers understand and generate human language. Also in [[PS_06-NLP and Image Analysis|PS 06]]. → [[Lecture 7 - NLP and Image Analysis|Lec 7]]

### Text Preprocessing
Cleaning text before modelling: lowercase, strip punctuation, tokenize, drop stopwords, stem or lemmatize. Also in [[PS_06-NLP and Image Analysis|PS 06]]. → [[Lecture 7 - NLP and Image Analysis|Lec 7]]

### Tokenization
Splitting text into tokens, usually words. Also in [[PS_06-NLP and Image Analysis|PS 06]]. → [[Lecture 7 - NLP and Image Analysis|Lec 7]]

### Stopwords
Very common, low-meaning words (the, is, and) removed before analysis. Also in [[PS_06-NLP and Image Analysis|PS 06]]. → [[Lecture 7 - NLP and Image Analysis|Lec 7]]

### Stemming
Chopping suffixes to a rough root, which may not be a real word. Also in [[PS_06-NLP and Image Analysis|PS 06]]. → [[Lecture 7 - NLP and Image Analysis|Lec 7]]

### Lemmatization
Reducing a word to its dictionary form using grammar, so results are real words. Also in [[PS_06-NLP and Image Analysis|PS 06]]. → [[Lecture 7 - NLP and Image Analysis|Lec 7]]

### Bag of Words
Represents a document as word counts and ignores word order. Also in [[PS_06-NLP and Image Analysis|PS 06]]. → [[Lecture 7 - NLP and Image Analysis|Lec 7]]

### Document-Term Matrix
Matrix with one row per document and one column per term, filled with counts. Also in [[PS_06-NLP and Image Analysis|PS 06]]. → [[Lecture 7 - NLP and Image Analysis|Lec 7]]

### TF-IDF
Word count weighted up for rare words and down for words common to every document. Also in [[PS_06-NLP and Image Analysis|PS 06]]. → [[Lecture 7 - NLP and Image Analysis|Lec 7]]

## Image analysis

### Image Analysis
Extracting information from visual data (photos, video, scans), also called computer vision; images are already grids of pixel numbers. Also in [[PS_06-NLP and Image Analysis|PS 06]]. → [[Lecture 7 - NLP and Image Analysis|Lec 7]]

### Pixel
Smallest image unit, holding a brightness or colour value. → [[Lecture 7 - NLP and Image Analysis|Lec 7]]

### Filter
Small kernel grid of weights slid across an image to detect a pattern such as edges. Also in [[PS_06-NLP and Image Analysis|PS 06]]. → [[Lecture 7 - NLP and Image Analysis|Lec 7]]

### Convolution
Slide a filter over an image, multiply with the pixels beneath, and sum to one output value. Also in [[PS_06-NLP and Image Analysis|PS 06]]. → [[Lecture 7 - NLP and Image Analysis|Lec 7]]

### Feature Map
The output grid produced by applying one filter across an image. → [[Lecture 7 - NLP and Image Analysis|Lec 7]]

### Convolutional Neural Network
Deep network whose filters are learned from data instead of hand-designed. → [[Lecture 7 - NLP and Image Analysis|Lec 7]]

## Deep learning

### Deep Learning
Machine learning with many layers that learn useful features automatically. → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

### Neural Network
Layers of connected units that transform inputs into outputs through learned weights. Also in [[PS_07-Neural Networks MLP with scikit-learn|PS 07]]. → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

### Perceptron
One unit: a weighted sum of its inputs plus a bias, passed through an activation. → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

### Weight
Number controlling how much one input matters to a neuron; learned in training. → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

### Bias
Constant added before the activation; shifts the decision boundary. → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

### Activation Function
Non-linear function applied after the weighted sum, which is what lets networks learn curves. Also in [[PS_07-Neural Networks MLP with scikit-learn|PS 07]]. → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

### ReLU
Activation max(0, z): passes positive values, zeroes negatives. → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

### Multi-Layer Perceptron
Network of fully connected layers: input, one or more hidden layers, output. Also in [[PS_07-Neural Networks MLP with scikit-learn|PS 07]]. → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

### Hidden Layer
Middle layer whose neurons learn increasingly abstract features. → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

### Forward Pass
Data flowing from input to output through the layers to produce a prediction. → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

### Width vs Depth
Neurons per layer (width) versus number of hidden layers (depth). → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

### Loss Function
Measures how wrong a prediction is; training tries to minimise it. → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

### Gradient Descent
Repeatedly step the weights downhill on the loss surface. Seen in: [[Machine Learning]]. → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

### Learning Rate
Size of each gradient descent step: too high overshoots, too low crawls. → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

### Epoch
One full pass through the training set. → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

### Backpropagation
Tracing the error backward through the network to work out how to adjust each weight. → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

### Early Stopping
Stop training when validation loss stops improving, to avoid overfitting. Also in [[PS_07-Neural Networks MLP with scikit-learn|PS 07]]. → [[Lecture 8 - Intro to Deep Learning|Lec 8]]

## Aliases & Shorthands

### NLP
See [[#Natural Language Processing]].

### CNN
See [[#Convolutional Neural Network]].

### MLP
See [[#Multi-Layer Perceptron]].

### Bag-of-Words
See [[#Bag of Words]].

### WCSS
See [[#Inertia]].

### Inertia / WCSS
See [[#Inertia]].

### Precision@K
See [[#Precision at K]].

### Recall@K
See [[#Recall at K]].

### Structured vs Unstructured Data
See [[#Unstructured Data]].

### Interaction Term
See [[#Polynomial Features]].

### L1 Penalty
See [[#L1 and L2 Penalty]].

### L2 Penalty
See [[#L1 and L2 Penalty]].

### Mean Absolute Error
See [[#MAE]].

### CF
See [[#Collaborative Filtering]].

### Internal Validation
See [[#Internal vs External Cluster Validation]].

### External Validation
See [[#Internal vs External Cluster Validation]].

### Sigmoid
See [[#Sigmoid Function]].

### Backprop
See [[#Backpropagation]].

### Cold Start
See [[#Cold Start Problem]].

### EDA
See [[#Exploratory Data Analysis]].
