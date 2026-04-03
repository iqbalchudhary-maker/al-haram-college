import Link from "next/link";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <nav className="flex justify-between items-center p-6 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="font-black text-xl text-blue-900">USWA COLLEGE</div>
        <div className="hidden md:flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Link href="/dashboard" className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold">
          Admin Portal
        </Link>
      </nav>
      {children}
    </div>
  );
}