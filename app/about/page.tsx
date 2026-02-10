import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutImages } from "@/components/AboutImages";

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

type BioSegment = { type: "text"; content: string } | { type: "link"; content: string; href: string };

const bioParagraphs: (string | BioSegment[])[] = [
  [
    { type: "text", content: "Design is one medium of storytelling. Beyond product work and vibe coding, I also create digital content and engage a global audience of 420,000+ across " },
    { type: "link", content: "RED", href: "https://www.xiaohongshu.com/user/profile/5ba851effd78e10001ad7d81" },
    { type: "text", content: " and other platforms - exploring how ideas travel through tools, interfaces, and culture." },
  ],
  [
    { type: "text", content: "My design journey began relatively recently, after I transitioned from commercial real estate valuation. But in hindsight, the dots connect. From taking a " },
    { type: "link", content: "hospitality design class at Cornell", href: "https://sha.cornell.edu/admissions-programs/undergraduate/academics/courses/properties-development-and-management/hadm3510/" },
    { type: "text", content: " during my junior year, to forming close friendships with architects at " },
    { type: "link", content: "Harvard Graduate School of Design", href: "https://www.gsd.harvard.edu/offices-and-facilities/advanced-studies-programs/programs/design-studies/" },
    { type: "text", content: ", to designing the interior of my own home - each experience quietly shaped how I think about space, systems, and people." },
  ],
  "In my free time, I travel around the world with my best friend!",
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

          <section className="mt-8 flex flex-col gap-6 md:mt-0 md:flex-row md:items-start md:gap-6">
            <div className="flex max-w-[680px] min-w-0 flex-1 flex-col justify-start">
              <div className="font-sans text-base leading-[1.4] text-[#333333]">
                {bioParagraphs.map((para, i) => (
                  <p key={i} className="mb-6 last:mb-0">
                    {Array.isArray(para) ? (
                      para.map((seg, j) =>
                        seg.type === "link" ? (
                          <a
                            key={j}
                            href={seg.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#858E97] transition-colors hover:text-[#333333]"
                          >
                            {seg.content}
                          </a>
                        ) : (
                          <span key={j}>{seg.content}</span>
                        )
                      )
                    ) : (
                      para
                    )}
                  </p>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-10">
                {quickFacts.map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-[8px]">
                    <p className="font-mono text-[14px] uppercase tracking-wide text-[#858E97]">
                      {label}
                    </p>
                    <p className="font-sans text-base leading-[1.4] text-[#333333]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 md:ml-auto">
              <AboutImages />
            </div>
          </section>

          <div className="min-h-0 flex-1" aria-hidden />
        </div>
      </main>
      <Footer />
    </div>
  );
}
