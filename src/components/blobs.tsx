"use client";

import { motion } from "framer-motion";

export function Blob({
  className = "",
  color = "rgba(59, 130, 246, 0.08)",
  size = 600,
  delay = 0,
}: {
  className?: string;
  color?: string;
  size?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay }}
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
      }}
    />
  );
}

export function WaveSeparator({
  flip = false,
  fromColor = "#f8f9fc",
  toColor = "#eef2f7",
}: {
  flip?: boolean;
  fromColor?: string;
  toColor?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}
      style={{ background: fromColor }}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ rotate: [0, 360], y: [0, -15, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] right-[10%] w-20 h-20 rounded-2xl border border-blue-300/20 rotate-12"
      />
      <motion.div
        animate={{ rotate: [0, -360], x: [0, 10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[60%] left-[5%] w-14 h-14 rounded-full border border-sky-300/15"
      />
      <motion.div
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] right-[15%] w-10 h-10 rounded-lg border border-blue-200/15 rotate-45"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[40%] left-[50%] w-32 h-32 rounded-full bg-blue-400/8"
      />
    </div>
  );
}
