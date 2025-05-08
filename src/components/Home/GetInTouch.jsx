import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GetInTouch = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    // You could add a success message or toast notification here
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.3
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const iconFloat = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <section className="w-full py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background icons with animation */}
      <motion.div 
        className="absolute top-4 right-4"
        animate="animate"
        variants={iconFloat}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-10 h-10 opacity-30" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-4 left-4"
        animate="animate"
        variants={{
          animate: {
            y: [0, 10, 0],
            rotate: [0, -5, 0],
            transition: {
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }
        }}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-10 h-10 opacity-30" />
      </motion.div>
      
      {/* Wavy dotted line at the bottom with animation */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg 
          className="w-full h-24" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <motion.path 
            d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60" 
            fill="none"
            stroke="rgba(255, 100, 100, 0.2)"
            strokeWidth="2"
            strokeDasharray="8,8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-12">
          {/* Left side content - centered on mobile */}
          <motion.div 
            className="w-full md:w-2/5 mb-12 md:mb-0 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4"
              variants={fadeIn}
            >
              Wish to get in touch?
            </motion.h2>
            <motion.p 
              className="text-gray-500 mb-8 text-sm"
              variants={fadeIn}
            >
              Kindly reach out to us for any enquiries, partnership or more.
            </motion.p>
            <motion.div
              variants={fadeIn}
            >
              <motion.button 
                className="bg-red-500 text-white hover:bg-red-600 font-medium rounded-full px-8 py-3 transition duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Contact us
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right side form with animation */}
          <motion.div 
            className="w-full md:w-3/5 max-w-lg mx-auto md:mx-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={formVariants}
          >
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
              whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit}>
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 transition-all duration-300"
                    placeholder="John Carter"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 transition-all duration-300"
                    placeholder="(123) 456 - 789"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 transition-all duration-300"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 transition-all duration-300"
                    placeholder="Please type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.button
                    type="submit"
                    className="w-full bg-red-500 text-white hover:bg-red-600 font-medium rounded-full px-8 py-3 transition duration-300"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Send message
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;