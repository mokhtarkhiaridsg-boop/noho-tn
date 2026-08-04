/*
 * Default-locale fallback. This route has no derja copy yet, so it serves the
 * French page verbatim rather than a "mazelet fel tarjma" dead end. Canonical
 * stays on the root URL — this IS the default site, not a translation of it.
 * When derja lands for this page, replace the whole file with the real page.
 */
import type { Metadata } from "next";
import FrPage, { metadata as frMetadata } from "@/app/fr/outils/calculateurs/stripe-fees/page";

export const metadata: Metadata = {
  ...frMetadata,
  alternates: { canonical: "https://nohomailboxtunis.com/outils/calculateurs/stripe-fees" },
};

export default FrPage;
