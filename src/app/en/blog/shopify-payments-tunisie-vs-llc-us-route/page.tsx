import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Shopify Payments Tunisia vs LLC US Route",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/shopify-payments-tunisie-vs-llc-us-route",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/shopify-payments-tunisie-vs-llc-us-route" title="Shopify Payments Tunisia vs LLC US Route" />;
}
