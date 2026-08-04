import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "متى يقول لك NOHO لا — 5 ملفات مرفوضة في مكالمة الاكتشاف",
  description: "في 25-30٪ من الحالات، يرفض مختار العميل المحتمل في مكالمة الاكتشاف 30 دقيقة. 5 ملفات مرفوضة منهجياً، والتوصية البديلة لكل حالة.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/noho-te-dit-non-discovery-call" },
};

export default function ArNohoTeDitNonPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/noho-te-dit-non-discovery-call"
      frTitleAr="متى يقول لك NOHO لا"
    />
  );
}
