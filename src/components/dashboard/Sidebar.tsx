"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, CreditCard, BookOpen, Settings, FileText } from "lucide-react";

const menu = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Students", href: "/dashboard/students", icon: Users },
  { name: "Fees & Vouchers", href: "/dashboard/fees", icon: CreditCard },
  { name: "Accounts", href: "/dashboard/accounts", icon: FileText },
  { name: "Attendance", href: "/dashboard/attendance", icon: BookOpen },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r h-screen flex flex-col p-4 space-y-2">
      <div className="p-4 mb-6">
        <h1 className="font-black text-2xl text-blue-800 tracking-tighter">USWA ERP</h1>
        <p className="text-[10px] text-slate-400 font-bold uppercase">Bhowana Campus</p>
      </div>
      {menu.map((item) => (
        <Link 
          key={item.name} 
          href={item.href}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            pathname === item.href 
            ? "bg-blue-50 text-blue-700 font-bold border-r-4 border-blue-700" 
            : "text-slate-500 hover:bg-slate-50"
          }`}
        >
          <item.icon className="w-5 h-5" />
          {item.name}
        </Link>
      ))}
    </div>
  );
}