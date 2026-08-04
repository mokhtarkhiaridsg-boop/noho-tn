import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Students",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/etudiants",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/etudiants" title="Students" />;
}
