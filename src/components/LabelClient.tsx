"use client";

/**
 * Shippo label generator — live rates from the storefront, paid in dinars.
 * Two steps: (1) destination + parcel → live rates; (2) pick a rate → order.
 * No card entry ever: payment is settled offline (wallet / Cabinet Khiari).
 */
import { useActionState, useState } from "react";
import { fetchRates, createLabelOrder, type RatesState, type OrderState } from "@/app/actions/shipping";
import type { RateOption } from "@/lib/shippo";

const INK = "#2D100F";
const TEAL = "#337485";
const GOLD = "#C8A35A";
const GREEN = "#2D7A4A";

export type LabelClientLabels = {
  intro: string;
  toName: string; street: string; city: string; state: string; zip: string; country: string;
  suite: string; suiteHint: string;
  length: string; width: string; height: string; weight: string;
  getRates: string; gettingRates: string;
  pickRate: string; days: string;
  email: string; phone: string;
  order: string; ordering: string;
  successTitle: string; successBody: string;
  payNote: string;
  back: string;
};

export const FR_LABELS: LabelClientLabels = {
  intro: "Destination + colis → tarifs live des transporteurs. Tu choisis, on émet le label après paiement en dinars.",
  toName: "Destinataire", street: "Adresse", city: "Ville", state: "Région/État", zip: "Code postal", country: "Pays (code — TN, FR, US…)",
  suite: "Ta suite NOHO (optionnel)", suiteHint: "ex. 122 — si le colis part de ta boîte",
  length: "Longueur (in)", width: "Largeur (in)", height: "Hauteur (in)", weight: "Poids (lb)",
  getRates: "Voir les tarifs live", gettingRates: "Interrogation des transporteurs…",
  pickRate: "Choisis ton tarif", days: "jours",
  email: "Ton email", phone: "Téléphone (optionnel)",
  order: "Commander ce label", ordering: "Envoi…",
  successTitle: "Commande reçue.",
  successBody: "On te contacte pour le paiement en dinars, puis ton label PDF arrive par email.",
  payNote: "Paiement en dinars — wallet ou Cabinet Khiari, Tunis. Aucun paiement par carte sur le site.",
  back: "Modifier le colis",
};

const inputCls = "w-full rounded-xl px-3 py-2 text-[13.5px] outline-none focus:ring-2 focus:ring-[#337485]/40";
const inputStyle = { background: "#fffdf8", border: "1.5px solid rgba(45,16,15,0.18)", color: INK } as const;

function Field({ id, label, ...rest }: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="block text-[10px] font-black uppercase tracking-[0.11em] mb-1" style={{ color: "rgba(45,16,15,0.6)" }}>
        {label}
      </label>
      <input id={id} className={inputCls} style={inputStyle} {...rest} />
    </div>
  );
}

