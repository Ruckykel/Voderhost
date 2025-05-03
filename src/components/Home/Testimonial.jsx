import React, { useState } from 'react';

const Testimonial = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote: "An amazing service",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc netus nisi laoreet phaselius. Pellentesque non nunc placerat mi quis vitae cursus ornare.",
      name: "John Carter",
      position: "Small business Owner",
      image: "/testimonial-image.png"
    },
    {
      id: 2,
      quote: "Exceeded our expectations",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc netus nisi laoreet phaselius. Pellentesque non nunc placerat mi quis vitae.",
      name: "Sarah Johnson",
      position: "Marketing Director",
      image: "/testimonial-image.png"
    },
    {
      id: 3,
      quote: "Professional and reliable",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc netus nisi laoreet phaselius. Pellentesque non nunc placerat mi quis vitae.",
      name: "Michael Brown",
      position: "CEO, TechStart",
      image: "/testimonial-image.png"
    },
    {
      id: 4,
      quote: "Outstanding results",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc netus nisi laoreet phaselius. Pellentesque non nunc placerat mi quis vitae.",
      name: "Emma Wilson",
      position: "Product Manager",
      image: "/testimonial-image.png"
    }
  ];

  // State for current page
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 2;
  
  // Calculate total pages
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  // Get current testimonials to display
  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  // Navigation functions
  const goToPrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background icons */}
      <div className="absolute -top-4 -right-4">
        <img src="/VoderhostLogoIso.webp" alt="" className="w-20 h-20 opacity-30" />
      </div>
      
      <div className="absolute -bottom-4 -left-4">
        <img src="/VoderhostLogoIso.webp" alt="" className="w-20 h-20 opacity-30" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">What our clients say</h2>
            <p className="text-gray-600 max-w-3xl">
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper dolar elementum tempus hac tellus libero
            </p>
          </div>
          
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button 
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors"
              aria-label="Previous testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
              aria-label="Next testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Two testimonials side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div className="w-full md:w-2/3 md:pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">"{testimonial.quote}"</h3>
                <p className="text-gray-600 mb-6">
                  {testimonial.content}
                </p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;