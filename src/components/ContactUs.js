"use client";

import React from "react";
import { GoDotFill } from "react-icons/go";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">

      {/* Badge */}
      <div className="flex justify-center">
        <span className="text-orange-500 text-sm sm:text-base px-4 sm:px-5 py-2 bg-orange-100 rounded-full flex items-center gap-2 font-medium">
          <GoDotFill />
          GET IN TOUCH
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mt-6 sm:mt-8">
        Contact Us Today
      </h2>

      {/* Subtext */}
      <p className="text-center text-sm sm:text-base lg:text-lg text-gray-500 mt-4 sm:mt-6 max-w-2xl mx-auto">
        Have questions or ready to book your move? Reach out to us and we’ll respond promptly.
      </p>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 hover:shadow-xl transition-all">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl sm:text-2xl mb-4">
                <FaPhoneAlt />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">Phone</h3>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">
                +91 98209 19196
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 hover:shadow-xl transition-all">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl sm:text-2xl mb-4">
                <FaEnvelope />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">Email</h3>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">
                rapopackers@gmail.com
              </p>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 hover:shadow-xl transition-all">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl sm:text-2xl mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">Address</h3>
              <p className="text-gray-500 mt-1 text-sm sm:text-base leading-relaxed">
                Shop No. 5, Ground Floor, Sector 15, Navi Mumbai – 400614
              </p>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 hover:shadow-xl transition-all">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl sm:text-2xl mb-4">
                <FaClock />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">Working Hours</h3>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">
                24/7 Available
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Vashi%20Navi%20Mumbai&output=embed"
              width="100%"
              height="260"
              className="sm:h-[300px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT SIDE – FORM */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">

          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
            Request a Free Quote
          </h3>
          <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
            Fill in your details and we’ll get back to you shortly.
          </p>

          <form className="space-y-5 sm:space-y-6">

            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-orange-500" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-orange-500" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="relative">
                <FaPhoneAlt className="absolute left-4 top-4 text-orange-500" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Moving From + To */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-4 top-4 text-orange-500" />
                <input
                  type="text"
                  placeholder="Moving From"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-4 top-4 text-orange-500" />
                <input
                  type="text"
                  placeholder="Moving To"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Tell us about your requirements..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 sm:py-4 rounded-xl flex items-center justify-center gap-2 text-base sm:text-lg shadow-lg transition-all"
            >
              <FaPaperPlane />
             Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
