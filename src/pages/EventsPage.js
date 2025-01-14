import React from 'react';
import EventCard from '../components/EventCard';

const EventsPage = () => {
  const events = [
    {
      title: 'Fruits of the Spirit: Paint & Play - Metro Life Church',
      date: 'September 15, 2024',
      logo: 'https://pbs.twimg.com/profile_images/918501079150727170/-9w96dA4_400x400.jpg',
      description: 'Join us for a fun-filled paint and play event at Metro Life Church.',
    },
    {
      title: 'Fruits of the Spirit: Paint & Play - Metro Life Church',
      date: 'September 17, 2024',
      logo: 'https://pbs.twimg.com/profile_images/918501079150727170/-9w96dA4_400x400.jpg',
      description: 'Join us for a fun-filled paint and play event at Metro Life Church.',
    },
    {
      title: 'Fall Kids Fest with Tinkerbell - Bowlero',
      date: 'September 21, 2024',
      logo: 'https://thecollectionrp.com/wp-content/uploads/2022/06/The-Collection-Riverpark-Logo-Bowlero.png',
      description: 'Enjoy a festive day with Tinkerbell at Bowlero.',
    },
    {
      title: 'Hanging with Heroes - Miami Mom Collective',
      date: 'October 19, 2024',
      logo: 'https://miami.momcollective.com/wp-content/uploads/2020/07/Miami_Circle_Primary.png',
      description: 'Meet your favorite heroes at Miami Mom Collective.',
    },
    {
      title: 'Tinkerbell and the Witches of Westward - GFWC Miami Springs Woman\'s Club',
      date: 'October 19, 2024',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0ynkUXzFlwdjHrp-F_Nuakzra8yg1z5qnA&s',
      description: 'Join Tinkerbell and the Witches of Westward for a spooky event.',
    },
    {
      title: 'Tinkerbell at Kiddo-Ween - Kiddos Magazine',
      date: 'October 26, 2024',
      logo: 'https://kiddosmagazine.com/wp-content/uploads/logo.jpg',
      description: 'Celebrate Kiddo-Ween with Tinkerbell at Kiddos Magazine.',
    },
    {
      title: 'Gentle Trick or Treat with Snow White - PLAY for ALL Coral Gables',
      date: 'October 26, 2024',
      logo: 'https://www.gablesflag.com/portals/80743/contentrotator/contentrotator638200272967422962.png',
      description: 'Enjoy a gentle trick or treat with Snow White at PLAY for ALL Coral Gables.',
    },
    {
      title: 'Snow White at Winter Kiddos-Land - Kiddos Magazine',
      date: 'December 7, 2024',
      logo: 'https://kiddosmagazine.com/wp-content/uploads/logo.jpg',
      description: 'Join Snow White at Winter Kiddos-Land for a magical event.',
    },
    {
      title: 'Elves at Thursdays with Santa - Miami Mom Collective',
      date: 'December 5, 2024',
      logo: 'https://miami.momcollective.com/wp-content/uploads/2020/07/Miami_Circle_Primary.png',
      description: 'Meet the elves at Thursdays with Santa at Miami Mom Collective.',
    },
    {
      title: 'Elves at Thursdays with Santa - Miami Mom Collective',
      date: 'December 12, 2024',
      logo: 'https://miami.momcollective.com/wp-content/uploads/2020/07/Miami_Circle_Primary.png',
      description: 'Meet the elves at Thursdays with Santa at Miami Mom Collective.',
    },
    {
      title: 'Elves at Thursdays with Santa - Miami Mom Collective',
      date: 'December 19, 2024',
      logo: 'https://miami.momcollective.com/wp-content/uploads/2020/07/Miami_Circle_Primary.png',
      description: 'Meet the elves at Thursdays with Santa at Miami Mom Collective.',
    },
    {
      title: 'Health and Wellness Fair - The Community of Miami Springs',
      date: 'January 18, 2025',
      time: '10:00 AM - 2:00 PM',
      logo: 'https://www.miamisprings-fl.gov/sites/g/files/vyhlif12631/files/styles/full_node_primary/public/media/cityclerk/image/46066/1.jpg?itok=C0J0iy3p',
      description: 'Join us for a Health and Wellness Fair at The Community of Miami Springs.',
    },
  ];

  const currentDate = new Date();

  const upcomingEvents = events.filter(event => new Date(event.date) >= currentDate);
  const previousEvents = events.filter(event => new Date(event.date) < currentDate);

  return (
    <section className="py-16 px-12 bg-white">
      <h1 className="text-5xl font-bold text-dark mb-10 text-center" style={{ fontFamily: 'Montserrat' }}>Events</h1>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-6 md:text-left text-center" style={{ fontFamily: 'Montserrat' }}>Upcoming Events</h2>
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={`${event.date}${event.time ? `, ${event.time}` : ''}`}
              logo={event.logo}
              description={event.description}
            />
          ))
        ) : (
          <p className="text-dark text-lg">No upcoming events.</p>
        )}
        <h2 className="text-4xl font-bold text-primary mt-12 mb-6 text-left" style={{ fontFamily: 'Montserrat' }}>Previous Events</h2>
        {previousEvents.length > 0 ? (
          previousEvents.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              logo={event.logo}
              description={event.description}
            />
          ))
        ) : (
          <p className="text-dark text-lg">No previous events.</p>
        )}
      </div>
    </section>
  );
};

export default EventsPage;