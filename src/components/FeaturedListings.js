import React, { useEffect, useState } from "react";
import axios from "axios";

const FeaturedListings = () => {
  const [mansions, setMansions] = useState([]);
  const [penthouses, setPenthouses] = useState([]);
  const [collectibles, setCollectibles] = useState([]);

  useEffect(() => {
    axios
      .get("https://patient-unity-production.up.railway.app/mansions")
      .then((response) => setMansions(response.data))
      .catch((error) => console.error("Error fetching mansions:", error));

    axios
      .get("https://patient-unity-production.up.railway.app/penthouses")
      .then((response) => setPenthouses(response.data))
      .catch((error) => console.error("Error fetching penthouses:", error));

    axios
      .get("https://patient-unity-production.up.railway.app/luxury-collectibles")
      .then((response) => setCollectibles(response.data))
      .catch((error) => console.error("Error fetching collectibles:", error));
  }, []);

  const renderPropertyCard = (property) => (
    <div key={property._id} className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={property.images[0]}
        alt={property.name}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <p className="text-black font-bold text-lg">${property.price.toLocaleString()}</p>
        <p className="text-gray-700 text-sm mb-2">
          {property.bedrooms} Beds | {property.bathrooms} Baths | {property.size} sqft
        </p>
        <p className="text-gray-500 text-sm">{property.name}</p>
        <p className="text-gray-500 text-sm">
          {property.location.city}, {property.location.state}, {property.location.country}
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mansions Section */}
      <div className="px-4 md:px-8 lg:px-16 py-12 border-b border-[#00603A]">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
          Featured Mansions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
          {mansions.slice(0, 4).map(renderPropertyCard)}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 space-y-6 md:space-y-0">
          <p className="text-gray-600 text-center md:text-left max-w-2xl">
            Explore the off-plan and under-construction mansions and penthouses
            gaining attention and recently launched. This exclusive collection
            showcases the most desirable properties from renowned developers and
            private entities in the UAE's freehold areas.
          </p>
          <button className="px-20 py-3 text-black font-semibold border border-black hover:bg-green-600 hover:text-white transition-all duration-300">
            Discover all
          </button>
        </div>
      </div>

      {/* Penthouses Section */}
      <div className="px-4 md:px-8 lg:px-16 py-12 border-b border-[#00603A]">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
          Newly Listed Penthouses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
          {penthouses.slice(0, 4).map(renderPropertyCard)}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 space-y-6 md:space-y-0">
          <p className="text-gray-600 text-center md:text-left max-w-2xl">
            Discover the exquisite mansions and penthouses that are currently in
            the spotlight and newly available. This curated collection showcases
            the most sought-after properties on the market right now.
          </p>
          <button className="px-20 py-3 text-black font-semibold border border-black hover:bg-green-600 hover:text-white transition-all duration-300">
            Discover all
          </button>
        </div>
      </div>

      {/* Collectibles Section */}
      <div className="px-4 md:px-8 lg:px-16 py-12 border-b border-[#00603A]">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
          Luxury Collectibles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
          {collectibles.slice(0, 4).map((item) => (
            <div key={item._id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <p className="text-black font-bold text-lg">${item.price.toLocaleString()}</p>
                <p className="text-gray-500 text-sm">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 space-y-6 md:space-y-0">
          <p className="text-gray-600 text-center md:text-left max-w-2xl">
            Explore the luxury collectibles gaining attention. This exclusive collection 
            showcases the most desirable items from renowned designers and private collectors.
          </p>
          <button className="px-20 py-3 text-black font-semibold border border-black hover:bg-green-600 hover:text-white transition-all duration-300">
            Discover all
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedListings;
