import type { CSSProperties, ReactNode } from "react";
import { waLink, type WaIntent } from "@/lib/whatsapp";

const GREEN = "#2D7A4A";

const WhatsAppGlyph = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm5.84 14.24c-.25.7-1.44 1.34-1.99 1.42-.53.08-1.18.11-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5-4.36-5.16-4.56-.15-.2-1.23-1.64-1.23-3.12 0-1.49.78-2.22 1.06-2.52.28-.3.6-.38.8-.38.2 0 .4.002.57.01.18.008.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.45.53-.15.15-.3.31-.13.6.18.3.78 1.28 1.67 2.07 1.15 1.02 2.12 1.34 2.42 1.49.3.15.47.13.64-.08.18-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2 .96.3.15.5.22.57.34.07.13.07.72-.18 1.42Z" />
  </svg>
);

type Props = {
  intent?: WaIntent;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: "solid" | "outline";
  glyphClassName?: string;
};

/**
 * Intent-segmented WhatsApp CTA. Renders a plain anchor (safe in server
 * components). Defaults to the brand green; pass variant="outline" for a
 * lighter treatment. The href + pre-filled message come from lib/whatsapp.
 */
export default function WhatsAppCTA({
  intent = "general",
  children,
  className = "",
  style,
  variant = "solid",
  glyphClassName,
}: Props) {
  const variantStyle: CSSProperties =
    variant === "solid"
      ? { background: GREEN, color: "#fff", boxShadow: "0 6px 22px rgba(45,122,74,0.28)" }
      : { background: "transparent", color: GREEN, border: `2px solid ${GREEN}` };

  return (
    <a
      href={waLink(intent)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02] active:scale-[0.98] ${className}`}
      style={{ ...variantStyle, ...style }}
    >
      <WhatsAppGlyph className={glyphClassName} />
      {children ?? "WhatsApp"}
    </a>
  );
}
