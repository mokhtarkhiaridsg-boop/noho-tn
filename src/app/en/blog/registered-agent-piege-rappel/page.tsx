import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Registered Agent trap reminder",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/registered-agent-piege-rappel",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/registered-agent-piege-rappel" title="Registered Agent trap reminder" />;
}
