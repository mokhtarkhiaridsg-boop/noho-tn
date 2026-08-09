import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";
import TrackRouter from "@/components/landing/TrackRouter";

export const metadata: Metadata = {
  title: "Track",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/track",
  },
};

/**
 * The homepage track form submits here as `?n=<number>`. A number renders the
 * shared carrier-detection router; with no number the stub still points
 * readers at the French page.
 */
export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ n?: string }>;
}) {
  const sp = (await searchParams) ?? {};
  if ((sp.n ?? "").trim()) {
    return <TrackRouter locale="en" searchParams={searchParams} />;
  }
  return <EnglishStub frHref="/fr/track" title="Track" />;
}
