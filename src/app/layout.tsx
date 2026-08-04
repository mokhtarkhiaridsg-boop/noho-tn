import type { Metadata } from "next";
import { Baloo_2, Pacifico, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin", "latin-ext"],
  variable: "--font-baloo",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/*
 * Tounsi (derja, Latin script) is the DEFAULT locale — it is what the bare
 * path serves. French moved to /fr, Arabic stays at /ar, English at /en.
 * Derja in Latin script is LTR and uses the same fonts as French, so no dir
 * or font override is needed here.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://nohomailboxtunis.com"),
  title: {
    default: "NOHO Mailbox Tounes — L'adresse mte3ek fi America",
    template: "%s | NOHO Mailbox Tounes",
  },
  description:
    "El version Tounsi mta3 NOHO Mailbox. Adresse 7a9i9ia fi America, colis w courrier, LLC américaine, mrafqa Mercury w Stripe, bweba lel étudiants. Tkhalles b dinar fi Tounes.",
  alternates: {
    canonical: "https://nohomailboxtunis.com",
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
    title: "NOHO Mailbox Tounes",
    description:
      "L'adresse mte3ek fi America, win ma kont. Colis, courrier, LLC, étudiants — w tkhalles b dinar.",
    url: "https://nohomailboxtunis.com",
    locale: "aeb_TN",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="aeb-Latn-TN" className={`${baloo.variable} ${pacifico.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen">
        <noscript>
          <style>{`.reveal,.reveal-zoom{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
