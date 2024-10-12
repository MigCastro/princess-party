import React from 'react';
import characters from '../assets/images/services/characters.jpg';
import facePainting from '../assets/images/services/face-painting.jpg';
import events from '../assets/images/services/events.jpg';

const ServicesSection = () => {
  return (
    <section className="relative pt-24 pb-40" style={{ background: 'linear-gradient(to left, #ffb1c4, #ffa3a6)' }}>
      {/* Diagonal divider at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-white" style={{ clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)' }}></div>

      {/* Service Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-5xl font-bold mb-10" style={{ color: '#fff' }}>Our Magical Services</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Character Service */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="w-40 h-40 mx-auto mb-4">
              <img src={characters} alt="Characters" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-3xl font-semibold" style={{ color: '#d16b83' }}>Characters</h3>
            <p className="mt-4 text-gray-600">
              Bring your favorite princesses to life at your next party with enchanting performances.
            </p>
          </div>

          {/* Face Painting Service */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="w-40 h-40 mx-auto mb-4">
              <img src={facePainting} alt="Face Painting" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-3xl font-semibold" style={{ color: '#d16b83' }}>Face Painting</h3>
            <p className="mt-4 text-gray-600">
              Add a magical touch with professional face painting that delights kids and adults alike.
            </p>
          </div>

          {/* Event Service */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="w-40 h-40 mx-auto mb-4">
              <img src={events} alt="Events" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-3xl font-semibold" style={{ color: '#d16b83' }}>Events</h3>
            <p className="mt-4 text-gray-600">
              Make your event magical with our stunning performances and activities that will leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
