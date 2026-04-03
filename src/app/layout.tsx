import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/website/Navbar";
import Sidebar from "@/components/dashboard/Sidebar"; 
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al-Haram ERP | Admin Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body className={`${geistSans.variable} antialiased h-full bg-slate-50`}>
          
          {/* 1. Top Navbar (Hamesha fix rahegi) */}
          <div className="fixed top-0 w-full z-50">
            <Navbar />
          </div>

          <div className="flex pt-16 min-h-screen">
            {/* 2. Left Sidebar (Side par fix rahega) */}
            <aside className="hidden md:block w-64 fixed left-0 h-full bg-white border-r shadow-sm overflow-y-auto">
              <Sidebar />
            </aside>

            {/* 3. Main Content Area (Yahan Page.tsx ka data khud hi ayega) */}
            <main className="flex-1 md:ml-64 p-6 bg-slate-50 min-h-[calc(100vh-64px)]">
              <div className="max-w-7xl mx-auto">
                {children} 
              </div>
            </main>
          </div>

        </body>
      </html>
    </ClerkProvider>
  );
}