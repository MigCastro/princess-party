import React from 'react';

// Dynamically import all images from the gallery folder
const importAll = (r) => r.keys().map((key) => r(key));
const galleryImages = importAll(require.context('../assets/images/gallery', false, /\.(png|jpe?g|svg)$/));

const GalleryPage = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-red-300 mb-10">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-64">
              <img src={image} alt={`Gallery${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;