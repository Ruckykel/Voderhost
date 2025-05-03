// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import ServicesHero from './ServicesHero';
import OurServices from './OurServices';
const Services = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <ServicesHero />
      <OurServices />
      <Footer/>
    </div>
  )
}

export default Services