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
    const lectureCount = countFor(lectures, subject.slug);
    return {
      title: subject.title,
      slug: subject.slug,
      placeholder: subject.placeholder,
      tagline: subject.tagline,
      counts: countsLine({
        lectures: lectureCount,
        problemSets: countFor(problemSets, subject.slug),
        pastPapers: countFor(pastPapers, subject.slug),
      }),
      // Lectures are the friendliest first page; fall back if a course has none yet.
      href: `/subjects/${subject.slug}/${lectureCount > 0 ? "lectures" : "dictionary"}`,
      index,
    };
  };

  return { subjects, groups: groupBySemester(subjects), cardFor };
}
