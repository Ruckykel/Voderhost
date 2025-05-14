import React from 'react';
import { motion } from 'framer-motion';

const ContactGetInTouch = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 relative overflow-hidden mt-16">
      {/* Decorative dotted curved line */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <svg width="100%" height="100" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <motion.path 
            d="M0,50 C240,0 480,100 720,50 C960,0 1200,50 1440,80" 
            stroke="#f87171" 
            strokeWidth="1.5" 
            strokeDasharray="5 5" 
            fill="none"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info - Will display first on mobile */}
          <motion.div 
            className="w-full md:w-1/2 relative order-first md:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Background image with overlay */}
            <motion.div 
              className="absolute inset-0 rounded-3xl overflow-hidden"
              initial={{ borderRadius: "0%" }}
              animate={{ borderRadius: "1.5rem" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute inset-0 "></div>
              <img 
                src="/contact-background.png" 
                alt="Person using laptop and phone" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-center p-16 md:p-10 text-white">
              <motion.h2 
                className="text-3xl md:text-4xl font-semibold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Get in touch
              </motion.h2>
              
              <motion.p 
                className="mb-8 text-sm"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                We typically respond within 24 hrs
              </motion.p>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:voderhost@gmail.com" className="text-sm hover:underline transition-all">voderhost@gmail.com</a>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:+2347068705597" className="text-sm hover:underline transition-all">+2347068705597</a>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className='text-sm'>Ulmenweg 16, 72076, Tubingen, Germany</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form - Will display second on mobile */}
          <motion.div 
            className="w-full md:w-1/2 order-last md:order-first mt-8 md:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div 
              className="bg-white rounded-3xl shadow-md p-8 md:p-10"
              initial={{ y: 20, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
              animate={{ y: 0, boxShadow: "0 10px 15px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <form>
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Carter" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="(123) 456 - 789" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="example@email.com" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    placeholder="Please type your message here..." 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button 
                    type="submit" 
                    className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-full px-8 py-3 transition duration-300"
                  >
                    Send message
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactGetInTouch;