import {
  Home,
  Building2,
  MapPin,
  Truck,
  Box,
  ArrowUpFromLine,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="w-full">

      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 text-center md:text-left">
          <span className="inline-block mt-16 mb-4 px-4 py-2 text-sm font-semibold text-white bg-white/20 backdrop-blur rounded-full">
            Our Services
          </span>

          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-6xl leading-tight">
            Comprehensive{" "}
            <span className="text-orange-500">Moving</span> Solutions
          </h1>

          <p className="mt-5 max-w-2xl mx-auto md:mx-0 text-blue-100 text-base sm:text-lg">
            From packing to unpacking, local to domestic – we offer end-to-end
            relocation services tailored to your needs.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="w-full bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">

          {[
            {
              icon: <Home />,
              title: "House Shifting",
              desc:
                "Complete home relocation with expert packing, safe transportation, and careful unpacking.",
              points: [
                "Professional packing",
                "Fragile item handling",
                "Furniture disassembly",
                "On-time delivery",
              ],
            },
            {
              icon: <Building2 />,
              title: "Office Shifting",
              desc:
                "Corporate relocation ensuring minimal downtime and secure handling of office equipment.",
              points: [
                "IT equipment handling",
                "Document management",
                "Weekend moves",
                "Zero downtime planning",
              ],
            },
            {
              icon: <MapPin />,
              title: "Local Moving",
              desc:
                "Quick and efficient city moves with same-day delivery options.",
              points: [
                "Same-day service",
                "Small & large moves",
                "Hourly rates",
                "Flexible scheduling",
              ],
            },
            {
              icon: <Truck />,
              title: "Domestic Moving",
              desc:
                "Long-distance relocation across India with GPS-tracked vehicles.",
              points: [
                "Pan-India coverage",
                "Insurance coverage",
                "GPS tracking",
                "Door-to-door service",
              ],
            },
            {
              icon: <Box />,
              title: "Packing Services",
              desc:
                "Premium packing materials and expert techniques for maximum protection.",
              points: [
                "High-quality materials",
                "Custom crating",
                "Eco-friendly options",
                "Labeling system",
              ],
            },
            {
              icon: <ArrowUpFromLine />,
              title: "Loading & Unloading",
              desc:
                "Trained professionals handle heavy lifting with modern equipment.",
              points: [
                "Trained crew",
                "Careful handling",
                "Modern equipment",
                "Time-efficient",
              ],
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white border rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                {service.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-5 text-sm sm:text-base">
                {service.desc}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                {service.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="text-orange-500">●</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 sm:mt-20 px-4">
          <p className="text-gray-600 mb-6">
            Need a customized solution? Let’s discuss your requirements.
          </p>

          <a
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
          >
            Get Free Quote →
          </a>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="w-full bg-slate-50 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">

          <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
            Why Us
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900">
            The SwiftPack Difference
          </h2>

          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            What sets us apart from other moving companies
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12">
            {[
              { value: "1+", label: "Years Experience" },
              { value: "1K+", label: "Successful Moves" },
              { value: "2+", label: "Cities Covered" },
              { value: "100%", label: "Customer Satisfaction" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-600">
                  {stat.value}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
