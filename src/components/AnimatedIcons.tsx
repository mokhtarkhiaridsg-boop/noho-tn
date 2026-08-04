/**
 * NOHO Mailbox Tunisie — Animated branded icons.
 * Ported verbatim from noho-mailbox.org. Self-animating SVG icons,
 * Apple-restrained micro-animations with hover reactions.
 */

import { type SVGProps } from "react";

const BRAND = {
  cream: "#F7E6C2",
  blue: "#337485",
  ink: "#2D100F",
  paper: "#FFF9F3",
  body: "#EBF2FA",
  red: "#E70013",
  amber: "#F5A623",
} as const;

type IconProps = SVGProps<SVGSVGElement>;

function withAi(props: IconProps): IconProps {
  const cls = ["ai-icon", props.className].filter(Boolean).join(" ");
  return { ...props, className: cls, fill: "none", xmlns: "http://www.w3.org/2000/svg" };
}

export function AiMailbox(props: IconProps) {
  return (
    <svg viewBox="0 0 120 140" {...withAi(props)}>
      <rect x="52" y="90" width="16" height="40" rx="2" fill={BRAND.body} stroke={BRAND.ink} strokeWidth="3" />
      <rect x="40" y="126" width="40" height="6" rx="3" fill={BRAND.body} stroke={BRAND.ink} strokeWidth="2.5" />
      <rect x="16" y="30" width="84" height="52" rx="10" fill={BRAND.body} stroke={BRAND.ink} strokeWidth="3.5" />
      <path d="M16 48 Q16 18 58 18 Q100 18 100 48" fill={BRAND.body} stroke={BRAND.ink} strokeWidth="3.5" />
      <rect x="98" y="30" width="5" height="28" rx="2" fill={BRAND.blue} stroke={BRAND.ink} strokeWidth="2" />
      <g className="ai-flag" style={{ transformOrigin: "98px 30px", transformBox: "fill-box" }}>
        <rect x="96" y="26" width="14" height="9" rx="2.5" fill={BRAND.red} stroke={BRAND.ink} strokeWidth="2" />
      </g>
      <g className="ai-heart">
        <path d="M48 52 C48 45 38 42 38 49 C38 57 48 63 48 63 C48 63 58 57 58 49 C58 42 48 45 48 52Z" fill={BRAND.blue} />
      </g>
    </svg>
  );
}

