import { addDays, weekStart } from "./days";

export function gentleStreak(activityDays: string[], today: string): number {
  if (activityDays.length === 0) return 0;
  const revised = new Set(activityDays);
  const firstDay = [...revised].sort()[0];
  const forgivenWeeks = new Set<string>();
  let cursor = revised.has(today) ? today : addDays(today, -1);
  let streak = 0;
  while (cursor >= firstDay) {
    if (revised.has(cursor)) {
      streak += 1;
    } else {
      const week = weekStart(cursor);
      if (forgivenWeeks.has(week)) break;
      forgivenWeeks.add(week);
    }
    cursor = addDays(cursor, -1);
  }
  return streak;
}

/** True when some Monday-to-Sunday week has a revision day on all seven days. */
export function hasFullWeek(activityDays: string[]): boolean {
  const revised = new Set(activityDays);
  const mondays = new Set(activityDays.map(weekStart));
  return [...mondays].some((monday) =>
    Array.from({ length: 7 }, (_, offset) => addDays(monday, offset)).every((day) => revised.has(day)),
  );
}

/** `weekCount` columns of 7 days (Monday first), oldest first, the last being this week. */
export function calendarWeeks(today: string, weekCount: number): string[][] {
  const thisMonday = weekStart(today);
  return Array.from({ length: weekCount }, (_, column) => {
    const monday = addDays(thisMonday, -7 * (weekCount - 1 - column));
    return Array.from({ length: 7 }, (_, offset) => addDays(monday, offset));
  });
}
