import { redirect, permanentRedirect } from "next/navigation";

/**
 * Legacy slug. The product is "Suivi mensuel" and lives at /suivi-mensuel.
 * This route exists only for backwards compatibility with older internal/external links.
 */
export default function RetainerLegacyRedirect() {
  permanentRedirect("/suivi-mensuel");
  redirect("/suivi-mensuel"); // unreachable, kept to silence TS
}
