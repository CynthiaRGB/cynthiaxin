"use client";

import { useCursor } from "@/context/CursorContext";
import type { ProjectMeta } from "@/lib/projects";

interface ProjectRowProps {
  project: ProjectMeta;
}

export function ProjectRow({ project }: ProjectRowProps) {
  const cursor = useCursor();
  const cursorHandlers = {
    onMouseEnter: () =>
      cursor?.setCursor({
        type: "pill",
        label: project.cursorLabel ?? project.title,
      }),
    onMouseLeave: () => cursor?.setCursor({ type: "dot" }),
  };
  const content = (
    <>
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
        <div className="flex w-full flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 className="font-display text-2xl font-normal text-[#333333] md:text-[24px]">
            {project.title}
          </h3>
          {project.year && (
            <span className="shrink-0 font-mono text-sm uppercase tracking-wide text-[#858E97]">
              {project.year}
            </span>
          )}
        </div>
        {project.summary && (
          <p className="mt-1 font-sans text-base leading-[1.4] text-[#333333] sm:mt-4">
            {project.summary}
          </p>
        )}
        <div
          className="mt-4 w-full"
          style={{ height: "1px", backgroundColor: "#E6E9EC" }}
          aria-hidden
        />
      </div>
    </>
  );
  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-w-0 flex-col transition-opacity hover:opacity-90 focus-visible:outline-offset-2"
        {...cursorHandlers}
      >
        {content}
      </a>
    );
  }
  return (
    <div className="flex min-w-0 flex-col" {...cursorHandlers}>
      {content}
    </div>
  );
}
