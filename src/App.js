import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CharactersPage from './pages/CharactersPage';
import PricingPage from './pages/PricingPage';
import BookNowPage from './pages/BookNowPage';
import ContactPage from './pages/ContactPage';
import FacePaintingPage from './pages/FacePaintingPage';
import VirtualServicesPage from './pages/VirtualServicesPage';
import GalleryPage from './pages/GalleryPage';
import EventsPage from './pages/EventsPage';
import ReviewsPage from './pages/ReviewsPage';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import Footer from './components/Footer'; // Import the Footer component

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/book" element={<BookNowPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/face-painting" element={<FacePaintingPage />} />
          <Route path="/virtual-services" element={<VirtualServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
        </Routes>
        <Footer /> {/* Add the Footer component here */}
      </div>
    </Router>
  );
};

export default App;
