import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Suivi Mensuel",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/suivi-mensuel",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/suivi-mensuel" title="Suivi Mensuel" />;
}
