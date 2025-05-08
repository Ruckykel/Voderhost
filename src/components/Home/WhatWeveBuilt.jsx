import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatWeveBuilt = () => {
  // Projects data
  const projects = [
    {
      id: 1,
      name: 'Proptibaank',
      image: '/project-image.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.'
    },
    {
      id: 2,
      name: 'Mo Group',
      image: '/project-image.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.'
    },
    {
      id: 3,
      name: 'Moonlight',
      image: '/project-image.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.'
    },
    {
      id: 4,
      name: 'Project Four',
      image: '/project-image2.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.'
    },
    {
      id: 5,
      name: 'Project Five',
      image: '/project-image2.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.'
    },
    {
      id: 6,
      name: 'Project Six',
      image: '/project-image2.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.'
    }
  ];

  // State for current page and animation direction
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  
  // Touch drag state
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Get number of pages based on screen size
  const getPageCount = () => {
    // For small screens: show 1 at a time, so pages = total projects
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      return projects.length;
    }
    // For medium screens: show 2 at a time, so pages = ceil(total/2)
    else if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return Math.ceil(projects.length / 2);
    }
    // For large screens: show 3 at a time, so pages = ceil(total/3)
    else {
      return Math.ceil(projects.length / 3);
    }
  };
  
  const [totalPages, setTotalPages] = useState(getPageCount());
  
  // Update total pages on window resize
  useEffect(() => {
    const handleResize = () => {
      setTotalPages(getPageCount());
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation functions
  const navigatePrevious = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const navigateNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  
  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left, go next
      navigateNext();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right, go previous
      navigatePrevious();
    }
  };

  // ENHANCED: Section entrance animation - more dramatic and noticeable
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
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a more dynamic feel
        when: "beforeChildren", // Wait for section to animate before starting children
        staggerChildren: 0.15 // Stagger all child animations
      }
    }
  };

  // ENHANCED: Header animation with staggered children
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

  // ENHANCED: Carousel variants with improved timing and easing
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

  // ENHANCED: Improved floating animation for background icons
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
    // For small screens - 1 project per view
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      return [projects[currentPage % projects.length]];
    }
    // For medium screens - 2 projects per view
    else if (typeof window !== 'undefined' && window.innerWidth < 768) {
      const startIndex = (currentPage * 2) % projects.length;
      return [
        projects[startIndex],
        projects[(startIndex + 1) % projects.length]
      ].filter(Boolean); // Filter in case we hit the end
    }
    // For large screens - 3 projects per view
    else {
      const startIndex = (currentPage * 3) % projects.length;
      return [
        projects[startIndex],
        projects[(startIndex + 1) % projects.length],
        projects[(startIndex + 2) % projects.length]
      ].filter(Boolean); // Filter in case we hit the end
    }
  };

  const visibleProjects = getVisibleProjects();

  return (
    <motion.section 
      className="w-full bg-white pt-16 md:pt-24 pb-20 md:pb-28 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionEntrance}
    >
      {/* ENHANCED: Multiple animated background elements */}
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
        custom={2} // Delay for staggered animation
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
        {/* ENHANCED: Header with staggered animation for title and subtitle */}
        <motion.div 
          className="flex justify-between items-center mb-12"
          variants={headerContainer}
        >
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
          
          <motion.div 
            className="flex space-x-2"
            variants={headerItem}
          >
            <motion.button 
              onClick={navigatePrevious}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors"
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
              className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
              aria-label="Next page"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ENHANCED: Projects carousel with improved animation transitions */}
        <motion.div 
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          variants={headerItem}
        >
          <div className="relative h-[420px]">
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
                <div className="flex space-x-6">
                  {visibleProjects.map((project, index) => (
                    <motion.div
                      key={`${currentPage}-${project.id}`}
                      className={`
                        ${visibleProjects.length === 1 ? 'w-full' : ''}
                        ${visibleProjects.length === 2 ? 'w-1/2' : ''}
                        ${visibleProjects.length === 3 ? 'w-1/3' : ''}
                      `}
                      variants={{
                        hidden: { opacity: 0, y: 80 },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            duration: 0.6, 
                            delay: index * 0.25, // Staggered landing on initial page load
                            ease: [0.25, 1, 0.5, 1] // Bounce ease
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
          </div>
          
          {/* ENHANCED: Navigation dots with better hover effects */}
          <motion.div 
            className="flex justify-center space-x-3 mt-10"
            variants={headerItem}
          >
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentPage ? 1 : -1);
                  setCurrentPage(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentPage === index ? 'bg-red-500 scale-110' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// ENHANCED: ProjectCard component with internal content animations
const ProjectCard = ({ project, className = "", index = 0 }) => {
  // Content animation for card contents
  const contentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.1 * i, // Sequential delay for each element
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div 
      className={`flex-shrink-0 ${className} bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm p-4`}
      whileHover={{ 
        y: -8,
        boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
        transition: { duration: 0.3 }
      }}
    >
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
      
      {/* View Project button with reveal and hover animation */}
      <motion.div 
        className="flex px-2"
        custom={3}
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <motion.a 
          href="#" 
          className="inline-flex items-center justify-center text-red-500 hover:text-red-600 border border-red-300 rounded-full px-5 py-2 text-sm font-medium group"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "rgba(239, 68, 68, 0.05)" 
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="mr-2 transition-all duration-300 group-hover:mr-3">View Project</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default WhatWeveBuilt;