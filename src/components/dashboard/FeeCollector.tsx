"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function FeeCollector() {
  const [rollNo, setRollNo] = useState("");

  return (
    <div className="p-6 bg-slate-900 text-white rounded-xl">
      <h3 className="text-lg font-semibold mb-4">Quick Fee Collection</h3>
      <div className="flex gap-2">
        <Input 
          value={rollNo} 
          onChange={(e) => setRollNo(e.target.value)}
          placeholder="Enter Roll Number..." 
          className="bg-slate-800 border-slate-700 text-white"
        />
        <Button variant="secondary">Fetch Account</Button>
      </div>
    </div>
  );
}