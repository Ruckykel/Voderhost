import React, { useState } from 'react';

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

  // State for current page of projects
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  
  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  // Get current projects to display
  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  // Navigation functions
  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background icons */}
      <div className="absolute -top-4 -right-4">
        <img src="/VoderhostLogoIso.webp" alt="" className="w-20 h-20 opacity-30" />
      </div>
      
      <div className="absolute -bottom-4 -left-4">
        <img src="/VoderhostLogoIso.webp" alt="" className="w-20 h-20 opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header with navigation buttons */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">What we've built</h2>
            <p className="text-gray-600">From startups to enterprises, we create tailored solutions that drive results.</p>
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={goToPreviousPage}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors"
              aria-label="Previous page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={goToNextPage}
              className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
              aria-label="Next page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <div key={project.id} className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100 transition-transform hover:translate-y-[-5px]">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-red-500 hover:text-red-600 font-medium"
                  >
                    <span className="mr-1">View Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeveBuilt;