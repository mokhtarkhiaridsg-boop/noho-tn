import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Apostille Tunisian procedure complete MAE",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/apostille-tunisienne-procedure-complete-mae",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/apostille-tunisienne-procedure-complete-mae" title="Apostille Tunisian procedure complete MAE" />;
}
