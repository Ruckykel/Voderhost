/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink for navigation between pages

const WhatWeveBuilt = () => {
  // Updated projects data with only two projects and real descriptions
  const projects = [
    {
      id: 1,
      name: 'ProptiBaank',
      image: '/project-image.png',
      projectType: 'Real Estate Investment Platform',
      description: 'We partnered with ProptiBaank, a real estate platform revolutionizing property ownership for Nigerians in the diaspora and at home. Our team designed and developed a secure, responsive, and intuitive website.',
      deliverables: 'Full-stack Web Development, UX/UI Design, CRM Integration',
      // Changed to pathname and hash for cross-page scrolling
      path: '/portfolio#products-section'
    },
    {
      id: 2,
      name: 'MO Group',
      image: '/project-image.png',
      projectType: 'Corporate Multi-Brand Website',
      description: 'MO Group is a dynamic ecosystem of companies spanning real estate, transport, media, and technology. We developed a unified website that captures the essence of each subsidiary.',
      deliverables: 'Multi-Page Website, Brand Architecture, Navigation Flow',
      // Changed to pathname and hash for cross-page scrolling
      path: '/portfolio#products-section'
    }
  ];

  // State for current page and animation direction
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  
  // Touch drag state
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Get number of pages based on screen size and number of projects
  const getPageCount = () => {
    // For small screens: show 1 at a time, so pages = total projects
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      return projects.length;
    }
    // For medium screens and up: calculate based on projects per page (2)
    else {
      return Math.ceil(projects.length / 2);
    }
  };
  
  const [totalPages, setTotalPages] = useState(getPageCount());
  
  // Update total pages on window resize
  useEffect(() => {
    const handleResize = () => {
      setTotalPages(getPageCount());
      // Reset to first page if current page exceeds new total
      setCurrentPage(prev => Math.min(prev, getPageCount() - 1));
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => window.removeEventListener('resize', handleResize);
  }, [projects.length]);

  // Navigation functions
  const navigatePrevious = () => {
    if (totalPages <= 1) return; // Don't navigate if only one page
    setDirection(-1);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const navigateNext = () => {
    if (totalPages <= 1) return; // Don't navigate if only one page
    setDirection(1);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  
  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    if (totalPages <= 1) return; // Don't handle swipe if only one page
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    if (totalPages <= 1) return; // Don't handle swipe if only one page
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (totalPages <= 1) return; // Don't handle swipe if only one page
    
    if (touchStart - touchEnd > 50) {
      // Swipe left, go next
      navigateNext();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right, go previous
      navigatePrevious();
    }
  };

  // Section entrance animation
  const sectionEntrance = {
    hidden: { 
      opacity: 0,
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };

  // Header animation with staggered children
  const headerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const headerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Carousel variants with improved timing and easing
  const carouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { 
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: { 
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  // Improved floating animation for background icons
  const iconFloat = {
    animate: {
      y: [0, 15, 0],
      rotate: [0, -8, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Get visible projects based on current page and screen size
  const getVisibleProjects = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      // For small screens - 1 project per page
      return [projects[currentPage % projects.length]];
    } else {
      // For medium screens and up - show 2 projects per page
      const startIndex = currentPage * 2;
      return projects.slice(startIndex, startIndex + 2);
    }
  };

  const visibleProjects = getVisibleProjects();

  return (
    <motion.section 
      className="w-full bg-white pt-16 md:pt-24 pb-28 md:pb-32 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionEntrance}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute bottom-4 left-4"
        animate="animate"
        variants={iconFloat}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-10 h-10 opacity-30" />
      </motion.div>
      
      <motion.div 
        className="absolute top-4 right-20"
        animate="animate"
        variants={iconFloat}
        custom={2}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-8 h-8 opacity-20" />
      </motion.div>
      
      <motion.div 
        className="absolute top-40 left-1/4"
        animate="animate"
        variants={{
          animate: {
            y: [0, 10, 0],
            x: [0, 5, 0],
            scale: [1, 0.95, 1],
            transition: {
              duration: 12,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1.5
            }
          }
        }}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-6 h-6 opacity-15" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10">
        {/* Header with staggered animation for title and subtitle */}
        <motion.div 
          className="mb-12"
          variants={headerContainer}
        >
          <div className="flex justify-between items-center">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3"
                variants={headerItem}
              >
                What we've built
              </motion.h2>
              <motion.p 
                className="text-gray-500 text-sm"
                variants={headerItem}
              >
                From startups to enterprises, we create tailored solutions that drive results.
              </motion.p>
            </div>
            
            {/* Navigation controls - only show if there are multiple pages */}
            {totalPages > 1 && (
              <motion.div 
                className="flex space-x-3"
                variants={headerItem}
              >
                <motion.button 
                  onClick={navigatePrevious}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors"
                  aria-label="Previous page"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.button>
                <motion.button 
                  onClick={navigateNext}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                  aria-label="Next page"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Projects carousel with improved animation transitions */}
        <motion.div 
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          variants={headerItem}
        >
          <div className="relative min-h-[480px] sm:min-h-[520px]">
            {totalPages > 1 ? (
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={carouselVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute w-full"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                    {visibleProjects.map((project, index) => (
                      <motion.div
                        key={`${currentPage}-${project.id}`}
                        variants={{
                          hidden: { opacity: 0, y: 80 },
                          visible: { 
                            opacity: 1, 
                            y: 0,
                            transition: { 
                              duration: 0.6, 
                              delay: index * 0.25,
                              ease: [0.25, 1, 0.5, 1]
                            }
                          }
                        }}
                      >
                        <ProjectCard 
                          project={project} 
                          index={index}
                          className="w-full"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              // Static display when there's only one page
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                {visibleProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={{
                      hidden: { opacity: 0, y: 80 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          duration: 0.6, 
                          delay: index * 0.25,
                          ease: [0.25, 1, 0.5, 1]
                        }
                      }
                    }}
                  >
                    <ProjectCard 
                      project={project} 
                      index={index}
                      className="w-full"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          
          {/* Navigation dots - only show if there are multiple pages */}
          {totalPages > 1 && (
            <motion.div 
              className="flex justify-center space-x-4 pt-12 mt-4 clear-both"
              variants={headerItem}
            >
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentPage ? 1 : -1);
                    setCurrentPage(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentPage === index ? 'bg-red-500 scale-110' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

// Enhanced ProjectCard component with React Router Link
const ProjectCard = ({ project, className = "", index = 0 }) => {
  // Content animation for card contents
  const contentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.1 * i,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div 
      className={`flex-shrink-0 ${className} bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm p-4 h-full flex flex-col`}
      whileHover={{ 
        y: -8,
        boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        className="mb-2 px-2"
        custom={0}
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <motion.span 
          className="text-xs font-medium text-red-500 uppercase tracking-wider"
        >
          {project.projectType}
        </motion.span>
      </motion.div>
      
      <motion.h3 
        className="text-lg font-semibold text-gray-800 mb-3 px-2"
        custom={0}
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        {project.name}
      </motion.h3>
      
      {/* Image with reveal animation */}
      <motion.div 
        className="rounded-2xl overflow-hidden mb-3"
        custom={1}
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
        />
      </motion.div>
      
      {/* Description with reveal animation */}
      <motion.p 
        className="text-gray-500 mb-4 text-sm px-2"
        custom={2}
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        {project.description}
      </motion.p>
      
      {/* Deliverables */}
      <motion.div 
        className="mb-4 px-2"
        custom={3}
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Deliverables</h4>
        <p className="text-gray-500 text-xs">{project.deliverables}</p>
      </motion.div>
      
      {/* Spacer */}
      <div className="flex-grow"></div>
      
      {/* Modified: Now using React Router Link instead of anchor or react-scroll */}
      <motion.div 
        className="flex px-2"
        custom={4}
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <RouterLink 
          to={project.path}
          className="inline-flex items-center justify-center text-red-500 hover:text-red-600 border border-red-300 rounded-full px-5 py-2 text-sm font-medium group cursor-pointer"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(239, 68, 68, 0.05)" 
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center"
          >
            <span className="mr-2 transition-all duration-300 group-hover:mr-3">View Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.div>
        </RouterLink>
      </motion.div>
    </motion.div>
  );
};

export default WhatWeveBuilt;