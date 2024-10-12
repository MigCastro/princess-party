import React from 'react';

const character1 = 'https://via.placeholder.com/300'; // External image URL
const character2 = 'https://via.placeholder.com/300';
const character3 = 'https://via.placeholder.com/300';

const CharactersPage = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-pink-600 mb-10">Meet Our Characters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <img src={character1} alt="Character 1" className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-3xl font-semibold text-gray-800">Princess Aurora</h3>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <img src={character2} alt="Character 2" className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-3xl font-semibold text-gray-800">Cinderella</h3>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <img src={character3} alt="Character 3" className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-3xl font-semibold text-gray-800">Belle</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharactersPage;
