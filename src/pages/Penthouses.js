import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/man.css";
import { FaSearch } from "react-icons/fa";
import Footer from "../components/Footer";
const Penthouses = () => {
  const [homes, setHomes] = useState([]);
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 15;
  const totalPages = Math.ceil(homes.length / cardsPerPage);

  // Fetch penthouse data from the API
  useEffect(() => {
    fetchHomes();
    fetchProperties();
  }, []);

  const fetchHomes = async () => {
    try {
      const response = await axios.get("https://patient-unity-production.up.railway.app/penthouses");
      setHomes(response.data);
    } catch (error) {
      console.error("Error fetching penthouses:", error);
    }
  };

  const fetchProperties = async () => {
    try {
      const response = await axios.get("https://patient-unity-production.up.railway.app/property");
      setProperties(response.data);
    } catch (error) {
      console.error("Error fetching property:", error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleFollow = (id) => {
    setHomes((prevHomes) =>
      prevHomes.map((home) =>
        home.id === id ? { ...home, isFollowed: !home.isFollowed } : home
      )
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const displayedHomes = homes.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <>
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
          Explore luxurious penthouses for sale globally
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-600 text-center max-w-3xl leading-relaxed">
          Discover a selection of exquisite penthouses from around the world at
          The Mansion Market. Every listing is handpicked to cater to your
          ultra-luxury desires, offering superior elegance, opulence, and
          breathtaking panoramas.
        </p>
      </div>

      <div className="p-4 md:p-8 bg-slate-100">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-700 whitespace-nowrap">
              870 homes
            </span>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200">
                Type
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200">
                Size
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200">
                Bedrooms
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200">
                Price
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200">
                More
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 text-sm font-medium">Sort by</span>
              <select className="bg-transparent text-gray-700 font-medium focus:outline-none cursor-pointer">
                <option className="text-gray-700">Featured</option>
                <option className="text-gray-700">Price: High to Low</option>
                <option className="text-gray-700">Price: Low to High</option>
                <option className="text-gray-700">Newest</option>
              </select>
            </div>
            <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800">
              Save search
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedHomes.map((home) => (
            <div key={home.id} className="rounded-lg overflow-hidden">
              <div className="relative">
              {home.images.length > 1 ? (
                  <Slider {...sliderSettings}>
                    {home.images.map((img, idx) => (
                      <div key={idx}>
                        <img
                          src={img}
                          alt={`Slide ${idx + 1}`}
                          className="w-full h-60 object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <img
                    src={home.images[0]} // Show a single image directly
                    alt="Mansion"
                    className="w-full h-60 object-cover"
                  />
                )}
                {home.isFeatured && (
                  <span className="absolute top-2 left-2 bg-white text-black text-xs font-medium px-3 py-1 shadow">
                    Featured
                  </span>
                )}
              </div>
              <div className="">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <div className="w-full flex items-center justify-between">
                    <div className="flex space-x-4">
                      <span>{home.views} Views</span>
                      <span>{home.followers} Followers</span>
                    </div>
                    <button
                      onClick={() => toggleFollow(home.id)}
                      className={`px-4 py-2 text-sm font-medium border rounded-lg ${home.isFollowed
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-800"
                        }`}
                    >
                      {home.isFollowed ? "Following" : "Follow"}
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <h2 className="text-lg font-medium">
                    {home.location.city}, {home.location.state}, {home.location.country}
                  </h2>
                  <p className="text-sm text-gray-500">{home.status}</p>
                </div>
                <p className="text-sm text-gray-500">{home.propertyType}</p>
                <p className="text-lg  text-gray-800">{home.price}</p>
                <p className="text-sm text-gray-500">{`Penthouse • ${home.bedrooms} beds • ${home.size} sq. ft.`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center  m-8 p-4 ">
        <button
          onClick={handlePrevPage}
          // disabled={currentPage === 0}
          className="px-4 py-2 bg-gray-100 border-2 border-[#000000] w-40  text-sm font-medium hover:bg-gray-200 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          // disabled={currentPage === totalPages - 1}
          className="ml-4 px-4 py-2 bg-gray-100 border-2 w-40 border-[#000000]  text-sm font-medium hover:bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <div className="bg-white py-10 border-t-2 boder-[#0000000]">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-green-800 mb-8">
          Off-plan Mansions and Penthouses for sale in Dubai
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {properties.map((property) => (
            <div
              key={property.id}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              {/* Image and title on the image */}
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full  text-white p-2">
                  <h3 className="text-lg font-bold">{property.title}</h3>
                </div>
              </div>
              {/* Location outside the image */}
              <div className="p-4">
                <p className="text-sm text-gray-700">{property.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Penthouses;
