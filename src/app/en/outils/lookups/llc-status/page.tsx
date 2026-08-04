import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "LLC status",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/outils/lookups/llc-status",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/outils/lookups/llc-status" title="LLC status" />;
}
