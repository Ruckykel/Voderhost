import React from 'react';
import { motion } from 'framer-motion';

const HomeHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full bg-white h-screen flex items-center pt-36 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 flex justify-center">
        <motion.div 
          className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text content - centered on mobile, normal on desktop */}
          <motion.div 
            className="w-full md:w-1/2 mb-12 md:mb-0 md:text-left"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight"
              variants={itemVariants}
            >
              We Host. We Build.
            </motion.h1>
            
            <motion.div 
              className="mt-4"
              variants={itemVariants}
            >
              <span className="text-4xl md:text-5xl font-semibold">You </span>
              <span className="text-4xl md:text-5xl font-semibold bg-red-200 px-4 py-1 rounded-md inline-block">
                Launch
              </span>
            </motion.div>
            
            <motion.p 
              className="text-sm text-gray-600 mt-6 mb-6 leading-relaxed max-w-lg md:mx-0 mx-auto"
              variants={itemVariants}
            >
              We build digital solutions that don't just exist — they perform. From
              pixel-perfect websites to rock-solid hosting, we help your product show 
              up and shine.
            </motion.p>
            
            <motion.button 
              className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium rounded-full px-24 py-3 transition duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Project
            </motion.button>
          </motion.div>
          
          {/* Video */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            variants={itemVariants}
          >
            <motion.video 
              className="w-full max-w-xl"
              autoPlay 
              loop 
              muted 
              playsInline
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <source src="/cube-animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;