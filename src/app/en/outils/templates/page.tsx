import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Templates",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/outils/templates",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/outils/templates" title="Templates" />;
}
