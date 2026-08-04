/**
 * NOHO Tunisia — admin sidebar nav glyphs.
 * Compact 24×24 line icons, currentColor, 1.75 stroke. Subtle, crisp.
 */
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { className?: string };

const S = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconOverview = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <rect x="3" y="3" width="7.5" height="7.5" rx="1.6" />
    <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6" />
    <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6" />
    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6" />
  </svg>
);

export const IconBox = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <path d="M12 3 21 7.5v9L12 21 3 16.5v-9Z" />
    <path d="M3 7.5 12 12l9-4.5M12 12v9" />
  </svg>
);

export const IconShipping = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <path d="M2.5 6.5h10v9h-10z" />
    <path d="M12.5 9.5h4l4 3.5v2.5h-8z" />
    <circle cx="6.5" cy="17" r="1.7" />
    <circle cx="17" cy="17" r="1.7" />
  </svg>
);

export const IconStudents = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <path d="M2 8.5 12 4l10 4.5L12 13Z" />
    <path d="M6 10.7v4.3c0 1.3 2.7 2.5 6 2.5s6-1.2 6-2.5v-4.3" />
    <path d="M22 8.5v5" />
  </svg>
);

export const IconBusiness = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <rect x="4.5" y="3" width="15" height="18" rx="1.6" />
    <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
    <path d="M10.5 21v-3h3v3" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.2" />
    <path d="M3.5 6.5 12 12.5l8.5-6" />
  </svg>
);

export const IconReceipt = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <path d="M5 3.5h14v17l-2.3-1.5-2.4 1.5-2.3-1.5-2.4 1.5L5 20.5Z" />
    <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
  </svg>
);

export const IconReport = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <path d="M4 4v16h16" />
    <path d="M8 16v-4M12 16v-7M16 16v-3" />
  </svg>
);

export const IconAudit = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <rect x="5" y="3.5" width="14" height="17" rx="2" />
    <path d="M9 3.5V6h6V3.5" />
    <path d="M8.5 11l1.6 1.6 3-3.2M8.5 16h7" />
  </svg>
);

export const IconSettings = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3" />
  </svg>
);

export const IconRegister = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <rect x="3.5" y="9" width="17" height="9" rx="2" />
    <rect x="6.5" y="11.5" width="6" height="3" rx="0.8" />
    <path d="M7 9V6.5h7V9" />
  </svg>
);

export const IconChevron = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export const IconSearch = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </svg>
);

export const IconTeam = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <path d="M16 5.5a3 3 0 0 1 0 5.8M17 14.6c2.3.5 4 2.3 4 4.9" />
  </svg>
);

export const IconAffiliate = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <path d="M3 12V5.5A1.5 1.5 0 0 1 4.5 4H11l9 9-7 7-9-9Z" />
    <circle cx="7.5" cy="8.5" r="1.4" />
  </svg>
);

export const IconCopy = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <rect x="9" y="9" width="11" height="11" rx="2.2" />
    <path d="M5 15H4a1.8 1.8 0 0 1-1.8-1.8V4.2A1.8 1.8 0 0 1 4 2.4h9a1.8 1.8 0 0 1 1.8 1.8V5" />
  </svg>
);

export const IconPlus = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconLogout = (p: P) => (
  <svg viewBox="0 0 24 24" {...S} {...p}>
    <path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" />
    <path d="M10 8l-4 4 4 4M6 12h10" />
  </svg>
);
