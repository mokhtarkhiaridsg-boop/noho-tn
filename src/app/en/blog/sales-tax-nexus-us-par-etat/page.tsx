import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Sales Tax Nexus US by state",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/sales-tax-nexus-us-par-etat",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/sales-tax-nexus-us-par-etat" title="Sales Tax Nexus US by state" />;
}
