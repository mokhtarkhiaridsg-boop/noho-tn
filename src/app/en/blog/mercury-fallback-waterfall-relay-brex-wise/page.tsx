import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Mercury Fallback Waterfall Relay Brex Wise",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/mercury-fallback-waterfall-relay-brex-wise",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/mercury-fallback-waterfall-relay-brex-wise" title="Mercury Fallback Waterfall Relay Brex Wise" />;
}
