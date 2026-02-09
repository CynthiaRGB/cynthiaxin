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
  return (
    <ul className="grid list-none grid-cols-1 gap-6 sm:grid-cols-2" role="list" style={{ gap: "24px" }}>
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectRow project={project} />
        </li>
      ))}
    </ul>
  );
}
