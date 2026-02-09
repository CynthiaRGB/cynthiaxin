import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About | Cynthia Xin",
  description: "About Cynthia Xin, product designer.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <article className="max-w-[560px] py-12 md:py-16">
            <h1 className="font-display text-h1 font-normal text-font-black">
              About
            </h1>
            <div className="mt-8 font-sans text-body1 leading-[1.4] text-font-black">
              <p>
                Short bio and links can go here. Reading column layout for calm, editorial feel.
              </p>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}