import type { Metadata } from "next";
import { redirect } from "next/navigation";
import CustomerDashboard from "@/components/customer/CustomerDashboard";
import {
  getMemberProfile,
  getMemberMail,
  getMemberPackages,
} from "@/lib/member-session";

export const metadata: Metadata = {
  title: "Mon espace · NOHO Tunisia",
  robots: { index: false, follow: false },
};

// Member data is live from nohomailbox.org — never prerender or cache it.
export const dynamic = "force-dynamic";

export default async function ComptePage() {
  const profile = await getMemberProfile();
  // No cookie, or the US side has expired/revoked the token.
  if (!profile) redirect("/login");

  const [mail, packages] = await Promise.all([
    getMemberMail(8),
    getMemberPackages(8),
  ]);

  return <CustomerDashboard profile={profile} mail={mail} packages={packages} />;
}
