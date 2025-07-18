import React from 'react';
import { motion } from 'framer-motion';

const TeamMembers = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 500,
        damping: 15 
      }
    },
    hover: { 
      scale: 1.15,
      transition: { duration: 0.2 }
    }
  };

  // Team members data array
  const teamMembers = [
    {
      id: 1,
      name: 'Ademola Adetunji',
      title: 'Chief Executive Officer',
      image: '/team-ademola.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Akintayo Oluyinka E.',
      title: 'Full Stack Developer',
      image: '/team-akintayo.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: 'https://www.linkedin.com/in/oluyinka-akintayo-835a17a9'
      }
    },
    {
      id: 3,
      name: 'Adejola Esther',
      title: 'Project Manager',
      image: '/team-adejola.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: 'https://www.linkedin.com/in/esther-adejola-497a621b7/'
      }
    },
    {
      id: 4,
      name: 'Christopher Egbaaibon',
      title: 'Backend / DevOps Engineer',
      image: '/team-christopher.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: 'http://linkedin.com/in/christopher-egbaaibon-02701120a/'
      }
    },
    {
      id: 5,
      name: 'Opeyemi Abiodun',
      title: 'Frontend Developer',
      image: '/team-opeyemi.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: 'https://www.linkedin.com/in/opeyemi-abiodun-aa327920a/'
      }
    },
    {
      id: 6,
      name: 'Adetomiwa Adewunmi',
      title: 'Product Designer',
      image: '/team-adetomiwa.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: 'https://www.linkedin.com/in/goad%C3%A9/'
      }
    },
    {
      id: 7,
      name: 'Nnaji Favour',
      title: 'Frontend Developer',
      image: '/team-nnaji.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 8,
      name: 'Bobade Ayobami',
      title: 'UiUx / Product Designer',
      image: '/team-bobade.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: 'https://www.linkedin.com/in/ayobami-bobade-57678024a?trk=contact-info'
      }
    },
    {
      id: 9,
      name: 'Ovuoba Chiagozie',
      title: 'Backend Developer',
      image: '/team-ovuoba.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: 'https://www.linkedin.com/in/chiagozie-ovuoba-77bb24268'
      }
    },
  ];

  // Social media icon components
  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );

  const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );

  return (
    <section className="w-full bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Background floating icons */}
      
      <motion.div 
        className="absolute bottom-20 right-10"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 8, 0],
          transition: {
            duration: 11,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-10 h-10 opacity-30" />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-12"
        animate={{
          y: [0, 10, 0],
          rotate: [0, 3, 0],
          transition: {
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-8 h-8 opacity-20" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 left-10"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 5, 0],
          transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        <img src="/VoderhostLogoIso.webp" alt="" className="w-10 h-10 opacity-20" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Meet our team members
          </motion.h2>
          <motion.p 
            className="text-gray-500 text-sm max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Get to know the talented individuals behind our success — passionate experts dedicated to bringing your ideas to life.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id} 
              className="flex flex-col items-center"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* Member Image */}
              <motion.div 
                className="rounded-lg overflow-hidden shadow-md mb-8 w-full max-w-xs"
                variants={imageVariants}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-auto object-cover aspect-square"
                />
              </motion.div>
              
              {/* Member Info */}
              <motion.div className='mb-4' variants={textVariants}>
                <h3 className="text-xl font-semibold text-gray-800 text-center">{member.name}</h3>
                <p className="text-gray-500 text-sm mb-3 text-center">{member.title}</p>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                className="flex space-x-3"
                variants={socialVariants}
              >
                <motion.a 
                  href={member.social.facebook} 
                  className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FacebookIcon />
                </motion.a>
                <motion.a 
                  href={member.social.twitter} 
                  className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <TwitterIcon />
                </motion.a>
                <motion.a 
                  href={member.social.instagram} 
                  className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <InstagramIcon />
                </motion.a>
                <motion.a 
                  href={member.social.linkedin} 
                  className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <LinkedInIcon />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamMembers;