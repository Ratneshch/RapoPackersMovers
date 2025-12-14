import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        
        {/* Badge */}
        <h1 className="w-fit text-white px-4 py-2 mb-6 bg-black/40 backdrop-blur-md text-sm font-bold rounded-full">
          Trusted by 1000+ Happy Customers
        </h1>

        {/* Main Heading (CENTERED) */}
        <h2 className="text-white font-extrabold text-4xl md:text-6xl leading-tight mb-6">
          Safe & Reliable{" "}
          <span className="text-amber-500">
            Packers and <br /> Movers
          </span>{" "}
          Services
        </h2>

        {/* Description */}
        <p className="text-gray-200 text-lg max-w-2xl">
          We provide hassle-free home shifting with expert handling and secure
          transportation. Your belongings are in safe hands with our professional team.
        </p>
        <div className="flex items-center justify-center text-2xl text-white gap-3 mt-10 ">
            <button className="px-3 py-1 bg-orange-500  rounded-full">Get Free Quote</button>
             <button className="px-3 py-1 bg-black/40 backdrop-blur-md  rounded-full">Call Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
