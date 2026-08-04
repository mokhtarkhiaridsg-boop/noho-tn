import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "TND to USD",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/outils/calculateurs/tnd-usd",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/outils/calculateurs/tnd-usd" title="TND to USD" />;
}
