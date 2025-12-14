"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTruckMoving
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#0b1020] via-[#0e1a35] to-[#07142b] text-gray-300 px-6 pt-20">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-16">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 text-orange-500 flex items-center justify-center font-bold ">
             <FaTruckMoving className="text-2xl ml-5"/>
            </div>
            <h2 className="text-xl font-semibold text-white ">
              RapoPackersMovers
            </h2>
          </div>

          <p className="text-sm leading-relaxed">
            Your trusted partner for safe and reliable packing & moving
            services. Since 1995, we've been delivering excellence in
            relocation.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
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
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">
            Quick Links
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-orange-400 cursor-pointer">Home</li>
            <li className="hover:text-orange-400 cursor-pointer">About Us</li>
            <li className="hover:text-orange-400 cursor-pointer">Services</li>
            <li className="hover:text-orange-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">
            Our Services
          </h3>
          <ul className="space-y-4 text-sm ">
            <li className="hover:text-orange-500 cursor-pointer transition-all">House Shifting</li>
            <li className="hover:text-orange-500 cursor-pointer transition-all">Office Relocation</li>
            <li className="hover:text-orange-500 cursor-pointer transition-all">Local Moving</li>
            <li className="hover:text-orange-500 cursor-pointer transition-all">Packing Services</li>
            <li className="hover:text-orange-500 cursor-pointer transition-all">Transportation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">
            Contact Us
          </h3>

          <ul className="space-y-6 text-sm">
            <li className="flex gap-4">
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

            <li className="flex gap-4">
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

            <li className="flex gap-4">
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
      <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© 2025 RapoPackersMovers All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
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
