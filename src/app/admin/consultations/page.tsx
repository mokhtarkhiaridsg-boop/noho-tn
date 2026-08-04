import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { dbConfigured, getCurrentUser, isCustomer } from "@/lib/auth";
import { setConsultationStatus } from "./actions";

export const metadata = { title: "Consultations · Admin NOHO Tunisia" };
export const dynamic = "force-dynamic";

const INK = "#2D100F";
const TEAL = "#337485";
const GREEN = "#2D7A4A";

/** Business consultation leads — the /business form lands here. */
export default async function ConsultationsPage() {
  if (!dbConfigured()) redirect("/");
  const user = await getCurrentUser();
  if (!user) redirect("/admin/login");
  if (isCustomer(user.role)) redirect("/");

  const requests = await prisma.consultationRequest.findMany({
    orderBy: { createdAt: "desc" },
    take: 200,
  });
  const fresh = requests.filter((r) => r.status === "NEW").length;

  return (
    <div className="min-h-screen px-5 sm:px-8 py-8" style={{ background: "#FBF3DF" }}>
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Link href="/admin/shipments" className="text-[12px] font-bold u-draw" style={{ color: TEAL }}>
              Labels d&apos;expédition →
            </Link>
            <h1 className="font-extrabold mt-1" style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "26px", color: INK }}>
              Consultations business
            </h1>
          </div>
          <span
            className="text-[12px] font-black px-3 py-1.5 rounded-full"
            style={{ background: fresh ? "rgba(45,122,74,0.14)" : "rgba(45,16,15,0.06)", color: fresh ? GREEN : "rgba(45,16,15,0.55)" }}
          >
            {fresh} nouvelle{fresh === 1 ? "" : "s"}
          </span>
        </div>

        {requests.length === 0 ? (
          <div
            className="rounded-2xl p-10 text-center"
            style={{ background: "#fffdf8", border: "1px solid rgba(45,16,15,0.12)" }}
          >
            <p className="font-bold text-[15px]" style={{ color: INK }}>Pas encore de demandes.</p>
            <p className="text-[13px] mt-1" style={{ color: "rgba(45,16,15,0.6)" }}>
              Les leads du formulaire /business apparaissent ici.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {requests.map((r) => (
              <div
                key={r.id}
                className="rounded-2xl p-4 sm:p-5"
                style={{
                  background: "#fffdf8",
                  border: `1px solid ${r.status === "NEW" ? "rgba(45,122,74,0.4)" : "rgba(45,16,15,0.12)"}`,
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                  <span className="font-extrabold text-[15px]" style={{ color: INK }}>
                    {r.firstName} {r.lastName}
                  </span>
                  <a href={`mailto:${r.email}`} className="text-[12.5px] font-bold u-draw" style={{ color: TEAL }}>
                    {r.email}
                  </a>
                  <span
                    className="text-[9.5px] font-black uppercase tracking-[0.1em] px-2 py-0.5 rounded-full"
                    style={{
                      background: r.status === "NEW" ? "rgba(45,122,74,0.14)" : "rgba(45,16,15,0.06)",
                      color: r.status === "NEW" ? GREEN : "rgba(45,16,15,0.5)",
                    }}
                  >
                    {r.status === "NEW" ? "Nouveau" : "Traité"}
                  </span>
                  <span className="text-[11px] ml-auto" style={{ color: "rgba(45,16,15,0.45)" }}>
                    {r.createdAt.toLocaleString("fr-FR", { dateStyle: "medium", timeStyle: "short" })} · {r.locale}
                  </span>
                </div>
                <p className="text-[13px] mb-3" style={{ color: "rgba(45,16,15,0.75)", lineHeight: 1.5 }}>
                  {r.reason}
                </p>
                <form
                  action={setConsultationStatus.bind(null, r.id, r.status === "NEW" ? "HANDLED" : "NEW")}
                >
                  <button
                    type="submit"
                    className="text-[11.5px] font-bold px-3 py-1.5 rounded-lg"
                    style={{
                      background: r.status === "NEW" ? TEAL : "rgba(45,16,15,0.06)",
                      color: r.status === "NEW" ? "#fff" : "rgba(45,16,15,0.6)",
                      border: "1px solid rgba(45,16,15,0.15)",
                    }}
                  >
                    {r.status === "NEW" ? "Marquer traité" : "Remettre en nouveau"}
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
