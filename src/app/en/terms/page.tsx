import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Terms",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/terms",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/terms" title="Terms" />;
}
