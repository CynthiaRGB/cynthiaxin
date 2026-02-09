import Link from "next/link";

const nav = [{ href: "/about", label: "About" }];

export function Header() {
  return (
    <header className="border-b border-[#E6E9EC] font-mono text-base uppercase tracking-wide text-[#A3A3A3]">
      <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-4 py-5 md:px-20">
        <Link href="/" className="transition-opacity hover:opacity-70 focus-visible:outline-offset-2">
          Cynthia Xin
        </Link>
        <nav className="flex items-center gap-6" aria-label="Main">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="transition-opacity hover:opacity-70 focus-visible:outline-offset-2"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
