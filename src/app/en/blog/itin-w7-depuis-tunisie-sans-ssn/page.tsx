import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "ITIN W-7 from Tunisia without SSN",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/itin-w7-depuis-tunisie-sans-ssn",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/itin-w7-depuis-tunisie-sans-ssn" title="ITIN W-7 from Tunisia without SSN" />;
}
