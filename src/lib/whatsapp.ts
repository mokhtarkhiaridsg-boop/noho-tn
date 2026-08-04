/**
 * Single source of truth for the WhatsApp conversion line + intent-segmented
 * pre-filled messages. The number is the US +1 818 line on purpose — it
 * reinforces a real US operation (storefront at 5062 Lankershim).
 *
 * Each surface passes its intent so the inbound message is pre-labelled by
 * pillar the instant it lands: package wedge, address, student, business.
 */
export const WHATSAPP_NUMBER = "18185067744";
export const WHATSAPP_DISPLAY = "+1 818 506 7744";

export type WaIntent = "colis" | "adresse" | "etudiant" | "business" | "general";

const MESSAGES: Record<WaIntent, string> = {
  colis:
    "Salam! N7eb na3mel adresse US bch nrecevi colis (Amazon / Shein / eBay) w tji l Tounes. Chnowa el étapes?",
  adresse:
    "Salam l'équipe NOHO Tunisia, n7eb adresse US réelle m3a NOHO. Kifech nabda?",
  etudiant:
    "Salam, ena [étudiant / parent] — n7eb na3ref 3al accompagnement université US (Common App, I-20, visa F-1).",
  business:
    "Bonjour l'équipe NOHO Tunisia, je souhaite créer ma présence business aux USA (LLC, EIN, adresse pro). Pouvez-vous m'expliquer le processus et les tarifs ?",
  general:
    "Salam l'équipe NOHO Tunisia, 3andi question 3al services US.",
};

/** Full wa.me deep link with the pre-filled, URL-encoded message for an intent. */
export function waLink(intent: WaIntent = "general"): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGES[intent])}`;
}
