import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#00103A] text-white">
      <div className="flex flex-col md:flex-row items-center justify-around mt-8  space-y-6  md:space-y-0 bg-green-800 text-white p-8 text-center">
        <div className="md:text-start text-center">
          <h2 className="text-2xl font-semibold">The Newsletter</h2>
          <p className="mt-2 text-base max-w-2xl">
            Sign-up for our meticulously crafted collection highlighting the
            hottest luxury offerings, accompanied by exclusive insights.
          </p>
        </div>
        <button className="px-20 py-3 mr-0 md:mr-20 text-black bg-[#FFFFFF] font-semibold border border-black hover:bg-green-600 hover:text-white transition-all duration-300 md:ml-6">
          Sign-up for Newsletter
        </button>
      </div>
      <div className="container py-10 px-4 lg:px-14 flex flex-wrap gap-6 text-sm justify-between">
        {/* Mansions for Sale */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="font-semibold text-lg mb-4">Mansions for Sale</h3>
          <ul>
            <li className="mb-2">Mansion for sale in Emirates Hills</li>
            <li className="mb-2">Mansion for sale in Dubai Hills Estate</li>
            <li className="mb-2">Mansion for sale in Palm Jumeirah</li>
            <li className="mb-2">Mansion for sale in Palm Jabel Ali</li>
          </ul>
        </div>

        {/* Penthouses for Sale */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="font-semibold text-lg mb-4">Penthouses for Sale</h3>
          <ul>
            <li className="mb-2">Penthouse for sale in Downtown</li>
            <li className="mb-2">Penthouse for sale in Palm Jumeirah</li>
            <li className="mb-2">Penthouse for sale in Dubai Marina</li>
            <li className="mb-2">Penthouse for sale in JLT</li>
          </ul>
        </div>

        {/* Mansion Market Office */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="font-semibold text-lg mb-4">Mansion Market Office</h3>
          <ul>
            <li className="mb-2">About Mansion Market</li>
            <li className="mb-2">Register (Broker/Brokerage)</li>
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">Privacy & Policy</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col pb-16 md:flex-row items-center justify-between mx-14 border-t border-gray-700 py-4 text-center">
        <div className="flex justify-center space-x-6 mb-2 md:mb-0">
          <a
            href="#"
            className="hover:text-gray-400 text-lg"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="hover:text-gray-400 text-lg"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-gray-400 text-lg"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="hover:text-gray-400 text-lg"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
        <p className="text-base text-[#ffffff]">
          The Mansion Market® holds a registered trademark and operates as a
          luxury property marketplace.
        </p>
      </div>
    </div>
  );
};

export default Footer;
