import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Mercury Treasury vs Checking",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/mercury-treasury-vs-checking",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/mercury-treasury-vs-checking" title="Mercury Treasury vs Checking" />;
}
