// src/components/landing/LandingNavbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants/navLinks";

export default function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-[95%] md:max-w-[90%] xl:max-w-[1400px] z-50 rounded-2xl bg-light shadow-3xl border border-white/20 transition-all overflow-hidden">
      <div className="px-4 md:px-10 py-4 flex items-center justify-between">
        {/* Website name */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-dark"
        >
          useNexSource
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-dark hover:text-primary-hover transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-primary text-white py-2 px-6 rounded-xl text-sm font-semibold hover:bg-primary-hover transition"
          >
            Book a Demo
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-light rounded-b-2xl shadow-inner border-t border-gray-300">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-dark hover:text-primary-hover transition"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-dark hover:text-primary-hover transition"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="#contact"
              className="bg-primary text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-primary-hover"
              onClick={() => setIsOpen(false)}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
