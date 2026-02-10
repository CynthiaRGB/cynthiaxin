export function Footer() {
  return (
    <footer className="border-t border-[#E6E9EC] font-mono text-[14px] uppercase tracking-wide text-[#858E97]">
      <div className="mx-auto flex w-full max-w-[1800px] flex-wrap items-center justify-between gap-3 px-4 py-5 md:px-20">
        <p>Designed and vibe coded by Cynthia</p>
        <a
          href="https://www.linkedin.com/in/cynthiayxin/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[#333333] focus-visible:outline-offset-2"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
