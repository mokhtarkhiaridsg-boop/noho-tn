"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getCurrentUser, isCustomer } from "@/lib/auth";
import { purchaseLabel } from "@/lib/shippo";
import { sendInternalNotification } from "@/lib/email";

async function staffOnly() {
  const user = await getCurrentUser();
  if (!user || isCustomer(user.role)) return null;
  return user;
}

export async function markLabelOrder(id: string, status: "PAID" | "CANCELLED" | "PENDING_PAYMENT") {
  if (!(await staffOnly())) return;
  await prisma.labelOrder.update({ where: { id }, data: { status } });
  revalidatePath("/admin/shipments");
}

export type BuyState = { error?: string };

/** Buy the Shippo label for a PAID order — money leaves the Shippo account. */
export async function buyLabel(id: string): Promise<BuyState> {
  if (!(await staffOnly())) return { error: "Non autorisé." };
  const order = await prisma.labelOrder.findUnique({ where: { id } });
  if (!order) return { error: "Commande introuvable." };
  if (order.status !== "PAID") return { error: "Marque la commande payée d'abord." };
  if (order.labelUrl) return { error: "Label déjà émis." };
  try {
    const label = await purchaseLabel(order.rateObjectId);
    await prisma.labelOrder.update({
      where: { id },
      data: {
        status: "LABELED",
        labelUrl: label.labelUrl,
        trackingNumber: label.trackingNumber,
        trackingUrl: label.trackingUrl,
      },
    });
    await sendInternalNotification({
      subject: `Label émis — ${order.toName} (${order.provider} ${order.amountTnd} TND)`,
      text: `Label: ${label.labelUrl}\nTracking: ${label.trackingNumber}\nClient: ${order.email}`,
      html: `<p style="font-family:sans-serif">Label émis pour ${order.toName} — <a href="${label.labelUrl}">PDF</a> · tracking ${label.trackingNumber} · client ${order.email}</p>`,
    });
  } catch (e) {
    console.error("[shippo] buy failed", e);
    return { error: e instanceof Error ? e.message.slice(0, 200) : "Achat du label échoué." };
  }
  revalidatePath("/admin/shipments");
  return {};
}
