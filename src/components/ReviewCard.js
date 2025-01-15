import React from 'react';

const ReviewCard = ({ name, review, image }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
      <div className="text-6xl text-primary text-left" style={{ fontFamily: 'Pattaya, sans-serif' }}>“</div>
      <p className="italic text-grey-300 text-left">{review}</p>
      <div className="text-6xl text-primary text-right" style={{ fontFamily: 'Pattaya, sans-serif' }}>”</div>
      <div className="flex items-center">
        <h3 className="text-md font-semibold text-grey-800">{name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;