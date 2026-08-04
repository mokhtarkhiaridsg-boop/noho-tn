import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Testimonials",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/temoignages",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/temoignages" title="Testimonials" />;
}
