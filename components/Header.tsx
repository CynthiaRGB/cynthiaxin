"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [{ href: "/about", label: "About" }];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[#E6E9EC] font-mono text-[14px] uppercase tracking-wide text-[#858E97]">
      <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-4 py-5 md:px-20">
        <Link
          href="/"
          className="transition-colors hover:text-[#333333] focus-visible:outline-offset-2 data-[active]:text-[#333333]"
          data-active={pathname === "/" ? true : undefined}
        >
          Cynthia Xin
        </Link>
        <nav className="flex items-center gap-6" aria-label="Main">
          {nav.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-[#333333] focus-visible:outline-offset-2 data-[active]:text-[#333333]"
                data-active={isActive ? true : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
