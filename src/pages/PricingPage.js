import React from 'react';

const PricingPage = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-pink-600 mb-10">Pricing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Basic Package</h3>
            <p className="text-gray-600 mb-4">60-minute appearance by one character</p>
            <p className="text-2xl font-bold text-pink-600">$145</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Deluxe Package</h3>
            <p className="text-gray-600 mb-4">90-minute appearance by one character with face painting</p>
            <p className="text-2xl font-bold text-pink-600">$185</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Royal Package</h3>
            <p className="text-gray-600 mb-4">120-minute appearance by two characters with face painting and storytelling</p>
            <p className="text-2xl font-bold text-pink-600">$250</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
