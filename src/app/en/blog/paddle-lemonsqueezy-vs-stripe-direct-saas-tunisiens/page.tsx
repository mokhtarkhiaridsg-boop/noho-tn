import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Paddle Lemon Squeezy vs Stripe Direct SaaS Tunisians",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/paddle-lemonsqueezy-vs-stripe-direct-saas-tunisiens",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/paddle-lemonsqueezy-vs-stripe-direct-saas-tunisiens" title="Paddle Lemon Squeezy vs Stripe Direct SaaS Tunisians" />;
}
