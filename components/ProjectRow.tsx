import type { ProjectMeta } from "@/lib/projects";

interface ProjectRowProps {
  project: ProjectMeta;
}

export function ProjectRow({ project }: ProjectRowProps) {
  return (
    <div className="flex min-w-0 flex-col">
      {(project.heroVideo || project.heroImage) && (
        <span className="block w-full overflow-hidden">
          {project.heroVideo ? (
            <video
              src={project.heroVideo}
              className="block w-full"
              style={{ height: "auto", width: "100%" }}
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
              className="block w-full object-contain object-center"
              style={{ height: "auto", width: "100%" }}
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
        <div
          className="mt-4 w-full"
          style={{ height: "1px", backgroundColor: "#E6E9EC" }}
          aria-hidden
        />
      </div>
    </div>
  );
}
