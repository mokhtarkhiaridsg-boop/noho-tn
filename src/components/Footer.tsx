"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import LiveFooterStatus from "@/components/LiveFooterStatus";

type LinkItem = { href: string; label: string; external?: boolean };
type Section = { title: string; links: LinkItem[] };

const FR_SECTIONS: Section[] = [
  {
    title: "Mailbox & courrier",
    links: [
      { href: "/virtual-mailbox", label: "Boîte virtuelle US" },
      { href: "/virtual-mailbox/tunisie", label: "Boîte virtuelle TN (pré-lancement)" },
      { href: "/shipping", label: "Expédition int'l" },
      { href: "/livraison", label: "Livraison US" },
      { href: "/notary", label: "Form 1583 notarisé" },
    ],
  },
  {
    title: "Business",
    links: [
      { href: "/business", label: "Business (4 000 TND)" },
      { href: "/business#suivi-mensuel", label: "Suivi mensuel (1 200 TND)" },
      { href: "/notary", label: "Notaire" },
      { href: "/tarifs", label: "Tous les tarifs" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/agent/ecom", label: "Solution E-Commerce" },
      { href: "/agent/student", label: "Solution Étudiants" },
      { href: "/agent/jobs", label: "Solution Application Emploi" },
      { href: "/agent", label: "Découvrir l'Agent" },
    ],
  },
  {
    title: "Outils",
    links: [
      { href: "/outils/calculateurs/form-5472", label: "Calc. Form 5472" },
      { href: "/outils/calculateurs/tnd-usd", label: "Conv. TND ↔ USD" },
      { href: "/outils/calculateurs/bundle-vs-diy", label: "Calc. Bundle vs DIY" },
      { href: "/outils/calculateurs/residence-fiscale", label: "Résidence fiscale" },
      { href: "/outils/calculateurs/taxes-us-etat", label: "Taxes US par état" },
      { href: "/outils/calculateurs/stripe-fees", label: "Calc. Stripe fees" },
      { href: "/outils/calculateurs/roi-propriete-us", label: "ROI propriété US" },
      { href: "/outils/comparateurs/banques-us", label: "Comp. banques US" },
      { href: "/outils/comparateurs/etats-llc", label: "Comp. états LLC" },
      { href: "/outils/comparateurs/cross-border", label: "Comp. cross-border" },
      { href: "/outils/lookups/llc-status", label: "Lookup LLC SoS" },
      { href: "/outils/lookups/ein-status", label: "Lookup EIN IRS" },
      { href: "/outils/lookups/hts-code", label: "Lookup HTS douane" },
      { href: "/outils/lookups/form-1583", label: "Lookup Form 1583" },
      { href: "/outils/templates", label: "Templates" },
      { href: "/appel", label: "Consultation gratuite" },
      { href: "/livraison", label: "Livraison same-day LA" },
    ],
  },
  {
    title: "Blog & ressources",
    links: [
      { href: "/blog", label: "Tous les articles" },
      { href: "/guides/plafond-carte-technologique", label: "Plafond carte technologique" },
      { href: "/conformite/form-5472-penalite", label: "Form 5472 — pénalité" },
    ],
  },
  {
    title: "Partenaires",
    links: [
      { href: "/partners", label: "Programme affilié" },
      { href: "/partners", label: "Conditions" },
      { href: "/temoignages", label: "Témoignages" },
    ],
  },
  {
    title: "À propos",
    links: [
      { href: "/a-propos", label: "À propos de NOHO" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
      { href: "/track", label: "Suivre un colis" },
      { href: "/security", label: "Sécurité" },
      { href: "https://nohomailbox.org", label: "Site US (English)", external: true },
    ],
  },
  {
    title: "Légal",
    links: [
      { href: "/privacy", label: "Confidentialité" },
      { href: "/terms", label: "Conditions" },
    ],
  },
];

const AR_SECTIONS: Section[] = [
  {
    title: "البريد والصندوق",
    links: [
      { href: "/ar/virtual-mailbox", label: "صندوق بريد أمريكي" },
      { href: "/ar/virtual-mailbox", label: "صندوق بريد تونسي (قريباً جداً)" },
      { href: "/ar/shipping", label: "الشحن الدولي" },
      { href: "/ar/livraison", label: "التوصيل في الولايات المتحدة" },
      { href: "/ar/notary", label: "توثيق Form 1583" },
    ],
  },
  {
    title: "حل الأعمال",
    links: [
      { href: "/ar/business", label: "حل الأعمال (4 000 دينار)" },
      { href: "/ar/business", label: "المتابعة الشهرية (1 200 دينار)" },
      { href: "/ar/notary", label: "كاتب العدل" },
      { href: "/ar/tarifs", label: "كل الأسعار" },
    ],
  },
  {
    title: "الوكيل",
    links: [
      { href: "/ar/agent/ecom", label: "حل التجارة الإلكترونية" },
      { href: "/ar/agent/student", label: "حل الطلاب" },
      { href: "/ar/agent/jobs", label: "حل التقديم للوظائف" },
      { href: "/ar/agent", label: "اكتشف الوكيل" },
    ],
  },
  {
    title: "الأدوات",
    links: [
      { href: "/ar/outils", label: "آلات حاسبة" },
      { href: "/ar/outils", label: "مقارنات" },
      { href: "/ar/outils", label: "أدلة PDF" },
      { href: "/ar/appel", label: "استشارة مجانية" },
      { href: "/ar/livraison", label: "توصيل سريع لوس أنجلوس" },
    ],
  },
  {
    title: "المدونة والموارد",
    links: [
      { href: "/ar/blog", label: "كل المقالات" },
      { href: "/ar/guides/plafond-carte-technologique", label: "سقف البطاقة التكنولوجية" },
      { href: "/ar/conformite/form-5472-penalite", label: "غرامة Form 5472" },
    ],
  },
  {
    title: "الشركاء",
    links: [
      { href: "/ar/partners", label: "برنامج الشركاء" },
      { href: "/ar/partners", label: "الشروط" },
      { href: "/ar/temoignages", label: "الشهادات" },
    ],
  },
  {
    title: "حول",
    links: [
      { href: "/ar/a-propos", label: "حول NOHO" },
      { href: "/ar/faq", label: "الأسئلة الشائعة" },
      { href: "/ar/contact", label: "اتصل بنا" },
      { href: "/ar/track", label: "تتبع بريدك" },
      { href: "/ar/security", label: "الأمن" },
      { href: "https://nohomailbox.org", label: "الموقع الأمريكي (إنجليزي)", external: true },
    ],
  },
  {
    title: "قانوني",
    links: [
      { href: "/ar/privacy", label: "الخصوصية" },
      { href: "/ar/terms", label: "الشروط" },
    ],
  },
];

export default function Footer() {
  const path = usePathname() ?? "/";
  const isAr = path.startsWith("/ar");
  const sections = isAr ? AR_SECTIONS : FR_SECTIONS;

  const tagline = isAr
    ? "النسخة التونسية من NOHO Mailbox. شركة أمريكية أو تونسية، بنوك، وكيل أمريكي للمؤسسين والطلاب والمتقدمين للوظائف التونسيين. تسعير بالدينار."
    : "L'édition Tunisie de NOHO Mailbox. Société américaine ou tunisienne, banque, agent américain pour fondateurs, étudiants et candidats à l'emploi tunisiens. Tarif en dinars.";

  const address = isAr
    ? "إصدار تونس للمؤسسين والطلاب والمتقدمين للوظائف التونسيين."
    : "Édition Tunisie pour les fondateurs, étudiants et candidats à l'emploi tunisiens.";

  const disclaimer = isAr
    ? "معلومات عامة، وليست استشارة ضريبية أو قانونية. NOHO Mailbox تنسق الهيكل التشغيلي ؛ استشر مختص ضرائب معتمد في بلد إقامتك. الموافقات البنكية (Mercury، Stripe وأي مزود طرف ثالث) غير مضمونة."
    : "Information générale, pas un conseil fiscal ou juridique. NOHO Mailbox coordonne la structure opérationnelle ; consulte un fiscaliste agréé dans ta juridiction de résidence. Les approbations bancaires (Mercury, Stripe et tout autre fournisseur tiers) ne sont pas garanties.";

  const legalLinks = isAr
    ? [
        { href: "/ar/privacy", label: "الخصوصية" },
        { href: "/ar/terms", label: "الشروط" },
      ]
    : [
        { href: "/privacy", label: "Confidentialité" },
        { href: "/terms", label: "Conditions" },
      ];

  return (
    <footer
      style={{
        background: "#2D100F",
        color: "#F7E6C2",
        fontFamily: isAr
          ? "var(--font-noto-arabic), system-ui, sans-serif"
          : "var(--font-baloo), sans-serif",
      }}
      className="px-5 sm:px-6 pt-14 pb-8"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 mb-10 items-start">
          <div>
            <Link href={isAr ? "/ar" : "/"} className="inline-flex items-center gap-2">
              <Logo className="h-8 w-auto invert" />
            </Link>
            <p className="text-[12.5px] leading-relaxed mt-4 opacity-75 max-w-xl">
              {tagline}
            </p>
          </div>
          {!isAr && <LiveFooterStatus />}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-12">
          {sections.map((s) => (
            <div key={s.title}>
              <p className="text-[11px] font-black uppercase tracking-[0.15em] mb-3 opacity-60">
                {s.title}
              </p>
              <ul className="space-y-2">
                {s.links.map((l) =>
                  l.external ? (
                    <li key={l.href + l.label}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] opacity-85 hover:opacity-100 transition-opacity"
                      >
                        {l.label} ↗
                      </a>
                    </li>
                  ) : (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        className="text-[13px] opacity-85 hover:opacity-100 transition-opacity"
                      >
                        {l.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ borderColor: "rgba(247,230,194,0.18)" }}
        >
          <div className="text-[12px] opacity-70 leading-relaxed">
            <p>
              <strong>NOHO Mailbox</strong>{" "}
              <span dir="ltr">· 5062 Lankershim Blvd, North Hollywood, CA 91601, USA</span>
            </p>
            <p className="mt-1">{address}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-[12px] opacity-70">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:opacity-100">
                {l.label}
              </Link>
            ))}
            <a href="mailto:hello@nohomailbox.org" className="hover:opacity-100" dir="ltr">
              hello@nohomailbox.org
            </a>
          </div>
        </div>

        <p className="text-[11px] opacity-50 mt-6 max-w-3xl leading-relaxed">
          {disclaimer}
        </p>
      </div>
    </footer>
  );
}
