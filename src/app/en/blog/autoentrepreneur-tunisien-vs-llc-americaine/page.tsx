import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Autoentrepreneur Tunisian vs LLC American",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/autoentrepreneur-tunisien-vs-llc-americaine",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/autoentrepreneur-tunisien-vs-llc-americaine" title="Autoentrepreneur Tunisian vs LLC American" />;
}
