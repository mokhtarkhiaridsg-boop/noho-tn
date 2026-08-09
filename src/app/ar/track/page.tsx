import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";
import TrackRouter from "@/components/landing/TrackRouter";

export const metadata: Metadata = {
  title: "تتبع بريدك",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/track" },
  robots: { index: false, follow: true },
};

/**
 * The homepage track form submits here as `?n=<number>`. Without the router
 * the Arabic form would dead-end on the stub, so a number renders the shared
 * carrier-detection router; with no number the stub still points readers at
 * the French page. (The Arabic router copy is still awaiting a native fus7a
 * reviewer — see TRACK_PAGE_COPY.ar.)
 */
export default async function ArTrackPage({
  searchParams,
}: {
  searchParams?: Promise<{ n?: string }>;
}) {
  const sp = (await searchParams) ?? {};
  if ((sp.n ?? "").trim()) {
    return <TrackRouter locale="ar" searchParams={searchParams} />;
  }
  return <ArabicStub frHref="/fr/track" frTitleAr="تتبع البريد" />;
}