export default function LabelClient({ locale = "fr", L = FR_LABELS }: { locale?: string; L?: LabelClientLabels }) {
  const [ratesState, ratesAction, ratesPending] = useActionState<RatesState, FormData>(fetchRates, {});
  const [orderState, orderAction, orderPending] = useActionState<OrderState, FormData>(createLabelOrder, {});
  const [picked, setPicked] = useState<RateOption | null>(null);
  const [shipmentForm, setShipmentForm] = useState<FormData | null>(null);

  const rates = "rates" in ratesState ? ratesState.rates : undefined;

  if (orderState.ok) {
    return (
      <div className="text-center py-8 px-4">
        <span className="mx-auto mb-4 grid place-items-center h-14 w-14 rounded-full" style={{ background: "rgba(45,122,74,0.12)", border: `1.5px solid ${GREEN}55` }}>
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 12.5 L9.5 18 L20 6.5" />
          </svg>
        </span>
        <p className="font-extrabold text-[20px] mb-1" style={{ fontFamily: "var(--font-baloo), sans-serif", color: INK }}>{L.successTitle}</p>
        <p className="text-[13.5px] max-w-sm mx-auto" style={{ color: "rgba(45,16,15,0.7)" }}>{L.successBody}</p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-[12.5px] mb-4" style={{ color: "rgba(45,16,15,0.7)" }}>{L.intro}</p>

      {/* Step 1 — destination + parcel */}
      <form
        action={(fd) => {
          setPicked(null);
          setShipmentForm(fd);
          ratesAction(fd);
        }}
        className="space-y-3"
      >
        <div className="grid grid-cols-2 gap-3">
          <Field id="lb-name" label={L.toName} name="toName" required maxLength={120} />
          <Field id="lb-street" label={L.street} name="toStreet1" required maxLength={200} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Field id="lb-city" label={L.city} name="toCity" required maxLength={100} />
          <Field id="lb-state" label={L.state} name="toState" maxLength={60} />
          <Field id="lb-zip" label={L.zip} name="toZip" maxLength={20} />
          <Field id="lb-country" label={L.country} name="toCountry" required maxLength={2} placeholder="TN" style={{ ...inputStyle, textTransform: "uppercase" }} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <Field id="lb-l" label={L.length} name="lengthIn" type="number" step="0.1" min="0.1" required />
          <Field id="lb-w" label={L.width} name="widthIn" type="number" step="0.1" min="0.1" required />
          <Field id="lb-h" label={L.height} name="heightIn" type="number" step="0.1" min="0.1" required />
          <Field id="lb-wt" label={L.weight} name="weightLb" type="number" step="0.1" min="0.1" required />
          <div>
            <Field id="lb-suite" label={L.suite} name="suite" maxLength={12} placeholder="122" />
            <p className="text-[9.5px] mt-0.5" style={{ color: "rgba(45,16,15,0.45)" }}>{L.suiteHint}</p>
          </div>
        </div>
        <button
          type="submit"
          disabled={ratesPending}
          className="btn-west inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-xl text-[13px] disabled:opacity-60"
          style={{ background: TEAL, color: "#fff", border: "1.5px solid rgba(45,16,15,0.8)" }}
        >
          {ratesPending ? L.gettingRates : L.getRates}
        </button>
        {"error" in ratesState && ratesState.error && (
          <p className="text-[12.5px] font-bold" style={{ color: "#C73E2D" }} role="alert">{ratesState.error}</p>
        )}
      </form>

      {/* Step 2 — pick a live rate, order */}
      {rates && rates.length > 0 && (
        <div className="mt-5">
          <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-2" style={{ color: TEAL }}>{L.pickRate}</p>
          <div className="space-y-2 mb-4">
            {rates.map((r) => (
              <button
                key={r.rateObjectId}
                type="button"
                onClick={() => setPicked(r)}
                className="w-full flex items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left transition-colors"
                style={{
                  background: picked?.rateObjectId === r.rateObjectId ? "rgba(51,116,133,0.10)" : "#fffdf8",
                  border: `1.5px solid ${picked?.rateObjectId === r.rateObjectId ? TEAL : "rgba(45,16,15,0.15)"}`,
                }}
              >
                <span className="min-w-0">
                  <span className="block font-bold text-[13px] truncate" style={{ color: INK }}>
                    {r.provider} · {r.servicelevel}
                  </span>
                  <span className="block text-[11px]" style={{ color: "rgba(45,16,15,0.55)" }}>
                    {r.estimatedDays ? `~${r.estimatedDays} ${L.days}` : r.durationTerms ?? ""}
                  </span>
                </span>
                <span className="text-right shrink-0">
                  <span className="block font-extrabold text-[15px] tnum" style={{ fontFamily: "var(--font-baloo), sans-serif", color: TEAL }}>
                    {r.amountTnd} TND
                  </span>
                  <span className="block text-[10px] tnum" style={{ color: "rgba(45,16,15,0.45)" }}>${r.amountUsd.toFixed(2)}</span>
                </span>
              </button>
            ))}
          </div>

          {picked && (
            <form
              action={(fd) => {
                if (shipmentForm) {
                  for (const [k, v] of shipmentForm.entries()) if (!fd.has(k)) fd.append(k, v);
                }
                orderAction(fd);
              }}
              className="space-y-3 rounded-2xl p-4"
              style={{ background: "rgba(200,163,90,0.10)", border: `1px solid ${GOLD}55` }}
            >
              <input type="hidden" name="locale" value={locale} />
              <input type="hidden" name="rateObjectId" value={picked.rateObjectId} />
              <input type="hidden" name="shipmentObjectId" value={picked.shipmentObjectId} />
              <input type="hidden" name="provider" value={picked.provider} />
              <input type="hidden" name="servicelevel" value={picked.servicelevel} />
              <input type="hidden" name="amountUsd" value={picked.amountUsd} />
              <input type="hidden" name="amountTnd" value={picked.amountTnd} />
              <div className="grid grid-cols-2 gap-3">
                <Field id="lb-email" label={L.email} name="email" type="email" required maxLength={200} />
                <Field id="lb-phone" label={L.phone} name="phone" maxLength={40} />
              </div>
              <p className="text-[11px] font-bold" style={{ color: "rgba(45,16,15,0.65)" }}>{L.payNote}</p>
              <button
                type="submit"
                disabled={orderPending}
                className="btn-west inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-xl text-[13px] disabled:opacity-60"
                style={{ background: GREEN, color: "#fff", border: "1.5px solid rgba(45,16,15,0.8)" }}
              >
                {orderPending ? L.ordering : `${L.order} — ${picked.amountTnd} TND`}
              </button>
              {orderState.error && (
                <p className="text-[12.5px] font-bold" style={{ color: "#C73E2D" }} role="alert">{orderState.error}</p>
              )}
            </form>
          )}
        </div>
      )}
    </div>
  );
}
