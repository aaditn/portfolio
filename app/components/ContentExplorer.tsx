"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ══════════════════════════════════════
   DATA
   ══════════════════════════════════════ */

const projectsData = [
  {
    key: "taxcity",
    title: "TaxCity Education",
    image: "/images/taxcity.jpg",
    description: `I launched TaxCity in 2023. TaxCity helps address financial illiteracy in India and the world through an innovative multiplayer card game tailored for young adults. This pioneering endeavour aims to demystify the Indian taxation system with gamification, making complex financial concepts accessible and engaging for high school students. In the last 3 years, TaxCity has been implemented in 250+ schools across 12 countries and all Indian states, impacting approximately 48,000 students and distributing 7,350+ game kits. We have raised $120,000 from funders and donors and generated $20,000 through selling the game, the profits of which are imputed back into the community, specifically for women weaver communities in Punjab.

Mentored and led a team of 68 high and middle school students over 3 years preparing for the future of TaxCity, alongside providing early-scale professional opportunities for teenagers.

Awards and Recognitions: TaxCity has been featured on the front page of Times of India (India's oldest and largest English newspaper and the world's 9th largest newspaper), the Rajasthan Patrika (the world's 20th largest newspaper), Rediff, and the Dainik Bhaskar (India's largest newspaper and the world's 4th largest newspaper). I was awarded and featured as India's top 8 student entrepreneurs by the Economic Times (Asia's largest and the world's second largest business newspaper). The Prime Minister's National Child Prize (Pradhan Mantri Rashtriya Bal Puraskar) Finalist 2024 and 2025. The Prime Minister's National Child Prize is India's highest civilian honour for citizens under the age of 18, awarded annually by the Ministry of Women and Child Development and conferred by the President of India. I was nominated and selected as a finalist of the National Child Prize in India by the Minister of Women and Child Development, the National Selection Committee, and the Prime Minister's Secretariat in both 2024 and 2025 from more than 2,000 nominated students across India for the awarded government-recognised project I founded which is now one of Asia's largest student-run tax education organisation, called TaxCity Education.

TaxCity has partnered and collaborated with multiple universities & students from these universities, including the University of Delhi, USC, UCLA, Dartmouth College, IIT Mumbai, IIT Ropar, IIT Delhi, and the Tetr College of Business. Furthermore, I was invited as a chief guest speaker at the TETR Disrupt Global Entrepreneurship Challenge organised by the Tetr College of Business, Dubai, the Indian School of Hospitality, and the Indian School of Business and Finance. I also gave a TEDx Talk on the importance of financial literacy in Delhi in 2024. I also presented my project and was a panelist at Startup Mahakumb (India's national startup festival).

I was invited to lead and represent a 10-person India delegation at the Global Youth Summit 2025 organised by the Global Youth Parliament in Kathmandu. I received recognition and commendation from the Union Ministry of Skill Development, the Union Ministry of Social Justice and Welfare, the Union Ministry of Education, the Union Ministry of Finance, the Chief Minister of the National Capital Territory of Delhi, and the Nepalese Ministry of Education. We are in talks to collaborate with the American Museum of Finance (affiliated with the Smithsonian Institute) in Washington, D.C.`,
  },
  {
    key: "docsdocs",
    title: "Docs Docs",
    image: "/images/docsdocs.jpg",
    description: `I'm the co-founder of DocsDocs, an automated insurance claims platform that helps medical clinics recover revenue lost due to improper, delayed, or rejected insurance filings. We are building an automated insurance claims system for medical clinics that eliminates revenue loss caused by improper, delayed, or rejected filings. Small and mid-sized clinics and collection centres are estimated to incur a loss between $100k–200k every year due to improper insurance filings. Our platform automatically submits, tracks, and optimises claims to ensure doctors are paid accurately and on time, increasing cash flow without requiring them to see more patients. The initial focus is volume; we will target dental, dermatology, and ophthalmology clinics, as well as diagnostic centres. These practices process frequent claims and generally lack sophisticated back-office infrastructure. By automating the filings, we expect clinics to earn at least 10–15% more revenue just through the implementation. They would also invest more in additional facilities, prompting increased consumer demand for their services, further allowing the demand for the service to increase in the long term.

Currently, we are in a few dental offices, and we wish to expand to different departments. We will launch strategically in high-demand urban markets using healthcare utilisation data to maximise impact. The long-term vision is to expand across multiple fields of study, eventually operating at the insurance company level to eliminate the friction of middleman services entirely.`,
  },
  {
    key: "pil",
    title: "Public Interest Litigation (PIL Diary No. 50671/2024)",
    image: "/images/pil.jpg",
    description: "Challenged absence of financial education in the national school curriculum via a Public Interest Litigation (PIL) to mandate its inclusion in schools. The government has taken steps to mandate financial literacy in schools due to this case heard by the Supreme Court of India.",
  },
  {
    key: "consulting",
    title: "Consulting",
    image: "/images/consulting.jpg",
    description: "I launched my independent consulting firm based online in 2024 and consulted 32 startups and mid-scale firms. Some of the notable projects I contributed to include scaling Coherent Education to 872 schools during its pre-launch phase, facilitating a large-scale collaboration between Lumatozer (a blockchain developer) and a network of hospitals in India, and driving Clearstack initiatives to secure non-sports revenue opportunities for varsity athletes at the University of Southern California.",
  },
  {
    key: "sigf",
    title: "Student Internet Governance Forum",
    image: "/images/sigf.jpg",
    description: "I was the director of communications and operations at the UN-backed Indian Internet Governance Forum's student wing. I managed communications and operations for 48 students as Chief Internal Communication and Operations Manager. Organized 4 international summits with 120+ participants from 12 countries and led successful collaborations with 4 firms, including Infosys, enhancing global discourse on internet governance.",
  },
];

