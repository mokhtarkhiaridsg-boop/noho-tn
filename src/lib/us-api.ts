/**
 * Client for nohomailbox.org — the US site, and the only place customers and
 * boxes are managed (owner, 2026-08). This site has no admin: a signup here
 * becomes a request THERE, and a member's box, mail and packages are read back
 * from there rather than stored locally.
 *
 * Server-only. Both env vars are set in Vercel:
 *   NOHO_US_API_URL      e.g. https://nohomailbox.org
 *   NOHO_US_API_SECRET   must match PARTNER_SITE_SECRET on the US project
 */
import "server-only";

const SECRET_HEADER = "x-noho-partner-secret";

function config() {
  const base = (process.env.NOHO_US_API_URL ?? "").trim().replace(/\/$/, "");
  const secret = (process.env.NOHO_US_API_SECRET ?? "").trim();
  return base && secret ? { base, secret } : null;
}

/** Whether the US API is wired. False → callers degrade to WhatsApp. */
export function usApiConfigured(): boolean {
  return config() !== null;
}

export type UsApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string; status?: number };

async function partnerFetch<T>(
  path: string,
  init: RequestInit & { partnerAuth?: boolean } = {}
): Promise<UsApiResult<T>> {
  const cfg = config();
  if (!cfg) {
    return { ok: false, error: "not_configured" };
  }

  const headers = new Headers(init.headers);
  headers.set("content-type", "application/json");
  if (init.partnerAuth !== false) headers.set(SECRET_HEADER, cfg.secret);

  let res: Response;
  try {
    res = await fetch(`${cfg.base}${path}`, {
      ...init,
      headers,
      // Member data must never be served from a cache.
      cache: "no-store",
    });
  } catch (err) {
    console.error(`[us-api] ${path} unreachable`, err);
    return { ok: false, error: "unreachable" };
  }

  let payload: unknown = null;
  try {
    payload = await res.json();
  } catch {
    /* empty or non-JSON body — handled by the status check below */
  }

  if (!res.ok) {
    const message =
      (payload as { error?: string } | null)?.error ?? `http_${res.status}`;
    return { ok: false, error: message, status: res.status };
  }

  return { ok: true, data: payload as T };
}

export type SignupPayload = {
  name: string;
  email: string;
  phone?: string | null;
  plan?: string | null;
  notes?: string | null;
};

/** Push a signup to the US site, where it lands in the Tunisia container. */
export function submitSignupToUs(payload: SignupPayload) {
  return partnerFetch<{ ok: true; userId: string; created: boolean }>(
    "/api/v1/signups",
    {
      method: "POST",
      body: JSON.stringify({ ...payload, originSite: "tn" }),
    }
  );
}

/** Exchange member credentials for a scoped, short-lived read token. */
export function openMemberSession(email: string, password: string) {
  return partnerFetch<{ ok: true; token: string; expiresAt: string; name: string }>(
    "/api/v1/partner/session",
    { method: "POST", body: JSON.stringify({ email, password }) }
  );
}

/** Read an endpoint as the member, using a token from openMemberSession. */
export function readAsMember<T>(path: string, token: string) {
  return partnerFetch<T>(path, {
    method: "GET",
    partnerAuth: false,
    headers: { authorization: `Bearer ${token}` },
  });
}
