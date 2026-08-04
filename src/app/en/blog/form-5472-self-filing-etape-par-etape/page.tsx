import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Form 5472 Self Filing step by step",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/form-5472-self-filing-etape-par-etape",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/form-5472-self-filing-etape-par-etape" title="Form 5472 Self Filing step by step" />;
}
