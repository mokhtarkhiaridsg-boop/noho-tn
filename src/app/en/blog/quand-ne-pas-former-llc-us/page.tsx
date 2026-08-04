import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "When not forming LLC US",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/quand-ne-pas-former-llc-us",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/quand-ne-pas-former-llc-us" title="When not forming LLC US" />;
}
