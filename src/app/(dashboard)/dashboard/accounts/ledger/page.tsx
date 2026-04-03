import { db } from "@/lib/db";
import { format } from "date-fns";
// Prisma se types import karein
import { FeeTransaction, Expense, Student } from "@prisma/client";

// FeeTransaction ke saath Student relation ki type define karein
type FeeWithStudent = FeeTransaction & { student: Student };

export default async function GeneralLedgerPage() {
  const incomes = await db.feeTransaction.findMany({ 
    include: { student: true } 
  });
  const expenses = await db.expense.findMany();

  // 'i' aur 'e' ko types assign karein
  const entries = [
    ...incomes.map((i: FeeWithStudent) => ({ 
      date: i.date, 
      desc: `Fee: ${i.student.fullName} (${i.month})`, 
      credit: Number(i.amount), 
      debit: 0 
    })),
    ...expenses.map((e: Expense) => ({ 
      date: e.date, 
      desc: e.title, 
      credit: 0, 
      debit: Number(e.amount) 
    }))
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  // ... baqi code wahi rahe ga
}