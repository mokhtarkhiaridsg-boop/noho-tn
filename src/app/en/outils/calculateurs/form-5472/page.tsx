import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Form 5472",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/outils/calculateurs/form-5472",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/outils/calculateurs/form-5472" title="Form 5472" />;
}
