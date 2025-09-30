"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GetAvailableCredits() {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not found");
  }
  const balance = await prisma.userBalance.findUnique({
    where: { userId },
  });
  if (!balance) {
    // If no balance record exists, create one with default 20 credits and return 20
    const created = await prisma.userBalance.create({
      data: { userId, credits: 20 },
    });
    return created.credits;
  }
  return balance.credits;
}
