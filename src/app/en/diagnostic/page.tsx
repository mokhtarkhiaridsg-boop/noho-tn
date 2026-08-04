import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Diagnostic",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/diagnostic",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/diagnostic" title="Diagnostic" />;
}
