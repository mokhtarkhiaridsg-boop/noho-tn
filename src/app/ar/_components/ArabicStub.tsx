import Link from "next/link";

/**
 * Phase 1 stub for /ar/* routes whose full Arabic translation hasn't shipped.
 * Renders a polite "in translation" notice + link to the French original.
 * Once a native-Arabic version exists, the parent page.tsx is replaced.
 */
export default function ArabicStub({
  frHref,
  frTitleAr,
}: {
  frHref: string;
  frTitleAr: string;
}) {
  const CREAM = "#F7E6C2";
  const INK = "#2D100F";
  const BLUE = "#337485";

  return (
    <div lang="ar" dir="rtl">
      <section
        className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center"
        style={{ background: CREAM }}
      >
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            قيد الترجمة
          </span>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-5"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3.5rem)",
              color: INK,
              fontFamily: "var(--font-noto-arabic), system-ui, sans-serif",
            }}
          >
            {frTitleAr}
          </h1>
          <p
            className="text-[16px] leading-loose max-w-xl mx-auto"
            style={{ color: "rgba(45,16,15,0.78)" }}
          >
            هذه الصفحة قيد الترجمة إلى العربية. النسخة الفرنسية متاحة الآن مع كامل المحتوى والأسعار بالدينار التونسي.
          </p>
        </div>
      </section>

      <section
        className="px-5 sm:px-6 py-14 sm:py-16 text-center"
        style={{ background: "#fff" }}
      >
        <div className="max-w-xl mx-auto space-y-4">
          <Link
            href={frHref}
            className="inline-flex items-center gap-3 font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
            style={{
              background: INK,
              color: CREAM,
              boxShadow: "0 6px 28px rgba(45,16,15,0.28)",
            }}
            dir="ltr"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 rtl:-scale-x-100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            <span style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              Lire la page en français
            </span>
          </Link>
          <div>
            <Link
              href="/ar"
              className="inline-block text-[13px] font-bold underline"
              style={{ color: BLUE }}
            >
              ← العودة إلى الصفحة الرئيسية
            </Link>
          </div>
          <p
            className="text-[12.5px] mt-6 leading-relaxed"
            style={{ color: "rgba(45,16,15,0.55)" }}
          >
            للاتصال المباشر :{" "}
            <a
              href="mailto:hello@nohomailbox.org"
              className="font-bold underline"
              style={{ color: INK }}
              dir="ltr"
            >
              hello@nohomailbox.org
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
