"use client"
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const staffList = [
  { id: 1, name: "Dr. Ahmed", role: "Sr. Lecturer" },
  { id: 2, name: "Ms. Sara", role: "Admin Office" },
];

export default function StaffAttendance() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200">
      <h2 className="text-xl font-bold mb-4">Daily Staff Attendance</h2>
      <div className="space-y-4">
        {staffList.map((staff) => (
          <div key={staff.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div>
              <p className="font-bold">{staff.name}</p>
              <p className="text-xs text-slate-500">{staff.role}</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="bg-green-600 hover:bg-green-700"><Check className="w-4 h-4 mr-1"/> Present</Button>
              <Button size="sm" variant="outline" className="text-red-600 border-red-600"><X className="w-4 h-4 mr-1"/> Absent</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}