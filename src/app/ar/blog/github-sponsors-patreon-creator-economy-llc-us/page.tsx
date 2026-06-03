import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "GitHub Sponsors + Patreon + BMAC + Substack — إعداد LLC US اقتصاد المبدعين (2026)",
  description: "منصة بمنصة: GitHub Sponsors 0% رسوم + Stripe 2.9%، Patreon 13-17%، BMAC 5%، Ko-fi 0%/5%، Substack 13%. مع LLC US: التوحيد، 0% backup، توفير 17-22K USD/سنة على إيرادات 30K USD/سنة مجمعة.",
  alternates: { canonical: "https://noho.tn/ar/blog/github-sponsors-patreon-creator-economy-llc-us" },
};

export default function ArGithubSponsorsPatreonPage() {
  return (
    <ArabicStub
      frHref="/blog/github-sponsors-patreon-creator-economy-llc-us"
      frTitleAr="GitHub Sponsors + Patreon — اقتصاد المبدعين LLC US"
    />
  );
}
