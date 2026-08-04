import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Diaspora TN Canada France LLC US Strategy",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/diaspora-tn-canada-france-llc-us-strategy",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/diaspora-tn-canada-france-llc-us-strategy" title="Diaspora TN Canada France LLC US Strategy" />;
}
