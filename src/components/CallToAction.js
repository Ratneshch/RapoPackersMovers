"use client";

import React from "react";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="relative z-10 w-full bg-gradient-to-br from-orange-500 via-orange-500 to-orange-500 px-4 py-14 sm:py-20 text-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          Available 24/7
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
          Ready to Make Your Move?
        </h2>

        {/* Sub Text */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
          Get a free quote today and experience the most hassle-free relocation
          with our expert team.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-12">

          {/* Primary */}
          <button className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-white text-orange-500 font-semibold rounded-full flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-all">
            Get Free Quote
            <FaArrowRight />
          </button>

          {/* Secondary */}
          <a
            href="tel:+919820919196"
            className="w-full sm:w-auto px-8 sm:px-10 py-4 border border-white/80 rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-orange-600 transition-all"
          >
            <FaPhoneAlt />
            +91 98209 19196
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
