import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Stripe Tax vs TaxJar Avalara Comparison",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/stripe-tax-vs-taxjar-avalara-comparison",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/stripe-tax-vs-taxjar-avalara-comparison" title="Stripe Tax vs TaxJar Avalara Comparison" />;
}
