import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Stripe Connect Platform Tunisians",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/stripe-connect-platform-tunisiens",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/stripe-connect-platform-tunisiens" title="Stripe Connect Platform Tunisians" />;
}
