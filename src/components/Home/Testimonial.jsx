import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonial = () => {
  // Updated testimonial data with your real testimonials
  const testimonials = [
    {
      id: 1,
      quote: "Working with the team was a game-changer for us",
      content: "They built a scalable, user-friendly platform that has helped us onboard hundreds of users seamlessly. Their attention to detail and deep understanding of our goals made the entire process smooth and rewarding.",
      name: "Eng Akingbade Ehinmodu",
      position: "Project Manager, ProptiBaank"
    },
    {
      id: 2,
      quote: "We needed a website that could grow with us—and that's exactly what we got",
      content: "From design to deployment, the entire build was done with scalability in mind. The performance, responsiveness, and backend flexibility are top-notch.",
      name: "Tunde Alade",
      position: "Client"
    },
    {
      id: 3,
      quote: "We've hosted our site with them for over a year now, and it's been rock solid",
      content: "Uptime has been great, and their team is always quick to respond to technical requests or sudden needs. Reliable and trustworthy.",
      name: "Ivie Esemuede",
      position: "Client"
    },
    {
      id: 4,
      quote: "From branding to backend, every aspect of our website was handled professionally",
      content: "What impressed us the most was how they listened—to what we needed, what we didn’t know we needed, and what our users wanted. They genuinely care about the products they build.",
      name: "Oluwasegun Dare",
      position: "Client"
    }
  ];

  // State for current page and direction
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  
  // Touch swipe states
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;
  
  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };
  
  // Items per page - 1 for mobile, 2 for larger screens
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 ? 2 : 1;
    }
    return 1; // Default to 1 for SSR
  };
  
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  
  // Update items per page on window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate total pages
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  // Get current testimonials to display
  const getCurrentTestimonials = () => {
    const startIndex = (currentPage * itemsPerPage) % testimonials.length;
    const endIndex = Math.min(startIndex + itemsPerPage, testimonials.length);
    return testimonials.slice(startIndex, endIndex);
  };

  const currentTestimonials = getCurrentTestimonials();

  // Navigation functions
  const goToPrevious = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  
  // Go directly to a specific page
  const goToPage = (page) => {
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  };

  // Sliding animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  // Scroll animations
  const headerVariants = {
    hidden: { 
      opacity: 0,
      y: -50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const triangleVariants = {
    hidden: { 
      opacity: 0,
      x: -100,
      rotate: -90
    },
    visible: { 
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0,
      scale: 0
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8 + (i * 0.1),
        duration: 0.3
      }
    })
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background elements with scroll animation */}
      <motion.div 
        className="absolute top-0 left-0 w-16 h-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={triangleVariants}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L50,0 L0,50 Z" fill="#ef4444" fillOpacity="0.2" />
        </svg>
      </motion.div>
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10">
        {/* Section Header with improved mobile layout */}
        <motion.div 
          className="mb-10 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariants}
        >
          {/* Title with separate row on mobile for better spacing */}
          <div className="mb-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold text-gray-800"
              variants={headerVariants}
            >
              What our clients say
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p 
              className="text-gray-500 max-w-xl text-sm mt-2"
              variants={headerVariants}
            >
              At the heart of everything we build is our commitment to delivering value, innovation, and results.
              But don't just take our word for it—hear directly from the people and companies we've had the privilege to work with.
              Their feedback reflects the impact of our solutions and the trust we've earned through collaboration, transparency, and excellence.
            </motion.p>
          </div>
          
          {/* Navigation arrows in separate row for mobile */}
          <div className="flex justify-end">
            <div className="flex space-x-2">
              <motion.button 
                onClick={goToPrevious}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                variants={buttonVariants}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.button>
              <motion.button 
                onClick={goToNext}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                variants={buttonVariants}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
        
        {/* Testimonials container with touch events for swipe */}
        <motion.div 
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.7,
              delay: 0.6
            }
          }}
          viewport={{ once: true, amount: 0.2 }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div 
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        {/* Navigation dots with staggered scroll animation */}
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToPage(index)}
              aria-label={`Go to page ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentPage ? 'bg-red-500' : 'bg-gray-300'
              }`}
              variants={dotVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Updated TestimonialCard component with contact icon instead of image
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* On mobile: icon on top, text below */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        {/* Contact icon instead of image */}
        <div className="w-16 h-16 mb-4 sm:mb-0 sm:mr-4 flex-shrink-0 flex items-center justify-center bg-red-100 rounded-full">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-red-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
            />
          </svg>
        </div>
        
        {/* Content - Full width on mobile */}
        <div className="w-full sm:flex-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-gray-800 mb-6">"{testimonial.quote}"</h3>
          <p className="text-gray-500 mb-4 text-sm">
            {testimonial.content}
          </p>
          <div>
            <p className="font-semibold text-gray-800">{testimonial.name}</p>
            <p className="text-gray-500 text-sm">{testimonial.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;