import React from 'react';
import Button from './Button';
import heroImage from '../assets/images/background/hero-bg.jpg'; // Hero background image
import logo from '../assets/images/logo.png'; // Logo image

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Darker Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pb-32">
        {/* Logo inside a smaller circular container */}
        <div className="bg-white p-0 rounded-full shadow-2xl">
          <img src={logo} alt="Logo" className="w-80 h-80 object-contain mb-2" />
        </div>
        
        {/* Hero Text */}
        <h1 className="mt-6 text-white text-5xl font-extrabold drop-shadow-lg">
          Make Your Event Magical
        </h1>
        
        <p className="text-white text-lg mt-4 drop-shadow-lg">
          Book our enchanting princesses to create unforgettable moments at your next party.
        </p>
        
        {/* Call to Action Button */}
        <Button to="/book" className="mt-6" style={{ backgroundColor: '#feb1c4', color: 'white', padding: '12px 24px', borderRadius: '9999px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          Book Now
        </Button>
      </div>

      {/* Inverted Diagonal Divider */}
      <div className="absolute inset-x-0 bottom-0 h-16" style={{ background: 'linear-gradient(to left, #ffb1c4, #ffa3a6)', clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)' }}></div>
    </section>
  );
};

export default HeroSection;
