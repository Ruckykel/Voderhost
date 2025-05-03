import React from 'react';

const HomeHero = () => {
  return (
    <section className="w-full bg-white py-20 md:py-24 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              We Host. We Build. You
            </h1>
            <div className="mt-4">
              <span className="text-5xl md:text-6xl font-bold bg-red-200 px-4 py-1 rounded-md">Launch.</span>
            </div>
            
            <p className="text-lg text-gray-600 mt-8 mb-10 leading-relaxed max-w-lg">
              We build digital solutions that don't just exist — they perform. From 
              pixel-perfect websites to rock-solid hosting, we help your product show 
              up and shine.
            </p>
            
            <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium rounded-full px-10 py-3 transition duration-300">
              Start Project
            </button>
          </div>
          
          {/* Right side - Video */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <video 
              className="w-full max-w-xl"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/cube-animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;