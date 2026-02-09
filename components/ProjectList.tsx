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
    <ul className="list-none" role="list">
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectRow project={project} />
        </li>
      ))}
    </ul>
  );
}
