import { Target, Heart, Award, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 text-center md:text-left">
          <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-white bg-white/20 backdrop-blur-md rounded-full">
            About Us
          </span>

          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-6xl leading-tight">
            Your Trusted Partner in{" "}
            <span className="text-orange-500">Safe</span>
            <br />
            <span className="text-orange-500">Relocation</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-blue-100 text-base sm:text-lg">
            Since 2024, SwiftPack Movers has been helping families and businesses
            relocate with ease, safety, and peace of mind.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
              Our Story
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900">
              1+ Years of Moving Excellence
            </h2>

            <p className="mt-4 text-gray-600">
              Today, RapoPackersMovers operates across 2+ cities with a fleet of
              modern vehicles and a team of 10+ trained professionals.
            </p>

            <p className="mt-4 text-gray-600">
              Our commitment to quality, safety, and customer satisfaction has
              remained unchanged.
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition">
             <a href="/contact" > Get Free Quote →</a> 
              </button>
            </div>
          </div>

          {/* IMAGES */}
          <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
            {[
              "/SamanInTruck.jpeg",
              "/SamannearTruck.jpeg",
              "/CarsInTruck.jpeg",
              "/BikePacking.jpeg",
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                className="rounded-2xl object-cover h-36 sm:h-48 w-full"
                alt="Relocation"
              />
            ))}

            <div className="absolute -bottom-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold">1+</h3>
              <p className="text-xs">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="w-full bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
              Our Core
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Our Mission", icon: <Target />, text: "Reliable and stress-free relocation." },
              { title: "Our Vision", icon: <Heart />, text: "India’s most trusted moving brand." },
              { title: "Our Values", icon: <Award />, text: "Honesty, punctuality, professionalism." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300 flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
              Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {["Ratnesh Chaurasiya", "Anish Mandia", "Pratik Sapkale", "Omkar Tale"].map(
              (name) => (
                <div key={name} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300 flex items-center justify-center">
                    <Users className="text-white" />
                  </div>
                  <h3 className="font-bold">{name}</h3>
                  <p className="text-sm text-gray-400">1+ Year</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
