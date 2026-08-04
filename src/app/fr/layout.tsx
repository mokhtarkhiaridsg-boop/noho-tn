import type { Metadata } from "next";

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
    default: "NOHO Mailbox Tunisie — LLC américaine, banque US, université US",
    template: "%s | NOHO Mailbox Tunisie",
  },
  description:
    "L'édition Tunisie de NOHO Mailbox. LLC américaine, adresse réelle aux USA, accompagnement Mercury et Stripe, portail étudiants pour universités US. Tarif en dinars.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/fr",
    languages: {
      "aeb-TN": "https://nohomailboxtunis.com",
      "fr-TN": "https://nohomailboxtunis.com/fr",
      "ar-TN": "https://nohomailboxtunis.com/ar",
      en: "https://nohomailboxtunis.com/en",
      "x-default": "https://nohomailboxtunis.com",
    },
  },
  openGraph: {
    images: ["https://nohomailboxtunis.com/opengraph-image"],
    title: "NOHO Mailbox Tunisie",
    description:
      "LLC américaine, banque US, université US. Tarif en dinars pour la Tunisie.",
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
