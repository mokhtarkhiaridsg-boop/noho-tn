/* Default-locale fallback — see ../../[slug]/page.tsx for the rationale. */
import FrPage from "@/app/fr/blog/categorie/[category]/page";
export { generateStaticParams, generateMetadata } from "@/app/fr/blog/categorie/[category]/page";

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
