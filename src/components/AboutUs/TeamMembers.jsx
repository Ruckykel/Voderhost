import React from 'react';

const TeamMembers = () => {
  // Team members data array
  const teamMembers = [
    {
      id: 1,
      name: 'John Carter',
      title: 'CEO & Co-Founder',
      image: '/team-john.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Sophie Moore',
      title: 'CTO & Co-Founder',
      image: '/team-john.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Matt Cannon',
      title: 'Head Designer',
      image: '/team-john.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'Andy Smith',
      title: 'Head of Front End',
      image: '/team-john.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 5,
      name: 'Lily Woods',
      title: 'Project Manager',
      image: '/team-john.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 6,
      name: 'Patrick Joyce',
      title: 'VP of Sales',
      image: '/team-john.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];

  // Social media icon components
  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );

  const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );

  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 opacity-10">
        <img src="/VoderhostLogoIso.webp" alt="" className="w-48 h-48" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet our team members
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit vulputat gravida
            malesuada quam commodo id integer nam.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              {/* Member Image */}
              <div className="rounded-lg overflow-hidden shadow-md mb-4 w-full max-w-xs">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              
              {/* Member Info */}
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600 mb-3">{member.title}</p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                <a href={member.social.facebook} className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors">
                  <FacebookIcon />
                </a>
                <a href={member.social.twitter} className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors">
                  <TwitterIcon />
                </a>
                <a href={member.social.instagram} className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors">
                  <InstagramIcon />
                </a>
                <a href={member.social.linkedin} className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;