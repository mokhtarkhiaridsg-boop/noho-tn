import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "NOHO Cabinet Khiari integration honest",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/noho-cabinet-khiari-integration-honnete",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/noho-cabinet-khiari-integration-honnete" title="NOHO Cabinet Khiari integration honest" />;
}
