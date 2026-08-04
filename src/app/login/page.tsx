import type { Metadata } from "next";
import { redirect } from "next/navigation";
import MemberLoginForm from "@/components/MemberLoginForm";
import { isMemberSignedIn } from "@/lib/member-session";

export const metadata: Metadata = {
  title: "Connexion · NOHO Tunisia",
  robots: { index: false, follow: false },
};

// The member area is entirely live data from nohomailbox.org.
export const dynamic = "force-dynamic";

/*
 * The CUSTOMER entrance. Staff sign in at /admin/login instead — the two
 * queues that still live on this site are the only thing staff use it for.
 */
export default async function LoginPage() {
  if (await isMemberSignedIn()) redirect("/compte");
  return <MemberLoginForm />;
}
