-- Accounts and progress sync (B2). Our own user ids; Clerk's id is just a column, so the auth
-- provider can be swapped. Standard Postgres only.

create table users (
  id uuid primary key default gen_random_uuid(),
  clerk_id text not null unique,
  email text not null,
  display_name text not null default '',
  created_at timestamptz not null default now()
);

-- Current state of every mark: newest updated_at wins. Clearing a tick is stored as a value
-- ('untried' / 'unread'), not a delete, so the clear syncs too.
create table marks (
  user_id uuid not null references users(id) on delete cascade,
  degree text not null,
  subject text not null,
  kind text not null check (kind in ('problem-set', 'past-paper', 'lecture')),
  ref text not null,
  item_id text not null default '',
  value text not null,
  updated_at timestamptz not null,
  primary key (user_id, degree, subject, kind, ref, item_id)
);

-- Append-only history, for a later stats page.
create table mark_events (
  id bigint generated always as identity primary key,
  user_id uuid not null references users(id) on delete cascade,
  degree text not null,
  subject text not null,
  kind text not null,
  ref text not null,
  item_id text not null,
  value text not null,
  at timestamptz not null
);
create index mark_events_user_at on mark_events (user_id, at);

create table activity_days (
  user_id uuid not null references users(id) on delete cascade,
  day date not null,
  primary key (user_id, day)
);

create table badges (
  user_id uuid not null references users(id) on delete cascade,
  badge_id text not null,
  earned_on date not null,
  primary key (user_id, badge_id)
);

-- "Continue where you left off": the latest page per course.
create table last_seen (
  user_id uuid not null references users(id) on delete cascade,
  degree text not null,
  subject text not null,
  path text not null,
  title text not null,
  seen_at timestamptz not null,
  primary key (user_id, degree, subject)
);
