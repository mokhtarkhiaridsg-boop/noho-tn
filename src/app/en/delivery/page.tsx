import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Delivery",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/delivery",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/delivery" title="Delivery" />;
}
