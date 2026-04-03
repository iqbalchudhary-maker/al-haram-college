"use server"

import { db } from "@/lib/db";
import { startOfMonth, endOfMonth, subMonths, format } from "date-fns";

export async function getFinancialStats() {
  const last6Months = Array.from({ length: 6 }).map((_, i) => {
    const date = subMonths(new Date(), i);
    return {
      start: startOfMonth(date),
      end: endOfMonth(date),
      label: format(date, "MMM yy"),
    };
  }).reverse();

  const chartData = await Promise.all(last6Months.map(async (month) => {
    const income = await db.feeTransaction.aggregate({
      _sum: { amount: true },
      where: { date: { gte: month.start, lte: month.end } }
    });

    const expense = await db.expense.aggregate({
      _sum: { amount: true },
      where: { date: { gte: month.start, lte: month.end } }
    });

    return {
      name: month.label,
      income: income._sum.amount || 0,
      expense: expense._sum.amount || 0,
      profit: (income._sum.amount || 0) - (expense._sum.amount || 0),
    };
  }));

  return chartData;
}