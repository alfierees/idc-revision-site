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

  return { subjects, groups: groupBySemester(subjects), cardFor };
}
