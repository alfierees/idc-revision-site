/** A content entry's URL slug: the last segment of its id ("micro-ii/ps-4" → "ps-4"). */
export function entrySlug(id: string): string {
  return id.split("/").pop()!;
}
