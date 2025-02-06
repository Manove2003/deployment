import React from "react";
import { FaSearch } from "react-icons/fa";
import newImage from "../assests/about.jpeg"; // Use the uploaded image
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <div className="">
        {" "}
        {/* Full screen height */}
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
        </div>
        <div className="relative w-full h-screen">
          <img
            src={newImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-12">
        <div className="  text-gray-700 w-9/12 md:px-10 lg:px-20 py-12 space-y-8">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-justify">
              <strong className="text-[#00603A]">The Mansion Market</strong>,
              the premier marketplace for finest mansions and penthouses. We
              specialize in properties those with a built-up area of 6,000
              square feet or more. Our exclusive focus ensures that we cater to
              the upper echelons of the luxury real estate market.
            </p>

            <p className="text-lg md:text-xl text-justify">
              We take immense pride in our rigorous vetting process for both
              properties and agents, guaranteeing that only the highest quality
              listings are presented to our discerning clients. As pioneers in
              Dubai’s luxury real estate sector, we are acutely aware of the
              increasing number of homes entering the market, and we remain
              steadfast in our commitment to excellence.
            </p>

            <p className="text-lg md:text-xl text-justify">
              We collaborate with the leading agencies in the industry, ensuring
              that we showcase only the most exquisite properties. At The
              Mansion Market, we fully understand the expectations of modern
              luxury home buyers and sellers. We are dedicated to not just
              meeting but exceeding those expectations. With us, you can trust
              that your journey through Dubai’s real estate market will be
              nothing short of exceptional and rewarding.
            </p>
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl m-10 font-semibold text-center text-[#00603A]">
          List Your Property With Us?
        </h2>
        <div className="  text-gray-700 w-9/12 md:px-10 lg:px-20 py-2 space-y-2">
          <p className="text-lg md:text-xl text-justify">
            Put your property in front of the right eyeballs and enhance its
            visibility tenfold. with us property will attract high-end buyers
            actively seeking luxury homes in the market.
          </p>
        </div>
        <button className="w-3/12 text-xl border border-[#000000] p-2 m-16 flex items-center justify-center">
          List your properties
        </button>
      </div>

      <Footer />
    </>
  );
};

export default About;
