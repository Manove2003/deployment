import React from "react";
import { FaArrowRight } from "react-icons/fa";
import magzizeimg from "../assests/The Magazine Collecton Placholder.jpeg";
const MagazineCollection = () => {
  return (
    <>
      <div className="min-h-screen bg-white px-4 md:px-8 lg:px-16 py-12">
        {/* Header Section */}
        <div className="text-start">
          <h2 className="text-lg md:text-2xl font-semibold text-green-700">
            The Magazine Collection
          </h2>
        </div>

        {/* Main Content Section */}
        <div className="mt-8 grid grid-cols-1 ">
          <div className="relative">
            <img
              src={magzizeimg}
              alt="Magazine"
              className="w-full h-5/6 object-cover "
            />
            <div className="absolute h-5/6 inset-0 bg-black bg-opacity-30 flex flex-col justify-end items-start  text-white p-6 ">
              <h3 className="text-base md:text-3xl font-bold">
                Former Charles Schwab CEO to Sell California 'Dream House' at
                Auction
              </h3>
              <p className="mt-2 text-sm md:text-xl">
                The 18-acre wine country property in Santa Barbara will have a
                $15.25 million reserve price.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row  items-center justify-between -mt-0 md:-mt-16  space-y-6 md:space-y-0">
            <p className="text-gray-600 text-center md:text-left max-w-2xl">
              Explore expert articles, market insights, and lifestyle features
              that showcase the latest in luxury properties and valuable assets.
              Check out our journal for exclusive updates, tips, and intriguing
              stories that celebrate the world of high-end real estate in Dubai
              and beyond.
            </p>
            <button className="px-20 py-3 mr-0 md:mr-20 text-black font-semibold  border border-black hover:bg-green-600 hover:text-white transition-all duration-300 md:ml-6">
              Read journals
            </button>
          </div>
        </div>
        <div className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16 mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              The Mansion Market has tremendous potential for attracting a
              diverse and qualified clientele. We chose to engage with The
              Mansion Market, which is now one of our leading partners in the
              luxury industry.
            </p>
            <p className="mt-4 text-gray-900 font-semibold text-sm md:text-base">
              - Angel Cherry, Nordstern International Realty
            </p>

            <div className="mt-6 flex justify-center items-center">
              <button className="text-gray-700 hover:text-gray-900 text-xl">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MagazineCollection;
