// One order per section, so the sidebar, the Overview and Previous/Next agree.

export function sortLectures<Lecture extends { title: string; week?: number }>(lectures: Lecture[]): Lecture[] {
  return [...lectures].sort((first, second) => {
    if (first.week !== undefined && second.week !== undefined) return first.week - second.week;
    if (first.week !== undefined) return -1;
    if (second.week !== undefined) return 1;
    return first.title.localeCompare(second.title);
  });
}

const leadingNumber = (slug: string) => Number(slug.match(/(\d+)/)?.[1] ?? Number.POSITIVE_INFINITY);

export function sortProblemSets<ProblemSet extends { slug: string }>(sets: ProblemSet[]): ProblemSet[] {
  return [...sets].sort((first, second) => {
    const firstNumber = leadingNumber(first.slug);
    const secondNumber = leadingNumber(second.slug);
    return firstNumber === secondNumber ? first.slug.localeCompare(second.slug) : firstNumber - secondNumber;
  });
}

export function sortExamPrep<Doc extends { title: string; order?: number }>(docs: Doc[]): Doc[] {
  return [...docs].sort((first, second) => {
    const firstOrder = first.order ?? Number.POSITIVE_INFINITY;
    const secondOrder = second.order ?? Number.POSITIVE_INFINITY;
    return firstOrder === secondOrder ? first.title.localeCompare(second.title) : firstOrder - secondOrder;
  });
}

export function neighbours<Item extends { slug: string }>(items: Item[], currentSlug: string): { previous?: Item; next?: Item } {
  const index = items.findIndex((item) => item.slug === currentSlug);
  if (index === -1) return {};
  return { previous: items[index - 1], next: items[index + 1] };
}
