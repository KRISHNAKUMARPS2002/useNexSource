"use client";

import React from "react";
import {
  Drumstick,
  Milk,
  Apple,
  CupSoda,
  Beer,
  Dog,
  Pill,
  Sprout,
  Package,
  Factory,
  Warehouse,
  ChefHat,
} from "lucide-react";

const industries = [
  { title: "Meat, Poultry & Seafood", icon: Drumstick },
  { title: "Dairy & Egg Products", icon: Milk },
  { title: "Fresh & Processed Produce", icon: Apple },
  { title: "Bakery & Ready-to-Eat Foods", icon: CupSoda },
  { title: "Beverages & Liquid Foods", icon: Beer },
  { title: "Pet Food & Animal Nutrition", icon: Dog },
  { title: "Dietary Supplements", icon: Pill },
  { title: "Ingredients & Base Products", icon: Sprout },
  { title: "Canned Goods & Preservation", icon: Package },
  { title: "Food Manufacturing & Co-Packing", icon: Factory },
  { title: "Storage & Logistics", icon: Warehouse },
  { title: "Packaging & Labeling", icon: Package },
  { title: "Institutional & Food Service", icon: ChefHat },
];

export default function FoodIndustryCoverage() {
  return (
    <section className="relative z-10 py-16 md:py-24 bg-paper">
      {/* Outer Shadow Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 border border-gray-200 rounded-2xl shadow-xl backdrop-blur-md p-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight tracking-tight">
                Built for Every Corner of the
                <span className="text-primary block mt-1 font-mono">
                  Food Ecosystem
                </span>
              </h2>
            </div>
            <div className="w-full md:w-1/2 pt-2 md:pt-4">
              <p className="text-foreground text-base md:text-lg">
                From farm to fork, our platform supports all sectors of the food
                supply chain with precision and scalability. No matter your
                industry segment, we have the tools and expertise to meet your
                compliance needs.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {industries.map(({ title, icon: Icon }, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-info flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium text-gray-800 group-hover:text-primary transition-colors">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating BG Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 pointer-events-none -z-10" />
    </section>
  );
}
