import type { Metadata } from "next";

/*
 * English locale layout.
 *
 * Note: Next.js 16 App Router allows only one <html>/<body> pair, defined in
 * the root layout (src/app/layout.tsx). To tag the /en/* subtree with the
 * English language code without restructuring the app into route groups, this
 * layout wraps children in a <div lang="en">. English is LTR and uses the
 * exact same fonts as the French root — no font override needed.
 */

export const metadata: Metadata = {
  metadataBase: new URL("https://nohomailboxtunis.com"),
  title: {
    default: "NOHO Mailbox Tunisia — Your US address, wherever you are",
    template: "%s | NOHO Mailbox Tunisia",
  },
  description:
    "The English version of NOHO Mailbox. A real US address, packages and mail, an American LLC with Mercury and Stripe guidance, a door for students. Pay in dinars in Tunis.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/en",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr",
      "ar-TN": "https://nohomailboxtunis.com/ar",
      "aeb-TN": "https://nohomailboxtunis.com",
      en: "https://nohomailboxtunis.com/en",
    },
  },
  openGraph: {
    images: ["https://nohomailboxtunis.com/opengraph-image"],
    title: "NOHO Mailbox Tunisia",
    description:
      "Your US address, wherever you are. Packages, mail, LLC, students — and you pay in dinars.",
    url: "https://nohomailboxtunis.com/en",
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
  robots: { index: false, follow: true },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en" className="flex flex-col min-h-screen">
      {children}
    </div>
  );
}
