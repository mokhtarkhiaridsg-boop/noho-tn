import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Switching NOHO Wyoming to Stripe Atlas Case reverse",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/passer-noho-wyoming-vers-stripe-atlas-cas-inverse",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/passer-noho-wyoming-vers-stripe-atlas-cas-inverse" title="Switching NOHO Wyoming to Stripe Atlas Case reverse" />;
}
