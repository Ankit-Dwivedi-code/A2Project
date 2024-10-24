import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaSearch, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for routing

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
        {/* Left side: Logo */}
        <Link to="/" className="text-xl font-bold text-gray-600 flex items-center">
          <img src="/img/logo2.png" alt="Logo" className="w-10 h-10 rounded-full" />
        </Link>

        {/* Middle: Courses Dropdown and Search Bar */}
        <div className="flex items-center space-x-6">
          {/* Courses Dropdown */}
          <div
            className="relative cursor-pointer courses-dropdown"
            onClick={() => setShowExploreDropdown(!showExploreDropdown)}
          >
            <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <span>Courses</span>
              <FaChevronDown className="text-sm" />
            </div>
            {showExploreDropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                <Link to="/courses/data-science" className="p-2 hover:bg-gray-100 text-lg block">Data Science</Link>
                <Link to="/courses/mern" className="p-2 hover:bg-gray-100 text-lg block">MERN</Link>
                <Link to="/courses/machine-learning" className="p-2 hover:bg-gray-100 text-lg block">Machine Learning</Link>
                <Link to="/courses/devops" className="p-2 hover:bg-gray-100 text-lg block">DevOps</Link>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative ">
          <div className="absolute left-1">
            <img src="/img/logo2.png" alt="Search Icon" className="w-8 h-8" />
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
        </div>
        {/* Right side: Contact, Login, and Sign Up */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <Link to="/auth/a2/login" className="text-gray-700 hover:text-blue-600">Login</Link>
          <Link to="/auth/a2/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Sign Up
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars className="text-2xl text-gray-700" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <div className="flex flex-col space-y-4 px-4">
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link to="/auth/a2/login" className="text-gray-700 hover:text-blue-600">Login</Link>
            <Link to="/auth/a2/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
