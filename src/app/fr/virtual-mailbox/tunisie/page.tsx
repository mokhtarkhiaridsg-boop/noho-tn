import { redirect } from "next/navigation";

/**
 * Retired 2026-08-10 (loop audit). See sibling comment — same rule, FR tree.
 */
export default function Retired() {
  redirect("/fr/virtual-mailbox");
}
