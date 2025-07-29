// src/components/landing/InfiniteScroller.tsx
"use client";

import { motion } from "framer-motion";

const texts = [
  "Automated Compliance",
  "Real-Time Supplier Insights",
  "Audit-Ready Reports",
  "No More Excel Chaos",
  "CAPA Tracking Simplified",
  "Centralized Supplier Management",
];

export default function InfiniteScroller() {
  return (
    <div className="w-full overflow-hidden bg-primary border-t border-gray-200 py-6">
      <motion.div
        className="flex whitespace-nowrap gap-12"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[...texts, ...texts].map((text, index) => (
          <span
            key={index}
            className="text-lg text-white font-medium tracking-wide"
          >
            {text} &nbsp;•&nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  );
}
