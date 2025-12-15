"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTruckMoving,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#0b1020] via-[#0e1a35] to-[#07142b] text-gray-300 px-4 sm:px-6 pt-10 sm:pt-15 pb-10 sm:pb-0">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 pb-16">

        {/* Brand */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-6">
            <div className="text-orange-500 flex items-center justify-center">
            <img src="/logor.png"/>
            </div>
          </div>

          <p className="text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
            Your trusted partner for safe and reliable packing & moving
            services. Since 2024, we've been delivering excellence in
            relocation.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start gap-4 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=61583242347663"
              target="_blank"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 transition-all flex items-center justify-center"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/rapopackers/"
              target="_blank"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 transition-all flex items-center justify-center"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links + Services (Mobile side-by-side) */}
        <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-2">

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-orange-400">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-orange-400">
                <a href="/about">About Us</a>
              </li>
              <li className="hover:text-orange-400">
                <a href="/services">Services</a>
              </li>
              <li className="hover:text-orange-400">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-lg mb-6">
              Our Services
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-orange-500">House Shifting</li>
              <li className="hover:text-orange-500">Office Relocation</li>
              <li className="hover:text-orange-500">Local Moving</li>
              <li className="hover:text-orange-500">Packing Services</li>
              <li className="hover:text-orange-500">Transportation</li>
            </ul>
          </div>
        </div>

        {/* Contact */}
<div className="text-center">
  <h3 className="text-white font-semibold text-lg mb-8">
    Contact Us
  </h3>

  <ul className="space-y-8 text-sm">

    {/* Phone */}
    <li className="flex flex-col sm:flex-row items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-lg">
        <FaPhoneAlt />
      </div>
      <p className="text-gray-400">Call Us</p>
      <p className="text-white font-medium">
        +91 98209 19196
      </p>
    </li>

    {/* Email */}
    <li className="flex flex-col sm:flex-row items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-lg">
        <FaEnvelope />
      </div>
      <p className="text-gray-400">Email Us</p>
      <p className="text-white font-medium">
        rapopackers@gmail.com
      </p>
    </li>

    {/* Address */}
    <li className="flex flex-col sm:flex-row items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-lg">
        <FaMapMarkerAlt />
      </div>
      <p className="text-gray-400">Address</p>
      <p className="text-white font-medium max-w-xs">
        Shop No. 5, Ground Floor, Sector 15, Navi Mumbai – 400614
      </p>
    </li>

  </ul>
</div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl pb-10 mx-auto py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 text-center md:text-left">
        <p>© 2025 RapoPackersMovers. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0 justify-center">
          <span className="hover:text-orange-400 cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-orange-400 cursor-pointer">
            Terms of Service
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
