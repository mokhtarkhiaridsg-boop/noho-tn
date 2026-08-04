import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Security",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/security",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/security" title="Security" />;
}
