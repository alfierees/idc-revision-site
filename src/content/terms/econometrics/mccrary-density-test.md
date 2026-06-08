---
title: McCrary Density Test
subject: econometrics
aliases: ["McCrary test", "density test", "sorting test"]
related: ["regression-discontinuity", "continuity-assumption", "running-variable"]
source_folder: econometrics
ai_drafted: true
---

The **McCrary density test** (McCrary 2008) checks whether units can manipulate their position on the [[Running Variable]] to land on a preferred side of the [[Cutoff]]. If sorting is occurring, the density of the running variable will be **discontinuous** at the cutoff — visibly bunched on the side that yields the desirable treatment status. A smooth density supports the [[Continuity Assumption]] and the RDD design; a sharp jump in density signals manipulation and invalidates the design.

## When to use

Run the McCrary test as a routine sanity check before reporting any RDD result. R: `rddensity::rddensity(running, c = cutoff)` returns the test statistic and a p-value. Examples of likely manipulation: standardised-test scores near scholarship cutoffs (students retake), income near means-test eligibility thresholds (households underreport). Examples where manipulation is implausible: vote shares in elections (no individual can move the aggregate count), birth dates near a school-cutoff date.
