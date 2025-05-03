import React from 'react';

const Products = () => {
  // Products/projects data
  const products = [
    {
      id: 1,
      name: 'Proptibank',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.',
      image: '/project-proptibank.png',
      tags: ['Web', 'E-commerce']
    },
    {
      id: 2,
      name: 'Mo Group',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.',
      image: '/project-proptibank.png',
      tags: ['Web', 'E-commerce']
    },
    {
      id: 3,
      name: 'Moonlight',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.',
      image: '/project-proptibank.png',
      tags: ['Web', 'E-commerce']
    },
    {
      id: 4,
      name: 'Project Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.',
      image: '/project-proptibank.png',
      tags: ['Web', 'E-commerce']
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-20 right-40 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#dddddd" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>
      
      <div className="absolute -bottom-20 left-40 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#dddddd" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>
      
      {/* Pink/red shape in bottom right */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M300 0V300H0C165.685 300 300 165.685 300 0Z" fill="#ff6b6b" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              {/* Project image */}
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Tags */}
              <div className="px-6 pt-4 pb-2">
                {product.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Content */}
              <div className="px-6 pb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                
                {/* Explore button */}
                <div className="flex items-center">
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-red-500 hover:text-red-600 font-medium"
                  >
                    <span>Explore</span>
                    <div className="w-6 h-6 flex items-center justify-center bg-red-100 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
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

export default Products;