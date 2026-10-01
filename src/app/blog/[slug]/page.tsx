/*
 * Default-locale fallback for articles. The French article route already
 * canonicalises to the ROOT /blog/<slug> URL, so a straight re-export is
 * correct here — no metadata override needed.
 */
import FrPage from "@/app/fr/blog/[slug]/page";
export { generateStaticParams, generateMetadata } from "@/app/fr/blog/[slug]/page";

// French content in the derja tree: marked lang="fr".
// Pass Next's page props (params / searchParams) straight through.
const Fr = FrPage as unknown as React.ComponentType<Record<string, unknown>>;

export default function Page(props: Record<string, unknown>) {
  return (
    <div lang="fr">
      <Fr {...props} />
    </div>
  );
}
