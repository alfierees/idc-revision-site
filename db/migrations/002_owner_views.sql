-- Anonymised totals for the owner. Rows only appear once 5+ students contributed,
-- so no single student's activity can be read off them.
create view question_stats as
select degree, subject, kind, ref, item_id,
       count(*) filter (where value in ('done', 'wrong')) as attempts,
       round(100.0 * count(*) filter (where value = 'wrong')
             / nullif(count(*) filter (where value in ('done', 'wrong')), 0), 1) as wrong_pct
from marks
where kind <> 'lecture'
group by degree, subject, kind, ref, item_id
having count(distinct user_id) >= 5;

create view weekly_active_students as
select date_trunc('week', day)::date as week, count(distinct user_id) as students
from activity_days
group by 1
having count(distinct user_id) >= 5;

create view weekly_signups as
select date_trunc('week', created_at)::date as week, count(*) as signups
from users
group by 1;
