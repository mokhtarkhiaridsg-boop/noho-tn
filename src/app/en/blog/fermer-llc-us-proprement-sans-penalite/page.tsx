import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Closing LLC US cleanly without penalty",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/fermer-llc-us-proprement-sans-penalite",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/fermer-llc-us-proprement-sans-penalite" title="Closing LLC US cleanly without penalty" />;
}
