// src/components/landing/FeatureSection.tsx
"use client";

import FeatureCard from "./FeatureCard";
import {
  Users,
  FileCheck2,
  AlarmClock,
  FileSearch2,
  Link,
  ShieldCheck,
  BarChart3,
  Settings2,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Role-Based Access",
    description:
      "Admins and clients have separate, secure access to manage suppliers efficiently. Maintain full control over visibility and actions with tailored user permissions.",
  },
  {
    icon: FileCheck2,
    title: "Document Tracking",
    description:
      "Upload, manage, and track expiry of supplier documents with auto-reminders. Quickly locate any file using filters and version history.",
  },
  {
    icon: AlarmClock,
    title: "Expiry Alerts",
    description:
      "Get email alerts before documents expire—stay compliant without missing deadlines. Configure custom alert thresholds and escalation rules.",
  },
  {
    icon: FileSearch2,
    title: "Supplier Risk Analysis",
    description:
      "Tag suppliers by category, risk level, and certification status for fast filtering. Visualize supplier risk across your network with dynamic dashboards.",
  },
  {
    icon: Link,
    title: "Easy Onboarding",
    description:
      "Auto-generate secure links for suppliers to upload data and documents themselves. Eliminate back-and-forth emails with a guided self-serve experience.",
  },
  {
    icon: ShieldCheck,
    title: "Issue & CAPA Tracking",
    description:
      "Log issues, assign CAPAs with due dates, and monitor resolution status. Track root causes, corrective actions, and prevent recurrence.",
  },
  {
    icon: BarChart3,
    title: "Performance Reviews",
    description:
      "Generate downloadable reports with compliance % and risk score summaries. Compare supplier performance over time with visual trends.",
  },
  {
    icon: Settings2,
    title: "Central Admin Dashboard",
    description:
      "One place to view, filter, and take action across all clients and suppliers. Instantly access document statuses, CAPAs, and performance reports.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-10 md:py-16 px-4 max-w-7xl mx-auto mt-4 md:mt-12">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 mb-12">
        {/* Left Side (Heading) */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-dark tracking-tight leading-tight mb-8">
            Built for <span className="text-info">Consultants</span> <br />
            and <span className="text-info">Manufacturers</span>
          </h2>
        </div>

        {/* Right Side (Paragraph) */}
        <div className="w-full md:w-1/2">
          <p className="text-foreground">
            Whether you're a compliance consultant managing multiple clients or
            a manufacturer overseeing your own supply chain, our platform adapts
            to your workflow. Easily onboard suppliers, track documentation, and
            stay ahead of audits — all from one centralized system. Designed for
            both consultants and manufacturers, it brings clarity, control, and
            confidence to every part of the supplier compliance process.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-3 md:mb-10">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