const researchData = [
  {
    key: "delhi-research",
    title: "Research @ the University of Delhi",
    description: "I was selected by Dr. Aastha Ahuja Khan, Associate Professor of Economics at the University of Delhi, to study taxation, finance, and financial equality in India concerning Micro, Small, and Medium Enterprises in India in 2023. I analysed 200+ MSMEs for their financial health and the impact of similar products launched by large firms. Dr. Khan and I also studied government taxation policies for MSMEs. Using this compiled data, we submitted policy suggestions to the Indian government.",
  },
  {
    key: "crest-gold",
    title: "British Science Association CREST Gold Research Award",
    description: "I authored a research paper published in the competitive, double-blind, peer-reviewed International Journal of Economics and Management Sciences about the global toy and gaming industry and analysed growth and other factors over the last 20 years. Furthermore, I identified the toy, a children's counterpart for the lipstick effect, using linear regression and statistical analysis in Python. I presented the paper at Sigma Xi (The Scientific Research Honour Society) Innosphere High School Research and Tech Conference 2024. I also received a letter of appreciation from consulting economist Dr. Nalini Sud.",
  },
  {
    key: "usc-econ",
    title: "Economics Research @ USC",
    description: "I worked under Prof. Joao Ramos at USC, who specialises in Economic Theory. I developed a primary-data driven research project on how individuals negotiate and allocate money under controlled conditions. We worked with USC Marshall's Behavioural Research Lab for this study. I worked towards the creation of the main dataset, leading 200+ people to participate in our project. Contrary to the canonical prediction of standard rational-choice theory—which assumes strict monetary payoff maximisation—the findings reveal systematic departures from purely self-interested behaviour. Across 262 participants, proposers overwhelmingly favoured equitable allocations of the $10 endowment, with the modal offer being an equal $5–$5 split. Minimal offers ($0–$1), which would be predicted under strict rational maximisation, were rare. On the responder side, participants frequently indicated willingness to reject low but positive offers, often setting minimum acceptable thresholds near $5. This implies a readiness to incur personal monetary cost in order to sanction perceived unfairness.",
  },
  {
    key: "toycathon",
    title:
      "National Champion, The First Ministry of Women and Child Development National Toycathon",
    description: "In 2021, the Prime Minister of India, Narendra Modi, declared the importance of the Indian toy and game industry and launched the National Toycathon 2021 under the Ministry of Women and Child Development. I captained a team of three (Team Name: DPS ASM) and created JUNG, which was a strategy board game that taught students about forex transactions and intermediate game theory alongside modern Indian history. Out of 129,000 applicants, we were selected as the National Champions and presented our project to the Prime Minister of India.",
  },
  {
    key: "john-locke",
    title:
      "High Commendation, John Locke Institute History & Economics Research Essay 2024",
    description: "The John Locke Institute organises the world's most competitive student-essay competition, where I received a high commendation from more than 70,000 applicants in 2025 in the History Category and as a finalist in the Economics Category in 2024. The John Locke Institute is an independent research institute and think tank based in Oxford and Princeton. In 2025, I wrote a history paper in which I philosophically examined which individual contributed the most to expanding human freedom. In 2024, I authored a paper analysing the punctuated equilibrium in economic growth in the late 18th century and the reasons for the lack of growth before this period.",
  },
  {
    key: "gandhi-quiz",
    title: "The National Gandhi Museum Gandhi Quiz 2020",
    description: "I represented my school at a quiz competition for the inauguration of the National Gandhi Museum, New Delhi, and came first out of more than 10,000 student participants from across India. I went on to be awarded by the Chairman of the National Gandhi Museum and the Minister of Culture.",
  },
  {
    key: "dmi-internship",
    title: "DMI Finance Pvt. Ltd. Internship",
    description: "Jun 2024 – Jul 2024: I was selected as one of 7 out of 2000 applicants, and the only consumer finance and banking partnerships product intern at a New York-based leading Indian lender with $2B in assets, backed by MUFG Bank. I analysed 57 healthcare service providers across India for a pilot-stage health EMI card, conducting comprehensive research on the competitive landscape by understanding cost, government regulations, consumer mindset, and future growth. I undertook cost-benefit analysis, created a competitor matrix & compiled a report against the launch of the product and presented it in front of the Sr. Vice President, Product.",
  },
  {
    key: "lehigh",
    title:
      "Lehigh University Summer School: Building Leaders of the Future, 2024",
    description: "Nominated as 1 of 2 students from 5,000 to serve as CFO of Synq, a fictional digital music firm. Led a team of 4 to develop a 30-year financial strategy, earning 3rd place among 100 participants. Offered a research partnership by program facilitator, Professor Dr Willy Das, for exceptional performance and strategic insight.",
  },
  {
    key: "hkbu",
    title:
      "Hong Kong Baptist University Summer School: Mastering Calculus, 2024",
    description: "Nominated as 1 of 2K students to study advanced calculus applications in business and architecture under HKBU Asst. Prof. Kei Fong Lam. Gained insights into real-world problem-solving, enhancing my readiness for STEM and Economics challenges.",
  },
  {
    key: "smithsonian",
    title: "Volunteer, Smithsonian Institute",
    description: "The Smithsonian Institution (estd. 1846) is the world's largest museum, education, and research complex. Located in Washington, D.C., it comprises 21 museums, the National Zoo, and research centers, showcasing art, history, science, and culture. The Smithsonian invites volunteers worldwide to transcribe historical documents from its archives for digital conservation. Supported the initiative by accurately transcribing over 30 historical handwritten documents from the archives, making them accessible to researchers and the public and ensuring their preservation for future generations.",
  },
];

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

