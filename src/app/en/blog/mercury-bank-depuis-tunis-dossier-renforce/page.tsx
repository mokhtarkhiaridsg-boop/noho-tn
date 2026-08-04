import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Mercury Bank from Tunis file reinforced",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/mercury-bank-depuis-tunis-dossier-renforce",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/mercury-bank-depuis-tunis-dossier-renforce" title="Mercury Bank from Tunis file reinforced" />;
}
