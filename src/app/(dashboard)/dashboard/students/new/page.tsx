"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "@/lib/validations/student";
import { createStudent } from "@/lib/actions/student";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function NewAdmissionPage() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(studentSchema),
  });

  const onSubmit = async (data: any) => {
    const res = await createStudent(data);
    if (res.success) {
      toast({ title: "Success", description: "Student admitted successfully!" });
      form.reset();
    } else {
      toast({ variant: "destructive", title: "Error", description: res.error });
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold mb-6">New Student Admission</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Roll Number (Unique)</label>
          <Input {...form.register("rollNumber")} placeholder="e.g. 2024-001" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Full Name</label>
          <Input {...form.register("fullName")} placeholder="Student Name" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Class/Program</label>
          <select {...form.register("className")} className="w-full h-10 px-3 rounded-md border border-input bg-background">
            <option value="FSc Pre-Medical">FSc Pre-Medical</option>
            <option value="ICS">ICS</option>
            <option value="I.Com">I.Com</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Father Mobile</label>
          <Input {...form.register("parentMobile")} placeholder="03XXXXXXXXX" />
        </div>
        <div className="md:col-span-2">
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-12">
            Confirm Admission & Generate Ledger
          </Button>
        </div>
      </form>
    </div>
  );
  // build fix.
}