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
      "Admins and clients have separate, secure access to manage suppliers efficiently.",
  },
  {
    icon: FileCheck2,
    title: "Document Tracking",
    description:
      "Upload, manage, and track expiry of supplier documents with auto-reminders.",
  },
  {
    icon: AlarmClock,
    title: "Expiry Alerts",
    description:
      "Get email alerts before documents expire—stay compliant without missing deadlines.",
  },
  {
    icon: FileSearch2,
    title: "Supplier Risk Analysis",
    description:
      "Tag suppliers by category, risk level, and certification status for fast filtering.",
  },
  {
    icon: Link,
    title: "Easy Onboarding",
    description:
      "Auto-generate secure links for suppliers to upload data and documents themselves.",
  },
  {
    icon: ShieldCheck,
    title: "Issue & CAPA Tracking",
    description:
      "Log issues, assign CAPAs with due dates, and monitor resolution status.",
  },
  {
    icon: BarChart3,
    title: "Performance Reviews",
    description:
      "Generate downloadable reports with compliance % and risk score summaries.",
  },
  {
    icon: Settings2,
    title: "Central Admin Dashboard",
    description:
      "One place to view, filter, and take action across all clients and suppliers.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Powerful Features for Supplier Management
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Streamline compliance workflows, track supplier performance, and
          eliminate manual document collection with our robust platform.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
