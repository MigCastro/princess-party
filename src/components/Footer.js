import React from 'react';
import { FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Contact Us</h3>
            <p className="mt-4 text-gray-600">Have questions or need to get in touch?</p>
            <p className="mt-2 text-gray-600">
              <FaPhoneAlt className="inline mr-2" /> (786) 361-5225
            </p>
            <p className="mt-2 text-gray-600">
              <FaEnvelope className="inline mr-2" /> info@pixiedustprincesses.com
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-800">Follow Us</h3>
            <div className="flex mt-6 space-x-6">
              <a
                href="https://www.instagram.com/pixiedust.princesses/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-red-300 transition"
              >
                <FaInstagram size={30} />
              </a>
              <a href="mailto:info@pixiedustprincesses.com" className="text-gray-800 hover:text-red-300 transition">
                <FaEnvelope size={30} />
              </a>
              <a href="tel:+17863615225" className="text-gray-800 hover:text-red-300 transition">
                <FaPhoneAlt size={30} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center md:justify-end">
            <p className="text-gray-600">&copy; 2025 Pixie Dust Princesses - All Rights Reserved</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
