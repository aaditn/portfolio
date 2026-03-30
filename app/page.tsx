"use client";

import Image from "next/image";
import Link from "next/link";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import ButterflyFollower from "./components/ButterflyFollower";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#ffffff] to-[#eef6ff] text-black selection:bg-[#93c5fd]/40 relative overflow-hidden">
      <ButterflyFollower />

      {/* ── Hero Section ── */}
      <section className="max-w-5xl mx-auto pt-24 pb-16 px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="shrink-0">
            <div className="relative w-40 h-52 md:w-48 md:h-64 rounded-2xl overflow-hidden shadow-lg ring-1 ring-blue-100">
              <Image
                src="/Manas_Sood_Profile_Pic.JPG"
                alt="Manas Sood"
                fill
                priority
                sizes="(max-width: 768px) 160px, 192px"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="flex-1 max-w-2xl text-center md:text-left">
            <h1
              className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Manas Sood
            </h1>
            <p className="text-2xl md:text-3xl text-[#2563eb] font-semibold mb-6">
              Financial Literacy Leader &amp; Strategic Consultant
            </p>
            <p className="text-xl text-slate-700 leading-relaxed">
              I have repeatedly transformed ideas and organisations into
              high-impact successes by leveraging unorthodox strategies, rigorous
              analysis, and talent-driven execution.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto text-center md:text-right text-sm text-slate-700">
            <div className="font-semibold text-black mb-1">Contact</div>
            <a
              className="block hover:text-[#2563eb] transition-colors"
              href="mailto:soodmanas08@gmail.com"
            >
              soodmanas08@gmail.com
            </a>
            <a
              className="block hover:text-[#2563eb] transition-colors"
              href="tel:+12139162259"
            >
              +1 (213) 916 2259
            </a>
            <a
              className="block hover:text-[#2563eb] transition-colors"
              href="tel:+919810952002"
            >
              +91 98109 52002
            </a>
          </div>
        </div>
      </section>

      {/* ═══ Section 1: Projects (title left, photo right) ═══ */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <Link href="/projects" className="flex flex-col md:flex-row items-center gap-12 group cursor-pointer">
          <div className="flex-1">
            <h2 className="text-[4.5rem] md:text-[5.5rem] font-extrabold leading-none tracking-tight mb-6">
              Projects
            </h2>
            <p className="text-2xl md:text-3xl text-slate-600 leading-snug">
              From educating the world about taxation to climate mitigation
            </p>
            <span className="inline-block mt-8 text-lg font-semibold text-blue-600 group-hover:translate-x-2 transition-transform">
              Explore &rarr;
            </span>
          </div>
          <div className="shrink-0 w-full md:w-[400px] aspect-[1600/1557] rounded-3xl overflow-hidden border border-blue-200 relative">
            <Image
              src="/2.jpg"
              alt="Projects"
              fill
              className="object-contain"
              sizes="400px"
            />
          </div>
        </Link>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>

      {/* ═══ Section 2: Research (photo left, title right) ═══ */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <Link href="/research" className="flex flex-col md:flex-row-reverse items-center gap-12 group cursor-pointer">
          <div className="flex-1 md:text-right">
            <h2 className="text-[4.5rem] md:text-[5.5rem] font-extrabold leading-none tracking-tight mb-6">
              Research, Awards &amp; Competitions
            </h2>
            <p className="text-2xl md:text-3xl text-slate-600 leading-snug">
              Economics research and national level awards
            </p>
            <span className="inline-block mt-8 text-lg font-semibold text-blue-600 group-hover:translate-x-2 transition-transform">
              Explore &rarr;
            </span>
          </div>
          <div className="shrink-0 w-full md:w-[400px] h-[280px] rounded-3xl overflow-hidden border border-blue-200 relative">
            <Image
              src="/6.jpg"
              alt="Research, Awards and Competitions"
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
        </Link>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>

      {/* ═══ Section 3: Hobbies (title left, photo right) ═══ */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <Link href="/hobbies" className="flex flex-col md:flex-row items-center gap-12 group cursor-pointer">
          <div className="flex-1">
            <h2 className="text-[4.5rem] md:text-[5.5rem] font-extrabold leading-none tracking-tight mb-6">
              Hobbies
            </h2>
            <p className="text-2xl md:text-3xl text-slate-600 leading-snug">
              Everyone&apos;s fun side can be impact-driven and smart
            </p>
            <span className="inline-block mt-8 text-lg font-semibold text-blue-600 group-hover:translate-x-2 transition-transform">
              Explore &rarr;
            </span>
          </div>
          <div className="shrink-0 w-full md:w-[400px] h-[280px] rounded-3xl overflow-hidden border border-blue-200 relative">
            <Image
              src="/12.png"
              alt="Hobbies"
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
        </Link>
      </section>

      {/* ── Education ── */}
      <EducationSection />

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}