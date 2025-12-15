import React from "react";
import { GoDotFill } from "react-icons/go";
import { MdHouse, MdBusiness, MdLocalShipping } from "react-icons/md";
import { FaBoxOpen, FaTruckLoading, FaMapMarkerAlt, FaLongArrowAltRight } from "react-icons/fa";

const services = [
  {
    title: "House Shifting",
    desc: "Complete home relocation with expert packing, safe transportation, and careful unpacking at your new location.",
    icon: <MdHouse />,
  },
  {
    title: "Office Shifting",
    desc: "Professional corporate relocation services ensuring minimal downtime and secure handling of office equipment.",
    icon: <MdBusiness />,
  },
  {
    title: "Local & Domestic Moving",
    desc: "Whether across the street or across the country, we handle all distances with equal care and professionalism.",
    icon: <FaMapMarkerAlt />,
  },
  {
    title: "Packing & Unpacking",
    desc: "Premium quality packing materials and expert techniques to protect your valuables during transit.",
    icon: <FaBoxOpen />,
  },
  {
    title: "Loading & Unloading",
    desc: "Trained professionals handle heavy lifting with proper equipment ensuring zero damage to your items.",
    icon: <FaTruckLoading />,
  },
  {
    title: "Transportation",
    desc: "Fleet of modern vehicles equipped with GPS tracking for safe and timely delivery of your belongings.",
    icon: <MdLocalShipping />,
  },
];

const OurServices = () => {
  return (
    <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

      {/* Badge */}
      <div className="flex justify-center">
        <h1 className="text-orange-500 text-sm sm:text-base px-4 py-2 bg-orange-100 rounded-full flex items-center gap-1">
          <GoDotFill /> Our Services
        </h1>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-semibold mt-6 sm:mt-8 leading-tight">
        Comprehensive Moving <br className="hidden sm:block" /> Solutions
      </h2>

      {/* Description */}
      <p className="text-center text-base sm:text-lg lg:text-xl mt-4 sm:mt-6 text-gray-500 max-w-3xl mx-auto">
        From packing to unpacking, we offer end-to-end relocation services tailored to your needs.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-3xl p-6 sm:p-8 bg-white shadow-md hover:shadow-2xl transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-orange-200 text-orange-600 mb-5 sm:mb-6 text-3xl sm:text-4xl">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10 sm:mt-12">
        <button className="px-6 py-3 rounded-full bg-orange-500 text-white text-base sm:text-lg flex items-center gap-2 shadow-md hover:shadow-xl hover:bg-orange-600 transition-all duration-300">
          View All Services <FaLongArrowAltRight />
        </button>
      </div>

    </section>
  );
};

export default OurServices;
