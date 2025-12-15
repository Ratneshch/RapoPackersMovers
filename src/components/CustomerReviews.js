"use client";
import React, { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa6";

const reviews = [
  {
    name: "Vikram Singh",
    route: "Mumbai to Thane",
    review:
      "Reliable and trustworthy service. They kept us updated throughout the transit. Would definitely use their services again for future relocations.",
  },
  {
    name: "Rahul Sharma",
    route: "Andheri to Navi Mumbai",
    review:
      "Excellent packing and on-time delivery. The team was very professional and handled everything with care.",
  },
  {
    name: "Amit Patil",
    route: "Thane West to Powai",
    review:
      "Affordable pricing with no hidden charges. Smooth shifting experience and very cooperative staff.",
  },
  {
    name: "Sneha Kulkarni",
    route: "Vashi to Kharghar",
    review:
      "Stress-free relocation. Proper packing, timely delivery, and great coordination by the team.",
  },
];

const CustomerReviews = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { name, route, review } = reviews[index];
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">

      {/* Badge */}
      <div className="flex justify-center">
        <h1 className="text-orange-500 text-sm sm:text-base px-4 py-2 bg-orange-100 rounded-full flex items-center gap-1">
          <GoDotFill /> Customer Reviews
        </h1>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-semibold mt-6 sm:mt-8">
        What Our Customers Say
      </h2>

      {/* Description */}
      <p className="text-center text-base sm:text-lg lg:text-xl mt-4 sm:mt-6 text-gray-500 max-w-3xl mx-auto">
        Trusted by customers across Mumbai, Navi Mumbai, and Thane.
      </p>

      {/* Review Card */}
      <div className="max-w-5xl mx-auto mt-12 sm:mt-16 bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start relative">

        {/* Initials */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl shrink-0">
          {initials}
        </div>

        {/* Content */}
        <div className="flex-1">

          {/* Stars */}
          <div className="flex gap-1 text-orange-500 mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          {/* Review */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            “{review}”
          </p>

          {/* Name */}
          <div className="mt-5 sm:mt-6">
            <h3 className="font-semibold text-base sm:text-lg text-gray-900">
              {name}
            </h3>
            <p className="text-orange-500 text-xs sm:text-sm">{route}</p>
          </div>
        </div>

        {/* Quote Icon */}
        <div className="hidden sm:flex w-12 h-12 rounded-full bg-orange-100 items-center justify-center text-orange-500 shrink-0">
          <FaQuoteRight className="text-xl" />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-3 sm:left-4 bottom-4 sm:bottom-6 text-gray-400 hover:text-orange-500 text-2xl"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-3 sm:right-4 bottom-4 sm:bottom-6 text-gray-400 hover:text-orange-500 text-2xl"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default CustomerReviews;
