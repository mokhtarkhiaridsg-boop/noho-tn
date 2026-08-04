import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Retainer",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/retainer",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/retainer" title="Retainer" />;
}