export function AiTruck(props: IconProps) {
  return (
    <svg viewBox="0 0 120 80" {...withAi(props)}>
      <g className="ai-truck">
        <rect x="4" y="16" width="68" height="40" rx="6" fill={BRAND.body} stroke={BRAND.ink} strokeWidth="3" />
        <path d="M72 30 L72 56 L108 56 L108 40 L92 30 Z" fill={BRAND.body} stroke={BRAND.ink} strokeWidth="3" strokeLinejoin="round" />
        <rect x="78" y="36" width="14" height="10" rx="2" fill={BRAND.blue} opacity="0.3" stroke={BRAND.ink} strokeWidth="1.5" />
        <line x1="4" y1="56" x2="108" y2="56" stroke={BRAND.ink} strokeWidth="3" />
        <g>
          <circle cx="30" cy="60" r="10" fill={BRAND.body} stroke={BRAND.ink} strokeWidth="3" />
          <g className="ai-wheel" style={{ transformOrigin: "30px 60px" }}>
            <circle cx="30" cy="60" r="4" fill={BRAND.blue} />
            <path d="M30 53 L30 67 M23 60 L37 60" stroke={BRAND.ink} strokeWidth="1.2" />
          </g>
        </g>
        <g>
          <circle cx="90" cy="60" r="10" fill={BRAND.body} stroke={BRAND.ink} strokeWidth="3" />
          <g className="ai-wheel" style={{ transformOrigin: "90px 60px" }}>
            <circle cx="90" cy="60" r="4" fill={BRAND.blue} />
            <path d="M90 53 L90 67 M83 60 L97 60" stroke={BRAND.ink} strokeWidth="1.2" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function AiShield(props: IconProps) {
  return (
    <svg viewBox="0 0 48 56" {...withAi(props)}>
      <g className="ai-shield-body">
        <path d="M24 4 L4 14 L4 28 C4 40 12 50 24 54 C36 50 44 40 44 28 L44 14 Z" fill={BRAND.paper} stroke={BRAND.ink} strokeWidth="3" strokeLinejoin="round" />
      </g>
      <path d="M16 28 L22 34 L34 20" stroke={BRAND.blue} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AiEnvelope(props: IconProps) {
  return (
    <svg viewBox="0 0 64 48" {...withAi(props)}>
      <g className="ai-envelope">
        <rect x="2" y="2" width="60" height="44" rx="6" fill={BRAND.body} stroke={BRAND.ink} strokeWidth="3" />
        <path d="M4 6 L32 26 L60 6" stroke={BRAND.ink} strokeWidth="3" fill="none" strokeLinejoin="round" />
        <circle cx="48" cy="36" r="4" fill={BRAND.red} stroke={BRAND.ink} strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function AiClock(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...withAi(props)}>
      <circle cx="24" cy="24" r="20" fill={BRAND.paper} stroke={BRAND.ink} strokeWidth="2.5" />
      {[0, 90, 180, 270].map((deg) => (
        <line key={deg} x1="24" y1="6" x2="24" y2="9" stroke={BRAND.ink} strokeWidth="2" strokeLinecap="round" transform={`rotate(${deg} 24 24)`} />
      ))}
      <path d="M24 24 L24 14" stroke={BRAND.ink} strokeWidth="3" strokeLinecap="round" />
      <g className="ai-clock-hand">
        <path d="M24 24 L24 10" stroke={BRAND.red} strokeWidth="2" strokeLinecap="round" />
      </g>
      <circle cx="24" cy="24" r="2" fill={BRAND.ink} />
    </svg>
  );
}

export function AiBolt(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...withAi(props)}>
      <g className="ai-bolt">
        <path d="M26 4 L8 28 L20 28 L18 44 L40 18 L26 18 Z" fill={BRAND.cream} stroke={BRAND.ink} strokeWidth="2.5" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export function AiPin(props: IconProps) {
  return (
    <svg viewBox="0 0 48 56" {...withAi(props)}>
      <g className="ai-pin">
        <path d="M24 4 C32 4 38 10 38 18 C38 28 24 48 24 48 C24 48 10 28 10 18 C10 10 16 4 24 4 Z" fill={BRAND.blue} stroke={BRAND.ink} strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="24" cy="18" r="5" fill={BRAND.cream} stroke={BRAND.ink} strokeWidth="2" />
      </g>
    </svg>
  );
}

export function AiHeart(props: IconProps) {
  return (
    <svg viewBox="0 0 48 44" {...withAi(props)}>
      <g className="ai-heart">
        <path d="M24 8 C24 2 14 -1 14 7 C14 16 24 24 24 24 C24 24 34 16 34 7 C34 -1 24 2 24 8Z" fill={BRAND.red} stroke={BRAND.ink} strokeWidth="2.5" transform="translate(0, 10) scale(1.35)" />
      </g>
    </svg>
  );
}

export function AiBox(props: IconProps) {
  return (
    <svg viewBox="0 0 80 80" {...withAi(props)}>
      <path d="M40 8 L72 22 L72 58 L40 72 L8 58 L8 22 Z" fill={BRAND.body} stroke={BRAND.ink} strokeWidth="3" strokeLinejoin="round" />
      <path d="M8 22 L40 36 L72 22" stroke={BRAND.ink} strokeWidth="3" strokeLinejoin="round" />
      <path d="M40 36 L40 72" stroke={BRAND.ink} strokeWidth="3" />
      <path d="M24 15 L56 29" stroke={BRAND.red} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function AiSparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...withAi(props)}>
      <g className="ai-bolt">
        <path d="M12 2 L13.5 9 L20 12 L13.5 15 L12 22 L10.5 15 L4 12 L10.5 9 Z" fill={BRAND.amber} stroke={BRAND.ink} strokeWidth="1.5" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/** Grad cap in the AiMailbox language — bold ink, body fill, swinging tassel. */
export function AiGradCap(props: IconProps) {
  return (
    <svg viewBox="0 0 120 120" {...withAi(props)}>
      <path d="M10 52 L60 30 L110 52 L60 74 Z" fill={BRAND.body} stroke={BRAND.ink} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M26 52 L60 38 L94 52 L60 66 Z" fill={BRAND.blue} opacity="0.25" />
      <path d="M28 62 L28 84 C28 91 42 97 60 97 C78 97 92 91 92 84 L92 62" fill={BRAND.body} stroke={BRAND.ink} strokeWidth="3.5" strokeLinejoin="round" />
      <g className="ai-heart">
        <path d="M60 78 C60 71 50 68 50 75 C50 83 60 89 60 89 C60 89 70 83 70 75 C70 68 60 71 60 78Z" fill={BRAND.blue} />
      </g>
      <g className="pl-tassel" style={{ transformOrigin: "104px 55px", transformBox: "view-box" }}>
        <path d="M104 55 L104 78" stroke={BRAND.amber} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="104" cy="55" r="4" fill={BRAND.amber} stroke={BRAND.ink} strokeWidth="2" />
        <path d="M99.5 78 h9 l-1.5 12 h-6 Z" fill={BRAND.amber} stroke={BRAND.ink} strokeWidth="2" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/** Old-west storefront in the AiMailbox language — awning, star, swinging sign. */
export function AiStorefront(props: IconProps) {
  return (
    <svg viewBox="0 0 120 120" {...withAi(props)}>
      {/* false-front cornice */}
      <rect x="14" y="10" width="92" height="16" rx="3" fill={BRAND.body} stroke={BRAND.ink} strokeWidth="3.5" />
      <g className="ai-bolt">
        <path d="M60 13 L61.8 17.6 L66.5 18.2 L63 21.4 L64 26 L60 23.6 L56 26 L57 21.4 L53.5 18.2 L58.2 17.6 Z" fill={BRAND.amber} stroke={BRAND.ink} strokeWidth="1.5" strokeLinejoin="round" />
      </g>
      {/* facade */}
      <rect x="20" y="26" width="80" height="80" fill={BRAND.body} stroke={BRAND.ink} strokeWidth="3.5" />
      {/* scalloped awning */}
      <path d="M20 40 L100 40 L94 52 L26 52 Z" fill={BRAND.blue} opacity="0.3" stroke={BRAND.ink} strokeWidth="3" strokeLinejoin="round" />
      <path d="M26 52 Q30 58 34 52 Q38 58 42 52 Q46 58 50 52 Q54 58 58 52 Q62 58 66 52 Q70 58 74 52 Q78 58 82 52 Q86 58 90 52 Q92 55 94 52" stroke={BRAND.ink} strokeWidth="2.5" fill={BRAND.paper} />
      {/* windows */}
      <rect className="pl-win pl-win-0" x="28" y="62" width="20" height="20" fill={BRAND.blue} stroke={BRAND.ink} strokeWidth="2.5" />
      <rect className="pl-win pl-win-2" x="72" y="62" width="20" height="20" fill={BRAND.blue} stroke={BRAND.ink} strokeWidth="2.5" />
      {/* door */}
      <rect x="53" y="68" width="15" height="38" fill={BRAND.ink} />
      {/* hanging sign, swinging */}
      <g className="pl-sign" style={{ transformOrigin: "100px 56px", transformBox: "view-box" }}>
        <path d="M100 56 L100 64" stroke={BRAND.ink} strokeWidth="2.5" />
        <rect x="88" y="64" width="24" height="13" rx="3" fill={BRAND.red} stroke={BRAND.ink} strokeWidth="2.5" />
        <path d="M93 70.5 H107" stroke={BRAND.paper} strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
