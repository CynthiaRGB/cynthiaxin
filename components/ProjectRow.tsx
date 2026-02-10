"use client";

import { useState } from "react";
import { useCursor } from "@/context/CursorContext";
import type { ProjectMeta } from "@/lib/projects";

interface ProjectRowProps {
  project: ProjectMeta;
}

export function ProjectRow({ project }: ProjectRowProps) {
  const cursor = useCursor();
  const [svgHeroKey] = useState(() => Date.now());
  const cursorHandlers = {
    onMouseEnter: () =>
      cursor?.setCursor({
        type: "pill",
        label: project.cursorLabel ?? project.title,
      }),
    onMouseLeave: () => cursor?.setCursor({ type: "dot" }),
  };
  const heroMedia = (project.heroVideo || project.heroImage) && (
    <span className="block w-full overflow-hidden" {...cursorHandlers}>
      {project.heroVideo ? (
        <video
          src={project.heroVideo}
          className="block w-full"
          style={{ height: "auto", width: "100%" }}
          playsInline
          muted
          loop
          autoPlay
          preload="auto"
        />
      ) : project.heroImage ? (
        project.heroImage.endsWith(".svg") ? (
          <span className="block w-full overflow-hidden rounded-sm border border-[#E6E9EC] bg-[#F9F9F9] aspect-video">
            <span className="flex h-full w-full items-center justify-center p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={svgHeroKey}
                src={`${project.heroImage}?v=${svgHeroKey}`}
                alt=""
                className="max-h-full max-w-full object-contain"
              />
            </span>
          </span>
        ) : project.slug === "example-one" ? (
          <span className="block w-full overflow-hidden aspect-video">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.heroImage}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </span>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={project.heroImage}
            alt=""
            className="block w-full object-contain object-center"
            style={{ height: "auto", width: "100%" }}
          />
        )
      ) : null}
    </span>
  );

  const textBlock = (
    <div className="min-w-0 w-full flex-1 pt-4 flex flex-col gap-2">
      <div className="flex min-w-0 w-full max-w-full flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-4 md:gap-y-2">
        <h3 className="min-w-0 m-0 font-display text-[20px] font-normal leading-[1.25] text-[#333333]">
          {project.title}
        </h3>
        {project.year && (
          <span className="shrink-0 whitespace-nowrap font-mono text-[16px] font-normal leading-[1.25] uppercase text-[#858E97] md:ml-auto">
            {project.year}
          </span>
        )}
      </div>
      {project.summary && (
        <p className="font-sans text-base leading-[1.4] text-[#333333]">
          {project.summary}
        </p>
      )}
      {!["notion-book-cover-formatter", "second-brain-notion-template"].includes(project.slug) && (
        <div
          className="mt-4 w-full"
          style={{ height: "1px", backgroundColor: "#E6E9EC" }}
          aria-hidden
        />
      )}
    </div>
  );

  if (project.link) {
    return (
      <div className="flex min-w-0 w-full max-w-full flex-col">
        {heroMedia && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full transition-opacity hover:opacity-90 focus-visible:outline-offset-2"
          >
            {heroMedia}
          </a>
        )}
        {textBlock}
      </div>
    );
  }
  return (
    <div className="flex min-w-0 w-full max-w-full flex-col">
      {heroMedia}
      {textBlock}
    </div>
  );
}
