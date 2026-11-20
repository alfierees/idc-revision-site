---
title: COALESCE
subject: databases-sql
aliases: []
related: ["NULL", IFNULL, NULLIF, CAST]
source_folder: databases-sql
ai_drafted: true
---

Returns the first non-[[NULL]] argument, so it can replace missing values with a fallback.

```sql
SELECT rental_id,
       COALESCE(return_date, 'Still Rented') AS return_status
FROM rental;
```

## When to use

Appears in the reading's NULL-handling section (`COALESCE(return_date, 'Still Rented')`). Its warning: that mixes a date with a string, so [[CAST]] the date to text on stricter databases. Not used in a past paper.

See [[Read_01-SQL Keywords, Concepts & Exam Tips|Read 01]].
