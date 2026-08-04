import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Amazon Seller Central Setup TN file",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/amazon-seller-central-setup-tn-dossier",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/amazon-seller-central-setup-tn-dossier" title="Amazon Seller Central Setup TN file" />;
}
