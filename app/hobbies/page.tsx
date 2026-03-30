"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const hobbiesData = [
  {
    key: "legos",
    title: "LEGOs",
    color: "#2563eb",
    description:
      "Since age 3, built 350+ LEGO sets, including 15+ advanced cityscapes. Through Roboknights at DPS RK Puram, taught robotics with LEGO. Launched a successful 10K-view YouTube channel and built a LEGO lending library in Delhi NCR, generating INR 10K in revenue while inspiring young minds in robotics.",
  },
  {
    key: "diving",
    title: "Snorkelling & Scuba Diving",
    color: "#38bdf8",
    description:
      "I am a licensed PADI diver. I have dived in major dive sites, including the Great Barrier Reef, Mauritius, Okinawa, Half Moon Bay, and Sri Lanka. I am also a seasoned swimmer and snorkelling enthusiast.",
  },
  {
    key: "keyboard",
    title: "Electronic Keyboard",
    color: "#60a5fa",
    description:
      "I hold a diploma in electronic keyboard and music theory from the Trinity College London. I was selected for a scholarship at the Delhi School of Music to study under Mr Akshay R Saxena, a Cannes Film Festival-awarded artist. I have performed in front of more than 500 people at two concerts.",
  },
];

export default function HobbiesPage() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-[#eef6ff] text-black">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-slate-500 hover:text-black font-medium transition-colors flex items-center gap-2 text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Home
          </Link>
          <span className="text-xs text-slate-400 uppercase tracking-widest">Hobbies</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6">
        {/* Page header */}
        <div className="pt-20 pb-12 border-b border-slate-100">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-3">
            Hobbies
          </h1>
          <p className="text-lg md:text-xl text-slate-500">
            Everyone&apos;s fun side can be impact-driven and smart
          </p>
        </div>

        {/* Hobby items */}
        {hobbiesData.map((hobby) => (
          <section key={hobby.key} className="py-12 border-b border-slate-100 last:border-b-0">
            <button
              onClick={() =>
                setOpenKey(openKey === hobby.key ? null : hobby.key)
              }
              className="w-full text-left group flex items-start justify-between gap-4"
            >
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2 block">{hobby.key === "legos" ? "Building & Robotics" : hobby.key === "diving" ? "Adventure" : "Music"}</span>
                <h2 className={`text-2xl md:text-3xl font-bold transition-colors ${
                  openKey === hobby.key ? "text-blue-600" : "group-hover:text-slate-600"
                }`}>
                  {hobby.title}
                </h2>
              </div>
              <motion.span
                animate={{ rotate: openKey === hobby.key ? 180 : 0 }}
                className="text-slate-300 text-sm mt-2 shrink-0"
              >
                ▼
              </motion.span>
            </button>
            <AnimatePresence>
              {openKey === hobby.key && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 text-slate-700 text-lg leading-relaxed space-y-4">
                    <p>{hobby.description}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        ))}

        <div className="h-16" />
      </div>
    </div>
  );
}
