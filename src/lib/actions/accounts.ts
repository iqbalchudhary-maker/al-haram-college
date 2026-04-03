"use server"

import { db } from "@/lib/db";
import { Prisma } from "@prisma/client"; // 1. Add this import
import { revalidatePath } from "next/cache";

// ... other actions (like addExpense)

export async function collectFee(data: { studentId: string; amount: number; month: string }) {
  try {
    return await db.$transaction(async (tx: Prisma.TransactionClient) => { // 2. Add the type here
      
      // Generate a unique voucher number
      const voucherNo = `V-${Date.now()}`;

      // 1. Create Transaction Record
      const transaction = await tx.feeTransaction.create({
        data: {
          studentId: data.studentId,
          amount: data.amount,
          month: data.month,
          voucherNo: voucherNo,
          type: "MONTHLY_FEE",
        },
      });

      // 2. Update Student Ledger (Atomic update)
      await tx.ledger.update({
        where: { studentId: data.studentId },
        data: {
          totalPaid: { increment: data.amount },
          balance: { decrement: data.amount },
        },
      });

      revalidatePath("/dashboard/accounts");
      revalidatePath("/dashboard/fees");
      
      return { success: true, transaction };
    });
  } catch (error) {
    console.error("Fee collection error:", error);
    return { success: false, error: "Failed to process fee payment" };
  }
}