import { db } from "@/lib/db";
import { Prisma } from "@prisma/client"; // 1. Add this import

// ... your other imports and schema

export async function createStudent(data: any) {
  // ... your validation logic

  try {
    const result = await db.$transaction(async (tx: Prisma.TransactionClient) => { // 2. Add the type here
      // 1. Create Student
      const student = await tx.student.create({
        data: data, // ensure this matches your validated data
      });

      // 2. Create Ledger
      await tx.ledger.create({
        data: {
          studentId: student.id,
          totalPayable: 0,
          totalPaid: 0,
          balance: 0,
        }
      });

      return student;
    });

    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: "Database transaction failed" };
  }
}