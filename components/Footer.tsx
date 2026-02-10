export function Footer() {
  return (
    <footer className="border-t border-[#E6E9EC] font-mono text-h5 uppercase tracking-wide text-[#858E97]">
      <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-4 py-5 md:px-20">
        <p>Designed and vibe coded by Cynthia</p>
        <div className="flex items-center" style={{ gap: "40px" }}>
          <a
            href="https://www.linkedin.com/in/cynthiayxin/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#333333] focus-visible:outline-offset-2"
          >
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@cynthiaxin"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#333333] focus-visible:outline-offset-2"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
