import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to navigate to Book Now
import auroraImg from '../assets/images/characters/Aurora.jpg';
import arielImg from '../assets/images/characters/Ariel.jpg';
import barbieImg from '../assets/images/characters/Barbie.jpg';
import miraculousImg from '../assets/images/characters/Miraculous.jpeg';
import spider_gwenImg from '../assets/images/characters/SpiderGwen.jpeg';
import tinkerBellImg from '../assets/images/characters/TinkerBell.jpg';

const CharactersPage = () => {
  const navigate = useNavigate();

  const characters = [
    { name: 'Rapunzel', img: 'https://via.placeholder.com/300' },
    { name: 'Ariel', img: arielImg },
    { name: 'Barbie', img: barbieImg },
    { name: 'Tinker Bell', img: tinkerBellImg },
    { name: 'Aurora', img: auroraImg },
    { name: 'Mavis', img: 'https://via.placeholder.com/300' },
    { name: 'Elsa', img: 'https://via.placeholder.com/300' },
    { name: 'Spider Gwen', img: spider_gwenImg },
    { name: 'Ladybug', img: miraculousImg },
  ];

  const handleBookNow = (characterName) => {
    // Navigate to BookNow page and pass character name via state
    navigate('/book', { state: { selectedCharacter: characterName } });
  };

  return (
    <section className="py-16 px-6 bg-light">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-dark mb-10" style={{ fontFamily: 'Montserrat' }}>Meet Our Characters</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((character, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={character.img}
                alt={character.name}
                className="w-full h-64 object-cover rounded-t-lg mb-4"
                style={{ objectPosition: 'top center' }}
              />
              <h3 className="text-2xl font-bold text-dark" style={{ fontFamily: 'Montserrat' }}>{character.name}</h3>
              <p className="text-secondary text-sm mt-2">A fan-favorite princess!</p>
              
              {/* Book Now Button */}
              <button
                onClick={() => handleBookNow(character.name)}
                className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
                style={{ fontFamily: 'Montserrat' }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersPage;
