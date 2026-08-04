import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "US banks",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/outils/comparateurs/banques-us",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/outils/comparateurs/banques-us" title="US banks" />;
}
