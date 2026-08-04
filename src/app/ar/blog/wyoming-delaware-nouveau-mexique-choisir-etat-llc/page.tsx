import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Wyoming مقابل Delaware مقابل New Mexico — اختيار الولاية المناسبة لشركة LLC من تونس",
  description: "ثلاث ولايات تتكرر دائماً للمؤسسين غير المقيمين. المعيار الحقيقي ليس الضرائب — بل قبول البنوك والرسوم السنوية وإخفاء الهوية.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/wyoming-delaware-nouveau-mexique-choisir-etat-llc" },
};

export default function ArWyDeNmPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/wyoming-delaware-nouveau-mexique-choisir-etat-llc"
      frTitleAr="اختيار الولاية المناسبة لشركة LLC"
    />
  );
}
