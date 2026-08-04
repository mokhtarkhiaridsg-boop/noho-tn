import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "LinkedIn Ads Outbound B2B LLC US Tunisian",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/linkedin-ads-outbound-b2b-llc-us-tunisien",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/linkedin-ads-outbound-b2b-llc-us-tunisien" title="LinkedIn Ads Outbound B2B LLC US Tunisian" />;
}
