import React, { useCallback } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const listItemVariant = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const socialIconVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: { 
      scale: 1.2,
      transition: { duration: 0.2 }
    }
  };

  const headingVariant = {
    hidden: { opacity: 0, width: "0%" },
    visible: { 
      opacity: 1, 
      width: "100%",
      transition: { duration: 0.5 }
    }
  };

  // Smooth scroll function for service section navigation
  const scrollToSection = useCallback((e, sectionId) => {
    e.preventDefault();
    
    // Check if we need to navigate to the services page first
    const currentPath = window.location.pathname;
    const isOnServicesPage = currentPath === '/Services' || currentPath === '/services';
    
    if (!isOnServicesPage) {
      // If not on services page, navigate to it first then scroll
      window.location.href = `/Services#${sectionId}`;
    } else {
      // If already on services page, just scroll to section with animation
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80, // Adjust offset to account for fixed headers
          behavior: 'smooth',
        });
        
        // Add highlight animation to the section
        section.classList.add('section-highlight');
        setTimeout(() => {
          section.classList.remove('section-highlight');
        }, 1500);
      }
    }
  }, []);

  return (
    <footer className="bg-[#1E1E1E] text-white pt-16 md:pt-24 pb-12 md:pb-16 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Desktop Layout - Logo on left, columns on right */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-14 md:pb-8">
          {/* Logo Column */}
          <motion.div 
            className="flex flex-col space-y-4"
            variants={fadeInUp}
          >
            <motion.div 
              className='mb-4'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src="/VoderhostLogo2.webp" alt="Voderhost" className="h-8" />
            </motion.div>
            
            {/* Social Media Icons */}
            <motion.div 
              className="flex space-x-2"
              variants={staggerChildren}
            >
              <motion.a 
                href="https://facebook.com" 
                className="w-8 h-8 bg-[#FFB9B9] rounded-md flex items-center justify-center hover:bg-[#dfa0a0] transition-colors"
                variants={socialIconVariant}
                whileHover="hover"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                className="w-8 h-8 bg-[#FFB9B9] rounded-md flex items-center justify-center hover:bg-[#dfa0a0] transition-colors"
                variants={socialIconVariant}
                whileHover="hover"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                className="w-8 h-8 bg-[#FFB9B9] rounded-md flex items-center justify-center hover:bg-[#dfa0a0] transition-colors"
                variants={socialIconVariant}
                whileHover="hover"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                className="w-8 h-8 bg-[#FFB9B9] rounded-md flex items-center justify-center hover:bg-[#dfa0a0] transition-colors"
                variants={socialIconVariant}
                whileHover="hover"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://youtube.com" 
                className="w-8 h-8 bg-[#FFB9B9] rounded-md flex items-center justify-center hover:bg-[#dfa0a0] transition-colors"
                variants={socialIconVariant}
                whileHover="hover"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Quick Links Column */}
          <motion.div variants={fadeInUp}>
            <motion.div variants={headingVariant}>
              <h3 className="text-red-500 text-lg font-medium mb-4 border-b border-gray-500 pb-2">Quick Links</h3>
            </motion.div>
            <motion.ul 
              className="space-y-4 text-sm"
              variants={staggerChildren}
            >
              <motion.li variants={listItemVariant}><a href="/" className="hover:text-red-500 transition-colors">Home</a></motion.li>
              <motion.li variants={listItemVariant}><a href="/Services" className="hover:text-red-500 transition-colors">Services</a></motion.li>
              <motion.li variants={listItemVariant}><a href="/About" className="hover:text-red-500 transition-colors">About Us</a></motion.li>
              <motion.li variants={listItemVariant}><a href="/Portfolio" className="hover:text-red-500 transition-colors">Portfolio</a></motion.li>
              <motion.li variants={listItemVariant}><a href="/Contact" className="hover:text-red-500 transition-colors">Contact Us</a></motion.li>
            </motion.ul>
          </motion.div>
          
          {/* Services Column */}
          <motion.div variants={fadeInUp}>
            <motion.div variants={headingVariant}>
              <h3 className="text-red-500 text-lg font-medium mb-4 border-b border-gray-500 pb-2">Services</h3>
            </motion.div>
            <motion.ul 
              className="space-y-4 text-sm"
              variants={staggerChildren}
            >
              <motion.li variants={listItemVariant}>
                <a href="/Services#Web&App" onClick={(e) => scrollToSection(e, 'Web&App')} className="hover:text-red-500 transition-colors">
                  Website and Web App Development
                </a>
              </motion.li>
              <motion.li variants={listItemVariant}>
                <a href="/Services#MobileApp" onClick={(e) => scrollToSection(e, 'MobileApp')} className="hover:text-red-500 transition-colors">
                  Mobile app development
                </a>
              </motion.li>
              <motion.li variants={listItemVariant}>
                <a href="/Services#SEO" onClick={(e) => scrollToSection(e, 'SEO')} className="hover:text-red-500 transition-colors">
                  SEO Optimization
                </a>
              </motion.li>
              <motion.li variants={listItemVariant}>
                <a href="/Services#Hosting" onClick={(e) => scrollToSection(e, 'Hosting')} className="hover:text-red-500 transition-colors">
                  Hosting Services
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
          
          {/* Contact Column */}
          <motion.div variants={fadeInUp}>
            <motion.div variants={headingVariant}>
              <h3 className="text-red-500 text-lg font-medium mb-4 border-b border-gray-500 pb-2">Contact</h3>
            </motion.div>
            <motion.ul 
              className="space-y-4 text-sm"
              variants={staggerChildren}
            >
              <motion.li variants={listItemVariant}>
                <a href="mailto:voderhost@gmail.com" className="hover:text-red-500 transition-colors">
                  voderhost@gmail.com
                </a>
              </motion.li>
              <motion.li variants={listItemVariant}>
                <a href="tel:+2347068705597" className="hover:text-red-500 transition-colors">
                  +2347068705597
                </a>
              </motion.li>
              <motion.li variants={listItemVariant}>
                <span className="text-white">
                  Ulmenweg 16, 72076, Tubingen, Germany
                </span>
              </motion.li>
              <motion.li variants={listItemVariant}>
                <a href="/support" className="text-red-500 hover:text-red-400 transition-colors">
                  Chat support
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
        
        {/* Mobile Layout - Stacked columns */}
        <div className="flex flex-col space-y-8 md:hidden">
          {/* Logo and Social Media */}
          <motion.div 
            className="flex flex-col items-start space-y-4 mb-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className='mb-4'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img src="/VoderhostLogo2.webp" alt="Voderhost" className="h-8" />
            </motion.div>
            
            {/* Social Media Icons */}
            <motion.div 
              className="flex space-x-4"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <motion.a 
                href="https://facebook.com" 
                className="w-7 h-7 bg-[#FFB9B9] rounded-md flex items-center justify-center hover:bg-[#dfa0a0] transition-colors"
                variants={socialIconVariant}
                whileHover="hover"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                className="w-7 h-7 bg-[#FFB9B9] rounded-md flex items-center justify-center hover:bg-[#dfa0a0] transition-colors"
                variants={socialIconVariant}
                whileHover="hover" 
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                className="w-7 h-7 bg-[#FFB9B9] rounded-md flex items-center justify-center hover:bg-[#dfa0a0] transition-colors"
                variants={socialIconVariant}
                whileHover="hover"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                className="w-7 h-7 bg-[#FFB9B9] rounded-md flex items-center justify-center hover:bg-[#dfa0a0] transition-colors"
                variants={socialIconVariant}
                whileHover="hover"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://youtube.com" 
                className="w-7 h-7 bg-[#FFB9B9] rounded-md flex items-center justify-center hover:bg-[#dfa0a0] transition-colors"
                variants={socialIconVariant}
                whileHover="hover"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-red-500 text-base font-medium mb-6 border-b border-gray-500 pb-2">Quick Links</h3>
            </motion.div>
            <motion.ul 
              className="space-y-5 text-sm"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <motion.li variants={listItemVariant}><a href="/" className="hover:text-red-500 transition-colors">Home</a></motion.li>
              <motion.li variants={listItemVariant}><a href="/Services" className="hover:text-red-500 transition-colors">Services</a></motion.li>
              <motion.li variants={listItemVariant}><a href="/About" className="hover:text-red-500 transition-colors">About Us</a></motion.li>
              <motion.li variants={listItemVariant}><a href="/Portfolio" className="hover:text-red-500 transition-colors">Portfolio</a></motion.li>
              <motion.li variants={listItemVariant}><a href="/Contact" className="hover:text-red-500 transition-colors">Contact Us</a></motion.li>
            </motion.ul>
          </motion.div>
          
          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-red-500 text-base font-medium mb-6 border-b border-gray-500 pb-2">Services</h3>
            </motion.div>
            <motion.ul 
              className="space-y-5 text-sm"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <motion.li variants={listItemVariant}>
                <a href="/Services#Web&App" onClick={(e) => scrollToSection(e, 'Web&App')} className="hover:text-red-500 transition-colors">
                  Website and Web App Development
                </a>
              </motion.li>
              <motion.li variants={listItemVariant}>
                <a href="/Services#MobileApp" onClick={(e) => scrollToSection(e, 'MobileApp')} className="hover:text-red-500 transition-colors">
                  Mobile app development
                </a>
              </motion.li>
              <motion.li variants={listItemVariant}>
                <a href="/Services#SEO" onClick={(e) => scrollToSection(e, 'SEO')} className="hover:text-red-500 transition-colors">
                  SEO Optimization
                </a>
              </motion.li>
              <motion.li variants={listItemVariant}>
                <a href="/Services#Hosting" onClick={(e) => scrollToSection(e, 'Hosting')} className="hover:text-red-500 transition-colors">
                  Hosting Services
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
          
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-red-500 text-base font-medium mb-6 border-b border-gray-500 pb-2">Contact</h3>
            </motion.div>
            <motion.ul 
              className="space-y-5 text-sm"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <motion.li variants={listItemVariant}>
                <a href="mailto:voderhost@gmail.com" className="hover:text-red-500 transition-colors">
                  voderhost@gmail.com
                </a>
              </motion.li>
              <motion.li variants={listItemVariant}>
                <a href="tel:+2347068705597" className="hover:text-red-500 transition-colors">
                  +2347068705597
                </a>
              </motion.li>
              <motion.li variants={listItemVariant}>
                <span className="text-white">
                  Ulmenweg 16, 72076, Tubingen, Germany
                </span>
              </motion.li>
              <motion.li variants={listItemVariant}>
                <a href="/support" className="text-red-500 hover:text-red-400 transition-colors">
                  Chat support
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
        
        <motion.div 
          className='mt-16'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* Divider - both mobile and desktop */}
          <motion.hr 
            className="border-red-600 my-6" 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          
          {/* Copyright - both mobile and desktop */}
          <motion.div 
            className="text-center text-red-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <p>Copyright © 2025 Vodertech | All Rights Reserved</p>
          </motion.div>
        </motion.div>
        
      </motion.div>
      
      {/* Add this style for section highlighting animation */}
      <style jsx global>{`
        @keyframes section-highlight-animation {
          0% { background-color: rgba(255, 0, 0, 0.1); }
          50% { background-color: rgba(255, 0, 0, 0.2); }
          100% { background-color: transparent; }
        }
        
        .section-highlight {
          animation: section-highlight-animation 1.5s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;