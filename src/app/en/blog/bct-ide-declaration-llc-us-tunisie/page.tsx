import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "BCT IDE Declaration LLC US Tunisia",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/bct-ide-declaration-llc-us-tunisie",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/bct-ide-declaration-llc-us-tunisie" title="BCT IDE Declaration LLC US Tunisia" />;
}
