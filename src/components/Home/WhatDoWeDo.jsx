import React from 'react';
import { motion } from 'framer-motion';

const WhatDoWeDo = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const cardHover = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      scale: 1.01,
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      transition: { duration: 0.3 }
    }
  };

  // Icon floating animation
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
    <section className="w-full bg-[#F9FAFB] py-20 md:py-28 relative overflow-hidden">
      {/* Background icons with floating animation */}
      <motion.div 
        className="absolute top-4 left-5"
        animate="animate"
        variants={{
          animate: {
            y: [0, -8, 0],
            rotate: [0, -3, 0],
            transition: {
              duration: 9,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }
        }}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-10 h-10 opacity-30" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-4 right-4"
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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10">
        {/* Heading and intro with fade-in animation */}
        <motion.div 
          className="mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6"
            variants={fadeIn}
          >
            What do we do?
          </motion.h2>
          <motion.p 
            className="text-gray-500 max-w-3xl text-sm"
            variants={fadeIn}
          >
            VoderHost is a software development company under MO Group, specializing in website development,
            web applications, mobile app development, and SEO optimization for businesses and individuals.
            It provides custom software solutions, helping brands establish a strong digital presence with modern, scalable,
            and user-friendly technology.
          </motion.p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Each item appears on scroll */}
          <div className="w-full md:w-1/2 flex flex-col md:justify-between">
            <div className="flex-1 space-y-6">
              {/* Web Development */}
              <motion.div 
                className="bg-white p-8 rounded-xl border border-gray-300 h-auto md:h-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5 } 
                }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex items-start mb-4">
                  <motion.img 
                    src="/webdev.png" 
                    alt="" 
                    className="w-12 h-12 mr-4"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">Web Development</h3>
                <p className="text-gray-500 text-sm">
                  We build fast, responsive websites and web apps that look great and work smoothly on any device. From landing pages to full platforms, we focus on performance, usability, and clean design that sets you apart.
                </p>
                {/* Adding extra padding in desktop view */}
                <div className="hidden md:block py-3"></div>
              </motion.div>

              {/* Mobile App Development */}
              <motion.div 
                className="bg-white p-8 rounded-xl border border-gray-300 h-auto md:h-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5 } 
                }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex items-start mb-4">
                  <motion.img 
                    src="/mobiledev.png" 
                    alt="" 
                    className="w-12 h-12 mr-4"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">Mobile App Development</h3>
                <p className="text-gray-500 text-sm">
                  Our team develops high-performing mobile apps for both Android and iOS. From basic prototypes to full-scale applications, we utilize dev tools and frameworks to create apps that are easy to use, look great, and function reliably across devices.
                </p>
                {/* Adding more substantial extra padding in desktop view */}
                <div className="hidden md:block py-8"></div>
              </motion.div>
            </div>

            {/* CTA Button positioned at the bottom of left column on desktop */}
            <a href="/Services">
             <div className="mt-8 text-left hidden md:block">
               <motion.button 
                 className="border border-red-500 text-red-500 hover:bg-red-50 font-medium rounded-full px-8 py-3 transition duration-300"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 Find Out More
               </motion.button>
             </div>
            </a>
            
          </div>

          {/* Right Column - Each item appears on scroll */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* SEO and Digital Growth */}
            <motion.div 
              className="bg-white p-8 rounded-xl border border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.5 } 
              }}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-start mb-4">
                <motion.img 
                  src="/seo.png" 
                  alt="" 
                  className="w-12 h-12 mr-4"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">SEO and Digital Growth</h3>
              <p className="text-gray-500 text-sm">
                We improve your site's visibility with SEO strategies, keyword targeting, and technical fixes that drive traffic and boost your online presence.
              </p>
            </motion.div>

            {/* Hosting Solutions */}
            <motion.div 
              className="bg-white p-8 rounded-xl border border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.5 } 
              }}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-start mb-4">
                <motion.img 
                  src="/cloud.png" 
                  alt="" 
                  className="w-12 h-12 mr-4"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Hosting Solutions</h3>
              <p className="text-gray-500 text-sm">
                From shared to cloud hosting, we provide fast, secure options with backups, SSL, and support to keep your site running smoothly.
              </p>
            </motion.div>

            {/* Domain and Security */}
            <motion.div 
              className="bg-white p-8 rounded-xl border border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.5 } 
              }}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-start mb-4">
                <motion.img 
                  src="/security.png" 
                  alt="" 
                  className="w-12 h-12 mr-4"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Domain and Security</h3>
              <p className="text-gray-500 text-sm">
                Easily register domains, manage DNS, and protect your site with SSL certificates and essential security tools.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* CTA Button for mobile only */}
        <motion.div 
          className="mt-8 text-center md:hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5 } 
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.button 
            className="border border-red-500 text-red-500 hover:bg-red-50 font-medium rounded-full px-8 py-3 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Find Out More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatDoWeDo;