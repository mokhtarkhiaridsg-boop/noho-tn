"use client";

/**
 * Live footer status card mirroring nohomailbox.org/components/LiveFooterStatus.
 * Client-side variant — TN site has no DB backend. Computes open/closed via
 * the same LA-time logic as OpenStatusPill. Renders inside the footer dark
 * panel: status dot + headline + sub-text + storefront address + clock.
 */
import { useEffect, useState } from "react";
import { AiPin, AiClock } from "@/components/AnimatedIcons";

type Locale = "fr" | "ar" | "tn" | "en";

type Status = "open" | "closing" | "break" | "closed";

type SubKey =
  | "hours"
  | "todayLunch"
  | "lunchBreak"
  | "todayEvening"
  | "opensToday"
  | "reopensTomorrow"
  | "saturdayOpen"
  | "saturdayClosed"
  | "sundayClosed";

type Result = {
  status: Status;
  subKey: SubKey;
  laTimeLabel: string;
};

const HEADLINES: Record<Locale, Record<Status, string>> = {
  fr: {
    open: "Ouvert maintenant",
    closing: "Ferme bientôt",
    break: "Pause déjeuner",
    closed: "Fermé",
  },
  en: {
    open: "Open now",
    closing: "Closing soon",
    break: "Lunch break",
    closed: "Closed",
  },
  tn: {
    open: "Ma7loul tawa",
    closing: "Bch ysakker 9rib",
    break: "Pause déjeuner",
    closed: "Msakker",
  },
  ar: {
    open: "مفتوح الآن",
    closing: "يغلق قريباً",
    break: "استراحة الغداء",
    closed: "مغلق",
  },
};

const SUBS: Record<Locale, Record<SubKey, string>> = {
  fr: {
    hours: "Lun-Ven 9h30 · Sam 10h",
    todayLunch: "Aujourd'hui · ferme 13h30 (pause déjeuner)",
    lunchBreak: "Pause déjeuner · reprise 14h",
    todayEvening: "Aujourd'hui · ferme 17h30",
    opensToday: "Ouvre à 9h30 (heure de LA)",
    reopensTomorrow: "Réouvre demain 9h30",
    saturdayOpen: "Samedi · ferme 13h30",
    saturdayClosed: "Samedi 10h-13h30 · Dim fermé",
    sundayClosed: "Dimanche fermé · Réouvre lundi 9h30",
  },
  en: {
    hours: "Mon-Fri 9:30am · Sat 10am",
    todayLunch: "Today · closes 1:30pm (lunch break)",
    lunchBreak: "Lunch break · back at 2pm",
    todayEvening: "Today · closes 5:30pm",
    opensToday: "Opens at 9:30am (LA time)",
    reopensTomorrow: "Reopens tomorrow at 9:30am",
    saturdayOpen: "Saturday · closes 1:30pm",
    saturdayClosed: "Saturday 10am-1:30pm · Closed Sunday",
    sundayClosed: "Closed Sunday · Reopens Monday 9:30am",
  },
  tn: {
    hours: "Lun-Ven 9h30 · Sam 10h",
    todayLunch: "Lyoum · ysakker 13h30 (pause déjeuner)",
    lunchBreak: "Pause déjeuner · ya7ell 14h",
    todayEvening: "Lyoum · ysakker 17h30",
    opensToday: "Ya7ell 9h30 (wa9t LA)",
    reopensTomorrow: "Ya7ell ghodwa 9h30",
    saturdayOpen: "Samedi · ysakker 13h30",
    saturdayClosed: "Samedi 10h-13h30 · Dimanche msakker",
    sundayClosed: "Dimanche msakker · Ya7ell lundi 9h30",
  },
  ar: {
    hours: "الاثنين-الجمعة 9:30 · السبت 10:00",
    todayLunch: "اليوم · يغلق على الساعة 13:30 (استراحة الغداء)",
    lunchBreak: "استراحة الغداء · يفتح من جديد على الساعة 14:00",
    todayEvening: "اليوم · يغلق على الساعة 17:30",
    opensToday: "يفتح على الساعة 9:30 بتوقيت لوس أنجلوس",
    reopensTomorrow: "يفتح من جديد غداً على الساعة 9:30",
    saturdayOpen: "السبت · يغلق على الساعة 13:30",
    saturdayClosed: "السبت 10:00-13:30 · الأحد مغلق",
    sundayClosed: "الأحد مغلق · يفتح من جديد الاثنين على الساعة 9:30",
  },
};

