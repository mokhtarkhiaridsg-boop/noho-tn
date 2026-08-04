import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Cloudflare R2 Workers Pages Creator Tunisian",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/cloudflare-r2-workers-pages-creator-tunisien",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/cloudflare-r2-workers-pages-creator-tunisien" title="Cloudflare R2 Workers Pages Creator Tunisian" />;
}
