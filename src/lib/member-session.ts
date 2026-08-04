/**
 * Member session for the Tunisia site.
 *
 * There are no customer rows in this database. A member signs in with the
 * credentials nohomailbox.org issued them; we exchange those for a scoped,
 * read-only token and keep it in an httpOnly cookie. Every read then goes
 * straight to the US API — this site caches nothing about a member.
 *
 * Separate from `noho_session` (src/lib/auth.ts), which is the STAFF cookie for
 * the two local operational queues. The two never mix.
 */
import "server-only";
import { cookies } from "next/headers";
import { openMemberSession, readAsMember } from "@/lib/us-api";

const COOKIE = "noho_member";

export type MemberProfile = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  suiteNumber: string | null;
  plan: string | null;
  status: string | null;
  mailboxStatus: string | null;
  planDueDate: string | null;
  memberSince: string;
};

export type MailRow = {
  id: string;
  type: string | null;
  from: string | null;
  status: string | null;
  date: string | null;
  carrier?: string | null;
  trackingNumber?: string | null;
};

type ListResponse = { items?: MailRow[]; total?: number };

/** Sign in against the US site and store the returned token. */
export async function startMemberSession(
  email: string,
  password: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  const res = await openMemberSession(email, password);
  if (!res.ok) {
    return {
      ok: false,
      error:
        res.error === "not_configured" || res.error === "unreachable"
          ? "unavailable"
          : "invalid_credentials",
    };
  }

  const expires = new Date(res.data.expiresAt);
  const c = await cookies();
  c.set(COOKIE, res.data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires,
  });
  return { ok: true };
}

export async function endMemberSession() {
  const c = await cookies();
  c.delete(COOKIE);
}

async function memberToken(): Promise<string | null> {
  return (await cookies()).get(COOKIE)?.value ?? null;
}

export async function isMemberSignedIn(): Promise<boolean> {
  return (await memberToken()) !== null;
}

/**
 * The member's profile, or null when the token is missing, expired or revoked
 * on the US side. Callers treat null as "send them back to /login".
 */
export async function getMemberProfile(): Promise<MemberProfile | null> {
  const token = await memberToken();
  if (!token) return null;
  const res = await readAsMember<MemberProfile>("/api/v1/me", token);
  return res.ok ? res.data : null;
}

export async function getMemberMail(limit = 10): Promise<MailRow[]> {
  const token = await memberToken();
  if (!token) return [];
  const res = await readAsMember<ListResponse>(`/api/v1/mail?limit=${limit}`, token);
  return res.ok ? (res.data.items ?? []) : [];
}

export async function getMemberPackages(limit = 10): Promise<MailRow[]> {
  const token = await memberToken();
  if (!token) return [];
  const res = await readAsMember<ListResponse>(`/api/v1/packages?limit=${limit}`, token);
  return res.ok ? (res.data.items ?? []) : [];
}
