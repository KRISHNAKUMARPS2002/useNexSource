"use client";

import React from "react";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

// Certificates
const certificates = [
  "FSSAI License",
  "HACCP Certificate",
  "ISO 22000 Certificate",
  "BRCGS Certification",
  "IFS Certificate",
  "SQF Certification",
  "GMP Certificate",
  "Halal Certificate",
  "Kosher Certificate",
  "Organic Certification",
  "Rainforest Alliance Certification",
  "Fair Trade Certificate",
  "ISO 14001 Certificate",
  "Carbon Footprint Declaration",
  "REACH Compliance",
  "MSDS (Material Safety Data Sheets)",
  "COA (Certificate of Analysis)",
  "Pesticide Residue Report",
  "Heavy Metals Test Report",
  "Microbiological Test Report",
  "Company Registration Certificate",
  "PAN / GST Certificate",
  "Import Export Code (IEC)",
  "Trade License",
  "Fire & Safety Certificate",
  "ISO 9001 Certificate",
  "ISO 45001 Certificate",
  "Calibration Certificates",
  "NDA (Non-Disclosure Agreement)",
  "Vendor Agreement / SLA",
];

// Split into 3 rows
const row1 = certificates.slice(0, 10);
const row2 = certificates.slice(10, 20);
const row3 = certificates.slice(20, 30);

const loop = (items: string[]) => [...items, ...items];

export default function CertificateShowcase() {
  return (
    <section className="relative max-w-7xl mx-auto mt-10 md:mt-20 rounded-3xl overflow-hidden py-10 md:py-20 mb-20 bg-gray-gradient">
      {/* Header */}
      <div className="max-w-[550px] mx-auto text-center mb-12 relative z-10 px-3">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 md:mt-6">
          Simplify Supplier Document Collection and Oversight
        </h2>
        <p className="text-foreground text-sm md:text-lg mt-5 mb-5 md:mb-10">
          Easily request, organize, and monitor all critical supplier
          documentation. Stay compliant and prepared without the hassle of
          chasing paperwork.
        </p>
      </div>

      {/* Foggy edges */}
      {/* <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[rgba(25,26,15,0.1)]  to-transparent backdrop-blur-lg opacity-40 z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[rgba(18,18,17,0.04)] to-transparent backdrop-blur-lg opacity-40 z-20 pointer-events-none" /> */}

      {/* Scrolling Certificate Rows */}
      <div className="space-y-6 relative z-10">
        {[
          { data: row1, speed: 35 },
          { data: row2, speed: 45 },
          { data: row3, speed: 55 },
        ].map((row, i) => (
          <motion.div
            key={i}
            className="flex gap-4 w-max"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: row.speed,
              ease: "linear",
            }}
          >
            {loop(row.data).map((doc, idx) => (
              <div
                key={`${i}-${idx}`}
                className="min-w-[200px] bg-[#fcfcfc] border border-[#e0e0e0] rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-4 flex items-center gap-2"
              >
                <FileText className="text-info w-5 h-5 shrink-0" />
                <p className="text-sm text-gray-700">{doc}</p>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
