import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Stripe Atlas vs NOHO Deep Dive",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/stripe-atlas-vs-noho-deep-dive",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/stripe-atlas-vs-noho-deep-dive" title="Stripe Atlas vs NOHO Deep Dive" />;
}
