"use server";

import { redirect } from "next/navigation";
import { authenticate, createSession, destroySession, homePathForRole } from "@/lib/auth";

export type LoginState = { error?: string };

export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  if (!email || !password) return { error: "Entre ton email et ton mot de passe." };
  const user = await authenticate(email, password);
  if (!user) return { error: "Email ou mot de passe incorrect." };
  await createSession(user.id);
  redirect(homePathForRole(user.role));
}

export async function logoutAction() {
  await destroySession();
  redirect("/login");
}
