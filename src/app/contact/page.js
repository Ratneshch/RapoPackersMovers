"use client";

import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    fromLocation: "",
    toLocation: "",
    message: "",
  });

  // ✅ ONLY ADDITION
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // ✅ ONLY CHANGE (alert → toast)
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);

        setForm({
          name: "",
          email: "",
          phone: "",
          fromLocation: "",
          toLocation: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">

      {/* ✅ ONLY ADDITION: TOAST */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg">
          Message sent successfully, we will reach you shortly ✅
        </div>
      )}

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mt-6 sm:mt-8">
        Contact Us Today
      </h2>

      {/* Subtext */}
      <p className="text-center text-sm sm:text-base lg:text-lg text-gray-500 mt-4 sm:mt-6 max-w-2xl mx-auto">
        Have questions or ready to book your move? Reach out to us and we’ll respond promptly.
      </p>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl mb-4">
                <FaPhoneAlt />
              </div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-500">+91 98209 19196</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl mb-4">
                <FaEnvelope />
              </div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-500">rapopackers@gmail.com</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-500">
                Shop No. 5, Sector 15, Navi Mumbai – 400614
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl mb-4">
                <FaClock />
              </div>
              <h3 className="font-semibold">Working Hours</h3>
              <p className="text-gray-500">24/7 Available</p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Vashi%20Navi%20Mumbai&output=embed"
              width="100%"
              height="260"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT SIDE – FORM */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
            Request a Free Quote
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-orange-500" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full pl-12 py-2 rounded-xl border"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-6 py-2 rounded-xl border"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-6 py-2 rounded-xl border"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="fromLocation"
                value={form.fromLocation}
                onChange={handleChange}
                placeholder="Moving From"
                className="w-full px-6 py-2 rounded-xl border"
              />
              <input
                name="toLocation"
                value={form.toLocation}
                onChange={handleChange}
                placeholder="Moving To"
                className="w-full px-6 py-2 rounded-xl border"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about your requirements..."
              className="w-full px-4 py-3 rounded-xl border"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl flex items-center justify-center gap-2"
            >
              <FaPaperPlane /> Submit
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
