import { ReactNode } from "react";

interface ReadingGridProps {
  children: ReactNode;
  className?: string;
  /** Use 2-col layout (text 560px + media 1fr) for case studies. Default single column for home. */
  twoCol?: boolean;
}

export function ReadingGrid({ children, className = "", twoCol = false }: ReadingGridProps) {
  return (
    <div
      className={`
        grid w-full gap-8
        ${twoCol ? "lg:grid-cols-[560px_1fr] lg:gap-[56px]" : "grid-cols-1"}
        ${className}
      `}
      style={twoCol ? { gridTemplateColumns: "minmax(0, 560px) 1fr" } : undefined}
    >
      {children}
    </div>
  );
}
