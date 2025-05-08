import React from 'react';
import { motion } from 'framer-motion';

const GetToKnowUs = () => {
  // Animation variants
  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
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
    <section className="w-full pt-16 md:pt-24 pb-20 md:pb-28 relative overflow-hidden">
      {/* Background icons with floating animation */}
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
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text content - comes first on mobile */}
          <motion.div 
            className="w-full md:w-1/2 order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6"
              variants={textItem}
            >
              Get to know us
            </motion.h2>
            
            <div className="text-gray-500 space-y-4 text-sm">
              <motion.p variants={textItem}>
              At VoderHost, we help businesses grow online through custom websites, mobile apps, hosting, and SEO.
              As part of MO Group, we create scalable, user-friendly solutions tailored to your goals.
              With a client-first mindset and years of experience, we build tech that drives innovation,
              engagement, and results — whether you're a startup or an established brand.
              </motion.p>
            </div>
            
            {/* Learn More button */}
            <motion.div 
              className="mt-8"
              variants={textItem}
            >
              <a href="/About">
               <motion.button 
                 className="border border-red-400 text-red-400 hover:bg-red-50 font-medium rounded-full px-8 py-3 transition duration-300"
                 whileHover={{ scale: 1.05, backgroundColor: "rgba(248, 113, 113, 0.1)" }}
                 whileTap={{ scale: 0.95 }}
               >
                 Learn More
               </motion.button>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image container with controlled max size (comes second on mobile) */}
          <motion.div 
            className="w-full md:w-1/2 order-2 md:order-1 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageAnimation}
          >
            <div className="max-w-md lg:max-w-lg xl:max-w-xl">
              <motion.img 
                src="/ImageAndFrame.png" 
                alt="Team meeting" 
                className="w-full h-auto"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetToKnowUs;