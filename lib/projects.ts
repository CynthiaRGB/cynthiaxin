import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "projects");

export interface ProjectMeta {
  slug: string;
  title: string;
  year: string;
  role: string;
  timeline?: string;
  team?: string;
  summary: string;
  tags: string[];
  priority?: number;
  heroImage?: string;
  heroVideo?: string;
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

export function getProjects(): ProjectMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => /\.mdx?$/.test(f));
  const projects: ProjectMeta[] = files.map((filename) => {
    const fullPath = path.join(CONTENT_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(raw);
    const slug = (data.slug as string) || getSlugFromFilename(filename);
    return {
      slug,
      title: (data.title as string) || "Untitled",
      year: String(data.year ?? ""),
      role: (data.role as string) || "",
      timeline: data.timeline as string | undefined,
      team: data.team as string | undefined,
      summary: (data.summary as string) || "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      priority: typeof data.priority === "number" ? data.priority : 0,
      heroImage: data.heroImage as string | undefined,
      heroVideo: data.heroVideo as string | undefined,
    };
  });
  projects.sort((a, b) => {
    if (a.priority !== b.priority) return (b.priority ?? 0) - (a.priority ?? 0);
    return (b.year || "").localeCompare(a.year || "");
  });
  return projects;
}

export function getProjectBySlug(slug: string): ProjectMeta | null {
  const projects = getProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}