function computeResult(): Result {
  const now = new Date();
  const utcHour = now.getUTCHours();
  const utcMin = now.getUTCMinutes();
  const utcDay = now.getUTCDay();
  const month = now.getUTCMonth();
  const laOffset = month >= 2 && month <= 10 ? -7 : -8;
  let laHour = utcHour + laOffset;
  let laDay = utcDay;
  if (laHour < 0) {
    laHour += 24;
    laDay = (laDay + 6) % 7;
  } else if (laHour >= 24) {
    laHour -= 24;
    laDay = (laDay + 1) % 7;
  }
  const laTime = laHour + utcMin / 60;
  const laTimeLabel = `${String(Math.floor(laTime)).padStart(2, "0")}:${String(Math.floor((laTime % 1) * 60)).padStart(2, "0")} LA`;

  let status: Status = "closed";
  let subKey: SubKey = "hours";

  if (laDay >= 1 && laDay <= 5) {
    if (laTime >= 9.5 && laTime < 13.5) {
      status = "open";
      subKey = "todayLunch";
      if (laTime > 13) status = "closing";
    } else if (laTime >= 13.5 && laTime < 14) {
      status = "break";
      subKey = "lunchBreak";
    } else if (laTime >= 14 && laTime < 17.5) {
      status = "open";
      subKey = "todayEvening";
      if (laTime > 17) status = "closing";
    } else {
      status = "closed";
      subKey = laTime < 9.5 ? "opensToday" : "reopensTomorrow";
    }
  } else if (laDay === 6) {
    if (laTime >= 10 && laTime < 13.5) {
      status = "open";
      subKey = "saturdayOpen";
      if (laTime > 13) status = "closing";
    } else {
      status = "closed";
      subKey = "saturdayClosed";
    }
  } else {
    status = "closed";
    subKey = "sundayClosed";
  }

  return { status, subKey, laTimeLabel };
}

export default function LiveFooterStatus({ locale = "fr" }: { locale?: Locale }) {
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    setResult(computeResult());
    const t = setInterval(() => setResult(computeResult()), 60_000);
    return () => clearInterval(t);
  }, []);

  if (!result) return null;

  const headline = HEADLINES[locale][result.status];
  const sub = SUBS[locale][result.subKey];

  const dotColor =
    result.status === "open" ? "#22C55E"
    : result.status === "closing" ? "#F5A623"
    : result.status === "break" ? "#F5A623"
    : "#9CA3AF";

  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: "rgba(247,230,194,0.06)",
        border: "1px solid rgba(247,230,194,0.12)",
      }}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
          {result.status === "open" && (
            <span
              className="absolute inline-flex h-full w-full rounded-full opacity-70"
              style={{
                background: dotColor,
                animation: "footerPing 1.6s cubic-bezier(0,0,0.2,1) infinite",
              }}
            />
          )}
          <span
            className="relative inline-flex h-2.5 w-2.5 rounded-full"
            style={{ background: dotColor, border: "1.5px solid rgba(247,230,194,0.6)" }}
          />
        </span>
        <p
          className="text-[12px] font-black uppercase tracking-[0.18em]"
          style={{
            color: "#FAFAF8",
            fontFamily:
              locale === "ar"
                ? "var(--font-noto-arabic), system-ui, sans-serif"
                : "var(--font-baloo), sans-serif",
          }}
        >
          {headline}
        </p>
      </div>
      <p className="text-[11px] mb-4" style={{ color: "rgba(250,250,248,0.55)" }}>
        {sub}
      </p>
      <div className="pt-3 space-y-2 text-[11px]" style={{ borderTop: "1px solid rgba(250,250,248,0.08)" }}>
        <div className="flex items-start gap-2" style={{ color: "rgba(250,250,248,0.55)" }}>
          <AiPin className="w-4 h-5 shrink-0" />
          <p>
            <span className="font-black" style={{ color: "#FAFAF8" }}>5062 Lankershim Blvd</span>
            <br />
            North Hollywood, CA 91601
          </p>
        </div>
        <div className="flex items-center gap-2" style={{ color: "rgba(250,250,248,0.55)" }}>
          <AiClock className="w-4 h-4 shrink-0" />
          <p>
            <span className="font-black" style={{ color: "#FAFAF8" }}>{result.laTimeLabel}</span>
            <span className="opacity-60"> · GMT-{Math.abs(new Date().getTimezoneOffset() / 60) === 8 ? "8" : "7"}</span>
          </p>
        </div>
      </div>
      <style>{`
        @keyframes footerPing {
          0% { transform: scale(0.9); opacity: 0.7; }
          75%, 100% { transform: scale(2.4); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
