import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="relative pt-20 min-h-screen overflow-hidden">
      {/* Background Image (unchanged) */}
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl flex flex-col items-center text-center">
          {/* Badge */}
          <h1 className="inline-flex items-center justify-center rounded-full bg-black/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300 backdrop-blur-md">
            Trusted by 1000+ Happy Customers
          </h1>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Safe &amp; Reliable{" "}
            <span className="text-amber-400">
              Packers and <br className="hidden sm:block" /> Movers
            </span>{" "}
            Services
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base text-gray-200 sm:text-lg md:text-xl">
            We provide hassle-free home shifting with expert handling and secure
            transportation. Your belongings are in safe hands with our
            professional team.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-base sm:text-lg">
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3 font-semibold text-white shadow-lg shadow-orange-500/40 transition hover:bg-orange-400">
              Get Free Quote
              <span className="transition-transform group-hover:translate-x-1">
                <FaLongArrowAltRight />
              </span>
            </Link>

            <button className="inline-flex items-center gap-3 rounded-full bg-black/50 px-7 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-black/70">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                <FaPhone />
              </span>
              <span className="text-left">
                <a 
                href="tel:+919820919196"
                className="block text-sm leading-tight text-gray-300">
                  Call Now
                </a>
                <span className="block text-xs leading-tight text-gray-400">
                  24/7 Support
                </span>
              </span>
            </button>
          </div>

          {/* Support Points */}
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm sm:text-base text-white">
            <li className="flex items-center gap-2">
              <CiCircleCheck className="text-orange-400 text-xl" />
              100% Safe Delivery
            </li>
            <li className="flex items-center gap-2">
              <CiCircleCheck className="text-orange-400 text-xl" />
              24/7 Support
            </li>
            <li className="flex items-center gap-2">
              <CiCircleCheck className="text-orange-400 text-xl" />
              Best Price Guarantee
            </li>
          </ul>

          {/* Bottom Stats (centered, inline) */}
          <div className="mt-20 w-full max-w-4xl rounded-3xl bg-black/60 px-6 py-5 text-white backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
              <div>
                <p className="text-2xl font-bold text-orange-400 sm:text-3xl">
                  1+
                </p>
                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-400 sm:text-3xl">
                  1K+
                </p>
                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                  Happy Customers
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-400 sm:text-3xl">
                  10+
                </p>
                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                  Expert Team
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-400 sm:text-3xl">
                  2+
                </p>
                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                  Cities Covered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
