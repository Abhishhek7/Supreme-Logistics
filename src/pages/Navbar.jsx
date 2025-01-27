import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.jpeg"; // Assuming you have the logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Use location hook to check active route
  const menuRef = useRef(null); // Ref to track the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path; // Check if the link is active

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-200 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`${
              isActive("/") ? "bg-blue-500 text-white" : "text-gray-700"
            } text-lg py-2 px-6 hover:bg-blue-500 hover:text-white transition duration-200`}
          >
            Home
          </Link>
          <Link
            to="/product"
            className={`${
              isActive("/products") ? "bg-blue-500 text-white" : "text-gray-700"
            } text-lg py-2 px-6 hover:bg-blue-500 hover:text-white transition duration-200`}
          >
            Product
          </Link>
          <Link
            to="/aboutus"
            className={`${
              isActive("/about") ? "bg-blue-500 text-white" : "text-gray-700"
            } text-lg py-2 px-6 hover:bg-blue-500 hover:text-white transition duration-200`}
          >
            About Us
          </Link>
          <Link
            to="/careers"
            className={`${
              isActive("/careers") ? "bg-blue-500 text-white" : "text-gray-700"
            } text-lg py-2 px-6 hover:bg-blue-500 hover:text-white transition duration-200`}
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className={`${
              isActive("/contact") ? "bg-blue-500 text-white" : "text-gray-700"
            } text-lg py-2 px-6 hover:bg-blue-500 hover:text-white transition duration-200`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div ref={menuRef} className="md:hidden bg-gray-200 shadow-lg">
          <Link
            to="/"
            className={`block px-6 py-2 text-gray-700 hover:bg-gray-300 transition duration-200 ${
              isActive("/") ? "bg-blue-500 text-white" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/product"
            className={`block px-6 py-2 text-gray-700 hover:bg-gray-300 transition duration-200 ${
              isActive("/products") ? "bg-blue-500 text-white" : ""
            }`}
          >
            Product
          </Link>
          <Link
            to="/aboutus"
            className={`block px-6 py-2 text-gray-700 hover:bg-gray-300 transition duration-200 ${
              isActive("/about") ? "bg-blue-500 text-white" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            to="/careers"
            className={`block px-6 py-2 text-gray-700 hover:bg-gray-300 transition duration-200 ${
              isActive("/careers") ? "bg-blue-500 text-white" : ""
            }`}
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className={`block px-6 py-2 text-gray-700 hover:bg-gray-300 transition duration-200 ${
              isActive("/contact") ? "bg-blue-500 text-white" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
