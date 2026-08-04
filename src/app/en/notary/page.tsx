import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Notary",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/notary",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/notary" title="Notary" />;
}
