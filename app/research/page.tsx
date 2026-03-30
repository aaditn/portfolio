"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const researchData = [
  {
    key: "delhi-research",
    title: "Research @ the University of Delhi",
    category: "Research",
    description:
      "I was selected by Dr. Aastha Ahuja Khan, Associate Professor of Economics at the University of Delhi, to study taxation, finance, and financial equality in India concerning Micro, Small, and Medium Enterprises in India in 2023. I analysed 200+ MSMEs for their financial health and the impact of similar products launched by large firms. Dr. Khan and I also studied government taxation policies for MSMEs. Using this compiled data, we submitted policy suggestions to the Indian government.",
  },
  {
    key: "crest-gold",
    title: "British Science Association CREST Gold Research Award",
    category: "Research Award",
    description:
      "I authored a research paper published in the competitive, double-blind, peer-reviewed International Journal of Economics and Management Sciences about the global toy and gaming industry and analysed growth and other factors over the last 20 years. Furthermore, I identified the toy, a children's counterpart for the lipstick effect, using linear regression and statistical analysis in Python. I presented the paper at Sigma Xi (The Scientific Research Honour Society) Innosphere High School Research and Tech Conference 2024. I also received a letter of appreciation from consulting economist Dr. Nalini Sud.",
  },
  {
    key: "usc-econ",
    title: "Economics Research @ USC",
    category: "Research",
    description:
      "I worked under Prof. Joao Ramos at USC, who specialises in Economic Theory. I developed a primary-data driven research project on how individuals negotiate and allocate money under controlled conditions. We worked with USC Marshall's Behavioural Research Lab for this study. I worked towards the creation of the main dataset, leading 200+ people to participate in our project. Contrary to the canonical prediction of standard rational-choice theory—which assumes strict monetary payoff maximisation—the findings reveal systematic departures from purely self-interested behaviour. Across 262 participants, proposers overwhelmingly favoured equitable allocations of the $10 endowment, with the modal offer being an equal $5–$5 split. Minimal offers ($0–$1), which would be predicted under strict rational maximisation, were rare. On the responder side, participants frequently indicated willingness to reject low but positive offers, often setting minimum acceptable thresholds near $5. This implies a readiness to incur personal monetary cost in order to sanction perceived unfairness.",
  },
  {
    key: "toycathon",
    title:
      "National Champion, The First Ministry of Women and Child Development National Toycathon",
    category: "Competition",
    description:
      "In 2021, the Prime Minister of India, Narendra Modi, declared the importance of the Indian toy and game industry and launched the National Toycathon 2021 under the Ministry of Women and Child Development. I captained a team of three (Team Name: DPS ASM) and created JUNG, which was a strategy board game that taught students about forex transactions and intermediate game theory alongside modern Indian history. Out of 129,000 applicants, we were selected as the National Champions and presented our project to the Prime Minister of India.",
  },
  {
    key: "john-locke",
    title:
      "High Commendation, John Locke Institute History & Economics Research Essay 2024",
    category: "Essay Competition",
    description:
      "The John Locke Institute organises the world's most competitive student-essay competition, where I received a high commendation from more than 70,000 applicants in 2025 in the History Category and as a finalist in the Economics Category in 2024. The John Locke Institute is an independent research institute and think tank based in Oxford and Princeton. In 2025, I wrote a history paper in which I philosophically examined which individual contributed the most to expanding human freedom. In 2024, I authored a paper analysing the punctuated equilibrium in economic growth in the late 18th century and the reasons for the lack of growth before this period.",
  },
  {
    key: "gandhi-quiz",
    title: "The National Gandhi Museum Gandhi Quiz 2020",
    category: "Competition",
    description:
      "I represented my school at a quiz competition for the inauguration of the National Gandhi Museum, New Delhi, and came first out of more than 10,000 student participants from across India. I went on to be awarded by the Chairman of the National Gandhi Museum and the Minister of Culture.",
  },
  {
    key: "dmi-internship",
    title: "DMI Finance Pvt. Ltd. Internship",
    category: "Internship",
    description:
      "Jun 2024 – Jul 2024: I was selected as one of 7 out of 2000 applicants, and the only consumer finance and banking partnerships product intern at a New York-based leading Indian lender with $2B in assets, backed by MUFG Bank. I analysed 57 healthcare service providers across India for a pilot-stage health EMI card, conducting comprehensive research on the competitive landscape by understanding cost, government regulations, consumer mindset, and future growth. I undertook cost-benefit analysis, created a competitor matrix & compiled a report against the launch of the product and presented it in front of the Sr. Vice President, Product.",
  },
  {
    key: "lehigh",
    title:
      "Lehigh University Summer School: Building Leaders of the Future, 2024",
    category: "Summer Program",
    description:
      "Nominated as 1 of 2 students from 5,000 to serve as CFO of Synq, a fictional digital music firm. Led a team of 4 to develop a 30-year financial strategy, earning 3rd place among 100 participants. Offered a research partnership by program facilitator, Professor Dr Willy Das, for exceptional performance and strategic insight.",
  },
  {
    key: "hkbu",
    title:
      "Hong Kong Baptist University Summer School: Mastering Calculus, 2024",
    category: "Summer Program",
    description:
      "Nominated as 1 of 2K students to study advanced calculus applications in business and architecture under HKBU Asst. Prof. Kei Fong Lam. Gained insights into real-world problem-solving, enhancing my readiness for STEM and Economics challenges.",
  },
  {
    key: "smithsonian",
    title: "Volunteer, Smithsonian Institute",
    category: "Volunteering",
    description:
      "The Smithsonian Institution (estd. 1846) is the world's largest museum, education, and research complex. Located in Washington, D.C., it comprises 21 museums, the National Zoo, and research centers, showcasing art, history, science, and culture. The Smithsonian invites volunteers worldwide to transcribe historical documents from its archives for digital conservation. Supported the initiative by accurately transcribing over 30 historical handwritten documents from the archives, making them accessible to researchers and the public and ensuring their preservation for future generations.",
  },
];

export default function ResearchPage() {
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
          <span className="text-xs text-slate-400 uppercase tracking-widest">Research &amp; Awards</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6">
        {/* Page header */}
        <div className="pt-20 pb-12 border-b border-slate-100">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-3">
            Research, Awards &amp; Competitions
          </h1>
          <p className="text-lg md:text-xl text-slate-500">
            Economics research and national level awards
          </p>
        </div>

        {/* Items */}
        {researchData.map((item) => (
          <section key={item.key} className="py-12 border-b border-slate-100 last:border-b-0">
            <button
              onClick={() =>
                setOpenKey(openKey === item.key ? null : item.key)
              }
              className="w-full text-left group flex items-start justify-between gap-4"
            >
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2 block">{item.category}</span>
                <h2 className={`text-2xl md:text-3xl font-bold transition-colors ${
                  openKey === item.key ? "text-blue-600" : "group-hover:text-slate-600"
                }`}>
                  {item.title}
                </h2>
              </div>
              <motion.span
                animate={{ rotate: openKey === item.key ? 180 : 0 }}
                className="text-slate-300 text-sm mt-2 shrink-0"
              >
                ▼
              </motion.span>
            </button>
            <AnimatePresence>
              {openKey === item.key && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 text-slate-700 text-lg leading-relaxed space-y-4">
                    {item.description.split("\n\n").map((para, i) => (
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
