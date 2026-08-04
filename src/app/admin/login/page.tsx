import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { dbConfigured, getCurrentUser, homePathForRole } from "@/lib/auth";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Accès équipe · NOHO Tunisia",
  robots: { index: false, follow: false },
};

/*
 * Staff entrance for the two operational queues that still read this site's own
 * database — consultation leads and Shippo label orders. Customers and boxes
 * are managed on nohomailbox.org; members sign in at /login.
 */
export default async function StaffLoginPage() {
  if (!dbConfigured()) redirect("/");
  const user = await getCurrentUser();
  if (user) redirect(homePathForRole(user.role));
  return <LoginForm />;
}
