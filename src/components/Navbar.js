import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import both Link and NavLink
import Dropdown from './Dropdown';
import { FaPaintBrush, FaVideo, FaImages, FaCalendar, FaStar } from 'react-icons/fa'; // Example icons
import logo from '../assets/images/logo.png'; // Logo image

const Navbar = () => {
  const dropdownItems = [
    { label: 'Face Painting', href: '/face-painting', icon: <FaPaintBrush /> },
    { label: 'Virtual Services', href: '/virtual-services', icon: <FaVideo /> },
    { label: 'Gallery', href: '/gallery', icon: <FaImages /> },
    { label: 'Events', href: '/events', icon: <FaCalendar /> },
    { label: 'Reviews', href: '/reviews', icon: <FaStar /> },
  ];

  return (
    <nav className="bg-white shadow-md py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <img className="h-20 w-20 rounded-full" src={logo} alt="Logo" />
            <h1 className="text-2xl font-bold" style={{ color: '#453b3a' }}>Pixie Dust Princesses</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'font-bold text-pink-600' : 'text-gray-800 hover:text-pink-600 transition'
              }
            >
              Home
            </NavLink>
            <Link to="/about" className="text-gray-800 hover:text-pink-600 transition">About</Link>
            <Link to="/characters" className="text-gray-800 hover:text-pink-600 transition">Characters</Link>
            <Link to="/pricing" className="text-gray-800 hover:text-pink-600 transition">Pricing</Link>
            <Link to="/book" className="text-gray-800 hover:text-pink-600 transition">Book Now</Link>
            <Link to="/contact" className="text-gray-800 hover:text-pink-600 transition">Contact</Link>

            {/* More Dropdown */}
            <Dropdown title="More" items={dropdownItems} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
