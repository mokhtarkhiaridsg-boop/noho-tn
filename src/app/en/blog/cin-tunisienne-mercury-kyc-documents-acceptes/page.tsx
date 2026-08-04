import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "CIN Tunisian Mercury KYC Documents accepted",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/cin-tunisienne-mercury-kyc-documents-acceptes",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/cin-tunisienne-mercury-kyc-documents-acceptes" title="CIN Tunisian Mercury KYC Documents accepted" />;
}
