import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Mercury KYC file reinforced 9 elements",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/mercury-kyc-dossier-renforce-9-elements",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/mercury-kyc-dossier-renforce-9-elements" title="Mercury KYC file reinforced 9 elements" />;
}
