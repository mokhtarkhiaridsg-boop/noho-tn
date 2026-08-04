import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "NOHO says no Discovery Call",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/noho-te-dit-non-discovery-call",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/noho-te-dit-non-discovery-call" title="NOHO says no Discovery Call" />;
}
