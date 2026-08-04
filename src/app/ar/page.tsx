// TODO: native Arabic review
import type { Metadata } from "next";
import Reveal from "@/components/anim/Reveal";
import ArabicHomeHero from "./_components/ArabicHomeHero";

export const metadata: Metadata = {
  title: {
    absolute: "NOHO Mailbox تونس — عنوان أمريكي حقيقي، شحن، توصيل، LLC",
  },
  description:
    "عنوان بريدي حقيقي في الولايات المتحدة ابتداءً من 35 TND شهرياً. عنوان أمريكي حقيقي في محل فعلي بلوس أنجلوس، مع مسح ضوئي للبريد، استلام الطرود (UPS/FedEx/Amazon)، وشحن دولي إلى تونس. شركة LLC أمريكية، توثيق، شحن وتوصيل في أمريكا. الدفع بالدينار عند مكتب محاماة.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/ar",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr",
      "ar-TN": "https://nohomailboxtunis.com/ar",
      "aeb-TN": "https://nohomailboxtunis.com",
      "en-US": "https://nohomailbox.org",
    },
  },
  openGraph: {
    images: ["https://nohomailboxtunis.com/opengraph-image"],
    title: "NOHO Mailbox تونس — عنوان أمريكي حقيقي، LLC، شحن",
    description:
      "عنوان بريدي حقيقي في الولايات المتحدة ابتداءً من 35 TND شهرياً. شركة LLC أمريكية بـ 4 000 TND. موثّق كاليفورنيا. الدفع بالدينار عند مكتب محاماة.",
    url: "https://nohomailboxtunis.com/ar",
    siteName: "NOHO Mailbox تونس",
    locale: "ar_TN",
    type: "website",
  },
  robots: { index: false, follow: true },
};

const CREAM = "#F7E6C2";

export default function ArabicHomePage() {
  return (
    <>
      {/* Part 1 — the bridge: headline, storefront + dashboard, piliers */}
      <ArabicHomeHero />

      {/* Part 2 — carriers: real logos, we receive from */}
      <section className="px-5 sm:px-6 py-16 sm:py-24" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow mb-8" style={{ color: "rgba(45,16,15,0.5)", letterSpacing: "0.02em" }}>نستقبل طرودك من</p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {[
                { src: "/carriers/fedex.svg", alt: "FedEx", h: 40, w: 150 },
                { src: "/carriers/ups.svg", alt: "UPS", h: 60, w: 68 },
                { src: "/carriers/usps.svg", alt: "USPS", h: 46, w: 120 },
                { src: "/carriers/dhl.svg", alt: "DHL", h: 30, w: 180 },
              ].map((c) => (
                <span
                  key={c.alt}
                  className="inline-flex items-center justify-center h-[72px] w-[45%] max-w-48 sm:w-48 px-4 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
                  style={{ background: CREAM, border: "1px solid rgba(45,16,15,0.08)", boxShadow: "var(--shadow-sm)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.src} alt={c.alt} className="object-contain" style={{ maxHeight: c.h, maxWidth: c.w, width: "auto", height: "auto", opacity: 0.9 }} />
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
