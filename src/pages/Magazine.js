import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import newImage from "../assests/about.jpeg";
import carImage from "../assests/BrandedResi-P.jpg";
import carThumbnail1 from "../assests/WhatsApp Image 2025-01-08 at 01.27.10 (1).jpeg";
import carThumbnail2 from "../assests/Golf Community.jpg";
import carThumbnail3 from "../assests/The Magazine Collecton Placholder.jpeg";
import carThumbnail4 from "../assests/Waterfront Living.jpeg";
import Footer from "../components/Footer";

const Magazine = () => {
  const articles = [
    {
      title:
        "A Look at the Most Existinig Racing Cars at the RM Sotheby's Monterey Auction",
      date: "Jul 12th, 2024",
      category: "LIFESTYLE",
      image: carThumbnail1,
      description:
        "Discover some of the most remarkable cars featured in the Tegernsee Auction...",
    },
    {
      title: "RM Sotheby’s Inaugural Dubai Auction",
      date: "Jun 12th, 2024",
      category: "LIFESTYLE",
      image: carThumbnail2,
      description:
        "Explore the highlights of the inaugural Dubai Auction hosted by RM Sotheby’s...",
    },
    {
      title:
        "In Search of 'Gold and Treasures: 3000 Years of Chinese Ornaments'",
      date: "Jun 6th, 2023",
      category: "LIFESTYLE",
      image: carThumbnail3,
      description:
        "A deep dive into the world of Chinese ornaments spanning 3000 years of history...",
    },
    {
      title: "Dubai’s Branded Residences",
      date: "Jun 6th, 2023",
      category: "LIFESTYLE",
      image: carThumbnail4,
      description:
        "Luxury living redefined in Dubai with branded residences offering unmatched opulence...",
    },
  ];

  const [selectedArticle, setSelectedArticle] = useState({
    title:
      "A Look at the Most Exciting Racing Cars at the RM Sotheby’s Monterey Auction",
    date: "Aug 6th, 2024",
    category: "LIFESTYLE",
    image: carImage,
    description:
      "One of the most enduring partnerships in the automotive world returns to California’s picturesque Monterey Peninsula for the 27th year. Monterey Car Week and RM...",
  });

  const [sectionsToShow, setSectionsToShow] = useState(3); // Manage the number of sections displayed

  const handleLoadMore = () => {
    setSectionsToShow((prev) => prev + 1); // Increment sections to display
  };

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

        <div className="flex flex-wrap md:flex-row md:space-x-6 mt-4 py-6 md:mt-6 space-x-2 md:space-y-0">
          {[
            { name: "THE MANSION GUIDE", href: "#" },
            { name: "THE PENTHOUSE GUIDE ", href: "#" },
            { name: "THE LIFESTYLE GUIDE", href: "#" },
            { name: "NEWSROOM", href: "#" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-800 hover:text-green-600 text-sm sm:text-base  "
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="relative w-full min-h-[90vh]">
        <img
          src={newImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl text-center font-bold drop-shadow-lg">
            Explore the mansion market magazine
          </h1>
        </div>
      </div>

      {Array.from({ length: sectionsToShow }).map((_, index) => (
        <section key={index} className="px-4 py-10 md:px-10 lg:px-20">
          <h2 className="text-3xl font-bold mb-8">Lifestyle</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {/* Main Article */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={selectedArticle.image}
                alt="Main Article"
                className="w-full h-60 md:h-auto object-cover "
              />
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 uppercase mb-2">
                  {selectedArticle.category}
                </span>
                <div className="space-y-10">
                  <h3 className="text-2xl font-semibold">
                    {selectedArticle.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {selectedArticle.date}
                  </p>
                  <p className="text-gray-700 mt-2">
                    {selectedArticle.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Other Articles */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {articles.map((article, idx) => (
                <div
                  key={idx}
                  className="flex flex-col cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-40 object-cover "
                  />
                  <div className="mt-4">
                    <span className="text-sm text-gray-500 uppercase">
                      {article.category}
                    </span>
                    <h4 className="text-lg font-semibold mt-2 min-h-24">
                      {article.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{article.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <div className="flex justify-center ">
        {sectionsToShow < 5 && (
          <button
            onClick={handleLoadMore}
            className=" text-black px-12 my-10 py-2 rounded hover:bg-green-600 border border-black transition"
          >
            Load More
          </button>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Magazine;
