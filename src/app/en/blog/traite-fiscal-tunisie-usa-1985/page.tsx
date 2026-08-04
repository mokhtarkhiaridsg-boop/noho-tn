import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Treaty tax Tunisia USA 1985",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/traite-fiscal-tunisie-usa-1985",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/traite-fiscal-tunisie-usa-1985" title="Treaty tax Tunisia USA 1985" />;
}
