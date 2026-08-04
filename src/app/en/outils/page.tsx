import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Tools",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/outils",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/outils" title="Tools" />;
}
