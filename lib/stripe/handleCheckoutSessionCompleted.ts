import "server-only";
import Stripe from "stripe";
import { getCreditsPack, PackId } from "@/types/billing";
// import prisma from "../prisma";
import prisma from "@/lib/prisma";

export async function HandleCheckoutSessionCompleted(
  event: Stripe.Checkout.Session
) {
  console.log("Handling checkout session completed event");
  if (!event.metadata) {
    throw new Error("No metadata found");
  }
  const { userId, packId } = event.metadata;
  if (!userId) {
    throw new Error("Missing userId");
  }
  if (!packId) {
    throw new Error("Missing packId");
  }
  const purchasePack = getCreditsPack(packId as PackId);
  if (!purchasePack) {
    throw new Error("Invalid Package");
  }
  // Defensive validation: ensure credits is a safe positive integer and within a reasonable cap
  const creditsToAdd = purchasePack.credits;
  if (
    typeof creditsToAdd !== "number" ||
    !Number.isFinite(creditsToAdd) ||
    !Number.isInteger(creditsToAdd) ||
    creditsToAdd <= 0 ||
    creditsToAdd > 1000000 // arbitrary large cap to avoid abuse
  ) {
    throw new Error("Invalid credits amount from purchase pack");
  }
  await prisma.userBalance.upsert({
    where: { userId },
    create: {
      userId,
      credits: creditsToAdd,
    },
    update: {
      credits: {
        increment: creditsToAdd,
      },
    },
  });

  await prisma.userPurchase.create({
    data: {
      userId,
      stripeId: event.id,
      description: `${purchasePack.name} - ${purchasePack.credits} credits`,
      amount: event.amount_total!,
      currency: event.currency!,
    },
  });
  console.log("Checkout session completed event handled successfully");
}
