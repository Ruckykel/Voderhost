import React, { useState } from 'react';

const ReachOut = () => {
  // State for tracking selected day
  const [selectedDay, setSelectedDay] = useState(null);
  
  // Days of the week for scheduling
  const scheduleDays = [
    { day: 'Mon', date: 'March 30' },
    { day: 'Tue', date: 'April 1' },
    { day: 'Wed', date: 'April 2' },
    { day: 'Thu', date: 'April 3' },
    { day: 'Fri', date: 'April 4' },
    { day: 'Sat', date: 'April 5' }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Light gray background */}
      <div className="absolute inset-0 bg-gray-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Contact Form Card */}
          <div className="w-full md:w-3/5">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Talk to us—whether you need a quote, project advice, or just a fresh perspective!
              </h2>
              
              <form>
                {/* Name */}
                <div className="mb-5">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your Name*" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                {/* Phone and Email (2 columns) */}
                <div className="flex flex-col sm:flex-row gap-4 mb-5">
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="Your phone number" 
                      className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Company email" 
                      className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                {/* Company Name or Website */}
                <div className="mb-5">
                  <label htmlFor="company" className="block text-gray-700 text-sm font-medium mb-2">Company Name or Website</label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="Company name or website" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                {/* Project Description */}
                <div className="mb-5">
                  <label htmlFor="project" className="block text-gray-700 text-sm font-medium mb-2">Tell us about your project</label>
                  <textarea 
                    id="project" 
                    rows="4" 
                    placeholder="Briefly describe your project" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                {/* Budget Dropdown */}
                <div className="mb-6">
                  <label htmlFor="budget" className="block text-gray-700 text-sm font-medium mb-2">What's your budget?</label>
                  <div className="relative">
                    <select 
                      id="budget" 
                      className="appearance-none w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                      defaultValue=""
                    >
                      <option value="" disabled>Choose your budget</option>
                      <option value="small">Less than $1,000</option>
                      <option value="medium">$1,000 - $5,000</option>
                      <option value="large">$5,000 - $10,000</option>
                      <option value="enterprise">$10,000+</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Schedule Call Section */}
                <div className="mb-8">
                  <label className="block text-gray-700 text-sm font-medium mb-3">Schedule a call with us</label>
                  <div className="flex flex-wrap gap-3">
                    {scheduleDays.map((scheduleDay, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`flex flex-col items-center justify-center w-16 h-16 rounded-full text-sm focus:outline-none transition-colors ${
                          selectedDay === index 
                            ? 'bg-red-500 text-white' 
                            : 'bg-red-100 text-gray-700 hover:bg-red-200'
                        }`}
                        onClick={() => setSelectedDay(index)}
                      >
                        <span className="font-medium">{scheduleDay.day}</span>
                        <span className="text-xs">{scheduleDay.date}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Submit Button */}
                <div>
                  <button 
                    type="submit" 
                    className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-full px-8 py-3 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Right Column - Contact Info */}
          <div className="w-full md:w-2/5">
            <div className="max-w-md mx-auto md:mx-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Reach Out—We'll Handle the Rest.
              </h2>
              
              <p className="text-gray-600 mb-8">
                Have a project in mind? Need a quote or expert advice? Fill out the form, and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-gray-700">contact@voderhost.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-gray-700">(123) 456 - 789</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">7, Maryland, Mende<br />Lagos State</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachOut;