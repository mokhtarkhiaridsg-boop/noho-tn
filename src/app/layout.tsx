import type { Metadata } from "next";
import { Baloo_2, Pacifico } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://noho.tn"),
  title: {
    default: "NOHO Mailbox Tunisie — LLC américaine, banque US, université US",
    template: "%s | NOHO Mailbox Tunisie",
  },
  description:
    "L'édition Tunisie de NOHO Mailbox. LLC américaine, adresse réelle aux USA, accompagnement Mercury et Stripe, portail étudiants pour universités US. Tarif en dinars.",
  alternates: { canonical: "https://noho.tn" },
  openGraph: {
    title: "NOHO Mailbox Tunisie",
    description:
      "LLC américaine, banque US, université US. Tarif en dinars pour la Tunisie.",
    url: "https://noho.tn",
    locale: "fr_TN",
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
    <html lang="fr" className={`${baloo.variable} ${pacifico.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
