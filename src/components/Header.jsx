// Header.js
import React, { useState } from "react";
import { FaSearch, FaSignInAlt } from "react-icons/fa";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="bg-primary text-white py-4 px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Spotify Clone</h1>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
            <FaSearch />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="bg-gray-800 text-white rounded-full py-2 px-10"
          />
        </div>
        <div className="flex space-x-4">
          <button className="bg-white hover:bg-gray-200 text-black text-sm font-semibold rounded-full py-3 px-6">
            Log In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
