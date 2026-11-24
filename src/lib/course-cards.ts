// Build-time course data shared by Home and Courses (needs astro:content, so not unit-tested).
import { getCollection } from "astro:content";
import { countsLine, groupBySemester } from "./semesters";

export async function loadCourseCards() {
  const subjects = (await getCollection("subjects")).map((s) => s.data);
  const lectures = await getCollection("lectures");
  const problemSets = await getCollection("problem-sets");
  const pastPapers = await getCollection("past-papers");

  const countFor = (entries: { data: { subject: string } }[], slug: string) =>
    entries.filter((e) => e.data.subject === slug).length;

  const cardFor = (subject: (typeof subjects)[number], index: number) => {
    return {
      title: subject.title,
      slug: subject.slug,
      placeholder: subject.placeholder,
      tagline: subject.tagline,
      counts: countsLine({
        lectures: countFor(lectures, subject.slug),
        problemSets: countFor(problemSets, subject.slug),
        pastPapers: countFor(pastPapers, subject.slug),
      }),
      href: `/subjects/${subject.slug}/`,
      index,
    };
  };

  const liveSlugs = new Set(subjects.filter((s) => !s.placeholder).map((s) => s.slug));
  const liveCount = (entries: { data: { subject: string } }[]) =>
    entries.filter((e) => liveSlugs.has(e.data.subject)).length;
  const totals = {
    courses: liveSlugs.size,
    lectures: liveCount(lectures),
    problemSets: liveCount(problemSets),
    pastPapers: liveCount(pastPapers),
  };
  /** Content totals for a set of subjects ("6 courses · 80 lectures"). */
  const totalsFor = (slugs: string[]) => ({
    lectures: lectures.filter((e) => slugs.includes(e.data.subject)).length,
    problemSets: problemSets.filter((e) => slugs.includes(e.data.subject)).length,
    pastPapers: pastPapers.filter((e) => slugs.includes(e.data.subject)).length,
  });

  return { subjects, groups: groupBySemester(subjects), cardFor, totals, totalsFor };
}
