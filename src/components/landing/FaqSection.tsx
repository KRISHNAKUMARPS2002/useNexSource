"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do suppliers share their documents with me?",
    answer:
      "You just send them a secure upload link — no login or setup needed. They can upload files directly to your system.",
  },
  {
    question: "What happens when a document is about to expire?",
    answer:
      "You’ll get automatic reminders, and so will the supplier. No more last-minute chases or surprises.",
  },
  {
    question: "Can I track which suppliers are fully compliant?",
    answer:
      "Yes, you get a clean dashboard that shows you which suppliers are all set and which ones need attention.",
  },
  {
    question: "Will my team be able to collaborate on this?",
    answer:
      "Totally. You can invite teammates, assign roles, and work together to keep compliance smooth and centralized.",
  },
  {
    question: "Do suppliers need to log into anything?",
    answer:
      "Nope. They just click the link, upload the required files, and they’re done. Super simple.",
  },
  {
    question: "Can I customize what documents I request from each supplier?",
    answer:
      "Yes, you decide what’s required — from certifications to audits — based on your needs or regulations.",
  },
  {
    question: "How secure is the information uploaded to Supplyline?",
    answer:
      "Very secure. All data is encrypted, access is controlled, and we follow best practices for data protection.",
  },
  {
    question: "What industries is Supplyline built for?",
    answer:
      "Primarily food manufacturing and distribution — but any business needing supplier documentation can use it.",
  },
  {
    question: "Is there support if I get stuck?",
    answer:
      "Absolutely. Our team is just a chat or email away to help you onboard or troubleshoot anything.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-24">
      <h2 className="text-3xl text-center md:text-4xl font-bold mb-10 text-dark">
        Have Questions?
      </h2>
      <div className="space-y-4">
        {faqs.map(({ question, answer }, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                className="w-full px-3 md:px-6 py-6 flex justify-between items-center text-left group hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => toggle(index)}
              >
                <span className="text-base font-medium text-dark">
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
                    <div className="px-6 py-6 text-sm text-foreground bg-gray-50 border-t border-gray-200">
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
