import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Bundle vs DIY",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/outils/calculateurs/bundle-vs-diy",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/outils/calculateurs/bundle-vs-diy" title="Bundle vs DIY" />;
}
