// Build-time facts about each course for the rail and Overview (needs
// astro:content, so not unit-tested; the logic it calls is).
import { getCollection } from "astro:content";
import type { CourseContentCounts } from "./course-sections";
import { entrySlug } from "./entry-slug";
import { comparePapersNewestFirst } from "./past-paper-order";
import { sortExamPrep, sortLectures, sortProblemSets } from "./reading-order";

export interface CourseLink {
  title: string;
  href: string;
}

export interface CourseContent {
  counts: CourseContentCounts;
  /** Where a first-time visitor should begin: newest paper, else first set, else first lecture. */
  startHere: CourseLink & { reason: string };
  formulaSheet?: CourseLink;
  /** Term slug to its real name, for concept rows. */
  termTitles: Map<string, string>;
}

const FORMULA_SHEET_TITLE = /formula|equation|cheat/i;

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
    const courseSets = sortProblemSets(inCourse(problemSets).map((entry) => ({ slug: entrySlug(entry.id), title: entry.data.title })));
    const courseLectures = sortLectures(
      inCourse(lectures).map((entry) => ({ slug: entrySlug(entry.id), title: entry.data.title, week: entry.data.week })),
    );
    const courseExamPrep = sortExamPrep(
      inCourse(examPrep).map((entry) => ({ slug: entrySlug(entry.id), title: entry.data.title, order: entry.data.order })),
    );
    const courseTerms = inCourse(terms);
    const formulaDoc = courseExamPrep.find((entry) => FORMULA_SHEET_TITLE.test(entry.title));

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
        title: courseSets[0].title,
        href: `/subjects/${slug}/problem-sets/${courseSets[0].slug}`,
        reason: "The first problem set",
      };
    } else if (courseLectures.length > 0) {
      startHere = {
        title: courseLectures[0].title,
        href: `/subjects/${slug}/lectures/${courseLectures[0].slug}`,
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
        title: formulaDoc.title,
        href: `/subjects/${slug}/exam-prep/${formulaDoc.slug}`,
      },
      termTitles: new Map(courseTerms.map((entry) => [entrySlug(entry.id), entry.data.title])),
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
