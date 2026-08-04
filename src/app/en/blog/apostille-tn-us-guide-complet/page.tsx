import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Apostille TN US Guide complete",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/apostille-tn-us-guide-complet",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/apostille-tn-us-guide-complet" title="Apostille TN US Guide complete" />;
}
