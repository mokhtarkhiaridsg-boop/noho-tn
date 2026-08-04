import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Stripe fees",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/outils/calculateurs/stripe-fees",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/outils/calculateurs/stripe-fees" title="Stripe fees" />;
}
