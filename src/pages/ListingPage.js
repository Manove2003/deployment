import React, { useState } from "react";
import { FaSearch, FaArrowUp } from "react-icons/fa";
import newImage1 from "../assests/image 5.png";
import newImage2 from "../assests/BrandedResi-P.jpg";
import newImage3 from "../assests/Mansions.jpg"; // Add more images as needed
import { FaPhoneAlt } from "react-icons/fa"; // Importing WhatsApp and phone icons
import { BsFlag } from "react-icons/bs"; // Importing a flag icon
import { MdFlag } from "react-icons/md";
import locationimg from "../assests/image 7.png";
import Listing from "../components/listings";
import Footer from "../components/Footer";
import { FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa";
const ListingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [newImage1, newImage2, newImage3]; // Array of images

  // Handle next and previous buttons
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
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
        <div className="flex flex-col md:space-x-6 mt-4 py-6 md:mt-6 space-x-2 md:space-y-0">
          <h3 className="text-2xl font-semibold text-[#00603A] text-center mb-4">
            Exquisite villa in Palm Jumeirah with private pool
          </h3>
          <p className="text-base text-center">
            Mansion | 6 beds | 8 baths | 9,729 sq. ft. | 9,729 sq. ft. plot
          </p>
        </div>

        <div className="relative w-full h-screen">
          <img
            src={images[currentImageIndex]}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            onClick={handlePrevious}
          >
            &lt;
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>

        <div className="container mx-auto px-4 py-8 lg:flex lg:justify-between border-b border-black">
          {/* Left Section */}
          <div className="lg:w-7/12">
            <h1 className="text-3xl font-semibold text-green-900">
              Palm Jumeirah Mansion
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Dubai &gt; Palm Jumeirah &gt; Signature Villas
            </p>

            <p className="text-4xl font-bold text-green-900 mt-4">AED 95</p>
            <p className="text-sm text-gray-500 mt-2">PROPERTY REF: 44421</p>

            <p className="text-base text-gray-700 mt-4 leading-7 w-10/12">
              It is hard to imagine a luxury property more impressive than this
              extraordinary five-bedroom Presidential penthouse apartment in the
              Armani Beach Residences, Palm Jumeirah.
            </p>
            <p className="text-base text-gray-700 mt-4 leading-7 w-10/12">
              The Armani Beach Residences is one of Dubai’s most anticipated
              luxury branded residences and its Presidential penthouse
              apartments represent the pinnacle of indulgent opulence. This
              expansive five-bedroom penthouse apartment has a meticulously
              designed interior by Armani/Casa and a host of state-of-the-art
              features that blend elegant style with contemporary functionality.
              The living areas are spacious and inviting, with unique detailing
              and stunning accents. The gourmet kitchen is equipped with...
            </p>

            <button className="mt-6 px-6 py-2 bg-green-800 text-white  hover:bg-green-700">
              Show full description
            </button>
            <div className="border-t border-b border-black mt-8 py-6">
              <h1 className="text-3xl font-semibold text-green-900  ">
                Features & Amenities
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <ul className="space-y-2">
                  <li>Central A/C & heating</li>
                  <li>Balcony</li>
                  <li>Equipped kitchen</li>
                  <li>Built-in wardrobes</li>
                </ul>
                <ul className="space-y-2">
                  <li>Central A/C & heating</li>
                  <li>Balcony</li>
                  <li>Equipped kitchen</li>
                  <li>Built-in wardrobes</li>
                </ul>
                <ul className="space-y-2">
                  <li>Central A/C & heating</li>
                  <li>Balcony</li>
                  <li>Equipped kitchen</li>
                  <li>Built-in wardrobes</li>
                </ul>
              </div>
            </div>

            {/* Location Map Section */}
            <div className="text-start mt-8">
              <h2 className="text-2xl font-bold mb-4 text-green-900">
                Location Map
              </h2>
              <div className="w-full  relative">
                <img className="w-full" src={locationimg}></img>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="w-full bg-[#00603A] text-white py-2 px-6 flex items-center justify-center gap-2 rounded-md hover:bg-green-700 transition">
                <FaArrowUp className="text-white" />
                <span>Share Listing</span>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-5/12  p-6 mt-8 lg:mt-0">
            <div className="border border-black p-6 mt-8 lg:mt-0">
              <div className="flex items-center">
                <img
                  src={newImage1} // Replace with actual image URL
                  alt="Stephan Hirzel"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Stephan Hirzel
                  </h3>
                  <p className="text-sm text-gray-500">Associate Director</p>
                </div>
              </div>

              <div className="flex space-x-4 mt-4">
                <button className="text-green-800 font-semibold flex items-center space-x-1">
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </button>
                <button className="text-green-800 font-semibold flex items-center space-x-1">
                  <FaPhoneAlt />
                  <span>Call us</span>
                </button>
              </div>

              <form className="mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name *"
                    className="border rounded-md p-2 w-full text-gray-700"
                  />
                  <input
                    type="text"
                    placeholder="Last name *"
                    className="border rounded-md p-2 w-full text-gray-700"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email *"
                  className="border rounded-md p-2 w-full mt-4 text-gray-700"
                />
                <div className="flex items-center mt-4">
                  <span className="bg-gray-200 p-2 rounded-l-md flex items-center text-gray-700">
                    <BsFlag className="mr-1" />
                    +971
                  </span>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="border-t border-b border-r rounded-r-md p-2 w-full text-gray-700"
                  />
                </div>
                <textarea
                  placeholder="I'd like to have more information about the Property Ref: GS-S-44421"
                  className="border rounded-md p-2 w-full mt-4 text-gray-700"
                  rows="4"
                ></textarea>
              </form>
            </div>
            <div className="relative">
              {/* Submit enquiry button */}
              <button
                type="button"
                className="w-full mt-6 px-6 py-2 bg-green-800 text-white hover:bg-green-700"
                onClick={handleSubmit}
              >
                Submit enquiry
              </button>

              {/* Popup Modal */}
              {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white w-full max-w-sm md:max-w-md p-6 rounded-lg shadow-lg relative">
                    {/* Close button */}
                    <button
                      className="absolute top-4 right-4 text-gray-500 hover:text-black"
                      onClick={handleClose}
                    >
                      ✕
                    </button>

                    {/* Popup Content */}
                    <div className="space-y-4">
                      <h2 className="text-lg font-semibold">
                        Exquisite villa in Palm Jumeirah with private pool
                      </h2>
                      <img
                        src={newImage1}
                        alt="Villa"
                        className="rounded-lg w-full h-40 object-cover"
                      />
                      <p className="text-gray-600">
                        Presidential penthouse in luxury branded residence on
                        Palm Jumeirah.
                      </p>
                      <div className="flex justify-center space-x-4 mt-4">
                        {/* Share icons */}
                        <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                          <FaFacebookF className="text-blue-600" />
                        </button>
                        <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                          <FaWhatsapp className="text-green-600" />
                        </button>
                        <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                          <FaEnvelope className="text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Listing />
      </div>

      <Footer />
    </>
  );
};

export default ListingPage;
