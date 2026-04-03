"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-2 rounded-lg group-hover:rotate-6 transition-transform">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black leading-none tracking-tighter text-blue-900">
              Al-Harram College
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Bhowana-Pensara Road
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="/courses" className="hover:text-blue-600 transition-colors">Programs</Link>
          <Link href="/admissions" className="hover:text-blue-600 transition-colors">Admissions</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden lg:flex" asChild>
            <Link href="/login">Staff Portal</Link>
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6" asChild>
            <Link href="/dashboard">Admin ERP</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}