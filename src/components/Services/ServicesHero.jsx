import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const logoVariants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 0.1,
    rotate: 0,
    transition: { 
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

const ServicesHero = () => {
  return (
    <section className="w-full bg-white py-24 md:py-32 relative overflow-hidden mt-16">
      {/* Background elements */}
      <motion.div 
        className="absolute top-0 right-0"
        initial="hidden"
        animate="visible"
        variants={logoVariants}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-52 h-52" />
      </motion.div>
      
      {/* Background decoration removed */}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10">
        {/* Main heading and intro text */}
        <motion.div 
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We build digital experiences that work
          </motion.h1>
          <motion.p 
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            From websites and mobile apps to SEO and cloud hosting, we help businesses and personal brands launch, grow, and succeed online—with smart technology and reliable support.
          </motion.p>
        </motion.div>

        {/* Statistics row */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Stat 1 - Mobile: side-by-side, Desktop: stacked */}
          <motion.div 
            className="flex flex-row items-center sm:flex-col sm:items-start"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-baseline"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">99</span>
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500">%</span>
            </motion.div>
            <motion.p 
              className="text-gray-500 ml-4 sm:ml-0 sm:mt-2 text-sm"
              variants={textVariants}
            >
              User satisfaction rate
            </motion.p>
          </motion.div>

          {/* Stat 2 - Mobile: side-by-side, Desktop: stacked */}
          <motion.div 
            className="flex flex-row items-center sm:flex-col sm:items-start"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-baseline"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">100</span>
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500">%</span>
            </motion.div>
            <motion.p 
              className="text-gray-500 ml-4 sm:ml-0 sm:mt-2 text-sm"
              variants={textVariants}
            >
              Scalability
            </motion.p>
          </motion.div>

          {/* Stat 3 - Mobile: side-by-side, Desktop: stacked */}
          <motion.div 
            className="flex flex-row items-center sm:flex-col sm:items-start"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-baseline"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">50</span>
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500">%</span>
            </motion.div>
            <motion.p 
              className="text-gray-500 ml-4 sm:ml-0 sm:mt-2 text-sm"
              variants={textVariants}
            >
              Traffic boost
            </motion.p>
          </motion.div>

          {/* Stat 4 - Mobile: side-by-side, Desktop: stacked */}
          <motion.div 
            className="flex flex-row items-center sm:flex-col sm:items-start"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-baseline"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">99.9</span>
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500">%</span>
            </motion.div>
            <motion.p 
              className="text-gray-500 ml-4 sm:ml-0 sm:mt-2 text-sm"
              variants={textVariants}
            >
              Uptime
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;