import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Adding a chevron for better UX

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-800 hover:text-red-300 transition duration-300 ease-in-out focus:outline-none"
      >
        <span>{title}</span>
        <FaChevronDown className="text-sm" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-xl rounded-lg z-50">
          <div className="py-2">
            {items.map((item, index) => (
              <a
                href={item.href}
                key={index}
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-red-300 hover:text-white transition-all duration-300 ease-in-out rounded-md"
              >
                {item.icon && <span className="mr-3">{item.icon}</span>}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
