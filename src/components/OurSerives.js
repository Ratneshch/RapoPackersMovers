import React from "react";
import { GoDotFill } from "react-icons/go";
import { MdHouse, MdBusiness, MdLocalShipping } from "react-icons/md";
import { FaBoxOpen, FaTruckLoading, FaMapMarkerAlt } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

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

const OurSerives = () => {
  return (
    <div className="w-full min-h-screen bg-white px-6 py-20">

      {/* Section Badge */}
      <h1 className="text-orange-500 text-lg px-5 py-2 bg-orange-100 rounded-full mx-auto w-fit flex items-center gap-1">
        <GoDotFill /> Our Services
      </h1>

      {/* Heading */}
      <h2 className="text-5xl text-center font-semibold mt-8">
        Comprehensive Moving <br /> Solutions
      </h2>

      {/* Description */}
      <p className="text-center text-xl mt-6 text-gray-500 max-w-3xl mx-auto">
        From packing to unpacking, we offer end-to-end relocation services tailored to your needs.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto ">
        {services.map((service, index) => (
          <div
            key={index}
            className=" rounded-3xl p-8 bg-white shadow-md hover:shadow-2xl transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-200 text-orange-600 mb-6 text-4xl">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="font-bold text-2xl mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
      <button className="text-center px-4 py-2 mx-auto mt-8 rounded-full bg-orange-500 text-white text-xl  flex items-center gap-2 cursor-pointer shadow-md  hover:shadow-xl transition-all duration-300">View All Services <FaLongArrowAltRight/> </button>
    </div>
  );
};

export default OurSerives;
