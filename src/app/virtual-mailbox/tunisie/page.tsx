import { redirect } from "next/navigation";

/**
 * Retired 2026-08-10 (loop audit). TN-address product is pre-launch; the standing rule is no pre-launch
 * surfaces (no waitlists, no 'reserve ta place'). Route restored when the
 * product actually exists.
 */
export default function Retired() {
  redirect("/virtual-mailbox");
}
