// Local calendar dates as "YYYY-MM-DD" strings, so revision days follow the student's own midnight.
const pad = (n: number) => String(n).padStart(2, "0");

export function localDay(date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function parseDay(day: string): Date {
  const [year, month, dayOfMonth] = day.split("-").map(Number);
  return new Date(year, month - 1, dayOfMonth);
}

export function addDays(day: string, delta: number): string {
  const date = parseDay(day);
  date.setDate(date.getDate() + delta);
  return localDay(date);
}

/** The Monday on or before `day`. */
export function weekStart(day: string): string {
  const weekday = parseDay(day).getDay(); // 0 = Sunday
  return addDays(day, -((weekday + 6) % 7));
}

/** "2026-11-20" → "Earned 20 Nov". Anything that isn't a day string passes through unchanged. */
export function earnedLabel(day: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) return day;
  const date = parseDay(day);
  return `Earned ${date.getDate()} ${date.toLocaleString("en-GB", { month: "short" })}`;
}
