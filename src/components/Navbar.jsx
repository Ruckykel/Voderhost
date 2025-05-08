import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Variants for animations
  const navLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      color: "#ef4444", // red-500
      transition: { duration: 0.2 }
    }
  };

  const buttonVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.4, duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#dc2626", // red-600
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1
      }
    }
  };

  const mobileLinkVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  const navLinks = [
    { href: "/Services", text: "Services" },
    { href: "/About", text: "About Us" },
    { href: "/Portfolio", text: "Portfolio" },
    { href: "/Contact", text: "Contact Us" }
  ];

  return (
    <nav className="w-full bg-white shadow-sm py-4 border-t-0 border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        {/* Logo (Left) with subtle animation */}
        <motion.a 
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-shrink-0">
            <motion.img 
              src="/VoderhostLogo.webp" 
              alt="Voderhost" 
              className="h-8" 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.a>

        {/* Desktop Navigation (Center) with staggered animation */}
        <div className="hidden md:flex flex-grow justify-center">
          <div className="flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.a 
                key={link.href}
                href={link.href} 
                className="text-gray-600"
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index}
                variants={navLinkVariants}
              >
                {link.text}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Get Started Button (Right) with animation */}
        <motion.div 
          className="hidden md:block"
          initial="hidden"
          animate="visible"
          variants={buttonVariant}
        >
          <motion.button 
            className="bg-red-500 text-white font-medium rounded-full px-6 py-2"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            variants={buttonVariant}
          >
            Get started
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button with animation */}
        <motion.div 
          className="md:hidden ml-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button 
            className="text-gray-500 hover:text-gray-600 focus:outline-none"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                // X icon when menu is open
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3 }}
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                // Hamburger icon when menu is closed
                <>
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 0 }}
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 6h16" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 12h16" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 18h16" 
                  />
                </>
              )}
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white border-t border-gray-100 mt-2 overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-600 hover:text-red-500 py-2"
                  variants={mobileLinkVariants}
                  custom={index}
                  whileHover={{ x: 5, color: "#ef4444" }}
                >
                  {link.text}
                </motion.a>
              ))}
              <motion.div 
                className="pt-2"
                variants={mobileLinkVariants}
              >
                <motion.button 
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-medium rounded-full px-6 py-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get started
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;