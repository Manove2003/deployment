import React from "react";
import { FaSearch } from "react-icons/fa";
import newImage from "../assests/WhatsApp Image 2025-01-08 at 01.27.10.jpeg";
import img1 from "../assests/Serenity Waters Luxury Villa 1.png";
import image from "../assests/Elegant Living Room with Designer Furniture and Artistic Sculptures 1.png";
import Footer from "../components/Footer";
const Register = () => {
  const listings1 = [
    {
      id: 1,
      price: "13 AED",
      location: "Villa in Marbella, Andalusia, Spain",
      imageUrl: img1, // Replace with actual image URL
    },
    {
      id: 2,
      price: "13 AED",
      location: "Villa in Marbella, Andalusia, Spain",
      imageUrl: img1,
    },
    {
      id: 3,
      price: "13 AED",
      location: "Villa in Marbella, Andalusia, Spain",
      imageUrl: img1,
    },
    {
      id: 4,
      price: "13 AED",
      location: "Villa in Marbella, Andalusia, Spain",
      imageUrl: img1,
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center px-4 md:px-10 lg:px-20 py-12 space-y-8">
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
        {/* Background Image */}
        <img
          src={newImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Connect with the best luxury real estate marketplace worldwide.
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-gray-50">
        {/* Text Content */}
        <div className="max-w-2xl text-center space-y-8">
          <p className="text-lg text-gray-800">
            Become a part of an elite marketplace for ultra-luxurious mansions
            and penthouses. Our exclusive platform draws ultra-high-net-worth
            buyers who seek unparalleled quality and distinction in their homes.
          </p>
          <p className="text-lg text-gray-800">
            With a commitment to excellence, we carefully curate listings,
            focusing on exceptional properties located in the city’s most
            prestigious areas.
          </p>
          <p className="text-lg text-gray-800">
            Who can join our distinguished marketplace? Individual agents,
            agencies, holiday home operators, property developers, and property
            owners.
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <button className="px-6 py-3 w-64 border border-green-800 text-green-800  hover:bg-green-800 hover:text-white transition duration-300">
            Register Now
          </button>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-16 py-12 border-t border-b border-[#00603A]">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl text-center font-bold text-green-700 mb-6">
          Newly Listed Penthouses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
          {listings1.map((listing) => (
            <div
              key={listing.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={listing.imageUrl}
                alt={listing.location}
                className="w-full h-72 object-cover"
              />
              {/* Details */}
              <div className="p-4">
                <p className="text-black font-bold text-lg">{listing.price}</p>
                <p className="text-gray-500 text-sm">{listing.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-8 space-y-6 md:space-y-0">
          <p className="text-gray-600 text-center md:text-left max-w-2xl">
            Discover the exquisite mansions and penthouses that are currently in
            the spotlight and newly available. This curated collection showcases
            the most sought-after properties on the market right now.
          </p>
          <button className="px-20 py-3 mr-0 md:mr-20 text-black font-semibold border border-black hover:bg-green-600 hover:text-white transition-all duration-300 md:ml-6">
            Discover all
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center px-4 md:px-8  py-12 space-y-8 md:space-y-0 ">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image}
            alt="Mansion Market Magazine"
            className="w-full md:w-[70%] lg:w-[60%] h-auto  shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
            EXPLORE the mansion market magazine
          </h2>
          <p className="text-gray-600 mb-6">
            Explore expert articles, market insights, and lifestyle features
            that showcase the latest in luxury properties and valuable assets.
            Check out our journal for exclusive updates, tips, and intriguing
            stories that celebrate the world of high-end real estate in Dubai
            and beyond.
          </p>
          <button className="px-8 py-3 border border-green-800 text-green-800 font-semibold rounded hover:bg-green-800 hover:text-white transition-all duration-300">
            Explore magazine
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
