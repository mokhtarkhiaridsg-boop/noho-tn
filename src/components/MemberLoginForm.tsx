"use client";

import { useActionState } from "react";
import Logo from "@/components/Logo";
import { T } from "@/components/ui/tokens";
import { memberLoginAction, type MemberLoginState } from "@/app/actions/member";

/*
 * Member sign-in. Credentials are checked by nohomailbox.org — this site holds
 * no customer records — and the reply is a scoped read token in an httpOnly
 * cookie. French throughout, per the rule for transactional surfaces.
 */
export default function MemberLoginForm() {
  const [state, action, pending] = useActionState<MemberLoginState, FormData>(memberLoginAction, {});
  return (
    <div className="min-h-screen w-full grid place-items-center px-5" style={{ background: T.surfaceAlt, fontFamily: "var(--font-body), sans-serif" }}>
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2.5 justify-center mb-6">
          <Logo className="h-9 w-auto" />
        </div>
        <div className="rounded-3xl p-7" style={{ background: T.surface, border: `1px solid ${T.border}`, boxShadow: "0 8px 30px rgba(45,16,15,0.10)" }}>
          <h1 className="font-extrabold text-[22px] mb-1" style={{ fontFamily: "var(--font-baloo), sans-serif", color: T.ink }}>Connexion</h1>
          <p className="text-[13px] mb-6" style={{ color: T.inkFaint }}>Ton espace client NOHO — courrier, colis et forfait.</p>
          <form action={action} className="flex flex-col gap-4">
            <label className="block">
              <span className="block text-[11px] font-bold uppercase tracking-[0.12em] mb-1.5" style={{ color: T.inkFaint }}>Email</span>
              <input name="email" type="email" autoComplete="email" required className="w-full text-[14px] px-4 py-3 rounded-xl outline-none" style={{ background: T.ivory, border: `1px solid ${T.border}`, color: T.ink }} />
            </label>
            <label className="block">
              <span className="block text-[11px] font-bold uppercase tracking-[0.12em] mb-1.5" style={{ color: T.inkFaint }}>Mot de passe</span>
              <input name="password" type="password" autoComplete="current-password" required className="w-full text-[14px] px-4 py-3 rounded-xl outline-none" style={{ background: T.ivory, border: `1px solid ${T.border}`, color: T.ink }} />
            </label>
            {state.error && (
              <p className="text-[12.5px] font-semibold px-3 py-2 rounded-lg" style={{ background: "rgba(192,57,43,0.08)", color: T.red }}>{state.error}</p>
            )}
            <button type="submit" disabled={pending} className="mt-1 font-bold text-[14px] py-3 rounded-xl cursor-pointer transition-transform hover:-translate-y-0.5 disabled:opacity-60" style={{ background: T.ink, color: "#fff" }}>
              {pending ? "Connexion…" : "Se connecter"}
            </button>
          </form>
        </div>
        <p className="text-center text-[12px] mt-5" style={{ color: T.inkFaint }}>
          Pas encore de boîte ? <a href="/inscription" className="font-semibold" style={{ color: T.teal }}>Créer mon compte</a>
        </p>
      </div>
    </div>
  );
}
