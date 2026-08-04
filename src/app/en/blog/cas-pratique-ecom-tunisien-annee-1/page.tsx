import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Case study e-com Tunisian year 1",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/cas-pratique-ecom-tunisien-annee-1",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/cas-pratique-ecom-tunisien-annee-1" title="Case study e-com Tunisian year 1" />;
}
