import React from 'react';
import Button from '../components/Button.js';

const VirtualServicesPage = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-red-300 mb-10">Virtual Services</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
        Can’t meet in person? No worries at all! Pixie Dust Princesses brings the magic of your favorite characters straight to your home with our virtual services. Whether it’s a virtual meet-and-greet, storytime, or a special birthday celebration, we’re here to create unforgettable moments from anywhere in the world.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mt-6">
        We use Zoom to ensure a smooth, high-quality video experience, so your family can enjoy every magical moment together. For more details on pricing, simply reach out through our inquiry form and mention you'd like to book a virtual video call. We can’t wait to make your virtual event extra special!
        </p>
      </div>
      <div className="max-w-7xl mx-auto text-center mt-10">
        <Button to="/book" primary>Book Now</Button>
      </div>
    </section>
  );
};

export default VirtualServicesPage;
