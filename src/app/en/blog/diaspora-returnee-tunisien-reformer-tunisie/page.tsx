import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Diaspora Returnee Tunisian Reformer Tunisia",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/diaspora-returnee-tunisien-reformer-tunisie",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/diaspora-returnee-tunisien-reformer-tunisie" title="Diaspora Returnee Tunisian Reformer Tunisia" />;
}
