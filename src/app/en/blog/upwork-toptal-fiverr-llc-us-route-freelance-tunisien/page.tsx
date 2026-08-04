import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Upwork Toptal Fiverr LLC US Route Freelance Tunisian",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/upwork-toptal-fiverr-llc-us-route-freelance-tunisien",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/upwork-toptal-fiverr-llc-us-route-freelance-tunisien" title="Upwork Toptal Fiverr LLC US Route Freelance Tunisian" />;
}
