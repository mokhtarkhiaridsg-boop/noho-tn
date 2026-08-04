import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Mercury Post Acquisition Stack 2026 Tunisian",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/mercury-post-acquisition-stack-2026-tunisien",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/mercury-post-acquisition-stack-2026-tunisien" title="Mercury Post Acquisition Stack 2026 Tunisian" />;
}
