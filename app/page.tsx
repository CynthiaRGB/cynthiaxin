import { getProjects } from "@/lib/projects";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectList } from "@/components/ProjectList";

export default function HomePage() {
  const projects = getProjects();
  return (
    <>
      <Header />
      <main className="mb-5">
        <Container>
          <section className="py-12 md:py-20 md:pt-20 md:pb-20" aria-labelledby="hero-heading">
            <h1
              id="hero-heading"
              className="font-display max-w-[1200px] text-[40px] font-normal leading-[1.4] text-[#333333] md:text-[48px]"
            >
              Hi, I&apos;m Cynthia, a Seattle-based product designer who <em className="font-display italic">builds in public.</em>
            </h1>
          </section>
          <section aria-labelledby="selected-work">
            <h2 id="selected-work" className="sr-only">
              Selected Work
            </h2>
            <div className="mt-8">
              <ProjectList
                projects={projects}
                labelSize="small"
                showDividers={false}
                showMediaBorders={false}
              />
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
