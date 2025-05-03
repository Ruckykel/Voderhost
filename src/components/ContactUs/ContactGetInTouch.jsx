import React from 'react';

const ContactGetInTouch = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative dotted curved line */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg width="100%" height="100" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path 
            d="M0,50 C240,0 480,100 720,50 C960,0 1200,50 1440,80" 
            stroke="#f87171" 
            strokeWidth="1.5" 
            strokeDasharray="5 5" 
            fill="none"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-3xl shadow-md p-8 md:p-10">
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Carter" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="(123) 456 - 789" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="example@email.com" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    placeholder="Please type your message here..." 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-full px-8 py-3 transition duration-300"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="w-full md:w-1/2 relative">
            {/* Background image with overlay */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 "></div>
              <img 
                src="/contact-background.png" 
                alt="Person using laptop and phone" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-center p-8 md:p-10 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
              
              <p className="mb-8">We typically respond within 24 hrs</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>contact@company.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>(123) 456 - 789</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>7, Bode Thomas  Surulere, Lagos State</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactGetInTouch;