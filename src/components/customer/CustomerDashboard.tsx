import Logo from "@/components/Logo";
import { T } from "@/components/ui/tokens";
import { Card } from "@/components/ui/Kit";
import { IconLogout } from "@/components/ui/icons";
import { memberLogoutAction } from "@/app/actions/member";
import { waLink } from "@/lib/whatsapp";
import type { MailRow, MemberProfile } from "@/lib/member-session";

function InlineEmpty({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl px-5 py-8 text-center" style={{ background: T.ivory, border: `1px dashed ${T.border}` }}>
      <p className="font-bold text-[14px]" style={{ color: T.ink }}>{title}</p>
      <p className="text-[12.5px] mt-1 leading-snug" style={{ color: T.inkFaint }}>{desc}</p>
    </div>
  );
}

function ItemList({ rows, empty }: { rows: MailRow[]; empty: React.ReactNode }) {
  if (rows.length === 0) return <>{empty}</>;
  return (
    <ul className="flex flex-col gap-2">
      {rows.map((r) => (
        <li
          key={r.id}
          className="rounded-xl px-3 py-2.5 flex items-center gap-3"
          style={{ background: T.ivory, border: `1px solid ${T.border}` }}
        >
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-bold truncate" style={{ color: T.ink }}>
              {r.from?.trim() || r.type || "Courrier"}
            </p>
            <p className="text-[11.5px] truncate" style={{ color: T.inkFaint }}>
              {[r.date, r.carrier, r.trackingNumber].filter(Boolean).join(" · ")}
            </p>
          </div>
          {r.status && (
            <span
              className="shrink-0 text-[10.5px] font-black px-2 py-0.5 rounded-full"
              style={{ background: T.tealSoft, color: T.tealDeep }}
            >
              {r.status}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

/*
 * The member's space. Every value here is read live from nohomailbox.org —
 * this site stores nothing about a customer (owner, 2026-08). French
 * throughout, which is the rule for anything transactional.
 */
export default function CustomerDashboard({
  profile,
  mail,
  packages,
}: {
  profile: MemberProfile;
  mail: MailRow[];
  packages: MailRow[];
}) {
  const first = profile.name.split(" ")[0] || profile.name;
  const suite = (profile.suiteNumber ?? "").trim();

  return (
    <div className="min-h-screen w-full" style={{ background: T.surfaceAlt, color: T.ink, fontFamily: "var(--font-body), sans-serif" }}>
      <header className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 h-14" style={{ background: "rgba(248,242,234,0.85)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${T.border}` }}>
        <div className="flex items-center gap-2.5">
          <Logo className="h-8 w-auto" />
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] px-2 py-0.5 rounded-full" style={{ background: T.teal, color: "#fff" }}>Espace client</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="hidden sm:flex items-center gap-2 pl-1 pr-3 py-1 rounded-full" style={{ background: T.surface, border: `1px solid ${T.border}` }}>
            <span className="grid place-items-center w-7 h-7 rounded-full text-[12px] font-extrabold" style={{ background: T.tealSoft, color: T.tealDeep }}>{first.charAt(0).toUpperCase()}</span>
            <span className="text-[12.5px] font-semibold">{first}</span>
          </span>
          <form action={memberLogoutAction}>
            <button type="submit" aria-label="Déconnexion" className="grid place-items-center w-9 h-9 rounded-full cursor-pointer" style={{ background: T.surface, border: `1px solid ${T.border}`, color: T.inkFaint }}>
              <IconLogout className="w-4 h-4" />
            </button>
          </form>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] mb-1" style={{ color: T.inkFaint }}>Ton espace NOHO</p>
        <h1 className="font-extrabold mb-6" style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "30px", letterSpacing: "-0.02em", color: T.ink }}>Bonjour, {first}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Card>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2" style={{ color: T.teal }}>Mon adresse US</p>
            <p className="font-extrabold text-[16px]" style={{ fontFamily: "var(--font-baloo), sans-serif", color: T.ink }}>5062 Lankershim Blvd</p>
            <p className="text-[13.5px] mt-0.5" style={{ color: T.inkFaint }}>
              {suite ? (
                <>Suite <b style={{ color: T.ink }}>#{suite}</b> · North Hollywood, CA 91601, USA</>
              ) : (
                <>Suite <b style={{ color: T.ink }}>en cours d&apos;attribution</b> · North Hollywood, CA 91601, USA</>
              )}
            </p>
          </Card>
          <Card>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2" style={{ color: T.teal }}>Mon forfait</p>
            <p className="font-extrabold text-[16px]" style={{ fontFamily: "var(--font-baloo), sans-serif", color: T.ink }}>
              {profile.plan?.trim() || "À définir"}
            </p>
            <p className="text-[13.5px] mt-0.5" style={{ color: T.inkFaint }}>
              {profile.planDueDate
                ? `Prochaine échéance : ${new Date(profile.planDueDate).toLocaleDateString("fr-FR")}`
                : "Activé après vérification de ta CIN."}
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <Card>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: T.inkFaint }}>Mon courrier</p>
            <ItemList
              rows={mail}
              empty={<InlineEmpty title="Aucun courrier" desc="Ton courrier scanné apparaîtra ici, notifié en temps réel." />}
            />
          </Card>
          <Card>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: T.inkFaint }}>Mes colis</p>
            <ItemList
              rows={packages}
              empty={<InlineEmpty title="Aucun colis" desc="Tes colis reçus (Amazon, Shein, eBay…) s'afficheront ici." />}
            />
          </Card>
        </div>

        <a href={waLink("general")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-[14px] px-6 py-3.5 rounded-2xl" style={{ background: "#2D7A4A", color: "#fff" }}>
          WhatsApp
        </a>
      </main>
    </div>
  );
}
