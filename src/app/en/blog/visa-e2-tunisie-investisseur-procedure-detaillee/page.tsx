import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Visa E-2 Tunisia investor procedure detailed",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/visa-e2-tunisie-investisseur-procedure-detaillee",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/visa-e2-tunisie-investisseur-procedure-detaillee" title="Visa E-2 Tunisia investor procedure detailed" />;
}
