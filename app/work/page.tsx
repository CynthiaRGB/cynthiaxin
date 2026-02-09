import { getProjects } from "@/lib/projects";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectList } from "@/components/ProjectList";

export const metadata = {
  title: "Work | Cynthia Xin",
  description: "Selected work and case studies.",
};

export default function WorkPage() {
  const projects = getProjects();
  return (
    <>
      <Header />
      <main>
        <Container>
          <section className="py-10 md:py-14" aria-labelledby="work-heading">
            <h1 id="work-heading" className="font-display text-3xl font-normal text-font-black md:text-h2">
              Work
            </h1>
            <div className="mt-6">
              <ProjectList projects={projects} />
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
