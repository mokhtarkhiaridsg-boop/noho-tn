import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "About NOHO",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/a-propos",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/a-propos" title="About NOHO" />;
}
