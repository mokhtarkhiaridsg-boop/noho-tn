import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "BCT Tunisia 2026 updated",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/bct-tunisie-2026-actualise",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/bct-tunisie-2026-actualise" title="BCT Tunisia 2026 updated" />;
}
