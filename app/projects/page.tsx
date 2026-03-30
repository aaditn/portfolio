"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const taxcityParagraphs = [
  `I launched TaxCity in 2023. TaxCity helps address financial illiteracy in India and the world through an innovative multiplayer card game tailored for young adults. This pioneering endeavour aims to demystify the Indian taxation system with gamification, making complex financial concepts accessible and engaging for high school students. In the last 3 years, TaxCity has been implemented in 250+ schools across 12 countries and all Indian states, impacting approximately 48,000 students and distributing 7,350+ game kits. We have raised $120,000 from funders and donors and generated $20,000 through selling the game, the profits of which are imputed back into the community, specifically for women weaver communities in Punjab.`,
  `Mentored and led a team of 68 high and middle school students over 3 years preparing for the future of TaxCity, alongside providing early-scale professional opportunities for teenagers.`,
  `Awards and Recognitions: TaxCity has been featured on the front page of Times of India (India's oldest and largest English newspaper and the world's 9th largest newspaper), the Rajasthan Patrika (the world's 20th largest newspaper), Rediff, and the Dainik Bhaskar (India's largest newspaper and the world's 4th largest newspaper). I was awarded and featured as India's top 8 student entrepreneurs by the Economic Times (Asia's largest and the world's second largest business newspaper). The Prime Minister's National Child Prize (Pradhan Mantri Rashtriya Bal Puraskar) Finalist 2024 and 2025. The Prime Minister's National Child Prize is India's highest civilian honour for citizens under the age of 18, awarded annually by the Ministry of Women and Child Development and conferred by the President of India. I was nominated and selected as a finalist of the National Child Prize in India by the Minister of Women and Child Development, the National Selection Committee, and the Prime Minister's Secretariat in both 2024 and 2025 from more than 2,000 nominated students across India for the awarded government-recognised project I founded which is now one of Asia's largest student-run tax education organisation, called TaxCity Education.`,
  `TaxCity has partnered and collaborated with multiple universities & students from these universities, including the University of Delhi, USC, UCLA, Dartmouth College, IIT Mumbai, IIT Ropar, IIT Delhi, and the Tetr College of Business. Furthermore, I was invited as a chief guest speaker at the TETR Disrupt Global Entrepreneurship Challenge organised by the Tetr College of Business, Dubai, the Indian School of Hospitality, and the Indian School of Business and Finance. I also gave a TEDx Talk on the importance of financial literacy in Delhi in 2024. I also presented my project and was a panelist at Startup Mahakumb (India's national startup festival).`,
  `I was invited to lead and represent a 10-person India delegation at the Global Youth Summit 2025 organised by the Global Youth Parliament in Kathmandu. I received recognition and commendation from the Union Ministry of Skill Development, the Union Ministry of Social Justice and Welfare, the Union Ministry of Education, the Union Ministry of Finance, the Chief Minister of the National Capital Territory of Delhi, and the Nepalese Ministry of Education. We are in talks to collaborate with the American Museum of Finance (affiliated with the Smithsonian Institute) in Washington, D.C.`,
];

const otherProjects = [
  {
    key: "docsdocs",
    title: "DocsDocs",
    description: `I'm the co-founder of DocsDocs, an automated insurance claims platform that helps medical clinics recover revenue lost due to improper, delayed, or rejected insurance filings. We are building an automated insurance claims system for medical clinics that eliminates revenue loss caused by improper, delayed, or rejected filings. Small and mid-sized clinics and collection centres are estimated to incur a loss between $100k–200k every year due to improper insurance filings. Our platform automatically submits, tracks, and optimises claims to ensure doctors are paid accurately and on time, increasing cash flow without requiring them to see more patients. The initial focus is volume; we will target dental, dermatology, and ophthalmology clinics, as well as diagnostic centres. These practices process frequent claims and generally lack sophisticated back-office infrastructure. By automating the filings, we expect clinics to earn at least 10–15% more revenue just through the implementation. They would also invest more in additional facilities, prompting increased consumer demand for their services, further allowing the demand for the service to increase in the long term.

Currently, we are in a few dental offices, and we wish to expand to different departments. We will launch strategically in high-demand urban markets using healthcare utilisation data to maximise impact. The long-term vision is to expand across multiple fields of study, eventually operating at the insurance company level to eliminate the friction of middleman services entirely.`,
  },
  {
    key: "pil",
    title: "Public Interest Litigation (PIL Diary No. 50671/2024)",
    description:
      "Challenged absence of financial education in the national school curriculum via a Public Interest Litigation (PIL) to mandate its inclusion in schools. The government has taken steps to mandate financial literacy in schools due to this case heard by the Supreme Court of India.",
  },
  {
    key: "consulting",
    title: "Consulting",
    description:
      "I launched my independent consulting firm based online in 2024 and consulted 32 startups and mid-scale firms. Some of the notable projects I contributed to include scaling Coherent Education to 872 schools during its pre-launch phase, facilitating a large-scale collaboration between Lumatozer (a blockchain developer) and a network of hospitals in India, and driving Clearstack initiatives to secure non-sports revenue opportunities for varsity athletes at the University of Southern California.",
  },
  {
    key: "sigf",
    title: "Student Internet Governance Forum",
    description:
      "I was the director of communications and operations at the UN-backed Indian Internet Governance Forum's student wing. I managed communications and operations for 48 students as Chief Internal Communication and Operations Manager. Organized 4 international summits with 120+ participants from 12 countries and led successful collaborations with 4 firms, including Infosys, enhancing global discourse on internet governance.",
  },
];

