import { redirect } from "next/navigation";

/**
 * Retired 2026-08-10 (loop audit). All nine template cards said 'Bientôt' with nothing downloadable while
 * title+meta promised free templates. Rule: unshipped = no public page.
 */
export default function Retired() {
  redirect("/blog");
}
