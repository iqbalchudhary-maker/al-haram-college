"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function OverviewChart({ data }: { data: any[] }) {
  return (
    <div className="h-[350px] w-full bg-white p-4 rounded-xl border border-slate-200">
      <h3 className="font-bold mb-4 text-slate-700">6-Month Financial Trend</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `Rs.${value}`} />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} 
          />
          <Legend />
          <Bar dataKey="income" fill="#2563eb" radius={[4, 4, 0, 0]} name="Income" />
          <Bar dataKey="expense" fill="#ef4444" radius={[4, 4, 0, 0]} name="Expense" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}