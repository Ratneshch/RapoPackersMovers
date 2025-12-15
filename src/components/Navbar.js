"use client";

import React, { useState } from "react";
import { FaTruckMoving, FaPhone } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCallNow = () => {
    window.open('tel:+919820919196', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">

        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl md:text-3xl font-bold cursor-pointer">
          <FaTruckMoving className="text-orange-500" />
          <h1>RapoPackersMovers</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-semibold">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:underline underline-offset-8 decoration-amber-600"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Call Button */}
        <button onClick={handleCallNow} className="hidden md:flex items-center gap-2 px-5 py-2 text-lg font-semibold rounded-full bg-orange-500 hover:bg-orange-600 transition">
          <FaPhone />
          Call Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-md text-white transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-lg font-semibold">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
          ))}

          {/* Mobile Call Button */}
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition">
            <FaPhone />
            Call Now
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
