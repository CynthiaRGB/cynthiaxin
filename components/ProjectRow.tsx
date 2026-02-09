import type { ProjectMeta } from "@/lib/projects";

interface ProjectRowProps {
  project: ProjectMeta;
}

export function ProjectRow({ project }: ProjectRowProps) {
  return (
    <div className="flex flex-col">
      {(project.heroVideo || project.heroImage) && (
        <span className="block w-full overflow-hidden border border-[#E6E9EC]">
          {project.heroVideo ? (
            <video
              src={project.heroVideo}
              className="block w-full"
              style={{ height: "auto" }}
              playsInline
              muted
              loop
              autoPlay
            />
          ) : project.heroImage ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={project.heroImage}
              alt=""
              className="block w-full object-cover object-center"
              style={{ height: "auto" }}
            />
          ) : null}
        </span>
      )}
      <div className="min-w-0 flex-1 pt-4">
        <div className="flex w-full items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-normal text-[#333333] md:text-[24px]">
            {project.title}
          </h3>
          {project.year && (
            <span className="shrink-0 font-mono text-sm uppercase tracking-wide text-[#A3A3A3]">
              {project.year}
            </span>
          )}
        </div>
        {project.summary && (
          <p className="mt-2 font-sans text-base leading-[1.4] text-[#333333]">
            {project.summary}
          </p>
        )}
      </div>
    </div>
  );
}
