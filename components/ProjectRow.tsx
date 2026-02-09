import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";

interface ProjectRowProps {
  project: ProjectMeta;
}

export function ProjectRow({ project }: ProjectRowProps) {
  const metaLine = [project.role, project.year].filter(Boolean).join(" · ");
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border-b border-[#E6E9EC] py-6 transition-opacity hover:opacity-80 focus-visible:outline-offset-2 md:py-8"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-8">
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-2xl font-normal text-[#333333] md:text-[24px]">
            {project.title}
          </h3>
          {metaLine && (
            <p className="mt-1 font-mono text-base uppercase tracking-wide text-[#333333]">
              {metaLine}
            </p>
          )}
          {project.summary && (
            <p className="mt-2 font-sans text-base leading-[1.4] text-[#333333]">
              {project.summary}
            </p>
          )}
          {project.tags?.length > 0 && (
            <p className="mt-2 font-mono text-sm uppercase tracking-wide text-[#A3A3A3]">
              {project.tags.join(" · ")}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
