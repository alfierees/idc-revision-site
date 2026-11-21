// Build-time facts about each course for the rail and Overview (needs
// astro:content, so not unit-tested; the logic it calls is).
import { getCollection } from "astro:content";
import type { CourseContentCounts } from "./course-sections";
import { entrySlug } from "./entry-slug";
import { comparePapersNewestFirst } from "./past-paper-order";

export interface CourseLink {
  title: string;
  href: string;
}

export interface CourseContent {
  counts: CourseContentCounts;
  /** Where a first-time visitor should begin: newest paper, else first set, else first lecture. */
  startHere: CourseLink & { reason: string };
  formulaSheet?: CourseLink;
}

const FORMULA_SHEET_TITLE = /formula|equation|cheat/i;
const naturalOrder = (first: string, second: string) => first.localeCompare(second, undefined, { numeric: true });

async function buildCourseContent(): Promise<Map<string, CourseContent>> {
  const [subjects, lectures, problemSets, pastPapers, terms, glossary, examPrep, recipes] = await Promise.all([
    getCollection("subjects"),
    getCollection("lectures", (entry) => entry.data.in_scope !== false),
    getCollection("problem-sets"),
    getCollection("past-papers", (entry) => entry.data.in_scope !== false),
    getCollection("terms", (entry) => entry.data.in_scope),
    getCollection("glossary"),
    getCollection("exam-prep", (entry) => entry.data.in_scope),
    getCollection("recipes", (entry) => entry.data.in_scope),
  ]);

  const courseContent = new Map<string, CourseContent>();
  for (const { data: subject } of subjects) {
    const slug = subject.slug;
    const inCourse = <Entry extends { data: { subject: string } }>(entries: Entry[]) =>
      entries.filter((entry) => entry.data.subject === slug);

    const coursePapers = inCourse(pastPapers)
      .map((entry) => ({ slug: entrySlug(entry.id), title: entry.data.title }))
      .sort(comparePapersNewestFirst);
    const courseSets = inCourse(problemSets).sort((first, second) => naturalOrder(entrySlug(first.id), entrySlug(second.id)));
    const courseLectures = inCourse(lectures).sort(
      (first, second) =>
        (first.data.week ?? Number.MAX_SAFE_INTEGER) - (second.data.week ?? Number.MAX_SAFE_INTEGER) ||
        naturalOrder(first.data.title, second.data.title),
    );
    const courseExamPrep = inCourse(examPrep).sort(
      (first, second) => (first.data.order ?? Number.MAX_SAFE_INTEGER) - (second.data.order ?? Number.MAX_SAFE_INTEGER),
    );
    const courseTerms = inCourse(terms);
    const formulaDoc = courseExamPrep.find((entry) => FORMULA_SHEET_TITLE.test(entry.data.title));

    let startHere: CourseContent["startHere"] = {
      title: "Dictionary",
      href: `/subjects/${slug}/dictionary`,
      reason: "Key terms for this course",
    };
    if (coursePapers.length > 0) {
      startHere = {
        title: coursePapers[0].title,
        href: `/subjects/${slug}/past-papers/${coursePapers[0].slug}`,
        reason: "The most recent past paper",
      };
    } else if (courseSets.length > 0) {
      startHere = {
        title: courseSets[0].data.title,
        href: `/subjects/${slug}/problem-sets/${entrySlug(courseSets[0].id)}`,
        reason: "The first problem set",
      };
    } else if (courseLectures.length > 0) {
      startHere = {
        title: courseLectures[0].data.title,
        href: `/subjects/${slug}/lectures/${entrySlug(courseLectures[0].id)}`,
        reason: "The first lecture",
      };
    }

    courseContent.set(slug, {
      counts: {
        pastPapers: coursePapers.length,
        problemSets: courseSets.length,
        lectures: courseLectures.length,
        dictionary: courseTerms.length + inCourse(glossary).length,
        examPrep: courseExamPrep.length,
        recipes: inCourse(recipes).length,
      },
      startHere,
      formulaSheet: formulaDoc && {
        title: formulaDoc.data.title,
        href: `/subjects/${slug}/exam-prep/${entrySlug(formulaDoc.id)}`,
      },
    });
  }
  return courseContent;
}

let courseContentRequest: Promise<Map<string, CourseContent>> | null = null;

/** Every page's rail needs this, so a production build works it out once. */
export function loadCourseContent(): Promise<Map<string, CourseContent>> {
  if (import.meta.env.DEV) return buildCourseContent();
  courseContentRequest ??= buildCourseContent();
  return courseContentRequest;
}
