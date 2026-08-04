import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Tunisian American Operator Moat",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/tunisian-american-operator-moat",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/tunisian-american-operator-moat" title="Tunisian American Operator Moat" />;
}
