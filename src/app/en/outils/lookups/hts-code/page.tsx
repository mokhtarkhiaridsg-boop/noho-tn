import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "HTS code",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/outils/lookups/hts-code",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/outils/lookups/hts-code" title="HTS code" />;
}
