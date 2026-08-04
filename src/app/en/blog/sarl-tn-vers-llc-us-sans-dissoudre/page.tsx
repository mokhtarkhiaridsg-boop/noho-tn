import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "SARL TN to LLC US without dissolving",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/sarl-tn-vers-llc-us-sans-dissoudre",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/sarl-tn-vers-llc-us-sans-dissoudre" title="SARL TN to LLC US without dissolving" />;
}
