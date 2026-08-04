import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Agent",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/agent",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/agent" title="Agent" />;
}
