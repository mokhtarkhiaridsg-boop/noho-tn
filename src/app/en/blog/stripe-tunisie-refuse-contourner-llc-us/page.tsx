import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Stripe Tunisia refused bypassing LLC US",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/stripe-tunisie-refuse-contourner-llc-us",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/stripe-tunisie-refuse-contourner-llc-us" title="Stripe Tunisia refused bypassing LLC US" />;
}
