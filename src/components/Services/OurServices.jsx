import React from 'react';

const OurServices = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold">
            Our <span className="text-red-500">Services</span>
          </h2>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {/* Service 1 - Website & Web Application Development */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/website-development.png" 
                  alt="Website Development" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-gray-400">1.</span> Website & Web Application Development
              </h3>
              <p className="text-gray-700 mb-4">
                Deliver a strong web presence through our website hosting and digital solutions to 
                expand your reach and engage effectively with your audience. Our services include 
                designing, creating, and launching websites and applications. We approach our website 
                projects strategically, focusing on your business goals and marketing objectives.
              </p>
              <p className="text-gray-700">
                We incorporate responsive design, streamlined navigation, SEO optimization, and 
                aesthetic appeal to create powerful web solutions. Whether your needs are simple or 
                complex, our team can build web applications that are fast and reliable.
              </p>
            </div>
          </div>

          {/* Service 2 - Mobile App Development */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/mobile-development.png" 
                  alt="Mobile App Development" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-gray-400">2.</span> Mobile App Development
              </h3>
              <p className="text-gray-700 mb-4">
                Mobile app development is the process of building specialized programs to 
                run on mobile devices like smartphones and tablets. Our team specializes in 
                creating apps that deliver exceptional user experiences while meeting your business 
                objectives and technical requirements.
              </p>
              <p className="text-gray-700">
                We develop native apps for both Android and iOS platforms, as well as 
                cross-platform solutions that work seamlessly across different devices. Our 
                development process includes thorough planning, design, development, testing, and 
                deployment phases to ensure your app is successful in the competitive mobile market.
              </p>
            </div>
          </div>

          {/* Service 3 - Hosting Solutions */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/hosting-solutions.png" 
                  alt="Hosting Solutions" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-gray-400">3.</span> Hosting Solutions
              </h3>
              <p className="text-gray-700 mb-4">
                Hosting is a core service that ensures your website or web application remains 
                accessible, secure, and performs optimally. We offer various hosting options 
                including shared hosting, VPS hosting, and dedicated servers tailored to your 
                specific needs and budget constraints.
              </p>
              <p className="text-gray-700">
                Our hosting solutions include regular backups, security monitoring, SSL 
                certificates, and 24/7 technical support. We maintain a 99.9% uptime guarantee 
                for all our hosting services, ensuring your online presence remains consistent 
                and reliable at all times.
              </p>
            </div>
          </div>

          {/* Service 4 - SEO & Digital Growth */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/seo-growth.png" 
                  alt="SEO and Digital Growth" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-gray-400">4.</span> SEO & Digital Growth
              </h3>
              <p className="text-gray-700 mb-4">
                Search Engine Optimization (SEO) is essential for improving your website's visibility 
                in search results and driving organic traffic. Our comprehensive SEO strategy includes 
                keyword research, on-page optimization, technical SEO improvements, and quality 
                content creation.
              </p>
              <p className="text-gray-700">
                We focus on building a strong online presence that not only ranks well in search 
                engines but also delivers an exceptional user experience. Our SEO experts continuously 
                monitor performance metrics and make data-driven adjustments to ensure sustainable 
                growth. Through strategic digital marketing, content strategy, and local SEO tactics, 
                we help you reach your target audience effectively and achieve measurable business results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;