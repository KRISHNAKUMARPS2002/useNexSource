import React from "react";
import { ArrowRight } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-10">
        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-7xl font-medium leading-tight">
          See what&apos;s possible with <br /> us
        </h2>

        {/* Contact Boxes */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Contact Us */}
          <div className="group relative flex-1 p-6 border border-gray-300 bg-[#111] rounded-xl hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-2xl md:text-3xl text-white mb-2">Contact Us</h3>
            <p className="text-base md:text-xl text-white mb-16">
              Your question, feedback, and ideas matter to us — reach out
              anytime.
            </p>
            <ArrowRight
              className="absolute bottom-5 right-5 text-white group-hover:-translate-x-2 transition-transform duration-300"
              size={30}
            />
          </div>

          {/* Join Our Team */}
          <div className="group relative flex-1 p-6 border border-gray-300 bg-[#111] rounded-xl hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-xl md:text-2xl text-white mb-2">
              Join Our Team
            </h3>
            <p className="text-base md:text-xl text-white mb-16">
              Pursue bold goals and exciting opportunities. Grow and thrive with
              a talented, supportive team dedicated to making an impact.
            </p>
            <ArrowRight
              className="absolute bottom-5 right-5 text-white group-hover:-translate-x-2 transition-transform duration-300"
              size={30}
            />
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="border-t border-gray-800 pt-16 mt-10">
          <div className="flex flex-col lg:flex-row justify-between gap-12 text-white">
            {/* Left: Company Name */}
            <div className="lg:w-1/3">
              <h4 className="text-3xl font-semibold mb-4">useNexsure</h4>
            </div>

            {/* Right: Link Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 flex-1 text-sm">
              {/* Services */}
              <div>
                <h5 className="text-xl font-semibold mb-2">Services</h5>
                <ul className="space-y-1 text-gray-400 text-base">
                  <li>Consulting</li>
                  <li>Training</li>
                  <li>Regulatory affairs</li>
                  <li>Audit</li>
                  <li>Software</li>
                  <li>Paperless Forms</li>
                  <li>MyHaccpPlan</li>
                  <li>Supplyline</li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h5 className="text-xl font-semibold mb-2">Resources</h5>
                <ul className="space-y-1 text-gray-400 text-base">
                  <li>Case studies</li>
                  <li>Industry insights</li>
                </ul>
              </div>

              {/* Get Started */}
              <div>
                <h5 className="text-xl font-semibold mb-2">Get Started</h5>
                <ul className="space-y-1 text-gray-400 text-base">
                  <li>Contact sales</li>
                  <li>Request pricing</li>
                  <li>Request demo</li>
                </ul>
              </div>
              <div>
                <h5 className="text-xl font-semibold">Company</h5>
                <ul className="space-y-1 text-gray-400 text-base">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Newsroom</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
