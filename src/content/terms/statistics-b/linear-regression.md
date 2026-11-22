---
title: Linear Regression
subject: statistics-b
aliases: [Regression Line, Linear Regression Line, Prediction Line, Prediction Equation, Regression Slope]
related: [Correlation Coefficient, Least Squares, Prediction, Covariance, Outlier, Extrapolation, Simulating a Dataset]
source_folder: statistics-b
ai_drafted: true
---

The line $\hat Y=bX+a$ for predicting $Y$ from $X$, with slope $b=r\,s_Y/s_X$ (population $\rho\sigma_y/\sigma_x$) and intercept $a=\bar Y-b\bar X$, so it passes through $(\bar X,\bar Y)$. It is the [[Least Squares]] line.

## When to use

Use it when you are given means, standard deviations and a correlation and asked for a prediction equation (the exam-marks example gives $\hat Y=0.64X+27.2$ for $\rho=0.8$). The slope $b$ is the change in the prediction per unit of $X$, $a$ is the prediction at $X=0$, and regressing $Y$ on $X$ gives a different line from regressing $X$ on $Y$ unless $|\rho|=1$.

See [[Lec_11-Joint Distributions, Correlation and Linear Regression|Lec 11]]. Also in [[Lec_13-Exam Review Session 2|Lec 13]], [[PS_11-Correlation, Regression and Simulation|PS 11]], [[PP_07-Estimators, Correlation, Z and t Tests, Power, F Test, Intervals & Chi-Squared (Practice Exam)|PP 07]].
