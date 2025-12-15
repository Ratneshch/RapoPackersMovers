import React from "react";
import { GoDotFill } from "react-icons/go";
import {
  FaUsers,
  FaRupeeSign,
  FaClock,
  FaShieldAlt,
  FaHeadset,
  FaHome,
} from "react-icons/fa";

const reasons = [
  {
    title: "Experienced Team",
    desc: "1+ years of expertise with trained professionals who handle your belongings with utmost care.",
    icon: <FaUsers />,
  },
  {
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden charges. Get the best value for your money.",
    icon: <FaRupeeSign />,
  },
  {
    title: "On-time Delivery",
    desc: "We value your time. Guaranteed timely pickup and delivery as per schedule.",
    icon: <FaClock />,
  },
  {
    title: "Safe Packaging",
    desc: "Premium quality packing materials ensure zero damage during transit.",
    icon: <FaShieldAlt />,
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock customer support to assist you at every step of your relocation.",
    icon: <FaHeadset />,
  },
  {
    title: "Door-to-Door Service",
    desc: "Complete end-to-end relocation from your old doorstep to the new one.",
    icon: <FaHome />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

      {/* Badge */}
      <div className="flex justify-center">
        <h1 className="text-orange-500 text-sm sm:text-base px-4 py-2 bg-orange-100 rounded-full flex items-center gap-1">
          <GoDotFill /> Why Choose Us
        </h1>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-semibold mt-6 sm:mt-8">
        What Makes Us Different
      </h2>

      {/* Description */}
      <p className="text-center text-base sm:text-lg lg:text-xl mt-4 sm:mt-6 text-gray-500 max-w-3xl mx-auto">
        We're committed to making your relocation experience smooth, safe, and stress-free.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl p-6 sm:p-8 bg-white shadow-md hover:shadow-2xl transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-orange-200 text-orange-600 mb-5 sm:mb-6 text-xl sm:text-2xl">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WhyChooseUs;
