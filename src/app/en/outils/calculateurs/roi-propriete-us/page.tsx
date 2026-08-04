import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "US property ROI",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/outils/calculateurs/roi-propriete-us",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/outils/calculateurs/roi-propriete-us" title="US property ROI" />;
}
