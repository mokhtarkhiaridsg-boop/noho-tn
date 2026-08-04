import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

const COOKIE = "noho_session";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days
const secret = () => new TextEncoder().encode((process.env.AUTH_SECRET ?? "").trim());

export type SessionUser = { id: string; name: string; email: string; role: string };

/** Whether a database is wired (real auth). False → admin runs in switcher preview mode. */
export function dbConfigured() {
  return process.env.LOCAL_SQLITE === "1" || !!(process.env.TURSO_DATABASE_URL ?? "").trim();
}

/**
 * Where a role lands after login.
 *
 * There is no admin console on this site any more (owner, 2026-08): customers
 * and boxes are managed on nohomailbox.org. What survives here are the two
 * operational queues that read this site's own database — consultation leads
 * and Shippo label orders — so staff land on the first of them.
 */
export function homePathForRole(role: string): "/admin/consultations" | "/" {
  return isCustomer(role) ? "/" : "/admin/consultations";
}

export const isCustomer = (role: string) => role.trim().toUpperCase() === "CUSTOMER";

export const hashPassword = (pw: string) => bcrypt.hash(pw, 10);
export const verifyPassword = (pw: string, hash: string) => bcrypt.compare(pw, hash);

export async function createSession(userId: string) {
  const token = await new SignJWT({ sub: userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(secret());
  const c = await cookies();
  c.set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function destroySession() {
  const c = await cookies();
  c.delete(COOKIE);
}

async function sessionUserId(): Promise<string | null> {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret());
    return typeof payload.sub === "string" ? payload.sub : null;
  } catch {
    return null;
  }
}

export async function getCurrentUser(): Promise<SessionUser | null> {
  const id = await sessionUserId();
  if (!id) return null;
  const u = await prisma.user.findUnique({
    where: { id },
    select: { id: true, name: true, email: true, role: true, active: true },
  });
  if (!u || !u.active) return null;
  return { id: u.id, name: u.name, email: u.email, role: u.role };
}

/** Verify email + password. Returns the user on success, null otherwise. */
export async function authenticate(email: string, password: string): Promise<SessionUser | null> {
  const u = await prisma.user.findUnique({ where: { email: email.trim().toLowerCase() } });
  if (!u || !u.active) return null;
  const ok = await verifyPassword(password, u.passwordHash);
  if (!ok) return null;
  return { id: u.id, name: u.name, email: u.email, role: u.role };
}
