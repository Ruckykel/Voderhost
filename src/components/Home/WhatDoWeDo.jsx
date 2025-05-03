import React from 'react';

const WhatDoWeDo = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background icons */}
      <div className="absolute -top-4 -right-4">
        <img src="/VoderhostLogoIso.webp" alt="" className="w-20 h-20 opacity-30" />
      </div>
      
      <div className="absolute -bottom-4 -left-4">
        <img src="/VoderhostLogoIso.webp" alt="" className="w-20 h-20 opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading and intro */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What do we do?</h2>
          <p className="text-gray-600 max-w-3xl">
            Voderhost is a software development company under MO Group, specializing in website 
            development, web applications, mobile app development, and SEO optimization for businesses and 
            individuals. It provides custom software solutions, helping brands establish a strong digital 
            presence with modern, scalable, and user-friendly technology.
          </p>
        </div>

        {/* Services Grid with equal height columns */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Web Dev & Mobile with matching height */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="flex-1 space-y-6">
              {/* Web Development */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-auto">
                <div className="flex items-start mb-4">
                  <img src="/webdev.png" alt="" className="w-12 h-12 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-800">Web Development</h3>
                </div>
                <p className="text-gray-600">
                  We build clean, responsive websites and web applications that load fast and work smoothly across all devices. Whether it's a basic landing page, blog, or full web platform, our focus is on performance, usability and visual clarity that helps you stand out online.
                </p>
              </div>

              {/* Mobile App Development */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-auto">
                <div className="flex items-start mb-4">
                  <img src="/mobiledev.png" alt="" className="w-12 h-12 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-800">Mobile App Development</h3>
                </div>
                <p className="text-gray-600">
                  Our team develops high-performing mobile apps for both Android and iOS. From basic prototypes to full-scale applications, we utilize dev tools and frameworks to create apps that are easy to use, look great, and function reliably across devices.
                </p>
              </div>
            </div>

            {/* CTA Button positioned at the left */}
            <div className="mt-8 text-left">
              <button className="border border-red-500 text-red-500 hover:bg-red-50 font-medium rounded-full px-8 py-3 transition duration-300">
                Find Out More
              </button>
            </div>
          </div>

          {/* Right Column - SEO, Hosting & Domain */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* SEO and Digital Growth */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <img src="/seo.png" alt="" className="w-12 h-12 mr-4" />
                <h3 className="text-xl font-semibold text-gray-800">SEO and Digital Growth</h3>
              </div>
              <p className="text-gray-600">
                We improve your site's visibility with SEO strategies, keyword targeting, and technical fixes that drive traffic and boost your online presence.
              </p>
            </div>

            {/* Hosting Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <img src="/cloud.png" alt="" className="w-12 h-12 mr-4" />
                <h3 className="text-xl font-semibold text-gray-800">Hosting Solutions</h3>
              </div>
              <p className="text-gray-600">
                From shared to cloud hosting, we provide fast, secure options with backups, SSL, and support to keep your site running smoothly.
              </p>
            </div>

            {/* Domain and Security */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <img src="/security.png" alt="" className="w-12 h-12 mr-4" />
                <h3 className="text-xl font-semibold text-gray-800">Domain and Security</h3>
              </div>
              <p className="text-gray-600">
                Easily register domains, manage DNS, and protect your site with SSL certificates and essential security tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatDoWeDo;