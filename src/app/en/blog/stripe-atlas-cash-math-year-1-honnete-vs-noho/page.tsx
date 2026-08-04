import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Stripe Atlas Cash Math Year 1 honest vs NOHO",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/stripe-atlas-cash-math-year-1-honnete-vs-noho",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/stripe-atlas-cash-math-year-1-honnete-vs-noho" title="Stripe Atlas Cash Math Year 1 honest vs NOHO" />;
}
