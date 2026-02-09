import { ProjectRow } from "./ProjectRow";
import type { ProjectMeta } from "@/lib/projects";

interface ProjectListProps {
  projects: ProjectMeta[];
}

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <p className="font-sans text-base leading-[1.4] text-[#A3A3A3]">
        No projects yet.
      </p>
    );
  }
  const leftColumn = projects.filter((_, i) => i % 2 === 0);
  const rightColumn = projects.filter((_, i) => i % 2 === 1);
  return (
    <>
      <ul
        className="flex min-w-0 list-none flex-col gap-6 p-0 sm:hidden"
        role="list"
        style={{ gap: "24px" }}
      >
        {projects.map((project) => (
          <li key={project.slug} className="min-w-0">
            <ProjectRow project={project} />
          </li>
        ))}
      </ul>
      <div
        className="hidden sm:flex sm:flex-row"
        style={{ gap: "24px" }}
      >
        <ul
          className="flex min-w-0 list-none flex-1 flex-col p-0"
          role="list"
          style={{ gap: "24px" }}
        >
          {leftColumn.map((project) => (
            <li key={project.slug} className="min-w-0">
              <ProjectRow project={project} />
            </li>
          ))}
        </ul>
        <ul
          className="flex min-w-0 list-none flex-1 flex-col p-0"
          role="list"
          style={{ gap: "24px" }}
        >
          {rightColumn.map((project) => (
            <li key={project.slug} className="min-w-0">
              <ProjectRow project={project} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
