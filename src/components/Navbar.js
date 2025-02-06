import React from "react";

// Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md   w-full z-50 ">
      {/* Top green bar */}
      <div className="bg-[#00603A] h-2"></div>

      {/* Navbar container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center h-auto py-4 md:py-6">
          {/* Logo Block */}
          <div className="block">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-center">
              THE MANSION MARKET
            </h1>
          </div>

          {/* Links Block */}
          <div className="flex flex-wrap md:flex-row md:space-x-6 mt-4 md:mt-6 space-x-2 md:space-y-0">
            {[
              { name: "Mansions", href: "/mansions" },
              { name: "Penthouses", href: "/penthouses" },
              { name: "New Developments", href: "/new-developments" },
              { name: "Magazine", href: "/magazine" },
              { name: "Luxe Collectibles", href: "/luxe-collectibles" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-800 hover:text-green-600 text-sm sm:text-base md:text-lg lg:text-xl"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
