"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ButterflyFollower() {
  const [visible, setVisible] = useState(false);
  const [landed, setLanded] = useState(false);
  const cursorX = useRef(0);
  const cursorY = useRef(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.current = e.clientX;
      cursorY.current = e.clientY;
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
      if (!visible) setVisible(true);
    };

    const handleEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']")
      ) {
        setLanded(true);
      }
    };

    const handleLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']")
      ) {
        setLanded(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleEnter, true);
    document.addEventListener("mouseleave", handleLeave, true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleEnter, true);
      document.removeEventListener("mouseleave", handleLeave, true);
    };
  }, [x, y, visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ x, y }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Left wing */}
        <motion.path
          d="M16 16 C12 8, 4 4, 2 10 C0 16, 8 18, 16 16Z"
          fill="rgba(59, 130, 246, 0.65)"
          stroke="rgba(37, 99, 235, 0.9)"
          strokeWidth="0.5"
          animate={{
            d: landed
              ? "M16 16 C14 12, 10 10, 8 13 C6 16, 12 17, 16 16Z"
              : [
                  "M16 16 C12 8, 4 4, 2 10 C0 16, 8 18, 16 16Z",
                  "M16 16 C13 10, 6 6, 4 11 C2 16, 10 18, 16 16Z",
                  "M16 16 C12 8, 4 4, 2 10 C0 16, 8 18, 16 16Z",
                ],
          }}
          transition={
            landed
              ? { duration: 0.3 }
              : { duration: 0.4, repeat: Infinity, ease: "easeInOut" }
          }
        />
        {/* Right wing */}
        <motion.path
          d="M16 16 C20 8, 28 4, 30 10 C32 16, 24 18, 16 16Z"
          fill="rgba(59, 130, 246, 0.65)"
          stroke="rgba(37, 99, 235, 0.9)"
          strokeWidth="0.5"
          animate={{
            d: landed
              ? "M16 16 C18 12, 22 10, 24 13 C26 16, 20 17, 16 16Z"
              : [
                  "M16 16 C20 8, 28 4, 30 10 C32 16, 24 18, 16 16Z",
                  "M16 16 C19 10, 26 6, 28 11 C30 16, 22 18, 16 16Z",
                  "M16 16 C20 8, 28 4, 30 10 C32 16, 24 18, 16 16Z",
                ],
          }}
          transition={
            landed
              ? { duration: 0.3 }
              : {
                  duration: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.05,
                }
          }
        />
        {/* Body */}
        <ellipse
          cx="16"
          cy="16"
          rx="1"
          ry="3"
          fill="rgba(30, 64, 175, 1)"
        />
        {/* Antennae */}
        <line
          x1="15"
          y1="13"
          x2="13"
          y2="9"
          stroke="rgba(37, 99, 235, 0.8)"
          strokeWidth="0.5"
        />
        <line
          x1="17"
          y1="13"
          x2="19"
          y2="9"
          stroke="rgba(37, 99, 235, 0.8)"
          strokeWidth="0.5"
        />
        <circle cx="13" cy="9" r="0.7" fill="rgba(37, 99, 235, 0.8)" />
        <circle cx="19" cy="9" r="0.7" fill="rgba(37, 99, 235, 0.8)" />
      </svg>
    </motion.div>
  );
}
