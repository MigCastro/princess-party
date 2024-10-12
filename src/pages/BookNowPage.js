import React, { useState } from 'react';

const BookNowPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    package: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">Book Your Event</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none"
          />
          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none"
          >
            <option value="">Select a Package</option>
            <option value="basic">Basic Package</option>
            <option value="deluxe">Deluxe Package</option>
            <option value="royal">Royal Package</option>
          </select>
          <button type="submit" className="bg-pink-600 text-white py-3 px-6 rounded-full hover:bg-pink-700 transition">
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookNowPage;
