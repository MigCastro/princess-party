import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ children, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/book');
  };

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-3 font-bold text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out ${className}`}
      style={{
        background: 'linear-gradient(90deg, #fea8ac, #f9bc8a)',
        boxShadow: '0 4px 15px rgba(255, 105, 135, 0.5), 0 0 30px rgba(255, 105, 135, 0.2)',
        color: 'white',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
