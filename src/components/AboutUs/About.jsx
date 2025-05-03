// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import AboutHero from './AboutHero';
import TeamMembers from './TeamMembers';

const About = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <AboutHero />
      <TeamMembers />
      <Footer/>
    </div>
  )
}

export default About