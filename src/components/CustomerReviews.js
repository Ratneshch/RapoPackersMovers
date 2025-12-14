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

  // 🔥 AUTO SLIDE EVERY 4 SECONDS
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
    <div className="w-full bg-white py-24 px-6">

      {/* Badge */}
      <h1 className="text-orange-500 text-lg px-5 py-2 bg-orange-100 rounded-full mx-auto w-fit flex items-center gap-1">
        <GoDotFill /> Customer Reviews
      </h1>

      {/* Heading */}
      <h2 className="text-5xl text-center font-semibold mt-8">
        What Our Customers Say
      </h2>

      {/* Description */}
      <p className="text-center text-xl mt-6 text-gray-500 max-w-3xl mx-auto">
        Trusted by customers across Mumbai, Navi Mumbai, and Thane.
      </p>

      {/* Review Card */}
      <div className="max-w-5xl mx-auto mt-16 bg-white rounded-3xl shadow-lg p-10 flex gap-8 items-start relative">

        {/* Initials */}
        <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-bold text-xl shrink-0">
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
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            “{review}”
          </p>

          {/* Name */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg text-gray-900">
              {name}
            </h3>
            <p className="text-orange-500 text-sm">{route}</p>
          </div>
        </div>

        {/* Quote Icon */}
        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
          <FaQuoteRight className="text-xl" />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 bottom-6 text-gray-400 hover:text-orange-500 text-xl"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-4 bottom-6 text-gray-400 hover:text-orange-500 text-xl"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
