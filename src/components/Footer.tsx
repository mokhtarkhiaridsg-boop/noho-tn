"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import LiveFooterStatus from "@/components/LiveFooterStatus";
import { localeFromPath, localePrefix } from "@/lib/locale";

type LinkItem = { href: string; label: string; external?: boolean };
type Section = { title: string; links: LinkItem[] };

/*
 * All internal hrefs below are canonical FR paths; the locale prefix
 * (/ar, /tn, /en) is added at render time. External links are untouched.
 */

const FR_SECTIONS: Section[] = [
  {
    title: "Mailbox & courrier",
    links: [
      { href: "/virtual-mailbox", label: "Adresse US réelle" },
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

/*
 * A couple of FR pages have no counterpart under the locale prefixes:
 * /livraison lives at /{locale}/delivery, and /virtual-mailbox/tunisie
 * only exists in FR. Remap those before prefixing.
 */
const LOCALE_HREF_REMAP: Record<string, string> = {
  "/livraison": "/delivery",
};

const localizeSections = (sections: Section[]): Section[] =>
  sections.map((s) => ({
    ...s,
    links: s.links.map((l) =>
      l.external ? l : { ...l, href: LOCALE_HREF_REMAP[l.href] ?? l.href }
    ),
  }));

/* Tunisian UIs code-switch heavily: TN reuses the French labels as-is. */
const TN_SECTIONS: Section[] = localizeSections(FR_SECTIONS);

const EN_SECTIONS: Section[] = localizeSections([
  {
    title: "Mailbox & mail",
    links: [
      { href: "/virtual-mailbox", label: "Real US address" },
      { href: "/shipping", label: "International shipping" },
      { href: "/livraison", label: "US delivery" },
      { href: "/notary", label: "Notarized Form 1583" },
    ],
  },
  {
    title: "Business",
    links: [
      { href: "/business", label: "Business (4,000 TND)" },
      { href: "/business#suivi-mensuel", label: "Monthly follow-up (1,200 TND)" },
      { href: "/notary", label: "Notary" },
      { href: "/tarifs", label: "All pricing" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/agent/ecom", label: "E-commerce solution" },
      { href: "/agent/student", label: "Student solution" },
      { href: "/agent/jobs", label: "Job application solution" },
      { href: "/agent", label: "Meet the Agent" },
    ],
  },
  {
    title: "Blog & resources",
    links: [
      { href: "/blog", label: "All articles" },
      { href: "/guides/plafond-carte-technologique", label: "Carte technologique limit" },
      { href: "/conformite/form-5472-penalite", label: "Form 5472 — penalty" },
    ],
  },
  {
    title: "Partners",
    links: [
      { href: "/partners", label: "Affiliate program" },
      { href: "/partners", label: "Terms" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/a-propos", label: "About NOHO" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
      { href: "/track", label: "Track a package" },
      { href: "/security", label: "Security" },
      { href: "https://nohomailbox.org", label: "Main US site", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
]);

const AR_SECTIONS: Section[] = [
  {
    title: "البريد والصندوق",
    links: [
      { href: "/virtual-mailbox", label: "عنوان أمريكي حقيقي" },
      { href: "/virtual-mailbox", label: "عنوان تونسي حقيقي (قريباً جداً)" },
      { href: "/shipping", label: "الشحن الدولي" },
      { href: "/delivery", label: "التوصيل في الولايات المتحدة" },
      { href: "/notary", label: "توثيق Form 1583" },
    ],
  },
  {
    title: "حل الأعمال",
    links: [
      { href: "/business", label: "حل الأعمال (4 000 دينار)" },
      { href: "/business", label: "المتابعة الشهرية (1 200 دينار)" },
      { href: "/notary", label: "كاتب العدل" },
      { href: "/tarifs", label: "كل الأسعار" },
    ],
  },
  {
    title: "الوكيل",
    links: [
      { href: "/agent/ecom", label: "حل التجارة الإلكترونية" },
      { href: "/agent/student", label: "حل الطلاب" },
      { href: "/agent/jobs", label: "حل التقديم للوظائف" },
      { href: "/agent", label: "اكتشف الوكيل" },
    ],
  },
  {
    title: "المدونة والموارد",
    links: [
      { href: "/blog", label: "كل المقالات" },
      { href: "/guides/plafond-carte-technologique", label: "سقف البطاقة التكنولوجية" },
      { href: "/conformite/form-5472-penalite", label: "غرامة Form 5472" },
    ],
  },
  {
    title: "الشركاء",
    links: [
      { href: "/partners", label: "برنامج الشركاء" },
      { href: "/partners", label: "الشروط" },
    ],
  },
  {
    title: "حول",
    links: [
      { href: "/a-propos", label: "حول NOHO" },
      { href: "/faq", label: "الأسئلة الشائعة" },
      { href: "/contact", label: "اتصل بنا" },
      { href: "/track", label: "تتبع بريدك" },
      { href: "/security", label: "الأمن" },
      { href: "https://nohomailbox.org", label: "الموقع الأمريكي (إنجليزي)", external: true },
    ],
  },
  {
    title: "قانوني",
    links: [
      { href: "/privacy", label: "الخصوصية" },
      { href: "/terms", label: "الشروط" },
    ],
  },
];

export default function Footer() {
  const path = usePathname() ?? "/";
  if (path.startsWith("/admin")) return null;
  const locale = localeFromPath(path);
  const isAr = locale === "ar";
  const isTn = locale === "tn";
  const isEn = locale === "en";
  const prefix = localePrefix(locale);
  const sections = isAr ? AR_SECTIONS : isTn ? TN_SECTIONS : isEn ? EN_SECTIONS : FR_SECTIONS;

  const tagline = isAr
    ? "النسخة التونسية من NOHO Mailbox. شركة أمريكية أو تونسية، بنوك، وكيل أمريكي للمؤسسين والطلاب والمتقدمين للوظائف التونسيين. تسعير بالدينار."
    : isTn
    ? "El version Tounsi mta3 NOHO Mailbox. Adresse 7a9i9ia fi America, colis w courrier, LLC américaine, mrafqa Mercury w Stripe, bweba lel étudiants. Tkhalles b dinar fi Tounes."
    : isEn
    ? "The Tunisia edition of NOHO Mailbox. US or Tunisian company, banking, and a US agent for Tunisian founders, students, and job applicants. Priced in dinars."
    : "L'édition Tunisie de NOHO Mailbox. Société américaine ou tunisienne, banque, agent américain pour fondateurs, étudiants et candidats à l'emploi tunisiens. Tarif en dinars.";

  const address = isAr
    ? "إصدار تونس للمؤسسين والطلاب والمتقدمين للوظائف التونسيين."
    : isEn
    ? "The Tunisia edition, for Tunisian founders, students, and job applicants."
    : "Édition Tunisie pour les fondateurs, étudiants et candidats à l'emploi tunisiens.";

  /* Legal text stays French for TN. */
  const disclaimer = isAr
    ? "معلومات عامة، وليست استشارة ضريبية أو قانونية. NOHO Mailbox تنسق الهيكل التشغيلي ؛ استشر مختص ضرائب معتمد في بلد إقامتك. الموافقات البنكية (Mercury، Stripe وأي مزود طرف ثالث) غير مضمونة."
    : isEn
    ? "General information, not tax or legal advice. NOHO Mailbox coordinates the operational structure; talk to a licensed tax professional in your jurisdiction of residence. Banking approvals (Mercury, Stripe, and any other third-party provider) are not guaranteed."
    : "Information générale, pas un conseil fiscal ou juridique. NOHO Mailbox coordonne la structure opérationnelle ; consulte un fiscaliste agréé dans ta juridiction de résidence. Les approbations bancaires (Mercury, Stripe et tout autre fournisseur tiers) ne sont pas garanties.";

  const legalLinks = isAr
    ? [
        { href: "/privacy", label: "الخصوصية" },
        { href: "/terms", label: "الشروط" },
      ]
    : isEn
    ? [
        { href: "/privacy", label: "Privacy" },
        { href: "/terms", label: "Terms" },
      ]
    : [
        { href: "/privacy", label: "Confidentialité" },
        { href: "/terms", label: "Conditions" },
      ];

  const loginLabel = isAr ? "تسجيل الدخول" : isEn ? "Log in" : "Connexion";

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
            <Link href={prefix || "/"} className="inline-flex items-center gap-2">
              <Logo className="h-8 w-auto invert" />
            </Link>
            <p className="text-[12.5px] leading-relaxed mt-4 opacity-75 max-w-xl">
              {tagline}
            </p>
          </div>
          {!isAr && <LiveFooterStatus locale={isTn ? "tn" : isEn ? "en" : "fr"} />}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7 gap-8 mb-12">
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
                        href={prefix + l.href}
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
            <Link href="/login" className="hover:opacity-100 font-bold" style={{ opacity: 1 }}>
              {loginLabel}
            </Link>
            {legalLinks.map((l) => (
              <Link key={l.href} href={prefix + l.href} className="hover:opacity-100">
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
