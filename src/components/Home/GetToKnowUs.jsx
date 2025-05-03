import React from 'react';

const GetToKnowUs = () => {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Background icons */}
      <div className="absolute -top-4 -right-4">
        <img src="/VoderhostLogoIso.webp" alt="" className="w-20 h-20 opacity-30" />
      </div>
      
      <div className="absolute -bottom-4 -left-4">
        <img src="/VoderhostLogoIso.webp" alt="" className="w-20 h-20 opacity-30" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image (already includes design elements) */}
          <div className="w-full md:w-1/2">
            <img 
              src="/ImageAndFrame.png" 
              alt="Team meeting" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Text content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Get to know us</h2>
            
            <div className="text-gray-600 space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, 
                dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus 
                sem sollicitudin lacus, ut interdum tellus elit sed risus.
              </p>
              <p>
                Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti 
                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
              <p>
                Praesent auctor purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
                fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
                Maecenas eget condimentum velit, sit amet feugiat lectus.
              </p>
            </div>
            
            {/* Learn More button */}
            <div className="mt-8">
              <button className="border border-red-400 text-red-400 hover:bg-red-50 font-medium rounded-full px-8 py-3 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetToKnowUs;