import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "First employee US Contractor 1099 vs W-2",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/premier-salarie-us-contractor-1099-vs-w2",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/premier-salarie-us-contractor-1099-vs-w2" title="First employee US Contractor 1099 vs W-2" />;
}
