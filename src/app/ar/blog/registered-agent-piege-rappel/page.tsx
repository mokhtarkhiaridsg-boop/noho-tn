import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "فخ Registered Agent الذي لا يذكّرك — تشريح LLC مُحلّ",
  description: "RA يستلم البريد الرسمي، يحوّله إليك، لكنه لا يودع تقريرك السنوي. السلسلة: Delinquent → Mercury محجوب → LLC مُحلّة. ما يوصى به.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/registered-agent-piege-rappel" },
};

export default function ArRaPiegePage() {
  return (
    <ArabicStub
      frHref="/fr/blog/registered-agent-piege-rappel"
      frTitleAr="فخ Registered Agent الذي لا يذكّرك"
    />
  );
}
