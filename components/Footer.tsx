export function Footer() {
  return (
    <footer className="border-t border-[#E6E9EC] font-mono text-base uppercase tracking-wide text-[#A3A3A3]">
      <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-4 py-5 md:px-20">
        <p>Designed + Coded by Cynthia Xin</p>
        <div className="flex items-center" style={{ gap: "40px" }}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70 focus-visible:outline-offset-2"
          >
            LinkedIn
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70 focus-visible:outline-offset-2"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
