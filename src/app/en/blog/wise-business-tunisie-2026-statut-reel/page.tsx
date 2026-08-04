import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Wise Business Tunisia 2026 status real",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/wise-business-tunisie-2026-statut-reel",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/wise-business-tunisie-2026-statut-reel" title="Wise Business Tunisia 2026 status real" />;
}
