import React from 'react';
import { motion } from 'framer-motion';

const PortfolioHero = () => {
  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 0.6,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95
    }
  };

  // Floating animation for decorative elements
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  const rotateAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 60,
      repeat: Infinity,
      ease: "linear"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.6, 0.8, 0.6],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="w-full bg-white py-24 md:py-32 relative overflow-hidden mt-16">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 opacity-10"
        animate={rotateAnimation}
      >
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="120" stroke="#dddddd" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </motion.div>
      
      {/* Red accent circles with muted red color */}
      <motion.div 
        className="absolute top-16 right-20"
        animate={floatAnimation}
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="40" stroke="#E54C4C" strokeWidth="1.5" strokeDasharray="5 5" />
        </svg>
      </motion.div>
      
      {/* Red accent circle - bottom left */}
      <motion.div 
        className="absolute bottom-24 left-10 hidden md:block"
        animate={{
          ...floatAnimation,
          transition: {
            ...floatAnimation.transition,
            delay: 1.5
          }
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="30" stroke="#E54C4C" strokeWidth="1.5" strokeDasharray="5 5" />
        </svg>
      </motion.div>
      
      {/* Small decorative circle - center left */}
      <motion.div 
        className="absolute top-1/2 left-4 hidden md:block"
        animate={pulseAnimation}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="15" fill="#E54C4C15" />
          <circle cx="30" cy="30" r="12" stroke="#E54C4C" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </motion.div>
      
      {/* Extra medium circle - positioned carefully to not obstruct content */}
      <motion.div 
        className="absolute top-2/3 right-1/4 hidden md:block"
        animate={{
          ...floatAnimation,
          transition: {
            ...floatAnimation.transition,
            duration: 7,
            delay: 2
          }
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="25" stroke="#E54C4C" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="40" cy="40" r="18" stroke="#E54C4C" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
      </motion.div>
      
      {/* Filled red dot decoration - varies positions */}
      <motion.div 
        className="absolute top-1/3 right-10 hidden lg:block"
        animate={pulseAnimation}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="6" fill="#E54C4C" />
        </svg>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          {/* Section Header */}
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6"
            variants={contentVariants}
          >
            Projects We've <span className="text-[#E54C4C]">Built</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-500 text-sm mb-8"
            variants={contentVariants}
          >
            Explore the work we've done for businesses, startups, and brands. From custom websites 
            to mobile apps and digital growth strategies, each project is a testament to our expertise
            and commitment to delivering high-quality, tailored solutions. Browse our portfolio to see
            how we bring ideas to life and help brands succeed in the digital world.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div 
            className="mt-4"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <button className="flex items-center space-x-2 bg-[#E54C4C] hover:bg-[#D93F3F] text-white font-medium rounded-full px-6 py-3 transition duration-300">
              <span>Get started</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                animate={{
                  x: [0, 5, 0],
                  transition: { 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }
                }}
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* No bottom decoration - completely removed */}
    </section>
  );
};

export default PortfolioHero;