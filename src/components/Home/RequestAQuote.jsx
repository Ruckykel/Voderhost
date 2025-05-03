import React from 'react';

const RequestAQuote = () => {
  return (
    <section className="w-full bg-[#472a2a] py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10">
        <div className="w-16 h-16 rounded-full border border-dashed border-white/30"></div>
      </div>
      
      <div className="absolute bottom-28 right-20">
        <div className="w-24 h-24 rounded-full border border-dashed border-white/30"></div>
      </div>
      
      {/* Wavy dotted line at the bottom */}
      <div className="absolute bottom-8 left-0 right-0 w-full">
        <svg 
          className="w-full h-24" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60" 
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
            strokeDasharray="8,8"
          />
        </svg>
      </div>
      
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Got a project in mind? Let's build something great together.
        </h2>
        
        <p className="text-white/80 text-lg mb-8">
          Share your ideas, and we'll bring them to life with world-class development & hosting solutions.
        </p>
        
        <div>
          <a 
            href="/contact" 
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium rounded-full px-8 py-3 transition duration-300"
          >
            Request A Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default RequestAQuote;