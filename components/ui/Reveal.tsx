"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * 12px rise + fade, once.
 *
 * Content renders VISIBLE by default and is only armed for animation after
 * mount, so a failed observer, no JS, or reduced-motion never leaves a section
 * blank. Elements already on screen at mount are never armed at all.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen — show it as-is rather than fading it in under the user.
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    setArmed(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(node);

    // Safety net: never leave content hidden if the observer stays silent.
    const timer = window.setTimeout(() => setVisible(true), 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const state = armed ? `reveal-anim ${visible ? "is-visible" : ""}` : "";

  return (
    <div ref={ref} className={`${state} ${className}`.trim()}>
      {children}
    </div>
  );
}
