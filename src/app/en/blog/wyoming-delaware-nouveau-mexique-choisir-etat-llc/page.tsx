import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Wyoming Delaware New Mexico Choosing state LLC",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/wyoming-delaware-nouveau-mexique-choisir-etat-llc",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/wyoming-delaware-nouveau-mexique-choisir-etat-llc" title="Wyoming Delaware New Mexico Choosing state LLC" />;
}
