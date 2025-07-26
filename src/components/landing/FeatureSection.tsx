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
    <section className="py-16 px-4 max-w-7xl mx-auto mt-4 md:mt-12">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 mb-12">
        {/* Left Side (Heading) */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Powerful Features <br />
            for <span className="text-primary">Supplier</span> <br />
            Management
          </h2>
        </div>

        {/* Right Side (Paragraph) */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-600">
            Streamline compliance workflows, monitor supplier performance in
            real time, and eliminate the chaos of manual document collection.
            Our platform simplifies onboarding, centralizes data, and ensures
            your team stays ahead of audits and regulatory deadlines with
            confidence. Designed for both consultants and suppliers, it brings
            clarity, accountability, and efficiency to every step of your
            compliance process.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
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
