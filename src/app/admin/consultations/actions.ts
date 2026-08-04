"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getCurrentUser, isCustomer } from "@/lib/auth";

export async function setConsultationStatus(id: string, status: "NEW" | "HANDLED") {
  const user = await getCurrentUser();
  if (!user || isCustomer(user.role)) return;
  await prisma.consultationRequest.update({ where: { id }, data: { status } });
  revalidatePath("/admin/consultations");
}
