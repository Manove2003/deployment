import React from "react";

const Sidebar = ({ setViewType }) => {
  return (
    <div className="w-full sm:w-1/4 bg-green-900 text-white h-screen p-5 sm:relative z-10">
      <h1 className="text-2xl font-bold mb-8">Welcome @username</h1>
      <ul className="space-y-4">
        <li onClick={() => setViewType("mansions")} className="hover:bg-green-700 p-2 rounded cursor-pointer">Mansion Listings</li>
        <li onClick={() => setViewType("penthouses")} className="hover:bg-green-700 p-2 rounded cursor-pointer">Penthouse Listings</li>
        <li onClick={() => setViewType("luxury-collectibles")} className="hover:bg-green-700 p-2 rounded cursor-pointer">Luxury Collectibles</li>
        <li onClick={() => setViewType("property")} className="hover:bg-green-700 p-2 rounded cursor-pointer">Property Listings</li>
        <li className="hover:bg-green-700 p-2 rounded">Magazine Post</li>
        <li className="hover:bg-green-700 p-2 rounded">Traffic Analytics</li>
      </ul>
      <button className="absolute bottom-5 left-5 bg-red-600 px-4 py-2 rounded">Log out</button>
    </div>
  );
};

export default Sidebar;
