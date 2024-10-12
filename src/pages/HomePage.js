import React from 'react';
import HeroSection from '../components/HeroSection'; // HeroSection component
import ServicesSection from '../components/ServicesSection'; // Corrected path

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      {/* Add other sections here */}
    </div>
  );
};

export default HomePage;
