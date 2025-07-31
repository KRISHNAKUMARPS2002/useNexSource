"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg3.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Overlay with text */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] flex flex-col justify-center items-center text-center px-4">
        {/* Small Tag */}
        <span className="px-2 py-1 border border-gray-200/20 text-light  text-[15px] bg-gray-200/10 rounded-full font-medium tracking-wide text-sm">
          useNexSource
        </span>
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Streamline
          <br />
          supplier workflows
          <br />
          with confidence.
        </h1>

        <p className="font-normal text-white text-lg md:text-xl max-w-2xl">
          We redefine supplier management for food brands, making it effortless
          to use, priced for growth, and built to keep you audit-ready at every
          step.
        </p>
        <div className="flex gap-2 sm:gap-4 items-center justify-center pt-8">
          <button className="font-semibold tracking-tight text-sm sm:text-base py-2 px-3 sm:py-3 sm:px-6 rounded-2xl text-white bg-dark hover:bg-dark-hover cursor-pointer transition-shadow duration-200 shadow-sm hover:shadow-lg">
            Book a demo
          </button>

          <button className="font-semibold tracking-tight text-sm sm:text-base py-2 px-3 sm:py-3 sm:px-6 rounded-2xl text-white border-2 border-white bg-white/0 backdrop-blur-md hover:bg-white/5 transition-shadow duration-200 shadow-sm hover:shadow-lg cursor-pointer">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
