// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Navbar';
import HomeHero from './HomeHero';
import WhatDoWeDo from './WhatDoWeDo';
import GetToKnowUs from './GetToKnowUs';
import WhyChooseUs from './WhyChooseUs';
import WhatWeveBuilt from './WhatWeveBuilt';
import RequestAQuote from './RequestAQuote';
import Testimonial from './Testimonial';
import GetInTouch from './GetInTouch';
import Footer from '../Footer';
const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <HomeHero />
      <WhatDoWeDo />
      <GetToKnowUs />
      <WhyChooseUs />
      <WhatWeveBuilt/>
      <RequestAQuote />
      <Testimonial/>
      <GetInTouch/>
      <Footer/>
    </div>
  )
}

export default Home