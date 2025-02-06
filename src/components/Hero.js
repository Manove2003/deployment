import React from "react";
import { FiArrowRight } from "react-icons/fi";
import img1 from "../assests/heroiimg.jpeg";

const ResponsiveHero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={img1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <div className="bg-white shadow-md rounded-lg w-full max-w-4xl     flex items-center ">
          <div className="flex flex-1 items-center space-x-4 border-2 border-black rounded-lg p-2 rounded-tr-none rounded-br-none">
            <input
              type="text"
              placeholder="Search For Properties"
              className="flex-1 w-full px-4 py-2 border-none focus:outline-none text-gray-700 placeholder-gray-400 rounded-md"
            />
            <button className="text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
              Filters
            </button>
          </div>
          <div className=" sm:flex items-center text-black  pr-4 ">
            <FiArrowRight className="text-xl sm:ml-4" />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 leading-tight">
          Discover Exclusive Mansions & Penthouses
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
          Explore a curated selection of luxury properties worldwide, showcasing
          collections that are truly second to none.
        </p>
      </div>
    </div>
  );
};

export default ResponsiveHero;
