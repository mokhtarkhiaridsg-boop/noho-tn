// TODO: native Arabic review
import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";

/*
 * Arabic locale layout (Phase 1).
 *
 * Note: Next.js 16 App Router allows only one <html>/<body> pair, defined in
 * the root layout (src/app/layout.tsx). To deliver RTL + Arabic font for the
 * /ar/* subtree without restructuring the entire app into route groups, this
 * layout wraps children in a <div dir="rtl" lang="ar"> with the Noto Sans
 * Arabic CSS variable applied. The browser honours dir/lang on the wrapper
 * for layout, text shaping, and accessibility.
 *
 * Phase 2 will lift this into a route-group root layout once the FR/AR split
 * is finalised; the wrapper approach is the pragmatic intermediate that ships
 * today.
 */

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nohomailboxtunis.com"),
  title: {
    default: "NOHO Mailbox تونس — شركة أمريكية، بنك أمريكي، جامعة أمريكية",
    template: "%s | NOHO Mailbox تونس",
  },
  description:
    "النسخة التونسية من NOHO Mailbox. شركة أمريكية، عنوان حقيقي في الولايات المتحدة، مرافقة Mercury و Stripe، بوابة طلاب للجامعات الأمريكية. تسعير بالدينار.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/ar",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr",
      "ar-TN": "https://nohomailboxtunis.com/ar",
    },
  },
  openGraph: {
    images: ["https://nohomailboxtunis.com/opengraph-image"],
    title: "NOHO Mailbox تونس",
    description:
      "شركة أمريكية، بنك أمريكي، جامعة أمريكية. تسعير بالدينار للتونسيين.",
    url: "https://nohomailboxtunis.com/ar",
    locale: "ar_TN",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
  robots: { index: false, follow: true },
};

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      lang="ar"
      dir="rtl"
      className={`${notoSansArabic.variable} flex flex-col min-h-screen`}
      style={{ fontFamily: "var(--font-noto-arabic), system-ui, sans-serif" }}
    >
      {children}
    </div>
  );
}
