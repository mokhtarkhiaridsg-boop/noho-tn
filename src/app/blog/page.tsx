/* Default-locale fallback — the blog has no derja edition; serve the French one. */
import type { Metadata } from "next";
import FrPage, { metadata as frMetadata } from "@/app/fr/blog/page";

export const metadata: Metadata = {
  ...frMetadata,
  alternates: { canonical: "https://nohomailboxtunis.com/blog" },
};

/*
 * The content is the French page, so it is marked lang="fr" even though this
 * URL sits in the derja tree (whose <html lang> is aeb-Latn-TN).
 */
// Pass Next's page props (params / searchParams) straight through.
const Fr = FrPage as unknown as React.ComponentType<Record<string, unknown>>;

export default function Page(props: Record<string, unknown>) {
  return (
    <div lang="fr">
      <Fr {...props} />
    </div>
  );
}
