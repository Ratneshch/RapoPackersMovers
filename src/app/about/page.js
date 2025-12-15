import { Target, Heart, Award } from "lucide-react";
import { Users } from "lucide-react";
export default function AboutPage() {
  return (
    <>
    <section className="relative w-full min-h-[70vh] flex items-center">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-white bg-white/20 backdrop-blur-md rounded-full">
          About Us
        </span>

        {/* Heading */}
        <h1 className="text-white font-extrabold text-4xl md:text-6xl leading-tight">
          Your Trusted Partner in{" "}
          <span className="text-orange-500">Safe</span>
          <br />
          <span className="text-orange-500">Relocation</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-blue-100 text-lg leading-relaxed">
          Since 1995, SwiftPack Movers has been helping families and businesses
          relocate with ease, safety, and peace of mind.
        </p>
      </div>
    </section>
    <section className="w-full bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
    
    {/* LEFT CONTENT */}
    <div>
      {/* Badge */}
      <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
        Our Story
      </span>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        1+ Years of Moving Excellence
      </h2>

      {/* Text */}
    

      <p className="mt-4 text-gray-600 leading-relaxed">
        Today, RapoPackersMovers Movers operates across 2+ cities with a fleet of
        modern vehicles and a team of 10+ trained professionals. We've
        successfully completed over 1000 relocations, earning the trust of
        families and businesses alike.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Our commitment to quality, safety, and customer satisfaction has
        remained unchanged over the years. We continue to invest in training,
        technology, and equipment to deliver the best possible service.
      </p>

      {/* Button */}
      <button className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition">
        Get Free Quote →
      </button>
    </div>

    {/* RIGHT IMAGES */}
    <div className="relative grid grid-cols-2 gap-4">
      
      <img
        src="/SamanInTruck.jpeg"
        alt="Moving truck"
        className="rounded-2xl object-cover h-48 w-full"
      />

      <img
        src="/SamannearTruck.jpeg"
        alt="Packing service"
        className="rounded-2xl object-cover h-48 w-full"
      />

      <img
        src="/CarsInTruck.jpeg"
        alt="Modern home relocation"
        className="rounded-2xl object-cover h-48 w-full"
      />

      <img
        src="/BikePacking.jpeg"
        alt="Bathroom relocation"
        className="rounded-2xl object-cover h-48 w-full"
      />

      {/* Experience Badge */}
      <div className="absolute -bottom-6 left-6 bg-orange-500 text-white px-3 py-1 rounded-2xl shadow-lg">
        <h3 className="text-lg font-extrabold">1+</h3>
        <p className="text-sm">Years Experience</p>
      </div>
    </div>
  </div>
</section>


<section className="w-full bg-slate-50 py-24">
  <div className="max-w-7xl mx-auto px-6 md:px-12">

    {/* Header */}
    <div className="text-center mb-16">
      <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
        Our Core
      </span>

      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
        What Drives Us
      </h2>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Mission */}
      <div className="group bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition">
          <Target size={28} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Our Mission
        </h3>
        <p className="text-gray-600 leading-relaxed">
          To provide the most reliable, efficient, and stress-free relocation
          experience for every customer, treating their belongings as our own.
        </p>
      </div>

      {/* Vision */}
      <div className="group bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition">
          <Heart size={28} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Our Vision
        </h3>
        <p className="text-gray-600 leading-relaxed">
          To become India’s most trusted name in packing and moving services,
          known for excellence, integrity, and customer satisfaction.
        </p>
      </div>

      {/* Values */}
      <div className="group bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition">
          <Award size={28} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Our Values
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Honesty, punctuality, and professionalism are the cornerstones of our
          business. We believe in building lasting relationships with our
          customers.
        </p>
      </div>

    </div>
  </div>
</section>



<section className="w-full bg-white py-24">
  <div className="max-w-7xl mx-auto px-6 md:px-12">

    {/* Header */}
    <div className="text-center mb-16">
      <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
        Leadership
      </span>

      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
        Meet Our Team
      </h2>

      <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
        Experienced professionals dedicated to making your move seamless.
      </p>
    </div>

    {/* Team Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

      {/* Member Card */}
      {[
        {
          name: "Ratnesh Chaurasiya",
         
          exp: "1+ Year",
        },
        {
          name: "Anish Mandia",
         
          exp: "1+ Year",
        },
        {
          name: "Pratik Sapkale",
         
          exp: "1+ Year",
        },
        {
          name: "Omkar Tale",
          
          exp: "1+ Year",
        },
      ].map((member) => (
        <div
          key={member.name}
          className="group text-center transition"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center group-hover:scale-110 transition">
            <Users size={32} className="text-blue-600" />
          </div>

          <h3 className="text-lg font-bold text-gray-900">
            {member.name}
          </h3>

        
          <p className="text-sm text-gray-400 mt-1">
            {member.exp}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


</>
  );
}
