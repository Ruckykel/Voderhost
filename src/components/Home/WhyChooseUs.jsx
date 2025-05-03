import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background icons */}
      <div className="absolute -top-4 -right-4">
        <img src="/VoderhostLogoIso.webp" alt="" className="w-20 h-20 opacity-30" />
      </div>
      
      <div className="absolute -bottom-4 -left-4">
        <img src="/VoderhostLogoIso.webp" alt="" className="w-20 h-20 opacity-30" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center mb-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why choose us?</h2>
          </div>
          <p className="text-gray-600 max-w-2xl">
            We consult, engineer, and design technology solutions to address complex business challenges with precision.
          </p>
        </div>
        
        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 mb-4">
              <img src="/Fast.png" alt="Speed icon" className="w-full h-full text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Fast, Secure & Scalable Hosting</h3>
            <p className="text-gray-600">
              Our hosting services are optimized for speed, uptime, and security—ensuring your site or app runs smoothly no matter how much you grow.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 mb-4">
              <img src="/End.png" alt="Solutions icon" className="w-full h-full text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">End-to-End Digital Solutions</h3>
            <p className="text-gray-600">
              From websites and mobile apps to hosting and SEO, we provide everything your business needs to build, grow, and scale online—all in one place.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 mb-4">
              <img src="/Custom.png" alt="Custom icon" className="w-full h-full text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Custom-Built for Your Needs</h3>
            <p className="text-gray-600">
              Our hosting services are optimized for speed, uptime, and security—ensuring your site or app runs smoothly no matter how much you grow.
            </p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 mb-4">
              <img src="/Result.png" alt="Results icon" className="w-full h-full text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Results That Drive Growth</h3>
            <p className="text-gray-600">
              With a focus on SEO and user experience, we help you increase visibility, attract more users, and drive measurable business results over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;