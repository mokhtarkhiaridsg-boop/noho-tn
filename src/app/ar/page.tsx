// TODO: native Arabic review
import type { Metadata } from "next";
import HomeLanding from "@/components/landing/HomeLanding";

export const metadata: Metadata = {
  title: {
    absolute: "NOHO Mailbox تونس — عنوان أمريكي حقيقي، شحن، توصيل، LLC",
  },
  description:
    "عنوان بريدي حقيقي في الولايات المتحدة. عنوان أمريكي حقيقي في محل فعلي بلوس أنجلوس، مع مسح ضوئي للبريد، استلام الطرود (UPS/FedEx/Amazon)، وشحن دولي إلى تونس. شركة LLC أمريكية، توثيق، شحن وتوصيل في أمريكا. قد يتوفر الدفع بالدينار عبر مكتب شريك في تونس — تأكّد من ذلك مع الفريق قبل الدفع.",
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
      "عنوان بريدي حقيقي في الولايات المتحدة. شركة LLC أمريكية بـ 4 000 TND. موثّق كاليفورنيا. قد يتوفر الدفع بالدينار عبر مكتب شريك في تونس — تأكّد من ذلك مع الفريق قبل الدفع.",
    url: "https://nohomailboxtunis.com/ar",
    siteName: "NOHO Mailbox تونس",
    locale: "ar_TN",
    type: "website",
  },
  robots: { index: false, follow: true },
};


export default function ArabicHomePage() {
  return (
    <>
      {/* The landing page — one shared clone of the nohomailbox.org
          landing (hero + track), copy driven by locale. */}
      <HomeLanding locale="ar" />
    </>
  );
}
