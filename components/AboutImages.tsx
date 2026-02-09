"use client";

import Image from "next/image";
import { useCursor } from "@/context/CursorContext";

const aboutImages = [
  { src: "/images/about/profile.png", alt: "", pillLabel: "Hi there" },
  { src: "/images/about/home.png", alt: "", pillLabel: "my home, designed by me" },
  { src: "/images/about/snowboarding.png", alt: "", pillLabel: "snowboarding in Hokkaido" },
  { src: "/images/about/musk.png", alt: "", pillLabel: "influencer event with Maye Musk" },
  { src: "/images/about/hoteldesign.png", alt: "", pillLabel: "hotel design class at Cornell" },
  { src: "/images/about/gsd.png", alt: "", pillLabel: "Helping with an urban design model" },
];

export function AboutImages() {
  const cursor = useCursor();

  return (
    <div className="grid grid-cols-2 gap-6">
      {aboutImages.map(({ src, alt, pillLabel }) => (
        <div
          key={src}
          className="relative h-[240px] w-[240px] shrink-0 overflow-hidden border border-[#E6E9EC] bg-white"
          aria-hidden
          onMouseEnter={() => cursor?.setCursor({ type: "pill", label: pillLabel, hideArrow: true })}
          onMouseLeave={() => cursor?.setCursor({ type: "dot" })}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="480px"
            quality={95}
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
