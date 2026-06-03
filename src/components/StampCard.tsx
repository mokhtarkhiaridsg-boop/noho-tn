/**
 * Postage-stamp plan card mirroring nohomailbox.org/#plans.
 * Perforated top + bottom edges + side perfs cut into the cream BG.
 * popular=true flips background to ink + cream perfs.
 */
import type { ReactNode } from "react";

const PUNCH = "#F7E6C2"; // cream — must match section BG

export default function StampCard({
  children,
  popular = false,
}: {
  children: ReactNode;
  popular?: boolean;
}) {
  const bg = popular ? "#2D100F" : "#ffffff";
  return (
    <div
      className="relative transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-[-0.5deg]"
      style={{ filter: "drop-shadow(0 8px 24px rgba(45,16,15,0.15))" }}
    >
      <PostedStamp light={popular} />
      <svg
        viewBox="0 0 320 10"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "10px" }}
        aria-hidden="true"
      >
        <rect width="320" height="10" fill={bg} />
        {Array.from({ length: 20 }, (_, i) => (
          <circle key={i} cx={8 + i * 15.8} cy={5} r={5} fill={PUNCH} />
        ))}
      </svg>
      <div
        style={{
          background: bg,
          paddingLeft: 28,
          paddingRight: 28,
          paddingTop: 4,
          paddingBottom: 4,
        }}
      >
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[-28px] top-0 bottom-0 flex flex-col justify-around"
            style={{ width: 14 }}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{ background: PUNCH, marginLeft: -6 }}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="absolute right-[-28px] top-0 bottom-0 flex flex-col justify-around"
            style={{ width: 14 }}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{ background: PUNCH, marginRight: -6 }}
              />
            ))}
          </div>
          <div className="py-7">{children}</div>
        </div>
      </div>
      <svg
        viewBox="0 0 320 10"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "10px" }}
        aria-hidden="true"
      >
        <rect width="320" height="10" fill={bg} />
        {Array.from({ length: 20 }, (_, i) => (
          <circle key={i} cx={8 + i * 15.8} cy={5} r={5} fill={PUNCH} />
        ))}
      </svg>
    </div>
  );
}

function PostedStamp({ light = false }: { light?: boolean }) {
  const stroke = light ? "rgba(247,230,194,0.18)" : "rgba(45,16,15,0.10)";
  return (
    <div
      aria-hidden="true"
      className="absolute top-3 right-3 z-10 rotate-[12deg] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    >
      <svg viewBox="0 0 80 36" className="w-16 h-7" fill="none">
        <rect x="1" y="1" width="78" height="34" rx="3" stroke={stroke} strokeWidth="1.5" strokeDasharray="2 2" />
        <text
          x="40"
          y="24"
          textAnchor="middle"
          fontSize="14"
          fontWeight="900"
          letterSpacing="2"
          fill={stroke}
          style={{ fontFamily: "var(--font-baloo), sans-serif" }}
        >
          POSTED
        </text>
      </svg>
    </div>
  );
}
