import React from 'react';

const PortfolioHero = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden mt-16">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="120" stroke="#dddddd" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Projects We've Built
          </h2>
          
          <p className="text-gray-600 mb-8">
            Explore the work we've done for businesses, startups, and brands. From custom websites 
            to mobile apps and digital growth strategies, each project is a testament to our expertise
            and commitment to delivering high-quality, tailored solutions. Browse our portfolio to see
            how we bring ideas to life and help brands succeed in the digital world.
          </p>
          
          {/* CTA Button */}
          <div className="mt-4">
            <button className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-full px-6 py-3 transition duration-300">
              <span>Get started</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Wave line decoration at the bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg width="100%" height="60" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path 
            d="M0,20 C240,60 480,0 720,30 C960,60 1200,30 1440,10 L1440,60 L0,60 Z" 
            stroke="#dddddd" 
            strokeWidth="1.5" 
            strokeDasharray="5 5" 
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
};

export default PortfolioHero;