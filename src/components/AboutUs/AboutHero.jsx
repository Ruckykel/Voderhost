import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full bg-white py-24 md:py-32 relative overflow-hidden mt-16 min-h-[90vh]">
      {/* Background floating icons */}
      <motion.div 
        className="absolute top-12 -right-8"
        animate={{
          y: [0, -12, 0],
          rotate: [0, -5, 0],
          transition: {
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-48 h-48 opacity-10" />
      </motion.div>
      
      
      <motion.div 
        className="absolute top-1/3 left-12"
        animate={{
          y: [0, 10, 0],
          rotate: [0, 3, 0],
          transition: {
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-8 h-8 opacity-20" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10">
        <motion.div 
          className="flex flex-col md:flex-row gap-10 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Column - Text Content */}
          <motion.div 
            className="w-full md:w-1/2"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-3xl md:text-4xl font-semibold mb-6"
              variants={textVariants}
            >
              Who <span className="text-red-500">we are...</span>
            </motion.h1>
            
            <motion.h2 
              className="text-lg font-semibold text-gray-800 mb-4"
              variants={textVariants}
            >
              Hello, we're Volderhost
            </motion.h2>
            
            <motion.div 
              className="text-gray-500 text-sm space-y-4"
              variants={textVariants}
            >
              <p>
                At VoderHost, we help businesses grow online through custom websites, 
                mobile apps, hosting, and SEO. As part of MO Group, we create scalable, 
                user-friendly solutions tailored to your goals. With a client-first mindset
                and years of experience, we build tech that drives innovation, 
                engagement, and results — whether you're a startup or an established 
                brand.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            className="w-full md:w-2/5"
            variants={imageVariants}
          >
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-lg max-w-md mx-auto"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src="/team-image.png" 
                alt="Voderhost team collaborating" 
                className="w-full h-auto object-cover"
                style={{ maxHeight: "400px" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;