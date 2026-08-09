/*
 * Default-locale (derja) tracking route.
 *
 * The homepage track form submits here as `?n=<number>`, so this can no
 * longer be a bare re-export of the French page — it has to read
 * searchParams. With a number we render the shared carrier-detection router;
 * with none we still serve the French link-out page verbatim, because this
 * route has no derja copy yet and a "mazelet fel tarjma" dead end is worse.
 * Canonical stays on the root URL — this IS the default site, not a
 * translation of it. When derja lands, replace the fallback below.
 */
import type { Metadata } from "next";
import FrPage, { metadata as frMetadata } from "@/app/fr/track/page";
import TrackRouter from "@/components/landing/TrackRouter";

export const metadata: Metadata = {
  ...frMetadata,
  alternates: { canonical: "https://nohomailboxtunis.com/track" },
};

export default async function TnTrackPage({
  searchParams,
}: {
  searchParams?: Promise<{ n?: string }>;
}) {
  const sp = (await searchParams) ?? {};
  if ((sp.n ?? "").trim()) {
    return <TrackRouter locale="tn" searchParams={searchParams} />;
  }
  return <FrPage searchParams={searchParams} />;
}
