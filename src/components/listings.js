import React, { useState } from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsFullscreen } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import img1 from "../assests/BrandedResi-P.jpg";

const listings = [
  {
    type: "Villa",
    title: "Signature Villas, Palm Jumeirah, Dubai",
    price: "AED 160,000,000",
    beds: 6,
    baths: 7,
    size: "12,469 SQ.FT.",
    image: img1,
  },
  {
    type: "Villa",
    title: "Signature Villas, Palm Jumeirah, Dubai",
    price: "Price on Request",
    beds: 6,
    baths: 8,
    size: "16,439 SQ.FT.",
    image: img1,
  },
  {
    type: "Villa",
    title: "Six Senses Residences, Palm Jumeirah, Dubai",
    price: "AED 145,000,000",
    beds: 5,
    baths: 7,
    size: "26,514 SQ.FT.",
    image: img1,
  },
  {
    type: "Villa",
    title: "Contemporary Villa, Dubai Hills",
    price: "AED 120,000,000",
    beds: 5,
    baths: 6,
    size: "14,000 SQ.FT.",
    image: img1,
  },
];

const SimilarListings = () => {
  const [visibleListings, setVisibleListings] = useState(3);

  const handleViewMore = () => {
    setVisibleListings((prev) => prev + 3); // Show 3 more items
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Similar Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.slice(0, visibleListings).map((listing, index) => (
          <div key={index} className="">
            <div className="relative">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-[250px] object-cover"
              />
              <span className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-md border">
                {listing.type}
              </span>
              <button className="absolute top-3 right-3 bg-white text-black p-2 rounded-full border shadow-sm hover:bg-gray-100">
                <AiOutlineHeart size={20} />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium mb-1">{listing.title}</h3>
              <div className="flex  justify-between items-center">
                <p className="text-black text-sm font-semibold ">
                  {listing.price}
                </p>
                <div className="flex items-center text-gray-500 text-sm space-x-2">
                  <div className="flex items-center gap-1">
                    <span>{listing.beds}</span>
                    <FaBed />
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{listing.baths}</span>
                    <FaBath />
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{listing.size}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleListings < listings.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleViewMore}
            className="w-1/4 text-black py-2 px-4 border border-[#00603A] hover:bg-[#00603A] hover:text-white transition-colors"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default SimilarListings;
