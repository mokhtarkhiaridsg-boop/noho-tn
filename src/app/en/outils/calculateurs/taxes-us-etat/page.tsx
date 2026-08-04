import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "US taxes by state",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/outils/calculateurs/taxes-us-etat",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/outils/calculateurs/taxes-us-etat" title="US taxes by state" />;
}
