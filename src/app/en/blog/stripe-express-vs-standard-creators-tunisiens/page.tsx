import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Stripe Express vs Standard Creators Tunisians",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/stripe-express-vs-standard-creators-tunisiens",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/stripe-express-vs-standard-creators-tunisiens" title="Stripe Express vs Standard Creators Tunisians" />;
}
