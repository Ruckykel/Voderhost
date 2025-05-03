import React, { useState } from 'react';

const GetInTouch = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    // You could add a success message or toast notification here
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background icons */}
      <div className="absolute -top-4 -right-4">
        <img src="/VoderhostLogoIso.webp" alt="" className="w-20 h-20 opacity-30" />
      </div>
      
      <div className="absolute -bottom-4 -left-4">
        <img src="/VoderhostLogoIso.webp" alt="" className="w-20 h-20 opacity-30" />
      </div>
      
      {/* Wavy dotted line at the bottom */}
      <div className="absolute bottom-8 left-0 right-0 w-full">
        <svg 
          className="w-full h-24" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60" 
            fill="none"
            stroke="rgba(255, 100, 100, 0.2)"
            strokeWidth="2"
            strokeDasharray="8,8"
          />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side content */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Wish to get in touch?</h2>
            <p className="text-gray-600 mb-8">
              Kindly reach out to us for any enquiries, partnership or more.
            </p>
            <div>
              <button className="bg-red-500 text-white hover:bg-red-600 font-medium rounded-full px-8 py-3 transition duration-300">
                Contact us
              </button>
            </div>
          </div>
          
          {/* Right side form */}
          <div className="w-full md:w-1/2 max-w-lg">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="John Carter"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="(123) 456 - 789"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="Please type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-red-500 text-white hover:bg-red-600 font-medium rounded-full px-8 py-3 transition duration-300"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;