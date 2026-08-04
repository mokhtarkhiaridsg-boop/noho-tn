/*
 * Locale routing for the four language trees.
 *
 * Tounsi (derja, Latin script) is the DEFAULT — it is served at the bare path
 * and carries no prefix. French, Arabic and English are prefixed. Before the
 * 2026-08 flip this was the other way round (French at the root, derja at
 * /tn), and seven components each re-implemented the prefix test by hand;
 * that duplication is what this module replaces.
 *
 * Pure and client-safe — no server imports.
 */

export type Locale = "tn" | "fr" | "ar" | "en";

/** The locale served at the bare path. */
export const DEFAULT_LOCALE: Locale = "tn";

/** Locales that carry a path prefix, i.e. everything except the default. */
export const PREFIXED_LOCALES = ["fr", "ar", "en"] as const;

const PREFIX_RE = /^\/(fr|ar|en)(?=\/|$)/;

/** Which locale a pathname belongs to. Unprefixed paths are the default. */
export function localeFromPath(path: string): Locale {
  const m = PREFIX_RE.exec(path);
  return m ? (m[1] as Locale) : DEFAULT_LOCALE;
}

/** The path prefix for a locale — "" for the default, "/xx" otherwise. */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

/** Drop any locale prefix, yielding the shared route ("/tarifs", "/"). */
export function stripLocale(path: string): string {
  return path.replace(PREFIX_RE, "") || "/";
}

/**
 * The same route in another locale. `path` may be either a bare route or an
 * already-prefixed pathname — it is normalised either way.
 */
export function localizePath(path: string, locale: Locale): string {
  const bare = stripLocale(path);
  const prefix = localePrefix(locale);
  if (!prefix) return bare;
  return bare === "/" ? prefix : prefix + bare;
}

/** Text direction. Only Arabic is RTL; derja here is Latin script. */
export function isRtl(locale: Locale): boolean {
  return locale === "ar";
}
