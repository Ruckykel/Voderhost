// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import PortfolioHero from './PortfolioHero';
import Products from './Products';

const Portfolio = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <PortfolioHero />
      <Products />
      <Footer/>
    </div>
  )
}

export default Portfolio