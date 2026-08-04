import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Stripe Approval 9 Item Stack Detail",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/stripe-approval-9-item-stack-detail",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/stripe-approval-9-item-stack-detail" title="Stripe Approval 9 Item Stack Detail" />;
}
