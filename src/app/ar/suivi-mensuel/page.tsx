import type { Metadata } from "next";
import ArabicStub from "../_components/ArabicStub";

export const metadata: Metadata = {
  title: "المتابعة الشهرية — 1 200 دينار/شهر",
  description: "الشريك التشغيلي لشركتك LLC الأمريكية. الامتثال الأمريكي الشهري، البريد ذو الأولوية، العلامة التجارية، المراجعة الفصلية.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/suivi-mensuel" },
};

export default function ArSuiviMensuelPage() {
  return <ArabicStub frHref="/fr/suivi-mensuel" frTitleAr="المتابعة الشهرية — 1 200 دينار/شهر" />;
}
