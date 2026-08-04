import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "LLC US for developer Tunisian Stack complete",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/llc-us-pour-developpeur-tunisien-stack-complet",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/llc-us-pour-developpeur-tunisien-stack-complet" title="LLC US for developer Tunisian Stack complete" />;
}
