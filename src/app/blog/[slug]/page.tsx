/*
 * Default-locale fallback for articles. The French article route already
 * canonicalises to the ROOT /blog/<slug> URL, so a straight re-export is
 * correct here — no metadata override needed.
 */
export { default, generateStaticParams, generateMetadata } from "@/app/fr/blog/[slug]/page";
