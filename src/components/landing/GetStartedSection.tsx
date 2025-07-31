import React from "react";

export default function GetStartedSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto bg-gray-gradient rounded-2xl">
        <div className="py-20 flex flex-col items-center justify-center text-center px-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-2xl text-dark">
            Take the hassle out of supplier management
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground mb-8 max-w-xl">
            Say goodbye to chasing documents — discover how Supplyline automates
            and simplifies supplier management so you can focus on growth.
          </p>
          <button className="font-semibold tracking-tight text-sm sm:text-base py-2 px-3 sm:py-3 sm:px-6 rounded-2xl text-white bg-dark hover:bg-dark-hover cursor-pointer transition-shadow duration-200 shadow-sm hover:shadow-lg">
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
}
