import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Stripe Atlas 50K دولار credits — كم تستخدم فعلاً (الحساب الصادق)",
  description: "Atlas يعلن عن 50 000 دولار من credits الشركاء. التفصيل الحقيقي: Stripe 5K، AWS 5K، GCP/Azure (واحد فقط)، Notion 2K، Carta 1.5K، Brex 3K. للمؤسس التونسي early-stage النموذجي، الاستهلاك الحقيقي السنة 1 هو 1500-5000 دولار، ليس 50K.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/stripe-atlas-5k-credits-valeur-reelle" },
};

export default function ArAtlas5kCreditsPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/stripe-atlas-5k-credits-valeur-reelle"
      frTitleAr="Stripe Atlas 50K credits — كم تستخدم فعلاً"
    />
  );
}
