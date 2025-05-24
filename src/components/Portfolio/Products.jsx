import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  // Added useEffect to handle hash navigation
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash === '#products-section') {
      // Get the element with the ID
      const element = document.getElementById('products-section');
      if (element) {
        // Wait a bit for animations to complete, then scroll
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);

  // Updated products data - only two products with enhanced information
  const products = [
    {
      id: 1,
      name: 'Proptibaank',
      description: 'We partnered with ProptiBaank, a real estate platform revolutionizing property ownership for Nigerians in the diaspora and at home. Our team designed and developed a secure, responsive, and intuitive website that supports fractional property ownership, tokenized real estate, and investment tracking. We also built backend systems for property listings, automated ROI calculations, user onboarding, and CRM integration. The result is a robust platform that makes real estate investment accessible and transparent.',
      image: '/project-proptibank.png',
      projectType: 'Real Estate Investment Platform',
      deliverables: 'Full-stack Web Development, UX/UI Design, CRM Integration, CMS, Tokenized Property Listings',
      url: 'www.proptibaank.com',
      tags: ['Real Estate Investment Platform', 'UX/UI Design', 'Tokenized Property Listings', 'Full-stack Web Development', 'CRM Integration', 'CMS']
    },
    {
      id: 2,
      name: 'MO Group',
      description: 'MO Group is a dynamic ecosystem of companies spanning real estate, transport, media, and technology. We developed a unified website that captures the essence of each subsidiary while presenting a cohesive corporate identity. The site includes detailed service pages, company overviews, and contact funnels, all managed via a flexible CMS. Our solution highlights MO Group\'s innovation and impact, with a modern design optimized for performance across devices.',
      image: '/project-proptibank.png',
      projectType: 'Corporate Multi-Brand Website',
      deliverables: 'Multi-Page Website, Brand Architecture, Navigation Flow, CMS, Mobile Optimization',
      url: 'www.mogroupltd.com',
      tags: ['Multi-Page Website', 'Brand Architecture', 'Navigation Flow', 'CMS', 'Mobile Optimization']
    }
  ];

  return (
    // Added id="products-section" to the section element for hash navigation
    <section id="products-section" className="w-full bg-white pt-16 md:pt-24 pb-28 md:pb-36 relative overflow-hidden">
      {/* Background decorations - keeping your original background elements */}
      <motion.div 
        className="absolute -top-20 right-40 opacity-10"
        animate={{
          rotate: [0, 360],
          transition: {
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#dddddd" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute -bottom-20 left-40 opacity-10"
        animate={{
          rotate: [360, 0],
          transition: {
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#dddddd" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </motion.div>
      
      {/* Pink/red shape in bottom right */}
      <motion.div 
        className="absolute bottom-0 right-0 opacity-15"
        initial={{ opacity: 0, x: 100 }}
        animate={{ 
          opacity: 0.15, 
          x: 0,
          transition: { 
            duration: 1,
            ease: "easeOut"
          }
        }}
      >
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M300 0V300H0C165.685 300 300 165.685 300 0Z" fill="#ff6b6b" />
        </svg>
      </motion.div>

      {/* Additional decorative elements - keeping your original decorations */}
      <motion.div
        className="absolute top-1/3 left-10 opacity-15 hidden md:block"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
          transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="30" stroke="#ff6b6b" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 right-1/3 opacity-10 hidden lg:block"
        animate={{
          y: [0, 10, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="20" stroke="#ff6b6b" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Projects grid - maintaining your grid structure but with only 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  duration: 0.6
                }
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Project image with enhanced overlay */}
              <motion.div 
                className="relative w-full h-64 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ 
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.2 }
                }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                />
                {/* Overlay with project type */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white text-sm font-medium">
                    {product.projectType}
                  </div>
                </div>
              </motion.div>
              
              {/* Tags - maintaining your original tag styling */}
              <div className="px-6 pt-4 pb-2">
                {product.tags.map((tag, index) => (
                  <motion.span 
                    key={index}
                    className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        duration: 0.5, 
                        delay: 0.3 + (index * 0.1) 
                      }
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      backgroundColor: "#fef2f2", 
                      color: "#ef4444",
                      transition: { duration: 0.2 } 
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              
              {/* Enhanced content section */}
              <div className="px-6 pb-6">
                <motion.h3 
                  className="text-xl font-semibold text-gray-800 mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {product.name}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 text-sm mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {product.description}
                </motion.p>
                
                {/* Deliverables section - new */}
                <motion.div
                  className="mb-5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-2">Deliverables</h4>
                  <p className="text-gray-500 text-xs">{product.deliverables}</p>
                </motion.div>
                
                {/* Website link - enhanced from your explore button */}
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      duration: 0.5, 
                      delay: 0.6 
                    }
                  }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={`https://${product.url}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-red-500 hover:text-red-600 font-medium"
                  >
                    <span>Visit Website</span>
                    <motion.div 
                      className="w-6 h-6 flex items-center justify-center bg-red-100 rounded-full"
                      whileHover={{
                        x: [0, 3, 0],
                        transition: { 
                          duration: 0.6, 
                          repeat: Infinity 
                        }
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;