import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "TN Expat return taxation Audit DGI",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/tn-expat-retour-fiscalite-audit-dgi",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/tn-expat-retour-fiscalite-audit-dgi" title="TN Expat return taxation Audit DGI" />;
}
