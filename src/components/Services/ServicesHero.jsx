import React from 'react';

const ServicesHero = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0">
        <img src="/VoderhostLogoIso.webp" alt="" className="w-64 h-64 opacity-10" />
      </div>
      
      {/* Dotted decoration lines - these would ideally be SVGs in a real implementation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[url('/dotted-line.svg')] bg-no-repeat opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Main heading and intro text */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            We build digital experiences that work
          </h1>
          <p className="text-lg text-gray-600">
            From websites and mobile apps to SEO and cloud hosting, we help businesses and personal brands launch, grow, and succeed online—with smart technology and reliable support.
          </p>
        </div>

        {/* Statistics row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {/* Stat 1 */}
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="text-5xl font-bold text-gray-800">99</span>
              <span className="text-5xl font-bold text-red-500">%</span>
            </div>
            <p className="text-gray-600 mt-2">User satisfaction rate</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="text-5xl font-bold text-gray-800">100</span>
              <span className="text-5xl font-bold text-red-500">%</span>
            </div>
            <p className="text-gray-600 mt-2">Scalability</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="text-5xl font-bold text-gray-800">50</span>
              <span className="text-5xl font-bold text-red-500">%</span>
            </div>
            <p className="text-gray-600 mt-2">Traffic boost</p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="text-5xl font-bold text-gray-800">99.9</span>
              <span className="text-5xl font-bold text-red-500">%</span>
            </div>
            <p className="text-gray-600 mt-2">Uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;