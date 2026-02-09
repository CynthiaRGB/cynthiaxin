import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About | Cynthia Xin",
  description: "About Cynthia Xin, product designer.",
};

const quickFacts = [
  {
    label: "FUN FACT ABOUT ME",
    value: "You can find me on Netflix (ask me about which show)",
  },
  {
    label: "Languages I speak",
    value:
      "English, Mandarin Chinese, Japanese, and a bit of Korean",
  },
  {
    label: "COOLEST THING I'VE DONE",
    value: "Snorkeling with a whale shark!",
  },
  {
    label: "Book I'm reading now",
    value: "Thinking in Systems by Donella Meadows",
  },
];

const bioParagraphs = [
  "Design is one medium of storytelling. Beyond product work and vibe coding, I also create digital content and engage a global audience of 420,000+ across RED and other platforms - exploring how ideas travel through tools, interfaces, and culture.",
  "My design journey began relatively recently, after I transitioned from commercial real estate valuation. But in hindsight, the dots connect. From taking a hospitality design class at Cornell during my junior year, to forming close friendships with architects at Harvard Graduate School of Design, to designing the interior of my own home - each experience quietly shaped how I think about space, systems, and people.",
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col pb-5">
        <div className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col px-4 md:px-[80px]">
          <section
            className="pt-12 md:pt-20 md:pb-12"
            aria-labelledby="about-hero"
          >
            <h1
              id="about-hero"
              className="font-display max-w-[1200px] text-[40px] font-normal leading-[1.4] text-[#333333] md:text-[48px]"
            >
              I&apos;m a storyteller by heart.
            </h1>
          </section>

          <section className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <div className="flex max-w-[800px] min-w-0 flex-1 flex-col justify-start">
              <div className="font-sans text-base leading-[1.4] text-[#333333]">
                {bioParagraphs.map((para, i) => (
                  <p key={i} className="mb-6 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-10">
                {quickFacts.map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-[16px]">
                    <p className="font-mono text-h5 uppercase tracking-wide text-[#858E97]">
                      {label}
                    </p>
                    <p className="font-sans text-base leading-[1.4] text-[#333333]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 justify-end lg:ml-auto">
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-[240px] w-[240px] shrink-0 border border-[#E6E9EC] bg-white"
                    aria-hidden
                  />
                ))}
              </div>
            </div>
          </section>

          <div className="min-h-0 flex-1" aria-hidden />
        </div>
      </main>
      <Footer />
    </div>
  );
}
