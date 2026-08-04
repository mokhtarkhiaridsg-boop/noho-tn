import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "EIN status",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/outils/lookups/ein-status",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/outils/lookups/ein-status" title="EIN status" />;
}
