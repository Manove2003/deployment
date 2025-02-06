import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdClose } from "react-icons/md";
import "./man.css";
import Footer from "./Footer";
const HomeListing = () => {
  const [homes, setHomes] = useState([]);
  const [properties, setProperties] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    priceMin: "",
    priceMax: "",
    bedrooms: "",
    bathrooms: "",
    city: "",
    state: "",
    country: "",
    propertyType: "",
    schools: "",
    parks: "",
    transportation: "",
    attractions: "",
  });

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 15;
  const totalPages = Math.ceil(homes.length / cardsPerPage);

  useEffect(() => {
    fetchHomes();
    fetchProperties();
  }, []);

  const fetchHomes = async () => {
    try {
      const filterParams = new URLSearchParams(filters).toString();
      const response = await axios.get(`https://patient-unity-production.up.railway.app/mansions/filter?${filterParams}`);
      const apiData = response.data;
      console.log("Filtered homes: ", apiData);
      setHomes(apiData);
    } catch (error) {
      console.error("Error fetching data:", error);
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

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const applyFilters = () => {
    fetchHomes();
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
      <div className="p-4 md:p-8 bg-slate-100">
        {/* Header Section */}

        {/* Filter Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <MdClose size={24} />
                </button>
              </div>
              <div className="grid gap-4">
                <input
                  type="number"
                  name="priceMin"
                  value={filters.priceMin}
                  onChange={handleFilterChange}
                  placeholder="Min Price"
                  className="p-2 border rounded-md"
                />
                <input
                  type="number"
                  name="priceMax"
                  value={filters.priceMax}
                  onChange={handleFilterChange}
                  placeholder="Max Price"
                  className="p-2 border rounded-md"
                />
                <input
                  type="number"
                  name="bedrooms"
                  value={filters.bedrooms}
                  onChange={handleFilterChange}
                  placeholder="Bedrooms"
                  className="p-2 border rounded-md"
                />
                <input
                  type="number"
                  name="bathrooms"
                  value={filters.bathrooms}
                  onChange={handleFilterChange}
                  placeholder="Bathrooms"
                  className="p-2 border rounded-md"
                />
                <input
                  type="text"
                  name="city"
                  value={filters.city}
                  onChange={handleFilterChange}
                  placeholder="City"
                  className="p-2 border rounded-md"
                />
                <button
                  onClick={applyFilters}
                  className="px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-700 whitespace-nowrap">
                {homes.length} homes
              </span>
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800"
              >
                Filters
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
            <div key={home._id} className="rounded-lg overflow-hidden">
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
                      onClick={() => toggleFollow(home._id)}
                      className={`px-4 py-2 text-sm font-medium border rounded-lg ${home.isFollowed ? "bg-gray-800 text-white" : "bg-white text-gray-800"
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
                <p className="text-lg text-gray-800">${home.price.toLocaleString()}</p>
                <p className="text-sm text-gray-500">{home.description}</p>
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
          Mansions and Penthouses for sale in Dubai
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
                <div className="absolute bottom-0 left-0 w-full   text-white p-2">
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

export default HomeListing;