/* Default-locale fallback — the blog has no derja edition; serve the French one. */
import type { Metadata } from "next";
import FrPage, { metadata as frMetadata } from "@/app/fr/blog/page";

export const metadata: Metadata = {
  ...frMetadata,
  alternates: { canonical: "https://nohomailboxtunis.com/blog" },
};

export default FrPage;
