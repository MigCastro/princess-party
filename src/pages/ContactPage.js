import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Importing icons
import contactPhoto from '../assets/images/background/contact-bg.jpg'; // Importing the image

const ContactPage = () => {
  return (
    <section className="py-16 px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Contact Details */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 text-left">
          <h1 className="text-5xl font-bold text-gray-800 mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact Us</h1>
          <p className="text-xl text-gray-700 mb-2 font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Pixie Dust Princesses</p>
          <p className="text-lg text-gray-600 mb-6">info@pixiedustprincesses.com</p>

          {/* Social Media Icons */}
          <div className="flex space-x-3 mb-6">
            {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
              <FaFacebook size={36} />
            </a> */}
            <a href="https://www.instagram.com/pixiedust.princesses/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-red-400 transition">
              <FaInstagram size={36}/> 
            </a>
            <a href="https://www.instagram.com/pixiedust.princesses/" target="_blank" rel="noopener noreferrer">
              <p className="text-xl text-gray-700 mt-1 hover:text-red-400 transition">@pixiedust.princesses</p>
            </a>
          </div>

          {/* Phone Number */}
          <p className="text-xl font-semibold text-gray-700 mt-6">Phone Number</p>
          <p className="text-lg text-gray-600">(786) 361-5225</p>
        </div>

        {/* Right Side: Example Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img src={contactPhoto} alt="Contact" className="rounded-md shadow-lg object-cover h-96 lg:h-auto lg:w-96" />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
