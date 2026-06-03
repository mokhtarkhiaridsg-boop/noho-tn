import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Cloudflare R2 + Workers + Pages — مكدس المبدع المضاد لـ AWS للمؤسس التونسي (2026)",
  description: "AWS Lambda + S3 + CloudFront + DynamoDB ~157 USD/شهر مقابل Cloudflare Workers + R2 + D1 + KV ~25 USD/شهر لـ SaaS 100K مستخدم. توفير 1 560 USD/سنة. R2 = 0 USD egress. Cloudflare for Startups 5K USD رصيد على سنتين.",
  alternates: { canonical: "https://noho.tn/ar/blog/cloudflare-r2-workers-pages-creator-tunisien" },
};

export default function ArCloudflarePage() {
  return (
    <ArabicStub
      frHref="/blog/cloudflare-r2-workers-pages-creator-tunisien"
      frTitleAr="Cloudflare R2 + Workers + Pages — مكدس المبدع"
    />
  );
}
