import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the hamburger menu
import Dropdown from './Dropdown';
import { FaPaintBrush, FaVideo, FaImages, FaCalendar, FaStar } from 'react-icons/fa'; // Example icons
import logo from '../assets/images/logo.png'; // Logo image
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const [moreMenuOpen, setMoreMenuOpen] = useState(false); // State for "More" dropdown in mobile view

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMoreMenuOpen(false); // Ensure "More" menu closes when main menu is toggled
  };

  const toggleMoreMenu = () => {
    setMoreMenuOpen(!moreMenuOpen);
  };

  const dropdownItems = [
    { label: 'Face Painting', href: '/face-painting', icon: <FaPaintBrush /> },
    { label: 'Virtual Services', href: '/virtual-services', icon: <FaVideo /> },
    { label: 'Gallery', href: '/gallery', icon: <FaImages /> },
    { label: 'Events', href: '/events', icon: <FaCalendar /> },
    { label: 'Reviews', href: '/reviews', icon: <FaStar /> },
  ];

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Company Name */}
                <NavLink to="/" className="flex items-center space-x-3">
                <img className="h-16 w-16 rounded-full" src={logo} alt="Logo" />
                <h1 className="text-xl font-semibold whitespace-nowrap" style={{ fontFamily: 'Montserrat, sans-serif', color: '#453b3a' }}>Pixie Dust Princesses</h1>
                </NavLink>

                {/* Navigation Links - Desktop View (shown when screen is larger than 450px) */}
          <div className="hidden custom-sm:flex items-center space-x-8">
            <NavLink to="/" activeClassName="font-bold text-red-300">Home</NavLink>
            <NavLink to="/about" className="text-gray-800 hover:text-red-300 transition">About</NavLink>
            <NavLink to="/characters" className="text-gray-800 hover:text-red-300 transition">Characters</NavLink>
            <NavLink to="/pricing" className="text-gray-800 hover:text-red-300 transition">Pricing</NavLink>
            <NavLink to="/contact" className="text-gray-800 hover:text-red-300 transition">Contact</NavLink>
            {/* Book Now Button */}
            <NavLink
              to="/book"
              className="bg-primary text-white px-4 py-2 rounded-full font-bold hover:bg-red-300 transition whitespace-nowrap"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Book Now
            </NavLink>
            {/* More Dropdown */}
            <Dropdown title="More" items={dropdownItems} />
          </div>

          {/* Hamburger Menu Icon - Mobile View (shown when screen is 450px or smaller) */}
          <div className="custom-sm:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`custom-sm:hidden mt-4 transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
            <NavLink
              to="/"
              activeClassName="font-bold text-red-300"
              className="block text-lg text-gray-800 hover:text-primary transition"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block text-lg text-gray-800 hover:text-primary transition"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/characters"
              className="block text-lg text-gray-800 hover:text-primary transition"
              onClick={toggleMenu}
            >
              Characters
            </NavLink>
            <NavLink
              to="/pricing"
              className="block text-lg text-gray-800 hover:text-primary transition"
              onClick={toggleMenu}
            >
              Pricing
            </NavLink>
            <NavLink
              to="/contact"
              className="block text-lg text-gray-800 hover:text-primary transition"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>

            {/* More Dropdown - Mobile View */}
            <button
              onClick={toggleMoreMenu}
              className="block text-lg text-gray-800 hover:text-primary transition w-full text-left"
            >
              More {moreMenuOpen ? <FaTimes className="inline ml-2" /> : <FaBars className="inline ml-2" />}
            </button>
            {moreMenuOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {dropdownItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.href}
                    className="block text-gray-800 hover:text-primary transition"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}

            {/* Book Now Button - Mobile View */}
            <NavLink
              to="/book"
              className="bg-primary text-white px-4 py-2 rounded-full font-bold hover:bg-red-300 transition block text-center mt-4 whitespace-nowrap"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              onClick={toggleMenu}
            >
              Book Now
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
