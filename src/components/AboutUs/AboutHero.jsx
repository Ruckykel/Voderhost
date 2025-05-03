import React from 'react';

const AboutHero = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden mt-16">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Who <span className="text-red-500">we are...</span>
            </h1>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Hello, we're Volderhost
            </h2>
            
            <div className="text-gray-700 space-y-4">
              <p>
                At VoderHost, we help businesses grow online through custom websites, 
                mobile apps, hosting, and SEO. As part of MO Group, we create scalable, 
                user-friendly solutions tailored to your goals. With a client-first mindset
                and years of experience, we build tech that drives innovation, 
                engagement, and results — whether you're a startup or an established 
                brand.
              </p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full md:w-2/5">
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-md mx-auto">
              <img 
                src="/team-image.png" 
                alt="Voderhost team collaborating" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;