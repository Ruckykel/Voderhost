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

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

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
        opacity: { duration: 0.3 }
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

  // Icon floating animation
  const iconFloat = {
    animate: {
      y: [0, 10, 0],
      rotate: [0, -5, 0],
      transition: {
        duration: 10,
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
    <section className="w-full bg-white pt-16 md:pt-24 pb-20 md:pb-28 relative overflow-hidden">
      {/* Background icons with animation */}
      <motion.div 
        className="absolute bottom-4 left-4"
        animate="animate"
        variants={iconFloat}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-10 h-10 opacity-30" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10">
        {/* Header with navigation buttons */}
        <motion.div 
          className="flex justify-between items-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">What we've built</h2>
            <p className="text-gray-500 text-sm">From startups to enterprises, we create tailored solutions that drive results.</p>
          </div>
          
          <div className="flex space-x-2">
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
          </div>
        </motion.div>

        {/* Projects carousel with touch event handlers */}
        <div 
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative h-[420px]"> {/* Increased height for the new card design */}
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
                    <ProjectCard 
                      key={`${currentPage}-${project.id}`}
                      project={project} 
                      className={`
                        ${visibleProjects.length === 1 ? 'w-full' : ''}
                        ${visibleProjects.length === 2 ? 'w-1/2' : ''}
                        ${visibleProjects.length === 3 ? 'w-1/3' : ''}
                      `}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentPage ? 1 : -1);
                  setCurrentPage(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentPage === index ? 'bg-red-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated ProjectCard component to match the provided design
const ProjectCard = ({ project, className = "" }) => {
  return (
    <motion.div 
      className={`flex-shrink-0 ${className} bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm p-4`}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
        transition: { duration: 0.3 }
      }}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-3 px-2">{project.name}</h3>
      
      {/* Image with rounded corners */}
      <div className="rounded-2xl overflow-hidden mb-3">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-48 object-cover"
        />
      </div>
      
      {/* Description */}
      <p className="text-gray-500 mb-4 text-sm px-2">{project.description}</p>
      
      {/* View Project button */}
      <div className="flex px-2">
        <motion.a 
          href="#" 
          className="inline-flex items-center justify-center text-red-500 hover:text-red-600 border border-red-300 rounded-full px-5 py-2 text-sm font-medium"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="mr-1">View Project</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default WhatWeveBuilt;