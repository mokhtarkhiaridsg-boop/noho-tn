import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Carte Technologique Business vs personal",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/carte-technologique-business-vs-perso",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/carte-technologique-business-vs-perso" title="Carte Technologique Business vs personal" />;
}
