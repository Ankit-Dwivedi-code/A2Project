import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaSearch, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showExploreDropdown, setShowExploreDropdown] = useState(false);

  // Handle closing dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.courses-dropdown')) {
        setShowExploreDropdown(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600 flex">
            <img src="/img/logo2.png" alt="" className="w-10 h-10 rounded-full" />
        </div>

        {/* Main Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {/* Explore Dropdown */}
          <div
            className="relative cursor-pointer courses-dropdown"
            onClick={() => setShowExploreDropdown(!showExploreDropdown)}
          >
            <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <span>Courses</span>
              <FaChevronDown className="text-sm" />
            </div>
            {showExploreDropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                <div className="p-2 hover:bg-gray-100 cursor-pointer">Data Science</div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer">MERN</div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer">Machine Learning</div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer">DevOps</div>
              </div>
            )}
          </div>

          <a href="#" className="text-gray-700 hover:text-blue-600">Pricing</a>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center relative">
  <div className="absolute left-1">
    <img src="/img/logo2.png" alt="Search Icon" className="w-8 h-8"/>
  </div>
  <input
    type="text"
    placeholder="Search"
    className="pl-10 pr-14 py-2 w-80 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
  />
  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
    <FaSearch />
  </button>
</div>



        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-blue-600">Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars className="text-2xl text-gray-700" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <div className="flex flex-col space-y-4 px-4">
            <div
              className="relative cursor-pointer courses-dropdown"
              onClick={() => setShowExploreDropdown(!showExploreDropdown)}
            >
              <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                <span>Courses</span>
                <FaChevronDown className="text-sm" />
              </div>
              {showExploreDropdown && (
                <div className="mt-2 w-full bg-white border border-gray-200 shadow-lg rounded-md z-50">
                  <div className="p-2 hover:bg-gray-100 cursor-pointer">Data Science</div>
                  <div className="p-2 hover:bg-gray-100 cursor-pointer">Business</div>
                  <div className="p-2 hover:bg-gray-100 cursor-pointer">Computer Science</div>
                  <div className="p-2 hover:bg-gray-100 cursor-pointer">Personal Development</div>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-600">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Login</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
