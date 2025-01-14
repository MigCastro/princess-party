import React, { useState } from 'react';

const EventCard = ({ title, date, logo, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-8 px-16 border-b">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left md:flex-1">
          <h2 className="text-3xl font-bold text-dark mb-2 md:pr-24">{title}</h2>
          <p className="text-gray-600 text-lg">{date}</p>
          <button
            onClick={toggleDropdown}
            className="mt-4 bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-red-300 transition"
          >
            Learn More
          </button>
          {isOpen && (
            <div className="mt-4 text-gray-600 text-lg leading-relaxed transition-all duration-500 ease-in-out">
              {description}
            </div>
          )}
        </div>
        <div className="flex-shrink-0 md:ml-8">
          <img src={logo} alt="Organization Logo" className="w-60 h-60 object-contain mb-4 md:mb-0" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;