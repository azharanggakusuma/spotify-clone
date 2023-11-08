// Header.js
import React, { useState } from "react";
import { FaSearch, FaSignInAlt } from "react-icons/fa";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="bg-black text-white py-4 px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Browse</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="bg-gray-800 text-white rounded-full py-2 px-4 pl-10"
            />
            <div className="absolute left-3 top-2 text-gray-500">
              <FaSearch />
            </div>
          </div>
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
