/*
 * Default-locale fallback. This route has no derja copy yet, so it serves the
 * French page verbatim rather than a "mazelet fel tarjma" dead end. The two
 * URLs carry identical French text, so canonical points at the /fr twin —
 * two self-canonical copies of one page compete with each other in search.
 * When derja lands for this page, replace the whole file with the real page.
 */
import type { Metadata } from "next";
import FrPage, { metadata as frMetadata } from "@/app/fr/outils/lookups/ein-status/page";

export const metadata: Metadata = {
  ...frMetadata,
  alternates: { canonical: "https://nohomailboxtunis.com/fr/outils/lookups/ein-status" },
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
