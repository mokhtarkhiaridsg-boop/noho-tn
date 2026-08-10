import { redirect } from "next/navigation";

/**
 * Retired 2026-08-10 (loop audit): the testimonials page rendered zero
 * testimonials — an indexable placeholder, which the standing no-pre-launch
 * rule forbids. Comes back when real case studies exist.
 */
export default function Retired() {
  redirect("/ar");
}
