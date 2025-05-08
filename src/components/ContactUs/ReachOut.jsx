import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ReachOut = () => {
  // State for tracking selected day
  const [selectedDay, setSelectedDay] = useState(null);
  
  // Days of the week for scheduling
  const scheduleDays = [
    { day: 'Mon', date: 'March 30' },
    { day: 'Tue', date: 'April 1' },
    { day: 'Wed', date: 'April 2' },
    { day: 'Thu', date: 'April 3' },
    { day: 'Fri', date: 'April 4' },
    { day: 'Sat', date: 'April 5' }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Light gray background */}
      <motion.div 
        className="absolute inset-0 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Contact Form Card */}
          <motion.div 
            className="w-full md:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ y: 20, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
              animate={{ y: 0, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.h2 
                className="text-xl font-semibold text-gray-800 mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                Talk to us—whether you need a quote, project advice, or just a fresh perspective!
              </motion.h2>
              
              <form>
                {/* Name */}
                <motion.div 
                  className="mb-5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your Name*" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </motion.div>
                
                {/* Phone and Email (2 columns) */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 mb-5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="Your phone number" 
                      className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Company email" 
                      className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </motion.div>
                
                {/* Company Name or Website */}
                <motion.div 
                  className="mb-5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <label htmlFor="company" className="block text-gray-700 text-sm font-medium mb-2">Company Name or Website</label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="Company name or website" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </motion.div>
                
                {/* Project Description */}
                <motion.div 
                  className="mb-5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <label htmlFor="project" className="block text-gray-700 text-sm font-medium mb-2">Tell us about your project</label>
                  <textarea 
                    id="project" 
                    rows="4" 
                    placeholder="Briefly describe your project" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </motion.div>
                
                {/* Budget Dropdown */}
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <label htmlFor="budget" className="block text-gray-700 text-sm font-medium mb-2">What's your budget?</label>
                  <div className="relative">
                    <select 
                      id="budget" 
                      className="appearance-none w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                      defaultValue=""
                    >
                      <option value="" disabled>Choose your budget</option>
                      <option value="small">Less than $1,000</option>
                      <option value="medium">$1,000 - $5,000</option>
                      <option value="large">$5,000 - $10,000</option>
                      <option value="enterprise">$10,000+</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
                
                {/* Schedule Call Section - Modified for single line with smaller sizes */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                >
                  <label className="block text-gray-700 text-sm font-medium mb-3">Schedule a call with us</label>
                  <div className="flex justify-between items-center w-full py-2 gap-2">
                    {scheduleDays.map((scheduleDay, index) => (
                      <motion.button
                        key={index}
                        type="button"
                        className={`flex flex-col items-center justify-center w-14 h-14 rounded-full text-xs focus:outline-none transition-colors ${
                          selectedDay === index 
                            ? 'bg-red-500 text-white' 
                            : 'bg-red-100 text-gray-700 hover:bg-red-200'
                        }`}
                        onClick={() => setSelectedDay(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="font-medium">{scheduleDay.day}</span>
                        <span className="text-[9px]">{scheduleDay.date}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
                
                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button 
                    type="submit" 
                    className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-full px-8 py-3 transition duration-300"
                  >
                    Submit
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Modified to remove contact details and center on mobile */}
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center md:text-left max-w-md mx-auto md:mx-0 mt-10">
              <motion.h2 
                className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                Reach Out—We'll Handle the Rest.
              </motion.h2>
              
              <motion.p 
                className="text-gray-500 text-sm mb-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                Have a project in mind? Need a quote or expert advice? Fill out the form, and we'll get back to you within 24 hours.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReachOut;