import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Mercury account closed Plan B",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/mercury-compte-ferme-plan-b",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/mercury-compte-ferme-plan-b" title="Mercury account closed Plan B" />;
}
