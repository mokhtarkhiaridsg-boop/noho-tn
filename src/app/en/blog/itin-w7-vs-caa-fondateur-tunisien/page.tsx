import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "ITIN W-7 vs CAA founder Tunisian",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/itin-w7-vs-caa-fondateur-tunisien",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/itin-w7-vs-caa-fondateur-tunisien" title="ITIN W-7 vs CAA founder Tunisian" />;
}
