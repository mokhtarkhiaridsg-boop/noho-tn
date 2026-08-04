"use client";

import { useActionState } from "react";
import { submitConsultation, type ConsultationState } from "@/app/actions/consultation";

const INK = "#2D100F";
const TEAL = "#337485";
const GREEN = "#2D7A4A";

const initial: ConsultationState = {};

/**
 * Consultation booking form — email first, then first/last name and the
 * reason for the call. Lands in ConsultationRequest (admin/consultations);
 * the team reaches back within 24h.
 */
export default function ConsultationForm({
  locale = "fr",
  labels,
}: {
  locale?: string;
  labels?: {
    email: string;
    firstName: string;
    lastName: string;
    reason: string;
    reasonPlaceholder: string;
    submit: string;
    successTitle: string;
    successBody: string;
  };
}) {
  const [state, action, pending] = useActionState(submitConsultation, initial);

  const L = labels ?? {
    email: "Email",
    firstName: "Prénom",
    lastName: "Nom",
    reason: "Raison de l'appel",
    reasonPlaceholder: "LLC US, société TN, adresse, suivi mensuel…",
    submit: "Réserver — on te recontacte",
    successTitle: "C'est noté.",
    successBody: "On te recontacte sous 24h (jours ouvrés) pour fixer l'appel.",
  };

  if (state.ok) {
    return (
      <div className="text-center py-8 px-4">
        <span
          className="mx-auto mb-4 grid place-items-center h-14 w-14 rounded-full"
          style={{ background: "rgba(45,122,74,0.12)", border: `1.5px solid ${GREEN}55` }}
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 12.5 L9.5 18 L20 6.5" />
          </svg>
        </span>
        <p className="font-extrabold text-[20px] mb-1" style={{ fontFamily: "var(--font-baloo), sans-serif", color: INK }}>
          {L.successTitle}
        </p>
        <p className="text-[13.5px]" style={{ color: "rgba(45,16,15,0.7)" }}>
          {state.firstName ? `${state.firstName} — ` : ""}
          {L.successBody}
        </p>
      </div>
    );
  }

  const inputStyle = {
    background: "#fffdf8",
    border: "1.5px solid rgba(45,16,15,0.18)",
    color: INK,
  } as const;

  return (
    <form action={action} className="space-y-3">
      <input type="hidden" name="locale" value={locale} />
      {/* honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <label htmlFor="cf-email" className="block text-[11px] font-black uppercase tracking-[0.12em] mb-1" style={{ color: "rgba(45,16,15,0.6)" }}>
          {L.email}
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="prenom@exemple.com"
          className="w-full rounded-xl px-3.5 py-2.5 text-[14px] outline-none focus:ring-2 focus:ring-[#337485]/40"
          style={inputStyle}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="cf-first" className="block text-[11px] font-black uppercase tracking-[0.12em] mb-1" style={{ color: "rgba(45,16,15,0.6)" }}>
            {L.firstName}
          </label>
          <input
            id="cf-first"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className="w-full rounded-xl px-3.5 py-2.5 text-[14px] outline-none focus:ring-2 focus:ring-[#337485]/40"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="cf-last" className="block text-[11px] font-black uppercase tracking-[0.12em] mb-1" style={{ color: "rgba(45,16,15,0.6)" }}>
            {L.lastName}
          </label>
          <input
            id="cf-last"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className="w-full rounded-xl px-3.5 py-2.5 text-[14px] outline-none focus:ring-2 focus:ring-[#337485]/40"
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-reason" className="block text-[11px] font-black uppercase tracking-[0.12em] mb-1" style={{ color: "rgba(45,16,15,0.6)" }}>
          {L.reason}
        </label>
        <textarea
          id="cf-reason"
          name="reason"
          required
          rows={3}
          placeholder={L.reasonPlaceholder}
          className="w-full rounded-xl px-3.5 py-2.5 text-[14px] outline-none resize-none focus:ring-2 focus:ring-[#337485]/40"
          style={inputStyle}
        />
      </div>

      {state.error && (
        <p className="text-[12.5px] font-bold" style={{ color: "#C73E2D" }} role="alert">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn-west w-full inline-flex items-center justify-center gap-2 font-bold px-5 py-3 rounded-xl text-[14px] disabled:opacity-60"
        style={{ background: TEAL, color: "#fff", border: "1.5px solid rgba(45,16,15,0.8)" }}
      >
        {pending ? "Envoi…" : L.submit}
        {!pending && (
          <svg className="arrow-nudge w-4 h-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </form>
  );
}
