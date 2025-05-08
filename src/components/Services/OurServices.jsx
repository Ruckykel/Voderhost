import React from 'react';
import { motion } from 'framer-motion';

const OurServices = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7 }
    }
  };

  const textVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  const textVariantRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  return (
    <section className="w-full bg-white pt-16 md:pt-24 pb-28 md:pb-36 relative overflow-hidden">
      {/* Background floating icons */}
      <motion.div 
        className="absolute top-4 left-5"
        animate={{
          y: [0, -8, 0],
          rotate: [0, -3, 0],
          transition: {
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-10 h-10 opacity-30" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-4 right-4"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
          transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-10 h-10 opacity-30" />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-6"
        animate={{
          y: [0, 12, 0],
          rotate: [0, 4, 0],
          transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-8 h-8 opacity-20" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 left-6"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 5, 0],
          transition: {
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-8 h-8 opacity-20" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold"
            variants={fadeIn}
          >
            Our <span className="text-red-500">Services</span>
          </motion.h2>
        </motion.div>

        {/* Services List */}
        <div className="space-y-16">
          {/* Service 1 - Website & Web Application Development */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              className="w-full md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariant}
            >
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img 
                  src="/website-development.png" 
                  alt="Website Development" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariant}
            >
              <motion.h3 
                className="text-xl font-semibold mb-3"
                variants={textVariant}
              >
                <span className="text-gray-400">1.</span> Website & Web Application Development
              </motion.h3>
              <motion.p 
                className="text-gray-500 text-sm mb-4"
                variants={textVariant}
              >
                Deliver a strong web presence through our website hosting and digital solutions to 
                expand your reach and engage effectively with your audience. Our services include 
                designing, creating, and launching websites and applications. We approach our website 
                projects strategically, focusing on your business goals and marketing objectives.
              </motion.p>
            </motion.div>
          </div>

          {/* Service 2 - Mobile App Development */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <motion.div 
              className="w-full md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariant}
            >
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img 
                  src="/mobile-development.png" 
                  alt="Mobile App Development" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariantRight}
            >
              <motion.h3 
                className="text-xl font-semibold mb-3"
                variants={textVariantRight}
              >
                <span className="text-gray-400">2.</span> Mobile App Development
              </motion.h3>
              <motion.p 
                className="text-gray-500 text-sm mb-4"
                variants={textVariantRight}
              >
                Mobile app development is the process of building specialized programs to 
                run on mobile devices like smartphones and tablets. Our team specializes in 
                creating apps that deliver exceptional user experiences while meeting your business 
                objectives and technical requirements.
              </motion.p>
            </motion.div>
          </div>

          {/* Service 3 - Hosting Solutions */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              className="w-full md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariant}
            >
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img 
                  src="/hosting-solutions.png" 
                  alt="Hosting Solutions" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariant}
            >
              <motion.h3 
                className="text-xl font-semibold mb-3"
                variants={textVariant}
              >
                <span className="text-gray-400">3.</span> Hosting Solutions
              </motion.h3>
              <motion.p 
                className="text-gray-500 text-sm mb-4"
                variants={textVariant}
              >
                Hosting is a core service that ensures your website or web application remains 
                accessible, secure, and performs optimally. We offer various hosting options 
                including shared hosting, VPS hosting, and dedicated servers tailored to your 
                specific needs and budget constraints.
              </motion.p>
            </motion.div>
          </div>

          {/* Service 4 - SEO & Digital Growth */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <motion.div 
              className="w-full md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariant}
            >
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img 
                  src="/seo-growth.png" 
                  alt="SEO and Digital Growth" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariantRight}
            >
              <motion.h3 
                className="text-xl font-semibold mb-3"
                variants={textVariantRight}
              >
                <span className="text-gray-400">4.</span> SEO & Digital Growth
              </motion.h3>
              <motion.p 
                className="text-gray-500 text-sm mb-4"
                variants={textVariantRight}
              >
                Search Engine Optimization (SEO) is essential for improving your website's visibility 
                in search results and driving organic traffic. Our comprehensive SEO strategy includes 
                keyword research, on-page optimization, technical SEO improvements, and quality 
                content creation.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;