import React from 'react'; 
import { motion } from 'framer-motion';  

const RequestAQuote = () => {   
  return (     
    <section className="w-full bg-[#472a2a] py-32 md:py-40 relative overflow-hidden">       
      {/* Decorative elements positioned away from text on mobile */}       
      <motion.div          
        className="absolute top-10 right-5 md:right-10"         
        animate={{           
          rotate: [0, 360],           
          transition: { duration: 40, repeat: Infinity, ease: "linear" }         
        }}       
      >         
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-dashed border-white/40"></div>       
      </motion.div>
              
      <motion.div          
        className="absolute bottom-16 right-5 md:bottom-28 md:right-20"         
        animate={{           
          rotate: [360, 0],           
          transition: { duration: 40, repeat: Infinity, ease: "linear" }         
        }}       
      >         
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-dashed border-white/40"></div>       
      </motion.div>
              
      {/* Additional decorative element */}       
      <motion.div          
        className="absolute top-20 left-0 md:top-24 md:left-20"         
        animate={{           
          rotate: [0, 360],           
          transition: { duration: 50, repeat: Infinity, ease: "linear" }         
        }}       
      >         
        <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-dashed border-white/35"></div>       
      </motion.div>
      
      {/* Extra decorative elements for visual interest */}
      <motion.div          
        className="absolute top-48 right-2 md:top-64 md:right-40"         
        animate={{           
          rotate: [180, 540],           
          transition: { duration: 45, repeat: Infinity, ease: "linear" }         
        }}       
      >         
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-dashed border-white/30"></div>       
      </motion.div>
              
      {/* Wavy dotted line at the bottom with increased brightness */}       
      <div className="absolute bottom-4 left-0 right-0 w-full">         
        <svg            
          className="w-full h-12 md:h-24"            
          viewBox="0 0 1200 120"            
          preserveAspectRatio="none"         
        >           
          <path              
            d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60"              
            fill="none"             
            stroke="rgba(255, 255, 255, 0.4)"             
            strokeWidth="3"             
            strokeDasharray="8,8"           
          />         
        </svg>       
      </div>
              
      <div className="max-w-3xl mx-auto text-center relative z-10 px-6 sm:px-8 md:px-10">         
        <motion.h2            
          className="text-3xl md:text-5xl font-semibold text-white mb-6"           
          initial={{ opacity: 0, y: 20 }}           
          whileInView={{ opacity: 1, y: 0 }}           
          transition={{ duration: 0.7 }}           
          viewport={{ once: true }}         
        >           
          Got a project in mind? Let's build something great together.         
        </motion.h2>
                  
        <motion.p            
          className="text-white/90 text-base mb-10"           
          initial={{ opacity: 0, y: 20 }}           
          whileInView={{ opacity: 1, y: 0 }}           
          transition={{ duration: 0.7, delay: 0.2 }}           
          viewport={{ once: true }}         
        >           
          Share your ideas, and we'll bring them to life with world-class development & hosting solutions.         
        </motion.p>
                  
        <motion.div           
          initial={{ opacity: 0, y: 20 }}           
          whileInView={{ opacity: 1, y: 0 }}           
          transition={{ duration: 0.7, delay: 0.4 }}           
          viewport={{ once: true }}         
        >           
          <motion.a              
            href="/contact"              
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium rounded-full px-14 py-4 transition duration-300"             
            whileHover={{ scale: 1.05 }}             
            whileTap={{ scale: 0.98 }}           
          >             
            Request A Quote           
          </motion.a>         
        </motion.div>       
      </div>     
    </section>   
  ); 
};  

export default RequestAQuote;