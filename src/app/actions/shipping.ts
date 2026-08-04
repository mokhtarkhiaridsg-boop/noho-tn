"use server";

import { prisma } from "@/lib/prisma";
import { dbConfigured } from "@/lib/auth";
import { getLabelRates, isShippoConfigured, type RateOption } from "@/lib/shippo";
import { sendInternalNotification } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type RatesState =
  | { rates: RateOption[]; error?: never }
  | { rates?: never; error: string }
  | Record<string, never>;

type Dims = { lengthIn: number; widthIn: number; heightIn: number; weightLb: number };

function readDims(fd: FormData): Dims | null {
  const n = (k: string) => parseFloat(String(fd.get(k) ?? ""));
  const d = { lengthIn: n("lengthIn"), widthIn: n("widthIn"), heightIn: n("heightIn"), weightLb: n("weightLb") };
  if (Object.values(d).some((v) => !isFinite(v) || v <= 0 || v > 999)) return null;
  return d;
}

export async function fetchRates(_prev: RatesState, fd: FormData): Promise<RatesState> {
  if (!isShippoConfigured()) {
    return { error: "Devis live momentanément indisponible — écris-nous sur WhatsApp au +1 818 506 7744." };
  }
  const dims = readDims(fd);
  const to = {
    name: String(fd.get("toName") ?? "").trim().slice(0, 120),
    street1: String(fd.get("toStreet1") ?? "").trim().slice(0, 200),
    city: String(fd.get("toCity") ?? "").trim().slice(0, 100),
    state: String(fd.get("toState") ?? "").trim().slice(0, 60),
    zip: String(fd.get("toZip") ?? "").trim().slice(0, 20),
    country: String(fd.get("toCountry") ?? "").trim().toUpperCase().slice(0, 2),
  };
  if (!dims) return { error: "Vérifie les dimensions et le poids du colis." };
  if (!to.name || !to.street1 || !to.city || !to.country) {
    return { error: "Complète l'adresse de destination." };
  }
  try {
    const rates = await getLabelRates(to, dims, String(fd.get("suite") ?? "").trim().slice(0, 12));
    if (!rates.length) return { error: "Aucun tarif disponible pour cette destination — écris-nous sur WhatsApp." };
    return { rates: rates.slice(0, 8) };
  } catch (e) {
    console.error("[shippo] rates failed", e);
    return { error: "Impossible de récupérer les tarifs — réessaie ou écris-nous sur WhatsApp." };
  }
}

export type OrderState = { ok?: boolean; orderId?: string; error?: string };

export async function createLabelOrder(_prev: OrderState, fd: FormData): Promise<OrderState> {
  if (!dbConfigured()) {
    return { error: "Commande momentanément indisponible — écris-nous sur WhatsApp au +1 818 506 7744." };
  }
  const email = String(fd.get("email") ?? "").trim().slice(0, 200);
  if (!EMAIL_RE.test(email)) return { error: "Entre un email valide." };
  const dims = readDims(fd);
  if (!dims) return { error: "Dimensions invalides." };

  const amountUsd = parseFloat(String(fd.get("amountUsd") ?? ""));
  const amountTnd = parseInt(String(fd.get("amountTnd") ?? ""), 10);
  const data = {
    email,
    phone: String(fd.get("phone") ?? "").trim().slice(0, 40),
    suite: String(fd.get("suite") ?? "").trim().slice(0, 12),
    toName: String(fd.get("toName") ?? "").trim().slice(0, 120),
    toStreet1: String(fd.get("toStreet1") ?? "").trim().slice(0, 200),
    toCity: String(fd.get("toCity") ?? "").trim().slice(0, 100),
    toState: String(fd.get("toState") ?? "").trim().slice(0, 60),
    toZip: String(fd.get("toZip") ?? "").trim().slice(0, 20),
    toCountry: String(fd.get("toCountry") ?? "").trim().toUpperCase().slice(0, 2),
    ...dims,
    provider: String(fd.get("provider") ?? "").slice(0, 60),
    servicelevel: String(fd.get("servicelevel") ?? "").slice(0, 120),
    amountUsd: isFinite(amountUsd) ? amountUsd : 0,
    amountTnd: isFinite(amountTnd) ? amountTnd : 0,
    rateObjectId: String(fd.get("rateObjectId") ?? "").slice(0, 80),
    shipmentObjectId: String(fd.get("shipmentObjectId") ?? "").slice(0, 80),
    locale: String(fd.get("locale") ?? "fr").slice(0, 8),
  };
  if (!data.rateObjectId || !data.toName || !data.toStreet1) return { error: "Sélectionne d'abord un tarif." };

  let orderId = "";
  try {
    const row = await prisma.labelOrder.create({ data });
    orderId = row.id;
  } catch (e) {
    console.error("[shippo] order create failed", e);
    return { error: "Petit souci technique — réessaie, ou écris-nous sur WhatsApp." };
  }

  await sendInternalNotification({
    subject: `Label ${data.provider} ${data.amountTnd} TND — ${data.toName} (${data.toCountry})`,
    text: [
      `Nouvelle commande de label (nohomailboxtunis.com/shipping)`,
      ``,
      `Client  : ${data.email} ${data.phone ? `· ${data.phone}` : ""} ${data.suite ? `· Suite ${data.suite}` : ""}`,
      `Vers    : ${data.toName}, ${data.toStreet1}, ${data.toCity} ${data.toState} ${data.toZip}, ${data.toCountry}`,
      `Colis   : ${data.lengthIn}×${data.widthIn}×${data.heightIn} in · ${data.weightLb} lb`,
      `Tarif   : ${data.provider} ${data.servicelevel} — $${data.amountUsd} ≈ ${data.amountTnd} TND`,
      `Statut  : en attente de paiement en dinars`,
      ``,
      `Admin : https://nohomailboxtunis.com/admin/shipments`,
    ].join("\n"),
    html: `<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#2D100F;">
      <h2 style="margin:0 0 4px;font-size:18px;">Nouvelle commande de label</h2>
      <p style="margin:0 0 16px;color:#7A6050;font-size:13px;">En attente de paiement en dinars — ${data.amountTnd} TND (${data.provider} ${data.servicelevel}, $${data.amountUsd})</p>
      <p style="font-size:14px;line-height:1.6;margin:0 0 16px;">
        <strong>${data.email}</strong>${data.suite ? ` · Suite ${data.suite}` : ""}${data.phone ? ` · ${data.phone}` : ""}<br/>
        → ${data.toName}, ${data.toStreet1}, ${data.toCity} ${data.toState} ${data.toZip}, ${data.toCountry}<br/>
        Colis ${data.lengthIn}×${data.widthIn}×${data.heightIn} in · ${data.weightLb} lb
      </p>
      <a href="https://nohomailboxtunis.com/admin/shipments" style="background:#337485;color:#fff;text-decoration:none;padding:10px 18px;border-radius:10px;font-size:14px;font-weight:700;">Voir dans l&apos;admin</a>
    </div>`,
  });

  return { ok: true, orderId };
}
