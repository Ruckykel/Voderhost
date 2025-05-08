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

  // ENHANCED: Section-level animations
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.8
      }
    }
  };

  // ENHANCED: Background animation with gradient
  const backgroundVariants = {
    hidden: { 
      opacity: 0,
      scale: 1.1
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  // ENHANCED: Card container animation
  const cardContainerVariants = {
    hidden: { 
      opacity: 0,
      y: 80,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
        duration: 0.7
      }
    }
  };

  // ENHANCED: Form elements staggered animation
  const formItemVariants = {
    hidden: { 
      opacity: 0,
      x: -30
    },
    visible: (index) => ({ 
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.5,
        delay: 0.2 + (index * 0.1),
        ease: [0.25, 1, 0.5, 1]
      }
    })
  };

  // ENHANCED: Title animation with reveal effect
  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  // ENHANCED: Floating elements animation
  const floatingAnimation = {
    y: [0, -15, 0],
    rotate: [0, -2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <motion.section 
      className="w-full bg-white py-16 md:py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      {/* ENHANCED: Background with gradient animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"
        variants={backgroundVariants}
      >
        {/* ENHANCED: Background decorative elements */}
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-red-50 opacity-40 blur-2xl"
          animate={floatingAnimation}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-blue-50 opacity-30 blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
            transition: {
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        ></motion.div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Contact Form Card */}
          <motion.div 
            className="w-full md:w-3/5"
            variants={cardContainerVariants}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 relative"
              whileHover={{ 
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              {/* ENHANCED: Small decorative element in the corner */}
              <motion.div 
                className="absolute top-0 right-0 w-20 h-20 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="absolute top-0 right-0 w-6 h-6 bg-red-500 opacity-10 rounded-bl-xl"></div>
                <div className="absolute top-0 right-0 w-12 h-12 bg-red-500 opacity-5 rounded-bl-2xl"></div>
              </motion.div>

              <motion.h2 
                className="text-xl font-semibold text-gray-800 mb-6"
                variants={titleVariants}
              >
                Talk to us—whether you need a quote, project advice, or just a fresh perspective!
              </motion.h2>
              
              <form>
                {/* Name */}
                <motion.div 
                  className="mb-5"
                  custom={0}
                  variants={formItemVariants}
                >
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your Name*" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition-shadow duration-300"
                    required
                  />
                </motion.div>
                
                {/* Phone and Email (2 columns) */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 mb-5"
                  custom={1}
                  variants={formItemVariants}
                >
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="Your phone number" 
                      className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition-shadow duration-300"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Company email" 
                      className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition-shadow duration-300"
                      required
                    />
                  </div>
                </motion.div>
                
                {/* Company Name or Website */}
                <motion.div 
                  className="mb-5"
                  custom={2}
                  variants={formItemVariants}
                >
                  <label htmlFor="company" className="block text-gray-700 text-sm font-medium mb-2">Company Name or Website</label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="Company name or website" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition-shadow duration-300"
                  />
                </motion.div>
                
                {/* Project Description */}
                <motion.div 
                  className="mb-5"
                  custom={3}
                  variants={formItemVariants}
                >
                  <label htmlFor="project" className="block text-gray-700 text-sm font-medium mb-2">Tell us about your project</label>
                  <textarea 
                    id="project" 
                    rows="4" 
                    placeholder="Briefly describe your project" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition-shadow duration-300"
                  ></textarea>
                </motion.div>
                
                {/* Budget Dropdown */}
                <motion.div 
                  className="mb-6"
                  custom={4}
                  variants={formItemVariants}
                >
                  <label htmlFor="budget" className="block text-gray-700 text-sm font-medium mb-2">What's your budget?</label>
                  <div className="relative">
                    <select 
                      id="budget" 
                      className="appearance-none w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition-shadow duration-300 pr-10"
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
                
                {/* Schedule Call Section - Enhanced with staggered animation */}
                <motion.div 
                  className="mb-8"
                  custom={5}
                  variants={formItemVariants}
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            duration: 0.4, 
                            delay: 0.7 + (index * 0.05)
                          }
                        }}
                      >
                        <span className="font-medium">{scheduleDay.day}</span>
                        <span className="text-[9px]">{scheduleDay.date}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
                
                {/* Submit Button - ENHANCED with pressed effect */}
                <motion.div
                  custom={6}
                  variants={formItemVariants}
                >
                  <motion.button 
                    type="submit" 
                    className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-full px-8 py-3 transition duration-300 relative overflow-hidden group"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(239, 68, 68, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* ENHANCED: Button background animation */}
                    <motion.span 
                      className="absolute inset-0 w-full h-full bg-red-600 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ 
                        scale: 1.5, 
                        opacity: 0.3,
                        transition: { duration: 0.4 }
                      }}
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      Submit
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Modified to create a more engaging content layout */}
          <motion.div 
            className="w-full md:w-2/5"
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }
              }
            }}
          >
            <div className="text-center md:text-left max-w-md mx-auto md:mx-0 mt-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.3
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.4
                    }
                  }}
                >
                  Reach Out—We'll Handle the Rest.
                </motion.h2>
                
                <motion.p 
                  className="text-gray-500 text-sm mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.6
                    }
                  }}
                >
                  Have a project in mind? Need a quote or expert advice? Fill out the form, and we'll get back to you within 24 hours.
                </motion.p>

                {/* ENHANCED: Added trust badges */}
                <motion.div 
                  className="flex flex-col space-y-4 mt-8 md:mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    transition: {
                      duration: 0.6,
                      delay: 0.8,
                      staggerChildren: 0.1
                    }
                  }}
                >
                  {/* Trust badge items with professional SVG icons */}
                  {[
                    { 
                      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>, 
                      text: "Your information is secure and confidential" 
                    },
                    { 
                      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>, 
                      text: "Quick response within 24 hours" 
                    },
                    { 
                      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>, 
                      text: "No obligation consultation" 
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: {
                          duration: 0.4,
                          delay: 0.8 + (index * 0.1)
                        }
                      }}
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-500">
                        {item.icon}
                      </div>
                      <span className="text-sm text-gray-600">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ReachOut;