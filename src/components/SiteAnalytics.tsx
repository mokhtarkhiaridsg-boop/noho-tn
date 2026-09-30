"use client";

/*
 * Site analytics (added 2026-09-30 — the site had none, so nothing about
 * traffic or conversions could be measured).
 *
 * Vercel Web Analytics: cookieless, no personal data. Two rules keep it that
 * way and must not be loosened:
 *
 *  1. Query strings and fragments are stripped from every URL before it is
 *     sent. /track?n=<tracking number>, login links and anything a form might
 *     put in a URL never reach analytics.
 *  2. Custom events carry only fixed labels: which button, which page area,
 *     which plan NAME, which WhatsApp intent. Never a name, e-mail, phone,
 *     address, document or free text typed by a visitor.
 *
 * Events (the conversion funnel for the Tunisia pages):
 *   signup_click      a link to /inscription            { from }
 *   plan_select       a plan card button                { plan }
 *   whatsapp_click    any wa.me link                    { intent }
 *   signup_submitted  the signup form succeeded         { plan }   (SignupForm)
 *   consult_submitted the consultation form succeeded   {}         (ConsultationForm)
 * Page views give visits per page (the Tunisia pages included) for free.
 *
 * Tagging: add data-track="<event>" (+ data-track-from / data-track-plan) to
 * any element. Untagged links to /inscription and wa.me are still counted.
 */
import { useEffect } from "react";
import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";
import { track } from "@vercel/analytics";

function stripUrl(event: BeforeSendEvent): BeforeSendEvent {
  try {
    const u = new URL(event.url);
    u.search = "";
    u.hash = "";
    return { ...event, url: u.toString() };
  } catch {
    return event;
  }
}

function waIntent(href: string): string {
  // The intent is inferred from which pre-filled message the link carries;
  // the message text itself is never sent.
  const text = (() => {
    try {
      return new URL(href).searchParams.get("text") ?? "";
    } catch {
      return "";
    }
  })();
  if (/colis/i.test(text)) return "colis";
  if (/adresse/i.test(text)) return "adresse";
  if (/étud|etud/i.test(text)) return "etudiant";
  if (/business|LLC/i.test(text)) return "business";
  return "general";
}

export default function SiteAnalytics() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as Element | null)?.closest?.("a,button,[data-track]");
      if (!el) return;
      const tagged = el.getAttribute("data-track");
      const href = el.getAttribute("href") ?? "";
      if (tagged === "plan_select") {
        track("plan_select", { plan: el.getAttribute("data-track-plan") ?? "unknown" });
        return;
      }
      if (tagged === "signup_click" || /^\/inscription(\?|$)/.test(href)) {
        track("signup_click", { from: el.getAttribute("data-track-from") ?? "untagged" });
        return;
      }
      if (/^https:\/\/wa\.me\//.test(href)) {
        track("whatsapp_click", { intent: waIntent(href) });
        return;
      }
      if (tagged) track(tagged, { from: el.getAttribute("data-track-from") ?? "untagged" });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return <Analytics beforeSend={stripUrl} />;
}
