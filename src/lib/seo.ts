/*
 * Canonical + hreflang for the locale trees. One answer, so every page that
 * has a real derja page AND a real French page declares the same pair.
 *
 * Why it looks like this (2026-09-30 SEO audit):
 *
 * - Derja (Tounsi, Latin script) has no ISO 639-1 code. Google only honours
 *   ISO 639-1 language codes in hreflang, so the old "aeb-TN" entry was
 *   silently ignored on every page. The bare derja URL is declared as
 *   `x-default` instead: the version for everyone the other entries do not
 *   match.
 * - French is declared as plain "fr", not "fr-TN": Tunisians in France and
 *   Canada search in French too, and "fr-TN" would hand them x-default.
 * - /ar and /en are noindex until they are reviewed. Google drops alternates
 *   that are noindex, so listing them only adds noise. An Arabic page that IS
 *   indexable opts in with `{ ar: true }`.
 * - The cross-domain "en-US → nohomailbox.org" entry had no return tag on the
 *   US site, which makes it invalid. It is gone; the US site is a different
 *   business proposition (Los Angeles walk-ins), not a translation.
 *
 * Pure and client-safe.
 */
import type { Metadata } from "next";

export const SITE = "https://nohomailboxtunis.com";

type Self = "tn" | "fr" | "ar";

function url(prefix: "" | "/fr" | "/ar", route: string): string {
  if (route === "/") return prefix ? `${SITE}${prefix}` : SITE;
  return `${SITE}${prefix}${route}`;
}

/**
 * Alternates for a route that exists as real derja at the bare path and as
 * real French at /fr (optionally also as reviewed, indexable Arabic at /ar).
 */
export function localeAlternates(
  route: string,
  self: Self,
  opts: { ar?: boolean } = {},
): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {
    fr: url("/fr", route),
    "x-default": url("", route),
  };
  if (opts.ar) languages.ar = url("/ar", route);
  const canonical = self === "tn" ? url("", route) : self === "fr" ? url("/fr", route) : url("/ar", route);
  return { canonical, languages };
}

/** Alternates for a page that exists in one locale only. */
export function singleAlternates(path: string): NonNullable<Metadata["alternates"]> {
  return { canonical: path === "/" ? SITE : `${SITE}${path}` };
}
