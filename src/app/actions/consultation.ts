"use server";

import { prisma } from "@/lib/prisma";
import { dbConfigured } from "@/lib/auth";
import { consultationNotification, sendInternalNotification } from "@/lib/email";

export type ConsultationState = {
  ok?: boolean;
  firstName?: string;
  error?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function submitConsultation(
  _prev: ConsultationState,
  formData: FormData
): Promise<ConsultationState> {
  // Honeypot — bots fill everything; humans never see this field.
  if (String(formData.get("company") ?? "") !== "") return { ok: true, firstName: "" };

  const email = String(formData.get("email") ?? "").trim().slice(0, 200);
  const firstName = String(formData.get("firstName") ?? "").trim().slice(0, 100);
  const lastName = String(formData.get("lastName") ?? "").trim().slice(0, 100);
  const reason = String(formData.get("reason") ?? "").trim().slice(0, 2000);
  const locale = String(formData.get("locale") ?? "fr").trim().slice(0, 8);

  if (!EMAIL_RE.test(email)) return { error: "Entre un email valide." };
  if (!firstName || !lastName) return { error: "Entre ton prénom et ton nom." };
  if (!reason) return { error: "Dis-nous en une phrase la raison de l'appel." };

  if (!dbConfigured()) {
    return {
      error:
        "Le formulaire est momentanément indisponible — écris-nous sur WhatsApp au +1 818 506 7744.",
    };
  }

  try {
    await prisma.consultationRequest.create({
      data: { email, firstName, lastName, reason, locale },
    });
  } catch {
    return {
      error:
        "Petit souci technique — réessaie, ou écris-nous sur WhatsApp au +1 818 506 7744.",
    };
  }

  // Internal heads-up email — the lead is already saved; never fail on this.
  const note = consultationNotification({ firstName, lastName, email, reason, locale });
  await sendInternalNotification(note);

  return { ok: true, firstName };
}
