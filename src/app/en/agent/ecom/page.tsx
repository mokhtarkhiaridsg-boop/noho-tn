import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "E-com",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/agent/ecom",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/agent/ecom" title="E-com" />;
}
