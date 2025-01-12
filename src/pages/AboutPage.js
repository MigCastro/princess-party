import React from 'react';
import { FaMagic, FaSmile, FaDollarSign } from 'react-icons/fa'; // Icons for visual aid
import MeetTheOwner from '../components/MeetTheOwner'; // Import the MeetTheOwner component

const AboutPage = () => {
  return (
    <section className="py-16 px-12 bg-light">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-dark mb-10" style={{ fontFamily: 'Montserrat' }}>About Us</h1>
        <p className="text-dark text-lg leading-relaxed mb-10" style={{ fontFamily: 'Montserrat' }}>
          We specialize in creating magical moments for children through immersive performances, fun activities, and character appearances that will make their day unforgettable.
        </p>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaMagic className="text-primary text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: 'Montserrat' }}>Magical Experiences</h3>
            <p className="text-dark">
              Our performances and characters bring fairy tales to life, providing an enchanting experience for every child.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaSmile className="text-primary text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: 'Montserrat' }}>Unforgettable Memories</h3>
            <p className="text-dark">
              We make sure every event is filled with laughter and joy, creating magical moments to remember.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaDollarSign className="text-primary text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: 'Montserrat' }}>Affordable Packages</h3>
            <p className="text-dark">
              We offer competitive prices, ensuring your event is magical without breaking the bank.
            </p>
          </div>
        </div>
      </div>
      
      {/* Meet the Owner Section */}
      <MeetTheOwner />
    </section>
  );
};

export default AboutPage;
