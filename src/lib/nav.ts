// The site's top-level sections. Progress and You stay hidden until accounts
// (B2) ship, gated by PROGRESS_UI_ENABLED.

export type SectionId = "home" | "courses" | "progress" | "you";

export interface NavSection {
  id: SectionId;
  label: string;
  href: string;
}

export const NAV_SECTIONS: NavSection[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "courses", label: "Courses", href: "/courses" },
  { id: "progress", label: "Progress", href: "/progress" },
  { id: "you", label: "You", href: "/profile" },
];

export function visibleSections(progressEnabled: boolean): NavSection[] {
  return progressEnabled ? NAV_SECTIONS : NAV_SECTIONS.filter((s) => s.id === "home" || s.id === "courses");
}

/** Which section a pathname belongs to. Course pages belong to Courses. */
export function activeSection(pathname: string): SectionId | undefined {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (path === "/") return "home";
  if (path === "/courses" || path.startsWith("/subjects/")) return "courses";
  if (path === "/progress") return "progress";
  if (path === "/profile") return "you";
  return undefined;
}
