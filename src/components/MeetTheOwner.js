import React, { useState } from 'react';
import ownerImg from '../assets/images/background/contact-bg.jpg'; // Make sure to add the owner's image in the specified path

const MeetTheOwner = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="py-16 px-6 bg-light mt-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-dark mb-4" style={{ fontFamily: 'Montserrat' }}>Meet the Owner</h2>
          <h3 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: 'Montserrat' }}>Hi, I'm Isabella</h3>
          <p className="text-dark text-lg leading-relaxed mb-4" style={{ fontFamily: 'Montserrat' }}>
            I'm the founder of [Company Name]. With a passion for creating magical experiences, I started this company to bring joy and unforgettable memories to children and their families. Our mission is to make every event special and enchanting.
          </p>
          <button
            onClick={toggleShowMore}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
            style={{ fontFamily: 'Montserrat' }}
          >
            Want to know even more about me?
          </button>
          {showMore && (
            <div className="mt-4 text-dark text-lg leading-relaxed" style={{ fontFamily: 'Montserrat' }}>
              <p>
                I have been in the event planning industry for over 10 years, and I absolutely love what I do. My goal is to create unforgettable experiences for children and their families. When I'm not planning events, I enjoy spending time with my family and exploring new places.
              </p>
              <p>
                Thank you for considering [Company Name] for your next event. I look forward to making your special day magical!
              </p>
            </div>
          )}
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={ownerImg}
            alt="Owner"
            className="w-96 h-96 rounded-full shadow-lg object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default MeetTheOwner;