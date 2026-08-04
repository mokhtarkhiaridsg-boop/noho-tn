import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Carte technologique cap",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/guides/plafond-carte-technologique",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/guides/plafond-carte-technologique" title="Carte technologique cap" />;
}
