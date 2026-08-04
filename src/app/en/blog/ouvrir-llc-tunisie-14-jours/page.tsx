import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Opening LLC Tunisia 14 days",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/ouvrir-llc-tunisie-14-jours",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/ouvrir-llc-tunisie-14-jours" title="Opening LLC Tunisia 14 days" />;
}
