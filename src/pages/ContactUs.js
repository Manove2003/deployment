import React from "react";
import { FaSearch } from "react-icons/fa";
import Footer from "../components/Footer";
import "react-world-flags"; // Ensure this library is installed in your project

const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col items-center px-4 md:px-10 lg:px-20 py-12 space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
            THE MANSION MARKET
          </h1>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="flex items-center w-full md:w-auto border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <input
                type="text"
                placeholder="Country, Area, District..."
                className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
              />
            </div>
            <button className="bg-green-800 px-4 py-2 flex items-center justify-center text-white hover:bg-green-600 transition">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="container mx-auto p-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-12 lg:space-y-0 lg:space-x-12">
            {/* Contact Text */}
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold text-green-700">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Complete the form below, and we will ensure your message is
                directed to the right staff member, who will contact you at
                their earliest convenience.
              </p>
            </div>

            {/* Form Section */}
            <div className="lg:w-1/2 w-full bg-white p-6 rounded-lg shadow-md space-y-6">
              <form className="space-y-6">
                <input
                  type="text"
                  className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Full name"
                  aria-label="Full name"
                />
                <input
                  type="email"
                  className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="E-mail address"
                  aria-label="E-mail address"
                />
                <div className="flex space-x-2 items-center">
                  <select
                    className="p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 flex-shrink-0"
                    aria-label="Country code"
                  >
                    <option value="+1" data-flag="us">
                      🇺🇸 +1
                    </option>
                    <option value="+44" data-flag="gb">
                      🇬🇧 +44
                    </option>
                    <option value="+91" data-flag="in">
                      🇮🇳 +91
                    </option>
                  </select>
                  <input
                    type="text"
                    className="flex-1 p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
                    placeholder="Phone number"
                    aria-label="Phone number"
                  />
                </div>
                <select
                  className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
                  aria-label="Subject"
                >
                  <option value="buy-property">
                    I'd like to buy a property
                  </option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="support">Support</option>
                </select>
                <select
                  className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
                  aria-label="Location"
                >
                  <option value="dubai">Dubai</option>
                  <option value="london">London</option>
                  <option value="new-york">New York</option>
                </select>
                <textarea
                  rows="4"
                  className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Your message"
                  aria-label="Your message"
                ></textarea>
                <div className="flex flex-col items-start space-y-4">
                  <button
                    type="submit"
                    className="bg-green-700 text-white p-3 rounded-full flex items-center justify-center hover:bg-green-600 transition"
                  >
                    Submit Enquiry
                  </button>
                  <div className="text-sm text-gray-500">
                    This site is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
