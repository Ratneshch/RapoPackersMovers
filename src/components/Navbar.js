import React from "react";
import { FaTruckMoving, FaPhone } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-3xl font-bold cursor-pointer">
          <FaTruckMoving className="text-orange-500" />
          <h1>RapoPackersMovers</h1>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-10 text-xl font-semibold">
          <li className="cursor-pointer hover:underline underline-offset-8 decoration-amber-600">
            Home
          </li>
          <li className="cursor-pointer hover:underline underline-offset-8 decoration-amber-600">
            About
          </li>
          <li className="cursor-pointer hover:underline underline-offset-8 decoration-amber-600">
            Services
          </li>
          <li className="cursor-pointer hover:underline underline-offset-8 decoration-amber-600">
            Contact
          </li>
        </ul>

        {/* Call Button */}
        <button className="flex items-center gap-2 px-5 py-2 text-lg font-semibold rounded-full bg-orange-500 hover:bg-orange-600 transition">
          <FaPhone />
          Call Now
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
