import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Cross-border",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/outils/comparateurs/cross-border",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/outils/comparateurs/cross-border" title="Cross-border" />;
}
