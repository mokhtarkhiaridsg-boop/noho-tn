/*
 * Default-locale fallback: no derja copy yet, so the bare path serves the
 * French page with its canonical on /fr (same rule as the other fallbacks).
 * It exists so the language switcher never lands on a 404.
 */
import type { Metadata } from "next";
import FrPage, { metadata as frMetadata } from "@/app/fr/reexpedition-colis-usa-tunisie/page";

export const metadata: Metadata = {
  ...frMetadata,
  alternates: { canonical: "https://nohomailboxtunis.com/fr/reexpedition-colis-usa-tunisie" },
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
