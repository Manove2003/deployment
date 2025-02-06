import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaLock, FaEye } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = ({
  viewType, // Determines which data to fetch
  currentPage = 1,
  totalPages = 1,
  itemsPerPage = 5,
  onPageChange = () => { },
}) => {
  const [posts, setPosts] = useState([]); // State for fetched data
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [viewType]); // Fetch data when viewType changes

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://patient-unity-production.up.railway.app/${viewType}`);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  // Handle Delete Function
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://patient-unity-production.up.railway.app/${viewType}/${id}`);
      setPosts(posts.filter((post) => post._id !== id)); // Update state after deletion
      alert("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to delete item");
    }
  };

  // Filter posts based on search term
  const filteredPosts = posts.filter((post) =>
    post.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(startItem + itemsPerPage - 1, filteredPosts.length);
  const currentPosts = filteredPosts.slice(startItem - 1, endItem);

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex bg-[#F9F9F8] pr-4 flex-col sm:flex-row justify-end py-6">
        <h1 className="text-2xl font-bold">THE MANSION MARKET</h1>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">
          {viewType.toUpperCase().replace("-", " ")}
        </h1>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
          <h1 className="flex flex-col text-base font-bold">
            <span>Post List</span>
            <span>
              Dashboard <span className="text-blue-600">/ {viewType} </span>
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <Link to="/create-post">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">+ Create Post</button>
            </Link>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">View Hidden Posts</button>
            <div className="flex">
              <div className="flex items-center w-full md:w-auto border border-r-0 border-gray-300 rounded-lg overflow-hidden shadow-sm">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="bg-green-800 px-4 border border-gray-300 flex items-center justify-center text-white hover:bg-green-600 transition">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <div className="bg-blue-400 text-white py-2 px-4">
            <h2 className="text-lg font-semibold">List View</h2>
          </div>
          <table className="min-w-full border">
            <thead>
              <tr className="bg-blue-50">
                <th className="py-2 px-4 border">SL.No</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Category</th>
                <th className="py-2 px-4 border">Price</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((post, index) => (
                <tr key={post._id} className={`hover:bg-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  <td className="py-2 px-4 border text-center">{startItem + index}</td>
                  <td className="py-2 px-4 border">{post.name}</td>
                  <td className="py-2 px-4 border">{viewType.replace("-", " ")}</td>
                  <td className="py-2 px-4 border">${post.price?.toLocaleString()}</td>
                  <td className="py-2 px-4 border">{post.isAvailable ? "Available" : "Not Available"}</td>
                  <td className="py-2 px-4 border flex justify-center gap-2">
                    <button className="text-green-600 hover:text-green-800"><FaEye /></button>
                    <button className="text-blue-600 hover:text-blue-800"><FaEdit /></button>
                    <button onClick={() => handleDelete(post._id)} className="text-red-600 hover:text-red-800"><FaTrash /></button>
                    <button className="text-yellow-600 hover:text-yellow-800"><FaLock /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
