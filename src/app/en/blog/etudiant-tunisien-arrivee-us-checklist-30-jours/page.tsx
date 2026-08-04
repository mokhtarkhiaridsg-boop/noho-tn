import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Student Tunisian arrival US Checklist 30 days",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/etudiant-tunisien-arrivee-us-checklist-30-jours",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/etudiant-tunisien-arrivee-us-checklist-30-jours" title="Student Tunisian arrival US Checklist 30 days" />;
}
