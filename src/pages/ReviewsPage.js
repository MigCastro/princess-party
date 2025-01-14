import React, { useState } from 'react';
import ReviewCard from '../components/ReviewCard';

const ReviewsPage = () => {
  const [reviews] = useState([
    { name: 'John Doe', review: 'The princesses were so realistic and made my daughter’s birthday unforgettable!', image: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2024/11/image-11.jpeg?resize=750%2C500&ssl=1' },
    { name: 'Jane Smith', review: 'I highly recommend Pixie Dust Princesses! The face painting was amazing!', image: 'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww' },
    { name: 'Anna Williams', review: 'We had a virtual event, and it was magical! The kids loved every minute of it!', image: 'https://kristinepaulsenphotography.com/images/Headshots-Love-Notes_003-1.jpg' }
  ]);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-10" style={{ fontFamily: 'Montserrat' }}>Customer Reviews</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              review={review.review}
              image={review.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;