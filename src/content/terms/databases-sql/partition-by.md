---
title: PARTITION BY
subject: databases-sql
aliases: []
related: [OVER, Window Function, GROUP BY]
source_folder: databases-sql
ai_drafted: true
---

Splits the rows of a window into groups, so a window function restarts for each group. Unlike `GROUP BY` it does not collapse the rows.

```sql
RANK() OVER (PARTITION BY rating ORDER BY rental_rate DESC)
```

## When to use

Written inside [[OVER]], for example to rank films within each rating. The study guide's example ranks by `rental_rate` within each `rating`.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
