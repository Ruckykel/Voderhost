import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: i * 0.1
      }
    })
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

  const iconHover = {
    initial: { rotate: 0 },
    hover: { 
      rotate: 5,
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="w-full py-20 md:py-28 bg-[#F9FAFB] relative overflow-hidden">
      {/* Background icons with floating animation */}
      <motion.div 
        className="absolute top-4 left-4"
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
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with animation */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.div 
            className="flex items-center mb-2"
            variants={fadeIn}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold text-gray-800"
              variants={fadeIn}
            >
              Why choose us?
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-gray-500 max-w-2xl text-sm"
            variants={fadeIn}
          >
            We consult, engineer, and design technology solutions to address complex business challenges with precision.
          </motion.p>
        </motion.div>
        
        {/* Feature Grid with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <motion.div 
            className="bg-white p-8 rounded-xl border border-gray-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.01, 
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="w-12 h-12 mb-4"
              initial="initial"
              whileHover="hover"
              variants={iconHover}
            >
              <img src="/Fast.png" alt="Speed icon" className="w-full h-full text-red-400" />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Fast, Secure & Scalable Hosting</h3>
            <p className="text-gray-500 text-sm">
              Our hosting services are optimized for speed, uptime, and security—ensuring your site or app runs smoothly no matter how much you grow.
            </p>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            className="bg-white p-8 rounded-xl border border-gray-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.01, 
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="w-12 h-12 mb-4"
              initial="initial"
              whileHover="hover"
              variants={iconHover}
            >
              <img src="/End.png" alt="Solutions icon" className="w-full h-full text-red-400" />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">End-to-End Digital Solutions</h3>
            <p className="text-gray-500 text-sm">
              From websites and mobile apps to hosting and SEO, we provide everything your business needs to build, grow, and scale online—all in one place.
            </p>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div 
            className="bg-white p-8 rounded-xl border border-gray-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.01, 
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="w-12 h-12 mb-4"
              initial="initial"
              whileHover="hover"
              variants={iconHover}
            >
              <img src="/Custom.png" alt="Custom icon" className="w-full h-full text-red-400" />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Custom-Built for Your Needs</h3>
            <p className="text-gray-500 text-sm">
              Our hosting services are optimized for speed, uptime, and security—ensuring your site or app runs smoothly no matter how much you grow.
            </p>
          </motion.div>
          
          {/* Card 4 */}
          <motion.div 
            className="bg-white p-8 rounded-xl border border-gray-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={3}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.01, 
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="w-12 h-12 mb-4"
              initial="initial"
              whileHover="hover"
              variants={iconHover}
            >
              <img src="/Result.png" alt="Results icon" className="w-full h-full text-red-400" />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Results That Drive Growth</h3>
            <p className="text-gray-500 text-sm">
              With a focus on SEO and user experience, we help you increase visibility, attract more users, and drive measurable business results over time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;