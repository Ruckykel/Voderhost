import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm py-4 border-t-0 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        {/* Logo (Left) */}
        <a href="/">
         <div className="flex-shrink-0">
           <img src="/VoderhostLogo.webp" alt="Voderhost" className="h-8" />
         </div>
        </a>

        {/* Desktop Navigation (Center) */}
        <div className="hidden md:flex flex-grow justify-center">
          <div className="flex space-x-8">
            <a href="/Services" className="text-gray-600 hover:text-red-500">Services</a>
            <a href="/About" className="text-gray-600 hover:text-red-500">About Us</a>
            <a href="/Portfolio" className="text-gray-600 hover:text-red-500">Portfolio</a>
            <a href="/Contact" className="text-gray-600 hover:text-red-500">Contact Us</a>
          </div>
        </div>

        {/* Get Started Button (Right) */}
        <div className="hidden md:block">
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-full px-6 py-2">
            Get started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-gray-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 pt-2 pb-4">
          <div className="flex flex-col space-y-3">
            <button className="flex justify-between items-center text-gray-600 hover:text-red-500 focus:outline-none py-2">
              <span>Services</span>
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <a href="#" className="text-gray-600 hover:text-red-500 py-2">About Us</a>
            <a href="#" className="text-gray-600 hover:text-red-500 py-2">Portfolio</a>
            <a href="#" className="text-gray-600 hover:text-red-500 py-2">Contact Us</a>
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-full px-6 py-2 mt-2">
              Get started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;