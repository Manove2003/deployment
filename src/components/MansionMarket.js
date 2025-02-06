import React from "react";
import { FaSearch } from "react-icons/fa";

const MansionMarket = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-10 lg:px-20 py-12 space-y-8">
      {/* Title and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-evenly w-full gap-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
          THE MANSION MARKET
        </h1>
        <div className="flex gap-4">
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
      {/* Subtitle */}
      <h2 className="text-xl md:text-2xl font-semibold text-green-800 text-center">
        Explore luxurious mansions for sale globally
      </h2>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-600 text-center max-w-3xl leading-relaxed">
        Discover a curated selection of exceptional mansions from around the
        globe at The Mansion Market. Each listing is handpicked to meet your
        ultra-luxury requirements, offering unparalleled elegance, opulence, and
        breathtaking views.
      </p>
    </div>
  );
};

export default MansionMarket;
