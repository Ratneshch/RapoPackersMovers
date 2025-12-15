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
    <footer className="w-full bg-gradient-to-br from-[#0b1020] via-[#0e1a35] to-[#07142b] text-gray-300 px-4 sm:px-6 pt-16 sm:pt-20">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 pb-16">

        {/* Brand */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-6">
            <div className="w-10 h-10 text-orange-500 flex items-center justify-center">
              <FaTruckMoving className="text-2xl" />
            </div>
            <h2 className="text-xl font-semibold text-white">
              RapoPackersMovers
            </h2>
          </div>

          <p className="text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
            Your trusted partner for safe and reliable packing & moving
            services. Since 2024, we've been delivering excellence in
            relocation.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start gap-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 transition-all flex items-center justify-center"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 transition-all flex items-center justify-center"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-semibold text-lg mb-6">
            Quick Links
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-orange-400 cursor-pointer"><a href="/">Home</a></li>
            <li className="hover:text-orange-400 cursor-pointer"><a href="/about">About Us</a></li>
            <li className="hover:text-orange-400 cursor-pointer"><a href="/services">Services</a></li>
            <li className="hover:text-orange-400 cursor-pointer"><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-semibold text-lg mb-6">
            Our Services
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-orange-500 cursor-pointer"><a href="/services"></a>House Shifting</li>
            <li className="hover:text-orange-500 cursor-pointer"><a href="/services">Office Relocation</a></li>
            <li className="hover:text-orange-500 cursor-pointer"><a href="/services">Local Moving</a></li>
            <li className="hover:text-orange-500 cursor-pointer"><a href="/services">Packing Services</a></li>
            <li className="hover:text-orange-500 cursor-pointer"><a href="/services">Transportation</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-semibold text-lg mb-6">
            Contact Us
          </h3>

          <ul className="space-y-6 text-sm">
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-gray-400">Call Us</p>
                <p className="text-white font-medium">
                  +91 98209 19196
                </p>
              </div>
            </li>

            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-gray-400">Email Us</p>
                <p className="text-white font-medium">
                  rapopackers@gmail.com
                </p>
              </div>
            </li>

            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-gray-400">Address</p>
                <p className="text-white font-medium">
                  Shop No. 5, Ground Floor, Sector 15, Navi Mumbai – 400614
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 text-center md:text-left">
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
