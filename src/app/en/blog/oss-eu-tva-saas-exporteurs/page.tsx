import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "OSS EU VAT SaaS exporters",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/oss-eu-tva-saas-exporteurs",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/oss-eu-tva-saas-exporteurs" title="OSS EU VAT SaaS exporters" />;
}
