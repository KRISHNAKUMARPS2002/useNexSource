"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Replace with real Q&A content
const faqs = [
  {
    question: "What is Supplyline?",
    answer:
      "Supplyline is a centralized SaaS platform for food manufacturers to manage supplier compliance, documentation, and issue tracking.",
  },
  {
    question: "How does document expiry notification work?",
    answer:
      "Admins receive email reminders 30 and 7 days before a document expires, with flags for expired/missing documents on the dashboard.",
  },
  {
    question: "Is it multi-tenant?",
    answer:
      "Yes. Admins can manage multiple clients and their suppliers separately with role-based access.",
  },
  {
    question: "Where is data hosted?",
    answer:
      "The platform is hosted on an Indian VPS with CDN and SSL from Cloudflare to optimize performance for Canadian users.",
  },
  {
    question: "Can suppliers upload their own documents?",
    answer:
      "Yes. Suppliers receive secure onboarding links to upload documents directly to their profile.",
  },
  {
    question: "What is a CAPA?",
    answer:
      "Corrective and Preventive Action (CAPA) helps track resolution of issues with due dates, assignees, and review status.",
  },
  {
    question: "Can I export reviews as PDF?",
    answer:
      "Yes. Performance reviews and CAPA reports can be exported using built-in PDF export.",
  },
  {
    question: "What kind of filters are available?",
    answer:
      "Admins can filter by document status, risk level, certification tags, and open CAPAs.",
  },
  {
    question: "Is there a dashboard overview?",
    answer:
      "Yes. The admin dashboard provides high-level insights across all clients and suppliers.",
  },
  {
    question: "Does it support role-based permissions?",
    answer:
      "Yes. Only Admins can manage everything. Clients have limited read/edit access.",
  },
  {
    question: "What tech stack is it built on?",
    answer:
      "It uses Next.js, PostgreSQL, Prisma, Tailwind CSS, NextAuth.js, and more.",
  },
  {
    question: "Can I self-host this platform?",
    answer:
      "Currently it's SaaS-only, but self-hosting may be offered in the future.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl text-center md:text-4xl font-bold mb-10 text-gray-900">
        Have Questions?
      </h2>
      <div className="space-y-4">
        {faqs.map(({ question, answer }, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-sm"
            >
              <button
                className="w-full px-6 py-6 flex justify-between items-center text-left group"
                onClick={() => toggle(index)}
              >
                <span className="text-base font-medium text-gray-900">
                  {question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 py-4 text-sm text-gray-600">
                      {answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
