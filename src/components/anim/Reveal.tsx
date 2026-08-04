"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** ms delay before the reveal transition fires (for stagger) */
  delay?: number;
  variant?: "up" | "zoom";
  as?: ElementType;
  once?: boolean;
};

/**
 * Scroll-reveal island. Adds `.is-in` when the element enters the viewport,
 * driving the CSS transitions defined in globals.css. Respects reduced-motion
 * automatically (the CSS no-ops the transition).
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  as,
  once = true,
}: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const base = variant === "zoom" ? "reveal-zoom" : "reveal";

  return (
    <Tag
      ref={ref}
      className={`${base} ${shown ? "is-in" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
