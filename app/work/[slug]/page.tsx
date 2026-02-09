import { notFound } from "next/navigation";
import { getProjects, getProjectBySlug } from "@/lib/projects";

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project | Cynthia Xin" };
  return {
    title: `${project.title} | Cynthia Xin`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return (
    <div className="py-8 font-sans text-font-black">
      <h1 className="font-display text-h1">{project.title}</h1>
      <p className="mt-2 font-mono text-base uppercase text-font-black">
        {[project.role, project.timeline].filter(Boolean).join(" · ")}
      </p>
      <p className="mt-4 text-body1">{project.summary}</p>
      <p className="mt-8 text-font-gray">
        Case study narrative and MDX content will render here when you build the case study template.
      </p>
    </div>
  );
}
