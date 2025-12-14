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
    <div className="w-full py-28 px-6 bg-gradient-to-br from-[#0b1020] via-[#0e1a35] to-[#07142b] text-white">

      {/* Badge */}
      <div className="flex justify-center">
        <span className="text-orange-400 text-md font-semibold px-5 py-2 bg-amber-900 rounded-full flex items-center gap-2">
          <GoDotFill />
          HOW IT WORKS
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-5xl font-bold text-center mt-8">
        Simple 5-Step Process
      </h2>

      {/* Subtext */}
      <p className="text-center text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
        Our streamlined process ensures a hassle-free relocation experience
        from start to finish.
      </p>

      {/* Timeline */}
      <div className="relative max-w-7xl mx-auto mt-24">

        {/* Line */}
        <div className="hidden lg:block absolute top-14 left-0 w-full h-[2px] bg-orange-500/40" />

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16 relative">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">

              {/* Icon */}
            <div className="
  relative mx-auto w-20 h-20 rounded-full 
  bg-orange-500 flex items-center justify-center 
  text-3xl shadow-xl
  transition-transform duration-300 ease-out
  hover:scale-125
">
                {step.icon}

                {/* Step number */}
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-orange-500 text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
