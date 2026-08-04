import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Track",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/track",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/track" title="Track" />;
}
