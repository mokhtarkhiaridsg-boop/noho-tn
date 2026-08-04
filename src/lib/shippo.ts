/**
 * NOHO Tunisia — Shippo client (lean, fetch-based; no SDK dependency).
 * Rates + label purchase against the same Shippo account as nohomailbox.org.
 * All functions no-op gracefully when SHIPPO_API_KEY is missing so the
 * public form can fall back to the WhatsApp path.
 */

const SHIPPO_API_KEY = (process.env.SHIPPO_API_KEY ?? "").trim();
const API = "https://api.goshippo.com";

/** Directional BCT rate used across the site (see shipping/QuoteClient.tsx). */
export const TND_PER_USD = 3.1;

export function isShippoConfigured(): boolean {
  return !!SHIPPO_API_KEY;
}

export type LabelAddress = {
  name: string;
  street1: string;
  city: string;
  state: string;
  zip: string;
  country: string; // ISO-2
  phone?: string;
  email?: string;
};

export type LabelParcel = {
  lengthIn: number;
  widthIn: number;
  heightIn: number;
  weightLb: number;
};

export type RateOption = {
  rateObjectId: string;
  shipmentObjectId: string;
  provider: string;
  servicelevel: string;
  amountUsd: number;
  amountTnd: number;
  estimatedDays: number | null;
  durationTerms: string | null;
};

/** Origin — the NOHO storefront. Suite number is appended per member. */
export const NOHO_ORIGIN = {
  name: "NOHO Mailbox",
  company: "NOHO Mailbox",
  street1: "5062 Lankershim Blvd",
  city: "North Hollywood",
  state: "CA",
  zip: "91601",
  country: "US",
  phone: "+1 818 506 7744",
  email: "hello@nohomailbox.org",
};

async function shippoFetch(path: string, body: unknown): Promise<Record<string, unknown>> {
  const res = await fetch(`${API}${path}`, {
    method: "POST",
    headers: {
      Authorization: `ShippoToken ${SHIPPO_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Shippo ${res.status}: ${t.slice(0, 300)}`);
  }
  return (await res.json()) as Record<string, unknown>;
}

/** Create a shipment and return the live rates, TND-annotated. */
export async function getLabelRates(
  to: LabelAddress,
  parcel: LabelParcel,
  suite?: string
): Promise<RateOption[]> {
  if (!SHIPPO_API_KEY) return [];
  const shipment = await shippoFetch("/shipments/", {
    address_from: {
      ...NOHO_ORIGIN,
      street2: suite ? `Suite ${suite}` : undefined,
    },
    address_to: {
      name: to.name,
      street1: to.street1,
      city: to.city,
      state: to.state,
      zip: to.zip,
      country: to.country,
      phone: to.phone,
      email: to.email,
    },
    parcels: [
      {
        length: String(parcel.lengthIn),
        width: String(parcel.widthIn),
        height: String(parcel.heightIn),
        distance_unit: "in",
        weight: String(parcel.weightLb),
        mass_unit: "lb",
      },
    ],
    async: false,
  });

  const rates = (shipment.rates as Array<Record<string, unknown>> | undefined) ?? [];
  return rates
    .filter((r) => r.object_id && r.amount)
    .map((r) => {
      const usd = parseFloat(String(r.amount));
      const sl = r.servicelevel as Record<string, unknown> | undefined;
      return {
        rateObjectId: String(r.object_id),
        shipmentObjectId: String(shipment.object_id),
        provider: String(r.provider ?? ""),
        servicelevel: String(sl?.name ?? ""),
        amountUsd: usd,
        amountTnd: Math.round(usd * TND_PER_USD),
        estimatedDays: r.estimated_days != null ? Number(r.estimated_days) : null,
        durationTerms: r.duration_terms ? String(r.duration_terms) : null,
      };
    })
    .sort((a, b) => a.amountUsd - b.amountUsd);
}

export type PurchasedLabel = {
  labelUrl: string;
  trackingNumber: string;
  trackingUrl: string;
  transactionId: string;
};

/** Buy the label for a previously quoted rate (admin-only, after TND payment). */
export async function purchaseLabel(rateObjectId: string): Promise<PurchasedLabel> {
  const tx = await shippoFetch("/transactions/", {
    rate: rateObjectId,
    label_file_type: "PDF_4x6",
    async: false,
  });
  if (tx.status !== "SUCCESS") {
    const msgs = (tx.messages as Array<{ text?: string }> | undefined) ?? [];
    throw new Error(`Label purchase failed: ${msgs.map((m) => m.text).join("; ") || tx.status}`);
  }
  return {
    labelUrl: String(tx.label_url ?? ""),
    trackingNumber: String(tx.tracking_number ?? ""),
    trackingUrl: String(tx.tracking_url_provider ?? ""),
    transactionId: String(tx.object_id ?? ""),
  };
}
