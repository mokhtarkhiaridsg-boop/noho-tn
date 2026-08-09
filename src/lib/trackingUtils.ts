/**
 * NOHO Mailbox — Package Tracking Utilities
 * Pure synchronous helpers (no server actions) for tracking URLs and carrier detection.
 */

export type Carrier = "UPS" | "USPS" | "FedEx" | "DHL" | "Amazon" | "OnTrac" | "LaserShip" | "Other";

export function getTrackingUrl(carrier: string, trackingNumber: string): string {
  switch (carrier) {
    case "UPS":
      return `https://www.ups.com/track?tracknum=${trackingNumber}`;
    case "USPS":
      return `https://tools.usps.com/go/TrackConfirmAction?tLabels=${trackingNumber}`;
    case "FedEx":
      return `https://www.fedex.com/fedextrack/?trknbr=${trackingNumber}`;
    case "DHL":
      return `https://www.dhl.com/us-en/home/tracking.html?tracking-id=${trackingNumber}`;
    case "Amazon":
      return `https://www.amazon.com/progress-tracker/package?_encoding=UTF8&orderId=${trackingNumber}`;
    case "OnTrac":
      return `https://www.ontrac.com/tracking/?number=${trackingNumber}`;
    case "LaserShip":
      return `https://www.lasership.com/track/${trackingNumber}`;
    default:
      return `https://www.google.com/search?q=${encodeURIComponent(trackingNumber + " tracking")}`;
  }
}

export function detectCarrier(trackingNumber: string): Carrier {
  // Strip ALL whitespace + dashes — drivers often paste "9334 6208 4550 …"
  // with spaces from the PDF label. Without this strip, the digit-only
  // regexes silently fall through to "Other" and Shippo never gets called.
  const t = trackingNumber.replace(/[\s-]/g, "").toUpperCase();
  if (!t) return "Other";

  // UPS — 1Z + 16 alphanumeric
  if (/^1Z[0-9A-Z]{16}$/.test(t)) return "UPS";

  // USPS — explicit prefixes (Priority Mail / Express / Certified / Signature
  // Confirmation / Insured Mail / Tracking variants). 9333-9337 covers the
  // newer Priority Mail block (e.g. 9334... that bot a real customer).
  if (/^(9400|9405|9407|9410|9411|9303|9305|9311|9312|9320|9321|9322|9323|9324|9333|9334|9335|9336|9337|9305|9261|9274|9300|9361|9362|9470|9505|9211|9214|9171|9172|9173|9174|9175|82\d{2}|420\d{4,})\d/.test(t)) {
    return "USPS";
  }
  // FedEx — 96-prefixed Ground barcode forms MUST beat the USPS catch-all
  // (owner 2026-07-14: FedEx scans were landing as the wrong carrier).
  if (/^96\d{18,32}$/.test(t)) return "FedEx";
  // USPS — 22-digit catch-all (most USPS labels), 9x-prefixed only so a
  // FedEx 96… barcode can't shadow in. Runs AFTER the specific prefixes.
  if (/^9[0-5]\d{20}$/.test(t)) return "USPS";
  // USPS — 13-char ending in "US" (international tracking).
  if (/^[A-Z]{2}\d{9}US$/.test(t)) return "USPS";

  // FedEx — 12, 15, or 20 digits; long-form Ground barcodes (31–36 digits,
  // tracking = last 12) are normalized by normalizeScannedTracking but catch
  // the raw form here too.
  if (/^\d{12}$/.test(t) || /^\d{15}$/.test(t) || /^\d{20}$/.test(t)) return "FedEx";
  if (/^\d{31,36}$/.test(t)) return "FedEx";

  // DHL — 10 digits, or JD / GM / LY prefixes
  if (/^\d{10}$/.test(t)) return "DHL";
  if (t.startsWith("JD") || t.startsWith("GM") || t.startsWith("LY")) return "DHL";

  // Amazon Logistics
  if (t.startsWith("TBA") && /^TBA\d{12,}$/.test(t)) return "Amazon";

  // OnTrac — 1Z-style or 15 digits starting with C/D
  if (/^[CD]\d{14}$/.test(t)) return "OnTrac";
  // LaserShip — usually starts with LX or LW
  if (/^L[A-Z]\d{8,}$/.test(t)) return "LaserShip";

  return "Other";
}

/**
 * Strip the USPS IMpb routing prefix from a scanned package barcode.
 *
 * USPS shipping labels encode an Intelligent Mail package barcode that puts a
 * routing block BEFORE the real tracking number: "420" + 5-digit ZIP (and
 * sometimes a 4-digit ZIP+4). A handheld scanner reads the whole string, e.g.
 *   420 91601 9400150206217723906257
 * but the number to actually track is the 9400… part. This returns the real
 * tracking number; non-USPS (alphanumeric UPS/FedEx) and already-clean numbers
 * pass through untouched.
 */
export function normalizeScannedTracking(raw: string): string {
  const s = (raw ?? "").trim().replace(/\s+/g, "");
  // Only USPS IMpb begins with an all-digit "420" + ZIP. UPS/FedEx are alphanumeric.
  if (/^420\d{5}/.test(s)) {
    const after5 = s.slice(8);  // drop "420" + 5-digit ZIP
    const after9 = s.slice(12); // drop "420" + 9-digit ZIP+4 variant
    // Only strip once the trailing part is a real USPS tracking number
    // (18+ digits starting with 9 — e.g. 9400…). Returning the raw string for
    // partials keeps a still-in-progress scan from being mangled char-by-char.
    if (/^9\d{17,}$/.test(after5)) return after5;
    if (/^9\d{17,}$/.test(after9)) return after9;
    return s;
  }
  // FedEx Ground long-form barcodes (31–36 digits): the real tracking number
  // is the LAST 12 digits (owner 2026-07-14 — scans were misdetected).
  if (/^\d{31,36}$/.test(s)) return s.slice(-12);
  return s;
}
