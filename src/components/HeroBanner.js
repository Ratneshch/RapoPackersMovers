import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";

const HeroBanner = () => {
  return (
    <div className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center pb-32">

        {/* Badge */}
        <h1 className="w-fit text-white px-4 py-2 mb-6 mt-2 bg-black/40 backdrop-blur-md text-sm font-bold rounded-full">
          Trusted by 1000+ Happy Customers
        </h1>

        {/* Heading */}
        <h2 className="text-white font-extrabold text-4xl md:text-6xl leading-tight mb-6">
          Safe & Reliable{" "}
          <span className="text-amber-500">
            Packers and <br /> Movers
          </span>{" "}
          Services
        </h2>

        {/* Description */}
        <p className="text-gray-200 text-xl max-w-2xl">
          We provide hassle-free home shifting with expert handling and secure
          transportation. Your belongings are in safe hands with our professional team.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-xl ">
          <button className="px-6 py-3 bg-orange-500 rounded-full flex items-center gap-2 text-white cursor-pointer">
            Get Free Quote <FaLongArrowAltRight />
          </button>

          <button className="px-6 py-3 bg-black/40 backdrop-blur-md rounded-full flex items-center gap-2 text-white cursor-pointer">
            Call Now <FaPhone />
          </button>
        </div>

        {/* Support Points */}
        <ul className="text-white flex flex-wrap justify-center gap-12 mt-16 text-xl">
          <li className="flex items-center gap-2">
            <CiCircleCheck className="text-orange-500" />
            100% Safe Delivery
          </li>
          <li className="flex items-center gap-2">
            <CiCircleCheck className="text-orange-500" />
            24/7 Support
          </li>
          <li className="flex items-center gap-2">
            <CiCircleCheck className="text-orange-500" />
            Best Price Guarantee
          </li>
        </ul>
      </div>

      {/* 🔥 Bottom Blur Stats Section */}
      <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-xl z-20">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <p className="text-3xl font-bold text-orange-500">1+</p>
            <p className="text-sm">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">1K+</p>
            <p className="text-sm">Happy Customers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">10+</p>
            <p className="text-sm">Expert Team</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">2+</p>
            <p className="text-sm">Cities Covered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