export default function ProjectsPage() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [taxcityOpen, setTaxcityOpen] = useState(false);

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
          <span className="text-xs text-slate-400 uppercase tracking-widest">Projects</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6">
        {/* Page header */}
        <div className="pt-20 pb-12 border-b border-slate-100">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-3">
            Projects
          </h1>
          <p className="text-lg md:text-xl text-slate-500">
            From educating the world about taxation to climate mitigation
          </p>
        </div>

        {/* ── TaxCity (featured) ── */}
        <section className="py-12 border-b border-slate-100">
          <button
            onClick={() => setTaxcityOpen(!taxcityOpen)}
            className="w-full text-left group"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2 block">Featured</span>
                <h2 className="text-2xl md:text-3xl font-bold group-hover:text-blue-600 transition-colors">
                  TaxCity Education
                </h2>
              </div>
              <motion.span
                animate={{ rotate: taxcityOpen ? 180 : 0 }}
                className="text-slate-300 text-sm mt-2 shrink-0"
              >
                ▼
              </motion.span>
            </div>
          </button>

          <AnimatePresence>
            {taxcityOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-8 space-y-6">
                  {/* Hero image */}
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
                    <Image
                      src="/11.png"
                      alt="TaxCity Education"
                      fill
                      className="object-cover"
                      sizes="(max-width: 896px) 100vw, 896px"
                      priority
                    />
                  </div>

                  {/* First paragraph */}
                  <p className="text-slate-700 text-lg leading-relaxed">
                    {taxcityParagraphs[0]}
                  </p>

                  {/* Three photos in a row */}
                  <div className="grid grid-cols-3 gap-3">
                    {["/2.jpg", "/3.jpg", "/1.jpg"].map((src) => (
                      <div
                        key={src}
                        className={`relative rounded-xl overflow-hidden ${src === "/2.jpg" ? "aspect-[1600/1557]" : "aspect-[4/3]"}`}
                      >
                        <Image
                          src={src}
                          alt="TaxCity"
                          fill
                          className={src === "/1.jpg" ? "object-cover object-[center_62%]" : src === "/2.jpg" ? "object-contain" : "object-cover"}
                          sizes="(max-width: 896px) 33vw, 280px"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Remaining paragraphs */}
                  {taxcityParagraphs.slice(1).map((para, i) => (
                    <p key={i} className="text-slate-700 text-lg leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ── Other Projects ── */}
        {otherProjects.map((project) => (
          <section key={project.key} className="py-12 border-b border-slate-100 last:border-b-0">
            <button
              onClick={() =>
                setOpenKey(openKey === project.key ? null : project.key)
              }
              className="w-full text-left group flex items-start justify-between gap-4"
            >
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2 block">
                  {project.key === "docsdocs" ? "Startup" : project.key === "pil" ? "Legal" : project.key === "consulting" ? "Consulting" : "Leadership"}
                </span>
                <h2 className={`text-2xl md:text-3xl font-bold transition-colors ${
                  openKey === project.key ? "text-blue-600" : "group-hover:text-slate-600"
                }`}>
                  {project.title}
                </h2>
              </div>
              <motion.span
                animate={{ rotate: openKey === project.key ? 180 : 0 }}
                className="text-slate-300 text-sm mt-2 shrink-0"
              >
                ▼
              </motion.span>
            </button>
            <AnimatePresence>
              {openKey === project.key && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 text-slate-700 text-lg leading-relaxed space-y-4">
                    {project.description.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
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
