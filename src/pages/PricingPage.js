import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Adding check icons for a cleaner look
import { useNavigate } from 'react-router-dom'; // Import useNavigate to navigate to Book Now page

const PricingPage = () => {
  const navigate = useNavigate();

  const handleBookNow = (packageName) => {
    // Navigate to BookNow page and pass the package name via state
    navigate('/book', { state: { selectedPackage: packageName } });
  };

  return (
    <section className="py-16 px-12 bg-light">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-dark mb-10" style={{ fontFamily: 'Montserrat' }}>Our Packages</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Pixie Hallow Package */}
          <div className="relative bg-white p-12 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col justify-between">
            <div>
              {/* <div className="absolute top-0 left-0 bg-primary text-white px-4 py-2 rounded-br-lg rounded-tl-lg">Best Value</div> */}
              <h3 className="text-4xl font-bold text-dark mb-4" style={{ fontFamily: 'Montserrat' }}>Pixie Hollow Party</h3>
              <p className="text-5xl font-bold text-primary mb-6">$145</p>
              <ul className="text-left space-y-2 text-dark">
                <li><FaCheckCircle className="inline text-primary mr-2" /> 60 min</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> 15 Kiddo Maximum</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Character of Choice</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Live Performances</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Princess Training</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Face Paint</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Autographs</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Photo Opportunities</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Game Hosting (1 Game Max)</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Happy Birthday Song</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Piñata Assistance</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Music System Provided</li>

              </ul>
            </div>
            {/* Book Now Button */}
            <button
              onClick={() => handleBookNow('Pixie Hollow Party')}
              className="mt-6 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
              style={{ fontFamily: 'Montserrat' }}
            >
              Book Now
            </button>
          </div>

          {/* Pixie Perfect Package */}
          <div className="relative bg-white p-12 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-bold text-dark mb-4" style={{ fontFamily: 'Montserrat' }}>Pixie Perfect Party</h3>
              <p className="text-5xl font-bold text-primary mb-6">$185</p>
              <ul className="text-left space-y-2 text-dark">
                <li><FaCheckCircle className="inline text-primary mr-2" /> 90 min</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> 20 Kiddo Maximum</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Character of Choice</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Live Performances</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Princess Training</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Face Paint</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Autographs</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Photo Opportunities</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Game Hosting (2-3 Game Max)</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Happy Birthday Song</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Piñata Assistance</li>
                <li><FaCheckCircle className="inline text-primary mr-2" /> Music System Provided</li>
              </ul>
            </div>
            {/* Book Now Button */}
            <button
              onClick={() => handleBookNow('Pixie Perfect Party')}
              className="mt-6 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
              style={{ fontFamily: 'Montserrat' }}
            >
              Book Now
            </button>
          </div>
        </div>

        <p className="text-gray-600 text-lg mt-10">
          Mileage fees apply based on party location, ensuring we can bring the magic to you no matter where your celebration is held!
        </p>
      </div>
    </section>
  );
};

export default PricingPage;
