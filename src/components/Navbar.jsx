import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bell } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Desktop Menu */}
          <div className="sm:hidden md:flex items-center space-x-10">
             <button className="bg-freshGreen text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
              Home
            </button>
            <Link to="/" className="text-gray-700 hover:text-green-500 transition-colors">
              Menu
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-500 transition-colors">
              About
            </Link>
            <Link to="/recipes" className="text-gray-700 hover:text-green-500 transition-colors">
            <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-700 hover:text-green-500 transition-colors flex items-center">
                Recipes
                <span className="ml-1">▼</span>
              </button>
            </Link>
            <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-5xl font-extrabold text-center">FRESHBOWL</span>
            </Link>
          </div>

          <div className="ml-auto flex items-center space-x-4">
  <Link to="/contact">
    <button className="space-x-4 w-full text-center text-black border border-black bg-white rounded-full px-4 py-2 hover:bg-gray-100 transition-colors">
      Contact
    </button>
  </Link>

  <button className="w-full rounded-full mr-0 bg-black text-center text-white hover:bg-gray-800 transition-colors p-2">
    <Bell size={24} color="white" />
  </button> 
</div>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-green-500 transition-colors"
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-green-500 transition-colors"
            >
              About
            </Link>
            <Link
              to="/recipes"
              className="block px-3 py-2 text-gray-700 hover:text-green-500 transition-colors"
            >
              Recipes
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-green-500 transition-colors"
            >
              Contact
            </Link>
            <button className="w-full text-center bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;