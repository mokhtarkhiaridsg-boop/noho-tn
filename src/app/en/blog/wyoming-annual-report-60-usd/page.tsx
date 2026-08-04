import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Wyoming Annual Report 60 USD",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/wyoming-annual-report-60-usd",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/wyoming-annual-report-60-usd" title="Wyoming Annual Report 60 USD" />;
}
