"use server";

/**
 * Mailbox signup. The account is created on nohomailbox.org, not here — this
 * site keeps no customer records (owner, 2026-08). The request lands in the US
 * admin's signup queue and in its red Tunisia container.
 */
import { submitSignupToUs, usApiConfigured } from "@/lib/us-api";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { track } from "@vercel/analytics/server";

export type SignupState = {
  error?: string;
  /** The US app accepted the request (includes an email it already knew, or a request it held for review). */
  success?: boolean;
  /** The US app created a NEW account for this request — the only thing counted as a completed signup. */
  completed?: boolean;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitSignup(
  _prev: SignupState,
  formData: FormData
): Promise<SignupState> {
  // Honeypot — bots fill every field they find.
  if (((formData.get("company") as string) ?? "").trim()) {
    return { success: true };
  }

  const name = ((formData.get("name") as string) ?? "").trim();
  const email = ((formData.get("email") as string) ?? "").trim().toLowerCase();
  const phone = ((formData.get("phone") as string) ?? "").trim();
  const plan = ((formData.get("plan") as string) ?? "").trim();
  const notes = ((formData.get("notes") as string) ?? "").trim();

  if (name.length < 2) return { error: "Indique ton nom complet." };
  if (!EMAIL_RE.test(email)) return { error: "Indique une adresse e-mail valide." };
  if (phone.length < 6) return { error: "Indique un numéro de téléphone." };

  if (!usApiConfigured()) {
    return {
      error: `Le formulaire est momentanément indisponible. Écris-nous sur WhatsApp au ${WHATSAPP_DISPLAY}.`,
    };
  }

  const res = await submitSignupToUs({ name, email, phone, plan: plan || null, notes: notes || null });

  if (!res.ok) {
    console.error("[submitSignup] US API refused", res.error, res.status);
    return {
      error: `On n'a pas pu enregistrer ta demande. Écris-nous sur WhatsApp au ${WHATSAPP_DISPLAY}.`,
    };
  }

  /*
   * Completed signup = the US app says it created a new account
   * (`created: true` with a user id). It also answers `ok` for an email it
   * already has and for a request its risk gate quarantined (empty user id),
   * and neither of those is a new customer. The account itself carries
   * originSite = "tn" in the US database, which is the record of truth; this
   * event only mirrors it into this site's analytics. Fixed labels only.
   */
  const completed = res.data.created === true && !!res.data.userId;
  if (completed) {
    const planId = ["virtual-solo", "virtual-pro", "virtual-business", "not_sure"].includes(plan) ? plan : "other";
    try {
      await track("signup_completed", { site: "tn", plan: planId });
    } catch (err) {
      console.error("[submitSignup] analytics event failed", err);
    }
  }

  return { success: true, completed };
}
