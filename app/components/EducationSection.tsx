"use client";

import { motion } from "framer-motion";

const education = [
  {
    school: "Delhi Public School R. K. Puram",
    period: "2011 – 2025",
    subjects: "Physics, Economics, Mathematics, Computer Science, and English",
    highlights: [
      "Cumulative GPA: 4.0/4.0; Top 1%",
      "President of the Student Council to represent 10k+ students",
      "Head Treasurer for all 26 school clubs, raising $105,000 over 2023–25 for school events and club functions",
      "President, Case Team",
      "President, Quizzing Club",
      "Co-Founder, Research Club",
      "VP, Economics Society",
      "VP, Mathematics Society",
      "VP, History Society",
    ],
  },
  {
    school: "University of Southern California",
    period: "2025 – 2029",
    subjects: "Major: Finance and International Relations",
    highlights: [
      "McCarthy Honors Student & Captain, McCarthy Honors College",
      "International Freshman Academic Scholarship",
      "Centre for Political Future Scholar",
      "USC-Duke Near Crisis Project",
      "Marshall Case Team",
      "Member: Trojan Investing Society",
      "Beta Alpha Psi (Business Honor Society)",
      "Marshall Ambassador",
      "Business Lead, USC's BattleBots team",
      "Selected for the Robert J. Coury Leadership Program and the fully-funded 2026 Marshall LiNC Program in Tokyo",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 20, stiffness: 200 },
  },
};

export default function EducationSection() {
  return (
    <section className="w-full py-24 md:py-32 relative bg-[#f8fbff]">

      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-16 max-w-xs mx-auto"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.school}
              variants={itemVariants}
            >
              <div className="bg-white border border-blue-100 rounded-2xl p-8 hover:border-blue-300 transition-colors shadow-sm h-full">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <h3
                    className="text-2xl font-bold text-black"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {edu.school}
                  </h3>
                  <span className="text-blue-600 text-sm font-medium tracking-wider">
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-6 italic">
                  {edu.subjects}
                </p>
                <ul className="space-y-2.5">
                  {edu.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-slate-700 text-sm leading-relaxed flex gap-3"
                    >
                      <span className="text-blue-600 mt-1 shrink-0">
                        ▸
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
