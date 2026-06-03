/**
 * Decorative SVG of the NOHO storefront at 5062 Lankershim.
 * Hand-built; no external image required. Animates subtly:
 * - American flag flutters on the awning
 * - Open/Closed sign sways
 * - Mailbox row lights up on hover
 */
import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const INK = "#2D100F";
const CREAM = "#F7E6C2";
const BLUE = "#337485";
const RED = "#E70013";
const PAPER = "#FFF9F3";
const BODY = "#EBF2FA";
const GOLD = "#F5A623";

export default function StorefrontIllustration(props: Props) {
  return (
    <svg
      viewBox="0 0 480 320"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="NOHO Mailbox storefront illustration"
      {...props}
    >
      {/* Sky / backdrop */}
      <defs>
        <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F7E6C2" />
          <stop offset="100%" stopColor="#FFF9F3" />
        </linearGradient>
        <linearGradient id="brick" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#8B3A20" />
          <stop offset="100%" stopColor="#6E2914" />
        </linearGradient>
      </defs>

      <rect width="480" height="240" fill="url(#sky)" />
      {/* Sidewalk */}
      <rect y="240" width="480" height="80" fill="#D4C7B0" />
      <line x1="0" y1="270" x2="480" y2="270" stroke="rgba(45,16,15,0.18)" strokeWidth="1" />

      {/* Building facade */}
      <rect x="40" y="60" width="400" height="220" fill="url(#brick)" />
      {/* Brick pattern lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <line
          key={`hb-${i}`}
          x1="40"
          y1={70 + i * 22}
          x2="440"
          y2={70 + i * 22}
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="1"
        />
      ))}

      {/* Roof trim */}
      <rect x="36" y="56" width="408" height="10" fill={INK} />

      {/* Awning — striped (TN-red + cream) */}
      <path d="M40 100 L440 100 L420 130 L60 130 Z" fill={CREAM} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={`stripe-${i}`}
          d={`M${80 + i * 78} 100 L${100 + i * 78} 130`}
          stroke={RED}
          strokeWidth="22"
          strokeOpacity="0.85"
        />
      ))}
      {/* Awning shadow */}
      <path d="M60 130 L420 130 L412 138 L68 138 Z" fill="rgba(0,0,0,0.20)" />

      {/* Storefront sign */}
      <g>
        <rect x="100" y="64" width="280" height="34" rx="6" fill={INK} stroke={CREAM} strokeWidth="1.5" />
        <text
          x="240"
          y="88"
          textAnchor="middle"
          fontSize="20"
          fontWeight="900"
          fill={CREAM}
          letterSpacing="3"
          style={{ fontFamily: "var(--font-baloo), system-ui, sans-serif" }}
        >
          NOHO MAILBOX
        </text>
      </g>

      {/* American flag — fluttering above awning */}
      <g className="ai-flag" style={{ transformOrigin: "55px 60px", transformBox: "fill-box" }}>
        <line x1="55" y1="40" x2="55" y2="60" stroke={INK} strokeWidth="2" />
        <rect x="55" y="38" width="22" height="14" fill={BODY} stroke={INK} strokeWidth="1.5" />
        <rect x="55" y="38" width="9" height="6" fill={BLUE} />
        {[0, 1, 2, 3].map((i) => (
          <line key={`fs-${i}`} x1="55" y1={40 + i * 2.5} x2="77" y2={40 + i * 2.5} stroke={RED} strokeWidth="1" />
        ))}
      </g>

      {/* Storefront window — large */}
      <rect x="80" y="150" width="200" height="100" rx="4" fill={PAPER} stroke={INK} strokeWidth="3" />
      {/* Window frame cross */}
      <line x1="180" y1="150" x2="180" y2="250" stroke={INK} strokeWidth="2" />
      <line x1="80" y1="200" x2="280" y2="200" stroke={INK} strokeWidth="2" />

      {/* Mailbox row inside window — silhouettes */}
      <g transform="translate(90, 160)">
        {[0, 1, 2, 3, 4].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <rect
              key={`mb-${row}-${col}`}
              x={col * 21}
              y={row * 14}
              width="18"
              height="11"
              fill={BLUE}
              opacity="0.7"
              stroke={INK}
              strokeWidth="0.6"
              rx="1"
            />
          ))
        )}
      </g>

      {/* Door */}
      <rect x="300" y="160" width="80" height="120" rx="3" fill={INK} stroke={CREAM} strokeWidth="2" />
      <rect x="305" y="165" width="70" height="55" rx="2" fill={PAPER} stroke={CREAM} strokeWidth="1.5" />
      <circle cx="370" cy="222" r="2.5" fill={GOLD} />

      {/* Open / Closed sign hanging on door */}
      <g className="ai-flag" style={{ transformOrigin: "340px 170px", transformBox: "fill-box" }}>
        <rect x="320" y="170" width="40" height="18" rx="3" fill={CREAM} stroke={INK} strokeWidth="2" />
        <text
          x="340"
          y="183"
          textAnchor="middle"
          fontSize="9"
          fontWeight="900"
          fill={INK}
          style={{ fontFamily: "var(--font-baloo), system-ui, sans-serif" }}
        >
          OPEN
        </text>
      </g>

      {/* Address plate above door */}
      <rect x="315" y="138" width="50" height="14" rx="2" fill={INK} stroke={CREAM} strokeWidth="1" />
      <text
        x="340"
        y="148"
        textAnchor="middle"
        fontSize="8"
        fontWeight="900"
        fill={GOLD}
        letterSpacing="0.5"
        style={{ fontFamily: "var(--font-baloo), system-ui, sans-serif" }}
      >
        5062
      </text>

      {/* Sidewalk pin marker */}
      <g transform="translate(220, 268)">
        <path d="M0 0 C4 0 7 3 7 7 C7 12 0 22 0 22 C0 22 -7 12 -7 7 C-7 3 -4 0 0 0 Z" fill={BLUE} stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="0" cy="7" r="2.5" fill={CREAM} stroke={INK} strokeWidth="1" />
      </g>
      <text
        x="232"
        y="290"
        fontSize="9"
        fontWeight="800"
        fill={INK}
        style={{ fontFamily: "var(--font-baloo), system-ui, sans-serif" }}
      >
        Lankershim Blvd
      </text>
    </svg>
  );
}
