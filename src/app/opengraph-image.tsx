import { ImageResponse } from "next/og";

/**
 * Site-wide OpenGraph image — the WhatsApp/social link preview card.
 * Lives at the app root so every route (fr, /ar, /tn, /en) inherits it.
 * Brand: cream #F7E6C2 / ink #2D100F / teal #337485 / gold #C8A35A.
 */
export const alt = "NOHO Mailbox Tunisia — L'adresse mte3ek fi America, win ma kont.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function balooBold(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:woff2|truetype|opentype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OgImage() {
  const font = await balooBold();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#F7E6C2",
          fontFamily: font ? "Baloo" : "sans-serif",
          position: "relative",
        }}
      >
        {/* top + bottom brand rails */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 14, background: "#2D100F", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 14, background: "#2D100F", display: "flex" }} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            background: "#2D100F",
            color: "#F7E6C2",
            padding: "10px 28px",
            borderRadius: 999,
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: 3,
            marginBottom: 36,
          }}
        >
          NOHO MAILBOX · TUNISIA
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 800,
            color: "#2D100F",
            letterSpacing: -2,
            textAlign: "center",
          }}
        >
          L&apos;adresse mte3ek fi America,
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 800,
            color: "#337485",
            letterSpacing: -2,
            marginBottom: 42,
          }}
        >
          win ma kont.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 30,
            color: "#5C4540",
          }}
        >
          <div style={{ display: "flex", width: 12, height: 12, borderRadius: 999, background: "#2D7A4A" }} />
          5062 Lankershim Blvd, Los Angeles · Tkhalles b dinar
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font
        ? [{ name: "Baloo", data: font, style: "normal" as const, weight: 800 as const }]
        : undefined,
    }
  );
}
