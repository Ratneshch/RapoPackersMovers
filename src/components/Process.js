import React from "react";
import { GoDotFill } from "react-icons/go";
import {
  FaPhoneAlt,
  FaClipboardList,
  FaBoxOpen,
  FaTruck,
  FaHome,
} from "react-icons/fa";

const steps = [
  {
    title: "Book Your Move",
    desc: "Contact us via phone, WhatsApp, or fill the online form to get started.",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Free Survey",
    desc: "Our team visits for a free assessment and provides a detailed quotation.",
    icon: <FaClipboardList />,
  },
  {
    title: "Expert Packing",
    desc: "Professional packing using high-quality materials for maximum protection.",
    icon: <FaBoxOpen />,
  },
  {
    title: "Safe Transit",
    desc: "GPS-tracked vehicles ensure safe and timely transportation of your goods.",
    icon: <FaTruck />,
  },
  {
    title: "Delivered & Settled",
    desc: "Careful unpacking and arrangement at your new destination.",
    icon: <FaHome />,
  },
];

const Process = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0b1020] via-[#0e1a35] to-[#07142b] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-28">

      {/* Badge */}
      <div className="flex justify-center">
        <span className="text-orange-400 text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 bg-amber-900 rounded-full flex items-center gap-2">
          <GoDotFill />
          HOW IT WORKS
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mt-6 sm:mt-8">
        Simple 5-Step Process
      </h2>

      {/* Subtext */}
      <p className="text-center text-sm sm:text-base lg:text-lg text-gray-300 mt-4 sm:mt-6 max-w-2xl mx-auto">
        Our streamlined process ensures a hassle-free relocation experience from start to finish.
      </p>

      {/* Timeline */}
      <div className="relative max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-24">

        {/* Horizontal Line (Desktop Only) */}
        <div className="hidden lg:block absolute top-14 left-0 w-full h-[2px] bg-orange-500/40" />

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 sm:gap-14 lg:gap-16 relative">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">

              {/* Icon */}
              <div
                className="
                  relative mx-auto w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 
                  rounded-full bg-orange-500 flex items-center justify-center 
                  text-2xl sm:text-3xl shadow-xl
                  transition-transform duration-300 ease-out
                  hover:scale-110
                "
              >
                {step.icon}

                {/* Step Number */}
                <span className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-orange-500 text-xs sm:text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-semibold">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 sm:mt-3 text-gray-300 text-xs sm:text-sm leading-relaxed px-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
