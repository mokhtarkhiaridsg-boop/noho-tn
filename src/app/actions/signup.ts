"use server";

/**
 * Mailbox signup. The account is created on nohomailbox.org, not here — this
 * site keeps no customer records (owner, 2026-08). The request lands in the US
 * admin's signup queue and in its red Tunisia container.
 */
import { submitSignupToUs, usApiConfigured } from "@/lib/us-api";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export type SignupState = {
  error?: string;
  success?: boolean;
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

  return { success: true };
}
