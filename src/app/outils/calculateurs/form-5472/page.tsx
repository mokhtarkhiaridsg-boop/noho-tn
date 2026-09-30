/*
 * Default-locale fallback. This route has no derja copy yet, so it serves the
 * French page verbatim rather than a "mazelet fel tarjma" dead end. The two
 * URLs carry identical French text, so canonical points at the /fr twin —
 * two self-canonical copies of one page compete with each other in search.
 * When derja lands for this page, replace the whole file with the real page.
 */
import type { Metadata } from "next";
import FrPage, { metadata as frMetadata } from "@/app/fr/outils/calculateurs/form-5472/page";

export const metadata: Metadata = {
  ...frMetadata,
  alternates: { canonical: "https://nohomailboxtunis.com/fr/outils/calculateurs/form-5472" },
};

export default FrPage;
