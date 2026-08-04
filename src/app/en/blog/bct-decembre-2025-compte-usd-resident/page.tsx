import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "BCT December 2025 account USD Resident",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/bct-decembre-2025-compte-usd-resident",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/bct-decembre-2025-compte-usd-resident" title="BCT December 2025 account USD Resident" />;
}
