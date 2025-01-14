import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // To get the state passed from CharactersPage and PricingPage

const BookNowPage = () => {
  const location = useLocation(); // Hook to access location and state
  const selectedCharacter = location.state?.selectedCharacter || ''; // Extract the character from state

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    character: selectedCharacter,
    eventDate: '',
    eventLocation: '',
    package: '',
    indoors: false,
    outdoors: false,
    eventType: '',
    guestCount: '',
    contactMethod: '',
    promoCode: '',
    referral: '',
  });

  // Define available packages
  const availablePackages = [
    { label: 'Pixie Hallow Party - $145', value: 'Pixie Hallow Party' },
    { label: 'Pixie Perfect Party - $185', value: 'Pixie Perfect Party' }
  ];

  // Format phone number as the user types (XXX-XXX-XXXX)
  const handlePhoneChange = (e) => {
    const { value } = e.target;
    // Remove all non-numeric characters
    let cleaned = value.replace(/\D/g, '');

    // Format number as XXX-XXX-XXXX
    if (cleaned.length > 6) {
      cleaned = cleaned.replace(/(\d{3})(\d{3})(\d{0,4})/, '$1-$2-$3');
    } else if (cleaned.length > 3) {
      cleaned = cleaned.replace(/(\d{3})(\d{0,3})/, '$1-$2');
    }

    // Limit the number to 10 digits
    if (cleaned.length > 12) {
      cleaned = cleaned.slice(0, 12);
    }

    setFormData({
      ...formData,
      phone: cleaned,
    });
  };

  // Handle other form changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle Indoor/Outdoor Radio Buttons (only one can be selected)
  const handleIndoorOutdoor = (e) => {
    const { name } = e.target;
    setFormData({
      ...formData,
      indoors: name === 'indoors',
      outdoors: name === 'outdoors',
    });
  };

  // Ensure event date is after the current day
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 px-6 bg-light">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-dark mb-6 text-center" style={{ fontFamily: 'Montserrat' }}>Book Your Event</h1>
        <p className="text-gray-600 text-lg mb-8 text-center" style={{ fontFamily: 'Montserrat' }}>
          Fill out the form below to inquire about the availability of your event date and package!
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700" style={{ fontFamily: 'Montserrat' }}>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-primary focus:border-primary"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-gray-700" style={{ fontFamily: 'Montserrat' }}>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700" style={{ fontFamily: 'Montserrat' }}>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700" style={{ fontFamily: 'Montserrat' }}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                maxLength="12" // Max length for (XXX-XXX-XXXX) format
                className="w-full p-3 border rounded-lg focus:ring-primary focus:border-primary"
                placeholder="123-456-7890"
              />
            </div>
          </div>

          {/* Package Dropdown */}
          <div>
            <label className="block text-gray-700" style={{ fontFamily: 'Montserrat' }}>Select a Package</label>
            <select
              name="package"
              value={formData.package}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-primary focus:border-primary"
            >
              <option value="">Select a package</option>
              {availablePackages.map((pkg, index) => (
                <option key={index} value={pkg.value}>
                  {pkg.label}
                </option>
              ))}
            </select>
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-gray-700" style={{ fontFamily: 'Montserrat' }}>What day would you like to reserve your performer for?</label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              min={today} // Ensures that the date is not in the past
              className="w-full p-3 border rounded-lg focus:ring-primary focus:border-primary"
              required
            />
          </div>

          {/* Indoors or Outdoors (Radio Buttons) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700" style={{ fontFamily: 'Montserrat' }}>Is your event indoors or outdoors?</label>
              <div className="mt-2 space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="indoors"
                    checked={formData.indoors}
                    onChange={handleIndoorOutdoor}
                    className="form-radio"
                  />
                  <span className="ml-2">Indoors</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="outdoors"
                    checked={formData.outdoors}
                    onChange={handleIndoorOutdoor}
                    className="form-radio"
                  />
                  <span className="ml-2">Outdoors</span>
                </label>
              </div>
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-gray-700" style={{ fontFamily: 'Montserrat' }}>Type of Event</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-primary focus:border-primary"
              >
                <option value="">Select an option</option>
                <option value="birthday">Birthday Party</option>
                <option value="corporate">Corporate Event</option>
                <option value="non-profit">Non-Profit Event</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Guest Count */}
          <div>
            <label className="block text-gray-700" style={{ fontFamily: 'Montserrat' }}>How many kids (ages 2 and up) will be invited?</label>
            <input
              type="number"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Number of Guests"
            />
          </div>

          {/* Referral */}
          <div>
            <label className="block text-gray-700" style={{ fontFamily: 'Montserrat' }}>How did you hear about us?</label>
            <input
              type="text"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-primary focus:border-primary"
              placeholder="e.g., Google, Social Media, Friend"
            />
          </div>

          {/* Promo Code */}
          <div>
            <label className="block text-gray-700" style={{ fontFamily: 'Montserrat' }}>Promo Code (if applicable)</label>
            <input
              type="text"
              name="promoCode"
              value={formData.promoCode}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Promo Code"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition"
            style={{ fontFamily: 'Montserrat' }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookNowPage;
