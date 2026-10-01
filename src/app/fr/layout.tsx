import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";

/*
 * French locale layout.
 *
 * French used to be the default and lived at the root. It now lives under
 * /fr, because Tounsi (derja) is the default locale. Next.js 16 allows only
 * one <html>/<body> pair — defined in the root layout — so, like /ar and /en,
 * this subtree is tagged with a <div lang="fr"> wrapper rather than its own
 * document. French is LTR and shares the root fonts, so nothing else changes.
 */

export const metadata: Metadata = {
  metadataBase: new URL("https://nohomailboxtunis.com"),
  title: {
    default: "NOHO Mailbox Tunisie — Adresse postale réelle aux États-Unis",
    template: "%s | NOHO Mailbox Tunisie",
  },
  description:
    "L'édition Tunisie de NOHO Mailbox : une adresse postale réelle à North Hollywood (Californie), scan du courrier, réception et réexpédition de colis vers la Tunisie. Tarifs en dinars.",
  alternates: localeAlternates("/", "fr"),
  openGraph: {
    images: ["https://nohomailboxtunis.com/opengraph-image"],
    title: "NOHO Mailbox Tunisie",
    description:
      "Adresse postale réelle aux États-Unis, scan du courrier, colis réexpédiés vers la Tunisie. Tarifs en dinars.",
    url: "https://nohomailboxtunis.com/fr",
    locale: "fr_TN",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
  robots: { index: true, follow: true },
};

export default function FrenchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="fr" className="flex flex-col min-h-screen">
      {children}
    </div>
  );
}
