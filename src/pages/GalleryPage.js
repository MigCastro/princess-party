import React from 'react';

// Using image URLs directly in the JSX
const galleryImages = [
  'https://via.placeholder.com/300', 
  'https://via.placeholder.com/300', 
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
]; // Replace with actual image paths later

const GalleryPage = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-pink-600 mb-10">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
