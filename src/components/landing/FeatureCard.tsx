// src/components/landing/FeatureCard.tsx
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="text-primary mb-4">
        <Icon size={32} />
      </div>
      <h3 className="text-lg font-semibold tracking-tight mb-2">{title}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
}
