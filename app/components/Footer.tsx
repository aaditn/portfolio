"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full py-16 border-t border-blue-100 bg-[#f6fbff]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-8">
        {/* Links */}
        <div className="flex items-center gap-8">
          <motion.a
            href="https://www.linkedin.com/in/manas-sood/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate-600 hover:text-blue-600 transition-colors"
            whileHover={{ y: -2 }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </motion.a>

          <span className="text-blue-200">|</span>

          <motion.a
            href="/Manas_Sood_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate-600 hover:text-blue-600 transition-colors"
            whileHover={{ y: -2 }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Resume
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-slate-500 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} Manas Sood. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
