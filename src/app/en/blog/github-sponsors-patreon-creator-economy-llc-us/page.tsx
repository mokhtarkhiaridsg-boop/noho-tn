import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "GitHub Sponsors Patreon Creator Economy LLC US",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/github-sponsors-patreon-creator-economy-llc-us",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/github-sponsors-patreon-creator-economy-llc-us" title="GitHub Sponsors Patreon Creator Economy LLC US" />;
}
