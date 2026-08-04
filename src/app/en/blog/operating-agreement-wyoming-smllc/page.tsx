import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Operating Agreement Wyoming SMLLC",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/operating-agreement-wyoming-smllc",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/operating-agreement-wyoming-smllc" title="Operating Agreement Wyoming SMLLC" />;
}
