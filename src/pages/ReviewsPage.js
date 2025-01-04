import React, { useState } from 'react';

const ReviewsPage = () => {
  const [reviews] = useState([
    { name: 'John Doe', review: 'The princesses were so realistic and made my daughter’s birthday unforgettable!' },
    { name: 'Jane Smith', review: 'I highly recommend Pixie Dust Princesses! The face painting was amazing!' },
    { name: 'Anna Williams', review: 'We had a virtual event, and it was magical! The kids loved every minute of it!' }
  ]);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-red-300 mb-10">Customer Reviews</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-gray-800">{review.name}</h3>
              <p className="mt-4 text-gray-600">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;
