"use server";

/**
 * Member sign-in for the Tunisia site. Credentials are verified by
 * nohomailbox.org — this site has no customer records — and what comes back is
 * a scoped read token stored in an httpOnly cookie.
 */
import { redirect } from "next/navigation";
import { startMemberSession, endMemberSession } from "@/lib/member-session";

export type MemberLoginState = { error?: string };

export async function memberLoginAction(
  _prev: MemberLoginState,
  formData: FormData
): Promise<MemberLoginState> {
  const email = ((formData.get("email") as string) ?? "").trim().toLowerCase();
  const password = (formData.get("password") as string) ?? "";

  if (!email || !password) {
    return { error: "Saisis ton e-mail et ton mot de passe." };
  }

  const res = await startMemberSession(email, password);
  if (!res.ok) {
    return {
      error:
        res.error === "unavailable"
          ? "Service momentanément indisponible. Réessaie dans un moment."
          : "E-mail ou mot de passe incorrect.",
    };
  }

  redirect("/compte");
}

export async function memberLogoutAction() {
  await endMemberSession();
  redirect("/");
}
