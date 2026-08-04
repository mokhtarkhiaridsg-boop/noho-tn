import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Form 5472 penalty",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/conformite/form-5472-penalite",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/conformite/form-5472-penalite" title="Form 5472 penalty" />;
}
