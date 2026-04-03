"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, ArrowRight, Users, BookOpen, Award, 
  LayoutDashboard, MapPin, Phone, Mail, GraduationCap, 
  ShieldCheck, Presentation 
} from "lucide-react";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    { title: "Quality Education", desc: "Excellence in every lesson", color: "bg-blue-600" },
    { title: "Expert Faculty", desc: "Guidance from the best", color: "bg-indigo-600" },
    { title: "Modern Labs", desc: "Practical learning approach", color: "bg-slate-900" }
  ];

  return (
    <main className="flex flex-col min-h-screen scroll-smooth">
      
      {/* --- 1. HERO SECTION (Main Home) --- */}
      <section id="home" className="relative bg-slate-50 pt-16 pb-24 lg:pt-28 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Admissions Open 2026-27
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
              Your Gateway to <span className="text-blue-600 italic">Academic</span> Success.
            </h1>
            
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Al-Haram College Bhowana provides a world-class environment for intermediate students to excel in science and arts.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-8 text-md font-bold rounded-xl" asChild>
                <Link href="/dashboard">Admin ERP <LayoutDashboard className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-md font-bold rounded-xl border-2" asChild>
                <a href="#admissions">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>
          </div>

          {/* Rotating Banner */}
          <div className="relative h-125 lg:h-125 not-odd:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
             <div className={`absolute inset-0 transition-all duration-1000 ${slides[currentSlide].color} flex items-center justify-center text-white text-center p-10`}>
                <div className="space-y-4">
                   <h2 className="text-4xl lg:text-5xl font-black">{slides[currentSlide].title}</h2>
                   <p className="text-white/70 text-lg">{slides[currentSlide].desc}</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- 2. ABOUT US SECTION --- */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-black text-slate-900 underline decoration-blue-500 decoration-4 underline-offset-8">About Al-Haram College</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Located on the Bhowana-Pansara Road, Al-Haram College is more than just an educational institution. We are a community dedicated to nurturing the leaders of tomorrow. Under the visionary leadership of our Principal, <strong>Ghulam Abbas Bhatti</strong>, we ensure that every student receives personalized attention.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <ShieldCheck className="text-blue-600 mb-2" />
                  <h4 className="font-bold">Character First</h4>
                  <p className="text-xs text-slate-500">Building ethics along with skills.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Presentation className="text-blue-600 mb-2" />
                  <h4 className="font-bold">Digital Learning</h4>
                  <p className="text-xs text-slate-500">Equipped with latest IT labs.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-slate-200 h-100 w-full rounded-3xl flex items-center justify-center text-slate-400 font-bold">
              [About Section Image]
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. PROGRAMS SECTION --- */}
      <section id="programs" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-16">Academic Programs</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { name: "FSc Pre-Medical", desc: "For aspiring doctors and biologists.", icon: GraduationCap },
              { name: "FSc Pre-Engineering", desc: "For future engineers and scientists.", icon: GraduationCap },
              { name: "ICS (Comp Science)", desc: "Programming, IT and modern tech.", icon: GraduationCap },
              { name: "I.Com", desc: "Foundation for business & accounts.", icon: GraduationCap },
              { name: "FA (Humanities)", desc: "Arts and Social Sciences.", icon: GraduationCap },
              { name: "Diploma Courses", desc: "Skill based short-term programs.", icon: GraduationCap },
            ].map((p, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl shadow-sm border hover:border-blue-500 transition-all group">
                <p.icon className="h-10 w-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-slate-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. STAFF & PORTAL SECTION --- */}
      <section id="staff" className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">Staff & Faculty Portal</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Managing teacher attendance, student results, and monthly salaries through our integrated ERP system. Exclusive portal for Al-Haram faculty.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 h-14 px-10 font-bold rounded-xl" asChild>
              <Link href="/staff/attendance">Access Staff Portal</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-3xl font-black">25+</h3>
              <p className="text-blue-200">Certified Staff</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-3xl font-black">100%</h3>
              <p className="text-blue-200">Attendance Sync</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-16 border-b border-slate-800 pb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-black">AL-HARAM <span className="text-blue-500 underline">COLLEGE</span></h3>
            <p className="text-slate-400">Serving the community with high-quality education and modern ERP solutions.</p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400"><MapPin size={20} /> Bhowana-Pensara Road</div>
              <div className="flex items-center gap-3 text-slate-400"><Phone size={20} /> +92 XXX XXXXXXX</div>
              <div className="flex items-center gap-3 text-slate-400"><Mail size={20} /> info@alharam.edu.pk</div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Admin ERP</h4>
            <p className="text-slate-400">Restricted area for management only.</p>
            <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 w-full" asChild>
              <Link href="/dashboard">Login to Admin Panel</Link>
            </Button>
          </div>
        </div>
        <div className="text-center mt-10 text-slate-600 text-sm">
          Developed by Abbas Bhatti | © 2026 Al-Haram College Bhowana
        </div>
      </footer>

    </main>
  );
}