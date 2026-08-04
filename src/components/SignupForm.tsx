"use client";

import { useActionState } from "react";
import { submitSignup, type SignupState } from "@/app/actions/signup";
import { waLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const INK = "#2D100F";
const TEAL = "#337485";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";

const initial: SignupState = {};

/*
 * Mailbox signup. Deliberately French across every label, control and message,
 * even on the Tounsi pages — the owner's rule is that anything transactional
 * (CTAs, forms, signup) stays French so there is no ambiguity about what the
 * person is agreeing to.
 *
 * The account is created on nohomailbox.org; nothing is stored here.
 */
const PLANS = [
  { id: "not_sure", label: "Je ne sais pas encore — conseillez-moi" },
  { id: "virtual-solo", label: "Adresse US — Solo" },
  { id: "virtual-pro", label: "Adresse US — Pro" },
  { id: "virtual-business", label: "Adresse US — Business" },
];

export default function SignupForm() {
  const [state, action, pending] = useActionState(submitSignup, initial);

  if (state.success) {
    return (
      <div className="text-center py-10 px-4">
        <span
          className="mx-auto mb-4 grid place-items-center h-14 w-14 rounded-full"
          style={{ background: "rgba(45,122,74,0.12)", color: GREEN }}
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12.5 L9.5 18 L20 6.5" />
          </svg>
        </span>
        <h3 className="font-extrabold mb-2" style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: 22, color: INK }}>
          Demande enregistrée.
        </h3>
        <p className="text-[14px] leading-relaxed max-w-md mx-auto" style={{ color: "rgba(45,16,15,0.72)" }}>
          Tu vas recevoir un e-mail avec tes identifiants pour accéder à ton
          espace. L&apos;équipe attribue ton numéro de boîte et te recontacte.
        </p>
        <a
          href={waLink("adresse")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 font-black px-7 py-3 rounded-2xl text-[14px]"
          style={{ background: GREEN, color: "#fff" }}
        >
          WhatsApp
        </a>
      </div>
    );
  }

  const field =
    "w-full h-11 px-3 rounded-xl text-[14px] focus:outline-none focus:ring-2";
  const fieldStyle = {
    background: "#fffdf8",
    border: "1.5px solid rgba(45,16,15,0.22)",
    color: INK,
  } as const;

  return (
    <form action={action} className="flex flex-col gap-3">
      {/* Honeypot — hidden from people, irresistible to bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <label className="flex flex-col gap-1.5">
        <span className="text-[12px] font-bold" style={{ color: INK }}>Nom complet</span>
        <input name="name" required autoComplete="name" className={field} style={fieldStyle} />
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="flex flex-col gap-1.5">
          <span className="text-[12px] font-bold" style={{ color: INK }}>E-mail</span>
          <input name="email" type="email" required autoComplete="email" className={field} style={fieldStyle} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[12px] font-bold" style={{ color: INK }}>Téléphone</span>
          <input name="phone" type="tel" required autoComplete="tel" placeholder="+216 …" className={field} style={fieldStyle} />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-[12px] font-bold" style={{ color: INK }}>Forfait souhaité</span>
        <select name="plan" defaultValue="not_sure" className={field} style={fieldStyle}>
          {PLANS.map((p) => (
            <option key={p.id} value={p.id}>{p.label}</option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[12px] font-bold" style={{ color: INK }}>Message (facultatif)</span>
        <textarea
          name="notes"
          rows={3}
          placeholder="Colis Amazon / Shein, courrier, dossier étudiant…"
          className="w-full px-3 py-2.5 rounded-xl text-[14px] focus:outline-none focus:ring-2"
          style={fieldStyle}
        />
      </label>

      {state.error && (
        <p className="text-[13px] font-bold" style={{ color: RED }} role="alert">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 w-full font-black py-3.5 rounded-2xl text-[14px] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        style={{ background: INK, color: "#F7E6C2" }}
      >
        {pending ? "Envoi en cours…" : "Créer mon compte"}
      </button>

      <p className="text-[11.5px] text-center leading-relaxed" style={{ color: "rgba(45,16,15,0.6)" }}>
        Le numéro de boîte est attribué par l&apos;équipe après vérification de
        ta CIN. Une question ? WhatsApp{" "}
        <a href={waLink("adresse")} target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: TEAL }}>
          {WHATSAPP_DISPLAY}
        </a>
      </p>
    </form>
  );
}