/* ══════════════════════════════════════
   Animations
   ══════════════════════════════════════ */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, damping: 20, stiffness: 300 },
  },
};

/* ══════════════════════════════════════
   Sub-components
   ══════════════════════════════════════ */

function PhotoScatter({
  items,
  onSelect,
}: {
  items: typeof projectsData;
  onSelect: (key: string) => void;
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto px-6"
    >
      {items.map((item, i) => (
        <motion.div
          key={item.key}
          variants={itemVariants}
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-blue-100 bg-white cursor-pointer shadow-sm"
          onClick={() => onSelect(item.key)}
        >
          {/* Placeholder gradient since images aren't uploaded yet */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, 
                hsl(${(i * 25 + 200) % 360}, 70%, 88%), 
                hsl(${(i * 25 + 220) % 360}, 75%, 95%))`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-sm md:text-base font-semibold text-black leading-tight">
              {item.title}
            </h4>
          </div>
          <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      ))}
    </motion.div>
  );
}

function ProjectDetail({
  project,
  onBack,
}: {
  project: (typeof projectsData)[0];
  onBack: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="max-w-3xl mx-auto px-6"
    >
      <button
        onClick={onBack}
        className="text-blue-600 text-sm uppercase tracking-[0.2em] mb-8 hover:text-blue-500 transition-colors flex items-center gap-2"
      >
        <span>&larr;</span> Back
      </button>
      <h3
        className="text-3xl md:text-4xl font-bold mb-6"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {project.title}
      </h3>
      <div className="text-slate-700 text-base md:text-lg leading-relaxed space-y-4">
        {project.description.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </motion.div>
  );
}

function ResearchFolders() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="max-w-4xl mx-auto px-6 space-y-3"
    >
      {researchData.map((item) => (
        <motion.div
          key={item.key}
          variants={itemVariants}
          className="border border-blue-100 rounded-xl overflow-hidden bg-white shadow-sm"
        >
          <button
            onClick={() =>
              setOpenKey(openKey === item.key ? null : item.key)
            }
            className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={openKey === item.key ? "#2563eb" : "#64748b"}
                strokeWidth="1.5"
                className="shrink-0"
              >
                <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <span
                className={`text-sm md:text-base font-medium transition-colors ${
                  openKey === item.key ? "text-blue-600" : "text-black"
                }`}
              >
                {item.title}
              </span>
            </div>
            <motion.span
              animate={{ rotate: openKey === item.key ? 180 : 0 }}
              className="text-slate-500 text-sm"
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
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pt-1 text-slate-700 text-sm leading-relaxed border-t border-blue-100 space-y-3">
                  {item.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
}

function HobbyBricks() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="max-w-5xl mx-auto px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hobbiesData.map((hobby) => (
          <motion.div
            key={hobby.key}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="lego-brick rounded-2xl p-6 cursor-pointer relative overflow-hidden"
            style={{
              backgroundColor: hobby.color + "22",
              border: `1px solid ${hobby.color}44`,
              boxShadow:
                openKey === hobby.key
                  ? `0 0 40px ${hobby.color}33`
                  : "none",
            }}
            onClick={() =>
              setOpenKey(openKey === hobby.key ? null : hobby.key)
            }
          >
            {/* Lego studs */}
            <div className="flex gap-3 mb-4">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full"
                  style={{
                    backgroundColor: hobby.color + "66",
                    boxShadow: `inset 0 -2px 4px ${hobby.color}44, 0 2px 4px rgba(37,99,235,0.15)`,
                  }}
                />
              ))}
            </div>

            <h4
              className="text-xl font-bold mb-2"
              style={{ color: hobby.color }}
            >
              {hobby.title}
            </h4>

            <AnimatePresence>
              {openKey === hobby.key && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-slate-700 text-base leading-relaxed overflow-hidden"
                >
                  {hobby.description}
                </motion.p>
              )}
            </AnimatePresence>

            {openKey !== hobby.key && (
              <p className="text-slate-500 text-xs mt-2">Click to expand</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════
   MAIN EXPORT
   ══════════════════════════════════════ */

type SubTab = "projects" | "research" | "hobbies";

export default function ContentExplorer({
  activeSection,
}: {
  activeSection: string | null;
}) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // When section changes, reset subtabs
  const currentSection = activeSection as SubTab | null;

  if (!currentSection) return null;

  return (
    <motion.section
      key={currentSection}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full py-16 md:py-24"
    >
      {/* Section header */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {currentSection === "projects" && "Projects"}
          {currentSection === "research" && "Research, Awards & Competitions"}
          {currentSection === "hobbies" && "Hobbies"}
        </motion.h2>
        <div className="h-px bg-gradient-to-r from-blue-500 via-blue-300/40 to-transparent mb-8" />

        {/* Sub-tab navigation (corner) */}
        {currentSection === "projects" && !selectedProject && (
          <div className="flex gap-4 mb-8">
            {projectsData.map((p) => (
              <button
                key={p.key}
                onClick={() => setSelectedProject(p.key)}
                className={`text-xs uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border transition-all ${
                  selectedProject === p.key
                    ? "border-blue-500 text-blue-600 bg-blue-50"
                    : "border-blue-100 text-slate-600 hover:text-black hover:border-blue-300"
                }`}
              >
                {p.title.length > 20
                  ? p.title.substring(0, 20) + "..."
                  : p.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {currentSection === "projects" && !selectedProject && (
          <PhotoScatter
            items={projectsData}
            onSelect={(key) => setSelectedProject(key)}
          />
        )}
        {currentSection === "projects" && selectedProject && (
          <ProjectDetail
            project={projectsData.find((p) => p.key === selectedProject)!}
            onBack={() => setSelectedProject(null)}
          />
        )}
        {currentSection === "research" && <ResearchFolders />}
        {currentSection === "hobbies" && <HobbyBricks />}
      </AnimatePresence>
    </motion.section>
  );
}
