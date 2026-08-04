/**
 * NOHO Tunisia — internal email notifications via Postmark.
 * Mirrors noho-mailbox's transport choice (Postmark; the old Resend key is
 * dead). Raw HTTPS API, no SDK. Gracefully no-ops when POSTMARK_SERVER_TOKEN
 * is missing so dev/preview never crash on a missing secret.
 */

// Env values can carry stray whitespace/quotes when pasted into dashboards —
// strip control chars so the From header can never be invalidated.
function cleanEnv(v: string | undefined): string {
  return (v ?? "").replace(/[\r\n\t"]/g, "").trim();
}

const POSTMARK_TOKEN = cleanEnv(process.env.POSTMARK_SERVER_TOKEN);
const FROM =
  cleanEnv(process.env.EMAIL_FROM) || "NOHO Tunisia <mokhtar.khiari@nohomailbox.org>";
const NOTIFY_TO =
  cleanEnv(process.env.NOTIFY_EMAIL) || "mokhtar.khiari.dsg@gmail.com";

export async function sendInternalNotification(opts: {
  subject: string;
  html: string;
  text: string;
}): Promise<{ ok: boolean; error?: string }> {
  if (!POSTMARK_TOKEN) {
    console.warn("[email] POSTMARK_SERVER_TOKEN missing — notification skipped:", opts.subject);
    return { ok: false, error: "no token" };
  }
  try {
    const res = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": POSTMARK_TOKEN,
      },
      body: JSON.stringify({
        From: FROM,
        To: NOTIFY_TO,
        Subject: opts.subject,
        HtmlBody: opts.html,
        TextBody: opts.text,
        MessageStream: "outbound",
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error("[email] Postmark error", res.status, body.slice(0, 300));
      return { ok: false, error: `postmark ${res.status}` };
    }
    return { ok: true };
  } catch (e) {
    console.error("[email] send failed", e);
    return { ok: false, error: "network" };
  }
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** "New consultation request" — fires when the /business form is submitted. */
export function consultationNotification(lead: {
  firstName: string;
  lastName: string;
  email: string;
  reason: string;
  locale: string;
}) {
  const name = `${lead.firstName} ${lead.lastName}`;
  const subject = `Consultation NOHO TN — ${name}`;
  const text = [
    `Nouvelle demande de consultation (nohomailboxtunis.com/business)`,
    ``,
    `Nom     : ${name}`,
    `Email   : ${lead.email}`,
    `Langue  : ${lead.locale}`,
    `Raison  : ${lead.reason}`,
    ``,
    `Admin : https://nohomailboxtunis.com/admin/consultations`,
  ].join("\n");
  const html = `
  <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:520px;margin:0 auto;padding:24px;color:#2D100F;">
    <h2 style="margin:0 0 4px;font-size:18px;">Nouvelle demande de consultation</h2>
    <p style="margin:0 0 16px;color:#7A6050;font-size:13px;">nohomailboxtunis.com/business</p>
    <table style="border-collapse:collapse;font-size:14px;width:100%;">
      <tr><td style="padding:6px 12px 6px 0;color:#7A6050;">Nom</td><td style="padding:6px 0;font-weight:600;">${esc(name)}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#7A6050;">Email</td><td style="padding:6px 0;"><a href="mailto:${esc(lead.email)}" style="color:#337485;">${esc(lead.email)}</a></td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#7A6050;">Langue</td><td style="padding:6px 0;">${esc(lead.locale)}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#7A6050;vertical-align:top;">Raison</td><td style="padding:6px 0;">${esc(lead.reason)}</td></tr>
    </table>
    <p style="margin:20px 0 0;">
      <a href="https://nohomailboxtunis.com/admin/consultations" style="background:#337485;color:#fff;text-decoration:none;padding:10px 18px;border-radius:10px;font-size:14px;font-weight:700;">Voir dans l&apos;admin</a>
    </p>
  </div>`;
  return { subject, html, text };
}
