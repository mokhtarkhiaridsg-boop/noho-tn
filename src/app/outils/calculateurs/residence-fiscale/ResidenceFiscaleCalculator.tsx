"use client";

import { useMemo, useState } from "react";

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";
const GOLD = "#f8c84a";

type Country = "TN" | "FR" | "US";

type Verdict = {
  country: Country;
  label: string;
  resident: boolean;
  reason: string;
};

export default function ResidenceFiscaleCalculator() {
  const [daysTn, setDaysTn] = useState<number>(180);
  const [daysFr, setDaysFr] = useState<number>(120);
  const [daysUs, setDaysUs] = useState<number>(60);
  const [daysUsPrev1, setDaysUsPrev1] = useState<number>(40);
  const [daysUsPrev2, setDaysUsPrev2] = useState<number>(0);
  const [centerOfInterests, setCenterOfInterests] = useState<Country>("TN");
  const [permanentHome, setPermanentHome] = useState<Country>("TN");

  const verdicts: Verdict[] = useMemo(() => {
    // Tunisia (Code IRPP art 2)
    const tnByDays = daysTn >= 183;
    const tnByCenter = centerOfInterests === "TN";
    const tnByHome = permanentHome === "TN";
    const tnResident = tnByDays || tnByCenter || tnByHome;
    const tnReason = [
      tnByDays && `${daysTn} jours en TN ≥ 183`,
      tnByCenter && "centre des intérêts économiques en TN",
      tnByHome && "domicile permanent en TN",
    ].filter(Boolean).join(", ") || `${daysTn} jours seulement, et ni centre ni domicile en TN`;

    // France (CGI art 4 B)
    const frByDays = daysFr >= 183;
    const frByCenter = centerOfInterests === "FR";
    const frByHome = permanentHome === "FR";
    const frResident = frByDays || frByCenter || frByHome;
    const frReason = [
      frByDays && `${daysFr} jours en FR ≥ 183`,
      frByCenter && "centre des intérêts économiques en FR",
      frByHome && "foyer d'habitation en FR",
    ].filter(Boolean).join(", ") || `${daysFr} jours, ni centre ni foyer en FR`;

    // US (Substantial Presence Test)
    const usWeighted = daysUs + daysUsPrev1 / 3 + daysUsPrev2 / 6;
    const usByDays31 = daysUs >= 31;
    const usResident = usByDays31 && usWeighted >= 183;
    const usReason = !usByDays31
      ? `${daysUs} jours < 31 dans l'année courante → fail SPT`
      : usWeighted >= 183
      ? `formule pondérée ${usWeighted.toFixed(1)} ≥ 183`
      : `formule pondérée ${usWeighted.toFixed(1)} < 183`;

    return [
      { country: "TN", label: "Tunisie", resident: tnResident, reason: tnReason },
      { country: "FR", label: "France", resident: frResident, reason: frReason },
      { country: "US", label: "États-Unis", resident: usResident, reason: usReason },
    ];
  }, [daysTn, daysFr, daysUs, daysUsPrev1, daysUsPrev2, centerOfInterests, permanentHome]);

  const residencies = verdicts.filter((v) => v.resident);
  const multipleResidency = residencies.length >= 2;
  const noResidency = residencies.length === 0;

  return (
    <div className="space-y-7">
      {/* Inputs - days */}
      <div className="p-6 rounded-2xl" style={{ background: CREAM }}>
        <h3 className="text-[12px] font-black uppercase tracking-[0.14em] mb-4" style={{ color: INK }}>
          Jours de présence dans l&apos;année en cours
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <NumField label="Tunisie" value={daysTn} set={setDaysTn} max={365} />
          <NumField label="France" value={daysFr} set={setDaysFr} max={365} />
          <NumField label="États-Unis" value={daysUs} set={setDaysUs} max={365} />
        </div>
      </div>

      <div className="p-6 rounded-2xl" style={{ background: "#FAFAF8" }}>
        <h3 className="text-[12px] font-black uppercase tracking-[0.14em] mb-4" style={{ color: INK }}>
          Jours US des 2 années précédentes (pour Substantial Presence Test)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <NumField label="Année N-1 (jours US)" value={daysUsPrev1} set={setDaysUsPrev1} max={365} />
          <NumField label="Année N-2 (jours US)" value={daysUsPrev2} set={setDaysUsPrev2} max={365} />
        </div>
      </div>

      {/* Inputs - center + home */}
      <div className="p-6 rounded-2xl" style={{ background: CREAM }}>
        <h3 className="text-[12px] font-black uppercase tracking-[0.14em] mb-4" style={{ color: INK }}>
          Centre des intérêts et domicile permanent
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CountryPicker label="Centre des intérêts économiques" value={centerOfInterests} set={setCenterOfInterests} />
          <CountryPicker label="Domicile permanent / foyer" value={permanentHome} set={setPermanentHome} />
        </div>
      </div>

      {/* Verdicts */}
      <div className="space-y-3">
        {verdicts.map((v) => (
          <div
            key={v.country}
            className="p-5 rounded-2xl flex items-start justify-between gap-4 flex-wrap"
            style={{
              background: v.resident ? GOLD : "#FAFAF8",
              borderLeft: `4px solid ${v.resident ? INK : "rgba(45,16,15,0.15)"}`,
            }}
          >
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.14em]" style={{ color: v.resident ? INK : "rgba(45,16,15,0.55)" }}>
                {v.label}
              </p>
              <p className="font-extrabold text-[18px]" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                {v.resident ? "Probablement résident fiscal" : "Probablement non-résident"}
              </p>
              <p className="text-[12.5px] mt-1" style={{ color: "rgba(45,16,15,0.75)" }}>{v.reason}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cross-country */}
      {multipleResidency && (
        <div className="p-6 rounded-2xl" style={{ background: "#FFF4E5", borderLeft: `4px solid ${RED}` }}>
          <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-2" style={{ color: RED }}>
            Conflit de résidence
          </p>
          <p className="text-[14px] leading-relaxed" style={{ color: INK }}>
            Tu es probablement résident fiscal dans <strong>{residencies.map(r => r.label).join(" + ")}</strong>{" "}
            simultanément. Les traités bilatéraux entre ces pays
            s&apos;appliquent et tu dois activer les <em>tiebreakers</em>{" "}
            (foyer permanent, centre des intérêts vitaux, séjour habituel,
            nationalité). Consulte un fiscaliste avant ta déclaration —
            les erreurs coûtent typiquement 30-60% en pénalités.
          </p>
        </div>
      )}

      {noResidency && (
        <div className="p-6 rounded-2xl" style={{ background: "#FFF4E5", borderLeft: `4px solid ${BLUE}` }}>
          <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-2" style={{ color: BLUE }}>
            Non-résident partout
          </p>
          <p className="text-[14px] leading-relaxed" style={{ color: INK }}>
            Selon les critères mécaniques, tu n&apos;es résident fiscal
            nulle part. C&apos;est rare et souvent attaqué par les
            administrations fiscales (notamment FR &quot;sham
            residency&quot;). Tu dois soit revenir à une résidence
            principale, soit documenter solidement un statut de
            non-résident dans chaque pays.
          </p>
        </div>
      )}

      {residencies.length === 1 && (
        <div className="p-6 rounded-2xl" style={{ background: "#fff", borderLeft: `4px solid ${GREEN}` }}>
          <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-2" style={{ color: GREEN }}>
            Résidence unique
          </p>
          <p className="text-[14px] leading-relaxed" style={{ color: INK }}>
            Tu es probablement résident fiscal uniquement de{" "}
            <strong>{residencies[0].label}</strong>. C&apos;est la
            situation la plus claire. Déclare tes revenus mondiaux dans
            ce pays. Les revenus d&apos;origine étrangère restent
            généralement imposables localement (avec crédit
            d&apos;impôt pour éviter la double imposition selon traité).
          </p>
        </div>
      )}

      <p className="text-[11.5px] text-center" style={{ color: "rgba(45,16,15,0.55)" }}>
        Indicateur uniquement. Ne remplace pas une consultation avec un
        avocat fiscaliste ou un expert-comptable agréé. NOHO ne donne
        pas de conseil fiscal — on peut référer un fiscaliste si tu en as
        besoin.
      </p>
    </div>
  );
}

function NumField({ label, value, set, max }: { label: string; value: number; set: (n: number) => void; max: number }) {
  return (
    <div>
      <label className="block text-[11px] font-bold mb-1.5" style={{ color: INK }}>
        {label}
      </label>
      <input
        type="number"
        min={0}
        max={max}
        step={1}
        value={value}
        onChange={(e) => set(Math.max(0, Math.min(max, Number(e.target.value))))}
        className="w-full px-3 py-2.5 rounded-xl text-[14px] font-bold"
        style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.15)", color: INK }}
      />
    </div>
  );
}

function CountryPicker({ label, value, set }: { label: string; value: Country; set: (c: Country) => void }) {
  return (
    <div>
      <label className="block text-[11px] font-bold mb-1.5" style={{ color: INK }}>
        {label}
      </label>
      <div className="flex rounded-xl overflow-hidden" style={{ border: "1px solid rgba(45,16,15,0.15)" }}>
        {(["TN", "FR", "US"] as Country[]).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => set(c)}
            className="flex-1 py-2.5 text-[12.5px] font-bold transition-colors"
            style={{
              background: value === c ? INK : "#fff",
              color: value === c ? CREAM : INK,
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
