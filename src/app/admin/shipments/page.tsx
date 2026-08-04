import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { dbConfigured, getCurrentUser, isCustomer } from "@/lib/auth";
import { markLabelOrder, buyLabel } from "./actions";

export const metadata = { title: "Expéditions · Admin NOHO Tunisia" };
export const dynamic = "force-dynamic";

const INK = "#2D100F";
const TEAL = "#337485";
const GREEN = "#2D7A4A";
const GOLD = "#C8A35A";

const STATUS_UI: Record<string, { label: string; bg: string; fg: string }> = {
  PENDING_PAYMENT: { label: "Attente paiement", bg: "rgba(200,163,90,0.18)", fg: "#8a6a2f" },
  PAID: { label: "Payé — à émettre", bg: "rgba(45,122,74,0.14)", fg: GREEN },
  LABELED: { label: "Label émis", bg: "rgba(51,116,133,0.14)", fg: TEAL },
  CANCELLED: { label: "Annulé", bg: "rgba(45,16,15,0.06)", fg: "rgba(45,16,15,0.5)" },
};

/** Shipping-label orders — /shipping generator lands here. Payment in dinars first, then buy. */
export default async function ShipmentsAdminPage() {
  if (!dbConfigured()) redirect("/");
  const user = await getCurrentUser();
  if (!user) redirect("/admin/login");
  if (isCustomer(user.role)) redirect("/");

  const orders = await prisma.labelOrder.findMany({ orderBy: { createdAt: "desc" }, take: 200 });
  const pending = orders.filter((o) => o.status === "PENDING_PAYMENT").length;

  return (
    <div className="min-h-screen px-5 sm:px-8 py-8" style={{ background: "#FBF3DF" }}>
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Link href="/admin/consultations" className="text-[12px] font-bold u-draw" style={{ color: TEAL }}>← Consultations</Link>
            <h1 className="font-extrabold mt-1" style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "26px", color: INK }}>
              Labels d&apos;expédition
            </h1>
          </div>
          <span className="text-[12px] font-black px-3 py-1.5 rounded-full" style={{ background: pending ? "rgba(200,163,90,0.2)" : "rgba(45,16,15,0.06)", color: pending ? "#8a6a2f" : "rgba(45,16,15,0.55)" }}>
            {pending} en attente de paiement
          </span>
        </div>

        {orders.length === 0 ? (
          <div className="rounded-2xl p-10 text-center" style={{ background: "#fffdf8", border: "1px solid rgba(45,16,15,0.12)" }}>
            <p className="font-bold text-[15px]" style={{ color: INK }}>Pas encore de commandes de labels.</p>
            <p className="text-[13px] mt-1" style={{ color: "rgba(45,16,15,0.6)" }}>Les commandes du générateur /shipping apparaissent ici.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {orders.map((o) => {
              const st = STATUS_UI[o.status] ?? STATUS_UI.PENDING_PAYMENT;
              return (
                <div key={o.id} className="rounded-2xl p-4 sm:p-5" style={{ background: "#fffdf8", border: "1px solid rgba(45,16,15,0.12)", boxShadow: "var(--shadow-sm)" }}>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                    <span className="font-extrabold text-[15px]" style={{ color: INK }}>{o.toName} · {o.toCountry}</span>
                    <span className="text-[9.5px] font-black uppercase tracking-[0.1em] px-2 py-0.5 rounded-full" style={{ background: st.bg, color: st.fg }}>{st.label}</span>
                    <span className="font-extrabold text-[14px] tnum" style={{ fontFamily: "var(--font-baloo), sans-serif", color: GOLD }}>
                      {o.amountTnd} TND <span className="text-[10px] font-bold" style={{ color: "rgba(45,16,15,0.45)" }}>(${o.amountUsd.toFixed(2)})</span>
                    </span>
                    <span className="text-[11px] ml-auto" style={{ color: "rgba(45,16,15,0.45)" }}>
                      {o.createdAt.toLocaleString("fr-FR", { dateStyle: "medium", timeStyle: "short" })}
                    </span>
                  </div>
                  <p className="text-[12.5px] mb-1" style={{ color: "rgba(45,16,15,0.75)" }}>
                    {o.provider} {o.servicelevel} · {o.lengthIn}×{o.widthIn}×{o.heightIn} in · {o.weightLb} lb
                    {o.suite && <> · Suite {o.suite}</>}
                  </p>
                  <p className="text-[12.5px] mb-3" style={{ color: "rgba(45,16,15,0.65)" }}>
                    <a href={`mailto:${o.email}`} className="u-draw font-bold" style={{ color: TEAL }}>{o.email}</a>
                    {o.phone && <> · {o.phone}</>} → {o.toStreet1}, {o.toCity} {o.toState} {o.toZip}
                  </p>
                  {o.status === "LABELED" && o.labelUrl && (
                    <p className="text-[12.5px] mb-3 font-bold">
                      <a href={o.labelUrl} target="_blank" rel="noopener noreferrer" className="u-draw" style={{ color: TEAL }}>Label PDF</a>
                      {o.trackingNumber && <span style={{ color: "rgba(45,16,15,0.6)" }}> · Tracking {o.trackingNumber}</span>}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {o.status === "PENDING_PAYMENT" && (
                      <>
                        <form action={markLabelOrder.bind(null, o.id, "PAID")}>
                          <button className="text-[11.5px] font-bold px-3 py-1.5 rounded-lg" style={{ background: GREEN, color: "#fff" }}>Paiement dinars reçu</button>
                        </form>
                        <form action={markLabelOrder.bind(null, o.id, "CANCELLED")}>
                          <button className="text-[11.5px] font-bold px-3 py-1.5 rounded-lg" style={{ background: "rgba(45,16,15,0.06)", color: "rgba(45,16,15,0.6)", border: "1px solid rgba(45,16,15,0.15)" }}>Annuler</button>
                        </form>
                      </>
                    )}
                    {o.status === "PAID" && (
                      <form
                        action={async () => {
                          "use server";
                          await buyLabel(o.id);
                        }}
                      >
                        <button className="text-[11.5px] font-bold px-3 py-1.5 rounded-lg" style={{ background: TEAL, color: "#fff" }}>
                          Émettre le label (Shippo)
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
