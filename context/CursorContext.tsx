"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type CursorState =
  | { type: "dot" }
  | { type: "pill"; label: string; hideArrow?: boolean };

type CursorContextValue = {
  setCursor: (state: CursorState) => void;
};

const CursorContext = createContext<CursorContextValue | null>(null);

export function useCursor() {
  const ctx = useContext(CursorContext);
  return ctx;
}

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursor, setCursorState] = useState<CursorState>({ type: "dot" });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [useCustomCursor, setUseCustomCursor] = useState(false);

  const setCursor = useCallback((state: CursorState) => {
    setCursorState(state);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasHover = window.matchMedia("(hover: hover)").matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setUseCustomCursor(
      !prefersReducedMotion && (hasHover || hasFinePointer)
    );
  }, [mounted]);

  useEffect(() => {
    if (!useCustomCursor) return;
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [useCustomCursor]);

  useEffect(() => {
    if (!useCustomCursor || cursor.type !== "pill") return;
    const prev = document.body.style.cursor;
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = prev;
    };
  }, [useCustomCursor, cursor.type]);

  const showPill = useCustomCursor && mounted && cursor.type === "pill";

  return (
    <CursorContext.Provider value={{ setCursor }}>
      {children}
      {showPill && (
        <div
          className="pointer-events-none fixed left-0 top-0 z-[9999]"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          }}
          aria-hidden
        >
          <div
            className="flex items-center gap-2 rounded-full bg-[#333333] px-3 py-1.5 font-mono text-h5 uppercase tracking-wide text-[#FAFCFD]"
            style={{ whiteSpace: "nowrap" }}
          >
            {!cursor.hideArrow && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
                aria-hidden
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            )}
            <span>{cursor.label}</span>
          </div>
        </div>
      )}
    </CursorContext.Provider>
  );
}
