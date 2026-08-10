import { redirect } from "next/navigation";

/**
 * Retired 2026-08-10 (loop audit). Indexable testimonials page with zero testimonials. Comes back when
 * real case studies exist.
 */
export default function Retired() {
  redirect("/fr");
}
